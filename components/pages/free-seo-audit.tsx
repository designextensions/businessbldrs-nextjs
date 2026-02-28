"use client";
import SEOHead from "@/components/ui/seo-head";

import { useEffect } from "react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, Gauge, Users, FileText, MapPin, Zap } from "lucide-react";

export default function FreeSEOAudit() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const existingScript = document.querySelector('script[src="https://seo.businessbldrs.com/js/v3/shc-builder.js"]');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://seo.businessbldrs.com/js/v3/shc-builder.js';
        script.async = true;
        
        script.onload = () => {
          console.log('SEO audit script loaded');
          setTimeout(() => {
            const container = document.getElementById('shc-container');
            if (container) {
              console.log('Container found, checking if populated...');
              setTimeout(() => {
                if (container.innerHTML.trim() === '') {
                  console.log('Container still empty, script may need manual trigger');
                }
              }, 2000);
            }
          }, 1000);
        };
        
        script.onerror = (e) => {
          console.error('Failed to load SEO audit script:', e);
        };
        
        document.head.appendChild(script);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free SEO Audit",
    "description": "Get a comprehensive free SEO audit for your website. Analyze your site's performance, identify opportunities, and receive actionable recommendations to improve your search rankings.",
    "provider": {
      "@type": "Organization",
      "name": "Business Builders",
      "url": "https://businessbldrs.com"
    },
    "mainEntity": {
      "@type": "Service",
      "name": "Free SEO Audit",
      "description": "Comprehensive website SEO analysis and optimization recommendations",
      "serviceType": "SEO Audit",
      "provider": {
        "@type": "Organization",
        "name": "Business Builders"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Free SEO Audit - Comprehensive Website Analysis | Business Builders"
        description="Get a comprehensive free SEO audit for your website. Analyze your site's performance, identify opportunities, and receive actionable recommendations to improve your search rankings."
        keywords="free seo audit, website seo analysis, seo check, website audit, search engine optimization, seo report, site performance analysis"
        structuredData={structuredData}
        pageType="website"
        canonicalUrl="https://businessbldrs.com/free-seo-audit"
      />
      
      <Navigation />
      
      <section className="band-white relative pt-32 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="label-industrial text-charcoal-900 bg-yellow-400 px-4 py-2 border-2 border-charcoal-800 inline-block mb-6">
              Free Tool
            </span>
            <h1 className="headline-lg text-charcoal-900 mb-6">
              Free <span className="text-yellow-500">SEO</span> Audit
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Get a comprehensive analysis of your website's SEO performance. Discover opportunities to improve your search rankings and drive more organic traffic to your site.
            </p>
          </div>
        </div>
      </section>

      <section className="band-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bento-card p-8 shadow-offset">
            <iframe 
              src="https://seo.businessbldrs.com/healthcheck/embedform/settings/wDvrJEAvmo?signature=f92e041340f6311664cb7ee0366ef1d9a0a641d86e4e33c98508958e9446b99b"
              style={{ 
                width: '100%', 
                height: '600px', 
                border: 'none',
                backgroundColor: 'white'
              }}
              data-testid="seo-audit-tool"
              title="Free SEO Audit Tool"
            />
            
            <div 
              id="shc-container" 
              data-domain="https://seo.businessbldrs.com/healthcheck/embedform/settings/wDvrJEAvmo?signature=f92e041340f6311664cb7ee0366ef1d9a0a641d86e4e33c98508958e9446b99b"
              style={{ minHeight: '400px', backgroundColor: 'white', display: 'none' }}
            ></div>
          </div>
        </div>
      </section>

      <section className="band-stone py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-charcoal-900 mb-6">
              What You'll Get From Your <span className="text-yellow-400">SEO Audit</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              Our comprehensive SEO audit provides actionable insights to improve your website's search performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bento-card bg-white p-8 text-center">
              <div className="w-16 h-16 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mx-auto mb-6 shadow-offset">
                <svg className="w-8 h-8 text-charcoal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl uppercase text-charcoal-900 mb-3">Performance Analysis</h3>
              <p className="text-stone-500">
                Detailed analysis of your website's current SEO performance, including rankings, traffic, and technical issues.
              </p>
            </div>

            <div className="bento-card bg-white p-8 text-center">
              <div className="w-16 h-16 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mx-auto mb-6 shadow-offset">
                <svg className="w-8 h-8 text-charcoal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl uppercase text-charcoal-900 mb-3">Actionable Recommendations</h3>
              <p className="text-stone-500">
                Specific, prioritized recommendations to improve your search rankings and organic traffic.
              </p>
            </div>

            <div className="bento-card bg-white p-8 text-center">
              <div className="w-16 h-16 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mx-auto mb-6 shadow-offset">
                <svg className="w-8 h-8 text-charcoal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl uppercase text-charcoal-900 mb-3">Technical SEO Check</h3>
              <p className="text-stone-500">
                Comprehensive review of technical SEO factors including site speed, mobile-friendliness, and crawlability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Free SEO Audit Includes */}
      <section className="band-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-charcoal-900 mb-6">
              What Your Free <span className="text-yellow-400">SEO Audit</span> Includes
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              Our audit covers the critical factors that determine how well your website performs in search engine results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bento-card bg-white p-8">
              <div className="w-14 h-14 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mb-6 shadow-offset">
                <Search className="w-7 h-7 text-charcoal-900" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase text-charcoal-900 mb-3">Keyword Analysis</h3>
              <p className="text-stone-500">
                We evaluate which keywords your site currently ranks for, identify missed opportunities, and show you the search terms your competitors are capturing that you should be targeting.
              </p>
            </div>

            <div className="bento-card bg-white p-8">
              <div className="w-14 h-14 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mb-6 shadow-offset">
                <FileText className="w-7 h-7 text-charcoal-900" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase text-charcoal-900 mb-3">Technical SEO Check</h3>
              <p className="text-stone-500">
                Your site is scanned for crawl errors, broken links, missing meta tags, duplicate content, and other technical issues that could be hurting your rankings without you knowing.
              </p>
            </div>

            <div className="bento-card bg-white p-8">
              <div className="w-14 h-14 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mb-6 shadow-offset">
                <Users className="w-7 h-7 text-charcoal-900" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase text-charcoal-900 mb-3">Competitor Comparison</h3>
              <p className="text-stone-500">
                See how your website stacks up against your top competitors. We analyze their strengths and reveal gaps you can exploit to gain an edge in your market.
              </p>
            </div>

            <div className="bento-card bg-white p-8">
              <div className="w-14 h-14 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mb-6 shadow-offset">
                <FileText className="w-7 h-7 text-charcoal-900" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase text-charcoal-900 mb-3">On-Page Optimization Review</h3>
              <p className="text-stone-500">
                We examine your title tags, headings, content quality, internal linking, and image optimization to find quick improvements that can boost your rankings.
              </p>
            </div>

            <div className="bento-card bg-white p-8">
              <div className="w-14 h-14 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mb-6 shadow-offset">
                <MapPin className="w-7 h-7 text-charcoal-900" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase text-charcoal-900 mb-3">Local SEO Assessment</h3>
              <p className="text-stone-500">
                For businesses serving a specific area, we check your Google Business Profile, local citations, and location-based keywords to make sure nearby customers can find you.
              </p>
            </div>

            <div className="bento-card bg-white p-8">
              <div className="w-14 h-14 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mb-6 shadow-offset">
                <Gauge className="w-7 h-7 text-charcoal-900" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase text-charcoal-900 mb-3">Site Speed Analysis</h3>
              <p className="text-stone-500">
                Page load time is a direct ranking factor. We measure your site speed on both desktop and mobile, then pinpoint what is slowing it down and how to fix it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="band-dark py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-white mb-6">
              How It <span className="text-yellow-400">Works</span>
            </h2>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto">
              Getting your free SEO audit takes less than a minute. Here is what to expect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mx-auto mb-6 shadow-offset">
                <span className="font-display font-bold text-3xl text-charcoal-900">1</span>
              </div>
              <h3 className="font-display font-bold text-xl uppercase text-white mb-3">Enter Your URL</h3>
              <p className="text-stone-400">
                Type your website address into the audit tool above. No login or credit card required -- just your URL.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mx-auto mb-6 shadow-offset">
                <span className="font-display font-bold text-3xl text-charcoal-900">2</span>
              </div>
              <h3 className="font-display font-bold text-xl uppercase text-white mb-3">Get Instant Analysis</h3>
              <p className="text-stone-400">
                Our tool scans your site across dozens of SEO factors and generates a detailed report within seconds, complete with a letter-grade score.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 border-2 border-charcoal-800 flex items-center justify-center mx-auto mb-6 shadow-offset">
                <span className="font-display font-bold text-3xl text-charcoal-900">3</span>
              </div>
              <h3 className="font-display font-bold text-xl uppercase text-white mb-3">Review With Our Team</h3>
              <p className="text-stone-400">
                Want help making sense of the results? Schedule a free call with our SEO team and we will walk you through the findings and recommend next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="band-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="headline-lg text-charcoal-900 mb-6">
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto">
              Common questions about our free SEO audit tool
            </p>
          </div>

          <div className="border-2 border-charcoal-900 shadow-offset overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-2 border-charcoal-900">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-charcoal-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  What does the SEO audit check?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  The audit analyzes over 30 factors that influence your search engine rankings. This includes on-page elements like title tags, meta descriptions, and heading structure. It also evaluates technical factors such as page load speed, mobile responsiveness, crawlability, and SSL security. You will receive a scored report that highlights the specific areas where your site is strong and where it needs improvement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b-2 border-charcoal-900">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-charcoal-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  How long does the audit take?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  The automated scan typically completes within 30 to 60 seconds. Once it finishes, you will see your results immediately on-screen with a breakdown of your site's performance across key SEO categories. If you choose to schedule a follow-up review with our team, that conversation usually takes about 15 to 20 minutes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-charcoal-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  What happens after the audit?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  After reviewing your results, you can take action on the recommendations yourself or reach out to our team for help. If you would like expert guidance, we offer a free 15-minute discovery call where we walk through the audit findings, answer your questions, and suggest a prioritized plan for improving your rankings. There is no obligation and no pressure -- we are here to help you understand your options.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
