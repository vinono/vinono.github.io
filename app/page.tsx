import Hero from '@/components/Hero';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <Hero />
      
      {/* Featured Section Placeholder */}
      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-2">Featured Works</h2>
              <p className="text-muted">Selected shots from recent travels.</p>
            </div>
            <Link href="/gallery" className="text-sm font-medium hover:underline underline-offset-4">
              View All Works →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[4/5] bg-neutral-200 dark:bg-neutral-800 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
