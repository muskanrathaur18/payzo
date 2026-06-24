import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQ from '../home/FAQ';

export default function PaymentLinks() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <><section className="pay-sec-hero bg-secondary-gradient position-relative zindex-1 overflow-hidden">
   <img src="/assets/img/em-host-wave-left.svg" alt="shape" className="position-absolute start-0 bottom-0 zindex--1 soft-light opacity-50" />
   <img src="/assets/img/em-host-wave-right.svg" alt="shape" className="position-absolute end-0 bottom-0 zindex--1 soft-light opacity-50" />
   <div className="container">
      <div className="row align-items-center">
         <div className="col-xxl-6 col-xl-7 col-lg-7">
            <div className="pay-hero-content mt-50">
               <h1 className=" mb-3 fw-bold">Accelerate Billing with Instantly Shareable Payment Links</h1>
               <h3 className="mb-40 ">Send secure billing links via SMS, Email, or WhatsApp. Perfect for sole proprietors, freelance experts, and small stores looking to accept digital payments without a complex website.</h3>
               <a href="/contact-us" className="btn hero-btn border-0">Sign Up Now<span><i className="fa-solid fa-arrow-right ms-2"></i></span></a>
            </div>
         </div>
         <div className="col-xxl-6 col-xl-5 col-lg-5">
            <div className="email-hero-right mt-40 mt-lg-0">
               <img src="/assets/img/pay-link-img.png" title="Simplify Transactions" alt="Secure Payment Links" className="img-fluid animated2" />
            </div>
         </div>
      </div>
   </div>
</section>
<section className="midsec2 bg-primary-gradient mb-5" >
   <div className="container">
      <div className="row justify-content-between align-items-center mt-5">
         <div className="col-xl-5 col-lg-6 order-1 order-lg-1">
            <div className="migrate-content">
               <div className="title-head ">
                  <h6 className="fw-bold" style={{"color":"#000"}}>Payment Process</h6>
                  <h2 className=" mb-0">Three Quick Steps to Get Paid via Shareable Links</h2>
               </div>
               <h4 className="mb-4">
                  Send secure billing links via SMS, Email, or WhatsApp. Perfect for sole proprietors, freelance experts, and small stores looking to accept digital payments without a complex website.
               </h4>
               <div className="progress-div">
                  <div className="step-bx-1 active">
                     <div className="current_step">
                     </div>
                     <div className="link1"></div>
                  </div>
                  <div className="content-step1">
                     <h5>Step1</h5>
                     <h6>Generate Your Payment Link</h6>
                     <p>Log in to your console, input the amount, and produce a customized link for your client.</p>
                  </div>
               </div>
               <div className="progress-div">
                  <div className="step-bx-1 ">
                     <div className=" step2"></div>
                     <div className="link1"></div>
                  </div>
                  <div className="content-step2 ">
                     <h5>Step2</h5>
                     <h6>Enter Customer Contact Details</h6>
                     <p> Send the generated payment URL directly through WhatsApp, Email, or social media chat.</p>
                  </div>
               </div>
               <div className="progress-div">
                  <div className="step-bx-1">
                     <div className="step2"></div>
                     <div className="link1"></div>
                  </div>
                  <div className="content-step2 ">
                     <h5>Step3</h5>
                     <h6>Accept Payment confirmation</h6>
                     <p>Get notified instantly when the transaction is completed and receive direct settlements.</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-6 order-2 order-lg-2">
            <div className="migrate-feature-img mb-5 mb-lg-0">
               <img src="/assets/img/pay-link1.jpg" title="Payments with Payzo" alt="Payment Gateway" className="img-fluid" style={{"borderRadius":"20px"}} />
            </div>
         </div>
      </div>
   </div>
</section>


