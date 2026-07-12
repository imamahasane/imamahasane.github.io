import type { Metadata } from "next";
import { Mail, GraduationCap, IdCard, FileText, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Section from "@/components/Section";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Md Imam Ahasan.",
};

function ContactRow({
  icon: Icon,
  label,
  href,
  text,
}: {
  icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;
  label?: string;
  href?: string;
  text: string;
}) {
  return (
    <li className="flex items-center gap-3">
      <Icon size={18} className="shrink-0 text-accent" aria-hidden={true} />
      <span>
        {href ? (
          <a
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="text-foreground underline underline-offset-2 hover:text-accent"
          >
            {text}
          </a>
        ) : (
          <span className="text-foreground">{text}</span>
        )}
        {label && <span className="ml-2 text-sm text-muted">({label})</span>}
      </span>
    </li>
  );
}

const academicIconMap = {
  scholar: GraduationCap,
  orcid: IdCard,
  openreview: FileText,
};

export default function ContactPage() {
  const academicProfiles = profile.social.filter(
    (s): s is typeof s & { icon: keyof typeof academicIconMap } =>
      s.icon in academicIconMap,
  );
  const socialProfiles = profile.social.filter(
    (s) => s.icon === "github" || s.icon === "linkedin",
  );

  return (
    <Section width="prose" className="pt-16 md:pt-24">
      <h1 className="font-serif text-3xl font-semibold text-foreground">
        Contact
      </h1>
      <p className="mt-3 text-muted">
        The fastest way to reach me is by email. I welcome inquiries from
        prospective advisors, collaborators, and researchers.
      </p>

      <h2 className="mt-10 font-serif text-lg font-semibold text-foreground">
        Email
      </h2>
      <ul className="mt-4 space-y-4">
        <ContactRow
          icon={Mail}
          href={`mailto:${profile.email}`}
          text={profile.email}
          label="Personal"
        />
        {profile.secondaryEmail && (
          <ContactRow
            icon={Mail}
            href={`mailto:${profile.secondaryEmail}`}
            text={profile.secondaryEmail}
            label="Chongqing University"
          />
        )}
      </ul>

      <h2 className="mt-10 font-serif text-lg font-semibold text-foreground">
        Academic Profiles
      </h2>
      <ul className="mt-4 space-y-4">
        {academicProfiles.map((s) => (
          <ContactRow
            key={s.label}
            icon={academicIconMap[s.icon]}
            href={s.url}
            text={s.label}
          />
        ))}
      </ul>

      <h2 className="mt-10 font-serif text-lg font-semibold text-foreground">
        Social
      </h2>
      <ul className="mt-4 space-y-4">
        {socialProfiles.map((s) => (
          <ContactRow
            key={s.label}
            icon={s.icon === "github" ? GithubIcon : LinkedinIcon}
            href={s.url}
            text={s.label}
          />
        ))}
        {profile.wechatId && (
          <ContactRow
            icon={MessageCircle}
            text={`WeChat: ${profile.wechatId}`}
          />
        )}
      </ul>
    </Section>
  );
}
