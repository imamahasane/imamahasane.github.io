import type { Publication } from "@/types";
import Badge from "@/components/Badge";
import BibtexButton from "@/components/BibtexButton";

const statusLabel: Record<Publication["status"], string> = {
  accepted: "Accepted",
  published: "Published",
  "under-review": "Under Review",
};

function AuthorList({ authors }: { authors: string[] }) {
  return (
    <p className="text-sm text-muted">
      {authors.map((author, i) => (
        <span key={author}>
          {author === "Md Imam Ahasan" ? (
            <strong className="font-semibold text-foreground">
              {author}
            </strong>
          ) : (
            author
          )}
          {i < authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  );
}

interface PublicationCardProps {
  publication: Publication;
  compact?: boolean;
}

export default function PublicationCard({
  publication,
  compact = false,
}: PublicationCardProps) {
  const p = publication;

  return (
    <article className="rounded-lg border border-border bg-background p-5 transition-shadow hover:shadow-sm">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="font-mono text-xs text-muted">[{p.id}]</span>
        {p.isFirstAuthor && <Badge variant="solid">First Author</Badge>}
        {p.ranking && <Badge>{p.ranking}</Badge>}
        <Badge>{statusLabel[p.status]}</Badge>
      </div>

      <h3 className="font-serif text-lg font-semibold leading-snug text-foreground">
        {p.title}
      </h3>

      <div className="mt-1">
        <AuthorList authors={p.authors} />
      </div>

      <p className="mt-1 text-sm text-muted">{p.venue}</p>

      {!compact && (
        <p className="mt-3 text-sm leading-relaxed text-foreground">
          {p.gloss}
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
        {p.doi && (
          <a
            href={`https://doi.org/${p.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2 hover:opacity-80"
          >
            DOI
          </a>
        )}
        {p.pdfUrl && (
          <a
            href={p.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2 hover:opacity-80"
          >
            PDF
          </a>
        )}
        {p.codeUrl && (
          <a
            href={p.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2 hover:opacity-80"
          >
            Code
          </a>
        )}
        <BibtexButton bibtex={p.bibtex} />
      </div>
    </article>
  );
}
