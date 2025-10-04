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
    id: "inception",
    year: "2016",
    title: "Bernis Vision entsteht",
    subtitle: "Der Traum von der ultimativen Weltreise",
    description: "Alles begann mit Bernis verrückter Idee: Was wäre, wenn man mit einem einzigen Fahrrad die ganze Welt bereisen könnte - autark und vollständig ausgestattet?",
    details: [
      "Erste Skizzen auf einer Serviette in einem Café in Berlin",
      "Inspiration durch eigene Radreisen in Europa",
      "Vision: Ein Bike als komplettes mobiles Zuhause",
      "Suche nach Gleichgesinnten und ersten Unterstützern"
    ],
    achievements: [
      "Konzeptentwicklung",
      "Team-Formation",
      "Erste Finanzierung"
    ],
    featured: true
  },
  {
    id: "research",
    year: "2017",
    title: "Forschung & Entwicklung",
    subtitle: "Die Technik hinter der Vision",
    description: "Intensive Forschungsphase zu Materialwissenschaften, Mechanik und den Bedürfnissen von Langstrecken-Radreisenden.",
    details: [
      "Partnerschaften mit Hochschulen für Ingenieurswesen",
      "Tests mit erfahrenen Weltradlern",
      "Entwicklung modularer Systeme",
      "Erste Prototyp-Komponenten für Tisch und Bett"
    ],
    achievements: [
      "Materialforschung",
      "Mechanische Grundlagen",
      "Erste funktionsfähige Module"
    ]
  }
];

const buildEvents: TimelineEvent[] = [
  {
    id: "prototype1",
    year: "2018",
    title: "Erster Prototyp",
    subtitle: "Spacebike Alpha",
    description: "Der erste funktionsfähige Prototyp wird gebaut und auf einer 2000km Testfahrt durch Europa erprobt.",
    details: [
      "Bau des Alpha-Prototyps in der Werkstatt in München",
      "Tests auf verschiedenen Untergründen",
      "Erste erfolgreiche Testfahrt: München-Rom",
      "Identifikation von Verbesserungspotential bei Modulwechsel"
    ],
    achievements: [
      "Funktionsfähiger Prototyp",
      "2000km Testfahrt",
      "Proof of Concept"
    ],
    featured: true
  },
  {
    id: "challenges",
    year: "2019",
    title: "Herausforderungen",
    subtitle: "Rückschläge & Learnings",
    description: "Nicht alles lief nach Plan. Wichtige Lektionen aus der Praxis wurden gelernt.",
    details: [
      "Materialversagen bei extremer Hitze in Südspanien",
      "Probleme beim schnellen Modulwechsel",
      "Zurück zum Reißbrett",
      "Interviews mit 200+ Langstrecken-Radfahrern"
    ],
    achievements: [
      "Wertvolle Praxiserkenntnisse",
      "Verbessertes Design",
      "Stärkeres Team"
    ]
  },
  {
    id: "breakthrough",
    year: "2020",
    title: "Der Durchbruch",
    subtitle: "Innovative Lösung",
    description: "Die entscheidende Innovation: Das patentierte Schnellverbindungssystem wird entwickelt.",
    details: [
      "Entwicklung des Quick-Connect Systems",
      "Revolutionäres Modul-Wechselsystem",
      "Tests mit Extremsportlern",
      "Patent-Anmeldungen eingereicht"
    ],
    achievements: [
      "Technischer Durchbruch",
      "Patent erhalten",
      "Extremsport-Kooperationen"
    ],
    featured: true
  },
  {
    id: "prototype2",
    year: "2021",
    title: "Zweiter Prototyp",
    subtitle: "Spacebike Beta",
    description: "Mit den neuen Erkenntnissen wird der Beta-Prototyp entwickelt und auf Transozeantour getestet.",
    details: [
      "Integration aller neuen Technologien",
      "Umfangreiche Langzeittests",
      "Erste Tests auf 6-monatiger Afrika-Tour",
      "Medienaufmerksamkeit weltweit"
    ],
    achievements: [
      "Erfolgreiche 6-Monats-Tour",
      "Internationale Anerkennung",
      "Mediale Aufmerksamkeit"
    ]
  }
];

const experienceEvents: TimelineEvent[] = [
  {
    id: "refinement",
    year: "2022",
    title: "Perfektion",
    subtitle: "Feinschliff & Details",
    description: "Das finale Jahr der Entwicklung mit letzten Verbesserungen und Vorbereitung der Serienfertigung.",
    details: [
      "Optimierung aller Modulsysteme",
      "Langzeittests über 50.000km abgeschlossen",
      "Produktionspartner gefunden",
      "CE-Zertifizierung erhalten"
    ],
    achievements: [
      "Alle Tests bestanden",
      "Produktionsreife",
      "Sicherheitszertifikate"
    ]
  },
  {
    id: "completion",
    year: "2023",
    title: "Fertigstellung",
    subtitle: "Spacebike Gamma - Mission Complete",
    description: "Das dritte und finale Spacebike ist fertig. Bernis Traum wird Realität.",
    details: [
      "Fertigstellung des Gamma-Modells",
      "Erste kommerzielle Produktion gestartet",
      "Auslieferung an Abenteurer weltweit",
      "Beginn einer neuen Ära des Radreisens"
    ],
    achievements: [
      "Produktionsstart",
      "100 erste Bikes ausgeliefert",
      "Bernis Vision verwirklicht"
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
            Die Geschichte des <span className="journey-title-highlight">Spacebikes</span>
          </h1>
          <p className="journey-subtitle">
            Von der ersten Idee bis zur Realität - Entdecke die faszinierende
            Entwicklungsreise unserer revolutionären Technologie
          </p>
          <div className="journey-stats">
            <div className="journey-stat">
              <span className="journey-stat-number">8</span>
              <span className="journey-stat-label">Jahre</span>
            </div>
            <div className="journey-stat">
              <span className="journey-stat-number">4</span>
              <span className="journey-stat-label">Prototypen</span>
            </div>
            <div className="journey-stat">
              <span className="journey-stat-number">1</span>
              <span className="journey-stat-label">Vision</span>
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
              <div className="journey-nav-tab-icon">💡</div>
              <div className="journey-nav-tab-content">
                <h3>The Vision</h3>
                <p>Wo alles begann</p>
              </div>
            </button>
            <button
              onClick={() => setActiveSection('build')}
              className={`journey-nav-tab-main ${activeSection === 'build' ? 'journey-nav-tab-active' : ''}`}
            >
              <div className="journey-nav-tab-icon">🔧</div>
              <div className="journey-nav-tab-content">
                <h3>The Build</h3>
                <p>Entwicklung & Prototypen</p>
              </div>
            </button>
            <button
              onClick={() => setActiveSection('experience')}
              className={`journey-nav-tab-main ${activeSection === 'experience' ? 'journey-nav-tab-active' : ''}`}
            >
              <div className="journey-nav-tab-icon">🚀</div>
              <div className="journey-nav-tab-content">
                <h3>The Experience</h3>
                <p>Fertigstellung & Zukunft</p>
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