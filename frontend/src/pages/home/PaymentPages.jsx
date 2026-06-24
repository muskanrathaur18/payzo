import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQ from './FAQ';

export default function PaymentPages() {
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
                    <h1 className="mb-3 fw-bold">Payzo: Branded, High-Converting Custom Checkout Pages</h1>

                    <h3 className="mb-40">
                       A payment page is a dedicated online portal where users complete their checkouts. Payzo helps you design stunning, secure checkout spaces to receive global customer payments.
                    </h3>
                    <a href="/contact-us" className="btn hero-btn border-0">
                        Sign Up Now<span><i className="fa-solid fa-arrow-right ms-2"></i></span>
                    </a>
                </div>
            </div>
            <div className="col-xxl-6 col-xl-5 col-lg-5">
                <div className="email-hero-right mt-40 mt-lg-0">
                    <img src="/assets/img/pay-page.png" alt="Payment Pages" alt="Payment Gateway" className="img-fluid animated2" />
                </div>
            </div>
        </div>
    </div>
</section>

<section className="choose-payment-sec">
    <div className="container">
        <div className="title-head text-center">
            <span>Overview</span>
            <h2 className="pt-2">
                Looking for a convenient and cost-effective way to <br />
                accept payments online?
            </h2>
        </div>
    </div>

    <div className="container">
        <div className="text-center">
            <div className="row item-bx">
                <div className="f-bx-1 col-lg-4 col-md-6" style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
                    <div className="item">
                        <div className="icon">
                            <img decoding="async" src="/assets/icons/No_coding.gif" title="No Coding" alt="IT work or integration" />
                        </div>
                        <div className="info">
                            <h4>Absolutely No Code Required</h4>
                            <h5>Build and publish fully functional payment forms in minutes without writing a single line of code.</h5>
                        </div>
                    </div>
                </div>

                <div className="f-bx-1 col-lg-4 col-md-6" style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
                    <div className="item">
                        <div className="icon">
                            <img decoding="async" src="/assets/icons/Automated Receipts.gif" title="Automated Receivts" alt="payment confirmation" />
                        </div>
                        <div className="info">
                            <h4>Automated Receipts</h4>
                            <h5>Eliminate manual bookkeeping with auto-generated tax invoices and donation slips sent instantly to your customers.</h5>
                        </div>
                    </div>
                </div>

                <div className="f-bx-1 col-lg-4 col-md-6" style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
                    <div className="item">
                        <div className="icon">
                            <img decoding="async" src="/assets/icons/Memorable_URLS.gif" title="Memorable URLs" alt="Payment Gateway" />
                        </div>
                        <div className="info">
                            <h4>Memorable URLS</h4>
                            <h5>Elevate brand trust with short, easily recognizable checkout links featuring your company's name.</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4 item-bx">
                <div className="f-bx-1 col-lg-4 col-md-6" style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
                    <div className="item">
                        <div className="icon">
                            <img decoding="async" src="/assets/icons/Custom_Brand.gif" title="Custom Branded Page" alt="payment page" />
                        </div>
                        <div className="info">
                            <h4>Custom Branded Page</h4>
                            <h5>Align fonts, color themes, and banners with your corporate brand identity for a premium customer experience.</h5>
                        </div>
                    </div>
                </div>

                <div className="f-bx-1 col-lg-4 col-md-6" style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
                    <div className="item">
                        <div className="icon">
                            <img decoding="async" src="/assets/icons/Custom_Fields.gif" title="Custom Fields" alt="Collect information" />
                        </div>
                        <div className="info">
                            <h4>Custom Fields</h4>
                            <h5>Gather customer-specific insights by designing customized entry forms and data inputs directly on your form.</h5>
                        </div>
                    </div>
                </div>

                <div className="f-bx-1 col-lg-4 col-md-6" style={{"visibiltiy":"visible","animationDealy":"300ms","animationName":"fadeInUp"}}>
                    <div className="item">
                        <div className="icon">
                            <img decoding="async" src="/assets/icons/Track Your Payments.gif" title="Track Your Payments" alt="real-time data" />
                        </div>
                        <div className="info">
                            <h4>Track Your Payments</h4>
                            <h5>Enhance operations with complete conversion data and performance audits from your console analytics.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="payment-pages p-0">
    <div className="container">
        <div className="row mt-5 p-4 d-flex align-items-center">
            <div className="col-lg-5 col-md-12">
                <div className="title-head text-left">
                    <h6 className="mb-0">Payment Pages</h6>
                    <h3 className="pb-4 mb-0">
                        Payzo: How Payment Pages can help your business
                    </h3>
                    <p>
                   Welcome to Payzo, where we provide dynamic payment pages to enable smooth payment gateway integration for your company. Our payment pages are made to enhance the checkout process, boost conversions, and offer a quick and safe way to make payments. Here's why using our payment pages with your payment gateway is the best option.

                    </p>
                    <a href="/contact-us" className="btn hero-btn-2 pt-2">
                        Sign Up
                    </a>
                </div>
            </div>
            <div className="Pages-info-bx col-lg-6 col-md-12">
                <div className="services-items">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 mb-3">
                            <div className="info-bx">
                                <div className="icon mt-2">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </div>
                                <div className="info">
                                    <h4>Customizable Branding</h4>
                                    <p>
                                       Our payment pages are mobile device optimized and fully responsive, so your customers can make payments with ease.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 mb-3">
                            <div className="info-bx">
                                <div className="icon mt-2">
                                    <i className="fa-solid fa-building-lock"></i>
                                </div>
                                <div className="info">
                                    <h4>Enhanced Security</h4>
                                    <p>
                                        Security is our utmost priority. With Payzo Payment Pages, you can rest assured that your customers' payment information is protected.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 mb-3">
                            <div className="info-bx">
                                <div className="icon mt-2">
                                    <i className="fa-solid fa-mobile-screen-button"></i>
                                </div>
                                <div className="info">
                                    <h4>Mobile-Optimized Experience</h4>
                                    <p>
                                        Our Payment Pages are fully responsive and optimized for mobile devices, ensuring that your customers can make payments effortlessly .
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 mb-3">
                            <div className="info-bx">
                                <div className="icon mt-2">
                                    <i className="fa-solid fa-chart-line"></i>
                                </div>
                                <div className="info">
                                    <h4>Transaction Tracking</h4>
                                    <p>
                                       Keep track of all of your transactions in real time. You can monitor successful payments and check transaction statuses using Payzo Payment Pages.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="how-pg-works">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-5 col-md-5 pt-4">
                <div className="pg-img">
                    <img src="/assets/img/pg-works.gif" title="Payment Pages" alt="Seamless Transaction" style={{"width":"100%","borderRadius":"20px"}} />
                </div>
            </div>
            <div className="offset-1 col-lg-6 col-md-6 pt-4">
                <div className="title-head">
                    <h6 className="fw-bold" style={{"color":"#fff"}}>How Works</h6>
                    <h2 className="text-light pb-3 mb-0">How Payment Pages Work: A Seamless Transaction Process with Payzo</h2>
                </div>
                <ul className="p-0 mt-2">
                    <li className="feature-style-three d-flex">
                        <div className="icon"><i className="fa-solid fa-chart-simple text-light"></i></div>
                        <div className="info">
                            <h4>The Client Requests Payment</h4>
                            <p className="text-white">They select their preferred payment mechanism, be it digital wallets, net banking, credit cards, debit cards, or UPI.</p>
                        </div>
                    </li>

                    <li className="feature-style-three d-flex">
                        <div className="icon"><i className="fa-solid fa-chart-simple text-light"></i></div>
                        <div className="info">
                            <h4>Validation and Authorization</h4>
                            <p className="text-white">This stage guarantees that there are enough funds available for the transaction and that the payment details are correct.</p>
                        </div>
                    </li>

                    <li className="feature-style-three d-flex">
                        <div className="icon"><i className="fa-solid fa-chart-simple text-light"></i></div>
                        <div className="info">
                            <h4>Verification of Payment</h4>
                            <p className="text-white">A payment confirmation is sent to the customer, and a notification of the successful transaction is sent to the business.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section className="payment-pages p-0">
    <div className="container">
        <div className="row p-4 align-items-center justify-content-between">
            <div className="Pages-info-bx col-lg-6 col-md-12">
                <div className="services-items">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 mb-3">
                            <div className="info-bx">
                                <div className="icon mt-2">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </div>
                                <div className="info">
                                    <h4>Instant Reconcile Payment</h4>
                                    <p>
                                        With our Payment Pages, you have the flexibility to Payment gateways streamline the settlement process for businesses.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 mb-3">
                            <div className="info-bx">
                                <div className="icon mt-2">
                                    <i className="fa-solid fa-building-lock"></i>
                                </div>
                                <div className="info">
                                    <h4>Multiple Product Listing</h4>
                                    <p>
                                       Share a single payment page with your consumers, adding as many products as you'd like to offer and include photos of them.

                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 mb-3">
                            <div className="info-bx">
                                <div className="icon mt-2">
                                    <i className="fa-solid fa-mobile-screen-button"></i>
                                </div>
                                <div className="info">
                                    <h4>Smarter Purchase Controls</h4>
                                    <p>
                                        Our Payment Pages are fully responsive and optimized for mobile devices, ensuring that your customers can make payments effortlessly .
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 mb-3">
                            <div className="info-bx">
                                <div className="icon mt-2">
                                    <i className="fa-solid fa-chart-line"></i>
                                </div>
                                <div className="info">
                                    <h4>Intuitive Reporting</h4>
                                    <p>
                                      Make better business decisions by using the dashboard's real-time transaction data to obtain comprehensive insights for every item in your store.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-5 col-md-12">
                <div className="title-head text-left">
                    <h6 className="mb-0">Payment Pages</h6>
                    <h3 className="pb-4 mb-0">Payzo: Packed Everything to run Payment Smartly</h3>
                    <p>
                        The best payment gateway available, Payzo gives companies all the tools they need to manage their operations profitably. With its extensive feature set and state-of-the-art technology, Payzo makes payment processing easier, boosts security, and enables companies to prosper in the digital market.
                    </p>
                    <a href="/contact-us" className="btn hero-btn-2 pt-2">
                        Sign Up
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
      <FAQ />
    </>
  );
}
