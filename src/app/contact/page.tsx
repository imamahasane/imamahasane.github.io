import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Section from "@/components/Section";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Md Imam Ahasan.",
};

export default function ContactPage() {
  return (
    <Section width="prose" className="pt-16 md:pt-24">
      <h1 className="font-serif text-3xl font-semibold text-foreground">
        Contact
      </h1>
      <p className="mt-3 text-muted">
        The fastest way to reach me is by email. I welcome inquiries from
        prospective advisors, collaborators, and researchers.
      </p>

      <ul className="mt-8 space-y-4">
        <li className="flex items-center gap-3">
          <Mail size={18} className="text-accent" aria-hidden="true" />
          <a
            href={`mailto:${profile.email}`}
            className="text-foreground underline underline-offset-2 hover:text-accent"
          >
            {profile.email}
          </a>
        </li>
        {profile.social
          .filter((s) => s.icon === "github" || s.icon === "linkedin")
          .map((s) => {
            const Icon = s.icon === "github" ? GithubIcon : LinkedinIcon;
            return (
              <li key={s.label} className="flex items-center gap-3">
                <Icon size={18} className="text-accent" aria-hidden="true" />
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-2 hover:text-accent"
                >
                  {s.label}
                </a>
              </li>
            );
          })}
        <li className="flex items-center gap-3 text-muted">
          <span className="inline-block w-[18px]" aria-hidden="true" />
          Google Scholar and ORCID — coming soon
        </li>
      </ul>
    </Section>
  );
}
