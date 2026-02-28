import { useEffect } from 'react';

interface SEOOptimizationProps {
  uuid?: string;
}

export default function SEOOptimization({ uuid = "30c4130f-316d-48cb-b424-e6f82719c0ef" }: SEOOptimizationProps) {
  useEffect(() => {
    // Check if script already exists to prevent duplicates
    const existingScript = document.getElementById('sa-dynamic-optimization');
    if (existingScript) {
      return;
    }

    // Create and inject the SEO optimization script
    const script = document.createElement('script');
    script.setAttribute('nowprocket', '');
    script.setAttribute('nitro-exclude', '');
    script.type = 'text/javascript';
    script.id = 'sa-dynamic-optimization';
    script.setAttribute('data-uuid', uuid);
    script.src = 'data:text/javascript;base64,dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpO3NjcmlwdC5zZXRBdHRyaWJ1dGUoIm5vd3Byb2NrZXQiLCAiIik7c2NyaXB0LnNldEF0dHJpYnV0ZSgibml0cm8tZXhjbHVkZSIsICIiKTtzY3JpcHQuc3JjID0gImh0dHBzOi8vc2VvLmJ1c2luZXNzYmxkcnMuY29tL3NjcmlwdHMvZHluYW1pY19vcHRpbWl6YXRpb24uanMiO3NjcmlwdC5kYXRhc2V0LnV1aWQgPSAiMzBjNDEzMGYtMzE2ZC00OGNiLWI0MjQtZTZmODI3MTljMGVmIjtzY3JpcHQuaWQgPSAic2EtZHluYW1pYy1vcHRpbWl6YXRpb24tbG9hZGVyIjtkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7';

    // Add to document head
    document.head.appendChild(script);

    // Cleanup function to remove script on component unmount
    return () => {
      const scriptToRemove = document.getElementById('sa-dynamic-optimization');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
      // Also clean up any loader script that may have been created
      const loaderScript = document.getElementById('sa-dynamic-optimization-loader');
      if (loaderScript) {
        loaderScript.remove();
      }
    };
  }, [uuid]);

  return null;
}