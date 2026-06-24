-- Database initialization script for Payzo middleware

-- Clients table: stores the API access credentials
CREATE TABLE IF NOT EXISTS clients (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    x_client_id VARCHAR(64) UNIQUE NOT NULL,      -- public identifier
    x_client_password VARCHAR(128) NOT NULL,        -- hashed password
    is_active BOOLEAN DEFAULT true,
    wallet_balance DECIMAL(15,2) DEFAULT 50000.00,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- IP Whitelist table: controls which IPs are allowed to call API endpoints for a given client
CREATE TABLE IF NOT EXISTS ip_whitelist (
    id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
    ip_address VARCHAR(45) NOT NULL,              -- supports IPv4 & IPv6
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(client_id, ip_address)
);

-- Transactions table: logs all incoming collections, payouts, and webhook updates
CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES clients(id) ON DELETE SET NULL,
    type VARCHAR(20) NOT NULL,                     -- 'collection' or 'payout'
    order_code VARCHAR(255),
    amount DECIMAL(15,2),
    method VARCHAR(20),                            -- for payouts: 'bank', 'upi', 'usdt'
    request_payload JSONB,                         -- what client sent us
    zyqrapay_payload JSONB,                        -- what we sent to ZyqraPay
    zyqrapay_response JSONB,                       -- what ZyqraPay returned
    platform_order_code VARCHAR(255),              -- from ZyqraPay
    status VARCHAR(50) DEFAULT 'initiated',
    callback_data JSONB,                           -- webhook callback payload from ZyqraPay
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Migrations
ALTER TABLE clients ADD COLUMN IF NOT EXISTS wallet_balance DECIMAL(15,2) DEFAULT 50000.00;

