interface ProblemSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function ProblemSection({ scrollToSection }: ProblemSectionProps) {

  return (
    <section className="relative overflow-hidden" id="problems" data-testid="problem-section">
      <div className="band-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-14 lg:py-20 flex flex-col items-center text-center">
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.15] uppercase text-white max-w-4xl">
              STOP GUESSING WITH YOUR MARKETING — <span className="text-red-400">GET A PLAN THAT WORKS</span>
            </h2>
            <div className="w-16 h-1 bg-yellow-400 my-5" />
            <p className="font-display font-normal italic text-2xl sm:text-3xl lg:text-4xl leading-[1.15] text-stone-300">
              & a Team You Can Trust
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
