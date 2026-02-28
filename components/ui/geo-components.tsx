
const team_jay_owen_new = "/assets/team-jay-owen-new.jpg";

export interface AuthorInfo {
  name: string;
  title: string;
  credentials: string;
  image: string;
}

export const defaultAuthor: AuthorInfo = {
  name: "Jay Owen",
  title: "CEO & Founder",
  credentials: "25+ years in digital marketing | StoryBrand Certified Guide | HubSpot Platinum Partner | Author of 'Building a Business That Lasts'",
  image: "/team-jay-owen.jpg"
};

interface AuthorProps {
  name?: string;
  title?: string;
  credentials?: string;
  image?: string;
  date?: string;
}

export function Author({ 
  name = defaultAuthor.name,
  title = defaultAuthor.title,
  credentials = defaultAuthor.credentials,
  image = defaultAuthor.image,
  date 
}: AuthorProps) {
  return (
    <div className="author-byline flex items-start gap-4 p-6 bg-stone-50 border-2 border-stone-200 mb-8">
      <img 
        src={team_jay_owen_new} 
        alt={`${name} - Business Builders marketing expert and content author`} 
        className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <strong className="text-charcoal-900 font-display">{name}</strong>
          <span className="text-stone-500">,</span>
          <span className="text-stone-600">{title}</span>
        </div>
        <p className="text-sm text-stone-500 mb-2">{credentials}</p>
        {date && (
          <time className="text-sm text-stone-400 flex items-center gap-1">
            <span className="font-medium">Last updated:</span> {date}
          </time>
        )}
      </div>
    </div>
  );
}

interface TLDRProps {
  children: React.ReactNode;
}

export function TLDR({ children }: TLDRProps) {
  return (
    <div className="tldr-box bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
      <div className="flex items-start gap-3">
        <span className="inline-block bg-yellow-400 text-black font-display uppercase text-sm px-3 py-1 font-bold tracking-wide">
          TL;DR
        </span>
        <div className="text-stone-700 leading-relaxed flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <section className="faq-section mt-12 pt-8 border-t-2 border-stone-200">
        <h2 className="font-display text-2xl uppercase tracking-tight text-charcoal-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <details 
              key={i} 
              className="group bg-stone-50 border-2 border-stone-200 hover:border-yellow-400 transition-colors"
            >
              <summary className="cursor-pointer p-5 font-display text-charcoal-900 flex items-center justify-between list-none">
                <span>{item.question}</span>
                <span className="text-yellow-500 group-open:rotate-180 transition-transform">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-stone-600 leading-relaxed border-t border-stone-200 pt-4">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

interface ExpertQuoteProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export function ExpertQuote({ quote, name, title, company }: ExpertQuoteProps) {
  return (
    <blockquote className="expert-quote my-10 relative bg-charcoal-900 text-white p-8 border-l-4 border-yellow-400">
      <div className="absolute -top-4 left-6 text-yellow-400 text-6xl font-serif leading-none">"</div>
      <p className="text-xl leading-relaxed mb-4 pt-4 italic">{quote}</p>
      <cite className="not-italic flex items-center gap-2 text-stone-400">
        <span className="w-8 h-px bg-yellow-400"></span>
        <span className="text-yellow-400 font-display">{name}</span>
        <span className="text-stone-500">|</span>
        <span>{title} at {company}</span>
      </cite>
    </blockquote>
  );
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  author?: AuthorInfo;
  datePublished: string;
  dateModified?: string;
  url?: string;
}

export function ArticleSchema({ 
  title, 
  description, 
  image, 
  author = defaultAuthor,
  datePublished,
  dateModified,
  url
}: ArticleSchemaProps) {
  const pageUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image.startsWith('http') ? image : `https://businessbldrs.com${image}`,
    "author": {
      "@type": "Person",
      "name": author.name,
      "jobTitle": author.title,
      "url": "https://businessbldrs.com/team/jay-owen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Business Builders",
      "logo": {
        "@type": "ImageObject",
        "url": "https://businessbldrs.com/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    }
  };

  // Structured data is handled by generateMetadata() in the page server component.
  return null;
}
