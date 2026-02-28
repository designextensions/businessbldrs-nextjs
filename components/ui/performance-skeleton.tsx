import React from 'react';

interface PerformanceSkeletonProps {
  width?: string;
  height?: string;
  className?: string;
  rounded?: boolean;
}

export function PerformanceSkeleton({ 
  width = "100%", 
  height = "20px", 
  className = "", 
  rounded = false 
}: PerformanceSkeletonProps) {
  return (
    <div
      className={`bg-gray-200 dark:bg-gray-700 animate-pulse will-change-transform ${
        rounded ? 'rounded-full' : 'rounded'
      } ${className}`}
      style={{ 
        width, 
        height,
        contain: 'layout style'
      }}
      aria-hidden="true"
    />
  );
}

export function ImageSkeleton({ className = "" }: { className?: string }) {
  return (
    <PerformanceSkeleton 
      className={`aspect-video ${className}`} 
      rounded={false} 
    />
  );
}

export function TextSkeleton({ lines = 3, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <PerformanceSkeleton
          key={i}
          height="16px"
          width={i === lines - 1 ? "75%" : "100%"}
        />
      ))}
    </div>
  );
}

export function CardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`p-4 border rounded-lg ${className}`}>
      <ImageSkeleton className="mb-4" />
      <PerformanceSkeleton height="24px" width="80%" className="mb-2" />
      <TextSkeleton lines={2} />
    </div>
  );
}