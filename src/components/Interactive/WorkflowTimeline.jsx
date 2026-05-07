import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Search, Target, Brain, FileText } from 'lucide-react';

const TimelineStep = ({ number, title, description, icon: Icon, position, isExpanded, onToggle, interactiveContent }) => {
  const isLeft = position === 'left';
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: isLeft ? 'row' : 'row-reverse',
      width: '100%',
      justifyContent: 'center',
      position: 'relative',
      marginBottom: '48px',
    }} className="timeline-step">
      
      {/* Content Side */}
      <div style={{ width: '45%', display: 'flex', justifyContent: isLeft ? 'flex-end' : 'flex-start', padding: isLeft ? '0 40px 0 0' : '0 0 0 40px' }}>
        <motion.div 
          onClick={onToggle}
          style={{
            background: 'white',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid var(--border-light)',
            boxShadow: isExpanded ? '0 8px 24px rgba(15,76,140,0.12)' : '0 1px 3px rgba(0,0,0,0.05)',
            cursor: 'pointer',
            width: '100%',
            maxWidth: '400px',
            textAlign: isLeft ? 'right' : 'left'
          }}
        >
          <h3 style={{ fontSize: '24px', color: 'var(--dark-slate)', marginBottom: '12px' }}>{title}</h3>
          <p style={{ color: 'var(--text-gray)', fontSize: '16px' }}>{description}</p>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden', marginTop: '16px', borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}
              >
                {interactiveContent}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Center Connector */}
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 10
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '32px',
          background: 'var(--primary-teal)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 4px 12px rgba(0,169,157,0.3)'
        }}>
          <Icon size={32} />
        </div>
      </div>

      {/* Empty Side for alignment */}
      <div style={{ width: '45%' }}></div>

    </div>
  );
};

const WorkflowTimeline = () => {
  const [expandedStep, setExpandedStep] = useState(1);

  return (
    <div style={{ position: 'relative', margin: '48px 0', width: '100%' }} className="timeline-container">
      {/* Central Line */}
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '4px',
        background: 'var(--primary-teal)',
        zIndex: 0
      }} className="timeline-line"></div>

      <TimelineStep
        number={1}
        title="You Upload Your Dataset"
        description="Feed BiasSense a hiring decisions file, credit lending history, or patient readmission log."
        icon={Upload}
        position="left"
        isExpanded={expandedStep === 1}
        onToggle={() => setExpandedStep(expandedStep === 1 ? null : 1)}
        interactiveContent={
          <div style={{ border: '2px dashed var(--primary-teal)', padding: '20px', textAlign: 'center', borderRadius: '8px', color: 'var(--primary-teal)', fontWeight: 500 }}>
            Drop files here
          </div>
        }
      />
      <TimelineStep
        number={2}
        title="Health Check Runs"
        description="Profiles completeness, consistency, accuracy, timeliness, utilization, compliance."
        icon={Search}
        position="right"
        isExpanded={expandedStep === 2}
        onToggle={() => setExpandedStep(expandedStep === 2 ? null : 2)}
        interactiveContent={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
            {['Completeness', 'Consistency', 'Accuracy', 'Timeliness', 'Utilization', 'Compliance'].map((item, i) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '12px', width: '80px' }}>{item}</span>
                <div style={{ flex: 1, background: '#E2E8F0', height: '6px', borderRadius: '3px' }}>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={expandedStep === 2 ? { width: '100%' } : { width: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    style={{ height: '100%', background: 'var(--primary-teal)', borderRadius: '3px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        }
      />
      <TimelineStep
        number={3}
        title="Bias Analysis Executes"
        description="Measures Disparate Impact, Equal Opportunity, Label Disparity, and more."
        icon={Target}
        position="left"
        isExpanded={expandedStep === 3}
        onToggle={() => setExpandedStep(expandedStep === 3 ? null : 3)}
        interactiveContent={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'right' }}>
             <div style={{ background: '#F8FAFC', padding: '8px', borderRadius: '4px' }}>Disparate Impact: <strong>0.87</strong></div>
             <div style={{ background: '#F8FAFC', padding: '8px', borderRadius: '4px' }}>Equal Opportunity: <strong>0.92</strong></div>
             <div style={{ background: '#F8FAFC', padding: '8px', borderRadius: '4px' }}>Label Disparity: <strong>0.89</strong></div>
          </div>
        }
      />
      <TimelineStep
        number={4}
        title="Explainability Engine Reveals Why"
        description="Tells you why bias exists and generates concrete examples non-technical people understand."
        icon={Brain}
        position="right"
        isExpanded={expandedStep === 4}
        onToggle={() => setExpandedStep(expandedStep === 4 ? null : 4)}
        interactiveContent={
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ fontSize: '14px', marginBottom: '8px' }}>SHAP Values:</h4>
            <div style={{ background: '#E2E8F0', height: '24px', display: 'flex', marginBottom: '4px' }}>
              <div style={{ width: '45%', background: 'var(--risk-red)', color: 'white', fontSize: '10px', padding: '4px' }}>Emp. Duration 0.45</div>
            </div>
            <div style={{ background: '#E2E8F0', height: '24px', display: 'flex', marginBottom: '4px' }}>
              <div style={{ width: '38%', background: 'var(--primary-teal)', color: 'white', fontSize: '10px', padding: '4px' }}>Zip Code 0.38</div>
            </div>
          </div>
        }
      />
      <TimelineStep
        number={5}
        title="Evidence Scorecard Generated"
        description="Executive PDF, interactive dashboard, JSON artifact. Everything needed to defend your model legally."
        icon={FileText}
        position="left"
        isExpanded={expandedStep === 5}
        onToggle={() => setExpandedStep(expandedStep === 5 ? null : 5)}
        interactiveContent={
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <button style={{ padding: '4px 12px', border: '1px solid var(--primary-teal)', borderRadius: '4px', color: 'var(--primary-teal)', fontSize: '12px' }}>PDF</button>
            <button style={{ padding: '4px 12px', border: '1px solid var(--primary-teal)', borderRadius: '4px', color: 'var(--primary-teal)', fontSize: '12px' }}>Dashboard</button>
            <button style={{ padding: '4px 12px', background: 'var(--primary-teal)', color: 'white', border: 'none', borderRadius: '4px', fontSize: '12px' }}>JSON</button>
          </div>
        }
      />

      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: 32px !important;
            transform: none !important;
          }
          .timeline-step {
            flex-direction: column !important;
          }
          .timeline-step > div:nth-child(1) {
            width: 100% !important;
            padding: 0 0 0 80px !important;
            justify-content: flex-start !important;
          }
          .timeline-step > div:nth-child(2) {
            left: 32px !important;
            transform: translateX(-50%) !important;
            top: 0 !important;
            bottom: auto !important;
          }
          .timeline-step > div:nth-child(3) {
            display: none !important;
          }
          .timeline-step .motion-div {
            text-align: left !important;
          }
        }
      `}</style>
    </div>
  );
};

export default WorkflowTimeline;
