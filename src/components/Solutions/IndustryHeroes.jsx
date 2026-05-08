import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, BarChart3, TrendingUp, ShieldCheck, Activity, Users, Scale } from 'lucide-react';

const DashboardCard = ({ children, title, delay = 0 }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
    style={{
      background: 'rgba(30, 41, 59, 0.7)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
    }}
  >
    {title && <div style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.05em' }}>{title}</div>}
    {children}
  </motion.div>
);

export const FinancialServicesHero = () => {
  return (
    <div style={{ position: 'relative', height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '100%', maxWidth: '600px' }}>
        <DashboardCard title="Lending Model Status" delay={0.3}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={24} color="#10B981" />
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 800 }}>APPROVED</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>Credit Risk Score v2.1</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
              <span>Disparate Impact</span>
              <span style={{ color: '#10B981', fontWeight: 700 }}>0.88 ✓</span>
            </div>
            <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
              <motion.div initial={{ width: 0 }} animate={{ width: '88%' }} transition={{ duration: 1, delay: 0.8 }} style={{ height: '100%', background: '#10B981', borderRadius: '2px' }} />
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Market Fairness" delay={0.4}>
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--primary-teal)' }}>LOW</div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>Regulatory Risk Level</div>
          </div>
          <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
             <TrendingUp size={32} color="var(--primary-teal)" />
          </div>
        </DashboardCard>

        <div style={{ gridColumn: 'span 2' }}>
          <DashboardCard title="Compliance Certification" delay={0.5}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <div style={{ fontSize: '14px', fontWeight: 600 }}>READY FOR REGULATORY SUBMISSION</div>
               <ShieldCheck size={24} color="#10B981" />
            </div>
            <div style={{ marginTop: '12px', fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>
              HASH: 0x8f2a...c91e | TIMESTAMP: MAY-2026
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export const HealthcareHero = () => {
  return (
    <div style={{ position: 'relative', height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '100%', maxWidth: '600px' }}>
        <DashboardCard title="Patient Equity Index" delay={0.3}>
          <div style={{ position: 'relative', width: '100px', height: '100px', margin: '0 auto' }}>
             <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                <motion.path initial={{ strokeDasharray: '0, 100' }} animate={{ strokeDasharray: '92, 100' }} transition={{ duration: 1.5, delay: 0.8 }} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10B981" strokeWidth="3" />
             </svg>
             <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '20px', fontWeight: 800 }}>92%</div>
          </div>
        </DashboardCard>

        <DashboardCard title="Model Calibration" delay={0.4}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
              <span>Race Parity</span>
              <span style={{ color: '#10B981' }}>OPTIMAL</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
              <span>Gender Parity</span>
              <span style={{ color: '#10B981' }}>OPTIMAL</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
              <span>Age Parity</span>
              <span style={{ color: '#10B981' }}>OPTIMAL</span>
            </div>
          </div>
        </DashboardCard>

        <div style={{ gridColumn: 'span 2' }}>
          <DashboardCard title="Live Fairness Stream" delay={0.5}>
            <div style={{ height: '60px', display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
              {[40, 70, 45, 90, 65, 80, 50, 95, 75, 85].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                  style={{ flex: 1, background: 'var(--primary-teal)', borderRadius: '2px 2px 0 0', opacity: 0.7 }}
                />
              ))}
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export const HiringHero = () => {
  return (
    <div style={{ position: 'relative', height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '100%', maxWidth: '600px' }}>
        <DashboardCard title="Pipeline Fairness" delay={0.3}>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', height: '80px' }}>
             <div style={{ textAlign: 'center' }}>
                <motion.div initial={{ height: 0 }} animate={{ height: '65px' }} transition={{ duration: 1, delay: 0.8 }} style={{ width: '30px', background: '#64748B', borderRadius: '4px 4px 0 0' }} />
                <div style={{ fontSize: '10px', marginTop: '4px' }}>M</div>
             </div>
             <div style={{ textAlign: 'center' }}>
                <motion.div initial={{ height: 0 }} animate={{ height: '62px' }} transition={{ duration: 1, delay: 1 }} style={{ width: '30px', background: 'var(--primary-teal)', borderRadius: '4px 4px 0 0' }} />
                <div style={{ fontSize: '10px', marginTop: '4px' }}>F</div>
             </div>
          </div>
          <div style={{ textAlign: 'center', fontSize: '12px', fontWeight: 700, color: '#10B981', marginTop: '12px' }}>Parity Gap: 4.2% (SAFE)</div>
        </DashboardCard>

        <DashboardCard title="Top Bias Drivers" delay={0.4}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '10px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Work Gaps</span>
              <span>32%</span>
            </div>
            <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
               <motion.div initial={{ width: 0 }} animate={{ width: '32%' }} transition={{ duration: 1, delay: 1.2 }} style={{ height: '100%', background: '#F43F5E', borderRadius: '2px' }} />
            </div>
            <div style={{ fontSize: '10px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Keywords</span>
              <span>18%</span>
            </div>
            <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
               <motion.div initial={{ width: 0 }} animate={{ width: '18%' }} transition={{ duration: 1, delay: 1.3 }} style={{ height: '100%', background: '#F59E0B', borderRadius: '2px' }} />
            </div>
          </div>
        </DashboardCard>

        <div style={{ gridColumn: 'span 2' }}>
          <DashboardCard title="Candidate Quality vs Fairness" delay={0.5}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                   <div style={{ fontSize: '24px', fontWeight: 800 }}>8.4 / 10</div>
                   <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>Avg Talent Quality Score</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                   <div style={{ fontSize: '24px', fontWeight: 800, color: '#10B981' }}>0.84</div>
                   <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>Statistical Parity Ratio</div>
                </div>
             </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export const PublicSectorHero = () => {
  return (
    <div style={{ position: 'relative', height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '100%', maxWidth: '600px' }}>
        <DashboardCard title="Algorithmic Justice" delay={0.3}>
           <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0' }}>
              <Scale size={64} color="var(--primary-teal)" />
           </div>
           <div style={{ textAlign: 'center', fontSize: '14px', fontWeight: 700, color: '#10B981' }}>BIAS MITIGATED: 85%</div>
        </DashboardCard>

        <DashboardCard title="Regional Impact" delay={0.4}>
           <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', justifyContent: 'center' }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(i => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + (i * 0.05) }}
                  style={{ 
                    width: '15px', 
                    height: '15px', 
                    borderRadius: '2px', 
                    background: i % 3 === 0 ? 'rgba(255,255,255,0.1)' : 'var(--primary-teal)',
                    opacity: i % 3 === 0 ? 0.3 : 0.8
                  }} 
                />
              ))}
           </div>
           <div style={{ textAlign: 'center', fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginTop: '12px' }}>Equity Heatmap by District</div>
        </DashboardCard>

        <div style={{ gridColumn: 'span 2' }}>
          <DashboardCard title="Public Audit Trail" delay={0.5}>
             <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                   <span style={{ color: '#10B981' }}>✓</span>
                   <span>Parole Grant Rate Parity: 0.83 (PASSED)</span>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                   <span style={{ color: '#10B981' }}>✓</span>
                   <span>Benefit Allocation Equity: 0.91 (PASSED)</span>
                </div>
             </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};
