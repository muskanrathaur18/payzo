import { Router } from 'express';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { query } from '../db/pool.js';
import { generateSign } from '../utils/generateSign.js';
import { authClient } from '../middleware/authClient.js';
import { ipWhitelist } from '../middleware/ipWhitelist.js';

const router = Router();

// ---------------------------------------------------------------
// Helper: fetch current platform fee percent from DB
// ---------------------------------------------------------------
async function getPlatformFeePercent() {
  try {
    const result = await query("SELECT value FROM platform_settings WHERE key='platform_fee_percent'");
    if (result.rowCount > 0) return parseFloat(result.rows[0].value) || 10.0;
  } catch (e) { console.error('Error fetching platform fee:', e); }
  return 10.0; // fallback default
}

// ---------------------------------------------------------------
// POST /api/v1/payment/collection (Pay-In Proxy)
// ---------------------------------------------------------------
router.post('/collection', authClient, ipWhitelist, async (req, res) => {
  const { orderCode, amount, name, email, phone, remark, notifyUrl } = req.body;
  if (!orderCode || !amount || !name || !email || !phone) {
    return res.status(400).json({ success: false, message: 'Missing required parameters: orderCode, amount, name, email, phone.' });
  }

  // Fetch current fee before transaction
  const feePercent = await getPlatformFeePercent();
  const amountNum = parseFloat(amount);
  const feeAmount = parseFloat((amountNum * feePercent / 100).toFixed(2));
  const netAmount = parseFloat((amountNum - feeAmount).toFixed(2));

  let transactionId;
  try {
    const dbResult = await query(
      `INSERT INTO transactions (client_id, type, order_code, amount, platform_fee_amount, net_amount, request_payload, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`,
      [req.client.id, 'collection', orderCode, amountNum, feeAmount, netAmount, JSON.stringify(req.body), 'initiated']
    );
    transactionId = dbResult.rows[0].id;
  } catch (err) {
    console.error('Error inserting transaction:', err);
    return res.status(500).json({ success: false, message: 'Database error while initiating transaction.' });
  }

  const zyqraBaseUrl = process.env.ZYQRAPAY_BASE_URL;
  const merchantLogin = process.env.ZYQRAPAY_MERCHANT_LOGIN;
  const payInKey = process.env.ZYQRAPAY_PAY_IN_KEY;
  const callbackBaseUrl = process.env.CALLBACK_BASE_URL;
  const ourCallbackUrl = `${callbackBaseUrl}/api/v1/payment/callback`;

  const zyqraPayload = { merchantLogin, orderCode, amount: amountNum.toFixed(2), name, email, phone, remark: remark || '', notifyUrl: ourCallbackUrl };
  const signature = generateSign(zyqraPayload, payInKey);
  zyqraPayload.sign = signature;

  try {
    console.log(`Sending collection request to ZyqraPay for order ${orderCode}...`);
    const response = await axios.post(`${zyqraBaseUrl}/payment/collection`, zyqraPayload, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 10000
    });
    const zyqraResponse = response.data;
    const platformOrderCode = zyqraResponse.platformOrderCode || null;
    const status = (zyqraResponse.paymentUrl || zyqraResponse.success) ? 'success' : 'failed';

    await query(
      `UPDATE transactions SET zyqrapay_payload=$1, zyqrapay_response=$2, platform_order_code=$3, status=$4, updated_at=NOW() WHERE id=$5`,
      [JSON.stringify(zyqraPayload), JSON.stringify(zyqraResponse), platformOrderCode, status, transactionId]
    );

    // Credit net amount (after fee) to client wallet
    if (status === 'success') {
      await query(
        'UPDATE clients SET wallet_balance=wallet_balance+$1, updated_at=NOW() WHERE id=$2',
        [netAmount, req.client.id]
      );
      console.log(`Collection success: ₹${amountNum} received. Fee: ₹${feeAmount} (${feePercent}%). Net credited: ₹${netAmount}`);
    }

    return res.json(zyqraResponse);
  } catch (err) {
    console.error('ZyqraPay collection proxy request failed:', err.message);
    const errorResponse = err.response ? err.response.data : { message: err.message };
    await query(
      `UPDATE transactions SET zyqrapay_payload=$1, zyqrapay_response=$2, status=$3, updated_at=NOW() WHERE id=$4`,
      [JSON.stringify(zyqraPayload), JSON.stringify(errorResponse), 'failed', transactionId]
    );
    return res.status(err.response ? err.response.status : 502).json({
      success: false, message: 'Failed to communicate with the payment provider.', details: errorResponse
    });
  }
});

