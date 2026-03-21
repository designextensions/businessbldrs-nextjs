"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Award, BookOpen, Wrench, TrendingUp } from "lucide-react";

const agencyServices = [
  {
    icon: BookOpen,
    title: "BrandScript Development",
    description: "A certified agency facilitates your BrandScript workshop and documents the messaging framework your team will use across all marketing channels."
  },
  {
    icon: Wrench,
    title: "Website Design & Development",
    description: "They apply the StoryBrand framework to your website architecture — from the headline to the CTA structure — to build a site that converts visitors into leads."
  },
  {
    icon: Award,
    title: "Marketing Messaging",
    description: "Every email, ad, social post, and sales pitch flows from your BrandScript. A certified agency trains your team and builds templates from your core message."
  },
  {
    icon: TrendingUp,
    title: "Ongoing Strategy",
    description: "A true StoryBrand partner doesn't just deliver a document. They integrate the framework into your campaigns, content, and sales process over time."
  }
];

const doYouNeedOne = [
  "Your website gets traffic but few leads or calls",
  "You struggle to explain what you do in a sentence or two",
  "Your marketing feels inconsistent or unclear",
  "You've tried marketing tactics that didn't work",
  "Your sales team has trouble articulating your value",
  "Competitors with worse products seem to win more business",
];

const questionsToAsk = [
  "Are you StoryBrand Certified by Donald Miller's organization?",
  "Can you show us websites you've built using the StoryBrand framework?",
  "Do you facilitate BrandScript workshops, or just apply the framework yourself?",
  "How do you integrate StoryBrand with ongoing marketing strategy?",
  "What does the onboarding process look like?",
];

export default function WhatIsAStorybrandAgencyPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="pt-32 pb-16 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="label-industrial inline-block px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
              MARKETING GUIDE
            </span>
            <h1 className="headline-lg text-white mb-6">
              WHAT DOES A<br />
              <span className="text-yellow-400">STORYBRAND CERTIFIED</span><br />
              AGENCY DO?
            </h1>
            <p className="text-editorial text-stone-400 mb-8 max-w-2xl">
              A StoryBrand Certified Agency is trained and tested by Donald Miller's organization to apply the StoryBrand framework to real businesses. Here's what they actually do — and how to find a good one.
            </p>
            <Button asChild size="lg" className="bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset hover-press font-bold">
              <Link href="/storybrand-agency">
                See Business Builders' StoryBrand Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What They Do */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="label-industrial text-yellow-600 mb-2 block">THE ROLE</span>
            <h2 className="headline-md font-display uppercase text-charcoal-900 mb-4">
              What a StoryBrand Agency <span className="text-yellow-500">Actually Does</span>
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              It's more than messaging. A certified agency applies the framework at every layer of your marketing — from your first touchpoint to your close.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {agencyServices.map((service, i) => (
              <div key={i} className="p-6 bg-white border-2 border-charcoal-800 shadow-offset hover:border-yellow-400 transition-colors">
                <div className="w-12 h-12 bg-yellow-400 border-2 border-charcoal-900 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-charcoal-900" />
                </div>
                <h3 className="font-display font-bold text-charcoal-900 uppercase mb-2">{service.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Do You Need One */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="label-industrial text-yellow-400 mb-2 block">IS IT RIGHT FOR YOU?</span>
              <h2 className="headline-md font-display uppercase text-white mb-6">
                Signs You Need a <span className="text-yellow-400">StoryBrand Agency</span>
              </h2>
              <p className="text-stone-400 leading-relaxed mb-6">
                Most businesses that come to us don't have a marketing problem — they have a clarity problem. If any of these sound familiar, StoryBrand is likely your solution:
              </p>
              <ul className="space-y-3">
                {doYouNeedOne.map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-300 text-sm">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="label-industrial text-yellow-400 mb-2 block">BEFORE YOU HIRE</span>
              <h2 className="headline-md font-display uppercase text-white mb-6">
                Questions to Ask <span className="text-yellow-400">Any StoryBrand Agency</span>
              </h2>
              <p className="text-stone-400 leading-relaxed mb-6">
                Not every agency that mentions StoryBrand is actually certified. Here's what to ask before you commit:
              </p>
              <ul className="space-y-3">
                {questionsToAsk.map((q, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-charcoal-900 font-display font-bold text-xs">
                      {i + 1}
                    </div>
                    <span className="text-stone-300 text-sm">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About BB */}
      <section className="py-20 band-stone">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 lg:p-12 bg-white border-2 border-charcoal-800 shadow-offset text-center">
            <span className="label-industrial text-yellow-600 mb-2 block">BY THE WAY</span>
            <h2 className="headline-sm font-display uppercase text-charcoal-900 mb-4">
              We're a StoryBrand Certified Agency. <span className="text-yellow-500">Endorsed by Donald Miller.</span>
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6 max-w-2xl mx-auto">
              Business Builders has been a StoryBrand Certified Agency for years — and we have the video from Donald Miller himself to prove it. We're one of a select group of agencies in the United States trained directly by his organization. We've applied the framework to hundreds of businesses across Florida and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-charcoal-900 text-white px-8 py-4 font-bold shadow-offset hover-press">
                <Link href="/storybrand-agency">
                  See Our StoryBrand Work
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-charcoal-900 text-charcoal-900 px-8 py-4 font-bold hover:bg-charcoal-900 hover:text-white transition-all">
                <Link href="/request-quote">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
