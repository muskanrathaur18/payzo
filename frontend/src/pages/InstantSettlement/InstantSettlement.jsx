import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQ from '../home/FAQ';

export default function InstantSettlement() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>
<section className="pay-sec-hero bg-secondary-gradient position-relative zindex-1 overflow-hidden">
   <img src="/assets/img/em-host-wave-left.svg" alt="shape" className="position-absolute start-0 bottom-0 zindex--1 soft-light opacity-50" />
   <img src="/assets/img/em-host-wave-right.svg" alt="shape" className="position-absolute end-0 bottom-0 zindex--1 soft-light opacity-50" />
   <div className="container">
      <div className="row align-items-center justify-content-between">
         <div className="col-xxl-6 col-xl-7 col-lg-7">
            <div className="pay-hero-content mt-50">
               <h1 className=" mb-3 fw-bold">Payzo: Lightning-Fast & Guaranteed Settlements</h1>
               <h3 className="mb-40 ">Say goodbye to settlement delays. Payzo's Instant Settlement feature ensures merchants receive their funds in real-time — without waiting for the traditional 2–3 business day clearing cycle. Get your money when you need it most, and fuel your business growth without interruption.</h3>
               <a href="/contact-us" className="btn hero-btn">Sign Up Now<span><i className="fa-solid fa-arrow-right ms-2"></i></span></a>
            </div>
         </div>
         <div className="col-xxl-6 col-xl-5 col-lg-5">
            <div className="email-hero-right mt-40 mt-lg-0">
               <img src="/assets/img/pay-s.png" title="Secure & Instant Settlement" alt="Instant Settlement" className="img-fluid animated2" />
            </div>
         </div>
      </div>
   </div>
</section>

<section className="mt-5">
   <div className="container-fluid">
      <div className="title-head text-center">
         <span>Powering Every Sector</span>
         <h2 className="pb-3 mb-0">Payzo Enables Seamless Payments Across All Major Industries</h2>
      </div>
      <div className="row justify-content-center mt-5">
         <div className="eshop-icon-tab ">
            <ul className="nav nav-tabs border-0 hm10-tab-control gap-4 justify-content-center" role="tablist">
               <li>
                  <a href="//ecommerce-industry" data-bs-toggle="tab" className="text-center bg-white" aria-selected="false" tabIndex="-1" role="tab">
                     <img src="/assets/icons/ecom01.gif" title="Secure & Instant Settlement" alt="Instant Settlement" className="img-fluid"  />
                     <h6 className="mb-0 mt-3">Ecommerce</h6>
                  </a>
               </li>
               
               <li>
                  <a href="#wp_hosting" data-bs-toggle="tab" className="text-center bg-white " aria-selected="true" role="tab">
                     <img src="/assets/icons/Hospital02.gif" title="Hospitality" alt="Hospitality Payment" className="img-fluid" />
                     <h6 className="mb-0 mt-3">Hospitality</h6>
                  </a>
               </li>
               
               <li>
                  <a href="#cloud_hosting" data-bs-toggle="tab" className="text-center bg-white" aria-selected="false" tabIndex="-1" role="tab">
                     <img src="/assets/icons/Travel03.gif" title="Travel and Tourism" alt="Travel" className="img-fluid"  />
                     <h6 className="mb-0 mt-3">Travel and Tourism</h6>
                  </a>
               </li>
               <li>
                  <a href="#vps_hosting" data-bs-toggle="tab" className="text-center bg-white" aria-selected="false" tabIndex="-1" role="tab">
                     <img src="/assets/icons/Store04.gif" title="Retail Store" alt="Retail Store" className="img-fluid"  />
                     <h6 className="mb-0 mt-3">Retail Store</h6>
                  </a>
               </li>
               <li>
                  <a href="#reseller_hosting" data-bs-toggle="tab" className="text-center bg-white" aria-selected="false" tabIndex="-1" role="tab">
                     <img src="/assets/icons/Email Subscription05.gif" title="Subscription Services" alt="Service Provider" className="img-fluid"  />
                     <h6 className="mb-0 mt-3">Subscription Services</h6>
                  </a>
               </li>
               <li>
                  <a href="#woocommerce" data-bs-toggle="tab" className="text-center bg-white" aria-selected="false" tabIndex="-1" role="tab">
                     <img src="/assets/icons/Restau01.gif" title="Restaurant" alt="Restaurants" className="img-fluid"  />
                     <h6 className="mb-0 mt-3">Restaurants</h6>
                  </a>
               </li>
            </ul>
         </div>
      </div>    
   </div>
</section>


<section id="why-us" className="why-us ">
   <div className="container aos-init aos-animate" data-aos="fade-up">
      <div className="row">
         <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
            <div className="content">
               <h6 className="fw-bold" style={{"color":"#fff"}}>Real-Time Settlement Benefits</h6>
               <h3 className="text-light fw-bold">How Payzo's Instant Settlements Transform Your Business Cash Flow:</h3>
               <ul className="p-0">
                  <li><i className="ri-check-double-line"></i><strong>Faster Access to Revenue: </strong>Unlock your earnings the moment a transaction completes — no waiting, no delays, and no disruption to your operational cash flow.</li>
                  
                  <li><i className="ri-check-double-line"></i><strong>Lower Operational Costs: </strong>Eliminate reliance on costly merchant cash advances and bridge loans by having your funds available exactly when you need them.</li>
                  <li><i className="ri-check-double-line"></i>Payzo understands that healthy cash flow is the backbone of every thriving business.</li>
                  <li><i className="ri-check-double-line"></i>Our platform gives you live transaction visibility and settlement status at every step.</li>
                  <li><i className="ri-check-double-line"></i>Every merchant gets a tailored settlement schedule that aligns with their business model.</li>
               </ul>
            </div>
         </div>
         <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img aos-init aos-animate">
            <img src="/assets/img/pay-right-1.png" title="Payment Settlement" alt="Instant Settlements" style={{"width":"100%"}} />
         </div>
      </div>
      <div className="row bottom-box mt-5">
         <div className="col-lg-8 col-md-8">
            <p>See Payzo's Instant Settlements in action — explore our live demo without any signup!</p>
         </div>
         <div className="col-lg-4 col-md-4 text-end">
            <a href="/contact-us" className="btn-learn-more">Book a demo<i className="fa-solid fa-arrow-right" style={{"marginLeft":"5px"}}></i></a>
         </div>
      </div>
   </div>
</section>
      <FAQ />
    </>
  );
}