// ---------------------------------------------------------------
// POST /api/v1/payment/payout (Payout Proxy)
// ---------------------------------------------------------------
router.post('/payout', authClient, ipWhitelist, async (req, res) => {
  const { orderCode, amount, method, bankAccountName, bankAccountNumber, bankIfsc, upiId, upiMobileNo, trc20Address, remark, notifyUrl } = req.body;
  if (!orderCode || !amount || !method) {
    return res.status(400).json({ success: false, message: 'Missing required parameters: orderCode, amount, method.' });
  }
  if (method === 'bank' && (!bankAccountName || !bankAccountNumber || !bankIfsc))
    return res.status(400).json({ success: false, message: 'Missing bank account details.' });
  if (method === 'upi' && !upiId && !upiMobileNo)
    return res.status(400).json({ success: false, message: 'Missing UPI details.' });
  if (method === 'usdt' && !trc20Address)
    return res.status(400).json({ success: false, message: 'Missing TRC20 Address.' });

  const payoutAmount = parseFloat(amount);

  try {
    const clientRes = await query('SELECT wallet_balance FROM clients WHERE id=$1', [req.client.id]);
    const walletBalance = parseFloat(clientRes.rows[0].wallet_balance || 0);
    const collectionsRes = await query(
      "SELECT COALESCE(SUM(amount),0) AS total FROM transactions WHERE client_id=$1 AND type='collection' AND status='success'",
      [req.client.id]
    );
    const totalSuccessfulCollections = parseFloat(collectionsRes.rows[0].total);
    if (payoutAmount > walletBalance)
      return res.status(400).json({ success: false, message: `Insufficient balance. Current: ₹${walletBalance.toFixed(2)}` });
    if (payoutAmount > totalSuccessfulCollections)
      return res.status(400).json({ success: false, message: `Payout exceeds total successful collections: ₹${totalSuccessfulCollections.toFixed(2)}` });
    await query('UPDATE clients SET wallet_balance=wallet_balance-$1, updated_at=NOW() WHERE id=$2', [payoutAmount, req.client.id]);
  } catch (err) {
    console.error('Error during wallet validation:', err);
    return res.status(500).json({ success: false, message: 'Database error checking wallet balance.' });
  }

  let transactionId;
  try {
    const dbResult = await query(
      `INSERT INTO transactions (client_id, type, order_code, amount, method, request_payload, status)
       VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id`,
      [req.client.id, 'payout', orderCode, payoutAmount, method, JSON.stringify(req.body), 'initiated']
    );
    transactionId = dbResult.rows[0].id;
  } catch (err) {
    console.error('Error inserting payout transaction:', err);
    await query('UPDATE clients SET wallet_balance=wallet_balance+$1, updated_at=NOW() WHERE id=$2', [payoutAmount, req.client.id]);
    return res.status(500).json({ success: false, message: 'Database error while initiating payout.' });
  }

  const zyqraBaseUrl = process.env.ZYQRAPAY_BASE_URL;
  const merchantLogin = process.env.ZYQRAPAY_MERCHANT_LOGIN;
  const payInKey = process.env.ZYQRAPAY_PAY_IN_KEY;
  const callbackBaseUrl = process.env.CALLBACK_BASE_URL;
  const ourCallbackUrl = `${callbackBaseUrl}/api/v1/payment/callback`;

  const zyqraPayload = { merchantLogin, orderCode, amount: payoutAmount.toFixed(2), method, remark: remark || '', notifyUrl: ourCallbackUrl };
  if (method === 'bank') { zyqraPayload.bankAccountName = bankAccountName; zyqraPayload.bankAccountNumber = bankAccountNumber; zyqraPayload.bankIfsc = bankIfsc; }
  else if (method === 'upi') { if (upiId) zyqraPayload.upiId = upiId; if (upiMobileNo) zyqraPayload.upiMobileNo = upiMobileNo; }
  else if (method === 'usdt') { zyqraPayload.trc20Address = trc20Address; }

  const signature = generateSign(zyqraPayload, payInKey);
  zyqraPayload.sign = signature;

  try {
    console.log(`Sending payout request to ZyqraPay for order ${orderCode}...`);
    const response = await axios.post(`${zyqraBaseUrl}/payment/payout`, zyqraPayload, {
      headers: { 'Content-Type': 'application/json' }, timeout: 10000
    });
    const zyqraResponse = response.data;
    const platformOrderCode = zyqraResponse.platformOrderCode || null;
    const status = zyqraResponse.success ? 'processing' : 'failed';
    await query(
      `UPDATE transactions SET zyqrapay_payload=$1, zyqrapay_response=$2, platform_order_code=$3, status=$4, updated_at=NOW() WHERE id=$5`,
      [JSON.stringify(zyqraPayload), JSON.stringify(zyqraResponse), platformOrderCode, status, transactionId]
    );
    if (status === 'failed') {
      await query('UPDATE clients SET wallet_balance=wallet_balance+$1, updated_at=NOW() WHERE id=$2', [payoutAmount, req.client.id]);
    }
    return res.json(zyqraResponse);
  } catch (err) {
    console.error('ZyqraPay payout proxy request failed:', err.message);
    const errorResponse = err.response ? err.response.data : { message: err.message };
    await query(
      `UPDATE transactions SET zyqrapay_payload=$1, zyqrapay_response=$2, status=$3, updated_at=NOW() WHERE id=$4`,
      [JSON.stringify(zyqraPayload), JSON.stringify(errorResponse), 'failed', transactionId]
    );
    await query('UPDATE clients SET wallet_balance=wallet_balance+$1, updated_at=NOW() WHERE id=$2', [payoutAmount, req.client.id]);
    return res.status(err.response ? err.response.status : 502).json({
      success: false, message: 'Failed to communicate with the payment provider during payout.', details: errorResponse
    });
  }
});

