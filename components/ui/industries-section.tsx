import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Heart, Car, GraduationCap, ShoppingBag, Church, HardHat, Factory, Stethoscope, Sparkles } from "lucide-react";
import Link from "next/link";

export default function IndustriesSection() {
  const industries = [
    { name: "Accounting", icon: Building2 },
    { name: "Healthcare", icon: Heart },
    { name: "Automotive", icon: Car },
    { name: "Dental", icon: Stethoscope },
    { name: "Education", icon: GraduationCap },
    { name: "Consumer Goods", icon: ShoppingBag },
    { name: "Non-Profits", icon: Church },
    { name: "Construction", icon: HardHat },
    { name: "Manufacturing", icon: Factory },
    { name: "Your Industry", icon: Sparkles },
  ];

  return (
    <section className="bg-charcoal-900 py-20 lg:py-28 relative overflow-hidden" data-testid="industries-section">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="label-industrial inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
            <Building2 className="w-4 h-4" />
            INDUSTRIES WE SERVE
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95] mb-4">
            WE BUILD BUSINESSES<br />
            <span className="text-yellow-400">IN EVERY INDUSTRY</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Everybody is selling something. Our job is to understand your customer and get you in front of them.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isHighlight = industry.name === "Your Industry";
            return (
              <div
                key={industry.name}
                className={`group relative p-6 text-center border-2 transition-all duration-200 cursor-default ${
                  isHighlight
                    ? "bg-yellow-400 border-yellow-400 text-charcoal-900"
                    : "bg-charcoal-800/50 border-charcoal-700 hover:border-yellow-400/50 hover:bg-charcoal-800"
                }`}
                data-testid={`industry-item-${index}`}
              >
                <div className={`w-12 h-12 mx-auto mb-3 flex items-center justify-center ${
                  isHighlight
                    ? "bg-charcoal-900"
                    : "bg-yellow-400/10 border border-yellow-400/20 group-hover:bg-yellow-400/20"
                }`}>
                  <Icon className={`w-6 h-6 ${isHighlight ? "text-yellow-400" : "text-yellow-400"}`} strokeWidth={1.5} />
                </div>
                <span className={`font-display font-bold text-sm uppercase tracking-wide block ${
                  isHighlight ? "text-charcoal-900" : "text-white"
                }`}>
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/request-quote">
            <Button
              size="xl"
              className="bg-yellow-400 text-charcoal-900 hover:bg-yellow-300 border-2 border-yellow-400 font-bold text-lg"
              data-testid="button-industries-cta"
            >
              GET A FREE QUOTE
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
