"use client";

import Navigation from '@/components/Navigation';
import { useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  location: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  continent: string;
  isHighlight?: boolean;
}

interface Continent {
  name: string;
  emoji: string;
  countries: number;
  distance: string;
  highlight: string;
}

const continents: Continent[] = [
  {
    name: "Europa",
    emoji: "🇪🇺",
    countries: 12,
    distance: "8.500 km",
    highlight: "Familie Müller teilte ihr Wohnzimmer mit uns"
  },
  {
    name: "Afrika",
    emoji: "🌍",
    countries: 8,
    distance: "15.200 km",
    highlight: "Ahmed reparierte unser Bike und wurde ein Freund"
  },
  {
    name: "Asien",
    emoji: "🏔️",
    countries: 15,
    distance: "22.800 km",
    highlight: "Großmutter Pemba lehrte uns Geduld"
  },
  {
    name: "Ozeanien",
    emoji: "🇦🇺",
    countries: 3,
    distance: "6.700 km",
    highlight: "Mit den Aborigines unter Sternen geschlafen"
  },
  {
    name: "Südamerika",
    emoji: "🏔️",
    countries: 7,
    distance: "12.400 km",
    highlight: "Carlos zeigte uns versteckte Inka-Pfade"
  }
];

const highlights: BlogPost[] = [
  {
    id: "sahara",
    title: "Durch die endlose Sahara",
    location: "Marokko",
    date: "10. April 2024",
    excerpt: "Sand soweit das Auge reicht. Die Magneto-Wheels bewähren sich perfekt auf dem weichen Untergrund. Temperaturen von über 50°C können dem Spacebike nichts anhaben.",
    imageUrl: "/images/blog/sahara.jpg",
    continent: "Afrika",
    isHighlight: true
  },
  {
    id: "himalaya",
    title: "Himalaya - Das Dach der Welt",
    location: "Nepal",
    date: "20. Juni 2024",
    excerpt: "5000 Meter über dem Meeresspiegel. Das Spacebike erreicht neue Dimensionen. Die Smart Cockpit Navigation führt uns sicher durch die gefährlichen Bergpfade.",
    imageUrl: "/images/blog/himalaya.jpg",
    continent: "Asien",
    isHighlight: true
  },
  {
    id: "outback",
    title: "Australisches Outback",
    location: "Australien",
    date: "10. August 2024",
    excerpt: "Endlose Weiten und extreme Hitze. Das Spacebike trotzt den härtesten Bedingungen unserer Reise. Über 1000 km ohne eine einzige Panne.",
    imageUrl: "/images/blog/outback.jpg",
    continent: "Ozeanien",
    isHighlight: true
  }
];

const allBlogPosts: BlogPost[] = [
  {
    id: "departure",
    title: "Der Aufbruch - Das Abenteuer beginnt",
    location: "München, Deutschland",
    date: "15. März 2024",
    excerpt: "Nach drei Jahren Entwicklung ist es endlich soweit. Das Spacebike ist bereit für die ultimative Bewährungsprobe - eine Weltreise, die uns durch alle Kontinente führen wird.",
    imageUrl: "/images/blog/departure.jpg",
    continent: "Europa"
  },
  {
    id: "alps",
    title: "Erste Bewährungsprobe in den Alpen",
    location: "Schweizer Alpen",
    date: "22. März 2024",
    excerpt: "Die ersten 500 Kilometer liegen hinter uns. Das Spacebike meistert die Bergpässe mit Leichtigkeit. Die Titan-Carbon Konstruktion zeigt ihre Stärken bei extremen Höhenunterschieden.",
    imageUrl: "/images/blog/alps.jpg",
    continent: "Europa"
  },
  ...highlights,
  {
    id: "tokyo",
    title: "Neonlichter von Tokyo",
    location: "Japan",
    date: "15. Juli 2024",
    excerpt: "Von den Bergen in die Metropole. Das Spacebike fügt sich nahtlos in das urbane Umfeld ein. Die Suit Integration zeigt ihre Vielseitigkeit in der Großstadt.",
    imageUrl: "/images/blog/tokyo.jpg",
    continent: "Asien"
  },
  {
    id: "andes",
    title: "Durch die Anden",
    location: "Peru",
    date: "5. September 2024",
    excerpt: "Die längste Gebirgskette der Welt fordert uns heraus. Dünne Luft, steile Anstiege und unvorhersehbares Wetter - das Spacebike meistert alles.",
    imageUrl: "/images/blog/andes.jpg",
    continent: "Südamerika"
  }
];

