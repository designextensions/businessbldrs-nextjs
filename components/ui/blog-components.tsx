import { ReactNode } from "react";

interface TLDRProps {
  children: ReactNode;
}

export const TLDR = ({ children }: TLDRProps) => (
  <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-4 mb-6">
    <strong className="text-amber-700">TL;DR: </strong>
    <span className="text-gray-700">{children}</span>
  </div>
);

interface OriginalDataProps {
  title: string;
  stats: string[];
  source: string;
}

export const OriginalData = ({ title, stats, source }: OriginalDataProps) => (
  <div className="bg-stone-100 border border-stone-300 rounded-lg p-5 my-6">
    <h4 className="mt-0 mb-3 text-lg font-bold text-charcoal">{title}</h4>
    <ul className="list-disc list-inside space-y-2 mb-4">
      {stats.map((stat, i) => (
        <li key={i} className="text-gray-700">{stat}</li>
      ))}
    </ul>
    <p className="text-sm text-gray-500 mb-0">
      Source: {source}
    </p>
  </div>
);

interface ExpertQuoteProps {
  quote: string;
  name: string;
  title: string;
}

export const ExpertQuote = ({ quote, name, title }: ExpertQuoteProps) => (
  <blockquote className="border-l-4 border-amber-500 pl-5 my-6 italic text-gray-700">
    <p className="mb-2">"{quote}"</p>
    <cite className="not-italic font-bold text-charcoal">
      — {name}, {title}
    </cite>
  </blockquote>
);
