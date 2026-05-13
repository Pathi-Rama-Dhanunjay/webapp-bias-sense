import BenchmarkSelector from '../Interactive/BenchmarkSelector';

const BenchmarkSection = () => {
  return (
    <section style={{
      background: 'linear-gradient(to bottom, var(--dark-slate), #0F3B5E)',
      color: '#FFFFFF',
      position: 'relative'
    }}>
      {/* Accent Line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: 'linear-gradient(90deg, var(--primary-teal), var(--secondary-purple))'
      }}></div>

      <div className="container">
        <h2 style={{ color: 'var(--primary-teal)', textAlign: 'center', marginBottom: '32px' }}>
          The Fairness Benchmark Network: Your Competitive Intelligence
        </h2>
        
        <p className="body-large" style={{ 
          textAlign: 'center', 
          maxWidth: '700px', 
          margin: '0 auto 32px',
          color: '#FFFFFF'
        }}>
          As clients onboard, BiasSense accumulates anonymized fairness 
          metrics across industries. After enough clients, this becomes 
          the most comprehensive real-world AI fairness dataset in existence.
        </p>

        <BenchmarkSelector />

      </div>
    </section>
  );
};

export default BenchmarkSection;
