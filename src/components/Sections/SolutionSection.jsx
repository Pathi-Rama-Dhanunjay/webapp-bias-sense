import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Landmark, Activity, Users, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  {
    id: 'financial-services',
    name: 'Financial Services',
    icon: <Landmark size={32} />,
    description: 'Ensure ECOA & FHA compliance with real-time disparate impact monitoring and proxy detection.',
    href: '/solutions/financial-services',
    color: '#3B82F6', // Blue
    metrics: [
      { label: 'Approval Parity', value: '0.94' },
      { label: 'Proxy Risk', value: 'Low' }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: <Activity size={32} />,
    description: 'Eliminate clinical bias in diagnostic and readmission models to deliver equitable patient outcomes.',
    href: '/solutions/healthcare',
    color: '#10B981', // Emerald
    metrics: [
      { label: 'Treatment Equity', value: '96%' },
      { label: 'Data Drift', value: '1.2%' }
    ]
  },
  {
    id: 'hiring',
    name: 'Hiring & HR',
    icon: <Users size={32} />,
    description: 'Build a fair recruitment funnel that exceeds EEOC standards while identifying high-potential talent.',
    href: '/solutions/hiring',
    color: '#F59E0B', // Amber
    metrics: [
      { label: 'Selection Rate', value: '0.89' },
      { label: 'Adverse Impact', value: 'None' }
    ]
  },
  {
    id: 'public-sector',
    name: 'Public Sector',
    icon: <Scale size={32} />,
    description: 'Implement algorithmic justice in benefit allocation and risk assessments for transparent governance.',
    href: '/solutions/public-sector',
    color: '#8B5CF6', // Purple
    metrics: [
      { label: 'Allocation Fairness', value: '99%' },
      { label: 'Compliance', value: 'Verified' }
    ]
  }
];

