import { useEffect, useRef } from "react";

interface HubSpotFormProps {
  portalId?: string;
  formId?: string;
  region?: string;
  className?: string;
}

export default function HubSpotForm({
  portalId = "485253",
  formId = "ed6f4c15-7fb3-4e0f-aead-a713c1c65a73",
  region = "na1",
  className = ""
}: HubSpotFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const formCreatedRef = useRef(false);
  const containerId = `hubspot-form-${formId}`;

  useEffect(() => {
    if (!containerRef.current || formCreatedRef.current) return;

    const createForm = () => {
      const hbspt = (window as any).hbspt;
      if (hbspt && containerRef.current) {
        containerRef.current.innerHTML = "";
        hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formId,
          target: `#${containerId}`
        });
        formCreatedRef.current = true;
      }
    };

    const existingScript = document.querySelector(
      'script[src*="js.hsforms.net"]'
    );

    if (existingScript && (window as any).hbspt) {
      createForm();
    } else if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/v2.js";
      script.charset = "utf-8";
      script.async = true;
      script.onload = () => {
        createForm();
      };
      document.body.appendChild(script);
    } else {
      const checkHbspt = setInterval(() => {
        if ((window as any).hbspt) {
          clearInterval(checkHbspt);
          createForm();
        }
      }, 100);

      return () => clearInterval(checkHbspt);
    }
  }, [portalId, formId, region, containerId]);

  return (
    <div className={className}>
      <div
        ref={containerRef}
        id={containerId}
        className="hubspot-form-container"
      />
    </div>
  );
}
