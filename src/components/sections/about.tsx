import { portfolio } from '@/data/portfolio';
import { SectionHeading } from './section-heading';
import { Card } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="space-y-6">
      <SectionHeading label="About" title="A quick story" />
      <Card className="p-6 md:p-8">
        <p className="text-lg text-muted-foreground">{portfolio.about.intro}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {portfolio.about.story.map((item, idx) => (
            <div key={idx} className="rounded-2xl bg-muted/50 p-4 text-sm leading-relaxed text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
