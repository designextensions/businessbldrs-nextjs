"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle, Target, Building, TrendingUp, Users, Lightbulb, Video, Globe, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";

interface QuizAnswers {
  businessType: string;
  industry: string;
  businessStage: string;
  primaryGoal: string;
  currentMarketing: string[];
  budget: string;
  timeline: string;
  biggestChallenge: string;
  targetAudience: string;
  competitionLevel: string;
}

interface Recommendation {
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  icon: any;
  timeframe: string;
}

interface PlanResults {
  plan: Recommendation[];
  build: Recommendation[];
  scale: Recommendation[];
}

export default function MarketingPlanBuilder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    businessType: '',
    industry: '',
    businessStage: '',
    primaryGoal: '',
    currentMarketing: [],
    budget: '',
    timeline: '',
    biggestChallenge: '',
    targetAudience: '',
    competitionLevel: ''
  });
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'businessType',
      title: 'What type of organization are you?',
      type: 'single',
      options: [
        'Small Business (1-50 employees)',
        'Growing Business (51-200 employees)',
        'Enterprise (200+ employees)',
        'Non-Profit Organization',
        'Ministry/Church',
        'Startup/New Business'
      ]
    },
    {
      id: 'industry',
      title: 'What industry are you in?',
      type: 'single',
      options: [
        'Professional Services',
        'Healthcare',
        'Technology',
        'Retail/E-commerce',
        'Manufacturing',
        'Real Estate',
        'Education',
        'Automotive',
        'Other'
      ]
    },
    {
      id: 'businessStage',
      title: 'What stage is your business in?',
      type: 'single',
      options: [
        'Just starting out (0-1 years)',
        'Growing steadily (2-5 years)',
        'Established but stagnant (5+ years)',
        'Scaling rapidly',
        'Looking to pivot or rebrand'
      ]
    },
    {
      id: 'primaryGoal',
      title: 'What\'s your primary marketing goal?',
      type: 'single',
      options: [
        'Generate more leads',
        'Increase brand awareness',
        'Boost sales/revenue',
        'Improve customer retention',
        'Launch a new product/service',
        'Enter new markets'
      ]
    },
    {
      id: 'currentMarketing',
      title: 'What marketing activities are you currently doing?',
      type: 'multiple',
      options: [
        'Social media posts',
        'Website/blog',
        'Email marketing',
        'Paid advertising (Google, Facebook)',
        'SEO efforts',
        'Networking/referrals',
        'Direct mail',
        'Events/tradeshows',
        'Content marketing',
        'Nothing formal/consistent'
      ]
    },
    {
      id: 'budget',
      title: 'What\'s your monthly marketing budget?',
      type: 'single',
      options: [
        'Under $1,000',
        '$1,000 - $5,000',
        '$5,000 - $15,000',
        '$15,000 - $50,000',
        'Over $50,000'
      ]
    },
    {
      id: 'timeline',
      title: 'How quickly do you need to see results?',
      type: 'single',
      options: [
        'Immediately (1-3 months)',
        'Short-term (3-6 months)',
        'Medium-term (6-12 months)',
        'Long-term (1+ years)'
      ]
    },
    {
      id: 'biggestChallenge',
      title: 'What\'s your biggest marketing challenge?',
      type: 'single',
      options: [
        'Don\'t know where to start',
        'Not seeing ROI from current efforts',
        'Inconsistent messaging',
        'Limited time/resources',
        'Struggling to reach target audience',
        'Too many tools, not enough strategy'
      ]
    },
    {
      id: 'targetAudience',
      title: 'How well do you know your target audience?',
      type: 'single',
      options: [
        'Very well - we have detailed buyer personas',
        'Somewhat - we have a general idea',
        'Not well - we\'re still figuring it out',
        'We serve everyone - no specific target'
      ]
    },
    {
      id: 'competitionLevel',
      title: 'How competitive is your market?',
      type: 'single',
      options: [
        'Very competitive - lots of established players',
        'Moderately competitive',
        'Not very competitive - few players',
        'We\'re unique - little direct competition'
      ]
    }
  ];

  const generateRecommendations = (): PlanResults => {
    const plan: Recommendation[] = [];
    const build: Recommendation[] = [];
    const scale: Recommendation[] = [];

    if (answers.targetAudience === 'Not well - we\'re still figuring it out' || 
        answers.targetAudience === 'We serve everyone - no specific target') {
      plan.push({
        title: 'StoryBrand Messaging Framework',
        description: 'Clarify your message and identify your ideal customer with the proven StoryBrand framework.',
        priority: 'high',
        icon: Target,
        timeframe: '2-4 weeks'
      });
    }

    if (answers.biggestChallenge === 'Inconsistent messaging' || 
        answers.biggestChallenge === 'Don\'t know where to start') {
      plan.push({
        title: 'Marketing Strategy Blueprint',
        description: 'Develop a comprehensive marketing strategy that aligns with your business goals.',
        priority: 'high',
        icon: Lightbulb,
        timeframe: '3-6 weeks'
      });
    }

    if (answers.businessStage === 'Just starting out (0-1 years)') {
      plan.push({
        title: 'Brand Foundation & Positioning',
        description: 'Establish your brand identity and market positioning to stand out from competitors.',
        priority: 'high',
        icon: Building,
        timeframe: '4-6 weeks'
      });
    }

    if (!answers.currentMarketing.includes('Website/blog') || 
        answers.biggestChallenge === 'Struggling to reach target audience') {
      build.push({
        title: 'Professional Website Design',
        description: 'Create a conversion-focused website that clearly communicates your value proposition.',
        priority: 'high',
        icon: Globe,
        timeframe: '6-12 weeks'
      });
    }

    if (answers.primaryGoal === 'Generate more leads' || 
        answers.primaryGoal === 'Boost sales/revenue') {
      build.push({
        title: 'Lead Generation System',
        description: 'Build automated lead capture and nurturing systems to convert visitors into customers.',
        priority: 'high',
        icon: Users,
        timeframe: '4-8 weeks'
      });
    }

    if (!answers.currentMarketing.includes('Content marketing') || 
        answers.primaryGoal === 'Increase brand awareness') {
      build.push({
        title: 'Content Marketing Strategy',
        description: 'Develop valuable content that attracts and engages your target audience.',
        priority: 'medium',
        icon: Video,
        timeframe: '2-4 weeks'
      });
    }

    if (answers.budget === 'Over $50,000' || answers.budget === '$15,000 - $50,000') {
      scale.push({
        title: 'Marketing Partnership Program',
        description: 'Ongoing marketing management and optimization to maximize your ROI.',
        priority: 'high',
        icon: TrendingUp,
        timeframe: 'Ongoing'
      });
    }

    if (answers.biggestChallenge === 'Limited time/resources' || 
        answers.timeline === 'Immediately (1-3 months)') {
      scale.push({
        title: 'Done-for-You Marketing Services',
        description: 'Let our team handle your marketing while you focus on running your business.',
        priority: 'high',
        icon: Headphones,
        timeframe: 'Ongoing'
      });
    }

    if (answers.businessStage === 'Scaling rapidly' || 
        answers.primaryGoal === 'Enter new markets') {
      scale.push({
        title: 'Growth Marketing & Optimization',
        description: 'Advanced marketing strategies and continuous optimization for sustainable growth.',
        priority: 'medium',
        icon: TrendingUp,
        timeframe: 'Ongoing'
      });
    }

    return { plan, build, scale };
  };

  const handleAnswerChange = (questionId: string, value: string | string[]) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const currentQuestion = questions[currentStep];
  const currentAnswer = answers[currentQuestion?.id as keyof QuizAnswers];
  const isAnswered = Array.isArray(currentAnswer) ? currentAnswer.length > 0 : currentAnswer !== '';

  const results = showResults ? generateRecommendations() : { plan: [], build: [], scale: [] };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Marketing Plan Builder",
    "description": "Interactive tool to build a customized marketing plan based on your business needs and goals.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Any",
    "provider": {
      "@type": "Organization",
      "name": "Business Builders",
      "url": "https://businessbldrs.com"
    }
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead 
          title="Your Custom Marketing Plan - Marketing Plan Builder | Business Builders"
          description="Get your personalized marketing plan with strategic recommendations for planning, building, and scaling your marketing efforts."
          keywords="marketing plan, custom marketing strategy, marketing recommendations, business growth plan"
          canonicalUrl="https://businessbldrs.com/marketing-plan-builder"
          structuredData={structuredData}
          pageType="website"
        />
        
        <Navigation />
        
        <section className="band-white relative pt-32 pb-20 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="label-industrial text-charcoal-900 bg-yellow-400 px-4 py-2 border-2 border-charcoal-800 inline-block mb-6">
                Your Results
              </span>
              <h1 className="headline-xl text-charcoal-900 mb-6">
                Your Custom <span className="text-yellow-500">Marketing Plan</span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                Based on your responses, here's your personalized roadmap to marketing success
              </p>
            </div>
          </div>
        </section>

        <section className="band-stone py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="headline-lg text-charcoal-900 mb-6">
                1. PLAN: <span className="text-yellow-400">Messaging & Strategy</span>
              </h2>
              <p className="text-xl text-stone-500 max-w-3xl mx-auto">
                Get your foundation right first - clear messaging and strategic direction
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {results.plan.map((rec, index) => (
                <div key={index} className="bento-card bg-white p-6 group">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 mr-4 border-2 border-charcoal-800 shadow-offset-sm ${
                      rec.priority === 'high' ? 'bg-red-500' :
                      rec.priority === 'medium' ? 'bg-yellow-400' :
                      'bg-green-500'
                    }`}>
                      <rec.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg uppercase text-charcoal-900">
                        {rec.title}
                      </h3>
                      <p className="text-sm text-stone-400">{rec.timeframe}</p>
                    </div>
                  </div>
                  <p className="text-stone-500 leading-relaxed">
                    {rec.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bento-card bg-yellow-400 p-8">
              <h3 className="headline-md text-charcoal-900 mb-4">🎯 Why Strategy Comes First</h3>
              <p className="mb-6 text-lg text-charcoal-800">
                Before building websites, creating content, or running ads, you need a clear plan. 
                Getting your messaging and strategy right first will save you thousands in wasted marketing efforts.
              </p>
              <Link href="/storybrand-messaging">
                <Button className="bg-charcoal-900 text-yellow-400 hover:bg-charcoal-800 font-display font-bold uppercase px-8 py-3 border-2 border-charcoal-800 shadow-offset hover-press">
                  Start with a Marketing Blueprint
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="band-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="headline-lg text-charcoal-900 mb-6">
                2. BUILD: <span className="text-blue-600">Website, Content & Videos</span>
              </h2>
              <p className="text-xl text-stone-500 max-w-3xl mx-auto">
                Create the marketing assets that will attract and convert your ideal customers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.build.map((rec, index) => (
                <div key={index} className="bento-card bg-white p-6 group border-blue-400">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 mr-4 border-2 border-charcoal-800 shadow-offset-sm ${
                      rec.priority === 'high' ? 'bg-red-500' :
                      rec.priority === 'medium' ? 'bg-yellow-400' :
                      'bg-green-500'
                    }`}>
                      <rec.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg uppercase text-charcoal-900">
                        {rec.title}
                      </h3>
                      <p className="text-sm text-stone-400">{rec.timeframe}</p>
                    </div>
                  </div>
                  <p className="text-stone-500 leading-relaxed">
                    {rec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band-stone py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="headline-lg text-charcoal-900 mb-6">
                3. SCALE: <span className="text-green-600">Partnerships & Ongoing Support</span>
              </h2>
              <p className="text-xl text-stone-500 max-w-3xl mx-auto">
                Ongoing optimization and support to maximize your marketing ROI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.scale.map((rec, index) => (
                <div key={index} className="bento-card bg-white p-6 group border-green-400">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 mr-4 border-2 border-charcoal-800 shadow-offset-sm ${
                      rec.priority === 'high' ? 'bg-red-500' :
                      rec.priority === 'medium' ? 'bg-yellow-400' :
                      'bg-green-500'
                    }`}>
                      <rec.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg uppercase text-charcoal-900">
                        {rec.title}
                      </h3>
                      <p className="text-sm text-stone-400">{rec.timeframe}</p>
                    </div>
                  </div>
                  <p className="text-stone-500 leading-relaxed">
                    {rec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band-dark py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="headline-lg text-white mb-6">
              Ready to Stop Wasting Time on Marketing That <span className="text-yellow-400">Doesn't Work?</span>
            </h2>
            <p className="text-xl text-stone-400 mb-8 leading-relaxed">
              The plan above is just the beginning. Let's dial it in with an in-person (or Zoom) strategy session 
              so you can know you're getting it right and finally stop wasting time on marketing that doesn't work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-quote">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-charcoal-900 font-display font-bold uppercase px-8 py-3 border-2 border-charcoal-800 shadow-offset-yellow hover-press">
                  Schedule Your Strategy Session
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/storybrand-messaging">
                <Button size="lg" variant="outline" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-charcoal-900 px-8 py-3 font-display font-bold uppercase">
                  Learn About Marketing Blueprints
                </Button>
              </Link>
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
        title="Marketing Plan Builder - Create Your Custom Marketing Strategy | Business Builders"
        description="Build a customized marketing plan for your business. Get strategic recommendations for planning, building, and scaling your marketing efforts."
        keywords="marketing plan builder, custom marketing strategy, marketing quiz, business growth plan, marketing assessment"
        canonicalUrl="https://businessbldrs.com/marketing-plan-builder"
        structuredData={structuredData}
        pageType="website"
      />
      
      <Navigation />
      
      <section className="band-white relative pt-32 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="label-industrial text-charcoal-900 bg-yellow-400 px-4 py-2 border-2 border-charcoal-800 inline-block mb-6">
              Free Tool
            </span>
            <h1 className="headline-xl text-charcoal-900 mb-6">
              Marketing <span className="text-yellow-500">Plan Builder</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Answer a few questions about your business and get a customized marketing plan 
              that fits your goals, budget, and timeline.
            </p>
          </div>
        </div>
      </section>

      <section className="band-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <span className="label-industrial text-stone-500">
                Question {currentStep + 1} of {questions.length}
              </span>
              <span className="label-industrial text-stone-500">
                {Math.round(((currentStep + 1) / questions.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-stone-200 h-2 border-2 border-charcoal-800">
              <div 
                className="bg-yellow-400 h-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bento-card p-8 shadow-offset">
            <h2 className="headline-md text-center text-charcoal-900 mb-8">
              {currentQuestion.title}
            </h2>
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (currentQuestion.type === 'single') {
                      handleAnswerChange(currentQuestion.id, option);
                    } else {
                      const current = (currentAnswer as string[]) || [];
                      const updated = current.includes(option)
                        ? current.filter(item => item !== option)
                        : [...current, option];
                      handleAnswerChange(currentQuestion.id, updated);
                    }
                  }}
                  className={`w-full p-4 text-left border-2 transition-all duration-300 hover:border-yellow-400 ${
                    currentQuestion.type === 'single'
                      ? currentAnswer === option
                        ? 'border-yellow-400 bg-yellow-50'
                        : 'border-charcoal-800 bg-white'
                      : (currentAnswer as string[])?.includes(option)
                      ? 'border-yellow-400 bg-yellow-50'
                      : 'border-charcoal-800 bg-white'
                  }`}
                  data-testid={`option-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 font-medium">{option}</span>
                    {((currentQuestion.type === 'single' && currentAnswer === option) ||
                      (currentQuestion.type === 'multiple' && (currentAnswer as string[])?.includes(option))) && (
                      <CheckCircle className="w-5 h-5 text-yellow-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              variant="outline"
              className="border-2 border-charcoal-800 text-charcoal-900 hover:bg-stone-100 disabled:opacity-50 font-display font-bold uppercase"
              data-testid="button-previous"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              disabled={!isAnswered}
              className="bg-yellow-400 hover:bg-yellow-500 text-charcoal-900 font-display font-bold uppercase disabled:opacity-50 border-2 border-charcoal-800 shadow-offset hover-press"
              data-testid="button-next"
            >
              {currentStep === questions.length - 1 ? 'Get My Plan' : 'Next'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
