import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQ from '../home/FAQ';

export default function AutoCollect() {
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
                            <h1 className=" mb-3 fw-bold">Automated Reconciliation & Smart Collection by Payzo</h1>
                            <h3 className="mb-40 ">Empower your business with a forward-looking payment suite, engineered for seamless digital commerce. Support for over 150 transaction channels enables frictionless customer checkout.
</h3>
                            <a href="/contact-us" className="btn hero-btn">Sign Up Now<span><i className="fa-solid fa-arrow-right ms-2"></i></span></a>
                        </div>
                    </div>
    <div className="col-xxl-6 col-xl-5 col-lg-5">
        <div className="email-hero-right mt-40 mt-lg-0">
            <img src="/assets/img/pay-link-img.png" alt="not found" className="img-fluid animated2" />
        </div>
      </div>
     </div>
    </div>
</section>


<section className="choose-payment-sec ">
  
<div className="container">
   <div className="title-head text-center">
  <span>Overview</span>
   <h2 className="pt-2">Payzo: Leverage Virtual Accounts for Automated Reconciliation</h2>
 </div>
</div>

<div className="container">
  <div className="features-items text-center">
     <div className="row">
            
           <div className="f-bx-1 col-lg-4 col-md-6" style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item pg-item">
                    <div className="icon">
                        <img decoding="async" src="/assets/icons/Real-Time.gif" alt="Icon" />
                    </div>
                    <div className="info">
                       <h4>Real-Time Reconciliation</h4>
                       <h5>Automatically match incoming payments to specific sales records and update status feeds instantly.</h5>
                    </div>
                  
               </div>
           </div> 
           
             <div className="f-bx-1 col-lg-4 col-md-6 " style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item pg-item">
                    <div className="icon">
                        <img decoding="async" src="/assets/icons/flex-pay.gif" alt="Icon" />
                     </div>
                   <div className="info">
                       <h4> Flexible Payment Settlements</h4>
                       <h5>Experience 365-day flexible payout routing. Configure settlements directly to your bank account within minutes or schedule them as needed.</h5>
                    </div>
                   
               </div>
           </div> 
           
          
             <div className="f-bx-1 col-lg-4 col-md-6 " style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item pg-item">
                   <div className="icon">
                        <img decoding="async" src="/assets/icons/Split_Inc.gif" alt="Icon" />
                    </div>
                      <div className="info">
                       <h4>Split Incoming Payments</h4>
                       <h5>Easily automate incoming collections and split funds among multiple vendors or partners instantly using pre-configured split rules.</h5>
                    </div>
                  
                
                   
               </div>
           </div> 
           
           
           </div>

      <div className="row mt-4">
            
           <div className="f-bx-1 col-lg-4 col-md-6" style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item pg-item">
                     <div className="icon">
                                <img decoding="async" src="/assets/icons/dash.gif" alt="Icon" />
                            </div>  
                   <div className="info">
                       <h4>Centralized Dashboard</h4>
                       <h5>Monitor sales trends and financial metrics across divisions using our unified dashboards and comprehensive PDF/CSV report exports.</h5>
                    </div>
                 
               </div>
           </div> 
           
             <div className="f-bx-1 col-lg-4 col-md-6 " style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item pg-item">
                      <div className="icon">
                          <img decoding="async" src="/assets/icons/amt-lock.gif" alt="Icon" />
                      </div>
                   <div className="info">
                       <h4>Amount Lock and Remitter Lock</h4>
                       <h5> 
Enable amount locks and remitter restrictions to ensure payments are accepted only from pre-approved customers, increasing security. </h5>
                    </div>
                 
               </div>
           </div> 
           
           
             <div className="f-bx-1 col-lg-4 col-md-6" style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item pg-item">
                    <div className="icon">
                        <img decoding="async" src="/assets/icons/control-pay.gif" alt="Icon" />
                    </div>
                   <div className="info">
                       <h4> Control & Payment Rejection</h4>
                       <h5>Spin up or close virtual account numbers dynamically. Any payments routed to terminated details are automatically returned to the sender.</h5>
                    </div>
                   
               </div>
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
                     <img decoding="async" src="/assets/img/slide01.jpg" alt="Dashbaord"  />
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
                     <img decoding="async" src="/assets/img/slide02.jpg" alt="Dashbaord"  />
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
                     <img decoding="async" src="/assets/img/slide03.jpg" alt="Dashbaord"  />
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
                     <img decoding="async" src="/assets/img/upi.jpg" alt="Dashbaord"  />
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
                     <img decoding="async" src="/assets/img/wallet-1.jpg" alt="Dashbaord"  />
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
                     <img decoding="async" src="/assets/img/emi-pay.png" alt="Dashbaord" />
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
                     <img decoding="async" src="/assets/img/bank-1.jpg" alt="Dashbaord"  />
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
