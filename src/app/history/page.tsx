"use client";
import { useState } from 'react';
import Navigation from '@/components/Navigation';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  details?: string[];
  achievements?: string[];
  image?: string;
  featured?: boolean;
}

const visionEvents: TimelineEvent[] = [
  {
    id: "first-adventure",
    year: "2022",
    title: "Die ersten Kilometer",
    subtitle: "Mut zum Abenteuer",
    description: "Berni startet seine ersten mehrtägigen Touren mit dem Spacebike. Erste Erfahrungen zeigen sowohl die Möglichkeiten als auch die Herausforderungen auf.",
    details: [
      "Erste 3-Tage-Tour durch die Alpen",
      "Übernachtung in freier Natur getestet",
      "Modulares System in der Praxis erprobt",
      "Erste Nacht unter dem Sternenhimmel"
    ],
    achievements: [
      "450 km zurückgelegt",
      "12 Nächte im Freien",
      "Grundkonzept bestätigt"
    ],
    featured: true
  },
  {
    id: "learning-year",
    year: "2023",
    title: "Jahr des Lernens",
    subtitle: "Erfahrungen sammeln und optimieren",
    description: "Längere Touren bringen wertvolle Erkenntnisse. Das Setup wird kontinuierlich verbessert und an die praktischen Bedürfnisse angepasst.",
    details: [
      "Mehrere 1-2 Wochen Touren durch Europa",
      "Tests bei verschiedenen Wetterbedingungen",
      "Optimierung der Tisch- und Bett-Module",
      "Erste internationale Erfahrungen"
    ],
    achievements: [
      "1.200 km gefahren",
      "28 Übernachtungen",
      "Setup optimiert"
    ]
  },
  {
    id: "breakthrough-year",
    year: "2024",
    title: "Das Durchbruchs-Jahr",
    subtitle: "Längere Distanzen, größere Träume",
    description: "Bernis längste Tour bisher - einen ganzen Monat unterwegs. Das Spacebike beweist seine Alltagstauglichkeit für längere Reisen.",
    details: [
      "30-Tage-Tour durch Skandinavien",
      "Komplette Autarkie getestet",
      "Wetterextreme gemeistert",
      "Lokale Begegnungen und Geschichten"
    ],
    achievements: [
      "1.500 km in einem Monat",
      "30 Nächte am Stück",
      "Langzeittauglichkeit bewiesen"
    ],
    featured: true
  }
];

const buildEvents: TimelineEvent[] = [
  {
    id: "studies-start",
    year: "2020",
    title: "Der Beginn",
    subtitle: "Produktentwicklung studieren",
    description: "Berni beginnt sein Produktentwicklungs-Studium und startet parallel seine verrückte Idee: Ein Fahrrad, das alles kann.",
    details: [
      "Einschreibung im Produktentwicklungs-Studium",
      "Erste Skizzen und Konzepte für das modulare System",
      "Recherche zu bestehenden Fahrrad-Camping-Lösungen",
      "Vision: Tisch, Bett und Küche am Fahrrad"
    ],
    achievements: [
      "Studium begonnen",
      "Grundidee entwickelt",
      "Erste Konzepte"
    ],
    featured: true
  },
  {
    id: "development-hustle",
    year: "2021",
    title: "Hustling Phase",
    subtitle: "Designen, entwickeln, bauen",
    description: "Berni arbeitet wie verrückt an der Entwicklung der einzelnen Komponenten. Jede freie Minute wird in das Projekt investiert.",
    details: [
      "Tisch-Modul: Vom Konzept zum funktionsfähigen Prototyp",
      "Bett-System: Ergonomie und Komfort optimieren",
      "Küchen-Komponente: Kochstation integrieren",
      "Endlose Nächte in der Werkstatt"
    ],
    achievements: [
      "Alle Module entworfen",
      "Erste Prototypen gebaut",
      "System integriert"
    ]
  },
  {
    id: "final-setup",
    year: "2022",
    title: "Finalisierung",
    subtitle: "Das Spacebike wird real",
    description: "Die letzten Optimierungen werden vorgenommen. Das Spacebike ist bereit für die ersten echten Abenteuer.",
    details: [
      "Finale Gewichtsoptimierung aller Komponenten",
      "Stabilität und Sicherheit getestet",
      "Erste kurze Testfahrten erfolgreich",
      "Das Spacebike ist einsatzbereit"
    ],
    achievements: [
      "Finales Design",
      "Alle Tests bestanden",
      "Bereit für Abenteuer"
    ],
    featured: true
  }
];

