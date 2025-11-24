import PhotoGrid from '@/components/PhotoGrid';

const SAMPLE_PHOTOS = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80',
    alt: 'Mountain landscape',
    width: 2940,
    height: 1960,
    category: 'Landscape'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=1286&q=80',
    alt: 'Cinque Terre, Italy',
    width: 1286,
    height: 1929,
    category: 'Travel'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80',
    alt: 'Mountains',
    width: 2940,
    height: 1960,
    category: 'Landscape'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80',
    alt: 'Mountains',
    width: 2940,
    height: 1960,
    category: 'Landscape'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1286&q=80',
    alt: 'Travel',
    width: 1286,
    height: 1929,
    category: 'Travel'
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80',
    alt: 'Nature',
    width: 2940,
    height: 1960,
    category: 'Nature'
  }
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Gallery</h1>
        <p className="text-muted max-w-2xl mx-auto mb-4">
          A collection of moments captured in time.
        </p>
        <p className="text-xs text-muted/60">
          Powered by Cloudinary Optimization & PWA Caching
        </p>
      </header>
      
      <PhotoGrid photos={SAMPLE_PHOTOS} />
    </div>
  );
}
