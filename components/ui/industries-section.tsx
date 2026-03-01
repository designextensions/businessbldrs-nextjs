import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Heart, Car, GraduationCap, ShoppingBag, Church, HardHat, Factory, Stethoscope, Sparkles, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function IndustriesSection() {
  const industries = [
    { name: "Accounting", icon: Building2, link: "/industries/accounting" },
    { name: "Healthcare", icon: Heart, link: "/industries/healthcare" },
    { name: "Automotive", icon: Car, link: "/industries/automotive" },
    { name: "Dental", icon: Stethoscope, link: "/industries/dental" },
    { name: "Education", icon: GraduationCap, link: "/industries/education" },
    { name: "Consumer Goods", icon: ShoppingBag, link: "/industries/consumer-goods" },
    { name: "Churches & Ministries", icon: Church, link: "https://ministrybuilders.com", external: true },
    { name: "Construction", icon: HardHat, link: "/industries/construction" },
    { name: "Manufacturing", icon: Factory, link: "/industries/manufacturing" },
    { name: "Your Industry", icon: Sparkles, link: "/request-quote" },
  ] as const;

  return (
    <section className="bg-charcoal-900 py-16 lg:py-20 relative overflow-hidden" id="industries" data-testid="industries-section">
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
            const isExternal = "external" in industry && industry.external;

            const cardContent = (
              <>
                <div className={`w-12 h-12 mx-auto mb-3 flex items-center justify-center ${
                  isHighlight
                    ? "bg-charcoal-900"
                    : "bg-yellow-400/10 border border-yellow-400/20 group-hover:bg-yellow-400/20"
                }`}>
                  <Icon className="w-6 h-6 text-yellow-400" strokeWidth={1.5} />
                </div>
                <span className={`font-display font-bold text-sm uppercase tracking-wide block ${
                  isHighlight ? "text-charcoal-900" : "text-white"
                }`}>
                  {industry.name}
                </span>
                {isExternal && (
                  <ExternalLink className="w-3 h-3 text-stone-500 absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </>
            );

            const cardClassName = `group relative p-6 text-center border-2 transition-all duration-200 cursor-pointer hover:translate-y-[-2px] ${
              isHighlight
                ? "bg-yellow-400 border-yellow-400 text-charcoal-900 hover:bg-yellow-300"
                : "bg-charcoal-800/50 border-charcoal-700 hover:border-yellow-400/50 hover:bg-charcoal-800"
            }`;

            if (isExternal) {
              return (
                <a
                  key={industry.name}
                  href={industry.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClassName}
                  data-testid={`industry-item-${index}`}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <Link
                key={industry.name}
                href={industry.link}
                className={cardClassName}
                data-testid={`industry-item-${index}`}
              >
                {cardContent}
              </Link>
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
