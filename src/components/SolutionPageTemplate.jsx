import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronRight, ArrowRight, CheckCircle2, AlertCircle, Play, Download, Building2, ShieldCheck, BarChart3, Users2, Scale, ArrowLeftRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const SolutionPageTemplate = ({ industryData }) => {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Analytics: Page View
    if (window.gtag) {
      window.gtag('event', 'solutions_page_view', {
        industry: industryData.id,
        page: 'solutions'
      });
    }
    window.scrollTo(0, 0);
  }, [industryData.id]);

  const handleCTA = (buttonName) => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        button_name: buttonName,
        industry: industryData.id
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="solution-page" style={{ backgroundColor: '#FFFFFF', color: 'var(--dark-slate)' }}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          backgroundColor: `var(--${industryData.id === 'hiring' ? 'hiring-accent' : industryData.id === 'financial-services' ? 'finance-accent' : industryData.id === 'healthcare' ? 'healthcare-accent' : 'public-sector-accent'})`,
          zIndex: 1000,
          transformOrigin: '0%'
        }}
      />

      {/* Navigation & Switcher Overlay */}
      <div className="container" style={{ paddingTop: '100px', paddingBottom: '0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '16px' }}>
          <nav className="breadcrumbs" style={{ fontSize: '12px', color: 'var(--text-gray)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={12} />
            <span>Solutions</span>
            <ChevronRight size={12} />
            <span style={{ color: `var(--${industryData.id === 'hiring' ? 'hiring-accent' : industryData.id === 'financial-services' ? 'finance-accent' : industryData.id === 'healthcare' ? 'healthcare-accent' : 'public-sector-accent'})`, fontWeight: 600 }}>{industryData.name}</span>
          </nav>

          <div className="industry-switcher" style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
            {['financial-services', 'healthcare', 'hiring', 'public-sector'].map(id => (
              <Link 
                key={id}
                to={`/solutions/${id}`}
                className={`switcher-btn ${industryData.id === id ? 'active' : ''}`}
                style={{
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  backgroundColor: industryData.id === id ? 'var(--primary-teal)' : 'var(--light-gray)',
                  color: industryData.id === id ? 'white' : 'var(--text-gray)',
                  whiteSpace: 'nowrap',
                  border: '1px solid transparent',
                  transition: 'all 0.2s'
                }}
              >
                {id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="hero" style={{ 
        minHeight: '70vh', 
        background: `linear-gradient(135deg, var(--${industryData.id === 'hiring' ? 'hiring-accent' : industryData.id === 'financial-services' ? 'finance-accent' : industryData.id === 'healthcare' ? 'healthcare-accent' : 'public-sector-accent'}) 0%, var(--dark-slate) 100%)`,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '80px 24px'
      }}>
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '60%',
            height: '100%',
            background: `radial-gradient(circle, var(--${industryData.id === 'hiring' ? 'hiring-accent' : industryData.id === 'financial-services' ? 'finance-accent' : industryData.id === 'healthcare' ? 'healthcare-accent' : 'public-sector-accent'}) 0%, transparent 70%)`,
            filter: 'blur(80px)',
            zIndex: 1
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', flexDirection: window.innerWidth < 1024 ? 'column' : 'row', gap: '64px', alignItems: 'center' }}>
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ flex: 1.2 }}
            >
              <div style={{
                display: 'inline-block',
                padding: '8px 16px',
                borderRadius: '20px',
                background: 'rgba(255,255,255,0.2)',
                border: '1px solid rgba(255,255,255,0.5)',
                fontSize: '12px',
                fontWeight: 700,
                marginBottom: '24px'
              }}>
                {industryData.name}
              </div>
              <h1 style={{ fontSize: 'min(56px, 10vw)', lineHeight: 1.2, marginBottom: '24px', fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>
                {industryData.hero.headline}
              </h1>
              <p className="body-large" style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '32px', maxWidth: '600px', fontSize: '18px', lineHeight: 1.6 }}>
                {industryData.hero.subheadline}
              </p>
              
              <div style={{ 
                background: 'rgba(0, 169, 157, 0.15)', 
                borderLeft: '4px solid var(--primary-teal)',
                padding: '16px 20px',
                borderRadius: '6px',
                marginBottom: '32px',
                backdropFilter: 'blur(10px)'
              }}>
                {industryData.hero.keyStats.map((stat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: i === industryData.hero.keyStats.length - 1 ? 0 : '12px' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--primary-teal)', marginTop: '2px' }} />
                    <span style={{ fontSize: '14px', lineHeight: 1.6 }}>{stat}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => handleCTA('book_demo')}
                  style={{
                    padding: '16px 32px',
                    borderRadius: '8px',
                    background: `linear-gradient(90deg, var(--primary-blue) 0%, var(--primary-teal) 100%)`,
                    color: 'white',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                  }}
                >
                  Book a Demo <ArrowRight size={20} />
                </button>
                <button 
                  style={{
                    padding: '16px 32px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.5)',
                    color: 'white',
                    fontWeight: 600,
                    background: 'transparent',
                    backdropFilter: 'blur(5px)'
                  }}
                >
                  {industryData.hero.secondaryCTA}
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ flex: 1, width: '100%' }}
            >
              {industryData.heroVisual}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Regulatory Landscape */}
      <section style={{ padding: '96px 24px' }}>
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <h2 style={{ marginBottom: '16px', fontSize: '40px' }}>{industryData.regulatory.headline}</h2>
            <div style={{ width: '80px', height: '4px', background: `var(--${industryData.id === 'hiring' ? 'hiring-accent' : industryData.id === 'financial-services' ? 'finance-accent' : industryData.id === 'healthcare' ? 'healthcare-accent' : 'public-sector-accent'})`, margin: '0 auto' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            {industryData.regulatory.frameworks.map((framework, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  padding: '32px', 
                  borderRadius: '12px', 
                  backgroundColor: 'white', 
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `var(--${industryData.id === 'hiring' ? 'hiring-accent' : industryData.id === 'financial-services' ? 'finance-accent' : industryData.id === 'healthcare' ? 'healthcare-accent' : 'public-sector-accent'})`;
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
                }}
              >
                <div style={{ color: `var(--${industryData.id === 'hiring' ? 'hiring-accent' : industryData.id === 'financial-services' ? 'finance-accent' : industryData.id === 'healthcare' ? 'healthcare-accent' : 'public-sector-accent'})`, marginBottom: '16px' }}><ShieldCheck size={40} /></div>
                <h3 style={{ fontSize: '18px', marginBottom: '4px', fontWeight: 700 }}>{framework.name}</h3>
                <div style={{ fontSize: '12px', color: 'var(--text-gray)', fontWeight: 500, marginBottom: '12px' }}>{framework.authority} | Enacted: {framework.year}</div>
                <p style={{ fontSize: '14px', color: 'var(--dark-slate)', marginBottom: '16px', lineHeight: 1.6 }}>{framework.requirement}</p>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--risk-red)', marginBottom: '16px' }}>Penalty: {framework.penalty}</div>
                <div style={{ 
                  background: 'rgba(0, 169, 157, 0.05)', 
                  padding: '12px', 
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: 'var(--primary-teal)',
                  border: '1px solid rgba(0, 169, 157, 0.1)',
                  lineHeight: 1.5
                }}>
                  <strong style={{ display: 'block', marginBottom: '4px' }}>What BiasSense Does:</strong> {framework.solution}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Common Bias Problems */}
      <section style={{ padding: '96px 24px', backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <h2 style={{ marginBottom: '16px', fontSize: '40px' }}>{industryData.problems.headline}</h2>
            <div style={{ width: '80px', height: '4px', background: 'var(--risk-red)', margin: '0 auto' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            {industryData.problems.cards.map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                style={{ 
                  background: 'white', 
                  borderRadius: '8px', 
                  overflow: 'hidden', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  borderLeft: '6px solid var(--risk-red)'
                }}
              >
                <div style={{ padding: '32px' }}>
                  <h3 style={{ fontSize: '20px', marginBottom: '24px', fontWeight: 700 }}>{card.title}</h3>
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--risk-red)', textTransform: 'uppercase', marginBottom: '8px' }}>The Scenario</div>
                    <p style={{ fontSize: '14px', color: 'var(--text-gray)', lineHeight: 1.6 }}>{card.scenario}</p>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--risk-red)', textTransform: 'uppercase', marginBottom: '8px' }}>Root Cause</div>
                    <p style={{ fontSize: '14px', color: 'var(--text-gray)', lineHeight: 1.6 }}>{card.rootCause}</p>
                  </div>
                  <div style={{ background: 'rgba(220, 38, 38, 0.05)', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--risk-red)', textTransform: 'uppercase', marginBottom: '4px' }}>Financial Impact</div>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--risk-red)' }}>{card.impact}</div>
                  </div>
                  <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '20px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary-teal)', textTransform: 'uppercase', marginBottom: '8px' }}>How BiasSense Catches It</div>
                    <p style={{ fontSize: '14px', color: 'var(--dark-slate)', lineHeight: 1.6 }}>{card.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How BiasSense Solves Them (Timeline/Flow) */}
      <section style={{ padding: '96px 24px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '40px' }}>{industryData.solution.headline}</h2>
          </div>

          <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
            {industryData.solution.steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ marginBottom: '40px' }}
              >
                <div style={{ 
                  background: 'white', 
                  padding: '32px', 
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
                }}>
                  <h3 style={{ fontSize: '20px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 700 }}>
                    <span style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '50%', 
                      background: 'var(--primary-blue)', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '14px'
                    }}>{i + 1}</span>
                    {step.title}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '44px' }}>
                    {step.details.map((detail, j) => (
                      <div key={j} style={{ 
                        fontSize: '14px', 
                        color: 'var(--text-gray)', 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '8px'
                      }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-teal)', marginTop: '6px', flexShrink: 0 }} />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Real-World Impact Metrics */}
      <section style={{ padding: '96px 24px', background: 'linear-gradient(135deg, var(--dark-slate) 0%, #0F172A 100%)', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ color: 'white', fontSize: '40px' }}>{industryData.metrics.headline}</h2>
            <div style={{ width: '80px', height: '4px', background: 'var(--primary-teal)', margin: '16px auto' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
            {industryData.metrics.cards.map((card, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  padding: '40px', 
                  borderRadius: '12px', 
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>{card.title}</div>
                <div style={{ fontSize: '40px', fontWeight: 800, color: 'var(--primary-teal)', marginBottom: '24px' }}>{card.metric}</div>
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '8px' }}>
                  <pre style={{ 
                    fontFamily: 'monospace', 
                    fontSize: '13px', 
                    lineHeight: 1.6, 
                    whiteSpace: 'pre-wrap',
                    color: 'rgba(255,255,255,0.8)',
                    margin: 0
                  }}>
                    {card.details}
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Compliance Framework Alignment */}
      <section style={{ padding: '96px 24px' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '64px', fontSize: '40px' }}>{industryData.compliance.headline}</h2>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--primary-blue)', color: 'white' }}>
                  <th style={{ padding: '20px', textAlign: 'left' }}>Regulatory Framework</th>
                  <th style={{ padding: '20px', textAlign: 'left' }}>Key Requirement</th>
                  <th style={{ padding: '20px', textAlign: 'left' }}>BiasSense Coverage</th>
                  <th style={{ padding: '20px', textAlign: 'center' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {industryData.compliance.rows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border-light)', backgroundColor: i % 2 === 0 ? 'white' : 'var(--light-gray)' }}>
                    <td style={{ padding: '20px', fontWeight: 700, color: 'var(--primary-blue)' }}>{row.framework}</td>
                    <td style={{ padding: '20px', fontSize: '14px' }}>{row.requirement}</td>
                    <td style={{ padding: '20px', fontSize: '14px' }}>{row.coverage}</td>
                    <td style={{ padding: '20px', textAlign: 'center' }}>
                      <span style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '6px', 
                        padding: '6px 12px', 
                        background: 'rgba(16, 185, 129, 0.1)', 
                        color: 'var(--success-green)',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 700
                      }}>
                        <CheckCircle2 size={14} /> {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Customer Success Story */}
      <section style={{ padding: '96px 24px', backgroundColor: '#E6F1FB' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: window.innerWidth < 1024 ? 'column' : 'row', gap: '64px' }}>
            <div style={{ flex: 1 }}>
              <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ width: '120px', height: '80px', background: 'var(--light-gray)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <Building2 size={40} color="var(--primary-blue)" />
                </div>
                <h3 style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--primary-blue)', fontWeight: 700 }}>Company Profile</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {Object.entries(industryData.caseStudy.profile).map(([key, value], i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-gray)', textTransform: 'uppercase' }}>{key}</span>
                      <span style={{ fontSize: '14px', fontWeight: 600 }}>{value}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: 'var(--primary-blue)', color: 'white', padding: '24px', borderRadius: '8px', borderLeft: '6px solid var(--primary-teal)' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px' }}>Results Achieved</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {industryData.caseStudy.results.map((result, i) => (
                      <div key={i} style={{ fontSize: '14px', display: 'flex', gap: '8px' }}>
                        <CheckCircle2 size={16} color="var(--primary-teal)" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ flex: 1.5 }}>
              <h3 style={{ fontSize: '28px', marginBottom: '24px', fontWeight: 700 }}>{industryData.caseStudy.headline}</h3>
              {industryData.caseStudy.narrative.map((section, i) => (
                <div key={i} style={{ marginBottom: '32px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--primary-blue)', textTransform: 'uppercase', marginBottom: '8px' }}>{section.title}</h4>
                  <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--dark-slate)' }}>{section.content}</p>
                </div>
              ))}
              <div style={{ marginTop: '48px', padding: '32px', background: 'white', borderRadius: '12px', borderLeft: `8px solid var(--${industryData.id === 'hiring' ? 'hiring-accent' : industryData.id === 'financial-services' ? 'finance-accent' : industryData.id === 'healthcare' ? 'healthcare-accent' : 'public-sector-accent'})`, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <p style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: 1.6, color: 'var(--primary-blue)', marginBottom: '16px' }}>
                  "{industryData.caseStudy.quote.text}"
                </p>
                <div style={{ fontWeight: 700, fontSize: '16px' }}>— {industryData.caseStudy.quote.author}</div>
                <div style={{ fontSize: '14px', color: 'var(--text-gray)' }}>{industryData.caseStudy.quote.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Industry CTA */}
      <section style={{ 
        padding: '96px 24px', 
        background: `linear-gradient(135deg, var(--${industryData.id === 'hiring' ? 'hiring-accent' : industryData.id === 'financial-services' ? 'finance-accent' : industryData.id === 'healthcare' ? 'healthcare-accent' : 'public-sector-accent'}) 0%, var(--dark-slate) 100%)`,
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '40px', marginBottom: '24px' }}>{industryData.cta.headline}</h2>
          <p className="body-large" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto 40px' }}>
            {industryData.cta.subheadline}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => handleCTA(`book_demo_${industryData.id}`)}
              style={{
                padding: '16px 32px',
                borderRadius: '8px',
                background: 'var(--primary-teal)',
                color: 'white',
                fontWeight: 700,
                fontSize: '16px'
              }}
            >
              {industryData.cta.primary}
            </button>
            <button 
              style={{
                padding: '16px 32px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.5)',
                color: 'white',
                fontWeight: 600,
                fontSize: '16px',
                background: 'transparent'
              }}
            >
              {industryData.cta.secondary}
            </button>
          </div>
          <div style={{ marginTop: '24px', fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
            {industryData.cta.footnote}
          </div>
        </div>
      </section>

      {/* 9. Related Resources */}
      <section style={{ padding: '96px 24px' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '64px', fontSize: '40px' }}>Explore Other Industries</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {industryData.related.map((item, i) => (
              <Link key={i} to={item.link} style={{ textDecoration: 'none' }}>
                <div style={{ 
                  padding: '32px', 
                  background: 'white', 
                  borderRadius: '12px', 
                  border: '1px solid var(--border-light)',
                  height: '100%',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = `var(--${item.id === 'hiring' ? 'hiring-accent' : item.id === 'financial-services' ? 'finance-accent' : item.id === 'healthcare' ? 'healthcare-accent' : 'public-sector-accent'})`}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-light)'}
                >
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--dark-slate)', fontWeight: 700 }}>{item.name}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-gray)', lineHeight: 1.5 }}>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionPageTemplate;
