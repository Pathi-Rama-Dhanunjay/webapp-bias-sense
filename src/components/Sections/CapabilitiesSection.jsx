import React from 'react';
import CapabilitiesCards from '../Interactive/CapabilitiesCards';

const CapabilitiesSection = () => {
  return (
    <section className="light-section" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', color: 'var(--dark-slate)', marginBottom: '48px' }}>
          Core Capabilities
        </h2>
        <CapabilitiesCards />
      </div>
    </section>
  );
};

export default CapabilitiesSection;
