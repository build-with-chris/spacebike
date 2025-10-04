"use client";
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

interface Component {
  id: string;
  name: string;
  description: string;
  features: string[];
  specs?: string[];
  image?: string;
}

const components: Component[] = [
  {
    id: "frame",
    name: "Titan-Carbon Rahmen",
    description: "Der Herzstück des Spacebikes - ein ultraleichter Rahmen aus Titan-Carbon-Verbundwerkstoff, speziell für die extremen Bedingungen des Weltraums entwickelt.",
    features: [
      "Gewicht: nur 800g",
      "Temperaturbeständig: -200°C bis +200°C",
      "Mikrometeoriten-resistent",
      "Integrierte Lebenserhaltungssysteme"
    ],
    specs: [
      "Material: Titan-Carbon-Hybrid",
      "Abmessungen: 180cm × 65cm × 40cm",
      "Belastbarkeit: bis 150kg"
    ]
  },
  {
    id: "wheels",
    name: "Magneto-Räder",
    description: "Revolutionäre magnetische Räder, die ohne physischen Kontakt funktionieren. Perfekte Rotation in der Schwerelosigkeit durch elektromagnetische Stabilisierung.",
    features: [
      "Kontaktlose Rotation",
      "Selbststabilisierend",
      "Keine Abnutzung",
      "360° Bewegungsfreiheit"
    ],
    specs: [
      "Durchmesser: 60cm",
      "Magnetfeldstärke: 0.5 Tesla",
      "Energieverbrauch: 12W pro Rad"
    ]
  },
  {
    id: "drive",
    name: "Ionic Drive System",
    description: "Das revolutionäre Antriebssystem nutzt Ionenstrahlen für präzise Bewegungen im Weltraum. Geräuschlos und hocheffizient.",
    features: [
      "Ionenantrieb-Technologie",
      "Präzise Richtungssteuerung",
      "Geräuschloser Betrieb",
      "Extrem energieeffizient"
    ],
    specs: [
      "Schubkraft: 0.1-5 Newton",
      "Treibstoff: Xenon-Gas",
      "Betriebszeit: 72 Stunden"
    ]
  },
  {
    id: "cockpit",
    name: "Smart Cockpit",
    description: "Ein intelligentes Kontrollzentrum mit holographischer Anzeige und KI-gestützter Navigation für optimale Sicherheit im Weltraum.",
    features: [
      "Holographisches Display",
      "KI-Navigation",
      "Lebenserhaltungs-Monitor",
      "Notfall-Kommunikation"
    ],
    specs: [
      "Display: 15\" Hologramm",
      "Prozessor: Quantum-Chip",
      "Reichweite: 1000km"
    ]
  },
  {
    id: "suit",
    name: "Spacebike Suit Integration",
    description: "Speziell entwickelte Anzug-Integration, die Fahrer und Bike zu einer Einheit verbindet. Optimale Kontrolle und Sicherheit.",
    features: [
      "Nahtlose Bike-Integration",
      "Biomonitoring",
      "Adaptive Temperaturregelung",
      "Notfall-Trennsystem"
    ],
    specs: [
      "Material: Smart-Fabric",
      "Betriebstemperatur: -180°C bis +120°C",
      "Lebenserhaltung: 8 Stunden"
    ]
  }
];

