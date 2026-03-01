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
      if (hbspt && containerRef.current && !formCreatedRef.current) {
        containerRef.current.innerHTML = "";
        formCreatedRef.current = true;
        hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formId,
          target: `#${containerId}`,
        });
      }
    };

    if ((window as any).hbspt) {
      createForm();
      return;
    }

    const checkInterval = setInterval(() => {
      if ((window as any).hbspt) {
        clearInterval(checkInterval);
        createForm();
      }
    }, 200);

    return () => clearInterval(checkInterval);
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
