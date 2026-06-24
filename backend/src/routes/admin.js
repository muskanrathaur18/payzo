import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { query } from '../db/pool.js';

const router = Router();

// Middleware to verify admin key
function verifyAdminKey(req, res, next) {
  const adminKey = req.headers['x-admin-key'];
  const expectedKey = process.env.ADMIN_API_KEY || 'payzo_admin_secret_key_9983';

  if (!adminKey || adminKey !== expectedKey) {
    return res.status(403).json({
      success: false,
      message: 'Access Denied: Invalid or missing "x-admin-key" header.'
    });
  }
  next();
}

// Apply admin auth to all sub-routes
router.use(verifyAdminKey);

// -------------------------------------------------------------
// POST /api/v1/admin/clients (Create New Client)
// -------------------------------------------------------------
router.post('/clients', async (req, res) => {
  const { clientName, clientPassword } = req.body;

  if (!clientName || !clientPassword) {
    return res.status(400).json({
      success: false,
      message: 'Missing required parameters. Required: clientName, clientPassword.'
    });
  }

  try {
    // Generate UUID for client ID
    const xClientId = uuidv4();
    
    // Hash password
    const hashedPassword = await bcrypt.hash(clientPassword, 10);

    // Save client to database
    const result = await query(
      `INSERT INTO clients (client_name, x_client_id, x_client_password) 
       VALUES ($1, $2, $3) RETURNING id, client_name, x_client_id, created_at`,
      [clientName, xClientId, hashedPassword]
    );

    const newClient = result.rows[0];

    return res.status(201).json({
      success: true,
      message: 'Client credentials generated successfully. Copy the x-client-password now, as it cannot be retrieved later in raw form.',
      client: {
        id: newClient.id,
        clientName: newClient.client_name,
        xClientId: newClient.x_client_id,
        xClientPassword: clientPassword, // Send raw back once for copy-paste convenience
        createdAt: newClient.created_at
      }
    });

  } catch (err) {
    console.error('Error creating client:', err);
    return res.status(500).json({
      success: false,
      message: 'Internal server error during client creation.'
    });
  }
});

// -------------------------------------------------------------
// GET /api/v1/admin/clients (List all clients)
// -------------------------------------------------------------
router.get('/clients', async (req, res) => {
  try {
    const result = await query('SELECT id, client_name, x_client_id, is_active, created_at FROM clients ORDER BY created_at DESC');
    return res.json({
      success: true,
      clients: result.rows
    });
  } catch (err) {
    console.error('Error fetching clients:', err);
    return res.status(500).json({ success: false, message: 'Database query error.' });
  }
});

// -------------------------------------------------------------
// POST /api/v1/admin/clients/:id/whitelist (Add IP to whitelist)
// -------------------------------------------------------------
router.post('/clients/:id/whitelist', async (req, res) => {
  const clientId = req.params.id;
  const { ipAddress } = req.body;

  if (!ipAddress) {
    return res.status(400).json({ success: false, message: 'ipAddress is required.' });
  }

  try {
    // Verify client exists
    const clientCheck = await query('SELECT 1 FROM clients WHERE id = $1', [clientId]);
    if (clientCheck.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'Client not found.' });
    }

    await query(
      'INSERT INTO ip_whitelist (client_id, ip_address) VALUES ($1, $2) ON CONFLICT DO NOTHING',
      [clientId, ipAddress]
    );

    return res.json({
      success: true,
      message: `IP address "${ipAddress}" successfully added to whitelist.`
    });
  } catch (err) {
    console.error('Error adding IP whitelist:', err);
    return res.status(500).json({ success: false, message: 'Database error.' });
  }
});

// -------------------------------------------------------------
// GET /api/v1/admin/clients/:id/whitelist (Get whitelisted IPs)
// -------------------------------------------------------------
router.get('/clients/:id/whitelist', async (req, res) => {
  const clientId = req.params.id;

  try {
    const result = await query(
      'SELECT id, ip_address, created_at FROM ip_whitelist WHERE client_id = $1 ORDER BY created_at DESC',
      [clientId]
    );
    return res.json({
      success: true,
      whitelist: result.rows
    });
  } catch (err) {
    console.error('Error listing whitelist IPs:', err);
    return res.status(500).json({ success: false, message: 'Database error.' });
  }
});

