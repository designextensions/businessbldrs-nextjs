"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import { LazyImage } from "@/components/ui/lazy-image";
import { ExternalLink, Search, ChevronDown, ArrowRight, Layers, Briefcase } from "lucide-react";
import type { PortfolioItem } from "@/lib/db/schema";
const breakwaterCaseStudyImage = "/assets/breakwater-construction-case-study.png";
import { seoConfig, getBreadcrumbSchema, BASE_URL } from "@/lib/seo-config";

interface CaseStudy {
  title: string;
  image: string;
  description: string;
  industry: string;
  link: string;
  stat?: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Bozard Ford Lincoln",
    image: "/bozard-ford-lincoln.jpg",
    description: "Transformed a traditional dealership's digital presence and increased qualified leads by 285% through strategic StoryBrand messaging.",
    industry: "Automotive",
    link: "/case-studies/bozard-ford-lincoln",
    stat: "285% more leads"
  },
  {
    title: "All Pro Dad",
    image: "/all-pro-dad.jpg",
    description: "Empowered fathers nationwide through strategic digital ministry transformation, resulting in 400% increase in engagement.",
    industry: "Non-Profit",
    link: "/case-studies/all-pro-dad",
    stat: "400% engagement"
  },
  {
    title: "Hines",
    image: "/hines.jpg",
    description: "Construction industry transformation through targeted marketing automation and lead nurturing systems.",
    industry: "Construction",
    link: "/case-studies/hines",
    stat: "320% ROI"
  },
  {
    title: "Rulon International",
    image: "/rulon.jpg",
    description: "International manufacturing company achieved 450% increase in qualified leads through comprehensive digital transformation.",
    industry: "Manufacturing",
    link: "/case-studies/rulon-international",
    stat: "450% more leads"
  },
  {
    title: "Breakwater Construction",
    image: breakwaterCaseStudyImage,
    description: "Complete marketing transformation showcasing how strategic positioning and targeted campaigns grew a construction business.",
    industry: "Construction",
    link: "/portfolio/breakwater-construction"
  }
];

