import { useEffect } from 'react';

// Minimal critical CSS for fastest initial load
const criticalCSS = `
  /* Essential above-the-fold styles only */
  .hero-section { min-height: 100vh; display: flex; align-items: center; }
  .forge-card { background: linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%); border: 1px solid rgba(255, 215, 0, 0.2); }
  .gradient-primary { background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #f59e0b 100%); }
  .floating-animation { animation: float 3s ease-in-out infinite; }
  @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
  
  /* Critical layout improvements */
  .gpu-accelerated {
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000;
  }
  
  /* Reduce layout shift */
  img[loading="lazy"] {
    content-visibility: auto;
  }
`;

export default function CriticalCSS() {
  useEffect(() => {
    // Inject critical CSS if not already present
    if (!document.querySelector('#critical-css')) {
      const style = document.createElement('style');
      style.id = 'critical-css';
      style.textContent = criticalCSS;
      document.head.insertBefore(style, document.head.firstChild);
    }

    // Add resource hints for better performance
    const addResourceHints = () => {
      // Add viewport meta for mobile optimization
      if (!document.querySelector('meta[name="viewport"]')) {
        const viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1, viewport-fit=cover';
        document.head.appendChild(viewport);
      }

      // Add theme-color for better mobile experience
      if (!document.querySelector('meta[name="theme-color"]')) {
        const themeColor = document.createElement('meta');
        themeColor.name = 'theme-color';
        themeColor.content = '#1a1a1a';
        document.head.appendChild(themeColor);
      }
    };

    addResourceHints();
  }, []);

  return null;
}