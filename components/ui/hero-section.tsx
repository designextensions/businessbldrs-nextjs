"use client";

import Link from "next/link";
import { trackEvent } from "@/components/ui/google-analytics";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Business Builders - Clear Message. Proven Strategy. Real Growth.",
    "description": "Business Builders is a StoryBrand certified marketing agency in St. Augustine, FL helping businesses, ministries, and nonprofits grow with proven marketing strategies.",
    "thumbnailUrl": "https://businessbldrs.com/video-poster.jpg",
    "contentUrl": "https://businessbldrs.com/attached_assets/0301.mp4",
    "uploadDate": "2024-01-01",
    "publisher": {
      "@type": "Organization",
      "name": "Business Builders",
      "logo": {
        "@type": "ImageObject",
        "url": "https://businessbldrs.com/logo-full.png"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-900" data-testid="hero-section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        loop
        preload="metadata"
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

        <div className="flex flex-col items-center">
          <Link href="/request-quote">
            <button
              onClick={() => trackEvent('click', {
                event_category: 'engagement',
                event_label: 'hero_cta_quote_button',
                button_location: 'hero_section'
              })}
              className="group w-full sm:w-auto whitespace-nowrap bg-yellow-400 text-charcoal-900 px-10 py-4 font-bold tracking-wide text-lg flex items-center justify-center gap-3 rounded-sm shadow-lg hover:bg-yellow-300 transition-all"
              data-testid="button-hero-quote"
            >
              REQUEST A QUOTE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <p className="text-sm text-white/70 mt-3">
            Takes ~2 minutes &bull; No obligation
          </p>
          <Link
            href="/marketing-audit"
            onClick={() => trackEvent('click', {
              event_category: 'engagement',
              event_label: 'hero_marketing_audit_button',
              button_location: 'hero_section'
            })}
            className="mt-8 text-white underline underline-offset-4 decoration-white/60 hover:decoration-white transition-colors"
            data-testid="button-hero-audit"
          >
            Prefer a low-lift start? Get your free marketing score
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
