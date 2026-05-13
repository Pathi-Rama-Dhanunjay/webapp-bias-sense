import { useView } from '../../../context/ViewContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Code } from 'lucide-react';

const OutputFormats = () => {
  const { view } = useView();

  return (
    <section className="light-section" style={{
      width: '100%',
      background: '#FFFFFF',
      padding: '96px 24px',
      borderTop: '1px solid #E2E8F0'
    }}>
      <div className="container" style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1E293B', marginBottom: '16px', letterSpacing: '-0.01em' }}>
          Flexible Output Formats
        </h2>
        <p className="body-large" style={{ color: '#64748B', marginBottom: '48px' }}>
          Whether you need an artifact for a regulatory audit or a JSON response for a microservice, 
          BiasSense adapts to your workflow.
        </p>

        <div style={{
          background: '#F8FAFC',
          borderRadius: '12px',
          padding: '40px',
          border: '1px solid #E2E8F0',
          minHeight: '280px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <AnimatePresence mode="wait">
            {view === 'executive' ? (
              <motion.div
                key="executive"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <div style={{ background: '#E6F1FB', padding: '16px', borderRadius: '50%', marginBottom: '16px' }}>
                  <FileText size={48} color="#0F4C8C" />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E293B', marginBottom: '8px' }}>
                  PDF Compliance Reports
                </h3>
                <p style={{ color: '#64748B', maxWidth: '400px' }}>
                  Download boardroom-ready, timestamped PDF reports outlining model fairness metrics, 
                  thresholds, and approvals for compliance audits.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="technical"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
              >
                <div style={{ background: '#E6F1FB', padding: '16px', borderRadius: '50%', marginBottom: '16px' }}>
                  <Code size={48} color="#00A99D" />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1E293B', marginBottom: '16px' }}>
                  JSON API Responses
                </h3>
                <div style={{ width: '100%', maxWidth: '500px', textAlign: 'left', background: '#0F172A', padding: '16px', borderRadius: '8px', overflowX: 'auto' }}>
                  <pre style={{ margin: 0 }}>
                    <code style={{ color: '#E2E8F0', fontSize: '13px', fontFamily: 'monospace' }}>
{`{
  "status": "violation",
  "model_id": "m_12345",
  "metrics": {
    "disparate_impact": 0.78,
    "statistical_parity": 0.05
  },
  "explanation_url": "https://api.biassense.com/v1/..."
}`}
                    </code>
                  </pre>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default OutputFormats;
