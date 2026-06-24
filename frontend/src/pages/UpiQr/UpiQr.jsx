import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function UpiQr() {
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
               <h1 className=" mb-3 fw-bold">Payments With UPI QR Payments Codes: A Convenient and Secure Way to Pay</h1>
               <h3 className="mb-40 ">A UPI app, like Google Pay, Paytm, or PhonePe, generates a unique QR code that is known as a UPI QR Payments code. The merchant's details, including their VPA (Virtual Payment Address) and UPI ID, are contained in the QR code.</h3>
               <a href="/contact-us" className="btn hero-btn">Sign Up Now<span><i className="fa-solid fa-arrow-right ms-2"></i></span></a>
            </div>
         </div>
         <div className="col-xxl-6 col-xl-5 col-lg-5">
            <div className="email-hero-right mt-40 mt-lg-0">
               <img src="/assets/img/upiqr-1.png" title="Scan to Pay" alt="Payments With UPI QR Payments Codes" className="img-fluid animated2" />
            </div>
         </div>
      </div>
   </div>
</section>
<section className="midsec bg-primary-gradient position-relative zindex-1 mt-5 mb-5" >
   <div className="container">
      <div className="row justify-content-between align-items-center">
         <div className="col-lg-6 order-2 order-lg-1">
            <div className="migrate-feature-img mb-5 mb-lg-0">
               <img src="/assets/img/upi-sc.jpg" title="Scan to Pay" alt="Payments With UPI QR Payments Codes" className="img-fluid" />
            </div>
         </div>
         <div className="col-xl-5 col-lg-6 order-2 order-lg-2">
            <div className="migrate-content">
               <div className="title-head ">
                  <h6 className="fw-bold" style={{"color":"#000"}}>UPI QR Payments code</h6>
                  <h2 className="pb-3 mb-0">Who Can Use UPI QR Payments Code?</h2>
               </div>
               <h4 className="mb-2 mt-3">A Quick Response (QR) code that is utilized in the context of Unified Payments Interface (UPI) payments in India is referred to as a UPI QR Payments code.To collect UPI payments and link payments with specific units, each unit has a UPI QR Payments code.</h4>
               <ul className="p-0 justify-content-center">
                  <li><strong style={{"color":"var(--dark-bg-1)"}}>Multiple - chain businesses</strong> Multiple-chain companies include eateries, tour operators, jewelry showrooms, movie theaters, retail establishments, pharmacies, etc.</li>
                  <li> UPI QR Payments codes allow payment processing for everyone in India who has a bank account and a smartphone. People, merchants, companies of all sizes, governmental bodies, and non-profit organizations are included in this.</li>
                  <li><strong style={{"color":"var(--dark-bg-1)"}}>Multi - department institutions</strong>
                     Medical facilities, educational institutions, universities, and auto repair shops are examples of multi-department establishments.
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>
<div className="container-fluid">
   <div className="payqr-back-area text-center rounded-10 mt-4 mb-4 position-relative zindex-1 overflow-hidden">
      <img src="/assets/img/mb-circle-left.png" title="Payzo" alt="Payment Gateway" className="position-absolute left-top" />
      <img src="/assets/img/mb-circle-right.png" className="position-absolute right-bottom" title="Payzo" alt="Payment Gateway" />
      <div className="partners">
         <div className="text-center"><span className="upi-sec-head text-center text-white">Payzo Supports All UPI Apps
            </span>
         </div>
         <div className="partners-img d-flex flex-wrap justify-content-center mt-5 text-center">
            <div className="img-box"> <img className="partner-logo" src="/assets/img/phonepe.png" title="Phonepe" alt="Phonepe" /></div>
            <div className="img-box"><img className="partner-logo" src="/assets/img/paytm (1).png" title="Paytm" alt="Paytm" /></div>
            <div className="img-box"><img className="partner-logo" src="/assets/img/rupay.png" title="Rupay" alt="Rupay" /></div>
            <div className="img-box"><img className="partner-logo" src="/assets/img/bhim.png" title="Bhim" alt="Bhim" /></div>
            <div className="img-box"><img className="partner-logo" src="/assets/img/upi.png" title="Upi" alt="Upi" /></div>
            <div className="img-box"><img className="partner-logo" src="/assets/img/gpay.png" title="Google pay" alt="Gpay" /></div>
         </div>
      </div>
   </div>
</div>
<section className="midsec2 bg-primary-gradient mb-5" style={{"padding":"10px 0"}}>
   <div className="container">
      <div className="row justify-content-between align-items-center mt-5">
         <div className="col-xl-5 col-lg-6 order-xl-1 order-lg-2 order-md-2">
            <div className="migrate-content">
               <div className="title-head ">
                  <h6 className="fw-bold" style={{"color":"#000"}}>UPI QR Payments code</h6>
                  <h2 className=" mb-0">How to pay with a UPI QR Payments code</h2>
               </div>
               <h4 className="mb-4">To pay with a UPI QR Payments code, simply open your UPI app and scan the QR code. Your UPI app will automatically fetch the merchant's details and populate the payment amount field. </h4>
               <div className="progress-div">
                  <div className="step-bx-1 active">
                     <div className="current_step">
                     </div>
                     <div className="link1"></div>
                  </div>
                  <div className="content-step1">
                     <h5>Step1</h5>
                     <h6>Choose a QR Code Generator</h6>
                     <p>Choose a reliable and trusted generator that suits your requirements.</p>
                  </div>
               </div>
               <div className="progress-div">
                  <div className="step-bx-1 ">
                     <div className=" step2"></div>
                     <div className="link1"></div>
                  </div>
                  <div className="content-step2 ">
                     <h5>Step2</h5>
                     <h6>Generate the QR Code & Fill Detail</h6>
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
                     <h6>Download or Save the QR Code</h6>
                     <p>You can then review the payment details and enter your UPI PIN to complete the transaction.</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-6 order-xl-2 order-lg-1 order-md-1">
            <div className="migrate-feature-img mb-5 mb-lg-0">
               <img src="/assets/img/upiqr-2.png" title="UPI QR Payments code" alt="qr code" className="img-fluid" style={{"borderRadius":"20px"}} />
            </div>
         </div>
      </div>
   </div>
</section>
      
    </>
  );
}
