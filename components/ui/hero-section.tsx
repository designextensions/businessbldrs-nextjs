"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { trackEvent } from "@/components/ui/google-analytics";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-900" data-testid="hero-section">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        loop
        aria-hidden="true"
        poster="/video-poster.jpg"
      >
        <source src="/attached_assets/0301.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 via-charcoal-900/60 to-charcoal-900/90" />

      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/50 via-transparent to-charcoal-900/50" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <span className="label-industrial inline-block px-5 py-2.5 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm">
            STORYBRAND CERTIFIED AGENCY
          </span>
        </div>

        <h1 className="headline-xl text-white mb-8 tracking-tight">
          Clear Message. <br />
          <span className="italic font-bold">Proven Strategy.</span> <br />
          <span className="text-yellow-400">Real Growth.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
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
              className="group w-full sm:w-auto whitespace-nowrap bg-charcoal-900 text-white px-8 py-4 font-bold tracking-wide text-lg flex items-center justify-center gap-3 border-b-4 border-yellow-400 hover:bg-charcoal-800 transition-all"
              data-testid="button-hero-quote"
            >
              REQUEST A QUOTE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
              className="w-full sm:w-auto whitespace-nowrap border-white/40 text-white hover:border-white hover:bg-white/10"
              data-testid="button-hero-audit"
            >
              FREE MARKETING AUDIT
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
