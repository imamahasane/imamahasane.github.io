import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import MotionSection from "@/components/MotionSection";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description: "Research notes on diffusion models, medical imaging, and low-dose CT reconstruction.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section width="prose" className="pt-16 md:pt-24">
      <h1 className="font-serif text-3xl font-semibold text-foreground">
        Blog
      </h1>
      <p className="mt-3 text-muted">
        Research notes on diffusion models, medical imaging, and low-dose CT
        reconstruction.
      </p>

      {posts.length === 0 ? (
        <p className="mt-10 text-muted">
          No posts published yet — check back soon.
        </p>
      ) : (
        <ul className="mt-10 space-y-8">
          {posts.map((post, i) => (
            <MotionSection key={post.slug} index={i}>
              <li className="border-b border-border pb-8 last:border-0">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <h2 className="font-serif text-xl font-semibold text-foreground group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted">
                    {post.date} · {post.readingTime}
                  </p>
                  <p className="mt-2 leading-relaxed text-foreground">
                    {post.summary}
                  </p>
                </Link>
              </li>
            </MotionSection>
          ))}
        </ul>
      )}
    </Section>
  );
}