<section className="payment-bg-sec mt-5">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-lg-6 col-md-12">
            <div className="payment-img">
               <img src="/assets/img/payment-link.png" title="Payment Links" alt="Payment Gateway Dashboard" className="img-fluid animated2" />
            </div>
         </div>
         <div className="col-lg-6 col-md-12">
            <div className="title-head-2 ">
               <h6 className="mb-0" style={{"color":"#fff","letterSpacing":"0.5px"}}>Payment Links</h6>
               <h2 className="text-light mt-0 text-capitalize">Easily Generate Dynamic Payment Links with Payzo </h2>
            </div>
            <div className="payment-link-process">
               <ul className="p-0">
                  <li className="d-flex">
                     <span><i className="fa-solid fa-check-double"></i></span>
                     <span><b>Sign Up With Payzo: </b>Visit the Payzo website and sign up for an account.Provide the necessary information to create your merchant account.</span></li>
                  <li className="d-flex">
                     <span><i className="fa-solid fa-check-double"></i></span>
                     <span><b>Access the Payment Gateway Dashboard: </b>Once your account is created and verified, log in to the Payzo payment gateway dashboard using your credentials.</span>
                  </li>
                  <li className="d-flex">
                     <span><i className="fa-solid fa-check-double"></i></span><span><strong>Navigate to Payment Links: </strong>Within the payment gateway dashboard, locate the section or option for creating Payment Links.</span>
                  </li>
                  <li className="d-flex">
                     <span><i className="fa-solid fa-check-double"></i></span><span><b>Customers Make Payments: </b>When customers receive the Payment Links, they can click on the links to open a secure payment page hosted by Payzo.</span>
                  </li>
                  <li className="d-flex">
                     <span><i className="fa-solid fa-check-double"></i></span>
                     <span><b>Receive Payment Notifications: </b>Payzo provides real-time notifications for payment activity.</span>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="payment-tabs">
   <div className="container-fluid">
   <div className="title-head text-center">
      <span>Payment Links</span>
      <h2>Tailored Solutions Built Around Payzo Payment Links</h2></div>
 
   <div className="">
      <ul className="nav nav-pills mb-3 px-5 justify-content-center" id="pills-tab" role="tablist">
         <li className="nav-item mb-2" role="presentation">
            <button className="nav-link active" id="tab-01" data-bs-toggle="pill" data-bs-target="#tab-1" type="button" role="tab" aria-controls="pills-collectPayment" aria-selected="true"><i className="fa-solid fa-money-bills"></i>Bill Payments</button>
         </li>
         <li className="nav-item mb-2" role="presentation">
            <button className="nav-link" id="tab-02" data-bs-toggle="pill" data-bs-target="#tab-2" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i className="fa-solid fa-cart-shopping"></i>Sell Products</button>
         </li>
         <li className="nav-item mb-2" role="presentation">
            <button className="nav-link" id="tab-03" data-bs-toggle="pill" data-bs-target="#tab-3" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i className="fa-solid fa-landmark"></i>Loan Repayments</button>
         </li>
         <li className="nav-item mb-2" role="presentation">
            <button className="nav-link" id="tab-04" data-bs-toggle="pill" data-bs-target="#tab-4" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i className="fa-solid fa-circle-dollar-to-slot"></i>Fundraising & Donations</button>
         </li>
         <li className="nav-item mb-2" role="presentation">
            <button className="nav-link" id="tab-05" data-bs-toggle="pill" data-bs-target="#tab-5" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i className="fa-solid fa-address-card"></i>Subscription Payments</button>
         </li>
         <li className="nav-item mb-2" role="presentation">
            <button className="nav-link" id="tab-06" data-bs-toggle="pill" data-bs-target="#tab-6" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i className="fa-solid fa-plane"></i>Travel Booking</button>
         </li>
         <li className="nav-item mb-2" role="presentation">
            <button className="nav-link" id="tab-07" data-bs-toggle="pill" data-bs-target="#tab-7" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i className="fa-solid fa-file-invoice-dollar"></i>Invoice & B2B Payments</button>
         </li>
      </ul>
   </div>
   <div className="tab-content container" id="pills-tabContent">
      <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="pills-collectPayment-tab" tabIndex="0">
         <div className="row align-items-center">
            <div className="col-xl-5 col-lg-12 col-md-12">
               <div className="tab-img">
                  <img src="/assets/img/bill-payment.png" title="Bill Payments" alt="Payments online" style={{"width":"100%"}} />
               </div>
            </div>
            <div className="col-xl-7 col-lg-12 col-md-12">
               <div className="card border-0 bg-bx-1">
                  <div className="card-body">
                     <h3 className="card-title">Bill Payments</h3>
                     <h4 className="card-text p-0 m-0">Our digital ledger platform enables streamlined corporate billing, so you can manage customer dues and process invoices with complete peace of mind. </h4>
                     <ul className="p-0 m-0">
                        <li>
                           <h4>For the purpose of streamlining your financial activities, Payzo provides a safe and easy bill payment service. Online bill payment processing and management are made simple with our payment gateway services.</h4>
                        </li>
                        <li>
                           <h4>Safe Transaction Processing: Our top emphasis is security. To guarantee the security of every transaction, we use cutting-edge encryption and anti-fraud procedures.</h4>
                        </li>
                        <li>
                           <h4>Numerous Payment Methods: Credit cards, debit cards, net banking, UPI, and mobile wallets are just a few of the many payment methods that our payment gateway accepts.</h4>
                        </li>
                        <li><h4>Tailored Billing Solutions: We recognize that every company has different needs when it comes to billing. You can modify our payment gateway to meet your unique requirements.</h4></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div> 
      <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-02" tabIndex="0">
         <div className="row align-items-center ">
            <div className="col-xl-5 col-lg-12 col-md-12">
               <div className="tab-img">
                  <img src="/assets/img/pay-link2.png" title="Sell Products" alt="Secure Transaction Processing" style={{"width":"100%"}} />
               </div>
            </div>
            <div className="col-xl-7 col-lg-12 col-md-12">
               <div className="card border-0 bg-bx-2">
                  <div className="card-body">
                     <h3 className="card-title">Sell Products</h3>
                     <ul className="p-0">
                        <li>
                           <h4 className="card-text">With a goal of improving client pleasure and streamlining your online sales, Payzo provides a full range of payment gateway services.

 
