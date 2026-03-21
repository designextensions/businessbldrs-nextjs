"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const brandscriptElements = [
  {
    label: "CHARACTER",
    question: "Who is your ideal customer, and what do they want?",
    description: "Define your customer as the hero of the story. What is the one thing they want most that your business can help them achieve?"
  },
  {
    label: "PROBLEM",
    question: "What villain (external, internal, philosophical) stands in their way?",
    description: "Name the external problem they face, the internal frustration they feel, and the philosophical reason it's wrong they're experiencing this."
  },
  {
    label: "GUIDE",
    question: "How do you demonstrate empathy and authority?",
    description: "Your brand is the guide. Show you understand the customer's struggle (empathy) and have the expertise to help (authority). Don't be the hero — be Yoda."
  },
  {
    label: "PLAN",
    question: "What simple 3-step process leads them to work with you?",
    description: "Customers won't take action if the path forward is unclear. Create a simple plan (3 steps max) that removes the confusion between 'I'm interested' and 'I'm a customer.'"
  },
  {
    label: "CALL TO ACTION",
    question: "What direct action do you want customers to take?",
    description: "Include a direct CTA (Schedule a Call, Get a Quote) and a transitional CTA (Download Our Guide, Watch the Video). Be bold — don't hint."
  },
  {
    label: "FAILURE",
    question: "What do they lose if they don't act?",
    description: "Every decision has stakes. What does failure look like for your customer? Naming the cost of inaction motivates without manipulating."
  },
  {
    label: "SUCCESS",
    question: "What does life look like after they work with you?",
    description: "Paint the picture of transformation. Customers need to imagine winning before they commit. Be specific about the positive outcome you deliver."
  }
];

const useCases = [
  "Website homepage copy and structure",
  "Email subject lines and body copy",
  "Social media bio and posts",
  "Sales pitch and talking points",
  "Paid ad headlines and descriptions",
  "Video scripts and explainer content",
];

export default function StorybrandBrandscriptPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="pt-32 pb-16 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="label-industrial inline-block px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
              STORYBRAND TOOL
            </span>
            <h1 className="headline-lg text-white mb-6">
              WHAT IS A<br />
              <span className="text-yellow-400">STORYBRAND BRANDSCRIPT?</span>
            </h1>
            <p className="text-editorial text-stone-400 mb-8 max-w-2xl">
              The BrandScript is the foundation of all StoryBrand marketing. It's a one-page document that captures your brand's story and drives every piece of messaging you create — from your website to your sales calls.
            </p>
            <Button asChild size="lg" className="bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset hover-press font-bold">
              <Link href="/storybrand-agency">
                Get Your BrandScript Built by Experts
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What is a BrandScript */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-industrial text-yellow-600 mb-2 block">THE FOUNDATION</span>
              <h2 className="headline-md font-display uppercase text-charcoal-900 mb-6">
                Your Brand's <span className="text-yellow-500">Story on One Page</span>
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                A StoryBrand BrandScript is a one-page messaging document that answers the seven key questions every customer has before they decide to buy. It replaces guesswork and committee debates with a clear, agreed-upon narrative your entire team can use.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                Once your BrandScript is complete, it becomes the source of truth for your website, emails, social media, video scripts, and sales pitches. Everything gets clearer, faster to produce, and more effective.
              </p>
              <p className="text-stone-700 leading-relaxed">
                A <Link href="/storybrand-agency" className="text-yellow-600 font-bold hover:underline">StoryBrand Certified Agency</Link> like Business Builders builds your BrandScript through a structured discovery process — so you leave with a tool your whole team can use.
              </p>
            </div>
            <div className="p-8 bg-charcoal-900 border-2 border-yellow-400 shadow-offset-yellow">
              <p className="label-industrial text-yellow-400 mb-4">WHERE YOUR BRANDSCRIPT GETS USED</p>
              <ul className="space-y-3">
                {useCases.map((use, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-stone-300 text-sm">{use}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The 7 Elements */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="label-industrial text-yellow-600 mb-2 block">INSIDE THE BRANDSCRIPT</span>
            <h2 className="headline-md font-display uppercase text-charcoal-900 mb-4">
              The 7 Elements of a <span className="text-yellow-500">StoryBrand BrandScript</span>
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              Each section of the BrandScript answers one critical question your customer is asking — even if they never say it out loud.
            </p>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {brandscriptElements.map((el, i) => (
              <div key={i} className="grid md:grid-cols-3 gap-4 p-6 border-2 border-charcoal-200 bg-white hover:border-yellow-400 transition-colors">
                <div>
                  <span className="label-industrial text-yellow-600 text-xs">{el.label}</span>
                  <p className="font-display font-bold text-charcoal-900 uppercase text-sm mt-1">{el.question}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-stone-600 text-sm leading-relaxed">{el.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 band-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="label-industrial text-charcoal-700 mb-2 block">SKIP THE DIY</span>
          <h2 className="headline-md font-display uppercase text-charcoal-900 mb-6">
            Let Us Build Your BrandScript — <span className="underline decoration-4">Done Right</span>
          </h2>
          <p className="text-lg text-charcoal-800 mb-8 max-w-2xl mx-auto">
            Business Builders is a StoryBrand Certified Agency endorsed by Donald Miller. We facilitate BrandScript workshops for businesses of all sizes and then build it into your marketing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-charcoal-900 text-white px-8 py-4 font-bold shadow-offset hover-press">
              <Link href="/storybrand-agency">
                Learn About Our StoryBrand Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-charcoal-900 text-charcoal-900 px-8 py-4 font-bold hover:bg-charcoal-900 hover:text-white transition-all">
              <Link href="/request-quote">Request a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
