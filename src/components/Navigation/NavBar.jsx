import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Landmark, Activity, Shield, ShoppingCart, Users, Scale, GraduationCap, Home, Briefcase, Truck, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const openMenu = (name) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenDropdown(name);
  };

  const closeMenuWithDelay = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 140);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setIsScrolled(rect.bottom <= 80);
      } else {
        setIsScrolled(window.scrollY > 50);
      }

      // Detect which section sits under the navbar and update text theme
      const sections = document.querySelectorAll('section');
      let current = null;
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= 80) current = s;
      }
      setIsDark(!current || current.dataset.navTheme === 'dark');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);


  const navLinks = [
    { name: 'Product', href: '/product' },
    {
      name: 'Use Cases',
      href: '/use-cases',
      isDropdown: true,
      items: [
        { name: 'Finance & Consumer Credit', href: '/use-cases?industry=finance', icon: Landmark },
        { name: 'Healthcare & Patient Care', href: '/use-cases?industry=healthcare', icon: Activity },
        { name: 'Insurance & Underwriting', href: '/use-cases?industry=insurance', icon: Shield },
        { name: 'Retail & E-commerce', href: '/use-cases?industry=retail', icon: ShoppingCart },
        { name: 'HR & Recruitment', href: '/use-cases?industry=hr', icon: Users },
        { name: 'Criminal Justice', href: '/use-cases?industry=criminal-justice', icon: Scale },
        { name: 'Education & Admissions', href: '/use-cases?industry=education', icon: GraduationCap },
        { name: 'Mortgage & Real Estate', href: '/use-cases?industry=mortgage', icon: Home },
        { name: 'Workforce Management', href: '/use-cases?industry=employment', icon: Briefcase },
        { name: 'Supply Chain & Logistics', href: '/use-cases?industry=supply-chain', icon: Truck }
      ]
    },
    {
      name: 'Integrations',
      isDropdown: true,
      items: [
        { name: 'Financial Services', href: '/solutions/financial-services', icon: Landmark },
        { name: 'Healthcare', href: '/solutions/healthcare', icon: Activity },
        { name: 'Hiring & HR', href: '/solutions/hiring', icon: Users },
        { name: 'Public Sector', href: '/solutions/public-sector', icon: Building2 }
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
          background: 'rgba(15, 23, 42, 0.20)',
          backdropFilter: 'blur(24px) saturate(160%)',
          WebkitBackdropFilter: 'blur(24px) saturate(160%)',
          border: '1px solid rgba(255, 255, 255, 0.10)',
          borderTop: '1px solid rgba(255, 255, 255, 0.18)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
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
              color: isDark ? '#FFFFFF' : '#0F172A',
              letterSpacing: '-0.5px',
              transition: 'color 0.3s',
              display: 'flex',
              alignItems: 'flex-start',
            }}>
              <span style={{ fontWeight: 800 }}>Bias</span>
              <span style={{ fontWeight: 300 }}>Sense</span>
              <ArrowRight size={14} strokeWidth={3} style={{ marginLeft: '2px', marginTop: '1px' }} />
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="desktop-nav" role="menubar" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <div key={link.name} style={{ position: 'relative' }}
                onMouseEnter={() => link.isDropdown && openMenu(link.name)}
                onMouseLeave={() => link.isDropdown && closeMenuWithDelay()}
              >
                <motion.a
                  href={link.href || '#'}
                  onClick={(e) => {
                    if (link.isDropdown && !link.href) {
                      e.preventDefault();
                      return;
                    }
                    e.preventDefault();
                    if (link.href === '/product') {
                      navigate('/product');
                      window.scrollTo(0, 0);
                    } else if (link.href === '/use-cases') {
                      navigate('/use-cases');
                      window.scrollTo(0, 0);
                      setOpenDropdown(null);
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
                    } else if (link.href) {
                      navigate(link.href);
                      window.scrollTo(0, 0);
                    }
                  }}
                  whileHover={{
                    backgroundColor: 'rgba(45, 212, 191, 0.12)',
                    color: '#0D9488',
                  }}
                  style={{
                    color: isDark ? 'rgba(255,255,255,0.92)' : 'rgba(15,23,42,0.85)',
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
                    {openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        onMouseEnter={() => openMenu(link.name)}
                        onMouseLeave={closeMenuWithDelay}
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '0',
                          width: link.name === 'Use Cases' ? '640px' : '240px',
                          background: '#0F172A',
                          borderRadius: '16px',
                          padding: '12px',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          marginTop: '0',
                          transform: 'translateY(8px)',
                          zIndex: 2000
                        }}
                      >
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: link.name === 'Use Cases' ? '1fr 1fr' : '1fr',
                          gap: '8px'
                        }}>
                          {link.items.map(item => {
                            const ItemIcon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => {
                                  setOpenDropdown(null);
                                  window.scrollTo(0, 0);
                                }}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '10px',
                                  padding: '12px 14px',
                                  color: '#FFFFFF',
                                  textDecoration: 'none',
                                  fontSize: '14px',
                                  fontWeight: 600,
                                  borderRadius: '8px',
                                  transition: 'background 0.2s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                              >
                                {ItemIcon && <ItemIcon size={16} style={{ color: 'rgba(255,255,255,0.8)' }} />}
                                <span>{item.name}</span>
                              </Link>
                            );
                          })}
                        </div>
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
              onClick={() => window.location.href = '/early-access'}
              style={{
                background: 'linear-gradient(135deg, #0D9488 0%, #0891B2 100%)',
                color: '#FFFFFF',
                padding: '10px 24px',
                borderRadius: '20px',
                fontSize: '15px',
                fontWeight: 600,
                border: 'none',
                boxShadow: '0 4px 18px rgba(13,148,136,0.35)',
              }}
            >
              Get Early Access
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="mobile-toggle">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: isDark ? '#FFFFFF' : '#0F172A', padding: '4px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.3s' }}
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
                            onClick={() => {
                              setMobileMenuOpen(false);
                              window.scrollTo(0, 0);
                            }}
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
                onClick={() => { setMobileMenuOpen(false); window.location.href = '/early-access'; }}
                style={{
                  background: '#FFFFFF',
                  color: '#FFFFFF',
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
