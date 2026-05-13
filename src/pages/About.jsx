import { motion } from 'framer-motion';
import { ShieldCheck, Users, Target, LineChart, Globe2, Sparkles } from 'lucide-react';

const principles = [
  {
    icon: ShieldCheck,
    title: 'Trust by Design',
    description:
      'Every fairness result should be auditable, explainable, and defensible in front of regulators and leadership.',
  },
  {
    icon: Target,
    title: 'Practical Governance',
    description:
      'We focus on controls teams can operationalize quickly, not theoretical checklists disconnected from production.',
  },
  {
    icon: Users,
    title: 'Cross-Functional by Default',
    description:
      'BiasSense is built for ML, risk, legal, and compliance teams to collaborate in one shared decision workflow.',
  },
  {
    icon: LineChart,
    title: 'Measured Outcomes',
    description:
      'We optimize for outcomes that matter: audit speed, lower legal exposure, and stronger model confidence.',
  },
];

const About = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at 12% -10%, rgba(45,212,191,0.12), transparent 45%), radial-gradient(circle at 88% 0%, rgba(59,130,246,0.14), transparent 42%), #F8FAFC',
        padding: '136px 24px 80px',
      }}
    >
      <div className="container" style={{ maxWidth: '1100px' }}>
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          style={{
            borderRadius: '28px',
            background: 'linear-gradient(160deg, #0B1220 0%, #0F172A 55%, #112449 100%)',
            color: '#FFFFFF',
            border: '1px solid rgba(148,163,184,0.22)',
            boxShadow: '0 24px 65px rgba(2,6,23,0.3)',
            padding: 'clamp(28px, 4vw, 56px)',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid rgba(45,212,191,0.35)',
              color: '#2DD4BF',
              borderRadius: '999px',
              padding: '6px 12px',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: 700,
              marginBottom: '16px',
            }}
          >
            <Sparkles size={14} /> About BiasSense
          </div>
          <h1 style={{ color: '#FFFFFF', marginBottom: '12px' }}>
            Building Defensible AI for Regulated Enterprises
          </h1>
          <p style={{ color: '#94A3B8', maxWidth: '760px', lineHeight: 1.75, margin: 0 }}>
            BiasSense was created to solve a hard enterprise problem: how to move fast with AI while keeping fairness,
            transparency, and compliance non-negotiable. We help organizations operationalize AI governance through one
            connected workflow for detection, explanation, and enforcement.
          </p>
        </motion.section>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '16px',
            marginBottom: '16px',
          }}
          className="about-grid"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              borderRadius: '18px',
              border: '1px solid #E2E8F0',
              background: '#FFFFFF',
              padding: '24px',
            }}
          >
            <h3 style={{ marginBottom: '10px', color: '#0F172A' }}>Our Mission</h3>
            <p style={{ color: '#475569', lineHeight: 1.7 }}>
              Make AI fairness measurable and enforceable for every enterprise model that impacts people. We believe
              trustworthy AI should not depend on manual audits, fragmented tooling, or reactive compliance efforts.
            </p>
            <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: 0 }}>
              Our platform combines model-risk controls with practical product workflows, so teams can prove they are
              fair before and after deployment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            style={{
              borderRadius: '18px',
              border: '1px solid #E2E8F0',
              background: '#FFFFFF',
              padding: '24px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F4C8C', marginBottom: '10px' }}>
              <Globe2 size={18} />
              <strong>What We Believe</strong>
            </div>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#475569', lineHeight: 1.8 }}>
              <li>Responsible AI should scale with business growth.</li>
              <li>Evidence beats assumptions in governance decisions.</li>
              <li>Fairness and performance can coexist in production.</li>
              <li>Compliance should be continuous, not periodic.</li>
            </ul>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            borderRadius: '18px',
            border: '1px solid #E2E8F0',
            background: '#FFFFFF',
            padding: '24px',
            marginBottom: '18px',
          }}
        >
          <h3 style={{ marginBottom: '14px', color: '#0F172A' }}>Core Principles</h3>
          <div
            className="principles-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px' }}
          >
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  style={{
                    borderRadius: '14px',
                    border: '1px solid #E2E8F0',
                    padding: '14px',
                    background: '#F8FAFC',
                  }}
                >
                  <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#E6F1FB', color: '#0F4C8C', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    <Icon size={18} />
                  </div>
                  <div style={{ fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.6 }}>{item.description}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            borderRadius: '18px',
            border: '1px solid #E2E8F0',
            background: 'linear-gradient(130deg, #0F4C8C 0%, #00A99D 100%)',
            color: '#FFFFFF',
            padding: '24px',
            textAlign: 'center',
          }}
        >
          <h3 style={{ color: '#FFFFFF', marginBottom: '8px' }}>Join Us on the Journey to Trustworthy AI</h3>
          <p style={{ color: 'rgba(255,255,255,0.92)', marginBottom: '16px' }}>
            See how BiasSense can support your governance strategy and reduce model risk at scale.
          </p>
          <button
            onClick={() => {
              window.location.href = '/early-access';
            }}
            style={{
              border: 'none',
              background: '#FFFFFF',
              color: '#0F172A',
              borderRadius: '999px',
              padding: '12px 22px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Get Early Access
          </button>
        </motion.section>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 740px) {
          .principles-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default About;
