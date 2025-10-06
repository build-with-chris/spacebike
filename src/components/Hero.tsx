import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative w-full">
      {/* Full screen Earth background - edge to edge */}
      <section
        className="relative overflow-hidden w-full"
        style={{
          height: '60vh'
        }}
      >
        {/* Earth background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/earth.webp"
            alt="Earth - representing the world of possibilities for bike travel"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }}></div>
        </div>

        {/* Content over earth image */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h1 className="hero-text">
              <span className="hero-gradient hero-floating">
                Enter the Space
              </span>
            </h1>
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
  );
}