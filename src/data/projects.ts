import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ldct-research-code",
    title: "DACD / GenDiff / LightGAN-LD — Research Codebases",
    period: "2023 – Present",
    problem:
      "Three physics-guided diffusion and GAN frameworks for low-dose CT reconstruction, developed as part of ongoing thesis and collaborative research (see Research page).",
    approach:
      "Custom PyTorch training pipelines with mixed precision and multi-GPU support, built around MONAI for medical-imaging-specific data handling.",
    technology: ["Python", "PyTorch", "MONAI", "Weights & Biases"],
    result: "Code release in progress — links will be added once repositories are made public.",
    links: [],
  },
  {
    slug: "gronthon",
    title: "Gronthon: Bangla PDF to Text Conversion Application",
    period: "B.Sc. Thesis, 2021",
    problem:
      "Bengali-script documents are poorly served by mainstream OCR tooling, which is built and tuned around Latin-script text — a real barrier to digitizing Bengali-language archives.",
    approach:
      "An end-to-end OCR pipeline for Bengali script digitization, built as a B.Sc. thesis project at Daffodil International University under Dr. Md Zahid Hasan.",
    technology: ["Python", "OCR", "Image Processing"],
    result:
      "A working end-to-end pipeline converting scanned Bengali PDFs to editable text, distinct from the CT reconstruction research line and demonstrative of broader engineering range.",
    links: [],
  },
];
