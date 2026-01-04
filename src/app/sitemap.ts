import { type MetadataRoute } from 'next';
import { posts } from '@/content/blog/posts';

const baseUrl = 'https://vishal-singh.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/projects', '/resume', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.date),
    changeFrequency: 'monthly' as const,
  }));

  return [...routes, ...blogRoutes];
}
