import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MarketingScoreCta() {
  return (
    <div className="bg-charcoal-900 border-2 border-charcoal-800 p-8 sm:p-10 shadow-offset-yellow text-center">
      <h3 className="headline-md text-white mb-4">
        What&apos;s Your <span className="text-yellow-400">Marketing Score</span>?
      </h3>
      <p className="text-stone-400 mb-8 text-lg max-w-2xl mx-auto">
        Answer 5 quick questions and get an instant scorecard for your plan, website, content, and promotion.
      </p>
      <Link
        href="/marketing-audit"
        className="inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-charcoal-900 font-display uppercase tracking-wide text-lg px-8 py-4 border-2 border-black shadow-offset-sm transition-colors"
      >
        Get My Score
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
}
