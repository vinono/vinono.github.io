'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-hero" />
      
      {/* Decorative floating shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 dark:bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 dark:bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/10 dark:bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Content with glassmorphism */}
      <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="glass rounded-3xl p-12 md:p-16 shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight text-white animate-fade-in-up">
            Capturing Moments, <br /> Telling Stories.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light animate-fade-in-up delay-100">
            A visual journey through light, shadow, and the spaces in between.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-up delay-200">
            <Link 
              href="/gallery" 
              className="group relative px-8 py-4 bg-white text-purple-600 dark:bg-neutral-900 dark:text-purple-400 rounded-full font-medium tracking-wide overflow-hidden transition-smooth hover:scale-105 shadow-glow"
            >
              <span className="relative z-10">View Gallery</span>
              <div className="absolute inset-0 bg-gradient-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link 
              href="/blog" 
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full hover:bg-white/10 hover:border-white/50 transition-smooth font-medium tracking-wide backdrop-blur-sm"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