// ---------------------------------------------------------------
// POST /api/v1/payment/callback (Receive ZyqraPay webhook callbacks)
// ---------------------------------------------------------------
router.post('/callback', async (req, res) => {
  const callbackData = req.body;
  console.log('Received payment callback from ZyqraPay:', JSON.stringify(callbackData));

  let platformOrderCode, orderCode, newStatusStr;
  if (callbackData.merchantCode) {
    platformOrderCode = callbackData.orderCode;
    orderCode = callbackData.merchantCode;
    const statusUpper = (callbackData.status || '').toUpperCase();
    newStatusStr = statusUpper === 'SUCCESS' ? 'success' : statusUpper === 'FAILED' ? 'failed' : 'pending';
  } else {
    platformOrderCode = callbackData.platformOrderCode || callbackData.platform_order_code;
    orderCode = callbackData.orderCode;
    const statusUpper = (callbackData.status || '').toUpperCase();
    newStatusStr = (statusUpper === 'COMPLETED' || statusUpper === 'SUCCESS') ? 'success' :
                   (statusUpper === 'REJECTED' || statusUpper === 'FAILED') ? 'failed' : 'pending';
  }

  if (!platformOrderCode && !orderCode) return res.status(400).json({ success: false, message: 'Missing order identifiers.' });

  try {
    const queryStr = `SELECT id, client_id, type, amount, platform_fee_amount, net_amount, status, request_payload
       FROM transactions WHERE (platform_order_code=$1 AND platform_order_code IS NOT NULL) OR (order_code=$2 AND order_code IS NOT NULL)`;
    const txnResult = await query(queryStr, [platformOrderCode, orderCode]);
    if (txnResult.rowCount === 0) {
      console.warn(`Callback for unknown transaction: platformOrderCode=${platformOrderCode}, orderCode=${orderCode}`);
      return res.status(404).json({ success: false, message: 'Transaction not found.' });
    }
    const transaction = txnResult.rows[0];
    const oldStatus = transaction.status;

    await query(
      `UPDATE transactions SET status=$1, callback_data=$2, platform_order_code=COALESCE(platform_order_code,$3), updated_at=NOW() WHERE id=$4`,
      [newStatusStr, JSON.stringify(callbackData), platformOrderCode, transaction.id]
    );

    // Wallet adjustments with fee consideration
    if (transaction.type === 'collection') {
      const creditAmount = parseFloat(transaction.net_amount || transaction.amount);
      if (oldStatus !== 'success' && newStatusStr === 'success') {
        await query('UPDATE clients SET wallet_balance=wallet_balance+$1, updated_at=NOW() WHERE id=$2', [creditAmount, transaction.client_id]);
      } else if (oldStatus === 'success' && newStatusStr !== 'success') {
        await query('UPDATE clients SET wallet_balance=wallet_balance-$1, updated_at=NOW() WHERE id=$2', [creditAmount, transaction.client_id]);
      }
    } else if (transaction.type === 'payout') {
      if (oldStatus === 'failed' && newStatusStr !== 'failed')
        await query('UPDATE clients SET wallet_balance=wallet_balance-$1, updated_at=NOW() WHERE id=$2', [transaction.amount, transaction.client_id]);
      else if (oldStatus !== 'failed' && newStatusStr === 'failed')
        await query('UPDATE clients SET wallet_balance=wallet_balance+$1, updated_at=NOW() WHERE id=$2', [transaction.amount, transaction.client_id]);
    }

    const clientPayload = transaction.request_payload;
    if (clientPayload && clientPayload.notifyUrl) {
      axios.post(clientPayload.notifyUrl, callbackData, { headers: { 'Content-Type': 'application/json' }, timeout: 5000 })
        .catch(err => console.error(`Failed to forward callback to ${clientPayload.notifyUrl}:`, err.message));
    }

    return res.json({ success: true, message: 'Callback processed successfully.' });
  } catch (err) {
    console.error('Error handling payment callback:', err);
    return res.status(500).json({ success: false, message: 'Internal server error processing callback.' });
  }
});

