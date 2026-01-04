import { portfolio } from '@/data/portfolio';
import { SectionHeading } from './section-heading';
import { Card } from '@/components/ui/card';

export function Awards() {
  return (
    <section id="awards" className="space-y-6">
      <SectionHeading label="Recognition" title="Awards and achievements" />
      <div className="grid gap-4 md:grid-cols-2">
        {portfolio.awards.map((award) => (
          <Card key={award.title} className="p-6 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">{award.title}</p>
              {award.issuer ? (
                <span className="text-xs text-muted-foreground">{award.issuer}</span>
              ) : null}
            </div>
            <p className="text-sm text-muted-foreground">{award.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
