import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse, Search, Brain, Lock, TrendingUp } from 'lucide-react';

const CapabilityCard = ({ icon: Icon, title, description, interactiveContent }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      style={{
        background: '#FFFFFF',
        border: '0.5px solid var(--border-light)',
        borderLeft: isHovered ? '4px solid var(--primary-teal)' : '0.5px solid var(--border-light)',
        borderRadius: '16px',
        padding: '32px 24px',
        boxShadow: isHovered ? '0 20px 40px -10px rgba(0, 169, 157, 0.15), 0 0 20px rgba(0, 169, 157, 0.1)' : '0 4px 12px rgba(0,0,0,0.03)',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        minHeight: '320px',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ color: 'var(--primary-teal)', marginBottom: '16px' }}>
        <Icon size={48} />
      </div>
      <h3 style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--dark-slate)' }}>{title}</h3>
      <p style={{ color: 'var(--text-gray)', fontSize: '14px', lineHeight: 1.5, flexGrow: 1 }}>
        {description}
      </p>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              right: '24px',
              background: '#F8FAFC',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid var(--border-light)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              zIndex: 10
            }}
          >
            {interactiveContent}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CapabilitiesCards = () => {
  return (
    <div className="capabilities-grid">
      <CapabilityCard
        icon={HeartPulse}
        title="Know Your Data's Pulse"
        description="Profile incoming data across 6 dimensions. Get a Data Health Confidence Index before any bias metric is calculated. Unhealthy data can't produce trustworthy fairness scores."
        interactiveContent={
          <div style={{ fontSize: '12px', color: 'var(--dark-slate)' }}>
            <strong>Health Score: 94%</strong>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', marginTop: '4px' }}>
              <span>Completeness: 99%</span>
              <span>Consistency: 96%</span>
              <span>Accuracy: 95%</span>
              <span>Timeliness: 100%</span>
            </div>
          </div>
        }
      />
      <CapabilityCard
        icon={Search}
        title="Find Discrimination Automatically"
        description="Measure Disparate Impact, Equal Opportunity, Statistical Parity, Label Disparity across every protected attribute. The clustering engine discovers hidden intersectional subgroups."
        interactiveContent={
          <div style={{ fontSize: '12px', color: 'var(--dark-slate)' }}>
            <strong>Bias Metrics Detected:</strong>
            <ul style={{ paddingLeft: '16px', marginTop: '4px', listStyleType: 'disc' }}>
              <li>Disparate Impact: <span style={{ color: 'var(--risk-red)' }}>0.87</span></li>
              <li>Equal Opportunity: 0.92</li>
              <li>Label Disparity: 0.89</li>
            </ul>
          </div>
        }
      />
      <CapabilityCard
        icon={Brain}
        title="Understand Why Bias Exists"
        description="SHAP shows which features drive unfair outcomes. Proxy detection identifies neutral-looking features hiding bias. Counterfactuals prove discrimination with concrete examples."
        interactiveContent={
          <div style={{ fontSize: '12px', color: 'var(--dark-slate)', fontStyle: 'italic' }}>
            "This applicant was rejected. If only their age were different—everything else identical—they'd be approved."
          </div>
        }
      />
      <CapabilityCard
        icon={Lock}
        title="Stop Biased Models Before Deploy"
        description="Physical barrier in your CI/CD pipeline. One API endpoint (/go_live_decision). Approved with signed compliance certificate or Blocked with specific reasons."
        interactiveContent={
          <div style={{ fontSize: '11px', fontFamily: 'monospace', color: 'var(--primary-blue)', background: '#E2E8F0', padding: '8px', borderRadius: '4px' }}>
            POST /go_live_decision<br />
            {`{"model_id": "credit_model_v2"}`}<br />
            <span style={{ color: 'var(--success-green)' }}>{"{status: 'APPROVED'}"}</span>
          </div>
        }
      />
      <CapabilityCard
        icon={TrendingUp}
        title="Bias Doesn't Stay Fair"
        description="Monitor production models continuously. Track drift. Alert before failure. Immutable audit trail. Cryptographically signed evidence for regulatory audits 5 years from now."
        interactiveContent={
          <div style={{ fontSize: '12px', color: 'var(--dark-slate)' }}>
            <strong>Drift Alert:</strong><br />
            Disparate Impact dropped by 4% in the last 30 days. Automated audit logged.
          </div>
        }
      />
      <style>{`
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          align-items: stretch;
        }
        @media (max-width: 1024px) {
          .capabilities-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          .capabilities-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default CapabilitiesCards;
