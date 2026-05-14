import { motion } from 'framer-motion';
import { Cpu, ImageOff } from 'lucide-react';
import { useState } from 'react';

const integrations = [
  { name: 'HubSpot', src: '/logos/hubspot.svg' },
  { name: 'Zoom', src: '/logos/zoom.svg' },
  { name: 'PostgreSQL', src: '/logos/postgresql.svg' },
  { name: 'MongoDB', src: '/logos/mongodb.svg' },
  { name: 'MySQL', src: '/logos/mysql.svg' },
  { name: 'Redis', src: '/logos/redis.svg' },
  { name: 'Snowflake', src: '/logos/snowflake.svg' },
  { name: 'Google Cloud', src: '/logos/googlecloud.svg' },
  { name: 'Databricks', src: '/logos/databricks.svg' },
  { name: 'Docker', src: '/logos/docker.svg' },
  { name: 'Python', src: '/logos/python.svg' },
  { name: 'Kafka', src: '/logos/apachekafka.svg' },
  { name: 'GitHub', src: '/logos/github.svg' },
  { name: 'GitLab', src: '/logos/gitlab.svg' },
  { name: 'Jenkins', src: '/logos/jenkins.svg' },
  { name: 'Kubernetes', src: '/logos/kubernetes.svg' },
  { name: 'Confluence', src: '/logos/confluence.svg' },
  { name: 'Stripe', src: '/logos/stripe.svg' },
  { name: 'Notion', src: '/logos/notion.svg' },
  { name: 'Terraform', src: '/logos/terraform.svg' },
  { name: 'Ansible', src: '/logos/ansible.svg' },
  { name: 'Pandas', src: '/logos/pandas.svg' },
  { name: 'Grafana', src: '/logos/grafana.svg' },
  { name: 'More', src: null, isMore: true },
];

const orbitNodes = [
  { name: 'Google Cloud', src: '/logos/googlecloud.svg', x: 232, y: 56, delay: 0.5 },
  { name: 'Kubernetes', src: '/logos/kubernetes.svg', x: 388, y: 112, delay: 0.9 },
  { name: 'GitLab', src: '/logos/gitlab.svg', x: 422, y: 248, delay: 0.3 },
  { name: 'HubSpot', src: '/logos/hubspot.svg', x: 362, y: 388, delay: 1.1 },
  { name: 'MongoDB', src: '/logos/mongodb.svg', x: 230, y: 440, delay: 0.7 },
  { name: 'GitHub', src: '/logos/github.svg', x: 104, y: 390, delay: 1.5 },
  { name: 'Docker', src: '/logos/docker.svg', x: 40, y: 244, delay: 1.9 },
  { name: 'Databricks', src: '/logos/databricks.svg', x: 82, y: 120, delay: 0.1 },
  { name: 'PostgreSQL', src: '/logos/postgresql.svg', x: 308, y: 88, delay: 0.6 },
  { name: 'Redis', src: '/logos/redis.svg', x: 430, y: 176, delay: 1.2 },
  { name: 'Azure', src: '/logos/azure.svg', x: 398, y: 326, delay: 1.7 },
  { name: 'Jenkins', src: '/logos/jenkins.svg', x: 300, y: 420, delay: 0.4 },
  { name: 'Python', src: '/logos/python.svg', x: 162, y: 430, delay: 1.4 },
  { name: 'Terraform', src: '/logos/terraform.svg', x: 62, y: 320, delay: 0.8 },
  { name: 'Confluence', src: '/logos/confluence.svg', x: 26, y: 174, delay: 1.0 },
  { name: 'Grafana', src: '/logos/grafana.svg', x: 152, y: 88, delay: 1.6 },
];

