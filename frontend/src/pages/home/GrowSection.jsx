import React from 'react';

export default function GrowSection() {
  return (
    <section>
      <div className="get-toknow py-5">
        <div className="container">
          <div className="d-flex justify-content-center">
            <span><i className="fa-solid fa-compact-disc me-2"></i></span>
            <span>
              <p>Grow with Payzo</p>
            </span>
          </div>
          <h3>Scale Your Business with the Power of Payzo</h3>
          <p>Payzo Technologies is India's most trusted payment infrastructure provider, delivering versatile payment solutions tailored for every industry. Whether you're a startup or an enterprise, Payzo combines security, affordability, and simplicity in one powerful platform.</p>
          <div className="row my-5 align-items-center">
            <div className="col-lg-5 mt-5">
              <div className="dashboard-img">
                <img src="/assets/icon/pg-dashboard.png" title="Online Payments" alt="payment solutions , Payzo Technology, online payments" />
                <img className="pg-app" src="/assets/icon/pg-app.png" title="Payment Gateway" alt="Payment Gateway Solution" />
              </div>
            </div>
            <div className="col-lg-7 mt-5">
              <div className="row mt-5 pt-5 mt-lg-0 pt-lg-0">
                <div className="col-sm-6 col-12 my-3">
                  <div className="step-div">
                    <p><span>Step 1</span></p>
                    <h3>Create Your Account</h3>
                    <div className="step-icon mx-auto">
                      <img src="/assets/icon/login.png" title="Login To Portal" alt="payment solutions , Payzo Technology, online payments" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 my-3">
                  <div className="step-div">
                    <p><span>Step 2</span></p>
                    <h3>Complete KYC</h3>
                    <div className="step-icon mx-auto">
                      <img src="/assets/icon/verify.png" title="Verify KYC" alt="sending payments" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 my-3">
                  <div className="step-div">
                    <p><span>Step 3</span></p>
                    <h3>Connect Your API</h3>
                    <div className="step-icon mx-auto">
                      <img src="/assets/icon/api-integration.png" title="Integrate API" alt="Integrate API" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 my-3">
                  <div className="step-div">
                    <p><span>Step 4</span></p>
                    <h3>Go Live &amp; Earn</h3>
                    <div className="step-icon mx-auto">
                      <img src="/assets/icon/give-rupee.png" title="Payzo Technologies" alt="payment solutions, online payments" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
