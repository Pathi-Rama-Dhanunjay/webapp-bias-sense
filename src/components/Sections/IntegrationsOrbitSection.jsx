import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu } from 'lucide-react';

/* ══════════════════════════════════════════
   DATA
   ══════════════════════════════════════════ */
const integrations = [
  { name: 'HubSpot', color: '#FF7A59' },
  { name: 'MongoDB', color: '#13AA52' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'Snowflake', color: '#29B5E8' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'GitHub', color: '#181717' },
  { name: 'Stripe', color: '#635BFF' },
  { name: 'Slack', color: '#E01E5A' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'GCP', color: '#4285F4' },
  { name: 'Azure', color: '#0078D4' },
  { name: 'Databricks', color: '#FF3621' },
  { name: 'Terraform', color: '#7B42BC' },
  { name: 'Kubernetes', color: '#326CE5' },
  { name: 'Grafana', color: '#F46800' },
  { name: 'Datadog', color: '#632CA6' },
  { name: 'Jira', color: '#0052CC' },
  { name: 'Salesforce', color: '#00A1E0' },
  { name: 'Tableau', color: '#E97627' },
  { name: 'BigQuery', color: '#4386FA' },
  { name: 'Kafka', color: '#231F20' },
  { name: 'Redis', color: '#DC382D' },
  { name: 'Airflow', color: '#017CEE' },
];

const ringRadii = { 1: 110, 2: 170, 3: 220 };
const CX = 250, CY = 250;

const planets = [
  { name: 'Snowflake', color: '#29B5E8', angle: 0, ring: 2 },
  { name: 'PostgreSQL', color: '#336791', angle: 30, ring: 3 },
  { name: 'AWS', color: '#FF9900', angle: 60, ring: 2 },
  { name: 'GitHub', color: '#181717', angle: 90, ring: 1 },
  { name: 'Docker', color: '#2496ED', angle: 120, ring: 3 },
  { name: 'Slack', color: '#E01E5A', angle: 150, ring: 2 },
  { name: 'Stripe', color: '#635BFF', angle: 180, ring: 1 },
  { name: 'Databricks', color: '#FF3621', angle: 210, ring: 3 },
  { name: 'Kubernetes', color: '#326CE5', angle: 240, ring: 2 },
  { name: 'Grafana', color: '#F46800', angle: 270, ring: 1 },
  { name: 'Kafka', color: '#231F20', angle: 300, ring: 3 },
  { name: 'MongoDB', color: '#13AA52', angle: 330, ring: 2 },
];

const travelerIndices = [0, 3, 6, 9];

/* ══════════════════════════════════════════
   LOGO MAP — maps display name → /logos/ filename
   ══════════════════════════════════════════ */
const logoMap = {
  'HubSpot': '/logos/hubspot.svg',
  'MongoDB': '/logos/mongodb.svg',
  'PostgreSQL': '/logos/postgresql.svg',
  'Snowflake': '/logos/snowflake.svg',
  'Docker': '/logos/docker.svg',
  'GitHub': '/logos/github.svg',
  'Stripe': '/logos/stripe.svg',
  'Slack': '/logos/slack.svg',
  'AWS': '/logos/amazonwebservices.svg',
  'GCP': '/logos/googlecloud.svg',
  'Azure': '/logos/azure.svg',
  'Databricks': '/logos/databricks.svg',
  'Terraform': '/logos/terraform.svg',
  'Kubernetes': '/logos/kubernetes.svg',
  'Grafana': '/logos/grafana.svg',
  'Datadog': null,
  'Jira': null,
  'Salesforce': null,
  'Tableau': null,
  'BigQuery': null,
  'Kafka': '/logos/apachekafka.svg',
  'Redis': '/logos/redis.svg',
  'Airflow': null,
};

/* ══════════════════════════════════════════
   EASING & TOKENS
   ══════════════════════════════════════════ */
const EASE = [0.22, 1, 0.36, 1];
const CENTER_EASE = [0.34, 1.4, 0.64, 1];
const INDIGO = '#4F46E5';

/* ══════════════════════════════════════════
   COMPONENT
   ══════════════════════════════════════════ */
/* ══════════════════════════════════════════
   CHIP LOGO COMPONENT (with fallback to dot)
   ══════════════════════════════════════════ */
