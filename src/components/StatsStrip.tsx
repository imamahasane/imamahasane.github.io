interface Stat {
  value: string;
  label: string;
}

interface StatsStripProps {
  stats: Stat[];
}

export default function StatsStrip({ stats }: StatsStripProps) {
  return (
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
  );
}