export default function ProductPage() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  return (
    <main style={{ backgroundColor: '#fefefe', minHeight: '100vh' }}>
      <Navigation currentPage="product" />

      {/* Hero Section - Clean & Minimal */}
      <section style={{
        backgroundColor: '#ffffff',
        padding: '8rem 2rem 6rem',
        textAlign: 'center',
        borderBottom: '1px solid #f0f0f0'
      }}>
        <div className="container mx-auto max-w-6xl">
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: '200',
            fontFamily: 'var(--font-display)',
            color: '#1a1a1a',
            marginBottom: '2rem',
            letterSpacing: '-0.02em'
          }}>
            Das Spacebike
          </h1>
          <p style={{
            fontSize: '1.5rem',
            color: '#666',
            lineHeight: '1.5',
            maxWidth: '800px',
            margin: '0 auto 4rem',
            fontWeight: '300'
          }}>
            Revolutionäre Mobilität für die Zukunft der Raumfahrt
          </p>

          {/* Main Product Image Placeholder */}
          <div style={{
            width: '100%',
            maxWidth: '900px',
            height: '500px',
            backgroundColor: '#f8f8f8',
            borderRadius: '20px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #e8e8e8'
          }}>
            <div style={{
              textAlign: 'center',
              color: '#999'
            }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1rem'
              }}>🚴‍♂️</div>
              <p style={{ fontSize: '1.2rem', fontWeight: '300' }}>
                Spacebike Gamma - Hero Image
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Overview */}
      <section style={{
        backgroundColor: '#fafafa',
        padding: '6rem 2rem'
      }}>
        <div className="container mx-auto max-w-4xl">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }} className="md:grid-cols-1">
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '300',
                fontFamily: 'var(--font-display)',
                color: '#1a1a1a',
                marginBottom: '2rem'
              }}>
                Das Konzept
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#555',
                lineHeight: '1.7',
                marginBottom: '2rem'
              }}>
                Das Spacebike revolutioniert die Art, wie wir uns im Weltraum bewegen.
                Durch innovative Technologien wie magnetische Räder und Ionenantrieb
                ermöglicht es erstmals intuitive, fahrradähnliche Mobilität in der Schwerelosigkeit.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2rem',
                marginTop: '3rem'
              }}>
                <div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '0.5rem'
                  }}>
                    Geschwindigkeit
                  </h4>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>
                    Bis zu 50 km/h im Weltraum
                  </p>
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '0.5rem'
                  }}>
                    Reichweite
                  </h4>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>
                    1000km mit einer Ladung
                  </p>
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '0.5rem'
                  }}>
                    Gewicht
                  </h4>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>
                    Nur 15kg Gesamtgewicht
                  </p>
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '0.5rem'
                  }}>
                    Einsatzzeit
                  </h4>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>
                    72 Stunden Betriebszeit
                  </p>
                </div>
              </div>
            </div>
            <div style={{
              width: '100%',
              height: '400px',
              backgroundColor: '#f0f0f0',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #e0e0e0'
            }}>
              <div style={{ textAlign: 'center', color: '#999' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
                <p>Konzept Grafik</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section style={{
        backgroundColor: '#ffffff',
        padding: '6rem 2rem'
      }}>
        <div className="container mx-auto max-w-6xl">
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '300',
              fontFamily: 'var(--font-display)',
              color: '#1a1a1a',
              marginBottom: '1rem'
            }}>
              Komponenten & Technologie
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Jede Komponente wurde für die extremen Anforderungen des Weltraums optimiert
            </p>
          </div>

          {/* Component Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {components.map((component) => (
              <div
                key={component.id}
                style={{
                  backgroundColor: selectedComponent === component.id ? '#f8f8f8' : '#ffffff',
                  border: `2px solid ${selectedComponent === component.id ? '#ddd' : '#f0f0f0'}`,
                  borderRadius: '15px',
                  padding: '2rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => setSelectedComponent(
                  selectedComponent === component.id ? null : component.id
                )}
                onMouseEnter={(e) => {
                  if (selectedComponent !== component.id) {
                    e.currentTarget.style.borderColor = '#e0e0e0';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedComponent !== component.id) {
                    e.currentTarget.style.borderColor = '#f0f0f0';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {/* Component Image Placeholder */}
                <div style={{
                  width: '100%',
                  height: '200px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '10px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ textAlign: 'center', color: '#999' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚙️</div>
                    <p style={{ fontSize: '0.9rem' }}>{component.name}</p>
                  </div>
                </div>

                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  marginBottom: '1rem'
                }}>
                  {component.name}
                </h3>

                <p style={{
                  fontSize: '0.95rem',
                  color: '#666',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {component.description}
                </p>

                {/* Features */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Features
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {component.features.map((feature, idx) => (
                      <li key={idx} style={{
                        fontSize: '0.9rem',
                        color: '#555',
                        marginBottom: '0.5rem',
                        paddingLeft: '1rem',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#999'
                        }}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expandable Specs */}
                {selectedComponent === component.id && component.specs && (
                  <div style={{
                    borderTop: '1px solid #e0e0e0',
                    paddingTop: '1.5rem',
                    animation: 'fadeIn 0.3s ease'
                  }}>
                    <h4 style={{
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      marginBottom: '0.8rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Technische Daten
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {component.specs.map((spec, idx) => (
                        <li key={idx} style={{
                          fontSize: '0.9rem',
                          color: '#555',
                          marginBottom: '0.5rem',
                          paddingLeft: '1rem',
                          position: 'relative'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            color: '#999'
                          }}>→</span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div style={{
                  marginTop: '1rem',
                  fontSize: '0.85rem',
                  color: '#999',
                  textAlign: 'center'
                }}>
                  {selectedComponent === component.id ? 'Weniger anzeigen' : 'Mehr Details'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        backgroundColor: '#f8f8f8',
        padding: '6rem 2rem',
        textAlign: 'center'
      }}>
        <div className="container mx-auto max-w-3xl">
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '300',
            fontFamily: 'var(--font-display)',
            color: '#1a1a1a',
            marginBottom: '2rem'
          }}>
            Bereit für die Zukunft?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '3rem'
          }}>
            Entdecke, wie das Spacebike die Art verändert, wie wir den Weltraum erkunden.
            Starte deine eigene Journey in die Zukunft der Mobilität.
          </p>
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href="/journey"
              style={{
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#333';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1a1a1a';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Journey starten
            </a>
            <a
              href="/history"
              style={{
                backgroundColor: 'transparent',
                color: '#1a1a1a',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '500',
                border: '2px solid #ddd',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#1a1a1a';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#ddd';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Entwicklungsgeschichte
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}