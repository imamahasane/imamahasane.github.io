import Image from "next/image";
import { Award, Users, Heart } from "lucide-react";
import type { AchievementItem } from "@/types";

const iconMap = {
  award: Award,
  service: Users,
  community: Heart,
};

interface AchievementCardProps {
  item: AchievementItem;
}

export default function AchievementCard({ item }: AchievementCardProps) {
  const Icon = iconMap[item.category];

  return (
    <article className="flex gap-4 rounded-lg border border-border bg-background p-5">
      <div
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent"
      >
        <Icon size={18} />
      </div>
      <div>
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h3 className="font-serif text-base font-semibold text-foreground">
            {item.title}
          </h3>
          <span className="text-sm text-muted">{item.date}</span>
        </div>
        {item.organization && (
          <p className="text-sm text-muted">{item.organization}</p>
        )}
        {item.description && (
          <p className="mt-1 text-sm leading-relaxed text-foreground">
            {item.description}
          </p>
        )}
        {item.imageUrl && (
          <a
            href={item.imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block w-48 overflow-hidden rounded-md border border-border transition-opacity hover:opacity-90"
          >
            <Image
              src={item.imageUrl}
              alt={`${item.title} certificate`}
              width={320}
              height={224}
              className="h-auto w-full object-cover"
            />
          </a>
        )}
      </div>
    </article>
  );
}
