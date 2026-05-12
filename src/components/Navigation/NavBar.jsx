import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkText, setIsDarkText] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
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
    { name: 'Use Cases', href: '/use-cases' },
    {
      name: 'Integrations',
      isDropdown: true,
      items: [
        { name: 'Financial Services', href: '/solutions/financial-services' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Hiring & HR', href: '/solutions/hiring' },
        { name: 'Public Sector', href: '/solutions/public-sector' }
      ]
    },
    { name: 'About Us', href: '/about' }
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
          marginTop: isScrolled ? '2px' : '24px',
          width: isScrolled ? '75%' : '95%',
          maxWidth: '1200px',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          background: /* isScrolled
            ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)'
            : */ 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%)',
          backdropFilter: isScrolled ? 'blur(24px) saturate(150%)' : 'blur(40px) saturate(250%)',
          WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(150%)' : 'blur(40px) saturate(250%)',
          border: isScrolled ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.15)',
          borderTop: isScrolled ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(255, 255, 255, 0.4)',
          borderLeft: isScrolled ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(255, 255, 255, 0.4)',
          boxShadow: isScrolled
            ? '0 20px 40px rgba(0, 0, 0, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.1)'
            : '0 12px 40px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
          borderRadius: '50px',
          padding: isScrolled ? '4px 32px' : '10px 32px',
          position: 'relative'
        }}
      >
        {/* Liquid Glare Reflection */}
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50px', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          {isScrolled && (
            <div style={{ position: 'absolute', top: 0, left: '-100%', width: '50%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)', transform: 'skewX(-20deg)', animation: 'navbar-glass-glare 6s infinite' }} />
          )}
        </div>

        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
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
              height: '40px',
              gap: '10px'
            }}
          >

            <span style={{
              fontSize: '24px',
              color: /* isScrolled ? '#FFFFFF' : */ '#0F172A',
              letterSpacing: '-0.5px',
              transition: 'color 0.3s',
              display: 'flex',
              alignItems: 'flex-start',
            }}>
              <span style={{ fontWeight: 800 }}>Bias</span>
              <span style={{ fontWeight: 300 }}>Sense</span>
              <ArrowRight size={14} strokeWidth={3} style={{ marginLeft: '2px', marginTop: '4px' }} />
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="desktop-nav" role="menubar" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <div key={link.name} style={{ position: 'relative' }}
                onMouseEnter={() => link.isDropdown && setSolutionsOpen(true)}
                onMouseLeave={() => link.isDropdown && setSolutionsOpen(false)}
              >
                <motion.a
                  href={link.href || '#'}
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.isDropdown) return;
                    if (link.href === '/product') {
                      navigate('/product');
                      window.scrollTo(0, 0);
                    } else if (link.href.startsWith('/#')) {
                      const targetId = link.href.split('#')[1];
                      if (location.pathname === '/') {
                        const element = document.getElementById(targetId);
                        if (element) {
                          const navHeight = 80;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                        }
                      } else {
                        navigate(link.href);
                      }
                    }
                  }}
                  whileHover={{
                    backgroundColor: /* isScrolled ? 'rgba(255, 255, 255, 0.1)' : */ 'rgba(0, 0, 0, 0.05)',
                    color: /* isScrolled ? '#FFFFFF' : */ '#0F172A',
                  }}
                  style={{
                    color: /* isScrolled ? 'rgba(255, 255, 255, 0.85)' : */ '#0F172A',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: 600,
                    padding: '8px 16px',
                    borderRadius: '20px',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {link.name}
                </motion.a>

                {link.isDropdown && (
                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '0',
                          width: '220px',
                          background: '#0F172A',
                          borderRadius: '16px',
                          padding: '12px',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          marginTop: '8px',
                          zIndex: 2000
                        }}
                      >
                        {link.items.map(item => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => {
                              setSolutionsOpen(false);
                              window.scrollTo(0, 0);
                            }}
                            style={{
                              display: 'block',
                              padding: '12px 16px',
                              color: '#FFFFFF',
                              textDecoration: 'none',
                              fontSize: '14px',
                              fontWeight: 600,
                              borderRadius: '8px',
                              transition: 'background 0.2s'
                            }}
                            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                            onMouseLeave={(e) => e.target.style.background = 'transparent'}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="desktop-nav" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              style={{
                background: /* isScrolled ? '#FFFFFF' : */ '#0F172A',
                color: /* isScrolled ? '#0F172A' : */ '#FFFFFF',
                padding: '10px 24px',
                borderRadius: '20px',
                fontSize: '15px',
                fontWeight: 600,
                border: /* isScrolled ? '1px solid rgba(0, 0, 0, 0.1)' : */ '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: /* isScrolled
                  ? '0 4px 14px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
                  : */ '0 4px 14px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              Get Early Access
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="mobile-toggle">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: /* isScrolled ? '#FFFFFF' : */ '#0F172A', padding: '4px', transition: 'color 0.3s', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
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
                background: '#0F172A',
                backdropFilter: 'none',
                WebkitBackdropFilter: 'none',
                padding: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.2)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                zIndex: 2000,
                pointerEvents: 'auto'
              }}>
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.isDropdown ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 500, opacity: 0.6 }}>
                        {link.name}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '12px' }}>
                        {link.items.map(item => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.href || '#'}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: 500,
                        display: 'block'
                      }}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.1)', margin: '8px 0' }}></div>
              <button
                onClick={() => { setMobileMenuOpen(false); window.location.href = '/contact'; }}
                style={{
                  background: '#FFFFFF',
                  color: '#0F172A',
                  padding: '14px',
                  borderRadius: '16px',
                  fontSize: '16px',
                  fontWeight: 600,
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '100%',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer'
                }}
              >
                Get Early Access
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <style>{`
        @keyframes navbar-glass-glare {
          0% { left: -100%; }
          15% { left: 200%; }
          100% { left: 200%; }
        }
        .mobile-toggle { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block; }
        }
      `}</style>
      </motion.nav>
    </motion.div>
  );
};

export default NavBar;
