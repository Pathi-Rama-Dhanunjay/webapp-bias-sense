
const CTASection = () => {
  const handleDemoClick = () => {
    console.log("GA Event: cta_click", { button_name: 'book_demo_final', section: 'final_cta' });
    window.location.href = '/contact';
  };



  return (
    <section style={{
      background: 'linear-gradient(to right, var(--dark-slate), var(--primary-blue))',
      color: '#FFFFFF',
      textAlign: 'center',
      position: 'relative'
    }}>
      {/* Accent Line Top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: 'linear-gradient(90deg, var(--primary-teal), var(--secondary-purple))'
      }}></div>

      <div className="container" style={{ padding: '48px 0' }}>
        <h2 style={{ color: '#FFFFFF', marginBottom: '24px', maxWidth: '800px', margin: '0 auto 24px' }}>
          Ready to Turn Bias Detection Into Competitive Advantage?
        </h2>
        
        <p className="body-large" style={{ 
          color: '#FFFFFF', 
          marginBottom: '32px',
          maxWidth: '600px',
          margin: '0 auto 32px'
        }}>
          See BiasSense in action with your own data. 
          Book a 30-minute demo with our team.
        </p>

        <div style={{ 
          display: 'flex', 
          gap: '16px', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }} className="cta-buttons">
          <button 
            onClick={handleDemoClick}
            style={{
              background: 'linear-gradient(90deg, var(--primary-blue) 0%, var(--primary-teal) 100%)',
              color: 'white',
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: 700,
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
            }}
          >
            Book a Demo Now
          </button>
          

        </div>

        <p style={{
          fontSize: '14px',
          color: 'rgba(255,255,255,0.8)',
          marginTop: '32px'
        }}>
          Free trial available. No credit card required. <br className="mobile-break" />
          See results in your first analysis.
        </p>

      </div>
      <style>{`
        @media (min-width: 768px) {
          .mobile-break { display: none; }
        }
        @media (max-width: 768px) {
          .cta-buttons { flex-direction: column; }
          .cta-buttons button { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default CTASection;
