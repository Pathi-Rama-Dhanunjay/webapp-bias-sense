import { motion } from 'framer-motion';
import { Cpu, Sparkles } from 'lucide-react';

const leftIntegrations = [
  { name: 'HubSpot', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hubspot/hubspot-original.svg' },
  { name: 'Slack', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
  { name: 'Zoom', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zoom/zoom-original.svg' },
  { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Redis', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Snowflake', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/snowflake/snowflake-original.svg' },
  { name: 'BigQuery', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Databricks', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/databricks/databricks-original.svg' },
  { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Azure', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Kafka', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
];

const orbitLogos = [
  { name: 'Salesforce', label: 'SF', color: '#00A1E0', angle: 15, radius: 148 },
  { name: 'Gmail', label: 'GM', color: '#EA4335', angle: 70, radius: 164 },
  { name: 'Notion', label: 'NO', color: '#111827', angle: 128, radius: 154 },
  { name: 'Slack', label: 'SL', color: '#611F69', angle: 184, radius: 168 },
  { name: 'HubSpot', label: 'HS', color: '#FF7A59', angle: 240, radius: 158 },
  { name: 'Zoom', label: 'ZM', color: '#2D8CFF', angle: 300, radius: 166 },
];

const IntegrationsOrbitSection = () => {
  return (
    <section className="light-section" style={{ padding: 'clamp(54px, 6vh, 88px) 24px' }}>
      <div className="container">
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'relative',
            borderRadius: '22px',
            overflow: 'hidden',
            border: '1px solid rgba(148,163,184,0.2)',
            background: 'linear-gradient(145deg, #091225 0%, #0F172A 55%, #10274C 100%)',
            boxShadow: '0 22px 60px rgba(2, 6, 23, 0.38)',
            padding: '22px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
              opacity: 0.18,
              pointerEvents: 'none',
            }}
          />
          <motion.div
            animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '-90px',
              right: '-60px',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(45,212,191,0.2) 0%, rgba(45,212,191,0) 70%)',
              filter: 'blur(8px)',
              pointerEvents: 'none',
            }}
          />

          <div className="stack-layout" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#2DD4BF',
                  border: '1px solid rgba(45,212,191,0.35)',
                  borderRadius: '999px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '10px',
                }}
              >
                <Sparkles size={14} /> Integrations
              </div>
              <h2 style={{ marginBottom: '10px', color: '#FFFFFF' }}>Connect BiasSense to Your Stack</h2>
              <p className="body-large" style={{ color: '#9CA3AF', maxWidth: '560px', marginBottom: '16px' }}>
                Integrate with your data and software ecosystem in minutes. Keep governance centralized while teams continue working in the tools they already know.
              </p>

              <div className="left-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '10px' }}>
                {leftIntegrations.map((logo, idx) => (
                  <motion.div
                    key={logo.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.02 }}
                    whileHover={{ y: -2, borderColor: 'rgba(45,212,191,0.45)' }}
                    style={{
                      borderRadius: '10px',
                      border: '1px solid rgba(148,163,184,0.32)',
                      background: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(6px)',
                      height: '58px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 14px rgba(2, 6, 23, 0.2)',
                    }}
                    title={logo.name}
                  >
                    <img src={logo.src} alt={logo.name} style={{ maxWidth: '34px', maxHeight: '34px', objectFit: 'contain', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }} loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative', minHeight: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 420 420" style={{ position: 'absolute', width: '100%', height: '100%' }} aria-hidden="true">
                {orbitLogos.map((logo) => {
                  const x = 210 + Math.cos((logo.angle * Math.PI) / 180) * logo.radius;
                  const y = 210 + Math.sin((logo.angle * Math.PI) / 180) * logo.radius;
                  return <line key={`line-${logo.name}`} x1="210" y1="210" x2={x} y2={y} stroke="rgba(203,213,225,0.55)" strokeWidth="1.6" strokeDasharray="3 6" />;
                })}
              </svg>

              <div
                style={{
                  width: '172px',
                  height: '172px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.72) 58%, rgba(255,255,255,0.08) 100%)',
                  boxShadow: '0 0 70px rgba(45,212,191,0.32), 0 0 26px rgba(255,255,255,0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: '98px',
                    height: '98px',
                    borderRadius: '24px',
                    border: '1px solid #E2E8F0',
                    background: '#FFFFFF',
                    boxShadow: '0 10px 24px rgba(15, 23, 42, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '2px',
                  }}
                >
                  <Cpu size={20} color="#0F4C8C" />
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.2px' }}>BiasSense</span>
                </div>
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 58, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', inset: 0 }}
              >
                {orbitLogos.map((logo) => {
                  const x = 210 + Math.cos((logo.angle * Math.PI) / 180) * logo.radius;
                  const y = 210 + Math.sin((logo.angle * Math.PI) / 180) * logo.radius;
                  return (
                    <div
                      key={logo.name}
                      style={{
                        position: 'absolute',
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: 'translate(-50%, -50%)',
                        width: '58px',
                        height: '58px',
                        borderRadius: '14px',
                        border: '1px solid rgba(148,163,184,0.35)',
                        background: 'rgba(255,255,255,0.14)',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 16px rgba(2, 6, 23, 0.24)',
                      }}
                      title={logo.name}
                    >
                      <div
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '9px',
                          background: logo.color,
                          color: '#FFFFFF',
                          fontWeight: 800,
                          fontSize: '11px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {logo.label}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .stack-layout { grid-template-columns: 1fr !important; }
          .left-grid { grid-template-columns: repeat(5, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 768px) {
          .left-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        }
      `}</style>
    </section>
  );
};

export default IntegrationsOrbitSection;
