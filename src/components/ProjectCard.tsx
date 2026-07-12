import type { Project } from "@/types";
import Badge from "@/components/Badge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-border bg-background p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-serif text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <span className="text-sm text-muted">{project.period}</span>
      </div>

      <dl className="mt-3 space-y-2 text-sm leading-relaxed">
        <div>
          <dt className="font-medium text-foreground">Problem</dt>
          <dd className="text-muted">{project.problem}</dd>
        </div>
        <div>
          <dt className="font-medium text-foreground">Approach</dt>
          <dd className="text-muted">{project.approach}</dd>
        </div>
        <div>
          <dt className="font-medium text-foreground">Result</dt>
          <dd className="text-muted">{project.result}</dd>
        </div>
      </dl>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technology.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>

      {project.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2 hover:opacity-80"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
