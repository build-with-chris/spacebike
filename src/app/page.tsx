"use client";
import { useState } from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import BottomHero from '@/components/BottomHero';
import NavCircles from '@/components/NavCircles';
import SupportSection from '@/components/SupportSection';

export default function Home() {

  return (
    <main className="min-h-screen" style={{background: 'var(--bg-primary)'}}>
      <Navigation />

      {/* Hero Section with Earth */}
      <Hero />

      {/* Smooth transition section */}
      <div className="hero-to-content-transition" style={{
        background: 'linear-gradient(180deg, transparent 0%, var(--bg-primary) 100%)',
        height: '4rem',
        marginTop: '-2rem',
        position: 'relative',
        zIndex: 2
      }}></div>

      {/* Splash Circle Navigation */}
      <div style={{
        padding: '2rem 0 4rem',
        position: 'relative',
        zIndex: 3
      }}>
        <NavCircles />
      </div>

      {/* Support Section */}
      <SupportSection />

      {/* Smooth transition to bottom hero */}
      <div className="content-to-hero-transition" style={{
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, transparent 100%)',
        height: '4rem',
        marginBottom: '-2rem',
        position: 'relative',
        zIndex: 2
      }}></div>

      {/* Bottom Hero Image */}
      <BottomHero />
    </main>
  );
}