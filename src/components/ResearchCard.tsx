import type { ResearchProject } from "@/types";
import { publications } from "@/data/publications";
import Badge from "@/components/Badge";

const statusLabel: Record<ResearchProject["status"], string> = {
  accepted: "Accepted",
  published: "Published",
  "under-review": "Under Review",
};

interface ResearchCardProps {
  project: ResearchProject;
}

export default function ResearchCard({ project }: ResearchCardProps) {
  const publication = project.publicationId
    ? publications.find((p) => p.id === project.publicationId)
    : undefined;

  return (
    <article
      id={project.slug}
      className="scroll-mt-24 rounded-lg border border-border bg-background p-6"
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <Badge variant="solid">First Author</Badge>
        {publication?.ranking && <Badge>{publication.ranking}</Badge>}
        <Badge>{statusLabel[project.status]}</Badge>
      </div>

      <h3 className="font-serif text-xl font-semibold leading-snug text-foreground">
        {project.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-muted">
        {project.gloss}
      </p>

      {project.results && (
        <p className="mt-3 font-mono text-sm text-accent">
          {project.results}
        </p>
      )}

      <dl className="mt-4 space-y-3 text-sm leading-relaxed">
        <div>
          <dt className="font-medium text-foreground">Problem</dt>
          <dd className="text-muted">{project.problem}</dd>
        </div>
        <div>
          <dt className="font-medium text-foreground">Method</dt>
          <dd className="text-muted">{project.method}</dd>
        </div>
        <div>
          <dt className="font-medium text-foreground">Contribution</dt>
          <dd className="text-muted">{project.contribution}</dd>
        </div>
      </dl>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>

      {publication && (
        <p className="mt-4 text-sm text-muted">
          {publication.venue}
          {publication.doi && (
            <>
              {" · "}
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 hover:opacity-80"
              >
                DOI
              </a>
            </>
          )}
        </p>
      )}
    </article>
  );
}
