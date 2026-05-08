import React from 'react';
import SolutionPageTemplate from '../../components/SolutionPageTemplate';
import { FinancialServicesHero } from '../../components/Solutions/IndustryHeroes';

const FinancialServices = () => {
  const industryData = {
    id: 'financial-services',
    name: 'Financial Services',
    hero: {
      headline: 'AI Lending That Regulators Can\'t Question',
      subheadline: 'Credit models are scrutinized harder than any other AI system. Regulators expect ECOA compliance. Plaintiffs file class actions. One biased decision can cost millions. But you can\'t fix what you can\'t see.',
      keyStats: [
        'Average Disparate Impact Improvement: 0.72 → 0.88',
        'Regulatory Audit Time: Reduced by 60%',
        'Zero Biased Models Deployed: With BiasSense enforcement'
      ],
      secondaryCTA: 'Download Lending Compliance Guide'
    },
    heroVisual: <FinancialServicesHero />,
    regulatory: {
      headline: 'The Regulatory Minefield in Lending',
      frameworks: [
        {
          name: 'Equal Credit Opportunity Act (ECOA)',
          authority: 'Federal Trade Commission (FTC)',
          year: '1974',
          requirement: 'Credit decisions cannot be based on race, color, religion, national origin, sex, marital status, age, or receipt of public assistance.',
          penalty: 'Up to $1M per violation + damages',
          solution: 'Continuous monitoring ensures ECOA compliance. Disparate Impact detection (80% threshold). Automated compliance certificate generation.'
        },
        {
          name: 'Fair Housing Act (FHA)',
          authority: 'HUD',
          year: '1968',
          requirement: 'Lending decisions for mortgages cannot discriminate on race, color, national origin, religion, sex, familial status, or disability.',
          penalty: 'Up to $19,000 per violation',
          solution: 'Mortgage models monitored for protected attribute bias. Zip code (proxy for race) detection. Counterfactuals prove non-discrimination.'
        },
        {
          name: 'Gramm-Leach-Bliley Act (GLBA)',
          authority: 'Federal Reserve, OCC',
          year: '1999',
          requirement: 'Financial institutions must implement safeguards to protect customer information and ensure model transparency.',
          penalty: '$10,000+ per day of violation',
          solution: 'Secure data handling (SOC 2 Type II certified). End-to-end encryption. Audit trails for regulatory inspection.'
        },
        {
          name: 'CFPB Fair Lending Rule',
          authority: 'CFPB',
          year: '2023',
          requirement: 'Financial institutions must monitor AI/automated decision systems for discriminatory impact on protected classes.',
          penalty: 'Up to $43,792 per violation + consumer remediation',
          solution: 'Automated monitoring with alert system. Real-time metric tracking. Pre-emptive intervention before violations occur.'
        }
      ]
    },
    problems: {
      headline: 'Where Lending Models Go Wrong',
      cards: [
        {
          title: 'Disparate Impact by Gender',
          scenario: 'A mortgage lender\'s model approves loans at 90% for men but only 72% for women. The model itself has no "gender" variable—the discrimination is indirect.',
          rootCause: 'Employment duration is correlated with gender in the dataset (women more likely to have career breaks for caregiving). The model weights employment duration heavily, creating a disparate impact.',
          impact: '$50M+ in potential ECOA litigation. FTC fine: $1-10M. Forced remediation of denied loans.',
          solution: 'Disparate Impact metric automatically calculated: 72/90 = 0.80 (critical threshold). Proxy detection identifies employment duration as correlated with gender.'
        },
        {
          title: 'Age Bias via Proxy Features',
          scenario: 'A credit card underwriting model shows systematic rejection of 60+ year old applicants at 35% rates vs 12% for 35-50 year olds.',
          rootCause: 'Credit history age (length of credit relationship) is a top predictor. Older applicants naturally have longer credit histories—but this feature becomes an age proxy.',
          impact: 'ADEA violations possible. CFPB violations. Settlements: $10-50M.',
          solution: 'SHAP shows credit_history_age as top 3 bias driver. Proxy detection algorithm correlates credit_history_age with age (0.82 correlation).'
        },
        {
          title: 'Redlining via Geography',
          scenario: 'Auto loan model rejects applicants from majority-minority neighborhoods at 5x the rate of affluent areas.',
          rootCause: 'Zip code included as feature. Model correlates zip with default risk. But zip code is a proxy for race/ethnicity.',
          impact: 'DOJ investigations. Settlement: $100M+ (precedent: CITI $20M settlement for mortgage redlining).',
          solution: 'Geographic proxy detection. Zip code correlation with race/ethnicity flagged. Disparate Impact by location calculated.'
        }
      ]
    },
    solution: {
      headline: 'The BiasSense Solution for Lending',
      steps: [
        {
          title: 'Data Health Assessment',
          status: 'success',
          details: [
            'Upload training + test dataset to BiasSense',
            'System profiles data across 6 dimensions',
            'Completeness: 94% (good)',
            'Consistency: 98% (excellent)'
          ],
          result: 'Data health score 91% (reliable for fairness analysis)'
        },
        {
          title: 'Bias Detection',
          details: [
            'Disparate Impact calculated: 0.80 (CRITICAL)',
            'Equal Opportunity ratio: 0.75 (CRITICAL)',
            'Protected attributes: Gender, Race, Age'
          ],
          result: 'Alerts triggered for gender and race thresholds'
        },
        {
          title: 'Root Cause Analysis',
          details: [
            'SHAP feature importance: Employment Duration (0.42)',
            'Proxy Detection: Employment Duration correlated with Gender (0.71)',
            'Insight: Gender discrimination is likely unintentional but embedded'
          ]
        },
        {
          title: 'Remediation & Retesting',
          details: [
            'Option A: Remove bias-driving features',
            'Option B: Apply fairness constraints during training',
            'Retest: Disparate Impact improves to 0.87 ✓'
          ],
          result: 'Model compliant while maintaining performance'
        },
        {
          title: 'Deployment Gate & Monitoring',
          status: 'success',
          details: [
            'Enforcement gate blocks non-compliant models',
            'Real-time monitoring of lending decisions',
            'Cryptographically signed compliance certificate issued'
          ]
        }
      ]
    },
    metrics: {
      headline: 'Proven Impact: Numbers from the Field',
      cards: [
        {
          title: 'Regulatory Audit Time',
          metric: '60% Reduction',
          details: 'Before BiasSense: 26 weeks\nAfter BiasSense: 10 weeks\nSavings: 16 weeks (61% reduction)\nCost impact: ~$200K saved in analyst hours'
        },
        {
          title: 'Fairness Improvement',
          metric: '0.72 → 0.88',
          details: 'Baseline Model: 0.72 (CRITICAL)\nPost-Remediation: 0.88 (COMPLIANT)\nAccuracy Impact: <2% accuracy loss for 100% compliance'
        },
        {
          title: 'Litigation Risk Mitigation',
          metric: '$50M+ Risk Avoided',
          details: 'Total exposure: $510M potential settlement\nWith BiasSense: Zero biased decisions made\nZero litigation risk achieved via enforcement gates'
        },
        {
          title: 'Customer Trust & ROI',
          metric: '+45% Trust',
          details: 'Transparency Score: +45% NPS improvement\nApproval Speed: 3x faster regulatory sign-off\nROI Year 1: 435% (Breaks even in 3 months)'
        }
      ]
    },
    compliance: {
      headline: 'Framework Alignment: From Compliance to Advantage',
      rows: [
        {
          framework: 'ECOA',
          requirement: 'No discrimination in lending decisions',
          coverage: 'Disparate Impact monitoring, approval rate equity tracking',
          status: 'Full'
        },
        {
          framework: 'Fair Housing Act',
          requirement: 'No discrimination in mortgage lending',
          coverage: 'Geo-proxy detection, counterfactual analysis',
          status: 'Full'
        },
        {
          framework: 'GLBA',
          requirement: 'Data privacy & model transparency',
          coverage: 'SOC 2 Type II, end-to-end encryption, audit trails',
          status: 'Full'
        },
        {
          framework: 'CFPB Fair Lending',
          requirement: 'Monitor AI systems for discriminatory impact',
          coverage: 'Real-time metric dashboard, automated alerts',
          status: 'Full'
        },
        {
          framework: 'UDAP (State)',
          requirement: 'Unfair/deceptive practices prevention',
          coverage: 'Model explainability, counterfactuals for evidence',
          status: 'Full'
        }
      ]
    },
    caseStudy: {
      headline: 'From Risk to Regulatory Ready: A Top Bank\'s Transformation',
      profile: {
        'Company': 'Top 5 Bank (anonymized)',
        'Industry': 'Mortgage & Lending',
        'Portfolio': '$500B+',
        'Status': 'Pending CFPB Examination'
      },
      results: [
        'Disparate Impact: 0.72 → 0.88',
        'Audit Prep: 26 weeks → 10 weeks',
        'Legal Risk: $500M → $0'
      ],
      narrative: [
        {
          title: 'The Problem',
          content: 'When the CFPB announced new AI oversight guidelines, a Top 5 bank suddenly faced a question: "Are our mortgage models fair?" Manual audits took 6 months per model—they didn\'t have 2 years for their 12 models.'
        },
        {
          title: 'The Execution',
          content: 'The Chief Risk Officer integrated BiasSense into the CI/CD pipeline. Within 4 weeks, baseline fairness for all 12 models was analyzed. The employment history model was flagged at 0.72 Disparate Impact.'
        },
        {
          title: 'The Result',
          content: 'Remediation cycles adjusted weights and removed biased features. All 12 models now have signed audit certificates. The bank presented these to regulators, avoiding enforcement actions and setting a new standard.'
        }
      ],
      quote: {
        text: 'BiasSense transformed our biggest liability into our biggest advantage. We went from anxious about the exam to confident. Now when customers ask if our models are fair, we have proof.',
        author: 'Chief Risk Officer',
        role: 'Top 5 Global Bank'
      }
    },
    cta: {
      headline: 'Ready to Prove Your Models Are Fair?',
      subheadline: 'Join 50+ financial institutions managing regulatory risk with BiasSense. Schedule a demo tailored to your specific lending models.',
      primary: 'Schedule Finance Demo',
      secondary: 'Download Compliance Guide',
      footnote: 'Compliance in 4-6 weeks. Zero disruption to existing models.'
    },
    related: [
      { id: 'healthcare', icon: '🏥', name: 'Healthcare', description: 'See how hospitals deliver equitable care', link: '/solutions/healthcare' },
      { id: 'hiring', icon: '💼', name: 'Hiring & HR', description: 'Discover fair recruitment at scale', link: '/solutions/hiring' },
      { id: 'public-sector', icon: '🏛️', name: 'Public Sector', description: 'Explore algorithmic justice in government', link: '/solutions/public-sector' }
    ]
  };

  return <SolutionPageTemplate industryData={industryData} />;
};

export default FinancialServices;
