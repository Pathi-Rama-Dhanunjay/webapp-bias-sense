import { motion } from 'framer-motion';
import { Cpu, Sparkles } from 'lucide-react';

const integrations = [
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

const networkNodes = [
  { name: 'Salesforce', label: 'SF', color: '#00A1E0', x: 58, y: 78 },
  { name: 'Gmail', label: 'GM', color: '#EA4335', x: 308, y: 66 },
  { name: 'Notion', label: 'NO', color: '#111827', x: 346, y: 232 },
  { name: 'Slack', label: 'SL', color: '#611F69', x: 52, y: 248 },
  { name: 'HubSpot', label: 'HS', color: '#FF7A59', x: 118, y: 342 },
  { name: 'Zoom', label: 'ZM', color: '#2D8CFF', x: 292, y: 352 },
];

const curvePaths = [
  'M210 210 C165 112 112 96 58 78',
  'M210 210 C248 104 274 82 308 66',
  'M210 210 C284 180 322 196 346 232',
  'M210 210 C136 184 92 208 52 248',
  'M210 210 C162 270 142 314 118 342',
  'M210 210 C252 276 276 318 292 352',
];

const IntegrationsOrbitSection = () => {
  return (
    <section className="light-section" style={{ padding: 'clamp(58px, 7vh, 92px) 24px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '36px',
            border: '1px solid rgba(15, 23, 42, 0.08)',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
            boxShadow: '0 24px 70px rgba(15, 23, 42, 0.08)',
            padding: 'clamp(22px, 3vw, 36px)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(148,163,184,0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.11) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              maskImage: 'linear-gradient(180deg, black, transparent 92%)',
              pointerEvents: 'none',
            }}
          />

          <div
            className="integration-layout"
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'grid',
              gridTemplateColumns: '0.95fr 1.05fr',
              gap: 'clamp(22px, 4vw, 56px)',
              alignItems: 'center',
            }}
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#0F4C8C',
                  background: '#E6F1FB',
                  border: '1px solid rgba(15, 76, 140, 0.14)',
                  borderRadius: '999px',
                  padding: '7px 12px',
                  fontSize: '12px',
                  letterSpacing: '0.4px',
                  textTransform: 'uppercase',
                  fontWeight: 800,
                  marginBottom: '14px',
                }}
              >
                <Sparkles size={14} /> Integrations
              </motion.div>

              <h2 style={{ marginBottom: '12px', color: '#0F172A', letterSpacing: 0 }}>
                Connect BiasSense to Your Stack
              </h2>
              <p className="body-large" style={{ color: '#64748B', maxWidth: '590px', marginBottom: '22px' }}>
                Integrate with your data and software ecosystem in minutes. Keep governance centralized while teams continue working in the tools they already know.
              </p>

              <div
                className="integration-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
                  gap: '10px',
                }}
              >
                {integrations.map((logo, idx) => (
                  <motion.div
                    key={logo.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.025 }}
                    whileHover={{ y: -3, boxShadow: '0 14px 26px rgba(15, 23, 42, 0.12)' }}
                    style={{
                      height: '60px',
                      borderRadius: '18px',
                      border: '1px solid rgba(148, 163, 184, 0.26)',
                      background: 'rgba(255,255,255,0.86)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 18px rgba(15, 23, 42, 0.05)',
                    }}
                    title={logo.name}
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      loading="lazy"
                      style={{ maxWidth: '34px', maxHeight: '34px', objectFit: 'contain' }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="curve-stage" style={{ position: 'relative', minHeight: '430px' }}>
              <svg
                viewBox="0 0 420 420"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="integrationCurve" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0F4C8C" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.52" />
                  </linearGradient>
                </defs>
                {curvePaths.map((path, idx) => (
                  <motion.path
                    key={path}
                    d={path}
                    fill="none"
                    stroke="url(#integrationCurve)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="6 12"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: idx * 0.08 }}
                  />
                ))}
              </svg>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '150px',
                  height: '150px',
                  borderRadius: '999px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(148, 163, 184, 0.28)',
                  boxShadow: '0 0 0 14px rgba(20,184,166,0.08), 0 28px 55px rgba(15, 23, 42, 0.14)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: '92px',
                    height: '92px',
                    borderRadius: '28px',
                    border: '1px solid #E2E8F0',
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '3px',
                    boxShadow: '0 16px 34px rgba(15, 23, 42, 0.12)',
                  }}
                >
                  <Cpu size={20} color="#0F4C8C" />
                  <span style={{ color: '#0F172A', fontSize: '14px', fontWeight: 800 }}>BiasSense</span>
                </div>
              </motion.div>

              {networkNodes.map((node, idx) => (
                <motion.div
                  key={node.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{ y: [0, idx % 2 === 0 ? -5 : 5, 0] }}
                  transition={{
                    opacity: { delay: 0.25 + idx * 0.06 },
                    scale: { delay: 0.25 + idx * 0.06 },
                    y: { duration: 4 + idx * 0.25, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  style={{
                    position: 'absolute',
                    left: `${(node.x / 420) * 100}%`,
                    top: `${(node.y / 420) * 100}%`,
                    transform: 'translate(-50%, -50%)',
                    width: '62px',
                    height: '62px',
                    borderRadius: '22px',
                    border: '1px solid rgba(148, 163, 184, 0.28)',
                    background: 'rgba(255,255,255,0.9)',
                    boxShadow: '0 12px 28px rgba(15, 23, 42, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  title={node.name}
                >
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '12px',
                      background: node.color,
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 900,
                    }}
                  >
                    {node.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .integration-layout { grid-template-columns: 1fr !important; }
          .curve-stage { min-height: 380px !important; }
        }
        @media (max-width: 760px) {
          .integration-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
          .curve-stage { min-height: 330px !important; }
        }
      `}</style>
    </section>
  );
};

export default IntegrationsOrbitSection;
