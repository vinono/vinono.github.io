import Link from 'next/link';
import Image from 'next/image';

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  coverImage?: string;
}

export default function PostCard({ title, excerpt, date, slug, coverImage }: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="flex flex-col gap-4">
        {coverImage && (
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="space-y-2">
          <div className="text-sm text-muted font-medium">{date}</div>
          <h2 className="text-2xl font-serif font-bold group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
            {title}
          </h2>
          <p className="text-muted line-clamp-2 leading-relaxed">
            {excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
