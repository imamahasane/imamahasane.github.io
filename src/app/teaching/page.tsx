import type { Metadata } from "next";
import Section from "@/components/Section";
import { teachingItems, teachingInterests } from "@/data/teaching";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "Teaching experience and interests in deep learning, computer vision, and medical imaging.",
};

export default function TeachingPage() {
  return (
    <Section width="prose" className="pt-16 md:pt-24">
      <h1 className="font-serif text-3xl font-semibold text-foreground">
        Teaching
      </h1>

      <p className="mt-6 leading-relaxed text-foreground">
        {teachingInterests}
      </p>

      <div className="mt-10 space-y-6">
        {teachingItems.map((item) => (
          <div
            key={`${item.role}-${item.organization}`}
            className="rounded-lg border border-border bg-background p-5"
          >
            <h2 className="font-serif text-lg font-semibold text-foreground">
              {item.role}
            </h2>
            <p className="text-sm text-muted">
              {item.organization} — {item.location}
            </p>
            <p className="text-sm text-muted">{item.period}</p>
            {item.description && (
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
