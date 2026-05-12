import React from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Scale,
  Search,
  Network,
  FileCheck,
  Sparkles,
  ClipboardList,
  Layers,
  Users,
  MessageSquare,
  Briefcase,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

const features = [
  {
    title: '1. Data Ingestion & Preprocessing',
    desc: 'Seamlessly connect APIs, S3, databases, and parse schemas.',
    icon: <Database />,
  },
  {
    title: '2. Bias Metric Engine',
    desc: 'Calculate Disparate Impact, Equal Opportunity, and TPR gaps.',
    icon: <Scale />,
  },
  {
    title: '3. Explainability (XAI)',
    desc: 'SHAP, Feature Attribution, and Counterfactual Generator.',
    icon: <Search />,
  },
  {
    title: '4. Clustering & Drift',
    desc: 'Monitor group underrepresentation and fairness by cluster.',
    icon: <Network />,
  },
  {
    title: '5. Scorecard Builder',
    desc: 'Convert analysis to human-readable PDF/HTML/JSON reports.',
    icon: <FileCheck />,
  },
  {
    title: '6. LLM Insights',
    desc: 'Summarize risks and recommend fixes via LLM prompts.',
    icon: <Sparkles />,
  },
  {
    title: '7. CI/CD & Auditing',
    desc: 'Automate via Prefect/Airflow with exportable compliance logs.',
    icon: <Layers />,
  },
  {
    title: '8. Extensible to Multi Sectors',
    desc: 'Modular structure for pharma, HR, Fintech, hiring data, lending pipelines & more.',
    icon: <Briefcase />,
  },
];