const IntegrationsOrbitSection = () => {
  const [failed, setFailed] = useState({});
  const markFailed = (k) => setFailed((p) => ({ ...p, [k]: true }));

  return (
    <section style={{ padding: 'clamp(60px, 8vh, 100px) 24px', position: 'relative' }}>
      <div className="container">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', borderRadius: '24px', padding: 'clamp(32px, 5vw, 56px)' }}
        >
          <div className="stack-layout" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
            <div>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 style={{ marginBottom: '16px', color: '#0F172A', fontSize: 'clamp(32px, 3.5vw, 42px)', lineHeight: 1.15, fontWeight: 800 }}>
                  Connect BiasSense With Your Stack
                </h2>
                <p className="body-large" style={{ color: '#475569', maxWidth: '520px', marginBottom: '32px', fontSize: 'clamp(16px, 1.2vw, 18px)', lineHeight: 1.6 }}>
                  Integrate instantly with your favorite data warehouses, CRMs, and messaging apps. Streamline your AI governance without migrating a single byte of data.
                </p>
              </motion.div>

              <div className="left-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {integrations.map((logo, idx) => (
                  <motion.div
                    key={logo.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03, duration: 0.35 }}
                    whileHover={{ y: -3, borderColor: '#94A3B8' }}
                    style={{ borderRadius: '8px', border: '1px solid #CBD5E1', background: 'transparent', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '0 8px', gap: '7px' }}
                    title={logo.name}
                  >
                    {!logo.isMore && !failed[`tile-${logo.name}`] ? (
                      <img src={logo.src} alt={`${logo.name} logo`} style={{ width: '18px', height: '18px', objectFit: 'contain' }} loading="lazy" onError={() => markFailed(`tile-${logo.name}`)} />
                    ) : (
                      logo.isMore ? (
                        <span style={{ fontSize: '15px', lineHeight: 1, fontWeight: 700, color: '#0F172A' }}>+</span>
                      ) : (
                        <ImageOff size={14} color="#64748B" />
                      )
                    )}
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#334155', lineHeight: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {logo.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 460 500" style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }} aria-hidden="true">
                <circle cx="230" cy="250" r="102" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 7" />
                <circle cx="230" cy="250" r="160" fill="none" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 10" />
                <circle cx="230" cy="250" r="212" fill="none" stroke="#F1F5F9" strokeWidth="2" />
                {orbitNodes.map((node, i) => (
                  <line key={`line-${i}`} x1={230} y1={250} x2={node.x} y2={node.y} stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="5 7" />
                ))}
              </svg>

              <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
                <motion.div
                  animate={{ boxShadow: ['0 0 0 0 rgba(14,165,233,0.22)', '0 0 0 14px rgba(14,165,233,0)', '0 0 0 0 rgba(14,165,233,0)'] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut' }}
                  style={{ width: '130px', height: '130px', borderRadius: '50%', border: '2px solid #38BDF8', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '6px' }}
                >
                  <Cpu size={36} color="#0EA5E9" />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', letterSpacing: '0.2px' }}>BiasSense</span>
                </motion.div>
              </div>

              {orbitNodes.map((node, i) => (
                <motion.div
                  key={`node-${i}`}
                  animate={{ y: [0, -12, 0], x: [0, 4, 0] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: node.delay }}
                  style={{ position: 'absolute', left: `${node.x}px`, top: `${node.y}px`, transform: 'translate(-50%, -50%)', width: '122px', height: '42px', borderRadius: '12px', border: '1.5px solid #CBD5E1', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '7px', padding: '0 8px', boxShadow: '0 8px 18px rgba(15, 23, 42, 0.09)', zIndex: 5 }}
                  title={node.name}
                >
                  {!failed[`node-${node.name}`] ? (
                    <img src={node.src} alt={`${node.name} logo`} style={{ width: '16px', height: '16px', objectFit: 'contain', flex: '0 0 auto' }} loading="lazy" onError={() => markFailed(`node-${node.name}`)} />
                  ) : (
                    <ImageOff size={14} color="#64748B" />
                  )}
                  <span style={{ fontSize: '10px', fontWeight: 600, color: '#334155', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {node.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .stack-layout { grid-template-columns: 1fr !important; gap: 56px !important; }
          .left-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .left-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
};

export default IntegrationsOrbitSection;
