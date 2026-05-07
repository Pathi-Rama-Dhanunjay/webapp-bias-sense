import React from 'react';

const SolutionSection = () => {
  return (
    <section style={{
      background: 'linear-gradient(to bottom, var(--dark-slate), var(--primary-blue))',
      color: '#FFFFFF'
    }}>
      <div className="container">
        <h2 style={{ color: 'var(--primary-teal)', textAlign: 'center', marginBottom: '32px' }}>
          One Platform. Everything Connected.
        </h2>
        
        <p className="body-large" style={{ 
          textAlign: 'center', 
          maxWidth: '700px', 
          margin: '0 auto 48px',
          color: '#FFFFFF'
        }}>
          Data health and bias detection unified into one continuous, 
          evidence-generating system. You look once. You see everything.
        </p>

        <div style={{
          background: '#F0FFFE',
          borderLeft: '4px solid var(--primary-teal)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '800px',
          margin: '32px auto 0'
        }}>
          <p style={{
            fontSize: '18px',
            fontWeight: 500,
            color: 'var(--primary-teal)',
            textAlign: 'center',
            fontStyle: 'italic',
            margin: 0
          }}>
            Data health is the confidence interval on your bias measurement. 
            Every bias score carries reliability attached. 
            That's how you turn opinion into evidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