const ArchitectureFlow = () => {
  const accent = '#0F4C8C';
  const black = '#1A1A1A';
  const gray = '#666666';
  const lightGrayGrid = '#F2F2F2';

  return (
    <section
      className="light-section"
      style={{
        padding: 'clamp(60px, 8vh, 120px) 24px',
        background: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Top Header Section */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px' }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              color: accent,
              fontWeight: 700,
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '16px',
            }}
          >
            Enterprise System Architecture
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              color: black,
              fontWeight: 800,
              marginBottom: '16px',
              lineHeight: 1.2,
            }}
          >
            End-to-End <span style={{ color: accent }}>Algorithmic De-biasing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: 'clamp(16px, 1.2vw, 18px)',
              color: gray,
              lineHeight: 1.6,
            }}
          >
            Detect, measure, and mitigate algorithmic and dataset biases in structured
            or semi-structured data. Leverage fairness metrics, clustering, 
            explainability models, and LLMs for robust compliance.
          </motion.p>
        </div>

        <div className="architecture-grid">
          {/* Left Column - Features & Button */}
          <div className="architecture-left" style={{ alignSelf: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ x: 10, backgroundColor: 'rgba(15, 76, 140, 0.04)' }}
                viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '6px', borderRadius: '12px', marginLeft: '-6px', cursor: 'default' }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `${accent}20`,
                    color: accent,
                    flexShrink: 0,
                  }}
                >
                  {React.cloneElement(feature.icon, { size: 16 })}
                </div>
                <div>
                  <h4
                    style={{
                      margin: 0,
                      color: black,
                      fontSize: '13px',
                      fontWeight: 600,
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p style={{ margin: '2px 0 0', color: gray, fontSize: '11px' }}>
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = '/product'}
            style={{
              marginTop: '32px',
              background: 'linear-gradient(90deg, #0F4C8C 0%, #00A99D 100%)',
              color: '#FFFFFF',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(15, 76, 140, 0.3)',
            }}
          >
            Know More
          </motion.button>
        </div>

        {/* Right Column */}
        <div className="architecture-right">
          <div className="iso-container">
            {/* Ambient Pulse Glow */}
            <div className="iso-glow" />
            
            {/* Isometric Grid Background */}
            <div className="iso-grid" />

            {/* Floating Icons */}
            <div style={{ position: 'absolute', top: '20%', left: '75%', transform: 'translate(-50%, -50%)', zIndex: 5 }}>
              <motion.div
                className="floating-icon"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <MessageSquare size={22} color={accent} />
              </motion.div>
            </div>
            <div style={{ position: 'absolute', top: '75%', left: '15%', transform: 'translate(-50%, -50%)', zIndex: 5 }}>
              <motion.div
                className="floating-icon"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <Briefcase size={22} color={accent} />
              </motion.div>
            </div>

            {/* SVG Lines */}
            <svg
              className="iso-lines"
              viewBox="0 0 400 450"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={accent} />
                  <stop offset="100%" stopColor="#00A99D" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 60 20 L 160 70"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              <motion.path
                d="M 160 70 L 260 120"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
              <motion.path
                d="M 260 120 L 160 170"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              />
              <motion.path
                d="M 160 170 L 60 220"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
              <motion.path
                d="M 60 220 L 160 270"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              />
              <motion.path
                d="M 160 270 L 260 320"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              />
              <motion.path
                d="M 260 320 L 160 370"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              />
              <motion.path
                d="M 160 370 L 60 420"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </svg>

            {/* Nodes */}
            <div style={{ position: 'absolute', top: '5%', left: '15%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
              <motion.div className="iso-card" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} animate={{ y: [0, -8, 0] }} transition={{ opacity: { duration: 0.5, delay: 0.2 }, scale: { duration: 0.5, delay: 0.2 }, y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 } }}>
                <Database size={18} color={accent} /> Data Ingestion (S3/APIs)
              </motion.div>
            </div>
            <div style={{ position: 'absolute', top: '16.25%', left: '40%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
              <motion.div className="iso-card" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} animate={{ y: [0, -10, 0] }} transition={{ opacity: { duration: 0.5, delay: 0.3 }, scale: { duration: 0.5, delay: 0.3 }, y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 } }}>
                <Cpu size={18} color={accent} /> Preprocessing
              </motion.div>
            </div>
            <div style={{ position: 'absolute', top: '27.5%', left: '65%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
              <motion.div className="iso-card" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} animate={{ y: [0, -9, 0] }} transition={{ opacity: { duration: 0.5, delay: 0.4 }, scale: { duration: 0.5, delay: 0.4 }, y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 } }}>
                <Scale size={18} color={accent} /> Bias Engine (Fairlearn)
              </motion.div>
            </div>
            <div style={{ position: 'absolute', top: '38.75%', left: '40%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
              <motion.div className="iso-card" style={{ padding: '16px 24px', border: `2px solid ${accent}` }} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} animate={{ y: [0, -12, 0] }} transition={{ opacity: { duration: 0.5, delay: 0.5 }, scale: { duration: 0.5, delay: 0.5 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}>
                <Search size={20} color={accent} /> Explainability (SHAP)
              </motion.div>
            </div>
            <div style={{ position: 'absolute', top: '50%', left: '15%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
              <motion.div className="iso-card" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} animate={{ y: [0, -8, 0] }} transition={{ opacity: { duration: 0.5, delay: 0.6 }, scale: { duration: 0.5, delay: 0.6 }, y: { duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 0.6 } }}>
                <Network size={18} color={accent} /> Clustering & Drift
              </motion.div>
            </div>
            <div style={{ position: 'absolute', top: '61.25%', left: '40%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
              <motion.div className="iso-card" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} animate={{ y: [0, -10, 0] }} transition={{ opacity: { duration: 0.5, delay: 0.7 }, scale: { duration: 0.5, delay: 0.7 }, y: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.7 } }}>
                <FileCheck size={18} color={accent} /> Scorecards (JSON/PDF)
              </motion.div>
            </div>
            <div style={{ position: 'absolute', top: '72.5%', left: '65%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
              <motion.div className="iso-card" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} animate={{ y: [0, -11, 0] }} transition={{ opacity: { duration: 0.5, delay: 0.8 }, scale: { duration: 0.5, delay: 0.8 }, y: { duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 0.8 } }}>
                <Sparkles size={18} color={accent} /> LLM Engine (Gemini)
              </motion.div>
            </div>
            <div style={{ position: 'absolute', top: '83.75%', left: '40%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
              <motion.div className="iso-card" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} animate={{ y: [0, -9, 0] }} transition={{ opacity: { duration: 0.5, delay: 0.9 }, scale: { duration: 0.5, delay: 0.9 }, y: { duration: 3.7, repeat: Infinity, ease: "easeInOut", delay: 0.9 } }}>
                <Layers size={18} color={accent} /> CI/CD & Audit Logs
              </motion.div>
            </div>
            <div style={{ position: 'absolute', top: '95%', left: '15%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
              <motion.div className="iso-card" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} animate={{ y: [0, -8, 0] }} transition={{ opacity: { duration: 0.5, delay: 1.0 }, scale: { duration: 0.5, delay: 1.0 }, y: { duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 1.0 } }}>
                <Briefcase size={18} color={accent} /> Multi-Sector Extensible
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <style>{`
        .architecture-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 64px;
          align-items: center;
        }
        .architecture-right {
          position: relative;
          min-height: 550px;
        }
        .iso-container {
          position: absolute;
          inset: 0;
          transform: rotateX(50deg) rotateZ(45deg) scale(0.8);
          transform-style: preserve-3d;
        }
        .iso-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(15, 76, 140, 0.08) 0%, transparent 60%);
          transform: translate(-50%, -50%);
          animation: pulseOrb 6s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes pulseOrb {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        }
        .iso-grid {
          position: absolute;
          inset: -50%;
          background-image: linear-gradient(${lightGrayGrid} 1px, transparent 1px),
            linear-gradient(to right, ${lightGrayGrid} 1px, transparent 1px);
          background-size: 30px 30px;
          animation: panGrid 20s linear infinite;
        }
        @keyframes panGrid {
          0% { background-position: 0 0; }
          100% { background-position: 30px 30px; }
        }
        .iso-card {
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(15, 76, 140, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
          font-size: 14px;
          font-weight: 600;
          color: ${black};
          display: flex;
          align-items: center;
          gap: 10px;
          white-space: nowrap;
          transition: all 0.3s ease;
          cursor: default;
        }
        .iso-card:hover {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 0 25px rgba(15, 76, 140, 0.4), 0 15px 35px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.8);
        }
        .iso-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .iso-lines path {
          stroke: url(#lineGrad);
          filter: url(#glow);
          stroke-width: 2px;
          fill: none;
          stroke-dasharray: 8 8;
          animation: dataFlow 1.5s linear infinite;
        }
        @keyframes dataFlow {
          from { stroke-dashoffset: 16; }
          to { stroke-dashoffset: 0; }
        }
        .floating-icon {
          width: 44px;
          height: 44px;
          background: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(15, 76, 140, 0.2);
        }
        @media (max-width: 900px) {
          .architecture-grid {
            grid-template-columns: 1fr;
          }
          .architecture-right {
            margin-top: 64px;
            min-height: 400px;
          }
          .iso-container {
            transform: rotateX(50deg) rotateZ(45deg) scale(0.7);
          }
        }
      `}</style>
    </section>
  );
};

export default ArchitectureFlow;