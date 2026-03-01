import { Clock, DollarSign, TrendingDown } from "lucide-react";
const stressedBusinessPerson = "/assets/stock_images/stressed_business_pr_8aedf5dd.jpg";

interface ProblemSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function ProblemSection({ scrollToSection }: ProblemSectionProps) {
  const painPoints = [
    { icon: Clock, text: "Wasting time on tactics that don't work" },
    { icon: DollarSign, text: "Burning through marketing budgets" },
    { icon: TrendingDown, text: "Watching competitors pull ahead" },
  ];

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
                STOP GUESSING WITH YOUR MARKETING — <span className="text-red-400">GET A PLAN THAT WORKS</span> & A TEAM YOU CAN TRUST
              </h2>

              <div className="flex flex-wrap gap-3 mb-0">
                {painPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-charcoal-800 border border-charcoal-700 px-3 py-2"
                      data-testid={`pain-point-${index}`}
                    >
                      <Icon className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <p className="text-white font-display font-semibold uppercase tracking-wide text-xs">{point.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
