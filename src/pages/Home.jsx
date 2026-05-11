import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/Sections/HeroSection';
import SolutionSection from '../components/Sections/SolutionSection';
import ClientsSection from '../components/Sections/ClientsSection';
import CapabilitiesSection from '../components/Sections/CapabilitiesSection';
import WorkflowSection from '../components/Sections/WorkflowSection';
import ProofSection from '../components/Sections/ProofSection';
import BenchmarkSection from '../components/Sections/BenchmarkSection';
import TrustSection from '../components/Sections/TrustSection';
import CTASection from '../components/Sections/CTASection';


const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="home-container light-section"
      style={{
        backgroundColor: '#ffffff', // Pure elegant white
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      {/* Elegant SaaS Background - Subtle Top Glow */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'radial-gradient(circle at 50% 0%, rgba(45, 212, 191, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Clean Content Layer */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <HeroSection />
        {/* Restored Clients Marquee */}
        <ClientsSection />
        <div id="solutions" style={{ position: 'relative', zIndex: 1 }}><SolutionSection /></div>
        <CapabilitiesSection />
        <WorkflowSection />
        <ProofSection />
        <BenchmarkSection />
        <div id="company"><TrustSection /></div>
        <CTASection />
      </div>

      {/* Global overrides to make all sections fluid and transparent */}
      <style>{`
        .home-container section {
          background: transparent !important;
        }
        /* Ensure text in previously dark sections is legible on the white grid */
        .home-container .dark-section h2,
        .home-container .dark-section h3 {
          color: #1E293B !important;
        }
        .home-container .dark-section p {
          color: #64748B !important;
        }
      `}</style>
    </motion.div>
  );
};

export default Home;
