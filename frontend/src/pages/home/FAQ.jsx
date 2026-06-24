import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "Why should I choose Payzo payments?",
    answer: "Payzo payments is India's leading payments and API banking company. It helps 1,00,000+ businesses accept and send money and is used for multiple use cases like vendor payouts, wage payouts, bulk refunds, etc."
  },
  {
    id: 2,
    question: "How to get started on Payzo payments?",
    answer: "Select the item that catches your attention. Using your test API credentials, you can move to the Test Environment and experiment with the product's features and integrations. You can switch to the Production Environment whenever you're ready."
  },
  {
    id: 3,
    question: "How long would it take to activate my account?",
    answer: "Once your documents are submitted for review, account gets activated with 24 working hours. Please refer to our quick activation guide. You can also write to us at sales@payzo.in"
  },
  {
    id: 4,
    question: "How is Payzo payment Gateway different from other payment gateways in India?",
    answer: "Payzo payment Gateway offers 120+ payment modes including Pay Later, Paytm, and Cardless EMI options etc. Payzo payment Gateway is the only payment gateway that supports instant refunds versus the industry standard of refunds in 5-7 working days."
  },
  {
    id: 5,
    question: "What is Payouts?",
    answer: "When you create a Payouts account, Payzo payments creates a virtual wallet for you. You can add funds from your bank accounts to the wallet and use the funds to do payouts. You can use the Payouts dashboard to do single or bulk payouts via excel upload or integrate Payouts APIs with your product or ERP to automate bulk payouts."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ padding: '70px 0', background: '#ffffff' }}>
      <div className="container" data-aos="fade-up">

        {/* Header — "— HAVE ANY QUESTION —" style */}
        <div className="text-center mb-5">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '12px'
          }}>
            <span style={{ display: 'block', width: '40px', height: '2px', background: '#111' }}></span>
            <span style={{
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#111111'
            }}>
              Have any Question
            </span>
            <span style={{ display: 'block', width: '40px', height: '2px', background: '#111' }}></span>
          </div>
          <h2 style={{
            color: '#111111',
            fontSize: '36px',
            fontWeight: '800',
            margin: '0',
            lineHeight: '1.2'
          }}>
            Frequently Asked Questions?
          </h2>
        </div>

        {/* FAQ Items */}
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          {faqData.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={100 * (idx + 1)}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '10px',
                  marginBottom: '14px',
                  overflow: 'hidden',
                  boxShadow: isOpen
                    ? '0 4px 16px rgba(0,0,0,0.08)'
                    : '0 1px 4px rgba(0,0,0,0.05)',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                {/* Question Row */}
                <div
                  onClick={() => handleToggle(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '18px 22px',
                    cursor: 'pointer',
                    gap: '14px'
                  }}
                >
                  {/* Left: ? icon + question text */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                    <i
                      className="fa-regular fa-circle-question"
                      style={{
                        fontSize: '20px',
                        color: '#555555',
                        flexShrink: 0
                      }}
                    ></i>
                    <span style={{
                      color: '#111111',
                      fontSize: '16px',
                      fontWeight: '700',
                      lineHeight: '1.4'
                    }}>
                      {item.question}
                    </span>
                  </div>

                  {/* Right: chevron */}
                  <i
                    className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}
                    style={{
                      fontSize: '14px',
                      color: '#555555',
                      flexShrink: 0,
                      transition: 'transform 0.3s ease'
                    }}
                  ></i>
                </div>

                {/* Answer */}
                {isOpen && (
                  <div style={{
                    padding: '0 22px 20px 54px',
                    borderTop: '1px solid #f0f0f0'
                  }}>
                    <p style={{
                      color: '#444444',
                      fontSize: '15px',
                      lineHeight: '1.7',
                      margin: '16px 0 0 0'
                    }}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
