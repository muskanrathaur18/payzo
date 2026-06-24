import { Router } from 'express';
import axios from 'axios';
import { query } from '../db/pool.js';
import { generateSign } from '../utils/generateSign.js';
import { authClient } from '../middleware/authClient.js';
import { ipWhitelist } from '../middleware/ipWhitelist.js';

const router = Router();

// -------------------------------------------------------------
// POST /api/v1/payment/collection (Pay-In Proxy)
// -------------------------------------------------------------
router.post('/collection', authClient, ipWhitelist, async (req, res) => {
  const { orderCode, amount, name, email, phone, remark, notifyUrl } = req.body;

  // Validation
  if (!orderCode || !amount || !name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: 'Missing required parameters. Required: orderCode, amount, name, email, phone.'
    });
  }

  // Insert initial transaction record
  let transactionId;
  try {
    const dbResult = await query(
      `INSERT INTO transactions (client_id, type, order_code, amount, request_payload, status) 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
      [req.client.id, 'collection', orderCode, amount, JSON.stringify(req.body), 'initiated']
    );
    transactionId = dbResult.rows[0].id;
  } catch (err) {
    console.error('Error inserting transaction:', err);
    return res.status(500).json({ success: false, message: 'Database error while initiating transaction.' });
  }

  // Prepare upstream ZyqraPay request
  const zyqraBaseUrl = process.env.ZYQRAPAY_BASE_URL;
  const merchantLogin = process.env.ZYQRAPAY_MERCHANT_LOGIN;
  const payInKey = process.env.ZYQRAPAY_PAY_IN_KEY;
  const callbackBaseUrl = process.env.CALLBACK_BASE_URL;

  // Build the notify callback URL for our server
  const ourCallbackUrl = `${callbackBaseUrl}/api/v1/payment/callback`;

  const zyqraPayload = {
    merchantLogin,
    orderCode,
    amount: parseFloat(amount).toFixed(2), // Ensure double digit precision for amount if expected
    name,
    email,
    phone,
    remark: remark || '',
    notifyUrl: ourCallbackUrl
  };

  // Generate MD5 signature
  const signature = generateSign(zyqraPayload, payInKey);
  zyqraPayload.sign = signature;

  try {
    console.log(`Sending collection request to ZyqraPay (${zyqraBaseUrl}) for order ${orderCode}...`);
    
    const response = await axios.post(`${zyqraBaseUrl}/payment/collection`, zyqraPayload, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 10000
    });

    const zyqraResponse = response.data;
    const platformOrderCode = zyqraResponse.platformOrderCode || null;
    const status = (zyqraResponse.paymentUrl || zyqraResponse.success) ? 'success' : 'failed';

    // Update transaction logs
    await query(
      `UPDATE transactions 
       SET zyqrapay_payload = $1, zyqrapay_response = $2, platform_order_code = $3, status = $4, updated_at = NOW() 
       WHERE id = $5`,
      [JSON.stringify(zyqraPayload), JSON.stringify(zyqraResponse), platformOrderCode, status, transactionId]
    );

    // Credit client wallet balance on successful pay-in response
    if (status === 'success') {
      await query('UPDATE clients SET wallet_balance = wallet_balance + $1 WHERE id = $2', [amount, req.client.id]);
    }

    // Return the response to the client
    return res.json(zyqraResponse);

  } catch (err) {
    console.error('ZyqraPay collection proxy request failed:', err.message);
    const errorResponse = err.response ? err.response.data : { message: err.message };

    await query(
      `UPDATE transactions 
       SET zyqrapay_payload = $1, zyqrapay_response = $2, status = $3, updated_at = NOW() 
       WHERE id = $4`,
      [JSON.stringify(zyqraPayload), JSON.stringify(errorResponse), 'failed', transactionId]
    );

    return res.status(err.response ? err.response.status : 502).json({
      success: false,
      message: 'Failed to communicate with the payment provider.',
      details: errorResponse
    });
  }
});

// -------------------------------------------------------------
// POST /api/v1/payment/payout (Payout Proxy)
// -------------------------------------------------------------
router.post('/payout', authClient, ipWhitelist, async (req, res) => {
  const {
    orderCode,
    amount,
    method,
    bankAccountName,
    bankAccountNumber,
    bankIfsc,
    upiId,
    upiMobileNo,
    trc20Address,
    remark,
    notifyUrl
  } = req.body;

  // Validation
  if (!orderCode || !amount || !method) {
    return res.status(400).json({
      success: false,
      message: 'Missing required parameters. Required: orderCode, amount, method.'
    });
  }

  // Method specific validation
  if (method === 'bank' && (!bankAccountName || !bankAccountNumber || !bankIfsc)) {
    return res.status(400).json({
      success: false,
      message: 'Missing bank account details for method "bank". Required: bankAccountName, bankAccountNumber, bankIfsc.'
    });
  }
  if (method === 'upi' && !upiId && !upiMobileNo) {
    return res.status(400).json({
      success: false,
      message: 'Missing UPI details for method "upi". Required: upiId or upiMobileNo.'
    });
  }
  if (method === 'usdt' && !trc20Address) {
    return res.status(400).json({
      success: false,
      message: 'Missing TRC20 Address for method "usdt".'
    });
  }

  // 1. Fetch wallet balance & total successful collections (pay-ins)
  try {
    const clientRes = await query('SELECT wallet_balance FROM clients WHERE id = $1', [req.client.id]);
    const walletBalance = parseFloat(clientRes.rows[0].wallet_balance || 0);

    const collectionsRes = await query(
      "SELECT SUM(amount) AS total FROM transactions WHERE client_id = $1 AND type = 'collection' AND status = 'success'",
      [req.client.id]
    );
    const totalSuccessfulCollections = parseFloat(collectionsRes.rows[0].total || 0);

    const payoutAmount = parseFloat(amount);

    if (payoutAmount > walletBalance) {
      return res.status(400).json({
        success: false,
        message: `Insufficient wallet balance. Current balance is ₹${walletBalance.toFixed(2)}`
      });
    }

    if (payoutAmount > totalSuccessfulCollections) {
      return res.status(400).json({
        success: false,
        message: `Payout amount exceeds total successful pay-ins. Total successful collections are ₹${totalSuccessfulCollections.toFixed(2)}`
      });
    }

    // Deduct from wallet balance immediately
    await query('UPDATE clients SET wallet_balance = wallet_balance - $1 WHERE id = $2', [payoutAmount, req.client.id]);
  } catch (err) {
    console.error('Error during wallet validation:', err);
    return res.status(500).json({ success: false, message: 'Database error checking wallet balance.' });
  }

  // Insert initial transaction record
  let transactionId;
  try {
    const dbResult = await query(
      `INSERT INTO transactions (client_id, type, order_code, amount, method, request_payload, status) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`,
      [req.client.id, 'payout', orderCode, amount, method, JSON.stringify(req.body), 'initiated']
    );
    transactionId = dbResult.rows[0].id;
  } catch (err) {
    console.error('Error inserting payout transaction:', err);
    // Refund the deducted amount since transaction creation failed
    await query('UPDATE clients SET wallet_balance = wallet_balance + $1 WHERE id = $2', [amount, req.client.id]);
    return res.status(500).json({ success: false, message: 'Database error while initiating payout.' });
  }

  // Prepare upstream ZyqraPay request
  const zyqraBaseUrl = process.env.ZYQRAPAY_BASE_URL;
  const merchantLogin = process.env.ZYQRAPAY_MERCHANT_LOGIN;
  const payInKey = process.env.ZYQRAPAY_PAY_IN_KEY; // Using same signing key as configured
  const callbackBaseUrl = process.env.CALLBACK_BASE_URL;

  // Build the notify callback URL for our server
  const ourCallbackUrl = `${callbackBaseUrl}/api/v1/payment/callback`;

  // Build payout payload
  const zyqraPayload = {
    merchantLogin,
    orderCode,
    amount: parseFloat(amount).toFixed(2),
    method,
    remark: remark || '',
    notifyUrl: ourCallbackUrl
  };

  // Add method specific properties
  if (method === 'bank') {
    zyqraPayload.bankAccountName = bankAccountName;
    zyqraPayload.bankAccountNumber = bankAccountNumber;
    zyqraPayload.bankIfsc = bankIfsc;
  } else if (method === 'upi') {
    if (upiId) zyqraPayload.upiId = upiId;
    if (upiMobileNo) zyqraPayload.upiMobileNo = upiMobileNo;
  } else if (method === 'usdt') {
    zyqraPayload.trc20Address = trc20Address;
  }

  // Generate MD5 signature
  const signature = generateSign(zyqraPayload, payInKey);
  zyqraPayload.sign = signature;

  try {
    console.log(`Sending payout request to ZyqraPay for order ${orderCode}...`);
    
    const response = await axios.post(`${zyqraBaseUrl}/payment/payout`, zyqraPayload, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 10000
    });

    const zyqraResponse = response.data;
    const platformOrderCode = zyqraResponse.platformOrderCode || null;
    const status = zyqraResponse.success ? 'processing' : 'failed'; // adjust depending on ZyqraPay's payout response fields

    await query(
      `UPDATE transactions 
       SET zyqrapay_payload = $1, zyqrapay_response = $2, platform_order_code = $3, status = $4, updated_at = NOW() 
       WHERE id = $5`,
      [JSON.stringify(zyqraPayload), JSON.stringify(zyqraResponse), platformOrderCode, status, transactionId]
    );

    if (status === 'failed') {
      // Refund wallet balance
      await query('UPDATE clients SET wallet_balance = wallet_balance + $1 WHERE id = $2', [amount, req.client.id]);
    }

    return res.json(zyqraResponse);

  } catch (err) {
    console.error('ZyqraPay payout proxy request failed:', err.message);
    const errorResponse = err.response ? err.response.data : { message: err.message };

    await query(
      `UPDATE transactions 
       SET zyqrapay_payload = $1, zyqrapay_response = $2, status = $3, updated_at = NOW() 
       WHERE id = $4`,
      [JSON.stringify(zyqraPayload), JSON.stringify(errorResponse), 'failed', transactionId]
    );

    // Refund wallet balance
    await query('UPDATE clients SET wallet_balance = wallet_balance + $1 WHERE id = $2', [amount, req.client.id]);

    return res.status(err.response ? err.response.status : 502).json({
      success: false,
      message: 'Failed to communicate with the payment provider during payout.',
      details: errorResponse
    });
  }
});

// -------------------------------------------------------------
// POST /api/v1/payment/callback (Receive ZyqraPay webhook callbacks)
// -------------------------------------------------------------
router.post('/callback', async (req, res) => {
  const callbackData = req.body;
  console.log('Received payment callback from ZyqraPay:', JSON.stringify(callbackData));

  let platformOrderCode;
  let orderCode;
  let newStatusStr;

  // Differentiate Deposit (Collection) vs Payout callbacks
  if (callbackData.merchantCode) {
    // Collection Callback
    platformOrderCode = callbackData.orderCode;
    orderCode = callbackData.merchantCode;
    const statusUpper = (callbackData.status || '').toUpperCase();
    newStatusStr = statusUpper === 'SUCCESS' ? 'success' : statusUpper === 'FAILED' ? 'failed' : 'pending';
  } else {
    // Payout Callback
    platformOrderCode = callbackData.platformOrderCode || callbackData.platform_order_code;
    orderCode = callbackData.orderCode;
    const statusUpper = (callbackData.status || '').toUpperCase();
    newStatusStr = (statusUpper === 'COMPLETED' || statusUpper === 'SUCCESS') ? 'success' : 
                   (statusUpper === 'REJECTED' || statusUpper === 'FAILED') ? 'failed' : 
                   'pending';
  }

  if (!platformOrderCode && !orderCode) {
    return res.status(400).json({ success: false, message: 'Missing order identifiers (orderCode or platformOrderCode).' });
  }

  try {
    // 1. Find transaction in database using either of the identifiers
    const queryStr = `
      SELECT id, client_id, type, amount, status, request_payload 
      FROM transactions 
      WHERE (platform_order_code = $1 AND platform_order_code IS NOT NULL)
         OR (order_code = $2 AND order_code IS NOT NULL)
    `;
    const txnResult = await query(queryStr, [platformOrderCode, orderCode]);

    if (txnResult.rowCount === 0) {
      console.warn(`Callback received for unknown transaction: platformOrderCode=${platformOrderCode}, orderCode=${orderCode}`);
      return res.status(404).json({ success: false, message: 'Transaction not found.' });
    }

    const transaction = txnResult.rows[0];
    const clientPayload = transaction.request_payload;
    const oldStatus = transaction.status;

    // 2. Update status and platform order code in database
    await query(
      `UPDATE transactions 
       SET status = $1, callback_data = $2, platform_order_code = COALESCE(platform_order_code, $3), updated_at = NOW() 
       WHERE id = $4`,
      [newStatusStr, JSON.stringify(callbackData), platformOrderCode, transaction.id]
    );

    // Wallet adjustments based on status transitions
    if (transaction.type === 'collection') {
      if (oldStatus !== 'success' && newStatusStr === 'success') {
        await query('UPDATE clients SET wallet_balance = wallet_balance + $1 WHERE id = $2', [transaction.amount, transaction.client_id]);
      } else if (oldStatus === 'success' && newStatusStr !== 'success') {
        await query('UPDATE clients SET wallet_balance = wallet_balance - $1 WHERE id = $2', [transaction.amount, transaction.client_id]);
      }
    } else if (transaction.type === 'payout') {
      if (oldStatus === 'failed' && newStatusStr !== 'failed') {
        await query('UPDATE clients SET wallet_balance = wallet_balance - $1 WHERE id = $2', [transaction.amount, transaction.client_id]);
      } else if (oldStatus !== 'failed' && newStatusStr === 'failed') {
        await query('UPDATE clients SET wallet_balance = wallet_balance + $1 WHERE id = $2', [transaction.amount, transaction.client_id]);
      }
    }

    // 3. Forward status payload as-is to client notifyUrl if it was supplied originally
    if (clientPayload && clientPayload.notifyUrl) {
      console.log(`Forwarding callback as-is to client notifyUrl: ${clientPayload.notifyUrl}`);
      
      axios.post(clientPayload.notifyUrl, callbackData, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 5000
      }).catch(err => {
        console.error(`Failed to forward callback to client at ${clientPayload.notifyUrl}:`, err.message);
      });
    }

    return res.json({ success: true, message: 'Callback processed successfully.' });

  } catch (err) {
    console.error('Error handling payment callback:', err);
    return res.status(500).json({ success: false, message: 'Internal server error processing callback.' });
  }
});

// -------------------------------------------------------------
// POST /api/v1/payment/status (Payment Status Check Proxy)
// -------------------------------------------------------------
router.post('/status', authClient, ipWhitelist, async (req, res) => {
  const { orderCode } = req.body;

  if (!orderCode) {
    return res.status(400).json({
      success: false,
      message: 'Missing required parameter: orderCode.'
    });
  }

  // Prepare upstream ZyqraPay request
  const zyqraBaseUrl = process.env.ZYQRAPAY_BASE_URL;
  const merchantLogin = process.env.ZYQRAPAY_MERCHANT_LOGIN;
  const payInKey = process.env.ZYQRAPAY_PAY_IN_KEY;

  const zyqraPayload = {
    merchantLogin,
    orderCode
  };

  // Generate MD5 signature (alphabetical sorting automatically done by generateSign)
  const signature = generateSign(zyqraPayload, payInKey);
  zyqraPayload.sign = signature;

  try {
    console.log(`Sending status check request to ZyqraPay for order ${orderCode}...`);
    
    const response = await axios.post(`${zyqraBaseUrl}/payment/status`, zyqraPayload, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 10000
    });

    const zyqraResponse = response.data;
    const status = zyqraResponse.status;

    // Update the transaction status in the local DB if found
    if (status) {
      const newStatusStr = status.toLowerCase();

      // Find current transaction to check old status
      const currentTxnRes = await query(
        'SELECT id, type, amount, status FROM transactions WHERE client_id = $1 AND order_code = $2',
        [req.client.id, orderCode]
      );

      if (currentTxnRes.rowCount > 0) {
        const txn = currentTxnRes.rows[0];
        const oldStatus = txn.status;

        // Perform update
        await query(
          `UPDATE transactions 
           SET status = $1, updated_at = NOW() 
           WHERE id = $2`,
          [newStatusStr, txn.id]
        );

        // Wallet adjustments based on status transitions
        if (txn.type === 'collection') {
          if (oldStatus !== 'success' && newStatusStr === 'success') {
            await query('UPDATE clients SET wallet_balance = wallet_balance + $1 WHERE id = $2', [txn.amount, req.client.id]);
          } else if (oldStatus === 'success' && newStatusStr !== 'success') {
            await query('UPDATE clients SET wallet_balance = wallet_balance - $1 WHERE id = $2', [txn.amount, req.client.id]);
          }
        } else if (txn.type === 'payout') {
          if (oldStatus === 'failed' && newStatusStr !== 'failed') {
            await query('UPDATE clients SET wallet_balance = wallet_balance - $1 WHERE id = $2', [txn.amount, req.client.id]);
          } else if (oldStatus !== 'failed' && newStatusStr === 'failed') {
            await query('UPDATE clients SET wallet_balance = wallet_balance + $1 WHERE id = $2', [txn.amount, req.client.id]);
          }
        }
      }
    }

    return res.json(zyqraResponse);

  } catch (err) {
    console.error('ZyqraPay status check proxy request failed:', err.message);
    const errorResponse = err.response ? err.response.data : { message: err.message };

    return res.status(err.response ? err.response.status : 502).json({
      success: false,
      message: 'Failed to communicate with the payment provider during status check.',
      details: errorResponse
    });
  }
});

// -------------------------------------------------------------
// GET /api/v1/payment/balance (Client Balance)
// -------------------------------------------------------------
router.get('/balance', authClient, async (req, res) => {
  try {
    const clientResult = await query('SELECT wallet_balance FROM clients WHERE id = $1', [req.client.id]);
    const walletBalance = parseFloat(clientResult.rows[0].wallet_balance || 0);

    const collectionsResult = await query(
      "SELECT SUM(amount) as total FROM transactions WHERE client_id = $1 AND type = 'collection' AND status = 'success'",
      [req.client.id]
    );
    const payoutsResult = await query(
      "SELECT SUM(amount) as total FROM transactions WHERE client_id = $1 AND type = 'payout' AND status IN ('success', 'processing', 'pending')",
      [req.client.id]
    );
    
    const totalCollections = parseFloat(collectionsResult.rows[0].total || 0);
    const totalPayouts = parseFloat(payoutsResult.rows[0].total || 0);
    
    return res.json({
      success: true,
      balance: walletBalance,
      collections: totalCollections,
      payouts: totalPayouts
    });
  } catch (err) {
    console.error('Error calculating balance:', err);
    return res.status(500).json({ success: false, message: 'Database error calculating balance.' });
  }
});

// -------------------------------------------------------------
// GET /api/v1/payment/transactions (Client Transactions)
// -------------------------------------------------------------
router.get('/transactions', authClient, async (req, res) => {
  try {
    const result = await query(
      'SELECT id, type, order_code, amount, method, status, created_at FROM transactions WHERE client_id = $1 ORDER BY created_at DESC',
      [req.client.id]
    );
    return res.json({
      success: true,
      transactions: result.rows
    });
  } catch (err) {
    console.error('Error listing client transactions:', err);
    return res.status(500).json({ success: false, message: 'Database error fetching transactions.' });
  }
});

// -------------------------------------------------------------
// GET /api/v1/payment/whitelist (Get Whitelisted IPs)
// -------------------------------------------------------------
router.get('/whitelist', authClient, async (req, res) => {
  try {
    const result = await query(
      'SELECT id, ip_address, created_at FROM ip_whitelist WHERE client_id = $1 ORDER BY created_at DESC',
      [req.client.id]
    );
    return res.json({
      success: true,
      whitelist: result.rows
    });
  } catch (err) {
    console.error('Error fetching whitelist:', err);
    return res.status(500).json({ success: false, message: 'Database error fetching whitelist.' });
  }
});

// -------------------------------------------------------------
// POST /api/v1/payment/whitelist (Add Whitelist IP)
// -------------------------------------------------------------
router.post('/whitelist', authClient, async (req, res) => {
  const { ipAddress } = req.body;
  if (!ipAddress) {
    return res.status(400).json({ success: false, message: 'ipAddress is required.' });
  }
  try {
    await query(
      'INSERT INTO ip_whitelist (client_id, ip_address) VALUES ($1, $2) ON CONFLICT DO NOTHING',
      [req.client.id, ipAddress]
    );
    return res.json({ success: true, message: `IP address "${ipAddress}" added to whitelist.` });
  } catch (err) {
    console.error('Error adding whitelist IP:', err);
    return res.status(500).json({ success: false, message: 'Database error adding IP.' });
  }
});

// -------------------------------------------------------------
// DELETE /api/v1/payment/whitelist/:ip (Delete Whitelist IP)
// -------------------------------------------------------------
router.delete('/whitelist/:ip', authClient, async (req, res) => {
  const ipAddress = req.params.ip;
  try {
    await query(
      'DELETE FROM ip_whitelist WHERE client_id = $1 AND ip_address = $2',
      [req.client.id, ipAddress]
    );
    return res.json({ success: true, message: `IP address "${ipAddress}" removed.` });
  } catch (err) {
    console.error('Error deleting whitelist IP:', err);
    return res.status(500).json({ success: false, message: 'Database error removing IP.' });
  }
});

export default router;
