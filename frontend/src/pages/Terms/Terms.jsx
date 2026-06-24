import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Terms() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <><style dangerouslySetInnerHTML={{__html: `
.header-section {
    background: #000;
}
/*.term_sec{*/
/*    margin-top: 25px;*/
/*}*/
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
                <div className="head-title"><h2>Terms & Conditions</h2></div>
                <p><strong>Welcome to Payzo, a payment gateway services providing company in India. By using our website and services, you agree to the following Terms of Service:</strong><br />
                <br />

               <h6>1. Definitions </h6>
                Payzo: Payzo Payment Services Private Limited, a company incorporated under the Companies Act, 2013, having its registered office Near Cyber City Gurugram Haryana (122015)
Customer: Any individual or entity that uses the Payzo website or services to accept payments
Merchant: A Customer that sells goods or services online and accepts payments through Payzo
Transaction: A single payment made by a Customer to a Merchant through Payzo.


</p>


<p>
                

              <h6>2. Services</h6>
            
Payzo provides a variety of payment gateway services, including:<br />

Payment processing: We process payments made by Customers to Merchants through a variety of payment methods, including credit and debit cards, net banking, and UPI.
Fraud prevention: We use a variety of fraud prevention measures to protect our Merchants and Customers from fraud.
Dispute resolution: We help Merchants and Customers resolve disputes that may arise from Transactions.


</p>

<p>
                

               <h6>3. Merchant Account
 </h6>
             To accept payments through Payzo, Merchants must open a Merchant Account. To open a Merchant Account, Merchants must provide Payzo with certain information, including their business name, address, and contact information. Merchants must also agree to Payzo's Terms of Service.



</p>

<p>
                

              <h6>4. Fees </h6>
               Payzo charges Merchants a fee for each Transaction. The fee varies depending on the payment method used and the Merchant's risk profile. Merchants can view their fee structure in their Merchant Dashboard.



</p>
                
        
<p>
                

              <h6>5. Chargebacks
</h6>
            
If a Customer disputes a Transaction, Payzo may initiate a chargeback. A chargeback is a reversal of a Transaction. If a chargeback is successful, the Merchant will be required to refund the Customer's payment. Merchants are responsible for all chargeback fees.


</p>

<p>
                

              <h6>6. Refunds</h6>
   Merchants can issue refunds to Customers through Payzo. To issue a refund, Merchants must log in to their Merchant Dashboard and select the Transaction to be refunded. Merchants can then enter the amount of the refund and select a refund method.

</p>
<p>
                

               <h6>7. Confidentiality
</h6>
            
Payzo will maintain the confidentiality of all Merchant and Customer data. Payzo will not share Merchant or Customer data with any third party without the Merchant or Customer's prior consent.


</p>

 <h6>8. Intellectual Property

</h6><p>Payzo owns all intellectual property rights in its website, software, and services. Merchants are granted a non-exclusive license to use Payzo's intellectual property rights for the purpose of accepting payments through Payzo.


</p>
 <h6>9. Termination</h6><p>Payzo may terminate a Merchant's Account at any time for any reason. If Payzo terminates a Merchant's Account, the Merchant will be required to pay all outstanding fees and charges.


</p>
<p>
 <h6>10. Governing Law
</h6>
   These Terms of Service will be governed by and construed in accordance with the laws of India. The courts of India will have exclusive jurisdiction over any disputes arising out of or in connection with these Terms of Service.


</p>

<p>
 <h6>11. Contact Us

</h6>
<br />
<strong> Additional Terms of Service</strong> 

In addition to the above Terms of Service, the following Terms of Service also apply to your use of Payzo's website and services:<br />

You must be at least 18 years of age to use Payzo's website and services.
You must provide accurate and up-to-date information when opening a Merchant Account.
You must comply with all applicable laws and regulations when using Payzo's website and services.
You are prohibited from using Payzo's website and services for any illegal or fraudulent purposes.
You are responsible for all Transactions made through your Merchant Account.
You are responsible for all refunds issued to Customers.
You are responsible for all chargeback fees.
You are responsible for all fees and charges associated with your Merchant Account.
Payzo reserves the right to modify these Terms of Service at any time. Any changes to these Terms of Service will be posted on Payzo's website and will be effective immediately upon posting.


</p>
<p>
 <h6>10. Governing Law
</h6>
   These Terms of Service will be governed by and construed in accordance with the laws of India. The courts of India will have exclusive jurisdiction over any disputes arising out of or in connection with these Terms of Service.


</p>
        
        
                
                
                
            </div>
        </div>
    </div>
</section>
      
    </>
  );
}
