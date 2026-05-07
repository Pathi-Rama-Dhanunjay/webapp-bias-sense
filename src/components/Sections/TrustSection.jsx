import React from 'react';
import { Shield, Users, ClipboardCheck } from 'lucide-react';

const TrustCard = ({ icon: Icon, title, features }) => (
  <div style={{
    background: '#FFFFFF',
    border: '1px solid var(--border-light)',
    borderRadius: '12px',
    padding: '32px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
  }}>
    <div style={{ color: 'var(--primary-teal)', marginBottom: '16px' }}>
      <Icon size={48} />
    </div>
    <h3 style={{ fontSize: '24px', color: 'var(--dark-slate)', marginBottom: '24px' }}>{title}</h3>
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
      {features.map((feat, i) => (
        <li key={i} style={{ 
          fontSize: '14px', 
          color: 'var(--text-gray)', 
          marginBottom: '12px',
          lineHeight: 1.5
        }}>
          {feat}
        </li>
      ))}
    </ul>
  </div>
);

const TrustSection = () => {
  return (
    <section className="light-section" style={{ background: 'var(--light-gray)' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '24px'
        }}>
          <TrustCard 
            icon={Shield}
            title="Enterprise-Grade Security"
            features={[
              "SOC 2 Type II certified",
              "GDPR and CCPA compliant",
              "End-to-end encryption",
              "Secure deployment options"
            ]}
          />
          <TrustCard 
            icon={Users}
            title="Expert Onboarding"
            features={[
              "Dedicated implementation team",
              "API integration in days",
              "Custom taxonomy setup",
              "Hands-on training"
            ]}
          />
          <TrustCard 
            icon={ClipboardCheck}
            title="Defend With Evidence"
            features={[
              "Signed audit certificates",
              "Immutable evidence trail",
              "Auto-formatted compliance reports (ECOA, EEOC, ACA 1557)",
              "Regulatory framework alignment"
            ]}
          />
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
