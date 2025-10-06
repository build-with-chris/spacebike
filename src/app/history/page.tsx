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
    id: "initial-idea",
    year: "2020",
    title: "Die Idee wird geboren",
    subtitle: "Produktentwicklung meets Abenteuer",
    description: "Während seines Produktentwicklungs-Studiums kommt Berni eine verrückte Idee: Was wäre, wenn ein Fahrrad gleichzeitig Tisch, Bett und Küche sein könnte?",
    details: [
      "Einschreibung ins Produktentwicklungs-Studium",
      "Erste Camping-Erfahrungen zeigen Limitierungen",
      "Brainstorming: Modulares System am Fahrrad",
      "Vision: Komplette Autarkie auf zwei Rädern"
    ],
    achievements: [
      "Grundidee entwickelt",
      "Studium begonnen",
      "Erste Konzept-Skizzen"
    ],
    featured: true
  }
];

const buildEvents: TimelineEvent[] = [
  {
    id: "intensive-development",
    year: "2021",
    title: "Intensive Entwicklungsphase",
    subtitle: "Von der Theorie zur Praxis",
    description: "Parallel zum Studium beginnt die intensive Entwicklung der modularen Komponenten. Berni arbeitet Tag und Nacht an der Umsetzung seiner Vision.",
    details: [
      "CAD-Design aller modularen Komponenten",
      "Materialauswahl: Leichtbau vs. Stabilität",
      "Erste Prototypen aus der Werkstatt",
      "Ständige Iteration und Verbesserung"
    ],
    achievements: [
      "Tisch-Modul entwickelt",
      "Bett-System konzipiert",
      "Erste Prototypen",
      "Modulares Konzept validiert"
    ],
    featured: true
  },
  {
    id: "component-refinement",
    year: "2021",
    title: "Komponenten-Verfeinerung",
    subtitle: "Jedes Detail zählt",
    description: "Jede Komponente wird bis ins kleinste Detail optimiert. Gewicht, Funktionalität und Benutzerfreundlichkeit müssen perfekt harmonieren.",
    details: [
      "Kochstation: Kompakt aber vollwertig",
      "Befestigungssystem: Sicher und schnell",
      "Gewichtsverteilung am Fahrrad optimiert",
      "Wetterfestigkeit aller Komponenten"
    ],
    achievements: [
      "Küchen-Modul fertiggestellt",
      "Befestigungssystem perfektioniert",
      "Alle Module wetterfest",
      "Systemintegration erfolgreich"
    ]
  },
  {
    id: "final-integration",
    year: "2021",
    title: "Systemintegration",
    subtitle: "Alles wird eins",
    description: "Die einzelnen Module werden zu einem funktionierenden Gesamtsystem zusammengeführt. Das Spacebike nimmt langsam seine finale Form an.",
    details: [
      "Integration aller Module am Fahrrad",
      "Fahrdynamik und Stabilität testen",
      "Auf- und Abbau-Zeiten optimieren",
      "Erste Übernachtungstests"
    ],
    achievements: [
      "Vollständiges System",
      "Stabile Fahreigenschaften",
      "Schneller Auf-/Abbau",
      "Praxistauglich"
    ],
    featured: true
  }
];

