import React from 'react';

export default function PartnerSection() {
  return (
    <section className="py-0">
      <div className="container">
        <div className="partner-section">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="partner-img mb-4">
                <img src="/assets/img/partner-img.jpg" title="Online Payments" alt="payzo, free digital transactions" />
                <div className="partners-experience">
                  <h3>
                    <span>8+</span>
                    Years Experience
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ps-4">
              <div className="partner-content">
                <div className="d-flex">
                  <span><i className="fa-solid fa-compact-disc me-2"></i></span>
                  <span>
                    <p>About us</p>
                  </span>
                </div>
                <h3>Experience the Future of Digital Payments</h3>
                <p>Payzo redefines the way businesses handle money online. Our intuitive payment infrastructure brings together speed, reliability, and simplicity — so you can focus on growth while we handle every transaction.</p>
                <hr />
                <div className="row">
                  <div className="col-md-6 col-6 pe-5">
                    <div className="single-skill-bar">
                      <div className="skill-bar-content d-flex justify-content-between">
                        <span className="skill-title">Trust &amp; Security</span>
                        <span>100%</span>
                      </div>
                      <div className="skill-bar"></div>
                      <p>Payzo ensures trust, security in every payment. Your transactions, safeguarded.</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-6 pe-5">
                    <div className="single-skill-bar">
                      <div className="skill-bar-content d-flex justify-content-between">
                        <span className="skill-title">Store Collection</span>
                        <span>100%</span>
                      </div>
                      <div className="skill-bar"></div>
                      <p>Secure store collections made easy with Payzo payment gateway.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5" />
    </section>
  );
}
