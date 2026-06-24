import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQ from '../home/FAQ';

export default function PayIn() {
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
                            <h1 className=" mb-3 fw-bold">Payzo Pay-In Process: Seamless and Secure Transactions</h1>
                            <h3 className="mb-40 ">In the context of a payment gateway, "pay-in" refers to the procedure for accepting and retrieving money from clients or consumers. Payment gateways are essential for electronic transactions because they let companies take payments for goods and services.
</h3>
                            <a href="/contact-us" className="btn hero-btn border-0">Sign Up Now<span><i className="fa-solid fa-arrow-right ms-2"></i></span></a>
                        </div>
                    </div>
    <div className="offset-1 col-xxl-4 col-xl-4 col-lg-4">
        <div className="email-hero-right mt-40 mt-lg-0">
            <img src="/assets/img/Payzo PayIn.png" title="Payzo Pay-In" alt="Seamless and Secure Transactions" className="img-fluid animated2" />
        </div>
      </div>
     </div>
 </div>
</section>





<section className="choose-payment-sec ">
  
<div className="container">
   <div className="title-head text-center">
  <span>Overview</span>
   <h2 className="pt-2 text-capitalize">
  Why Payzo is the best choice for Payzo PayIn
</h2>
  
 </div>
</div>

<div className="container">
  <div className="features-items text-center">
     <div className="row">
            
            <div className="f-bx-1 col-lg-4 col-md-6" style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item">
                     <div className="icon">
                               <img decoding="async" src="/assets/icons/comp.png" title="Security" alt="Payzo" />
                            </div>
                   <div className="info">
                       <h4>Security You Can Trust</h4>
                       <h5>We value the information about your consumers and handle it accordingly. The utmost levels of security and adherence to industry standards, such as PCI DSS, are priorities for Payzo.
  </h5>
                    </div>
                  
               </div>
            </div> 
           
           
           
            <div className="f-bx-1 col-lg-4 col-md-6 " style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item">
                    <div className="icon">
                        <img decoding="async" src="/assets/icons/operation.png" title="Global Reach" alt="Local Expertise" />
                     </div>
                   <div className="info">
                       <h4> Global Reach, Local Expertise</h4>
                       <h5>Your horizons can be expanded with Payzo. We make it simple to serve clients internationally by accepting a variety of payment options and currencies.
</h5>
                    </div>
                   
               </div>
            </div> 
           
           
             <div className="f-bx-1 col-lg-4 col-md-6 " style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item">
                   <div className="icon">
                        <img decoding="async" src="/assets/icons/fintech.png" title="Lightning-Fast Transactions" alt="customers waiting" />
                    </div>
                      <div className="info">
                       <h4>Lightning-Fast Transactions</h4>
                       <h5>Don't keep your customers waiting. Payzo's state-of-the-art infrastructure ensures that your transactions are processed quickly and efficiently.</h5>
                    </div>
               </div>
           </div> 
           
           
           </div>

      <div className="row mt-4">
            
           <div className="f-bx-1 col-lg-4 col-md-6" style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item">
                     <div className="icon">
                               <img decoding="async" src="/assets/img/integration.png" title="User-Friendly Integration" alt="Seamlessly integrate" />
                            </div>  
                   <div className="info">
                       <h4>User-Friendly Integration</h4>
                       <h5>Seamlessly integrate Payzo with your ecommerce platform or website. Our user-friendly APIs and plugins make the setup process a breeze.</h5>
                    </div>
                 
               </div>
           </div> 
           
             <div className="f-bx-1 col-lg-4 col-md-6 " style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item">
                      <div className="icon">
                          <img decoding="async" src="/assets/img/customer-service (4).png" title="Round-the-Clock Support" alt="support staff "  />
                      </div>
                   <div className="info">
                       <h4>Round-the-Clock Support</h4>
                       <h5> We are aware that problems can occur at any time. For this reason, our support staff is here to help you with any queries or issues, day or night.
</h5>
                    </div>
                 
               </div>
           </div> 
           
           
             <div className="f-bx-1 col-lg-4 col-md-6" style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
               <div className="item">
                    <div className="icon">
                        <img decoding="async" src="/assets/icons/reli.png" title="Trusted by Businesses Worldwide" alt="payment processing"  />
                    </div>
                   <div className="info">
                       <h4>Trusted by Businesses Worldwide</h4>
                       <h5>Join the many companies across the world that rely on Payzo for all of their payment processing needs. Our past performance is quite evident.

</h5>
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
                 
                <h3 className="text-light fw-bold pt-3">Why is Payzo the best choice for Payzo PayIn?</h3>
                 <ul className="p-0">
                  <li className="d-flex align-items-center"><span><i className="ri-check-double-line"></i></span><span><strong>Payzo offers a number of advantages for Payzo PayIn, including:</strong></span></li>
                  <li className="d-flex align-items-center"><span><i className="ri-check-double-line"></i></span><span><strong>Speed and reliability: </strong>We process Payzo PayIn quickly and reliably, so you can be sure that your money will arrive where it needs
                  to be on time.</span></li>
                
                  <li className="d-flex align-items-center"><span><i className="ri-check-double-line"></i></span><span><strong>Security:</strong> We use the latest security technologies to protect your financial information.
</span></li>
                  <li className="d-flex align-items-center"><span><i className="ri-check-double-line"></i></span><span><strong>Flexibility: </strong>We offer a variety of payout options to suit the needs of our customers.</span>
</li>
                  <li className="d-flex align-items-center"><span><i className="ri-check-double-line"></i></span><span><strong>Competitive rates: </strong>We offer competitive rates for Payzo PayIn, so you can save money on your transactions.</span></li>
              
                 </ul>
            </div>
         </div>

          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img aos-init aos-animate">
              <img src="/assets/img/bootstrap-saas-dashboard.png" title="Payzo" alt="Payzo PayIn" style={{"width":"100%","borderRadius":"20px"}} />
          </div>
        </div>
         
         <div className="row bottom-box mt-5">
          <div className="col-lg-8 col-md-8">
          <p> Check out the live demo to learn how Payzo works. No sign-up required!</p>
          </div>
          <div className="col-lg-4 col-md-4 text-end">
          <a href="/contact-us" className="btn-learn-more">Check Out Demo<i className="fa-solid fa-arrow-right" style={{"marginLeft":"5px"}}></i></a>
          </div>
         </div>


      </div>
</section>


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
                    <div><i><img src="/assets/icons/budget-planning.png" /></i></div>
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
                  <div><i><img src="/assets/icons/budget-planning.png" title="Payment Links" alt="Payment Links" /></i></div>
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
                <div><i><img src="/assets/icons/budget-planning.png" title="Payment Pages" alt="Payment Pages" /></i></div>
                     <h4 className="counter spline-sans">04</h4>
                </div>
                <div className="card-text">
                   <h3>Auto Collect</h3>
                  <h6 className="pt-3">Auto collect" typically refers to a feature or process that automatically collects payments from customers or clients on a recurring.</h6>
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
