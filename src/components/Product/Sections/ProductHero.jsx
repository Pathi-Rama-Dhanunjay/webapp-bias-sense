import React from 'react';
import { motion } from 'framer-motion';
import ViewToggle from '../Interactive/ViewToggle';

const ProductHero = () => {
  const handleDemoClick = () => {
    console.log("GA Event: cta_click", { button_name: 'schedule_technical_demo', section: 'final_cta' });
    window.location.href = '/contact';
  };

  return (
    <section className="light-section" style={{
      minHeight: 'auto',
      padding: '150px 24px 96px',
      background: '#F8FAFC',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <div className="container" style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '16px' }}>
          Home / Product Overview
        </div>

        {/* Accent Badge */}
        <div style={{
          background: '#E6F1FB',
          border: '1px solid #0F4C8C',
          color: '#0F4C8C',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 500,
          marginBottom: '24px'
        }}>
          Technical Deep Dive
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(40px, 5vw, 56px)',
          fontWeight: 'bold',
          color: '#1E293B',
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          marginBottom: '24px',
          background: 'none',
          WebkitTextFillColor: 'initial',
        }}>
          BiasSense In-Depth: The Platform Architecture
        </h1>

        {/* Subheadline */}
        <p className="body-large" style={{
          color: '#64748B',
          maxWidth: '700px',
          margin: '0 auto 48px'
        }}>
          A comprehensive look at how BiasSense detects, explains, and prevents 
          bias in your AI models. From data profiling to enforcement gates to 
          production monitoring—the complete technical architecture.
        </p>

        {/* View Toggle */}
        <ViewToggle />

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          width: '100%'
        }}>
          <motion.button
            onClick={handleDemoClick}
            whileHover={{ translateY: -2, boxShadow: '0 4px 12px rgba(15, 76, 140, 0.25)' }}
            style={{
              background: 'linear-gradient(90deg, #0F4C8C 0%, #00A99D 100%)',
              color: 'white',
              padding: '16px 32px',
              fontSize: '18px',
              fontWeight: 600,
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(15, 76, 140, 0.15)',
              border: 'none',
              cursor: 'pointer',
              flex: '1 1 auto',
              maxWidth: '300px'
            }}
          >
            Schedule Technical Demo
          </motion.button>

        </div>
      </div>
    </section>
  );
};

export default ProductHero;
