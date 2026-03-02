interface ProblemSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function ProblemSection({ scrollToSection }: ProblemSectionProps) {

  return (
    <section className="relative overflow-hidden" id="problems" data-testid="problem-section">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/927193763?h=f357da8288&background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full"
            style={{ aspectRatio: '16/9' }}
            frameBorder="0"
            allow="autoplay; fullscreen"
            title="Background video"
          />
          <div className="absolute inset-0 bg-charcoal-900/70" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-12 lg:py-16 flex flex-col items-center text-center gap-2">
            <p className="label-industrial text-red-400 tracking-[0.2em] text-xs mb-1">
              STOP GUESSING WITH YOUR MARKETING
            </p>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.1] uppercase">
              <span className="text-white">Get a Plan That </span>
              <span className="text-yellow-400">Works</span>
            </h2>
            <p className="font-display font-light italic text-xl sm:text-2xl lg:text-3xl text-stone-400 mt-1">
              & a team you can trust
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
