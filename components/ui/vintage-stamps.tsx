const pointingHandImg = "/attached_assets/vintage_pointing_hand_stamp_1766517389108.png";
const anvilImg = "/attached_assets/vintage_ink_stamp_of_a_large_heavy_iron_anvil_1766517389109.webp";
const growthChartImg = "/attached_assets/vintage_growth_chart_stamp_1766517389109.webp";
const approvedImg = "/attached_assets/vintage_approved_text_stamp_distressed_1766517389109.webp";
const postalImg = "/attached_assets/faded_vintage_postal_cancellation_stamp_1766517389109.webp";
const certifiedImg = "/attached_assets/certified_vintage_rubber_stamp_1766517389110.webp";

interface StampProps {
  className?: string;
  style?: React.CSSProperties;
}

export function PointingHandStamp({ className = "" }: StampProps) {
  return (
    <img 
      src={pointingHandImg}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      draggable={false}
    />
  );
}

export function AnvilStamp({ className = "" }: StampProps) {
  return (
    <img 
      src={anvilImg}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      draggable={false}
    />
  );
}

export function GrowthChartStamp({ className = "" }: StampProps) {
  return (
    <img 
      src={growthChartImg}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      draggable={false}
    />
  );
}

export function ApprovedStamp({ className = "" }: StampProps) {
  return (
    <img 
      src={approvedImg}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      draggable={false}
    />
  );
}

export function PostalStamp({ className = "" }: StampProps) {
  return (
    <img 
      src={postalImg}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      draggable={false}
    />
  );
}

export function CertifiedStamp({ className = "", style }: StampProps) {
  return (
    <img 
      src={certifiedImg}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={style}
      draggable={false}
    />
  );
}
