import React from 'react';
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
  return (
    <div className="home-container">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CapabilitiesSection />
      <WorkflowSection />
      <ProofSection />
      <BenchmarkSection />
      <PricingSection />
      <TrustSection />
      <CTASection />
    </div>
  );
};

export default Home;
