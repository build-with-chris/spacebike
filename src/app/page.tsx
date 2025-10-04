"use client";
import { useState } from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import BottomHero from '@/components/BottomHero';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [activeSection, setActiveSection] = useState<'history' | 'product' | 'journey'>('history');
  const router = useRouter();

  const handleSectionClick = (section: 'history' | 'product' | 'journey') => {
    setActiveSection(section);
    // Redirect to the actual page after a brief moment
    setTimeout(() => {
      router.push(`/${section}`);
    }, 300);
  };

  return (
    <main className="min-h-screen" style={{background: 'var(--bg-primary)'}}>
      <Navigation />

      {/* Hero Section with Earth */}
      <Hero />

      {/* Navigation Tabs */}
      <div className="journey-nav">
        <div className="container mx-auto px-6">
          <div className="journey-nav-tabs-centered">
            <button
              onClick={() => handleSectionClick('history')}
              className={`journey-nav-tab-main ${activeSection === 'history' ? 'journey-nav-tab-active' : ''}`}
            >
              <div className="journey-nav-tab-icon">📚</div>
              <div className="journey-nav-tab-content">
                <h3>History</h3>
                <p>Die Entstehungsgeschichte</p>
              </div>
            </button>
            <button
              onClick={() => handleSectionClick('product')}
              className={`journey-nav-tab-main ${activeSection === 'product' ? 'journey-nav-tab-active' : ''}`}
            >
              <div className="journey-nav-tab-icon">🚴‍♂️</div>
              <div className="journey-nav-tab-content">
                <h3>Product</h3>
                <p>Technologie & Design</p>
              </div>
            </button>
            <button
              onClick={() => handleSectionClick('journey')}
              className={`journey-nav-tab-main ${activeSection === 'journey' ? 'journey-nav-tab-active' : ''}`}
            >
              <div className="journey-nav-tab-icon">🌍</div>
              <div className="journey-nav-tab-content">
                <h3>Journey</h3>
                <p>Weltreise & Erfahrungen</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Preview Content based on selection */}
      <div className="container mx-auto px-6 py-20">
        <div className="journey-section">
          <div className="max-w-4xl mx-auto text-center">

            {activeSection === 'history' && (
              <div className="journey-vision-card">
                <h2 className="journey-section-title">Die Spacebike Geschichte</h2>
                <p className="journey-text mb-8">
                  Von der ersten Idee bis zur Realität - entdecke die faszinierende 8-jährige Entwicklungsreise
                  des Spacebikes. Eine Geschichte von Vision, Durchhaltevermögen und technischen Durchbrüchen.
                </p>
                <div className="grid grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">2016</div>
                    <div className="text-sm" style={{color: 'var(--text-muted)'}}>Erste Vision</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">2020</div>
                    <div className="text-sm" style={{color: 'var(--text-muted)'}}>Durchbruch</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">2023</div>
                    <div className="text-sm" style={{color: 'var(--text-muted)'}}>Fertigstellung</div>
                  </div>
                </div>
                <button
                  onClick={() => router.push('/history')}
                  className="text-orange-600 font-medium hover:text-orange-700 transition-colors"
                >
                  Vollständige Geschichte entdecken →
                </button>
              </div>
            )}

            {activeSection === 'product' && (
              <div className="journey-vision-card">
                <h2 className="journey-section-title">Das Spacebike Produktdesign</h2>
                <p className="journey-text mb-8">
                  Entdecke die innovativen Komponenten und bahnbrechende Technologie, die das Spacebike
                  zum ultimativen Weltraum-Fahrzeug machen. Jede Komponente wurde für extreme Bedingungen optimiert.
                </p>
                <div className="grid grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">800g</div>
                    <div className="text-sm" style={{color: 'var(--text-muted)'}}>Gesamtgewicht</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">5</div>
                    <div className="text-sm" style={{color: 'var(--text-muted)'}}>Hauptkomponenten</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">∞</div>
                    <div className="text-sm" style={{color: 'var(--text-muted)'}}>Möglichkeiten</div>
                  </div>
                </div>
                <button
                  onClick={() => router.push('/product')}
                  className="text-orange-600 font-medium hover:text-orange-700 transition-colors"
                >
                  Technische Details erkunden →
                </button>
              </div>
            )}

            {activeSection === 'journey' && (
              <div className="journey-vision-card">
                <h2 className="journey-section-title">Eine Reise der Verbindungen</h2>
                <p className="journey-text mb-8">
                  Begleite uns auf unserer dreijährigen Weltreise mit dem Spacebike. Menschen begegnen,
                  Kulturen entdecken und Brücken bauen zwischen den Welten.
                </p>
                <div className="grid grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">65.600</div>
                    <div className="text-sm" style={{color: 'var(--text-muted)'}}>Kilometer</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">45</div>
                    <div className="text-sm" style={{color: 'var(--text-muted)'}}>Länder</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">∞</div>
                    <div className="text-sm" style={{color: 'var(--text-muted)'}}>Begegnungen</div>
                  </div>
                </div>
                <button
                  onClick={() => router.push('/journey')}
                  className="text-orange-600 font-medium hover:text-orange-700 transition-colors"
                >
                  Weltreise-Geschichten lesen →
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Bottom Hero Image */}
      <BottomHero />
    </main>
  );
}