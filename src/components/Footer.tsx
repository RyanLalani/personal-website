export default function Footer() {
  return (
    <footer className="px-8 md:px-12 lg:px-16 py-8 border-t border-neutral-100 mt-24">
      <div className="flex items-center justify-between mb-4">
        <span className="font-semibold tracking-tight">Ryan Lalani</span>
        <div className="flex items-center gap-6">
          <a href="mailto:Ryan_lalani@brown.edu" className="mono text-xs tracking-widest text-neutral-600 hover:text-neutral-900 underline-link transition-colors">EMAIL</a>
          <a href="https://www.linkedin.com/in/ryanlalani" target="_blank" rel="noopener noreferrer" className="mono text-xs tracking-widest text-neutral-600 hover:text-neutral-900 underline-link transition-colors">LINKEDIN</a>
          <a href="https://x.com/RyanLalalani" target="_blank" rel="noopener noreferrer" className="mono text-xs tracking-widest text-neutral-600 hover:text-neutral-900 underline-link transition-colors">X</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mono text-xs tracking-widest text-neutral-600 hover:text-neutral-900 underline-link transition-colors">RESUME</a>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="mono text-xs text-neutral-400">© {new Date().getFullYear()} RYAN LALANI</span>
      </div>
    </footer>
  );
}
