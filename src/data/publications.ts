import type { Publication } from "@/types";

export const publications: Publication[] = [
  {
    id: "C1",
    title:
      "Dose-Aware Cold Diffusion with Physics Consistency for Generalizable Low-Dose CT Reconstruction",
    authors: [
      "Md Imam Ahasan",
      "Guangchao Yang",
      "A F M Abdun Noor",
      "S M Hasan Mahmud",
    ],
    isFirstAuthor: true,
    venue: "Intl. Joint Conf. on Neural Networks (IJCNN 2026)",
    venueType: "conference",
    ranking: "CCF-C",
    status: "accepted",
    year: 2026,
    gloss:
      "Reconstructs clean CT images from noisy low-dose scans more accurately and 3.3× faster than prior methods.",
    bibtex: `@inproceedings{ahasan2026dacd,
  title     = {Dose-Aware Cold Diffusion with Physics Consistency for Generalizable Low-Dose CT Reconstruction},
  author    = {Ahasan, Md Imam and Yang, Guangchao and Noor, A F M Abdun and Mahmud, S M Hasan},
  booktitle = {International Joint Conference on Neural Networks (IJCNN)},
  year      = {2026}
}`,
  },
  {
    id: "C2",
    title:
      "GeGLUNet: Structural Retinal Vessel Segmentation via Attention-Gated GeGLU and Contrastive Supervision",
    authors: [
      "A F M Abdun Noor",
      "Md Imam Ahasan",
      "Mohammad Azam Khan",
      "Guangchao Yang",
    ],
    isFirstAuthor: false,
    venue: "Conf. on Pattern Recognition and Computer Vision (PRCV 2025)",
    venueType: "conference",
    ranking: "CCF-C",
    status: "published",
    year: 2025,
    doi: "10.1007/978-981-95-5631-1_35",
    gloss:
      "Segments blood vessels in retinal scans more precisely to support earlier diagnosis of eye disease.",
    bibtex: `@inproceedings{noor2025geglunet,
  title     = {GeGLUNet: Structural Retinal Vessel Segmentation via Attention-Gated GeGLU and Contrastive Supervision},
  author    = {Noor, A F M Abdun and Ahasan, Md Imam and Khan, Mohammad Azam and Yang, Guangchao},
  booktitle = {Conference on Pattern Recognition and Computer Vision (PRCV)},
  year      = {2025},
  doi       = {10.1007/978-981-95-5631-1_35}
}`,
  },
  {
    id: "C3",
    title:
      "MTF-Net: Multi-Modal Temporal Feature Fusion Network for Pedestrian Intention Prediction",
    authors: [
      "Md Mahfuzur Rahman",
      "Pengzhan Zhou",
      "A F M Abdun Noor",
      "Md Imam Ahasan",
    ],
    isFirstAuthor: false,
    venue: "Intl. Conf. on Cloud and Network Computing (ICCNC 2026)",
    venueType: "conference",
    ranking: "EI",
    status: "accepted",
    year: 2026,
    gloss:
      "Predicts pedestrian crossing intent from video and sensor data to help autonomous vehicles react earlier.",
    bibtex: `@inproceedings{rahman2026mtfnet,
  title     = {MTF-Net: Multi-Modal Temporal Feature Fusion Network for Pedestrian Intention Prediction},
  author    = {Rahman, Md Mahfuzur and Zhou, Pengzhan and Noor, A F M Abdun and Ahasan, Md Imam},
  booktitle = {International Conference on Cloud and Network Computing (ICCNC)},
  year      = {2026}
}`,
  },
  {
    id: "C4",
    title:
      "MoSSGate: Memory-Modulated State-Space Gating for Skin Lesion Segmentation",
    authors: [
      "Anum Malik",
      "Mahnoor Buriro",
      "Muhammad Younas Khan",
      "Md Imam Ahasan",
    ],
    isFirstAuthor: false,
    venue: "Intl. Conf. on Cloud and Network Computing (ICCNC 2026)",
    venueType: "conference",
    ranking: "EI",
    status: "accepted",
    year: 2026,
    gloss:
      "Improves automatic detection of skin lesion boundaries in dermatology images.",
    bibtex: `@inproceedings{malik2026mossgate,
  title     = {MoSSGate: Memory-Modulated State-Space Gating for Skin Lesion Segmentation},
  author    = {Malik, Anum and Buriro, Mahnoor and Khan, Muhammad Younas and Ahasan, Md Imam},
  booktitle = {International Conference on Cloud and Network Computing (ICCNC)},
  year      = {2026}
}`,
  },
  {
    id: "J1",
    title:
      "Direction-Curvature Aware Feature Integration for Robust Lane Detection",
    authors: [
      "Ahtisham Waheed",
      "Yunfei Yin",
      "A F M Abdun Noor",
      "Md Imam Ahasan",
    ],
    isFirstAuthor: false,
    venue: "Computers, Materials and Continua (CMC)",
    venueType: "journal",
    ranking: "SCIE",
    status: "accepted",
    year: 2026,
    gloss:
      "Detects road lane markings more robustly on curved and poorly marked roads for autonomous driving.",
    bibtex: `@article{waheed2026lane,
  title   = {Direction-Curvature Aware Feature Integration for Robust Lane Detection},
  author  = {Waheed, Ahtisham and Yin, Yunfei and Noor, A F M Abdun and Ahasan, Md Imam},
  journal = {Computers, Materials and Continua},
  year    = {2026}
}`,
  },
  {
    id: "R1",
    title:
      "GenDiff: A Dose and Anatomy Aware Diffusion Model with Structural Prior Refinement for Low-Dose CT Reconstruction and Generalization",
    authors: [
      "Md Imam Ahasan",
      "Guangchao Yang",
      "A F M Abdun Noor",
      "S M Hasan Mahmud",
    ],
    isFirstAuthor: true,
    venue: "PeerJ Computer Science",
    venueType: "journal",
    ranking: "SCIE",
    status: "under-review",
    year: 2026,
    gloss:
      "Extends low-dose CT reconstruction to generalize across unseen radiation doses and body regions without retraining.",
    bibtex: `@article{ahasan2026gendiff,
  title   = {GenDiff: A Dose and Anatomy Aware Diffusion Model with Structural Prior Refinement for Low-Dose CT Reconstruction and Generalization},
  author  = {Ahasan, Md Imam and Yang, Guangchao and Noor, A F M Abdun and Mahmud, S M Hasan},
  journal = {PeerJ Computer Science},
  year    = {2026},
  note    = {Under review}
}`,
  },
  {
    id: "R2",
    title:
      "TSCA-Net: Temporal-Spatial Clique Attention for Interpretable Multimodal Pedestrian Trajectory Prediction",
    authors: [
      "Md Mustafizur Rahman",
      "Guangchao Yang",
      "A F M Abdun Noor",
      "Md Imam Ahasan",
      "Md Mahfuzur Rahman",
    ],
    isFirstAuthor: false,
    venue: "IEEE Intl. Conf. on Data Mining (ICDM 2026)",
    venueType: "conference",
    ranking: "CCF-B",
    status: "under-review",
    year: 2026,
    gloss:
      "Forecasts where pedestrians will walk next from multiple sensor views, with interpretable attention maps.",
    bibtex: `@inproceedings{rahman2026tscanet,
  title     = {TSCA-Net: Temporal-Spatial Clique Attention for Interpretable Multimodal Pedestrian Trajectory Prediction},
  author    = {Rahman, Md Mustafizur and Yang, Guangchao and Noor, A F M Abdun and Ahasan, Md Imam and Rahman, Md Mahfuzur},
  booktitle = {IEEE International Conference on Data Mining (ICDM)},
  year      = {2026},
  note      = {Under review}
}`,
  },
  {
    id: "R3",
    title:
      "LightGAN-LD: A Lightweight Generative Adversarial Network for Efficient Low-Dose CT Reconstruction with Sinogram Encoding and Edge-Aware Learning",
    authors: [
      "Md Imam Ahasan",
      "Guangchao Yang",
      "A F M Abdun Noor",
      "Mohammad Azam Khan",
    ],
    isFirstAuthor: true,
    venue: "PeerJ Computer Science",
    venueType: "journal",
    ranking: "SCIE",
    status: "under-review",
    year: 2026,
    gloss:
      "A lighter, faster GAN for low-dose CT reconstruction suited to real-time clinical deployment.",
    bibtex: `@article{ahasan2026lightganld,
  title   = {LightGAN-LD: A Lightweight Generative Adversarial Network for Efficient Low-Dose CT Reconstruction with Sinogram Encoding and Edge-Aware Learning},
  author  = {Ahasan, Md Imam and Yang, Guangchao and Noor, A F M Abdun and Khan, Mohammad Azam},
  journal = {PeerJ Computer Science},
  year    = {2026},
  note    = {Under review}
}`,
  },
  {
    id: "R4",
    title:
      "Toward Real-Time LDCT Reconstruction: A Sinogram-Encoded Lightweight GAN with Measurement-Domain Noise Suppression",
    authors: [
      "Md Imam Ahasan",
      "A F M Abdun Noor",
      "Kah Ong Michael Goh",
      "S M Hasan Mahmud",
    ],
    isFirstAuthor: true,
    venue: "Computers, Materials and Continua (CMC)",
    venueType: "journal",
    ranking: "SCIE",
    status: "under-review",
    year: 2026,
    gloss:
      "Suppresses noise directly in the raw scanner data for real-time low-dose CT reconstruction.",
    bibtex: `@article{ahasan2026realtimeldct,
  title   = {Toward Real-Time LDCT Reconstruction: A Sinogram-Encoded Lightweight GAN with Measurement-Domain Noise Suppression},
  author  = {Ahasan, Md Imam and Noor, A F M Abdun and Goh, Kah Ong Michael and Mahmud, S M Hasan},
  journal = {Computers, Materials and Continua},
  year    = {2026},
  note    = {Under review}
}`,
  },
  {
    id: "R5",
    title:
      "QBiLoF-U-Net: Bi-Context Location-Aware Feature Modeling for Joint Mammographic Segmentation and Classification",
    authors: [
      "A F M Abdun Noor",
      "Md Imam Ahasan",
      "Kah Ong Michael Goh",
      "S M Hasan Mahmud",
    ],
    isFirstAuthor: false,
    venue: "Computer Modeling in Engineering and Sciences (CMES)",
    venueType: "journal",
    ranking: "SCIE",
    status: "under-review",
    year: 2026,
    gloss:
      "Jointly locates and classifies findings in mammograms to support breast cancer screening.",
    bibtex: `@article{noor2026qbilofunet,
  title   = {QBiLoF-U-Net: Bi-Context Location-Aware Feature Modeling for Joint Mammographic Segmentation and Classification},
  author  = {Noor, A F M Abdun and Ahasan, Md Imam and Goh, Kah Ong Michael and Mahmud, S M Hasan},
  journal = {Computer Modeling in Engineering and Sciences},
  year    = {2026},
  note    = {Under review}
}`,
  },
  {
    id: "R6",
    title:
      "Adaptive Cross-Modal Fusion with Sparse Attention for Pedestrian Crossing Intention Prediction",
    authors: [
      "Md Mahfuzur Rahman",
      "Pengzhan Zhou",
      "A F M Abdun Noor",
      "Md Imam Ahasan",
    ],
    isFirstAuthor: false,
    venue: "PeerJ Computer Science",
    venueType: "journal",
    ranking: "SCIE",
    status: "under-review",
    year: 2026,
    gloss:
      "Combines multiple sensor modalities to predict pedestrian crossing intent more robustly.",
    bibtex: `@article{rahman2026crossmodal,
  title   = {Adaptive Cross-Modal Fusion with Sparse Attention for Pedestrian Crossing Intention Prediction},
  author  = {Rahman, Md Mahfuzur and Zhou, Pengzhan and Noor, A F M Abdun and Ahasan, Md Imam},
  journal = {PeerJ Computer Science},
  year    = {2026},
  note    = {Under review}
}`,
  },
];

export const firstAuthorPublications = publications.filter(
  (p) => p.isFirstAuthor,
);
