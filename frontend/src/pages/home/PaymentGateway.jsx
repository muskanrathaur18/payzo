import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQ from './FAQ';

export default function PaymentGateway() {
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
               <h1 className=" mb-3 fw-bold">Next-Generation Payment Infrastructure for Your Enterprise </h1>
               <h3 className="mb-40 ">A <b>payment gateway</b> is an internet platform that lets companies take payments from clients online. Serving as a go-between for the merchant's bank account and the customer's bank, it processes the payment transaction and guarantees that the right money reaches both parties.</h3>
               <a href="/contact-us" className="btn hero-btn border-0">Sign Up Now<span><i className="fa-solid fa-arrow-right ms-2"></i></span></a>
            </div>
         </div>
         <div className="offset-1 col-xxl-4 col-xl-4 col-lg-4">
            <div className="email-hero-right mt-40 mt-lg-0">
               <img src="/assets/img/payment-1.png" alt="Payment Gateway" title="Payment Gateway" className="img-fluid animated2" />
            </div>
         </div>
      </div>
   </div>
</section>

<section className="choose-payment-sec">
   <div className="container">
      <div className="title-head text-center">
         <span>Overview</span>
         <h2 className="pt-2">Payzo Offers a Hassle-free Solution For Your Payment <br />Gateway</h2>
      </div>
   </div>
   <div className="container">
      <div className="features-items text-center">
         <div className="row">
            <div className="f-bx-1 col-lg-4 col-md-6" style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item pg-item">
                  <div className="icon">
                     <img decoding="async" src="/assets/gifs/Simple Integration.gif" title="Simple Integration" alt="Payment Gateway Inegration" />
                  </div>
                  <div className="info">
                     <h4>Simple Integration</h4>
                     <h5>Easily integrate our <b>best payment gateway service provider</b> with your existing systems to streamline transactions effortlessly.</h5>
                  </div>
               </div>
            </div>
            <div className="f-bx-1 col-lg-4 col-md-6 " style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item pg-item">
                  <div className="icon">
                     <img decoding="async" src="/assets/gifs/Multiple Payment.gif" title="Multiple Payment" alt="Payment Service Provider" />
                  </div>
                  <div className="info">
                     <h4>Multiple Payment Options</h4>
                     <h5>Payzo, the <b>best payment gateway for small business India</b>, offers a range of <b>payment gateway services</b> tailored to meet diverse business needs.
</h5>
                  </div>
               </div>
            </div>
            <div className="f-bx-1 col-lg-4 col-md-6 " style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item pg-item">
                  <div className="icon">
                     <img decoding="async" src="/assets/gifs/Payment Security (1).gif" title="Enhanced Security" alt="Enhanced Security" />
                  </div>
                  <div className="info">
                     <h4>Enhanced Security</h4>
                     <h5>With robust encryption and continuous monitoring, we ensure that every transaction is processed with maximum security and zero leaks.</h5>
                  </div>
               </div>
            </div>
         </div>
         <div className="row mt-4">
            <div className="f-bx-1 col-lg-4 col-md-6" style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item pg-item">
                  <div className="icon">
                     <img decoding="async" src="/assets/gifs/Transaction Monitoring.gif" title="Transaction Monitoring" alt="payout transactions"  />
                  </div>
                  <div className="info">
                     <h4>Transaction Monitoring</h4>
                     <h5>Track, analyze, and review all payments in real-time to detect anomalies and keep your cash flow secure.</h5>
                  </div>
               </div>
            </div>
            <div className="f-bx-1 col-lg-4 col-md-6 " style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item pg-item">
                  <div className="icon">
                     <img decoding="async" src="/assets/gifs/Indian Rupee.gif" title="Customizable Payment" alt="Payment Gateway Services"  />
                  </div>
                  <div className="info">
                     <h4>Customizable Payment</h4>
                     <h5>As a leading <b>payment gateway provider</b> in Delhi and Jaipur, Payzo offers scalable solutions to accommodate businesses of all sizes.</h5>
                  </div>
               </div>
            </div>
            <div className="f-bx-1 col-lg-4 col-md-6" style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item pg-item">
                  <div className="icon">
                     <img decoding="async" src="/assets/gifs/Reliable Support.gif" title="Reliable Support" alt="Payment Gateway Services"  />
                  </div>
                  <div className="info">
                     <h4>Reliable Support</h4>
                     <h5>Payzo provides round-the-clock support, making it the <b>best payment gateway service provider</b> for businesses in Delhi and Jaipur. </h5>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

<section id="why-us" className="why-us ">
   <div className="container aos-init aos-animate" data-aos="fade-up">
      <div className="row">
         <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
            <div className="content">
               <h6 className="fw-bold" style={{"color":"#fff"}}>Payment Settlement</h6>
               <h3 className="text-light fw-bold">Establish and Configure Your Payment System Within Minutes</h3>
               <ul className="p-0">
                  <li><i className="ri-check-double-line"></i>Secure and Reliable Payment Gateway.</li>
                  <li><i className="ri-check-double-line"></i>Seamless onboarding with minimum documentation.</li>
                  <li><i className="ri-check-double-line"></i>Accept payments & issue refunds with a single click.</li>
                  <li><i className="ri-check-double-line"></i>Get detailed payments insights.</li>
                  <li><i className="ri-check-double-line"></i>Payzo recognizes that every business has unique requirements. </li>
               </ul>
            </div>
         </div>
         <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img aos-init aos-animate">
            <img src="/assets/img/pay-right-1.png" title="Secure and Reliable Payment Gateway" alt="Accept payments" style={{"width":"100%"}} />
         </div>
      </div>
      <div className="row bottom-box mt-5">
         <div className="col-lg-8 col-md-8">
            <p> Payzo understands that each business has unique needs, and we tailor our <b>payment gateway services</b> accordingly</p>
         </div>
         <div className="col-lg-4 col-md-4 text-end">
            <a href="/contact-us" className="btn-learn-more">Check Out Demo<i className="fa-solid fa-arrow-right" style={{"marginLeft":"5px"}}></i></a>
         </div>
      </div>
   </div>
</section>

<section className="midsec bg-primary-gradient position-relative zindex-1 mt-5 mb-5">
   <div className="container-fluid">
      <div className="row align-items-center mid-sec-row">
         <div className="offset-1 col-xl-5 col-lg-11 order-2 order-lg-1">
            <div className="migrate-feature-img mb-5 mb-lg-0">
               <img src="/assets/img/dash.png" title="Payzo Dashboard" alt="B2B and B2C companies in India" className="img-fluid" />
            </div>
         </div>
         <div className="col-xl-5 col-lg-12 order-1 order-lg-2">
            <div className="migrate-content">
               <div className="title-head">
                  
                  <h3 className="pb-3 mb-0">A Comprehensive Console Placing You in Control</h3>
               </div>
               <h4 className="mb-2 mt-3">As a <b>leading payment gateway service provider</b>, Payzo caters to both B2B and B2C businesses across India, providing complete control over payment processing through our advanced dashboard.

               </h4>
               <ul className="p-0 justify-content-center">
                  <li className="d-flex align-items-center"><span><i className="ri-check-double-line"></i></span><span><strong style={{"color":"var(--dark-bg-1)"}}> Transaction Management: </strong>View real-time data on all of your transactions with the Payzo dashboard. Take care of your merchant accounts. Establish and maintain payment linkages Establish recurrent payments. Produce thorough reports.
</span>
                  </li>
                  <li className="d-flex align-items-center" style={{"color":"var(--dark-bg-1)"}}><span ><i className="ri-check-double-line"></i></span><span><strong style={{"color":"var(--dark-bg-1)"}}>Reporting and Analytics: </strong>Payment gateways frequently offer reporting and analytics tools that let you see sales patterns, transaction history, and other pertinent information.
</span></li>

                  <li className="d-flex align-items-center" style={{"color":"var(--dark-bg-1)"}}><span><i className="ri-check-double-line"></i></span><span><strong style={{"color":"var(--dark-bg-1)"}}>Integration and Customization: </strong>Seamless integration with various e-commerce platforms and shopping carts makes Payzo the <b>best payment gateway for small business India.</b>
</span></li>
                  
                  <li className="d-flex align-items-center" style={{"color":"var(--dark-bg-1)"}}><span style={{"color":"var(--dark-bg-1)"}}><i className="ri-check-double-line"></i></span><span><strong style={{"color":"var(--dark-bg-1)"}}>Fraud detection and prevention: </strong> Modern fraud detection and prevention algorithms are used by Payzo to safeguard your company.
</span></li>
               </ul>
               <div className="migrate-btns">
                  <a href="/contact-us" className="hero-btn me-4">Sign Up Now<i className="fa-solid fa-arrow-right" style={{"marginLeft":"5px"}}></i></a>
               </div>
            </div>
         </div>
      </div>
   </div>
  
  <div className="container-fluid">
      <div className="row  align-items-center mid-sec-row">
         <div className="offset-1 col-xl-5 col-lg-11 order-1 order-xl-1 order-lg-2">
            <div className="migrate-content">
               <div className="title-head">
                  
                  <h3 className="pb-3 mb-0"> Launch and Track Campaigns directly via the Merchant Console.</h3>
               </div>
               <h4 className="mb-2 mt-3">Access and control all of your account information, including payments, refunds, and disputes, transfers, invoices, subscriptions, webhooks, customer IDs, API keys, and accounts. The Payzo dashboard's capability to manage all promotional offers in one location is among its most noteworthy features.</h4>
               <ul className="p-0 justify-content-center">
                  <li className="d-flex align-items-center">
                     <span><i className="ri-check-double-line"></i></span>
                     <span><strong>Centralized management: </strong> It's simple to keep track of all of your active and expired promotional offers when you can handle them all from a single, easily accessible spot.

                     </span>
                  </li>
                  <li className="d-flex align-items-center"><span><i className="ri-check-double-line"></i></span><span><strong>Simple to use: </strong> Even those without any technological background can easily use the Payzo dashboard.

                     </span>
                  </li>
                  <li className="d-flex align-items-center"><span><i className="ri-check-double-line"></i></span><span><strong>Flexibility: </strong> You can design a huge range of promotional offers, including free shipping, flat rate reductions, and percentage discounts.
                     </span>
                  </li>
                  <li className="d-flex align-items-center"><span><i className="ri-check-double-line"></i></span><span><strong>Real-time reporting: </strong> You are able to monitor how well your promotional offers are performing in real time, allowing you to observe.</span></li>
               </ul>
               <div className="migrate-btns">
                  <a href="/contact-us" className="hero-btn me-4">Sign Up Now<i className="fa-solid fa-arrow-right" style={{"marginLeft":"5px"}}></i></a>
               </div>
            </div>
         </div>
         <div className="col-xl-5 col-lg-12 order-2 order-xl-2 order-lg-1">
            <div className="migrate-feature-img mb-5 mb-lg-0">
               <img src="/assets/img/pay2.jpg" title="Payzo Dashboard" alt="payment gateway" className="img-fluid" />
            </div>
         </div>
      </div>
   </div>
</section>

<section className="pg-method-overview">
   <div className="container">
      <div className="title-head text-center">
         <span>Payment Methods</span>
         <h2 className="pt-2">Provide a Wealth of Payment Methods to Your Consumers</h2>
      </div>
   </div>
   <div className="container" id="autoLoadSection">
      <div className="owl-carousel-overview owl-carousel owl-theme">
         <div className="item">
            <div className="row align-items-center">
               <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="left-info text-light">
                     <span>01</span>
                     <h4>Credit and Debit Cards</h4>
                     <h5>Support credit and debit card payments from all primary global networks (Visa, Mastercard, Amex, RuPay). Customers benefit from clean form validation and secure PCI-DSS transactions.</h5>
                     <a href="/payment-links" className="btn hero-btn border-0">Read More<i className="fas fa-arrow-right ms-2" ></i></a>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="right-info">
                     <img decoding="async" src="/assets/img/slide01.jpg" title="Credit & Debit Cards" alt="Bank Account"  />
                  </div>
               </div>
            </div>
         </div>
         <div className="item">
            <div className="row align-items-center">
               <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                  <div className="left-info text-light" >
                     <span>02</span>
                     <h4>Digital Wallets</h4>
                     <h5> Allow swift transactions using major mobile wallets and contact-free systems like GPay, Apple Pay, PhonePe, Paytm, and more, streamlining mobile shopping checkouts.</h5>
                     <a href="/payment-links" className="btn hero-btn border-0">Read More<i className="fas fa-arrow-right ms-3" ></i></a>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="right-info">
                     <img decoding="async" src="/assets/img/slide02.jpg" title="Digital Wallets" alt="Payment Wallet"  />
                  </div>
               </div>
            </div>
         </div>
         <div className="item">
            <div className="row align-items-center">
               <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                  <div className="left-info text-light" >
                     <span>03</span>
                     <h4>Net Banking</h4>
                     <h5> Integrate with leading public and private banks to let clients authorize payments directly from their savings or current accounts via net banking portals. </h5>
                     <a href="/payment-links" className="btn hero-btn border-0">Read More<i className="fas fa-arrow-right ms-3" ></i></a>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="right-info">
                     <img decoding="async" src="/assets/img/slide03.jpg" title="Net Banking" alt="Online Transfer"  />
                  </div>
               </div>
            </div>
         </div>
         <div className="item">
            <div className="row align-items-center">
               <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                  <div className="left-info text-light" >
                     <span>04</span>
                     <h4>UPI (Unified Payments Interface)</h4>
                     <h5>Enable instant bank transfers through India's premier real-time payment protocol (UPI). Accept transactions using mobile UPI handles, QR codes, or deep links for immediate settlement.</h5>
                     <a href="/upiqr" className="btn hero-btn border-0">Read More<i className="fas fa-arrow-right ms-3" ></i></a>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="right-info">
                     <img decoding="async" src="/assets/img/upi.jpg" title="UPI" alt="Online Payment"  />
                  </div>
               </div>
            </div>
         </div>
         <div className="item">
            <div className="row align-items-center">
               <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                  <div className="left-info text-light" >
                     <span>05</span>
                     <h4>Mobile Wallets</h4>
                     <h5>Accept transactions directly from popular digital wallets. This lets customers leverage pre-loaded balances for instant payment authorization.</h5>
                     <a href="/payment-links" className="btn hero-btn border-0">Read More<i className="fas fa-arrow-right ms-3" ></i></a>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="right-info">
                     <img decoding="async" src="/assets/img/wallet-1.jpg" title="Mobile Wallet" alt="Popular Mobile Wallet"  />
                  </div>
               </div>
            </div>
         </div>
         <div className="item">
            <div className="row align-items-center">
               <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                  <div className="left-info text-light" >
                     <span>06</span>
                     <h4>EMI (Equated Monthly Installments)</h4>
                     <h5>Increase average order value by offering convenient split-payment and EMI options at checkout. Support credit and debit card EMI from leading banks.</h5>
                     <a href="/payment-links" className="btn hero-btn border-0">Read More<i className="fas fa-arrow-right ms-3" ></i></a>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="right-info">
                     <img decoding="async" src="/assets/img/emi-pay.png" title="EMI" alt="Payzo " />
                  </div>
               </div>
            </div>
         </div>
         <div className="item">
            <div className="row align-items-center">
               <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                  <div className="left-info text-light" >
                     <span>07</span>
                     <h4>Bank Transfers</h4>
                     <h5>Provide customers with unique virtual bank coordinates to accept high-value NEFT, RTGS, or IMPS payments, with automatic ledger matching.</h5>
                     <a href="/bank-verification" className="btn hero-btn border-0">Read More<i className="fas fa-arrow-right ms-3" ></i></a>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="right-info">
                     <img decoding="async" src="/assets/img/bank-1.jpg" title="Bank Transfer" alt="Dashbaord"  />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
      <FAQ />
    </>
  );
}
