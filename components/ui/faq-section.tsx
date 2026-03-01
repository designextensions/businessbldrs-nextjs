import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs: FAQItem[] = [
    {
      question: "How much does marketing cost for a small business?",
      answer: "Marketing costs vary widely based on your goals and industry. Our small business marketing packages typically start at $2,500-$5,000 per month for comprehensive marketing services. We also offer one-time projects like StoryBrand messaging ($3,500-$7,500) and website design ($8,000-$15,000). Every business is different, so we provide custom quotes based on your specific needs and budget."
    },
    {
      question: "What is StoryBrand and how does it help my business?",
      answer: "StoryBrand is a proven messaging framework that clarifies your marketing message so customers listen. It positions your customer as the hero and your business as the guide who helps them solve their problems. Businesses using StoryBrand typically see 30-50% improvements in conversion rates because their messaging becomes crystal clear and customer-focused."
    },
    {
      question: "How long does it take to see results from marketing?",
      answer: "Results timelines depend on the marketing strategy. Website improvements and conversion optimization can show results in 30-60 days. SEO and content marketing typically take 3-6 months for significant results. Paid advertising can generate leads immediately. Our StoryBrand messaging process delivers clarity within 4-6 weeks, which improves all other marketing efforts."
    },
    {
      question: "Do you work with nonprofits and ministries?",
      answer: "Yes! We've helped nonprofits and ministries grow for over 26 years. We understand the unique challenges of mission-driven organizations, including donor communication, volunteer recruitment, and community engagement. We offer special nonprofit rates and have extensive experience with fundraising campaigns, event promotion, and ministry outreach."
    },
    {
      question: "What's included in your marketing services?",
      answer: "Our comprehensive marketing services include strategic planning, StoryBrand messaging, website design and development, SEO optimization, content creation, social media management, email marketing, paid advertising management, and ongoing analytics. We create custom marketing plans based on your specific goals and budget."
    },
    {
      question: "How do I know if my marketing is working?",
      answer: "We provide transparent reporting and measurable KPIs for all our campaigns. You'll receive regular reports showing website traffic, lead generation, conversion rates, and ROI. We set clear goals upfront and track progress monthly so you always know exactly how your marketing investment is performing."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="bg-stone-100 py-16 lg:py-20" id="faq" data-testid="faq-section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Header Card */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-white p-8 lg:p-10 border-b-4 border-yellow-400">
              <span className="label-industrial inline-flex items-center gap-2 text-yellow-600 mb-6">
                <HelpCircle className="w-4 h-4" />
                COMMON QUESTIONS
              </span>
              
              <h2 className="font-display font-black text-4xl lg:text-5xl text-charcoal-900 uppercase tracking-tight leading-none mb-6">
                YOUR<br />
                QUESTIONS,<br />
                <span className="text-yellow-500">ANSWERED.</span>
              </h2>
              
              <p className="text-stone-600 font-serif text-lg leading-relaxed mb-8">
                Marketing doesn't have to be a mystery. Here are straight answers to the things our clients ask us most often.
              </p>
              
              <Link href="/request-quote">
                <Button 
                  className="w-full sm:w-auto justify-between"
                  data-testid="button-faq-contact"
                >
                  ASK SOMETHING ELSE
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Column - FAQ Accordion */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-stone-300 last:border-b-0"
                data-testid={`faq-item-${index}`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left py-6 flex justify-between items-center gap-4 focus:outline-none group"
                  aria-expanded={openItems.includes(index)}
                  data-testid={`faq-question-${index}`}
                >
                  <h3 className="font-display font-bold text-charcoal-900 text-base lg:text-lg pr-4 group-hover:text-yellow-600 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 flex-shrink-0 text-stone-400 transition-transform duration-300 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {openItems.includes(index) && (
                  <div 
                    className="pb-6 animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    <p 
                      className="text-stone-600 leading-relaxed font-serif pr-12"
                      data-testid={`faq-answer-${index}`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
