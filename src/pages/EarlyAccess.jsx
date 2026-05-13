import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Clock3 } from 'lucide-react';

const EarlyAccess = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="light-section"
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at 15% -10%, rgba(45, 212, 191, 0.15), transparent 45%), radial-gradient(circle at 90% 0%, rgba(59, 130, 246, 0.16), transparent 40%), #F8FAFC',
        padding: '140px 24px 80px',
      }}
    >
      <div className="container" style={{ maxWidth: '1100px' }}>
        <div
          className="early-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '20px',
            alignItems: 'stretch',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            style={{
              borderRadius: '26px',
              background: 'linear-gradient(160deg, #0B1220 0%, #0F172A 55%, #10203F 100%)',
              color: '#FFFFFF',
              padding: 'clamp(24px, 3vw, 42px)',
              border: '1px solid rgba(148,163,184,0.24)',
              boxShadow: '0 24px 60px rgba(2, 6, 23, 0.28)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#2DD4BF',
                border: '1px solid rgba(45,212,191,0.35)',
                borderRadius: '999px',
                padding: '6px 12px',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '16px',
              }}
            >
              <Sparkles size={14} /> Early Access Program
            </div>
            <h1 style={{ color: '#FFFFFF', marginBottom: '12px' }}>
              Get Early Access to BiasSense
            </h1>
            <p style={{ color: '#94A3B8', maxWidth: '650px', lineHeight: 1.7 }}>
              Join design-partner teams shaping the future of enterprise AI governance.
              Get guided onboarding, advanced fairness controls, and priority support.
            </p>

            <div style={{ display: 'grid', gap: '12px', marginTop: '26px' }}>
              {[
                'Priority onboarding with implementation guidance',
                'Early feature drops for fairness and explainability',
                'Dedicated support for risk, legal, and ML workflows',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <ShieldCheck size={18} color="#2DD4BF" style={{ marginTop: '2px' }} />
                  <span style={{ color: '#E2E8F0' }}>{item}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '24px',
                borderRadius: '14px',
                border: '1px solid rgba(148,163,184,0.25)',
                background: 'rgba(255,255,255,0.04)',
                padding: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#CBD5E1',
                fontSize: '14px',
              }}
            >
              <Clock3 size={16} color="#2DD4BF" />
              Typical review response within 1-2 business days.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            style={{
              borderRadius: '22px',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              padding: 'clamp(20px, 2.8vw, 30px)',
              boxShadow: '0 16px 35px rgba(15, 23, 42, 0.08)',
            }}
          >
            <h3 style={{ marginBottom: '8px', color: '#0F172A' }}>Request Access</h3>
            <p style={{ marginTop: 0, marginBottom: '18px', color: '#64748B' }}>
              Tell us about your use case and team.
            </p>

            {!submitted ? (
              <form onSubmit={onSubmit} style={{ display: 'grid', gap: '12px' }}>
                {[
                  { label: 'Work Email', type: 'email', name: 'email', placeholder: 'you@company.com' },
                  { label: 'Company', type: 'text', name: 'company', placeholder: 'Your company' },
                  { label: 'Role', type: 'text', name: 'role', placeholder: 'Risk Lead / ML Engineer / Legal Counsel' },
                ].map((field) => (
                  <label key={field.name} style={{ display: 'grid', gap: '6px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>{field.label}</span>
                    <input
                      required
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      style={{
                        height: '44px',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        padding: '0 12px',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </label>
                ))}

                <label style={{ display: 'grid', gap: '6px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>Primary Use Case</span>
                  <textarea
                    required
                    name="use_case"
                    placeholder="Example: fair lending model governance for ECOA readiness..."
                    rows={4}
                    style={{
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      padding: '10px 12px',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </label>

                <button
                  type="submit"
                  style={{
                    marginTop: '4px',
                    border: 'none',
                    borderRadius: '999px',
                    height: '46px',
                    background: 'linear-gradient(90deg, #0F4C8C 0%, #00A99D 100%)',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Submit Request
                </button>
              </form>
            ) : (
              <div
                style={{
                  borderRadius: '12px',
                  background: '#ECFEFF',
                  border: '1px solid #99F6E4',
                  color: '#0F766E',
                  padding: '14px',
                  fontWeight: 600,
                }}
              >
                Thanks. Your early access request has been captured.
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .early-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default EarlyAccess;
