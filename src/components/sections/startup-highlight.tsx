import { portfolio } from '@/data/portfolio';
import { SectionHeading } from './section-heading';
import { Card } from '@/components/ui/card';

export function StartupHighlight() {
  return (
    <section className="space-y-6" id="startup">
      <SectionHeading label="Entrepreneurship" title="Startup highlight" />
      <Card className="p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 p-4 text-sm font-semibold text-primary">
            {portfolio.startup.headline}
          </div>
          {portfolio.startup.details.map((detail) => (
            <div key={detail} className="rounded-2xl bg-muted/50 p-4 text-sm text-muted-foreground">
              {detail}
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
