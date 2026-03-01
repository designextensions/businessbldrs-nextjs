"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle, Target, Globe, Megaphone, Shield, AlertTriangle, ThumbsUp, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import SEOHead from "@/components/ui/seo-head";
import { trackEvent } from "@/components/ui/google-analytics";

interface AuditAnswers {
  brandMessage: string;
  websiteQuality: string;
  contentCreation: string;
  customerAcquisition: string;
  websiteSecurity: string;
}

interface CategoryScore {
  label: string;
  rating: "good" | "needs-work" | "critical";
  icon: typeof Target;
  color: string;
  bgColor: string;
  borderColor: string;
  recommendations: string[];
  serviceLink: string;
  serviceName: string;
}

const questions = [
  {
    id: "brandMessage",
    title: "Do you have a clear, compelling brand message?",
    subtitle: "A strong brand message helps customers instantly understand what you offer and why it matters.",
    category: "PLAN",
    options: [
      { label: "Yes, definitely", value: "strong", description: "We have a StoryBrand or similar framework" },
      { label: "Somewhat", value: "partial", description: "We have messaging but it could be clearer" },
      { label: "Not really", value: "weak", description: "Our message is inconsistent or unclear" },
      { label: "What's a brand message?", value: "none", description: "We haven't focused on this yet" },
    ],
  },
  {
    id: "websiteQuality",
    title: "How would you rate your website?",
    subtitle: "Your website is your digital storefront — it should look great and convert visitors into leads.",
    category: "PRODUCE",
    options: [
      { label: "Modern & converting", value: "strong", description: "Professional design with clear calls to action" },
      { label: "Looks good but no leads", value: "partial", description: "Decent design but not generating business" },
      { label: "Outdated", value: "weak", description: "Needs a refresh or major updates" },
      { label: "Don't have one", value: "none", description: "No website or just a placeholder page" },
    ],
  },
  {
    id: "contentCreation",
    title: "Are you creating content consistently?",
    subtitle: "Blogs, videos, and social posts help you get found online and build trust with your audience.",
    category: "PRODUCE",
    options: [
      { label: "Yes, weekly+", value: "strong", description: "Regular blog posts, videos, or social content" },
      { label: "Sometimes", value: "partial", description: "We post occasionally but not consistently" },
      { label: "Rarely", value: "weak", description: "We've done a few things but nothing regular" },
      { label: "Never", value: "none", description: "We don't create any marketing content" },
    ],
  },
  {
    id: "customerAcquisition",
    title: "How are you currently getting new customers?",
    subtitle: "A healthy business has multiple channels bringing in new leads and customers predictably.",
    category: "PROMOTE",
    options: [
      { label: "Strong online marketing", value: "strong", description: "SEO, ads, email, and social all working" },
      { label: "Some social/SEO", value: "partial", description: "A few channels are active but inconsistent" },
      { label: "Word of mouth only", value: "weak", description: "Referrals are our main source of business" },
      { label: "Not sure", value: "none", description: "We don't track where customers come from" },
    ],
  },
  {
    id: "websiteSecurity",
    title: "Is your website secure, maintained, and ADA compliant?",
    subtitle: "Security breaches, downtime, and accessibility lawsuits can be costly — protection matters.",
    category: "PROTECT",
    options: [
      { label: "Yes, all three", value: "strong", description: "SSL, regular updates, and accessibility covered" },
      { label: "Partially", value: "partial", description: "Some areas are covered but not all" },
      { label: "Not sure", value: "weak", description: "I don't know the current status" },
      { label: "Definitely not", value: "none", description: "We know there are gaps here" },
    ],
  },
];

