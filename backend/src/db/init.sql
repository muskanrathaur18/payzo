-- Database initialization script for Payzo middleware

-- Clients table: stores the API access credentials + partner profile
CREATE TABLE IF NOT EXISTS clients (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    x_client_id VARCHAR(64) UNIQUE NOT NULL,
    x_client_password VARCHAR(128) NOT NULL,
    x_client_password_clear VARCHAR(128),
    is_active BOOLEAN DEFAULT true,
    wallet_balance DECIMAL(15,2) DEFAULT 0.00,
    trc20_address VARCHAR(128),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Ensure columns exist on existing databases
ALTER TABLE clients ADD COLUMN IF NOT EXISTS trc20_address VARCHAR(128);
ALTER TABLE clients ADD COLUMN IF NOT EXISTS x_client_password_clear VARCHAR(128);

-- IP Whitelist table
CREATE TABLE IF NOT EXISTS ip_whitelist (
    id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
    ip_address VARCHAR(45) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(client_id, ip_address)
);

-- Transactions table
CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES clients(id) ON DELETE SET NULL,
    type VARCHAR(20) NOT NULL,
    order_code VARCHAR(255),
    amount DECIMAL(15,2),
    method VARCHAR(20),
    request_payload JSONB,
    zyqrapay_payload JSONB,
    zyqrapay_response JSONB,
    platform_order_code VARCHAR(255),
    status VARCHAR(50) DEFAULT 'initiated',
    callback_data JSONB,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Platform Settings table: Admin-managed key-value store
CREATE TABLE IF NOT EXISTS platform_settings (
    key VARCHAR(100) PRIMARY KEY,
    value TEXT NOT NULL,
    description TEXT,
    updated_at TIMESTAMP DEFAULT NOW(),
    updated_by VARCHAR(100) DEFAULT 'admin'
);

-- Seed default platform settings (only if not already present)
INSERT INTO platform_settings (key, value, description)
VALUES
  ('platform_fee_percent', '10.00', 'Platform fee percentage applied on each successful collection'),
  ('min_withdrawal_amount', '100', 'Minimum withdrawal amount in INR'),
  ('usdt_rate', '90.00', 'INR to USDT conversion rate')
ON CONFLICT (key) DO NOTHING;

-- Migrations: safe ADD COLUMN IF NOT EXISTS
ALTER TABLE clients ADD COLUMN IF NOT EXISTS wallet_balance DECIMAL(15,2) DEFAULT 0.00;
ALTER TABLE clients ADD COLUMN IF NOT EXISTS hold_balance DECIMAL(15,2) DEFAULT 0.00;
ALTER TABLE clients ADD COLUMN IF NOT EXISTS email VARCHAR(255);
ALTER TABLE clients ADD COLUMN IF NOT EXISTS mobile VARCHAR(20);
ALTER TABLE clients ADD COLUMN IF NOT EXISTS login_username VARCHAR(100);
ALTER TABLE clients ADD COLUMN IF NOT EXISTS login_password VARCHAR(128);
ALTER TABLE clients ADD COLUMN IF NOT EXISTS gender VARCHAR(20);
ALTER TABLE clients ADD COLUMN IF NOT EXISTS dob DATE;
ALTER TABLE clients ADD COLUMN IF NOT EXISTS city VARCHAR(100);
ALTER TABLE clients ADD COLUMN IF NOT EXISTS district VARCHAR(100);
ALTER TABLE clients ADD COLUMN IF NOT EXISTS pincode VARCHAR(20);
ALTER TABLE clients ADD COLUMN IF NOT EXISTS state VARCHAR(100);
ALTER TABLE clients ADD COLUMN IF NOT EXISTS country VARCHAR(100) DEFAULT 'India';
ALTER TABLE clients ADD COLUMN IF NOT EXISTS settlement_type VARCHAR(50) DEFAULT 'Not set';
ALTER TABLE clients ADD COLUMN IF NOT EXISTS client_outlet_id VARCHAR(100);
ALTER TABLE clients ADD COLUMN IF NOT EXISTS active_services TEXT[] DEFAULT ARRAY['pay in','pay out'];

-- Transactions: add platform_fee_amount column to track fee charged per transaction
ALTER TABLE transactions ADD COLUMN IF NOT EXISTS platform_fee_amount DECIMAL(15,2) DEFAULT 0.00;
ALTER TABLE transactions ADD COLUMN IF NOT EXISTS net_amount DECIMAL(15,2) DEFAULT 0.00;

-- Unique index on login_username (only for non-null values)
CREATE UNIQUE INDEX IF NOT EXISTS idx_clients_login_username ON clients(login_username) WHERE login_username IS NOT NULL;

-- Update the default seeded client 'c_prahlad_merchant_9983' to have login credentials
UPDATE clients 
SET login_username = 'prahlad3311',
    login_password = COALESCE(login_password, '$2a$10$T2R4Vw8i8N2a3aM7VjZpY.g7d206f/F1L299X/x3kO3l8w3Xh9C0m'), -- hashed 'PayzoPass789'
    x_client_password_clear = COALESCE(x_client_password_clear, 'client_password_789')
WHERE x_client_id = 'c_prahlad_merchant_9983' AND (login_username IS NULL OR x_client_password_clear IS NULL);

-- Charge Profiles table: stores global Fixed/Dynamic profile per service
CREATE TABLE IF NOT EXISTS charge_profiles (
    id SERIAL PRIMARY KEY,
    service VARCHAR(20) NOT NULL,           -- 'pay_in' or 'pay_out'
    mode VARCHAR(20) NOT NULL DEFAULT 'Fixed',
    status VARCHAR(20) NOT NULL DEFAULT 'Active',
    rate_type VARCHAR(30) DEFAULT 'Flat Fee',
    rate_value DECIMAL(15,4) DEFAULT 0,
    saved_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(service)
);

-- Charge Ranges table: stores per-service dynamic ranges
CREATE TABLE IF NOT EXISTS charge_ranges (
    id SERIAL PRIMARY KEY,
    service VARCHAR(20) NOT NULL,           -- 'pay_in' or 'pay_out'
    min_amount DECIMAL(15,2) NOT NULL DEFAULT 0,
    max_amount DECIMAL(15,2) NOT NULL DEFAULT 0,
    rate_type VARCHAR(30) NOT NULL,
    rate_value DECIMAL(15,4) NOT NULL DEFAULT 0,
    sort_order INTEGER NOT NULL DEFAULT 0,
    status VARCHAR(20) NOT NULL DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
