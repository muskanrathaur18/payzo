import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { query } from '../db/pool.js';

const router = Router();

// ---------------------------------------------------------------
// Middleware: verify admin key
// ---------------------------------------------------------------
function verifyAdminKey(req, res, next) {
  const adminKey = req.headers['x-admin-key'];
  const expectedKey = process.env.ADMIN_API_KEY || 'payzo_admin_secret_key_9983';
  if (!adminKey || adminKey !== expectedKey) {
    return res.status(403).json({ success: false, message: 'Access Denied: Invalid or missing "x-admin-key" header.' });
  }
  next();
}

// ---------------------------------------------------------------
// POST /api/v1/admin/login  (Dashboard login — NO admin key needed)
// ---------------------------------------------------------------
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'username and password are required.' });
  }
  try {
    const result = await query(
      `SELECT id, client_name, x_client_id, login_username, login_password,
              is_active, wallet_balance, hold_balance, email, mobile, city, state,
              client_outlet_id, active_services
       FROM clients WHERE login_username = $1`,
      [username]
    );
    if (result.rowCount === 0) return res.status(401).json({ success: false, message: 'Invalid username or password.' });
    const client = result.rows[0];
    if (!client.is_active) return res.status(403).json({ success: false, message: 'Account is inactive. Contact admin.' });
    const passwordMatch = await bcrypt.compare(password, client.login_password);
    if (!passwordMatch) return res.status(401).json({ success: false, message: 'Invalid username or password.' });
    return res.json({
      success: true,
      message: 'Login successful.',
      partner: {
        id: client.id, name: client.client_name, username: client.login_username,
        email: client.email, mobile: client.mobile, city: client.city, state: client.state,
        walletBalance: parseFloat(client.wallet_balance || 0),
        holdBalance: parseFloat(client.hold_balance || 0),
        merchantId: client.client_outlet_id || ('m_outlet_' + client.id),
        clientId: client.x_client_id,
        activeServices: client.active_services || ['pay in', 'pay out']
      }
    });
  } catch (err) {
    console.error('Error during partner login:', err);
    return res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

// Apply admin auth to all routes below
router.use(verifyAdminKey);

// ---------------------------------------------------------------
// GET /api/v1/admin/settings  (Get all platform settings)
// ---------------------------------------------------------------
router.get('/settings', async (req, res) => {
  try {
    const result = await query('SELECT key, value, description, updated_at, updated_by FROM platform_settings ORDER BY key');
    const settings = {};
    result.rows.forEach(row => { settings[row.key] = { value: row.value, description: row.description, updated_at: row.updated_at, updated_by: row.updated_by }; });
    return res.json({ success: true, settings });
  } catch (err) {
    console.error('Error fetching settings:', err);
    return res.status(500).json({ success: false, message: 'Database error fetching settings.' });
  }
});

// ---------------------------------------------------------------
// PATCH /api/v1/admin/settings  (Update platform settings)
// ---------------------------------------------------------------
router.patch('/settings', async (req, res) => {
  const { key, value, updatedBy } = req.body;
  if (!key || value === undefined) {
    return res.status(400).json({ success: false, message: 'key and value are required.' });
  }
  // Validate fee percent
  if (key === 'platform_fee_percent') {
    const num = parseFloat(value);
    if (isNaN(num) || num < 0 || num > 100) {
      return res.status(400).json({ success: false, message: 'platform_fee_percent must be between 0 and 100.' });
    }
  }
  try {
    const result = await query(
      `INSERT INTO platform_settings (key, value, updated_at, updated_by)
       VALUES ($1, $2, NOW(), $3)
       ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW(), updated_by = EXCLUDED.updated_by
       RETURNING key, value, updated_at, updated_by`,
      [key, String(value), updatedBy || 'admin']
    );
    return res.json({ success: true, message: `Setting "${key}" updated successfully.`, setting: result.rows[0] });
  } catch (err) {
    console.error('Error updating setting:', err);
    return res.status(500).json({ success: false, message: 'Database error updating setting.' });
  }
});

// ---------------------------------------------------------------
// GET /api/v1/admin/stats  (System-wide aggregated stats)
// ---------------------------------------------------------------
router.get('/stats', async (req, res) => {
  try {
    const [totalDeposits, totalPayouts, totalClients, totalFees, pendingPayouts] = await Promise.all([
      query("SELECT COALESCE(SUM(amount),0) AS total FROM transactions WHERE type='collection' AND status='success'"),
      query("SELECT COALESCE(SUM(amount),0) AS total FROM transactions WHERE type='payout' AND status IN ('success','processing','pending')"),
      query("SELECT COUNT(*) AS total FROM clients WHERE is_active=true"),
      query("SELECT COALESCE(SUM(platform_fee_amount),0) AS total FROM transactions WHERE type='collection' AND status='success'"),
      query("SELECT COUNT(*) AS total FROM transactions WHERE type='payout' AND status IN ('initiated','pending')")
    ]);
    return res.json({
      success: true,
      stats: {
        totalSystemDeposits: parseFloat(totalDeposits.rows[0].total),
        totalSystemPayouts: parseFloat(totalPayouts.rows[0].total),
        totalActiveClients: parseInt(totalClients.rows[0].total),
        totalPlatformFees: parseFloat(totalFees.rows[0].total),
        pendingPayoutsCount: parseInt(pendingPayouts.rows[0].total)
      }
    });
  } catch (err) {
    console.error('Error fetching admin stats:', err);
    return res.status(500).json({ success: false, message: 'Database error.' });
  }
});

// ---------------------------------------------------------------
// POST /api/v1/admin/clients  (Create New Partner — saves ALL profile data)
// ---------------------------------------------------------------
router.post('/clients', async (req, res) => {
  const { clientName, clientPassword, email, mobile, loginUsername, loginPassword,
    gender, dob, city, district, pincode, state, country, settlementType, clientOutletId } = req.body;
  if (!clientName || !clientPassword) return res.status(400).json({ success: false, message: 'clientName and clientPassword are required.' });
  if (!loginUsername || !loginPassword) return res.status(400).json({ success: false, message: 'loginUsername and loginPassword are required.' });
  try {
    const hashedApiPassword = await bcrypt.hash(clientPassword, 10);
    const hashedLoginPassword = await bcrypt.hash(loginPassword, 10);
    const xClientId = uuidv4();
    const outletId = clientOutletId || ('m_outlet_' + Date.now());
    const result = await query(
      `INSERT INTO clients
         (client_name, x_client_id, x_client_password,
          email, mobile, login_username, login_password,
          gender, dob, city, district, pincode, state, country,
          settlement_type, client_outlet_id, wallet_balance, hold_balance,
          active_services, is_active)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,0.00,0.00,
               ARRAY['pay in','pay out'], true)
       RETURNING id, client_name, x_client_id, login_username, client_outlet_id, created_at`,
      [clientName, xClientId, hashedApiPassword, email||null, mobile||null, loginUsername,
       hashedLoginPassword, gender||null, dob||null, city||null, district||null,
       pincode||null, state||null, country||'India', settlementType||'Not set', outletId]
    );
    const newClient = result.rows[0];
    return res.status(201).json({
      success: true,
      message: 'Partner created successfully.',
      client: {
        id: newClient.id, clientName: newClient.client_name,
        loginUsername: newClient.login_username, loginPassword: loginPassword,
        xClientId: newClient.x_client_id, xClientPassword: clientPassword,
        clientOutletId: newClient.client_outlet_id, createdAt: newClient.created_at
      }
    });
  } catch (err) {
    console.error('Error creating partner:', err);
    if (err.code === '23505') return res.status(409).json({ success: false, message: 'Username already exists.' });
    return res.status(500).json({ success: false, message: 'Internal server error during partner creation.' });
  }
});

// ---------------------------------------------------------------
// GET /api/v1/admin/clients  (List all clients)
// ---------------------------------------------------------------
router.get('/clients', async (req, res) => {
  try {
    const result = await query(
      `SELECT id, client_name, login_username, email, mobile, client_outlet_id,
              x_client_id, is_active, wallet_balance, hold_balance,
              active_services, city, state, gender, dob, created_at
       FROM clients ORDER BY created_at DESC`
    );
    return res.json({ success: true, clients: result.rows });
  } catch (err) {
    console.error('Error fetching clients:', err);
    return res.status(500).json({ success: false, message: 'Database query error.' });
  }
});

// ---------------------------------------------------------------
// PATCH /api/v1/admin/clients/:id  (Update Partner Profile)
// ---------------------------------------------------------------
router.patch('/clients/:id', async (req, res) => {
  const clientId = req.params.id;
  const { clientName, email, mobile, city, district, pincode, state, country, settlementType, clientOutletId, loginUsername, loginPassword } = req.body;
  try {
    let updateFields = [];
    let params = [];
    let idx = 1;
    if (clientName)     { updateFields.push(`client_name=$${idx++}`);      params.push(clientName); }
    if (email)          { updateFields.push(`email=$${idx++}`);             params.push(email); }
    if (mobile)         { updateFields.push(`mobile=$${idx++}`);            params.push(mobile); }
    if (city)           { updateFields.push(`city=$${idx++}`);              params.push(city); }
    if (district)       { updateFields.push(`district=$${idx++}`);          params.push(district); }
    if (pincode)        { updateFields.push(`pincode=$${idx++}`);           params.push(pincode); }
    if (state)          { updateFields.push(`state=$${idx++}`);             params.push(state); }
    if (country)        { updateFields.push(`country=$${idx++}`);           params.push(country); }
    if (settlementType) { updateFields.push(`settlement_type=$${idx++}`);   params.push(settlementType); }
    if (clientOutletId) { updateFields.push(`client_outlet_id=$${idx++}`);  params.push(clientOutletId); }
    if (loginUsername)  { updateFields.push(`login_username=$${idx++}`);    params.push(loginUsername); }
    if (loginPassword) {
      const hashed = await bcrypt.hash(loginPassword, 10);
      updateFields.push(`login_password=$${idx++}`);
      params.push(hashed);
    }
    if (updateFields.length === 0) return res.status(400).json({ success: false, message: 'No fields to update.' });
    updateFields.push(`updated_at=NOW()`);
    params.push(clientId);
    const result = await query(`UPDATE clients SET ${updateFields.join(', ')} WHERE id = $${idx} RETURNING id, client_name, login_username`, params);
    if (result.rowCount === 0) return res.status(404).json({ success: false, message: 'Partner not found.' });
    return res.json({ success: true, message: 'Partner updated successfully.', client: result.rows[0] });
  } catch (err) {
    console.error('Error updating partner:', err);
    if (err.code === '23505') {
      return res.status(409).json({ success: false, message: 'Login username already exists.' });
    }
    return res.status(500).json({ success: false, message: 'Database error.' });
  }
});

// ---------------------------------------------------------------
// PATCH /api/v1/admin/clients/:id/status
// ---------------------------------------------------------------
router.patch('/clients/:id/status', async (req, res) => {
  const clientId = req.params.id;
  const { isActive } = req.body;
  try {
    const result = await query(
      'UPDATE clients SET is_active=$1, updated_at=NOW() WHERE id=$2 RETURNING id, client_name, is_active',
      [isActive, clientId]
    );
    if (result.rowCount === 0) return res.status(404).json({ success: false, message: 'Client not found.' });
    return res.json({ success: true, message: 'Client status updated.', client: result.rows[0] });
  } catch (err) {
    console.error('Error updating client status:', err);
    return res.status(500).json({ success: false, message: 'Database error.' });
  }
});

// ---------------------------------------------------------------
// PATCH /api/v1/admin/clients/:id/wallet  (Wallet Adjustment)
// ---------------------------------------------------------------
router.patch('/clients/:id/wallet', async (req, res) => {
  const clientId = req.params.id;
  const { action, walletType, amount } = req.body;
  const amountNum = parseFloat(amount || 0);
  if (isNaN(amountNum) || amountNum <= 0) return res.status(400).json({ success: false, message: 'Valid amount required.' });
  try {
    const col = walletType === 'Hold Wallet' ? 'hold_balance' : 'wallet_balance';
    const op = action === 'Credit' ? '+' : '-';
    const result = await query(
      `UPDATE clients SET ${col} = GREATEST(0, ${col} ${op} $1), updated_at=NOW() WHERE id=$2 RETURNING id, wallet_balance, hold_balance`,
      [amountNum, clientId]
    );
    if (result.rowCount === 0) return res.status(404).json({ success: false, message: 'Client not found.' });
    return res.json({ success: true, message: `Wallet ${action}ed successfully.`, client: result.rows[0] });
  } catch (err) {
    console.error('Error wallet adjustment:', err);
    return res.status(500).json({ success: false, message: 'Database error.' });
  }
});

// ---------------------------------------------------------------
// POST /api/v1/admin/clients/:id/whitelist
// ---------------------------------------------------------------
router.post('/clients/:id/whitelist', async (req, res) => {
  const clientId = req.params.id;
  const { ipAddress } = req.body;
  if (!ipAddress) return res.status(400).json({ success: false, message: 'ipAddress is required.' });
  try {
    const clientCheck = await query('SELECT 1 FROM clients WHERE id=$1', [clientId]);
    if (clientCheck.rowCount === 0) return res.status(404).json({ success: false, message: 'Client not found.' });
    await query('INSERT INTO ip_whitelist (client_id, ip_address) VALUES ($1,$2) ON CONFLICT DO NOTHING', [clientId, ipAddress]);
    return res.json({ success: true, message: `IP "${ipAddress}" added to whitelist.` });
  } catch (err) {
    console.error('Error adding IP whitelist:', err);
    return res.status(500).json({ success: false, message: 'Database error.' });
  }
});

// ---------------------------------------------------------------
// GET /api/v1/admin/transactions
// ---------------------------------------------------------------
router.get('/transactions', async (req, res) => {
  const { clientId, type, status } = req.query;
  let queryText = `SELECT t.*, c.client_name FROM transactions t LEFT JOIN clients c ON t.client_id=c.id WHERE 1=1`;
  const params = [];
  let idx = 1;
  if (clientId) { queryText += ` AND t.client_id=$${idx++}`; params.push(clientId); }
  if (type)     { queryText += ` AND t.type=$${idx++}`;      params.push(type); }
  if (status)   { queryText += ` AND t.status=$${idx++}`;    params.push(status); }
  queryText += ' ORDER BY t.created_at DESC LIMIT 500';
  try {
    const result = await query(queryText, params);
    return res.json({ success: true, transactions: result.rows });
  } catch (err) {
    console.error('Error listing transactions:', err);
    return res.status(500).json({ success: false, message: 'Database query error.' });
  }
});

// ---------------------------------------------------------------
// PATCH /api/v1/admin/transactions/:id/status
// ---------------------------------------------------------------
router.patch('/transactions/:id/status', async (req, res) => {
  const transactionId = req.params.id;
  const { status, platformOrderCode } = req.body;
  try {
    const txRes = await query('SELECT client_id, type, amount, status FROM transactions WHERE id=$1', [transactionId]);
    if (txRes.rowCount === 0) return res.status(404).json({ success: false, message: 'Transaction not found.' });
    const txn = txRes.rows[0];
    const oldStatus = txn.status;
    const newStatusStr = (status || '').toLowerCase();
    const result = await query(
      'UPDATE transactions SET status=$1, platform_order_code=$2 WHERE id=$3 RETURNING *',
      [status, platformOrderCode||null, transactionId]
    );
    if (txn.type === 'collection') {
      if (oldStatus !== 'success' && newStatusStr === 'success')
        await query('UPDATE clients SET wallet_balance=wallet_balance+$1 WHERE id=$2', [txn.amount, txn.client_id]);
      else if (oldStatus === 'success' && newStatusStr !== 'success')
        await query('UPDATE clients SET wallet_balance=wallet_balance-$1 WHERE id=$2', [txn.amount, txn.client_id]);
    } else if (txn.type === 'payout') {
      if (oldStatus === 'failed' && newStatusStr !== 'failed')
        await query('UPDATE clients SET wallet_balance=wallet_balance-$1 WHERE id=$2', [txn.amount, txn.client_id]);
      else if (oldStatus !== 'failed' && newStatusStr === 'failed')
        await query('UPDATE clients SET wallet_balance=wallet_balance+$1 WHERE id=$2', [txn.amount, txn.client_id]);
    }
    return res.json({ success: true, message: `Transaction status updated to ${status}.`, transaction: result.rows[0] });
  } catch (err) {
    console.error('Error updating transaction status:', err);
    return res.status(500).json({ success: false, message: 'Database error.' });
  }
});


// ---------------------------------------------------------------
// CHARGE PROFILES — GET /api/v1/admin/charges/profile/:service
// ---------------------------------------------------------------
router.get('/charges/profile/:service', async (req, res) => {
  const service = req.params.service.toLowerCase().replace(' ', '_');
  try {
    const result = await query(
      'SELECT * FROM charge_profiles WHERE service = $1',
      [service]
    );
    return res.json({ success: true, profile: result.rows[0] || null });
  } catch (err) {
    console.error('Error fetching charge profile:', err);
    return res.status(500).json({ success: false, message: 'Database error.' });
  }
});

// ---------------------------------------------------------------
// CHARGE PROFILES — POST /api/v1/admin/charges/profile  (upsert)
// ---------------------------------------------------------------
router.post('/charges/profile', async (req, res) => {
  const { service, mode, status, rateType, rateValue } = req.body;
  if (!service || !mode) {
    return res.status(400).json({ success: false, message: 'service and mode are required.' });
  }
  const svc = service.toLowerCase().replace(' ', '_');
  try {
    const result = await query(
      `INSERT INTO charge_profiles (service, mode, status, rate_type, rate_value, saved_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, NOW(), NOW())
       ON CONFLICT (service) DO UPDATE
         SET mode = EXCLUDED.mode,
             status = EXCLUDED.status,
             rate_type = EXCLUDED.rate_type,
             rate_value = EXCLUDED.rate_value,
             updated_at = NOW()
       RETURNING *`,
      [svc, mode, status || 'Active', rateType || 'Flat Fee', parseFloat(rateValue) || 0]
    );
    return res.json({ success: true, profile: result.rows[0] });
  } catch (err) {
    console.error('Error saving charge profile:', err);
    return res.status(500).json({ success: false, message: 'Database error.' });
  }
});

// ---------------------------------------------------------------
// CHARGE RANGES — GET /api/v1/admin/charges/ranges/:service
// ---------------------------------------------------------------
router.get('/charges/ranges/:service', async (req, res) => {
  const service = req.params.service.toLowerCase().replace(' ', '_');
  try {
    const result = await query(
      'SELECT * FROM charge_ranges WHERE service = $1 ORDER BY sort_order ASC, id ASC',
      [service]
    );
    return res.json({ success: true, ranges: result.rows });
  } catch (err) {
    console.error('Error fetching charge ranges:', err);
    return res.status(500).json({ success: false, message: 'Database error.' });
  }
});

// ---------------------------------------------------------------
// CHARGE RANGES — POST /api/v1/admin/charges/ranges  (create)
// ---------------------------------------------------------------
router.post('/charges/ranges', async (req, res) => {
  const { service, minAmount, maxAmount, rateType, rateValue, sortOrder, status } = req.body;
  if (!service || !rateType) {
    return res.status(400).json({ success: false, message: 'service and rateType are required.' });
  }
  const svc = service.toLowerCase().replace(' ', '_');
  try {
    const result = await query(
      `INSERT INTO charge_ranges (service, min_amount, max_amount, rate_type, rate_value, sort_order, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [
        svc,
        parseFloat(minAmount) || 0,
        parseFloat(maxAmount) || 0,
        rateType,
        parseFloat(rateValue) || 0,
        parseInt(sortOrder) || 0,
        status || 'Active',
      ]
    );
    return res.status(201).json({ success: true, range: result.rows[0] });
  } catch (err) {
    console.error('Error creating charge range:', err);
    return res.status(500).json({ success: false, message: 'Database error.' });
  }
});

// ---------------------------------------------------------------
// CHARGE RANGES — PATCH /api/v1/admin/charges/ranges/:id  (update)
// ---------------------------------------------------------------
router.patch('/charges/ranges/:id', async (req, res) => {
  const rangeId = req.params.id;
  const { minAmount, maxAmount, rateType, rateValue, sortOrder, status } = req.body;
  try {
    const result = await query(
      `UPDATE charge_ranges
       SET min_amount = $1, max_amount = $2, rate_type = $3, rate_value = $4,
           sort_order = $5, status = $6, updated_at = NOW()
       WHERE id = $7 RETURNING *`,
      [
        parseFloat(minAmount) || 0,
        parseFloat(maxAmount) || 0,
        rateType,
        parseFloat(rateValue) || 0,
        parseInt(sortOrder) || 0,
        status || 'Active',
        rangeId,
      ]
    );
    if (result.rowCount === 0) return res.status(404).json({ success: false, message: 'Range not found.' });
    return res.json({ success: true, range: result.rows[0] });
  } catch (err) {
    console.error('Error updating charge range:', err);
    return res.status(500).json({ success: false, message: 'Database error.' });
  }
});

// ---------------------------------------------------------------
// CHARGE RANGES — DELETE /api/v1/admin/charges/ranges/:id
// ---------------------------------------------------------------
router.delete('/charges/ranges/:id', async (req, res) => {
  const rangeId = req.params.id;
  try {
    const result = await query('DELETE FROM charge_ranges WHERE id = $1 RETURNING id', [rangeId]);
    if (result.rowCount === 0) return res.status(404).json({ success: false, message: 'Range not found.' });
    return res.json({ success: true, message: 'Range deleted.' });
  } catch (err) {
    console.error('Error deleting charge range:', err);
    return res.status(500).json({ success: false, message: 'Database error.' });
  }
});

export default router;

