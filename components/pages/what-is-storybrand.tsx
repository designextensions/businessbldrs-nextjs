"use client";
import Link from "next/link";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, MessageSquare, Target, Shield, TrendingUp, AlertTriangle } from "lucide-react";

const frameworkSteps = [
  {
    number: "01",
    title: "A Character",
    description: "Every story starts with a hero who wants something. In StoryBrand, your customer is the hero — not your company. What does your customer want?"
  },
  {
    number: "02",
    title: "Has a Problem",
    description: "The hero faces a villain (external problem), feels frustrated (internal problem), and believes something is unjust (philosophical problem). Great marketing addresses all three."
  },
  {
    number: "03",
    title: "Meets a Guide",
    description: "The guide doesn't save the day — they equip the hero. Your brand is the guide: experienced, empathetic, and authoritative. Think Yoda, not Luke."
  },
  {
    number: "04",
    title: "Who Gives Them a Plan",
    description: "The guide gives the hero a clear, simple plan. Customers don't take action when the next step is unclear. A 3-step process removes confusion and builds confidence."
  },
  {
    number: "05",
    title: "And Calls Them to Action",
    description: "Heroes don't act unless challenged. Your marketing must include a direct call to action (Buy Now, Schedule a Call) and a transitional CTA (Learn More, Free Guide)."
  },
  {
    number: "06",
    title: "That Helps Them Avoid Failure",
    description: "Every story has stakes. What does your customer lose if they don't act? Naming the cost of inaction motivates decision-making without being manipulative."
  },
  {
    number: "07",
    title: "And Ends in Success",
    description: "Paint the picture of life after they work with you. What does success look like? Customers need to be able to imagine winning before they commit."
  }
];

export default function WhatIsStorybrandPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="label-industrial inline-block px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
              STORYBRAND EXPLAINED
            </span>
            <h1 className="headline-lg text-white mb-6">
              WHAT IS<br />
              <span className="text-yellow-400">STORYBRAND?</span>
            </h1>
            <p className="text-editorial text-stone-400 mb-8 max-w-2xl">
              StoryBrand is a proven marketing framework created by Donald Miller that uses the structure of story to clarify your message so customers listen, engage, and buy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset hover-press font-bold">
                <Link href="/storybrand-agency">
                  Work With a Certified StoryBrand Agency
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Is It */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-industrial text-yellow-600 mb-2 block">THE CORE IDEA</span>
              <h2 className="headline-md font-display uppercase text-charcoal-900 mb-6">
                Why Most Marketing <span className="text-yellow-500">Fails</span>
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Most businesses make the same mistake: they talk about themselves. Their website leads with their history, their awards, their mission. And customers tune out — because the brain is wired to ignore information that isn't relevant to survival or success.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                StoryBrand fixes this by repositioning your brand as the <strong>guide</strong> in your customer's story — not the hero. When customers see themselves as the hero and your brand as the guide who helps them win, your message becomes irresistible.
              </p>
              <p className="text-stone-700 leading-relaxed">
                It was developed by Donald Miller, bestselling author of <em>Building a StoryBrand</em>, and has helped thousands of businesses across every industry clarify their message and grow faster.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MessageSquare, label: "Clear Message", desc: "Customers immediately understand what you do" },
                { icon: Target, label: "Right Audience", desc: "Speak directly to your ideal customer's problem" },
                { icon: TrendingUp, label: "More Conversions", desc: "Websites and emails that actually convert" },
                { icon: Users, label: "Build Trust", desc: "Position yourself as the expert guide" },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border-2 border-charcoal-800 shadow-offset">
                  <item.icon className="w-6 h-6 text-yellow-500 mb-3" />
                  <h3 className="font-display font-bold text-charcoal-900 text-sm uppercase mb-1">{item.label}</h3>
                  <p className="text-stone-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7-Part Framework */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="label-industrial text-yellow-400 mb-2 block">THE FRAMEWORK</span>
            <h2 className="headline-md font-display uppercase text-white mb-4">
              The 7-Part <span className="text-yellow-400">StoryBrand Framework</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Every great story — from blockbuster movies to bestselling books — follows the same structure. StoryBrand applies this structure to your marketing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworkSteps.slice(0, 6).map((step) => (
              <div key={step.number} className="p-6 bg-charcoal-800 border-2 border-charcoal-700 hover:border-yellow-400 transition-colors">
                <span className="font-display font-black text-4xl text-yellow-400 opacity-40">{step.number}</span>
                <h3 className="font-display font-bold text-white uppercase mt-2 mb-3">{step.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 max-w-lg mx-auto">
            <div className="p-6 bg-charcoal-800 border-2 border-yellow-400 shadow-offset-yellow">
              <span className="font-display font-black text-4xl text-yellow-400 opacity-40">{frameworkSteps[6].number}</span>
              <h3 className="font-display font-bold text-white uppercase mt-2 mb-3">{frameworkSteps[6].title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{frameworkSteps[6].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 band-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="label-industrial text-charcoal-700 mb-2 block">READY TO CLARIFY YOUR MESSAGE?</span>
          <h2 className="headline-md font-display uppercase text-charcoal-900 mb-6">
            Work With a StoryBrand <span className="underline decoration-4 decoration-charcoal-900">Certified Agency</span>
          </h2>
          <p className="text-lg text-charcoal-800 mb-8 max-w-2xl mx-auto">
            Business Builders is a StoryBrand Certified Agency endorsed by Donald Miller. We don't just teach the framework — we build it into your website, messaging, and marketing strategy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-charcoal-900 text-white px-8 py-4 font-bold shadow-offset hover-press">
              <Link href="/storybrand-agency">
                See Our StoryBrand Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-charcoal-900 text-charcoal-900 px-8 py-4 font-bold hover:bg-charcoal-900 hover:text-white transition-all">
              <Link href="/request-quote">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
