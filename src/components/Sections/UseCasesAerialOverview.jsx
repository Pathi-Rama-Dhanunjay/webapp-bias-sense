import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Activity,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Landmark,
  Scale,
  Shield,
  ShoppingCart,
  Truck,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  { name: 'Finance & Consumer Credit', icon: Landmark, tone: '#2563EB' },
  { name: 'Healthcare & Patient Care', icon: HeartPulse, tone: '#059669' },
  { name: 'Insurance & Underwriting', icon: Shield, tone: '#0891B2' },
  { name: 'Retail & E-commerce', icon: ShoppingCart, tone: '#EA580C' },
  { name: 'HR & Recruitment', icon: Users, tone: '#7C3AED' },
  { name: 'Criminal Justice', icon: Scale, tone: '#334155' },
  { name: 'Education & Admissions', icon: GraduationCap, tone: '#DB2777' },
  { name: 'Mortgage & Real Estate', icon: Landmark, tone: '#0F766E' },
  { name: 'Workforce Management', icon: Briefcase, tone: '#475569' },
  { name: 'Supply Chain & Logistics', icon: Truck, tone: '#CA8A04' },
];

const UseCasesAerialOverview = () => {
  return (
    <section className="light-section" style={{ padding: 'clamp(70px, 8vh, 110px) 24px', background: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '44px' }}
        >
          <p style={{ color: '#0F4C8C', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 800, fontSize: '12px', marginBottom: '10px' }}>
            Industry Coverage
          </p>
          <h2 style={{ marginBottom: '12px', color: '#0F172A', letterSpacing: 0 }}>
            One Platform for High-Stakes AI Decisions
          </h2>
          <p className="body-large" style={{ maxWidth: '820px', margin: '0 auto', color: '#64748B' }}>
            See where BiasSense helps teams monitor fairness, reduce risk, and prove compliance across critical business workflows.
          </p>
        </motion.div>

        {/* Industry Card Grid with Background Visuals */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{
            position: 'relative',
            overflow: 'visible',
          }}
        >
          {/* Animated background grid lines */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(148,163,184,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.1) 1px, transparent 1px)',
              backgroundSize: '34px 34px',
              maskImage: 'linear-gradient(180deg, black, transparent 95%)',
              pointerEvents: 'none',
            }}
          />
          {/* Connecting SVG curves */}
          <svg
            viewBox="0 0 900 420"
            preserveAspectRatio="none"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              opacity: 0.42,
              pointerEvents: 'none',
            }}
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="usecaseSignal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0F4C8C" stopOpacity="0.08" />
                <stop offset="55%" stopColor="#14B8A6" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0.06" />
              </linearGradient>
            </defs>
            {[0, 1, 2, 3].map((line) => (
              <motion.path
                key={line}
                d={`M${-40 + line * 18} ${90 + line * 58} C 180 ${20 + line * 70}, 420 ${310 - line * 42}, 940 ${130 + line * 52}`}
                fill="none"
                stroke="url(#usecaseSignal)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="8 14"
                animate={{ strokeDashoffset: [0, -44] }}
                transition={{ duration: 7 + line, repeat: Infinity, ease: 'linear' }}
              />
            ))}
          </svg>
          {/* Scanning sweep light effect */}
          <motion.div
            animate={{ x: ['-20%', '120%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '18%',
              background: 'linear-gradient(90deg, transparent, rgba(20,184,166,0.08), transparent)',
              pointerEvents: 'none',
            }}
          />

          {/* Full-width Industry Cards Grid */}
          <div className="industry-card-grid" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px' }}>
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 14, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.035, duration: 0.35 }}
                  animate={{ y: [0, idx % 2 === 0 ? -2 : 2, 0] }}
                  whileHover={{
                    y: -5,
                    scale: 1.015,
                    borderColor: industry.tone,
                    boxShadow: `0 16px 28px ${industry.tone}18`,
                  }}
                  style={{
                    borderRadius: '15px',
                    border: '1px solid rgba(148,163,184,0.25)',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(248,250,252,0.82) 100%)',
                    minHeight: '68px',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    boxShadow: '0 10px 22px rgba(15, 23, 42, 0.05)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  transition={{
                    delay: idx * 0.035,
                    duration: 0.35,
                    y: { duration: 4.5 + idx * 0.12, repeat: Infinity, ease: 'easeInOut' },
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '3px',
                      background: industry.tone,
                      opacity: 0.7,
                    }}
                  />
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '11px',
                      background: `${industry.tone}14`,
                      color: industry.tone,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <div style={{ color: '#0F172A', fontWeight: 800, fontSize: '14px', lineHeight: 1.25 }}>
                      {industry.name}
                    </div>
                    <div style={{ marginTop: '3px', color: '#64748B', fontSize: '11px' }}>
                      Fairness monitoring, demographic parity checks, and compliance defense controls.
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Separated Coverage Signal Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="coverage-signal-grid-wrapper"
          style={{
            marginTop: '80px',
            padding: '48px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
            border: '1px solid rgba(148, 163, 184, 0.18)',
            boxShadow: '0 20px 48px rgba(15, 23, 42, 0.04)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Ambient background blur elements */}
          <div style={{
            position: 'absolute',
            bottom: '-120px',
            right: '-120px',
            width: '320px',
            height: '320px',
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            top: '-120px',
            left: '-120px',
            width: '320px',
            height: '320px',
            background: 'radial-gradient(circle, rgba(15, 76, 140, 0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div className="coverage-signal-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: '48px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            {/* Left side: header & CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F4C8C', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                <Activity size={18} className="activity-pulse-icon" />
                Coverage Signal
              </div>
              <h3 style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', color: '#0F172A', fontWeight: 800, margin: 0, lineHeight: 1.25 }}>
                Always-On Fairness & Compliance Watch
              </h3>
              <p style={{ color: '#64748B', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                BiasSense continuously monitors model decisions in real-time, instantly reporting on demographic parity, civil rights standards, and custom regulatory drift metrics.
              </p>
              <div>
                <Link to="/use-cases" style={{ textDecoration: 'none' }}>
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: '0 8px 20px rgba(15, 23, 42, 0.12)' }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      border: 'none',
                      cursor: 'pointer',
                      padding: '14px 28px',
                      borderRadius: '999px',
                      background: '#0F172A',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '14px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    Explore All Use Cases <ArrowUpRight size={18} />
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Right side: stats */}
            <div className="coverage-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {[
                {
                  value: '10',
                  label: 'Industry Domains',
                  desc: 'Mapped compliance rules',
                  badge: 'Active',
                  badgeColor: '#10B981',
                  badgeBg: 'rgba(16, 185, 129, 0.12)'
                },
                {
                  value: '1',
                  label: 'Unified Layer',
                  desc: 'Centralized controls',
                  badge: 'Standard',
                  badgeColor: '#0F4C8C',
                  badgeBg: 'rgba(15, 76, 140, 0.1)'
                },
                {
                  value: '24/7',
                  label: 'Production Watch',
                  desc: 'Continuous safeguards',
                  badge: 'Live',
                  badgeColor: '#14B8A6',
                  badgeBg: 'rgba(20, 184, 166, 0.12)',
                  pulse: true
                },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5, borderColor: 'rgba(15, 76, 140, 0.3)', boxShadow: '0 12px 24px rgba(15, 23, 42, 0.05)' }}
                  style={{
                    borderRadius: '20px',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    background: '#FFFFFF',
                    padding: '24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '180px',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      color: stat.badgeColor,
                      background: stat.badgeBg,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}>
                      {stat.pulse && (
                        <span style={{
                          position: 'relative',
                          display: 'inline-flex',
                          width: '6px',
                          height: '6px',
                          marginRight: '2px',
                        }}>
                          <span style={{
                            position: 'absolute',
                            display: 'inline-flex',
                            height: '100%',
                            width: '100%',
                            borderRadius: '50%',
                            background: stat.badgeColor,
                            opacity: 0.75,
                            animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                          }} />
                          <span style={{
                            position: 'relative',
                            display: 'inline-flex',
                            borderRadius: '50%',
                            width: '6px',
                            height: '6px',
                            background: stat.badgeColor,
                          }} />
                        </span>
                      )}
                      {stat.badge}
                    </span>
                  </div>
                  <div style={{ margin: '14px 0 6px' }}>
                    <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', lineHeight: 1 }}>
                      {stat.value}
                    </div>
                    <div style={{ color: '#0F172A', fontWeight: 700, fontSize: '14px', marginTop: '8px', lineHeight: 1.25 }}>
                      {stat.label}
                    </div>
                  </div>
                  <div style={{ color: '#64748B', fontSize: '12px' }}>
                    {stat.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <style>{`
          @keyframes ping {
            0% { transform: scale(1); opacity: 1; }
            75%, 100% { transform: scale(3.5); opacity: 0; }
          }
          .activity-pulse-icon {
            animation: iconPulse 2s infinite ease-in-out;
          }
          @keyframes iconPulse {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }
          @media (max-width: 980px) {
            .coverage-signal-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            .coverage-stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
          }
          @media (max-width: 760px) {
            .industry-card-grid { grid-template-columns: 1fr !important; }
            .coverage-stats-grid { grid-template-columns: 1fr !important; }
            .coverage-signal-grid-wrapper { padding: 32px 20px !important; margin-top: 48px !important; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default UseCasesAerialOverview;
