import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQ from '../home/FAQ';

export default function GstVerification() {
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
                            <h1 className=" mb-3 fw-bold">Validate GSTIN With Payzo</h1>
                            <h3 className="mb-40"><b>GST Number Verification service provided in Jaipur</b> is a crucial procedure for both individuals and corporations. The straightforward and user-friendly approach of Payzo makes it simple to check GSTINs.</h3>
                            <a href="/contact-us" className="btn hero-btn border-0">Sign Up Now<span><i className="fa-solid fa-arrow-right ms-2"></i></span></a>
              </div>
        </div>
    <div className="offset-1 col-xxl-5 col-xl-4 col-lg-4">
        <div className="email-hero-right mt-40 mt-lg-0">
            <img src="/assets/img/bank_verf2.png" title="Validate GSTIN" alt="GST With Payzo" alt="not found" className="img-fluid animated2" style={{"width":"100%"}} />
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
                        <h6 className="fw-bold" style={{"color":"#ee2f2a"}}>GST Number Verification</h6>
                        <h2 className="mb-0">GST Number Verification: What is it and Why is it Important?</h2>
                </div>
                           
                 <h4 className="mb-4">GST Number Verification is the process of verifying the authenticity of a GSTIN. This is an important process for both businesses and individuals, as it helps to ensure that transactions are compliant with GST regulations.

                    <br />
                   Businesses can use<b> GST Number Verification Online</b> to ensure that they are dealing with legitimate customers and suppliers, helping to reduce the risk of fraud and tax evasion. Individuals can also use GST Number Verification Online to confirm that they are not being overcharged for goods and services and to claim GST refunds where applicable.</h4>
                <a href="/contact-us" className="btn hero-btn border-0 ms-0">Sign Up Now<span><i className="fas fa-arrow-right ms-2" ></i></span></a>
                   
                 </div>
                         
                </div>
                    
                <div className="col-lg-5 order-2 order-lg-2">
                    <div className="migrate-feature-img mb-5 mb-lg-0">
                        <img src="/assets/img/GST-Number-Verification-API.webp" title="GSTIN" alt="Verification API" className="img-fluid" style={{"borderRadius":"20px"}} />
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
                            
                            <img src="/assets/img/GST-banner-image.webp" title=" Instant GST Number Verification" alt="GST Number Verification" className="img-fluid fixed-image" style={{"borderRadius":"20px","marginLeft":"-50px"}} />
                        </div>
                        </div>
                    </div>
                    
                     <div className="col-lg-5 order-2 order-lg-2">
                        <div className="migrate-content migrate-content2">
                            <div className="title-head ">
                               <h6 className="fw-bold" style={{"color":"#ee2f2a"}}>GST Number Verification</h6>
                               <h2 className=" mb-0">Instant GST Number Verification Process</h2>
                            </div>
                           
                            <h4 className="mb-4">Log in to your merchant dashboard and go to the Verification Suite, from the left side panel select GSTIN.</h4>
                            
                            <div className="card verif-bx-1 border-0 bg-transparent">
                                <div className="icon">
                                   <img src="/assets/icons/valid_1.png" title="Payment Gateway Integrates" alt="GST Number Verification" /> 
                                </div>
                                <div className="card-text pb-2">
                                    <h3 className="pt-2">Providing GST Number Verification</h3>
                                    <h4>Our payment gateway integrates with the Income Tax Department's PAN verification system and <b>GST Verify Services</b>, allowing us to validate PAN details in real time.
                                    </h4>
                                </div>
                            </div>
                            
                             <div className="card verif-bx-1 border-0 bg-transparent">
                                <div className="icon">
                                   <img src="/assets/icons/goal_1.png" title="GSTIN" alt="15-digit GSTIN " style={{"width":"44px"}} /> 
                                </div>
                                <div className="card-text pb-2">
                                    <h3 className="pt-2">Enter the GSTIN and Perform the Verification</h3>
                                    <h4>If you choose to search by GSTIN, enter the 15-digit GSTIN of the business in the provided space.
                                        Complete any required captcha or security check. 
                                    </h4>
                                </div>
                            </div>
                            
                             <div className="card verif-bx-1 border-0 bg-transparent">
                                <div className="icon">
                                   <img src="/assets/icons/access-denied.png" title="instantly validate the GSTININ" alt="GSTIN" style={{"width":"40px"}} /> 
                                </div>
                                <div className="card-text pb-2">
                                    <h3 className="pt-2">instantly validate the GSTININ</h3>
                                    <h4>Click on the "Search" or "Verify" button to initiate the verification process.
                                        The System Will Cross-check the entered GSTIN with the official GST database.
                                    </h4>
                                </div>
                            </div>
                            
                             <div className="card verif-bx-1 border-0 bg-transparent">
                                <div className="icon">
                                   <img src="/assets/icons/secure-data.png" title="Additional Information" alt="additional details" /> 
                                </div>
                                <div className="card-text pb-2">
                                    <h3 className="pt-2">Additional Information (Optional)</h3>
                                    <h4>In some cases, you may also have the option to view additional details, such as the status of the taxpayer, type of registration, and the date of cancellation (if applicable).
                                    </h4>
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
