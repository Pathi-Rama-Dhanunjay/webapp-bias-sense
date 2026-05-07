import { useView } from '../../../context/ViewContext';
import DataHealthVisualization from '../Interactive/DataHealthVisualization';
import { motion, AnimatePresence } from 'framer-motion';

const DimensionCard = ({ title, copy, detail }) => {
  const { view } = useView();

  return (
    <motion.div
      whileHover={{ scale: 1.02, backgroundColor: '#F9FAFB', borderLeft: '4px solid #0F4C8C' }}
      style={{
        background: 'white',
        border: '1px solid #E2E8F0',
        padding: '16px',
        borderRadius: '8px',
        borderLeft: '4px solid transparent',
        transition: 'border-left 0.2s, background 0.2s'
      }}
    >
      <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1E293B', marginBottom: '8px' }}>
        {title}
      </h4>
      <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.5, marginBottom: 0 }}>
        {copy}
      </p>

      <AnimatePresence>
        {view === 'technical' && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '8px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ fontSize: '12px', color: '#00A99D', fontStyle: 'italic', margin: 0 }}>
              {detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DataHealth = () => {
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
            Data Health: The Foundation of Fair AI
          </h2>
          <p className="body-large" style={{ color: '#64748B', marginBottom: '32px' }}>
            Before BiasSense can measure bias, it must assess data quality.
            A biased model trained on unhealthy data is not an anomaly to flag—
            it's a measurement we can't trust.
          </p>

          <div style={{
            background: '#F0FFFE',
            borderLeft: '4px solid #00A99D',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '32px'
          }}>
            <p style={{ fontSize: '16px', fontWeight: 500, color: '#00A99D', margin: 0, lineHeight: 1.6 }}>
              Data health is not just cleanliness. It's the confidence interval
              on every bias metric we calculate. Without it, a Disparate Impact
              score of 0.87 could mean fairness—or could be an artifact of
              missing data. BiasSense reports both.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1E293B', marginBottom: '16px' }}>
            Evaluated Across 6 Dimensions
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px'
          }}>
            <DimensionCard
              title="Completeness"
              copy="What percentage of records have values for each field? Missing data at >30% per field indicates data quality risk."
              detail="Missing value patterns often correlate with demographic groups, masking fairness issues."
            />
            <DimensionCard
              title="Consistency"
              copy="Do values follow expected formats and ranges? Inconsistent formatting breaks downstream analysis."
              detail="Character encoding mismatches, unit inconsistencies (feet vs. meters), and categorical value drift detected."
            />
            <DimensionCard
              title="Accuracy"
              copy="Are values validated against ground truth or business rules? Duplicate records, impossible values, or out-of-range entries are flagged."
              detail="Statistical outlier detection + business rule validation."
            />
            <DimensionCard
              title="Timeliness"
              copy="How fresh is this data? Is it collected in real-time or batch? Stale data degrades model fairness over time."
              detail="Timestamp analysis, collection lag detection, drift monitoring integration."
            />
            <DimensionCard
              title="Utilization"
              copy="Is this data actually being used in production models? Unused data is a storage liability and compliance risk."
              detail="30-day and 90-day usage windows tracked across all models."
            />
            <DimensionCard
              title="Compliance"
              copy="Does this data meet GDPR, CCPA, or industry regulations? Sensitive PII exposure, data retention violations flagged."
              detail="Pattern matching for PII, consent tracking, retention policy alignment."
            />
          </div>
        </div>

        {/* Right Column: Visual Element */}
        <div>
          <DataHealthVisualization />
        </div>

      </div>
    </section>
  );
};

export default DataHealth;
