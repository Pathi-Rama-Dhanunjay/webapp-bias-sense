import React from 'react';
import SolutionPageTemplate from '../../components/SolutionPageTemplate';
import { HealthcareHero } from '../../components/Solutions/IndustryHeroes';

const Healthcare = () => {
  const industryData = {
    id: 'healthcare',
    name: 'Healthcare',
    hero: {
      headline: 'Unbiased AI Healthcare: Treating All Patients Equally',
      subheadline: 'Predictive models for readmission, diagnosis, and treatment recommendations can systematically disadvantage certain patient groups. A Black patient predicted for higher readmission risk might not receive preventive care. That\'s discrimination wrapped in an algorithm.',
      keyStats: [
        'Readmission Prediction Bias: Black patients 35% higher risk prediction',
        'Despite identical clinical profiles',
        'Average Cost Impact: $50M+ per healthcare system'
      ],
      secondaryCTA: 'Download Patient Equity Guide'
    },
    heroVisual: <HealthcareHero />,
    regulatory: {
      headline: 'Healthcare AI Regulatory Landscape',
      frameworks: [
        {
          name: 'HIPAA',
          authority: 'HHS',
          year: '1996',
          requirement: 'Patient privacy & data security in electronic healthcare transactions.',
          penalty: 'Up to $1.5M per year',
          solution: 'HIPAA-compliant deployment, end-to-end encryption for patient data used in bias analysis.'
        },
        {
          name: 'Americans with Disabilities Act (ADA)',
          authority: 'DOJ',
          year: '1990',
          requirement: 'No discrimination based on disability in public accommodations and healthcare.',
          penalty: 'Up to $75,000 for first violation',
          solution: 'Disability status equity tracking in clinical decision support systems.'
        },
        {
          name: 'Title VI of Civil Rights Act',
          authority: 'Federal Agencies',
          year: '1964',
          requirement: 'No discrimination in federally-funded healthcare programs.',
          penalty: 'Loss of federal funding',
          solution: 'Race and ethnicity bias detection for hospital resource allocation models.'
        },
        {
          name: 'FDA SaMD Guidance',
          authority: 'FDA',
          year: '2023',
          requirement: 'AI algorithms in medical devices must be validated for bias and clinical safety.',
          penalty: 'Device recall or marketing ban',
          solution: 'Regulatory-grade fairness testing and signed bias validation reports.'
        }
      ]
    },
    problems: {
      headline: 'Where Healthcare AI Falls Short',
      cards: [
        {
          title: 'Racial Bias in Readmission Prediction',
          scenario: 'Hospital readmission prediction model shows Black patients 35% higher risk of readmission than white patients with identical clinical presentations.',
          rootCause: 'Model trained on historical data where Black patients received less preventive care. Model learned the bias from history, not actual risk.',
          impact: '$5B+ annual cost to US healthcare system from preventable readmissions + discrimination liability.',
          solution: 'Equal Opportunity detection identifies bias. Proxy detection identifies insurance type or zip code as race correlates.'
        },
        {
          title: 'Gender Bias in Pain Management',
          scenario: 'Pain medication algorithm recommends opioids for men at 60% rate but women at 30% rate for same pain levels.',
          rootCause: 'Training data from clinics where male pain patients received more aggressive treatment (historical bias in medicine).',
          impact: 'Women undertreated for pain. Men over-treated (opioid addiction risk). Both groups harmed.',
          solution: 'Statistical Parity detection flags gender disparity. Counterfactuals prove: "Woman with man\'s pain profile gets 50% lower recommendation."'
        },
        {
          title: 'Age Bias in Treatment Recommendations',
          scenario: 'Cardiac intervention model recommends aggressive treatment for 45-year-olds at 80% rate but only 20% for 75-year-olds.',
          rootCause: 'Model trained to optimize outcomes; older patients have higher surgical risk, so model learns a conservative approach that becomes discrimination.',
          impact: 'Older patients denied beneficial treatments due to age alone.',
          solution: 'Age equity monitoring flags discriminatory thresholds. Clinical thresholds adjusted to be age-neutral.'
        }
      ]
    },
    solution: {
      headline: 'The BiasSense Solution for Healthcare',
      steps: [
        {
          title: 'Data Health Assessment',
          status: 'success',
          details: [
            'Upload 5 years of readmission data (100K+ records)',
            'Missing data by race: 8% (detected)',
            'Historical bias signal: DETECTED'
          ],
          result: 'Data quality issues identified as contributing to bias'
        },
        {
          title: 'Bias Detection',
          details: [
            'Equal Opportunity Ratio (Black vs White): 0.65 (CRITICAL)',
            'Positive Predictive Value disparity: 35%'
          ],
          result: 'Model systematically over-predicts for Black patients'
        },
        {
          title: 'Root Cause Analysis',
          details: [
            'SHAP: Insurance type (0.35), Hospital location (0.32)',
            'Proxy: Insurance type correlated with race (0.58)',
            'Insight: Model learned system bias, not clinical risk'
          ]
        },
        {
          title: 'Fairness-Constrained Remediation',
          details: [
            'Adjust Model: Constrain Equal Opportunity >= 0.85',
            'Retrain with fairness constraints',
            'Result: Equal Opportunity improves to 0.88'
          ],
          result: 'Clinically valid model with fair calibration'
        },
        {
          title: 'Deployment & Clinical Monitoring',
          status: 'success',
          details: [
            'Enforcement gate blocks non-compliant models',
            'Monthly fairness audits for clinical teams',
            'Continuous monitoring of patient outcomes'
          ]
        }
      ]
    },
    metrics: {
      headline: 'Proven Impact: Equitable Care Metrics',
      cards: [
        {
          title: 'Readmission Risk Accuracy',
          metric: '0.65 → 0.88',
          details: 'Impact: Equalized calibration across patient races\nResult: Fair allocation of preventive interventions\nEquity Gap: Reduced from 35% to 8%'
        },
        {
          title: 'Diagnostic Accuracy',
          metric: '93% Unbiased',
          details: 'Comparison: 95% biased vs 93% unbiased\nClinical Significance: Fair diagnosis worth 2% accuracy loss\nImproved health outcomes for underserved groups'
        },
        {
          title: 'Cost Avoidance',
          metric: '$2.6B/Year',
          details: 'US Healthcare Savings: 10% improvement in readmission fairness\nROI: 1000%+ in first year for major hospital systems\nDirect reduction in Medicare penalties'
        },
        {
          title: 'Liability Reduction',
          metric: 'Zero Claims',
          details: 'Risk avoided: $50M+ per system potential liability\nRegulatory Speed: 6x faster FDA/CMS audit trail\nFull transparency for hospital boards'
        }
      ]
    },
    compliance: {
      headline: 'Healthcare Compliance Framework Alignment',
      rows: [
        { framework: 'HIPAA', requirement: 'Patient privacy in AI systems', coverage: 'End-to-end encryption, access logs', status: 'Full' },
        { framework: 'ADA', requirement: 'No disability discrimination', coverage: 'Disability equity monitoring', status: 'Full' },
        { framework: 'Title VI', requirement: 'Race/ethnicity equity in federally-funded care', coverage: 'Race bias detection, counterfactuals', status: 'Full' },
        { framework: 'CMS Guidelines', requirement: 'Algorithmic fairness in clinical support', coverage: 'Pre-deployment fairness validation', status: 'Full' },
        { framework: 'FDA SaMD', requirement: 'AI model validation for bias', coverage: 'Regulatory-grade testing, signed certificates', status: 'Full' }
      ]
    },
    caseStudy: {
      headline: 'A Major Hospital\'s Transition to Equitable AI',
      profile: {
        'Company': 'Major US Healthcare System',
        'Industry': 'Clinical Operations',
        'Models': 'Readmission Prediction',
        'Timeline': '6 Weeks Implementation'
      },
      results: [
        'Equal Opportunity Ratio: 0.65 → 0.88',
        'Cost Saved (Litigation): $50M+',
        'Audit Speed: 12 weeks (vs 26 weeks)'
      ],
      narrative: [
        {
          title: 'The Challenge',
          content: 'A major hospital system discovered that their readmission model was flagging Black patients at a 35% higher rate than white patients with the same clinical history. This led to unequal allocation of post-discharge nursing care.'
        },
        {
          title: 'The Solution',
          content: 'BiasSense identified that insurance type was acting as a proxy for socioeconomic status and race. By retraining the model with fairness constraints and removing high-correlation proxies, the system achieved near-parity.'
        },
        {
          title: 'The Impact',
          content: 'The hospital now uses BiasSense for all clinical AI. They avoided potential civil rights litigation and received a "best-in-class" rating for patient equity in their latest CMS review.'
        }
      ],
      quote: {
        text: 'This wasn\'t about political correctness. It was about safety. Black patients were being systematically over-predicted for readmission, which meant they weren\'t getting preventive care. With BiasSense, we proved it and fixed it.',
        author: 'Chief Medical Officer',
        role: 'Major US Healthcare System'
      }
    },
    cta: {
      headline: 'Healthcare AI That Regulators & Patients Can Trust',
      subheadline: 'Ensure your diagnostic and operational AI models are fair, compliant, and clinically safe with BiasSense.',
      primary: 'Schedule Healthcare Demo',
      secondary: 'Download Patient Equity Guide',
      footnote: 'HIPAA compliant deployment. Compatible with Epic, Cerner, and major EHRs.'
    },
    related: [
      { id: 'financial-services', icon: '💰', name: 'Financial Services', description: 'Learn how banks ensure lending fairness', link: '/solutions/financial-services' },
      { id: 'hiring', icon: '💼', name: 'Hiring & HR', description: 'Discover fair recruitment at scale', link: '/solutions/hiring' },
      { id: 'public-sector', icon: '🏛️', name: 'Public Sector', description: 'Explore algorithmic justice in government', link: '/solutions/public-sector' }
    ]
  };

  return <SolutionPageTemplate industryData={industryData} />;
};

export default Healthcare;
