import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const generateData = () => {
  const data = [];
  let value = 0.88;
  for (let i = 1; i <= 30; i++) {
    // Introduce a sudden drop around day 20
    if (i === 20) value = 0.76;
    else if (i > 20) value += (Math.random() * 0.04 - 0.01);
    else value += (Math.random() * 0.02 - 0.01);
    
    data.push({
      day: `Day ${i}`,
      score: Math.min(Math.max(value, 0.5), 1),
    });
  }
  return data;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const isViolation = payload[0].value < 0.8;
    return (
      <div style={{ 
        background: isViolation ? '#FEF2F2' : '#fff', 
        border: `1px solid ${isViolation ? '#EF4444' : '#ccc'}`, 
        padding: '10px', 
        borderRadius: '4px', 
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
      }}>
        <p style={{ margin: 0, fontWeight: 'bold', color: '#1E293B' }}>{label}</p>
        <p style={{ margin: 0, color: isViolation ? '#EF4444' : '#00A99D' }}>
          Impact Score: {payload[0].value.toFixed(2)}
        </p>
        {isViolation && (
          <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#EF4444', fontWeight: 'bold' }}>
            Threshold Violation Detected!
          </p>
        )}
      </div>
    );
  }
  return null;
};

const DriftMonitoringChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(generateData());
  }, []);

  return (
    <div style={{ width: '100%', height: 400, background: 'white', padding: '24px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h4 style={{ margin: 0, color: '#1E293B' }}>Disparate Impact: 30-Day Trend</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', background: '#EF4444', borderRadius: '50%' }}></div>
          <span style={{ fontSize: '12px', color: '#64748B' }}>Violation Threshold (0.80)</span>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
          <XAxis dataKey="day" tick={{ fill: '#64748B', fontSize: 12 }} axisLine={false} tickLine={false} tickMargin={10} minTickGap={30} />
          <YAxis domain={[0.5, 1]} tick={{ fill: '#64748B', fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine y={0.8} stroke="#EF4444" strokeDasharray="4 4" label={{ position: 'top', value: 'Threshold', fill: '#EF4444', fontSize: 12 }} />
          <Line 
            type="monotone" 
            dataKey="score" 
            stroke="#0F4C8C" 
            strokeWidth={3} 
            dot={(props) => {
              const { cx, cy, payload } = props;
              const isViolation = payload.score < 0.8;
              return (
                <circle 
                  cx={cx} 
                  cy={cy} 
                  r={isViolation ? 6 : 0} 
                  fill={isViolation ? "#EF4444" : "none"} 
                  stroke={isViolation ? "#fff" : "none"}
                  strokeWidth={2}
                  key={`dot-${payload.day}`}
                />
              );
            }} 
            activeDot={{ r: 8, fill: '#00A99D', stroke: '#fff', strokeWidth: 2 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DriftMonitoringChart;
