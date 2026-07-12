# Website Build Plan — Md Imam Ahasan, Academic Homepage

Prepared as your technical architect (senior software engineer) and research-positioning advisor (AI researcher perspective). This document is the single source of truth for building the site. Hand it to Claude Code in VS Code and work through it phase by phase — everything downstream (file structure, data schemas, page copy) is derived from your actual CV (`main.pdf`) and the standing instructions in `CLAUDE.md`. Nothing below is placeholder content unless explicitly labeled `[PLACEHOLDER]`.

---

## 1. Strategic Positioning (read this first)

You're applying to top PhD programs in the US and China with a genuinely strong record for someone finishing an M.Sc.: 11 papers in the pipeline, 5 already accepted or published (including a CCF-C conference paper with a real quantitative result — +1.20 dB PSNR over SOTA at 3.3× faster inference), 4 of those as first author, and an active international collaboration with KAIST. Most M.Sc. applicants to top programs don't have this. The site's job is to make that legible in under 30 seconds to a professor skimming it before deciding whether to reply to your email.

Three things this implies for design and content:

1. **Lead with the narrative, not the list.** Admissions committees and prospective advisors want a coherent research thread — "I work on physics-informed generative models for inverse problems in medical imaging" — before they want a bibliography. The homepage hero and a short "Research Statement" paragraph on the Research page should state that thread explicitly, then let the publication count back it up.
2. **First-author work must be visually distinct.** [C1] DACD, [R1] GenDiff, [R3] LightGAN-LD, [R4] the sinogram-encoded GAN paper — these four are your strongest evidence of independent research capability. They should be the ones featured on the homepage and the top of Research; the rest support but don't lead.
3. **Signal a forward-looking direction, not just a retrospective.** Committees fund people, not CVs. Add one short paragraph (you write it, I'll scaffold the section) on where this research program goes next — e.g., extending physics-informed diffusion beyond CT to other inverse-imaging modalities, or formal guarantees for generative reconstruction. This is the one piece of content I can't write for you honestly; I've left a clearly marked scaffold for it below.

One privacy note as your engineer, not your advisor: your CV lists your referees' direct phone numbers and personal emails. I'd recommend the public CV page say "References available upon request" instead of publishing Dr. Yang's and Dr. Khan's personal contact details — professors generally expect this, and it protects them from unsolicited contact. Your own email being public (per your decision) is a different, and normal, choice for an applicant.

---

## 2. Decisions already locked in

- Images: no profile photo or certificate images exist yet. Build with clean typographic/initials placeholders now; swap in real files later at `public/images/profile.jpg` and `public/images/achievements/*.jpg`.
- Social: GitHub `github.com/imamahasane`, LinkedIn `linkedin.com/in/imamahasane`, email shown publicly on Contact page.
- Repo: `git init` + initial commit once the project is scaffolded (Phase 0 below).

Open items I need a decision on before/while building (flagged again in §11).

---

## 3. Tech Stack & Rationale

| Concern | Choice | Why |
|---|---|---|
| Framework | Next.js 15, App Router, React Server Components | Static-first academic pages render as RSC by default (fast, no hydration cost); only interactive widgets (mobile nav, BibTeX copy button, theme toggle, motion wrappers) become `"use client"`. Native `generateMetadata`, `sitemap.ts`, `robots.ts`, dynamic OG images. |
| Language | TypeScript, strict mode | Your `src/data/*.ts` files are the CMS. Typed interfaces catch a malformed publication entry at compile time instead of a broken page in production. |
| Styling | Tailwind CSS v4 | Fast to build a disciplined design system with; avoids ad-hoc CSS drift across 9 pages. |
| Motion | Framer Motion, used sparingly | Fade + 8px translate-in on scroll for section reveals and list stagger only. No page-transition gimmicks, no parallax. Respect `prefers-reduced-motion`. |
| Content (blog) | MDX via `next-mdx-remote` + `gray-matter`, not Contentlayer | Contentlayer's maintenance status is uncertain; the simpler `fs` + frontmatter approach has no framework lock-in and is trivial to debug. |
| Math rendering | `remark-math` + `rehype-katex` | You'll want inline/block equations in diffusion-model blog posts. |
| Code highlighting | `rehype-pretty-code` (Shiki) | For any code snippets in blog posts. |
| Icons | `lucide-react` | Consistent line-icon set for achievement badges, social links, nav — no custom SVG maintenance. |
| Fonts | `next/font/google`, self-hosted at build time | Zero CLS, no third-party font CDN request. |
| Deployment | Vercel | Zero-config for Next.js SSR/ISR; free tier is sufficient for a personal academic site. (GitHub Pages would force a static export and lose dynamic sitemap/OG generation — not worth it here.) |
| Analytics (optional, Phase 6) | Vercel Analytics or Plausible | Avoid a heavy Google Analytics script on a page committees will judge for speed. |

---

## 4. Design System

**Typography.** Display/headings: `Source Serif 4` (academic, authoritative, distinct from generic sans-only developer portfolios). Body/UI: `Inter`. Monospace (BibTeX blocks, code): `IBM Plex Mono`.

**Color tokens** (Tailwind theme, light mode primary; dark mode via `dark:` variants, optional toggle):

```
--background:      #FAF9F6   (warm off-white, not pure white)
--foreground:       #1C1C1C   (near-black, not pure black)
--muted:            #6B6B6B
--border:           #E4E1D8
--accent:           #1E3A5F   (deep academic navy — links, tags, active nav)
--accent-soft:      #EFF3F7   (accent tint for badges/backgrounds)
```

One accent color only. No gradients. No card shadows beyond a 1px border + 2–4px soft shadow on hover.

**Layout.** Reading columns (Research, Blog, CV prose) capped at `max-w-3xl` (~760px). Card grids (Publications, Achievements) at `max-w-6xl`. Consistent vertical rhythm: `py-24` between major sections, `py-4`/`py-6` inside cards.

**Motion.** `whileInView` fade + translate-y(8px), `duration: 0.4`, staggered `0.05s` per list item. No animation on first paint (avoid layout jank on load). Wrap all motion in a check for `prefers-reduced-motion`.

**Dark mode.** Recommended (low cost with Tailwind `dark:` classes, expected on modern research sites) — add as a Phase 1 stretch item, not a blocker.

---

## 5. Information Architecture

```
/                  Home
/research          Research (interests + 3 flagship projects + research statement)
/publications      Publications (all 11, grouped by year, BibTeX, DOI)
/projects          Projects (research code + the DIU OCR thesis project)
/teaching          Teaching (lecturer role, teaching interests)
/achievements      Achievements (timeline)
/blog              Blog / Research Notes index
/blog/[slug]        Individual post (MDX)
/cv                CV (download + academic timeline)
/contact           Contact
```

---

## 6. Project File Structure

```
emamahasane-website/
├── CLAUDE.md                     (existing — project instructions)
├── PLAN.md                       (this file)
├── src/
│   ├── app/
│   │   ├── layout.tsx            (root layout, fonts, metadata, Navbar/Footer)
│   │   ├── page.tsx               (Home)
│   │   ├── research/page.tsx
│   │   ├── publications/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── teaching/page.tsx
│   │   ├── achievements/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── blog/[slug]/page.tsx
│   │   ├── cv/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Section.tsx            (layout primitive: max-width + vertical rhythm)
│   │   ├── ResearchCard.tsx
│   │   ├── PublicationCard.tsx
│   │   ├── BibtexButton.tsx       ("use client" — copy to clipboard)
│   │   ├── Timeline.tsx
│   │   ├── AchievementCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SocialLinks.tsx
│   │   ├── AvatarPlaceholder.tsx  (initials "IA" — swappable for real photo)
│   │   ├── MotionSection.tsx      ("use client" — framer-motion wrapper)
│   │   └── mdx/                   (custom MDX component overrides: Callout, Figure, etc.)
│   ├── data/
│   │   ├── profile.ts
│   │   ├── publications.ts
│   │   ├── research.ts
│   │   ├── projects.ts
│   │   ├── achievements.ts
│   │   └── teaching.ts
│   ├── types/
│   │   └── index.ts               (all TS interfaces, see §7)
│   └── lib/
│       ├── mdx.ts                 (fs + gray-matter blog loader)
│       └── bibtex.ts              (generate BibTeX string from a Publication)
├── content/
│   └── blog/
│       ├── dacd-paper-explained.mdx
│       ├── cold-diffusion-primer.mdx
│       └── ldct-reconstruction-reflections.mdx
├── public/
│   ├── cv/Md_Imam_Ahasan_CV.pdf   (your existing main.pdf, renamed)
│   └── images/
│       ├── profile.jpg            [PLACEHOLDER until real photo provided]
│       └── achievements/          [empty until certificate images provided]
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## 7. Data Layer — TypeScript Interfaces

```ts
// src/types/index.ts

export interface Publication {
  id: string;                    // "C1", "R3", etc. — matches your CV numbering
  title: string;
  authors: string[];             // full ordered author list, as printed
  isFirstAuthor: boolean;
  isCorrespondingAuthor?: boolean;
  venue: string;                 // "IJCNN 2026"
  venueType: "conference" | "journal";
  ranking?: string;              // "CCF-C" | "CCF-B" | "EI" | "SCIE"
  status: "accepted" | "published" | "under-review";
  year: number;
  doi?: string;
  pdfUrl?: string;               // omit if none exists — do not link a dead placeholder
  codeUrl?: string;
  bibtex: string;
}

export interface ResearchProject {
  slug: string;
  title: string;
  oneLiner: string;
  problem: string;
  method: string;
  contribution: string;
  results?: string;              // only include real reported numbers
  status: "accepted" | "published" | "under-review";
  publicationId?: string;        // FK into publications.ts
  technologies: string[];
  paperUrl?: string;
  codeUrl?: string;              // omit, don't fake, if unreleased
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
  date: string;                  // "Jun 2026"
  description?: string;
  category: "award" | "service" | "community";
  imageUrl?: string;             // omit — falls back to a category icon badge
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
  icon: string;                  // lucide icon name
}

export interface Profile {
  name: string;
  tagline: string;
  email: string;
  affiliation: string;
  location: string;
  social: SocialLink[];
}
```

---

## 8. Page-by-Page Content Specs

All facts below are pulled directly from `main.pdf`. Do not invent numbers, links, or claims beyond what's here — where the CV doesn't give a link or metric, leave the field absent rather than filling it with a placeholder URL.

### Home
- Hero headline: "Computer Science Researcher working on Physics-Informed Deep Learning and Medical AI."
- Sub-line: one sentence naming the thread — diffusion models and generative priors for inverse problems in low-dose CT reconstruction.
- Short academic intro paragraph (first person, e.g. "I investigate physics-consistent generative models for medical image reconstruction, with an emphasis on low-dose CT...") — draft this from the thesis title and RA bullet points; you should review and personalize the exact phrasing before publishing.
- Featured publications: the 4 first-author papers (C1, R1, R3, R4), rendered via `PublicationCard` in "compact" mode.
- Featured project: DACD (link to `/research#dacd`).
- Awards preview: CQU Outstanding International Graduates 2026.
- `SocialLinks` in the footer of the hero section.

### Research
Research interests (five tags): Medical Imaging, Diffusion Models, Computer Vision, Generative Models, Scientific Machine Learning.

**Research Statement** (scaffold — you write the final paragraph): one paragraph tying past work (physics-guided diffusion for LDCT) to a forward-looking direction. I've left `[YOUR RESEARCH STATEMENT HERE]` as a placeholder comment in `research.ts` — do not publish the page without filling this in; a missing or generic statement is worse than a slightly rough personal one.

Three flagship projects, each with problem / method / contribution / results / publication link, per §7's `ResearchProject` shape:

1. **DACD** — "Dose-Aware Cold Diffusion with Physics Consistency for Generalizable Low-Dose CT Reconstruction." Poisson-thinning cold diffusion model with physics consistency. Result: +1.20 dB PSNR over SOTA, 3.3× faster inference. IJCNN 2026, CCF-C, accepted.
2. **GenDiff** — "A Dose and Anatomy Aware Diffusion Model with Structural Prior Refinement for Low-Dose CT Reconstruction and Generalization." Dose-anatomy encoding + structural prior refinement for zero-shot generalization across unseen dose levels and anatomical domains. PeerJ Computer Science, SCIE, under review.
3. **LightGAN-LD** — "A Lightweight Generative Adversarial Network for Efficient Low-Dose CT Reconstruction with Sinogram Encoding and Edge-Aware Learning." Developed with Dr. Mohammad Azam Khan (KAIST). PeerJ Computer Science, SCIE, under review.

Do not add a fourth "featured" project beyond these three unless you want to surface [R4] (the sinogram-encoded real-time variant) as a distinct card — it's closely related to LightGAN-LD, so default is to mention it as an extension within that card rather than duplicate it.

### Publications
All 11 entries, grouped by year (2025, 2026), each rendered with: full author list (your name bolded), first-author badge where applicable, venue + ranking tag, status pill (Accepted / Published / Under Review), DOI link where one exists (only [C2] GeGLUNet has one: `10.1007/978-981-95-5631-1_35`), and a "Copy BibTeX" button generated from `lib/bibtex.ts`.

Entries (id → status → ranking): C1 accepted CCF-C, C2 published CCF-C (has DOI), C3 accepted EI, C4 accepted EI, J1 accepted SCIE, R1 under-review SCIE, R2 under-review CCF-B, R3 under-review SCIE, R4 under-review SCIE, R5 under-review SCIE, R6 under-review SCIE.

### Projects
This page is for research code and open-source contributions, distinct from the paper-centric Research page. Two honest entries given your CV:
1. The DACD / GenDiff / LightGAN-LD codebases — list as "code release in progress," link omitted until repos are public. Do not put a dead GitHub link.
2. **Gronthon** — your B.Sc. thesis: "Bangla PDF to Text Conversion Application," an end-to-end OCR pipeline for Bengali script digitization, DIU, supervised by Dr. Md Zahid Hasan. This is a real, describable software project distinct from the CT research line — good to show engineering breadth.

### Teaching
- Lecturer, ICT — Anupama International School and College, Dhaka, Bangladesh (Dec 2021 – Jun 2022).
- Teaching interests (you write 2–3 sentences): suggest Deep Learning, Computer Vision, Medical Imaging, Scientific Computing — consistent with your research focus.
- Optional: link out to relevant Blog posts as "teaching materials" once written.

### Achievements
Timeline, newest first:
- CQU Outstanding International Graduates 2026 — top 1% of international graduates (Jun 2026).
- 3rd Prize, "China in My Eyes" Photography Contest (Oct 2024).
- Finalist, Joy Bangla Youth Award — national recognition for social and community impact (Aug 2021).
- Co-Founder, Shopner Khoje Foundation, charitable organization (Feb 2017 – Present).

Also worth surfacing here (or in a secondary "Academic Service" section on the same page): peer reviewer for EAAI, Systems & Soft Computing, Journal of Agriculture and Food Research, PRCV 2025, IJCNN 2026; conference volunteer at 2018 ICPC Asia Dhaka Regional Contest, 6th Intl. Conf. on Electronic Engineering and Informatics 2024, IEEE Intl. Conf. on Electrical Energy Conversion Systems and Control 2025. This is exactly the kind of "service" evidence PhD committees like to see and it's currently unused outside the CV.

No certificate images exist yet — use a `lucide-react` icon per category (`award`, `camera`, `users`, `heart`) inside `AchievementCard` until real images are supplied.

### Blog / Research Notes
Seed with 3 posts, written by you (or drafted by Claude Code and reviewed/edited by you before publishing — do not publish unreviewed AI-drafted technical claims under your name):
1. A walkthrough of the DACD paper's core idea (Poisson-thinning cold diffusion).
2. A primer on cold diffusion vs. standard DDPM.
3. A reflection on low-dose CT reconstruction as an inverse problem.

### CV
- Prominent "Download CV" button → `/cv/Md_Imam_Ahasan_CV.pdf`.
- Academic timeline built from `research.ts`/`teaching.ts`/`achievements.ts` (education, RA positions, teaching, awards, in chronological order).
- References: "Available upon request" rather than publishing Dr. Yang's and Dr. Khan's personal contact info (see §1 privacy note).

### Contact
- Email: `emamahasane@gmail.com` (shown publicly per your decision).
- GitHub: `github.com/imamahasane`.
- LinkedIn: `linkedin.com/in/imamahasane`.
- Google Scholar: `[PLACEHOLDER]` — link to be added once your profile exists.
- ORCID: `[PLACEHOLDER]` — same.
- Recommend omitting the personal phone number from the public page even though it's on your CV PDF.

---

## 9. SEO & Structured Data

- `app/layout.tsx`: title "Md Imam Ahasan | Computer Science Researcher", meta description as specified in `CLAUDE.md`, OpenGraph + Twitter card metadata.
- `app/sitemap.ts` and `app/robots.ts`, auto-generated from the route list.
- JSON-LD structured data: `Person` schema on the homepage (name, affiliation, sameAs → GitHub/LinkedIn/Scholar), and `ScholarlyArticle` schema per publication on the Publications page — this is what lets Google (and eventually Google Scholar—adjacent tools) parse your output correctly. High value, low cost, and rarely done on personal academic sites, so it's a differentiator.
- Dynamic OG image for the site root and for `/publications` via `@vercel/og` (optional, Phase 6 stretch).

---

## 10. Accessibility & Performance Targets

- Lighthouse: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100 (all four, mobile and desktop).
- Semantic landmarks (`<nav>`, `<main>`, `<footer>`), skip-to-content link, visible focus rings, WCAG AA contrast on the navy-on-cream palette (verify with a contrast checker before finalizing the exact hex values).
- All images via `next/image` with meaningful `alt` text; icon-only buttons get `aria-label`.
- `prefers-reduced-motion` respected everywhere Framer Motion is used.
- Test breakpoints: 375px, 768px, 1024px, 1440px.

---

## 11. Build Roadmap (phases for Claude Code)

**Phase 0 — Scaffolding.** `create-next-app` (TS, Tailwind, App Router, ESLint), install deps (`framer-motion`, `gray-matter`, `next-mdx-remote`, `remark-gfm`, `remark-math`, `rehype-katex`, `rehype-pretty-code`, `reading-time`, `lucide-react`, `clsx`, `tailwind-merge`). `git init`, initial commit, `.gitignore`.

**Phase 1 — Design system.** Tailwind theme tokens (§4), fonts via `next/font`, base primitives (`Section`, `Container`, `Button`, `Badge`, `Card`), `Navbar` + `Footer`, `AvatarPlaceholder`, optional dark-mode toggle.

**Phase 2 — Data layer.** Author `src/types/index.ts` (§7), then `src/data/*.ts` populated from §8's content specs — this is where the CV content becomes code.

**Phase 3 — Core pages.** Home, Research, Publications (incl. `BibtexButton` client component and year grouping), Projects, Teaching, Achievements (`Timeline` component), Contact.

**Phase 4 — Blog/MDX.** `lib/mdx.ts` loader, 3 seed posts in `content/blog/`, blog index + `[slug]` route, MDX component overrides for math/code/callouts.

**Phase 5 — CV page + PDF asset.** Move `main.pdf` to `public/cv/Md_Imam_Ahasan_CV.pdf`, build the download button + academic timeline.

**Phase 6 — SEO, a11y, performance pass.** `sitemap.ts`, `robots.ts`, JSON-LD, Lighthouse pass against the targets in §10, fix contrast/alt-text/landmark gaps.

**Phase 7 — Deploy.** Push to GitHub, connect Vercel, verify production build, custom domain if you have one.

---

## 12. Open Items — needs your decision before or during the build

1. **Research statement paragraph** (§8, Research page) — needs your voice, not mine.
2. **Google Scholar and ORCID URLs** — currently placeholders; add once those profiles exist.
3. **Phone number on Contact/CV page** — my recommendation is to omit it; confirm if you'd rather include it.
4. **Referee contact info on CV page** — recommend "available upon request" instead of publishing Dr. Yang's / Dr. Khan's personal details; confirm.
5. **Profile photo and achievement images** — send whenever ready; drop into the exact paths in §6 and every component picks them up automatically, no code changes needed.
6. **Blog posts** — I can draft the three seed posts from the paper content for you to review/edit, or you can write them yourself. Say which you'd prefer when you start that phase in Claude Code.

---

*End of plan. Open this file in the project root alongside `CLAUDE.md` when you start your Claude Code session — tell it to read both before scaffolding.*
