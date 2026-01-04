'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all',
        scrolled ? 'backdrop-blur bg-background/70 border-b' : ''
      )}
    >
      <div className="container flex items-center justify-between py-3 md:py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary/90 via-primary/70 to-accent shadow-glow" />
          <div>
            <Link href="/" className="text-base font-semibold">
              Vishal Singh
            </Link>
            <p className="text-xs text-muted-foreground">
              Front-end to AI curiosity
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-1 rounded-full bg-muted/50 px-2 py-1 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 text-muted-foreground transition hover:bg-background hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild className="hidden md:inline-flex">
            <Link href="/resume">Resume</Link>
          </Button>
          <Button variant="default" size="sm" asChild className="hidden md:inline-flex">
            <Link href="#contact">Let&apos;s talk</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      <MobileNav open={open} setOpen={setOpen} />
    </header>
  );
}

type MobileNavProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

function MobileNav({ open, setOpen }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.18 }}
          className="border-b bg-background/90 backdrop-blur md:hidden"
        >
          <div className="container flex flex-col gap-2 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1" asChild>
                <Link href="/resume" onClick={() => setOpen(false)}>
                  Resume
                </Link>
              </Button>
              <Button className="flex-1" asChild>
                <Link href="#contact" onClick={() => setOpen(false)}>
                  Let&apos;s talk
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
