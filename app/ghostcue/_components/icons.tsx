import type { SVGProps } from "react";

export function GhostLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="ghost-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4b8f4" />
          <stop offset="100%" stopColor="#9F8CFF" />
        </linearGradient>
      </defs>
      <path
        d="M24 5c-7.7 0-14 6.3-14 14v18.4c0 2.1 2.4 3.3 4.1 2.1l3-2.2 3.8 2.8c.7.5 1.6.5 2.3 0l3.7-2.7 3.7 2.7c.7.5 1.6.5 2.3 0l3.8-2.8 3 2.2c1.7 1.2 4.1 0 4.1-2.1V19c0-7.7-6.3-14-14-14h-5.8z"
        fill="url(#ghost-grad)"
      />
      <circle cx="20" cy="22" r="2.4" fill="#1a1a1f" />
      <circle cx="30" cy="22" r="2.4" fill="#1a1a1f" />
      <ellipse cx="20.6" cy="22.6" rx=".7" ry=".7" fill="#fff" opacity=".9" />
      <ellipse cx="30.6" cy="22.6" rx=".7" ry=".7" fill="#fff" opacity=".9" />
      <path
        d="M19 29c1.5 1.6 4.5 1.6 6 0"
        stroke="#1a1a1f"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="15" cy="27" rx="1.6" ry="1" fill="#9F8CFF" opacity=".55" />
      <ellipse cx="35" cy="27" rx="1.6" ry="1" fill="#9F8CFF" opacity=".55" />
    </svg>
  );
}

export function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 14 16"
      width="14"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 1v10M3 7l4 4 4-4M1 14h12" />
    </svg>
  );
}

export function EyeOff(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 3l18 18M10.5 10.677A2 2 0 0112 10a2 2 0 012 2c0 .545-.22 1.04-.577 1.4M6.048 6.11A9.964 9.964 0 002 12s3.364 7 10 7a9.966 9.966 0 005.865-1.903M9.373 4.29A9.96 9.96 0 0112 4c6.636 0 10 8 10 8a9.972 9.972 0 01-1.456 2.372" />
    </svg>
  );
}

export function Cursor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 3l14 9-7 1.5L9.5 21 5 3z" />
    </svg>
  );
}

export function ArrowsUpDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 4v16M3 8l4-4 4 4M17 20V4M13 16l4 4 4-4" />
    </svg>
  );
}

export function Pin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2v6M9 8h6l1.5 6H7.5L9 8zM12 14v8" />
    </svg>
  );
}

export function VideoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="M16 10l5-3v10l-5-3" />
    </svg>
  );
}

export function HandshakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 12l4-4 5 5-4 4-5-5zM21 12l-4-4-5 5 4 4 5-5zM8 13l4 4M11 10l5 5" />
    </svg>
  );
}

export function PresentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M7 21l5-4 5 4M12 8v5M9 11l3-3 3 3" />
    </svg>
  );
}

export function RocketIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 4c4 0 6 2 6 6-2 0-4 1-5 2l-5 5-3-3 5-5c1-1 2-3 2-5zM10 14l-3 3M7 11l-3 3 3 3 3-3" />
    </svg>
  );
}

export function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a8 8 0 01-11.7 7.1L4 21l1.9-5.3A8 8 0 1121 12z" />
    </svg>
  );
}

export function GradCapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 9l10-5 10 5-10 5L2 9zM6 11v5c0 1 3 3 6 3s6-2 6-3v-5" />
    </svg>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 8.5L6.5 12L13 5" />
    </svg>
  );
}

export function ChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 6l5 5 5-5" />
    </svg>
  );
}
