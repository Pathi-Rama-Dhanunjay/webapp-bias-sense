import React from 'react';
import DriftMonitoringChart from '../Interactive/DriftMonitoringChart';

const ProductionMonitoring = () => {
  return (
    <section className="light-section" style={{
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
        
        {/* Left Column: Visual */}
        <div style={{ order: 2 }}>
          <DriftMonitoringChart />
        </div>

        {/* Right Column: Copy */}
        <div style={{ order: 1 }}>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold', color: '#1E293B', marginBottom: '24px', letterSpacing: '-0.01em' }}>
            Continuous Production Monitoring
          </h2>
          <p className="body-large" style={{ color: '#64748B', marginBottom: '32px' }}>
            Models drift. Populations change. A model that was fair yesterday might be biased tomorrow.
          </p>

          <p style={{ color: '#64748B', lineHeight: 1.6, marginBottom: '24px' }}>
            BiasSense connects directly to your live inference endpoints. We continuously monitor the 
            stream of predictions and ground-truth labels, calculating fairness metrics in real-time.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '40px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#E6F1FB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F4C8C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              </div>
              <div>
                <h4 style={{ color: '#1E293B', margin: '0 0 8px 0', fontSize: '18px' }}>Concept Drift Detection</h4>
                <p style={{ color: '#64748B', margin: 0, fontSize: '14px', lineHeight: 1.6 }}>Detects when the underlying relationship between features and the target variable changes over time.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#E6F1FB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F4C8C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </div>
              <div>
                <h4 style={{ color: '#1E293B', margin: '0 0 8px 0', fontSize: '18px' }}>Automated Alerting</h4>
                <p style={{ color: '#64748B', margin: 0, fontSize: '14px', lineHeight: 1.6 }}>Integrates with PagerDuty, Slack, and email to notify your ML ops team the second a threshold is breached.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductionMonitoring;
