import { portfolio } from '@/data/portfolio';
import { SectionHeading } from './section-heading';
import { Card } from '@/components/ui/card';

export function Now() {
  return (
    <section className="space-y-6" id="now">
      <SectionHeading label="Now" title="Currently exploring" />
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6 space-y-2">
          <p className="text-sm text-muted-foreground">
            What I am reading, building, or testing this month.
          </p>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            <li className="rounded-lg bg-muted/50 px-3 py-2">
              Shipping clean front-end flows with strong accessibility.
            </li>
            <li className="rounded-lg bg-muted/50 px-3 py-2">
              Prototyping computer vision ideas for safer roads.
            </li>
            <li className="rounded-lg bg-muted/50 px-3 py-2">
              Learning how AI can support health system reliability.
            </li>
          </ul>
        </Card>
        <Card className="p-6 space-y-3">
          <p className="text-lg font-semibold">Interests</p>
          <div className="flex flex-wrap gap-2">
            {portfolio.interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full bg-muted/60 px-3 py-1 text-sm text-foreground"
              >
                {interest}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
