import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQ from '../home/FAQ';

export default function GamingIndustry() {
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
                <div className="row align-items-center">
                    <div className="col-xxl-6 col-xl-7 col-lg-7">
                        <div className="pay-hero-content mt-50">
                            <h1 className=" mb-3 fw-bold">Efficient Payment Solutions in the Gaming & iGaming Industry</h1>
                            <h3 className="mb-40 ">Payment gateways are a vital part of the operations of Gaming & iGaming firms, helping them to collect premiums, process claims, and conduct other financial transactions.
                                </h3>
                            <a href="/contact-us" className="btn hero-btn border-0">Sign Up Now<span><i className="fa-solid fa-arrow-right ms-2"></i></span></a>
                        </div>
                    </div>
  <div className="offset-1 col-xxl-4 col-xl-4 col-lg-4">
        <div className="email-hero-right mt-40 mt-lg-0">
            <img src="/assets/img/gaming.jpg" title="Payment Solutions" alt="Gaming & iGaming Industry" className="img-fluid animated2" />
        </div>
      </div>
     </div>
  </div>
</section>


<section id="edu_industry_sec">
    <div className="container">
     <div className="title-head text-center">
      <span>Overview</span>
       <h2>Here's How payment gateways are used in the Gaming & iGaming industry</h2>
    </div>
    
   <div className="row mt-4 mb-5">
        <div className="col-lg-3 col-md-6">
            <div className="card edu_card_bx process-bx p-2 m-2">
                <div className="card-icon">
                     <h4 className="count spline-sans">01</h4>
                   
                </div>
                <div className="card-text">
                   <h3>Premium Collection</h3>
                  <h6 className="card_pg_text pt-3">Businesses can instantly transmit and receive payments for bills, purchase orders, and invoices thanks to B2B payment gateways.</h6>
                </div>
            </div>
        </div>
        
        
    <div className="col-lg-3 col-md-6">
      <div className="card edu_card_bx process-bx p-2 m-2">
                <div className="card-icon">
                     <h4 className="count spline-sans">02</h4>
                   
                </div>
                <div className="card-text">
                 <h3> Policy Initiation</h3>
                 <h6 className="card_pg_text pt-3">Through the use of B2B payment gateways, businesses may conveniently accept credit card payments from other businesses, enabling customers to pay for goods and services.</h6>
                </div>
            </div>
        </div>
        
        
         <div className="col-lg-3 col-md-6">
           <div className="card edu_card_bx process-bx p-2 m-2">
                <div className="card-icon">
                     <h4 className="count spline-sans">03</h4>
                   
                </div>
                <div className="card-text">
                   <h3>Automated Premium Deductions</h3>
                  <h6 className="card_pg_text pt-3">Electronic check (e-check) payments, which are frequently used for major business-to-business transactions, are supported by B2B payment gateways.</h6>
                </div>
            </div>
        </div>
         <div className="col-lg-3 col-md-6">
           <div className="card edu_card_bx process-bx p-2 m-2">
                <div className="card-icon">
                     <h4 className="count spline-sans">04</h4>
                   
                </div>
                <div className="card-text">
                   <h3>Customer Portals</h3>
                  <h6 className="card_pg_text pt-3">In order to help organizations streamline their procurement operations, several payment gateways offer features that allow purchase orders to be converted into electronic payments.</h6>
                </div>
            </div>
        </div>
     
    </div>
    
     
   <div className="row mt-4 mb-5">
        <div className="col-lg-3 col-md-6">
            <div className="card edu_card_bx process-bx p-2 m-2">
                <div className="card-icon">
                     <h4 className="count spline-sans">05</h4>
                   
                </div>
                <div className="card-text">
                   <h3>Agent and Broker Payments</h3>
                  <h6 className="card_pg_text pt-3">Payment gateways are necessary for NBFCs that handle foreign currency services or international transactions in order to enable cross-border payments.</h6>
                </div>
            </div>
        </div>
        
        
          <div className="col-lg-3 col-md-6">
      <div className="card edu_card_bx process-bx p-2 m-2">
                <div className="card-icon">
                     <h4 className="count spline-sans">06</h4>
                   
                </div>
                <div className="card-text">
                 <h3> Security and Compliance</h3>
                 <h6 className="card_pg_text pt-3">Payment gateways frequently offer multi-currency functionality in the global B2B marketplace to handle foreign transactions and simplify currency exchange. </h6>
                </div>
            </div>
        </div>
        
        
         <div className="col-lg-3 col-md-6">
           <div className="card edu_card_bx process-bx p-2 m-2">
                <div className="card-icon">
                     <h4 className="count spline-sans">07</h4>
                   
                </div>
                <div className="card-text">
                   <h3>Payment Gateway Integration</h3>
                  <h6 className="card_pg_text pt-3">Payment gateways can be seamlessly integrated into B2B e-commerce websites, marketplaces, and enterprise resource planning (ERP) systems.</h6>
                </div>
            </div>
        </div>
         <div className="col-lg-3 col-md-6">
           <div className="card edu_card_bx process-bx p-2 m-2">
                <div className="card-icon">
                     <h4 className="count spline-sans">08</h4>
                   
                </div>
                <div className="card-text">
                   <h3>Claim Settlements</h3>
                  <h6 className="card_pg_text pt-3">Certain NBFCs provide merchant services to companies so they can take consumer payments.
</h6>
                </div>
            </div>
        </div>
        
        
    </div>    
    
    </div> 
</section>


<section id="why-us" className="why-us">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        
        <div className="row pt-5 pb-5">

          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">

              <div className="content">
                  <h6 className="fw-bold" style={{"color":"#ee2f2a"}}>Payment Settlement</h6>
                <h3 className="text-light fw-bold lh-base">Payzo : Payment Gateway in the context of Gaming & iGaming.</h3>
                 <ul className="p-0">
                  <li><i className="ri-check-double-line"></i>Your ERP system should have the capability to integrate with the chosen payment gateway.</li>
                  <li><i className="ri-check-double-line"></i>Ensure that your ERP system has robust user authentication and authorization mechanisms.</li>
                  <li><i className="ri-check-double-line"></i>Within your Education ERP, Create dedicated student and parent portals. </li>
                  <li><i className="ri-check-double-line"></i>Provide various payment options, including credit/debit cards, mobile wallets, supported by your chosen payment gateway.</li>
                  <li><i className="ri-check-double-line"></i>Provide Support for users who may encounter issues with payment processing. </li>
              </ul>
            </div>
         </div>

          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img aos-init aos-animate">
              <img src="/assets/img/Insurance-img.svg" title="Payment Gateway" alt="Gaming & iGaming" style={{"width":"100%","borderRadius":"20px"}} />
          </div>
        </div>
         
         <div className="row bottom-box mt-5">
          <div className="col-lg-8 col-md-8">
          <p> Check out the live demo to learn how Payzo works. No sign-up required!</p>
          </div>
          <div className="col-lg-4 col-md-4 text-end">
          <a href="/contact-us" className="btn-learn-more">Book a Demo<i className="fa-solid fa-arrow-right" style={{"marginLeft":"5px"}}></i></a>
          </div>
         </div></div></section>


<section className="subscribe_steps">
 <div className="container">
        
    <div className="title-head text-center">
      <span>Process</span>
       <h2>Payzo: Empowering Ecommerce Success with Tailored<br /> Payment Solutions</h2>
    </div>
  
    <div className="row mt-4 mb-5">
        <div className="col-lg-3 col-md-6">
        <a href="/payment-gateway">
            <div className="card border-0 bg-white shadow process-bx p-4 m-2">
                <div className="card-icon d-flex justify-content-between">
                    <div><i><img src="/assets/icons/budget-planning.png" title="Payment Gateway" alt="Best Payment Gateway" /></i>
                    </div>
                     <h4 className="counter spline-sans">01</h4>
                </div>
                <div className="card-text">
                   <h3>Payment Gateway</h3>
                  <h6 className="pt-3">A payment gateway is a technological solution that helps merchants and customers conduct secure online transactions.</h6>
                </div>
            </div>
        </a>
        </div>
        
        
          <div className="col-lg-3 col-md-6">
              <a href="/payment-links">
            <div className="card border-0 bg-white shadow process-bx p-4 m-2">
                <div className="card-icon d-flex justify-content-between">
                    <div><i><img src="/assets/icons/budget-planning.png" title="Payment Links" alt="Payment Links" /></i></div>
                     <h4 className="counter spline-sans">02</h4>
                </div>
                <div className="card-text">
                   <h3>Payment Links</h3>
                  <h6 className="pt-3">Without the necessity for a website, payment links offer a simple and safe way to request payments from clients or consumers.</h6>
                </div>
            </div>
            </a>
        </div>
        
        
          <div className="col-lg-3 col-md-6">
            <a href="/payment-pages">
            <div className="card border-0 bg-white shadow process-bx p-4 m-2">
                <div className="card-icon d-flex justify-content-between">
                  <div><i><img src="/assets/icons/budget-planning.png" title="Payment Pages" alt="Payment Pages" /></i></div>
                     <h4 className="counter spline-sans">03</h4>
                </div>
                <div className="card-text">
                   <h3>Payment Pages</h3>
                  <h6 className="pt-3">Websites created specifically to make it easier and more secure to accept payments for goods and services ordered online are known as payment pages.</h6>
                </div>
            </div>
            </a>
        </div>
        
          <div className="col-lg-3 col-md-6">
            <a href="/auto-collect">
             <div className="card border-0 bg-white shadow process-bx p-4 m-2">
                <div className="card-icon d-flex justify-content-between">
                <div><i><img src="/assets/icons/budget-planning.png" /></i></div>
                     <h4 className="counter spline-sans">04</h4>
                </div>
                <div className="card-text">
                   <h3>Auto Collect</h3>
                  <h6 className="pt-3">The term "auto collect" usually describes a function or procedure that routinely and automatically obtains money from consumers or clients.</h6>
                </div>
            </div>
            </a>
        </div>
    </div>
 
 </div>
</section>
      <FAQ />
    </>
  );
}
