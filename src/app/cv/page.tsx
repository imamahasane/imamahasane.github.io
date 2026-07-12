import type { Metadata } from "next";
import { Download } from "lucide-react";
import Section from "@/components/Section";
import Timeline, { type TimelineEntry } from "@/components/Timeline";
import { education, researchExperience } from "@/data/research";
import { teachingItems } from "@/data/teaching";
import { achievements } from "@/data/achievements";

export const metadata: Metadata = {
  title: "CV",
  description: "Academic timeline and downloadable CV for Md Imam Ahasan.",
};

function startYear(period: string): number {
  const match = period.match(/\d{4}/);
  return match ? parseInt(match[0], 10) : 0;
}

const timelineEntries: TimelineEntry[] = [
  ...education.map((e) => ({
    period: e.period,
    title: `${e.degree} — ${e.institution}`,
    subtitle: e.location,
    description: [
      e.gpa && `GPA: ${e.gpa}`,
      e.thesis && `Thesis: "${e.thesis}"`,
      e.supervisor && `Supervisor: ${e.supervisor}`,
    ]
      .filter(Boolean)
      .join(" — "),
  })),
  ...researchExperience.map((r) => ({
    period: r.period,
    title: r.role,
    subtitle: `${r.organization} — ${r.location}`,
    description: r.description,
  })),
  ...teachingItems.map((t) => ({
    period: t.period,
    title: t.role,
    subtitle: `${t.organization} — ${t.location}`,
    description: t.description,
  })),
  ...achievements
    .filter((a) => a.category !== "service")
    .map((a) => ({
      period: a.date,
      title: a.title,
      subtitle: a.organization,
      description: a.description,
    })),
].sort((a, b) => startYear(b.period) - startYear(a.period));

export default function CvPage() {
  return (
    <Section width="prose" className="pt-16 md:pt-24">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-serif text-3xl font-semibold text-foreground">
          CV
        </h1>
        <a
          href="/cv/Md_Imam_Ahasan_CV.pdf"
          className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          download
        >
          <Download size={16} aria-hidden="true" />
          Download CV
        </a>
      </div>

      <p className="mt-4 text-muted">
        A browsable summary below; download the PDF for the full,
        application-ready version.
      </p>

      <div className="mt-10">
        <Timeline entries={timelineEntries} />
      </div>

      <div className="mt-12 rounded-lg border border-border bg-accent-soft p-5 text-sm text-foreground">
        <p className="font-medium">References</p>
        <p className="mt-1 text-muted">Available upon request.</p>
      </div>
    </Section>
  );
}
