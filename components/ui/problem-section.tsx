interface ProblemSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function ProblemSection({ scrollToSection }: ProblemSectionProps) {

  return (
    <section className="relative overflow-hidden" id="problems" data-testid="problem-section">
      <div className="band-dark relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-12 lg:py-16 flex flex-col items-center text-center gap-2">
            <p className="label-industrial text-yellow-400 tracking-[0.2em] text-xs mb-1">
              STOP GUESSING WITH YOUR MARKETING
            </p>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.1] uppercase">
              <span className="text-white">Get a Plan That </span>
              <span className="text-red-400">Works</span>
            </h2>
            <p className="font-display font-normal italic text-xl sm:text-2xl lg:text-3xl text-stone-400 mt-1">
              & a team you can trust
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
