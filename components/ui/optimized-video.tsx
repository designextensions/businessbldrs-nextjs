import React, { useState, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
}

export function OptimizedVideo({
  src,
  poster,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  controls = true,
  preload = 'none',
  ...props
}: OptimizedVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.25,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`relative ${className}`}>
      {isIntersecting ? (
        <video
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
          preload={preload}
          className="w-full h-full"
          onLoadedData={() => setIsLoaded(true)}
          {...props}
        />
      ) : (
        // Placeholder when not in view
        <div 
          className="w-full h-full bg-gray-200 flex items-center justify-center"
          style={{ aspectRatio: '16/9' }}
        >
          {poster && (
            <img 
              src={poster} 
              alt="Video thumbnail preview showing Business Builders marketing content" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
        </div>
      )}
    </div>
  );
}