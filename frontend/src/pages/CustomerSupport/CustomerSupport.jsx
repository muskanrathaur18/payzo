import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function CustomerSupport() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <><section className="support-banner-bg main-banner-bg">
  <div className="container" style={{"marginTop":"0px","opacity":"1"}}>
    <div className="heading-div">  
      <h1>Payzo support</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/" style={{"opacity":"0.9"}}>Home</a></li>
            <li className="breadcrumb-item active" aria-current="page" style={{"color":"#00b7b1","opacity":"0.9"}}><a href="//customer-support">Support</a></li>
          </ol>
        </nav>
        </div>
        </div>
</section>

<div className="container">
  <div className="title-head text-center pt-5">
    <span>Support</span>
   <h2 className="pt-2 text-capitalize">Support: We're Here to Assist You Every Step of the Way</h2>
 </div>
</div>
   <div className="container-fluid">
    <div className="support-main">
        <div className="support-head">
           
             
           <div className="row d-flex justify-content-center mt-5 pt-5 flex-wrap">
                 
                    <div className="support-card-main ">
                      <a href="#support1">
                        <img src="/assets/icons/customer-service (3).png" title="24/7 World-Class 24/7 Customer Assistance" alt="World-Class 24/7 Customer Assistance" />
                        <h4>24/7 World-Class 24/7 Customer Assistance</h4>
                        <p>Our team of experts is available 24/7 to answer your questions and help you troubleshoot any problems you may be experiencing.</p>
                      </a>
                    </div>
                   
                    <div className="support-card-main">
                      <a href="#support2">
                        <img src="/assets/icons/setting.png" title="echnical Support" alt="payment gateway" />
                        <h4>Technical Support</h4>
                        <p>Payzo offers technical assistance for the integration and implementation of the payment gateway.</p>
                        </a>
                    </div>
                    <div className="support-card-main ">
                      <a href="#support3">
                        <img src="/assets/icons/documentation.png" alt="Account Managers" title="Dedicated Account Managers" />
                        <h4>Dedicated Account Managers</h4>
                        <p>Each merchant is assigned a dedicated account manager who can provide personalized support and guidance.</p>
                        </a>

                    </div>
                    <div className="support-card-main ">
                      <a href="#support4">
                        <img src="/assets/icons/conflict-resolution.png" title="Payzo Customer Resolution" alt="Customer Resolution" />
                        <h4>Payzo Customer Resolution</h4>
                        <p>We are committed to delivering a high-quality payment gateway service with minimal disruptions.</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div><section className="support-first-bx" id="support1">
  
  <div className="container-fluid">
    <div className="row align-items-center px-5">
      
      <div className="col-lg-7 col-md-12 order-2 order-md-2 order-lg-1">
      
         <div className="content-first-bx">
         <div className="cont-sec-suport">
          <h3 className="mb-0 pb-2 text-capitalize">We aim to deliver exceptional World-Class 24/7 Customer Assistance.</h3>
          <h6>
           At Payzo, we believe that exceptional World-Class 24/7 Customer Assistance is the key to success. We understand that businesses of all sizes rely on our payment gateway services to process their transactions securely and efficiently. That's why we're committed to providing our customers with the highest level of support possible.
</h6>
       
        </div>
      </div>
      </div>
      <div className="col-lg-5 col-md-12 order-1 order-md-1 order-lg-2">
     <div className="support-img">
        <img src="/assets/img/support-2.png" title="World-Class 24/7 Customer Assistance" alt="payment gateway services" className="img-fluid" />
      </div>
      </div>
    </div>
  </div>

</section>



<section className="support-first-bx2 mb-2 p-0" id="support2">
  
  <div className="container-fluid">
    <div className="row align-items-center px-5">
      <div className="col-lg-5 col-md-12">
      <div className="support-img">
        <img src="/assets/img/cloud-server.png" title="technical challenges" alt="B2B and B2C businesses" className="img-fluid" />
      </div>
      </div>

      <div className="col-lg-7 col-md-12">
      <div className="content-first-bx2">
         <div className="cont-sec-suport">
          <h3 className="mb-0 pb-2 text-capitalize">We aim to address your technical challenges effectively.</h3>
          <h6>
            Payzo is a leading payment gateway service provider in India, offering a wide range of innovative and secure solutions for both B2B and B2C businesses. We understand that technical challenges can be a major obstacle for businesses of all sizes, and we are committed to helping our clients overcome these challenges with ease. </h6>
         
        </div>
      </div>
      </div>
    </div>
  </div>

</section>

<section className="support-first-bx p-0 " id="support3">
  
  <div className="container-fluid">
    <div className="row  align-items-center px-5">
    
      <div className="col-lg-7 col-md-12 order-2 order-md-2 order-lg-1">
      <div className="content-first-bx">
         <div className="cont-sec-suport">
          <h3 className="mb-0 pb-2 text-capitalize">We believe Empowering You with Comprehensive Documention.</h3>
          <h6>
          We believe that empowering you with comprehensive documentation is essential to your success. That's why we offer a variety of resources, including user guides, API documentation, and tutorials, to help you get the most out of our platform.       </h6>
         
        </div>
      </div>
      </div>
        <div className="col-lg-5 col-md-12 order-1 order-md-1 order-lg-2">
      <div className="support-img">
        <img src="/assets/img/support-1.png" title="API documentation" alt="comprehensive documentation" className="img-fluid" />
      </div>
      </div>
    </div>
  </div>

</section>

<section className="support-first-bx2 p-0 "  id="support4" style={{"marginBottom":"110px"}}>
  
  <div className="container-fluid">
    <div className="row align-items-center px-5">
      <div className="col-lg-5 col-md-12">
      <div className="support-img">
        <img src="/assets/img/service.png" title="payment gateway service provider in India" alt="B2B and B2C solutions" className="img-fluid" style={{"marginTop":"60px"}} />
      </div>
      </div>
      <div className="col-lg-7 col-md-12">
      <div className="content-first-bx2">
         <div className="cont-sec-suport">
          <h3 className="mb-0 pb-2 text-capitalize">We prioritize the security of your transactions.</h3>
          <h6>
  Payzo is a leading payment gateway service provider in India, offering B2B and B2C solutions for businesses of all sizes. We understand that the security of your transactions is of paramount importance, and we have implemented a number of technical and organizational measures to safeguard your sensitive data.          </h6>
          
        </div>
      </div>
      </div>
    </div>
  </div>

</section>
      
    </>
  );
}
