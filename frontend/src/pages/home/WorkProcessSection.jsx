import React from 'react';

export default function WorkProcessSection() {
  return (
    <section className="how-it-works" data-aos="zoom-in-down" data-aos-duration="2500">
      <div className="container">
        <div className="title-head text-center">
          <span>Our Work Process</span>
          <h3>Steps to Get Started with Payzo - Your Trusted Payment Gateway Solution</h3>
        </div>
        <div className="row cus-mar mt-5">
          <div className="col-xl-3 col-sm-6 col-6">
            <div className="single-item text-center">
              <img alt="icon" src="/assets/icons/secure-payment (1).png" title="Registration" style={{ color: "transparent" }} />
              <h5>Registration</h5>
              <p>Register with us by filling out the required fields and submitting the registration form.</p>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-6">
            <div className="single-item text-center">
              <img alt="icon" src="/assets/icons/data-exchange.png" title="Payzo Account" style={{ color: "transparent" }} />
              <h5>Set Up Your transfers</h5>
              <p>Go to your Payzo account and access the transfer settings. Enter the recipient's information, select the currency transfer amount, etc.</p>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-6">
            <div className="single-item text-center">
              <img alt="icon" src="/assets/icons/payment-gateway.png" title="Make Your Payment" style={{ color: "transparent" }} />
              <h5>Make your Payment</h5>
              <p>You will receive a confirmation from Payzo, along with a transaction ID or reference number for tracking.</p>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-6">
            <div className="single-item text-center">
              <img alt="icon" src="/assets/icons/done.png" title="Payment Gateway" style={{ color: "transparent" }} />
              <h5>You're all done!</h5>
              <p>Congratulations on successfully setting up your transfer with Payzo! You're now on your way to securely processing your payments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