// ---------------------------------------------------------------
// POST /api/v1/payment/status
// ---------------------------------------------------------------
router.post('/status', authClient, ipWhitelist, async (req, res) => {
  const { orderCode } = req.body;
  if (!orderCode) return res.status(400).json({ success: false, message: 'Missing required parameter: orderCode.' });
  const zyqraBaseUrl = process.env.ZYQRAPAY_BASE_URL;
  const merchantLogin = process.env.ZYQRAPAY_MERCHANT_LOGIN;
  const payInKey = process.env.ZYQRAPAY_PAY_IN_KEY;
  const zyqraPayload = { merchantLogin, orderCode };
  const signature = generateSign(zyqraPayload, payInKey);
  zyqraPayload.sign = signature;
  try {
    console.log(`Sending status check to ZyqraPay for order ${orderCode}...`);
    const response = await axios.post(`${zyqraBaseUrl}/payment/status`, zyqraPayload, {
      headers: { 'Content-Type': 'application/json' }, timeout: 10000
    });
    const zyqraResponse = response.data;
    const status = zyqraResponse.status;
    if (status) {
      const newStatusStr = status.toLowerCase();
      const currentTxnRes = await query(
        'SELECT id, type, amount, net_amount, status FROM transactions WHERE client_id=$1 AND order_code=$2',
        [req.client.id, orderCode]
      );
      if (currentTxnRes.rowCount > 0) {
        const txn = currentTxnRes.rows[0];
        const oldStatus = txn.status;
        await query(`UPDATE transactions SET status=$1, updated_at=NOW() WHERE id=$2`, [newStatusStr, txn.id]);
        if (txn.type === 'collection') {
          const creditAmount = parseFloat(txn.net_amount || txn.amount);
          if (oldStatus !== 'success' && newStatusStr === 'success')
            await query('UPDATE clients SET wallet_balance=wallet_balance+$1, updated_at=NOW() WHERE id=$2', [creditAmount, req.client.id]);
          else if (oldStatus === 'success' && newStatusStr !== 'success')
            await query('UPDATE clients SET wallet_balance=wallet_balance-$1, updated_at=NOW() WHERE id=$2', [creditAmount, req.client.id]);
        } else if (txn.type === 'payout') {
          if (oldStatus === 'failed' && newStatusStr !== 'failed')
            await query('UPDATE clients SET wallet_balance=wallet_balance-$1, updated_at=NOW() WHERE id=$2', [txn.amount, req.client.id]);
          else if (oldStatus !== 'failed' && newStatusStr === 'failed')
            await query('UPDATE clients SET wallet_balance=wallet_balance+$1, updated_at=NOW() WHERE id=$2', [txn.amount, req.client.id]);
        }
      }
    }
    return res.json(zyqraResponse);
  } catch (err) {
    console.error('ZyqraPay status check failed:', err.message);
    const errorResponse = err.response ? err.response.data : { message: err.message };
    return res.status(err.response ? err.response.status : 502).json({
      success: false, message: 'Failed to communicate with the payment provider during status check.', details: errorResponse
    });
  }
});

