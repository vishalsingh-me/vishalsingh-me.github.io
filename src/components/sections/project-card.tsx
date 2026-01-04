'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Project } from '@/data/portfolio';
import { Button } from '@/components/ui/button';

type ProjectCardProps = {
  project: Project;
  delay?: number;
};

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.25, delay }}
      className="h-full"
    >
      <Card className="flex h-full flex-col">
        <CardHeader>
          <div className="mb-3 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="primary" className="bg-primary/10 text-primary">
                {tech}
              </Badge>
            ))}
          </div>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-4">
          <ul className="grid gap-2 text-sm text-muted-foreground">
            {project.features.map((feature) => (
              <li key={feature} className="rounded-lg bg-muted/50 px-3 py-2">
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
            <span>{project.impact}</span>
            <div className="flex gap-2">
              <Button asChild size="sm" variant="outline">
                <Link href={project.links.github}>GitHub</Link>
              </Button>
              <Button asChild size="sm">
                <Link href={project.links.demo}>Live demo</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
