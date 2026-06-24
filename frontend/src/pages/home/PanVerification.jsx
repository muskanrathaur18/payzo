import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQ from './FAQ';

export default function PanVerification() {
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
                            <h1 className=" mb-3 fw-bold">PAN Card Verification Service: Ensuring Secure Transactions</h1>
                            <h3 className="mb-40">Offering a broad range of payment solutions to companies of all sizes, Payzo is a top payment gateway service provider in India. Easy and simple PAN card verification is one of Payzo's primary benefits. Ensuring the authenticity of transactions and adhering to regulatory obligations both depend on PAN Card Verification Service.</h3>
                            <a href="/contact-us" className="btn hero-btn border-0">Sign Up Now<span><i className="fa-solid fa-arrow-right ms-2"></i></span></a>
                        </div>
                    </div>
    <div className="offset-1 col-xxl-5 col-xl-4 col-lg-4">
        <div className="email-hero-right mt-40 mt-lg-0">
            <img src="/assets/img/pan_1.png" title="PAN Card Verification Service" alt="Secure Transactions" className="img-fluid animated2" style={{"width":"100%"}} />
        </div>
      </div>
    </div>
 </div>
</section>


<section className="midsec2 bg-primary-gradient mb-5">
        <div className="container">
           
           <div className="row justify-content-between align-items-center mb-5">
                 
                <div className="col-xl-5 col-lg-6 order-1 order-lg-1">
                        <div className="migrate-content">
                            <div className="title-head ">
                               <h6 className="fw-bold" style={{"color":"#ee2f2a"}}>Pan Card</h6>
                               <h2 className=" mb-0">What is PAN Card Verification Service</h2>
                            </div>  
                           
                            <h4 className="mb-4">PAN Card Verification Service, sometimes referred to as Permanent Account Number verification, is a procedure used to confirm the veracity and accuracy of PAN data submitted by people or organizations in India.
<br /><br /> PAN is a distinct 10-digit alphanumeric identity that is provided by the Indian Income Tax Department. PAN Card Verification Service aids in maintaining compliance, stopping fraud, and confirming the legitimacy and identity of people or organizations taking part in financial operations.
</h4>
                                <a href="/contact-us" className="btn hero-btn border-0 ms-0">Sign Up Now<span><i className="fas fa-arrow-right ms-2" ></i></span></a>
                   
                         </div>
                         
                     </div>
                    
                     <div className="col-lg-5 order-2 order-lg-2">
                        <div className="migrate-feature-img mb-5 mb-lg-0">
                            <img src="./assets/img/pan_verif-removebg-preview.png" title="PAN Card Verification Service" alt="PAN data" className="img-fluid" style={{"borderRadius":"20px"}} />
                        </div>
                    </div>
                </div>
            </div>
</section>

<section className="midsec2 bg-primary-gradient image-section mb-5 p-0">
        <div className="container">
           
           <div className="row justify-content-between align-items-center" style={{"marginBottom":"50px"}}>
                 
                     <div className="col-lg-7 order-1 order-lg-1 ">
                         <div className="pan_verif_img">
                        <div className="migrate-feature-img feature-floating mb-5 mb-lg-0">
                            
                            <img src="/assets/img/Pan-Verification-Banner-image.webp" title="PAN Card Verification Service" alt="Secure Transactions" className="img-fluid fixed-image" style={{"borderRadius":"20px","marginLeft":"-50px"}} />
                        </div>
                        </div>
                    </div>
                    
                     <div className="col-lg-5 order-2 order-lg-2">
                        <div className="migrate-content migrate-content2">
                            <div className="title-head ">
                               <h6 className="fw-bold" style={{"color":"#ee2f2a"}}>PAN Card Verification Service</h6>
                               <h2 className=" mb-0">PAN Card Verification Service Process for Secure Transactions</h2>
                            </div>
                           
                            <h4 className="mb-4">As part of Our Commitment, We employ a robust PAN Card Verification Service process to ensure the accuracy of PAN information provided during transactions.</h4>
                            
                            <div className="card verif-bx-1 border-0 bg-transparent">
                                <div className="icon">
                                   <img src="/assets/icons/valid_1.png" title="Real-time Validation" alt="PAN Card Verification Service system" /> 
                                </div>
                                <div className="card-text pb-2">
                                    <h3 className="pt-2">Real-time Validation</h3>
                                    <h4>Our payment gateway integrates with the Income Tax Department's PAN Card Verification Service system, allowing us to validate PAN details in real-time.
                                    </h4>
                                </div>
                            </div>
                            
                             <div className="card verif-bx-1 border-0 bg-transparent">
                                <div className="icon">
                                   <img src="/assets/icons/goal_1.png" title="Data Accuracy" alt="PAN information" style={{"width":"44px"}} /> 
                                </div>
                                <div className="card-text pb-2">
                                    <h3 className="pt-2">Data Accuracy</h3>
                                    <h4>We cross-reference the PAN information provided by the customer with the Income Tax Department's records to ensure accuracy.
                                    </h4>
                                </div>
                            </div>
                            
                             <div className="card verif-bx-1 border-0 bg-transparent">
                                <div className="icon">
                                   <img src="/assets/icons/access-denied.png" title="Error Handling" alt="PAN details" style={{"width":"40px"}} /> 
                                </div>
                                <div className="card-text pb-2">
                                    <h3 className="pt-2">Error Handling</h3>
                                    <h4> In case of mismatched or invalid PAN details, our system prompts the customer to rectify the error or contact our support team for assistance.
                                    </h4>
                                </div>
                            </div>
                            
                             <div className="card verif-bx-1 border-0 bg-transparent">
                                <div className="icon">
                                   <img src="/assets/icons/secure-data.png" title="Privacy " alt="Data Protection" /> 
                                </div>
                                <div className="card-text pb-2">
                                    <h3 className="pt-2">Privacy and Data Protection</h3>
                                    <h4>We prioritize the privacy and protection of customer data, handling PAN information in accordance with industry best practices and applicable data protection laws.
                                    </h4>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
</section>


 
    
<section id="why-us" className="why-us">
    <div className="container">
     <div className="title-head text-center">
      <span>Pan Api</span>
       <h2 className="text-white">Who Can Use Bank Account Verification by Payzo</h2>
    </div>
    
   <div className="row mt-4 mb-5">
        <div className="col-lg-3 col-md-6">
            <div className="card pan_card_bx process-bx p-2 m-2">
                <div className="card-icon">
                     <h4 className="counter spline-sans">01</h4>
                   
                </div>
                <div className="card-text">
                   <h3 className="text-white">Lending Platforms</h3>
                  <h6 className="card_pg_text pt-3 text-light">Digital credit networks verify bank accounts to disperse funds directly and retrieve monthly repayments without friction.</h6>
                </div>
            </div>
        </div>
        
        
    <div className="col-lg-3 col-md-6">
      <div className="card pan_card_bx process-bx p-2 m-2">
                <div className="card-icon">
                     <h4 className="counter spline-sans">02</h4>
                   
                </div>
                <div className="card-text">
                 <h3 className="text-white">Securities and equity investment platforms</h3>
                 <h6 className="card_pg_text pt-3 text-light">Trading and investment portals use instant verification to map bank details before processing stock or mutual fund purchases.  </h6>
                </div>
            </div>
        </div>
        
        
         <div className="col-lg-3 col-md-6">
           <div className="card pan_card_bx process-bx p-2 m-2">
                <div className="card-icon">
                     <h4 className="counter spline-sans">03</h4>
                   
                </div>
                <div className="card-text">
                   <h3 className="text-white">Insurance Providers</h3>
                  <h6 className="card_pg_text pt-3 text-light">Insurance providers authenticate payee accounts to settle claims quickly and set up automated premium payments.</h6>
                </div>
            </div>
        </div>
         <div className="col-lg-3 col-md-6">
           <div className="card pan_card_bx process-bx p-2 m-2">
                <div className="card-icon">
                     <h4 className="counter spline-sans">04</h4>
                   
                </div>
                <div className="card-text">
                   <h3 className="text-white">Business and Individual Tax filing platforms</h3>
                  <h6 className="card_pg_text pt-3 text-light">Tax filing portals use automated checks to ensure refund routing details match the citizen's profile.</h6>
                </div>
            </div>
        </div>
     
    </div>
    
     
   <div className="row mt-4 mb-5">
        <div className="col-lg-3 col-md-6">
            <div className="card pan_card_bx process-bx p-2 m-2">
                <div className="card-icon">
                     <h4 className="counter spline-sans">05</h4>
                   
                </div>
                <div className="card-text">
                   <h3 className="text-white">Identification Verification companies</h3>
                  <h6 className="card_pg_text pt-3 text-light">Background check agencies integrate verification APIs to run rapid corporate audits and check contractor details.
</h6>
                </div>
            </div>
        </div>
        
        
          <div className="col-lg-3 col-md-6">
      <div className="card pan_card_bx process-bx p-2 m-2">
                <div className="card-icon">
                     <h4 className="counter spline-sans">06</h4>
                   
                </div>
                <div className="card-text">
                 <h3 className="text-white">Payments and fintech companies</h3>
                 <h6 className="card_pg_text pt-3 text-light">Neo-banks and fintech apps integrate verification APIs to onboard users smoothly and avoid failed transaction issues.</h6>
                </div>
            </div>
        </div>
        
        
         <div className="col-lg-3 col-md-6">
           <div className="card pan_card_bx process-bx p-2 m-2">
                <div className="card-icon">
                     <h4 className="counter spline-sans">07</h4>
                   
                </div>
                <div className="card-text">
                   <h3 className="text-white">Marketplaces </h3>
                  <h6 className="card_pg_text pt-3 text-light">E-commerce marketplaces verify merchant details before distributing weekly payouts or handling returns.</h6>
                </div>
            </div>
        </div>
         <div className="col-lg-3 col-md-6">
           <div className="card pan_card_bx process-bx p-2 m-2">
                <div className="card-icon">
                     <h4 className="counter spline-sans">08</h4>
                   
                </div>
                <div className="card-text">
                   <h3 className="text-white">Wallet Service providers</h3>
                  <h6 className="card_pg_text pt-3 text-light">Digital wallets verify source accounts before linking cards or allowing wallets to withdraw money to external banks.</h6>
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
