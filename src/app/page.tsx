"use client";
import { useState } from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import BottomHero from '@/components/BottomHero';
import NavCircles from '@/components/NavCircles';

export default function Home() {

  return (
    <main className="min-h-screen" style={{background: 'var(--bg-primary)'}}>
      <Navigation />

      {/* Hero Section with Earth */}
      <Hero />

      {/* Splash Circle Navigation */}
      <NavCircles />


      {/* Bottom Hero Image */}
      <BottomHero />
    </main>
  );
}