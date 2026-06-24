import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Page components
import FAQ from './FAQ';
import PaymentGateway from './PaymentGateway';
import PaymentPages from './PaymentPages';
import SoftPos from './SoftPos';
import AadharVerification from './AadharVerification';
import BankVerification from './BankVerification';
import PanVerification from './PanVerification';

// Home section components
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import GrowSection from './GrowSection';
import PartnerSection from './PartnerSection';
import ServicesSection from './ServicesSection';
import BenefitsSection from './BenefitsSection';
import WorkProcessSection from './WorkProcessSection';
import CtaSection from './CtaSection';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={
        <>
          <HeroSection />
          <AboutSection />
          <FeaturesSection />
          <GrowSection />
          <PartnerSection />
          <ServicesSection />
          <BenefitsSection />
          <WorkProcessSection />
          <CtaSection />
          <FAQ />
        </>
      } />
      <Route path="/payment-gateway" element={<PaymentGateway />} />
      <Route path="/payment-pages" element={<PaymentPages />} />
      <Route path="/soft-pos" element={<SoftPos />} />
      <Route path="/aadhar-verification" element={<AadharVerification />} />
      <Route path="/bank-verification" element={<BankVerification />} />
      <Route path="/pan-verification" element={<PanVerification />} />
    </Routes>
  );
}
