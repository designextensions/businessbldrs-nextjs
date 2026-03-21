"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, X, Monitor } from "lucide-react";

const mustHaves = [
  {
    title: "A Clear One-Liner Above the Fold",
    description: "In five seconds, a visitor should know: what you offer, who it's for, and why it matters. If your headline starts with 'We' or your company name, it's wrong."
  },
  {
    title: "The Customer as the Hero",
    description: "Every word on the page should be about the customer's problem and transformation — not your history, your awards, or your passion. The customer should see themselves in the story."
  },
  {
    title: "A Single, Prominent Call to Action",
    description: "One clear CTA button above the fold (and repeated throughout). Don't dilute it with five different options. Tell visitors exactly what to do next."
  },
  {
    title: "The Problem Stated Early",
    description: "Name the pain your customer is experiencing — both the external problem and how it makes them feel. When people feel understood, they keep reading."
  },
  {
    title: "Your Authority Established Quickly",
    description: "Logos, numbers, certifications, and testimonials — placed early and strategically. Customers need to trust you before they give you their money or their time."
  },
  {
    title: "A Simple 3-Step Plan",
    description: "Show visitors exactly how working with you works. Three steps maximum. This removes friction and makes the decision to reach out feel safe and easy."
  },
  {
    title: "A Stakes Section",
    description: "What happens if they don't act? And what does winning look like? Great StoryBrand sites show both failure and success — so the decision feels clear."
  },
  {
    title: "A Transitional CTA",
    description: "Not every visitor is ready to buy. A secondary offer — a free guide, a video, a quiz — gives them a low-friction way to stay connected until they're ready."
  },
];

const antiPatterns = [
  "A slider/carousel above the fold",
  "Your company story as the opening headline",
  "More than one primary CTA on the homepage",
  "Dense paragraphs with no visual breaks",
  "No mention of the customer's specific problem",
  "Missing social proof or credentials",
  "No clear next step after the hero section",
];

export default function StorybrandWebsitePage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="pt-32 pb-16 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="label-industrial inline-block px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
              STORYBRAND WEB DESIGN
            </span>
            <h1 className="headline-lg text-white mb-6">
              WHAT DOES A<br />
              <span className="text-yellow-400">STORYBRAND WEBSITE</span><br />
              LOOK LIKE?
            </h1>
            <p className="text-editorial text-stone-400 mb-8 max-w-2xl">
              A StoryBrand website isn't just good-looking — it's structured to convert. Every section, every headline, and every button is placed with intention based on how the brain processes story.
            </p>
            <Button asChild size="lg" className="bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset hover-press font-bold">
              <Link href="/storybrand-agency">
                Build Your StoryBrand Website
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Must-Haves */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="label-industrial text-yellow-600 mb-2 block">THE ANATOMY</span>
            <h2 className="headline-md font-display uppercase text-charcoal-900 mb-4">
              8 Elements Every StoryBrand <span className="text-yellow-500">Website Needs</span>
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              These aren't design preferences — they're proven elements that move visitors through a story arc and toward a decision.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {mustHaves.map((item, i) => (
              <div key={i} className="p-6 border-2 border-charcoal-200 bg-white hover:border-yellow-400 transition-colors">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-yellow-400 border-2 border-charcoal-900 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-charcoal-900" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-charcoal-900 uppercase text-sm mb-2">{item.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Avoid */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-industrial text-yellow-400 mb-2 block">COMMON MISTAKES</span>
              <h2 className="headline-md font-display uppercase text-white mb-6">
                What Most Websites <span className="text-yellow-400">Get Wrong</span>
              </h2>
              <p className="text-stone-400 leading-relaxed mb-6">
                Most websites are built around what the company wants to say — not what the customer needs to hear. These are the most common patterns that kill conversions, even on beautifully designed sites.
              </p>
              <ul className="space-y-3">
                {antiPatterns.map((pattern, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-red-400" />
                    </div>
                    <span className="text-stone-300 text-sm">{pattern}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-charcoal-800 border-2 border-yellow-400 shadow-offset-yellow">
              <Monitor className="w-12 h-12 text-yellow-400 mb-6" />
              <h3 className="font-display font-bold text-white uppercase text-lg mb-4">
                We Build StoryBrand Websites That Convert
              </h3>
              <p className="text-stone-400 leading-relaxed mb-6">
                Business Builders is a <Link href="/storybrand-agency" className="text-yellow-400 hover:underline font-bold">StoryBrand Certified Agency</Link> endorsed by Donald Miller. We apply the framework to every website we build — from the wireframe to the final launch.
              </p>
              <Button asChild className="w-full bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset hover-press font-bold">
                <Link href="/storybrand-agency">
                  See Our StoryBrand Websites
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 band-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="label-industrial text-charcoal-700 mb-2 block">READY TO REBUILD?</span>
          <h2 className="headline-md font-display uppercase text-charcoal-900 mb-6">
            Your Website Should Work as Hard <span className="underline decoration-4">as You Do</span>
          </h2>
          <p className="text-lg text-charcoal-800 mb-8 max-w-2xl mx-auto">
            If your website isn't generating leads, it's probably a messaging problem — not a design problem. Let's fix it with a StoryBrand-driven redesign.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-charcoal-900 text-white px-8 py-4 font-bold shadow-offset hover-press">
              <Link href="/storybrand-agency">
                Work With Our StoryBrand Agency
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-charcoal-900 text-charcoal-900 px-8 py-4 font-bold hover:bg-charcoal-900 hover:text-white transition-all">
              <Link href="/request-quote">Get a Free Website Quote</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
