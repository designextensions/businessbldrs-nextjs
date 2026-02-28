import { Button } from "@/components/ui/button";
import { X, Clock, DollarSign, TrendingDown, ArrowRight, CheckCircle } from "lucide-react";
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
        {/* Background image positioned on the right */}
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
          <div className="py-20 lg:py-28 lg:w-1/2">
            <div className="max-w-xl">
              <div className="mb-8">
                <span className="stamp inline-flex items-center gap-2 text-red-500 border-red-500 bg-red-500/10">
                  <X className="w-4 h-4" />
                  THE PROBLEM
                </span>
              </div>
              
              <h2 className="headline-lg text-white mb-6">
                MARKETING SHOULD<br />
                <span className="text-red-400">MAKE YOU MONEY,</span><br />
                NOT WASTE IT
              </h2>
              
              <p className="text-editorial text-stone-400 mb-10">
                Most organizations waste time and money on marketing that doesn't work. Poor results lead to missed opportunities, stressed leaders, and stalled growth.
              </p>

              <div className="space-y-4 mb-10">
                {painPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-center gap-4 bg-charcoal-800 border-2 border-charcoal-700 p-4"
                      data-testid={`pain-point-${index}`}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 border border-red-500/50 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-red-400" />
                      </div>
                      <p className="text-white font-display font-semibold uppercase tracking-wide text-sm">{point.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile image */}
        <div className="relative min-h-[300px] lg:hidden">
          <img 
            src={stressedBusinessPerson} 
            alt="Business owner stressed about marketing challenges"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 to-transparent" />
        </div>
      </div>

      <div className="band-yellow py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="headline-lg text-charcoal-900 mb-4">
              YOU DESERVE <span className="shine-yellow">MORE.</span>
            </h3>
            <p className="text-editorial-lg text-charcoal-700">
              We can help you get there.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bento-card p-8 text-center bg-white">
              <div className="headline-md text-charcoal-900 mb-2">26+</div>
              <p className="label-industrial text-stone-500">Years of Experience</p>
            </div>
            <div className="bento-card p-8 text-center bg-white">
              <div className="headline-md text-charcoal-900 mb-2">1000+</div>
              <p className="label-industrial text-stone-500">Businesses Helped</p>
            </div>
            <div className="bento-card p-8 text-center bg-white">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="headline-md text-charcoal-900">5</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="label-industrial text-stone-500">Star Rating</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/request-quote">
              <Button 
                variant="secondary"
                size="xl"
                data-testid="button-problem-cta"
              >
                GET YOUR FREE QUOTE
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