const ChipLogo = ({ name, color }) => {
  const [failed, setFailed] = useState(false);
  const src = logoMap[name];

  if (!src || failed) {
    return <span className="int-chip-dot" style={{ background: color }} />;
  }

  return (
    <img
      src={src}
      alt=""
      className="int-chip-logo"
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
};

/* ══════════════════════════════════════════
   PLANET LOGO COMPONENT (with fallback to circle)
   ══════════════════════════════════════════ */
const PlanetLogo = ({ name, color }) => {
  const [failed, setFailed] = useState(false);
  const src = logoMap[name];

  if (!src || failed) {
    return (
      <span className="int-planet-icon" style={{ background: color }}>
        <svg viewBox="0 0 16 16" width="14" height="14"><circle cx="8" cy="8" r="3" fill="white" stroke="none" /></svg>
      </span>
    );
  }

  return (
    <span className="int-planet-icon int-planet-icon-logo">
      <img src={src} alt="" className="int-planet-logo-img" onError={() => setFailed(true)} loading="lazy" />
    </span>
  );
};

/* ══════════════════════════════════════════
   COMPONENT
   ══════════════════════════════════════════ */
const IntegrationsOrbitSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  // Split headline into words for rack-focus effect
  const headlineWords = 'Connect BiasSense with your stack.'.split(' ');

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: 'clamp(60px, 8vh, 100px) 24px',
        overflow: 'hidden',
        isolation: 'isolate',
      }}
    >
      {/* ── Dot grid background ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: EASE }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(79, 70, 229, 0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 80%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* ── Ambient floating orbs ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2, ease: EASE }}
        className="int-orb int-orb-1"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2, ease: EASE, delay: 0.3 }}
        className="int-orb int-orb-2"
        aria-hidden="true"
      />

      {/* ── Main two-column grid ── */}
      <div className="int-main-grid" style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ═══════ LEFT COLUMN ═══════ */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}
          >
            <span className="int-eyebrow-dot" aria-hidden="true" />
            <span style={{
              fontSize: '11px',
              fontWeight: 500,
              color: INDIGO,
              textTransform: 'uppercase',
              letterSpacing: '3px',
            }}>
              Integrations
            </span>
          </motion.div>

          {/* Headline — word-by-word rack-focus */}
          <h2 style={{
            fontSize: 'clamp(30px, 3.6vw, 38px)',
            fontWeight: 500,
            color: '#0F172A',
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}>
            {headlineWords.map((word, i) => {
              const isAccent = word.replace(/[^a-zA-Z]/g, '').toLowerCase() === 'stack';
              return (
                <span key={i}>
                  <motion.span
                    initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
                    animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.25 + i * 0.08 }}
                    style={{
                      display: 'inline-block',
                      color: isAccent ? INDIGO : undefined,
                    }}
                  >
                    {word}
                  </motion.span>
                  {i < headlineWords.length - 1 ? ' ' : ''}
                </span>
              );
            })}
          </h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: EASE, delay: 0.9 }}
            style={{
              fontSize: '15px',
              fontWeight: 400,
              color: '#64748B',
              lineHeight: 1.65,
              maxWidth: '460px',
              marginBottom: '28px',
            }}
          >
            BiasSense plugs into the tools your data, engineering, and compliance teams already use — no rip-and-replace, just drop-in fairness intelligence.
          </motion.p>

          {/* ── Chip grid ── */}
          <div className="int-chip-grid">
            {integrations.map((it, i) => (
              <motion.div
                key={it.name}
                className="int-chip"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE, delay: 1.4 + i * 0.05 }}
                whileHover={{ y: -2, borderColor: 'rgba(79, 70, 229, 0.2)', backgroundColor: 'rgba(79, 70, 229, 0.03)' }}
              >
                <ChipLogo name={it.name} color={it.color} />
                <span className="int-chip-name">{it.name}</span>
              </motion.div>
            ))}
            {/* +40 more chip */}
            <motion.div
              className="int-chip int-chip-more"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 1.4 + integrations.length * 0.05 }}
              whileHover={{ y: -2 }}
            >
              <span className="int-chip-dot" style={{ background: INDIGO }} />
              <span className="int-chip-name" style={{ color: INDIGO }}>+40 more</span>
            </motion.div>
          </div>
        </div>

        {/* ═══════ RIGHT COLUMN — ORBIT ═══════ */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '10%' }}>
          <div className="int-orbit-stage">

            {/* SVG layer: rings, connections, travelers */}
            <svg className="int-orbit-svg" viewBox="0 0 500 500" aria-hidden="true">
              <defs>
                <linearGradient id="intLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(79,70,229,0)" />
                  <stop offset="50%" stopColor="rgba(79,70,229,0.25)" />
                  <stop offset="100%" stopColor="rgba(79,70,229,0)" />
                </linearGradient>
              </defs>

              {/* Orbit rings */}
              {[
                { r: 110, cls: 'int-ring-1' },
                { r: 170, cls: 'int-ring-2' },
                { r: 220, cls: 'int-ring-3' },
              ].map((ring) => (
                <motion.circle
                  key={ring.r}
                  cx={CX} cy={CY} r={ring.r}
                  fill="none"
                  stroke="rgba(79, 70, 229, 0.10)"
                  strokeDasharray="2 4"
                  className={ring.cls}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1.2, ease: EASE, delay: 0.6 }}
                />
              ))}

              {/* Connection lines */}
              {planets.map((p, i) => {
                const rad = (p.angle * Math.PI) / 180;
                const r = ringRadii[p.ring];
                const ex = CX + r * Math.cos(rad);
                const ey = CY + r * Math.sin(rad);
                const len = Math.sqrt((ex - CX) ** 2 + (ey - CY) ** 2);
                return (
                  <motion.line
                    key={`conn-${i}`}
                    x1={CX} y1={CY} x2={ex} y2={ey}
                    stroke="url(#intLineGrad)"
                    strokeWidth={1}
                    strokeDasharray={len}
                    initial={{ strokeDashoffset: len }}
                    animate={isInView ? { strokeDashoffset: 0 } : {}}
                    transition={{ duration: 1.2, ease: EASE, delay: 0.8 + i * 0.08 }}
                  />
                );
              })}

              {/* Traveling pulse dots */}
              {travelerIndices.map((pi, ti) => {
                const p = planets[pi];
                const rad = (p.angle * Math.PI) / 180;
                const r = ringRadii[p.ring];
                const ex = CX + r * Math.cos(rad);
                const ey = CY + r * Math.sin(rad);
                return (
                  <circle key={`trav-${ti}`} r="3" fill={INDIGO} opacity="0">
                    <animateMotion
                      path={`M${CX},${CY} L${ex},${ey}`}
                      dur="2.5s"
                      repeatCount="indefinite"
                      begin={`${2 + ti * 1.2}s`}
                      calcMode="spline"
                      keySplines="0.22 1 0.36 1"
                      keyTimes="0;1"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;0.8;0.8;0"
                      keyTimes="0;0.1;0.7;1"
                      dur="2.5s"
                      repeatCount="indefinite"
                      begin={`${2 + ti * 1.2}s`}
                    />
                  </circle>
                );
              })}
            </svg>

            {/* Center node */}
            <motion.div
              className="int-center-node"
              initial={{ scale: 0, x: '-50%', y: '-50%' }}
              animate={isInView ? { scale: 1, x: '-50%', y: '-50%' } : { x: '-50%', y: '-50%' }}
              transition={{ duration: 0.8, ease: CENTER_EASE, delay: 0.7 }}
            >
              <Cpu size={28} color={INDIGO} strokeWidth={1.5} />
              <span style={{ fontSize: '11px', fontWeight: 500, color: INDIGO, letterSpacing: '0.03em' }}>BiasSense</span>
            </motion.div>

            {/* Sonar rings */}
            {[0, 1, 2].map((i) => (
              <div
                key={`sonar-${i}`}
                className={`int-sonar ${isInView ? 'int-sonar-active' : ''}`}
                style={{ animationDelay: `${i * 1}s` }}
                aria-hidden="true"
              />
            ))}

            {/* Planet pills */}
            {planets.map((p, i) => {
              const rad = (p.angle * Math.PI) / 180;
              const r = ringRadii[p.ring];
              const px = 50 + (r / 500) * 100 * Math.cos(rad);
              const py = 50 + (r / 500) * 100 * Math.sin(rad);
              const floatDur = 6 + (i % 3) * 0.5;
              const floatDelay = (i * 0.6).toFixed(1);
              const isHovered = hoveredPlanet === i;

              return (
                <motion.div
                  key={`planet-${i}`}
                  className="int-planet"
                  style={{
                    left: `${px}%`,
                    top: `${py}%`,
                    borderColor: isHovered ? p.color : undefined,
                    boxShadow: isHovered ? '0 8px 24px rgba(0,0,0,0.08)' : undefined,
                    zIndex: isHovered ? 20 : 8,
                    animation: isInView ? `intBreathe ${floatDur}s ${floatDelay}s ease-in-out infinite` : 'none',
                  }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={isInView ? { opacity: 1, scale: isHovered ? 1.08 : 1 } : {}}
                  transition={{ duration: 0.6, ease: EASE, delay: 1.0 + i * 0.1 }}
                  onMouseEnter={() => setHoveredPlanet(i)}
                  onMouseLeave={() => setHoveredPlanet(null)}
                >
                  <PlanetLogo name={p.name} color={p.color} />
                  <span className="int-planet-name">{p.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
         SCOPED STYLES
         ══════════════════════════════════════════ */}
      <style>{`
        /* ── Ambient orbs ── */
        .int-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          z-index: 0;
        }
        .int-orb-1 {
          width: 420px; height: 420px;
          background: rgba(79, 70, 229, 0.09);
          top: -5%; left: -5%;
          animation: intFloatA 16s ease-in-out infinite;
        }
        .int-orb-2 {
          width: 380px; height: 380px;
          background: rgba(20, 184, 166, 0.07);
          bottom: -10%; right: -8%;
          animation: intFloatB 18s ease-in-out infinite;
        }

        @keyframes intFloatA {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(18px, -14px); }
        }
        @keyframes intFloatB {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-16px, 12px); }
        }

        /* ── Eyebrow dot ── */
        .int-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${INDIGO};
          animation: intPulseDot 3s ease-in-out infinite;
        }
        @keyframes intPulseDot {
          0%, 100% { opacity: 0.4; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        /* ── Main grid ── */
        .int-main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        /* ── Chip grid ── */
        .int-chip-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .int-chip {
          display: flex;
          align-items: center;
          gap: 7px;
          background: #FFFFFF;
          border: 0.5px solid rgba(0, 0, 0, 0.07);
          border-radius: 8px;
          padding: 8px 10px;
          cursor: default;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      background-color 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .int-chip-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .int-chip:hover .int-chip-dot { transform: scale(1.3); }

        .int-chip-logo {
          width: 16px; height: 16px;
          object-fit: contain;
          flex-shrink: 0;
          border-radius: 3px;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .int-chip:hover .int-chip-logo { transform: scale(1.15); }

        .int-chip-name {
          font-size: 12.5px;
          font-weight: 500;
          color: #0F172A;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .int-chip-more {
          background: rgba(79, 70, 229, 0.08);
          border-color: rgba(79, 70, 229, 0.12);
        }

        /* ── Orbit stage ── */
        .int-orbit-stage {
          position: relative;
          width: 100%;
          max-width: 500px;
          aspect-ratio: 1 / 1;
        }

        .int-orbit-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        /* Orbit ring rotations */
        .int-ring-1 { animation: intSpinCW 100s linear infinite; transform-origin: 250px 250px; }
        .int-ring-2 { animation: intSpinCCW 80s linear infinite; transform-origin: 250px 250px; }
        .int-ring-3 { animation: intSpinCW 60s linear infinite; transform-origin: 250px 250px; }

        @keyframes intSpinCW { to { transform: rotate(360deg); } }
        @keyframes intSpinCCW { to { transform: rotate(-360deg); } }

        /* ── Center node ── */
        .int-center-node {
          position: absolute;
          top: 50%; left: 50%;
          width: 120px; height: 120px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid rgba(79, 70, 229, 0.18);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          z-index: 10;
        }

        .int-center-node::before {
          content: '';
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.08) 0%, transparent 70%);
          z-index: -1;
          pointer-events: none;
        }

        /* ── Sonar rings ── */
        .int-sonar {
          position: absolute;
          top: 50%; left: 50%;
          width: 120px; height: 120px;
          border-radius: 50%;
          border: 1px solid rgba(79, 70, 229, 0.15);
          transform: translate(-50%, -50%) scale(1);
          opacity: 0;
          pointer-events: none;
          z-index: 5;
        }

        .int-sonar-active {
          animation: intSonar 3s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }

        @keyframes intSonar {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
        }

        /* ── Planet pills ── */
        .int-planet {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 6px;
          background: #FFFFFF;
          border: 0.5px solid rgba(0, 0, 0, 0.07);
          border-radius: 20px;
          padding: 6px 12px 6px 6px;
          white-space: nowrap;
          cursor: default;
          transform: translate(-50%, -50%);
          transition: border-color 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .int-planet-icon {
          width: 26px; height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .int-planet-icon-logo {
          background: #FFFFFF;
          border: 0.5px solid rgba(0, 0, 0, 0.08);
          padding: 4px;
          overflow: hidden;
        }

        .int-planet-logo-img {
          width: 16px; height: 16px;
          object-fit: contain;
        }

        .int-planet-name {
          font-size: 12px;
          font-weight: 500;
          color: #0F172A;
        }

        @keyframes intBreathe {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-6px); }
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .int-main-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .int-chip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .int-orbit-stage {
            max-width: 360px !important;
          }
        }

        @media (max-width: 480px) {
          .int-orbit-stage { max-width: 300px !important; }
          .int-center-node { width: 90px !important; height: 90px !important; }
          .int-sonar { width: 90px !important; height: 90px !important; }
          .int-planet { padding: 5px 9px 5px 5px; }
          .int-planet-name { font-size: 11px; }
          .int-planet-icon { width: 22px; height: 22px; }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .int-orb, .int-eyebrow-dot, .int-sonar,
          .int-ring-1, .int-ring-2, .int-ring-3, .int-planet {
            animation: none !important;
          }
          .int-sonar { display: none; }
        }
      `}</style>
    </section>
  );
};

export default IntegrationsOrbitSection;
