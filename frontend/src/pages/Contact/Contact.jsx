import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>
<section className="contact-banner-bg main-banner-bg">
    <div className="container" style={{"marginTop":"0px","opacity":"1"}}>
        <div className="heading-div">
            <h1>Get in Touch with Payzo</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/" style={{"opacity":"0.9"}}>Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page" style={{"color":"#000","opacity":"0.9"}}><a href="https://www.payzo.in/contact-us">Get in Touch with Payzo</a></li>
                </ol>
            </nav>
        </div>
    </div>
</section>

<div className="container">
    <div className="contact-frm">
        <div className="row fade-bottom" data-anima="" data-time="1000" style={{"position":"relative","animationDuration":"1000ms","transitionTimingFunction":"ease","transitionDelay":"0ms"}} aid="0.8991498085125322">
            <div className="col-lg-6 col-md-6">
                <div className="title" style={{"marginTop":"-13px"}}>
                    <h3>Get in Touch with Payzo Now</h3>
                    <h2>
                        Request a free<br />
                        consultation with us
                    </h2>
                </div>
                <p className="mb-4">
                    Get in Touch with Payzo today to learn more about how Payzo can help you grow your business and improve your customer experience.
                </p>
                <a href="//privacy" className="btn-text active">You accept our policy<i className="fa-solid fa-chevron-right"></i></a>
            </div>
            <div className="col-lg-6 col-md-6">
                <form className="form-box" id="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Your message has been sent! We will get back to you shortly.'); e.target.reset(); }}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <input name="name" placeholder="Name" type="text" className="input-text p-1 mb-5" required="" />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <input name="email" placeholder="Email" type="text" className="input-text p-1 mb-5" required="" />
                        </div>
                        
                        
                        
                        <div className="col-lg-6 col-md-6">
                            <input name="phone" placeholder="Phone" type="text" className="input-text p-1 mb-5" required inputMode="numeric" pattern="[0-9]*" maxLength="10" />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <input name="subject" placeholder="Subject" type="text" className="input-text p-1 mb-5" required="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <textarea name="message" placeholder="Message" className="input-textarea p-1 mb-4" required=""></textarea>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Send message</button>
                </form>
            </div>
        </div>
    </div>
</div>


<section className="contact-us-sec">
    <div className="container">
        

        <div className="title-head-2 text-center">
            <span>Get in Touch with Payzo</span>
            <h2 className="text-light pt-2">Get in Touch</h2>
        </div>

        <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
                <div className="mailus contact-bx text-center mb-4">
                    <div className="icon-1">
                        <a href="#"><i className="fa-solid fa-envelope"></i></a>
                    </div>
                    <h5 className="cont_us">Mail Us</h5>
                    <div className="content">
                        <p><a href="mailto:info@payzo.in">info@payzo.in</a></p>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-4 col-12">
                <div className="phone contact-bx text-center">
                    <div className="icon-1">
                        <a href="#"><i className="fa-solid fa-phone"></i></a>
                    </div>
                    <h5 className="cont_us">Phone No</h5>
                    <div className="content">
                        <p><span>+91 7703977691</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
      
    </>
  );
}
