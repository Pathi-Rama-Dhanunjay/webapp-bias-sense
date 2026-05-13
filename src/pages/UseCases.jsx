import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Landmark, Activity, Shield, ShoppingCart, Users, 
  Scale, GraduationCap, Home, Briefcase, Truck, 
  ChevronRight, ArrowRight, CheckCircle2, TrendingUp, AlertTriangle
} from 'lucide-react';

const industriesData = [
  {
    id: 'finance',
    name: 'Finance & Consumer Credit',
    icon: <Landmark />,
    overview: { size: '$2.3T', detail1: '100M+ decisions/yr', detail2: '5,000+ lenders' },
    problem: {
      title: 'Fair Lending Compliance',
      risk: 'FCRA, ECOA, and Fair Housing Act regulations demand fairness. Violations result in massive settlements (e.g., $267M for auto loan pricing, $3B for unfair practices).',
      impact: 'Average fine is $50-300M. 40% of banks audited have undetected bias, with Black applicants historically 80% more likely to be denied than white applicants with similar profiles.'
    },
    solution: [
      'Ingests loan application data and decision histories',
      'Calculates Disparate Impact and Equal Opportunity',
      'Identifies proxy features creating demographic disparities',
      'Generates ECOA-compliant explanations for every decision'
    ],
    scenario: {
      title: 'Credit Card Approval Model',
      problem: 'Female applicants approved at 65% vs men at 72% due to a "job stability" feature penalizing women for caregiving gaps. 150,000 women affected annually. Potential $100M+ fine.',
      action: 'Identified the proxy feature, rebalanced the model for fairness, and implemented real-time tracking.',
      result: 'Approval disparity reduced from 7% to <2% (ECOA compliant). Prevented a $200M+ regulatory penalty and restored customer trust.'
    },
    stats: [
      { label: 'Avg Settlement Cost', value: '$85M' },
      { label: 'Detection Time (BiasSense)', value: '24-48 hrs' },
      { label: 'Models with Undetected Bias', value: '45-55%' }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Patient Care',
    icon: <Activity />,
    overview: { size: '$4.8T', detail1: '2.6M readmissions/yr', detail2: '6,000+ hospitals' },
    problem: {
      title: 'Healthcare Disparities & Readmissions',
      risk: 'Section 1557 of ACA and CMS penalize hospitals up to 3% of revenue for preventable readmissions. Biased models lead to unequal care and worse health outcomes.',
      impact: 'Black patients have 1.5x higher readmission rates. Disparities cost the system $300B+ annually. Joint Commission requires strict equity assessment.'
    },
    solution: [
      'Analyzes readmission predictions across demographic groups',
      'Ensures equal False Positive/Negative rates across populations',
      'Explains clinical factors driving predictions via SHAP',
      'Provides clinical intervention recommendations'
    ],
    scenario: {
      title: 'Hospital Readmission Prediction',
      problem: 'Model underestimated risk for Black (18% readmission) and Hispanic (16%) patients compared to White patients (12%), causing underserved groups to miss intensive follow-ups.',
      action: 'Identified disparities in prediction accuracy, equalized false positive rates, and launched an equity dashboard for clinicians.',
      result: 'Readmission rates equalized (13-14% across all groups). Prevented 400+ minority readmissions annually, saving $6-8M and ensuring Section 1557 compliance.'
    },
    stats: [
      { label: 'CMS Penalty Risk', value: '3% Revenue' },
      { label: 'Cost of Disparities', value: '$300B+/yr' },
      { label: 'AI Clinical Bias Rate', value: '70%+' }
    ]
  },
  {
    id: 'insurance',
    name: 'Insurance & Underwriting',
    icon: <Shield />,
    overview: { size: '$1.4T', detail1: '500M+ claims/yr', detail2: '150M+ policies/yr' },
    problem: {
      title: 'Discriminatory Pricing & Claims Denial',
      risk: 'Fair Housing Act and GLBA prohibit redlining and disparate treatment. Location-based pricing often acts as a proxy for race, inflating premiums by 20-40%.',
      impact: 'Settlement costs range from $50-200M per case. Minority neighborhoods experience 15-25% higher homeowners insurance denial rates.'
    },
    solution: [
      'Audits pricing models for protected class discrimination',
      'Analyzes proxy variables (location, zip code, occupation)',
      'Ensures claims are paid fairly across all groups',
      'Generates regulatory-ready audit documentation'
    ],
    scenario: {
      title: 'Homeowners Pricing Model',
      problem: 'Minority neighborhoods charged 15-18% premium vs 8% in majority areas for the same risk. Zip code and property age acted as illegal racial proxies.',
      action: 'Audited pricing engine, removed discriminatory proxies, and rebased pricing without sacrificing actuarial soundness.',
      result: 'Premium disparity eliminated. $120M refunded to customers, achieving full regulatory compliance and avoiding a $300M+ penalty.'
    },
    stats: [
      { label: 'Redlining Settlements', value: '$100-200M' },
      { label: 'Premium Gap (Minorities)', value: '30-50%' },
      { label: 'Minority Overpayment', value: '$20B+/yr' }
    ]
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    icon: <ShoppingCart />,
    overview: { size: '$6.5T', detail1: '2B+ daily txns', detail2: '1M+ merchants' },
    problem: {
      title: 'Algorithmic Pricing & Recommendations',
      risk: 'Dynamic algorithms inadvertently charge different prices based on location profiles or steer lower-quality products to certain demographics.',
      impact: 'Class action exposure of $100-500M. 20-30% traffic reduction and severe brand damage post-scandal. Minority customers overpay billions globally.'
    },
    solution: [
      'Audits dynamic pricing algorithms for demographic parity',
      'Analyzes recommendation systems for product quality bias',
      'Ensures equal treatment in promotions and discounts',
      'Real-time monitoring of transaction fairness'
    ],
    scenario: {
      title: 'E-commerce Dynamic Pricing',
      problem: 'Algorithm charged 3-5% higher prices in minority zip codes and steered White customers to premium products (84%) vs Black customers (12%).',
      action: 'Removed location proxies, equalized pricing rules across customer segments, and implemented fairness guardrails on recommendations.',
      result: 'Price parity achieved within 1%. Revenue from minority customers increased 15-20% due to better product visibility. Avoided FTC action.'
    },
    stats: [
      { label: 'Minority Premium', value: '3-5%' },
      { label: 'Recommendation Bias', value: '40-60%' },
      { label: 'Scandal Churn Rate', value: '15-20%' }
    ]
  },
  {
    id: 'hr',
    name: 'HR & Recruitment',
    icon: <Users />,
    overview: { size: '$800B', detail1: '60M+ hires/yr', detail2: '10,000+ AI tools' },
    problem: {
      title: 'Algorithmic Bias in Hiring',
      risk: 'Title VII of Civil Rights Act and EEOC 80% Rule. AI screening tools systematically disadvantage women, minorities, and older candidates.',
      impact: 'Women receive 40% fewer callbacks; "White-sounding" names get 50% more. 60% of companies fail diversity goals. Class action lawsuits cost $500M+.'
    },
    solution: [
      'Audits resume screening for protected class discrimination',
      'Examines automated interview scoring for fairness',
      'Monitors the entire hiring funnel for EEOC compliance',
      'Analyzes compensation for equal pay violations'
    ],
    scenario: {
      title: 'Technical Recruitment Funnel',
      problem: 'AI screening approved men at 25% but women at 15%. The model penalized "experience gaps," which disproportionately affected female candidates.',
      action: 'Audited the model, identified the proxy, and re-weighted features to value recent skill acquisition over continuous tenure.',
      result: 'Callback rates equalized at 20%. Increased women in interviews by 58%. Achieved EEOC compliance and diversity targets.'
    },
    stats: [
      { label: 'Callback Gap (Gender)', value: '40%' },
      { label: 'EEOC Settlement Avg', value: '$50-100M' },
      { label: 'Failing Diversity Goals', value: '60%' }
    ]
  },
  {
    id: 'criminal-justice',
    name: 'Criminal Justice',
    icon: <Scale />,
    overview: { size: 'National', detail1: '10M+ arrests/yr', detail2: '18,000+ agencies' },
    problem: {
      title: 'Predictive Policing & Sentencing',
      risk: 'Risk assessment tools routinely over-predict recidivism for minorities and under-predict for white defendants, compounding historical policing biases.',
      impact: 'Black defendants suffer a 45% false positive high-risk rate vs 23% for white defendants. Leads to a 13-year average sentencing gap and massive systemic injustice.'
    },
    solution: [
      'Audits risk assessment algorithms for racial bias',
      'Analyzes sentencing recommendations for disparities',
      'Identifies feedback loops in predictive policing data',
      'Generates court-admissible fairness reports'
    ],
    scenario: {
      title: 'Risk Assessment in Sentencing',
      problem: 'Tool labeled 55% of Black defendants as high-risk vs 25% of White defendants, despite actual recidivism being 40% for both. Caused 3-5 excess years per sentence.',
      action: 'Audited the tool, removed biased predictors like neighborhood/education proxies, and implemented fairness constraints.',
      result: 'False positive rates dropped from 55% to 28% for minorities. Sentencing disparity reduced from a 30% gap to a 5% gap. Restored public trust.'
    },
    stats: [
      { label: 'False Positive (Black)', value: '45%' },
      { label: 'Incarceration Disparity', value: '5-6x' },
      { label: 'Biased Tools Identified', value: '137+' }
    ]
  },
  {
    id: 'education',
    name: 'Education & Admissions',
    icon: <GraduationCap />,
    overview: { size: '$2T', detail1: '70M+ students', detail2: '135,000+ schools' },
    problem: {
      title: 'Student Assessment & Admissions',
      risk: 'Algorithms replicate historical admission biases (legacy, geography). Standardized testing models exhibit cultural and socioeconomic disparities.',
      impact: 'Creates a 15-20% lower college completion rate for minorities, leading to a $200,000+ lifetime earnings gap per student.'
    },
    solution: [
      'Audits admissions algorithms for cultural/geographic bias',
      'Examines special education referrals for over-identification',
      'Monitors advanced course placement for equitable access',
      'Identifies systemic barriers to student advancement'
    ],
    scenario: {
      title: 'College Admissions Algorithm',
      problem: 'Model accepted white students at 45% and Black students at 25% by heavily weighting zip code and legacy status. 1,000+ qualified minorities rejected yearly.',
      action: 'Rebalanced model to account for opportunity gaps, removed biased proxy variables, and implemented fairness constraints.',
      result: 'Admissions rate equalized (40-45% across all groups). Diversity enrollment hit 30% target. Unlocked $2B+ in lifetime earnings for the cohort.'
    },
    stats: [
      { label: 'Enrollment Gap', value: '20-30%' },
      { label: 'Lifetime Earnings Gap', value: '$200k+' },
      { label: 'Lost Productive Capacity', value: '$2T+' }
    ]
  },
  {
    id: 'mortgage',
    name: 'Mortgage & Real Estate',
    icon: <Home />,
    overview: { size: '$12T', detail1: '3-4M mortgages/yr', detail2: '8,000+ lenders' },
    problem: {
      title: 'Modern Redlining & Discrimination',
      risk: 'Fair Housing Act and ECOA heavily penalize discrimination. Minority denial rates are 2-3x higher, and they face 0.5-1.0% higher interest rates.',
      impact: 'Costs minorities $150k-200k extra over 30 years. Results in $500B+ systemic wealth loss and major DOJ investigations (e.g., $335M settlements).'
    },
    solution: [
      'Audits underwriting algorithms for demographic fairness',
      'Analyzes interest rate pricing for discrimination',
      'Examines appraisal bias in property valuations',
      'Monitors for fair lending violations in real-time'
    ],
    scenario: {
      title: 'Mortgage Underwriting Engine',
      problem: 'Approved White applicants at 75%, Black applicants at 48%. Debt-to-income and employment stability were weighted in ways that penalized minorities.',
      action: 'Rebalanced criteria, equalized interest rate pricing mechanisms, and addressed appraisal biases through automated independent reviews.',
      result: 'Approval rates equalized to 70-75% for all groups. Created 30,000+ new homeowners annually. Avoided a $200-500M regulatory penalty.'
    },
    stats: [
      { label: 'Denial Rate Disparity', value: '2-3x' },
      { label: 'Annual Systemic Loss', value: '$7.5-10B' },
      { label: 'Appraisal Bias', value: '10-20% lower' }
    ]
  },
  {
    id: 'employment',
    name: 'Workforce Management',
    icon: <Briefcase />,
    overview: { size: '$10T+', detail1: '160M workers', detail2: '70% use AI tools' },
    problem: {
      title: 'Bias in Performance, Pay & Advancement',
      risk: 'AI performance management tools consistently rate minorities 10-20% lower for the same work. Women earn 82 cents on the dollar. Promotion gaps widen.',
      impact: '$500+ billion annually in lost wages. 30-40% higher turnover in majority groups due to discrimination. Equal Pay Act violation fines hit $50-200M.'
    },
    solution: [
      'Audits performance rating systems for manager/algorithmic bias',
      'Analyzes compensation algorithms for equal pay violations',
      'Monitors termination and promotion disparities',
      'Real-time tracking of workforce equity metrics'
    ],
    scenario: {
      title: 'Performance & Compensation System',
      problem: 'AI rating system scored women at 3.2 vs men at 3.6 for the same roles, driving a 12-15% pay gap and creating $250M+ in annual pay disparity.',
      action: 'Audited ratings, removed rater bias, equalized standards, and adjusted compensation for historical underpayment.',
      result: 'Rating disparity eliminated. Pay equity achieved within 2%. Saved $50M+ in turnover costs and avoided a massive $500M+ class action.'
    },
    stats: [
      { label: 'Gender Wage Gap', value: '82 cents/$1' },
      { label: 'Promotion Gap Delay', value: '30-50%' },
      { label: 'Annual Wage Gap Total', value: '$500B+' }
    ]
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain & Logistics',
    icon: <Truck />,
    overview: { size: '$2T', detail1: '1M+ suppliers', detail2: '60% use AI' },
    problem: {
      title: 'Supplier Selection & Pricing Bias',
      risk: 'Algorithms favor established majority-owned companies, while minority suppliers face 5x higher fraud false positives and 30-day longer payment terms.',
      impact: 'Companies fail supplier diversity mandates (hitting 8% instead of 30% targets). Minority suppliers lose $1-2 billion annually in revenue.'
    },
    solution: [
      'Audits supplier selection algorithms for bias',
      'Analyzes pricing and payment terms for discrimination',
      'Examines fraud detection systems for false positives by demographic',
      'Tracks and enforces supplier diversity compliance'
    ],
    scenario: {
      title: 'Procurement Selection Engine',
      problem: 'Minority suppliers selected at 12% vs 35% for majority peers. They also faced 60-day payment terms vs 30-day terms, starving their cash flow.',
      action: 'Rebalanced selection algorithm, equalized pricing terms, and calibrated fraud detection to reduce bias against diverse suppliers.',
      result: 'Diverse supplier spend grew from 8% to 28% ($2.8B). False positives dropped 80%. Unlocked $200M+ in value through diverse innovation.'
    },
    stats: [
      { label: 'Selection Disparity', value: '2-3x lower' },
      { label: 'Payment Term Penalty', value: '+30 days' },
      { label: 'Fraud False Positives', value: '5x higher' }
    ]
  }
];

const UseCases = () => {
  const [activeTab, setActiveTab] = useState(industriesData[0].id);
  const activeData = industriesData.find(i => i.id === activeTab);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="use-cases-page" style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <section className="hero-section" style={{
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '216px',
        paddingBottom: '72px',
        paddingLeft: '24px',
        paddingRight: '24px',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        marginBottom: '64px',
      }}>
        {/* Atmospheric Dark Surface */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(1200px 600px at 10% -10%, rgba(45, 212, 191, 0.12), transparent 60%), radial-gradient(900px 500px at 90% 0%, rgba(59, 130, 246, 0.12), transparent 55%), linear-gradient(180deg, #020617 0%, #081125 55%, #020617 100%)',
          zIndex: 0,
        }}>
          <svg
            style={{ width: '100%', height: '100%', opacity: 0.45 }}
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 1440 800"
          >
            <defs>
              <radialGradient id="uc-center-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="uc-grid-line" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.03" />
              </linearGradient>
            </defs>
            <circle cx="720" cy="400" r="500" fill="url(#uc-center-glow)" />
            <g stroke="url(#uc-grid-line)" strokeWidth="1">
              {Array.from({ length: 22 }).map((_, i) => (
                <line key={`v-${i}`} x1={i * 70} y1="0" x2={i * 70} y2="800" />
              ))}
              {Array.from({ length: 14 }).map((_, i) => (
                <line key={`h-${i}`} x1="0" y1={i * 62} x2="1440" y2={i * 62} />
              ))}
            </g>
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'inline-flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(249, 115, 22, 0.1)',
              border: '1px solid rgba(45, 212, 191, 0.35)',
              padding: 'clamp(6px, 1vh, 12px) clamp(16px, 1.5vw, 24px)',
              borderRadius: '30px',
              marginBottom: 'clamp(38px, 5.7vh, 69px)',
              fontSize: 'clamp(13px, 1vw, 18px)',
              fontWeight: 600,
              color: '#2DD4BF',
              letterSpacing: '0.5px',
              backdropFilter: 'blur(8px)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 10px 30px rgba(0,0,0,0.2)'
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#2DD4BF',
                display: 'inline-block',
              }}
            />
            Industry Use Cases
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(32px, 4.5vw, 79px)',
              lineHeight: 1.15,
              fontFamily: '"Roboto Slab", "Rockwell", "Courier New", Courier, serif',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: 'clamp(28px, 4.6vh, 55px)'
            }}
          >
            Algorithmic Bias Happens Everywhere.<br />
            <span style={{ color: '#E2E8F0', fontWeight: 800 }}>BiasSense Fixes It.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="body-large"
            style={{
              color: '#94A3B8',
              maxWidth: 'clamp(600px, 45vw, 900px)',
              margin: '0 auto',
              fontSize: 'clamp(16px, 1.8vw, 24px)',
              lineHeight: 1.6
            }}
          >
            From financial lending and healthcare readmissions to recruitment and supply chain logic. 
            Explore how top enterprises use BiasSense to ensure fairness, transparency, and compliance across 10 major industries.
          </motion.p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="container" style={{ display: 'flex', flexDirection: 'column', gap: '48px', paddingBottom: '96px' }}>
        
        <div className="layout-grid" style={{ display: 'grid', gap: '48px', alignItems: 'start' }}>
          
          {/* Sidebar / Tabs */}
          <div className="sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'sticky', top: '120px' }}>
            {industriesData.map((industry) => {
              const isActive = activeTab === industry.id;
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveTab(industry.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: isActive ? '1px solid #0F4C8C' : '1px solid transparent',
                    background: isActive ? '#FFFFFF' : 'transparent',
                    color: isActive ? '#0F172A' : '#64748B',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '15px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.05)' : 'none'
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = 'rgba(15, 76, 140, 0.05)' }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
                >
                  <div style={{ color: isActive ? '#0F4C8C' : '#94A3B8' }}>
                    {React.cloneElement(industry.icon, { size: 20 })}
                  </div>
                  {industry.name}
                  {isActive && <ChevronRight size={18} style={{ marginLeft: 'auto', color: '#0F4C8C' }} />}
                </button>
              )
            })}
          </div>

          {/* Content Area */}
          <div className="content-area" style={{ minHeight: '600px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
              >
                {/* Header Stats */}
                <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <div style={{ background: '#E6F1FB', color: '#0F4C8C', padding: '16px', borderRadius: '12px' }}>
                      {React.cloneElement(activeData.icon, { size: 32 })}
                    </div>
                    <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0F172A', margin: 0 }}>{activeData.name}</h2>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px', paddingTop: '24px', borderTop: '1px solid #F1F5F9' }}>
                    <div>
                      <p style={{ fontSize: '13px', color: '#64748B', margin: '0 0 4px 0', textTransform: 'uppercase', fontWeight: 600 }}>Market Size</p>
                      <p style={{ fontSize: '24px', color: '#0F4C8C', fontWeight: 700, margin: 0 }}>{activeData.overview.size}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '13px', color: '#64748B', margin: '0 0 4px 0', textTransform: 'uppercase', fontWeight: 600 }}>Scale</p>
                      <p style={{ fontSize: '20px', color: '#0F172A', fontWeight: 600, margin: 0 }}>{activeData.overview.detail1}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '13px', color: '#64748B', margin: '0 0 4px 0', textTransform: 'uppercase', fontWeight: 600 }}>Reach</p>
                      <p style={{ fontSize: '20px', color: '#0F172A', fontWeight: 600, margin: 0 }}>{activeData.overview.detail2}</p>
                    </div>
                  </div>
                </div>

                {/* Problem vs Solution */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="problem-solution-grid">
                  <div style={{ background: '#FFF1F2', border: '1px solid #FFE4E6', padding: '32px', borderRadius: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#E11D48', marginBottom: '16px', fontWeight: 700 }}>
                      <AlertTriangle size={20} /> The Problem
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#881337', marginBottom: '12px' }}>{activeData.problem.title}</h3>
                    <p style={{ fontSize: '15px', color: '#9F1239', marginBottom: '16px', lineHeight: 1.6 }}><strong>Risk:</strong> {activeData.problem.risk}</p>
                    <p style={{ fontSize: '15px', color: '#9F1239', margin: 0, lineHeight: 1.6 }}><strong>Impact:</strong> {activeData.problem.impact}</p>
                  </div>

                  <div style={{ background: '#F0FFFE', border: '1px solid #CCFBF1', padding: '32px', borderRadius: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00A99D', marginBottom: '16px', fontWeight: 700 }}>
                      <CheckCircle2 size={20} /> BiasSense Solution
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {activeData.solution.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: '#115E59', lineHeight: 1.5 }}>
                          <ArrowRight size={16} style={{ marginTop: '3px', flexShrink: 0, color: '#14B8A6' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Real World Scenario */}
                <div style={{ background: '#0F172A', color: '#FFFFFF', padding: '40px', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0, 169, 157, 0.2) 0%, transparent 70%)', filter: 'blur(40px)' }} />
                  <h3 style={{ fontSize: '14px', color: '#00A99D', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', fontWeight: 700 }}>Real-World Scenario</h3>
                  <h4 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px' }}>{activeData.scenario.title}</h4>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative', zIndex: 1 }}>
                    <div>
                      <p style={{ color: '#94A3B8', fontSize: '13px', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>Discovery</p>
                      <p style={{ fontSize: '16px', lineHeight: 1.6, margin: 0 }}>{activeData.scenario.problem}</p>
                    </div>
                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }} />
                    <div>
                      <p style={{ color: '#94A3B8', fontSize: '13px', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>Action Plan</p>
                      <p style={{ fontSize: '16px', lineHeight: 1.6, margin: 0 }}>{activeData.scenario.action}</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.05)', borderLeft: '4px solid #00A99D', padding: '16px 20px', borderRadius: '0 8px 8px 0' }}>
                      <p style={{ color: '#00A99D', fontSize: '13px', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>Outcome</p>
                      <p style={{ fontSize: '16px', fontWeight: 600, margin: 0 }}>{activeData.scenario.result}</p>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                  {activeData.stats.map((stat, i) => (
                    <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
                      <div style={{ color: '#0F4C8C', marginBottom: '12px', display: 'flex', justifyContent: 'center' }}><TrendingUp size={24} /></div>
                      <p style={{ fontSize: '28px', fontWeight: 800, color: '#0F172A', margin: '0 0 8px 0' }}>{stat.value}</p>
                      <p style={{ fontSize: '14px', color: '#64748B', margin: 0, fontWeight: 500 }}>{stat.label}</p>
                    </div>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Global Impact Summary */}
      <section style={{ background: '#0F172A', padding: '96px 24px', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, marginBottom: '16px' }}>The Global Scale of Algorithmic Bias</h2>
          <p style={{ color: '#94A3B8', fontSize: '20px', marginBottom: '64px', maxWidth: '700px', margin: '0 auto 64px' }}>Every major industry faces algorithmic bias challenges. The financial, legal, and social costs are enormous.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginBottom: '64px' }}>
            <div style={{ padding: '32px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ fontSize: '48px', fontWeight: 800, color: '#00A99D', margin: '0 0 16px 0' }}>$50T+</p>
              <p style={{ fontSize: '16px', color: '#E2E8F0', margin: 0 }}>Total Affected Market Size</p>
            </div>
            <div style={{ padding: '32px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ fontSize: '48px', fontWeight: 800, color: '#00A99D', margin: '0 0 16px 0' }}>$2-5B</p>
              <p style={{ fontSize: '16px', color: '#E2E8F0', margin: 0 }}>Annual Regulatory Fines</p>
            </div>
            <div style={{ padding: '32px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ fontSize: '48px', fontWeight: 800, color: '#00A99D', margin: '0 0 16px 0' }}>500M+</p>
              <p style={{ fontSize: '16px', color: '#E2E8F0', margin: 0 }}>People Affected Globally</p>
            </div>
            <div style={{ padding: '32px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ fontSize: '48px', fontWeight: 800, color: '#00A99D', margin: '0 0 16px 0' }}>50-70%</p>
              <p style={{ fontSize: '16px', color: '#E2E8F0', margin: 0 }}>Audited Companies With Bias</p>
            </div>
          </div>

          {/* ROI Timeline CTA */}
          <div style={{ background: 'linear-gradient(135deg, #0F4C8C 0%, #00A99D 100%)', padding: '48px', borderRadius: '24px', textAlign: 'left', display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h3 style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>Implementation & Rapid ROI</h3>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', lineHeight: 1.6 }}>
                Move from reactive risk to proactive governance. BiasSense delivers payback in days to weeks by preventing massive regulatory penalties and saving hundreds of hours of manual audit time.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '16px', fontWeight: 500 }}><CheckCircle2 size={20} color="#FFFFFF" /> <b>Phase 1:</b> Audit & identify bias hot spots</li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '16px', fontWeight: 500 }}><CheckCircle2 size={20} color="#FFFFFF" /> <b>Phase 2:</b> Rebalance & implement monitoring</li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '16px', fontWeight: 500 }}><CheckCircle2 size={20} color="#FFFFFF" /> <b>Phase 3:</b> Continuous real-time tracking</li>
              </ul>
              <button 
                onClick={() => window.location.href = '/early-access'}
                style={{ background: '#FFFFFF', color: '#0F4C8C', padding: '16px 32px', borderRadius: '8px', fontSize: '16px', fontWeight: 700, border: 'none', cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}
              >
                Early Access
              </button>
            </div>
            <div style={{ flex: '1 1 300px', background: 'rgba(0,0,0,0.2)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ fontSize: '20px', color: '#FFFFFF', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '12px' }}>Enterprise ROI Example</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>Avoided Regulatory Fines</span>
                <span style={{ fontWeight: 700 }}>$50-200M</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>Litigation Cost Prevention</span>
                <span style={{ fontWeight: 700 }}>$100-300M</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>Customer Retention Value</span>
                <span style={{ fontWeight: 700 }}>$50-100M</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
                <span style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '20px' }}>Total ROI</span>
                <span style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '20px' }}>$250-700M+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .layout-grid {
          grid-template-columns: 300px 1fr;
        }
        @media (max-width: 1024px) {
          .layout-grid {
            grid-template-columns: 250px 1fr;
            gap: 32px !important;
          }
        }
        @media (max-width: 768px) {
          .layout-grid {
            grid-template-columns: 1fr;
          }
          .sidebar {
            position: relative !important;
            top: 0 !important;
          }
          .problem-solution-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default UseCases;

