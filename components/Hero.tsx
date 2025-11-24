'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Placeholder for a hero image. In a real app, this would be a high-quality photo. */}
        <div className="w-full h-full bg-neutral-100 dark:bg-neutral-900" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
          Capturing Moments, <br /> Telling Stories.
        </h1>
        <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto font-light">
          A visual journey through light, shadow, and the spaces in between.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/gallery" 
            className="px-8 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity text-sm font-medium tracking-wide"
          >
            View Gallery
          </Link>
          <Link 
            href="/blog" 
            className="px-8 py-3 border border-border rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-sm font-medium tracking-wide"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
