"use client";
import SEOHead from "@/components/ui/seo-head";

import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Settings,
  ExternalLink,
  Filter,
  Search,
  ArrowRight,
  Calculator,
  BarChart3,
  Globe,
  Mail,
  MessageSquare,
  Palette,
  Video,
  Smartphone
} from "lucide-react";
import { useState } from "react";
import type { AccessTool } from "@/lib/db/schema";

export default function Tools() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: tools = [], isLoading } = useQuery<AccessTool[]>({
    queryKey: ["/api/access-tools"],
    staleTime: 5 * 60 * 1000,
  });

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === "all" || tool.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (tool.description && tool.description.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories = ["all", ...Array.from(new Set(tools.map(t => t.category)))];

  const getIconForCategory = (category: string) => {
    switch (category.toLowerCase()) {
      case 'calculator':
        return <Calculator className="w-8 h-8 text-yellow-400" />;
      case 'analytics':
        return <BarChart3 className="w-8 h-8 text-yellow-400" />;
      case 'website':
        return <Globe className="w-8 h-8 text-yellow-400" />;
      case 'email':
        return <Mail className="w-8 h-8 text-yellow-400" />;
      case 'social':
        return <MessageSquare className="w-8 h-8 text-yellow-400" />;
      case 'design':
        return <Palette className="w-8 h-8 text-yellow-400" />;
      case 'video':
        return <Video className="w-8 h-8 text-yellow-400" />;
      case 'mobile':
        return <Smartphone className="w-8 h-8 text-yellow-400" />;
      default:
        return <Settings className="w-8 h-8 text-yellow-400" />;
    }
  };

  const handleToolAccess = (tool: AccessTool) => {
    if (tool.link) {
      window.open(tool.link, '_blank', 'noopener,noreferrer');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen band-dark">
        <Navigation />
        <div className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bento-card animate-pulse">
                  <div className="bg-yellow-400 h-20"></div>
                  <div className="p-6">
                    <div className="h-4 bg-stone-200 mb-4"></div>
                    <div className="h-3 bg-stone-200 mb-2"></div>
                    <div className="h-3 bg-stone-200 mb-4"></div>
                    <div className="h-10 bg-stone-200"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen band-dark">
      <SEOHead 
        title="Free Marketing Tools - Calculators, Analytics & Utilities | Business Builders"
        description="Access powerful marketing tools including cost calculators, analytics dashboards, and productivity utilities. Free tools to boost your marketing efficiency."
        keywords="marketing tools, free calculators, marketing analytics, business tools, marketing utilities, productivity tools, marketing software"
        canonicalUrl="/tools"
      />
      
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 band-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-8">
            <div className="inline-block px-6 py-3 border-2 border-charcoal-900 mb-6">
              <Settings className="w-5 h-5 mr-2 inline text-charcoal-900" />
              <span className="label-industrial text-charcoal-900">FREE TOOLS</span>
            </div>
            <h1 className="headline-lg text-charcoal-900 mb-6">
              MARKETING TOOLS
              <span className="block text-yellow-500">THAT DRIVE RESULTS</span>
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-body">
              Streamline your marketing efforts with our collection of powerful, easy-to-use tools. 
              From cost calculators to analytics dashboards, everything you need to optimize your campaigns.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border-2 border-stone-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-charcoal-900 placeholder-stone-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-stone-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white border-2 border-stone-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-charcoal-900"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-white text-charcoal-900">
                      {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="pb-20 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {filteredTools.length === 0 ? (
            <div className="text-center py-16">
              <Settings className="w-16 h-16 text-stone-400 mx-auto mb-4" />
              <h3 className="headline-md text-stone-900 mb-2">NO TOOLS FOUND</h3>
              <p className="text-stone-500 mb-6 font-body">
                {searchTerm || selectedCategory !== "all" 
                  ? "Try adjusting your search terms or filters." 
                  : "Check back soon for new marketing tools."}
              </p>
              {(searchTerm || selectedCategory !== "all") && (
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="bg-yellow-400 hover:bg-yellow-500 text-stone-900 font-display uppercase tracking-wide shadow-offset hover-press border-2 border-stone-900"
                >
                  Clear Filters
                </Button>
              )}
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <p className="text-lg text-stone-500 font-body">
                  Showing {filteredTools.length} of {tools.length} tools
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTools.map((tool) => (
                  <div key={tool.id} className="bento-card shadow-offset group">
                    <div className="bg-yellow-400 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-stone-900/20 border-2 border-stone-900 flex items-center justify-center">
                            {tool.image ? (
                              <img 
                                src={tool.image} 
                                alt={tool.title}
                                className="w-8 h-8 object-contain"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  if (target.nextElementSibling) {
                                    (target.nextElementSibling as HTMLElement).style.display = 'flex';
                                  }
                                }}
                              />
                            ) : null}
                            <div className={`w-full h-full flex items-center justify-center ${tool.image ? 'hidden' : 'flex'}`}>
                              <Settings className="w-6 h-6 text-stone-900" />
                            </div>
                          </div>
                          <div>
                            <span className="label-industrial text-stone-900 border-2 border-stone-900 px-2 py-1 inline-block bg-white">
                              {tool.category.toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-stone-900 opacity-70" />
                      </div>
                    </div>
                    
                    <div className="p-6 bg-white">
                      <h3 className="font-display text-xl font-bold text-stone-900 mb-3 uppercase tracking-tight group-hover:text-yellow-600 transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-stone-500 mb-6 leading-relaxed font-body">
                        {tool.description}
                      </p>
                      
                      <Button 
                        onClick={() => handleToolAccess(tool)}
                        disabled={!tool.link}
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-stone-900 font-display uppercase tracking-wide shadow-offset-sm hover-press border-2 border-stone-900"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Access Tool
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      
                      {!tool.link && (
                        <p className="text-sm text-stone-400 text-center mt-2 label-industrial">
                          Coming Soon
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Featured Tool Spotlight */}
      <section className="py-20 band-white border-t-2 border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-md text-stone-900 mb-6">
            TRY OUR COST CALCULATOR
          </h2>
          <p className="text-lg text-stone-500 mb-8 max-w-2xl mx-auto font-body">
            Get an instant estimate for your marketing project. Our interactive calculator helps you 
            understand pricing and plan your marketing budget effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-stone-900 font-display uppercase tracking-wide shadow-offset hover-press border-2 border-stone-900"
            >
              <a href="/cost-calculator">
                <Calculator className="w-5 h-5 mr-2" />
                Use Cost Calculator
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              className="bg-stone-900 hover:bg-stone-800 text-white font-display uppercase tracking-wide shadow-offset-yellow hover-press border-2 border-stone-900"
            >
              <a href="/request-quote">Get Custom Quote</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 band-stone">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="headline-md text-stone-900 mb-6">
              Frequently Asked <span className="text-yellow-500">Questions</span>
            </h2>
            <p className="text-xl text-stone-500">Common questions about our free marketing tools</p>
          </div>

          <div className="border-2 border-stone-900 shadow-offset overflow-hidden bg-white">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-2 border-stone-900">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-stone-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  Are these marketing tools really free?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  Yes, all tools on this page are completely free to use with no hidden fees or credit card required. We provide these tools to help businesses of all sizes improve their marketing efforts. Whether you need a cost calculator, SEO audit, or marketing plan builder, you can access them at no cost.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b-2 border-stone-900">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-stone-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  How accurate is the SEO audit tool?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  Our SEO audit tool analyzes key on-page and technical SEO factors that impact your search engine rankings. It checks meta tags, page speed, mobile responsiveness, content structure, and more. While no automated tool can replace a comprehensive manual audit, our tool provides actionable insights to help you identify and fix the most common SEO issues affecting your site.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b-2 border-stone-900">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-stone-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  Can I use the marketing plan builder without an account?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  Yes, you can use the marketing plan builder and all of our tools without creating an account. Simply select the tool you want to use and get started immediately. For some downloadable resources, we may ask for your email so we can send you the file, but the interactive tools are always available without any signup.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-stone-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  Do you offer more advanced marketing solutions?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  Absolutely. These free tools are designed to give you a starting point. For businesses that need more advanced, customized solutions, our team offers full-service marketing including SEO, website design, HubSpot implementation, social media management, and more. Contact us for a free consultation to discuss your specific needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* FAQ Schema Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Are these marketing tools really free?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all tools on this page are completely free to use with no hidden fees or credit card required. We provide these tools to help businesses of all sizes improve their marketing efforts. Whether you need a cost calculator, SEO audit, or marketing plan builder, you can access them at no cost."
              }
            },
            {
              "@type": "Question",
              "name": "How accurate is the SEO audit tool?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our SEO audit tool analyzes key on-page and technical SEO factors that impact your search engine rankings. It checks meta tags, page speed, mobile responsiveness, content structure, and more. While no automated tool can replace a comprehensive manual audit, our tool provides actionable insights to help you identify and fix the most common SEO issues affecting your site."
              }
            },
            {
              "@type": "Question",
              "name": "Can I use the marketing plan builder without an account?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can use the marketing plan builder and all of our tools without creating an account. Simply select the tool you want to use and get started immediately. For some downloadable resources, we may ask for your email so we can send you the file, but the interactive tools are always available without any signup."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer more advanced marketing solutions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. These free tools are designed to give you a starting point. For businesses that need more advanced, customized solutions, our team offers full-service marketing including SEO, website design, HubSpot implementation, social media management, and more. Contact us for a free consultation to discuss your specific needs."
              }
            }
          ]
        }).replace(/</g, '\\u003c') }} />
      </section>

      {/* CTA Section */}
      <section className="py-20 band-yellow border-t-2 border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-md text-stone-900 mb-6">
            NEED MORE ADVANCED TOOLS?
          </h2>
          <p className="text-lg text-stone-900/80 mb-8 max-w-2xl mx-auto font-body">
            Our team can provide enterprise-level marketing tools and custom solutions 
            tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-stone-900 text-white hover:bg-stone-800 font-display uppercase tracking-wide shadow-offset hover-press border-2 border-stone-900"
            >
              <a href="/request-quote">Get Custom Solution</a>
            </Button>
            <Button 
              asChild
              size="lg"
              className="bg-white text-stone-900 hover:bg-stone-100 font-display uppercase tracking-wide shadow-offset hover-press border-2 border-stone-900"
            >
              <a href="/services">View Our Services</a>
            </Button>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
