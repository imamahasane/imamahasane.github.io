import type { Metadata } from "next";
import Section from "@/components/Section";
import PublicationCard from "@/components/PublicationCard";
import MotionSection from "@/components/MotionSection";
import { publications } from "@/data/publications";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Peer-reviewed conference and journal publications on medical imaging, diffusion models, and computer vision.",
};

const years = Array.from(new Set(publications.map((p) => p.year))).sort(
  (a, b) => b - a,
);

const scholarlyArticlesJsonLd = publications.map((p) => ({
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: p.title,
  author: p.authors.map((name) => ({ "@type": "Person", name })),
  ...(p.doi && { sameAs: `https://doi.org/${p.doi}` }),
  datePublished: String(p.year),
  publisher: p.venue,
  creativeWorkStatus:
    p.status === "under-review" ? "Under Review" : "Published",
}));

export default function PublicationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(scholarlyArticlesJsonLd),
        }}
      />
      <Section width="prose" className="pb-8 pt-16 md:pt-24">
        <h1 className="font-serif text-3xl font-semibold text-foreground">
          Publications
        </h1>
        <p className="mt-3 text-muted">
          {publications.length} peer-reviewed and under-review works.
          First-author papers are marked. Full author list as printed;{" "}
          <strong className="text-foreground">{profile.name}</strong>{" "}
          bolded throughout.
        </p>
      </Section>

      {years.map((year) => (
        <Section key={year} width="wide" className="pt-0">
          <MotionSection>
            <h2 className="mb-6 font-serif text-2xl font-semibold text-foreground">
              {year}
            </h2>
          </MotionSection>
          <div className="grid gap-5 md:grid-cols-2">
            {publications
              .filter((p) => p.year === year)
              .map((p, i) => (
                <MotionSection key={p.id} index={i}>
                  <PublicationCard publication={p} />
                </MotionSection>
              ))}
          </div>
        </Section>
      ))}
    </>
  );
}
