import Image from 'next/image';

export default function BottomHero() {
  return (
    <div className="relative w-full">
      {/* Full screen bottom hero background - edge to edge */}
      <section
        className="relative overflow-hidden w-full"
        style={{
          height: '70vh'
        }}
      >
        {/* Bottom hero background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/Landingpage poster/DSCF3207.webp"
            alt="Space technology in action"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={false}
          />
        </div>

      </section>
    </div>
  );
}