const experienceEvents: TimelineEvent[] = [
  {
    id: "current-preparation",
    year: "2025",
    title: "Vorbereitung der großen Reise",
    subtitle: "Das Setup perfektionieren",
    description: "Berni nutzt seine Erfahrungen aus 3+ Jahren, um sich optimal auf die große Weltreise vorzubereiten. Jedes Detail wird durchdacht.",
    details: [
      "Optimierung basierend auf 100+ Übernachtungen",
      "Routen-Planung für die Weltreise",
      "Internationale Dokumente und Vorbereitungen",
      "Equipment-Tests für verschiedene Klimazonen"
    ],
    achievements: [
      "Setup perfektioniert",
      "Route geplant",
      "Bereit für die Welt"
    ]
  },
  {
    id: "world-journey-start",
    year: "2026",
    title: "Der Start",
    subtitle: "Die große Weltreise beginnt",
    description: "Berni startet seine Traum-Weltreise. Mit dem perfektionierten Spacebike wird er die Welt erkunden, wie nie zuvor.",
    details: [
      "Start der mehrjährigen Weltreise",
      "Erste Etappe durch Europa",
      "Richtung Asien und unbekannte Abenteuer",
      "Live-Updates und Geschichten unterwegs"
    ],
    achievements: [
      "Weltreise gestartet",
      "Träume werden real",
      "Das Abenteuer beginnt"
    ],
    featured: true
  },
  {
    id: "infinite-dreams",
    year: "∞",
    title: "Endlose Möglichkeiten",
    subtitle: "Die Reise geht weiter",
    description: "Nach der ersten großen Weltreise ist klar: Das Spacebike eröffnet unendliche Möglichkeiten für Abenteuer und Entdeckungen.",
    details: [
      "Kontinentübergreifende Expeditionen",
      "Neue Routen und unentdeckte Orte",
      "Community von Spacebike-Abenteurern",
      "Die Reise hört nie auf"
    ],
    achievements: [
      "Unendliche Abenteuer",
      "Grenzenlose Freiheit",
      "Träume ohne Limit"
    ],
    featured: true
  }
];

