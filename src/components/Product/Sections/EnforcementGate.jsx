import CodeSampleTabs from '../Interactive/CodeSampleTabs';
import { useView } from '../../../context/ViewContext';

const EnforcementGate = () => {
  const { view } = useView();

  return (
    <section className="light-section" style={{
      width: '100%',
      background: '#FFFFFF',
      padding: '96px 24px',
    }}>
      <div className="container" style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '48px',
        alignItems: 'center'
      }}>
        
        {/* Left Column: Copy */}
        <div>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold', color: '#1E293B', marginBottom: '24px', letterSpacing: '-0.01em' }}>
            Enforcement Gate API
          </h2>
          <p className="body-large" style={{ color: '#64748B', marginBottom: '32px' }}>
            Stop biased models before they ever reach production.
          </p>

          <p style={{ color: '#64748B', lineHeight: 1.6, marginBottom: '24px' }}>
            BiasSense acts as middleware in your ML pipeline. Set hard thresholds for your 
            fairness metrics. If a new model version violates these thresholds during testing, 
            the pipeline fails automatically.
          </p>

          {view === 'executive' && (
            <div style={{
              background: '#F0FFFE',
              padding: '24px',
              borderRadius: '8px',
              border: '1px solid #00A99D'
            }}>
              <h4 style={{ color: '#00A99D', margin: '0 0 8px 0' }}>Why this matters</h4>
              <p style={{ margin: 0, color: '#1E293B', lineHeight: 1.6 }}>
                You wouldn't deploy a model that fails accuracy tests. Why deploy one that fails compliance tests? 
                The Enforcement Gate ensures that brand-damaging, discriminatory algorithms never see the light of day.
              </p>
            </div>
          )}

          {view === 'technical' && (
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <span style={{ color: '#00A99D' }}>✓</span>
                <span style={{ color: '#1E293B' }}><strong>CI/CD Integration:</strong> Plugs directly into Jenkins, GitHub Actions, or GitLab CI.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <span style={{ color: '#00A99D' }}>✓</span>
                <span style={{ color: '#1E293B' }}><strong>Custom Thresholds:</strong> Set different thresholds for different model risk tiers.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <span style={{ color: '#00A99D' }}>✓</span>
                <span style={{ color: '#1E293B' }}><strong>Audit Trails:</strong> Every pipeline failure is logged with the exact metric that triggered it.</span>
              </li>
            </ul>
          )}
        </div>

        {/* Right Column: Visual */}
        <div>
          <CodeSampleTabs />
        </div>

      </div>
    </section>
  );
};

export default EnforcementGate;
