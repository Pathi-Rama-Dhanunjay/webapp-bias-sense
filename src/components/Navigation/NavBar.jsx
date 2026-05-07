import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../../assets/biassenselogo.png';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkText, setIsDarkText] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      const lightSections = document.querySelectorAll('.light-section');
      const navCenter = 40; // Approx Y center of navbar
      let foundLight = false;
      lightSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navCenter && rect.bottom >= navCenter) {
          foundLight = true;
        }
      });
      setIsDarkText(foundLight);
    };
    
    // Call once to set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force re-evaluation of navbar style on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('scroll'));
    }, 100);
    return () => clearTimeout(timer);
  }, [location]);

  const navLinks = [
    { name: 'Product', href: '/product' },
    { name: 'Solutions', href: '/#solutions' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Company', href: '/#company' }
  ];

  return (
    <motion.div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
      <motion.nav
        aria-label="Main Navigation"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          pointerEvents: 'auto',
          marginTop: isScrolled ? '0px' : '24px',
          width: isScrolled ? '100%' : '95%',
          maxWidth: isScrolled ? '100%' : '1200px',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          background: isScrolled 
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.15))' 
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.3))',
          backdropFilter: isScrolled ? 'blur(32px) saturate(200%)' : 'blur(40px) saturate(250%)',
          WebkitBackdropFilter: isScrolled ? 'blur(32px) saturate(200%)' : 'blur(40px) saturate(250%)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: isScrolled 
            ? '0 16px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)' 
            : '0 12px 40px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
          borderRadius: isScrolled ? '0px' : '50px',
          padding: isScrolled ? '10px 24px' : '10px 32px',
        }}
      >
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            aria-label="BiasSense Home"
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              textDecoration: 'none',
              height: '40px'
            }}
          >
            <img
              src={logoImg}
              alt="BiasSense Logo"
              style={{
                height: '100%',
                width: 'auto',
                objectFit: 'contain',
                transform: 'scaleX(1.7) scaleY(1.05)',
                transformOrigin: 'left center',
                mixBlendMode: 'multiply',
                filter: 'none',
                transition: 'filter 0.3s, mix-blend-mode 0.3s'
              }}
            />
          </a>

          {/* Desktop Nav */}
          <div className="desktop-nav" role="menubar" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (link.href === '/product') {
                    navigate('/product');
                    window.scrollTo(0, 0);
                  } else if (link.href.startsWith('/#')) {
                    const targetId = link.href.split('#')[1];
                    if (location.pathname === '/') {
                      // Already on home, just scroll
                      const element = document.getElementById(targetId);
                      if (element) {
                        const navHeight = 80; // approximate height of navbar
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth"
                        });
                      }
                    } else {
                      // Navigate to home then browser handles hash
                      navigate(link.href);
                    }
                  }
                }}
                role="menuitem"
                tabIndex={0}
                aria-label={link.name}
                whileHover={{
                  backgroundColor: isDarkText ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)',
                  color: isDarkText ? 'var(--dark-slate)' : 'white',
                  textShadow: isDarkText ? 'none' : '0 0 12px rgba(255,255,255,0.4)'
                }}
                style={{
                  color: isDarkText ? 'var(--text-gray)' : 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  padding: '8px 16px',
                  borderRadius: '20px',
                  transition: 'all 0.3s',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = '0 0 0 2px rgba(255, 255, 255, 0.6)';
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = 'none';
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="desktop-nav" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              style={{
                background: 'linear-gradient(135deg, rgba(0, 169, 157, 0.8), rgba(99, 102, 241, 0.8))',
                color: 'white',
                padding: '10px 24px',
                borderRadius: '20px',
                fontSize: '15px',
                fontWeight: 600,
                border: '1px solid rgba(255,255,255,0.3)',
                boxShadow: '0 4px 16px rgba(0, 169, 157, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
              }}
            >
              Book a Demo
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="mobile-toggle" style={{ display: 'none' }}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: isDarkText ? 'var(--dark-slate)' : 'white', padding: '4px', transition: 'color 0.3s' }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Glassy */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: '16px',
                right: '16px',
                background: '#FFFFFF',
                backdropFilter: 'none',
                WebkitBackdropFilter: 'none',
                padding: '24px',
                border: '1px solid #E2E8F0',
                borderRadius: '24px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    color: 'var(--dark-slate)',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: 500
                  }}
                >
                  {link.name}
                </a>
              ))}
              <div style={{ height: '1px', background: '#E2E8F0', margin: '8px 0' }}></div>
              <button
                onClick={() => window.location.href = '/contact'}
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 169, 157, 0.8), rgba(99, 102, 241, 0.8))',
                  color: 'white',
                  padding: '14px',
                  borderRadius: '16px',
                  fontSize: '16px',
                  fontWeight: 600,
                  border: '1px solid rgba(255,255,255,0.3)',
                  width: '100%',
                  boxShadow: '0 4px 16px rgba(0, 169, 157, 0.3)'
                }}
              >
                Book a Demo
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
      </motion.nav>
    </motion.div>
  );
};

export default NavBar;
