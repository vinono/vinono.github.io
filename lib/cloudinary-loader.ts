'use client';

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  
  // Replace with your Cloudinary Cloud Name
  // For now, we use a placeholder or environment variable
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'; 
  
  // If the source is already a full URL (like Unsplash), use Cloudinary Fetch
  if (src.startsWith('http')) {
    return `https://res.cloudinary.com/${cloudName}/image/fetch/${params.join(',')}/${src}`;
  }
  
  // Otherwise, assume it's a path in your Cloudinary Media Library
  // Remove leading slash if present
  const normalizedSrc = src.startsWith('/') ? src.slice(1) : src;
  return `https://res.cloudinary.com/${cloudName}/image/upload/${params.join(',')}/${normalizedSrc}`;
}
