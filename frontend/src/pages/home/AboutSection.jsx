import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="about mt-5">
      <div className="container aos-init aos-animate pt-3 pb-50" data-aos="fade-up">
        <div className="title-head-2 text-center">
          <span>Why Choose Us</span>
          <h2 className="pt-2 text-light">A Smarter Approach to Digital Payment Processing.</h2>
        </div>
        <div className="row content-1">
          <div className="col-lg-6 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="right-img">
              <img src="./assets/img/why-us.png" title="Online Payment Solution" alt="Online Payment" className="img-fluid animated2" />
            </div>
          </div>
          <div className="offset-1 col-lg-5 col-md-5">
            <h3><span className="color-1">Payzo</span> — The Complete Payment Partner for Your Business</h3>
            <ul>
              <li><i className="fa-solid fa-check-double"></i> 150+ Supported Payment Modes</li>
              <li><i className="fa-solid fa-check-double"></i> Best-in-Class Transaction Success Rate</li>
              <li><i className="fa-solid fa-check-double"></i> Developer-Friendly API Integration</li>
              <li><i className="fa-solid fa-check-double"></i> PCI-DSS Security Compliance</li>
              <li><i className="fa-solid fa-check-double"></i> Real-Time &amp; Instant Settlements</li>
              <li><i className="fa-solid fa-check-double"></i> Multi-Currency &amp; Global Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
