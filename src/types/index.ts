export interface Publication {
  id: string; // "C1", "R3", etc. — matches CV numbering
  title: string;
  authors: string[]; // full ordered author list, as printed
  isFirstAuthor: boolean;
  isCorrespondingAuthor?: boolean;
  venue: string; // "IJCNN 2026"
  venueType: "conference" | "journal";
  ranking?: string; // "CCF-C" | "CCF-B" | "EI" | "SCIE"
  status: "accepted" | "published" | "under-review";
  year: number;
  doi?: string;
  pdfUrl?: string; // omit if none exists — do not link a dead placeholder
  codeUrl?: string;
  bibtex: string;
  gloss: string; // one plain-English sentence, no jargon
}

export interface ResearchProject {
  slug: string;
  title: string;
  oneLiner: string;
  gloss: string; // plain-English "why this matters" sentence
  problem: string;
  method: string;
  contribution: string;
  results?: string; // only include real reported numbers
  status: "accepted" | "published" | "under-review";
  publicationId?: string; // FK into publications.ts
  technologies: string[];
  paperUrl?: string;
  codeUrl?: string; // omit, don't fake, if unreleased
}

export interface Project {
  slug: string;
  title: string;
  period: string;
  problem: string;
  approach: string;
  technology: string[];
  result: string;
  links: { label: string; url: string }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization?: string;
  date: string; // "Jun 2026"
  description?: string;
  category: "award" | "service" | "community";
  imageUrl?: string; // omit — falls back to a category icon badge
}

export interface TeachingItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  description?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon:
    | "github"
    | "linkedin"
    | "mail"
    | "graduation-cap"
    | "file-text"
    | "scholar"
    | "orcid"
    | "openreview"
    | "researchgate";
}

export interface Profile {
  name: string;
  tagline: string;
  email: string;
  secondaryEmail?: string;
  wechatId?: string;
  affiliation: string;
  location: string;
  social: SocialLink[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa?: string;
  thesis?: string;
  supervisor?: string;
}