export default function Journey() {
  const [activeSection, setActiveSection] = useState<'vision' | 'connections' | 'stories'>('vision');

  return (
    <main className="min-h-screen" style={{background: 'var(--bg-primary)'}}>
      <Navigation currentPage="journey" />

      {/* Hero Section */}
      <div className="journey-hero">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="journey-title">
            Eine Reise der <span className="journey-title-highlight">Verbindungen</span>
          </h1>
          <p className="journey-subtitle">
            Drei Jahre auf dem Spacebike - Menschen begegnen, Kulturen entdecken,
            Brücken bauen zwischen den Welten
          </p>
          <div className="journey-stats">
            <div className="journey-stat">
              <span className="journey-stat-number">65.600</span>
              <span className="journey-stat-label">Kilometer</span>
            </div>
            <div className="journey-stat">
              <span className="journey-stat-number">45</span>
              <span className="journey-stat-label">Länder</span>
            </div>
            <div className="journey-stat">
              <span className="journey-stat-number">∞</span>
              <span className="journey-stat-label">Begegnungen</span>
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
              <div className="journey-nav-tab-icon">🌍</div>
              <div className="journey-nav-tab-content">
                <h3>Vision</h3>
                <p>Warum wir reisen</p>
              </div>
            </button>
            <button
              onClick={() => setActiveSection('connections')}
              className={`journey-nav-tab-main ${activeSection === 'connections' ? 'journey-nav-tab-active' : ''}`}
            >
              <div className="journey-nav-tab-icon">🤝</div>
              <div className="journey-nav-tab-content">
                <h3>Verbindungen</h3>
                <p>Menschen & Kulturen</p>
              </div>
            </button>
            <button
              onClick={() => setActiveSection('stories')}
              className={`journey-nav-tab-main ${activeSection === 'stories' ? 'journey-nav-tab-active' : ''}`}
            >
              <div className="journey-nav-tab-icon">📖</div>
              <div className="journey-nav-tab-content">
                <h3>Geschichten</h3>
                <p>Tagebuch der Reise</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 pb-20">

        {/* Vision */}
        {activeSection === 'vision' && (
          <div className="journey-section">
            <div className="max-w-4xl mx-auto">
              <div className="journey-vision-card">
                <h2 className="journey-section-title">Warum wir reisen</h2>
                <p className="journey-text">
                  Diese Reise geht weit über Technologie hinaus. Mit dem Spacebike wollen wir
                  zeigen, dass wahre Innovation dort entsteht, wo Menschen aufeinandertreffen -
                  an Marktplätzen in Marrakesch, in Teehäusern in Nepal, bei Straßenhändlern in Tokyo.
                </p>
              </div>

              <div className="journey-vision-card">
                <h2 className="journey-section-title">Mehr als eine Reise</h2>
                <p className="journey-text">
                  Jeder Kilometer erzählt eine Geschichte. Jede Begegnung verändert uns.
                  Wir reisen nicht um anzukommen, sondern um zu verstehen - andere Kulturen,
                  andere Denkweisen, andere Träume. Das Spacebike ist dabei unser stiller Begleiter.
                </p>
              </div>

              <div className="journey-mission-goals">
                <h3 className="text-2xl font-light text-gray-800 mb-8 text-center">Was uns antreibt</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="journey-goal">
                    <div className="journey-goal-icon">👥</div>
                    <h4 className="journey-goal-title">Begegnungen</h4>
                    <p className="journey-goal-text">
                      Menschen aus aller Welt kennenlernen und ihre Geschichten teilen
                    </p>
                  </div>
                  <div className="journey-goal">
                    <div className="journey-goal-icon">🌅</div>
                    <h4 className="journey-goal-title">Entdecken</h4>
                    <p className="journey-goal-text">
                      Verborgene Orte finden, die noch kein Reiseführer beschreibt
                    </p>
                  </div>
                  <div className="journey-goal">
                    <div className="journey-goal-icon">💝</div>
                    <h4 className="journey-goal-title">Verbinden</h4>
                    <p className="journey-goal-text">
                      Brücken bauen zwischen Kulturen und Welten
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Verbindungen */}
        {activeSection === 'connections' && (
          <div className="journey-section">
            <h2 className="journey-section-title text-center mb-12">Menschen & Kulturen</h2>

            <div className="max-w-6xl mx-auto mb-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="journey-connection-text">
                  <h3 className="text-2xl font-light text-gray-800 mb-6">Über Grenzen hinweg</h3>
                  <p className="journey-text mb-6">
                    In jedem Land haben uns Menschen ihre Türen geöffnet. Ein Mechaniker in
                    Marrakesch reparierte unser Spacebike und lud uns zum Tee ein. Eine Großmutter
                    in Nepal teilte ihr Abendessen mit uns und erzählte von den Bergen ihrer Kindheit.
                  </p>
                  <p className="journey-text">
                    Diese Begegnungen sind der wahre Reichtum unserer Journey. Technologie verbindet
                    uns digital - aber echte Verbindungen entstehen beim gemeinsamen Lachen,
                    beim Teilen von Geschichten, beim Überbrücken der Sprachbarriere mit Händen und Herz.
                  </p>
                </div>
                <div className="journey-connection-visual">
                  <div className="journey-connection-card">
                    <div className="journey-connection-stats">
                      <div className="journey-connection-stat">
                        <span className="journey-connection-stat-number">1.247</span>
                        <span className="journey-connection-stat-label">Begegnungen</span>
                      </div>
                      <div className="journey-connection-stat">
                        <span className="journey-connection-stat-number">89</span>
                        <span className="journey-connection-stat-label">Sprachen</span>
                      </div>
                      <div className="journey-connection-stat">
                        <span className="journey-connection-stat-number">342</span>
                        <span className="journey-connection-stat-label">Gemeinsame Mahlzeiten</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="journey-continents">
              {continents.map((continent, index) => (
                <div key={continent.name} className="journey-continent-card">
                  <div className="journey-continent-header">
                    <span className="journey-continent-emoji">{continent.emoji}</span>
                    <h3 className="journey-continent-name">{continent.name}</h3>
                  </div>
                  <div className="journey-continent-stats">
                    <div className="journey-continent-stat">
                      <span className="journey-continent-stat-number">{continent.countries}</span>
                      <span className="journey-continent-stat-label">Länder</span>
                    </div>
                    <div className="journey-continent-stat">
                      <span className="journey-continent-stat-number">{continent.distance}</span>
                      <span className="journey-continent-stat-label">Strecke</span>
                    </div>
                  </div>
                  <div className="journey-continent-highlight">
                    <span className="journey-continent-highlight-label">Besondere Begegnung:</span>
                    <span className="journey-continent-highlight-text">{continent.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Geschichten */}
        {activeSection === 'stories' && (
          <div className="journey-section">
            <h2 className="journey-section-title text-center mb-12">Tagebuch der Reise</h2>

            <div className="max-w-4xl mx-auto mb-16 text-center">
              <p className="journey-text text-lg">
                Jeder Tag auf dieser Reise bringt neue Geschichten hervor. Von spontanen Einladungen
                zum Abendessen bis hin zu unerwarteten Pannen, die zu den schönsten Begegnungen führen -
                hier sammeln wir die Momente, die unsere Weltreise unvergesslich machen.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {allBlogPosts.map((post) => (
                <article key={post.id} className="blog-card group cursor-pointer">
                  <div className="blog-image-container">
                    <div className="blog-image-placeholder">
                      <span className="text-gray-400 text-sm">{post.imageUrl}</span>
                    </div>
                    <div className="blog-continent-tag">{post.continent}</div>
                    {post.isHighlight && (
                      <div className="journey-highlight-badge">⭐ Besondere Geschichte</div>
                    )}
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-gray-500 font-medium">{post.date}</span>
                      <span className="text-sm text-orange-600 font-medium">{post.location}</span>
                    </div>
                    <h2 className="text-2xl font-light text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-6">
                      <span className="text-orange-600 font-medium text-sm group-hover:text-orange-700 transition-colors duration-300">
                        Geschichte lesen →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-500 text-lg">
                Die Reise geht weiter... Neue Geschichten entstehen jeden Tag.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}