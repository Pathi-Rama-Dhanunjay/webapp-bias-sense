import React from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Scale,
  Search,
  Network,
  FileCheck,
  Sparkles,
  Layers,
  Briefcase,
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

const diagramNodes = [
  { title: 'Ingest', icon: <Database />, x: 8, y: 18 },
  { title: 'Clean', icon: <Cpu />, x: 34, y: 34 },
  { title: 'Measure', icon: <Scale />, x: 64, y: 18 },
  { title: 'Explain', icon: <Search />, x: 82, y: 46 },
  { title: 'Monitor', icon: <Network />, x: 58, y: 72 },
  { title: 'Report', icon: <FileCheck />, x: 26, y: 70 },
  { title: 'Insights', icon: <Sparkles />, x: 12, y: 48 },
  { title: 'Deploy', icon: <Layers />, x: 82, y: 78 },
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
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 34px' }}>
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
            AI Governance Architecture
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
            Find Bias. Explain Risk. <span style={{ color: accent }}>Ship Fairer AI.</span>
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
            BiasSense helps teams spot unfair model behavior, understand what is driving it,
            and create audit-ready evidence before decisions reach production.
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
          <div className="flow-canvas">
            <svg className="flow-lines" viewBox="0 0 760 520" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="pleasantFlow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0F4C8C" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#0F4C8C" stopOpacity="0.18" />
                </linearGradient>
              </defs>
              <motion.path
                d="M72 118 C190 38, 300 156, 392 250 C490 350, 594 428, 694 324"
                fill="none"
                stroke="url(#pleasantFlow)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
              <motion.path
                d="M78 382 C198 486, 280 356, 392 250 C506 142, 596 94, 692 162"
                fill="none"
                stroke="url(#pleasantFlow)"
                strokeWidth="2"
                strokeDasharray="8 12"
                strokeLinecap="round"
                animate={{ strokeDashoffset: [0, -40] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />
            </svg>

            <motion.div
              className="flow-hub"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, -6, 0] }}
              transition={{ opacity: { duration: 0.4 }, scale: { duration: 0.4 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
            >
              <Cpu size={24} color={accent} />
              <span>BiasSense</span>
              <small>Governance Core</small>
            </motion.div>

            {diagramNodes.map((node, i) => (
              <motion.div
                key={node.title}
                className="flow-node"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, i % 2 === 0 ? -4 : 4, 0] }}
                transition={{
                  opacity: { delay: 0.12 + i * 0.05, duration: 0.35 },
                  scale: { delay: 0.12 + i * 0.05, duration: 0.35 },
                  y: { duration: 4 + i * 0.18, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                <div className="flow-node-icon">
                  {React.cloneElement(node.icon, { size: 17, color: accent })}
                </div>
                <span>{node.title}</span>
              </motion.div>
            ))}

            <div className="flow-metrics">
              <div><strong>8</strong><span>stages</span></div>
              <div><strong>3</strong><span>evidence outputs</span></div>
              <div><strong>1</strong><span>deployment gate</span></div>
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
          min-height: 590px;
        }
        .architecture-right::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(15, 76, 140, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 76, 140, 0.08) 1px, transparent 1px);
          background-size: 36px 36px;
          mask-image: linear-gradient(180deg, black, transparent 88%);
          pointer-events: none;
        }
        .architecture-visual-header {
          position: absolute;
          top: 18px;
          left: 18px;
          right: 18px;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(148, 163, 184, 0.25);
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
        }
        .architecture-visual-header strong {
          display: block;
          color: ${black};
          font-size: 15px;
          letter-spacing: 0;
        }
        .visual-kicker {
          display: block;
          margin-bottom: 2px;
          color: ${accent};
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }
        .visual-status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #0F766E;
          background: rgba(20, 184, 166, 0.1);
          border: 1px solid rgba(20, 184, 166, 0.22);
          padding: 7px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
        }
        .visual-status span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #14B8A6;
          box-shadow: 0 0 0 5px rgba(20, 184, 166, 0.14);
        }
        .architecture-core-badge {
          position: absolute;
          left: 50%;
          top: 49%;
          transform: translate(-50%, -50%);
          z-index: 8;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: 999px;
          color: ${black};
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(15, 76, 140, 0.18);
          box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12), 0 0 0 10px rgba(15, 76, 140, 0.04);
          font-size: 13px;
          font-weight: 800;
          pointer-events: none;
        }
        .iso-container {
          position: absolute;
          inset: 34px 0 0 0;
          transform: rotateX(48deg) rotateZ(40deg) scale(0.76);
          transform-style: preserve-3d;
        }
        .iso-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 430px;
          height: 430px;
          background: radial-gradient(circle, rgba(15, 76, 140, 0.12) 0%, rgba(0, 169, 157, 0.08) 34%, transparent 64%);
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
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(15, 76, 140, 0.22);
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.65);
          font-size: 14px;
          font-weight: 700;
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
          transform: translateZ(16px);
          box-shadow: 0 0 25px rgba(15, 76, 140, 0.28), 0 18px 38px rgba(15, 23, 42, 0.13), inset 0 0 0 1px rgba(255, 255, 255, 0.8);
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
        .architecture-right {
          min-height: 520px;
        }
        .flow-canvas {
          position: relative;
          min-height: 430px;
          margin-top: -20px;
          overflow: visible;
          background: transparent;
        }
        .flow-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .flow-hub {
          position: absolute;
          left: 50%;
          top: 43%;
          transform: translate(-50%, -50%);
          width: 142px;
          height: 142px;
          border-radius: 999px;
          background: #FFFFFF;
          border: 1px solid rgba(148, 163, 184, 0.24);
          box-shadow: 0 0 0 14px rgba(20, 184, 166, 0.06), 0 20px 48px rgba(15, 23, 42, 0.12);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          z-index: 2;
        }
        .flow-hub span {
          color: ${black};
          font-size: 16px;
          font-weight: 900;
          letter-spacing: 0;
        }
        .flow-hub small {
          color: ${gray};
          font-size: 11px;
          font-weight: 700;
        }
        .flow-node {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 3;
          min-width: 108px;
          padding: 9px 10px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(148, 163, 184, 0.24);
          box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08);
          display: flex;
          align-items: center;
          gap: 8px;
          color: ${black};
          font-size: 12px;
          font-weight: 800;
          white-space: nowrap;
        }
        .flow-node-icon {
          width: 30px;
          height: 30px;
          border-radius: 11px;
          background: rgba(15, 76, 140, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .flow-metrics {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: -28px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          z-index: 4;
        }
        .flow-metrics div {
          padding: 10px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(148, 163, 184, 0.22);
          text-align: center;
        }
        .flow-metrics strong {
          display: block;
          color: ${accent};
          font-size: 20px;
          line-height: 1;
        }
        .flow-metrics span {
          display: block;
          color: ${gray};
          font-size: 11px;
          margin-top: 4px;
        }
        @media (max-width: 900px) {
          .architecture-grid {
            grid-template-columns: 1fr;
          }
          .architecture-right {
            margin-top: 64px;
            min-height: auto;
          }
          .flow-canvas {
            min-height: 390px;
            margin-top: 0;
          }
          .flow-node {
            min-width: auto;
          }
          .flow-metrics {
            grid-template-columns: 1fr;
            position: relative;
            left: auto;
            right: auto;
            bottom: auto;
            margin: 280px 14px 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default ArchitectureFlow;
