import { Fragment } from "react";
import Badge from "@/components/Badge";
import type { NewsItem } from "@/data/news";

const categoryLabel: Record<NewsItem["category"], string> = {
  paper: "Paper",
  talk: "Talk",
  recognition: "Recognition",
  service: "Service",
};

function renderText(text: string) {
  return text.split("**").map((chunk, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-foreground">
        {chunk}
      </strong>
    ) : (
      <Fragment key={i}>{chunk}</Fragment>
    ),
  );
}

interface NewsListProps {
  items: NewsItem[];
}

export default function NewsList({ items }: NewsListProps) {
  return (
    <ol className="divide-y divide-border border-y border-border">
      {items.map((item, i) => (
        <li key={i} className="grid gap-2 py-5 sm:grid-cols-[100px_1fr]">
          <p className="text-sm text-muted">{item.date}</p>
          <div>
            <Badge className="mb-2">{categoryLabel[item.category]}</Badge>
            <p className="leading-relaxed text-foreground">
              {renderText(item.text)}
            </p>
            {item.links && item.links.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {item.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge className="hover:opacity-80">{link.label}</Badge>
                  </a>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
