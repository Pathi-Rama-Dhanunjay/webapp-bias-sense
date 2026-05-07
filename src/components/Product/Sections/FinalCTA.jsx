import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section style={{
      width: '100%',
      background: 'linear-gradient(135deg, #0F4C8C 0%, #00A99D 100%)',
      padding: '96px 24px',
      textAlign: 'center'
    }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 'bold', color: 'white', marginBottom: '24px', letterSpacing: '-0.01em' }}>
          Stop Guessing. Start Measuring.
        </h2>
        <p className="body-large" style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '48px', fontSize: '18px' }}>
          Get a hands-on technical walkthrough of the BiasSense platform with one of our ML Engineers. 
          See how easily it integrates with your existing models.
        </p>

        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          width: '100%'
        }}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={() => window.location.href = '/contact'}
            style={{
              background: 'white',
              color: '#0F4C8C',
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: 600,
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              flex: '1 1 auto',
              maxWidth: '300px'
            }}
          >
            Schedule Technical Demo
          </motion.button>

          <motion.button
            whileHover={{ background: 'rgba(255,255,255,0.1)' }}
            style={{
              background: 'transparent',
              border: '2px solid white',
              color: 'white',
              padding: '14px 30px',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: '8px',
              cursor: 'pointer',
              flex: '1 1 auto',
              maxWidth: '300px',
              transition: 'all 0.3s'
            }}
          >
            Read the Documentation
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
