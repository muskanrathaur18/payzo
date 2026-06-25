import { query } from '../db/pool.js';

export async function ipWhitelist(req, res, next) {
  if (!req.client) {
    return res.status(500).json({
      success: false,
      message: 'Server Error: ipWhitelist middleware must be placed after authClient.'
    });
  }

  // Get client IP address
  let clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  
  // Format IPv6 loopback or IPv4 mapped addresses
  if (clientIp === '::1') {
    clientIp = '127.0.0.1';
  } else if (clientIp.startsWith('::ffff:')) {
    clientIp = clientIp.substring(7);
  }

  // Bypass IP whitelist check for local loopback addresses (local development/testing)
  if (clientIp === '127.0.0.1') {
    return next();
  }

  try {
    // Check if client has any whitelisted IPs
    const result = await query(
      'SELECT ip_address FROM ip_whitelist WHERE client_id = $1',
      [req.client.id]
    );

    // If no whitelisted IPs are configured, block them with instructions to add one
    if (result.rowCount === 0) {
      return res.status(403).json({
        success: false,
        message: `Access Denied: No whitelisted IPs configured for this client. Your current IP is: ${clientIp}`
      });
    }

    const whitelistedIps = result.rows.map(row => row.ip_address);

    if (!whitelistedIps.includes(clientIp)) {
      return res.status(403).json({
        success: false,
        message: `Access Denied: IP address "${clientIp}" is not whitelisted for this client.`
      });
    }

    next();
  } catch (err) {
    console.error('Error in IP whitelist check:', err);
    return res.status(500).json({
      success: false,
      message: 'Internal server error checking IP whitelist.'
    });
  }
}
