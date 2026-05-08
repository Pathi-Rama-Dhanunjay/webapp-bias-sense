import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Landmark, Activity, Users, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  {
    id: 'financial-services',
    name: 'Financial Services',
    icon: <Landmark size={32} />,
    description: 'Ensure ECOA & FHA compliance with real-time disparate impact monitoring and proxy detection.',
    href: '/solutions/financial-services',
    color: 'var(--finance-accent)'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: <Activity size={32} />,
    description: 'Eliminate clinical bias in diagnostic and readmission models to deliver equitable patient outcomes.',
    href: '/solutions/healthcare',
    color: 'var(--healthcare-accent)'
  },
  {
    id: 'hiring',
    name: 'Hiring & HR',
    icon: <Users size={32} />,
    description: 'Build a fair recruitment funnel that exceeds EEOC standards while identifying high-potential talent.',
    href: '/solutions/hiring',
    color: 'var(--hiring-accent)'
  },
  {
    id: 'public-sector',
    name: 'Public Sector',
    icon: <Scale size={32} />,
    description: 'Implement algorithmic justice in benefit allocation and risk assessments for transparent governance.',
    href: '/solutions/public-sector',
    color: 'var(--public-sector-accent)'
  }
];

const SolutionSection = () => {
  return (
    <section id="solutions" style={{
      background: 'linear-gradient(to bottom, var(--dark-slate), #0F172A)',
      color: '#FFFFFF',
      padding: '120px 24px'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 6vh, 48px)' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              color: 'var(--primary-teal)', 
              fontSize: 'clamp(32px, 5vw, 48px)', 
              marginBottom: '12px',
              fontWeight: 800,
              letterSpacing: '-0.02em'
            }}
          >
            One Platform. Industry-Specific Excellence.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="body-large"
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '20px'
            }}
          >
            Data health and bias detection unified into one continuous,
            evidence-generating system. Tailored for the world's most regulated industries.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: '20px'
        }}>
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={industry.href} style={{ textDecoration: 'none' }}>
                <motion.div
                  whileHover={{ y: -10, borderColor: industry.color }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '18px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div style={{
                    color: industry.color,
                    marginBottom: '16px',
                    background: 'rgba(255,255,255,0.05)',
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    {industry.icon}
                  </div>
                  <h3 style={{ fontSize: '16px', marginBottom: '8px', color: '#FFFFFF' }}>{industry.name}</h3>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.6)', 
                    lineHeight: 1.4,
                    marginBottom: '16px',
                    flex: 1
                  }}>
                    {industry.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: industry.color,
                    fontWeight: 700,
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Learn More <ArrowRight size={14} />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div style={{
          background: 'linear-gradient(90deg, rgba(15, 76, 140, 0.2), rgba(0, 169, 157, 0.2))',
          borderLeft: '4px solid var(--primary-teal)',
          padding: '24px',
          borderRadius: '12px',
          maxWidth: '750px',
          margin: 'clamp(32px, 6vh, 50px) auto 0',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <p style={{
            fontSize: '16px',
            fontWeight: 500,
            color: 'var(--primary-teal)',
            textAlign: 'center',
            fontStyle: 'italic',
            margin: 0,
            lineHeight: 1.6
          }}>
            "Data health is the confidence interval on your bias measurement.
            Every bias score carries reliability attached.
            That's how you turn opinion into evidence."
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
