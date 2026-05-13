import { ArrowRight, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: '#0F172A', color: '#94A3B8', padding: '80px 24px 32px' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '64px' }}>
          
          {/* Brand & Description */}
          <div style={{ flex: '1 1 300px', maxWidth: '350px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#FFFFFF', fontSize: '24px', marginBottom: '20px' }}>
              <span style={{ fontWeight: 800 }}>Bias</span>
              <span style={{ fontWeight: 300 }}>Sense</span>
              <ArrowRight size={14} strokeWidth={3} style={{ marginLeft: '2px', marginTop: '4px' }} />
            </Link>
            <p style={{ fontSize: '15px', lineHeight: 1.6, marginBottom: '24px', color: '#cbd5e1' }}>
              Operationalize Fair AI across your stack. Measure, monitor, and mitigate algorithmic bias in real-time to ensure compliance and equity.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" className="footer-social-link"><Twitter size={20} /></a>
              <a href="#" className="footer-social-link"><Linkedin size={20} /></a>
              <a href="#" className="footer-social-link"><Github size={20} /></a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontWeight: 600, marginBottom: '20px', fontSize: '16px' }}>Product</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li><Link to="/product" className="footer-link">Features</Link></li>
              <li><Link to="/solutions/financial-services" className="footer-link">Integrations</Link></li>
              <li><Link to="/about" className="footer-link">How it Works</Link></li>
              <li><Link to="/early-access" className="footer-link">Get Early Access</Link></li>
            </ul>
          </div>

          {/* Use Cases Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontWeight: 600, marginBottom: '20px', fontSize: '16px' }}>Use Cases</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li><Link to="/use-cases?industry=finance" className="footer-link">Finance & Credit</Link></li>
              <li><Link to="/use-cases?industry=healthcare" className="footer-link">Healthcare</Link></li>
              <li><Link to="/use-cases?industry=hr" className="footer-link">HR & Recruitment</Link></li>
              <li><Link to="/use-cases" className="footer-link">View All Industries</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontWeight: 600, marginBottom: '20px', fontSize: '16px' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
          <p style={{ margin: 0, fontSize: '14px', color: '#64748B' }}>
            &copy; {new Date().getFullYear()} BiasSense. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/privacy" className="footer-link" style={{ fontSize: '14px' }}>Privacy Policy</Link>
            <Link to="/terms" className="footer-link" style={{ fontSize: '14px' }}>Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Styles for hover effects */}
      <style>{`
        .footer-link {
          color: #94A3B8;
          text-decoration: none;
          font-size: 15px;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #2DD4BF; /* Matches your teal/emerald theme */
        }
        .footer-social-link {
          color: #94A3B8;
          transition: all 0.2s ease;
          display: flex;
        }
        .footer-social-link:hover {
          color: #FFFFFF;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
