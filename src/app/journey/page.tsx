"use client";

import Navigation from '@/components/Navigation';
import { useState } from 'react';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  details?: string[];
  achievements?: string[];
  kilometers?: string;
  nights?: string;
  featured?: boolean;
}

const firstTourEvents: TimelineEvent[] = [
  {
    id: "first-test",
    year: "2022",
    title: "Die ersten Testfahrten",
    subtitle: "Das Spacebike im echten Einsatz",
    description: "Nach der Fertigstellung des Spacebikes beginnen die ersten echten Testfahrten. Jede Tour bringt neue Erkenntnisse und Verbesserungen.",
    details: [
      "Erste Übernachtung mit dem kompletten System",
      "Test aller Module unter realen Bedingungen",
      "Feintuning der Auf- und Abbau-Prozesse",
      "Gewichtsverteilung und Fahrstabilität optimiert"
    ],
    achievements: [
      "System erfolgreich getestet",
      "Erste Camping-Nacht",
      "Alle Module funktional",
      "Praxistauglich bestätigt"
    ],
    kilometers: "150",
    nights: "3",
    featured: true
  },
  {
    id: "local-tours",
    year: "2022",
    title: "Lokale Touren",
    subtitle: "Die Umgebung erkunden",
    description: "Regelmäßige Wochenendtouren in der Umgebung helfen dabei, das System zu perfektionieren und Vertrauen ins Equipment zu gewinnen.",
    details: [
      "Wochenendtouren in Bayern und Österreich",
      "Verschiedene Wetterbedingungen getestet",
      "Setup-Zeit kontinuierlich verbessert",
      "Erste begeisterte Reaktionen von anderen Radfahrern"
    ],
    achievements: [
      "Routine entwickelt",
      "Wetterresistenz bewiesen",
      "Community-Aufmerksamkeit",
      "Selbstvertrauen gestärkt"
    ],
    kilometers: "500",
    nights: "15"
  }
];

const adventureEvents: TimelineEvent[] = [
  {
    id: "extended-tours",
    year: "2023",
    title: "Erste größere Abenteuer",
    subtitle: "Das Spacebike zeigt seine Stärken",
    description: "Mit wachsendem Vertrauen ins System werden die Touren länger und anspruchsvoller. Das Spacebike beweist seine Zuverlässigkeit.",
    details: [
      "Erste einwöchige Tour durch die Alpen",
      "Spontane Routenänderungen dank Flexibilität",
      "Begegnungen mit anderen Bikepacking-Enthusiasten",
      "Das System funktioniert perfekt in der Praxis"
    ],
    achievements: [
      "Längere Distanzen gemeistert",
      "Flexibilität bewiesen",
      "Community-Kontakte geknüpft",
      "Systemzuverlässigkeit bestätigt"
    ],
    kilometers: "800",
    nights: "25",
    featured: true
  },
  {
    id: "challenging-conditions",
    year: "2023",
    title: "Herausfordernde Bedingungen",
    subtitle: "Grenzen austesten",
    description: "Extremwetter, schwieriges Gelände und lange Distanzen - das Spacebike wird in allen erdenklichen Situationen getestet.",
    details: [
      "Tour bei Minusgraden und Schnee",
      "Mehrtägige Regenperioden überstanden",
      "Steile Berganstiege mit vollem Gepäck",
      "System auch unter Stress zuverlässig"
    ],
    achievements: [
      "Winterfestigkeit bewiesen",
      "Wasserdichtigkeit bestätigt",
      "Bergfestigkeit unter Last",
      "Stressresistenz validiert"
    ],
    kilometers: "600",
    nights: "20"
  }
];

