import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>

<style dangerouslySetInnerHTML={{__html: `
    .bg-about-page{
        background-image: url(https://media.istockphoto.com/id/1313070791/photo/business-analysis-and-financial-background.jpg?b=1&s=612x612&w=0&k=20&c=WPl8uX4fbD98TXwEIVaMoDJnD5mgn7pMfTD2TYKCQ-I=);
    }
    .payment pricing-wrapper{
        background: #f7f7f7;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 20px;
        border: 1px solid #bfbfbf;
    }
    .payment pricing-inner img{
        width: 100%;
        border-radius: 20px 20px 0 0;
        background: #fff;
        padding: 10px;
    }
    .payment pricing_description{
        padding: 20px;
    }
    .payment pricing_description h4 a{
        color: #000;
    }
    .payment pricing-meta{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .payment pricing-meta .hero-btn-3{
        font-family: "Jost", sans-serif; */
        font-weight: 500;
        font-size: 13px;
        letter-spacing: 1px;
        display: inline-block;
        border-radius: 50px;
        transition: 0.5s;
        color: #000;
        background: #fff;
        transition: 0.5s;
        padding: 10px 20px;
    }
    .payment pricing_description h2{
        color: #000;
        font-size: 24px;
    }
` }} />
<section className="about-banner-bg main-banner-bg">
    <div className="container" style={{"marginTop":"0px","opacity":"1"}}>
       <div className="heading-div">
          <h1 style={{"paddingTop":"0"}}>Our payment pricing - Payment Gateway</h1>
    	<p style={{"color":"white"}}>Discover <b>Our payment pricing - Payment Gateway</b> at <b>Payzo Technology</b>. We offer secure, affordable, and seamless payment solutions tailored to your business needs. <br />Choose the best plan and start accepting payments effortlessly today!</p>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/" style={{"opacity":"0.9"}}>Home</a></li>
            <li className="breadcrumb-item active" aria-current="page" style={{"color":"#00b7b1","opacity":"0.9"}}>
                <a href="#">Our payment pricing</a>
            </li>
          </ol>
        </nav>
    </div>
    </div>
</section>
<div className="my-5">
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-sm-6 col-12 mt-5">
                <div className="payment pricing-wrapper">
                    <div className="payment pricing-inner">
                       <img src="/assets/img/payout-payzo.png" title="Payout" alt="best software company in india" />
                       <div className="payment pricing_description">
                        <h2><a href="/instant-settlement">Payout</a></h2>
                           <div className="payment pricing-meta">
                              <span className="f-left fw-bold">
                              ₹ 49,999 + GST
                              </span>
                              <span className="f-right payment pricing-more-btn">
                              <a href="/instant-settlement" className="btn hero-btn-3">Know More</a>
                              </span>
                           </div>
                       </div>
                    </div>
                 </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mt-5">
                <div className="payment pricing-wrapper">
                    <div className="payment pricing-inner">
                       <img src="/assets/img/upi-payout.png" title="UPI Payout" alt="UPI Payout" />
                       <div className="payment pricing_description">
                        <h2><a href="/instant-settlement">UPI Payout</a></h2>
                           <div className="payment pricing-meta">
                              <span className="f-left fw-bold">
                              ₹ 59,999 + GST
                              </span>
                              <span className="f-right payment pricing-more-btn">
                              <a href="/instant-settlement" className="btn hero-btn-3">Know More</a>
                              </span>
                           </div>
                       </div>
                    </div>
                 </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mt-5">
                <div className="payment pricing-wrapper">
                    <div className="payment pricing-inner">
                       <img src="/assets/img/payzo-bluk-img-7.png" title="UPI Payment Gateway" alt="Pan Verification" />
                       <div className="payment pricing_description">
                        <h2><a href="/payment-gateway">UPI Payment Gateway</a></h2>
                           <div className="payment pricing-meta">
                              <span className="f-left fw-bold">
                              ₹ 49,999 + GST
                              </span>
                              <span className="f-right payment pricing-more-btn">
                              <a href="/payment-gateway" className="btn hero-btn-3">Know More</a>
                              </span>
                           </div>
                       </div>
                    </div>
                 </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mt-5">
                <div className="payment pricing-wrapper">
                    <div className="payment pricing-inner">
                       <img src="/assets/img/payzo-bluk-img-4.png" />
                       <div className="payment pricing_description">
                        <h2><a href="/pan-verification">Pan Verification</a></h2>
                           <div className="payment pricing-meta">
                              <span className="f-left fw-bold">
                              ₹ 2,999 + GST
                              </span>
                              <span className="f-right payment pricing-more-btn">
                              <a href="/pan-verification" className="btn hero-btn-3">Know More</a>
                              </span>
                           </div>
                       </div>
                    </div>
                 </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mt-5">
                <div className="payment pricing-wrapper">
                    <div className="payment pricing-inner">
                       <img src="/assets/img/payzo-bluk-img-5.png" alt="best software company in india" />
                       <div className="payment pricing_description">
                        <h2><a href="/aadhar-verification">Aadhar Verification</a></h2>
                           <div className="payment pricing-meta">
                              <span className="f-left fw-bold">
                              ₹ 1,999 + GST
                              </span>
                              <span className="f-right payment pricing-more-btn">
                              <a href="/aadhar-verification" className="btn hero-btn-3">Know More</a>
                              </span>
                           </div>
                       </div>
                    </div>
                 </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mt-5">
                <div className="payment pricing-wrapper">
                    <div className="payment pricing-inner">
                       <img src="/assets/img/payzo-bluk-img-1.png" alt="best software company in india" />
                       <div className="payment pricing_description">
                        <h2><a href="/bank-verification">Bank Verification</a></h2>
                           <div className="payment pricing-meta">
                              <span className="f-left fw-bold">
                              ₹ 1,999 + GST
                              </span>
                              <span className="f-right payment pricing-more-btn">
                              
                              <a href="/bank-verification" className="btn hero-btn-3">Know More</a>
                              </span>
                           </div>
                       </div>
                    </div>
                 </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mt-5">
                <div className="payment pricing-wrapper">
                    <div className="payment pricing-inner">
                       <img src="/assets/img/payzo-bluk-img-6.png" alt="best software company in india" />
                       <div className="payment pricing_description">
                        <h2><a href="https://www.payzo.in/payment-gateway">Digital Signature API</a></h2>
                           <div className="payment pricing-meta">
                              <span className="f-left fw-bold">
                              ₹ 1,999 + GST
                              </span>
                              <span className="f-right payment pricing-more-btn">
                              
                              <a href="https://www.payzo.in/payment-gateway" className="btn hero-btn-3">Know More</a>
                              </span>
                           </div>
                       </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
</div>
      
    </>
  );
}
