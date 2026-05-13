import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Activity, BarChart3, CheckCircle2, AlertTriangle, TrendingUp } from 'lucide-react';

const MetricCard = ({ label, targetValue, color, delay, icon: Icon }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let current = 0;
    const totalSteps = 30;
    const stepValue = targetValue / totalSteps;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        current += stepValue + (Math.random() * 1.5);
        if (current >= targetValue) {
          current = targetValue;
          clearInterval(interval);
        }
        setValue(Math.floor(current));
      }, 70);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [targetValue, delay]);

  const isGood = value >= 80;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: delay / 1000, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)',
      }}
      style={{
        background: '#FFFFFF',
        borderRadius: '12px',
        padding: '14px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '-20px',
        right: '-20px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: color,
        opacity: 0.08,
        filter: 'blur(20px)',
        pointerEvents: 'none',
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '6px',
            background: `${color}22`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Icon size={14} style={{ color }} />
          </div>
          <span style={{ color: '#1E293B', fontWeight: 600, fontSize: '12px' }}>{label}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <motion.span
            key={value}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ color, fontWeight: 700, fontSize: '16px', fontFamily: 'monospace' }}
          >
            {value}%
          </motion.span>
          {value >= targetValue && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {isGood ? (
                <CheckCircle2 size={14} style={{ color: '#2DD4BF' }} />
              ) : (
                <AlertTriangle size={14} style={{ color: '#FBBF24' }} />
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        height: '3px',
        background: '#E2E8F0',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${color}, ${color}AA)`,
            borderRadius: '2px',
            boxShadow: `0 0 8px ${color}44`,
          }}
        />
      </div>
    </motion.div>
  );
};

const StatusPulse = ({ status, label }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
    <motion.div
      animate={{
        boxShadow: status === 'active'
          ? ['0 0 0 0 rgba(45, 212, 191, 0.4)', '0 0 0 6px rgba(45, 212, 191, 0)', '0 0 0 0 rgba(45, 212, 191, 0.4)']
          : 'none',
      }}
      transition={{ duration: 2, repeat: Infinity }}
      style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: status === 'active' ? '#2DD4BF' : status === 'warning' ? '#FBBF24' : '#64748B',
      }}
    />
    <span style={{ fontSize: '11px', color: '#1E293B', fontWeight: 600 }}>{label}</span>
  </div>
);

const HeroVisualization = () => {
  const [key, setKey] = useState(0);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
      setScanProgress(0);
    }, 14000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 120);
    return () => clearInterval(scanInterval);
  }, [key]);

  return (
    <motion.div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          background: '#FFFFFF',
          borderRadius: '12px',
          padding: '12px 16px',
          border: '1px solid #E2E8F0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: '#6366F1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Shield size={16} style={{ color: 'white' }} />
          </div>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#1E293B' }}>BiasSense Dashboard</div>
            <div style={{ fontSize: '10px', color: '#1E293B', opacity: 0.8 }}>Real-time Analysis</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <StatusPulse status="active" label="Live" />
          <StatusPulse status="warning" label="1 Alert" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{
          background: '#F8FAFC',
          borderRadius: '10px',
          padding: '10px 14px',
          border: '1px solid #E2E8F0',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', color: '#475569', fontWeight: 500 }}>
            <Activity size={10} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
            Model Scan Progress
          </span>
          <span style={{ fontSize: '11px', color: '#2DD4BF', fontFamily: 'monospace' }}>{Math.min(scanProgress, 100)}%</span>
        </div>
        <div style={{
          height: '3px',
          background: '#E2E8F0',
          borderRadius: '2px',
          overflow: 'hidden',
        }}>
          <motion.div
            animate={{ width: `${Math.min(scanProgress, 100)}%` }}
            transition={{ duration: 0.1 }}
            style={{
              height: '100%',
              background: '#2DD4BF',
              borderRadius: '2px',
            }}
          />
        </div>
      </motion.div>

      <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <MetricCard label="Disparate Impact" targetValue={87} color="#00A99D" delay={800} icon={BarChart3} />
        <MetricCard label="Equal Opportunity" targetValue={92} color="#6366F1" delay={1200} icon={TrendingUp} />
        <MetricCard label="Data Health Score" targetValue={94} color="#0F4C8C" delay={1600} icon={Shield} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        style={{
          background: '#F8FAFC',
          borderRadius: '10px',
          padding: '10px 14px',
          border: '1px solid #CBD5E1',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle2 size={14} style={{ color: '#2DD4BF' }} />
          <span style={{ fontSize: '11px', color: '#1E293B', fontWeight: 600 }}>
            Model passes all fairness thresholds
          </span>
        </div>
        <span style={{ fontSize: '10px', color: '#64748B', fontFamily: 'monospace' }}>
          v2.4.1
        </span>
      </motion.div>
    </motion.div>
  );
};

export default HeroVisualization;
