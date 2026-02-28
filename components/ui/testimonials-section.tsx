import { useState } from "react";
import { Star, Play, Quote } from "lucide-react";

type TestimonialVideo = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
  videoUrl?: string | null;
  clientName?: string;
  clientCompany?: string;
  youtubeId?: string;
};

export default function TestimonialsSection() {
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());

  const handleVideoLoad = (videoId: number) => {
    setLoadedVideos(prev => new Set(prev).add(videoId));
  };

  const clientSuccessVideos: TestimonialVideo[] = [
    {
      id: 1,
      title: "StoryBrand Marketing Success",
      description: "See how we helped Evans Automotive increase their qualified leads by 300% using the StoryBrand framework.",
      thumbnail: "/api/media/bozard-ford-featured.png",
      duration: "8:45",
      category: "Case Study",
      videoUrl: "https://www.youtube.com/embed/tyuiCfYYzZg",
      youtubeId: "tyuiCfYYzZg",
      clientName: "Letti Bozard",
      clientCompany: "Bozard Ford Lincoln"
    },
    {
      id: 2,
      title: "Complete Brand Transformation",
      description: "It was so easy to talk about our business... It feels like an extension of our marketing team.",
      thumbnail: "/api/media/harris-insurance.png",
      duration: "12:30",
      category: "Success Story",
      videoUrl: "https://www.youtube.com/embed/BBB7rMu6RD0",
      youtubeId: "BBB7rMu6RD0",
      clientName: "Tiffany Marie Carrion",
      clientCompany: "Ameri-Force"
    }
  ];

  return (
    <section className="band-dark py-20 lg:py-28" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <span className="label-industrial inline-block px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
              SUCCESS STORIES
            </span>
            <h2 className="headline-lg text-white mb-6">
              REAL RESULTS<br />
              FROM <span className="text-yellow-400">REAL CLIENTS</span>
            </h2>
            <p className="text-editorial text-stone-400 mb-8">
              Don't just take our word for it. Watch what our clients have to say about working with Business Builders.
            </p>
            
            <div className="flex items-start gap-4 p-6 bg-charcoal-800 border-2 border-yellow-400 shadow-offset-yellow">
              <Quote className="w-10 h-10 text-yellow-400 flex-shrink-0" />
              <div>
                <p className="font-serif italic text-white leading-relaxed">
                  "It was so easy to talk about our business after working with Business Builders. They feel like an extension of our marketing team."
                </p>
                <p className="label-industrial text-yellow-400 mt-3">— TIFFANY MARIE CARRION</p>
                <p className="text-stone-500 text-sm">Ameri-Force</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-charcoal-800 border-2 border-charcoal-700 mt-4">
              <Quote className="w-10 h-10 text-yellow-400 flex-shrink-0" />
              <div>
                <p className="font-serif italic text-white leading-relaxed">
                  "They helped us clarify our message and tripled our qualified leads. The StoryBrand framework changed everything for us."
                </p>
                <p className="label-industrial text-yellow-400 mt-3">— LETTI BOZARD</p>
                <p className="text-stone-500 text-sm">Bozard Ford Lincoln</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {clientSuccessVideos.map((video: TestimonialVideo, index) => (
              <div 
                key={video.id} 
                className={`bento-card overflow-hidden animate-slide-up stagger-${index + 1}`}
                data-testid={`testimonial-${video.id}`}
              >
                <div className="relative">
                  {video.youtubeId && loadedVideos.has(video.id) ? (
                    <div className="relative aspect-video">
                      <iframe
                        src={`${video.videoUrl}?autoplay=1`}
                        title={video.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div 
                      className="relative aspect-video cursor-pointer group"
                      onClick={() => video.youtubeId && handleVideoLoad(video.id)}
                      onKeyDown={(e) => e.key === 'Enter' && video.youtubeId && handleVideoLoad(video.id)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Play ${video.title} video`}
                    >
                      <img 
                        src={video.youtubeId ? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg` : video.thumbnail} 
                        alt={`${video.title} - client testimonial video for Business Builders marketing agency`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width="480"
                        height="360"
                      />
                      <div className="absolute inset-0 bg-charcoal-900/40 group-hover:bg-charcoal-900/30 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-yellow-400 border-2 border-charcoal-900 shadow-offset flex items-center justify-center group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-offset-sm transition-all">
                          <Play className="w-8 h-8 text-charcoal-900 ml-1" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-charcoal-900 px-3 py-1 border border-yellow-400">
                        <span className="text-sm text-white font-display font-bold">{video.duration}</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="label-industrial px-3 py-1 bg-yellow-400 text-charcoal-900 border border-charcoal-900">
                      {video.category}
                    </span>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="font-display font-bold text-xl text-charcoal-900 mb-2 uppercase">
                    {video.title}
                  </h3>
                  <p className="text-stone-600 mb-4">
                    {video.description}
                  </p>
                  
                  {(video.clientName || video.clientCompany) && (
                    <div className="border-t-2 border-stone-200 pt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-charcoal-900 border-2 border-yellow-400 flex items-center justify-center">
                          <span className="text-yellow-400 font-display font-bold text-lg">
                            {video.clientName?.charAt(0) || 'C'}
                          </span>
                        </div>
                        <div>
                          <p className="font-display font-bold text-charcoal-900">{video.clientName || 'Client'}</p>
                          <p className="text-sm text-stone-500">{video.clientCompany || 'Success Story'}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
