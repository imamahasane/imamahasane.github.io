# PhD Admissions Website Strategy — Md Imam Ahasan

Companion to [PLAN.md](PLAN.md) (which already locks in the technical build: file structure, data schemas, page-by-page content specs, SEO/a11y targets). This document is the admissions-strategy layer on top of that: how to prioritize, what to write, how to get found, and how the site fits into the rest of your application. Read both before you touch code.

Advisor framing for this document: what actually moves the needle for a professor deciding whether to reply to your cold email or flag your application in committee — not generic "best practices."

---

## 1. Information Architecture — priority, not just a page list

CLAUDE.md already fixes the required pages: Home, Research, Publications, Projects, Teaching, Achievements, Blog, CV, Contact. Don't add or remove pages. What matters is what gets attention on each one, because a committee member gives you 20–30 seconds on first pass and only goes deeper if that first pass earns it.

| Priority | Page | What they're actually checking |
|---|---|---|
| P0 | Home | Is there a coherent research thread? (30-second test) |
| P0 | Research | Do the flagship projects show independent contribution, not just "helped with"? |
| P0 | CV | Does the timeline and pedigree match what the SoP claims? |
| P1 | Publications | Is the first-author work legible at a glance? Venue quality? |
| P1 | Contact | Is there a low-friction way to reply (not just a form)? |
| P2 | Projects | Engineering breadth beyond the paper pipeline |
| P2 | Achievements | Service/community signal — reviewed here, not skimmed on Home |
| P3 | Teaching | Only decisive for teaching-heavy PhD programs or TA-funded offers |
| P3 | Blog | Read only after interest is already established — it's a tie-breaker, not a hook |

Practical implication: put your engineering effort in the order above. If you're short on time before a deadline, Blog and Teaching are the pages you can ship thin or late — Home/Research/CV cannot be.

**Above-the-fold rule per page:** every P0/P1 page must answer its core question without scrolling — the research thread on Home, the flagship-project one-liners on Research, name/degree/GPA/thesis on CV, first-author badge + venue on Publications.

---

## 2. Technical Stack — reaffirmed, with the "why it matters to a reviewer" layer

PLAN.md already selected Next.js + TypeScript + Tailwind + Framer Motion + MDX + Vercel (§3). That choice is correct for this audience — here's the reviewer-facing reasoning PLAN.md didn't spell out:

- **Speed is a credibility signal, not just a Lighthouse score.** A committee member clicking your link from their phone between meetings will bounce off anything slow. RSC-first Next.js + Vercel edge hosting means near-instant load — this is table stakes for "this person is technically competent," which matters extra for CS/ECE programs.
- **No client-side framework bloat = no unintentional "startup portfolio" signal.** Academic reviewers subconsciously read heavy animation/gradient-driven sites as less serious. Framer Motion used sparingly (per PLAN.md §4) keeps you on the right side of that line.
- **Structured data (JSON-LD) is the difference between "Google finds a PDF" and "Google finds a researcher."** Already scoped in PLAN.md §9 — don't cut it in a time crunch.

**Additions PLAN.md doesn't cover — do these outside the codebase:**

| Item | Action | Why |
|---|---|---|
| Domain | Buy `imamahasan.<tld>` or closest available exact-name match (.com preferred, .dev/.io acceptable for CS) | A name-matching domain outranks a `.vercel.app` URL in every "does this person Google well" test, and it's what goes on your CV/email signature |
| Google Scholar profile | Create and verify | This is the single highest-leverage discoverability action — see §5 |
| ORCID iD | Register (free, instant) | Increasingly requested on PhD application portals directly; also closes PLAN.md's open placeholder (§12 item 2) |
| DBLP entry | Check if one exists once C1/C2 index; request correction if author name is split/merged wrong | CS-specific; committees in CS/ECE check DBLP as often as Scholar |
| Analytics | Vercel Analytics (already selected) or Plausible — not Google Analytics | GA's script weight fights the speed goal above; you also don't need ad-network-grade analytics for this |
| Search Console | Verify the domain once live | Lets you see if committees are actually searching your name and finding you |

