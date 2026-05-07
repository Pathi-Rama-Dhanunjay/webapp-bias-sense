import React from 'react';
import NavBar from './components/Navigation/NavBar';
import HeroSection from './components/Sections/HeroSection';
import ProblemSection from './components/Sections/ProblemSection';
import SolutionSection from './components/Sections/SolutionSection';
import CapabilitiesSection from './components/Sections/CapabilitiesSection';
import WorkflowSection from './components/Sections/WorkflowSection';
import ProofSection from './components/Sections/ProofSection';
import BenchmarkSection from './components/Sections/BenchmarkSection';
import PricingSection from './components/Sections/PricingSection';
import TrustSection from './components/Sections/TrustSection';
import CTASection from './components/Sections/CTASection';

function App() {
  // Mock GA Scroll Tracking
  React.useEffect(() => {
    let scrolled = false;
    const handleScroll = () => {
      if (!scrolled && window.scrollY > document.body.scrollHeight / 2) {
        console.log("GA Event: scroll_depth", { scroll_percentage: 50 });
        scrolled = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container" style={{ overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
      <NavBar />
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
}

export default App;
