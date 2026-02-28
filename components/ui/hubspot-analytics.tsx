import { useEffect } from "react";

declare global {
  interface Window {
    _hsq: any[];
    hbspt: any;
  }
}

interface HubSpotTrackingProps {
  portalId?: string;
}

export function HubSpotTracking({ portalId = "485253" }: HubSpotTrackingProps) {
  useEffect(() => {
    // Initialize HubSpot tracking queue immediately
    window._hsq = window._hsq || [];
    
    // Set content type for page tracking
    window._hsq.push(["setContentType", "standard-page"]);
    
    // Defer HubSpot script loading until after page becomes interactive
    // This prevents blocking the main thread during initial load
    const loadHubSpotScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = `//js.hs-scripts.com/${portalId}.js`;
      
      script.onerror = () => {
        console.warn('HubSpot tracking script failed to load');
      };
      
      document.head.appendChild(script);
    };
    
    // Load on first user interaction or after 4 seconds (after GA loads)
    let loaded = false;
    const triggerLoad = () => {
      if (!loaded) {
        loaded = true;
        loadHubSpotScript();
      }
    };
    
    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => {
        setTimeout(triggerLoad, 1000);
      }, { timeout: 5000 });
    } else {
      setTimeout(triggerLoad, 4000);
    }
    
    // Also load on first interaction
    const events = ['scroll', 'click', 'touchstart'];
    events.forEach(event => {
      window.addEventListener(event, triggerLoad, { once: true, passive: true });
    });
    
    return () => {
      events.forEach(event => {
        window.removeEventListener(event, triggerLoad);
      });
      const existingScript = document.querySelector(`script[src*="${portalId}.js"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [portalId]);

  return null;
}

// HubSpot event tracking utility function
export function trackHubSpotEvent(eventName: string, properties: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && window._hsq) {
    window._hsq.push(['trackEvent', {
      id: eventName,
      value: properties
    }]);
  }
}

// Track page views
export function trackHubSpotPageView(pageName?: string) {
  if (typeof window !== 'undefined' && window._hsq) {
    window._hsq.push(['setPath', window.location.pathname]);
    window._hsq.push(['trackPageView']);
    
    if (pageName) {
      window._hsq.push(['setContentType', 'standard-page']);
      window._hsq.push(['setPageName', pageName]);
    }
  }
}

// Track form submissions specifically
export function trackHubSpotFormSubmission(formType: string, properties: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && window._hsq) {
    window._hsq.push(['trackEvent', {
      id: 'form_submission',
      value: {
        form_type: formType,
        ...properties
      }
    }]);
  }
}

export default HubSpotTracking;