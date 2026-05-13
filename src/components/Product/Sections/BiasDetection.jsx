import { useView } from '../../../context/ViewContext';
import BiasDetectionMetricsVisualization from '../Interactive/BiasDetectionMetricsVisualization';
import { motion, AnimatePresence } from 'framer-motion';

const MetricExplanation = ({ title, whatItMeasures, whyItMatters, example, techDetail, defaultVisible = true }) => {
  const { view } = useView();
  const isVisible = view === 'technical' || defaultVisible;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          style={{ marginBottom: '24px', overflow: 'hidden' }}
        >
          <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>
            {title}
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.6 }}>
              <strong>What it measures:</strong> {whatItMeasures}
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.6 }}>
              <strong>Why it matters:</strong> {whyItMatters}
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.6 }}>
              <strong>Example:</strong> {example}
            </p>

            <AnimatePresence>
              {view === 'technical' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{
                    background: 'rgba(0,0,0,0.2)',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    borderLeft: '2px solid #00A99D',
                    marginTop: '8px'
                  }}
                >
                  <p style={{ fontSize: '12px', color: '#00A99D', margin: 0, fontFamily: 'monospace' }}>
                    {techDetail}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const BiasDetection = () => {
  return (
    <section style={{
      width: '100%',
      background: 'linear-gradient(to bottom right, #1E293B, #0F4C8C)',
      padding: '96px 24px',
      color: 'white'
    }}>
      <div className="container" style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '48px',
        alignItems: 'start'
      }}>

        {/* Left Column: Visual */}
        <div style={{ position: 'sticky', top: '100px' }}>
          <BiasDetectionMetricsVisualization />
        </div>

        {/* Right Column: Copy */}
        <div>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold', color: 'white', marginBottom: '24px', letterSpacing: '-0.01em' }}>
            Comprehensive Fairness Metrics
          </h2>
          <p className="body-large" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '40px' }}>
            BiasSense measures 8 dimensions of algorithmic fairness across
            every protected attribute in your dataset. No group goes unmeasured.
          </p>

          <div>
            <MetricExplanation
              title="Metric 1: Disparate Impact"
              whatItMeasures="Are certain demographic groups receiving favorable outcomes at significantly lower rates than others?"
              whyItMatters="In legal frameworks (EEOC, CFPB), a Disparate Impact score < 0.8 (80%) is considered legally significant discrimination."
              example="If 90% of male applicants are approved but only 72% of female applicants, the impact ratio is 72/90 = 0.80 — barely safe."
              techDetail="Favorable outcome rate for protected group / favorable outcome rate for reference group."
              defaultVisible={true}
            />

            <MetricExplanation
              title="Metric 2: Equal Opportunity Ratio"
              whatItMeasures="Are true positive rates (correct positive predictions) consistent across groups? Or is the model 'right' more often for some groups than others?"
              whyItMatters="A model can have the same approval rates across groups but systematically misclassify one group. Equal Opportunity catches this."
              example="Model approves 80% of men and 80% of women, but 90% of male approvals are correct while only 70% of female approvals are correct."
              techDetail="True positive rate for protected group / true positive rate for reference group."
              defaultVisible={true}
            />

            <MetricExplanation
              title="Metric 3: Representation Ratio"
              whatItMeasures="Are minority groups even present in sufficient numbers in your training data?"
              whyItMatters="A model trained on 95% majority group and 5% minority group cannot make fair predictions about the minority."
              example="Dataset has 10,000 records: 9,500 men, 500 women. The model may be 'fair' by accident—there's simply not enough female data."
              techDetail="Minority group count / majority group count."
              defaultVisible={false}
            />

            <MetricExplanation
              title="Metric 4: Label Disparity"
              whatItMeasures="Are outcomes (approvals, rejections) distributed fairly across demographic groups?"
              whyItMatters="Even if approval rates are equal, if denials are concentrated in one group, something is wrong."
              example="80% approval for men and 80% for women looks fair, but if women denials are all due to 'missing employment history' while men denials are varied, there's a quality issue."
              techDetail="Outcome distribution entropy across groups."
              defaultVisible={false}
            />
          </div>

          <div style={{ marginTop: '48px', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '32px' }}>
            <p style={{ fontSize: '16px', color: 'white', marginBottom: '16px' }}>
              Ready to see these metrics for your model?
            </p>
            <a href="/early-access" style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#00A99D',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              → Schedule a Technical Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BiasDetection;

