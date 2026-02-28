"use client";

import { AlertCircle } from "lucide-react";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  message = "Error loading data. Please try again.",
  onRetry
}: ErrorStateProps) {
  return (
    <div className="text-center py-8">
      <AlertCircle className="w-12 h-12 mx-auto mb-4 text-red-400" />
      <p className="text-red-400 mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
