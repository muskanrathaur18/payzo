import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Privacy() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <><style dangerouslySetInnerHTML={{__html: `
/*.term_sec{*/
/*    margin-top: 25px;*/
/*}*/

.header-section {
    background: #000;
}
.head-title{
    background: #181847;
    text-align: center;
    color: #fff;
    padding: 10px 7px;
    margin-bottom: 30px;
}
.head-title h2 {
    font-size: 25px;
    letter-spacing: 1px;
    font-weight: 700;
    padding: 3px;
}
.term_sec h6 {
    color: #181847;
    font-weight: bold;
    font-size: 19px;
}
` }} />

<section className="term_sec">
    <div className="container-fluid p-5">
        <div className="row border p-3">
            <div className="col-lg-12 col-md-12">
                <div className="head-title"><h2>Privacy & Data Protection Policy</h2></div>
                <p><strong>At Payzo, we are committed to protecting the privacy of our users. This Privacy & Data Protection Policy explains how we collect, use, and share your personal information when you use our payment gateway services.
</strong><br />
                <br />

               <h6>What personal information do we collect?</h6>
               
We collect personal information from you when you create an account with us, make a payment, or contact our customer support team. This information may include:

Your name<br />
Email address<br />
Phone number<br />
Billing and shipping addresses<br />
Payment information (such as credit or debit card number, bank account information, or payment wallet information)<br />
IP address<br />
Device information (such as browser type and operating system)<br />


</p>


<p>
                

              <h6>How do we use your personal information?</h6>
            

<storng>We use your personal information to:</storng>

Process your payments<br />
Provide you with customer support<br />
Protect against fraud and other illegal activity<br />
Improve our services
Send you marketing communications (if you have opted in)<br />
<strong>How do we share your personal information?</strong>

We share your personal information with third parties only as necessary to provide you with our services. This may include:<br />

Financial institutions (such as banks and payment processors)<br />
Fraud prevention providers<br />
Service providers who help us to operate our business (such as customer support providers and marketing agencies)<br />
We may also share your personal information with third parties if required by law or if we believe that it is necessary to protect our interests or the interests of others.<br />

</p>






<p>
                

               <h6>How do we protect your personal information?</h6>
         
<strong>We use a variety of security measures to protect your personal information from unauthorized access, use, or disclosure. These measures include:</strong>

Encrypting all sensitive data at rest and in transit<br />
Using firewalls and intrusion detection systems to protect our systems<br />
Restricting access to your personal information to authorized employees<br />
How long do we retain your personal information?<br />

We retain your personal information for as long as necessary to provide you with our services and to comply with our legal obligations.
<br />
Your choices


</p>

<p>
                

              <h6>You have the following choices regarding your personal information:</h6>
            
You can opt out of receiving marketing communications from us at any time.<br />
You can request to access, correct, or delete your personal information at any time.<br />
Changes to this Privacy & Data Protection Policy<br />

We may update this Privacy & Data Protection Policy from time to time. If we make any material changes, we will notify you by email or by posting a notice on our website.<br />


</p>
                
        
<p>
                

              <h6>Contact us

</h6>
            
If you have any questions about this Privacy & Data Protection Policy, please contact us at [email protected]


</p>

<p>
                

              <h6>Additional information for users in India
</h6>
 
In addition to the above, please note the following:<br />

We are compliant with the Personal Data Protection Bill, 2019, which is the proposed data protection law in India.<br />
We do not store any sensitive personal data (such as credit card numbers or bank account numbers) on our servers. This data is encrypted and stored with our third-party payment processors<br />.
We do not share your personal information with any third parties for marketing purposes without your consent.<br />
</p>
<p>
                

               <h6>Conclusion
</h6>
            
We are committed to protecting your privacy. We hope that this Privacy & Data Protection Policy has helped you to understand how we collect, use, and share your personal information. If you have any questions, please do not hesitate to contact us.

</p>

        
                
                
                
            </div>
        </div>
    </div>
</section>
      
    </>
  );
}
