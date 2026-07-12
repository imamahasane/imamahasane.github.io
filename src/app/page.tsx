import Link from "next/link";
import { profile } from "@/data/profile";
import { firstAuthorPublications } from "@/data/publications";
import { achievements } from "@/data/achievements";
import Section from "@/components/Section";
import PublicationCard from "@/components/PublicationCard";
import SocialLinks from "@/components/SocialLinks";
import AvatarPlaceholder from "@/components/AvatarPlaceholder";
import MotionSection from "@/components/MotionSection";

const topAward = achievements.find((a) => a.id === "cqu-outstanding-graduate");

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Computer Science Researcher / PhD Applicant",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: profile.affiliation,
  },
  email: `mailto:${profile.email}`,
  sameAs: profile.social
    .filter((s) => s.icon === "github" || s.icon === "linkedin")
    .map((s) => s.url),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <Section width="wide" className="pb-8 pt-16 md:pt-24">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-accent">
              PhD Applicant · Chongqing University
            </p>
            <h1 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              {profile.tagline}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              I work on diffusion models and generative priors for inverse
              problems in medical imaging, with a focus on low-dose CT
              reconstruction.
            </p>
            <p className="mt-6 max-w-2xl leading-relaxed text-foreground">
              I investigate physics-consistent generative models for medical
              image reconstruction, with an emphasis on low-dose computed
              tomography. My work combines diffusion models and generative
              adversarial networks with explicit physical constraints from
              the CT measurement process, aiming to make dose reduction and
              image fidelity less of a trade-off. I am completing an M.Sc.
              in Computer Science at Chongqing University, where this
              research forms the basis of my thesis.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/research"
                className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Read my research
              </Link>
              <Link
                href="/cv"
                className="text-sm font-medium text-accent underline underline-offset-4 hover:opacity-80"
              >
                Download CV
              </Link>
            </div>
            <SocialLinks links={profile.social} className="mt-8" />
          </div>
          <AvatarPlaceholder size={140} className="hidden md:block" />
        </div>
      </Section>

      {topAward && (
        <Section width="wide" className="py-0">
          <p className="rounded-md border border-border bg-accent-soft px-4 py-3 text-sm text-foreground">
            <span className="font-medium text-accent">{topAward.title}</span>
            {" — "}
            {topAward.description}
          </p>
        </Section>
      )}

      <Section width="wide">
        <MotionSection>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Featured Publications
            </h2>
            <Link
              href="/publications"
              className="text-sm text-accent underline underline-offset-4 hover:opacity-80"
            >
              View all publications
            </Link>
          </div>
        </MotionSection>
        <div className="grid gap-5 md:grid-cols-2">
          {firstAuthorPublications.map((pub, i) => (
            <MotionSection key={pub.id} index={i}>
              <PublicationCard publication={pub} compact />
            </MotionSection>
          ))}
        </div>
      </Section>

      <Section width="wide" className="pt-0">
        <MotionSection>
          <div className="rounded-lg border border-border bg-accent-soft p-6 md:p-8">
            <p className="text-sm font-medium uppercase tracking-wide text-accent">
              Featured Project
            </p>
            <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">
              DACD: Dose-Aware Cold Diffusion with Physics Consistency
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground">
              A Poisson-thinning cold diffusion model with physics
              consistency for low-dose CT reconstruction — +1.20 dB PSNR
              over SOTA, 3.3× faster inference. IJCNN 2026, CCF-C, accepted.
            </p>
            <Link
              href="/research#dacd"
              className="mt-4 inline-block text-sm font-medium text-accent underline underline-offset-4 hover:opacity-80"
            >
              Read more
            </Link>
          </div>
        </MotionSection>
      </Section>
    </>
  );
}
