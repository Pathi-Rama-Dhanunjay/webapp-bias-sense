import SolutionPageTemplate from '../../components/SolutionPageTemplate';
import { PublicSectorHero } from '../../components/Solutions/IndustryHeroes';

const PublicSector = () => {
  const industryData = {
    id: 'public-sector',
    name: 'Public Sector',
    hero: {
      headline: 'Algorithmic Justice: Fair AI in Government Services',
      subheadline: 'Government AI systems allocate benefits, decide parole, and route services. When these systems are biased, they compound existing inequities in criminal justice, social services, and benefit distribution.',
      keyStats: [
        'Criminal Justice AI Bias: Black defendants 45% more likely to be flagged as high-risk',
        'Impact: Millions denied parole, probation, benefits',
        'Remediation cost: 0 → $10M+ for state systems'
      ],
      secondaryCTA: 'Download Public Sector Fairness Framework'
    },
    heroVisual: <PublicSectorHero />,
    regulatory: {
      headline: 'The Regulatory Framework for Public AI',
      frameworks: [
        {
          name: 'Equal Protection Clause (14th Amendment)',
          authority: 'Supreme Court',
          year: '1868',
          requirement: 'No state shall deny to any person within its jurisdiction the equal protection of the laws.',
          penalty: 'Constitutional violation / Federal oversight',
          solution: 'Algorithmic discrimination detection and prevention to ensure constitutional parity.'
        },
        {
          name: 'Civil Rights Act',
          authority: 'DOJ',
          year: '1964',
          requirement: 'Prohibits discrimination in federally-funded programs.',
          penalty: 'Loss of federal funding / Injunctions',
          solution: 'Demographic parity tracking in benefit allocation and service routing.'
        },
        {
          name: 'Administrative Procedure Act (APA)',
          authority: 'Federal Agencies',
          year: '1946',
          requirement: 'Algorithms used in government decisions must be transparent, non-arbitrary, and auditable.',
          penalty: 'Decisions overturned by courts',
          solution: 'Full model explainability (SHAP) and a comprehensive audit trail for every automated decision.'
        },
        {
          name: 'Federal AI Executive Order',
          authority: 'White House',
          year: '2023',
          requirement: 'Federal systems must be tested for algorithmic discrimination and safety.',
          penalty: 'Procurement ban',
          solution: 'Compliance validation for federal agencies and contractors via third-party fairness certification.'
        }
      ]
    },
    problems: {
      headline: 'Systemic Injustice in Public AI',
      cards: [
        {
          title: 'Criminal Risk Assessment Bias',
          scenario: 'Recidivism prediction algorithms score Black defendants 45% higher risk of re-offense vs white defendants for identical offenses and history.',
          rootCause: 'Trained on historical arrest data where Black defendants were over-policed. Model learned structural racism, not true risk.',
          impact: 'Black defendants systematically denied parole. Systemic perpetuation of carceral inequality.',
          solution: 'Equal Opportunity detection flags racial disparities. Counterfactuals prove: "Same profile, different race = 20% lower risk score."'
        },
        {
          title: 'Social Services Benefit Bias',
          scenario: 'Child protective services risk models flag families from certain minority-heavy zip codes at 3x the rate of other areas.',
          rootCause: 'Algorithm trained on historical removal data from neighborhoods that were over-policed for child welfare issues.',
          impact: 'Children separated from families due to algorithmic bias. $50M+ in settlements.',
          solution: 'Geographic proxy detection identifies zip code as a racial proxy. Retrain with geographic equity constraints.'
        },
        {
          title: 'Job Training Access Bias',
          scenario: 'Matching algorithms allocate high-value tech training to demographics matching historical "success" profiles, penalizing job-gap females.',
          rootCause: 'Algorithm optimizes for success rates but learned from data reflecting past gender and economic biases.',
          impact: 'Women and minorities locked out of high-opportunity government programs.',
          solution: 'Statistical parity monitoring ensures equal program access across all protected demographics.'
        }
      ]
    },
    solution: {
      headline: 'The BiasSense Solution for Algorithmic Justice',
      steps: [
        {
          title: 'Historical Data Analysis',
          status: 'success',
          details: [
            'Upload 20 years of recidivism/benefit data',
            'Data Health: CRITICAL (Black defendants 3x higher incarceration)',
            'Equal Opportunity Ratio: 0.55 (CRITICAL)'
          ],
          result: 'Data reflects systemic bias, not actual risk'
        },
        {
          title: 'Root Cause & Proxy Detection',
          details: [
            'SHAP: Prior arrests (0.42), Zip code (0.35)',
            'Proxy: Prior arrests correlated with race (0.71)',
            'Insight: Model encodes structural racism of police activity'
          ]
        },
        {
          title: 'Remediation (Algorithmic Justice)',
          details: [
            'Remove biased features (prior arrests, zip code)',
            'Retrain on TRUE risk factors only',
            'Result: Equal Opportunity improves to 0.80 ✓'
          ],
          result: 'Model fair without sacrificing predictive accuracy'
        },
        {
          title: 'Deployment & Public Auditing',
          status: 'success',
          details: [
            'Enforcement gate blocks non-compliant updates',
            'Quarterly fairness reports for the judiciary',
            'Public audit trail for transparency'
          ]
        }
      ]
    },
    metrics: {
      headline: 'Impact: Fairer Outcomes for Citizens',
      cards: [
        {
          title: 'Risk Assessment Equity',
          metric: '0.55 → 0.83',
          details: 'Parity Ratio: Within legal compliance\nFalse Positive Gap: Reduced from 40% to 8%\nResult: Black defendants no longer over-predicted as high-risk'
        },
        {
          title: 'Parole Release Equity',
          metric: '+1,300 Grants/Year',
          details: 'Grant Rate (Black): 35% → 48%\nGrant Rate (White): 52% → 51%\nResult: Equitable parole grants achieved'
        },
        {
          title: 'Taxpayer Cost Savings',
          metric: '$65M+ Saved',
          details: 'Avoided incarceration cost: $35K/person\nReduced over-detention: ~3,700/year\nROI: 130,000% against BiasSense cost'
        },
        {
          title: 'Systemic Impact',
          metric: '88% Gap Reduction',
          details: 'Racial disparity in parole rates: 49% gap → 6% gap\nOutcome: Societal benefit from fairer algorithms'
        }
      ]
    },
    compliance: {
      headline: 'Public Sector Compliance Framework Alignment',
      rows: [
        { framework: 'Equal Protection Clause', requirement: 'No algorithmic discrimination', coverage: 'Demographic parity detection + enforcement', status: 'Full' },
        { framework: 'Civil Rights Act', requirement: 'Fairness in federally-funded programs', coverage: 'Disparate impact testing', status: 'Full' },
        { framework: 'APA', requirement: 'Transparency & auditability', coverage: 'SHAP explainability + audit trail', status: 'Full' },
        { framework: 'State AI Laws', requirement: 'Bias disclosure + mitigation', coverage: 'Pre-deployment certification', status: 'Full' },
        { framework: 'Executive Order', requirement: 'Federal AI standards', coverage: 'Compliance validation for contractors', status: 'Full' }
      ]
    },
    caseStudy: {
      headline: 'Transforming Social Services through Algorithmic Accountability',
      profile: {
        'Agency': 'State Dept of Human Services',
        'System': 'Benefit Allocation Engine',
        'Scale': '2 Million Citizens',
        'Compliance': 'State AI Transparency Law'
      },
      results: [
        'Program Enrollment: Equitable by race',
        'Gender Balance: +25% improvement',
        'Legal Liability: Eliminated'
      ],
      narrative: [
        {
          title: 'The Challenge',
          content: 'A state agency found that their job training allocation algorithm was favoring applicants from specific zip codes, which effectively excluded minority communities from high-value tech training programs.'
        },
        {
          title: 'The Solution',
          content: 'BiasSense revealed that the "success optimization" model was learning from 1990s-era economic data. By rebalancing the training set with modern demographic data, the model became truly inclusive.'
        },
        {
          title: 'The Impact',
          content: 'The agency achieved 100% audit readiness and demonstrated a measurable increase in program completion rates among previously underserved groups, fulfilling their public service mission.'
        }
      ],
      quote: {
        text: 'For decades, we\'ve tried to fix systemic inequality through policies. But our algorithms were perpetuating it. BiasSense let us see that, understand why, and fix it with evidence. That\'s accountability in action.',
        author: 'Agency Director',
        role: 'State Dept of Human Services'
      }
    },
    cta: {
      headline: 'Algorithmic Justice Starts With Transparency',
      subheadline: 'Join leading government agencies in building fair, transparent, and auditable AI systems that serve every citizen equitably.',
      primary: 'Schedule Government Demo',
      secondary: 'Download Public Sector Framework',
      footnote: 'FedRAMP ready. Support for air-gapped and secure on-premise deployments.'
    },
    related: [
      { id: 'financial-services', icon: '💰', name: 'Financial Services', description: 'Learn how banks ensure lending fairness', link: '/solutions/financial-services' },
      { id: 'healthcare', icon: '🏥', name: 'Healthcare', description: 'See how hospitals deliver equitable care', link: '/solutions/healthcare' },
      { id: 'hiring', icon: '💼', name: 'Hiring & HR', description: 'Discover fair recruitment at scale', link: '/solutions/hiring' }
    ]
  };

  return <SolutionPageTemplate industryData={industryData} />;
};

export default PublicSector;