// -------------------------------------------------------------
// DELETE /api/v1/admin/clients/:id/whitelist/:ip (Remove IP)
// -------------------------------------------------------------
router.delete('/clients/:id/whitelist/:ip', async (req, res) => {
  const clientId = req.params.id;
  const ipAddress = req.params.ip;

  try {
    await query(
      'DELETE FROM ip_whitelist WHERE client_id = $1 AND ip_address = $2',
      [clientId, ipAddress]
    );
    return res.json({
      success: true,
      message: `IP address "${ipAddress}" removed from whitelist.`
    });
  } catch (err) {
    console.error('Error removing IP whitelist:', err);
    return res.status(500).json({ success: false, message: 'Database error.' });
  }
});

// -------------------------------------------------------------
// GET /api/v1/admin/transactions (Fetch all transactions with filters)
// -------------------------------------------------------------
router.get('/transactions', async (req, res) => {
  const { clientId, type, status } = req.query;

  let queryText = `
    SELECT t.*, c.client_name 
    FROM transactions t
    LEFT JOIN clients c ON t.client_id = c.id
    WHERE 1=1
  `;
  const params = [];
  let paramIndex = 1;

  if (clientId) {
    queryText += ` AND t.client_id = $${paramIndex}`;
    params.push(clientId);
    paramIndex++;
  }

  if (type) {
    queryText += ` AND t.type = $${paramIndex}`;
    params.push(type);
    paramIndex++;
  }

  if (status) {
    queryText += ` AND t.status = $${paramIndex}`;
    params.push(status);
    paramIndex++;
  }

  queryText += ' ORDER BY t.created_at DESC';

  try {
    const result = await query(queryText, params);
    return res.json({
      success: true,
      transactions: result.rows
    });
  } catch (err) {
    console.error('Error listing transactions:', err);
    return res.status(500).json({ success: false, message: 'Database query error.' });
  }
});

// -------------------------------------------------------------
// PATCH /api/v1/admin/clients/:id/status (Toggle Client Active/Inactive)
// -------------------------------------------------------------
router.patch('/clients/:id/status', async (req, res) => {
  const clientId = req.params.id;
  const { isActive } = req.body;

  try {
    const result = await query(
      'UPDATE clients SET is_active = $1 WHERE id = $2 RETURNING id, client_name, is_active',
      [isActive, clientId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'Client not found.' });
    }

    return res.json({
      success: true,
      message: `Client status updated successfully.`,
      client: result.rows[0]
    });
  } catch (err) {
    console.error('Error updating client status:', err);
    return res.status(500).json({ success: false, message: 'Database error updating client status.' });
  }
});

// -------------------------------------------------------------
// PATCH /api/v1/admin/transactions/:id/status (Approve/Reject Payout Transaction)
// -------------------------------------------------------------
router.patch('/transactions/:id/status', async (req, res) => {
  const transactionId = req.params.id;
  const { status, platformOrderCode } = req.body;

  try {
    // 1. Fetch current transaction details
    const txRes = await query('SELECT client_id, type, amount, status FROM transactions WHERE id = $1', [transactionId]);
    if (txRes.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'Transaction not found.' });
    }

    const txn = txRes.rows[0];
    const oldStatus = txn.status;
    const newStatusStr = (status || '').toLowerCase();

    // 2. Perform status and code update
    const result = await query(
      'UPDATE transactions SET status = $1, platform_order_code = $2 WHERE id = $3 RETURNING *',
      [status, platformOrderCode || null, transactionId]
    );

    // 3. Wallet adjustments based on status transitions
    if (txn.type === 'collection') {
      if (oldStatus !== 'success' && newStatusStr === 'success') {
        await query('UPDATE clients SET wallet_balance = wallet_balance + $1 WHERE id = $2', [txn.amount, txn.client_id]);
      } else if (oldStatus === 'success' && newStatusStr !== 'success') {
        await query('UPDATE clients SET wallet_balance = wallet_balance - $1 WHERE id = $2', [txn.amount, txn.client_id]);
      }
    } else if (txn.type === 'payout') {
      if (oldStatus === 'failed' && newStatusStr !== 'failed') {
        await query('UPDATE clients SET wallet_balance = wallet_balance - $1 WHERE id = $2', [txn.amount, txn.client_id]);
      } else if (oldStatus !== 'failed' && newStatusStr === 'failed') {
        await query('UPDATE clients SET wallet_balance = wallet_balance + $1 WHERE id = $2', [txn.amount, txn.client_id]);
      }
    }

    return res.json({
      success: true,
      message: `Transaction status updated to ${status}.`,
      transaction: result.rows[0]
    });
  } catch (err) {
    console.error('Error updating transaction status:', err);
    return res.status(500).json({ success: false, message: 'Database error updating transaction status.' });
  }
});

export default router;
