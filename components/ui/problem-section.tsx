import { Button } from "@/components/ui/button";
import { X, Clock, DollarSign, TrendingDown, ArrowRight } from "lucide-react";
import Link from "next/link";
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
              <div className="flex items-center gap-4 mb-4">
                <span className="stamp inline-flex items-center gap-2 text-red-500 border-red-500 bg-red-500/10">
                  <X className="w-4 h-4" />
                  THE PROBLEM
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl leading-[1.1] uppercase text-white mb-3">
                MARKETING SHOULD <span className="text-red-400">MAKE YOU MONEY</span>
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

      <div className="band-yellow py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <h3 className="font-display font-black text-2xl uppercase text-charcoal-900">
                YOU DESERVE <span className="shine-yellow">MORE.</span>
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                <div className="bento-card px-4 py-3 text-center bg-white">
                  <div className="font-display font-black text-2xl text-charcoal-900 leading-none">26+</div>
                  <p className="label-industrial text-stone-500 text-[10px]">Years</p>
                </div>
                <div className="bento-card px-4 py-3 text-center bg-white">
                  <div className="font-display font-black text-2xl text-charcoal-900 leading-none">1000+</div>
                  <p className="label-industrial text-stone-500 text-[10px]">Clients</p>
                </div>
                <div className="bento-card px-4 py-3 text-center bg-white">
                  <div className="flex items-center justify-center gap-0.5 leading-none">
                    <span className="font-display font-black text-2xl text-charcoal-900">5</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="label-industrial text-stone-500 text-[10px]">Rating</p>
                </div>
              </div>

              <Link href="/request-quote">
                <Button
                  variant="secondary"
                  size="lg"
                  data-testid="button-problem-cta"
                >
                  GET YOUR FREE QUOTE
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
