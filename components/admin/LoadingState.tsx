"use client";

interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({ message = "Loading..." }: LoadingStateProps) {
  return (
    <div className="text-center py-8">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500 mb-4"></div>
      <p className="text-gray-400">{message}</p>
    </div>
  );
}
