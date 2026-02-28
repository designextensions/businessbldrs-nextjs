"use client";
import Link from "next/link";
import SEOHead from "@/components/ui/seo-head";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/ui/navigation";
import MegaFooter from "@/components/ui/mega-footer";
import { 
  Calculator, 
  TrendingDown, 
  DollarSign, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Users,
  Target,
  Clock,
  ArrowRight,
  Zap
} from "lucide-react";

export default function CostCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(50000);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(500);
  const [conversionRate, setConversionRate] = useState<number>(2);
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(5000);
  const [currentGrowthRate, setCurrentGrowthRate] = useState<number>(5);

  const potentialConversionRate = conversionRate + 3;
  const potentialGrowthRate = currentGrowthRate + 15;
  const currentMonthlyCustomers = monthlyRevenue / avgOrderValue;
  const potentialMonthlyCustomers = (monthlyVisitors * potentialConversionRate) / 100;
  const additionalCustomers = potentialMonthlyCustomers - currentMonthlyCustomers;
  const additionalMonthlyRevenue = additionalCustomers * avgOrderValue;
  const yearlyOpportunityCost = additionalMonthlyRevenue * 12;
  const compoundedLoss = yearlyOpportunityCost * (1 + (potentialGrowthRate - currentGrowthRate) / 100);

  const formatCurrency = (amount: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);

  const comparisonData = [
    {
      option: "Business Builders",
      type: "Full-Service Agency",
      monthlyInvestment: "$5,000 - $15,000",
      setup: "$2,500 - $7,500",
      timeToResults: "30-60 days",
      pros: [
        "26+ years of proven experience",
        "Complete team of specialists",
        "StoryBrand certified messaging",
        "Full marketing ecosystem",
        "Guaranteed results or money back",
        "Strategic planning & execution",
        "Advanced analytics & reporting",
        "Ongoing optimization"
      ],
      cons: [
        "Higher upfront investment",
        "Requires commitment to process"
      ],
      roi: "300-500% within 12 months",
      color: "yellow"
    },
    {
      option: "Freelancers",
      type: "Individual Contractors",
      monthlyInvestment: "$2,000 - $8,000",
      setup: "$500 - $2,000",
      timeToResults: "60-120 days",
      pros: [
        "Lower initial cost",
        "Specialized skills",
        "Flexible arrangements"
      ],
      cons: [
        "No unified strategy",
        "Multiple vendors to manage",
        "Inconsistent quality",
        "Limited accountability",
        "No long-term partnership",
        "Frequent turnover",
        "Lack of comprehensive view",
        "Time-consuming coordination"
      ],
      roi: "50-150% (highly variable)",
      color: "gray"
    },
    {
      option: "In-House Team",
      type: "Internal Employees",
      monthlyInvestment: "$15,000 - $40,000",
      setup: "$20,000 - $50,000",
      timeToResults: "90-180 days",
      pros: [
        "Full dedication to your business",
        "Deep company knowledge",
        "Complete control"
      ],
      cons: [
        "Extremely high cost",
        "Benefits & overhead costs",
        "Recruitment & training time",
        "Limited expertise breadth",
        "Employee turnover risk",
        "Technology & tool costs",
        "Management overhead",
        "Slow to adapt to changes"
      ],
      roi: "100-200% (after 18+ months)",
      color: "red"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Marketing ROI Calculator - What's the Cost of NOT Marketing? | Business Builders"
        description="Calculate the true cost of not investing in marketing for your business. See how much revenue you're missing out on and compare marketing solutions."
        keywords="marketing ROI calculator, cost of not marketing, marketing investment calculator, business growth calculator"
        canonicalUrl="https://businessbldrs.com/cost-calculator"
      />
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="label-industrial text-yellow-600 mb-4 inline-flex items-center gap-2 border-2 border-charcoal-800 px-4 py-2 bg-yellow-400">
              <Calculator className="w-4 h-4" />
              ROI Calculator
            </span>
            <h1 className="headline-lg text-charcoal-900 mb-6 mt-6">
              What's the <span className="text-red-600">Real Cost</span><br />
              of <span className="text-yellow-400">NOT</span> Marketing?
            </h1>
            <p className="text-xl text-stone-500 max-w-3xl mx-auto leading-relaxed">
              Most businesses focus on what marketing costs. But the real question is: 
              <strong className="text-charcoal-900"> what's it costing you NOT to market effectively?</strong> Let's calculate your opportunity cost.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="lg:sticky lg:top-28 h-fit bento-card p-6">
              <div className="mb-6">
                <h2 className="headline-md text-charcoal-900 flex items-center gap-2 mb-2">
                  <Calculator className="w-5 h-5 text-yellow-400" />
                  Your Business Numbers
                </h2>
                <p className="text-stone-500">
                  Enter your current numbers to see what you're missing out on
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="revenue" className="font-display uppercase text-sm tracking-wide">Monthly Revenue</Label>
                  <Input
                    id="revenue"
                    type="number"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                    placeholder="50000"
                    className="border-2 border-charcoal-800 mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="order-value" className="font-display uppercase text-sm tracking-wide">Average Order Value</Label>
                  <Input
                    id="order-value"
                    type="number"
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                    placeholder="500"
                    className="border-2 border-charcoal-800 mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="conversion" className="font-display uppercase text-sm tracking-wide">Current Conversion Rate (%)</Label>
                  <Input
                    id="conversion"
                    type="number"
                    step="0.1"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    placeholder="2.0"
                    className="border-2 border-charcoal-800 mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="visitors" className="font-display uppercase text-sm tracking-wide">Monthly Website Visitors</Label>
                  <Input
                    id="visitors"
                    type="number"
                    value={monthlyVisitors}
                    onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                    placeholder="5000"
                    className="border-2 border-charcoal-800 mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="growth" className="font-display uppercase text-sm tracking-wide">Current Monthly Growth Rate (%)</Label>
                  <Input
                    id="growth"
                    type="number"
                    step="0.1"
                    value={currentGrowthRate}
                    onChange={(e) => setCurrentGrowthRate(Number(e.target.value))}
                    placeholder="5.0"
                    className="border-2 border-charcoal-800 mt-2"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bento-card p-6 bg-red-50 border-red-600">
                <div className="mb-4">
                  <h3 className="headline-md text-red-800 flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5" />
                    Your Annual Opportunity Cost
                  </h3>
                  <p className="text-red-600 text-sm">
                    Revenue you're leaving on the table without effective marketing
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-display font-black text-red-600 mb-4">
                    {formatCurrency(yearlyOpportunityCost)}
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-stone-500">Additional customers per month:</span>
                      <span className="font-semibold text-charcoal-900">{Math.round(additionalCustomers)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Additional monthly revenue:</span>
                      <span className="font-semibold text-charcoal-900">{formatCurrency(additionalMonthlyRevenue)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Potential conversion rate:</span>
                      <span className="font-semibold text-charcoal-900">{potentialConversionRate}%</span>
                    </div>
                    <Separator className="bg-red-200" />
                    <div className="flex justify-between text-red-600 font-bold">
                      <span>Total annual opportunity cost:</span>
                      <span>{formatCurrency(yearlyOpportunityCost)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bento-card p-6 bg-red-100 border-red-700">
                <div className="mb-4">
                  <h3 className="headline-md text-red-900 flex items-center gap-2 mb-2">
                    <TrendingDown className="w-5 h-5" />
                    Compounded 3-Year Loss
                  </h3>
                  <p className="text-red-700 text-sm">
                    The cumulative cost of inaction grows exponentially
                  </p>
                </div>
                <div>
                  <div className="text-5xl font-display font-black text-red-700 mb-2">
                    {formatCurrency(compoundedLoss * 3)}
                  </div>
                  <p className="text-sm text-red-600">
                    This assumes missed growth compounds yearly. Your competitors who invest in marketing 
                    will capture this market share.
                  </p>
                </div>
              </div>

              <div className="bento-card p-6 bg-green-50 border-green-600">
                <div className="mb-4">
                  <h3 className="headline-md text-green-800 flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5" />
                    Marketing Investment Break-Even
                  </h3>
                  <p className="text-green-600 text-sm">
                    How quickly marketing pays for itself
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-display font-black text-green-600 mb-2">
                    {Math.round((10000 / additionalMonthlyRevenue) * 30)} days
                  </div>
                  <p className="text-sm text-green-700">
                    With a $10,000/month marketing investment generating {formatCurrency(additionalMonthlyRevenue)} 
                    in additional monthly revenue, you break even in just over a month.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="headline-lg text-charcoal-900 mb-4">
                Marketing Solution Comparison
              </h2>
              <p className="text-lg text-stone-500 max-w-3xl mx-auto">
                Not all marketing investments are created equal. Here's how your options stack up:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {comparisonData.map((option, index) => (
                <div 
                  key={option.option} 
                  className={`bento-card p-6 relative ${
                    option.color === 'yellow' 
                      ? 'border-yellow-400 bg-yellow-50 ring-2 ring-yellow-400' 
                      : option.color === 'red'
                      ? 'border-red-400 bg-red-50'
                      : 'border-charcoal-800 bg-stone-50'
                  }`}
                >
                  {option.color === 'yellow' && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="label-industrial bg-yellow-400 text-charcoal-900 px-3 py-1 border-2 border-charcoal-800 inline-flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        RECOMMENDED
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-4 pt-2">
                    <h3 className={`font-display font-bold text-xl uppercase ${
                      option.color === 'yellow' ? 'text-yellow-800' : 
                      option.color === 'red' ? 'text-red-800' : 'text-charcoal-800'
                    }`}>
                      {option.option}
                    </h3>
                    <p className="font-semibold text-stone-500">
                      {option.type}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-stone-500">Monthly Investment:</span>
                        <span className="font-semibold text-charcoal-900">{option.monthlyInvestment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-stone-500">Setup Cost:</span>
                        <span className="font-semibold text-charcoal-900">{option.setup}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-stone-500">Time to Results:</span>
                        <span className="font-semibold text-charcoal-900">{option.timeToResults}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-stone-500">Expected ROI:</span>
                        <span className="font-bold text-green-600">{option.roi}</span>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        Pros
                      </h4>
                      <ul className="space-y-1">
                        {option.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-stone-600 flex items-start gap-1">
                            <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-1">
                        <XCircle className="w-4 h-4" />
                        Cons
                      </h4>
                      <ul className="space-y-1">
                        {option.cons.map((con, i) => (
                          <li key={i} className="text-sm text-stone-600 flex items-start gap-1">
                            <XCircle className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-card p-8 mb-12 bg-orange-50 border-orange-400">
            <div className="text-center">
              <h2 className="headline-md text-orange-800 mb-4">
                The Reality Check
              </h2>
            </div>
            <div className="text-center space-y-4">
              <p className="text-lg text-orange-700">
                <strong>Every month you delay marketing is money out of your pocket.</strong>
              </p>
              <p className="text-orange-600">
                Your competitors are investing in marketing right now. They're capturing the customers 
                and market share that could be yours. The question isn't whether you can afford to 
                invest in marketing—it's whether you can afford NOT to.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-display font-black text-orange-600 mb-2">
                    {formatCurrency(yearlyOpportunityCost / 12)}
                  </div>
                  <p className="text-sm text-orange-700">Lost monthly revenue</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display font-black text-orange-600 mb-2">
                    {Math.round(additionalCustomers)}
                  </div>
                  <p className="text-sm text-orange-700">Customers going to competitors</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display font-black text-orange-600 mb-2">
                    {Math.round(((potentialConversionRate - conversionRate) / conversionRate) * 100)}%
                  </div>
                  <p className="text-sm text-orange-700">Potential conversion improvement</p>
                </div>
              </div>
            </div>
          </div>

          <div className="band-dark p-12 text-center">
            <h2 className="headline-lg text-white mb-6">
              Stop Losing Money. Start Growing.
            </h2>
            <p className="text-xl text-stone-400 mb-8 max-w-3xl mx-auto">
              You've seen the numbers. Every day you wait is money lost forever. 
              Let's turn this opportunity cost into opportunity captured.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-charcoal-900 px-8 py-4 text-lg font-display font-bold uppercase border-2 border-charcoal-800 shadow-offset hover-press"
              >
                <Link href="/request-quote">
                  Get Your Free Strategy Session
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-charcoal-900 px-8 py-4 text-lg font-display font-semibold uppercase"
              >
                <Link href="/about">
                  Learn About Our Process
                </Link>
              </Button>
            </div>
            <p className="text-sm text-stone-500 mt-4">
              No obligation. No pressure. Just a clear plan to capture the revenue you're missing.
            </p>
          </div>
        </div>
      </div>
      
      <MegaFooter />
    </div>
  );
}
