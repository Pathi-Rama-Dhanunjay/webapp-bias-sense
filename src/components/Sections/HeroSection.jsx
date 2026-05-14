import { motion } from 'framer-motion';

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
    window.location.href = '/early-access';
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
      {/* BiasSense Decision Intelligence Surface */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, #020617 0%, #071426 46%, #0A1B2E 100%)',
        zIndex: 0,
      }}>
        <svg
          style={{ width: '100%', height: '100%', opacity: 0.96 }}
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 800"
        >
          <defs>
            <radialGradient id="hero-center-glow" cx="50%" cy="38%" r="58%">
              <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.18" />
              <stop offset="55%" stopColor="#2DD4BF" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#020617" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="hero-grid-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.09" />
              <stop offset="52%" stopColor="#38BDF8" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="fairness-signal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
              <stop offset="35%" stopColor="#38BDF8" stopOpacity="0.55" />
              <stop offset="70%" stopColor="#2DD4BF" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0" />
            </linearGradient>
            <filter id="hero-soft-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <rect width="1440" height="800" fill="url(#hero-center-glow)" />

          <g>
            {[
              [258, 246, '#38BDF8'],
              [460, 420, '#2DD4BF'],
              [706, 284, '#E0F2FE'],
              [928, 398, '#2DD4BF'],
              [1110, 224, '#38BDF8'],
              [1198, 520, '#E0F2FE'],
            ].map(([cx, cy, fill], index) => (
              <g
                key={`${cx}-${cy}`}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              >
                <circle cx={cx} cy={cy} r="18" fill={fill} opacity="0.06" />
                <circle cx={cx} cy={cy} r="4" fill={fill} opacity="0.8" />
              </g>
            ))}
          </g>
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
              border: '1px solid rgba(45, 212, 191, 0.35)',
              padding: 'clamp(6px, 1vh, 12px) clamp(16px, 1.5vw, 24px)',
              borderRadius: '30px',
              marginBottom: 'clamp(38px, 5.7vh, 69px)',
              fontSize: 'clamp(13px, 1vw, 18px)',
              fontWeight: 600,
              color: '#2DD4BF',
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap',
              backdropFilter: 'blur(8px)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 10px 30px rgba(0,0,0,0.2)'
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#2DD4BF',
                display: 'inline-block',
              }}
            />
            AI Fairness Platform
          </motion.div>

          <motion.h1
            className="hero-title"
            style={{ marginBottom: 'clamp(28px, 4.6vh, 55px)', position: 'relative', zIndex: 10, color: '#FFFFFF' }}
          >
            Enterprise AI Governance<br />
            Without Blind Spots<br />
            <span
              style={{
                fontFamily: '"Roboto Slab", "Rockwell", "Courier New", Courier, serif',
                fontWeight: 800,
                color: '#E2E8F0',
              }}
            >
              Fair. Explainable. Defensible.
            </span>
          </motion.h1>

          <motion.p
            className="hero-subtitle body-large"
            style={{ color: '#94A3B8', marginBottom: 'clamp(35px, 5.5vh, 70px)', maxWidth: 'clamp(600px, 45vw, 900px)', fontSize: 'clamp(18px, 1.5vw, 24px)', lineHeight: 1.6, opacity: 1 }}
          >
            Unify data quality, bias detection, explainability, and enforcement in one workflow your risk, legal, and ML teams can trust.
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
                boxShadow: '0 20px 40px rgba(255, 255, 255, 0.15)',
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'linear-gradient(90deg, #FFFFFF 0%, #E2E8F0 100%)',
                color: '#0B1220',
                padding: 'clamp(11px, 1.35vh, 18px) clamp(25px, 2.25vw, 43px)',
                fontSize: 'clamp(14px, 1.1vw, 18px)',
                fontWeight: 700,
                borderRadius: 'clamp(32px, 4vw, 48px)',
                border: 'none',
                boxShadow: '0 16px 40px rgba(148, 163, 184, 0.25)',
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
              color: '#F8FAFC',
              fontSize: 'clamp(13px, 1.1vw, 15px)',
              fontWeight: 600,
              opacity: 0.9
            }}>
              {['GDPR', 'CCPA', 'ECOA', 'HIPAA', 'Title VII', 'EEOC', 'Federal AI EO', 'EU AI Act', 'FHA', 'ADA'].map((reg) => (
                <span key={reg} style={{ border: '1px solid rgba(255, 255, 255, 0.22)', padding: '6px 16px', borderRadius: '100px', background: 'rgba(255, 255, 255, 0.04)', backdropFilter: 'blur(3px)' }}>
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
          color: #FFFFFF !important;
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
