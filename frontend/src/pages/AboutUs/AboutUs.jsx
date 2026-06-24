import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQ from '../home/FAQ';

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>

<section className="about-banner-bg main-banner-bg">
<div className="container" style={{"marginTop":"0px","opacity":"1"}}>
   <div className="heading-div">
      <h1>About us</h1>

<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="/" style={{"opacity":"0.9"}}>Home</a></li>
    <li className="breadcrumb-item active" aria-current="page" style={{"color":"#00b7b1","opacity":"0.9"}}>
        <a href="/about-us">About Us</a>
    </li>
  </ol>
</nav>
</div>
</div>
</section>

<section className="about-colm">
  <div className="container">
    <div className="title-head text-center">
      <span>About Us</span>
      <h2 className="pt-2">Payzo: Powering Smarter Payments Across India!</h2>
   </div>
   <div className="row abt-content-bx mx-auto">
      <div className="col-lg-4 "><p>Payzo is India's most trusted payment gateway company, serving both B2B and B2C businesses with innovative, reliable solutions. We are your single destination for all digital payment needs — offering a secure, scalable, and intuitive platform to accept payments from customers globally. We support all major payment modes including UPI, QR codes, net banking, credit cards, and debit cards.
     </p>
</div>
    <div className="col-lg-4"><p>We equip merchants with powerful tools including real-time dashboards, advanced fraud detection, and seamless dispute management — so you stay in control at all times. Our dedicated support team is available round the clock to help you resolve issues and grow confidently. Delivering exceptional payment experiences for our clients is at the heart of everything we do.
</p>
</div>
      <div className="col-lg-4  ">
         
       <div className="abt-img-right">    
       <img src="/assets/img/close-up.jpg" title="B2B and B2C Companies" alt="Payment Gateway" /></div>
       </div>

    </div>
  </div>
</section>

<section className="mission_sec p-0">
  <div className="container">
    <div className="row mx-auto">
      <div className="col-lg-12 col-md-12">
         <div className="title-head text-left">
    <span style={{"marginLeft":"50px"}}>What we do</span>
   <h3 className="pt-2 mb-0 pb-2">Our Mission, Vision & Values at Payzo</h3>
   <p><strong>Mission: </strong>Payzo is committed to democratizing digital payments across India by delivering world-class gateway solutions. We strive to make online and offline transactions effortless, secure, and cost-effective for every business and individual.
<br />
<strong>Vision: </strong>Our vision is to become India's most innovative and dependable payment infrastructure, enabling businesses and consumers to transact with confidence, speed, and zero friction.
<br />
<strong>Values: </strong>Integrity, innovation, and customer-centricity drive everything we build. These principles form the backbone of our culture and fuel our continuous growth.
</p>
 </div>
      </div>
      
        
      
    </div>

<div className="row align-items-center counter-main-bx">
  <div className="col-lg-3 col-md-6">
    <div className="count-bx-1 d-flex mt-3">
        <div className="icon"><i className="fa-solid fa-user"></i></div>
    <div className="content">
      <h3>Clients</h3>
      <div className="value">
            <span className="text-md" data-to="1100" data-trigger="null">1100</span>
            <span className="">+</span>      
      </div>
    </div>
  </div>
  </div>

 <div className="col-lg-3 col-md-6 ">
  <div className=" count-bx-1 d-flex mt-3">
    <div className="icon"><i className="fa-solid fa-handshake"></i></div>
    <div className="content">
      <h3>Projects</h3>
      <div className="value">
            <span className="text-md" data-to="47" data-trigger="null">1200</span>
            <span className="">+</span>   
     </div>
    </div>
  </div>
  </div>

   
   <div className="col-lg-3 col-md-6">
    <div className="count-bx-1 d-flex mt-3">
    <div className="icon"><i className="fa-solid fa-users"></i></div>
    <div className="content">
      <h3>Team Members</h3>
      <div className="value">
            <span className="text-md" data-to="47" data-trigger="null">50</span>
            <span className="">+</span>        </div>
    </div>
  </div>
</div>

   <div className="col-lg-3 col-md-6">
    <div className=" d-flex mt-3">
    <div className="icon"><i className="fa-solid fa-phone-volume"></i></div>
    <div className="content">
      <h3>Hours of Support</h3>
      <div className="value">
            <span className="text-md" data-to="47" data-trigger="null">24/7</span>
          
    </div>
  </div>
</div>
</div>

  </div>
</div>
</section>
<section>
  <div className="container-fluid choose-banner-bx">
    <div className="row mx-auto align-items-center container">
      <div className="col-lg-6 col-md-12 col-12">
        <div className="left-banner-bx">
          <h2> Why Forward-Thinking Businesses Choose Payzo as Their Payment Partner</h2>
          <h4>Businesses of every size rely on Payzo because we deliver secure, scalable, and cost-efficient payment processing built for the modern economy. Whether you're selling locally or globally, Payzo's robust ecosystem of integrations and features ensures smooth, uninterrupted payment flows.

          </h4>
          <div>
          <a href="/payment-gateway" className="btn hero-btn-3">Get Started</a>
        </div>

        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-12">
        <div className="right-banner-bx">
          <ul className="p-0">
          
           <li className="d-flex">
              <div className="glow-icon"><i className="fa-solid fa-users-rays"></i></div>
              <div>
              <h5>Customer-First Approach</h5>
              <p>Every product we build and every decision we make is driven by one goal — delivering the best experience for our customers.</p>
            </div>
          </li>

            <li className="d-flex">
               <div className="glow-icon"><i className="fa-solid fa-file-shield"></i></div>
              <div>
              <h5>Enterprise-Grade Security</h5>
              <p>We employ multi-layer encryption and compliance frameworks to ensure your data and transactions are always protected.</p>
            </div>
          </li>

            <li className="d-flex">
               <div className="glow-icon"><i className="fa-solid fa-lightbulb"></i></div>
              <div>
            <h5>Technology-First Mindset</h5>
            <p>We continuously evolve our platform with the latest fintech advancements to keep your business ahead of the curve.</p>
          </div>
        </li>
        
        <li className="d-flex">
               <div className="glow-icon"><i className="fa-solid fa-award"></i></div>
              <div>
            <h5>Commitment to Excellence</h5>
            <p>We set the highest standards in everything — from uptime and reliability to customer support and product quality.</p>
          </div>
        </li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>

 </section>
      <FAQ />
    </>
  );
}