const experienceEvents: TimelineEvent[] = [
  {
    id: "completion-tests",
    year: "2022",
    title: "Finale Tests & Optimierung",
    subtitle: "Die letzten Schliffe",
    description: "Nach zwei Jahren intensiver Entwicklung steht das finale Spacebike bereit. Umfangreiche Tests sorgen für die letzte Perfektion.",
    details: [
      "Belastungstests aller Komponenten",
      "Langzeit-Stabilitätsprüfungen",
      "Optimierung der Gewichtsverteilung",
      "Finale Anpassungen basierend auf Tests"
    ],
    achievements: [
      "Alle Tests bestanden",
      "Optimale Gewichtsverteilung",
      "Maximale Stabilität",
      "Produktionsreif"
    ]
  },
  {
    id: "spacebike-ready",
    year: "2022",
    title: "Das Spacebike ist geboren",
    subtitle: "Vision wird Realität",
    description: "Nach zwei Jahren harter Arbeit ist das Spacebike endlich fertig. Alle modularen Komponenten funktionieren perfekt zusammen.",
    details: [
      "Alle vier Module vollständig integriert",
      "Schneller Auf- und Abbau in wenigen Minuten",
      "Perfekte Balance zwischen Gewicht und Funktionalität",
      "Erste erfolgreiche Übernachtung mit dem System"
    ],
    achievements: [
      "Vollständiges System",
      "Modulare Perfektion",
      "Einsatzbereit",
      "Vision erfüllt"
    ],
    featured: true
  },
  {
    id: "future-adventures",
    year: "2022+",
    title: "Bereit für Abenteuer",
    subtitle: "Die Reise kann beginnen",
    description: "Das Spacebike ist fertig und wartet auf seinen ersten großen Einsatz. Die Welt steht offen für unendliche Möglichkeiten.",
    details: [
      "Unbegrenzte Camping-Möglichkeiten",
      "Autarke Versorgung überall möglich",
      "Flexibilität für jede Art von Abenteuer",
      "Die perfekte Symbiose aus Mobilität und Komfort"
    ],
    achievements: [
      "Grenzenlose Freiheit",
      "Autarkes Reisen",
      "Modulare Innovation",
      "Abenteuer ohne Limits"
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
            Die Entwicklung des <span className="journey-title-highlight">Spacebikes</span>
          </h1>
          <p className="journey-subtitle">
            Von der ersten Idee bis zum fertigen Fahrrad -
            Die Geschichte hinter Bernis modularem Abenteuer-Bike
          </p>
          <div className="journey-stats">
            <div className="journey-stat">
              <span className="journey-stat-number">3</span>
              <span className="journey-stat-label">Jahre</span>
            </div>
            <div className="journey-stat">
              <span className="journey-stat-number">4</span>
              <span className="journey-stat-label">Module</span>
            </div>
            <div className="journey-stat">
              <span className="journey-stat-number">1</span>
              <span className="journey-stat-label">Vision</span>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth transition section */}
      <div style={{
        background: 'linear-gradient(180deg, transparent 0%, var(--bg-primary) 100%)',
        height: '4rem',
        marginTop: '-2rem',
        position: 'relative',
        zIndex: 2
      }}></div>

      {/* Navigation Tabs */}
      <div className="journey-nav">
        <div className="container mx-auto px-6">
          <div className="journey-nav-tabs-centered">
            <div className="splash-circle-container">
              <button
                onClick={() => setActiveSection('vision')}
                className={`splash-circle splash-variant-1 ${activeSection === 'vision' ? 'splash-circle-active' : ''}`}
                style={{
                  width: '140px',
                  height: '140px'
                }}
                aria-label="Vision section"
              >
                <div className="splash-circle-content">
                  <span className="splash-circle-icon">💡</span>
                </div>
                <span className="sr-only">Vision</span>
              </button>
              <span className="splash-circle-label">Vision</span>
            </div>
            <div className="splash-circle-container">
              <button
                onClick={() => setActiveSection('build')}
                className={`splash-circle splash-variant-2 ${activeSection === 'build' ? 'splash-circle-active' : ''}`}
                style={{
                  width: '140px',
                  height: '140px'
                }}
                aria-label="Build section"
              >
                <div className="splash-circle-content">
                  <span className="splash-circle-icon">🔧</span>
                </div>
                <span className="sr-only">Build</span>
              </button>
              <span className="splash-circle-label">Build</span>
            </div>
            <div className="splash-circle-container">
              <button
                onClick={() => setActiveSection('experience')}
                className={`splash-circle splash-variant-3 ${activeSection === 'experience' ? 'splash-circle-active' : ''}`}
                style={{
                  width: '140px',
                  height: '140px'
                }}
                aria-label="Result section"
              >
                <div className="splash-circle-content">
                  <span className="splash-circle-icon">🚀</span>
                </div>
                <span className="sr-only">Result</span>
              </button>
              <span className="splash-circle-label">Result</span>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth transition to content */}
      <div style={{
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, transparent 100%)',
        height: '3rem',
        marginBottom: '-1.5rem',
        position: 'relative',
        zIndex: 2
      }}></div>

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