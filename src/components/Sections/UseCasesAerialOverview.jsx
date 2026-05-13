import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  'Finance & Consumer Credit',
  'Healthcare & Patient Care',
  'Insurance & Underwriting',
  'Retail & E-commerce',
  'HR & Recruitment',
  'Criminal Justice',
  'Education & Admissions',
  'Mortgage & Real Estate',
  'Workforce Management',
  'Supply Chain & Logistics',
];

const UseCasesAerialOverview = () => {
  return (
    <section className="light-section" style={{ padding: 'clamp(72px, 9vh, 120px) 24px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '36px' }}
        >
          <p
            style={{
              color: '#0F4C8C',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: 700,
              fontSize: '12px',
              marginBottom: '12px',
            }}
          >
            Industry Radar
          </p>
          <h2 style={{ marginBottom: '14px' }}>Aerial Overview of Enterprise Use Cases</h2>
          <p className="body-large" style={{ maxWidth: '820px', margin: '0 auto', color: '#64748B' }}>
            BiasSense operates as one governance layer across high-impact systems. These are the decision domains where
            fairness, transparency, and compliance matter most.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{
            position: 'relative',
            borderRadius: '30px',
            padding: 'clamp(24px, 3vw, 38px)',
            overflow: 'hidden',
            background:
              'linear-gradient(160deg, #0B1220 0%, #0F172A 45%, #101A30 100%)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            boxShadow: '0 24px 70px rgba(2, 6, 23, 0.28)',
          }}
        >
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, -12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '-80px',
              right: '-40px',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0) 68%)',
              filter: 'blur(8px)',
            }}
          />
          <motion.div
            animate={{ x: [0, -18, 0], y: [0, 10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              bottom: '-90px',
              left: '-50px',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(45,212,191,0.28) 0%, rgba(45,212,191,0) 70%)',
              filter: 'blur(8px)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '14px',
                flexWrap: 'wrap',
                marginBottom: '22px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Sparkles size={16} color="#2DD4BF" />
                <span style={{ color: '#E2E8F0', fontSize: '14px', fontWeight: 600 }}>
                  10 Industry Highlights
                </span>
              </div>
              <span
                style={{
                  fontSize: '12px',
                  color: '#94A3B8',
                  border: '1px solid rgba(148,163,184,0.35)',
                  borderRadius: '999px',
                  padding: '6px 12px',
                  background: 'rgba(15,23,42,0.5)',
                }}
              >
                Unified Fairness Signal
              </span>
            </div>

            <div
              className="industry-chip-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '12px',
              }}
            >
              {industries.map((industry, idx) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -2, borderColor: 'rgba(45,212,191,0.45)' }}
                  style={{
                    borderRadius: '14px',
                    padding: '12px 14px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(148,163,184,0.28)',
                    color: '#F8FAFC',
                    fontSize: '14px',
                    fontWeight: 500,
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  {industry}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link to="/use-cases" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                border: 'none',
                cursor: 'pointer',
                padding: '12px 22px',
                borderRadius: '999px',
                background: '#0F172A',
                color: '#F8FAFC',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Explore All Use Cases <ArrowUpRight size={16} />
            </motion.button>
          </Link>
        </div>

        <style>{`
          @media (max-width: 820px) {
            .industry-chip-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default UseCasesAerialOverview;
