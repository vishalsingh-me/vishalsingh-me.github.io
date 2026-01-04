import { portfolio } from '@/data/portfolio';
import { SectionHeading } from './section-heading';
import { ProjectCard } from './project-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ProjectGrid() {
  const featured = portfolio.projects.slice(0, 4);
  return (
    <section id="projects" className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <SectionHeading label="Projects" title="Selected work" />
        <Button variant="ghost" asChild>
          <Link href="/projects">View all</Link>
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {featured.map((project, idx) => (
          <ProjectCard key={project.title} project={project} delay={idx * 0.05} />
        ))}
      </div>
    </section>
  );
}
