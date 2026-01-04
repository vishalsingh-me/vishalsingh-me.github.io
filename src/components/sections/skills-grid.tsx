import { portfolio } from '@/data/portfolio';
import { SectionHeading } from './section-heading';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export function SkillsGrid() {
  return (
    <section id="skills" className="space-y-6">
      <SectionHeading label="Skills" title="What I work with" />
      <div className="grid gap-4 md:grid-cols-2">
        {portfolio.skills.map((group) => (
          <Card key={group.category} className="p-6">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-base font-semibold">{group.category}</p>
              <Badge variant="primary">{group.items.length} items</Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="rounded-lg bg-muted/50 px-3 py-1 text-xs text-foreground"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
