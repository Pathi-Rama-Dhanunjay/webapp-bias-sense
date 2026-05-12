import React from 'react';
import { motion } from 'framer-motion';
import HeroVisualization from '../Interactive/HeroVisualization';

const textReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const HeroSection = () => {
  const handleDemoClick = () => {
    console.log("GA Event: hero_cta_click", { button_name: 'book_demo', section: 'hero', page: 'home' });
    window.location.href = '/contact';
  };

  return (
    <section className="hero-section light-section" style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: '216px',
      paddingBottom: '72px',
      paddingLeft: '24px',
      paddingRight: '24px',
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
    }}>
      {/* Ethereal Light Blue Gradient with Flowing White Lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #bae6fd 0%, #ffffff 55%, #e0f2fe 100%)',
        zIndex: 0,
      }}>
        <svg
          style={{ width: '100%', height: '100%', opacity: 0.8 }}
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          {/* Soft Glow */}
          <defs>
            <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          <circle cx="720" cy="400" r="400" fill="url(#hero-glow)" opacity="0.45" />
          
          {/* Flowing Lines */}
          <motion.path
            d="M-100,350 C300,250 800,550 1540,400"
            fill="none"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="1.5"
            animate={{ d: ["M-100,350 C300,250 800,550 1540,400", "M-100,450 C400,350 600,450 1540,450", "M-100,350 C300,250 800,550 1540,400"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M-100,450 C400,350 700,600 1540,450"
            fill="none"
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth="3"
            animate={{ d: ["M-100,450 C400,350 700,600 1540,450", "M-100,400 C200,400 900,500 1540,400", "M-100,450 C400,350 700,600 1540,450"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.path
            d="M-100,550 C300,450 800,500 1540,550"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="5"
            animate={{ d: ["M-100,550 C300,450 800,500 1540,550", "M-100,500 C400,550 700,450 1540,500", "M-100,550 C300,450 800,500 1540,550"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </svg>
      </div>

      <div className="container hero-grid" style={{ position: 'relative', zIndex: 10 }}>

        {/* Center: Content */}
        <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', margin: '0 auto' }}>
          {/* Accent Badge */}
          <motion.div
            className="accent-badge"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            style={{
              alignSelf: 'flex-start',
              display: 'inline-flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(249, 115, 22, 0.1)',
              border: '1px solid rgba(249, 115, 22, 0.2)',
              padding: 'clamp(6px, 1vh, 12px) clamp(16px, 1.5vw, 24px)',
              borderRadius: '30px',
              marginBottom: 'clamp(38px, 5.7vh, 69px)',
              fontSize: 'clamp(13px, 1vw, 18px)',
              fontWeight: 600,
              color: '#F97316',
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap',
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#F97316',
                display: 'inline-block',
              }}
            />
            AI Fairness Platform
          </motion.div>

          <motion.h1
            className="hero-title"
            style={{ marginBottom: 'clamp(28px, 4.6vh, 55px)', position: 'relative', zIndex: 10 }}
          >
            One Platform<br />
            Six Bias Metrics<br />
            <span
              style={{
                fontFamily: '"Inter", system-ui, sans-serif',
                fontWeight: 800,
                color: '#000000',
              }}
            >
              Zero Discrimination
            </span>
          </motion.h1>

          <motion.p
            className="hero-subtitle body-large"
            style={{ color: '#64748B', marginBottom: 'clamp(35px, 5.5vh, 70px)', maxWidth: 'clamp(600px, 45vw, 900px)', fontSize: 'clamp(18px, 1.5vw, 24px)', lineHeight: 1.6, opacity: 1 }}
          >
            Data health + Bias detection + Evidence = One platform. One scorecard. One defensible answer.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <motion.button
              onClick={handleDemoClick}
              whileHover={{
                y: -4,
                scale: 1.03,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: '#0F172A',
                color: '#FFFFFF',
                padding: 'clamp(11px, 1.35vh, 18px) clamp(25px, 2.25vw, 43px)',
                fontSize: 'clamp(14px, 1.1vw, 18px)',
                fontWeight: 700,
                borderRadius: 'clamp(32px, 4vw, 48px)',
                border: 'none',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              Get Early Access           </motion.button>
          </motion.div>

          {/* Regulatory & Compliance List */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            style={{
              marginTop: 'clamp(43px, 7.2vh, 58px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Compliant with leading regulatory frameworks
            </span>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px',
              color: '#64748B',
              fontSize: 'clamp(13px, 1.1vw, 15px)',
              fontWeight: 600,
              opacity: 0.9
            }}>
              {['GDPR', 'CCPA', 'ECOA', 'HIPAA', 'Title VII', 'EEOC', 'Federal AI EO', 'EU AI Act', 'FHA', 'ADA'].map((reg) => (
                <span key={reg} style={{ border: '1px solid #CBD5E1', padding: '6px 16px', borderRadius: '100px', background: '#FFFFFF' }}>
                  {reg}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          gap: 60px;
          width: 100%;
        }
        .hero-title {
          font-size: clamp(32px, 4.5vw, 79px);
          line-height: 1.15;
          color: #0F172A !important;
          font-family: "Roboto Slab", "Rockwell", "Courier New", Courier, serif;
          font-weight: 700;
          opacity: 1 !important;
          visibility: visible !important;
        }
        .hero-subtitle {
          font-size: clamp(16px, 1.8vw, 24px);
        }
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .hero-section {
        padding-top: 120px !important;
            align-items: flex-start !important;
          }
        }
        @media (max-width: 768px) {
          .hero-content > div:not(.accent-badge) {
            flex-direction: column;
            gap: 12px !important;
          }
          .hero-content button {
            width: 100%;
          }
          .hero-section {
            height: auto !important;
            min-height: auto !important;
        padding-top: 168px !important;
            padding-bottom: 54px !important;
          }
          .hero-visualization {
            max-width: 100% !important;
          }
        }
        @media (max-height: 700px) and (min-width: 1025px) {
          .hero-title { font-size: 36px !important; margin-bottom: 18px !important; }
          .hero-subtitle { font-size: 16px !important; margin-bottom: 22px !important; }
          .hero-visualization { transform: scale(0.7); transform-origin: center right; }
      .hero-section { padding-top: 120px !important; }
        }
        @media (min-height: 701px) and (max-height: 900px) and (min-width: 1025px) {
          .hero-title { font-size: 47px !important; margin-bottom: 28px !important; }
          .hero-subtitle { font-size: 18px !important; margin-bottom: 35px !important; }
          .hero-visualization { transform: scale(0.82); transform-origin: center right; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
