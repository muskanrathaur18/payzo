import bcrypt from 'bcryptjs';
import { query } from '../db/pool.js';

export async function authClient(req, res, next) {
  const clientId = req.headers['x-client-id'];
  const clientPassword = req.headers['x-client-password'];

  if (!clientId || !clientPassword) {
    return res.status(401).json({
      success: false,
      message: 'Access Denied: Missing "x-client-id" or "x-client-password" headers.'
    });
  }

  try {
    // Query client from DB
    const result = await query(
      'SELECT id, client_name, x_client_id, x_client_password, is_active FROM clients WHERE x_client_id = $1',
      [clientId]
    );

    if (result.rowCount === 0) {
      return res.status(401).json({
        success: false,
        message: 'Access Denied: Invalid credentials.'
      });
    }

    const client = result.rows[0];

    if (!client.is_active) {
      return res.status(403).json({
        success: false,
        message: 'Access Denied: Client account is inactive.'
      });
    }

    // Verify hashed password
    const passwordMatch = await bcrypt.compare(clientPassword, client.x_client_password);
    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: 'Access Denied: Invalid credentials.'
      });
    }

    // Attach client info to request object
    req.client = {
      id: client.id,
      name: client.client_name,
      clientId: client.x_client_id
    };

    next();
  } catch (err) {
    console.error('Error during client authentication:', err);
    return res.status(500).json({
      success: false,
      message: 'Internal server error during authentication.'
    });
  }
}
