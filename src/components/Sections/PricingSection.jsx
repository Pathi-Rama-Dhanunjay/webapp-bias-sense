import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';

const PricingCard = ({ tier, price, period, description, features, cta, highlighted }) => {
  return (
    <div style={{
      background: '#FFFFFF',
      border: highlighted ? '2px solid var(--primary-teal)' : '1px solid var(--border-light)',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: highlighted ? '0 8px 24px rgba(0,169,157,0.15)' : '0 1px 3px rgba(0,0,0,0.05)',
      transform: highlighted ? 'translateY(-8px) scale(1.02)' : 'none',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      zIndex: highlighted ? 10 : 1
    }}>
      {highlighted && (
        <div style={{
          position: 'absolute',
          top: '-12px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--primary-teal)',
          color: 'white',
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: 600
        }}>
          Most Popular
        </div>
      )}
      <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--dark-slate)' }}>{tier}</div>
      <div style={{ margin: '12px 0', display: 'flex', alignItems: 'baseline' }}>
        <span style={{ fontSize: '40px', fontWeight: 700, color: 'var(--primary-blue)' }}>{price}</span>
        {period && <span style={{ fontSize: '16px', color: 'var(--text-gray)', marginLeft: '4px' }}>{period}</span>}
      </div>
      <div style={{ fontSize: '14px', color: 'var(--text-gray)', marginBottom: '24px' }}>{description}</div>
      
      <ul style={{ flexGrow: 1, marginBottom: '24px' }}>
        {features.map((feat, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px', fontSize: '14px', color: 'var(--dark-slate)' }}>
            <Check size={16} color="var(--primary-teal)" style={{ marginRight: '8px', marginTop: '2px', flexShrink: 0 }} />
            <span>{feat}</span>
          </li>
        ))}
      </ul>
      
      <button 
        onClick={() => window.location.href = '/contact'}
        style={{
          width: '100%',
          padding: '14px',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: 600,
          color: highlighted ? 'white' : 'var(--primary-blue)',
          background: highlighted ? 'linear-gradient(90deg, var(--primary-blue) 0%, var(--primary-teal) 100%)' : 'transparent',
          border: highlighted ? 'none' : '1px solid var(--primary-blue)',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => {
          if (!highlighted) {
            e.currentTarget.style.background = 'var(--primary-blue)';
            e.currentTarget.style.color = 'white';
          } else {
            e.currentTarget.style.opacity = 0.9;
          }
        }}
        onMouseLeave={(e) => {
          if (!highlighted) {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--primary-blue)';
          } else {
            e.currentTarget.style.opacity = 1;
          }
        }}
      >
        {cta}
      </button>
    </div>
  );
};

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginBottom: '12px' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: isOpen ? '16px 16px 8px 16px' : '16px',
          background: '#FFFFFF',
          border: '1px solid var(--border-light)',
          borderRadius: isOpen ? '8px 8px 0 0' : '8px',
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--dark-slate)' }}>{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={20} color="var(--text-gray)" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--border-light)',
              borderTop: 'none',
              borderRadius: '0 0 8px 8px',
              padding: '0 20px 20px 20px',
              fontSize: '14px',
              color: 'var(--text-gray)',
              lineHeight: 1.6
            }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingSection = () => {
  const faqs = [
    { q: "What's included in the Growth tier?", a: "The Growth tier includes up to 10 models, full bias analysis, basic scorecard generation, and access to the deployment gate API." },
    { q: "Can I upgrade plans anytime?", a: "Yes, you can upgrade your plan at any time. We'll prorate the difference for the remainder of your billing cycle." },
    { q: "Do you offer discounts for annual billing?", a: "We offer a 20% discount on all plans when billed annually instead of monthly." },
    { q: "Is there a free trial?", a: "Yes, we offer a 14-day full-featured free trial with no credit card required." },
    { q: "What support do I get?", a: "Growth includes email support. Professional includes priority support and Slack integration. Enterprise gets a dedicated Customer Success Manager." },
    { q: "Can I deploy on-premises?", a: "On-premises and VPC deployment options are available exclusively on the Enterprise tier." }
  ];

  return (
    <section className="light-section" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', color: 'var(--dark-slate)', marginBottom: '48px' }}>
          Simple, Transparent Pricing
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '24px',
          alignItems: 'center',
          marginBottom: '32px'
        }}>
          <PricingCard 
            tier="Growth"
            price="$2,000"
            period="/month"
            description="For mid-market teams getting started"
            features={[
              "Up to 10 models",
              "Full bias analysis",
              "Basic scorecard",
              "Deployment gate API",
              "Email alerts"
            ]}
            cta="Book a Demo"
          />
          <PricingCard 
            tier="Professional"
            price="$8,000"
            period="/month"
            description="For growing enterprises"
            features={[
              "Unlimited models",
              "Industry compliance pack",
              "Full scorecard exports",
              "Monitoring & drift detection",
              "Slack integration"
            ]}
            cta="Book a Demo"
            highlighted={true}
          />
          <PricingCard 
            tier="Enterprise"
            price="Custom"
            period="ACV"
            description="For regulated organizations"
            features={[
              "Multi-vertical compliance packs",
              "Regulatory co-pilot",
              "Custom taxonomies",
              "On-prem/VPC deployment",
              "Dedicated CSM"
            ]}
            cta="Contact Sales"
          />
        </div>

        <div style={{
          background: '#F0FFFE',
          borderLeft: '4px solid var(--primary-teal)',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '800px',
          margin: '32px auto 48px',
          color: 'var(--primary-blue)',
          fontSize: '14px',
          lineHeight: 1.8
        }}>
          <p style={{ margin: 0 }}>📄 <strong>Per-Report Revenue:</strong> $500/regulatory audit report</p>
          <p style={{ margin: 0 }}>📊 <strong>Shadow Analysis:</strong> $50/dataset scan</p>
          <p style={{ margin: 0 }}>📈 <strong>Benchmark Access:</strong> Premium tier data access</p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '24px', color: 'var(--dark-slate)' }}>Frequently Asked Questions</h3>
          {faqs.map((faq, i) => (
            <FAQAccordion key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
