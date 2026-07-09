function IntroSection() {
  return (
    <section className="px-8 md:px-12 lg:px-16 pt-8 pb-24">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-none mb-6 fade-in fade-in-delay-1">
        Ryan Lalani
      </h1>

      <hr className="w-16 border-t-2 border-neutral-900 mb-8 fade-in fade-in-delay-3" />

      <div className="max-w-2xl fade-in fade-in-delay-4">
        <p className="text-neutral-500 leading-relaxed text-base mb-4">
          I am currently an Electrical Engineering student at Brown University. Next Summer I will be working at{' '}
          <a href="https://www.evercore.com/" target="_blank" rel="noopener noreferrer" className="underline-link text-neutral-700">Evercore</a>'s Tech M&A group. Recently, I've been enjoying rock climbing, running, MMA, and Steve Lacy.
        </p>
        <p className="text-neutral-500 leading-relaxed text-base mb-4">
          Currently learning about: Physical AI
        </p>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return <IntroSection />;
}
