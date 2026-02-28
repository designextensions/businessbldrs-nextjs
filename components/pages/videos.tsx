"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Video, Search, Clock, Tag, ArrowRight } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import VideoModal from "@/components/ui/video-modal";
;
import type { MarketingVideo } from "@/lib/db/schema";

export default function Videos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<MarketingVideo | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const { data: marketingVideos = [], isLoading } = useQuery<MarketingVideo[]>({
    queryKey: ["/api/marketing-videos"],
  });

  const activeVideos = marketingVideos.filter(v => v.isActive);

  const filteredVideos = activeVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(activeVideos.map(video => video.category)));
  const categoryCounts: Record<string, number> = { all: activeVideos.length };
  activeVideos.forEach(v => {
    categoryCounts[v.category] = (categoryCounts[v.category] || 0) + 1;
  });

  const featuredVideo = filteredVideos[0];
  const remainingVideos = filteredVideos.slice(1);

  const handleVideoClick = (video: MarketingVideo) => {
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Marketing Strategy Videos - Expert Training & Insights | Business Builders"
        description="Watch our comprehensive collection of marketing strategy videos. Learn from 26+ years of experience with expert insights on business growth, digital marketing, and strategic planning."
        keywords="marketing videos, strategy training, business growth videos, digital marketing tutorials, marketing education, business training"
        canonicalUrl="https://businessbldrs.com/videos"
      />
      <Navigation />
      
      <section className="pt-32 pb-16 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/resources">
              <span className="label-industrial text-stone-500 hover:text-yellow-400 transition-colors cursor-pointer">RESOURCES</span>
            </Link>
            <span className="text-stone-600">/</span>
            <span className="label-industrial text-yellow-400">VIDEOS</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-industrial inline-block px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
                <Video className="w-4 h-4 inline mr-2" />
                VIDEO LIBRARY
              </span>
              <h1 className="headline-lg text-white mb-6">
                MARKETING<br />
                STRATEGY <span className="text-yellow-400">VIDEOS</span>
              </h1>
              <p className="text-editorial text-stone-400 mb-8">
                Get answers to your biggest marketing questions. Short, actionable videos from our team with 26+ years of experience helping businesses grow.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-yellow-400">{activeVideos.length}</div>
                  <div className="label-industrial text-stone-500 text-xs">VIDEOS</div>
                </div>
                <div className="w-px h-12 bg-charcoal-700" />
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-yellow-400">{categories.length}</div>
                  <div className="label-industrial text-stone-500 text-xs">TOPICS</div>
                </div>
                <div className="w-px h-12 bg-charcoal-700" />
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-yellow-400">FREE</div>
                  <div className="label-industrial text-stone-500 text-xs">ALWAYS</div>
                </div>
              </div>
            </div>

            {featuredVideo && !isLoading && (
              <div
                className="relative cursor-pointer group"
                onClick={() => handleVideoClick(featuredVideo)}
                onKeyDown={(e) => e.key === 'Enter' && handleVideoClick(featuredVideo)}
                role="button"
                tabIndex={0}
                aria-label={`Play ${featuredVideo.title}`}
              >
                <div className="border-2 border-charcoal-700 overflow-hidden">
                  <div className="relative aspect-video">
                    <img
                      src={featuredVideo.thumbnail}
                      alt={`${featuredVideo.title} - featured video by Business Builders`}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-charcoal-900/40 group-hover:bg-charcoal-900/30 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-yellow-400 border-2 border-charcoal-900 shadow-offset flex items-center justify-center group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-offset-sm transition-all">
                        <Play className="w-8 h-8 text-charcoal-900 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="label-industrial text-yellow-400">{featuredVideo.category}</span>
                  <h3 className="font-display font-bold text-white text-lg mt-1 group-hover:text-yellow-400 transition-colors uppercase">
                    {featuredVideo.title}
                  </h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-6 bg-charcoal-900 border-y-2 border-charcoal-800 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-500 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-charcoal-800 border-2 border-charcoal-700 text-white placeholder-stone-500 h-10 focus:border-yellow-400"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`label-industrial px-3 py-1.5 border-2 transition-colors ${
                  selectedCategory === "all"
                    ? "bg-yellow-400 text-charcoal-900 border-charcoal-900"
                    : "bg-transparent text-stone-400 border-charcoal-700 hover:border-yellow-400 hover:text-yellow-400"
                }`}
              >
                ALL ({categoryCounts.all})
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`label-industrial px-3 py-1.5 border-2 transition-colors ${
                    selectedCategory === category
                      ? "bg-yellow-400 text-charcoal-900 border-charcoal-900"
                      : "bg-transparent text-stone-400 border-charcoal-700 hover:border-yellow-400 hover:text-yellow-400"
                  }`}
                >
                  {category.toUpperCase()} ({categoryCounts[category] || 0})
                </button>
              ))}
            </div>

            <div className="label-industrial text-stone-500 text-xs whitespace-nowrap">
              {filteredVideos.length} VIDEO{filteredVideos.length !== 1 ? 'S' : ''}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="bento-card overflow-hidden animate-pulse">
                  <div className="aspect-video bg-stone-200" />
                  <div className="p-5 space-y-3">
                    <div className="h-3 bg-stone-200 w-1/3" />
                    <div className="h-4 bg-stone-200" />
                    <div className="h-4 bg-stone-200 w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : remainingVideos.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {remainingVideos.map((video, index) => (
                <div
                  key={video.id}
                  className={`bento-card overflow-hidden cursor-pointer group animate-slide-up stagger-${(index % 5) + 1}`}
                  onClick={() => handleVideoClick(video)}
                  onKeyDown={(e) => e.key === 'Enter' && handleVideoClick(video)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Play ${video.title}`}
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={`${video.title} - video by Business Builders`}
                      className="w-full aspect-video object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-charcoal-900/40 group-hover:bg-charcoal-900/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-yellow-400 border-2 border-charcoal-900 shadow-offset-sm flex items-center justify-center group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all opacity-90 group-hover:opacity-100">
                        <Play className="w-6 h-6 text-charcoal-900 ml-0.5" />
                      </div>
                    </div>
                    {video.duration && (
                      <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-charcoal-900/80 border border-charcoal-700">
                        <span className="text-white text-xs font-display font-bold flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {video.duration}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <span className="label-industrial text-yellow-600 text-xs">{video.category}</span>
                    <h3 className="font-display font-bold text-charcoal-900 mt-1 mb-2 uppercase text-sm leading-tight group-hover:text-yellow-600 transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-stone-500 text-xs leading-relaxed line-clamp-2">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredVideos.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-stone-200 border-2 border-stone-300 flex items-center justify-center mx-auto mb-6">
                <Video className="w-10 h-10 text-stone-400" />
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal-900 mb-2 uppercase">
                {searchTerm || selectedCategory !== "all" ? "NO VIDEOS FOUND" : "NO VIDEOS AVAILABLE"}
              </h3>
              <p className="text-stone-500 mb-6 max-w-md mx-auto">
                {searchTerm || selectedCategory !== "all"
                  ? "Try adjusting your search terms or selecting a different category."
                  : "Marketing videos will appear here once they are added."}
              </p>
              {(searchTerm || selectedCategory !== "all") && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="label-industrial px-4 py-2 border-2 border-charcoal-900 text-charcoal-900 hover:bg-yellow-400 transition-colors"
                >
                  CLEAR FILTERS
                </button>
              )}
            </div>
          ) : null}
        </div>
      </section>

      <section className="py-16 band-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-md text-white mb-4">
            WANT <span className="text-yellow-400">PERSONALIZED</span> GUIDANCE?
          </h2>
          <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
            These videos are a great starting point — but every business is different. Schedule a free 15-minute call to talk through your specific marketing challenges.
          </p>
          <Link href="/request-quote">
            <Button size="xl">
              START YOUR FREE CONSULTATION
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
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
    </div>
  );
}
