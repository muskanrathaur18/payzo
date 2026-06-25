import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import { initDatabase } from './db/pool.js';
import paymentRouter from './routes/payment.js';
import adminRouter from './routes/admin.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-client-id', 'x-client-password', 'x-admin-key']
}));


// Helmet security headers (with adjustments for development/proxies if necessary)
app.use(helmet());

// Logging
app.use(morgan('dev'));

// Parse JSON request payloads
app.use(express.json());

// Base health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// Welcome message for root path
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Payzo Proxy Backend API is running.',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      payment: '/api/v1/payment',
      admin: '/api/v1/admin'
    }
  });
});

// Register routers
app.use('/api/v1/payment', paymentRouter);
app.use('/api/v1/admin', adminRouter);

// Fallback 404 Route handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Endpoint not found.' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    success: false,
    message: 'An unexpected internal server error occurred.'
  });
});

// Initialize database and start the server
async function startServer() {
  try {
    console.log('Initializing database connection...');
    await initDatabase();
    
    app.listen(PORT, () => {
      console.log(`===============================================`);
      console.log(`Payzo Proxy Backend running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`===============================================`);
    });
  } catch (err) {
    console.error('Fatal: Server failed to start due to database initialization failure.', err);
    process.exit(1);
  }
}

startServer();
