import Link from 'next/link';
import { SectionHeading } from '@/components/sections/section-heading';
import { Card } from '@/components/ui/card';
import { posts } from '@/content/blog/posts';

export default function BlogPage() {
  return (
    <div className="container space-y-8 pb-16 pt-10">
      <SectionHeading label="Blog" title="Notes and experiments" />
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <Card key={post.slug} className="p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{post.metadata.date}</span>
              <span>- {post.metadata.readTime}</span>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="text-lg font-semibold hover:underline"
            >
              {post.metadata.title}
            </Link>
            <p className="text-sm text-muted-foreground">{post.metadata.description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              {post.metadata.tags?.map((tag) => (
                <span key={tag} className="rounded-full bg-muted/60 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
