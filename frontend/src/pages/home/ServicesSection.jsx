import React from 'react';

export default function ServicesSection() {
  return (
    <section className="service-main-bx">
      <div className="container">
        <div className="title-head text-center">
          <span>What We Do</span>
          <h2 className="pt-2">Industry-Leading Expertise: Driving Excellence <br /> in Payment Gateway Services</h2>
        </div>
      </div>
      <div className="container">
        <ul className="nav nav-pills mb-3 px-5 justify-content-center" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <h3 className="nav-link active mb-2" id="pills-collectPayment-tab" data-bs-toggle="pill" data-bs-target="#pills-collectPayment" type="button" role="tab" aria-controls="pills-collectPayment" aria-selected="true">Collect Payments</h3>
          </li>
          <li className="nav-item" role="presentation">
            <h3 className="nav-link mb-2" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Recurring Payments</h3>
          </li>
          <li className="nav-item" role="presentation">
            <h3 className="nav-link mb-2" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Make Payouts</h3>
          </li>
          <li className="nav-item" role="presentation">
            <h3 className="nav-link mb-2" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Verify Identity</h3>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-collectPayment" role="tabpanel" aria-labelledby="pills-collectPayment-tab" tabIndex="0">
          <div className=" service-container container-fluid">
            <div className="row">
              <div className="col-xl-4 col-lg-12 col-md-12" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className="service-list-item">
                  <div className="service-list-item_image">
                    <div className="prod-left-content-bx">
                      <h3 className="prod-bg-head">Collect Payments</h3>
                      <p>For companies of all sizes looking for a quick, simple, and safe way to collect payments from their clients, Payzo is a fantastic option. With Payzo, you can concentrate on expanding your company while we handle the rest.</p>
                      <div className="image-pay-img">
                        <img src="/assets/img/Financial analysis Illustration.png" alt="Collect Payments" title="Collect Payments" className="img-fluid animated2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-12 col-md-12">
                <div className="product-bx-right">
                  <section className="gateway-services payment-sec1">
                    <div className="container aos-init aos-animate" data-aos="fade-up">
                      <div className="row">
                        <div className="col-xl-4 col-xl-4 col-lg-4 col-md-6 col-12 mt-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                          <a href="/payment-gateway">
                            <div className="card text-left shadow border-0" data-wow-delay="900ms">
                              <div className="before-card"></div>
                              <div className="card-header border-0 bg-transparent card-head-icon"><i className="fa-solid fa-wallet"></i></div>
                              <div className="card-body pg-card-desc">
                                <h4>Payment Gateway</h4>
                                <p>For companies of all sizes looking for a quick, simple, and safe way to collect payments from their clients, Payzo is a fantastic option. With Payzo, you can concentrate on expanding your company while we handle the rest.</p>
                              </div>
                              <div className="after-card"></div>
                            </div>
                          </a>
                        </div>
                        <div className="col-xl-4 col-xl-4 col-lg-4 col-md-6 col-12 mt-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                          <a href="/payment-pages">
                            <div className="card text-left shadow border-0">
                              <div className="before-card"></div>
                              <div className="card-header border-0 bg-transparent card-head-icon"><i className="fa-solid fa-boxes-packing"></i></div>
                              <div className="card-body pg-card-desc">
                                <h4>Payment Pages</h4>
                                <p>A payment page is a dedicated online portal where users complete their checkouts. Payzo helps you design stunning, secure checkout spaces to receive global customer payments.</p>
                              </div>
                              <div className="after-card"></div>
                            </div>
                          </a>
                        </div>
                        <div className="col-xl-4 col-xl-4 col-lg-4 col-md-6 col-12 mt-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                          <a href="/soft-pos">
                            <div className="card text-left shadow border-0">
                              <div className="before-card"></div>
                              <div className="card-header border-0 bg-transparent card-head-icon"><i className="fa-solid fa-square-check"></i></div>
                              <div className="card-body pg-card-desc">
                                <h4>Soft Pos</h4>
                                <p>Without the need for extra hardware, soft POS enables retailers to take contactless payments from a range of contactless payment methods, such as cards and mobile wallets on wearables and smartphones.</p>
                              </div>
                              <div className="after-card"></div>
                            </div>
                          </a>
                        </div>
                        <div className="col-xl-4 col-xl-4 col-lg-4 col-md-6 col-12 mt-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                          <a href="#">
                            <div className="card text-left shadow border-0">
                              <div className="before-card"></div>
                              <div className="card-header border-0 bg-transparent card-head-icon"><i className="fa-solid fa-right-left"></i></div>
                              <div className="card-body pg-card-desc">
                                <h4>Easy Split</h4>
                                <p>Just make a divide and encourage the other participants to use Easy divide. You can include a comment if necessary and state how much each person owes. You can use Payzo's to settle the split when everyone has agreed to it.</p>
                              </div>
                              <div className="after-card"></div>
                            </div>
                          </a>
                        </div>
                        <div className="col-xl-4 col-xl-4 col-lg-4 col-md-6 col-12 mt-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                          <a href="#">
                            <div className="card text-left shadow border-0">
                              <div className="before-card"></div>
                              <div className="card-header border-0 bg-transparent card-head-icon"><i className="fa-solid fa-indian-rupee-sign" style={{ padding: "13px 16px" }}></i></div>
                              <div className="card-body pg-card-desc">
                                <h4>Buy Now Pay Later</h4>
                                <p>Customers who use the Buy Now Pay Later (BNPL) payment option can buy products and services and pay for them over time in installments. One common method of payment used by internet buyers is BNPL.</p>
                              </div>
                              <div className="after-card"></div>
                            </div>
                          </a>
                        </div>
                        <div className="col-xl-4 col-xl-4 col-lg-4 col-md-6 col-12 mt-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                          <a href="#">
                            <div className="card text-left shadow border-0">
                              <div className="before-card"></div>
                              <div className="card-header border-0 bg-transparent card-head-icon"><i className="fa-brands fa-slack"></i></div>
                              <div className="card-body pg-card-desc">
                                <h4>Smart Collect</h4>
                                <p>The greatest payment service provider in India, Payzo, provides a Smart Collection solution that makes it easy and safe for companies of all kinds to receive payments.Smart Collection is an all-inclusive solution with several features.</p>
                              </div>
                              <div className="after-card"></div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
          <div className=" service-container container-fluid">
            <div className="row">
              <div className="col-xl-4 col-lg-12 col-md-12">
                <div className="service-list-item">
                  <div className="service-list-item_image">
                    <div className="prod-left-content-bx2">
                      <h3 className="prod-bg-head">Recurring Payment</h3>
                      <p>Recurring payment is a payment model where the customers authorize the merchant to pull funds from their accounts automatically at regular intervals for the goods and services provided to them on an ongoing basis.</p>
                      <div className="image-pay-img">
                        <img src="/assets/img/Blockchain_solutions.png" title="Recurring Payment" alt="payment model" className="img-fluid animated2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-12 col-md-12">
                <div className="product-bx-right">
                  <section className="gateway-services payment-sec2">
                    <div className="container aos-init aos-animate" data-aos="fade-up">
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 mt-3">
                          <div className="card text-left shadow border-0 wow animate_ animate__fadeInDown animated" data-wow-delay="900ms" style={{ visibility: "visible", animationDelay: "900ms" }}>
                            <div className="before-card"></div>
                            <div className="card-header border-0 bg-transparent card-head-icon2">
                              <i><img src="/assets/icon/communication.png" alt="Subscription Plan" title="Subscription Plan" /></i>
                            </div>
                            <div className="card-body pg-card-desc">
                              <h4>Set Up a Subscription Plan</h4>
                              <p>Define the details of your subscription plan, including the frequency of payments, and any other specific terms or features.</p>
                            </div>
                            <div className="after-card"></div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 mt-3">
                          <div className="card text-left shadow border-0">
                            <div className="before-card"></div>
                            <div className="card-header border-0 bg-transparent card-head-icon2">
                              <i><img src="/assets/icon/bills.png" alt="Customer Payment" title="Payment Details" /></i>
                            </div>
                            <div className="card-body pg-card-desc">
                              <h4>Customer Payment Details</h4>
                              <p>Obtain the necessary payment details from your customer, such as their credit card information or bank account details.</p>
                            </div>
                            <div className="after-card"></div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 mt-3">
                          <div className="card text-left shadow border-0">
                            <div className="before-card"></div>
                            <div className="card-header border-0 bg-transparent card-head-icon2">
                              <i><img src="/assets/icon/chip.png" title="Payment Gateway" alt="Tokenization or Vaulting" /></i>
                            </div>
                            <div className="card-body pg-card-desc">
                              <h4>Tokenization or Vaulting</h4>
                              <p>A lot of payment gateways have vaulting or tokenization features. This enables you to keep client payment information safe and retrieve it when needed.</p>
                            </div>
                            <div className="after-card"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 mt-3">
                          <div className="card text-left shadow border-0">
                            <div className="before-card"></div>
                            <div className="card-header border-0 bg-transparent card-head-icon2">
                              <i><img src="/assets/icon/api.png" alt="payment gateway's" title="Payment API" /></i>
                            </div>
                            <div className="card-body pg-card-desc">
                              <h4>Implement Recurring Payment API</h4>
                              <p>To configure the recurring payment schedule, use the payment gateway's tools or recurring payment API.</p>
                            </div>
                            <div className="after-card"></div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 mt-3">
                          <div className="card text-left shadow border-0">
                            <div className="before-card"></div>
                            <div className="card-header border-0 bg-transparent card-head-icon2">
                              <i><img src="/assets/icon/credit-card.png" title="Payments" alt="payment gateway" /></i>
                            </div>
                            <div className="card-body pg-card-desc">
                              <h4>Handle Failed Payments</h4>
                              <p>It's important to handle cases where recurring payments fail due to expired cards, insufficient funds, or other issues.</p>
                            </div>
                            <div className="after-card"></div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 mt-3">
                          <div className="card text-left shadow border-0">
                            <div className="before-card"></div>
                            <div className="card-header border-0 bg-transparent card-head-icon2">
                              <i><img src="/assets/icon/rating.png" title="Customer Management" alt="Customer Management" /></i>
                            </div>
                            <div className="card-body pg-card-desc">
                              <h4>Customer Management</h4>
                              <p>Provide tools that let users manage their regular payments, adjust their payment methods, and manage their subscriptions.</p>
                              <div className="after-card"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
          <div className=" service-container container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="service-list-item">
                  <div className="service-list-item_image">
                    <div className="prod-left-content-bx3">
                      <h3 className="prod-bg-head">Make Payouts</h3>
                      <p>Payouts refer to the expected financial returns or monetary disbursements from investments or annuities. A payout may be expressed on an overall or periodic basis and as either a percentage of the investment's cost or in a real dollar amount.</p>
                      <div className="image-pay-3">
                        <img src="/assets/img/payout.png" title="Payouts" alt="Payouts Payment" className="img-fluid animated2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="product-bx-right">
                  <section className="gateway-services payment-sec3">
                    <div className="container aos-init aos-animate" data-aos="fade-up">
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 mt-3">
                          <div className="card text-left shadow border-0 wow animate_ animate__fadeInDown animated" data-wow-delay="900ms" style={{ visibility: "visible", animationDelay: "900ms" }}>
                            <div className="before-card"></div>
                            <div className="card-header border-0 bg-transparent card-head-icon3">
                              <i><img src="/assets/icon/deposit.png" title="Direct Deposit" alt="bank account" /></i>
                            </div>
                            <div className="card-body pg-card-desc">
                              <h4>Direct Deposit</h4>
                              <p>The computerized transfer of money into a bank account without the use of a physical paper check is referred to as "direct deposit."</p>
                            </div>
                            <div className="after-card"></div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 mt-3">
                          <div className="card text-left shadow border-0">
                            <div className="before-card"></div>
                            <div className="card-header border-0 bg-transparent card-head-icon3">
                              <i><img src="/assets/icon/credit-card (1).png" title="Payment Cards" alt="Payment Cards" /></i>
                            </div>
                            <div className="card-body pg-card-desc">
                              <h4>Payment cards</h4>
                              <p>A payment card is a type of financial instrument that enables people or companies to electronically pay for products and services.</p>
                            </div>
                            <div className="after-card"></div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 mt-3">
                          <div className="card text-left shadow border-0">
                            <div className="before-card"></div>
                            <div className="card-header border-0 bg-transparent card-head-icon3">
                              <i><img src="/assets/icon/project-manager.png" title="Payments" alt="Payments" /></i>
                            </div>
                            <div className="card-body pg-card-desc">
                              <h4>User Roles</h4>
                              <p>Get complete control and visibility with real-time summaries of cashflow.You can choose to restrict certain payment gateways to specific user roles.</p>
                            </div>
                            <div className="after-card"></div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 mt-3">
                          <div className="card text-left shadow border-0">
                            <div className="before-card"></div>
                            <div className="card-header border-0 bg-transparent card-head-icon3">
                              <i><img src="/assets/icon/api.png" title="API integration" alt="API integration" /></i>
                            </div>
                            <div className="card-body pg-card-desc">
                              <h4>API integration</h4>
                              <p>To configure the recurring payment schedule, use the payment gateway's tools or recurring payment API.</p>
                            </div>
                            <div className="after-card"></div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 mt-3">
                          <div className="card text-left shadow border-0">
                            <div className="before-card"></div>
                            <div className="card-header border-0 bg-transparent card-head-icon3">
                              <i><img src="/assets/icon/payment.png" title="Split Payments" alt="Payment Online" /></i>
                            </div>
                            <div className="card-body pg-card-desc">
                              <h4>Split payments</h4>
                              <p>It's important to handle cases where recurring payments fail due to expired cards, insufficient funds, or other issues.</p>
                            </div>
                            <div className="after-card"></div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 mt-3">
                          <div className="card text-left shadow border-0">
                            <div className="before-card"></div>
                            <div className="card-header border-0 bg-transparent card-head-icon3">
                              <i><img src="/assets/icon/dividend.png" title="Online Payments" alt="Payment Gateway" /></i>
                            </div>
                            <div className="card-body pg-card-desc">
                              <h4>Instant Beneficiary additions</h4>
                              <p>Any individual or group that gains benefits via a will, trust, annuity, insurance policy, retirement plan, or other arrangement is known as a beneficiary.</p>
                              <div className="after-card"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex="0">
          <div className=" service-container container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="service-list-item">
                  <div className="service-list-item_image">
                    <div className="prod-left-content-bx4">
                      <h3 className="prod-bg-head">Verify Identity</h3>
                      <p>Implementing identity verification for making payouts is crucial to ensure the security and legitimacy of your financial transactions.With our company collect information of customer,verify Documents.</p>
                      <div className="image-pay-3">
                        <img src="/assets/img/identity-img.png" title="Verify Identity" alt="verify Documents" className="img-fluid animated2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="product-bx-right">
                  <section className="gateway-services payment-sec4">
                    <div className="container aos-init aos-animate" data-aos="fade-up">
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 mt-3">
                          <a href="/aadhar-verification">
                            <div className="card text-left shadow border-0 wow animate_ animate__fadeInDown animated" data-wow-delay="900ms" style={{ visibility: "visible", animationDelay: "900ms" }}>
                              <div className="before-card"></div>
                              <div className="card-header border-0 bg-transparent card-head-icon4">
                                <i><img src="/assets/icon/security.png" title="Bank Account Verification" alt="Bank Account Verification" /></i>
                              </div>
                              <div className="card-body pg-card-desc">
                                <h4>Aadhar Verification</h4>
                                <p>The act of tying a person's Aadhaar number to their bank account and utilizing Aadhaar details to confirm their identification is known as Aadhaar verification in banks.</p>
                              </div>
                              <div className="after-card"></div>
                            </div>
                          </a>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 mt-3">
                          <a href="/bank-verification">
                            <div className="card text-left shadow border-0">
                              <div className="before-card"></div>
                              <div className="card-header border-0 bg-transparent card-head-icon4">
                                <i><img src="/assets/icon/credit-card (1).png" title="Payment Cards" alt="Payment Cards" /></i>
                              </div>
                              <div className="card-body pg-card-desc">
                                <h4>Bank Account Verification</h4>
                                <p>The process of verifying bank accounts and account holders' names during onboarding KYC and prior to payouts is known as bank account verification.</p>
                              </div>
                              <div className="after-card"></div>
                            </div>
                          </a>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 mt-3">
                          <a href="/pan-verification">
                            <div className="card text-left shadow border-0">
                              <div className="before-card"></div>
                              <div className="card-header border-0 bg-transparent card-head-icon4">
                                <i><img src="/assets/icon/project-manager.png" title="Payment Gateway" alt="Payment Gateway" /></i>
                              </div>
                              <div className="card-body pg-card-desc">
                                <h4>PAN Verification</h4>
                                <p>In banks, PAN (Permanent Account Number) verification is the process of confirming each person's PAN information and associating it with their bank account.</p>
                              </div>
                              <div className="after-card"></div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
