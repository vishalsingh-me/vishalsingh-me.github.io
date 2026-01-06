import type { Metadata } from 'next';
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { AnalyticsPlaceholder } from '@/components/layout/analytics-placeholder';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const baseUrl = 'https://vishal-singh.dev';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Vishal Singh | Full Stack Developer into AI',
    template: '%s | Vishal Singh',
  },
  description:
    'Portfolio of Vishal Singh, front-end developer transitioning into AI engineering. React, Next.js, TypeScript, and human centered problem solving.',
  keywords: [
    'Vishal Singh',
    'Full Stack Developer',
    'Next.js',
    'TypeScript',
    'AI Engineering',
    'React',
    'Portfolio',
    'United States',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'Vishal Singh | Full Stack Developer into AI',
    description:
      'Human centered full stack developer from the United States working on AI, computer vision, and practical tech for road safety and healthcare.',
    siteName: 'Vishal Singh Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
        width: 1600,
        height: 900,
        alt: 'Vishal Singh Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishal Singh | Full Stack Developer into AI',
    description:
      'React and Next.js developer from the United States, now building AI driven experiences. Clean UX, thoughtful engineering.',
    images: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
    ],
  },
  alternates: {
    canonical: baseUrl,
  },
};

function jsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vishal Singh',
    jobTitle: 'Full Stack Developer',
    url: baseUrl,
    sameAs: ['https://github.com/', 'https://www.linkedin.com/'],
    description:
      'Full stack developer focusing on React, Next.js, and practical AI projects in healthcare and road safety.',
  };
}

function jsonLdWebsite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: baseUrl,
    name: 'Vishal Singh Portfolio',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite()) }}
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background text-foreground grainy',
          jakarta.variable,
          'font-sans'
        )}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main id="main" className="pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
        <AnalyticsPlaceholder />
      </body>
    </html>
  );
}
