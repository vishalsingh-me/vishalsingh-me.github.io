import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/sections/section-heading';
import { Card } from '@/components/ui/card';

const resumeUrl = '/resume.pdf';

export default function ResumePage() {
  return (
    <div className="container space-y-8 pb-16 pt-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <SectionHeading label="Resume" title="Snapshot of my experience" />
        <Button asChild size="lg">
          <Link href={resumeUrl} download>
            Download PDF
          </Link>
        </Button>
      </div>
      <Card className="p-4 md:p-6">
        <div className="aspect-[3/4] w-full overflow-hidden rounded-xl border border-border/70 bg-muted/40">
          <object
            data={resumeUrl}
            type="application/pdf"
            className="h-full w-full"
            aria-label="Resume preview"
          >
            <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center text-sm text-muted-foreground">
              <p>Upload your resume.pdf file in the public folder to see the preview.</p>
              <Button asChild variant="outline">
                <Link href={resumeUrl} download>
                  Download instead
                </Link>
              </Button>
            </div>
          </object>
        </div>
      </Card>
      <Card className="space-y-2 p-6 text-sm text-muted-foreground">
        <p>
          Quick highlights: 4 years of front-end delivery with React and Next.js; Pinnacle Performance Award at
          Newgen Software Technologies; co-founded a healthcare lab booking startup; incoming Master of Science
          in Artificial Intelligence at Boston University.
        </p>
        <p>For full details or specific case studies, feel free to ask.</p>
      </Card>
    </div>
  );
}
