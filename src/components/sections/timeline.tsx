'use client';

import { portfolio } from '@/data/portfolio';
import { SectionHeading } from './section-heading';
import { motion } from 'framer-motion';

export function Timeline() {
  return (
    <section id="experience" className="space-y-6">
      <SectionHeading label="Experience" title="Where I have contributed" />
      <div className="relative ml-2 border-l border-border/70 pl-6">
        {portfolio.experience.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.25, delay: idx * 0.05 }}
            className="mb-10 last:mb-0"
          >
            <div className="absolute -left-[14px] mt-1 h-3 w-3 rounded-full bg-primary shadow-glow" />
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{item.title}</span>
              {item.company ? <span>- {item.company}</span> : null}
              <span>- {item.period}</span>
              {item.location ? <span>- {item.location}</span> : null}
            </div>
            <p className="mt-2 text-base text-foreground">{item.description}</p>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="rounded-lg bg-muted/50 p-3">
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