const SolutionSection = () => {
  const [activeTab, setActiveTab] = useState(industries[0].id);
  const activeIndustry = industries.find(i => i.id === activeTab) || industries[0];

  return (
    <section id="solutions" style={{
      padding: 'clamp(80px, 10vh, 160px) 24px'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(48px, 8vh, 80px)' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              color: 'var(--primary-teal)',
              fontSize: 'clamp(32px, 5vw, 48px)',
              marginBottom: '12px',
              fontWeight: 800,
              letterSpacing: '-0.02em'
            }}
          >
            One Platform. Industry-Specific Excellence.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="body-large"
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              color: '#64748B',
              fontSize: '20px'
            }}
          >
            Data health and bias detection unified into one continuous,
            evidence-generating system. Tailored for the world's most regulated industries.
          </motion.p>
        </div>

        <div className="solution-split-grid" style={{
          display: 'grid',
          gap: 'clamp(48px, 6vw, 120px)',
          alignItems: 'stretch'
        }}>
          {/* Left Side - Interactive List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 1.5vh, 20px)', justifyContent: 'center' }}>
            {industries.map((industry) => {
              const isActive = activeTab === industry.id;
              return (
                <motion.div
                  key={industry.id}
                  onMouseEnter={() => setActiveTab(industry.id)}
                  onClick={() => setActiveTab(industry.id)}
                  style={{
                    padding: 'clamp(16px, 1.5vh, 24px) clamp(24px, 2vw, 36px)',
                    borderRadius: 'clamp(16px, 1.5vw, 24px)',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: isActive ? '#FFFFFF' : 'transparent',
                    border: isActive ? '1px solid #E2E8F0' : '1px solid transparent',
                    boxShadow: isActive ? '0 10px 30px rgba(0,0,0,0.03)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'clamp(16px, 1.5vw, 24px)'
                  }}
                >
                  <div style={{
                    color: isActive ? industry.color : '#94A3B8',
                    transition: 'color 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {React.cloneElement(industry.icon, { size: 24 })}
                  </div>
                  <div style={{
                    fontSize: 'clamp(16px, 1.5vw, 24px)',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#0F172A' : '#64748B',
                    transition: 'all 0.3s ease'
                  }}>
                    {industry.name}
                  </div>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      style={{
                        marginLeft: 'auto',
                        color: industry.color
                      }}
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right Side - Graphical Display */}
          <div style={{ minHeight: '420px', position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'clamp(24px, 2vw, 32px)',
                  padding: 'clamp(16px, 2vw, 40px)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'absolute',
                  inset: 0,
                  overflow: 'hidden',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)',
                }}
              >
                {/* Dashboard Visualization Header */}
                <div style={{
                  flex: 1,
                  minHeight: 'clamp(200px, 25vh, 320px)',
                  background: '#0F172A',
                  borderRadius: 'clamp(16px, 1.5vw, 24px)',
                  marginBottom: 'clamp(16px, 2vh, 32px)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {/* Tech Grid Background */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    opacity: 0.6
                  }} />

                  {/* Abstract Data Bars */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
                    background: `linear-gradient(180deg, transparent, ${activeIndustry.color}40)`,
                    maskImage: 'repeating-linear-gradient(90deg, black 0, black 12px, transparent 12px, transparent 24px)',
                    WebkitMaskImage: 'repeating-linear-gradient(90deg, black 0, black 12px, transparent 12px, transparent 24px)',
                    opacity: 0.5
                  }} />

                  {/* Ambient Glow */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute',
                      width: '180px', height: '180px',
                      background: `radial-gradient(circle, ${activeIndustry.color} 0%, transparent 70%)`,
                      filter: 'blur(40px)',
                      zIndex: 0
                    }}
                  />

                  {/* Central Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15, delay: 0.2 }}
                    style={{
                      width: 'clamp(64px, 6vw, 96px)', height: 'clamp(64px, 6vw, 96px)',
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: 'clamp(16px, 1.5vw, 24px)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'white',
                      position: 'relative',
                      zIndex: 2,
                      boxShadow: `0 0 40px ${activeIndustry.color}60`
                    }}
                  >
                    {React.cloneElement(activeIndustry.icon, { size: 32 })}
                  </motion.div>

                  {/* Floating Metric 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    style={{
                      position: 'absolute', top: '16px', left: '16px',
                      background: 'rgba(15, 23, 42, 0.7)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      padding: '8px 12px',
                      borderRadius: '12px',
                      display: 'flex', flexDirection: 'column', gap: '4px',
                      zIndex: 2,
                      boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                    }}
                  >
                    <span style={{ fontSize: '10px', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {activeIndustry.metrics[0].label}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981' }} />
                      <span style={{ fontSize: '14px', color: 'white', fontWeight: 700 }}>{activeIndustry.metrics[0].value}</span>
                    </div>
                  </motion.div>

                  {/* Floating Metric 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{
                      position: 'absolute', bottom: '16px', right: '16px',
                      background: 'rgba(15, 23, 42, 0.7)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      padding: '8px 12px',
                      borderRadius: '12px',
                      display: 'flex', flexDirection: 'column', gap: '4px',
                      zIndex: 2,
                      boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                    }}
                  >
                    <span style={{ fontSize: '10px', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {activeIndustry.metrics[1].label}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Activity size={12} color="#38BDF8" />
                      <span style={{ fontSize: '14px', color: 'white', fontWeight: 700 }}>{activeIndustry.metrics[1].value}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Text Content */}
                <div style={{ padding: '0 12px 8px 12px', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
                  <h3 style={{ fontSize: 'clamp(20px, 2vw, 36px)', color: '#0F172A', marginBottom: 'clamp(8px, 1vh, 16px)', fontWeight: 800 }}>
                    {activeIndustry.name}
                  </h3>
                  <p style={{ fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#64748B', lineHeight: 1.6, marginBottom: 'clamp(16px, 2vh, 32px)' }}>
                    {activeIndustry.description}
                  </p>
                  <div>
                    <Link to={activeIndustry.href} style={{ textDecoration: 'none' }}>
                      <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: '#1E293B' }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          background: '#0F172A',
                          color: '#FFFFFF',
                          padding: 'clamp(10px, 1vh, 16px) clamp(20px, 2vw, 32px)',
                          borderRadius: 'clamp(12px, 1vw, 20px)',
                          fontSize: 'clamp(14px, 1.2vw, 18px)',
                          fontWeight: 600,
                          border: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 'clamp(8px, 1vw, 12px)',
                          cursor: 'pointer',
                          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        Explore Solutions <ArrowRight size={14} />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div style={{
          background: '#F8FAFC',
          borderLeft: '4px solid var(--primary-teal)',
          padding: '24px',
          borderRadius: '12px',
          maxWidth: '750px',
          margin: 'clamp(48px, 8vh, 80px) auto 0',
          border: '1px solid #E2E8F0'
        }}>
          <p style={{
            fontSize: '16px',
            fontWeight: 500,
            color: 'var(--primary-teal)',
            textAlign: 'center',
            fontStyle: 'italic',
            margin: 0,
            lineHeight: 1.6
          }}>
            "Data health is the confidence interval on your bias measurement.
            Every bias score carries reliability attached.
            That's how you turn opinion into evidence."
          </p>
        </div>

        <style>{`
          .solution-split-grid {
            grid-template-columns: 1fr 1.2fr;
          }
          @media (max-width: 900px) {
            .solution-split-grid {
              grid-template-columns: 1fr;
              gap: 32px !important;
            }
            .solution-split-grid > div:last-child {
              min-height: 450px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default SolutionSection;
