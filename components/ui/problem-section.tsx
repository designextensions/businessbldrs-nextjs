const stressedBusinessPerson = "/assets/stock_images/stressed_business_pr_8aedf5dd.jpg";

interface ProblemSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function ProblemSection({ scrollToSection }: ProblemSectionProps) {

  return (
    <section className="relative overflow-hidden" id="problems" data-testid="problem-section">
      <div className="band-dark relative">
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img
            src={stressedBusinessPerson}
            alt="Business owner stressed about marketing challenges"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-10 lg:py-12 lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="font-display font-black text-3xl sm:text-4xl leading-[1.1] uppercase text-white mb-3">
                STOP GUESSING WITH YOUR MARKETING — <span className="text-red-400">GET A PLAN THAT WORKS</span> & <span className="font-normal italic">a Team You Can Trust</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
