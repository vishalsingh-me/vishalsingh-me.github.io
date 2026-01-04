import Link from 'next/link';
import { portfolio } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/40">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold">Vishal Singh</p>
          <p className="text-sm text-muted-foreground">
            Front-end developer growing into AI engineering.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {portfolio.contact.socials.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full bg-background px-3 py-1 transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
