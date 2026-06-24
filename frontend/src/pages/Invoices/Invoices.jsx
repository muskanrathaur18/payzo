import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQ from '../home/FAQ';

export default function Invoices() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>
<style dangerouslySetInnerHTML={{__html: `
` }} />

<section className="pay-sec-hero bg-secondary-gradient position-relative zindex-1 overflow-hidden">
<img src="/assets/img/em-host-wave-left.svg" alt="shape" className="position-absolute start-0 bottom-0 zindex--1 soft-light opacity-50" />
<img src="/assets/img/em-host-wave-right.svg" alt="shape" className="position-absolute end-0 bottom-0 zindex--1 soft-light opacity-50" />
         <div className="container">
    <div className="row align-items-center">
        <div className="col-xxl-6 col-xl-7 col-lg-7">
            <div className="pay-hero-content mt-50">
                <h1 className=" mb-3 fw-bold">Streamline Your Invoicing with Payzo's Smart Payment Gateway</h1>
                            
                <h3 className="mb-40 ">Payzo, India's leading payment technology provider, offers a fully integrated invoicing solution. Create, send, and collect invoice payments from your clients \u2014 all through a single, powerful dashboard.</h3>
                <a href="/contact-us" className="btn hero-btn border-0">Sign Up Now<span><i className="fa-solid fa-arrow-right ms-2"></i></span></a>
            </div>
     </div>
    <div className="col-xxl-6 col-xl-5 col-lg-5">
        <div className="email-hero-right mt-40 mt-lg-0">
           <img src="/assets/img/invoice.png" title="Invoice Processes" alt="Seamless Payment Gateway Solution" className="img-fluid animated2" style={{"maxWidth":"68%","height":"auto","marginLeft":"25%"}} />
          
        </div>
      </div>
     </div>
    </div>
</section>



<section className="inv-process-sec" >
    <div className="container">
        <div className="title-head text-center">
     <span>Invoice Process</span>
     <h2>Payzo Invoicing: Eliminate Manual Work, Accelerate Cash Flow</h2>
</div>
        <div className="row text-center">
           <div className="col-lg-12 col-md-12">
             <div className="imag-inv-process">
                <img src="/assets/icons/inv-img .png" title="Invoice Process" alt="Payment Gateway Integration" style={{"width":"100%","borderRadius":"20px"}} />
             </div>
           </div>
    </div>
    </div>
</section>


<section className="detail_inv" >
    <div className="container ">
         
    <div className="title-head text-center">
    <span>Invoice Process</span>
     <h2 className="text-white pb-3 mb-0">Deep-Dive: How Payzo Powers Every Step of the Invoice Lifecycle</h2>
     <h6 className="mt-2 w-75 m-auto" style={{"color":"#fff","fontSize":"15px","letterSpacing":"0.5px"}}><b>Invoice Generation:</b>The first step in the invoice detail process is generating accurate and professional invoices.
     <strong>Secure Transmission of Invoice Data: </strong>Payzo prioritizes the security of invoice data during transmission.</h6>
   </div>
   <div className="row align-items-center justify-content-between">
       <div className="col-lg-6 co-md-12">
          
       </div>
       
   </div>
       
</div>
    
</section>




<div className="container">
   <div className="row g-4 justify-content-center invoice-bxs">
                
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="hm2-app-item text-center bg-white deep-shadow rounded-5">
                                <div className="feagure-img">
                                    <img width="74" height="80" src="/assets/icons/GST.gif" title="Fully GST-Ready" className="attachment-full size-full" alt=" invoicing software" decoding="async" loading="lazy" /> </div>
                                <div className="app-content mt-4">
                                  
                                        <h3 className="h6 mb-3">Fully GST-Ready</h3>
                                    
                                    <p className="mb-3">Put shipping information, discounts, and GST on an invoice, then let our invoicing software handle the math.</p>                                  
                                </div>
                            </div>
                        </div>
                                
                    
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="hm2-app-item text-center bg-white deep-shadow rounded-5">
                                <div className="feagure-img">
                                   <img width="74" height="80" src="/assets/icons/Flexible Partial Payments.gif" className="attachment-full size-full" title="Flexible Partial Payments" alt="Flexible Partial Payments" decoding="async" loading="lazy" />    
                                   </div>
                                <div className="app-content mt-4">
                                    
                                        <h3 className="h6 mb-3">Flexible Partial Payments</h3>
                                   
                                    <p className="mb-3">Immediately from the dashboard, enable Flexible Partial Payments for your clients at the moment of invoice preparation.</p>                 
                                </div>
                            </div>
                        </div>
                                
                    
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="hm2-app-item text-center bg-white deep-shadow rounded-5">
                                <div className="feagure-img">
                               <img width="74" height="80" src="/assets/icons/Build Once, Use Forever.gif" className="attachment-full size-full" title="One-time effort" alt="creating a template" decoding="async" loading="lazy" />    
                               </div>
                                <div className="app-content mt-4">
                                   
                                        <h3 className="h6 mb-3">Build Once, Use Forever</h3>
                                    
                                    <p className="mb-3">Avoid wasting time and energy by entering the same line item repeatedly by creating a template that you can use for all of your invoices.</p>                                  
                                </div>
                            </div>
                        </div>
                                
                    
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="hm2-app-item text-center bg-white deep-shadow rounded-5">
                                <div className="feagure-img">
                                    <img width="74" height="80" src="/assets/icons/Smart Receivables Tracking.gif" className="attachment-full size-full" title="Smart Receivables Tracking" alt="invoices paid" decoding="async" loading="lazy" />                                  </div>
                                <div className="app-content mt-4">
                                    
                                        <h3 className="h6 mb-3"> Smart Receivables Tracking</h3>
                                    
                                    <p className="mb-3">Increase accountability into your  transaction  by tracking all Smart Receivables Tracking against invoices paid

                                    </p>                                   
                                </div>
                            </div>
                        </div>
                                
                       

            </div>
</div>
      <FAQ />
    </>
  );
}
