import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Load credentials from environment variables (fallback values provided)
  const userEmail = import.meta.env.VITE_USER_EMAIL || 'prahlad3311';
  const userPassword = import.meta.env.VITE_USER_PASSWORD || 'PayzoPass789';
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'admin3311';
  const adminPassword = localStorage.getItem('admin_password') || import.meta.env.VITE_ADMIN_PASSWORD || 'AdminPass789';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredUsername = username.trim();

    // 1. Check hardcoded admin credentials
    if (enteredUsername === adminEmail && password === adminPassword) {
      setError('');
      localStorage.removeItem('loggedInPartner');
      navigate('/admindashboard');
      return;
    }

    // 2. Call backend login API for database-driven partner verification
    try {
      const response = await fetch('http://localhost:4000/api/v1/payment/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: enteredUsername,
          password: password
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        // Save partner profile directly returned from database
        localStorage.setItem('loggedInPartner', JSON.stringify(data.partner));
        setError('');
        navigate('/userdashboard');
        return;
      } else {
        setError(data.message || 'Invalid username or password.');
        return;
      }
    } catch (err) {
      console.error('Error checking partner credentials on DB:', err);
      // Fallback to local storage credentials for offline robustness
      try {
        const storedCreds = JSON.parse(localStorage.getItem('payzo_partner_creds') || '{}');
        const storedPartners = JSON.parse(localStorage.getItem('payzo_api_partners') || '[]');

        if (storedCreds[enteredUsername] && storedCreds[enteredUsername].password === password) {
          const credInfo = storedCreds[enteredUsername];
          const fullPartner = storedPartners.find(p => p.id === credInfo.partnerId) || {};
          localStorage.setItem('loggedInPartner', JSON.stringify({
            username: enteredUsername,
            merchantId: fullPartner.clientOutletId || ('m_outlet_' + credInfo.partnerId),
            name: fullPartner.name || credInfo.name,
            email: fullPartner.email || enteredUsername,
            mobile: fullPartner.mobile || '',
            city: fullPartner.city || '',
            state: fullPartner.state || '',
            walletBalance: fullPartner.walletBalance || 0,
            holdBalance: fullPartner.holdBalance || 0,
            activeServices: fullPartner.activeServices || ['pay in', 'pay out']
          }));
          setError('');
          navigate('/userdashboard');
          return;
        }
      } catch (e) {
        console.error('Local fallback login error:', e);
      }
      setError('Connection to auth server failed. Please make sure the backend is running.');
    }
  };

  return (
    <div className="login-page-wrapper d-flex align-items-center justify-content-center min-vh-100 position-relative overflow-hidden" style={{
      background: 'radial-gradient(circle at center, #0f1c1e 0%, #000000 100%)',
      padding: '20px 20px',
      color: '#fff'
    }}>
      {/* Background ambient light blurs */}
      <div className="position-absolute animate-float-slow" style={{
        width: '350px',
        height: '350px',
        background: 'rgba(132, 198, 2, 0.12)',
        filter: 'blur(100px)',
        top: '-10%',
        left: '-10%',
        borderRadius: '50%'
      }}></div>
      <div className="position-absolute animate-float-reverse" style={{
        width: '400px',
        height: '400px',
        background: 'rgba(3, 55, 61, 0.25)',
        filter: 'blur(120px)',
        bottom: '-15%',
        right: '-10%',
        borderRadius: '50%'
      }}></div>

      <div className="w-100" style={{ maxWidth: '450px', position: 'relative', zIndex: '2' }}>
        

        {/* Glassmorphic Login Card */}
        <div className="glass-login-card p-3 p-md-4">
          <div className="mb-3 text-center">
            <h3 className="fw-bold text-white spline-sans mb-1">Welcome Back</h3>
            <p className="text-light opacity-75 fs-6 mb-0">Sign in to your dashboard</p>
          </div>

          {error && (
            <div className="alert alert-danger border-0 text-center py-2 px-3 mb-4 fs-7" style={{
              background: 'rgba(220, 53, 69, 0.15)',
              color: '#ff8591',
              borderRadius: '8px'
            }}>
              <i className="fa-solid fa-triangle-exclamation me-2"></i> {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Username/Email */}
            <div className="mb-4">
              <label className="form-label text-light fs-7 fw-semibold mb-2" htmlFor="login-username">Username or Email</label>
              <input 
                id="login-username"
                type="text" 
                className="form-control" 
                placeholder="prahlad3311" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <div className="d-flex justify-content-between mb-2">
                <label className="form-label text-light fs-7 fw-semibold mb-0" htmlFor="login-password">Password</label>
                <a href="#" className="fs-7 text-decoration-none fw-medium" style={{ color: 'var(--main-color)' }}>
                  Forgot password?
                </a>
              </div>
              <div className="position-relative d-flex align-items-center">
                <input 
                  id="login-password"
                  type={showPassword ? "text" : "password"} 
                  className="form-control w-100 pe-5" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
                <button 
                  type="button" 
                  className="btn-show-hide bg-transparent border-0 position-absolute end-0 me-3 text-light opacity-75"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ zIndex: 5, padding: '4px' }}
                >
                  <i className={showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}></i>
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="mb-4 form-check d-flex align-items-center">
              <input 
                type="checkbox" 
                className="form-check-input mt-0" 
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ 
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255, 255, 255, 0.2)'
                }}
              />
              <label className="form-check-label ms-2 fs-7 text-light opacity-75" htmlFor="rememberMe" style={{ cursor: 'pointer' }}>
                Remember this device
              </label>
            </div>

            {/* Submit Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="btn w-100 py-3 fw-bold d-flex align-items-center justify-content-center border-0"
              style={{
                borderRadius: '12px',
                backgroundColor: 'var(--main-color)',
                color: '#050a01',
                transition: 'background-color 0.3s ease'
              }}
            >
              Sign In <i className="fa-solid fa-arrow-right ms-2"></i>
            </motion.button>
          </form>

          {/* Bottom Link */}
          <div className="text-center mt-4">
            <p className="text-light opacity-75 fs-7 mb-0">
              Don't have a merchant account?{' '}
              <span className="d-inline-block" style={{ whiteSpace: 'nowrap' }}>
                <Link to="/contact-us" style={{ color: 'var(--main-color)', fontWeight: '600', textDecoration: 'none' }}>
                  Book a Demo
                </Link>
              </span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
