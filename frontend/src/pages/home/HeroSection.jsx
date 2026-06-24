import React from 'react';

export default function HeroSection() {
  return (
    <section className="p-0">
      <div className="hero-main">
        <div className="hero-bg-overlay"></div>
        <div className="container hero-content">
          <div className="row align-items-center">
            <div className="col-md-6 my-5 hero-1">
              <h1>Payment Gateway Platform</h1>
              <p>Payzo is a trusted payment solutions company empowering businesses across India with cutting-edge technology. Accept payments from your customers with unmatched speed, simplicity, and ironclad security.</p>
              <div className="d-flex align-items-center mt-3 mt-md-5">
                <a className="start-btn" href="https://www.payzo.in/contact-us">Start for Free</a>
                <a className="learn-btn" href="https://www.payzo.in/about-us">Discover More <i className="fa-solid fa-angle-right d-block"></i></a>
              </div>
            </div>
            <div className="col-md-6 hero-2">
              <div className="hero-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/assets/img/hero-illustration-payzo.png" title="Payment Gateway Solution" alt="Best Payment Gateway Solution" style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
