import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function NotFound() {
  return (
    <main className="min-h-screen" style={{background: 'var(--bg-primary)'}}>
      <Navigation />

      <div className="container mx-auto px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-light tracking-wide mb-8" style={{
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-display)',
            letterSpacing: '0.05em'
          }}>
            404 - Seite nicht gefunden
          </h1>

          <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
            Die gesuchte Seite konnte nicht gefunden werden.
          </p>

          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 rounded-xl font-medium transition-all duration-300"
            style={{
              background: 'var(--brand)',
              color: 'white',
              textDecoration: 'none'
            }}
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}