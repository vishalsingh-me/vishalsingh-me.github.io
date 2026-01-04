import { notFound } from 'next/navigation';
import { posts } from '@/content/blog/posts';
import { SectionHeading } from '@/components/sections/section-heading';

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const Content = post.Component;

  return (
    <div className="container space-y-6 pb-16 pt-10">
      <SectionHeading label="Blog" title={post.metadata.title} />
      <div className="text-sm text-muted-foreground">
        {post.metadata.date} - {post.metadata.readTime}
      </div>
      <article className="prose prose-neutral max-w-none dark:prose-invert">
        <Content />
      </article>
    </div>
  );
}
