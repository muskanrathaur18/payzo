import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { initDatabase, query, getPool } from './pool.js';

async function seed() {
  try {
    console.log('Connecting to database...');
    await initDatabase();

    // Check if we already have clients
    const clientCheck = await query('SELECT COUNT(*) FROM clients');
    if (parseInt(clientCheck.rows[0].count) > 0) {
      console.log('Database already has client accounts. Skipping seed.');
      process.exit(0);
    }

    console.log('Seeding initial client...');

    // Credentials we want to assign
    const clientName = 'Prahlad Merchant';
    const rawPassword = 'client_password_789';
    const xClientId = 'c_prahlad_merchant_9983'; // Custom clean ID or standard UUID
    const hashedPassword = await bcrypt.hash(rawPassword, 10);

    const clientRes = await query(
      `INSERT INTO clients (client_name, x_client_id, x_client_password) 
       VALUES ($1, $2, $3) RETURNING id, client_name, x_client_id`,
      [clientName, xClientId, hashedPassword]
    );

    const newClient = clientRes.rows[0];

    console.log(`===============================================`);
    console.log(`CLIENT ACCOUNT CREATED SUCCESSFULLY`);
    console.log(`Client Name: ${newClient.client_name}`);
    console.log(`x-client-id: ${newClient.x_client_id}`);
    console.log(`x-client-password: ${rawPassword}`);
    console.log(`===============================================`);

    // Whitelist localhost and 127.0.0.1 for local testing by default
    console.log('Whitelisting local development IPs for the client...');
    await query(
      'INSERT INTO ip_whitelist (client_id, ip_address) VALUES ($1, $2), ($1, $3)',
      [newClient.id, '127.0.0.1', 'localhost']
    );
    console.log('Local IPs whitelisted.');
    console.log('Seeding completed successfully!');
    
    // Close the connection pool
    const pool = getPool();
    await pool.end();
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during seed:', err);
    process.exit(1);
  }
}

seed();
