import TestimonialCarousel from '../Interactive/TestimonialCarousel';

const StatCard = ({ number, label, subtext }) => (
  <div style={{
    background: '#FFFFFF',
    borderTop: '3px solid var(--primary-teal)',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
  }}>
    <div style={{ fontSize: '40px', fontWeight: 700, color: 'var(--primary-teal)', marginBottom: '8px' }}>
      {number}
    </div>
    <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-gray)' }}>
      {label}
    </div>
    {subtext && (
      <div style={{ fontSize: '12px', color: 'var(--text-gray)', marginTop: '4px', fontStyle: 'italic' }}>
        {subtext}
      </div>
    )}
  </div>
);

const ProofSection = () => {
  return (
    <section className="light-section" style={{ background: 'var(--light-gray)' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
          gap: '24px'
        }}>
          <StatCard number="10,000+" label="AI Models Evaluated" />
          <StatCard number="50+" label="Enterprise Clients" />
          <StatCard number="$200K-$500K" label="Average Annual Contract Value" />
          <StatCard number="Zero" label="Biased Models Deployed" subtext="(With BiasSense enforcement)" />
        </div>

        <TestimonialCarousel />

      </div>
    </section>
  );
};

export default ProofSection;
