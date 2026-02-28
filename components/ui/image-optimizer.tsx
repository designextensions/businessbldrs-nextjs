import { useState, useEffect, useRef } from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  formats?: ('webp' | 'avif' | 'jpg' | 'png')[];
}

// Image format support detection
const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => resolve(webP.height === 2);
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

const supportsAVIF = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const avif = new Image();
    avif.onload = avif.onerror = () => resolve(avif.height === 2);
    avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  });
};

// Create responsive image URLs
const createResponsiveImageUrl = (src: string, width: number, format: string = 'webp'): string => {
  // This would normally use a CDN or image service
  // For now, we'll just append parameters to indicate optimization intent
  const url = new URL(src, window.location.origin);
  url.searchParams.set('w', width.toString());
  url.searchParams.set('f', format);
  url.searchParams.set('q', '85'); // quality
  return url.toString();
};

export default function ImageOptimizer({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  quality = 85,
  formats = ['webp', 'jpg']
}: ImageOptimizerProps) {
  const [supportedFormat, setSupportedFormat] = useState<string>('jpg');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Detect supported image formats
  useEffect(() => {
    const detectFormats = async () => {
      if (formats.includes('avif') && await supportsAVIF()) {
        setSupportedFormat('avif');
      } else if (formats.includes('webp') && await supportsWebP()) {
        setSupportedFormat('webp');
      } else {
        setSupportedFormat(formats.includes('jpg') ? 'jpg' : formats[0] || 'jpg');
      }
    };

    detectFormats();
  }, [formats]);

  // Generate srcSet for responsive images
  const generateSrcSet = (baseSrc: string, format: string): string => {
    if (!width) return '';
    
    const sizes = [
      { w: Math.round(width * 0.5), descriptor: '0.5x' },
      { w: width, descriptor: '1x' },
      { w: Math.round(width * 1.5), descriptor: '1.5x' },
      { w: Math.round(width * 2), descriptor: '2x' }
    ];

    return sizes
      .map(size => `${createResponsiveImageUrl(baseSrc, size.w, format)} ${size.descriptor}`)
      .join(', ');
  };

  const optimizedSrc = width ? createResponsiveImageUrl(src, width, supportedFormat) : src;
  const srcSet = generateSrcSet(src, supportedFormat);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
            img.removeAttribute('data-srcset');
          }
          observer.unobserve(img);
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

  const handleLoad = () => {
    setIsLoaded(true);
    // Performance tracking
    if ('performance' in window && imgRef.current) {
      const img = imgRef.current;
      const now = performance.now();
      console.log(`Image loaded: ${alt} in ${now}ms`);
    }
  };

  const handleError = () => {
    setHasError(true);
    // Fallback to original source if optimized version fails
    if (imgRef.current && imgRef.current.src !== src) {
      imgRef.current.src = src;
    }
  };

  if (hasError && !isLoaded) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ aspectRatio: width && height ? `${width}/${height}` : undefined }}
        />
      )}
      
      <img
        ref={imgRef}
        src={priority ? optimizedSrc : undefined}
        data-src={!priority ? optimizedSrc : undefined}
        srcSet={priority ? srcSet : undefined}
        data-srcset={!priority ? srcSet : undefined}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-auto transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined
        }}
      />
    </div>
  );
}

// Hook for preloading critical images
export function useImagePreload(images: { src: string; priority: boolean }[]) {
  useEffect(() => {
    const preloadImages = async () => {
      const isWebPSupported = await supportsWebP();
      const isAVIFSupported = await supportsAVIF();
      
      const preferredFormat = isAVIFSupported ? 'avif' : isWebPSupported ? 'webp' : 'jpg';
      
      images
        .filter(img => img.priority)
        .forEach(img => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = createResponsiveImageUrl(img.src, 800, preferredFormat);
          document.head.appendChild(link);
        });
    };

    preloadImages();
  }, [images]);
}