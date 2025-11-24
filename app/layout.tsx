import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Inter, Playfair_Display } from 'next/font/google'
import I18nProvider from '@/app/components/i18n-provider';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <ThemeProvider>
          <I18nProvider>
            <Nav />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}