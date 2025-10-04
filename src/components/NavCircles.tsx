"use client";

import SplashCircleButton from './SplashCircleButton';

interface NavCirclesProps {
  className?: string;
}

export default function NavCircles({ className = "" }: NavCirclesProps) {
  const navigationItems = [
    {
      href: "/history",
      label: "History",
      icon: "📚",
      variant: 1 as const
    },
    {
      href: "/product",
      label: "Product",
      icon: "🚴‍♂️",
      variant: 2 as const
    },
    {
      href: "/journey",
      label: "Journey",
      icon: "🌍",
      variant: 3 as const
    }
  ];

  return (
    <div className={`nav-circles-container ${className}`}>
      <div className="nav-circles-grid">
        {navigationItems.map((item) => (
          <SplashCircleButton
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            variant={item.variant}
            size={140}
          />
        ))}
      </div>
    </div>
  );
}