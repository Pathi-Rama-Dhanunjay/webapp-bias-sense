import { motion } from 'framer-motion';

const stats = [
  { value: '60%', label: 'Faster audit preparation' },
  { value: '0.88+', label: 'Typical disparate impact after remediation' },
  { value: '24-48h', label: 'Bias hotspot detection time' },
  { value: '10', label: 'Industries covered on one platform' },
];

const OutcomesSection = () => {
  return (
    <section className="light-section" style={{ padding: 'clamp(64px, 8vh, 100px) 24px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            borderRadius: '26px',
            padding: 'clamp(24px, 3vw, 42px)',
            background: 'linear-gradient(150deg, #0B1220 0%, #0F172A 60%, #10203F 100%)',
            border: '1px solid rgba(148,163,184,0.24)',
            boxShadow: '0 24px 60px rgba(2, 6, 23, 0.3)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <p style={{ color: '#2DD4BF', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px', fontWeight: 700, marginBottom: '10px' }}>
              Outcomes That Matter
            </p>
            <h2 style={{ color: '#FFFFFF', marginBottom: '10px' }}>Proof You Can Take to Regulators and the Board</h2>
            <p style={{ color: '#94A3B8', maxWidth: '760px', margin: '0 auto' }}>
              BiasSense turns model governance into measurable business value with faster audits, lower legal risk, and stronger trust.
            </p>
          </div>

          <div className="outcome-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '12px' }}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                style={{
                  borderRadius: '14px',
                  padding: '16px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(148,163,184,0.25)',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#2DD4BF', marginBottom: '6px' }}>{stat.value}</div>
                <div style={{ fontSize: '13px', color: '#E2E8F0', lineHeight: 1.45 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .outcome-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 620px) {
          .outcome-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default OutcomesSection;
