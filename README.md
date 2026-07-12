# Md Imam Ahasan — Academic Homepage

Personal academic website for Md Imam Ahasan, Computer Science researcher
working on physics-informed deep learning and diffusion models for medical
image reconstruction, with an emphasis on low-dose CT.

Live at **[imamahasane.github.io](https://imamahasane.github.io)**.

## Stack

Next.js (App Router, static export) · TypeScript · Tailwind CSS · Framer
Motion · MDX

## Structure

- `src/app/` — routes (Home, Research, Publications, Projects, Teaching,
  Achievements, Blog, CV, Contact)
- `src/components/` — shared UI components
- `src/data/` — typed content (publications, research projects, education,
  achievements, teaching)
- `content/blog/` — MDX blog posts

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Static export, deployed automatically to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push
to `main`.
