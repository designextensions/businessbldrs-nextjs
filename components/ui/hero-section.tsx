import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { trackEvent } from "@/components/ui/google-analytics";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const organizationTypes = ["BUSINESSES", "MINISTRIES", "NON-PROFITS"];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentTypeIndex((prev) => (prev + 1) % organizationTypes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-16 relative overflow-hidden bg-white" data-testid="hero-section">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-18 text-center">
        <div className="mb-6">
          <span className="label-industrial inline-block px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm">
            AI-POWERED MARKETING FOR{" "}
            <span className="rotating-text" key={mounted ? currentTypeIndex : "initial"} suppressHydrationWarning>
              {organizationTypes[currentTypeIndex]}
            </span>
          </span>
        </div>

        <h1 className="headline-xl text-charcoal-900 mb-6">
          Clear Message. <br />
          <span className="italic font-bold">Proven Strategy.</span> <br />
          <span className="text-yellow-500">Real Growth.</span>
        </h1>

        <p className="text-editorial-lg text-stone-700 mb-10 max-w-2xl mx-auto">
          Get a team that leverages the latest in AI, combined with StoryBrand messaging, to help you grow!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/request-quote">
            <button
              onClick={() => trackEvent('click', {
                event_category: 'engagement',
                event_label: 'hero_cta_quote_button',
                button_location: 'hero_section'
              })}
              className="w-full sm:w-auto whitespace-nowrap bg-charcoal-900 text-white px-8 py-4 font-bold tracking-wide text-lg flex items-center justify-center gap-3 border-b-4 border-yellow-400 hover:bg-charcoal-800 transition-colors"
              data-testid="button-hero-quote"
            >
              REQUEST A QUOTE
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <Link href="/marketing-audit">
            <Button
              onClick={() => trackEvent('click', {
                event_category: 'engagement',
                event_label: 'hero_marketing_audit_button',
                button_location: 'hero_section'
              })}
              variant="outline"
              size="xl"
              className="w-full sm:w-auto whitespace-nowrap"
              data-testid="button-hero-audit"
            >
              FREE MARKETING AUDIT
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative w-full h-[200px] overflow-hidden bg-charcoal-900">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/assets/Untitled_1754143769049.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/40 via-transparent to-charcoal-900/40" />
      </div>
    </section>
  );
}
