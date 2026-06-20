import { useEffect, useRef, useState } from 'react';

const ROLES = [
  'in the trenches.',
  'learning new things.',
  'rock climbing.',
  'writing about tech.',
  'engn psetting.',
  'stuck in sci-li basement.',
  'watching UFC.',
  'yapping about IB.',
  'watching the office.',
];

function useTypewriter(words: string[], speed = 60, pause = 2000) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const experience = [
  { company: 'Evercore', role: 'Incoming Investment Banking Analyst', period: 'Jun 2027 — Aug 2027', description: 'Tech M&A · Menlo Park, CA' },
  { company: 'Constellation Software Inc.', role: 'M&A Research Analyst', period: 'Jun 2026 — Present', description: 'Building AI Agents & Vertical SaaS Research + Buyout · Toronto, ON' },
  { company: 'NJ Governor\'s School of Engineering & Technology', role: 'Researcher', period: 'Jun 2023 — Oct 2023', description: 'Geospatial Analytics Research · Presented at MIT & Published in IEEE Xplore · New Brunswick, NJ' },
];

function HeroSection() {
  const typed = useTypewriter(ROLES);

  return (
    <section className="min-h-screen flex flex-col justify-between px-8 md:px-12 lg:px-16 py-12">
      <div className="flex-1 flex flex-col justify-center pt-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-none mb-0 fade-in fade-in-delay-1">
          Ryan Lalani is
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-none fade-in fade-in-delay-2">
          <span>{typed}</span>
          <span className="cursor-blink">|</span>
        </h1>
      </div>

      <div className="fade-in fade-in-delay-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <p className="mono text-xs text-neutral-400 tracking-widest mb-1">LOCATION</p>
            <p className="mono text-xs text-neutral-500 tracking-wider mb-6">
              BROWN UNIVERSITY<br />
              TORONTO → NEW JERSEY → SAN FRANCISCO
            </p>

            <div className="flex flex-col gap-1">
              <a href="#about" className="mono text-xs tracking-widest underline-link text-neutral-800 w-fit">ABOUT ME</a>
            </div>
          </div>

          <div className="md:text-right">
            <p className="mono text-xs text-neutral-400 tracking-widest mb-1">CURRENTLY</p>
            <div className="flex flex-col md:items-end gap-1">
              <a href="#projects" className="mono text-xs tracking-widest underline-link text-neutral-800 w-fit">PROJECTS</a>
              <a href="https://www.linkedin.com/in/ryanlalani" target="_blank" rel="noopener noreferrer" className="mono text-xs tracking-widest underline-link text-neutral-800 w-fit">LINKEDIN</a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mono text-xs tracking-widest underline-link text-neutral-800 w-fit">RESUME</a>
              <span className="mono text-xs tracking-widest text-neutral-400">MORE</span>
            </div>
          </div>
        </div>

        <hr className="section-divider mb-6" />

        <div className="flex items-center justify-between fade-in fade-in-delay-4">
          <div className="flex items-center gap-6">
            <a href="https://x.com/RyanLalalani" target="_blank" rel="noopener noreferrer" className="mono text-xs tracking-widest text-neutral-600 hover:text-neutral-900 transition-colors">TWITTER</a>
            <a href="https://www.linkedin.com/in/ryanlalani" target="_blank" rel="noopener noreferrer" className="mono text-xs tracking-widest text-neutral-600 hover:text-neutral-900 transition-colors">LINKEDIN</a>
            <a href="mailto:Ryan_lalani@brown.edu" className="mono text-xs tracking-widest text-neutral-600 hover:text-neutral-900 transition-colors">EMAIL</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="mono text-xs tracking-widest text-neutral-800">EN</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="px-8 md:px-12 lg:px-16 py-24 border-t border-neutral-100" ref={ref}>
      <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="mono text-xs text-neutral-400 tracking-widest mb-10">ABOUT</p>
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-snug mb-6">
            Hi, I'm Ryan!
          </h2>
          <p className="text-neutral-500 leading-relaxed text-sm mb-4">
            I've always been curious about how things work. This has led me to studying electrical engineering, to understand the fundamentals of modern technology, and to Technology Investment Banking, to see how the world's most innovative companies scale, position themselves, and make strategic decisions.
          </p>
          <p className="text-neutral-500 leading-relaxed text-sm mb-4">
            AI is changing the world. In the future, alpha will move towards critical thinking, communication, and staying ahead of the technological curve. I built this website to document my journey as I explore the intersection of engineering, finance, and technology.
          </p>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const { ref, inView } = useInView();

  return (
    <section className="px-8 md:px-12 lg:px-16 py-24 border-t border-neutral-100" ref={ref}>
      <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="mono text-xs text-neutral-400 tracking-widest mb-10">EXPERIENCE</p>
        <div className="space-y-0">
          {experience.map((exp) => (
            <div key={exp.company} className="border-t border-neutral-100 py-7">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="font-semibold text-sm tracking-tight">{exp.company}</p>
                  <p className="mono text-xs text-neutral-400 mt-0.5">{exp.period}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm font-medium mb-1 text-neutral-700">{exp.role}</p>
                  <p className="text-sm text-neutral-500 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-neutral-100" />
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="px-8 md:px-12 lg:px-16 py-24 border-t border-neutral-100" ref={ref}>
      <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="mono text-xs text-neutral-400 tracking-widest mb-10">PROJECTS</p>
        <p className="mono text-xs text-neutral-400 tracking-widest">UNDER CONSTRUCTION</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-8 md:px-12 lg:px-16 py-8 border-t border-neutral-100">
      <div className="flex items-center justify-between">
        <span className="mono text-xs text-neutral-400">© {new Date().getFullYear()} RYAN LALANI</span>
        <span className="mono text-xs text-neutral-400">BUILT WITH REACT</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-white text-neutral-900">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
