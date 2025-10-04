'use client';

import Link from 'next/link';

interface CircleCardProps {
  title: string;
  href: string;
  variant: 1 | 2 | 3 | 4;
}

export default function CircleCard({ title, href, variant }: CircleCardProps) {
  const getSplashClass = (variant: 1 | 2 | 3 | 4) => {
    switch (variant) {
      case 1:
        return 'circle-splash-1';
      case 2:
        return 'circle-splash-2';
      case 3:
        return 'circle-splash-3';
      case 4:
        return 'circle-splash-4';
      default:
        return 'circle-splash-1';
    }
  };

  return (
    <Link
      href={href}
      aria-label={`Navigate to ${title}`}
      className="group block"
      style={{
        textDecoration: 'none'
      }}
    >
      <div
        className={`
          ${getSplashClass(variant)}
          rounded-full
          shadow-md
          transition-transform
          duration-200
          ease-out
          hover:scale-105
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:outline-offset-2
          group-focus-visible:outline
          group-focus-visible:outline-2
          group-focus-visible:outline-offset-2
          flex
          items-center
          justify-center
          aspect-square
          w-[160px]
          h-[160px]
          sm:w-[180px]
          sm:h-[180px]
        `}
        style={{
          boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
          transition: 'transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          outline: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 10px 18px rgba(0,0,0,0.10)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.08)';
        }}
        onFocus={(e) => {
          e.currentTarget.style.boxShadow = '0 10px 18px rgba(0,0,0,0.10)';
          e.currentTarget.style.outline = `2px solid #6B5BFF`;
          e.currentTarget.style.outlineOffset = '4px';
        }}
        onBlur={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.08)';
          e.currentTarget.style.outline = 'none';
        }}
        tabIndex={-1}
      >
        <h3
          className="text-xl font-semibold text-white text-center leading-snug tracking-wide p-4"
          style={{
            fontFamily: 'Outfit, system-ui, sans-serif',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}
          aria-label={`Navigate to ${title}`}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
}