import type { EducationItem, ResearchProject, TeachingItem } from "@/types";

export const researchExperience: TeachingItem[] = [
  {
    role: "Graduate Research Assistant — Computer Vision Lab",
    organization: "Chongqing University",
    location: "China",
    period: "Sep 2023 – Jun 2026",
    description:
      "Designed DACD, a Poisson-thinning cold diffusion model with physics consistency achieving +1.20 dB PSNR over SOTA and 3.3× faster inference (IJCNN 2026, CCF-C, accepted). Extended to GenDiff with dose-anatomy encoding and structural prior refinement for zero-shot generalization (PeerJ CS, SCIE, under review). Developed LightGAN-LD for real-time LDCT reconstruction in collaboration with Dr. Mohammad Azam Khan (KAIST). Supervisor: Dr. Guangchao Yang, College of Computer Science.",
  },
  {
    role: "Graduate Research Assistant — Data Science Lab",
    organization: "Daffodil International University",
    location: "Bangladesh",
    period: "Jun 2020 – Jul 2021",
    description:
      "Developed and benchmarked deep learning pipelines for retinal vessel segmentation and skin lesion classification across standard public datasets. Co-developed GeGLUNet, a retinal vessel segmentation network via attention-gated GeGLU and contrastive supervision (PRCV 2025, CCF-C, published). Supervisor: Dr. Md Zahid Hasan, Computer Science and Technology.",
  },
];

export const education: EducationItem[] = [
  {
    institution: "Chongqing University (CQU)",
    degree: "M.Sc. in Computer Science",
    location: "Chongqing, China",
    period: "Sep 2023 – Jun 2026",
    gpa: "83.4 / 100 (Top 1% of international cohort)",
    thesis: "Research on Low-Dose Computed Tomography Image Reconstruction",
    supervisor: "Dr. Guangchao Yang, College of Computer Science, CQU",
  },
  {
    institution: "Daffodil International University (DIU)",
    degree: "B.Sc. in Computer Science and Engineering",
    location: "Dhaka, Bangladesh",
    period: "Sep 2017 – Sep 2021",
    gpa: "71.5 / 100",
    thesis: "Gronthon: Bangla PDF to Text Conversion Application",
    supervisor: "Dr. Md Zahid Hasan, Computer Science and Technology, DIU",
  },
];

export const researchInterests: string[] = [
  "Computer Vision",
  "Medical Imaging",
  "Diffusion Models",
  "Generative Models",
  "Scientific Machine Learning",
];

/**
 * DRAFT — written to unblock the page, not to ship as-is. This is my best
 * attempt at your voice from the CV facts alone; it hasn't lived in your
 * head the way the real thing needs to. Read it, disagree with parts of it,
 * and rewrite until it sounds like you, not like a summary of your CV.
 */
export const researchStatement = `I am an AI and computer vision researcher working across medical image
analysis and visual perception, with a primary focus on physics-consistent generative models for inverse
problems in medical imaging. My thesis developed DACD, a cold diffusion model that reformulates image
reconstruction around the actual physics of dose-reduced CT acquisition — Poisson thinning — rather than
treating scanner noise as a generic signal to denoise, achieving a PSNR improvement over prior
state-of-the-art methods alongside a 3.3× faster inference time. GenDiff extends this line of work with
explicit dose and anatomy conditioning, enabling a single trained model to generalize across dose levels
and anatomical regions it was never directly trained on. Beyond CT reconstruction, my research spans
retinal vessel segmentation, dermatological image analysis, and visual perception for autonomous systems —
work that has shaped how I think about generalization and robustness across the visual recognition
problems I care about, not only generative reconstruction.`;

/**
 * DRAFT — same caveat as above. This is the sentence a committee reads to
 * decide if they're funding a research trajectory, not a finished thesis;
 * it needs to reflect what you actually want to spend five years on, not
 * what reads well.
 */
export const forwardLookingDirection = `The open question I want to pursue in a PhD is whether this
physics-consistency principle generalizes beyond CT: most inverse problems in medical imaging — MRI
reconstruction, PET denoising, sparse-view reconstruction more broadly — have their own well-understood
measurement physics that current generative priors mostly ignore in favor of generic learned corruption
models. I want to work out whether conditioning diffusion models on the actual forward operator of each
modality, rather than a dataset-specific noise model, produces reconstruction methods that transfer across
modalities instead of needing to be rebuilt for each one — and, longer term, whether that physics grounding
can support formal reconstruction guarantees that purely data-driven priors can't offer.`;

