'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const availableImages = [
  'DSCF2971.webp',
  'DSCF2987.webp',
  'DSCF3207.webp',
  'DSCF3225-3.webp',
  'DSCF3658.webp',
  'DSCF3729.webp',
  'XT4F5071.webp',
  'XT4F5351.webp',
  'XT4F5373-2.webp'
];

export default function BottomHero() {
  const [currentImage, setCurrentImage] = useState('DSCF3207.webp'); // Default fallback

  useEffect(() => {
    // Select a random image on component mount
    const randomImage = availableImages[Math.floor(Math.random() * availableImages.length)];
    setCurrentImage(randomImage);
  }, []);

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
            src={`/images/Landingpage poster/${currentImage}`}
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