export default function HistoryPage() {
  const [activeSection, setActiveSection] = useState<'vision' | 'build' | 'experience'>('vision');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const isExpanded = (id: string) => expandedItems.includes(id);

  const getCurrentEvents = () => {
    switch (activeSection) {
      case 'vision': return visionEvents;
      case 'build': return buildEvents;
      case 'experience': return experienceEvents;
      default: return visionEvents;
    }
  };

  return (
    <main className="min-h-screen" style={{background: 'var(--bg-primary)'}}>
      <Navigation currentPage="history" />

      {/* Hero Section */}
      <div className="journey-hero">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="journey-title">
            Bernis <span className="journey-title-highlight">Spacebike</span> Abenteuer
          </h1>
          <p className="journey-subtitle">
            Eine bereits begonnene Reise - Die ersten Tausend Kilometer sind geschafft,
            die große Weltreise liegt noch vor uns
          </p>
          <div className="journey-stats">
            <div className="journey-stat">
              <span className="journey-stat-number">3.2k+</span>
              <span className="journey-stat-label">Kilometer</span>
            </div>
            <div className="journey-stat">
              <span className="journey-stat-number">100+</span>
              <span className="journey-stat-label">Nächte</span>
            </div>
            <div className="journey-stat">
              <span className="journey-stat-number">∞</span>
              <span className="journey-stat-label">Träume</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="journey-nav">
        <div className="container mx-auto px-6">
          <div className="journey-nav-tabs-centered">
            <button
              onClick={() => setActiveSection('vision')}
              className={`journey-nav-tab-main ${activeSection === 'vision' ? 'journey-nav-tab-active' : ''}`}
            >
              <div className="journey-nav-tab-icon">📚</div>
              <div className="journey-nav-tab-content">
                <h3>Die Vergangenheit</h3>
                <p>2022-2025: Erste Abenteuer</p>
              </div>
            </button>
            <button
              onClick={() => setActiveSection('build')}
              className={`journey-nav-tab-main ${activeSection === 'build' ? 'journey-nav-tab-active' : ''}`}
            >
              <div className="journey-nav-tab-icon">🚴‍♂️</div>
              <div className="journey-nav-tab-content">
                <h3>Die Gegenwart</h3>
                <p>2025: Vorbereitung & Setup</p>
              </div>
            </button>
            <button
              onClick={() => setActiveSection('experience')}
              className={`journey-nav-tab-main ${activeSection === 'experience' ? 'journey-nav-tab-active' : ''}`}
            >
              <div className="journey-nav-tab-icon">🌍</div>
              <div className="journey-nav-tab-content">
                <h3>Die Zukunft</h3>
                <p>2026+: Die große Weltreise</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 pb-20">
        <div className="journey-section">
          <div className="max-w-6xl mx-auto">
            <div className="timeline-container">
              <div className="timeline-line"></div>

              {getCurrentEvents().map((event, index) => (
                <div
                  key={event.id}
                  className={`timeline-item ${event.featured ? 'timeline-featured' : ''}`}
                >
                  <div className="timeline-dot"></div>

                  <div
                    className={`timeline-content ${isExpanded(event.id) ? 'expanded' : ''}`}
                    onClick={() => toggleExpanded(event.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="timeline-header">
                      <div className="timeline-info">
                        <div className="timeline-date">{event.year}</div>
                        <h3 className="timeline-title">{event.title}</h3>
                        <p className="timeline-subtitle">{event.subtitle}</p>
                        {event.featured && (
                          <span className="timeline-category">Meilenstein</span>
                        )}
                      </div>
                    </div>

                    <p className="timeline-description">
                      {event.description}
                    </p>

                    {!isExpanded(event.id) && (
                      <button className="timeline-expand-btn">
                        Mehr erfahren ↓
                      </button>
                    )}

                    {isExpanded(event.id) && (
                      <div className="timeline-details">
                        {event.details && (
                          <div>
                            <h4 style={{
                              color: 'var(--text-primary)',
                              fontWeight: '600',
                              marginBottom: '1rem',
                              fontSize: '1.1rem'
                            }}>
                              Details & Entwicklungen:
                            </h4>
                            <div className="timeline-features">
                              {event.details.map((detail, idx) => (
                                <div key={idx} className="timeline-feature">
                                  <span style={{ color: 'var(--brand)' }}>•</span>
                                  <span>{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {event.achievements && (
                          <div style={{ marginTop: '1.5rem' }}>
                            <h4 style={{
                              color: 'var(--text-primary)',
                              fontWeight: '600',
                              marginBottom: '1rem',
                              fontSize: '1.1rem'
                            }}>
                              Errungenschaften:
                            </h4>
                            <div style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: '0.5rem'
                            }}>
                              {event.achievements.map((achievement, idx) => (
                                <span
                                  key={idx}
                                  style={{
                                    backgroundColor: 'rgba(100, 181, 246, 0.15)',
                                    color: 'var(--brand)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '2rem',
                                    fontSize: '0.875rem',
                                    fontWeight: '500'
                                  }}
                                >
                                  {achievement}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <button
                          className="timeline-expand-btn"
                          style={{ marginTop: '1rem' }}
                        >
                          Weniger anzeigen ↑
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}