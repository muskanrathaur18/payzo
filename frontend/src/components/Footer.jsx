import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0f', color: '#fff', fontFamily: 'inherit' }}>

      {/* Top gradient accent line */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #6c63ff, #3b82f6, #06b6d4)' }} />

      {/* Main footer body */}
      <div style={{ padding: '60px 0 40px' }}>
        <div className="container-fluid px-4 px-md-5">
          <div className="row g-5">

            {/* Col 1: Brand */}
            <div className="col-lg-4 col-md-12">
              <Link to="/" className="text-decoration-none d-inline-block mb-3">
                <img
                  src="/assets/logos/payzo-brand-logo.png"
                  alt="Payzo Logo"
                  style={{ height: '72px', width: 'auto' }}
                />
              </Link>
              <p style={{ fontSize: '14px', lineHeight: '1.8', color: 'rgba(255,255,255,0.55)', maxWidth: '320px', marginTop: '12px' }}>
                Payzo offers the greatest payments solution, enabling businesses to receive, process, and distribute payments via credit cards, debit cards, UPI, wallets, and more.
              </p>

              {/* Social Icons */}
              <div className="d-flex gap-3 mt-4">
                {[
                  { href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012.07 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', label: 'Twitter' },
                  { href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z', label: 'LinkedIn' },
                  { href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', label: 'Facebook' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    style={{
                      width: '38px', height: '38px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: 'rgba(255,255,255,0.05)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.25s ease',
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(108,99,255,0.25)'; e.currentTarget.style.borderColor = '#6c63ff'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Products */}
            <div className="col-lg-2 col-md-4 col-6">
              <h6 style={headingStyle}>Products</h6>
              <ul style={listStyle}>
                <li><Link to="/pay-in" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>Payin</Link></li>
                <li><Link to="/upiqr" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>UPI AutoPay</Link></li>
                <li><Link to="/instant-settlement" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>Payouts</Link></li>
                <li><Link to="/bank-verification" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>Bank Verification</Link></li>
                <li><Link to="/pan-verification" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>PAN Verification</Link></li>
                <li><Link to="/aadhar-verification" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>Aadhar Verification</Link></li>
                <li><Link to="/gst-verification" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>GST Verification</Link></li>
              </ul>
            </div>

            {/* Col 3: Company */}
            <div className="col-lg-2 col-md-4 col-6">
              <h6 style={headingStyle}>Company</h6>
              <ul style={listStyle}>
                <li><Link to="/" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>Home</Link></li>
                <li><Link to="/about-us" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>About Us</Link></li>
                <li><Link to="/partner" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>Partners</Link></li>
                <li><Link to="/industry" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>Industry</Link></li>
                <li><Link to="/pricing" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>Pricing</Link></li>
                <li><Link to="/contact-us" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>Contact Us</Link></li>
              </ul>
            </div>

            {/* Col 4: Support */}
            <div className="col-lg-2 col-md-4 col-6">
              <h6 style={headingStyle}>Support</h6>
              <ul style={listStyle}>
                <li><Link to="/customer-support" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>Customer Support</Link></li>
                <li><Link to="/terms" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>Terms & Conditions</Link></li>
                <li><Link to="/privacy" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>Privacy Policy</Link></li>
              </ul>

              {/* Newsletter / CTA badge */}
              <div style={{
                marginTop: '28px',
                padding: '16px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(108,99,255,0.18), rgba(6,182,212,0.12))',
                border: '1px solid rgba(108,99,255,0.25)',
              }}>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>🔒 PCI DSS Compliant</p>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>Secure &amp; Trusted Payments</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />

      {/* Bottom bar */}
      <div style={{ padding: '20px 0' }}>
        <div className="container-fluid px-4 px-md-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
                © 2026 Payzo. All rights reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <Link to="/terms" style={{ ...footerLinkSmall }} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>Terms & Conditions</Link>
              <span style={{ color: 'rgba(255,255,255,0.2)', margin: '0 10px' }}>|</span>
              <Link to="/privacy" style={{ ...footerLinkSmall }} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}

/* ─── shared style objects ─── */
const headingStyle = {
  fontSize: '13px',
  fontWeight: '700',
  letterSpacing: '1.2px',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.9)',
  marginBottom: '20px',
  paddingBottom: '10px',
  borderBottom: '2px solid',
  borderImage: 'linear-gradient(90deg, #6c63ff, transparent) 1',
  display: 'inline-block',
  width: '100%',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const linkStyle = {
  fontSize: '14px',
  color: 'rgba(255,255,255,0.5)',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  display: 'inline-block',
};

const footerLinkSmall = {
  fontSize: '13px',
  color: 'rgba(255,255,255,0.4)',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
};

function hoverIn(e) { e.currentTarget.style.color = '#a78bfa'; }
function hoverOut(e) { e.currentTarget.style.color = e.currentTarget.style.fontSize === '13px' ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.5)'; }
