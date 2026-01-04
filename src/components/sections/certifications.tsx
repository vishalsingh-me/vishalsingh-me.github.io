import { portfolio } from '@/data/portfolio';
import { SectionHeading } from './section-heading';
import { Card } from '@/components/ui/card';

export function Certifications() {
  if (!portfolio.certifications?.length) return null;

  return (
    <section id="certifications" className="space-y-6">
      <SectionHeading label="Certifications" title="Licenses and credentials" />
      <div className="grid gap-4 md:grid-cols-2">
        {portfolio.certifications.map((cert) => (
          <Card key={cert.name} className="p-6 space-y-2">
            <p className="text-lg font-semibold">{cert.name}</p>
            <p className="text-sm text-muted-foreground">
              {cert.issuer ? `${cert.issuer}` : ''} {cert.date ? `- ${cert.date}` : ''}
            </p>
            {cert.credentialId ? (
              <p className="text-sm text-muted-foreground">Credential ID: {cert.credentialId}</p>
            ) : null}
          </Card>
        ))}
      </div>
    </section>
  );
}
