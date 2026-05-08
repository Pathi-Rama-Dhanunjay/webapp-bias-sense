import React from 'react';
import SolutionPageTemplate from '../../components/SolutionPageTemplate';
import { HiringHero } from '../../components/Solutions/IndustryHeroes';

const Hiring = () => {
  const industryData = {
    id: 'hiring',
    name: 'Hiring & HR',
    hero: {
      headline: 'Fair Hiring AI: Attracting the Best Talent Without Bias',
      subheadline: 'Resume screening, job matching, and interview scoring algorithms can systematically disadvantage certain demographics. A hiring model that approves 80% of men but 65% of women for similar roles isn\'t just unethical—it\'s illegal under Title VII.',
      keyStats: [
        'Resume Screening Bias: Women 18% less likely to get interview',
        'Statistical Parity Ratio: 0.82 (below EEOC safe harbor)',
        'Cost of class action: $10-50M per company'
      ],
      secondaryCTA: 'Download Fair Hiring Best Practices'
    },
    heroVisual: <HiringHero />,
    regulatory: {
      headline: 'The Regulatory Landscape in HR Tech',
      frameworks: [
        {
          name: 'Title VII of the Civil Rights Act',
          authority: 'EEOC',
          year: '1964',
          requirement: 'Prohibits employment discrimination based on race, color, religion, sex, and national origin.',
          penalty: '$500K-$5M per violation',
          solution: 'Automated disparate impact detection + enforcement gates to prevent discriminatory hiring models.'
        },
        {
          name: 'EEOC 80% Rule',
          authority: 'EEOC',
          year: 'Uniform Guidelines',
          requirement: 'Selection rates for minorities should be ≥80% of the selection rate for the majority group.',
          penalty: 'Federal investigation and fines',
          solution: 'Continuous 80% rule compliance monitoring for resume screening and automated interview scoring.'
        },
        {
          name: 'ADA (Americans with Disabilities Act)',
          authority: 'EEOC',
          year: '1990',
          requirement: 'Prohibits discrimination against qualified individuals with disabilities in job application procedures.',
          penalty: 'Up to $300,000 in damages',
          solution: 'Disability bias tracking in automated video interviews and psychometric assessments.'
        },
        {
          name: 'ADEA (Age Discrimination)',
          authority: 'EEOC',
          year: '1967',
          requirement: 'Prohibits employment discrimination against persons 40 years of age or older.',
          penalty: '$10M+ settlements precedent',
          solution: 'Age bias detection in job matching algorithms that favor "digital natives" or recent graduates.'
        }
      ]
    },
    problems: {
      headline: 'Where Hiring Algorithms Fail',
      cards: [
        {
          title: 'Resume Screening Bias by Gender',
          scenario: 'Resume screening algorithm approves 80% of male resumes but only 62% of female resumes for identical qualifications.',
          rootCause: 'Algorithm trained on historical hiring data where men were hired at higher rates. Model learned gender bias from past decisions.',
          impact: '18% fewer women advance to interview. Talent pool depleted. Legal risk: Class action suit.',
          solution: 'Statistical Parity detection flags gender disparity. Retrains algorithm with fairness constraints to equalize selection rates.'
        },
        {
          title: 'Age Bias in Seniority Matching',
          scenario: 'Job-matching algorithm recommends "senior" positions to 45-year-olds at 75% rate but only 35% to 65-year-olds.',
          rootCause: 'Algorithm learned that younger senior hires have lower turnover (statistically true, but enables age discrimination).',
          impact: 'ADEA violations. $10M+ settlements. Older workers locked out of high-value roles.',
          solution: 'Age equity monitoring + counterfactuals prove discrimination. Retrain without age proxy features like "graduation year".'
        },
        {
          title: 'Interview Scoring Bias',
          scenario: 'Interview scoring algorithm gives higher scores to candidates with "leadership experience" (correlated with male candidates historically).',
          rootCause: 'Algorithm learned company\'s historical biases. "Leadership" features were coded differently for men vs women.',
          impact: 'Women scored lower in interviews for same behaviors. Perpetuation of "glass ceiling".',
          solution: 'SHAP values reveal discrimination in feature weighting. Retrain with gender-neutral feature definitions.'
        }
      ]
    },
    solution: {
      headline: 'The BiasSense Solution for Hiring',
      steps: [
        {
          title: 'Data Health & Bias Audit',
          status: 'success',
          details: [
            'Upload 10 years of hiring data',
            'Data Health Score: 72% (detected historical bias)',
            'Statistical Parity: 0.775 (BELOW 0.80 EEOC threshold)'
          ],
          result: 'Algorithm identified as legally problematic'
        },
        {
          title: 'Root Cause Analysis',
          details: [
            'SHAP: Work experience gaps (0.35 top driver)',
            'Proxy: Work gaps correlated with gender (0.61)',
            'Insight: Algorithm penalizes career patterns common to women'
          ]
        },
        {
          title: 'Fairness Remediation',
          details: [
            'Reweight features to reduce penalty on work gaps',
            'Apply constraint: Statistical Parity >= 0.80',
            'Result: Parity improves to 0.84 ✓'
          ],
          result: 'Equity achieved with minimal impact on hire quality'
        },
        {
          title: 'Validation & Deployment',
          status: 'success',
          details: [
            'Prospective testing on 2K new resumes',
            'Enforcement gate blocks non-compliant updates',
            'Monthly gender equity dashboard for HR'
          ]
        }
      ]
    },
    metrics: {
      headline: 'Proven Impact: Diversity & Quality',
      cards: [
        {
          title: 'Interview Equity',
          metric: 'Gap: 18% → 2%',
          details: 'Before: Women 62% vs Men 80%\nAfter: Women 78% vs Men 80%\nResult: 260% more women advance to interviews'
        },
        {
          title: 'Hiring Quality',
          metric: '94% Success',
          details: 'Retention Rate: Unchanged from biased model\nAnalysis: Fair algorithm maintains talent quality\nLegal Compliance: 100% achieved'
        },
        {
          title: 'Cost Avoidance',
          metric: '$71M+ Eliminated',
          details: 'Litigation Settlement (Avg): $20M\nEEOC Fine: $1-5M\nBrand Damage: $50M+\nTotal liability eliminated with BiasSense'
        },
        {
          title: 'Diversity Representation',
          metric: '+58% Growth',
          details: 'Women in applicant pool: +20%\nWomen in interviews: +58%\nWomen in final hires: +56%'
        }
      ]
    },
    compliance: {
      headline: 'Hiring Compliance Framework Alignment',
      rows: [
        { framework: 'Title VII', requirement: 'No sex discrimination', coverage: 'Gender equity monitoring, statistical parity', status: 'Full' },
        { framework: 'EEOC 80% Rule', requirement: 'Selection rates ≥80% for minorities', coverage: 'Automated 80% rule compliance check', status: 'Full' },
        { framework: 'ADA', requirement: 'No disability discrimination', coverage: 'Disability bias detection', status: 'Full' },
        { framework: 'ADEA', requirement: 'No age discrimination', coverage: 'Age equity tracking', status: 'Full' },
        { framework: 'Executive Order 11246', requirement: 'Affirmative action reporting', coverage: 'Demographic parity reporting', status: 'Full' }
      ]
    },
    caseStudy: {
      headline: 'A Global Tech Giant\'s Path to Fair Recruitment',
      profile: {
        'Company': 'Tech Multinational',
        'Employees': '5,000+',
        'Scale': '500,000 Resumes/Year',
        'Challenge': 'EEOC Audit Preparedness'
      },
      results: [
        'Statistical Parity: 0.775 → 0.84',
        'Women Interviews: +240 Annually',
        'Legal Risk: Eliminated'
      ],
      narrative: [
        {
          title: 'The Challenge',
          content: 'A major tech company realized their resume screening algorithm was systematically penalizing women who had career breaks, leading to a massive disparity in interview invitations that violated EEOC guidelines.'
        },
        {
          title: 'The Solution',
          content: 'By using BiasSense, the talent team identified "experience gap" as the primary bias driver. They reweighted the model to value recent skill acquisition over continuous tenure.'
        },
        {
          title: 'The Impact',
          content: 'The company not only passed its EEOC audit with "exemplary" status but also saw an increase in the quality of hires, as the new model captured high-potential talent previously filtered out by the old bias.'
        }
      ],
      quote: {
        text: 'We thought our algorithm was objective. Turns out it was a mirror of our own biases. BiasSense showed us that, and the fix was simple. Now we\'re attracting better talent because we\'re fair.',
        author: 'VP of Talent',
        role: 'Fortune 500 Tech Company'
      }
    },
    cta: {
      headline: 'Build a Hiring Pipeline That Works for Everyone',
      subheadline: 'Eliminate bias from your recruitment funnel and build a high-performance, diverse workforce with BiasSense.',
      primary: 'Schedule HR Demo',
      secondary: 'Download Fair Hiring Guide',
      footnote: 'Deployment in 2 weeks. Integrates with Workday, Greenhouse, and Lever.'
    },
    related: [
      { id: 'financial-services', icon: '💰', name: 'Financial Services', description: 'Learn how banks ensure lending fairness', link: '/solutions/financial-services' },
      { id: 'healthcare', icon: '🏥', name: 'Healthcare', description: 'See how hospitals deliver equitable care', link: '/solutions/healthcare' },
      { id: 'public-sector', icon: '🏛️', name: 'Public Sector', description: 'Explore algorithmic justice in government', link: '/solutions/public-sector' }
    ]
  };

  return <SolutionPageTemplate industryData={industryData} />;
};

export default Hiring;
