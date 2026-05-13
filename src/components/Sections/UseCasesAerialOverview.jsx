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
    <section className="light-section" style={{ padding: 'clamp(70px, 8vh, 110px) 24px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '34px' }}
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

          <div className="usecase-map-layout" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '220px 1fr', gap: '18px', alignItems: 'stretch' }}>
            <div
              style={{
                borderRadius: '22px',
                border: '1px solid rgba(148,163,184,0.25)',
                background: '#FFFFFF',
                padding: '18px',
                boxShadow: '0 12px 26px rgba(15, 23, 42, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '100%',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F4C8C', fontSize: '13px', fontWeight: 800, marginBottom: '18px' }}>
                  <Activity size={16} />
                  Coverage Signal
                </div>
                {[
                  ['10', 'industry domains'],
                  ['1', 'governance layer'],
                  ['24/7', 'production watch'],
                ].map(([value, label]) => (
                  <div key={label} style={{ padding: '14px 0', borderTop: '1px solid #E2E8F0' }}>
                    <div style={{ fontSize: '30px', fontWeight: 900, color: '#0F172A', lineHeight: 1 }}>{value}</div>
                    <div style={{ color: '#64748B', fontSize: '13px', marginTop: '4px' }}>{label}</div>
                  </div>
                ))}
              </div>
              <Link to="/use-cases" style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '12px 14px',
                    borderRadius: '999px',
                    background: '#0F172A',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                >
                  Explore <ArrowUpRight size={16} />
                </motion.button>
              </Link>
            </div>

            <div className="industry-card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px' }}>
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
                      padding: '10px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
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
                        width: '34px',
                        height: '34px',
                        borderRadius: '11px',
                        background: `${industry.tone}14`,
                        color: industry.tone,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={17} />
                    </div>
                    <div>
                      <div style={{ color: '#0F172A', fontWeight: 800, fontSize: '14px', lineHeight: 1.25 }}>
                        {industry.name}
                      </div>
                      <div style={{ marginTop: '3px', color: '#64748B', fontSize: '11px' }}>
                        Fairness, monitoring, and evidence controls
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <style>{`
          @media (max-width: 980px) {
            .usecase-map-layout { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 760px) {
            .industry-card-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default UseCasesAerialOverview;
