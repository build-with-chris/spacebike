"use client";
import { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

interface Component {
  id: string;
  name: string;
  description: string;
  features: string[];
  specs?: string[];
  image?: string;
}

const designComponents: Component[] = [
  {
    id: "frame",
    name: "Modularer Aluminium-Rahmen",
    description: "Das Herzstück des Spacebikes - ein ultraleichter, modularer Rahmen aus hochwertigem Aluminium, entwickelt für maximale Vielseitigkeit und Langlebigkeit auf Weltreisen.",
    features: [
      "Gewicht: nur 2.8kg",
      "Modular erweiterbar für verschiedene Funktionen",
      "Wetterfeste Konstruktion",
      "Werkzeuglose Umrüstung in unter 5 Minuten"
    ],
    specs: [
      "Material: Hochwertiges 7075-T6 Aluminium",
      "Rahmengeometrie: Optimiert für Komfort und Stabilität",
      "Verbindungen: Patentierte Schnellverschlüsse"
    ]
  },
  {
    id: "cockpit",
    name: "Multi-Funktions Dashboard",
    description: "Intelligentes Kontrollzentrum mit digitalem Display und cleverer Aufbewahrung für Navigation, Kommunikation und Reiseplanung.",
    features: [
      "7\" Touchscreen mit GPS Navigation",
      "Integrierte Powerbank für Geräte",
      "Wasserdichte Aufbewahrung",
      "Smartphone-Integration"
    ],
    specs: [
      "Display: 7\" wasserdichtes Touchscreen",
      "Akkulaufzeit: 48 Stunden GPS-Betrieb",
      "Konnektivität: Bluetooth, WiFi, 4G"
    ]
  }
];

const performanceComponents: Component[] = [
  {
    id: "wheels",
    name: "All-Terrain Räder",
    description: "Robuste, pannensichere Räder mit adaptivem Profil für alle Untergründe - von Stadtstraßen bis zu Offroad-Abenteuern.",
    features: [
      "Pannensichere Konstruktion",
      "Adaptives Profil für alle Untergründe",
      "Integrierte LED-Beleuchtung",
      "Selbstreinigende Speichen"
    ],
    specs: [
      "Durchmesser: 26 Zoll",
      "Material: Verstärkter Kautschuk",
      "Tragkraft: 150kg pro Rad"
    ]
  },
  {
    id: "drive",
    name: "Hybrid-Antriebssystem",
    description: "Intelligentes Antriebssystem kombiniert menschliche Kraft mit elektrischer Unterstützung für mühelose Langstrecken.",
    features: [
      "E-Motor mit 750W Leistung",
      "Rekuperative Bremsung",
      "5 Unterstützungsmodi",
      "Reichweite bis 120km"
    ],
    specs: [
      "Motor: Bosch Performance Line",
      "Akku: 625Wh PowerTube",
      "Ladezeit: 4 Stunden"
    ]
  }
];

const connectionComponents: Component[] = [
  {
    id: "modules",
    name: "Multi-Funktions-Module",
    description: "Clevere Anbaumodule verwandeln das Spacebike in Tisch, Sessel, Bett oder Kochstation - perfekt für autarke Weltreisen.",
    features: [
      "Tisch-Modul: Arbeitsplatz für 2 Personen",
      "Sessel-Modul: Ergonomische Entspannung",
      "Bett-Modul: Komfortable Übernachtung",
      "Koch-Modul: Vollausgestattete Küche"
    ],
    specs: [
      "Aufbauzeit: 2-5 Minuten",
      "Belastbarkeit: bis 120kg",
      "Packmaß: 40x30x15cm pro Modul"
    ]
  },
  {
    id: "storage",
    name: "Intelligente Aufbewahrung",
    description: "Durchdachtes Stauraumsystem mit wasserdichten Fächern für Ausrüstung, Kleidung und Proviant auf langen Reisen.",
    features: [
      "Wasserdichte Haupttaschen",
      "Schnellzugriff-Fächer",
      "Diebstahlschutz-Verriegelung",
      "Kompressionsriemen für mehr Volumen"
    ],
    specs: [
      "Gesamtvolumen: 120 Liter",
      "Wasserdicht: IPX7",
      "Material: Ripstop-Nylon"
    ]
  }
];

export default function ProductPage() {
  const [activeSection, setActiveSection] = useState<'design' | 'performance' | 'connection'>('design');
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const getCurrentComponents = () => {
    switch (activeSection) {
      case 'design': return designComponents;
      case 'performance': return performanceComponents;
      case 'connection': return connectionComponents;
      default: return designComponents;
    }
  };

  return (
    <main className="min-h-screen" style={{background: 'var(--bg-primary)'}}>
      <Navigation currentPage="product" />

      {/* Hero Section with Unique and Bicycle */}
      <div className="relative w-full">
        <section
          className="relative overflow-hidden w-full"
          style={{
            height: '70vh',
            background: 'var(--bg-primary)'
          }}
        >
          {/* Content with bicycle and text */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="relative flex flex-col items-center justify-center">

                {/* Bicycle Image */}
                <div className="relative flex-shrink-0">
                  <Image
                    src="/images/Complete Freigestellt.png"
                    alt="Spacebike - Unique space bicycle"
                    width={700}
                    height={500}
                    className="object-contain"
                    priority
                  />

                  {/* Unique Text - Overlapping the bottom of the bicycle */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <h1 className="text-4xl lg:text-5xl font-light tracking-wide" style={{
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-display)',
                      letterSpacing: '0.05em'
                    }}>
                      Unique
                    </h1>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Cloud fade overlay at bottom of Hero */}
        <div
          className="cloud-fade absolute pointer-events-none z-[1] w-full"
          style={{
            bottom: '-1px',
            left: '0',
            height: '128px'
          }}
        ></div>
      </div>

      {/* Navigation Tabs */}
      <div className="journey-nav">
        <div className="container mx-auto px-6">
          <div className="journey-nav-tabs-centered">
            <button
              onClick={() => setActiveSection('design')}
              className={`journey-nav-tab-main ${activeSection === 'design' ? 'journey-nav-tab-active' : ''}`}
            >
              <div className="journey-nav-tab-icon">🎨</div>
              <div className="journey-nav-tab-content">
                <h3>Design & Engineering</h3>
                <p>Form trifft Funktion</p>
              </div>
            </button>
            <button
              onClick={() => setActiveSection('performance')}
              className={`journey-nav-tab-main ${activeSection === 'performance' ? 'journey-nav-tab-active' : ''}`}
            >
              <div className="journey-nav-tab-icon">⚡</div>
              <div className="journey-nav-tab-content">
                <h3>Performance & Innovation</h3>
                <p>Antrieb & Technologie</p>
              </div>
            </button>
            <button
              onClick={() => setActiveSection('connection')}
              className={`journey-nav-tab-main ${activeSection === 'connection' ? 'journey-nav-tab-active' : ''}`}
            >
              <div className="journey-nav-tab-icon">🔗</div>
              <div className="journey-nav-tab-content">
                <h3>Connection & Experience</h3>
                <p>Integration & Bedienung</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 pb-20">
        <div className="journey-section">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {getCurrentComponents().map((component, index) => (
                <div key={component.id} className="component-showcase">

                  {/* Component Header with Image */}
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 mb-8`}>

                    {/* Component Info */}
                    <div className="flex-1 space-y-6">
                      <div>
                        <h3 className="component-title">{component.name}</h3>
                        <p className="component-description">{component.description}</p>
                      </div>

                      <div className="component-features">
                        <h4 className="component-features-title">Features:</h4>
                        <ul className="component-features-list">
                          {component.features.map((feature, idx) => (
                            <li key={idx} className="component-feature-item">
                              <span className="component-feature-bullet">•</span>
                              <span className="component-feature-text">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => setSelectedComponent(selectedComponent === component.id ? null : component.id)}
                        className="component-toggle-btn"
                      >
                        {selectedComponent === component.id ? 'Weniger anzeigen ↑' : 'Technische Details anzeigen ↓'}
                      </button>
                    </div>

                    {/* Component Image Placeholder */}
                    <div className="flex-shrink-0">
                      <div className="component-image-placeholder">
                        <div className="component-image-content">
                          <div className="component-image-icon">
                            {component.id === 'frame' && '🚲'}
                            {component.id === 'cockpit' && '📱'}
                            {component.id === 'wheels' && '🛞'}
                            {component.id === 'drive' && '⚡'}
                            {component.id === 'modules' && '🏠'}
                            {component.id === 'storage' && '🎒'}
                          </div>
                          <span className="component-image-label">Component Image</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Technical Specs */}
                  {selectedComponent === component.id && component.specs && (
                    <div className="component-specs">
                      <h4 className="component-specs-title">Technische Spezifikationen:</h4>
                      <div className="component-specs-grid">
                        {component.specs.map((spec, idx) => (
                          <div key={idx} className="component-spec-item">
                            <span className="component-spec-bullet">→</span>
                            <span className="component-spec-text">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Visual Separator */}
                  {index < getCurrentComponents().length - 1 && (
                    <div className="component-separator"></div>
                  )}
                </div>
              ))}
            </div>

            {activeSection === 'design' && (
              <div className="mt-16 text-center">
                <div className="journey-vision-card max-w-4xl mx-auto">
                  <h3 className="journey-section-title">Designphilosophie</h3>
                  <p className="journey-text">
                    Jede Komponente des Spacebikes wurde mit dem Grundsatz entwickelt, dass Form der Funktion folgt.
                    Bei langen Weltreisen gibt es keinen Platz für überflüssige Elemente.
                    Jede Linie, jede Oberfläche und jede Verbindung dient einem spezifischen Zweck und trägt zur
                    Vielseitigkeit und zum Komfort des Reisenden bei.
                  </p>
                </div>
              </div>
            )}

            {activeSection === 'performance' && (
              <div className="mt-16 text-center">
                <div className="journey-vision-card max-w-4xl mx-auto">
                  <h3 className="journey-section-title">Performance-Versprechen</h3>
                  <p className="journey-text">
                    Das Spacebike setzt neue Maßstäbe für Leistung und Vielseitigkeit auf Reisen.
                    Mit seinem intelligenten Hybrid-Antrieb erreicht es eine bisher unerreichte
                    Kombination aus Reichweite, Komfort und Zuverlässigkeit.
                    Jede Komponente wurde optimiert für maximale Performance bei minimaler Belastung des Reisenden.
                  </p>
                </div>
              </div>
            )}

            {activeSection === 'connection' && (
              <div className="mt-16 text-center">
                <div className="journey-vision-card max-w-4xl mx-auto">
                  <h3 className="journey-section-title">Nahtlose Integration</h3>
                  <p className="journey-text">
                    Das Spacebike wurde entwickelt, um eine natürliche Erweiterung des Weltreisenden zu sein.
                    Durch clevere Modularität und intuitive Bedienung wird aus einem Fahrrad im Handumdrehen
                    ein komplettes Zuhause. Die Integration aller Funktionen ist nahtlos und
                    ermöglicht es, das volle Potenzial autarker Weltreisen auszuschöpfen.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}