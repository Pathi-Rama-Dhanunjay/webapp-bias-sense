import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { feature: 'Income', impact: 0.25, type: 'positive' },
  { feature: 'Credit Score', impact: 0.18, type: 'positive' },
  { feature: 'Employment Years', impact: 0.15, type: 'positive' },
  { feature: 'Age', impact: -0.12, type: 'negative' },
  { feature: 'Zip Code', impact: -0.22, type: 'negative' },
  { feature: 'Gender', impact: -0.05, type: 'negative' },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#fff', border: '1px solid #ccc', padding: '10px', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <p style={{ margin: 0, fontWeight: 'bold', color: '#1E293B' }}>{payload[0].payload.feature}</p>
        <p style={{ margin: 0, color: payload[0].payload.type === 'positive' ? '#10B981' : '#EF4444' }}>
          Impact: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

const SHAPChart = () => {
  return (
    <div style={{ width: '100%', height: 400, background: 'white', padding: '24px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
      <h4 style={{ margin: '0 0 16px 0', color: '#1E293B' }}>SHAP Value Breakdown (Local Explanation)</h4>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" domain={[-0.3, 0.3]} tickFormatter={(val) => val.toFixed(2)} />
          <YAxis dataKey="feature" type="category" axisLine={false} tickLine={false} width={120} tick={{ fill: '#64748B', fontSize: 12 }} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="impact" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.type === 'positive' ? '#00A99D' : '#EF4444'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SHAPChart;
