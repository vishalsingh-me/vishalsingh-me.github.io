import { useMemo, useState } from 'react';
import { portfolio } from '@/data/portfolio';
import { ProjectCard } from '@/components/sections/project-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SectionHeading } from '@/components/sections/section-heading';

const categories = ['all', 'healthcare', 'computer-vision', 'enterprise', 'documents', 'iot'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>('all');

  const filtered = useMemo(() => {
    if (filter === 'all') return portfolio.projects;
    return portfolio.projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <div className="container space-y-10 pb-16 pt-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <SectionHeading label="Projects" title="Case studies" />
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? 'All' : cat.replace('-', ' ')}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="rounded-2xl bg-muted/60 p-6 text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">Looking for something specific?</p>
        <p className="mt-2">
          I can share code samples privately for enterprise dashboards, document workflows, and AI
          prototypes that match your needs.
        </p>
        <div className="mt-3 flex gap-2">
          <Badge variant="primary">Full Stack</Badge>
          <Badge variant="primary">AI ideas</Badge>
          <Badge variant="primary">Performance</Badge>
        </div>
      </div>
    </div>
  );
}
'use client';
