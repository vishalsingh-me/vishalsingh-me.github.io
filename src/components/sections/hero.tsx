'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { portfolio } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 px-4 py-12 shadow-soft md:px-10">
      <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-6 right-10 h-36 w-36 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary" className="bg-primary/10 text-primary">
              {portfolio.location}
            </Badge>
            {portfolio.openTo?.length ? (
              <div className="flex flex-wrap gap-2">
                {portfolio.openTo.map((item) => (
                  <Badge key={item} variant="outline" className="border-primary/30 text-foreground">
                    Open to {item}
                  </Badge>
                ))}
              </div>
            ) : null}
          </div>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              MS CS @ Boston University | Ex-SWE II (Appinventiv) | Ex-SDE I (Newgen)
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              {portfolio.hero.headline}
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              {portfolio.hero.subtext}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {portfolio.hero.ctas.map((cta) => (
              <Button key={cta.href} size="lg" asChild>
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            ))}
            <Button variant="outline" size="lg" asChild>
              <Link href={`mailto:${portfolio.contact.email}`}>Email me</Link>
            </Button>
          </div>
          <div className="grid gap-4 rounded-2xl bg-muted/50 p-4 text-sm text-muted-foreground md:grid-cols-3">
            <div>
              <p className="text-lg font-semibold text-foreground">Graduate focus</p>
              <p>MS CS at Boston University</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">AI and software</p>
              <p>Interested in practical ML and dependable systems</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">Builder</p>
              <p>Clear UI, thoughtful integrations, steady delivery</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex justify-center"
        >
          <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-primary/20 via-primary/5 to-accent/10 blur-3xl" />
          <div className="relative aspect-square max-w-[360px] rounded-full bg-gradient-to-b from-background to-muted/60 shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 rounded-full ring-2 ring-primary/30 dark:ring-primary/50" />
            <div className="relative h-full w-full overflow-hidden rounded-full bg-background">
              <Image
                src="/images/Vishal.png"
                alt="Vishal Singh portrait"
                width={440}
                height={440}
                sizes="(max-width: 768px) 70vw, 260px"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center 10%' }}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
