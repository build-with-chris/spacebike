"use client";

import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="theme-toggle" disabled>
        <div className="theme-toggle-track">
          <div className="theme-toggle-thumb">
            <span className="theme-toggle-icon">☀️</span>
          </div>
        </div>
      </button>
    );
  }

  return <ThemeToggleContent />;
}

function ThemeToggleContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="theme-toggle-track">
        <div className="theme-toggle-thumb">
          <span className="theme-toggle-icon">
            {theme === 'light' ? '☀️' : '🌙'}
          </span>
        </div>
      </div>
    </button>
  );
}