const experienceEvents: TimelineEvent[] = [
  {
    id: "accumulated-experience",
    year: "2024",
    title: "Gefestigte Routine",
    subtitle: "Das System wird zur zweiten Natur",
    description: "Nach zwei Jahren intensiver Nutzung ist das Spacebike-Setup perfektioniert. Jede Tour läuft wie am Schnürchen.",
    details: [
      "Aufbauzeiten auf unter 10 Minuten reduziert",
      "Intuitive Nutzung aller Komponenten",
      "Optimale Packlisten für jede Situation",
      "Das Spacebike wird zum zuverlässigen Partner"
    ],
    achievements: [
      "Perfektion im Handling",
      "Maximale Effizienz",
      "Vollständige Integration",
      "Partnerschaft Mensch-Maschine"
    ],
    kilometers: "1200",
    nights: "35",
    featured: true
  },
  {
    id: "current-status",
    year: "2025",
    title: "Bereit für große Träume",
    subtitle: "Die große Reise wartet",
    description: "Mit über 100 Nächten Erfahrung und tausenden Kilometern ist das System ausgereift. Die Zeit für große Abenteuer ist gekommen.",
    details: [
      "Über 100 Übernachtungen erfolgreich absolviert",
      "Mehrere tausend Kilometer zurückgelegt",
      "System in allen Situationen bewährt",
      "Bereit für die große Weltreise"
    ],
    achievements: [
      "Hunderte Nächte erlebt",
      "Tausende Kilometer gesammelt",
      "Absolute Zuverlässigkeit",
      "Weltreise-bereit"
    ],
    kilometers: "2500+",
    nights: "100+",
    featured: true
  }
];

export default function Journey() {
  const [activeSection, setActiveSection] = useState<'first-tours' | 'adventures' | 'experiences'>('first-tours');
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
      case 'first-tours': return firstTourEvents;
      case 'adventures': return adventureEvents;
      case 'experiences': return experienceEvents;
      default: return firstTourEvents;
    }
  };

  return (
    <main className="min-h-screen" style={{background: 'var(--bg-primary)'}}>
      <Navigation currentPage="journey" />

      {/* Hero Section */}
      <div className="journey-hero">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="journey-title">
Bernis <span className="journey-title-highlight">Touring-Erfahrungen</span>
          </h1>
          <p className="journey-subtitle">
            Von den ersten Testfahrten bis zu großen Abenteuern -
            Die echten Erfahrungen mit dem Spacebike seit 2022
          </p>
          <div className="journey-stats">
            <div className="journey-stat">
              <span className="journey-stat-number">1000+</span>
              <span className="journey-stat-label">Kilometer</span>
            </div>
            <div className="journey-stat">
              <span className="journey-stat-number">100+</span>
              <span className="journey-stat-label">Nächte</span>
            </div>
            <div className="journey-stat">
              <span className="journey-stat-number">3</span>
              <span className="journey-stat-label">Jahre</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="journey-nav">
        <div className="container mx-auto px-6">
          <div className="journey-nav-tabs-centered">
            <div className="splash-circle-container">
              <button
                onClick={() => setActiveSection('first-tours')}
                className={`splash-circle splash-variant-1 ${activeSection === 'first-tours' ? 'splash-circle-active' : ''}`}
                style={{
                  width: '140px',
                  height: '140px'
                }}
                aria-label="First Tours section"
              >
                <div className="splash-circle-content">
                  <span className="splash-circle-icon">🚴</span>
                </div>
                <span className="sr-only">First Tours</span>
              </button>
              <span className="splash-circle-label">First Tours</span>
            </div>
            <div className="splash-circle-container">
              <button
                onClick={() => setActiveSection('adventures')}
                className={`splash-circle splash-variant-2 ${activeSection === 'adventures' ? 'splash-circle-active' : ''}`}
                style={{
                  width: '140px',
                  height: '140px'
                }}
                aria-label="Adventures section"
              >
                <div className="splash-circle-content">
                  <span className="splash-circle-icon">⛰️</span>
                </div>
                <span className="sr-only">Adventures</span>
              </button>
              <span className="splash-circle-label">Adventures</span>
            </div>
            <div className="splash-circle-container">
              <button
                onClick={() => setActiveSection('experiences')}
                className={`splash-circle splash-variant-3 ${activeSection === 'experiences' ? 'splash-circle-active' : ''}`}
                style={{
                  width: '140px',
                  height: '140px'
                }}
                aria-label="Experiences section"
              >
                <div className="splash-circle-content">
                  <span className="splash-circle-icon">🌟</span>
                </div>
                <span className="sr-only">Experiences</span>
              </button>
              <span className="splash-circle-label">Experiences</span>
            </div>
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
                        {(event.kilometers || event.nights) && (
                          <div className="timeline-stats">
                            {event.kilometers && (
                              <span className="timeline-stat">
                                📏 {event.kilometers} km
                              </span>
                            )}
                            {event.nights && (
                              <span className="timeline-stat">
                                🏕️ {event.nights} Nächte
                              </span>
                            )}
                          </div>
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