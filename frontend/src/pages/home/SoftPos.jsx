import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQ from './FAQ';

export default function SoftPos() {
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
                <h1 className=" mb-3 fw-bold">Unlock the Power of Mobile Payments with SoftPOS </h1>
                            
                <h3 className="mb-40 ">The top payment gateway service provider in India, Payzo provides Soft POS systems to businesses of all kinds. Our <b>SoftPOS India</b> systems are inexpensive, safe, and simple to use.</h3>
                <a href="/contact-us" className="btn hero-btn ">Sign Up Now<span><i className="fa-solid fa-arrow-right ms-2"></i></span></a>
            </div>
     </div>
  <div className="col-xxl-6 col-xl-5 col-lg-5">
        <div className="email-hero-right mt-40 mt-lg-0">
            <img src="/assets/img/money-trans.png" alt="not found" className="img-fluid animated2" />
  </div>
      </div>
     </div>
    </div>
</section>

<section className="choose-payment-sec">

<div className="container">
   <div className="title-head text-center">
  <span>Overview</span>
   <h2 className="pt-2">Revolutionizing Payment Accessibility: Who Can Use SoftPOS?</h2>
 </div>
</div>

<div className="container">
  <div className=" text-center">
     <div className="row item-bx">
            
           <div className="f-bx-1 col-lg-4 col-md-6" style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item">
                     <div className="icon">
                                <img decoding="async" src="/assets/icons/sofp-1.gif" title="Small Businesses" alt="startups" />
                            </div>
                   <div className="info">
                       <h4>Small businesses and startups</h4>
                       <h5>SoftPOS offers an affordable and accessible payment solution for small businesses and startups.</h5>
                    </div>
                  
               </div>
           </div> 
           
             <div className="f-bx-1 col-lg-4 col-md-6 " style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item">
                    <div className="icon">
                        <img decoding="async" src="/assets/icons/sofp-2.gif" title="Mobile vendors" alt="SoftPOS" />
                     </div>
                   <div className="info">
                       <h4>Mobile vendors</h4>
                       <h5>Food trucks, market stalls, event vendors, and other mobile businesses can benefit from SoftPOS . </h5>
                    </div>
                   
               </div>
           </div> 
           
           
             <div className="f-bx-1 col-lg-4 col-md-6 " style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item">
                   <div className="icon">
                        <img decoding="async" src="/assets/icons/sofp-3.gif" title="Service Providers" alt="SoftPOS Sevices" />
                    </div>
                      <div className="info">
                       <h4>Service Providers</h4>
                       <h5>Experts offer their services to SoftPOS as a <b>soft_pos provider</b> to facilitate customer payments.</h5>
                    </div>
                  
                
                   
               </div>
           </div> 
           
           
           </div>

      <div className="row mt-4 item-bx">
            
           <div className="f-bx-1 col-lg-4 col-md-6" style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item">
                     <div className="icon">
                                <img decoding="async" src="/assets/icons/sofp-4.gif" title="Non-profit Organizations" alt="SoftPOS systems"  />
                            </div>  
                   <div className="info">
                       <h4>Non-profit organizations</h4>
                       <h5>SoftPOS systems can be used by charities and non-profits to take gifts and payments.</h5>
                    </div>
                 
               </div>
           </div> 
           
             <div className="f-bx-1 col-lg-4 col-md-6 " style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item">
                      <div className="icon">
                          <img decoding="async" src="/assets/icons/sofp-5.gif" title="Entrepreneurs" alt="solo-preneurs"  />
                      </div>
                   <div className="info">
                       <h4>Entrepreneurs and solo-preneurs</h4>
                       <h5>Individuals running their own businesses, handmade products,can benefit from SoftPOS to accept payments.</h5>
                    </div>
                 
               </div>
           </div> 
           
           
             <div className="f-bx-1 col-lg-4 col-md-6" style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item">
                    <div className="icon">
                        <img decoding="async" src="/assets/icons/sofp-6.gif" title="Cash-only businesses" alt="SoftPOS" />
                    </div>
                   <div className="info">
                       <h4>Cash-only businesses</h4>
                       <h5>SoftPOS allows cash-only businesses, such as local stores, street vendors, or small businesses, to accept card payments .</h5>
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
                  <h6 className="fw-bold" style={{"color":"#ee2f2a"}}>Payment Settlement</h6>
                <h3 className="text-light fw-bold text-capitalize"> Payzo is the best soft POS service provider in India</h3>
                 <ul className="p-0">
                  <li><span>Payzo is <b>India�s best Soft_POS provider </b>because we offer a number of advantages over other providers, including:</span>
</li>
                  <li className="d-flex align-items-center"><span><i className="ri-check-double-line"></i></span><span>Competitive pricing: We offer competitive pricing on our Soft POS solutions.</span>
</li>
                  <li className="d-flex align-items-center"><span><i className="ri-check-double-line"></i></span><span>Easy-to-use app: Our Soft POS app is easy to use and navigate.</span>
</li>
                  <li className="d-flex align-items-center"><span><i className="ri-check-double-line"></i></span><span>Secure payments: Our Soft POS solutions use the latest security technologies to protect customer data.</span>
</li>
                  <li className="d-flex align-items-center"><span><i className="ri-check-double-line"></i></span><span>24/7 World-Class Customer Support: We offer 24/7 World-Class Customer Support to help you with any questions or problems you may have.</span></li>
              
                 </ul>
            </div>
         </div>

          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img aos-init aos-animate">
              <img src="/assets/img/softpos.png" title="Soft POS Service" alt="Soft POS solutions" style={{"width":"100%"}} />
          </div>
        </div>
         
         <div className="row bottom-box mt-5">
          <div className="col-lg-8 col-md-8">
          <p> Check out the live demo to learn how Indic Pay works. No sign-up required!</p>
          </div>
          <div className="col-lg-4 col-md-4 text-end">
          <a href="/contact-us" className="btn-learn-more">Check Out Demo<i className="fa-solid fa-arrow-right" style={{"marginLeft":"5px"}}></i></a>
          </div>
         </div>


      </div>
    </section>
      <FAQ />
    </>
  );
}
