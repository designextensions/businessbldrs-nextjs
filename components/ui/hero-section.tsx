import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { trackEvent } from "@/components/ui/google-analytics";
import { ArrowRight } from "lucide-react";

const heroVideo = "/assets/Untitled_1754143769049.mp4";

export default function HeroSection() {
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);
  const organizationTypes = ["BUSINESSES", "MINISTRIES", "NON-PROFITS"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTypeIndex((prev) => (prev + 1) % organizationTypes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 relative overflow-hidden" data-testid="hero-section">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        preload="auto"
      />
      <div className="absolute inset-0 bg-white/60" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 text-center">
        <div className="mb-6 animate-slide-up stagger-1">
          <span className="label-industrial inline-block px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm">
            AI-POWERED MARKETING FOR <span className="rotating-text" key={currentTypeIndex}>{organizationTypes[currentTypeIndex]}</span>
          </span>
        </div>

        <h1 className="headline-xl text-charcoal-900 mb-6 animate-slide-up stagger-2">
          Clear Message. Proven Strategy. <span className="text-yellow-500">Real Growth.</span>
        </h1>

        <p className="text-editorial-lg text-stone-700 mb-10 max-w-2xl mx-auto animate-slide-up stagger-3">
          Get a team that leverages the latest in AI, combined with StoryBrand messaging, to help you grow!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up stagger-4">
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
          <Link href="/resources">
            <Button
              onClick={() => trackEvent('click', {
                event_category: 'engagement',
                event_label: 'hero_resources_button',
                button_location: 'hero_section'
              })}
              variant="outline"
              size="xl"
              className="w-full sm:w-auto whitespace-nowrap"
              data-testid="button-hero-resources"
            >
              FREE RESOURCES
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
