import React from 'react';

export default function FeaturesSection() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-sm-4 my-2">
          <div className="features-div features-div-first">
            <ul>
              <li>
                <span><i className="fa-solid fa-compact-disc"></i></span>
                <span>
                  <p>Premium Capabilities</p>
                </span>
              </li>
            </ul>
            <h3>What Sets Payzo Apart from the Rest</h3>
            <a href="/payment-gateway">Explore Features <i className="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
        <div className="col-sm-4 my-2">
          <div className="features-div">
            <ul className="my-3">
              <li>
                <span><img src="/assets/icon/analysis-02.png" title="Analytics Management" alt="payzo " /></span>
                <span>
                  <h6>01</h6>
                </span>
              </li>
            </ul>
            <h3>Smart Insights Dashboard</h3>
            <p>Payzo's advanced analytics suite gives businesses deep visibility into payment data, helping you make informed decisions and drive sustainable growth.</p>
          </div>
        </div>
        <div className="col-sm-4 my-2">
          <div className="features-div">
            <ul className="my-3">
              <li>
                <span><img src="/assets/icon/low-txns-fee.png" title="Low Transaction Fee" alt="cost-effective transactions,Payzo's low fees" /></span>
                <span>
                  <h6>02</h6>
                </span>
              </li>
            </ul>
            <h3>Minimal Transaction Charges</h3>
            <p>Cut costs without cutting quality. Payzo's competitive pricing ensures every rupee you earn stays with you, making online payments truly affordable for businesses.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 my-2">
          <div className="features-div">
            <ul className="my-3">
              <li>
                <span><img src="/assets/icon/tocken-02.png" title="Secure Transactions" alt="secure transactions" /></span>
                <span>
                  <h6>03</h6>
                </span>
              </li>
            </ul>
            <h3>Advanced Data Tokenization</h3>
            <p>Payzo secures every transaction with state-of-the-art tokenization technology, protecting customer data at every step and delivering peace of mind.</p>
          </div>
        </div>
        <div className="col-sm-4 my-2">
          <div className="features-div">
            <ul className="my-3">
              <li>
                <span><img src="/assets/icon/wallet.png" title="Manage E Wallet" alt="E-Wallet transactions, digital payment" /></span>
                <span>
                  <h6>04</h6>
                </span>
              </li>
            </ul>
            <h3>Digital Wallet Management</h3>
            <p>Take full control of digital wallet transactions through Payzo's unified interface — efficient, secure, and built for the modern digital economy.</p>
          </div>
        </div>
        <div className="col-sm-4 my-2">
          <div className="features-div">
            <ul className="my-3">
              <li>
                <span><img src="/assets/icon/cards.png" title="Virtual Cards" alt=" on-demand digital payment solutions, Virtual Cards" /></span>
                <span>
                  <h6>05</h6>
                </span>
              </li>
            </ul>
            <h3>Instant Virtual Cards</h3>
            <p>Payzo's Virtual Cards let businesses issue on-demand digital cards instantly, bringing greater flexibility, control, and security to your payment ecosystem.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
