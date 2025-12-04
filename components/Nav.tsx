'use client'

import Link from 'next/link'
import UnifiedToggle from './UnifiedToggle'
import { useTranslation } from 'react-i18next'

import { usePathname } from 'next/navigation'

export default function Nav() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <nav
      className={`${
        isHome ? 'fixed border-transparent bg-transparent' : 'sticky border-border/40 bg-background/80 backdrop-blur-md'
      } top-0 z-50 w-full border-b transition-all duration-300`}
    >
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
              {t('gallery')}
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
