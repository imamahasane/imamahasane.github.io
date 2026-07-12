import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import Section from "@/components/Section";
import { mdxComponents } from "@/components/mdx";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import "katex/dist/katex.min.css";

interface PageParams {
  slug: string;
}

export function generateStaticParams(): PageParams[] {
  return getPostSlugs({ includeDrafts: true }).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getPostBySlug(slug);
    return { title: meta.title, description: meta.summary };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content } = post;

  return (
    <Section width="prose" className="pt-16 md:pt-24">
      {meta.draft && (
        <p className="mb-6 rounded-md border border-border bg-accent-soft px-4 py-2 text-sm text-accent">
          Draft — not yet published.
        </p>
      )}
      <h1 className="font-serif text-3xl font-semibold text-foreground">
        {meta.title}
      </h1>
      <p className="mt-2 text-sm text-muted">
        {meta.date} · {meta.readingTime}
      </p>
      <div className="mt-8">
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm, remarkMath],
              rehypePlugins: [rehypeKatex, rehypePrettyCode as never],
            },
          }}
        />
      </div>
    </Section>
  );
}
