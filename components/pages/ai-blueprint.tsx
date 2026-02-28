"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Bot, Brain, Workflow, Search, Target, TrendingUp, Lightbulb, ArrowRight, CheckCircle, Users, Building, Zap, BarChart3, Shield, FileText } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import ServicePageSchema from "@/components/ui/service-page-schema";
import ServiceFAQSchema from "@/components/ui/service-faq-schema";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { aiBlueprintFAQs } from "@/components/ui/service-faq-schema";

export default function AIBlueprint() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "What is an AI Blueprint?",
      answer: "An AI Blueprint is a comprehensive strategic plan that maps out exactly how your business can leverage artificial intelligence to improve efficiency, reduce costs, and gain a competitive edge. It includes an assessment of your current operations, identification of high-impact AI opportunities, custom workflow designs, and a phased implementation roadmap — all tailored specifically to your business goals and industry."
    },
    {
      question: "How long does the AI Blueprint process take?",
      answer: "The AI Blueprint process typically takes 2-4 weeks from discovery to final delivery. This includes an initial discovery session (1-2 hours), research and analysis (1-2 weeks), strategy development and workflow design (1 week), and a final presentation with your complete blueprint document. More complex organizations with multiple departments may require an additional 1-2 weeks."
    },
    {
      question: "Do I need technical knowledge to use AI in my business?",
      answer: "Not at all. That's exactly why the AI Blueprint exists. We translate complex AI capabilities into plain-language strategies that any business leader can understand and act on. Our blueprint is designed so you know what to implement, why it matters, and what results to expect — without needing to understand the technical details. We handle the complexity so you can focus on running your business."
    },
    {
      question: "What kind of ROI can I expect from AI integration?",
      answer: "ROI varies by industry and implementation, but our clients typically see 30-60% reductions in manual task time, 2-5x improvements in content output, and measurable increases in lead quality and customer engagement within the first 90 days. The AI Blueprint identifies your highest-ROI opportunities first, so you see results quickly while building toward long-term transformation."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Reduce Risk",
      description: "Avoid costly missteps by starting with a proven strategic framework instead of guessing which AI tools to adopt."
    },
    {
      icon: TrendingUp,
      title: "Maximize ROI",
      description: "Focus your investment on the AI applications that will deliver the highest return for your specific business."
    },
    {
      icon: Zap,
      title: "Save Time",
      description: "Automate repetitive tasks and streamline workflows so your team can focus on high-value work that drives growth."
    },
    {
      icon: Target,
      title: "Gain Competitive Advantage",
      description: "Stay ahead of competitors by implementing AI strategically — not reactively — with a clear plan for the future."
    }
  ];

  const deliverables = [
    {
      icon: BarChart3,
      title: "AI Readiness Audit",
      description: "A thorough assessment of your current tools, processes, and team capabilities to identify exactly where AI can make the biggest impact in your business."
    },
    {
      icon: Brain,
      title: "Custom AI Strategy",
      description: "A tailored strategy document outlining the AI tools, platforms, and approaches best suited to your industry, goals, and budget — no one-size-fits-all solutions."
    },
    {
      icon: Workflow,
      title: "Workflow Design",
      description: "Detailed workflow diagrams showing how AI will integrate into your existing processes — from lead generation and content creation to customer service and reporting."
    },
    {
      icon: FileText,
      title: "Implementation Roadmap",
      description: "A phased, prioritized action plan with timelines, milestones, and resource requirements so you know exactly what to do first and what comes next."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "DISCOVER",
      description: "We start with a deep-dive discovery session to understand your business, your goals, your current tech stack, and your team's capabilities. We identify pain points, bottlenecks, and the highest-impact opportunities for AI.",
      icon: Search
    },
    {
      number: "02",
      title: "DESIGN",
      description: "Our team researches and designs custom AI workflows tailored to your business. We map out automations, tool recommendations, and integration plans — all aligned with your budget and growth objectives.",
      icon: Lightbulb
    },
    {
      number: "03",
      title: "DELIVER",
      description: "You receive your complete AI Blueprint — a comprehensive strategy document with actionable steps, workflow diagrams, and a phased implementation roadmap. We walk you through every detail and answer every question.",
      icon: Target
    }
  ];

  const audiences = [
    {
      icon: Building,
      title: "Small Businesses",
      description: "Owners looking to compete with larger companies by leveraging AI for marketing, operations, and customer service — without a massive budget."
    },
    {
      icon: Users,
      title: "Nonprofits",
      description: "Organizations that need to do more with less. AI can amplify your impact through smarter donor outreach, volunteer coordination, and program delivery."
    },
    {
      icon: Shield,
      title: "Churches & Ministries",
      description: "Faith-based organizations ready to reach more people through AI-powered communication, content creation, and community engagement strategies."
    },
    {
      icon: TrendingUp,
      title: "Growing Agencies",
      description: "Marketing and creative agencies that want to scale their output, improve client results, and build AI-powered services into their offerings."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="AI Blueprint - AI Strategy & Planning | Business Builders"
        description="Get a custom AI strategy for your business. Business Builders' AI Blueprint service helps you plan AI workflows, automate processes, and build smarter systems. Top 1% AI Builders."
        keywords="AI blueprint, AI strategy, AI consulting, AI workflow design, business AI planning, AI implementation roadmap, AI for small business, artificial intelligence strategy"
        canonicalUrl="https://businessbldrs.com/ai-blueprint"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI Blueprint - AI Strategy & Planning",
          "provider": {
            "@type": "Organization",
            "name": "Business Builders"
          },
          "description": "Custom AI strategy and planning service helping businesses leverage artificial intelligence for efficiency, growth, and competitive advantage.",
          "url": "https://businessbldrs.com/ai-blueprint"
        }}
      />
      <ServicePageSchema
        serviceName="AI Blueprint"
        description="Custom AI strategy and planning service. We help businesses strategize AI adoption, design custom workflows, and build implementation roadmaps for smarter, more efficient operations."
        slug="ai-blueprint"
        serviceType="AI Consulting"
      />
      <ServiceFAQSchema
        serviceName="AI Blueprint"
        slug="ai-blueprint"
        faqs={aiBlueprintFAQs}
      />
      <Navigation />

      <section className="pt-32 pb-16 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "AI Blueprint" }
          ]} />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <span className="label-industrial inline-block px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
                <Bot className="w-4 h-4 inline mr-2" />
                AI-POWERED STRATEGY
              </span>
              <h1 className="headline-lg text-white mb-6">
                THE AI BLUEPRINT<br />
                <span className="text-yellow-400">Your Roadmap to Smarter Business</span>
              </h1>
              <p className="text-editorial text-stone-400 mb-4">
                <strong className="text-white">AI is transforming every industry — but without a strategy, it's just noise.</strong> The AI Blueprint gives you a clear, actionable plan to integrate artificial intelligence into your business the right way.
              </p>
              <p className="text-stone-500 leading-relaxed mb-8">
                Business Builders is in the Top 1% of AI Builders. We combine deep marketing expertise with cutting-edge AI knowledge to create custom strategies that drive real results — not tech for tech's sake.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/request-quote">
                  <Button size="xl">
                    GET YOUR AI BLUEPRINT
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  onClick={() => scrollToSection('process')}
                  variant="outlineLight"
                  size="lg"
                >
                  LEARN MORE
                </Button>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-yellow-400">500+</div>
                  <div className="label-industrial text-stone-500 text-xs">AI WORKFLOWS</div>
                </div>
                <div className="w-px h-12 bg-charcoal-700" />
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-yellow-400">10x</div>
                  <div className="label-industrial text-stone-500 text-xs">EFFICIENCY GAINS</div>
                </div>
                <div className="w-px h-12 bg-charcoal-700" />
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-yellow-400">Top 1%</div>
                  <div className="label-industrial text-stone-500 text-xs">AI BUILDERS</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 gap-4">
                {[
                  { value: "500+", label: "AI Workflows Built", icon: Workflow },
                  { value: "10x", label: "Efficiency Gains", icon: Zap },
                  { value: "Top 1%", label: "AI Builders", icon: Shield }
                ].map((stat, index) => (
                  <div key={index} className="bg-charcoal-800 border-2 border-charcoal-700 p-6 flex items-center gap-4">
                    <div className="w-14 h-14 bg-yellow-400 border-2 border-charcoal-900 shadow-offset-sm flex items-center justify-center flex-shrink-0">
                      <stat.icon className="w-7 h-7 text-charcoal-900" />
                    </div>
                    <div>
                      <div className="font-display font-black text-3xl text-yellow-400">{stat.value}</div>
                      <div className="label-industrial text-stone-400 text-xs">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-industrial text-yellow-600 mb-2 block">THE FOUNDATION</span>
            <h2 className="headline-md font-display uppercase mb-4 text-charcoal-900">
              What is <span className="text-yellow-500">The AI Blueprint?</span>
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
              The AI Blueprint is your personalized strategy for leveraging artificial intelligence across your business. It's not a generic report — it's a custom roadmap built around your goals, your industry, and your team's capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white border-2 border-charcoal-800 p-8 shadow-offset hover:shadow-offset-yellow transition-all duration-300">
                <div className="w-14 h-14 bg-yellow-400 border-2 border-charcoal-900 shadow-offset-sm flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-charcoal-900" />
                </div>
                <h3 className="text-xl font-display uppercase font-bold mb-3 text-charcoal-900">{benefit.title}</h3>
                <p className="text-stone-500 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-industrial text-yellow-600 mb-2 block">DELIVERABLES</span>
            <h2 className="headline-md font-display uppercase mb-4 text-charcoal-900">
              What's <span className="text-yellow-500">Included</span>
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Every AI Blueprint is a comprehensive deliverable you can act on immediately. Here's what you'll receive:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {deliverables.map((item, index) => (
              <div key={index} className="border-2 border-charcoal-800 p-8 flex gap-6 items-start shadow-offset hover:shadow-offset-yellow transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-400 border-2 border-charcoal-900 shadow-offset-sm flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-8 h-8 text-charcoal-900" />
                </div>
                <div>
                  <h3 className="text-xl font-display uppercase font-bold mb-3 text-charcoal-900">{item.title}</h3>
                  <p className="text-stone-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="label-industrial text-yellow-400 mb-2 block">THE PROCESS</span>
            <h2 className="headline-md font-display uppercase text-white mb-4">
              How It <span className="text-yellow-400">Works</span>
            </h2>
            <p className="text-stone-400 max-w-3xl mx-auto">
              Our proven three-step process takes the guesswork out of AI adoption. We guide you from discovery to a finished blueprint you can act on with confidence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-yellow-400 border-2 border-black shadow-offset flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-black" />
                </div>
                <div className="text-yellow-400 text-6xl font-display mb-4">{step.number}</div>
                <h3 className="text-xl font-display uppercase mb-4 text-white">{step.title}</h3>
                <p className="text-stone-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-industrial text-yellow-600 mb-2 block">IDEAL CLIENTS</span>
            <h2 className="headline-md font-display uppercase mb-4 text-charcoal-900">
              Who It's <span className="text-yellow-500">For</span>
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
              The AI Blueprint is designed for organizations ready to move beyond the hype and start using AI strategically. If any of these sound like you, we should talk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audiences.map((audience, index) => (
              <div key={index} className="bg-white border-2 border-charcoal-800 p-8 shadow-offset hover:shadow-offset-yellow transition-all duration-300 text-center">
                <div className="w-14 h-14 bg-yellow-400 border-2 border-charcoal-900 shadow-offset-sm flex items-center justify-center mx-auto mb-6">
                  <audience.icon className="w-7 h-7 text-charcoal-900" />
                </div>
                <h3 className="text-lg font-display uppercase font-bold mb-3 text-charcoal-900">{audience.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-industrial text-yellow-600 mb-2 block">FAQ</span>
            <h2 className="headline-md font-display uppercase mb-4 text-charcoal-900">
              Frequently Asked <span className="text-yellow-500">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-2 border-charcoal-800 shadow-offset">
                  <AccordionTrigger className="px-6 py-4 font-display uppercase font-bold text-charcoal-900 text-left hover:text-yellow-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-stone-500 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 band-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-md font-display uppercase mb-6 text-charcoal-900">
            Ready to Future-Proof Your Business?
          </h2>
          <p className="text-lg text-charcoal-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            Stop guessing about AI. Get a clear, actionable strategy built specifically for your business. Schedule a free discovery call and find out how the AI Blueprint can transform the way you work.
          </p>
          <Link href="/request-quote">
            <Button
              className="bg-charcoal-900 text-white px-12 py-6 font-bold text-xl hover:bg-charcoal-800 transition-all duration-300 shadow-offset hover-press border-2 border-charcoal-900"
            >
              GET YOUR AI BLUEPRINT
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
