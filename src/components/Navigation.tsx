"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

interface NavigationProps {
  currentPage?: 'home' | 'history' | 'product' | 'journey';
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);

    // Prevent body scroll when mobile menu is open
    if (newState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link
          href="/"
          className="nav-logo"
          onClick={closeMenu}
        >
          Spacebike
        </Link>

        <div className="nav-links">
          <Link
            href="/"
            className={`nav-link ${currentPage === 'home' ? 'nav-link-active' : ''}`}
          >
            Home
          </Link>
          <Link
            href="/history"
            className={`nav-link ${currentPage === 'history' ? 'nav-link-active' : ''}`}
          >
            History
          </Link>
          <Link
            href="/product"
            className={`nav-link ${currentPage === 'product' ? 'nav-link-active' : ''}`}
          >
            Product
          </Link>
          <Link
            href="/journey"
            className={`nav-link ${currentPage === 'journey' ? 'nav-link-active' : ''}`}
          >
            Journey
          </Link>
          <ThemeToggle />
        </div>

        <button
          onClick={toggleMenu}
          className="mobile-menu-button"
          aria-label="Menu toggle"
        >
          <div className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="nav-mobile" onClick={closeMenu}>
          <div className="nav-mobile-links" onClick={(e) => e.stopPropagation()}>
            <Link
              href="/"
              className={`nav-mobile-link ${currentPage === 'home' ? 'nav-mobile-link-active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/history"
              className={`nav-mobile-link ${currentPage === 'history' ? 'nav-mobile-link-active' : ''}`}
              onClick={closeMenu}
            >
              History
            </Link>
            <Link
              href="/product"
              className={`nav-mobile-link ${currentPage === 'product' ? 'nav-mobile-link-active' : ''}`}
              onClick={closeMenu}
            >
              Product
            </Link>
            <Link
              href="/journey"
              className={`nav-mobile-link ${currentPage === 'journey' ? 'nav-mobile-link-active' : ''}`}
              onClick={closeMenu}
            >
              Journey
            </Link>
            <div className="nav-mobile-theme">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}