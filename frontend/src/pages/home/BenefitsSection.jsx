import React from 'react';

export default function BenefitsSection() {
  return (
    <>
      <section className="benefits-sec">
        <div className="container aos-init aos-animate pt-3 pb-50" data-aos="fade-up">
          <div className="title-head-2 text-center">
            <span>company Benefits</span>
            <h3 className="text-light">Benefits of Using Payzo As a Payment Gateway Service Provider</h3>
          </div>
        </div>
      </section>
      <div className="container benefits-sec-bx">
        <div className="row">
          <div className="col-lg-4 col-md-4" data-aos="fade-down" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1500">
            <div className="card">
              <div className="card-body pg-card-desc">
                <h6 className="card-subtitle mb-2"><i><img src="/assets/icons/pay-b-1.png" title="Seamless Payment" alt="Payment Processing" /></i></h6>
                <h5 className="card-title">Seamless Payment Processing</h5>
                <p className="card-text">Customers want to be able to make payments swiftly and securely in the digital environment of today. Any internet business that want to be successful must have it.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4" data-aos="fade-down" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="2000">
            <div className="card">
              <div className="card-body pg-card-desc">
                <h6 className="card-subtitle mb-2"><i><img src="/assets/icons/pay-b-2.png" title="Quick Settlement" alt="Payouts" /></i></h6>
                <h5 className="card-title">Quick Settlement and Payouts</h5>
                <p className="card-text">Payzo, the best payment service provider in India, offers multiple payment methods to give your customers the flexibility to pay the way they want to.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4" data-aos="fade-down" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="2500">
            <div className="card">
              <div className="card-body pg-card-desc">
                <h6 className="card-subtitle mb-2"><i><img src="/assets/icons/pay-b-3.png" title="Multiple Payment Methods" alt="Multiple Payment Methods" /></i></h6>
                <h5 className="card-title">Multiple Payment Methods</h5>
                <p className="card-text">Businesses may securely and smoothly take payments thanks to Payzo's user-friendly and effective payment processing solution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
