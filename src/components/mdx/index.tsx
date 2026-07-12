import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-10 font-serif text-2xl font-semibold text-foreground"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 font-serif text-xl font-semibold text-foreground"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mt-4 leading-relaxed text-foreground" {...props} />
  ),
  a: (props) => (
    <a
      className="text-accent underline underline-offset-2 hover:opacity-80"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-foreground" {...props} />
  ),
  ol: (props) => (
    <ol
      className="mt-4 list-decimal space-y-2 pl-6 text-foreground"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="mt-4 border-l-2 border-accent pl-4 italic text-muted"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-accent-soft px-1.5 py-0.5 font-mono text-sm text-accent"
      {...props}
    />
  ),
};