// ---------------------------------------------------------------
// GET /api/v1/payment/balance  — Enhanced with ALL 10 dashboard metrics
// ---------------------------------------------------------------
router.get('/balance', authClient, async (req, res) => {
  try {
    const clientId = req.client.id;

    const [
      clientResult,
      collectionsResult,
      payoutsResult,
      successfulDepositsResult,
      platformFeesResult,
      pendingPayoutsResult,
      totalWithdrawnResult,
      feeSettingResult
    ] = await Promise.all([
      query('SELECT wallet_balance, hold_balance, trc20_address FROM clients WHERE id=$1', [clientId]),
      query("SELECT COALESCE(SUM(amount),0) AS total FROM transactions WHERE client_id=$1 AND type='collection' AND status='success'", [clientId]),
      query("SELECT COALESCE(SUM(amount),0) AS total FROM transactions WHERE client_id=$1 AND type='payout' AND status IN ('success','processing','pending','initiated')", [clientId]),
      query("SELECT COALESCE(SUM(amount),0) AS total FROM transactions WHERE client_id=$1 AND type='collection' AND status='success'", [clientId]),
      query("SELECT COALESCE(SUM(platform_fee_amount),0) AS total FROM transactions WHERE client_id=$1 AND type='collection' AND status='success'", [clientId]),
      query("SELECT COUNT(*) AS count FROM transactions WHERE client_id=$1 AND type='payout' AND status IN ('initiated','pending')", [clientId]),
      query("SELECT COALESCE(SUM(amount),0) AS total FROM transactions WHERE client_id=$1 AND type='payout' AND status='success'", [clientId]),
      query("SELECT value FROM platform_settings WHERE key='platform_fee_percent'")
    ]);

    const walletBalance = parseFloat(clientResult.rows[0]?.wallet_balance || 0);
    const holdBalance   = parseFloat(clientResult.rows[0]?.hold_balance || 0);
    const trc20Address  = clientResult.rows[0]?.trc20_address || '';
    const totalCollections = parseFloat(collectionsResult.rows[0].total);
    const totalPayouts = parseFloat(payoutsResult.rows[0].total);
    const successfulDeposits = parseFloat(successfulDepositsResult.rows[0].total);
    const platformFees = parseFloat(platformFeesResult.rows[0].total);
    const netReceived = parseFloat((successfulDeposits - platformFees).toFixed(2));
    const pendingPayoutsCount = parseInt(pendingPayoutsResult.rows[0].count);
    const totalWithdrawn = parseFloat(totalWithdrawnResult.rows[0].total);
    const platformFeePercent = parseFloat(feeSettingResult.rows[0]?.value || '10.00');

    return res.json({
      success: true,
      // Core balance
      balance: walletBalance,
      holdBalance: holdBalance,
      trc20Address: trc20Address,
      // Deposit metrics
      collections: totalCollections,
      successfulDeposits: successfulDeposits,
      platformFees: platformFees,
      netReceived: netReceived,
      platformFeePercent: platformFeePercent,
      // Payout metrics
      payouts: totalPayouts,
      totalWithdrawn: totalWithdrawn,
      pendingPayoutsCount: pendingPayoutsCount,
      // Gateway payouts (all non-failed payouts)
      gatewayPayouts: totalPayouts
    });
  } catch (err) {
    console.error('Error calculating balance:', err);
    return res.status(500).json({ success: false, message: 'Database error calculating balance.' });
  }
});

// ---------------------------------------------------------------
// GET /api/v1/payment/transactions
// ---------------------------------------------------------------
router.get('/transactions', authClient, async (req, res) => {
  try {
    const result = await query(
      `SELECT id, type, order_code, amount, platform_fee_amount, net_amount,
              method, status, platform_order_code, request_payload, created_at, updated_at
       FROM transactions WHERE client_id=$1 ORDER BY created_at DESC LIMIT 500`,
      [req.client.id]
    );
    return res.json({ success: true, transactions: result.rows });
  } catch (err) {
    console.error('Error listing client transactions:', err);
    return res.status(500).json({ success: false, message: 'Database error fetching transactions.' });
  }
});

// ---------------------------------------------------------------
// GET /api/v1/payment/whitelist
// ---------------------------------------------------------------
router.get('/whitelist', authClient, async (req, res) => {
  try {
    const result = await query(
      'SELECT id, ip_address, created_at FROM ip_whitelist WHERE client_id=$1 ORDER BY created_at DESC',
      [req.client.id]
    );
    return res.json({ success: true, whitelist: result.rows });
  } catch (err) {
    console.error('Error fetching whitelist:', err);
    return res.status(500).json({ success: false, message: 'Database error fetching whitelist.' });
  }
});

