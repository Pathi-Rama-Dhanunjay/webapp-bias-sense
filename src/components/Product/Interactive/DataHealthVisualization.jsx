import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { subject: 'Completeness', A: 92, fullMark: 100 },
  { subject: 'Consistency', A: 85, fullMark: 100 },
  { subject: 'Accuracy', A: 88, fullMark: 100 },
  { subject: 'Timeliness', A: 81, fullMark: 100 },
  { subject: 'Utilization', A: 84, fullMark: 100 },
  { subject: 'Compliance', A: 90, fullMark: 100 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#fff', border: '1px solid #ccc', padding: '10px', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <p style={{ margin: 0, fontWeight: 'bold', color: '#1E293B' }}>{payload[0].payload.subject}</p>
        <p style={{ margin: 0, color: '#00A99D' }}>Score: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const DataHealthVisualization = () => {
  const [animatedData, setAnimatedData] = useState(data.map(d => ({ ...d, A: 0 })));

  useEffect(() => {
    // Animate on load
    const timer = setTimeout(() => {
      setAnimatedData(data);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ width: '100%', height: 400, position: 'relative' }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={animatedData}>
          <PolarGrid stroke="#E2E8F0" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748B', fontSize: 12, fontWeight: 500 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Data Health"
            dataKey="A"
            stroke="#0F4C8C"
            strokeWidth={2}
            fill="#00A99D"
            fillOpacity={0.3}
            animationDuration={1500}
            animationEasing="ease-out"
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
      
      {/* Center Overall Score */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        background: 'rgba(255,255,255,0.9)',
        borderRadius: '50%',
        width: '80px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        border: '2px solid #0F4C8C'
      }}>
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#0F4C8C' }}>87%</span>
      </div>
    </div>
  );
};

export default DataHealthVisualization;
