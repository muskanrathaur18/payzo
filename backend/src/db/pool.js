import pg from 'pg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// PostgreSQL connection config
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
};

const targetDb = process.env.DB_NAME || 'payzo';

// First, check/create the database using the default 'postgres' database connection
async function ensureDatabaseExists() {
  const adminPool = new Pool({
    ...dbConfig,
    database: 'postgres',
  });

  try {
    const res = await adminPool.query(`SELECT 1 FROM pg_database WHERE datname = $1`, [targetDb]);
    if (res.rowCount === 0) {
      console.log(`Database "${targetDb}" does not exist. Creating it now...`);
      // CREATE DATABASE cannot run inside a transaction block, pg library handles this fine if run directly
      await adminPool.query(`CREATE DATABASE "${targetDb}"`);
      console.log(`Database "${targetDb}" created successfully.`);
    }
  } catch (err) {
    console.error('Error ensuring database exists:', err);
    throw err;
  } finally {
    await adminPool.end();
  }
}

// Now initialize the Pool pointing to the target database
let pool;

export async function initDatabase() {
  await ensureDatabaseExists();

  pool = new Pool({
    ...dbConfig,
    database: targetDb,
  });

  // Test the connection
  try {
    const client = await pool.connect();
    console.log(`Successfully connected to database "${targetDb}"`);

    // Read and run the init.sql schema
    const sqlPath = path.join(__dirname, 'init.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    await client.query(sql);
    console.log('Database schema successfully initialized/verified.');
    client.release();
  } catch (err) {
    console.error('Failed to initialize database schema:', err);
    throw err;
  }
}

export function getPool() {
  if (!pool) {
    throw new Error('Database pool has not been initialized. Call initDatabase() first.');
  }
  return pool;
}

// Helper query function
export async function query(text, params) {
  const activePool = getPool();
  return activePool.query(text, params);
}
