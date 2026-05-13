import { motion } from 'framer-motion';

const IntegrationPoints = () => {
  const integrations = [
    { name: 'Databricks', type: 'Platform' },
    { name: 'Snowflake', type: 'Data Warehouse' },
    { name: 'AWS SageMaker', type: 'Platform' },
    { name: 'Google Vertex AI', type: 'Platform' },
    { name: 'GitHub Actions', type: 'CI/CD' },
    { name: 'Jenkins', type: 'CI/CD' },
    { name: 'Jupyter', type: 'Notebooks' },
    { name: 'Python', type: 'Language' },
  ];

  return (
    <section className="light-section" style={{
      width: '100%',
      background: '#F8FAFC',
      padding: '96px 24px',
    }}>
      <div className="container" style={{
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1E293B', marginBottom: '16px', letterSpacing: '-0.01em' }}>
          Integrates With Your Stack
        </h2>
        <p className="body-large" style={{ color: '#64748B', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
          BiasSense doesn't require you to rebuild your ML architecture. 
          It plugs into the tools your data scientists are already using.
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center'
        }}>
          {integrations.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
              style={{
                background: 'white',
                border: '1px solid #E2E8F0',
                padding: '16px 24px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '150px'
              }}
            >
              <span style={{ fontWeight: 600, color: '#1E293B' }}>{item.name}</span>
              <span style={{ fontSize: '12px', color: '#64748B' }}>{item.type}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationPoints;
