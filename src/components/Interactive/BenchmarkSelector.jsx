import { useState } from 'react';
import { motion } from 'framer-motion';

const industryData = {
  'Financial Services': {
    average: 0.84,
    userScore: 0.79,
    recommendations: [
      'Review employment history data quality',
      'Rebalance training data by protected attributes',
      'Implement proxy detection for correlated features'
    ]
  },
  'Healthcare': {
    average: 0.88,
    userScore: 0.91,
    recommendations: [
      'Monitor age demographics for recent data drift',
      'Review clinical trial representation',
      'Maintain current fair practices'
    ]
  },
  'Hiring': {
    average: 0.76,
    userScore: 0.72,
    recommendations: [
      'Audit resume screening keywords for gender bias',
      'Standardize interview scoring criteria',
      'Review historical promotion data'
    ]
  },
  'Public Sector': {
    average: 0.82,
    userScore: 0.85,
    recommendations: [
      'Publish fairness metrics for transparency',
      'Review geographic data for redlining proxies',
      'Ensure language accessibility in service delivery'
    ]
  }
};

const BenchmarkSelector = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('Financial Services');
  const data = industryData[selectedIndustry];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      
      {/* Dropdown */}
      <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
        <select 
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            borderRadius: '8px',
            border: '1px solid rgba(255,255,255,0.2)',
            background: 'rgba(255,255,255,0.1)',
            color: 'white',
            backdropFilter: 'blur(10px)',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          {Object.keys(industryData).map(ind => (
            <option key={ind} value={ind} style={{ color: 'var(--dark-slate)' }}>
              {ind}
            </option>
          ))}
        </select>
      </div>

      {/* Chart */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px',
        padding: '32px',
        backdropFilter: 'blur(10px)'
      }}>
        
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', marginBottom: '8px', fontSize: '14px' }}>
            <span>Industry Average ({selectedIndustry})</span>
            <span>{data.average}</span>
          </div>
          <div style={{ height: '24px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${data.average * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{ height: '100%', background: 'var(--primary-teal)', borderRadius: '4px' }}
            />
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', marginBottom: '8px', fontSize: '14px' }}>
            <span>Your Score</span>
            <span>{data.userScore}</span>
          </div>
          <div style={{ height: '24px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${data.userScore * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{ height: '100%', background: 'var(--secondary-purple)', borderRadius: '4px' }}
            />
          </div>
        </div>

      </div>

      {/* Explanation Box */}
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        border: '1px solid rgba(255,255,255,0.2)',
        padding: '24px',
        borderRadius: '12px',
        marginTop: '24px',
        color: 'white',
        textAlign: 'left'
      }}>
        <p style={{ fontSize: '16px', lineHeight: 1.6, marginBottom: '16px' }}>
          Your model is performing at <strong>[{data.userScore}]</strong> compared to the industry 
          average of <strong>[{data.average}]</strong> for {selectedIndustry}. To improve fairness:
        </p>
        <ol style={{ paddingLeft: '24px', margin: 0, fontSize: '14px', lineHeight: 1.6 }}>
          {data.recommendations.map((rec, i) => (
            <li key={i} style={{ marginBottom: '8px' }}>{rec}</li>
          ))}
        </ol>
      </div>

    </div>
  );
};

export default BenchmarkSelector;