---

## 3. Content Strategy

This is where most academic sites fail — not on design, but on writing that doesn't survive a skeptical reader. Three rules, then per-page guidance.

### Rule 1 — numbers over adjectives
Never write "significant improvement" when you have +1.20 dB PSNR. Never write "extensive experience" when you have "11 papers, 5 accepted/published, 4 first-author, GPA top 1%." A reviewer trusts a number instantly and discounts an adjective instantly. Every project/publication description should have at least one quantified claim.

### Rule 2 — translate for a mixed-discipline reader
PhD committees include people outside your exact subfield (an ECE professor who does RF systems, a BME reviewer who's never touched a diffusion model). Every flagship project needs a one-sentence, jargon-free "why this matters" gloss *before* the technical description. Example pattern for DACD:

> **Plain-English gloss:** Lower-dose CT scans are safer for patients but produce noisier images; DACD reconstructs clean images from noisy low-dose scans more accurately and 3.3× faster than prior methods.
> **Technical description:** A Poisson-thinning cold diffusion model with physics consistency constraints, achieving +1.20 dB PSNR over SOTA... [continues as in PLAN.md §8]

Do this for all three flagship projects (DACD, GenDiff, LightGAN-LD). It costs one sentence per project and roughly doubles the audience that can evaluate your work on first read.

### Rule 3 — no throat-clearing
CLAUDE.md already bans "I love coding" / "I am passionate about" phrasing. Extend that rule to structural throat-clearing too: don't open the Research Statement with "In today's world, medical imaging is important..." Open with the claim. See template below.

### Research Statement — framework, not final text
PLAN.md correctly refuses to write this for you (§8, Research page: "a missing or generic statement is worse than a slightly rough personal one"). Use this fill-in structure to draft it fast, then edit into your own voice:

```
[1 sentence] I work on <specific research thread>, currently focused on
<the concrete problem — e.g. reconstructing diagnostic-quality CT images
from low-radiation-dose scans>.

[2–3 sentences] My thesis work developed <DACD/GenDiff — name only what's
load-bearing>, which <one concrete result, with the number>. The core
insight was <the one idea a reader should remember — physics-consistency
constraints / dose-anatomy conditioning / whatever is actually true>.

[1–2 sentences] This connects to a broader question I want to pursue in a
PhD: <the forward-looking direction — e.g. can physics-informed generative
priors give formal reconstruction guarantees, or generalize to other
inverse-imaging modalities beyond CT>. [This is the sentence PLAN.md
flagged as yours to write — it's the one thing that signals you have a
research program, not just a finished thesis.]
```

Same fill-in-then-edit approach applies to the "forward-looking direction" paragraph PLAN.md scaffolds in `research.ts` (§8) — don't let that placeholder ship blank.

### Publication cards — copy pattern
For each entry: **bold your name** → first-author badge if applicable → title → venue + ranking tag → status pill → one clause of "what it does" in plain language → Copy BibTeX. Lead with the metric in flagship-project cards (Research page), not in the compact Publications-page list — the list needs to scan fast, the flagship cards need to persuade.

### Project descriptions (Projects page, Gronthon + research code)
Problem → Approach → Result, three short lines max, technology tags below. Gronthon is your only non-CT-research artifact — don't undersell it; "end-to-end OCR pipeline for a low-resource script (Bengali)" is a genuinely distinct engineering signal (data scarcity, script-specific tokenization challenges) that a diffusion-model reviewer won't otherwise see evidence of.

---

## 4. Visual & UX Design

PLAN.md §4 already locks the design system (typography, color tokens, motion rules, dark mode). Two additions:

- **Credibility markers, used sparingly:** institution wordmarks/text mentions (Chongqing University, Daffodil International University) and the KAIST collaboration line (Dr. Mohammad Azam Khan) should appear near the top of Home/Research, not buried — committees pattern-match on institutional affiliation fast, and the KAIST co-authorship is a real signal of international research capability that's easy to miss if it's only inside a publication list.
- **What "startup landing page style" looks like, concretely, so it's easy to catch in review:** full-bleed hero images, animated gradient backgrounds, scroll-jacking, testimonial carousels, pricing-page-style cards, emoji in headings. If a component you're about to build resembles any of these, it's off-brand for this site — reroute to the plainer academic-CV aesthetic (dense text, generous whitespace, one accent color) PLAN.md specifies. Think "professor's personal homepage," not "SaaS product page."
- **Mobile is not optional-secondary here.** Committee members frequently do the first click from a phone (email on the go). Test at 375px before you consider a page done, not after.

---

## 5. SEO & Discoverability

The realistic goal: when a professor Googles "Md Imam Ahasan," your site, Scholar profile, and LinkedIn occupy the top results — consistently, with no name-collision noise from other people sharing variants of your name.

**Checklist, roughly in order of leverage:**

1. **Google Scholar profile** — by far the highest-leverage single action. Most professors check Scholar before or instead of a personal site for a specific reason: it shows citation trajectory and lets them see your papers indexed alongside co-authors they may already know (Yang, Khan). Claim it as soon as C1/C2 are indexable.
2. **Exact name consistency everywhere** — "Md Imam Ahasan" spelled identically on the site, CV, Scholar, ORCID, DBLP, LinkedIn, GitHub, and every co-authored paper's author list. Any variant (initials, reordering) fragments your search footprint across results instead of consolidating it.
3. **Custom domain matching your name** (§2) — domain authority plus an exact-match string is a meaningful ranking factor for a name query with low overall competition.
4. **JSON-LD `Person` + `ScholarlyArticle` schema** (already scoped, PLAN.md §9) — don't cut this under time pressure; it's what lets Google's knowledge-panel-adjacent features and citation tools parse you correctly, and almost no personal academic site actually does it.
5. **Backlinks from real institutional pages** — ask Dr. Yang's lab page (if one exists) to link your name/site; check if CQU's Computer Science department has a graduate student directory. One link from a `.edu`/university domain outweighs a dozen social profiles for search ranking.
6. **`sitemap.ts` + `robots.ts` + Search Console verification** (PLAN.md §9, Phase 6) — mechanical but easy to forget; do it before the deploy phase, not after.
7. **ORCID + DBLP** — lower individual leverage than Scholar but cheap, and DBLP specifically is checked by CS/ECE reviewers who want a clean, deduplicated author page.

---

## 6. Integration with Application Strategy

The site is infrastructure for your SoP and outreach emails, not a replacement for either. Three integration points:

**Cold emails to POIs.** The link goes after your signature, as a one-line "more at [domain]" — never as the pitch itself. The email has to work standalone (a specific, well-informed question about the professor's recent paper); the site is where a professor goes *after* your email earns 30 more seconds of their attention, to verify you're real and see the fuller picture. If the email is generic, a great site won't save it.

**Narrative consistency with your SoP.** Whatever one-sentence research thread you write for the Home hero and the Research Statement paragraph must be the same thread your SoP opens with, close to verbatim in the core claim if not the exact phrasing. A reviewer who reads your SoP, then clicks through and finds a differently-framed research identity on the site, loses trust in the coherence of your self-presentation — this is a real failure mode, not a hypothetical one. Draft the SoP's opening and the site's Home/Research copy together, or at minimum cross-check them against each other before either goes final.

**The site as a living document during the application cycle.** Applications you submit in fall get read (and interviewed) months later. If a preprint moves from under-review to accepted, or a new result lands, update the site — a professor who looked at your site in November and looks again in January before an interview should see forward motion, not a frozen snapshot. This is a real advantage a static CV PDF can't give you.

**CV page vs. CV PDF.** Keep both — the on-site CV page (built from `research.ts`/`teaching.ts`/`achievements.ts` per PLAN.md §8) is for browsing; the downloadable PDF (`/cv/Md_Imam_Ahasan_CV.pdf`) is for application portals that require a PDF upload. They should tell the same story but the PDF is the one that has to survive being parsed by an ATS-style portal, so keep its formatting conservative even if the on-site version is more visually designed.

---

## 7. Timeline & Milestones — 6 weeks from today (2026-07-12)

Mapped onto PLAN.md's 8 build phases (§11), compressed into calendar weeks, with your action items called out separately from build work — those are the ones that block progress if you don't do them on time.

| Week | Dates | Build deliverable | Your action items (blocking) |
|---|---|---|---|
| **1** | Jul 12 – Jul 18 | Phase 0–1: scaffold, design system, Navbar/Footer, base primitives | Decide on domain name + purchase it; decide on phone-number and referee-contact-info questions (PLAN.md §12 items 3–4) |
| **2** | Jul 19 – Jul 25 | Phase 2–3a: data layer (`src/data/*.ts` from CV), Home + Research pages | **Write the research statement paragraph** and the forward-looking-direction paragraph (§3 above) — nothing after this week can finalize the Research page without it |
| **3** | Jul 26 – Aug 1 | Phase 3b: Publications, Projects, Teaching, Achievements, Contact | Register ORCID; check/claim DBLP entry; decide final Contact-page details |
| **4** | Aug 2 – Aug 8 | Phase 5 + Phase 4 (reduced): CV page + PDF asset live; 1 seed blog post (not all 3 — cut scope here if behind) | Review and approve the one blog post before it publishes (PLAN.md: no unreviewed AI-drafted claims under your name) |
| **5** | Aug 9 – Aug 15 | Phase 6: SEO/a11y/performance pass, JSON-LD, sitemap/robots, Lighthouse targets from PLAN.md §10 | Claim Google Scholar profile once C1/C2 are indexable; request institutional backlink from Dr. Yang's lab page if one exists |
| **6** | Aug 16 – Aug 22 | Phase 7: deploy to Vercel, connect domain, verify production build, Search Console verification | Cross-check Home/Research copy against your in-progress SoP draft for narrative consistency (§6 above); add site link to email signature and CV header |

**Buffer note:** Weeks 2 and 4 are the likely slip points — Week 2 because the research statement is the one piece of content that can't be drafted by anyone but you, and Week 4 because blog posts are the lowest-priority page (§1) and the easiest to cut without hurting the site's core job. If you're behind schedule, protect Weeks 1–3 and 5 (the P0/P1 pages + SEO) and let Week 4's blog scope shrink to zero rather than let it push the deploy date.

---

## 8. Reference points for design calibration

Rather than linking specific URLs (unverified links aren't useful to you here — search these yourself), use these as design/content archetypes when you want a gut-check on whether a page reads as "credible academic" vs. "overproduced":

- **Minimalist academic Jekyll/Next templates** (search "al-folio academic template") — the de facto standard aesthetic for CS PhD personal sites; useful as a lower bound for how spare these sites are expected to be.
- **Established CS/ML researcher personal pages** (search names like Kaiming He, Chris Olah) — text-first, almost no imagery beyond a headshot and figures, publications as the dominant content mass. Useful for calibrating restraint, not for copying layout wholesale — you're a PhD applicant, not a tenured professor, so your site should read as promising and focused rather than exhaustive.
- **Your own department's current PhD student pages**, if CQU's CS department publishes any — the closest apples-to-apples comparison for what "credible at your career stage" looks like in your specific research community.

---

*Read alongside [PLAN.md](PLAN.md) for the technical build spec and [CLAUDE.md](CLAUDE.md) for the standing project instructions. This document doesn't change any decision already locked in those two files — it adds the strategy layer for why those decisions matter for admissions outcomes specifically.*
