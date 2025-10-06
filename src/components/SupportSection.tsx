'use client';
import Link from 'next/link';

export default function SupportSection() {
  return (
    <div style={{
      padding: '3rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2rem',
          fontWeight: '600',
          color: 'var(--text-primary)',
          marginBottom: '1rem'
        }}>
          Support Our Mission
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem'
        }}>
          Help us bring people closer together and showcase amazing products from around the world.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {/* Patreon Support */}
          <Link
            href="https://patreon.com/spacebike"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '2rem',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(255, 107, 53, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 107, 53, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 107, 53, 0.3)';
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>🌍</span>
            Support on Patreon
          </Link>

          {/* Merge Support */}
          <Link
            href="https://merge.com/spacebike"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #64B5F6 0%, #42A5F5 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '2rem',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(100, 181, 246, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(100, 181, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(100, 181, 246, 0.3)';
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>🤝</span>
            Join on Merge
          </Link>
        </div>
      </div>
    </div>
  );
}
