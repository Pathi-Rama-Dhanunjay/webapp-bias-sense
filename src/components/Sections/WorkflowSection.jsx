import React from 'react';
import WorkflowTimeline from '../Interactive/WorkflowTimeline';

const WorkflowSection = () => {
  return (
    <section className="light-section" style={{ background: 'var(--light-gray)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', color: 'var(--dark-slate)', marginBottom: '48px' }}>
          The BiasSense Workflow: From Data to Evidence
        </h2>
        
        <WorkflowTimeline />
        
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ fontSize: '18px', color: 'var(--dark-slate)' }}>
            Ready to see this in action?{' '}
            <a href="/contact" style={{ color: 'var(--primary-blue)', fontWeight: 600, textDecoration: 'none' }}>
              → Book a Demo
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
