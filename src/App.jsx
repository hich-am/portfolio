import React, { useState, useRef, useCallback } from 'react';

const projects = [
  {
    id: 1,
    title: 'Brand Identity System',
    category: 'Branding & Visual Identity',
    image: '/portfolio/projects/branding.png',
  },
  {
    id: 2,
    title: 'Finance App UI/UX',
    category: 'App Design',
    image: '/portfolio/projects/appdesign.png',
  },
  {
    id: 3,
    title: 'Aura Botanica Packaging',
    category: 'Packaging Design',
    image: '/portfolio/projects/packaging.png',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    category: 'Web Design & Development',
    image: '/portfolio/projects/webdesign.png',
  },
  {
    id: 5,
    title: 'Contemporary Visions',
    category: 'Editorial & Exhibition',
    image: '/portfolio/projects/editorial.png',
  },
];

const experiences = [
  {
    year: '2024',
    entries: [
      {
        company: 'Studio Collective',
        role: 'Senior Visual Designer',
        bullets: [
          'Led brand identity systems for 8+ international clients',
          'Directed a team of 3 junior designers on packaging projects',
          'Established a modular design system reducing turnaround by 40%',
        ],
      },
    ],
  },
  {
    year: '2022',
    entries: [
      {
        company: 'Freelance',
        role: 'Graphic Designer & Art Director',
        bullets: [
          'Created visual identities for startups across fintech and wellness',
          'Designed editorial layouts for two independent magazines',
          'Collaborated with developers to ship 4 production websites',
        ],
      },
      {
        company: 'Neon Agency',
        role: 'UI/UX Designer',
        bullets: [
          'Owned end-to-end design for a B2B SaaS dashboard',
          'Conducted user research sessions and translated insights into wireframes',
        ],
      },
    ],
  },
  {
    year: '2020',
    entries: [
      {
        company: 'CreativePulse Inc.',
        role: 'Junior Designer',
        bullets: [
          'Produced social media assets for campaigns reaching 2M+ impressions',
          'Assisted in packaging design for a national retail launch',
          'Built print-ready files and managed prepress workflows',
        ],
      },
    ],
  },
  {
    year: '2019',
    entries: [
      {
        company: 'University Design Lab',
        role: 'Design Intern',
        bullets: [
          'Designed event posters and promotional materials for 12 campus events',
          'Collaborated on a rebranding initiative for the student union',
        ],
      },
    ],
  },
];

