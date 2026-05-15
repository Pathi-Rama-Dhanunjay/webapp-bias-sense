import { ArrowRight, Globe, MessageCircle, Briefcase, Send, Users, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const primaryColumns = [
  {
    title: 'Platform',
    links: [
      { label: 'Unified Scorecard', to: '/product' },
      { label: 'Bias Detection Engine', to: '/product' },
      { label: 'Data Health Index', to: '/product' },
      { label: 'Explainability (SHAP and DiCE)', to: '/product' },
      { label: 'Enforcement Gate API', to: '/product' },
    ],
  },
  {
    title: 'Evidence',
    links: [
      { label: 'Bias Audit Report (PDF)', to: '/product' },
      { label: 'Living Scorecard Dashboard', to: '/product' },
      { label: 'Bias Passport (Signed JSON)', to: '/product' },
      { label: 'Regulatory Mapping', to: '/use-cases' },
      { label: 'Model Decision Audit Trail', to: '/product' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Financial Services', to: '/solutions/financial-services' },
      { label: 'Healthcare', to: '/solutions/healthcare' },
      { label: 'Hiring and HR', to: '/solutions/hiring' },
      { label: 'Public Sector', to: '/solutions/public-sector' },
      { label: 'Request Integration', to: '/request-integration' },
    ],
  },
];

const detailColumns = [
  {
    title: 'Core Metrics',
    items: ['Disparate Impact', 'Equal Opportunity', 'Representation Ratio', 'Label Disparity', 'Historical Bias Index', 'Measurement Consistency'],
  },
  {
    title: 'Data Health Dimensions',
    items: ['Completeness', 'Consistency', 'Accuracy', 'Timeliness', 'Utilization', 'Compliance and Risk'],
  },
  {
    title: 'What BiasSense Delivers',
    items: ['Unified Trust and Fairness Score', 'Root Cause Explanations', 'Counterfactual Evidence', 'Go Live Decision Signal', 'Production Drift Alerts', 'Executive Remediation Advice'],
  },
  {
    title: 'Designed For',
    items: ['Chief Risk Officer', 'Chief Compliance Officer', 'General Counsel', 'ML Engineers', 'Data Scientists', 'Responsible AI Leads'],
  },
  {
    title: 'Platform Moat',
    items: ['Fairness Benchmark Network', 'Continuous Evidence Trail', 'Signed Compliance Artifacts', 'Cross-Model Governance Layer', 'Trust Badge Readiness', 'Regulatory Co-Pilot Path'],
  },
];

const Footer = () => {
  return (
    <footer
      style={{
        padding: '84px 22px 26px',
        background:
          'radial-gradient(1400px 760px at -8% -18%, rgba(16,185,129,0.34), transparent 60%), radial-gradient(1200px 640px at 108% -12%, rgba(14,165,233,0.30), transparent 54%), linear-gradient(180deg, #0B132B 0%, #101B3A 52%, #070B1A 100%)',
        color: '#E2E8F0',
      }}
    >
      <div style={{ maxWidth: '1480px', margin: '0 auto', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '28px', padding: '48px 34px 28px', background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))' }}>
        <div className="footer-top-grid" style={{ display: 'grid', gridTemplateColumns: '1.3fr repeat(3, minmax(180px, 1fr))', gap: '34px', alignItems: 'start' }}>
          <div style={{ maxWidth: '360px' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', color: '#FFFFFF', fontSize: '34px', marginBottom: '14px' }}>
              <span style={{ fontWeight: 800 }}>Bias</span>
              <span style={{ fontWeight: 300 }}>Sense</span>
              <ArrowRight size={16} strokeWidth={3} style={{ marginLeft: '4px', marginTop: '1px' }} />
            </Link>
            <p style={{ margin: '0 0 20px', color: 'rgba(241, 245, 249, 0.86)', fontSize: '26px', lineHeight: 1.2, fontWeight: 600 }}>Trustworthy AI, Proven With Evidence</p>
            <p style={{ margin: '0 0 22px', color: 'rgba(226, 232, 240, 0.76)', fontSize: '14px', lineHeight: 1.7 }}>
              BiasSense is the enterprise platform that unifies data health and bias detection into one defensible scorecard, then enforces go-live decisions, continuous monitoring, and regulator-ready audit evidence across your AI lifecycle.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="#" aria-label="Community" className="footer-social-link"><Globe size={18} /></a>
              <a href="#" aria-label="Updates" className="footer-social-link"><Send size={18} /></a>
              <a href="#" aria-label="Discord" className="footer-social-link"><MessageCircle size={18} /></a>
              <a href="#" aria-label="Partners" className="footer-social-link"><Users size={18} /></a>
              <a href="#" aria-label="Media" className="footer-social-link"><PlayCircle size={18} /></a>
            </div>
          </div>

          {primaryColumns.map((column) => (
            <div key={column.title}>
              <h4 style={{ margin: '0 0 16px', color: '#FFFFFF', fontSize: '31px', fontWeight: 600 }}>{column.title}</h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {column.links.map((link, idx) => (
                  <li key={`${column.title}-${link.label}`}>
                    <Link to={link.to} className="footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      {column.title === 'Platform' && idx === 0 ? <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 9px', borderRadius: '999px', background: 'rgba(255,255,255,0.14)', color: '#F8FAFC', fontSize: '11px', border: '1px solid rgba(255,255,255,0.18)' }}><Briefcase size={11} /> Priority</span> : null}
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ height: '1px', margin: '38px 0 34px', background: 'linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.2), rgba(255,255,255,0.04))' }} />

        <div className="footer-detail-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(170px, 1fr))', gap: '30px' }}>
          {detailColumns.map((column) => (
            <div key={column.title}>
              <h5 style={{ margin: '0 0 14px', color: '#F8FAFC', fontWeight: 600, fontSize: '16px' }}>{column.title}</h5>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {column.items.map((item) => (
                  <li key={`${column.title}-${item}`}>
                    <Link to="/request-integration" className="footer-link" style={{ fontSize: '15px' }}>{item}</Link>
                  </li>
                ))}
              </ul>
              <Link to="/request-integration" className="footer-link" style={{ display: 'inline-block', marginTop: '14px', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                Show more
              </Link>
            </div>
          ))}
        </div>

        <div style={{ height: '1px', margin: '34px 0 22px', background: 'linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.2), rgba(255,255,255,0.04))' }} />

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <p style={{ margin: 0, color: 'rgba(203, 213, 225, 0.74)', fontSize: '13px' }}>
            &copy; {new Date().getFullYear()} BiasSense. Infrastructure for fair, healthy, and legally defensible AI.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <Link to="/about" className="footer-link" style={{ fontSize: '13px' }}>Privacy</Link>
            <Link to="/about" className="footer-link" style={{ fontSize: '13px' }}>Terms</Link>
            <Link to="/about" className="footer-link" style={{ fontSize: '13px' }}>Security</Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: rgba(226, 232, 240, 0.78);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #FFFFFF;
        }

        .footer-social-link {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.15);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: rgba(226, 232, 240, 0.88);
          text-decoration: none;
          background: rgba(255,255,255,0.03);
          transition: all 0.22s ease;
        }

        .footer-social-link:hover {
          color: #FFFFFF;
          border-color: rgba(255,255,255,0.34);
          transform: translateY(-2px);
          background: rgba(255,255,255,0.08);
        }

        @media (max-width: 1280px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
          }
          .footer-detail-grid {
            grid-template-columns: repeat(3, minmax(170px, 1fr));
          }
        }

        @media (max-width: 900px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
          }
          .footer-detail-grid {
            grid-template-columns: repeat(2, minmax(150px, 1fr));
          }
        }

        @media (max-width: 620px) {
          .footer-detail-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
