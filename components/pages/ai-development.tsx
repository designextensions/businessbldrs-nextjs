"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Bot, Brain, Workflow, Search, Code, Server, Zap, ArrowRight, CheckCircle, Target, TrendingUp, Users, Database, Mail, BarChart3, MessageSquare, FileText, Settings, Cpu, Cog } from "lucide-react";
;
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import ServicePageSchema from "@/components/ui/service-page-schema";
import ServiceFAQSchema from "@/components/ui/service-faq-schema";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { aiDevelopmentFAQs } from "@/components/ui/service-faq-schema";

export default function AIDevelopment() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "What types of AI tools can you build for my business?",
      answer: "We build a wide range of custom AI solutions including intelligent chatbots for customer service and internal support, automated workflow engines that connect your existing tools, AI-powered search and knowledge bases, data intelligence dashboards, content generation pipelines, email and lead automation systems, and CRM integrations. Every solution is tailored to your specific business needs, industry, and existing tech stack — we don't do one-size-fits-all."
    },
    {
      question: "How do AI workflows integrate with my existing systems?",
      answer: "Our AI workflows are designed to plug directly into the tools you already use — HubSpot, Salesforce, Google Workspace, Slack, your CRM, email platforms, and more. We use APIs, webhooks, and native integrations to connect your AI tools seamlessly so your team doesn't have to learn new software or change their daily habits. The goal is to enhance your current processes, not replace them."
    },
    {
      question: "How long does it take to build and deploy AI workflows?",
      answer: "Most AI workflow projects take 4-8 weeks from kickoff to deployment, depending on complexity. Simple automations like email sequences or chatbot setups can be live in 2-3 weeks. More complex builds — like custom knowledge bases, multi-step workflow engines, or dashboard integrations — typically take 6-10 weeks. We start with a blueprint review so you know the timeline upfront before any work begins."
    },
    {
      question: "Do you provide ongoing support after deployment?",
      answer: "Absolutely. Every AI solution we build comes with post-launch support including monitoring, optimization, and troubleshooting. We offer ongoing maintenance plans that include performance tracking, model tuning, workflow updates, and priority support. AI tools get smarter over time — and we make sure yours keeps improving as your business grows and your needs evolve."
    }
  ];

  const services = [
    {
      icon: MessageSquare,
      title: "Custom AI Chatbots",
      description: "Intelligent chatbots trained on your business data that handle customer questions, qualify leads, and provide 24/7 support — without sounding like a robot."
    },
    {
      icon: Workflow,
      title: "Automated Workflows",
      description: "Multi-step automations that connect your tools and eliminate manual busywork — from lead nurturing sequences to internal operations and reporting."
    },
    {
      icon: Search,
      title: "AI-Powered Search",
      description: "Smart search tools that let your team and customers find exactly what they need instantly — across documents, knowledge bases, and content libraries."
    },
    {
      icon: BarChart3,
      title: "Data Intelligence Dashboards",
      description: "Real-time dashboards powered by AI that surface insights, track KPIs, and help you make faster, smarter decisions with your business data."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "BLUEPRINT REVIEW",
      description: "We start by reviewing your AI Blueprint (or conducting a discovery session) to understand your goals, your current tech stack, and the highest-impact opportunities. This ensures every tool we build solves a real problem.",
      icon: FileText
    },
    {
      number: "02",
      title: "BUILD & TEST",
      description: "Our development team builds your custom AI tools and workflows, integrating them with your existing systems. We test rigorously with real data and real scenarios so everything works before it goes live.",
      icon: Code
    },
    {
      number: "03",
      title: "LAUNCH & OPTIMIZE",
      description: "We deploy your AI solutions, train your team, and monitor performance. Then we optimize based on real-world results — because AI tools get better over time when they're properly managed.",
      icon: Zap
    }
  ];

  const solutions = [
    {
      icon: Database,
      title: "Internal Knowledge Bases",
      description: "AI-powered knowledge systems that let your team instantly find SOPs, training docs, and company information."
    },
    {
      icon: Search,
      title: "Customer-Facing Search",
      description: "Smart search experiences on your website that help visitors find products, services, and answers faster."
    },
    {
      icon: Mail,
      title: "Email & Lead Automation",
      description: "Automated email sequences and lead scoring that nurture prospects through your pipeline without manual effort."
    },
    {
      icon: FileText,
      title: "Content Generation Pipelines",
      description: "AI workflows that help your team produce blog posts, social media content, and marketing copy at scale."
    },
    {
      icon: Settings,
      title: "CRM Integration",
      description: "Connect AI tools directly to HubSpot, Salesforce, or your CRM so data flows automatically and nothing falls through the cracks."
    },
    {
      icon: BarChart3,
      title: "Reporting Dashboards",
      description: "Automated dashboards that pull data from multiple sources and surface the metrics that matter most to your business."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="AI Development & Workflows - Custom AI Solutions | Business Builders"
        description="We build custom AI tools and automated workflows that run your business. From chatbots and knowledge bases to CRM integrations and reporting dashboards. Turn your AI strategy into working solutions."
        keywords="AI development, AI workflows, custom AI tools, AI chatbots, business automation, AI integration, HubSpot AI, CRM automation, AI-powered search, workflow automation"
        canonicalUrl="https://businessbldrs.com/ai-development"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI Development & Workflows",
          "provider": {
            "@type": "Organization",
            "name": "Business Builders"
          },
          "description": "Custom AI development and workflow automation services. We build chatbots, automated workflows, AI-powered search, and data intelligence dashboards tailored to your business.",
          "url": "https://businessbldrs.com/ai-development"
        }}
      />
      <ServicePageSchema
        serviceName="AI Development & Workflows"
        description="Custom AI development and workflow automation services. We build the AI tools — chatbots, automations, search, dashboards — that turn your strategy into real business results."
        slug="ai-development"
        serviceType="AI Development"
      />
      <ServiceFAQSchema
        serviceName="AI Development & Workflows"
        slug="ai-development"
        faqs={aiDevelopmentFAQs}
      />
      <Navigation />

      <section className="pt-32 pb-16 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "AI Development & Workflows" }
          ]} />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <span className="label-industrial inline-block px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
                <Cpu className="w-4 h-4 inline mr-2" />
                AI DEVELOPMENT & AUTOMATION
              </span>
              <h1 className="headline-lg text-white mb-6">
                WE BUILD THE AI TOOLS<br />
                <span className="text-yellow-400">That Run Your Business</span>
              </h1>
              <p className="text-editorial text-stone-400 mb-4">
                <strong className="text-white">Your AI Blueprint gave you the plan. Now it's time to build.</strong> We turn AI strategy into working tools — custom chatbots, automated workflows, intelligent search, and dashboards that save your team hours every week.
              </p>
              <p className="text-stone-500 leading-relaxed mb-8">
                Business Builders doesn't just talk about AI — we build it. Our development team creates practical, production-ready AI solutions that integrate with your existing tools like HubSpot, your CRM, and the platforms your team already uses every day.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/request-quote">
                  <Button size="xl">
                    START YOUR AI PROJECT
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  onClick={() => scrollToSection('process')}
                  variant="outlineLight"
                  size="lg"
                >
                  SEE OUR PROCESS
                </Button>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-yellow-400">50+</div>
                  <div className="label-industrial text-stone-500 text-xs">AI TOOLS BUILT</div>
                </div>
                <div className="w-px h-12 bg-charcoal-700" />
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-yellow-400">40%</div>
                  <div className="label-industrial text-stone-500 text-xs">AVG TIME SAVED</div>
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
                  { value: "50+", label: "AI Tools Deployed", icon: Bot },
                  { value: "40%", label: "Average Time Saved", icon: TrendingUp },
                  { value: "Top 1%", label: "AI Builders", icon: Target }
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
            <span className="label-industrial text-yellow-600 mb-2 block">WHAT WE BUILD</span>
            <h2 className="headline-md font-display uppercase mb-4 text-charcoal-900">
              AI Tools That <span className="text-yellow-500">Actually Work</span>
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
              We don't build AI for the sake of AI. Every tool we create solves a specific problem in your business — saving time, reducing errors, and helping your team focus on the work that matters most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border-2 border-charcoal-800 p-8 shadow-offset hover:shadow-offset-yellow transition-all duration-300">
                <div className="w-14 h-14 bg-yellow-400 border-2 border-charcoal-900 shadow-offset-sm flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-charcoal-900" />
                </div>
                <h3 className="text-xl font-display uppercase font-bold mb-3 text-charcoal-900">{service.title}</h3>
                <p className="text-stone-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-industrial text-yellow-600 mb-2 block">THE PROBLEM</span>
            <h2 className="headline-md font-display uppercase mb-4 text-charcoal-900">
              Manual Processes Are <span className="text-yellow-500">Holding You Back</span>
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
              You know AI could help your business — but knowing and doing are two different things. Here's what changes when you stop doing everything manually.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="border-2 border-red-200 bg-red-50/50 p-8">
              <div className="w-12 h-12 bg-red-100 border-2 border-red-300 flex items-center justify-center mb-6">
                <span className="text-red-600 text-2xl font-display font-black">✕</span>
              </div>
              <h3 className="text-xl font-display uppercase font-bold mb-4 text-charcoal-900">The Problem</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 flex-shrink-0">✕</span>
                  <span className="text-stone-600">Hours wasted on repetitive data entry and manual tasks</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 flex-shrink-0">✕</span>
                  <span className="text-stone-600">Leads slipping through the cracks without follow-up</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 flex-shrink-0">✕</span>
                  <span className="text-stone-600">Team buried in busywork instead of high-value projects</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 mt-1 flex-shrink-0">✕</span>
                  <span className="text-stone-600">No visibility into performance data across tools</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-yellow-300 bg-yellow-50/50 p-8">
              <div className="w-12 h-12 bg-yellow-400 border-2 border-charcoal-900 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-charcoal-900" />
              </div>
              <h3 className="text-xl font-display uppercase font-bold mb-4 text-charcoal-900">The Solution</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-stone-600">Custom AI workflows that automate repetitive processes</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-stone-600">Automated lead nurturing and follow-up sequences</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-stone-600">AI chatbots handling routine questions 24/7</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-stone-600">Integrated dashboards pulling data from every source</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-green-200 bg-green-50/50 p-8">
              <div className="w-12 h-12 bg-green-100 border-2 border-green-300 flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-display uppercase font-bold mb-4 text-charcoal-900">The Result</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-stone-600">40%+ reduction in time spent on manual tasks</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-stone-600">Zero leads lost — every prospect gets timely follow-up</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-stone-600">Team focused on strategy, creativity, and growth</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-stone-600">Real-time insights that drive smarter decisions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="label-industrial text-yellow-400 mb-2 block">OUR PROCESS</span>
            <h2 className="headline-md font-display uppercase text-white mb-4">
              From Blueprint <span className="text-yellow-400">to Build</span>
            </h2>
            <p className="text-stone-400 max-w-3xl mx-auto">
              We follow a proven three-step process to take your AI strategy from plan to production. Every step is designed to minimize risk, maximize results, and get your tools live as fast as possible.
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
            <span className="label-industrial text-yellow-600 mb-2 block">AI SOLUTIONS</span>
            <h2 className="headline-md font-display uppercase mb-4 text-charcoal-900">
              What We Can <span className="text-yellow-500">Build for You</span>
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Every business is different, but these are the AI solutions our clients ask for most. Each one is custom-built to integrate with your existing tools and workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white border-2 border-charcoal-800 p-8 shadow-offset hover:shadow-offset-yellow transition-all duration-300">
                <div className="w-14 h-14 bg-yellow-400 border-2 border-charcoal-900 shadow-offset-sm flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-charcoal-900" />
                </div>
                <h3 className="text-lg font-display uppercase font-bold mb-3 text-charcoal-900">{solution.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm">{solution.description}</p>
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
            Ready to Put AI to Work?
          </h2>
          <p className="text-lg text-charcoal-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            Stop reading about AI and start using it. We'll build the custom tools and workflows your business needs to save time, reduce errors, and scale smarter. Schedule a free discovery call today.
          </p>
          <Link href="/request-quote">
            <Button
              className="bg-charcoal-900 text-white px-12 py-6 font-bold text-xl hover:bg-charcoal-800 transition-all duration-300 shadow-offset hover-press border-2 border-charcoal-900"
            >
              START YOUR AI PROJECT
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