const stackCells = [
  { category: 'Design', tools: ['Photoshop', 'Illustrator', 'InDesign', 'XD', 'Figma'] },
  { category: 'Motion', tools: ['After Effects', 'Premiere Pro', 'Lottie'] },
  { category: 'Frontend', tools: ['HTML / CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
  { category: 'Backend', tools: ['Node.js', 'PHP', 'SQL', 'REST APIs'] },
  { category: '3D & Render', tools: ['Blender', 'Cinema 4D', 'KeyShot'] },
  { category: 'Prototyping', tools: ['Figma Prototyping', 'Principle', 'ProtoPie'] },
  { category: 'Workflow', tools: ['Git / GitHub', 'Jira', 'Notion', 'Slack'] },
  { category: 'Languages', tools: ['English — Fluent', 'French — Intermediate', 'Arabic — Native'] },
];

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const stageRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = useCallback(() => {
    if (!stageRef.current) return;
    const scrollTop = stageRef.current.scrollTop;
    const vh = window.innerHeight;

    const experienceEl = document.getElementById('experience');
    const workEl = document.getElementById('work');

    if (workEl && scrollTop >= workEl.offsetTop - vh * 0.3) {
      setActiveSection('work');
    } else if (experienceEl && scrollTop >= experienceEl.offsetTop - vh * 0.3) {
      setActiveSection('experience');
    } else {
      setActiveSection('hero');
    }
  }, []);

  return (
    <>
      {/* ========== SIDEBAR ========== */}
      <aside className="sidebar" id="sidebar">
        {/* Monogram */}
        <div>
          <div className="sidebar__monogram">YN</div>

          {/* Primary Navigation */}
          <nav className="sidebar__nav">
            <button
              className={`sidebar__nav-link ${activeSection === 'hero' ? 'sidebar__nav-link--active' : ''}`}
              onClick={() => stageRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              About
            </button>
            <button
              className={`sidebar__nav-link ${activeSection === 'experience' ? 'sidebar__nav-link--active' : ''}`}
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </button>
            <button
              className={`sidebar__nav-link ${activeSection === 'work' ? 'sidebar__nav-link--active' : ''}`}
              onClick={() => scrollToSection('work')}
            >
              Work
            </button>
            <button className="sidebar__nav-link">CV</button>
          </nav>
        </div>

        {/* Footer: Contact & Socials */}
        <div className="sidebar__footer">
          <div>
            <div className="sidebar__section-label">Contact</div>
            <a href="mailto:your.email@example.com" className="sidebar__footer-link">
              your.email@example.com
            </a>
            <span className="sidebar__footer-link">+XX XXX XXX XXXX</span>
          </div>
          <div>
            <div className="sidebar__section-label">Socials</div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar__footer-link"
            >
              LinkedIn
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar__footer-link"
            >
              Dribbble
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar__footer-link"
            >
              Behance
            </a>
          </div>
        </div>
      </aside>

      {/* ========== MAIN STAGE ========== */}
      <main className="stage" ref={stageRef} onScroll={handleScroll}>
        {/* ---------- SECTION 1: HERO ---------- */}
        <section className="hero" id="hero">
          <h1 className="hero__headline">
            <span>Creative</span>
            <span>
              <span className="hero__accent">Designer</span> &
            </span>
            <span>Visual Storyteller</span>
          </h1>
          <p className="hero__subtitle">
            I craft thoughtful visual experiences that bridge aesthetics
            and function — from brand identities and packaging to digital
            interfaces and editorial design.
          </p>
          <div className="hero__scroll-hint" onClick={() => scrollToSection('experience')}>
            <span className="hero__scroll-line" />
            Scroll to explore
          </div>
        </section>

        {/* ---------- SECTION 2: EXPERIENCE ---------- */}
        <section className="experience" id="experience">
          <div className="experience__header">
            <h2 className="experience__title">Experience</h2>
          </div>

          <div className="experience__timeline">
            {experiences.map((yearGroup) => (
              <div className="experience__year-block" key={yearGroup.year}>
                {/* Left column — sticky year */}
                <div className="experience__year-col">
                  <span className="experience__year">{yearGroup.year}</span>
                </div>

                {/* Right column — entries */}
                <div className="experience__detail-col">
                  {yearGroup.entries.map((entry, idx) => (
                    <div className="experience__entry" key={idx}>
                      <h3 className="experience__company">{entry.company}</h3>
                      <p className="experience__role">{entry.role}</p>
                      <ul className="experience__bullets">
                        {entry.bullets.map((b, i) => (
                          <li key={i}>
                            <span className="experience__bullet-marker">+</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                      {/* Separator between entries within same year */}
                      {idx < yearGroup.entries.length - 1 && (
                        <hr className="experience__separator" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- SECTION 3: TECHNICALS & STACK ---------- */}
        <section className="stack" id="stack">
          <div className="stack__header">
            <h2 className="stack__title">Technicals & Stack</h2>
          </div>
          <div className="stack__grid">
            {stackCells.map((cell, idx) => (
              <div className="stack__cell" key={idx}>
                <span className="stack__cell-category">{cell.category}</span>
                <ul className="stack__cell-tools">
                  {cell.tools.map((tool, i) => (
                    <li key={i}>{tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- SECTION 4: WORK ACCORDION ---------- */}
        <section className="work" id="work">
          {projects.map((project) => (
            <div className="work__panel" key={project.id}>
              {/* Background image */}
              <div
                className="work__panel-image"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              {/* Gradient overlay */}
              <div className="work__panel-overlay" />
              {/* Text content */}
              <div className="work__panel-content">
                <div className="work__panel-number">
                  {String(project.id).padStart(2, '0')}
                </div>
                <div className="work__panel-title">{project.title}</div>
                <div className="work__panel-category">{project.category}</div>
                <button className="work__panel-cta">
                  Explore Project{' '}
                  <span className="work__panel-cta-arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default App;