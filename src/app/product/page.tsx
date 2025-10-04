"use client";
import { useState } from 'react';
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
    name: "Titan-Carbon Rahmen",
    description: "Das Herzstück des Spacebikes - ein ultraleichter Rahmen aus Titan-Carbon-Verbundwerkstoff, speziell für die extremen Bedingungen des Weltraums entwickelt.",
    features: [
      "Gewicht: nur 800g",
      "Temperaturbeständig: -200°C bis +200°C",
      "Vakuum-optimierte Konstruktion",
      "Modulares Design für einfache Wartung"
    ],
    specs: [
      "Material: Titan-Carbon Composite",
      "Rahmengeometrie: Angepasst für Schwerelosigkeit",
      "Verbindungen: Magnetische Kupplungen"
    ]
  },
  {
    id: "cockpit",
    name: "Smart Cockpit",
    description: "Intuitives Kontrollzentrum mit holographischen Displays und direkter Verbindung zum Raumanzug.",
    features: [
      "360° Holographische Anzeigen",
      "Gedankensteuerung via Neural Interface",
      "Automatische Notfallsysteme",
      "Integrierte KI-Assistenz"
    ],
    specs: [
      "Display: Holographische Projektionen",
      "Interface: Neural + Haptik",
      "KI: Adaptive Lernalgorithmen"
    ]
  }
];

const performanceComponents: Component[] = [
  {
    id: "wheels",
    name: "Magneto-Wheels",
    description: "Revolutionäre magnetische Räder, die sowohl auf metallischen Oberflächen als auch im freien Raum funktionieren.",
    features: [
      "Magnetische Haftung auf Metall",
      "Ionenantrieb für freien Raum",
      "Adaptive Griffmuster",
      "Selbstreinigende Oberfläche"
    ],
    specs: [
      "Durchmesser: 45cm",
      "Magnetfeldstärke: 2.5 Tesla",
      "Ionenantrieb: 500N Schub"
    ]
  },
  {
    id: "drive",
    name: "Ionic Drive System",
    description: "Hocheffizientes Antriebssystem mit Ionentriebwerken für präzise Manöver in der Schwerelosigkeit.",
    features: [
      "Xenon-Ionentriebwerke",
      "Vektorielle Schubsteuerung",
      "Energieeffizienz: 95%",
      "Lautloser Betrieb"
    ],
    specs: [
      "Treibstoff: Xenon",
      "Spezifischer Impuls: 3000s",
      "Schubbereich: 1mN - 1N"
    ]
  }
];

const connectionComponents: Component[] = [
  {
    id: "suit",
    name: "Suit Integration",
    description: "Nahtlose Integration mit allen gängigen Raumanzügen für maximale Sicherheit und Komfort.",
    features: [
      "Universelle Anzug-Kompatibilität",
      "Lebenserhaltungssystem-Anbindung",
      "Notfall-Trennsystem",
      "Biometrische Überwachung"
    ],
    specs: [
      "Kompatibilität: EMU, Orlan, xEMU",
      "Trennzeit: <0.5 Sekunden",
      "Überwachung: Herzrate, O2, CO2"
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

      {/* Hero Section */}
      <div className="journey-hero">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="journey-title">
            Das <span className="journey-title-highlight">Spacebike</span> Produktdesign
          </h1>
          <p className="journey-subtitle">
            Entdecke die innovativen Komponenten und bahnbrechende Technologie,
            die das Spacebike zum ultimativen Weltraum-Fahrzeug machen
          </p>
          <div className="journey-stats">
            <div className="journey-stat">
              <span className="journey-stat-number">800g</span>
              <span className="journey-stat-label">Gesamtgewicht</span>
            </div>
            <div className="journey-stat">
              <span className="journey-stat-number">5</span>
              <span className="journey-stat-label">Hauptkomponenten</span>
            </div>
            <div className="journey-stat">
              <span className="journey-stat-number">∞</span>
              <span className="journey-stat-label">Möglichkeiten</span>
            </div>
          </div>
        </div>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {getCurrentComponents().map((component) => (
                <div
                  key={component.id}
                  className="journey-vision-card cursor-pointer transition-all duration-300 hover:shadow-lg"
                  onClick={() => setSelectedComponent(selectedComponent === component.id ? null : component.id)}
                >
                  <h3 className="journey-section-title text-2xl mb-4">{component.name}</h3>
                  <p className="journey-text mb-6">{component.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                      Features:
                    </h4>
                    <ul className="space-y-2">
                      {component.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-orange-500 font-bold">•</span>
                          <span className="journey-text text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedComponent === component.id && component.specs && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="text-lg font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                        Technische Spezifikationen:
                      </h4>
                      <ul className="space-y-2">
                        {component.specs.map((spec, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-blue-500 font-bold">→</span>
                            <span className="journey-text text-sm">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-4 text-orange-600 text-sm font-medium">
                    {selectedComponent === component.id ? 'Weniger anzeigen ↑' : 'Technische Details anzeigen ↓'}
                  </div>
                </div>
              ))}
            </div>

            {activeSection === 'design' && (
              <div className="mt-16 text-center">
                <div className="journey-vision-card max-w-4xl mx-auto">
                  <h3 className="journey-section-title">Designphilosophie</h3>
                  <p className="journey-text">
                    Jede Komponente des Spacebikes wurde mit dem Grundsatz entwickelt, dass Form der Funktion folgt.
                    In der extremen Umgebung des Weltraums gibt es keinen Platz für überflüssige Elemente.
                    Jede Linie, jede Oberfläche und jede Verbindung dient einem spezifischen Zweck und trägt zur
                    Gesamtleistung des Systems bei.
                  </p>
                </div>
              </div>
            )}

            {activeSection === 'performance' && (
              <div className="mt-16 text-center">
                <div className="journey-vision-card max-w-4xl mx-auto">
                  <h3 className="journey-section-title">Performance-Versprechen</h3>
                  <p className="journey-text">
                    Das Spacebike setzt neue Maßstäbe für Leistung und Effizienz im Weltraum.
                    Mit seinem revolutionären Antriebssystem erreicht es eine bisher unerreichte
                    Kombination aus Geschwindigkeit, Manövrierfähigkeit und Energieeffizienz.
                    Jede Komponente wurde optimiert für maximale Performance bei minimalem Energieverbrauch.
                  </p>
                </div>
              </div>
            )}

            {activeSection === 'connection' && (
              <div className="mt-16 text-center">
                <div className="journey-vision-card max-w-4xl mx-auto">
                  <h3 className="journey-section-title">Nahtlose Integration</h3>
                  <p className="journey-text">
                    Das Spacebike wurde entwickelt, um eine natürliche Erweiterung des Astronauten zu sein.
                    Durch fortschrittliche Schnittstellen und intuitive Bedienung verschmelzen Mensch und Maschine
                    zu einer Einheit. Die Integration mit bestehenden Raumfahrtsystemen ist nahtlos und
                    ermöglicht es, das volle Potenzial der Weltraumerkundung auszuschöpfen.
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