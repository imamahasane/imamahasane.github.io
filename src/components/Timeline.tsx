export interface TimelineEntry {
  period: string;
  title: string;
  subtitle?: string;
  description?: string;
}

interface TimelineProps {
  entries: TimelineEntry[];
}

export default function Timeline({ entries }: TimelineProps) {
  return (
    <ol className="space-y-8 border-l border-border pl-6">
      {entries.map((entry, i) => (
        <li key={`${entry.title}-${i}`} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
          />
          <p className="text-sm text-muted">{entry.period}</p>
          <h3 className="font-serif text-base font-semibold text-foreground">
            {entry.title}
          </h3>
          {entry.subtitle && (
            <p className="text-sm text-muted">{entry.subtitle}</p>
          )}
          {entry.description && (
            <p className="mt-1 text-sm leading-relaxed text-foreground">
              {entry.description}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}
