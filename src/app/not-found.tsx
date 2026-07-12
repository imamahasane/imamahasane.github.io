import Link from "next/link";
import Section from "@/components/Section";

export default function NotFound() {
  return (
    <Section width="prose" className="pt-24 text-center md:pt-32">
      <h1 className="font-serif text-3xl font-semibold text-foreground">
        Page not found
      </h1>
      <p className="mt-3 text-muted">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block text-accent underline underline-offset-4 hover:opacity-80"
      >
        Back to home
      </Link>
    </Section>
  );
}