function calculateScores(answers: AuditAnswers): CategoryScore[] {
  const valueToScore = (value: string): number => {
    switch (value) {
      case "strong": return 3;
      case "partial": return 2;
      case "weak": return 1;
      case "none": return 0;
      default: return 0;
    }
  };

  const getRating = (score: number): "good" | "needs-work" | "critical" => {
    if (score >= 3) return "good";
    if (score >= 2) return "needs-work";
    return "critical";
  };

  const planScore = valueToScore(answers.brandMessage);
  const produceScore = Math.round((valueToScore(answers.websiteQuality) + valueToScore(answers.contentCreation)) / 2);
  const promoteScore = valueToScore(answers.customerAcquisition);
  const protectScore = valueToScore(answers.websiteSecurity);

  const planRecs: string[] = [];
  if (answers.brandMessage === "none" || answers.brandMessage === "weak") {
    planRecs.push("Implement the StoryBrand messaging framework to clarify your brand");
    planRecs.push("Define your ideal customer persona and key differentiators");
    planRecs.push("Create a one-liner that instantly communicates your value");
  } else if (answers.brandMessage === "partial") {
    planRecs.push("Refine your messaging for consistency across all channels");
    planRecs.push("Test your brand message with customer feedback");
  }

  const produceRecs: string[] = [];
  if (answers.websiteQuality === "none" || answers.websiteQuality === "weak") {
    produceRecs.push("Build a modern, conversion-focused website with clear calls to action");
    produceRecs.push("Add lead capture forms and compelling landing pages");
  } else if (answers.websiteQuality === "partial") {
    produceRecs.push("Optimize your website for lead generation with better CTAs");
  }
  if (answers.contentCreation === "none" || answers.contentCreation === "weak") {
    produceRecs.push("Start a consistent content calendar with blogs and videos");
    produceRecs.push("Create video content to build trust and engagement");
  } else if (answers.contentCreation === "partial") {
    produceRecs.push("Increase content frequency and diversify content types");
  }

  const promoteRecs: string[] = [];
  if (answers.customerAcquisition === "none" || answers.customerAcquisition === "weak") {
    promoteRecs.push("Launch targeted digital advertising campaigns (Google & social)");
    promoteRecs.push("Build an SEO strategy to rank for your key services");
    promoteRecs.push("Set up email marketing automation to nurture leads");
  } else if (answers.customerAcquisition === "partial") {
    promoteRecs.push("Expand to additional marketing channels for broader reach");
    promoteRecs.push("Implement tracking and analytics to measure ROI");
  }

  const protectRecs: string[] = [];
  if (answers.websiteSecurity === "none" || answers.websiteSecurity === "weak") {
    protectRecs.push("Implement SSL, regular backups, and security monitoring");
    protectRecs.push("Get an ADA compliance audit to avoid accessibility lawsuits");
    protectRecs.push("Set up ongoing website maintenance and hosting management");
  } else if (answers.websiteSecurity === "partial") {
    protectRecs.push("Fill the gaps in your security and compliance coverage");
    protectRecs.push("Consider managed hosting for peace of mind");
  }

  return [
    {
      label: "PLAN",
      rating: getRating(planScore),
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      recommendations: planRecs,
      serviceLink: "/services/plan",
      serviceName: "Strategy & Messaging",
    },
    {
      label: "PRODUCE",
      rating: getRating(produceScore),
      icon: Globe,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      recommendations: produceRecs,
      serviceLink: "/services/produce",
      serviceName: "Website & Content",
    },
    {
      label: "PROMOTE",
      rating: getRating(promoteScore),
      icon: Megaphone,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      recommendations: promoteRecs,
      serviceLink: "/services/promote",
      serviceName: "Marketing & Advertising",
    },
    {
      label: "PROTECT",
      rating: getRating(protectScore),
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      recommendations: protectRecs,
      serviceLink: "/services/protect",
      serviceName: "Security & Maintenance",
    },
  ];
}

const ratingConfig = {
  good: { label: "Looking Good", icon: ThumbsUp, color: "text-green-600", bg: "bg-green-100", border: "border-green-300" },
  "needs-work": { label: "Needs Work", icon: AlertTriangle, color: "text-yellow-600", bg: "bg-yellow-100", border: "border-yellow-300" },
  critical: { label: "Critical", icon: AlertCircle, color: "text-red-600", bg: "bg-red-100", border: "border-red-300" },
};

