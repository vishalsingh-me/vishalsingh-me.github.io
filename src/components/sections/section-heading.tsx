import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  label: string;
  title: string;
  className?: string;
};

export function SectionHeading({ label, title, className }: SectionHeadingProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <p className="text-xs uppercase tracking-[0.2em] text-primary">{label}</p>
      <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
    </div>
  );
}
