import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MetricCard = ({ label, targetValue, color, delay }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let current = 0;
    const intervalTime = 100;
    const totalSteps = 20; // 2 seconds / 100ms
    const stepValue = targetValue / totalSteps;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        current += stepValue + (Math.random() * 2); // some randomness
        if (current >= targetValue) {
          current = targetValue;
          clearInterval(interval);
        }
        setValue(Math.floor(current));
      }, intervalTime);

      // Loop behavior
      const loopTimeout = setTimeout(() => {
        setValue(0);
        // We rely on a higher level loop or we can just let it stay for now.
        // For simplicity, let's just count once, or use a recurring interval if needed.
      }, 8000);

      return () => {
        clearInterval(interval);
        clearTimeout(loopTimeout);
      };
    }, delay);

    return () => clearTimeout(timeout);
  }, [targetValue, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay / 1000, duration: 0.5 }}
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        padding: '24px',
        minHeight: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ color: 'white', fontWeight: 500 }}>{label}</span>
        <span style={{ color: color, fontWeight: 700, fontSize: '20px' }}>{value}%</span>
      </div>
      <div style={{ height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.3 }}
          style={{ height: '100%', background: color, borderRadius: '3px' }}
        />
      </div>
    </motion.div>
  );
};

const HeroVisualization = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setKey(prev => prev + 1); // Reset and restart animation
    }, 11000); // 2s anim + 3s pause + reset

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div 
      onClick={() => setIsPlaying(!isPlaying)} 
      style={{ 
        display: 'grid', 
        gap: '20px', 
        width: '100%', 
        cursor: 'pointer' 
      }}
      title="Click to pause/resume"
    >
      <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <MetricCard label="Disparate Impact" targetValue={87} color="#00A99D" delay={100} />
        <MetricCard label="Equal Opportunity" targetValue={92} color="#6366F1" delay={200} />
        <MetricCard label="Data Health" targetValue={94} color="#0F4C8C" delay={300} />
      </div>
    </div>
  );
};

export default HeroVisualization;
