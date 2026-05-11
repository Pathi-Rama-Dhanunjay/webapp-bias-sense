import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    // Scroll reveal logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    // Audit card stagger
    const metrics = document.querySelectorAll('.audit-metric');
    metrics.forEach((m, i) => {
      setTimeout(() => m.classList.add('loaded'), 600 + i * 350);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="about-page">
      {/* SECTION 1 — HERO */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <div className="container">
          <div className="hero-inner">
            <div className="hero-left">
              <div className="hero-eyebrow">
                <span className="eyebrow">Our Story</span>
              </div>
              <h1 id="hero-heading">
                We Built BiasSense Because<br />
                <span>the Tools Didn't Exist</span>
              </h1>
              <p className="hero-body">
                AI was making consequential decisions about people's credit, jobs, and healthcare.
                Everyone knew bias existed. Nobody had a system that could prove it, measure it,
                and stop it. So we built one.
              </p>
              {/* 
              <div className="hero-stats" role="list">
                <div className="hero-stat" role="listitem">
                  <span className="hero-stat-num">3 in 5</span>
                  <span className="hero-stat-label">AI models show measurable bias before deployment</span>
                </div>
                <div className="hero-stat" role="listitem">
                  <span className="hero-stat-num">0</span>
                  <span className="hero-stat-label">Platforms unified data health + fairness evidence — until now</span>
                </div>
              </div>
              */}
            </div>

            {/* 
            <div className="hero-right">
              <div className="audit-card" role="img" aria-label="BiasSense audit certificate preview">
                <div className="audit-card-header">
                  <div className="audit-icon" aria-hidden="true">🛡️</div>
                  <div>
                    <div className="audit-title">BiasSense Audit Certificate</div>
                    <div className="audit-sub">Model ID: credit-v3.2 · Evaluation Active</div>
                  </div>
                </div>
                <div className="audit-metrics" role="list">
                  <div className="audit-metric" id="m1" role="listitem">
                    <span className="audit-metric-name">Disparate Impact</span>
                    <span className="audit-metric-val badge-green">
                      <span className="status-dot dot-green" aria-hidden="true"></span>
                      0.87
                    </span>
                  </div>
                  <div className="audit-metric" id="m2" role="listitem">
                    <span className="audit-metric-name">Equal Opportunity</span>
                    <span className="audit-metric-val badge-green">
                      <span className="status-dot dot-green" aria-hidden="true"></span>
                      0.91
                    </span>
                  </div>
                  <div className="audit-metric" id="m3" role="listitem">
                    <span className="audit-metric-name">Label Disparity</span>
                    <span className="audit-metric-val badge-orange">
                      <span className="status-dot dot-orange" aria-hidden="true"></span>
                      0.79
                    </span>
                  </div>
                </div>
                <div className="audit-footer">
                  <span>Cryptographically Signed · May 2026</span>
                  <span className="audit-footer-badge">VERIFIED</span>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
        <div aria-hidden="true" id="particles"></div>
      </section>

      {/* SECTION 2 — PROBLEM NARRATIVE */}
      <section className="problem-section" aria-labelledby="problem-heading">
        <div className="container">
          <div className="problem-inner">
            <div className="reveal" ref={addToRefs}>
              <p className="eyebrow">The Origin</p>
              <h2 id="problem-heading">AI Started Making Decisions Before Anyone Could Check Them</h2>
            </div>
            <p className="problem-body reveal reveal-delay-1" ref={addToRefs}>
              Data teams, ML teams, and compliance teams were all working in silos. A model could
              pass every internal quality check, get signed off by engineering, clear a legal review —
              and still systematically discriminate against women, minorities, or lower-income groups.
              The tools to see this weren't connected. The evidence to stop it didn't exist.
            </p>
            <p className="problem-body reveal reveal-delay-2" ref={addToRefs}>
              ECOA, EEOC, ACA Section 1557, GDPR — regulators were demanding fairness evidence
              that organizations simply could not produce. Audits were failing. Class actions were
              being filed. Fines were mounting. Not because companies didn't care, but because
              they genuinely couldn't see what was happening inside their models.
            </p>
            <p className="problem-body reveal reveal-delay-3" ref={addToRefs}>
              The founding insight was precise: real fairness measurement requires data health
              first. A bias score computed on incomplete or inconsistent data is statistically
              worthless — worse than useless, because it gives false confidence. We built a
              system that measures both, ties them together with a confidence index, and signs
              the result with a cryptographic audit trail.
            </p>
            <div className="key-insight reveal reveal-delay-4" role="blockquote" ref={addToRefs}>
              <p>
                "Data health is the confidence interval on your bias measurement.
                We didn't just build a bias detector — we built proof."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FOUNDING TEAM */}
      <section className="team-section" aria-labelledby="team-heading">
        <div className="container">
          <div className="team-header reveal" ref={addToRefs}>
            <p className="eyebrow">The Team</p>
            <h2 id="team-heading">Built by People Who've Lived the Problem</h2>
            <p>Former regulators, ML engineers, and compliance officers.<br />We've been on both sides of the audit table.</p>
          </div>
          <div className="team-grid" role="list">
            {[
              {
                id: 1, initials: 'AP', name: 'Dr. Aisha Patel',
                title: 'CEO & Co-founder · Former Head of Model Risk, Federal Reserve',
                bio: 'Spent 12 years watching biased models get approved because no one had a better system. Sat across the table from banks who couldn\'t answer basic fairness questions under audit. Built BiasSense to change that permanently.',
                tags: ['Regulatory Policy', 'Model Risk', 'ECOA Compliance']
              },
              {
                id: 2, initials: 'MC', name: 'Marcus Chen',
                title: 'CTO & Co-founder · Ex-Google Brain, ML Infrastructure',
                bio: 'Built production ML systems at scale across three continents. Knew bias was endemic, couldn\'t find a single tool that measured it reliably at deployment speed. The gap was obvious. The solution took four years to build correctly.',
                tags: ['MLOps', 'SHAP / XAI', 'API Architecture']
              },
              {
                id: 3, initials: 'PN', name: 'Dr. Priya Nair',
                title: 'Chief Science Officer · PhD, Algorithmic Fairness · MIT CSAIL',
                bio: 'Published research proved that data quality directly degrades fairness scores — a finding largely ignored by the industry. BiasSense is that research, productized into an enforcement-grade system. The science is the product.',
                tags: ['Fairness Research', 'Statistical Methods', 'Intersectionality']
              }
            ].map((member, i) => (
              <article key={member.id} className={`team-card reveal reveal-delay-${i + 1}`} role="listitem" ref={addToRefs}>
                <div className="team-avatar" aria-hidden="true">{member.initials}</div>
                <div className="team-name">{member.name}</div>
                <div className="team-title">{member.title}</div>
                <p className="team-bio">{member.bio}</p>
                <div className="team-tags" aria-label="Expertise areas">
                  {member.tags.map(tag => <span key={tag} className="team-tag">{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — MISSION */}
      <section className="mission-section" aria-labelledby="mission-heading">
        <div className="mission-bg" aria-hidden="true"></div>
        <div className="mission-overlay" aria-hidden="true"></div>
        <div className="mission-deco-quote" aria-hidden="true">"</div>
        <div className="mission-inner">
          <p className="mission-text reveal" id="mission-heading" ref={addToRefs}>
            "Our mission is simple: make it impossible to deploy a biased AI model without
            knowing it — and give every organization the evidence to prove they tried to stop it."
          </p>
          <p className="mission-attribution reveal reveal-delay-1" ref={addToRefs}>
            — BiasSense Founding Team, 2024
          </p>
        </div>
      </section>

      {/* SECTION 5 — CORE VALUES */}
      <section className="values-section" aria-labelledby="values-heading">
        <div className="container">
          <div className="values-header reveal" ref={addToRefs}>
            <p className="eyebrow">What We Stand For</p>
            <h2 id="values-heading">Our Values Are Encoded Into Every Feature</h2>
            <p>Not a list on a wall. A set of constraints we ship against.</p>
          </div>
          <div className="values-grid" role="list">
            {[
              { icon: '🔬', name: 'Scientific Rigor', desc: 'Every bias score is statistically grounded. We show the math, cite the method, and sign the result. Opinion doesn\'t ship — evidence does.' },
              { icon: '🔒', name: 'Evidence Over Opinion', desc: 'We don\'t advise — we prove. Every recommendation comes with cryptographically signed, auditable evidence that holds up in a regulatory review.' },
              { icon: '🌐', name: 'Fairness for Everyone', desc: 'Bias doesn\'t discriminate about who it harms. Neither does our detection — all protected attributes, all intersections, all populations.' },
              { icon: '🏗️', name: 'Built for Accountability', desc: 'Immutable audit trails. Signed certificates. Five-year evidence retention. We build for the regulatory audit you haven\'t faced yet.' },
              { icon: '🤝', name: 'Compliance as Advantage', desc: 'Regulatory compliance shouldn\'t be a burden. With the right tools and evidence infrastructure, it becomes your defensible competitive moat.' },
              { icon: '🚪', name: 'Enforcement, Not Advisory', desc: 'We don\'t issue warnings — we block deployments. Fairness gates in your CI/CD pipeline that actually prevent harm from reaching production.' }
            ].map((value, i) => (
              <article key={value.name} className={`value-card reveal reveal-delay-${(i % 3) + 1}`} role="listitem" ref={addToRefs}>
                <span className="value-icon" role="img" aria-label={value.name}>{value.icon}</span>
                <div className="value-name">{value.name}</div>
                <p className="value-desc">{value.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — INVESTORS */}
      <section className="investors-section" aria-label="Backed by investors">
        <div className="container investors-inner">
          <p className="investors-label">Backed by Leaders in Responsible AI</p>
          <div className="investors-logos" role="list">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`investor-logo reveal reveal-delay-${i}`} role="listitem" ref={addToRefs}>Investor Logo</div>
            ))}
          </div>
          <p className="investors-note">Investor details available on request</p>
        </div>
      </section>

      {/* SECTION 7 — CTA */}
      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-inner">
            <h2 id="cta-heading" className="reveal" ref={addToRefs}>
              Help Us Make AI <span>Fair — For Everyone</span>
            </h2>
            <p className="cta-body reveal reveal-delay-1" ref={addToRefs}>
              We're a team of scientists, engineers, and compliance experts on a mission.
              If you want to work on the hardest fairness problem in AI — join us.
            </p>
            <div className="open-roles reveal reveal-delay-2" aria-label="Current open roles" ref={addToRefs}>
              <span className="role-pill">ML Engineer</span>
              <span className="role-pill">Fairness Researcher</span>
              <span className="role-pill">Sales Engineer</span>
            </div>
            <div className="cta-buttons reveal reveal-delay-3" ref={addToRefs}>
              <button className="btn-primary" aria-label="See all open roles at BiasSense">
                <span>See Open Roles</span>
                <span aria-hidden="true">→</span>
              </button>
              <button className="btn-ghost" aria-label="Visit BiasSense on LinkedIn">
                <span>Meet the Team on LinkedIn</span>
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
