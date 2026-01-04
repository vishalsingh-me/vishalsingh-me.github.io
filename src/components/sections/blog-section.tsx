import Link from 'next/link';
import { portfolio } from '@/data/portfolio';
import { SectionHeading } from './section-heading';
import { Card } from '@/components/ui/card';

export function BlogSection() {
  return (
    <section className="space-y-6" id="blog">
      <div className="flex items-start justify-between gap-4">
        <SectionHeading label="Blog" title="Writing and notes" />
        <Link href="/blog" className="text-sm text-primary hover:underline">
          View all posts
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {portfolio.blog.map((post) => (
          <Card key={post.slug} className="p-6 space-y-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{post.date}</span>
              <span>- {post.readTime}</span>
            </div>
            <Link href={`/blog/${post.slug}`} className="text-lg font-semibold hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-muted-foreground">{post.description}</p>
            <div className="flex flex-wrap gap-2 pt-2 text-xs text-muted-foreground">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-muted/60 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
