import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQ from './FAQ';

export default function BankVerification() {
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
                            <h1 className=" mb-3 fw-bold">Real-time Bank Account Validation: The Easiest Process with Payzo</h1>
                            <h3 className="mb-40">As a payment gateway service provider, Payzo understands the importance of Real-time Bank Account Validation. It is a crucial step in ensuring the security of your transactions and protecting you from fraud. However, the traditional Account credentials authentication process can be time-consuming and complicated. </h3>
                            <a href="/contact-us" className="btn hero-btn border-0">Sign Up Now<span><i className="fa-solid fa-arrow-right ms-2"></i></span></a>
                        </div>
                    </div>
    <div className="offset-1 col-xxl-5 col-xl-4 col-lg-4">
        <div className="email-hero-right mt-40 mt-lg-0">
            <img src="/assets/img/bank_verf2.png" title="Real-time Bank Account Validation" alt="payment gateway service provider" className="img-fluid animated2" style={{"width":"100%"}} />
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
                        <h6 className="fw-bold" style={{"color":"#ee2f2a"}}>Account credentials authentication</h6>
                           <h2 className=" mb-0">What is Account credentials authentication</h2>
                </div>
                           
                 <h4 className="mb-4">
The process of verifying a bank account owner's identification and the accuracy of their account information is known as Real-time Bank Account Validation. 
To perform this validation, our system cross-checks records such as the official name, IFSC code, and routing numbers.


</h4>

<h4 className="mb-4">
Merchant verification can also be authenticated using digital credentials, official registry lookup, and document validation.<br />

Last but not least, some financial transactions are mandated by law to require Real-time Bank Account Validation. For instance, before processing a transaction, companies that take credit card payments need to confirm the identity of their clients.

</h4>
                                <a href="/contact-us" className="btn hero-btn border-0 ms-0">Sign Up Now<span><i className="fas fa-arrow-right ms-2" ></i></span></a>
                   
                 </div>
                         
                </div>
                    
                <div className="col-lg-5 order-2 order-lg-2">
                    <div className="migrate-feature-img mb-5 mb-lg-0">
                        <img src="/assets/img/bank_verf.png" title="Account credentials authentication" alt="bank account owner" className="img-fluid" style={{"borderRadius":"20px"}} />
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
                            
                            <img src="/assets/img/bank-f.png" title=" Account credentials authentication" alt="Instant Real-time Bank Account Validation" className="img-fluid fixed-image" style={{"borderRadius":"20px","marginLeft":"-50px"}} />
                        </div>
                        </div>
                    </div>
                    
                     <div className="col-lg-5 order-2 order-lg-2">
                        <div className="migrate-content migrate-content2">
                            <div className="title-head ">
                               <h6 className="fw-bold" style={{"color":"#ee2f2a"}}>Account credentials authentication</h6>
                               <h2 className=" mb-0">Instant Real-time Bank Account Validation Process</h2>
                            </div>
                           
                            <h4 className="mb-4">The account owner (individual or company) provides their bank account information to the requesting entity.</h4>
                            
                            <div className="card verif-bx-1 border-0 bg-transparent">
                                <div className="icon">
                                   <img src="/assets/icons/valid_1.png" title="Bank Account Information" alt="Instant Real-time Bank Account Validation" /> 
                                </div>
                                <div className="card-text pb-2">
                                    <h3 className="pt-2">Providing Bank Account Information: </h3>
                                    <h4>Our onboarding system directly interfaces with official tax database registries to check credentials instantly and securely.
                                    </h4>
                                </div>
                            </div>
                            
                             <div className="card verif-bx-1 border-0 bg-transparent">
                                <div className="icon">
                                   <img src="/assets/icons/goal_1.png" title="Pre-authorization" alt="Micro Deposits" style={{"width":"44px"}} /> 
                                </div>
                                <div className="card-text pb-2">
                                    <h3 className="pt-2">Micro Deposits or Pre-authorization</h3>
                                    <h4>To confirm the account status, the system initiates a minor penny transaction (penny drop) to verify the recipient account is active. 
                                    </h4>
                                </div>
                            </div>
                            
                             <div className="card verif-bx-1 border-0 bg-transparent">
                                <div className="icon">
                                   <img src="/assets/icons/access-denied.png" title="Verification Process" alt="account owner" style={{"width":"40px"}} /> 
                                </div>
                                <div className="card-text pb-2">
                                    <h3 className="pt-2">Verification Process</h3>
                                    <h4>The banking system returns the verified beneficiary name to ensure it matches your business records.
                                    </h4>
                                </div>
                            </div>
                            
                             <div className="card verif-bx-1 border-0 bg-transparent">
                                <div className="icon">
                                   <img src="/assets/icons/secure-data.png" title="Verified Account" alt="direct deposits" /> 
                                </div>
                                <div className="card-text pb-2">
                                    <h3 className="pt-2">Use of Verified Account</h3>
                                    <h4>The verified details can then be instantly configured for payouts, automatic billing, or merchant settlement.
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
       <h2 className="text-white">Who Can Use Account credentials authentication By Payzo Payments</h2>
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
