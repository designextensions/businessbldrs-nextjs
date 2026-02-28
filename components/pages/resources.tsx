"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Play, FileText, Download, Video, BookOpen, Settings, ExternalLink, Lock, CheckCircle, Briefcase } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { FallbackResourceImage } from "@/components/ui/fallback-image";
import VideoModal from "@/components/ui/video-modal";
import EmailCaptureModal from "@/components/ui/email-capture-modal";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import type { MarketingVideo, BlogArticle, DownloadableResource, AccessTool } from "@/lib/db/schema";
import { useDownloadGate } from "@/hooks/use-download-gate";
import { trackEvent } from "@/components/ui/google-analytics";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Resources() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["BUSINESS", "MINISTRY", "NONPROFIT"];
  const [selectedVideo, setSelectedVideo] = useState<MarketingVideo | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<DownloadableResource | null>(null);

  const {
    shouldGateDownload,
    recordDownload,
    setCredentials,
  } = useDownloadGate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const { data: allMarketingVideos = [], isLoading: videosLoading } = useQuery<MarketingVideo[]>({
    queryKey: ["/api/marketing-videos"],
  });

  const marketingVideos = allMarketingVideos
    .filter(video => video.isActive)
    .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime())
    .slice(0, 3);

  const { data: featuredArticles = [], isLoading: featuredLoading } = useQuery<BlogArticle[]>({
    queryKey: ["/api/blog-articles/featured"],
  });

  const { data: recentArticles = [], isLoading: recentLoading } = useQuery<BlogArticle[]>({
    queryKey: ["/api/blog-articles/recent"],
    queryFn: () => fetch("/api/blog-articles/recent?limit=6").then(res => res.json()),
  });

  const blogArticles = featuredArticles.length > 0 ? featuredArticles : recentArticles;
  const articlesLoading = featuredLoading || recentLoading;

  const { data: downloadableResources = [], isLoading: resourcesLoading } = useQuery<DownloadableResource[]>({
    queryKey: ["/api/downloadable-resources"],
  });

  const { data: accessTools = [], isLoading: toolsLoading } = useQuery<AccessTool[]>({
    queryKey: ["/api/access-tools"],
  });

  const handleVideoClick = (video: MarketingVideo) => {
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideo(null);
  };

  const handleDownload = (resource: DownloadableResource) => {
    if (!resource.downloadUrl) return;

    if (shouldGateDownload(resource.id, resource.requiresEmail ?? false)) {
      setSelectedResource(resource);
      setEmailModalOpen(true);
      return;
    }

    trackEvent('download_free', {
      event_category: 'downloads',
      event_label: resource.title,
      resource_id: resource.id
    });

    recordDownload(resource.id);
    window.open(resource.downloadUrl, '_blank');
  };

  const handleEmailSuccess = (email: string, name: string, company?: string) => {
    setCredentials(email, name, company);
    if (selectedResource) {
      recordDownload(selectedResource.id);
    }
    setEmailModalOpen(false);
    setSelectedResource(null);
  };

  const totalResources = allMarketingVideos.filter(v => v.isActive).length + blogArticles.length + downloadableResources.length;

  return (
    <div className="min-h-screen">
      <Breadcrumbs items={[
        { label: "Resources" }
      ]} />
      <SEOHead
        title="Free Marketing Resources - Videos, Articles & Downloads | Business Builders"
        description="Access free marketing strategy videos, expert articles, and downloadable templates to grow your business. Learn from 26+ years of marketing expertise."
        keywords="marketing resources, free marketing videos, business growth articles, marketing templates, marketing guides, digital marketing resources"
        canonicalUrl="https://businessbldrs.com/resources"
      />
      <Navigation />

      {/* Hero Section - Dark theme matching videos/downloads pages */}
      <section className="pt-32 pb-16 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-industrial inline-block px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
                <BookOpen className="w-4 h-4 inline mr-2" />
                FREE RESOURCES
              </span>
              <h1 className="headline-lg text-white mb-6">
                FREE <span className="text-yellow-400">RESOURCES</span><br />
                TO SCALE YOUR{" "}
                <span className="relative inline-block">
                  {words.map((word, index) => (
                    <span
                      key={word}
                      className="absolute inset-0 transition-opacity duration-500 text-yellow-400"
                      style={{
                        opacity: currentWordIndex === index ? 1 : 0,
                        textDecoration: "underline",
                        textDecorationColor: "#facc15",
                        textUnderlineOffset: "8px",
                        textDecorationThickness: "4px"
                      }}
                    >
                      {word}
                    </span>
                  ))}
                  <span className="opacity-0 text-yellow-400">NONPROFIT</span>
                </span>
              </h1>
              <p className="text-editorial text-stone-400 mb-8">
                Access our library of marketing videos, expert articles, and downloadable tools to help you build a stronger, more profitable business.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-yellow-400">{totalResources || "50+"}</div>
                  <div className="label-industrial text-stone-500 text-xs">RESOURCES</div>
                </div>
                <div className="w-px h-12 bg-charcoal-700" />
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-yellow-400">4</div>
                  <div className="label-industrial text-stone-500 text-xs">CATEGORIES</div>
                </div>
                <div className="w-px h-12 bg-charcoal-700" />
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-yellow-400">FREE</div>
                  <div className="label-industrial text-stone-500 text-xs">ALWAYS</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: Video, label: "VIDEOS", desc: "Expert strategy sessions", action: () => scrollToSection('videos'), count: allMarketingVideos.filter(v => v.isActive).length },
                { icon: BookOpen, label: "ARTICLES", desc: "In-depth marketing insights", action: () => scrollToSection('articles'), count: blogArticles.length },
                { icon: Download, label: "DOWNLOADS", desc: "Templates & checklists", action: () => scrollToSection('downloads'), count: downloadableResources.length },
                { icon: Settings, label: "TOOLS", desc: "Recommended software", action: () => scrollToSection('tools'), count: accessTools.length },
              ].map((item, i) => (
                <button
                  key={i}
                  onClick={item.action}
                  className="bg-charcoal-800 border-2 border-charcoal-700 p-5 text-left hover:border-yellow-400 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <item.icon className="w-6 h-6 text-yellow-400" />
                    {item.count > 0 && (
                      <span className="label-industrial text-stone-500 text-xs">{item.count}</span>
                    )}
                  </div>
                  <div className="label-industrial text-white text-xs mb-1 group-hover:text-yellow-400 transition-colors">{item.label}</div>
                  <p className="text-stone-500 text-xs">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8 lg:hidden">
            <Button
              onClick={() => scrollToSection('videos')}
              className="bg-yellow-400 text-charcoal-900 font-bold hover:bg-yellow-300 shadow-offset-sm hover-press border-2 border-charcoal-900"
            >
              <Video className="w-4 h-4 mr-2" />
              Videos
            </Button>
            <Button
              onClick={() => scrollToSection('articles')}
              className="bg-transparent border-2 border-charcoal-700 text-stone-300 font-bold hover:border-yellow-400 hover:text-yellow-400"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Articles
            </Button>
            <Button
              onClick={() => scrollToSection('downloads')}
              className="bg-transparent border-2 border-charcoal-700 text-stone-300 font-bold hover:border-yellow-400 hover:text-yellow-400"
            >
              <Download className="w-4 h-4 mr-2" />
              Downloads
            </Button>
            <Button
              onClick={() => scrollToSection('tools')}
              className="bg-transparent border-2 border-charcoal-700 text-stone-300 font-bold hover:border-yellow-400 hover:text-yellow-400"
            >
              <Settings className="w-4 h-4 mr-2" />
              Tools
            </Button>
          </div>
        </div>
      </section>

      {/* Marketing & Strategy Videos Section */}
      <section id="videos" className="band-stone py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="label-industrial text-yellow-600 mb-2 block">VIDEO LIBRARY</span>
              <h2 className="headline-md font-display uppercase text-charcoal-900">
                Marketing & Strategy <span className="text-yellow-500">Videos</span>
              </h2>
            </div>
            {allMarketingVideos.filter(v => v.isActive).length > 3 && (
              <Link href="/videos" className="mt-4 md:mt-0">
                <span className="label-industrial text-charcoal-900 hover:text-yellow-600 transition-colors inline-flex items-center gap-2">
                  VIEW ALL VIDEOS <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            )}
          </div>

          {videosLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bento-card overflow-hidden animate-pulse">
                  <div className="aspect-video bg-stone-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-3 bg-stone-200 w-1/3" />
                    <div className="h-4 bg-stone-200" />
                    <div className="h-4 bg-stone-200 w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : marketingVideos.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketingVideos.map((video) => (
                <div key={video.id} className="bento-card overflow-hidden group">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={`${video.title} - marketing resource video by Business Builders`}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      className="absolute inset-0 bg-charcoal-900/40 flex items-center justify-center cursor-pointer"
                      onClick={() => handleVideoClick(video)}
                    >
                      <div className="w-14 h-14 bg-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-offset-sm">
                        <Play className="w-7 h-7 text-charcoal-900 ml-1" />
                      </div>
                    </div>
                    {video.duration && (
                      <div className="absolute bottom-3 right-3">
                        <span className="label-industrial bg-charcoal-900/80 text-white px-2 py-1 text-xs">{video.duration}</span>
                      </div>
                    )}
                    {video.category && (
                      <div className="absolute top-3 left-3">
                        <span className="label-industrial bg-yellow-400 text-charcoal-900 px-2 py-1 text-xs">{video.category}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg text-charcoal-900 uppercase line-clamp-2 mb-2 group-hover:text-yellow-600 transition-colors">{video.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border-2 border-dashed border-stone-300">
              <Video className="w-12 h-12 mx-auto mb-3 text-stone-400" />
              <h3 className="font-display font-bold text-stone-500 uppercase mb-1">No Videos Yet</h3>
              <p className="text-stone-400 text-sm">Marketing videos will appear here once added.</p>
            </div>
          )}
        </div>
      </section>

      {/* Expert Articles Section */}
      <section id="articles" className="band-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="label-industrial text-yellow-600 mb-2 block">INSIGHTS & STRATEGY</span>
              <h2 className="headline-md font-display uppercase text-charcoal-900">
                Expert <span className="text-yellow-500">Articles</span>
              </h2>
            </div>
            {blogArticles.length > 3 && (
              <Link href="/articles" className="mt-4 md:mt-0">
                <span className="label-industrial text-charcoal-900 hover:text-yellow-600 transition-colors inline-flex items-center gap-2">
                  VIEW ALL ARTICLES <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            )}
          </div>

          {articlesLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bento-card overflow-hidden animate-pulse">
                  <div className="h-48 bg-stone-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-3 bg-stone-200 w-1/3" />
                    <div className="h-4 bg-stone-200" />
                    <div className="h-3 bg-stone-200 w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : blogArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogArticles.slice(0, 3).map((article) => (
                <Link
                  key={article.id}
                  href={`/resources/articles/${article.slug}`}
                  className="group block"
                >
                  <div className="bento-card overflow-hidden h-full">
                    {article.image ? (
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <FallbackResourceImage title={article.title} category={article.category} />
                    )}
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="label-industrial text-yellow-600 text-xs">{article.category}</span>
                        <span className="label-industrial text-stone-400 text-xs">{article.readTime}</span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-charcoal-900 uppercase group-hover:text-yellow-600 transition-colors line-clamp-2 mb-2">{article.title}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-stone-400 label-industrial">
                        <span>{article.author}</span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border-2 border-dashed border-stone-300">
              <BookOpen className="w-12 h-12 mx-auto mb-3 text-stone-400" />
              <h3 className="font-display font-bold text-stone-500 uppercase mb-1">No Articles Yet</h3>
              <p className="text-stone-400 text-sm">Expert articles will appear here once added.</p>
            </div>
          )}
        </div>
      </section>

      {/* Downloadable Resources Section */}
      <section id="downloads" className="band-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="label-industrial text-yellow-400 mb-2 block">TEMPLATES & GUIDES</span>
              <h2 className="headline-md font-display uppercase text-white">
                Downloadable <span className="text-yellow-400">Resources</span>
              </h2>
            </div>
            {downloadableResources.length > 6 && (
              <Link href="/downloads" className="mt-4 md:mt-0">
                <span className="label-industrial text-stone-400 hover:text-yellow-400 transition-colors inline-flex items-center gap-2">
                  VIEW ALL DOWNLOADS <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            )}
          </div>

          {resourcesLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-charcoal-800 border-2 border-charcoal-700 p-6 animate-pulse">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-charcoal-700" />
                    <div className="flex-1 space-y-3">
                      <div className="h-4 bg-charcoal-700 rounded" />
                      <div className="h-3 bg-charcoal-700 rounded w-3/4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : downloadableResources.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {downloadableResources.slice(0, 6).map((resource) => {
                const isGated = shouldGateDownload(resource.id, resource.requiresEmail ?? false);

                return (
                  <div key={resource.id} className="bg-charcoal-800 border-2 border-charcoal-700 p-6 hover:border-yellow-400 transition-colors group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-charcoal-900" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="label-industrial text-yellow-400 text-xs">{resource.type}</span>
                        <h3 className="font-display font-bold text-white uppercase text-sm line-clamp-2 group-hover:text-yellow-400 transition-colors">{resource.title}</h3>
                      </div>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed mb-4 line-clamp-2">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="label-industrial text-stone-600 text-xs">{resource.category}</span>
                      <Button
                        size="sm"
                        className="bg-yellow-400 text-charcoal-900 hover:bg-yellow-300 font-bold text-xs"
                        onClick={() => handleDownload(resource)}
                        disabled={!resource.downloadUrl}
                      >
                        {isGated ? (
                          <>
                            <Lock className="w-3 h-3 mr-1" />
                            Get Access
                          </>
                        ) : (
                          <>
                            <Download className="w-3 h-3 mr-1" />
                            Download
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 border-2 border-dashed border-charcoal-700">
              <Download className="w-12 h-12 mx-auto mb-3 text-stone-600" />
              <h3 className="font-display font-bold text-stone-500 uppercase mb-1">No Downloads Yet</h3>
              <p className="text-stone-600 text-sm">Downloadable resources will appear here once added.</p>
            </div>
          )}
        </div>
      </section>

      {/* Access Tools Section */}
      <section id="tools" className="band-stone py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="label-industrial text-yellow-600 mb-2 block">TOOLS & SOFTWARE</span>
              <h2 className="headline-md font-display uppercase text-charcoal-900">
                Recommended <span className="text-yellow-500">Tools</span>
              </h2>
            </div>
          </div>

          {toolsLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bento-card p-6 animate-pulse">
                  <div className="w-12 h-12 bg-stone-200 mb-4" />
                  <div className="h-5 bg-stone-200 rounded mb-3" />
                  <div className="h-4 bg-stone-200 rounded mb-2" />
                  <div className="h-4 bg-stone-200 rounded w-3/4" />
                </div>
              ))}
            </div>
          ) : accessTools.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accessTools.map((tool) => (
                <a
                  key={tool.id}
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bento-card p-6 group block"
                >
                  <div className="flex items-start gap-4 mb-4">
                    {tool.image ? (
                      <div className="w-12 h-12 overflow-hidden bg-stone-100 border-2 border-charcoal-800 flex-shrink-0">
                        <img
                          src={tool.image}
                          alt={tool.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-charcoal-900" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <span className="label-industrial text-yellow-600 text-xs">{tool.category}</span>
                      <h3 className="font-display font-bold text-charcoal-900 uppercase group-hover:text-yellow-600 transition-colors line-clamp-1">
                        {tool.title}
                      </h3>
                    </div>
                    <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-yellow-600 transition-colors flex-shrink-0 mt-1" />
                  </div>
                  {tool.description && (
                    <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
                      {tool.description}
                    </p>
                  )}
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border-2 border-dashed border-stone-300">
              <Settings className="w-12 h-12 mx-auto mb-3 text-stone-400" />
              <h3 className="font-display font-bold text-stone-500 uppercase mb-1">No Tools Yet</h3>
              <p className="text-stone-400 text-sm">Recommended tools will appear here once added.</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 band-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-industrial text-yellow-600 mb-2 block">COMMON QUESTIONS</span>
            <h2 className="headline-md text-charcoal-900">
              Frequently Asked <span className="text-yellow-500">Questions</span>
            </h2>
          </div>

          <div className="border-2 border-charcoal-900 shadow-offset overflow-hidden bg-white">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-2 border-charcoal-900">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-charcoal-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  Are Business Builders resources free to access?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  Yes, all our resources including marketing videos, expert articles, and most downloadable templates are completely free to access. Some premium downloads may require an email address so we can deliver the file to you, but we never charge for our educational marketing content.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b-2 border-charcoal-900">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-charcoal-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  How often do you publish new content?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  We publish new articles weekly and add new video content and downloadable resources regularly. Our team draws on over 26 years of marketing experience to create practical, actionable content that helps businesses grow. Subscribe to our newsletter or check back often to stay up to date with the latest resources.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b-2 border-charcoal-900">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-charcoal-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  Can I share these resources with my team?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  Absolutely! We encourage you to share our articles, videos, and downloadable resources with your team, colleagues, and business partners. Our goal is to help as many businesses as possible succeed with better marketing. Feel free to share links to any of our resources.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-display uppercase text-charcoal-900 hover:text-yellow-600 px-6 py-4 hover:no-underline">
                  What topics do your resources cover?
                </AccordionTrigger>
                <AccordionContent className="text-stone-500 px-6 pb-4">
                  Our resources cover a wide range of digital marketing topics including SEO strategy, website design best practices, social media marketing, email campaigns, StoryBrand messaging, HubSpot CRM, video marketing, branding, and business growth strategies. Whether you are a small business owner or a marketing professional, you will find content relevant to your needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Are Business Builders resources free to access?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all our resources including marketing videos, expert articles, and most downloadable templates are completely free to access. Some premium downloads may require an email address so we can deliver the file to you, but we never charge for our educational marketing content."
              }
            },
            {
              "@type": "Question",
              "name": "How often do you publish new content?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We publish new articles weekly and add new video content and downloadable resources regularly. Our team draws on over 26 years of marketing experience to create practical, actionable content that helps businesses grow. Subscribe to our newsletter or check back often to stay up to date with the latest resources."
              }
            },
            {
              "@type": "Question",
              "name": "Can I share these resources with my team?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! We encourage you to share our articles, videos, and downloadable resources with your team, colleagues, and business partners. Our goal is to help as many businesses as possible succeed with better marketing. Feel free to share links to any of our resources."
              }
            },
            {
              "@type": "Question",
              "name": "What topics do your resources cover?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our resources cover a wide range of digital marketing topics including SEO strategy, website design best practices, social media marketing, email campaigns, StoryBrand messaging, HubSpot CRM, video marketing, branding, and business growth strategies. Whether you are a small business owner or a marketing professional, you will find content relevant to your needs."
              }
            }
          ]
        }).replace(/</g, '\\u003c') }} />
      </section>

      {/* CTA Section */}
      <section className="band-yellow py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-md font-display uppercase text-charcoal-900 mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-charcoal-800 mb-8 leading-relaxed">
            These resources are just the beginning. Let's work together to create a comprehensive marketing strategy that drives real results for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-charcoal-900 text-white px-8 py-4 font-bold hover:bg-charcoal-800 transition-all duration-300 shadow-offset hover-press"
            >
              <Link href="/request-quote">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-transparent border-2 border-charcoal-900 text-charcoal-900 px-8 py-4 font-bold hover:bg-charcoal-900 hover:text-white transition-all duration-300"
            >
              <Link href="/about">
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <MegaFooter />

      {selectedVideo && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={handleCloseVideoModal}
          videoUrl={selectedVideo.videoUrl || ""}
          title={selectedVideo.title}
          description={selectedVideo.description}
        />
      )}

      {selectedResource && (
        <EmailCaptureModal
          isOpen={emailModalOpen}
          onClose={() => {
            setEmailModalOpen(false);
            setSelectedResource(null);
          }}
          resourceId={selectedResource.id}
          resourceTitle={selectedResource.title}
          downloadUrl={selectedResource.downloadUrl || ''}
          onSuccess={handleEmailSuccess}
        />
      )}
    </div>
  );
}
