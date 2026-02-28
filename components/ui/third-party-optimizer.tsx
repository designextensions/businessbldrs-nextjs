import { useEffect } from 'react';

interface ThirdPartyOptimizerProps {
  enableGTM?: boolean;
  delayMs?: number;
}

export default function ThirdPartyOptimizer({ 
  enableGTM = true,
  delayMs = 3000 
}: ThirdPartyOptimizerProps) {

  useEffect(() => {
    // Delay third-party script loading to prioritize critical resources
    const timer = setTimeout(() => {
      loadThirdPartyScripts();
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  const loadThirdPartyScripts = () => {
    // Load scripts when browser is idle or after user interaction
    const loadScripts = () => {
      // GTM removed - Google Analytics now handled directly in HTML
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(loadScripts, { timeout: 5000 });
    } else {
      setTimeout(loadScripts, 1000);
    }

    // Also load on first user interaction
    const handleFirstInteraction = () => {
      loadScripts();
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction, { passive: true });
    document.addEventListener('scroll', handleFirstInteraction, { passive: true });
    document.addEventListener('keydown', handleFirstInteraction, { passive: true });
  };

  // Legacy functions kept for compatibility
  const loadGoogleAnalytics = () => {
    console.log('Google Analytics now handled via GTM');
  };

  const loadFacebookPixel = () => {
    console.log('Facebook Pixel now handled via GTM');
  };

  return null;
}

// Hook to monitor Core Web Vitals
export function useCoreWebVitals() {
  useEffect(() => {
    const reportWebVitals = (metric: any) => {
      // Send metrics to analytics
      if ('gtag' in window) {
        (window as any).gtag('event', metric.name, {
          custom_parameter_1: metric.value,
          custom_parameter_2: metric.id,
          custom_parameter_3: metric.name,
        });
      }
    };

    // Monitor performance metrics manually since web-vitals may not be available
    try {
      if ('PerformanceObserver' in window) {
        // Monitor Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          reportWebVitals({ name: 'LCP', value: lastEntry.startTime, id: 'lcp' });
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Monitor First Input Delay  
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            reportWebVitals({ name: 'FID', value: entry.processingStart - entry.startTime, id: 'fid' });
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      }
    } catch (error) {
      // Performance Observer not available
    }
  }, []);
}

// Add to window for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}