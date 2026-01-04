import { portfolio } from '@/data/portfolio';
import { SectionHeading } from './section-heading';
import { Card } from '@/components/ui/card';

export function Education() {
  return (
    <section id="education" className="space-y-6">
      <SectionHeading label="Education" title="Learning journey" />
      <div className="grid gap-4 md:grid-cols-2">
        {portfolio.education.map((item) => (
          <Card key={item.school} className="p-6 space-y-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{item.period}</span>
            </div>
            <p className="text-lg font-semibold">{item.school}</p>
            <p className="text-sm text-muted-foreground">{item.program}</p>
            <p className="text-sm text-muted-foreground">{item.details}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
