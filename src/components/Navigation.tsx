"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

interface NavigationProps {
  currentPage?: 'home' | 'history' | 'product' | 'journey';
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'linear-gradient(135deg, #161616 0%, #0F0F0F 50%, #0A0A0A 100%)',
      borderBottom: '1px solid #333',
      padding: '1rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <Link 
          href="/" 
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            fontWeight: '700',
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Spacebike
        </Link>

        {/* Desktop Links */}
        <div style={{
          display: 'none',
          alignItems: 'center',
          gap: '2rem'
        }} className="desktop-nav">
          <Link
            href="/"
            style={{
              color: currentPage === 'home' ? '#64B5F6' : 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            Home
          </Link>
          <Link
            href="/history"
            style={{
              color: currentPage === 'history' ? '#64B5F6' : 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            History
          </Link>
          <Link
            href="/product"
            style={{
              color: currentPage === 'product' ? '#64B5F6' : 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            Product
          </Link>
          <Link
            href="/journey"
            style={{
              color: currentPage === 'journey' ? '#64B5F6' : 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            Journey
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            position: 'relative',
            zIndex: 100001,
            borderRadius: '0.5rem',
            backdropFilter: 'blur(10px)'
          }}
          className="mobile-menu-btn"
        >
          <span style={{
            width: '24px',
            height: '2px',
            background: 'var(--text-primary)',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            position: 'relative',
            zIndex: 100002
          }}></span>
          <span style={{
            width: '24px',
            height: '2px',
            background: 'var(--text-primary)',
            transition: 'all 0.3s ease',
            opacity: isMenuOpen ? 0 : 1,
            position: 'relative',
            zIndex: 100002
          }}></span>
          <span style={{
            width: '24px',
            height: '2px',
            background: 'var(--text-primary)',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            position: 'relative',
            zIndex: 100002
          }}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '4rem',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.98)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(20px)'
        }} onClick={() => setIsMenuOpen(false)}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            padding: '2.5rem',
            maxWidth: '350px',
            width: '100%',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }} onClick={(e) => e.stopPropagation()}>
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'block',
                padding: '1.25rem 2rem',
                background: currentPage === 'home' ? 'rgba(100, 181, 246, 0.2)' : 'rgba(255, 255, 255, 0.15)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.75rem',
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: currentPage === 'home' ? '2px solid rgba(100, 181, 246, 0.5)' : '2px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
              }}
            >
              Home
            </Link>
            <Link
              href="/history"
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'block',
                padding: '1.25rem 2rem',
                background: currentPage === 'history' ? 'rgba(100, 181, 246, 0.2)' : 'rgba(255, 255, 255, 0.15)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.75rem',
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: currentPage === 'history' ? '2px solid rgba(100, 181, 246, 0.5)' : '2px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
              }}
            >
              History
            </Link>
            <Link
              href="/product"
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'block',
                padding: '1.25rem 2rem',
                background: currentPage === 'product' ? 'rgba(100, 181, 246, 0.2)' : 'rgba(255, 255, 255, 0.15)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.75rem',
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: currentPage === 'product' ? '2px solid rgba(100, 181, 246, 0.5)' : '2px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
              }}
            >
              Product
            </Link>
            <Link
              href="/journey"
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'block',
                padding: '1.25rem 2rem',
                background: currentPage === 'journey' ? 'rgba(100, 181, 246, 0.2)' : 'rgba(255, 255, 255, 0.15)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.75rem',
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: currentPage === 'journey' ? '2px solid rgba(100, 181, 246, 0.5)' : '2px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
              }}
            >
              Journey
            </Link>
            <div style={{
              marginTop: '1rem',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}