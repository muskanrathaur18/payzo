import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQ from '../home/FAQ';

export default function Industry() {
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


<section className="industry-banner-bg main-banner-bg">
  <div className="container" style={{"marginTop":"0px","opacity":"1"}}>
      <div className="heading-div">
      <h1 >Industries</h1>
       <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index.php" style={{"opacity":"0.9"}}>Home</a></li>
        <li className="breadcrumb-item active" aria-current="page" style={{"color":"#00b7b1","opacity":"0.9"}}><a href="industry.php">Industry</a></li>
       </ol>
    </nav>
    </div>
  </div>
</section>

<div className="container pt-5">
   <div className="title-head text-center">
      <span>Powering Payments Across Every Industry</span>
   <h2 className="pb-0">Powering Payments Across Every Industry: Seamless Payment Solutions for Diverse Business Sectors</h2>
   <p style={{"color":"#020020","letterSpacing":"0.5px","fontSize":"14px"}}>Payzo is a leading payment gateway service provider in India, offering seamless and secure payment solutions to a wide range of industries. We understand that every business has unique payment needs, and that's why we offer a customized approach to each of our clients.</p>
  </div> 
</div>

<div className="works-on-sec py-5">
<div className="container">
  <div className="row g-4 justify-content-center">

  {/* Ecommerce */}
  <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
    <a href="#ecom" className="text-decoration-none">
      <div className="img-slider-1" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
        <div className="image"><img src="/assets/img/Online-Shopping.gif" title="E-commerce" alt="Shopping" style={{"border":"5px solid #c3c3c3", "width": "100%", "height": "auto", "objectFit": "cover"}} /></div>
        <div className="hvr-heading"><h5>Ecommerce</h5></div>
      </div>
    </a>
  </div>
 
  {/* Education */}
   <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
    <a href="#edu" className="text-decoration-none">
     <div className="img-slider-1" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
      <div className="image"><img src="/assets/img/book-3.gif" title="E-commerce" alt="Shopping" style={{"border":"5px solid #c3c3c3", "width": "100%", "height": "auto", "objectFit": "cover"}} /></div>
       <div className="hvr-heading"><h5>Education</h5></div>
     </div>
    </a>
  </div>

  {/* NBFC */}
  <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
    <a href="#nbfc" className="text-decoration-none">
     <div className="img-slider-1" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
      <div className="image"><img src="/assets/img/nbfc.gif" title="NBFC" alt="NBFC Lending" style={{"border":"5px solid #c3c3c3", "width": "100%", "height": "auto", "objectFit": "cover"}} /></div>
       <div className="hvr-heading"><h5>NBFC Lending</h5></div>
     </div>
    </a>
  </div>

  {/* Insurance */}
  <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
    <a href="#ins" className="text-decoration-none">
      <div className="img-slider-1" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
      <div className="image"><img src="/assets/img/insurance.gif" title="Insurance" alt="insurance premiums" style={{"border":"5px solid #c3c3c3", "width": "100%", "height": "auto", "objectFit": "cover"}} /></div>
       <div className="hvr-heading"><h5>Insurance</h5></div>
      </div>
    </a>
  </div>

  {/* Gaming */}
  <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
  <a href="#gam" className="text-decoration-none">
     <div className="img-slider-1" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
      <div className="image"><img src="/assets/img/gaming.gif" title="Gaming" alt="Gaming Industry" style={{"border":"5px solid #000", "width": "100%", "height": "auto", "objectFit": "cover"}} /></div>
       <div className="hvr-heading"><h5>Gaming</h5></div>
     </div>
  </a>
  </div>

  {/* MLM */}
  <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
  <a href="#mlm" className="text-decoration-none">
     <div className="img-slider-1" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
      <div className="image"><img src="/assets/img/market.gif" title="MLM Software" alt="MLM Software" style={{"border":"5px solid #000", "width": "100%", "height": "auto", "objectFit": "cover"}}  /></div>
       <div className="hvr-heading"><h5>MLM Software</h5></div>
     </div>
  </a>
  </div>

  {/* B2B */}
   <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
    <a href="#b2b" className="text-decoration-none">
     <div className="img-slider-1" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
      <div className="image"><img src="/assets/img/b2b1.gif" title="B2B Software" alt="B2B payment solutions" style={{"border":"5px solid #000", "width": "100%", "height": "auto", "objectFit": "cover"}} /></div>
       <div className="hvr-heading"><h5>B2B Software</h5></div>
     </div>
    </a>
  </div>

  {/* B2C */}
  <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
   <a href="#b2c" className="text-decoration-none">
        <div className="img-slider-1" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
      <div className="image"><img src="/assets/img/b2c.gif" title="E-commerce" alt="Shopping" style={{"border":"5px solid #000", "width": "100%", "height": "auto", "objectFit": "cover"}} /></div>
       <div className="hvr-heading"><h5>B2C Software</h5></div>
        </div>
   </a>
  </div>

  </div>
</div>
</div>
<div className="pt-4">
<div className="first-prdt-bx" id="ecom">
<div className="container-fluid">
  <div className="row industy_bg_bx">
    <div className="col-lg-7 col-md-12 p-0 order-lg-1 order-md-2 order-2">
     
      <div className="first-bg-img1">
        <div className="card bg-transparent aos-init aos-animate" data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="1500">
          <div className="card-head">
            <h3>E-commerce</h3>
          </div>
        <div className="card-text">
        <p> We offer payment options to online retailers of all kinds, from startups to major corporations. Numerous payment options are supported by our platform, such as wallets, net banking, credit cards, debit cards, and UPI.</p>
       <a href="https://www.payzo.in/ecommerce-industry" className="hero-btn-bx-1">Learn More</a>
      </div>
       
      </div>
    </div>

    </div>

    <div className="col-lg-5 col-md-12 p-0 order-lg-2 order-md-1 order-sm-1">
       <div className="second-bg-img1">
         <div className="box-mid-img1 aos-init aos-animate" data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="1500">
           <img src="/assets/img/ecom-img.jpg" />
         </div>
       </div>
    </div>

  </div>
</div>
</div>


<div className="second-prdt-bx" id="edu">
<div className="container-fluid">
  <div className="row industy_bg_bx">
    <div className="col-lg-7 col-md-12 p-0">
     
     <div className="second-bg-img2">
         <div className="box-mid-img2 aos-init aos-animate" data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="1500">
           <img src="/assets/img/education-industry.jpg" />
         </div>
       </div>

    </div>

    <div className="col-lg-5 col-md-12 p-0">
       

 <div className="first-bg-img2">
        <div className="card bg-transparent aos-init aos-animate" data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="1500">
          <div className="card-head">
            <h3>Education</h3>
          </div>
        <div className="card-text">
        <p> Schools, colleges, and universities are among the educational institutions for which we offer payment solutions. Numerous payment options, such as credit cards, debit cards, net banking, and UPI, are supported by our platform.</p>
       <a href="https://www.payzo.in/education-industry" className="hero-btn-bx-1">Learn More</a>
      </div>
       
      </div>
    </div>

    </div>

  </div>
</div>
</div>




<div className="first-prdt-bx" id="nbfc">
<div className="container-fluid">
  <div className="row industy_bg_bx">
    <div className="col-lg-7 col-md-12 p-0 order-lg-1 order-md-2 order-2">
     
      <div className="first-bg-img1">
        <div className="card bg-transparent aos-init aos-animate" data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="1500">
          <div className="card-head">
            <h3>NBFC Lending</h3>
          </div>
        <div className="card-text">
        <p> Indic pay offers a comprehensive payment solution for NBFCs. We offer a variety of payment options, including credit cards, debit cards, net banking, and UPI. We also offer a variety of fraud prevention features to protect NBFCs and their customers.</p>
       <a href="https://www.payzo.in/nbfc-industry" className="hero-btn-bx-1">Learn More</a>
      </div>
       
      </div>
    </div>

    </div>

    <div className="col-lg-5 col-md-12 p-0 order-lg-2 order-md-1 order-1">
       <div className="second-bg-img1">
         <div className="box-mid-img1 aos-init aos-animate" data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="1500">
           <img src="/assets/img/nbfc-img.jpg" title="NBFC" alt="NBFC Lending" />
         </div>
       </div>
    </div>

  </div>
</div>
</div>



<div className="second-prdt-bx" id="ins"> 
<div className="container-fluid">
  <div className="row industy_bg_bx">
    <div className="col-lg-7 col-md-12 p-0">
     
     <div className="second-bg-img2">
         <div className="box-mid-img2 aos-init aos-animate" data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="1500">
           <img src="/assets/img/ins-img.jpg" title="Insurance" alt="insurance premiums" />
         </div>
       </div>

    </div>

    <div className="col-lg-5 col-md-12 p-0">
       

 <div className="first-bg-img2">
        <div className="card bg-transparent aos-init aos-animate" data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="1500">
          <div className="card-head">
            <h3>Insurance</h3>
          </div>
        <div className="card-text">
        <p>Insurance firms may now easily and conveniently collect payments from their clients with Indic pay. We provide a range of payment methods, such as UPI, debit cards, credit cards, and online banking. In order to make it easier for clients to pay their insurance premiums on time, we also provide a recurring payment option.</p>
       <a href="https://www.payzo.in/insurance-industry" className="hero-btn-bx-1">Learn More</a>
      </div>
       
      </div>
    </div>

    </div>

  </div>
</div>
</div>



<div className="first-prdt-bx" id="gam">
<div className="container-fluid">
  <div className="row industy_bg_bx">
    <div className="col-lg-7 col-md-12 p-0 order-lg-1 order-md-2 order-2">
     
      <div className="first-bg-img1">
        <div className="card bg-transparent aos-init aos-animate" data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="1500">
          <div className="card-head">
            <h3>Gaming Industry</h3>
          </div>
        <div className="card-text">
        <p> Indic pay provides a secure and reliable payment platform for online gaming businesses. We offer a variety of payment options, including credit cards, debit cards, net banking, and UPI. We also offer fraud protection features to keep gaming businesses and their customers safe.</p>
       <a href="https://www.payzo.in/gaming-industry" className="hero-btn-bx-1">Learn More</a>
      </div>
       
      </div>
    </div>

    </div>

    <div className="col-lg-5 col-md-12 p-0 order-lg-2 order-md-1 order-1">
       <div className="second-bg-img1">
         <div className="box-mid-img1 aos-init aos-animate" data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="1500">
           <img src="/assets/img/gaming.jpg" title="Gaming" alt="Gaming Industry" />
         </div>
       </div>
    </div>

  </div>
</div>
</div>



<div className="second-prdt-bx" id="mlm">
<div className="container-fluid">
  <div className="row industy_bg_bx">
    <div className="col-lg-7 col-md-12 p-0 ">
     
     <div className="second-bg-img2">
         <div className="box-mid-img2 aos-init aos-animate" data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="1500">
           <img src="/assets/img/mlm-software.jpg" title="MLM Industry" alt="MLM Industry" />
         </div>
       </div>

    </div>

    <div className="col-lg-5 col-md-12 p-0">
       

 <div className="first-bg-img2">
         <div className="card bg-transparent aos-init aos-animate" data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="1500">
          <div className="card-head">
            <h3>MLM Software</h3>
          </div>
        <div className="card-text">
        <p>At Indic Pay, we understand the unique payment processing needs of Multi-Level Marketing (MLM) companies. We offer tailored solutions designed to support MLM businesses in managing their complex payment structures and facilitating seamless transactions for their distributors and customers.</p>
       <a href="https://www.payzo.in/mlm-industry" className="hero-btn-bx-1">Learn More</a>
      </div>
       
      </div> 

    </div>

    </div>

  </div>
</div>
</div>




<div className="first-prdt-bx" id="b2b"> 
<div className="container-fluid">
  <div className="row industy_bg_bx">
    <div className="col-lg-7 col-md-12 p-0 order-lg-1 order-md-2 order-2">
     
      <div className="first-bg-img1">
        <div className="card bg-transparent aos-init aos-animate" data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="1500">
          <div className="card-head">
            <h3>B2B Software</h3>
          </div>
        <div className="card-text">
        <p>Indic pay offers a variety of B2B payment solutions, such as NEFT, RTGS, and IMPS. We also offer a customized B2B payment gateway solution for businesses that need a more tailored solution.</p>
       <a href="https://www.payzo.in/b2b-industry" className="hero-btn-bx-1">Learn More</a>
      </div>
       
      </div>
    </div>

    </div>

    <div className="col-lg-5 col-md-12 p-0 order-lg-2 order-md-1 order-1">
       <div className="second-bg-img1">
         <div className="box-mid-img1 aos-init aos-animate" data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="1500">
           <img src="/assets/img/B2B-eCommerce.jpg" title="E-commerce" alt="Shopping" />
         </div>
       </div>
    </div>

  </div>
</div>
</div>



<div className="second-prdt-bx" id="b2c">
<div className="container-fluid">
  <div className="row industy_bg_bx">
    <div className="col-lg-7 col-md-12 p-0 ">
     
     <div className="second-bg-img2">
         <div className="box-mid-img2 aos-init aos-animate" data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="1500">
           <img src="/assets/img/b2c-img.jpg" title="B2C Software" alt="B2C payment solutions" />
         </div>
       </div>

    </div>

    <div className="col-lg-5 col-md-12 p-0">
       

 <div className="first-bg-img2">
        <div className="card bg-transparent aos-init aos-animate" data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="1500">
          <div className="card-head">
            <h3>B2C Software</h3>
          </div>
        <div className="card-text">
        <p>Indic pay offers a variety of B2C payment solutions, including credit cards, debit cards, net banking, UPI, and wallets. We also offer a customized B2C payment gateway solution for businesses that need a more tailored solution.</p>
       <a href="https://www.payzo.in/b2c-industry" className="hero-btn-bx-1">Learn More</a>
      </div>
       
      </div>
    </div>

    </div>

  </div>
</div>
</div>

</div>
      <FAQ />
    </>
  );
}
