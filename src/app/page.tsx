import Link from "next/link";
import { profile } from "@/data/profile";
import { firstAuthorPublications, publications } from "@/data/publications";
import Section from "@/components/Section";
import PublicationCard from "@/components/PublicationCard";
import SocialLinks from "@/components/SocialLinks";
import AvatarPlaceholder from "@/components/AvatarPlaceholder";
import MotionSection from "@/components/MotionSection";
import StatsStrip from "@/components/StatsStrip";
import NewsList from "@/components/NewsList";
import ResearchCard from "@/components/ResearchCard";
import { flagshipProjects, forwardLookingDirection } from "@/data/research";
import { newsItems } from "@/data/news";

const stats = [
  { value: String(publications.length), label: "Publications" },
  { value: String(firstAuthorPublications.length), label: "First-Author" },
  { value: "Top 1%", label: "International Cohort" },
  { value: "KAIST", label: "Collaboration" },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: "Imam Ahasan",
  jobTitle: "AI and Computer Vision Researcher / PhD Applicant",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: profile.affiliation,
  },
  email: `mailto:${profile.email}`,
  sameAs: profile.social
    .filter((s) => s.icon !== "mail")
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
              My primary focus is physics-informed diffusion models and
              generative priors for medical image reconstruction —
              particularly low-dose CT — alongside broader work in visual
              recognition and scene understanding.
            </p>
            <p className="mt-6 max-w-2xl leading-relaxed text-foreground">
              I am an AI and computer vision researcher working across
              medical image analysis and visual perception. My thesis
              develops physics-consistent diffusion and adversarial models
              that reconstruct diagnostic-quality CT images from
              reduced-radiation scans, and my broader research spans retinal
              and dermatological image segmentation and visual perception
              for autonomous systems. I am completing an M.Sc. in Computer
              Science at Chongqing University, where this research forms the
              basis of my thesis.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="#flagship-projects"
                className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Read my research
              </Link>
              <a
                href="/cv/Md_Imam_Ahasan_CV.pdf"
                download
                className="text-sm font-medium text-accent underline underline-offset-4 hover:opacity-80"
              >
                Download CV
              </a>
            </div>
            <SocialLinks links={profile.social} className="mt-8" />
          </div>
          <AvatarPlaceholder
            src="/images/profile.jpg"
            size={140}
            className="hidden md:block"
          />
        </div>
      </Section>

      <Section width="wide" className="py-0">
        <MotionSection>
          <StatsStrip stats={stats} />
        </MotionSection>
      </Section>

      <Section width="prose">
        <MotionSection>
          <h2 className="mb-6 font-serif text-2xl font-semibold text-foreground">
            News
          </h2>
          <NewsList items={newsItems} />
        </MotionSection>
      </Section>

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

      <Section width="wide" className="pt-0" id="flagship-projects">
        <MotionSection>
          <h2 className="mb-8 font-serif text-2xl font-semibold text-foreground">
            Flagship Projects
          </h2>
        </MotionSection>
        <div className="space-y-6">
          {flagshipProjects.map((project, i) => (
            <MotionSection key={project.slug} index={i}>
              <ResearchCard project={project} />
            </MotionSection>
          ))}
        </div>
        <MotionSection>
          <p className="mt-8 max-w-2xl leading-relaxed text-muted">
            {forwardLookingDirection}
          </p>
        </MotionSection>
      </Section>

      <Section width="prose">
        <MotionSection>
          <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
            Biography
          </h2>
          <p className="leading-relaxed text-foreground">
            I was born and raised in Bangladesh, where I completed my B.Sc.
            in Computer Science and Engineering at Daffodil International
            University in 2021. As a graduate research assistant there, I
            worked on early deep learning pipelines for medical image
            analysis — retinal vessel segmentation and skin lesion
            classification — under Dr. Md Zahid Hasan, and briefly taught
            ICT at Anupama International School and College in Dhaka. In
            2023, I moved to Chongqing, China, to pursue an M.Sc. in
            Computer Science at Chongqing University, where my research
            shifted toward physics-informed generative models for low-dose
            CT reconstruction under Dr. Guangchao Yang. Outside the lab, I
            co-founded Shopner Khoje, a charitable organization, in 2017,
            and in 2026 I was recognized as one of Chongqing
            University&rsquo;s top 1% international graduates.
          </p>
        </MotionSection>
      </Section>

      <Section width="prose" className="pt-0">
        <MotionSection>
          <h2 className="mb-3 font-serif text-2xl font-semibold text-foreground">
            Get in Touch
          </h2>
          <p className="text-muted">
            I welcome inquiries from prospective advisors, collaborators,
            and researchers.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="text-accent underline underline-offset-2 hover:opacity-80"
            >
              {profile.email}
            </a>
            {profile.secondaryEmail && (
              <a
                href={`mailto:${profile.secondaryEmail}`}
                className="text-accent underline underline-offset-2 hover:opacity-80"
              >
                {profile.secondaryEmail}{" "}
                <span className="text-muted">(Chongqing University)</span>
              </a>
            )}
          </div>
        </MotionSection>
      </Section>
    </>
  );
}
