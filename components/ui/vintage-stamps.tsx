import Image from "next/image";

const pointingHandImg = "/attached_assets/vintage_pointing_hand_stamp_1766517389108.webp";
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
    <Image
      src={pointingHandImg}
      alt="Vintage pointing hand illustration"
      className={`pointer-events-none select-none ${className}`}
      draggable={false}
      width={256}
      height={256}
      loading="lazy"
      sizes="(max-width: 768px) 128px, 256px"
    />
  );
}

export function AnvilStamp({ className = "" }: StampProps) {
  return (
    <Image
      src={anvilImg}
      alt="Vintage anvil stamp"
      className={`pointer-events-none select-none ${className}`}
      draggable={false}
      width={256}
      height={256}
      loading="lazy"
      sizes="(max-width: 768px) 128px, 256px"
    />
  );
}

export function GrowthChartStamp({ className = "" }: StampProps) {
  return (
    <Image
      src={growthChartImg}
      alt="Vintage growth chart stamp"
      className={`pointer-events-none select-none ${className}`}
      draggable={false}
      width={256}
      height={256}
      loading="lazy"
      sizes="(max-width: 768px) 128px, 256px"
    />
  );
}

export function ApprovedStamp({ className = "" }: StampProps) {
  return (
    <Image
      src={approvedImg}
      alt="Vintage approved text stamp"
      className={`pointer-events-none select-none ${className}`}
      draggable={false}
      width={256}
      height={256}
      loading="lazy"
      sizes="(max-width: 768px) 128px, 256px"
    />
  );
}

export function PostalStamp({ className = "" }: StampProps) {
  return (
    <Image
      src={postalImg}
      alt="Vintage postal cancellation stamp"
      className={`pointer-events-none select-none ${className}`}
      draggable={false}
      width={256}
      height={256}
      loading="lazy"
      sizes="(max-width: 768px) 128px, 256px"
    />
  );
}

export function CertifiedStamp({ className = "", style }: StampProps) {
  return (
    <Image
      src={certifiedImg}
      alt="Vintage certified rubber stamp"
      className={`pointer-events-none select-none ${className}`}
      style={style}
      draggable={false}
      width={256}
      height={256}
      loading="lazy"
      sizes="(max-width: 768px) 128px, 256px"
    />
  );
}