export const flagshipProjects: ResearchProject[] = [
  {
    slug: "dacd",
    title:
      "DACD: Dose-Aware Cold Diffusion with Physics Consistency for Generalizable Low-Dose CT Reconstruction",
    oneLiner:
      "A Poisson-thinning cold diffusion model with physics consistency for low-dose CT reconstruction.",
    gloss:
      "Lower-dose CT scans are safer for patients but produce noisier images; DACD reconstructs clean images from noisy low-dose scans more accurately and 3.3× faster than prior methods.",
    problem:
      "Standard diffusion-based CT reconstruction methods are accurate but slow, and often fail to generalize across the wide range of dose levels used in clinical practice.",
    method:
      "A cold diffusion framework built on Poisson thinning — modeling the physical noise process of low-dose acquisition directly — combined with an explicit physics-consistency constraint tying the reconstruction back to the measured sinogram.",
    contribution:
      "Reformulates the degradation process in cold diffusion around the actual physics of dose-reduced CT acquisition, rather than treating noise as a generic corruption to invert.",
    results: "+1.20 dB PSNR over SOTA, 3.3× faster inference.",
    status: "accepted",
    publicationId: "C1",
    technologies: ["PyTorch", "Cold Diffusion", "CT/Sinogram Processing"],
    codeUrl: "https://github.com/imamahasane/DACD",
  },
  {
    slug: "gendiff",
    title:
      "GenDiff: A Dose and Anatomy Aware Diffusion Model with Structural Prior Refinement for Low-Dose CT Reconstruction and Generalization",
    oneLiner:
      "Dose-anatomy encoding and structural prior refinement for zero-shot generalization across unseen dose levels and anatomical domains.",
    gloss:
      "Extends the DACD line of work so a single trained model reconstructs CT images well across dose levels and body regions it was never explicitly trained on.",
    problem:
      "A reconstruction model trained at one dose level or anatomical region typically degrades sharply when deployed on a different dose level or body region — a real barrier to clinical deployment.",
    method:
      "Explicit dose and anatomy conditioning inside the diffusion process, paired with a structural prior refinement stage that corrects fine anatomical detail after the main reconstruction step.",
    contribution:
      "Demonstrates zero-shot generalization across dose levels and anatomical domains without per-setting retraining.",
    status: "under-review",
    publicationId: "R1",
    technologies: ["PyTorch", "Diffusion Models", "Domain Generalization"],
    paperUrl: "https://arxiv.org/abs/2607.11941",
    codeUrl: "https://github.com/imamahasane/GenDiff",
  },
  {
    slug: "lightgan-ld",
    title:
      "LightGAN-LD: A Lightweight Generative Adversarial Network for Efficient Low-Dose CT Reconstruction with Sinogram Encoding and Edge-Aware Learning",
    oneLiner:
      "A lightweight GAN with sinogram encoding and edge-aware learning for efficient low-dose CT reconstruction, developed with Dr. Mohammad Azam Khan (KAIST).",
    gloss:
      "A smaller, faster generative model for low-dose CT reconstruction, built for real-time deployment rather than offline processing.",
    problem:
      "Diffusion-based reconstruction is accurate but computationally heavy; clinical real-time use cases need a much lighter model without giving up reconstruction quality or edge fidelity.",
    method:
      "A lightweight GAN architecture operating directly on sinogram-encoded input with an edge-aware learning objective to preserve diagnostically relevant structural detail.",
    contribution:
      "Trades diffusion-model accuracy for GAN-level inference speed while retaining edge fidelity, in an international collaboration with Dr. Mohammad Azam Khan at KAIST. A closely related sinogram-encoded variant targeting real-time measurement-domain noise suppression is under review as a separate paper (R4).",
    status: "under-review",
    publicationId: "R3",
    technologies: ["PyTorch", "GANs", "Sinogram Processing"],
    codeUrl: "https://github.com/imamahasane/LightGAN-LD",
  },
];
