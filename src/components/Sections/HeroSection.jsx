import React from 'react';
import HeroVisualization from '../Interactive/HeroVisualization';
import { MonitorPlay } from 'lucide-react';

const HeroSection = () => {
  const handleDemoClick = () => {
    // Mock GA event
    console.log("GA Event: hero_cta_click", { button_name: 'book_demo', section: 'hero', page: 'home' });
    window.location.href = '/contact';
  };


  return (
    <section className="mesh-bg" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '100px 24px 60px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="hero-title" style={{ marginBottom: '24px' }}>
            The Only AI Platform That Proves Your Model Is Fair, Not Just Fast
          </h1>
          <p className="hero-subtitle body-large" style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '40px', maxWidth: '600px', fontSize: '20px' }}>
            Data health + Bias detection + Evidence = One system. One scorecard. One defensible answer.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={handleDemoClick}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                color: 'white',
                padding: '8px 24px 8px 12px',
                fontSize: '16px',
                fontWeight: 700,
                borderRadius: '32px',
                border: '1px solid rgba(255,255,255,0.3)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.4)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.4)';
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
            </button>

          </div>
        </div>

        <div className="hero-visualization">
          <HeroVisualization />
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 768px) {
          .hero-content > div {
            flex-direction: column;
            gap: 12px !important;
          }
          .hero-content button {
            width: 100%;
          }
        }
        @media (max-height: 800px) and (min-width: 1025px) {
          .hero-title { font-size: 52px !important; margin-bottom: 16px !important; }
          .hero-subtitle { font-size: 18px !important; margin-bottom: 24px !important; }
          .hero-visualization { transform: scale(0.85); transform-origin: center right; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
