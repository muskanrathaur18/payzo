import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'products' or 'industry' or null
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Handle header background color change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name, e) => {
    // Only toggle on mobile (width < 992px)
    if (window.innerWidth <= 992) {
      e.preventDefault();
      e.stopPropagation();
      setActiveDropdown(activeDropdown === name ? null : name);
    }
  };

  return (
    <header className={`header-section ${isScrolled ? 'bg-black' : ''}`}>
      <div className="header-wrapper">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            
            {/* Logo */}
            <div className="col mbl-head-logo">
              <Link to="/" className="header-logo">
                <div className="logo-main">
                  <img src="/assets/logos/payzo-brand-logo.png" title="Payzo" alt="best payment gateway, payment gateway" style={{ height: '100px', width: 'auto' }} />
                </div>
              </Link>
            </div>

            {/* Desktop and Mobile Menu */}
            <div className="col-auto mbl-head-gif">
              <ul className="header-nav" style={{ right: isMobileMenuOpen ? '0px' : '-100%' }}>
                {/* Close button for mobile menu */}
                <i id="closeMenu" className="fa-solid fa-xmark" onClick={() => setIsMobileMenuOpen(false)}></i>
                
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                
                {/* Products Dropdown */}
                <li className="has-dropdown" onClick={(e) => toggleDropdown('products', e)}>
                  <a>Products</a>
                  <i className={`fa-solid fa-angle-right ${activeDropdown === 'products' ? 'rotate' : ''}`}></i>
                  <ul className="submenu" style={{ display: activeDropdown === 'products' || window.innerWidth > 992 ? 'block' : 'none' }}>
                    <li><Link to="/payment-gateway">Payment Gateway</Link></li>
                    <li><Link to="/instant-settlement">Instant Settlement</Link></li>
                    <li><Link to="/upiqr">UPI</Link></li>
                    <li><Link to="/auto-collect">Auto Collect</Link></li>
                    <li><Link to="/soft-pos">SoftPos</Link></li>
                    <li><Link to="/payment-links">Payment Link</Link></li>
                    <li><Link to="/payment-pages">Payment Page</Link></li>
                    <li><Link to="/invoices">Invoices</Link></li>
                  </ul>
                </li>

                {/* Industry Dropdown */}
                <li className="has-dropdown" onClick={(e) => toggleDropdown('industry', e)}>
                  <Link to="/industry" onClick={(e) => {
                    if (window.innerWidth <= 992) {
                      e.preventDefault();
                    }
                  }}>Industry</Link>
                  <i className={`fa-solid fa-angle-right ${activeDropdown === 'industry' ? 'rotate' : ''}`}></i>
                  <ul className="submenu" style={{ display: activeDropdown === 'industry' || window.innerWidth > 992 ? 'block' : 'none' }}>
                    <li><Link to="/ecommerce-industry">E-commerce</Link></li>
                    <li><Link to="/education-industry">Education</Link></li>
                    <li><Link to="/nbfc-industry">NBFC Lending</Link></li>
                    <li><Link to="/insurance-industry">Insurance</Link></li>
                    <li><Link to="/mlm-industry">MLM Software</Link></li>
                    <li><Link to="/b2b-industry">B2B Software</Link></li>
                    <li><Link to="/b2c-industry">B2C Software</Link></li>
                  </ul>
                </li>

                <li><Link to="/contact-us">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
                


                {/* Mobile Drawer Details */}
                <div className="mobile-contact-info text-center mt-4">
                  <ul className="social-nav mt-4 d-flex p-0 justify-content-center">
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61550527553852" target="_blank" rel="noopener noreferrer" className="overflow-hidden position-relative d-flex align-items-center justify-content-center text-white">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="ms-2">
                      <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FPayzotech" target="_blank" rel="noopener noreferrer" className="overflow-hidden position-relative d-flex align-items-center justify-content-center text-white">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="ms-2">
                      <a href="https://www.instagram.com/payzo_official/" target="_blank" rel="noopener noreferrer" className="overflow-hidden position-relative d-flex align-items-center justify-content-center text-white">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="ms-2">
                      <a href="https://www.linkedin.com/in/payzo-technology-0b2719289/" target="_blank" rel="noopener noreferrer" className="overflow-hidden position-relative d-flex align-items-center justify-content-center text-white">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li className="ms-2">
                      <a href="https://www.pinterest.nz/payzotechnology/" target="_blank" rel="noopener noreferrer" className="overflow-hidden position-relative d-flex align-items-center justify-content-center text-white">
                        <i className="fa-brands fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>

            {/* Mobile Hamburger menu */}
            <div className="col d-block d-lg-none mbl-head-bar">
              <div className="header-btn-link text-end">
                <i className="fa-solid fa-bars menu-bar" onClick={() => setIsMobileMenuOpen(true)}></i>
              </div>
            </div>



          </div>
        </div>
      </div>
    </header>
  );
}
