import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import MotionSection from "@/components/MotionSection";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Research code and open-source projects, distinct from the flagship research described on the homepage.",
};

export default function ProjectsPage() {
  return (
    <>
      <Section width="prose" className="pb-8 pt-16 md:pt-24">
        <h1 className="font-serif text-3xl font-semibold text-foreground">
          Projects
        </h1>
        <p className="mt-3 text-muted">
          Research code and engineering work, distinct from the flagship
          projects described on the{" "}
          <Link
            href="/#flagship-projects"
            className="text-accent underline underline-offset-2"
          >
            homepage
          </Link>
          .
        </p>
      </Section>

      <Section width="wide" className="pt-0">
        <div className="space-y-6">
          {projects.map((project, i) => (
            <MotionSection key={project.slug} index={i}>
              <ProjectCard project={project} />
            </MotionSection>
          ))}
        </div>
      </Section>
    </>
  );
}
