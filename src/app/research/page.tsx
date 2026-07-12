import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import ResearchCard from "@/components/ResearchCard";
import MotionSection from "@/components/MotionSection";
import {
  researchInterests,
  researchStatement,
  forwardLookingDirection,
  flagshipProjects,
} from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Md Imam Ahasan's research as an AI and computer vision researcher working on medical image analysis, with a primary focus on physics-informed diffusion models for low-dose CT reconstruction.",
};

export default function ResearchPage() {
  return (
    <>
      <Section width="prose" className="pb-8 pt-16 md:pt-24">
        <h1 className="font-serif text-3xl font-semibold text-foreground">
          Research
        </h1>
        <ul className="mt-5 flex flex-wrap gap-2">
          {researchInterests.map((interest) => (
            <li key={interest}>
              <Badge>{interest}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-4 text-lg leading-relaxed text-foreground">
          <p>{researchStatement}</p>
          <p>{forwardLookingDirection}</p>
        </div>

        <figure className="mt-8">
          <Image
            src="/images/research-presentation.jpg"
            alt="Presenting GenDiff research at Chongqing University"
            width={1200}
            height={900}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-sm text-muted">
            Presenting GenDiff at Chongqing University, College of Computer
            Science.
          </figcaption>
        </figure>
      </Section>

      <Section width="wide" className="pt-0">
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
      </Section>
    </>
  );
}
