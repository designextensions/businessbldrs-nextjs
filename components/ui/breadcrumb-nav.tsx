import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { useEffect } from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function BreadcrumbNav({ items, className = "" }: BreadcrumbNavProps) {
  // Add structured data for breadcrumbs
  useEffect(() => {
    const breadcrumbStructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": `https://businessbldrs.com${item.href}`
      }))
    };

    // Update or create breadcrumb structured data
    let script = document.querySelector('script[data-breadcrumb="true"]') as HTMLScriptElement;
    if (script) {
      script.textContent = JSON.stringify(breadcrumbStructuredData);
    } else {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-breadcrumb', 'true');
      script.textContent = JSON.stringify(breadcrumbStructuredData);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup breadcrumb structured data when component unmounts
      const breadcrumbScript = document.querySelector('script[data-breadcrumb="true"]');
      if (breadcrumbScript && document.head.contains(breadcrumbScript)) {
        document.head.removeChild(breadcrumbScript);
      }
    };
  }, [items]);

  if (!items.length) return null;

  return (
    <nav 
      className={`flex items-center space-x-1 text-sm text-muted-foreground ${className}`}
      aria-label="Breadcrumb navigation"
    >
      <Link href="/" className="flex items-center hover:text-foreground transition-colors">
        <Home className="w-4 h-4 mr-1" aria-hidden="true" />
        <span className="sr-only">Home</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          <ChevronRight className="w-4 h-4 mx-1" aria-hidden="true" />
          {index === items.length - 1 ? (
            <span 
              className="font-medium text-foreground" 
              aria-current="page"
            >
              {item.label}
            </span>
          ) : (
            <Link 
              href={item.href} 
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}

// For pages that need breadcrumbs, use this hook to set document title with breadcrumb info
export function useBreadcrumbTitle(breadcrumbs: BreadcrumbItem[], pageTitle?: string) {
  useEffect(() => {
    const breadcrumbPath = breadcrumbs.map(item => item.label).join(' › ');
    const fullTitle = pageTitle 
      ? `${pageTitle} › ${breadcrumbPath} | Business Builders`
      : `${breadcrumbPath} | Business Builders`;
    
    document.title = fullTitle;
  }, [breadcrumbs, pageTitle]);
}