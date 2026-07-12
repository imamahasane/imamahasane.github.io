import { Mail, GraduationCap, FileText, IdCard, Network } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import type { SocialLink } from "@/types";
import { cn } from "@/lib/utils";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  "graduation-cap": GraduationCap,
  "file-text": FileText,
  scholar: GraduationCap,
  orcid: IdCard,
  openreview: FileText,
  researchgate: Network,
};

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export default function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-4", className)}>
      {links.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <li key={link.label}>
            <a
              href={link.url}
              target={link.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.url.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={link.label}
              className="text-muted transition-colors hover:text-accent"
            >
              <Icon size={20} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
