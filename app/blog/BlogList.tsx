'use client';

import { BlogPost } from '@/lib/blog'
import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import PostCard from '@/components/PostCard';
import { useTranslation } from 'react-i18next';

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts: initialPosts }: BlogListProps) {
  const [posts, setPosts] = useState(initialPosts);
  const { t } = useTranslation();

  const handleSearch = (query: string) => {
    const filteredPosts = initialPosts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setPosts(filteredPosts);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t('blog')}</h1>
        <div className="max-w-md mx-auto">
          <SearchBar onSearch={handleSearch} />
        </div>
      </header>

      {posts.length === 0 ? (
        <div className="text-center py-20 text-muted">
          <p>No stories found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt || ''}
              date={post.date}
              slug={post.slug}
              // In a real app, you would pass the cover image from frontmatter
              // coverImage={post.coverImage} 
            />
          ))}
        </div>
      )}
    </div>
  )
}