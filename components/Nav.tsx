'use client';

import Link from 'next/link'
import UnifiedToggle from './UnifiedToggle';
import { useTranslation } from 'react-i18next';

export default function Nav() {
  const { t } = useTranslation();
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-serif font-bold tracking-tight hover:opacity-80 transition-opacity">
          vinoNoniv
        </Link>
        
        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              {t('home')}
            </Link>
            <Link href="/gallery" className="hover:text-foreground transition-colors">
              Gallery
            </Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">
              {t('blog')}
            </Link>
          </div>
          <UnifiedToggle />
        </div>
      </div>
    </nav>
  )
}