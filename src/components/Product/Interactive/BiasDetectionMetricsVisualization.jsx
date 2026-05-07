import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MetricCard = ({ name, value, status, range, riskZones, description, delay }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    // Animate value from 0 to target
    let startTimestamp = null;
    const duration = 1000;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCurrentValue(progress * value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    const timer = setTimeout(() => {
      window.requestAnimationFrame(step);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [value, delay]);

  const getStatusColor = (statusText) => {
    if (statusText.includes('Green')) return '#10B981';
    if (statusText.includes('Yellow')) return '#F59E0B';
    return '#DC2626';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)',
        padding: '16px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '150px'
      }}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>{name}</span>
          <motion.div 
            animate={{ opacity: [1, 0.6, 1] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ 
              fontSize: '10px', 
              color: 'white',
              background: getStatusColor(status),
              padding: '2px 8px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            {status.split(' ')[0]} {status.split(' ')[1]}
          </motion.div>
        </div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#00A99D' }}>
          {currentValue.toFixed(2)}
        </div>
      </div>
      
      <div style={{ marginTop: '16px' }}>
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', margin: '0 0 4px 0' }}>Range: {range}</p>
        <p style={{ fontSize: '11px', color: 'white', margin: 0, lineHeight: 1.4 }}>{description}</p>
      </div>
    </motion.div>
  );
};

const BiasDetectionMetricsVisualization = () => {
  return (
    <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
      <MetricCard 
        name="Disparate Impact" 
        value={0.87} 
        status="✓ Safe (Green)"
        range="0.60 - 1.0"
        description="Are approval rates disparate between protected groups?"
        delay={0.1}
      />
      <MetricCard 
        name="Equal Opportunity" 
        value={0.92} 
        status="✓ Good (Green)"
        range="0.0 - 1.0"
        description="Are true positive rates consistent across groups?"
        delay={0.2}
      />
      <MetricCard 
        name="Statistical Parity" 
        value={0.89} 
        status="✓ Good (Green)"
        range="0.0 - 1.0"
        description="Are positive outcomes distributed fairly across groups?"
        delay={0.3}
      />
      <MetricCard 
        name="Label Disparity" 
        value={0.85} 
        status="⚠ Monitor (Yellow)"
        range="0.0 - 1.0"
        description="Are outcome labels balanced across demographic groups?"
        delay={0.4}
      />
    </div>
  );
};

export default BiasDetectionMetricsVisualization;
