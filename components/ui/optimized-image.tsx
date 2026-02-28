import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  onLoad?: () => void;
  quality?: number;
}

function isUnsplashUrl(src: string): boolean {
  return src.includes('images.unsplash.com');
}

function generateUnsplashSrcSet(src: string, quality: number): string {
  const widths = [400, 800, 1200];
  return widths
    .map((w) => {
      const url = new URL(src);
      url.searchParams.set('w', String(w));
      url.searchParams.set('q', String(quality));
      url.searchParams.set('auto', 'format');
      url.searchParams.set('fit', 'crop');
      return `${url.toString()} ${w}w`;
    })
    .join(', ');
}

function generateOptimizedSrc(originalSrc: string, quality: number): string {
  if (isUnsplashUrl(originalSrc)) {
    try {
      const url = new URL(originalSrc);
      url.searchParams.set('q', String(quality));
      url.searchParams.set('auto', 'format');
      url.searchParams.set('fit', 'crop');
      return url.toString();
    } catch {
      return originalSrc;
    }
  }
  return originalSrc;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  width,
  height,
  sizes = '(max-width: 768px) 100vw, 50vw',
  onLoad,
  quality = 80
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const [isInView, setIsInView] = useState(priority);

  const srcSet = isUnsplashUrl(src) ? generateUnsplashSrcSet(src, quality) : undefined;

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

  // Set image source when in view
  useEffect(() => {
    if (isInView && !imageSrc) {
      const optimized = generateOptimizedSrc(src, quality);
      setImageSrc(optimized);

      // Preload the image
      if (priority) {
        const img = new Image();
        img.src = optimized;
        img.onload = () => {
          setImageLoaded(true);
          onLoad?.();
        };
        img.onerror = () => setImageError(true);
      }
    }
  }, [isInView, src, imageSrc, priority, onLoad, quality]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    onLoad?.();
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Create placeholder with proper aspect ratio
  const placeholderStyle = {
    backgroundColor: '#f3f4f6',
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: !imageLoaded ? 'shimmer 2s infinite' : 'none',
    aspectRatio: width && height ? `${width} / ${height}` : undefined,
    minHeight: !width || !height ? '200px' : undefined
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={!imageLoaded ? placeholderStyle : undefined}
    >
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        width={width}
        height={height}
        sizes={sizes}
        srcSet={isInView ? srcSet : undefined}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{
          position: imageLoaded ? 'static' : 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />

      {/* Error fallback */}
      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          <span className="text-sm">Image failed to load</span>
        </div>
      )}

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}

// Hook for preloading critical images
export function useImagePreload(imageSources: string[]) {
  useEffect(() => {
    const preloadImages = imageSources.map(src => {
      const img = new Image();
      img.src = src;
      return img;
    });

    return () => {
      preloadImages.forEach(img => {
        img.src = '';
      });
    };
  }, [imageSources]);
}