</h4>
                        </li>
                         <li>
                           <h4> Secure Transaction Processing: To protect your clients' sensitive payment information, our payment gateway uses strong security measures and industry-standard encryption.</h4>
                        </li>
                        <li>
                           <h4>Numerous Payment Methods: Credit cards, debit cards, net banking, UPI, and mobile wallets are just a few of the many payment methods that our payment gateway accepts. </h4>
                        </li>
                        <li>
                           <h4>Tailored Billing Solutions: We recognize that every company has different needs when it comes to billing. You can modify our payment gateway to meet your unique requirements.
</h4>
                        </li>
                       
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-03" tabIndex="0">
         <div className="row align-items-center ">
            <div className="col-xl-5 col-lg-12 col-md-12">
               <div className="tab-img">
                  <img src="/assets/img/pay-link3.png" title="Loan Repayments" alt="Credit History" style={{"width":"100%"}} />
               </div>
            </div>
            <div className="col-xl-7 col-lg-12 col-md-12">
               <div className="card border-0 bg-bx-3">
                  <div className="card-body">
                     <h3 className="card-title">Loan Repayments</h3>
                     <ul className="p-0">
                        <li>
                           <h4 className="card-text">With a goal of improving client pleasure and streamlining your online sales, Payzo provides a full range of payment gateway services. </h4>
                        </li>
                        <li>
                           <h4>The standard eligibility requirements are being of legal age, having a reliable source of income, and residing in the nation in which the loan is being issued. </h4>
                        </li>
                        
                        <li>
                           <h4>Credit History: Your credit history might be examined depending on the kind of loan. A high credit score may help you be approved for a loan more easily and may have an impact on the terms of the loan, including the interest rate. </h4>
                        </li>
                        <li>
                           <h4>Application Process: Using Payzo to apply for a loan is a simple and fast process. By submitting the required paperwork and data, you can finish the application process online.

