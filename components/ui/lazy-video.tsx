import React, { useState, useRef, useEffect } from 'react';

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  onLoadStart?: () => void;
  onCanPlay?: () => void;
  children?: React.ReactNode;
}

export default function LazyVideo({
  src,
  poster,
  className = '',
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  onLoadStart,
  onCanPlay,
  children
}: LazyVideoProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !shouldLoad) {
          // Only load video when in viewport and when system is idle
          if ('requestIdleCallback' in window) {
            (window as any).requestIdleCallback(() => {
              setShouldLoad(true);
            }, { timeout: 2000 });
          } else {
            setTimeout(() => setShouldLoad(true), 1000);
          }
        }
      },
      {
        threshold: 0.25,
        rootMargin: '100px 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [shouldLoad]);

  // Handle video loading events
  useEffect(() => {
    if (!shouldLoad || !videoRef.current) return;

    const video = videoRef.current;
    
    const handleLoadStart = () => {
      setIsLoading(true);
      onLoadStart?.();
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      onCanPlay?.();
    };

    const handleError = () => {
      setHasError(true);
      setIsLoading(false);
    };

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [shouldLoad, onLoadStart, onCanPlay]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {shouldLoad ? (
        <>
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            playsInline={playsInline}
            poster={poster}
            preload="metadata" // Only load metadata initially
            controls={false}
          >
            <source src={src} type="video/mp4" />
            <p className="text-center text-gray-500 p-4">
              Your browser doesn't support video playback.
            </p>
          </video>
          
          {/* Loading overlay */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-white text-sm">Loading video...</div>
            </div>
          )}
          
          {/* Error state */}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white">
              <div className="text-center">
                <p className="text-sm">Video failed to load</p>
                {poster && (
                  <img 
                    src={poster} 
                    alt="Video preview thumbnail for Business Builders marketing content" 
                    className="mt-2 max-w-full h-auto opacity-50"
                  />
                )}
              </div>
            </div>
          )}
        </>
      ) : (
        // Placeholder with poster image
        <div className="w-full h-full flex items-center justify-center bg-gray-900">
          {poster ? (
            <img 
              src={poster} 
              alt="Video preview thumbnail showing Business Builders marketing and strategy content" 
              className="w-full h-full object-cover opacity-75"
            />
          ) : (
            <div className="text-gray-400 text-sm">Video will load when needed</div>
          )}
        </div>
      )}
      
      {children}
    </div>
  );
}

// Hook for preloading videos when bandwidth allows
export function useVideoPreload(videoSrc: string, shouldPreload: boolean = false) {
  useEffect(() => {
    if (!shouldPreload) return;

    // Only preload on fast connections
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection && (connection.effectiveType === '4g' || connection.effectiveType === '3g')) {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.src = videoSrc;
      }
    }
  }, [videoSrc, shouldPreload]);
}