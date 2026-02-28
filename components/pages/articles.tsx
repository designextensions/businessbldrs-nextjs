"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import { Search, Calendar, User, ArrowRight, Clock, ChevronDown, Grid, List, BookOpen, TrendingUp } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import type { BlogArticle } from "@/lib/db/schema";
import { seoConfig, getBreadcrumbSchema, BASE_URL } from "@/lib/seo-config";

type ViewType = 'grid' | 'list';
type SortBy = 'newest' | 'oldest' | 'title';

function decodeHtml(text: string) {
  return text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
}

function ArticleImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const isPlaceholder = !src || src.includes('placeholder');

  if (isPlaceholder) {
    return (
      <div className={`bg-gradient-to-br from-charcoal-800 to-charcoal-900 flex items-center justify-center ${className}`}>
        <BookOpen className="w-12 h-12 text-yellow-400/40" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      loading="lazy"
    />
  );
}

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortBy>("newest");
  const [viewType, setViewType] = useState<ViewType>("grid");
  const [visibleCount, setVisibleCount] = useState(12);

  const { data: articles = [], isLoading } = useQuery<BlogArticle[]>({
    queryKey: ["/api/articles"],
  });

  const categories = useMemo(() => 
    Array.from(new Set(articles.map(article => article.category)))
      .map(c => decodeHtml(c))
      .sort(),
    [articles]
  );

  const filteredArticles = useMemo(() => {
    const search = searchTerm.toLowerCase();
    return articles.filter(article => {
      const matchesSearch = !search || 
        article.title.toLowerCase().includes(search) ||
        article.excerpt.toLowerCase().includes(search) ||
        article.author.toLowerCase().includes(search);
      const matchesCategory = selectedCategory === "all" || 
        decodeHtml(article.category) === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [articles, searchTerm, selectedCategory]);

  const sortedArticles = useMemo(() => 
    [...filteredArticles].sort((a, b) => {
      switch (sortBy) {
        case 'newest': return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest': return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'title': return a.title.localeCompare(b.title);
        default: return 0;
      }
    }),
    [filteredArticles, sortBy]
  );

  const isFiltering = searchTerm || selectedCategory !== "all";
  const showHero = !isFiltering && sortedArticles.length > 0;
  const featuredArticle = showHero ? sortedArticles[0] : null;
  const gridArticles = showHero ? sortedArticles.slice(1) : sortedArticles;
  const visibleArticles = gridArticles.slice(0, visibleCount);
  const hasMore = visibleCount < gridArticles.length;

  const articlesStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": seoConfig.articles.title,
        "description": seoConfig.articles.description,
        "url": `${BASE_URL}/articles`,
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": sortedArticles.slice(0, 20).map((article, index) => ({
            "@type": "Article",
            "position": index + 1,
            "name": article.title,
            "description": article.excerpt,
            "url": `${BASE_URL}/resources/articles/${article.slug}`,
            "datePublished": article.date,
            "author": { "@type": "Organization", "name": "Business Builders" }
          }))
        }
      },
      getBreadcrumbSchema("Articles", "/articles")
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={seoConfig.articles.title}
        description={seoConfig.articles.description}
        keywords={seoConfig.articles.keywords}
        canonicalUrl={`${BASE_URL}/articles`}
        structuredData={articlesStructuredData}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-5 h-5 text-yellow-400" />
              <span className="label-industrial text-yellow-400 tracking-widest">INSIGHTS & RESOURCES</span>
            </div>
            <h1 className="headline-lg text-white mb-4">
              {seoConfig.articles.h1}
            </h1>
            <p className="font-body text-lg text-stone-400 max-w-2xl leading-relaxed">
              Proven strategies and expert insights from 26+ years of growing businesses, ministries, and nonprofits.
            </p>
          </div>

          {/* Featured Article */}
          {!isLoading && featuredArticle && (
            <Link href={`/resources/articles/${featuredArticle.slug}`}>
              <div className="group cursor-pointer border-2 border-stone-700 hover:border-yellow-400 transition-all duration-300 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-80 overflow-hidden">
                    <ArticleImage
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="label-industrial px-3 py-1.5 bg-yellow-400 text-charcoal-900 text-xs">
                        LATEST ARTICLE
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-center bg-charcoal-900">
                    <span className="label-industrial text-yellow-400 text-xs tracking-widest mb-3">
                      {decodeHtml(featuredArticle.category)}
                    </span>
                    <h2 className="font-display text-2xl lg:text-3xl uppercase tracking-tight text-white group-hover:text-yellow-400 transition-colors mb-4 line-clamp-3">
                      {featuredArticle.title}
                    </h2>
                    <p className="font-body text-stone-400 mb-6 line-clamp-3 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-stone-500 text-sm">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredArticle.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {featuredArticle.readTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-2 text-yellow-400 font-display uppercase text-sm tracking-wide group-hover:gap-3 transition-all">
                        Read <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-6 bg-stone-100 border-y-2 border-stone-200 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <div className="relative flex-grow max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setVisibleCount(12); }}
                className="pl-9 h-10 bg-white border-2 border-stone-300 text-charcoal-900 placeholder:text-stone-400 focus:border-yellow-400 text-sm"
              />
            </div>

            <div className="flex gap-3 items-center">
              <select
                value={selectedCategory}
                onChange={(e) => { setSelectedCategory(e.target.value); setVisibleCount(12); }}
                className="w-44 h-10 bg-white border-2 border-stone-300 text-charcoal-900 text-sm px-3 rounded-md appearance-none cursor-pointer focus:outline-none focus:border-yellow-400"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortBy)}
                className="w-36 h-10 bg-white border-2 border-stone-300 text-charcoal-900 text-sm px-3 rounded-md appearance-none cursor-pointer focus:outline-none focus:border-yellow-400"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="title">A – Z</option>
              </select>

              <div className="hidden sm:flex items-center gap-0.5 bg-white border-2 border-stone-300 p-0.5 rounded-sm">
                <button
                  onClick={() => setViewType('grid')}
                  className={`p-1.5 transition-colors ${viewType === 'grid' ? 'bg-yellow-400 text-charcoal-900' : 'text-stone-500 hover:text-charcoal-900'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewType('list')}
                  className={`p-1.5 transition-colors ${viewType === 'list' ? 'bg-yellow-400 text-charcoal-900' : 'text-stone-500 hover:text-charcoal-900'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {(searchTerm || selectedCategory !== "all") && (
              <div className="flex items-center gap-2 text-sm text-stone-600">
                <span className="font-display uppercase">
                  {sortedArticles.length} result{sortedArticles.length !== 1 ? 's' : ''}
                </span>
                <button
                  onClick={() => { setSearchTerm(""); setSelectedCategory("all"); setVisibleCount(12); }}
                  className="text-yellow-600 hover:text-yellow-700 font-display uppercase underline underline-offset-2 text-xs"
                >
                  Clear
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 band-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="border-2 border-stone-200 animate-pulse">
                  <div className="h-48 bg-stone-100" />
                  <div className="p-5 space-y-3">
                    <div className="h-3 bg-stone-100 w-20" />
                    <div className="h-5 bg-stone-100 w-4/5" />
                    <div className="h-5 bg-stone-100 w-3/5" />
                    <div className="space-y-2 pt-2">
                      <div className="h-3 bg-stone-100 w-full" />
                      <div className="h-3 bg-stone-100 w-2/3" />
                    </div>
                    <div className="h-3 bg-stone-100 w-24 pt-2" />
                  </div>
                </div>
              ))}
            </div>
          ) : sortedArticles.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 border-2 border-stone-300 flex items-center justify-center">
                <Search className="w-8 h-8 text-stone-400" />
              </div>
              <h3 className="font-display text-2xl uppercase text-charcoal-800 mb-3">No Articles Found</h3>
              <p className="font-body text-stone-500 mb-6 max-w-md mx-auto">
                {searchTerm
                  ? `No results for "${searchTerm}". Try different keywords.`
                  : 'Check back soon for new articles.'}
              </p>
              {(searchTerm || selectedCategory !== "all") && (
                <Button
                  onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}
                  className="bg-yellow-400 text-charcoal-900 border-2 border-charcoal-800 shadow-offset hover:bg-yellow-500 hover-press font-display uppercase tracking-wide"
                >
                  Clear Filters
                </Button>
              )}
            </div>
          ) : viewType === 'grid' ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleArticles.map((article) => (
                  <Link key={article.id} href={`/resources/articles/${article.slug}`}>
                    <article className="group cursor-pointer border-2 border-stone-200 hover:border-yellow-400 transition-all duration-300 h-full flex flex-col bg-white hover:shadow-lg">
                      <div className="relative h-48 overflow-hidden">
                        <ArticleImage
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="label-industrial px-2 py-1 bg-yellow-400 text-charcoal-900 text-xs">
                            {decodeHtml(article.category)}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className="font-display text-lg uppercase tracking-tight text-charcoal-800 group-hover:text-yellow-600 transition-colors line-clamp-2 mb-3">
                          {article.title}
                        </h3>
                        <p className="font-body text-stone-500 text-sm line-clamp-3 leading-relaxed mb-4 flex-grow">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                          <span className="flex items-center gap-1.5 text-stone-400 text-xs">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                          <span className="flex items-center gap-1 text-yellow-600 font-display uppercase text-xs tracking-wide group-hover:gap-2 transition-all">
                            Read <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {hasMore && (
                <div className="text-center mt-10">
                  <Button
                    onClick={() => setVisibleCount(prev => prev + 12)}
                    className="bg-charcoal-800 text-white border-2 border-charcoal-800 hover:bg-charcoal-700 font-display uppercase tracking-wide px-8"
                  >
                    <ChevronDown className="w-4 h-4 mr-2" />
                    Load More Articles
                  </Button>
                  <p className="text-stone-400 text-sm mt-2">
                    Showing {visibleArticles.length + (featuredArticle ? 1 : 0)} of {sortedArticles.length} articles
                  </p>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="space-y-4">
                {visibleArticles.map((article) => (
                  <Link key={article.id} href={`/resources/articles/${article.slug}`}>
                    <article className="group cursor-pointer border-2 border-stone-200 hover:border-yellow-400 transition-all duration-300 bg-white hover:shadow-lg">
                      <div className="flex gap-0">
                        <div className="flex-shrink-0 w-40 sm:w-52 h-auto overflow-hidden">
                          <ArticleImage
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full min-h-[140px] group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-grow p-5 flex flex-col justify-center">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="label-industrial px-2 py-0.5 bg-yellow-400 text-charcoal-900 text-xs">
                              {decodeHtml(article.category)}
                            </span>
                            <span className="flex items-center gap-1 text-stone-400 text-xs">
                              <Calendar className="w-3.5 h-3.5" />
                              {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-1 text-stone-400 text-xs">
                              <Clock className="w-3.5 h-3.5" />
                              {article.readTime}
                            </span>
                          </div>
                          <h3 className="font-display text-lg uppercase tracking-tight text-charcoal-800 mb-2 group-hover:text-yellow-600 transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="font-body text-stone-500 text-sm line-clamp-2 leading-relaxed mb-3 hidden sm:block">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1.5 text-stone-400 text-xs">
                              <User className="w-3.5 h-3.5" />
                              {article.author}
                            </span>
                            <span className="flex items-center gap-1 text-yellow-600 font-display uppercase text-xs tracking-wide group-hover:gap-2 transition-all">
                              Read <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {hasMore && (
                <div className="text-center mt-10">
                  <Button
                    onClick={() => setVisibleCount(prev => prev + 12)}
                    className="bg-charcoal-800 text-white border-2 border-charcoal-800 hover:bg-charcoal-700 font-display uppercase tracking-wide px-8"
                  >
                    <ChevronDown className="w-4 h-4 mr-2" />
                    Load More Articles
                  </Button>
                  <p className="text-stone-400 text-sm mt-2">
                    Showing {visibleArticles.length + (featuredArticle ? 1 : 0)} of {sortedArticles.length} articles
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
