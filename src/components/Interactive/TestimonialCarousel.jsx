import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "BiasSense completely transformed how we evaluate models. We now have concrete evidence for every compliance audit.",
    name: "Marcus Chen",
    title: "Chief Data Officer",
    company: "First Metropolitan Bank"
  },
  {
    quote: "The ability to catch intersectional bias before deployment saved us from a major PR disaster.",
    name: "Dr. Priya Patel",
    title: "VP of Machine Learning",
    company: "TechCore Systems"
  },
  {
    quote: "Finally, a tool that speaks both data science and regulatory compliance. It bridged a massive gap in our organization.",
    name: "Jennifer Williams",
    title: "Head of AI Governance",
    company: "Midwest Health Systems"
  },
  {
    quote: "The automated scorecard generation alone saves our team 20 hours per model deployment.",
    name: "Alex Rodriguez",
    title: "Director of Risk",
    company: "LendSmart"
  },
  {
    quote: "We looked at other fairness tools, but the continuous monitoring and drift detection here is unmatched.",
    name: "Michael Thompson",
    title: "Lead ML Engineer",
    company: "SafeGuard Insurance"
  },
  {
    quote: "As a regulator, seeing a BiasSense certificate attached to a model immediately builds trust.",
    name: "Dr. Patricia Foster",
    title: "Policy Director",
    company: "State Department of Human Services"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div 
      style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '48px auto 0' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button onClick={handlePrev} style={{ padding: '12px', color: 'var(--primary-teal)', cursor: 'pointer' }}>
          <ChevronLeft size={24} />
        </button>

        <div style={{ overflow: 'hidden', flex: 1, margin: '0 16px', position: 'relative', height: '240px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                background: '#FFFFFF',
                borderLeft: '4px solid var(--primary-teal)',
                padding: '32px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div style={{ fontSize: '18px', fontStyle: 'italic', color: 'var(--text-gray)', marginBottom: '20px' }}>
                "{testimonials[currentIndex].quote}"
              </div>
              <div>
                <strong style={{ fontSize: '14px', color: 'var(--primary-blue)', display: 'block' }}>
                  {testimonials[currentIndex].name}
                </strong>
                <p style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-gray)', margin: '2px 0' }}>
                  {testimonials[currentIndex].title}
                </p>
                <p style={{ fontSize: '12px', color: 'var(--text-gray)', margin: 0 }}>
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button onClick={handleNext} style={{ padding: '12px', color: 'var(--primary-teal)', cursor: 'pointer' }}>
          <ChevronRight size={24} />
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: currentIndex === idx ? 'var(--primary-teal)' : 'var(--border-light)',
              transition: 'background 0.3s'
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