// ---------------------------------------------------------------
// POST /api/v1/payment/whitelist
// ---------------------------------------------------------------
router.post('/whitelist', authClient, async (req, res) => {
  const { ipAddress } = req.body;
  if (!ipAddress) return res.status(400).json({ success: false, message: 'ipAddress is required.' });
  try {
    await query('INSERT INTO ip_whitelist (client_id, ip_address) VALUES ($1,$2) ON CONFLICT DO NOTHING', [req.client.id, ipAddress]);
    return res.json({ success: true, message: `IP address "${ipAddress}" added to whitelist.` });
  } catch (err) {
    console.error('Error adding whitelist IP:', err);
    return res.status(500).json({ success: false, message: 'Database error adding IP.' });
  }
});

// ---------------------------------------------------------------
// DELETE /api/v1/payment/whitelist/:ip
// ---------------------------------------------------------------
router.delete('/whitelist/:ip', authClient, async (req, res) => {
  const ipAddress = req.params.ip;
  try {
    await query('DELETE FROM ip_whitelist WHERE client_id=$1 AND ip_address=$2', [req.client.id, ipAddress]);
    return res.json({ success: true, message: `IP address "${ipAddress}" removed.` });
  } catch (err) {
    console.error('Error deleting whitelist IP:', err);
    return res.status(500).json({ success: false, message: 'Database error removing IP.' });
  }
});

// ---------------------------------------------------------------
// PATCH /api/v1/payment/settings/address
// ---------------------------------------------------------------
router.patch('/settings/address', authClient, async (req, res) => {
  const { trc20Address } = req.body;
  if (!trc20Address) {
    return res.status(400).json({ success: false, message: 'TRC20 Address is required.' });
  }
  try {
    await query('UPDATE clients SET trc20_address = $1, updated_at = NOW() WHERE id = $2', [trc20Address, req.client.id]);
    return res.json({ success: true, message: 'Default TRC20 Address saved successfully.' });
  } catch (err) {
    console.error('Error updating TRC20 address:', err);
    return res.status(500).json({ success: false, message: 'Database error saving address.' });
  }
});

// ---------------------------------------------------------------
// POST /api/v1/payment/settings/change-password
// ---------------------------------------------------------------
router.post('/settings/change-password', authClient, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    return res.status(400).json({ success: false, message: 'Both oldPassword and newPassword are required.' });
  }
  try {
    // Retrieve stored login password
    const result = await query('SELECT login_password FROM clients WHERE id = $1', [req.client.id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'Client not found.' });
    }
    const dbHashed = result.rows[0].login_password;

    // Verify old password (handling case where login_password might not be set yet)
    if (dbHashed) {
      const match = await bcrypt.compare(oldPassword, dbHashed);
      if (!match) {
        return res.status(400).json({ success: false, message: 'Old password is incorrect.' });
      }
    } else {
      // Fallback for default prahlad3311 if not set in DB
      if (oldPassword !== 'PayzoPass789') {
        return res.status(400).json({ success: false, message: 'Old password is incorrect.' });
      }
    }

    // Hash and update to new login password
    const hashed = await bcrypt.hash(newPassword, 10);
    await query('UPDATE clients SET login_password = $1, updated_at = NOW() WHERE id = $2', [hashed, req.client.id]);
    return res.json({ success: true, message: 'Password changed successfully.' });
  } catch (err) {
    console.error('Error changing login password:', err);
    return res.status(500).json({ success: false, message: 'Database error changing password.' });
  }
});

// ---------------------------------------------------------------
// POST /api/v1/payment/login
// ---------------------------------------------------------------
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password are required.' });
  }
  try {
    const result = await query(
      'SELECT id, client_name, x_client_id, x_client_password_clear, login_username, login_password, wallet_balance, hold_balance, email, mobile, client_outlet_id, active_services FROM clients WHERE login_username = $1',
      [username]
    );
    if (result.rowCount === 0) {
      return res.status(401).json({ success: false, message: 'Invalid username or password.' });
    }
    const client = result.rows[0];
    const passwordMatch = await bcrypt.compare(password, client.login_password);
    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: 'Invalid username or password.' });
    }
    return res.json({
      success: true,
      partner: {
        username: client.login_username,
        clientId: client.x_client_id,
        clientPassword: client.x_client_password_clear,
        name: client.client_name,
        email: client.email || client.login_username,
        mobile: client.mobile || '',
        walletBalance: parseFloat(client.wallet_balance),
        holdBalance: parseFloat(client.hold_balance),
        clientOutletId: client.client_outlet_id,
        activeServices: client.active_services || ['pay in', 'pay out']
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

export default router;
