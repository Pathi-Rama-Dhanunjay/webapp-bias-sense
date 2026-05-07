import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/Sections/HeroSection';
import ProblemSection from '../components/Sections/ProblemSection';
import SolutionSection from '../components/Sections/SolutionSection';
import CapabilitiesSection from '../components/Sections/CapabilitiesSection';
import WorkflowSection from '../components/Sections/WorkflowSection';
import ProofSection from '../components/Sections/ProofSection';
import BenchmarkSection from '../components/Sections/BenchmarkSection';
import PricingSection from '../components/Sections/PricingSection';
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
    <div className="home-container">
      <HeroSection />
      <ProblemSection />
      <div id="solutions"><SolutionSection /></div>
      <CapabilitiesSection />
      <WorkflowSection />
      <ProofSection />
      <BenchmarkSection />
      <div id="pricing"><PricingSection /></div>
      <div id="company"><TrustSection /></div>
      <CTASection />
    </div>
  );
};

export default Home;
