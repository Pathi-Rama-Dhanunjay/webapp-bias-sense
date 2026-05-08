import React from 'react';
import { motion } from 'framer-motion';
import HeroVisualization from '../Interactive/HeroVisualization';
import { MonitorPlay, ArrowRight } from 'lucide-react';

const FloatingOrb = ({ size, color, top, left, delay, duration }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.6, 0.3, 0.6, 0],
      scale: [0.8, 1.2, 1, 1.1, 0.8],
      x: [0, 30, -20, 10, 0],
      y: [0, -40, 20, -10, 0],
    }}
    transition={{
      duration: duration || 12,
      delay: delay || 0,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    style={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      filter: `blur(${parseInt(size) / 3}px)`,
      top,
      left,
      pointerEvents: 'none',
      zIndex: 0,
    }}
  />
);

const GridLines = () => (
  <div style={{
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: 0,
    opacity: 0.06,
  }}>
    {/* Horizontal lines */}
    {Array.from({ length: 12 }).map((_, i) => (
      <motion.div
        key={`h-${i}`}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: i * 0.08, duration: 1.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: `${(i + 1) * 8}%`,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
          transformOrigin: 'left',
        }}
      />
    ))}
    {/* Vertical lines */}
    {Array.from({ length: 16 }).map((_, i) => (
      <motion.div
        key={`v-${i}`}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: i * 0.06, duration: 1.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          left: `${(i + 1) * 6}%`,
          top: 0,
          bottom: 0,
          width: '1px',
          background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.4), transparent)',
          transformOrigin: 'top',
        }}
      />
    ))}
  </div>
);

const ParticleField = () => {
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
  }));

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0.3, 0.7, 0],
            y: [0, -60, -30, -80],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: 'white',
          }}
        />
      ))}
    </div>
  );
};

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
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: '100px',
      paddingBottom: '24px',
      paddingLeft: '24px',
      paddingRight: '24px',
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
      background: '#FFFFFF',
    }}>
      <div className="container hero-grid" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-content">
          {/* Accent Badge */}
          <motion.div
            className="accent-badge"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            style={{
              display: 'inline-flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '8px',
              background: '#F0FDFA',
              border: '1px solid #CCFBF1',
              padding: '6px 16px',
              borderRadius: '20px',
              marginBottom: '20px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#0D9488',
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
                background: '#0D9488',
                display: 'inline-block',
              }}
            />
            AI Fairness Platform
          </motion.div>

          <motion.h1
            className="hero-title"
            style={{ marginBottom: '20px', color: 'black', fontWeight: 900, position: 'relative', zIndex: 10 }}
          >
            The Only AI Platform That Proves Your Model Is Fair, Not Just Fast
          </motion.h1>

          <motion.p
            className="hero-subtitle body-large"
            style={{ color: '#1E293B', marginBottom: '20px', maxWidth: '600px', fontSize: '18px', opacity: 1 }}
          >
            Data health + Bias detection + Evidence = One system. One scorecard. One defensible answer.
          </motion.p>

          {/* Trust Badges - Above CTA */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            style={{
              display: 'flex',
              gap: '24px',
              marginBottom: '20px',
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '99.2%', label: 'Detection Accuracy' },
              { value: '<200ms', label: 'Avg Latency' },
              { value: '50+', label: 'Enterprise Clients' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.15, duration: 0.6 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                }}
              >
                <span style={{
                  fontSize: '20px',
                  fontWeight: 800,
                  color: '#1E293B',
                  letterSpacing: '-0.02em',
                }}>
                  {stat.value}
                </span>
                <span style={{
                  fontSize: '11px',
                  color: '#1E293B',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
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
                background: '#F1F5F9',
                color: '#1E293B',
                padding: '12px 24px 12px 14px',
                fontSize: '15px',
                fontWeight: 700,
                borderRadius: '32px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer'
              }}
            >
              <div style={{
                background: 'rgba(0, 169, 157, 0.25)',
                padding: '8px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2DD4BF',
                boxShadow: '0 4px 12px rgba(0, 169, 157, 0.2)'
              }}>
                <MonitorPlay size={18} />
              </div>
              Book a Demo
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight size={16} style={{ opacity: 0.7 }} />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="hero-visualization"
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroVisualization />
        </motion.div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: center;
          width: 100%;
        }
        .hero-title {
          font-size: clamp(32px, 4.5vw, 64px);
          line-height: 1.15;
          color: black !important;
          font-weight: 900;
          opacity: 1 !important;
          visibility: visible !important;
        }
        .hero-subtitle {
          font-size: clamp(15px, 1.8vw, 20px);
        }
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .hero-section {
            padding-top: 100px !important;
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
            min-height: 100vh;
            padding-top: 100px !important;
            padding-bottom: 32px !important;
          }
          .hero-visualization {
            max-width: 100% !important;
          }
        }
        @media (max-height: 700px) and (min-width: 1025px) {
          .hero-title { font-size: 40px !important; margin-bottom: 10px !important; }
          .hero-subtitle { font-size: 16px !important; margin-bottom: 12px !important; }
          .hero-visualization { transform: scale(0.7); transform-origin: center right; }
          .hero-section { padding-top: 100px !important; }
        }
        @media (min-height: 701px) and (max-height: 900px) and (min-width: 1025px) {
          .hero-title { font-size: 48px !important; margin-bottom: 14px !important; }
          .hero-subtitle { font-size: 17px !important; margin-bottom: 16px !important; }
          .hero-visualization { transform: scale(0.82); transform-origin: center right; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