export default function MarketingAudit() {
  const [currentStep, setCurrentStep] = useState(0);
  const [leadInfo, setLeadInfo] = useState({ name: "", email: "", domain: "", honeypot: "" });
  const [answers, setAnswers] = useState<AuditAnswers>({
    brandMessage: "",
    websiteQuality: "",
    contentCreation: "",
    customerAcquisition: "",
    websiteSecurity: "",
  });
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const leadCaptureStep = questions.length + 1;
  const totalSteps = leadCaptureStep;
  const progress = showResults ? 100 : Math.round((currentStep / totalSteps) * 100);

  const handleLeadSubmit = async () => {
    if (!leadInfo.name.trim() || !leadInfo.email.trim()) return;

    setIsSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/audit-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadInfo.name.trim(),
          email: leadInfo.email.trim(),
          domain: leadInfo.domain.trim(),
          honeypot: leadInfo.honeypot,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setSubmitError(data.message || "Something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setLeadCaptured(true);
      trackEvent("audit_lead_captured", {
        event_category: "conversion",
        event_label: "marketing_audit_results",
      });
      setIsSubmitting(false);
      setShowResults(true);
    } catch {
      setSubmitError("Connection error. Please check your internet and try again.");
      setIsSubmitting(false);
    }
  };

  const handleOptionSelect = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(leadCaptureStep);
    }
  };

  const handlePrevious = () => {
    if (currentStep === leadCaptureStep) {
      setCurrentStep(questions.length);
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isOnQuestion = currentStep >= 1 && currentStep <= questions.length;
  const currentQuestion = isOnQuestion ? questions[currentStep - 1] : null;
  const currentAnswer = currentQuestion ? answers[currentQuestion.id as keyof AuditAnswers] : "";
  const isAnswered = currentAnswer !== "";

  const isLeadFormValid = leadInfo.name.trim().length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadInfo.email.trim());

  const scores = showResults ? calculateScores(answers) : [];
  const criticalCount = scores.filter((s) => s.rating === "critical").length;
  const needsWorkCount = scores.filter((s) => s.rating === "needs-work").length;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Marketing Audit",
    description: "Get a free personalized marketing scorecard showing exactly where your business stands and what to focus on next.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    provider: { "@type": "Organization", name: "Business Builders", url: "https://businessbldrs.com" },
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead
          title="Your Marketing Audit Results | Business Builders"
          description="Your personalized marketing scorecard with Plan, Produce, Promote, and Protect recommendations."
          keywords="marketing audit results, marketing scorecard, marketing recommendations"
          canonicalUrl="https://businessbldrs.com/marketing-audit"
          structuredData={structuredData}
          pageType="website"
        />

        <Navigation />

        <section className="band-dark relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(250,204,21,0.08),transparent_60%)]" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <span className="label-industrial inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
              <CheckCircle className="w-4 h-4" />
              AUDIT COMPLETE
            </span>
            <h1 className="headline-xl text-white mb-4">
              Your Marketing <span className="text-yellow-400">Scorecard</span>
            </h1>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto mb-8">
              {criticalCount > 0
                ? `We found ${criticalCount} critical ${criticalCount === 1 ? "area" : "areas"} that need immediate attention.`
                : needsWorkCount > 0
                  ? `You're on the right track, but ${needsWorkCount} ${needsWorkCount === 1 ? "area needs" : "areas need"} improvement.`
                  : "Great news — your marketing foundation looks solid! Here's how to take it further."}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {scores.map((score) => {
                const rc = ratingConfig[score.rating];
                const RatingIcon = rc.icon;
                return (
                  <div key={score.label} className={`p-4 rounded-lg border-2 ${rc.border} ${rc.bg}`}>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <RatingIcon className={`w-5 h-5 ${rc.color}`} />
                    </div>
                    <div className="font-bold text-charcoal-900 text-sm">{score.label}</div>
                    <div className={`text-xs font-semibold ${rc.color}`}>{rc.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="band-stone py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="space-y-8">
              {scores.map((score) => {
                const rc = ratingConfig[score.rating];
                const RatingIcon = rc.icon;
                const CategoryIcon = score.icon;
                return (
                  <div key={score.label} className="bento-card bg-white p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-lg ${score.bgColor} border-2 ${score.borderColor} flex items-center justify-center`}>
                          <CategoryIcon className={`w-8 h-8 ${score.color}`} />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                          <h3 className="headline-md text-charcoal-900">{score.label}</h3>
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-bold ${rc.bg} ${rc.color} ${rc.border} border`}>
                            <RatingIcon className="w-4 h-4" />
                            {rc.label}
                          </span>
                        </div>

                        {score.recommendations.length > 0 ? (
                          <ul className="space-y-3 mb-6">
                            {score.recommendations.map((rec, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <ArrowRight className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                                <span className="text-stone-600">{rec}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-stone-600 mb-6">
                            You're doing well here. Keep up the great work and look for ways to optimize further.
                          </p>
                        )}

                        <Link href={score.serviceLink}>
                          <Button variant="secondary" size="lg">
                            EXPLORE {score.serviceName.toUpperCase()}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="band-dark py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="headline-lg text-white mb-4">
              Ready to <span className="text-yellow-400">Take Action?</span>
            </h2>
            <p className="text-xl text-stone-300 mb-8">
              Let's turn these insights into a growth plan. Schedule a free strategy call with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-quote">
                <button
                  onClick={() =>
                    trackEvent("click", {
                      event_category: "conversion",
                      event_label: "audit_results_cta",
                    })
                  }
                  className="w-full sm:w-auto whitespace-nowrap bg-yellow-400 text-charcoal-900 px-8 py-4 font-bold tracking-wide text-lg flex items-center justify-center gap-3 border-2 border-charcoal-900 shadow-offset-sm hover:bg-yellow-300 transition-colors"
                >
                  REQUEST A FREE QUOTE
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <button
                onClick={() => {
                  setShowResults(false);
                  setCurrentStep(0);
                  setAnswers({ brandMessage: "", websiteQuality: "", contentCreation: "", customerAcquisition: "", websiteSecurity: "" });
                  setLeadCaptured(false);
                }}
                className="w-full sm:w-auto whitespace-nowrap border-2 border-stone-500 text-stone-300 px-8 py-4 font-bold tracking-wide text-lg hover:border-white hover:text-white transition-colors"
              >
                RETAKE AUDIT
              </button>
            </div>
          </div>
        </section>

        <MegaFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Free Marketing Audit | Business Builders"
        description="Take our free 2-minute marketing audit and get a personalized scorecard showing exactly where your business stands across Plan, Produce, Promote, and Protect."
        keywords="free marketing audit, marketing scorecard, marketing assessment, business marketing evaluation"
        canonicalUrl="https://businessbldrs.com/marketing-audit"
        structuredData={structuredData}
        pageType="website"
      />

      <Navigation />

      <div className="w-full bg-stone-200 h-1 fixed top-0 z-[60]">
        <div
          className="h-full bg-yellow-400 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {currentStep === 0 ? (
        <section className="band-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(250,204,21,0.08),transparent_60%)]" />
          <div className="relative max-w-3xl mx-auto px-6 pt-32 pb-16 text-center">
            <span className="label-industrial inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-6">
              <Target className="w-4 h-4" />
              FREE MARKETING AUDIT
            </span>

            <h1 className="headline-xl text-white mb-4">
              Where Does Your Marketing <span className="text-yellow-400">Stand?</span>
            </h1>

            <p className="text-lg text-stone-400 mb-8 max-w-xl mx-auto">
              5 quick questions. Instant personalized scorecard.
            </p>

            <button
              onClick={() => setCurrentStep(1)}
              className="bg-yellow-400 text-charcoal-900 px-10 py-4 font-bold tracking-wide text-lg inline-flex items-center gap-3 border-2 border-charcoal-900 shadow-offset-sm hover:bg-yellow-300 transition-colors"
              data-testid="audit-start-button"
            >
              START YOUR AUDIT
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      ) : currentStep === leadCaptureStep ? (
        <section className="band-dark relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(250,204,21,0.08),transparent_60%)]" />
          <div className="relative max-w-3xl mx-auto px-6 py-32 text-center">
            <span className="label-industrial inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset-sm mb-8">
              <CheckCircle className="w-4 h-4" />
              ALMOST DONE
            </span>

            <h2 className="headline-lg text-white mb-4">
              Your Results Are <span className="text-yellow-400">Ready!</span>
            </h2>

            <p className="text-xl text-stone-300 mb-10 max-w-xl mx-auto leading-relaxed">
              Enter your info below to see your personalized marketing scorecard.
            </p>

            <div className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                aria-label="Your Name"
                value={leadInfo.name}
                onChange={(e) => setLeadInfo((p) => ({ ...p, name: e.target.value }))}
                className="w-full px-5 py-4 bg-white/10 border-2 border-stone-600 text-white placeholder-stone-400 text-lg focus:outline-none focus:border-yellow-400 transition-colors"
                data-testid="audit-name"
              />
              <input
                type="email"
                placeholder="Your Email"
                aria-label="Your Email"
                value={leadInfo.email}
                onChange={(e) => setLeadInfo((p) => ({ ...p, email: e.target.value }))}
                className="w-full px-5 py-4 bg-white/10 border-2 border-stone-600 text-white placeholder-stone-400 text-lg focus:outline-none focus:border-yellow-400 transition-colors"
                data-testid="audit-email"
              />
              <input
                type="url"
                placeholder="Your Website (optional)"
                aria-label="Your Website"
                value={leadInfo.domain}
                onChange={(e) => setLeadInfo((p) => ({ ...p, domain: e.target.value }))}
                className="w-full px-5 py-4 bg-white/10 border-2 border-stone-600 text-white placeholder-stone-400 text-lg focus:outline-none focus:border-yellow-400 transition-colors"
                data-testid="audit-domain"
              />
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={leadInfo.honeypot}
                  onChange={(e) => setLeadInfo((p) => ({ ...p, honeypot: e.target.value }))}
                />
              </div>

              {submitError && (
                <p className="text-red-400 text-sm font-medium" role="alert">{submitError}</p>
              )}

              <button
                onClick={handleLeadSubmit}
                disabled={!isLeadFormValid || isSubmitting}
                className="w-full bg-yellow-400 text-charcoal-900 px-8 py-4 font-bold tracking-wide text-lg flex items-center justify-center gap-3 border-2 border-charcoal-900 shadow-offset-sm hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="audit-submit-button"
              >
                {isSubmitting ? "LOADING RESULTS..." : "SEE MY RESULTS"}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-8">
              <Button variant="outline" size="lg" onClick={handlePrevious} className="border-stone-500 text-stone-300 hover:border-white hover:text-white" data-testid="audit-prev">
                <ArrowLeft className="w-4 h-4 mr-2" />
                BACK
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <section className="min-h-screen flex items-center py-32">
          <div className="max-w-3xl mx-auto px-6 w-full">
            <div className="text-center mb-4">
              <span className="label-industrial inline-block px-3 py-1 bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 text-xs">
                {currentQuestion?.category}
              </span>
            </div>
            <div className="text-center mb-2">
              <span className="text-sm text-stone-400 font-medium">
                Question {currentStep} of {questions.length}
              </span>
            </div>
            <h2 className="headline-lg text-charcoal-900 text-center mb-3">
              {currentQuestion?.title}
            </h2>
            <p className="text-lg text-stone-500 text-center mb-10 max-w-xl mx-auto">
              {currentQuestion?.subtitle}
            </p>

            <div className="space-y-4 max-w-xl mx-auto mb-12" role="radiogroup" aria-label={currentQuestion?.title}>
              {currentQuestion?.options.map((option) => {
                const isSelected = currentAnswer === option.value;
                return (
                  <button
                    key={option.value}
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleOptionSelect(currentQuestion.id, option.value)}
                    className={`w-full text-left p-5 border-2 transition-all ${
                      isSelected
                        ? "border-yellow-400 bg-yellow-50 shadow-offset-sm"
                        : "border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50"
                    }`}
                    data-testid={`audit-option-${option.value}`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          isSelected ? "border-yellow-400 bg-yellow-400" : "border-stone-300"
                        }`}
                      >
                        {isSelected && <CheckCircle className="w-3 h-3 text-charcoal-900" />}
                      </div>
                      <div>
                        <div className="font-bold text-charcoal-900">{option.label}</div>
                        <div className="text-sm text-stone-500">{option.description}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between max-w-xl mx-auto">
              <Button variant="outline" size="lg" onClick={handlePrevious} data-testid="audit-prev">
                <ArrowLeft className="w-4 h-4 mr-2" />
                BACK
              </Button>
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className="bg-charcoal-900 text-white px-8 py-3 font-bold tracking-wide flex items-center gap-2 border-b-4 border-yellow-400 hover:bg-charcoal-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                data-testid="audit-next"
              >
                NEXT
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      <MegaFooter />
    </div>
  );
}