</h4>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="tab-04" tabIndex="0">
         <div className="row align-items-center ">
            <div className="col-xl-5 col-lg-12 col-md-12">
               <div className="tab-img">
                  <img src="/assets/img/pay-link4.png" title="Fundraising & Donations" alt="payment service" style={{"width":"100%"}} />
               </div>
            </div>
            <div className="col-xl-7 col-lg-12 col-md-12">
               <div className="card border-0 bg-bx-4 pl-0.5">
                  <div className="card-body">
                     <h3 className="card-title">Fundraising & Donations</h3>
                     <ul className="p-0">
                        <li>
                           <h4 className="card-text"> You can easily manage recurring payments using Payzo's secure and seamless subscription payment service.</h4>
                        </li>
                        <li>
                           <h4>Easy-to-use Subscription Administration: Our payment gateway has powerful features that make it simple for you to set up, adjust, and cancel subscriptions. You may save time and work by creating subscription plans, defining billing cycles, and automating the collection of payments.</h4>
                        </li>
                        <li>
                           <h4>Enhanced Security: The protection of the sensitive data about your donors is our top priority at Payzo.</h4>
                        </li>
                        <li>
                           <h4>Customized Donation Pages: Make donation pages that are unique to you, your cause, and your donors. With our platform, you can add your branding, eye-catching images, and strong text to personalize your donation pages.</h4>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="tab-pane fade" id="tab-5" role="tabpanel" aria-labelledby="tab-05" tabIndex="0">
         <div className="row align-items-center ">
            <div className="col-xl-5 col-lg-12 col-md-12">
               <div className="tab-img">
                  <img src="/assets/img/pay-link5.png" title="Subscription Payments" alt="seamless subscription payment service" style={{"width":"100%"}} />
               </div>
            </div>
            <div className="col-xl-7 col-lg-12 col-md-12">
               <div className="card border-0 bg-bx-5">
                  <div className="card-body">
                     <h3 className="card-title">Subscription Payments</h3>
                     <ul className="p-0">
                        <li>
                           <h4 className="card-text">You can easily manage recurring payments using Payzo's secure and seamless subscription payment service. </h4>
                        </li>
                        <li>
                           <h4>Easy-to-use Subscription Administration: Use Payzo to streamline your subscription management procedure. Our payment gateway has powerful features that make it simple for you to set up, adjust, and cancel subscriptions. </h4>
                        </li>
                        <li>
                           <h4>Flexible Billing Options: Customize your subscription packages to your company's needs. Depending on the billing cycle you offer�monthly, quarterly, or annual�our payment gateway can accommodate them all. 
 </h4>
                        </li>
                        <li>
                           <h4>Automated Renewal Reminders: By using automated renewal reminders, you may lower attrition and boost subscriber retention. Subscribers receive timely reminders about impending subscription renewals from our payment gateway.
 </h4>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="tab-pane fade" id="tab-6" role="tabpanel" aria-labelledby="tab-06" tabIndex="0">
         <div className="row align-items-center ">
            <div className="col-xl-5 col-lg-12 col-md-12">
               <div className="tab-img">
                  <img src="/assets/img/pay-link6.png" title="Travel Booking" alt="Simple Payments Online" style={{"width":"100%"}} />
               </div>
            </div>
            <div className="col-xl-7 col-lg-12 col-md-12">
               <div className="card border-0 bg-bx-6">
                  <div className="card-body">
                     <h3 className="card-title">Travel Booking</h3>
                     <ul className="p-0">
                        <li>
                           <h4 className="card-text">Reservation of Travel Travelers and travel suppliers can have a hassle-free and seamless travel booking experience with Payzo's secure and seamless payment gateway solution. <br />Simple Payments Online: Major credit cards, debit cards, net banking, UPI, and mobile wallets are all supported by our payment gateway, offering a range of payment alternatives to accommodate the needs of any traveler. </h4>
                        </li>
                        <li>
                           <h4>Safe Transactions: To protect sensitive data, our payment gateway uses strong security methods like tokenization and encryption. </h4>
                        </li>
                        <li>
                           <h4>Multi-Currency Support: Travelers can pay with ease and transparency using Payzo's payment gateway in the currency of their choice. Real-time transaction monitoring and reporting allows you to stay up to date on your trip arrangements.
</h4>
                        </li>
                        <li>
                           <h4>Transaction Monitoring and Reporting: Stay informed about your travel bookings with real-time transaction monitoring and reporting. </h4>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="tab-pane fade" id="tab-7" role="tabpanel" aria-labelledby="tab-07" tabIndex="0">
         <div className="row align-items-center ">
            <div className="col-xl-5 col-lg-12 col-md-12">
               <div className="tab-img">
                  <img src="/assets/img/pay-link7.png" title="Invoice & B2B Payments" alt="B2B payments" style={{"width":"100%"}} />
               </div>
            </div>
            <div className="col-xl-7 col-lg-12 col-md-12">
               <div className="card border-0 bg-bx-7">
                  <div className="card-body">
                     <h3 className="card-title">Invoice & B2B Payments</h3>
                     <ul className="p-0">
                        <li>
                           <h4 className="card-text">With the goal of streamlining B2B payments and streamlining the invoicing process, Payzo provides a complete payment gateway solution.</h4>
                        </li>
                        <li>
                           <h4>Adaptable Payment Choices: Your B2B clients may easily make payments thanks to the variety of payment methods that our payment gateway allows. Credit cards, debit cards, net banking, UPI, and other electronic payment options are all acceptable.</h4>
                        </li>
                        <li>
                           <h4>Numerous Payment Methods: Credit cards, debit cards, net banking, UPI, and mobile wallets are just a few of the many payment methods that our payment gateway accepts.</h4>
                        </li>
                        <li>
                           <h4>Recurring Payments: To enable automatic and hassle-free payments for your B2B clients, set up recurring billing cycles. </h4>
                        </li>
                        <li>
                           <h4>Tracking and Reminders for Invoices: Our user-friendly dashboard offers a thorough summary of all invoice statuses, including paid, outstanding, and past due invoices.</h4>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div></section>
      <FAQ />
    </>
  );
}
