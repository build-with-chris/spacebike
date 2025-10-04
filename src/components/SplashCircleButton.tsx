"use client";

import Link from 'next/link';

interface SplashCircleButtonProps {
  href: string;
  label: string;
  icon: string;
  size?: number;
  variant?: 1 | 2 | 3 | 4;
}

export default function SplashCircleButton({
  href,
  label,
  icon,
  size = 120,
  variant = 1
}: SplashCircleButtonProps) {
  return (
    <div className="splash-circle-container">
      <Link
        href={href}
        className={`splash-circle splash-variant-${variant}`}
        style={{
          width: `${size}px`,
          height: `${size}px`
        }}
        aria-label={`Navigate to ${label}`}
      >
        <div className="splash-circle-content">
          <span className="splash-circle-icon">{icon}</span>
        </div>
        <span className="sr-only">{label}</span>
      </Link>
      <span className="splash-circle-label">{label}</span>
    </div>
  );
}