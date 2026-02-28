"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Users, Calculator, Mail, CheckCircle, ExternalLink } from "lucide-react";
;
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
const breakwaterDesktopImage = "/assets/breakwater-desktop-screenshot.png";
const breakwaterCalculatorImage = "/assets/breakwater-pool-calculator-screenshot.png";
const breakwaterEmail1Image = "/assets/breakwater-email-sequence-1.jpg";
const breakwaterEmail2Image = "/assets/breakwater-email-sequence-2.jpg";

export default function BreakwaterConstruction() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const keyResults = [
    {
      value: "4,444%",
      label: "ROI from Paid Search",
      icon: TrendingUp
    },
    {
      value: "22%",
      label: "increase in sales",
      icon: CheckCircle
    },
    {
      value: "29%",
      label: "increase in gross revenue",
      icon: TrendingUp
    },
    {
      value: "10.85%",
      label: "Conversion Rate",
      icon: Target
    }
  ];

  const challenges = [
    "Several years of doing the same amount of revenue and no realized growth",
    "Small team without resources to produce marketing content",
    "Word-of-mouth marketing hit a roadblock on growth"
  ];

  const solutions = [
    {
      title: "Video Marketing Series",
      description: "Created FAQ videos showcasing expertise and customer-first approach",
      icon: Users
    },
    {
      title: "Interactive Pool Calculator",
      description: "700+ estimates requested in 2024, with 79% of new contacts using this tool",
      icon: Calculator
    },
    {
      title: "Automated Lead Nurturing",
      description: "Email sequences to convert prospects into qualified leads",
      icon: Mail
    }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Breakwater Construction", href: "/portfolio/breakwater-construction" }
  ];

  return (
    <div className="min-h-screen band-white">
      <SEOHead
        title="Breakwater Construction Case Study - 22% Growth in One Year | Business Builders"
        description="Discover how Breakwater Construction, a custom pool builder in Northeast Florida, achieved 22% growth and 29% revenue increase with strategic video marketing, automated lead nurturing, and interactive pool calculator tools. Real results from Business Builders marketing agency."
        keywords="Breakwater Construction, custom pool builder, Northeast Florida, marketing case study, video marketing, pool calculator, lead nurturing, Business Builders, 22% growth, marketing agency St Augustine"
        ogImage="https://businessbldrs.com/attached_assets/breakwater-desktop-screenshot.png"
        canonicalUrl="https://businessbldrs.com/portfolio/breakwater-construction"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "How Breakwater Construction Achieved 22% Growth in Just One Year with Strategic Marketing",
          "description": "Case study showing how Breakwater Construction, a custom pool builder, achieved 22% sales growth and 29% revenue increase through video marketing, automated lead nurturing, and interactive tools.",
          "image": "https://businessbldrs.com/attached_assets/breakwater-desktop-screenshot.png",
          "author": {
            "@type": "Organization",
            "name": "Business Builders"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Business Builders",
            "logo": {
              "@type": "ImageObject",
              "url": "https://businessbldrs.com/logo-full.png"
            }
          },
          "datePublished": "2025-05-06",
          "dateModified": "2025-09-08",
          "mainEntity": {
            "@type": "Organization",
            "name": "Breakwater Construction",
            "description": "Custom pool builder in Northeast Florida"
          }
        }}
      />
      <Navigation />
      
      {/* Breadcrumbs */}
      <div className="pt-32 pb-8 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="label-industrial bg-yellow-400 text-charcoal-900 px-4 py-2 inline-block">
              Portfolio Case Study
            </span>
          </div>
          <h1 className="headline-lg text-charcoal-900 mb-6">
            <span className="text-yellow-500">Breakwater Construction</span>
          </h1>
          <p className="text-xl lg:text-2xl text-stone-600 mb-8 max-w-4xl">
            How Breakwater Construction Achieved 22% Growth in Just One Year with Strategic Marketing
          </p>
          
          {/* Featured Image */}
          <div className="relative border-2 border-charcoal-800 shadow-offset overflow-hidden mb-12">
            <img 
              src={breakwaterDesktopImage}
              alt="Breakwater Construction website design by Business Builders - custom pool builder Northeast Florida with interactive pool calculator and lead generation tools"
              className="w-full h-auto"
              width="1200"
              height="675"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Key Results Section */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-charcoal-900 mb-6">
              The Results: <span className="text-yellow-400">22% Growth</span> in Just One Year
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              Breakwater Construction saw measurable success within the first year of working with Business Builders, proving that a strategic marketing plan can drive real growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyResults.map((result, index) => (
              <div key={index} className="text-center bento-card p-8">
                <result.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl lg:text-5xl font-black text-yellow-400 mb-2">
                  {result.value}
                </div>
                <p className="text-stone-500 font-medium uppercase tracking-wide text-sm">
                  {result.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="headline-lg text-charcoal-900 mb-8">
                The Challenge: A <span className="text-yellow-400">Growth Plateau</span>
              </h2>
              <p className="text-xl text-stone-500 mb-8">
                For nearly two decades, Breakwater Construction had been building quality custom pools, earning a stellar reputation in Northeast Florida. While word-of-mouth marketing had worked well, the company reached a point where it wasn't generating enough leads to fuel business growth.
              </p>
              
              <div className="space-y-4">
                <h3 className="label-industrial text-yellow-400 mb-4">Key Challenges:</h3>
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 mt-3 flex-shrink-0" />
                    <p className="text-stone-500 italic">"{challenge}"</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bento-card flex items-center justify-center bg-stone-50">
                <div className="text-center p-8">
                  <TrendingUp className="w-24 h-24 text-yellow-400 mx-auto mb-4" />
                  <p className="text-lg text-stone-500">
                    To break through this plateau, Breakwater needed a <strong className="text-charcoal-900">consistent stream of high-quality leads</strong> and a <strong className="text-charcoal-900">marketing strategy that expanded their reach beyond referrals</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-white mb-6">
              What We Did to <span className="text-yellow-400">Help</span>
            </h2>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto">
              Business Builders developed a comprehensive marketing plan that included video content, an automated lead-nurturing system, and a user-friendly website tool to attract and convert potential customers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-charcoal-800 p-8 border-2 border-charcoal-700 shadow-offset-yellow">
                <solution.icon className="w-12 h-12 text-yellow-400 mb-6" />
                <h3 className="font-display text-2xl font-bold mb-4 text-white uppercase tracking-tight">{solution.title}</h3>
                <p className="text-stone-400 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>

          {/* Video Examples */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative border-2 border-charcoal-800 shadow-offset overflow-hidden">
              <div className="aspect-video">
                <iframe 
                  src="https://www.youtube.com/embed/9GcWYFZIwIY?rel=0&modestbranding=1"
                  title="Breakwater Construction FAQ #1: How Much Does a Pool Build Cost?"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="relative border-2 border-charcoal-800 shadow-offset overflow-hidden">
              <div className="aspect-video">
                <iframe 
                  src="https://www.youtube.com/embed/CpJAJ3XeAmg?rel=0&modestbranding=1"
                  title="Breakwater Construction FAQ #11: I'm interested in getting a design and quote. What does the process look like?"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Video Marketing Success Quote */}
          <div className="bg-yellow-400 p-8 lg:p-12 border-2 border-charcoal-900 shadow-offset text-center mb-12">
            <blockquote className="text-2xl lg:text-3xl font-bold text-charcoal-900 mb-6 font-serif italic">
              "Business Builders came in with their team, helped us organize our vision, and then shot a series of FAQ videos which resulted in a 22% increase in our number of sales and a 29% increase in our gross revenue."
            </blockquote>
            <cite className="text-charcoal-900 font-semibold label-industrial">- Breakwater Construction Team</cite>
          </div>

          {/* Additional Success Quote */}
          <div className="bg-charcoal-800 p-8 lg:p-12 border-2 border-charcoal-700 shadow-offset-yellow text-center">
            <blockquote className="text-xl lg:text-2xl font-bold text-white mb-6 font-serif italic">
              "The Business Builders team brought ideas to the table that enabled us to share our customer-first culture with potential customers."
            </blockquote>
            <cite className="text-yellow-400 font-semibold label-industrial">- Breakwater Construction Team</cite>
          </div>
        </div>
      </section>

      {/* Pool Calculator Feature */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="headline-md text-charcoal-900 mb-6">
                <span className="text-yellow-400">Pool Cost Calculator</span> for Better Lead Qualification
              </h2>
              <p className="text-xl text-stone-500 mb-8">
                Business Builders Marketing and Development team introduced an interactive pool pricing calculator on Breakwater's website, allowing potential customers to get a rough estimate before requesting a consultation.
              </p>
              
              <div className="bento-card p-6 mb-8">
                <h3 className="label-industrial text-yellow-400 mb-4">2024 Results:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-charcoal-200 pb-2">
                    <span className="text-stone-500">Pool estimates requested</span>
                    <span className="text-charcoal-900 font-bold text-xl">700+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-500">New contacts using this tool</span>
                    <span className="text-charcoal-900 font-bold text-xl">79%</span>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-yellow-400 pl-6 mb-8">
                <p className="text-lg text-stone-500 italic mb-4 font-serif">
                  "One of the things is our pool calculator on our website. Potential customers can go and enter in some basics about what they want and in a matter of a minute have a rough estimate for their project."
                </p>
              </blockquote>

              <Button 
                className="bg-yellow-400 hover:bg-yellow-500 text-charcoal-900 px-8 py-3 font-bold flex items-center space-x-2 shadow-offset hover-press border-2 border-charcoal-900"
              >
                <Calculator className="w-5 h-5" />
                <span>View Pool Pricing Estimator</span>
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-video border-2 border-charcoal-900 shadow-offset overflow-hidden bg-white">
                <img 
                  src={breakwaterCalculatorImage}
                  alt="Interactive pool cost calculator mobile interface - Breakwater Construction pricing estimator tool created by Business Builders for lead qualification Northeast Florida"
                  className="w-full h-full object-cover"
                  width="601"
                  height="1024"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Lead Nurturing Section */}
      <section className="py-20 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-charcoal-900 mb-6">
              <span className="text-yellow-400">Automated Lead Nurturing</span> for Higher Conversions
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto mb-8">
              Once someone used the pool calculator but didn't request a consultation, Business Builders set up an automated email sequence to stay engaged with the prospect.
            </p>
            <div className="text-center mb-8">
              <div className="text-4xl lg:text-5xl font-black text-yellow-400 mb-2">10.85%</div>
              <p className="text-xl text-stone-500 uppercase tracking-wide">Conversion Rate</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative border-2 border-charcoal-900 shadow-offset overflow-hidden">
              <img 
                src={breakwaterEmail1Image}
                alt="Automated email marketing sequence first email - Breakwater Construction lead nurturing campaign by Business Builders for custom pool prospects Northeast Florida"
                className="w-full h-auto"
                width="864"
                height="1536"
                loading="lazy"
              />
            </div>
            <div className="relative border-2 border-charcoal-900 shadow-offset overflow-hidden">
              <img 
                src={breakwaterEmail2Image}
                alt="Automated follow-up email marketing campaign - Breakwater Construction lead nurturing sequence by Business Builders converting prospects to pool construction customers Northeast Florida"
                className="w-full h-auto"
                width="864"
                height="1536"
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-green-500 p-8 lg:p-12 border-2 border-charcoal-900 shadow-offset text-center">
            <blockquote className="text-2xl lg:text-3xl font-bold text-charcoal-900 mb-6 font-serif italic">
              "A series of automated 'nurture' emails are sent to them so we remain top of mind—this helps convert tire kickers to qualified leads!"
            </blockquote>
            <cite className="text-charcoal-900 font-semibold label-industrial">- Breakwater Construction Team</cite>
          </div>

          {/* Additional Results Quote */}
          <div className="mt-12 bento-card p-8 lg:p-12 text-center">
            <blockquote className="text-xl lg:text-2xl font-bold text-charcoal-900 mb-6 font-serif italic">
              "The amount of growth was a welcome surprise! We get lots of compliments on the quality of our website, videos, and marketing!"
            </blockquote>
            <cite className="text-yellow-400 font-semibold label-industrial">- Breakwater Construction Team</cite>
          </div>
        </div>
      </section>

      {/* Strategic Guidance Section */}
      <section className="py-20 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-white mb-6">
              <span className="text-yellow-400">Strategic Guidance</span> & Time Savings
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-charcoal-800 p-8 border-2 border-charcoal-700 shadow-offset-yellow">
              <h3 className="font-display text-2xl font-bold mb-6 text-white uppercase tracking-tight">Monthly Performance Reviews</h3>
              <p className="text-stone-400 mb-6">
                The dedicated Business Builders team, led by Autumn and Natalie, provided monthly recap meetings to ensure clear visibility into marketing performance and future strategies.
              </p>
              
              <blockquote className="border-l-4 border-yellow-400 pl-6 mb-6">
                <p className="text-stone-400 italic font-serif">
                  "Autumn and Natalie have a 45-minute to 1-hour monthly recap meeting with us. They give us the progress of how we have done and the direction that we are headed next month, then they take over from there and execute—saving us countless hours trying to navigate our marketing on our own."
                </p>
              </blockquote>
            </div>

            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-yellow-400 uppercase tracking-tight">Their approach went beyond routine updates:</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Performance-Driven Execution",
                    description: "Monthly meetings provided clear insights, strategic direction, and detailed follow-through to drive measurable growth."
                  },
                  {
                    title: "Lead Quality Focus", 
                    description: "Evaluated not just the volume but the quality of leads."
                  },
                  {
                    title: "System Integration",
                    description: "Seamlessly connected with Builder Trend for efficient data tracking."
                  },
                  {
                    title: "Pipeline Insights",
                    description: "Monitored the sales pipeline closely to identify what converts."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}:</h4>
                      <p className="text-stone-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Growth Section */}
      <section className="py-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg text-charcoal-900 mb-8">
            Continued <span className="text-yellow-400">Growth Trajectory</span>
          </h2>
          
          <div className="bg-yellow-400 p-8 lg:p-12 border-2 border-charcoal-900 shadow-offset mb-12">
            <blockquote className="text-2xl lg:text-3xl font-bold text-charcoal-900 mb-6 font-serif italic">
              "We now have a PLAN and strategy to continue our growth year over year! We anticipate another 20% growth this year with our continued marketing plan with BB."
            </blockquote>
            <cite className="text-charcoal-900 font-semibold label-industrial">- Breakwater Construction Team</cite>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bento-card p-6">
              <h3 className="label-industrial text-yellow-400 mb-3">Next Steps</h3>
              <ul className="text-stone-500 space-y-2 text-left">
                <li>• Continue scaling marketing efforts with BB</li>
                <li>• Further optimize lead generation processes</li>
                <li>• Maintain steady revenue growth year over year</li>
              </ul>
            </div>
            
            <div className="bento-card p-6">
              <h3 className="label-industrial text-green-600 mb-3">Expected Growth</h3>
              <div className="text-4xl font-black text-yellow-400 mb-2">20%</div>
              <p className="text-stone-500">Additional growth anticipated this year</p>
            </div>
            
            <div className="bento-card p-6">
              <h3 className="label-industrial text-blue-600 mb-3">Foundation Built</h3>
              <p className="text-stone-500">Clear, scalable marketing strategy supporting continued long-term growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 band-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-lg text-white mb-6">
            Thinking about scaling your business like{" "}
            <span className="text-yellow-400">Breakwater Construction?</span>
          </h2>
          <p className="text-xl text-stone-400 mb-8">
            Contact Business Builders today to see how strategic marketing can help you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-quote">
              <Button 
                className="bg-yellow-400 text-charcoal-900 px-10 py-4 font-bold text-lg hover:bg-yellow-500 transform hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center space-x-2 border-2 border-charcoal-900 shadow-offset hover-press"
              >
                <span>SCHEDULE A CALL</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/request-quote">
              <Button 
                variant="outline"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-charcoal-900 px-10 py-4 font-bold text-lg transition-all duration-300"
              >
                REQUEST A QUOTE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
