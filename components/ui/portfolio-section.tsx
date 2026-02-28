import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, ExternalLink } from "lucide-react";
import { LazyImage } from "./lazy-image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import type { PortfolioItem } from "@/lib/db/schema";
const stjohnsSheriffImage = "/attached_assets/st-johns-county-sheriff.jpg";
const vantageProAvImage = "/attached_assets/vantage-pro-av.jpg";
const harrisInsuranceImage = "/attached_assets/harris-insurance.png";
const inspireNurseImage = "/attached_assets/inspire-nurse-leaders.png";
const breakwaterImage = "/attached_assets/breakwater-construction-case-study.png";
const broadmoorImage = "/attached_assets/broadmoor-llc.webp";

const FALLBACK_ITEMS = [
  {
    id: 1,
    title: "St. Johns County Sheriff's Office",
    description: "Modern website redesign for public safety communications",
    image: stjohnsSheriffImage,
    categories: ["Web"],
    url: "https://www.sjso.org/",
  },
  {
    id: 2,
    title: "Vantage Pro AV",
    description: "Comprehensive marketing strategy and website development",
    image: vantageProAvImage,
    categories: ["Marketing", "Web"],
    url: "https://www.vantageproav.com/",
  },
  {
    id: 3,
    title: "Harris Insurance Agency Solutions",
    description: "Professional website for insurance services",
    image: harrisInsuranceImage,
    categories: ["Web"],
    url: "https://harris-ias.com/",
  },
  {
    id: 4,
    title: "Inspire Nurse Leaders",
    description: "Leadership platform for nursing professionals",
    image: inspireNurseImage,
    categories: ["Web"],
    url: "https://inspirenurseleaders.com/",
  },
  {
    id: 5,
    title: "Breakwater Construction",
    description: "Complete marketing transformation case study",
    image: breakwaterImage,
    categories: ["Case Study"],
    url: "https://businessbldrs.com/portfolio/breakwater-construction/",
  },
  {
    id: 6,
    title: "Broadmoor, LLC",
    description: "Corporate website development and branding",
    image: broadmoorImage,
    categories: ["Web"],
    url: "https://www.broadmoorllc.com/",
  },
];

export default function PortfolioSection() {
  const { data: apiItems = [] } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const featuredFromApi = apiItems.filter(item => item.featured).slice(0, 6);
  const hasApiData = featuredFromApi.length >= 3;

  const displayItems = hasApiData
    ? featuredFromApi.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description || "",
        image: item.image,
        categories: item.categories || [],
        url: item.url || "",
      }))
    : (apiItems.length > 0
        ? apiItems.slice(0, 6).map(item => ({
            id: item.id,
            title: item.title,
            description: item.description || "",
            image: item.image,
            categories: item.categories || [],
            url: item.url || "",
          }))
        : FALLBACK_ITEMS);

  return (
    <section id="portfolio" className="band-white py-20 lg:py-28" data-testid="portfolio-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="label-industrial inline-flex items-center gap-2 px-4 py-2 bg-charcoal-900 text-white border-2 border-charcoal-900 mb-6">
            <Briefcase className="w-4 h-4" />
            SUCCESS STORIES
          </span>
          <h2 className="headline-lg text-charcoal-900 mb-4">
            THIS COULD BE<br />
            <span className="text-yellow-500">YOU</span>
          </h2>
          <p className="text-editorial text-stone-600 max-w-xl mx-auto">
            See how we've helped organizations like yours achieve sustainable growth and real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`bento-card overflow-hidden animate-slide-up stagger-${(index % 5) + 1}`}
              data-testid={`portfolio-item-${item.id}`}
            >
              <LazyImage 
                src={item.image} 
                alt={`${item.title} - portfolio project by Business Builders marketing agency`} 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.categories.map((tag) => (
                    <span 
                      key={tag} 
                      className="label-industrial px-2 py-1 bg-yellow-400 text-charcoal-900 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-bold text-charcoal-900 mb-2 uppercase text-lg">{item.title}</h3>
                <p className="text-stone-600 mb-4 font-serif text-sm">{item.description}</p>
                {item.url && (
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-charcoal-900 font-display font-bold text-sm uppercase hover:text-yellow-600 transition-colors"
                  >
                    VIEW PROJECT <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/portfolio">
            <Button 
              variant="secondary"
              size="lg"
              data-testid="button-portfolio-more"
            >
              VIEW ALL WORK
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
