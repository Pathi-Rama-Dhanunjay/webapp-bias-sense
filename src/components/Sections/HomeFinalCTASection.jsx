import { motion } from 'framer-motion';

const HomeFinalCTASection = () => {
  return (
    <section className="light-section" style={{ padding: 'clamp(56px, 7vh, 90px) 24px 110px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            borderRadius: '24px',
            padding: 'clamp(28px, 4vw, 48px)',
            background: 'linear-gradient(130deg, #0F4C8C 0%, #00A99D 100%)',
            color: '#FFFFFF',
            boxShadow: '0 24px 50px rgba(15, 76, 140, 0.25)',
          }}
        >
          <div className="home-cta-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginBottom: '10px', opacity: 0.9 }}>
                Get Started
              </p>
              <h2 style={{ color: '#FFFFFF', marginBottom: '10px' }}>Ready to Operationalize Fair AI Across Your Stack?</h2>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.92)', maxWidth: '680px' }}>
                Bring legal, risk, and ML on the same governance workflow with measurable fairness controls and deployment enforcement.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap', gap: '10px' }}>
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { window.location.href = '/use-cases'; }}
                style={{
                  border: 'none',
                  cursor: 'pointer',
                  background: '#FFFFFF',
                  color: '#0F172A',
                  borderRadius: '999px',
                  fontWeight: 700,
                  padding: '12px 20px',
                }}
              >
                Explore Use Cases
              </motion.button>
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { window.location.href = '/product'; }}
                style={{
                  border: '1px solid rgba(255,255,255,0.55)',
                  cursor: 'pointer',
                  background: 'transparent',
                  color: '#FFFFFF',
                  borderRadius: '999px',
                  fontWeight: 700,
                  padding: '12px 20px',
                }}
              >
                View Product
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .home-cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default HomeFinalCTASection;
