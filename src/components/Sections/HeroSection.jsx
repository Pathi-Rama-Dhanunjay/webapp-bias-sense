import React from 'react';
import { motion } from 'framer-motion';
import HeroVisualization from '../Interactive/HeroVisualization';
import { ArrowRight } from 'lucide-react';

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
      paddingTop: '144px',
      paddingBottom: '72px',
      paddingLeft: '24px',
      paddingRight: '24px',
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
    }}>
      <div className="container hero-grid" style={{ position: 'relative', zIndex: 10 }}>

        {/* Left Side: Content */}
        <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
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
              background: 'rgba(249, 115, 22, 0.1)',
              border: '1px solid rgba(249, 115, 22, 0.2)',
              padding: 'clamp(6px, 1vh, 12px) clamp(16px, 1.5vw, 24px)',
              borderRadius: '30px',
              marginBottom: 'clamp(48px, 7.2vh, 86px)',
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
            The Only Platform That Sense & Prove Your AI Model Is{' '}
            <motion.span
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              style={{
                fontFamily: '"Caveat", "Brush Script MT", "Lucida Handwriting", cursive',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: '1.3em',
                background: 'linear-gradient(270deg, #2DD4BF, #3B82F6, #8B5CF6, #2DD4BF)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block'
              }}
            >
              Fair
            </motion.span>{' '}
            and{' '}
            <motion.span
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 1.5 }}
              style={{
                fontFamily: '"Caveat", "Brush Script MT", "Lucida Handwriting", cursive',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: '1.3em',
                background: 'linear-gradient(270deg, #3B82F6, #8B5CF6, #2DD4BF, #3B82F6)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block'
              }}
            >
              Un-Biased
            </motion.span>
            .
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
                background: '#0F172A',
                color: '#FFFFFF',
                padding: 'clamp(11px, 1.35vh, 18px) clamp(25px, 2.25vw, 43px) clamp(11px, 1.35vh, 18px) clamp(14px, 1.35vw, 22px)',
                fontSize: 'clamp(14px, 1.1vw, 18px)',
                fontWeight: 700,
                borderRadius: 'clamp(32px, 4vw, 48px)',
                border: 'none',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer'
              }}
            >
              Book a Demo
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>

        {/* Right Side: 3D Illustration Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: '100%',
            minHeight: '400px'
          }}
        >
          {/* CSS Fallback representing the prompt's aesthetic (Phone + Floating Panels) */}
          {/* Once you generate an actual image asset, replace this entire internal div block with: 
              <img src="/assets/my-generated-image.png" style={{ width: '100%', maxWidth: '500px' }} /> 
          */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '475px',
            aspectRatio: '1/1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Center Report */}
            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} style={{ width: '228px', height: '304px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 20px 40px rgba(15, 23, 42, 0.08)', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative', zIndex: 2 }}>
              <div style={{ padding: '22px', flex: 1, background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ width: '30%', height: '4px', background: '#E2E8F0', borderRadius: '2px' }} />
                  <div style={{ background: '#F1F5F9', color: '#64748B', fontSize: '8px', padding: '4px 8px', borderRadius: '12px', fontWeight: 600 }}>CONFIDENTIAL</div>
                </div>

                <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Compliance Audit</div>
                <div style={{ width: '100%', height: '1px', background: '#F1F5F9', marginBottom: '20px' }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: 'auto' }}>
                  {/* Metric 1 */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '10px', color: '#64748B', fontWeight: 600 }}>Equal Opportunity</span>
                      <span style={{ fontSize: '10px', color: '#10B981', fontWeight: 700 }}>98%</span>
                    </div>
                    <div style={{ width: '100%', height: '4px', background: '#F1F5F9', borderRadius: '2px' }}>
                      <div style={{ width: '98%', height: '100%', background: '#10B981', borderRadius: '2px' }} />
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '10px', color: '#64748B', fontWeight: 600 }}>Disparate Impact</span>
                      <span style={{ fontSize: '10px', color: '#2DD4BF', fontWeight: 700 }}>0.94</span>
                    </div>
                    <div style={{ width: '100%', height: '4px', background: '#F1F5F9', borderRadius: '2px' }}>
                      <div style={{ width: '94%', height: '100%', background: '#2DD4BF', borderRadius: '2px' }} />
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '10px', color: '#64748B', fontWeight: 600 }}>Demographic Parity</span>
                      <span style={{ fontSize: '10px', color: '#3B82F6', fontWeight: 700 }}>0.89</span>
                    </div>
                    <div style={{ width: '100%', height: '4px', background: '#F1F5F9', borderRadius: '2px' }}>
                      <div style={{ width: '89%', height: '100%', background: '#3B82F6', borderRadius: '2px' }} />
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0', marginTop: '16px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '10px' }}>✓</div>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 700, color: '#0F172A' }}>Model Approved</div>
                    <div style={{ fontSize: '8px', color: '#64748B', marginTop: '2px' }}>Signed cryptographically</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Panel 1 - Data Health */}
            <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} style={{ position: 'absolute', top: '15%', left: '0%', width: '152px', background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.8)', borderRadius: '16px', padding: '15px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)', zIndex: 3 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#0F172A' }}>Data Health</div>
                <div style={{ background: '#E0F2FE', color: '#0284C7', fontSize: '9px', padding: '2px 6px', borderRadius: '8px', fontWeight: 600 }}>Healthy</div>
              </div>
              <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '30px' }}>
                <div style={{ flex: 1, height: '60%', background: '#38BDF8', borderRadius: '2px' }} />
                <div style={{ flex: 1, height: '80%', background: '#38BDF8', borderRadius: '2px' }} />
                <div style={{ flex: 1, height: '100%', background: '#2DD4BF', borderRadius: '2px' }} />
                <div style={{ flex: 1, height: '70%', background: '#38BDF8', borderRadius: '2px' }} />
              </div>
            </motion.div>

            {/* Floating Panel 2 - Evidence Log */}
            <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }} style={{ position: 'absolute', bottom: '15%', left: '5%', width: '133px', background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.8)', borderRadius: '16px', padding: '15px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)', zIndex: 1 }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>Evidence Log</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '8px' }}>✓</div>
                <div style={{ flex: 1, height: '4px', background: '#E2E8F0', borderRadius: '2px' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '8px' }}>✓</div>
                <div style={{ flex: 1, height: '4px', background: '#E2E8F0', borderRadius: '2px' }} />
              </div>
            </motion.div>

            {/* Floating Panel 3 - Defensible Answer Ring */}
            <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} style={{ position: 'absolute', top: '35%', right: '-5%', width: '171px', background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.8)', borderRadius: '20px', padding: '19px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)', zIndex: 3, display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '50%', border: '5px solid #F1F5F9', borderTopColor: '#2DD4BF', borderRightColor: '#2DD4BF', transform: 'rotate(-15deg)' }} />
              <div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.5px' }}>96.4%</div>
                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 500 }}>Defensible Answer</div>
              </div>
            </motion.div>

            {/* Ambient Leaf Motif (Cyan/Blue glow) */}
            <div style={{ position: 'absolute', top: '10%', right: '20%', width: '114px', height: '114px', borderRadius: '0 57px 0 57px', background: 'linear-gradient(135deg, #2DD4BF 0%, #38BDF8 100%)', opacity: 0.15, filter: 'blur(16px)', zIndex: 1, transform: 'rotate(15deg)' }} />
            <div style={{ position: 'absolute', bottom: '10%', left: '20%', width: '95px', height: '95px', borderRadius: '47px 0 47px 0', background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)', opacity: 0.1, filter: 'blur(20px)', zIndex: 1 }} />
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
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
            padding-top: 80px !important;
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
            padding-top: 112px !important;
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
          .hero-section { padding-top: 80px !important; }
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
