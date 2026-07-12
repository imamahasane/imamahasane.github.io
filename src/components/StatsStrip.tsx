interface Stat {
  value: string;
  label: string;
}

interface StatsStripProps {
  stats: Stat[];
  link?: { label: string; url: string };
}

export default function StatsStrip({ stats, link }: StatsStripProps) {
  return (
    <div>
      {link && (
        <div className="mb-3 flex justify-end">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent underline underline-offset-4 hover:opacity-80"
          >
            {link.label} &rarr;
          </a>
        </div>
      )}
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-1 bg-background px-4 py-5 text-center"
          >
            <dt className="order-2 text-xs uppercase tracking-wide text-muted">
              {stat.label}
            </dt>
            <dd className="order-1 font-serif text-2xl font-semibold text-accent">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
