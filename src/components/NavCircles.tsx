import CircleCard from './ui/CircleCard';

const navigationItems = [
  {
    title: 'Product',
    href: '/product',
    variant: 1 as const
  },
  {
    title: 'Journey',
    href: '/journey',
    variant: 2 as const
  },
  {
    title: 'Support',
    href: '/support',
    variant: 3 as const
  },
  {
    title: 'About',
    href: '/about',
    variant: 4 as const
  }
];

export default function NavCircles() {
  return (
    <section
      style={{
        backgroundColor: 'var(--spacebike-bg)',
        padding: 'var(--space-12) 0'
      }}
      className="md:py-16"
    >
      {/* Mobile: 2x2 grid with container */}
      <div className="container mx-auto px-4 md:hidden">
        <div className="grid grid-cols-2 gap-6 justify-items-center">
          {navigationItems.map((item) => (
            <CircleCard
              key={item.href}
              title={item.title}
              href={item.href}
              variant={item.variant}
            />
          ))}
        </div>
      </div>

      {/* Desktop: 4 columns full width */}
      <div className="hidden md:block w-full px-8 lg:px-12">
        <div className="grid grid-cols-4 gap-4 justify-items-center w-full">
          {navigationItems.map((item) => (
            <CircleCard
              key={item.href}
              title={item.title}
              href={item.href}
              variant={item.variant}
            />
          ))}
        </div>
      </div>

      {/* Optional: Subtle description text */}
      <div className="text-center mt-8 px-4">
        <p
          style={{
            fontSize: 'var(--text-lg)',
            fontFamily: 'var(--font-body)',
            color: 'var(--spacebike-t64)',
            lineHeight: 'var(--leading-relaxed)',
            letterSpacing: 'var(--tracking-wide)'
          }}
        >
          Explore our universe of possibilities
        </p>
      </div>
    </section>
  );
}