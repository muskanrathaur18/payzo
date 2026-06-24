import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonials from '../../components/Testimonials';


export default function Partner() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>
<section className="partners-banner-bg main-banner-bg">
  <div className="container" style={{"marginTop":"0px","opacity":"1"}}>
      <div className="heading-div">
      <h1>Partners</h1>
        <nav aria-label="breadcrumb">
             <ol className="breadcrumb">
         <li className="breadcrumb-item"><Link to="/" style={{"opacity":"0.9"}}>Home</Link></li>
         <li className="breadcrumb-item active" aria-current="page" style={{"color":"#00b7b1","opacity":"0.9"}}><Link to="/partner">Partners</Link></li>
        </ol>
     </nav>
     </div>
  </div>
  </section>

<section className="why-us-sec"> 
<div className="container">
  <div className="title-head text-center">
    <span>Why With Us?</span>
   <h2 className="pt-2">Unlock Opportunities and Accelerate Success: Partner with Us</h2>
 </div>
  <div className="row text-center align-items-center justify-content-center">
  
  <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-4 p-0 m-0" data-content-col data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">
      <div className="main-bx">
      <div className="whyus-bx-1">
      <div className="process-holder-1">
       <span><img src="/assets/icons/reliability.png" title="Industry Expertise" alt="Industry Expertise" /></span>
      </div>
     <div className="num-bx">01</div>
     <div className="why-title pt-2"><h3>Industry Expertise</h3></div>
   </div>
   </div>
   </div>

  <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-4 p-0 m-0" data-content-col data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1300">
    <div className="main-bx">
    <div className="whyus-bx-1">
     <div className="process-holder-1">
       <span><img src="/assets/icons/shield.png" title="Secure Technology" alt="Secure Technology" /></span>
     </div>
     <div className="num-bx">02</div>
      <div className="why-title pt-2"><h3>Secure Technology</h3></div>
   </div>
   </div>
  </div>

   
  <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-4 p-0 m-0" data-content-col data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
    <div className="main-bx">
    <div className="whyus-bx-1">
     <div className="process-holder-1">
       <span><img src="/assets/icons/worldwide.png" title="Diverse Integration" alt="Diverse Integration" /></span>
     </div>
     <div className="num-bx">03</div>
      <div className="why-title pt-2"><h3>Diverse Integration </h3></div>
   </div>
   </div>
  </div>
 
  <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-4 p-0 m-0" data-content-col data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1700">
    <div className="main-bx">
    <div className="whyus-bx-1">
     <div className="process-holder-1">
       <span><img src="/assets/icons/worldwide-1.png" title="Diverse Integration" alt="Diverse Integration" /></span>
     </div>
     <div className="num-bx">04</div>
      <div className="why-title pt-2"><h3>Globally Payment</h3></div>
   </div>
   </div>
  </div>
  

 <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-4 p-0 m-0" data-content-col data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1900">
    <div className="main-bx">
    <div className="whyus-bx-1">
     <div className="process-holder-1">
       <span><img src="/assets/icons/revenue.png" title="Globally Payment" alt="Globally Payment" /></span>
     </div>
     <div className="num-bx">05</div>
      <div className="why-title pt-2"><h3>Revenue Generation</h3></div>
   </div>
   </div>
  </div>
  <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-4 p-0 m-0" data-content-col data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2300">
    <div className="main-bx">
    <div className="whyus-bx-1">
     <div className="process-holder-1">
       <span><img src="/assets/icons/customer-service.png" title="Marketing Support" alt="Marketing Support" /></span>
     </div>
     <div className="num-bx">06</div>
      <div className="why-title pt-2"><h3>Marketing Support</h3></div>
   </div>
   </div>
  </div>

  </div>
 </div>

 </section>

<section className="py-5" data-aos="fade-up">
  <div className="container-fluid icons-img-bg py-5">
    <div className="title-head-2 text-center mb-5">
      <span>Our Partners</span>
      <h2 className="pt-3 text-light">Trusted by 2500+ world-class brands and <br />organizations of all sizes</h2>
    </div>
    <div className="logo-marquee-container">
      <div className="logo-marquee-content">
        <div className="logo-marquee-item"><img src="/assets/img/logo (1).png" title="Ecuzen Software" alt="Ecuzen" /></div>
        <div className="logo-marquee-item"><img src="/assets/img/logo (1).png" title="Ecuzen Software" alt="Ecuzen" /></div>
        <div className="logo-marquee-item"><img src="/assets/img/logo (1).png" title="Ecuzen Software" alt="Ecuzen" /></div>
        <div className="logo-marquee-item"><img src="/assets/img/logo (1).png" title="Ecuzen Software" alt="Ecuzen" /></div>
        <div className="logo-marquee-item"><img src="/assets/img/logo (1).png" title="Ecuzen Software" alt="Ecuzen" /></div>
        {/* Repeat logos for seamless marquee effect */}
        <div className="logo-marquee-item"><img src="/assets/img/logo (1).png" title="Ecuzen Software" alt="Ecuzen" /></div>
        <div className="logo-marquee-item"><img src="/assets/img/logo (1).png" title="Ecuzen Software" alt="Ecuzen" /></div>
        <div className="logo-marquee-item"><img src="/assets/img/logo (1).png" title="Ecuzen Software" alt="Ecuzen" /></div>
        <div className="logo-marquee-item"><img src="/assets/img/logo (1).png" title="Ecuzen Software" alt="Ecuzen" /></div>
        <div className="logo-marquee-item"><img src="/assets/img/logo (1).png" title="Ecuzen Software" alt="Ecuzen" /></div>
      </div>
    </div>
  </div>
</section>

<Testimonials />
    </>
  );
}
