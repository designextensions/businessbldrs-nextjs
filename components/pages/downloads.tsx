"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
;
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Download, FileText, Search, ArrowRight, CheckCircle, Lock, BookOpen, Briefcase } from "lucide-react";
import { useState } from "react";
import type { DownloadableResource } from "@/lib/db/schema";
import { useDownloadGate } from "@/hooks/use-download-gate";
import EmailCaptureModal from "@/components/ui/email-capture-modal";
import { trackEvent } from "@/components/ui/google-analytics";
import { seoConfig, getBreadcrumbSchema, BASE_URL } from "@/lib/seo-config";
import { Input } from "@/components/ui/input";

export default function Downloads() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<DownloadableResource | null>(null);

  const {
    shouldGateDownload,
    recordDownload,
    setCredentials,
    hasEmail,
    downloadCount
  } = useDownloadGate();

  const { data: downloads = [], isLoading } = useQuery<DownloadableResource[]>({
    queryKey: ["/api/downloadable-resources"],
    staleTime: 5 * 60 * 1000,
  });

  const filteredDownloads = downloads.filter(download => {
    const matchesCategory = selectedCategory === "all" || download.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = download.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         download.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = Array.from(new Set(downloads.map(d => d.category)));
  const categoryCounts: Record<string, number> = { all: downloads.length };
  downloads.forEach(d => {
    categoryCounts[d.category] = (categoryCounts[d.category] || 0) + 1;
  });

  const getIconForType = (type: string) => {
    switch (type.toLowerCase()) {
      case 'checklist':
        return <CheckCircle className="w-6 h-6 text-charcoal-900" />;
      case 'template':
        return <FileText className="w-6 h-6 text-charcoal-900" />;
      case 'guide':
        return <BookOpen className="w-6 h-6 text-charcoal-900" />;
      default:
        return <Download className="w-6 h-6 text-charcoal-900" />;
    }
  };

  const handleDownload = (download: DownloadableResource) => {
    if (!download.downloadUrl) return;

    if (shouldGateDownload(download.id, download.requiresEmail ?? false)) {
      setSelectedResource(download);
      setEmailModalOpen(true);
      return;
    }

    trackEvent('download_free', {
      event_category: 'downloads',
      event_label: download.title,
      resource_id: download.id
    });

    recordDownload(download.id);
    window.open(download.downloadUrl, '_blank');
  };

  const handleEmailSuccess = (email: string, name: string, company?: string) => {
    setCredentials(email, name, company);
    if (selectedResource) {
      recordDownload(selectedResource.id);
    }
    setEmailModalOpen(false);
    setSelectedResource(null);
  };

  const downloadsStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": seoConfig.downloads.title,
        "description": seoConfig.downloads.description,
        "url": `${BASE_URL}/downloads`
      },
      getBreadcrumbSchema("Downloads", "/downloads")
    ]
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title={seoConfig.downloads.title}
        description={seoConfig.downloads.description}
        keywords={seoConfig.downloads.keywords}
        canonicalUrl={`${BASE_URL}/downloads`}
        structuredData={downloadsStructuredData}
      />
      <Navigation />

      <section className="pt-32 pb-16 band-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/resources">
              <span className="label-industrial text-stone-500 hover:text-yellow-400 transition-colors cursor-pointer">RESOURCES</span>
            </Link>
            <span className="text-stone-600">/</span>
            <span className="label-industrial text-yellow-400">DOWNLOADS</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-industrial inline-block px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
                <Download className="w-4 h-4 inline mr-2" />
                FREE DOWNLOADS
              </span>
              <h1 className="headline-lg text-white mb-6">
                MARKETING<br />
                <span className="text-yellow-400">RESOURCES</span>
              </h1>
              <p className="text-editorial text-stone-400 mb-8">
                Proven templates, guides, and checklists to accelerate your business growth — backed by 26+ years of marketing expertise.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-yellow-400">{downloads.length}</div>
                  <div className="label-industrial text-stone-500 text-xs">RESOURCES</div>
                </div>
                <div className="w-px h-12 bg-charcoal-700" />
                <div className="text-center">
                  <div className="font-display font-black text-3xl text-yellow-400">{categories.length}</div>
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
                { icon: FileText, label: "TEMPLATES", desc: "Ready-to-use frameworks" },
                { icon: BookOpen, label: "GUIDES", desc: "Step-by-step walkthroughs" },
                { icon: CheckCircle, label: "CHECKLISTS", desc: "Never miss a step" },
                { icon: Briefcase, label: "TOOLS", desc: "Calculators & worksheets" },
              ].map((item, i) => (
                <div key={i} className="bg-charcoal-800 border-2 border-charcoal-700 p-5">
                  <item.icon className="w-6 h-6 text-yellow-400 mb-3" />
                  <div className="label-industrial text-white text-xs mb-1">{item.label}</div>
                  <p className="text-stone-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-charcoal-900 border-y-2 border-charcoal-800 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-500 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-charcoal-800 border-2 border-charcoal-700 text-white placeholder-stone-500 h-10 focus:border-yellow-400"
                data-testid="input-search-downloads"
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
              {filteredDownloads.length} RESOURCE{filteredDownloads.length !== 1 ? 'S' : ''}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 band-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bento-card overflow-hidden animate-pulse">
                  <div className="p-5 bg-yellow-400/20 border-b-2 border-stone-200">
                    <div className="h-10 w-10 bg-stone-200 mb-3" />
                    <div className="h-4 bg-stone-200 w-1/3" />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="h-5 bg-stone-200" />
                    <div className="h-4 bg-stone-200 w-3/4" />
                    <div className="h-10 bg-stone-200 mt-4" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredDownloads.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDownloads.map((download, index) => {
                const isGated = shouldGateDownload(download.id, download.requiresEmail ?? false);

                return (
                  <div
                    key={download.id}
                    className={`bento-card overflow-hidden group animate-slide-up stagger-${(index % 5) + 1}`}
                    data-testid={`card-download-${download.id}`}
                  >
                    <div className="p-5 bg-yellow-400 border-b-2 border-charcoal-900">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white border-2 border-charcoal-900 flex items-center justify-center">
                            {getIconForType(download.type)}
                          </div>
                          <div>
                            <span className="label-industrial text-charcoal-900 text-xs">{download.type.toUpperCase()}</span>
                            {download.size && (
                              <p className="text-xs text-charcoal-900/60 mt-0.5">{download.size}</p>
                            )}
                          </div>
                        </div>
                        <span className="label-industrial bg-charcoal-900 text-white px-2 py-1 text-xs">
                          {download.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 bg-white">
                      <h3 className="font-display font-bold text-charcoal-900 uppercase text-lg mb-3 leading-tight group-hover:text-yellow-600 transition-colors">
                        {download.title}
                      </h3>
                      <p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-3">
                        {download.description}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-stone-400 mb-4">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span>Instant download</span>
                        <span className="text-stone-300">·</span>
                        {hasEmail || downloadCount === 0 ? (
                          <span>No signup required</span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Lock className="w-3 h-3" />
                            Email required
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => handleDownload(download)}
                        disabled={!download.downloadUrl}
                        className="w-full bg-charcoal-900 text-white font-display uppercase text-sm py-3 px-6 border-2 border-charcoal-900 shadow-offset-sm hover:bg-charcoal-800 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        data-testid={`button-download-${download.id}`}
                      >
                        {isGated ? (
                          <>
                            <Lock className="w-4 h-4" />
                            GET FREE ACCESS
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4" />
                            DOWNLOAD FREE
                          </>
                        )}
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      {!download.downloadUrl && (
                        <div className="text-center mt-3">
                          <span className="label-industrial text-stone-400 text-xs">COMING SOON</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-stone-200 border-2 border-stone-300 flex items-center justify-center mx-auto mb-6">
                <Download className="w-10 h-10 text-stone-400" />
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal-900 mb-2 uppercase">NO RESOURCES FOUND</h3>
              <p className="text-stone-500 mb-6 max-w-md mx-auto">
                {searchTerm || selectedCategory !== "all"
                  ? "Try adjusting your search terms or selecting a different category."
                  : "Marketing resources are being prepared. Check back soon."}
              </p>
              {(searchTerm || selectedCategory !== "all") && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="label-industrial px-4 py-2 border-2 border-charcoal-900 text-charcoal-900 hover:bg-yellow-400 transition-colors"
                  data-testid="button-clear-filters"
                >
                  CLEAR FILTERS
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 band-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline-md text-white mb-4">
            NEED A <span className="text-yellow-400">CUSTOM</span> SOLUTION?
          </h2>
          <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
            Our free resources are a great starting point. For a tailored marketing strategy built specifically for your business, let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-quote">
              <Button size="xl">
                GET A FREE QUOTE
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outlineLight" size="xl">
                VIEW OUR SERVICES
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MegaFooter />

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
