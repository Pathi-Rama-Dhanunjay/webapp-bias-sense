import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Cpu, CheckCircle } from 'lucide-react';

const ProblemCard = ({ icon: Icon, title, description, missing }) => {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(15,76,140,0.12)' }}
      style={{
        background: '#FFFFFF',
        border: '1px solid var(--border-light)',
        borderRadius: '12px',
        padding: '32px',
        textAlign: 'center',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px', color: 'var(--primary-teal)' }}>
        <Icon size={48} />
      </div>
      <h3 style={{ marginBottom: '12px', color: 'var(--dark-slate)' }}>{title}</h3>
      <p style={{ color: 'var(--text-gray)', marginBottom: '24px' }}>{description}</p>
      <p style={{ color: 'var(--risk-red)', fontSize: '14px', fontWeight: 500 }}>
        {missing}
      </p>
    </motion.div>
  );
};

const ProblemSection = () => {
  return (
    <section className="light-section" style={{ background: 'var(--light-gray)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', color: 'var(--dark-slate)', marginBottom: '48px' }}>
          Every Organization Faces the Same Fragmented Reality
        </h2>
        <p className="body-large" style={{
          textAlign: 'center',
          color: 'var(--text-gray)',
          maxWidth: '600px',
          margin: '0 auto 48px'
        }}>
          Your teams aren't talking. Your tools aren't connected.
          Your model can pass every check and still be deeply biased.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '24px'
        }}>
          <ProblemCard
            icon={BarChart2}
            title="Data Quality Team"
            description="Checks data quality"
            missing="❌ Doesn't know about bias"
          />
          <ProblemCard
            icon={Cpu}
            title="ML Team"
            description="Builds the model"
            missing="❌ Doesn't see data problems"
          />
          <ProblemCard
            icon={CheckCircle}
            title="Compliance Team"
            description="Ensures compliance"
            missing="❌ Can't see the full picture"
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
