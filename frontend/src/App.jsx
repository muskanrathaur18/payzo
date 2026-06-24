import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Layout components
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import InstantSettlement from './pages/InstantSettlement/InstantSettlement';
import UpiQr from './pages/UpiQr/UpiQr';
import AutoCollect from './pages/AutoCollect/AutoCollect';
import PaymentLinks from './pages/PaymentLinks/PaymentLinks';
import Invoices from './pages/Invoices/Invoices';
import GstVerification from './pages/GstVerification/GstVerification';
import Industry from './pages/Industry/Industry';
import Pricing from './pages/Pricing/Pricing';
import Contact from './pages/Contact/Contact';
import CustomerSupport from './pages/CustomerSupport/CustomerSupport';
import PayIn from './pages/PayIn/PayIn';
import Partner from './pages/Partner/Partner';
import Terms from './pages/Terms/Terms';
import Privacy from './pages/Privacy/Privacy';

// Industry Pages
import EcommerceIndustry from './pages/EcommerceIndustry/EcommerceIndustry';
import EducationIndustry from './pages/EducationIndustry/EducationIndustry';
import NbfcIndustry from './pages/NbfcIndustry/NbfcIndustry';
import InsuranceIndustry from './pages/InsuranceIndustry/InsuranceIndustry';
import MlmIndustry from './pages/MlmIndustry/MlmIndustry';
import B2bIndustry from './pages/B2bIndustry/B2bIndustry';
import B2cIndustry from './pages/B2cIndustry/B2cIndustry';
import GamingIndustry from './pages/GamingIndustry/GamingIndustry';

import Login from './pages/Login/Login';
import UserDashboard from './pages/dashboard/UserDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';


// Animated Page Wrapper (triggers entrance transitions on route change)
const AnimatedPage = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

function AppContent({ showBackToTop, scrollToTop }) {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/userdashboard' || location.pathname === '/admindashboard';
  
  useEffect(() => {
    AOS.refresh();
  }, [location]);

  const wrap = (Component) => (
    <AnimatedPage>
      <Component />
    </AnimatedPage>
  );

  return (
    <>
      {/* Navbar & Sidebar */}
      {!isLoginPage && <Navbar />}

      {/* Main page content routes with page load transitions */}
      <main>
        <Routes>
          <Route path="/*" element={wrap(Home)} />
          <Route path="/about-us" element={wrap(AboutUs)} />
          
          {/* Products */}
          <Route path="/instant-settlement" element={wrap(InstantSettlement)} />
          <Route path="/upiqr" element={wrap(UpiQr)} />
          <Route path="/auto-collect" element={wrap(AutoCollect)} />
          <Route path="/payment-links" element={wrap(PaymentLinks)} />
          <Route path="/invoices" element={wrap(Invoices)} />

          {/* Verification */}
          <Route path="/gst-verification" element={wrap(GstVerification)} />

          {/* Industry Index & Sub-Industries */}
          <Route path="/industry" element={wrap(Industry)} />
          <Route path="/ecommerce-industry" element={wrap(EcommerceIndustry)} />
          <Route path="/education-industry" element={wrap(EducationIndustry)} />
          <Route path="/nbfc-industry" element={wrap(NbfcIndustry)} />
          <Route path="/insurance-industry" element={wrap(InsuranceIndustry)} />
          <Route path="/mlm-industry" element={wrap(MlmIndustry)} />
          <Route path="/b2b-industry" element={wrap(B2bIndustry)} />
          <Route path="/b2c-industry" element={wrap(B2cIndustry)} />
          <Route path="/gaming-industry" element={wrap(GamingIndustry)} />

          {/* General Information */}
          <Route path="/login" element={wrap(Login)} />
          <Route path="/userdashboard" element={wrap(UserDashboard)} />
          <Route path="/admindashboard" element={wrap(AdminDashboard)} />
          <Route path="/contact-us" element={wrap(Contact)} />
          <Route path="/pricing" element={wrap(Pricing)} />
          <Route path="/customer-support" element={wrap(CustomerSupport)} />
          <Route path="/pay-in" element={wrap(PayIn)} />
          <Route path="/partner" element={wrap(Partner)} />
          <Route path="/terms" element={wrap(Terms)} />
          <Route path="/privacy" element={wrap(Privacy)} />
        </Routes>
      </main>

      {/* Footer */}
      {!isLoginPage && <Footer />}

      {/* Floating WhatsApp Widget */}
      {!isLoginPage && (
        <a 
          href="https://api.whatsapp.com/send/?phone=7703977691&text&type=phone_number&app_absent=0" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-icon"
          style={{ cursor: 'pointer' }}
        >
          <img src="/assets/icons/whatsapp-icon.png" title="Whatsapp number" alt="Whatsapp" />
        </a>
      )}

      {/* Back to Top Arrow */}
      {!isLoginPage && (
        <a 
          onClick={scrollToTop} 
          className="back-to-top d-flex align-items-center justify-content-center"
          style={{ 
            cursor: 'pointer', 
            display: showBackToTop ? 'flex' : 'none', 
            zIndex: 9999 
          }}
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      )}
    </>
  );
}

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Router>
      <ScrollToTop />
      <AppContent showBackToTop={showBackToTop} scrollToTop={scrollToTop} />
    </Router>
  );
}