const CASE_STUDY_TITLES = CASE_STUDIES.map(cs => cs.title);

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState(15);

  const { data: portfolioItems = [], isLoading, isError } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 1,
  });

  const nonCaseStudyItems = useMemo(() =>
    portfolioItems.filter(item => !CASE_STUDY_TITLES.includes(item.title)),
    [portfolioItems]
  );

  const categories = useMemo(() => {
    const cats = Array.from(new Set(nonCaseStudyItems.flatMap(item => item.categories || [])));
    return cats.sort();
  }, [nonCaseStudyItems]);

  const filteredItems = useMemo(() => {
    let items = nonCaseStudyItems;
    if (selectedCategory !== "all") {
      items = items.filter(item => item.categories?.includes(selectedCategory));
    }
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      items = items.filter(item =>
        item.title.toLowerCase().includes(search) ||
        (item.description || "").toLowerCase().includes(search) ||
        (item.clientName || "").toLowerCase().includes(search) ||
        (item.categories || []).some(c => c.toLowerCase().includes(search))
      );
    }
    return items;
  }, [nonCaseStudyItems, selectedCategory, searchTerm]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    nonCaseStudyItems.forEach(item => {
      (item.categories || []).forEach(c => {
        counts[c] = (counts[c] || 0) + 1;
      });
    });
    return counts;
  }, [nonCaseStudyItems]);

  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": seoConfig.portfolio.title,
        "description": seoConfig.portfolio.description,
        "url": `${BASE_URL}/portfolio`
      },
      getBreadcrumbSchema("Portfolio", "/portfolio")
    ]
  };

  if (isError) {
    return (
      <div className="min-h-screen band-stone">
        <Navigation />
        <div className="pt-32 pb-20 text-center">
          <div className="container mx-auto px-6">
            <h2 className="font-display font-bold uppercase text-4xl md:text-6xl text-charcoal-900 mb-6">
              Portfolio & <span className="text-yellow-400">Case Studies</span>
            </h2>
            <p className="text-xl text-stone-500 mb-8">
              We're having trouble loading our portfolio. Please try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-yellow-400 text-charcoal-900 font-semibold uppercase text-sm border-2 border-charcoal-900 hover:bg-yellow-500 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
        <MegaFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-charcoal-900">
      <SEOHead
        title={seoConfig.portfolio.title}
        description={seoConfig.portfolio.description}
        keywords={seoConfig.portfolio.keywords}
        ogImage="/bozard-ford-featured.png"
        canonicalUrl={`${BASE_URL}/portfolio`}
        structuredData={portfolioStructuredData}
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-5 h-5 text-yellow-400" />
            <span className="label-industrial text-yellow-400 tracking-widest">OUR WORK</span>
          </div>
          <h1 className="font-display font-bold uppercase text-4xl lg:text-6xl text-white mb-4">
            Portfolio & <span className="text-yellow-400">Case Studies</span>
          </h1>
          <p className="text-lg lg:text-xl text-stone-400 leading-relaxed max-w-3xl">
            26+ years of proven results. Explore our work across web design, marketing, branding, video, and more.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-5 h-5 text-yellow-500" />
            <h2 className="font-display font-bold uppercase text-2xl text-charcoal-900">
              Featured Case Studies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CASE_STUDIES.map((cs) => (
              <Link key={cs.title} href={cs.link}>
                <div className="group cursor-pointer bg-white border-2 border-stone-200 hover:border-yellow-400 transition-all duration-300 overflow-hidden h-full flex flex-col hover:shadow-lg">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={cs.image}
                      alt={`${cs.title} - portfolio project by Business Builders`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
                    {cs.stat && (
                      <span className="absolute bottom-3 left-3 label-industrial bg-yellow-400 text-charcoal-900 px-2.5 py-1 text-xs border border-charcoal-900">
                        {cs.stat}
                      </span>
                    )}
                    <span className="absolute top-3 left-3 label-industrial bg-charcoal-900/80 text-white px-2.5 py-1 text-xs">
                      Case Study
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-display font-bold uppercase text-lg text-charcoal-900 group-hover:text-yellow-600 transition-colors mb-2">
                      {cs.title}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                      {cs.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                      <span className="label-industrial text-stone-400 text-xs">{cs.industry}</span>
                      <span className="flex items-center gap-1 text-yellow-600 font-display uppercase text-xs tracking-wide group-hover:gap-2 transition-all">
                        View <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-5 bg-white border-y-2 border-stone-200 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setVisibleCount(15); }}
                className="pl-9 h-10 bg-white border-2 border-stone-300 text-charcoal-900 placeholder:text-stone-400 focus:border-yellow-400 text-sm"
              />
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <button
                onClick={() => { setSelectedCategory("all"); setVisibleCount(15); }}
                className={`label-industrial px-3 py-1.5 text-xs border-2 transition-all ${
                  selectedCategory === "all"
                    ? "bg-yellow-400 text-charcoal-900 border-charcoal-900"
                    : "bg-white text-stone-500 border-stone-300 hover:border-charcoal-800 hover:text-charcoal-800"
                }`}
              >
                All ({nonCaseStudyItems.length})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setSelectedCategory(cat); setVisibleCount(15); }}
                  className={`label-industrial px-3 py-1.5 text-xs border-2 transition-all ${
                    selectedCategory === cat
                      ? "bg-yellow-400 text-charcoal-900 border-charcoal-900"
                      : "bg-white text-stone-500 border-stone-300 hover:border-charcoal-800 hover:text-charcoal-800"
                  }`}
                >
                  {cat} ({categoryCounts[cat] || 0})
                </button>
              ))}
            </div>

            {(searchTerm || selectedCategory !== "all") && (
              <button
                onClick={() => { setSearchTerm(""); setSelectedCategory("all"); setVisibleCount(15); }}
                className="text-yellow-600 hover:text-yellow-700 font-display uppercase underline underline-offset-2 text-xs whitespace-nowrap"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="border-2 border-stone-200 animate-pulse">
                  <div className="h-48 bg-stone-100" />
                  <div className="p-4 space-y-2">
                    <div className="h-3 bg-stone-100 w-16" />
                    <div className="h-5 bg-stone-100 w-4/5" />
                    <div className="h-3 bg-stone-100 w-full" />
                    <div className="h-3 bg-stone-100 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 border-2 border-stone-300 flex items-center justify-center">
                <Search className="w-8 h-8 text-stone-400" />
              </div>
              <h3 className="font-display text-2xl uppercase text-charcoal-800 mb-3">No Projects Found</h3>
              <p className="font-body text-stone-500 mb-6 max-w-md mx-auto">
                {searchTerm ? `No results for "${searchTerm}". Try different keywords.` : "No items in this category."}
              </p>
              <Button
                onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}
                className="bg-yellow-400 text-charcoal-900 border-2 border-charcoal-800 shadow-offset hover:bg-yellow-500 hover-press font-display uppercase tracking-wide"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              {(searchTerm || selectedCategory !== "all") && (
                <p className="text-sm text-stone-500 mb-6 font-display uppercase">
                  {filteredItems.length} project{filteredItems.length !== 1 ? 's' : ''} found
                  {searchTerm && <span> for "<strong>{searchTerm}</strong>"</span>}
                  {selectedCategory !== "all" && <span> in <strong>{selectedCategory}</strong></span>}
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {visibleItems.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white border-2 border-stone-200 hover:border-yellow-400 transition-all duration-300 overflow-hidden flex flex-col hover:shadow-lg"
                  >
                    <div className="relative h-44 overflow-hidden bg-stone-50">
                      <LazyImage
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.featured && (
                        <span className="absolute top-3 left-3 label-industrial bg-yellow-400 text-charcoal-900 px-2 py-0.5 text-xs border border-charcoal-900">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="p-4 flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {item.categories?.slice(0, 2).map((category) => (
                          <span
                            key={category}
                            className="label-industrial bg-stone-100 text-stone-500 px-2 py-0.5 text-xs"
                          >
                            {category}
                          </span>
                        ))}
                      </div>

                      <h3 className="font-display font-bold uppercase text-base text-charcoal-900 mb-1.5 group-hover:text-yellow-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>

                      {item.description && (
                        <p className="text-stone-500 text-sm leading-relaxed mb-3 line-clamp-2 flex-grow">
                          {item.description}
                        </p>
                      )}

                      {item.url && (
                        <div className="pt-2 border-t border-stone-100">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-yellow-600 hover:text-yellow-700 font-display uppercase text-xs tracking-wide transition-colors"
                          >
                            Visit Site <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {hasMore && (
                <div className="text-center mt-10">
                  <Button
                    onClick={() => setVisibleCount(prev => prev + 15)}
                    className="bg-charcoal-800 text-white border-2 border-charcoal-800 hover:bg-charcoal-700 font-display uppercase tracking-wide px-8"
                  >
                    <ChevronDown className="w-4 h-4 mr-2" />
                    Load More Projects
                  </Button>
                  <p className="text-stone-400 text-sm mt-2">
                    Showing {visibleItems.length} of {filteredItems.length} projects
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 band-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold uppercase text-3xl text-white mb-4">
            Ready to Create Your <span className="text-yellow-400">Success Story</span>?
          </h2>
          <p className="text-stone-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the businesses, ministries, and nonprofits that have transformed their growth with our proven marketing strategies.
          </p>
          <Link href="/request-quote">
            <Button className="bg-yellow-400 text-charcoal-900 border-2 border-yellow-400 hover:bg-yellow-500 font-display uppercase tracking-wide px-8 py-3 text-base shadow-offset hover-press">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 band-stone">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="headline-md text-charcoal-900 mb-4">
              Frequently Asked <span className="text-yellow-500">Questions</span>
            </h2>
          </div>

          <div className="border-2 border-charcoal-900 shadow-offset overflow-hidden bg-white">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-2 border-charcoal-900">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-charcoal-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  What types of projects has Business Builders completed?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  We have built over 100 websites and completed hundreds of marketing campaigns since 1999. Our portfolio includes custom website designs, e-commerce platforms, SEO campaigns, social media marketing, video production, branding and logo design, HubSpot implementations, and comprehensive digital marketing strategies for businesses, ministries, and nonprofits of all sizes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b-2 border-charcoal-900">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-charcoal-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  Can I see results from your marketing campaigns?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  Yes, our case studies showcase real results from our client partnerships. For example, Bozard Ford Lincoln saw a 285% increase in qualified leads, and Rulon International achieved a 450% increase in qualified leads through our digital transformation work. Each case study includes the specific strategies we used and the measurable outcomes we achieved.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b-2 border-charcoal-900">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-charcoal-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  Do you work with businesses in my industry?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  We serve a diverse range of industries including automotive, construction, manufacturing, healthcare, nonprofits, ministries, professional services, hospitality, real estate, and many more. Our proven marketing frameworks and StoryBrand methodology work across industries because they are rooted in how customers make buying decisions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-charcoal-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  How do I get started on a project with Business Builders?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  Getting started is easy. Schedule a free 15-minute consultation call where we will discuss your goals, challenges, and vision. From there, our team will create a customized proposal outlining our recommended strategy, timeline, and investment. We follow our proven Plan-Produce-Promote process to ensure every project delivers measurable results.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What types of projects has Business Builders completed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We have built over 100 websites and completed hundreds of marketing campaigns since 1999. Our portfolio includes custom website designs, e-commerce platforms, SEO campaigns, social media marketing, video production, branding and logo design, HubSpot implementations, and comprehensive digital marketing strategies."
                }
              },
              {
                "@type": "Question",
                "name": "Can I see results from your marketing campaigns?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our case studies showcase real results from our client partnerships. For example, Bozard Ford Lincoln saw a 285% increase in qualified leads, and Rulon International achieved a 450% increase in qualified leads through our digital transformation work."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with businesses in my industry?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve a diverse range of industries including automotive, construction, manufacturing, healthcare, nonprofits, ministries, professional services, hospitality, real estate, and many more."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get started on a project with Business Builders?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Getting started is easy. Schedule a free 15-minute consultation call where we will discuss your goals, challenges, and vision. We follow our proven Plan-Produce-Promote process to ensure every project delivers measurable results."
                }
              }
            ]
          }).replace(/</g, '\\u003c') }} />
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
