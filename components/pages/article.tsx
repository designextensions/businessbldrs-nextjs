"use client";
import Link from "next/link";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import ArticleSEO from "@/components/ui/ArticleSEO";
import { Author, TLDR, FAQ, ExpertQuote, defaultAuthor } from "@/components/ui/geo-components";
import type { BlogArticle } from "@/lib/db/schema";

export default function Article() {
  const params = useParams();
  const slug = params?.slug as string | undefined;

  const { data: articles = [], isLoading } = useQuery<BlogArticle[]>({
    queryKey: ["/api/blog-articles"],
  });

  const article = articles.find(a => a.slug === slug || a.id.toString() === slug);

  if (isLoading) {
    return (
      <div className="min-h-screen band-dark">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="animate-pulse">
              <div className="h-8 bg-charcoal-800 w-3/4 mb-6"></div>
              <div className="h-4 bg-charcoal-800 w-1/2 mb-8"></div>
              <div className="h-64 bg-charcoal-800 mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-charcoal-800"></div>
                <div className="h-4 bg-charcoal-800"></div>
                <div className="h-4 bg-charcoal-800 w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen band-dark">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="headline-lg text-white mb-6">Article Not Found</h1>
            <p className="text-stone-400 mb-8">The article you're looking for doesn't exist or has been moved.</p>
            <Link href="/resources">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-display uppercase tracking-wide border-2 border-black shadow-offset hover-press">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Resources
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out this article: ${article.title}`;

  const shareOnSocial = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen">
      {article && <ArticleSEO article={article} />}
      <Navigation />
      
      {/* Article Header - Light Band */}
      <section className="band-white pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/resources">
            <Button 
              variant="ghost" 
              className="text-charcoal-900 hover:text-charcoal-700 hover:bg-stone-100 mb-8 p-0 font-display uppercase tracking-wide"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Button>
          </Link>
          
          {/* Category Badge */}
          <div className="mb-6">
            <span className="label-industrial bg-yellow-400 text-black px-4 py-2 border-2 border-black shadow-offset-sm inline-block">
              {article.category}
            </span>
          </div>
          
          {/* Title */}
          <h1 className="headline-lg text-charcoal-900 mb-6">
            {article.title}
          </h1>
          
          {/* Excerpt */}
          <p className="text-editorial-lg text-stone-600 mb-8">
            {article.excerpt}
          </p>
          
          {/* Author Byline with Credentials */}
          <Author 
            name={defaultAuthor.name}
            title={defaultAuthor.title}
            credentials={defaultAuthor.credentials}
            image={defaultAuthor.image}
            date={article.date}
          />
          
          {/* TL;DR Summary */}
          <TLDR>
            {article.excerpt}
          </TLDR>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-stone-600 mb-8 label-industrial">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-yellow-500" />
              <span>{article.readTime}</span>
            </div>
          </div>
          
          {/* Share Buttons */}
          <div className="flex items-center gap-4 pb-8 border-b-2 border-stone-200">
            <span className="text-stone-600 font-display uppercase tracking-wide text-sm">Share:</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => shareOnSocial('facebook')}
              className="text-stone-600 hover:text-yellow-500 hover:bg-yellow-400/10 border-2 border-transparent hover:border-yellow-500"
            >
              <Facebook className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => shareOnSocial('twitter')}
              className="text-stone-600 hover:text-yellow-500 hover:bg-yellow-400/10 border-2 border-transparent hover:border-yellow-500"
            >
              <Twitter className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => shareOnSocial('linkedin')}
              className="text-stone-600 hover:text-yellow-500 hover:bg-yellow-400/10 border-2 border-transparent hover:border-yellow-500"
            >
              <Linkedin className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Article Image - Stone Band */}
      <section className="band-stone py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bento-card overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Article Content - White Band */}
      <section className="band-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-stone-600 prose-p:leading-relaxed prose-blockquote:border-l-4 prose-blockquote:border-yellow-400 prose-blockquote:bg-stone-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-stone-700 prose-a:text-yellow-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-zinc-900">
            {article.content ? (
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            ) : (
              <div className="text-stone-600 leading-relaxed space-y-6">
                <p>
                  In today's competitive digital landscape, understanding the fundamentals of effective marketing
                  is crucial for business success. This comprehensive guide will walk you through proven strategies
                  that have helped countless businesses achieve remarkable growth.
                </p>
                
                <p>
                  Our team at Business Builders has worked with over 1,000 companies across various industries,
                  and we've identified the key patterns that separate successful businesses from those that struggle
                  to gain traction in their markets.
                </p>
                
                <h2 className="headline-md text-zinc-900">Key Strategies for Success</h2>
                
                <p>
                  The strategies outlined in this article have been tested and refined through years of real-world
                  application. Each approach is backed by data and has proven effective across multiple industries
                  and business models.
                </p>
                
                <blockquote className="border-l-4 border-yellow-400 pl-6 bg-stone-50 py-4 text-stone-700 my-8">
                  "The most successful businesses are those that understand their customers deeply and communicate
                  their value proposition clearly and consistently."
                </blockquote>
                
                <h2 className="headline-md text-zinc-900">Implementation Guidelines</h2>
                
                <p>
                  When implementing these strategies, it's important to start with a solid foundation. Begin by
                  clearly defining your target audience and understanding their pain points, desires, and motivations.
                  This understanding will inform every aspect of your marketing approach.
                </p>
                
                <p>
                  Remember that successful marketing is not about clever tactics or gimmicks—it's about building
                  genuine relationships with your customers by providing real value and solving their problems
                  in meaningful ways.
                </p>
                
                <h2 className="headline-md text-zinc-900">Getting Started</h2>
                
                <p>
                  Ready to transform your marketing approach? Contact our team to schedule a consultation and
                  discover how these proven strategies can be customized for your specific business needs.
                  We're here to help you build a marketing system that drives consistent, sustainable growth.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Related Services CTA */}
      <section className="band-stone py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-md mb-4">
            Ready to <span className="text-yellow-500">Grow</span> Your Business?
          </h2>
          <p className="text-stone-500 mb-10 max-w-2xl mx-auto">
            Put these insights into action with our expert team. We help businesses like yours achieve measurable results.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/website-design" className="bento-card border-2 border-charcoal-800 p-6 hover:shadow-offset transition-all duration-300 group text-left">
              <h3 className="font-bold text-charcoal-900 mb-1 group-hover:text-yellow-600">Website Design</h3>
              <p className="text-sm text-stone-500">Custom websites that convert</p>
            </Link>
            <Link href="/seo-services" className="bento-card border-2 border-charcoal-800 p-6 hover:shadow-offset transition-all duration-300 group text-left">
              <h3 className="font-bold text-charcoal-900 mb-1 group-hover:text-yellow-600">SEO Services</h3>
              <p className="text-sm text-stone-500">Dominate search results</p>
            </Link>
            <Link href="/marketing-services" className="bento-card border-2 border-charcoal-800 p-6 hover:shadow-offset transition-all duration-300 group text-left">
              <h3 className="font-bold text-charcoal-900 mb-1 group-hover:text-yellow-600">Marketing</h3>
              <p className="text-sm text-stone-500">Strategic marketing solutions</p>
            </Link>
            <Link href="/hubspot-implementation" className="bento-card border-2 border-charcoal-800 p-6 hover:shadow-offset transition-all duration-300 group text-left">
              <h3 className="font-bold text-charcoal-900 mb-1 group-hover:text-yellow-600">HubSpot CRM</h3>
              <p className="text-sm text-stone-500">Platinum partner services</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action - Dark Band */}
      <section className="band-dark py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-charcoal-900 border-2 border-charcoal-800 p-10 shadow-offset-yellow text-center">
            <h3 className="headline-md text-white mb-4">Ready to Transform Your Marketing?</h3>
            <p className="text-stone-400 mb-8 text-lg">
              Get personalized strategies that work for your specific business challenges.
            </p>
            <Link href="/request-quote">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-display uppercase tracking-wide text-lg px-8 py-4 border-2 border-black shadow-offset hover-press">
                Schedule Your Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <MegaFooter />
    </div>
  );
}
