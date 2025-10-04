"use client";
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import BottomHero from '@/components/BottomHero';

export default function Home() {
  return (
    <main className="relative">
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section with Earth */}
      <Hero />

      {/* Four Round Buttons Section */}
      <section style={{
        backgroundColor: 'var(--pepe-ink)',
        padding: '4rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="round-buttons-grid">
          <a href="/history" className="round-button">
            History
          </a>
          <a href="/product" className="round-button">
            Product
          </a>
          <a href="/journey" className="round-button">
            Journey
          </a>
        </div>
      </section>

      {/* Bottom Hero Section */}
      <BottomHero />
    </main>
  );
}