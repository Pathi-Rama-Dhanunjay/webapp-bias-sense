import React from 'react';
import { useView } from '../../../context/ViewContext';
import SHAPChart from '../Interactive/SHAPChart';
import { motion, AnimatePresence } from 'framer-motion';

const Explainability = () => {
  const { view } = useView();

  return (
    <section style={{
      width: '100%',
      background: '#F8FAFC',
      padding: '96px 24px',
    }}>
      <div className="container" style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '48px',
        alignItems: 'center'
      }}>
        
        {/* Left Column: Copy */}
        <div>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold', color: '#1E293B', marginBottom: '24px', letterSpacing: '-0.01em' }}>
            Explainability Engine
          </h2>
          <p className="body-large" style={{ color: '#64748B', marginBottom: '32px' }}>
            Detecting bias isn't enough. You need to know exactly which features are driving it.
          </p>

          <p style={{ color: '#64748B', lineHeight: 1.6, marginBottom: '24px' }}>
            When BiasSense detects a fairness violation, it instantly generates an explanation map. 
            We use advanced SHAP (SHapley Additive exPlanations) values to break down exactly how much 
            each feature contributed to the biased outcome.
          </p>

          <div style={{
            background: 'white',
            borderLeft: '4px solid #F59E0B',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '32px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            <h4 style={{ color: '#1E293B', margin: '0 0 8px 0' }}>The Proxy Problem</h4>
            <p style={{ fontSize: '14px', color: '#64748B', margin: 0, lineHeight: 1.6 }}>
              You removed 'Race' from your dataset, but your model is still biased. Why? 
              Because 'Zip Code' and 'Income' are acting as proxies. Our explainability engine 
              detects these hidden correlations automatically.
            </p>
          </div>

          <AnimatePresence>
            {view === 'technical' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{ overflow: 'hidden' }}
              >
                <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#1E293B', marginBottom: '16px' }}>
                  Technical Capabilities
                </h4>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ color: '#0F4C8C', fontWeight: 'bold' }}>01.</span>
                    <span style={{ color: '#64748B' }}><strong>Global vs Local Explanations:</strong> Understand model-wide behavior or drill down into a single rejected application.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ color: '#0F4C8C', fontWeight: 'bold' }}>02.</span>
                    <span style={{ color: '#64748B' }}><strong>Model Agnostic:</strong> Works with Random Forests, XGBoost, Neural Nets, or simple Logistics Regression.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ color: '#0F4C8C', fontWeight: 'bold' }}>03.</span>
                    <span style={{ color: '#64748B' }}><strong>API Integration:</strong> Return SHAP values directly via API for integration into your internal dashboards.</span>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Visual */}
        <div>
          <SHAPChart />
        </div>

      </div>
    </section>
  );
};

export default Explainability;
