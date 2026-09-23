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
      "Md Mahfuzur Rahman",
    ],
    isFirstAuthor: true,
    venue: "Intl. Joint Conf. on Neural Networks (IJCNN 2026)",
    venueType: "conference",
    ranking: "CCF-C",
    status: "accepted",
    year: 2026,
    pdfUrl:
      "https://www.researchgate.net/publication/403606252_Dose-Aware_Cold_Diffusion_with_Physics_Consistency_for_Generalizable_Low-Dose_CT_Reconstruction",
    codeUrl: "https://github.com/imamahasane/DACD",
    gloss:
      "Reconstructs clean CT images from noisy low-dose scans more accurately and 3.3× faster than prior methods.",
    bibtex: `@inproceedings{ahasan2026dacd,
  title     = {Dose-Aware Cold Diffusion with Physics Consistency for Generalizable Low-Dose CT Reconstruction},
  author    = {Ahasan, Md Imam and Yang, Guangchao and Noor, A F M Abdun and Mahmud, S M Hasan and Rahman, Md Mahfuzur},
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
    codeUrl: "https://github.com/imamahasane/GeGLUNet",
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
    pdfUrl:
      "https://www.researchgate.net/publication/408868174_MTF-Net_Multi-Modal_Temporal_Feature_Fusion_Network_for_Pedestrian_Intention_Prediction",
    codeUrl: "https://github.com/imamahasane/MTF-Net",
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
    pdfUrl:
      "https://www.researchgate.net/publication/408872180_MoSSGate_Memory-Modulated_State-Space_Gating_for_Skin_Lesion_Segmentation",
    codeUrl: "https://github.com/imamahasane/MoSSGate",
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
    doi: "10.32604/cmc.2026.083456",
    codeUrl: "https://github.com/imamahasane/DCANet",
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
    title: "Dose and Anatomy-Aware Diffusion for Low-Dose CT Reconstruction",
    authors: [
      "Md Imam Ahasan",
      "Chengliang Wang",
      "A F M Abdun Noor",
      "Guangchao Yang",
    ],
    isFirstAuthor: true,
    venue: "IEEE Intl. Conf. on Acoustics, Speech and Signal Processing (ICASSP 2027)",
    venueType: "conference",
    ranking: "CCF-B",
    status: "under-review",
    year: 2027,
    pdfUrl: "https://arxiv.org/abs/2607.11941",
    codeUrl: "https://github.com/imamahasane/GenDiff",
    gloss:
      "Extends low-dose CT reconstruction to generalize across unseen radiation doses and body regions without retraining.",
    bibtex: `@inproceedings{ahasan2027gendiff,
  title     = {Dose and Anatomy-Aware Diffusion for Low-Dose CT Reconstruction},
  author    = {Ahasan, Md Imam and Wang, Chengliang and Noor, A F M Abdun and Yang, Guangchao},
  booktitle = {IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  year      = {2027},
  note      = {Under review}
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
    ],
    isFirstAuthor: false,
    venue: "Intl. Conf. on Mobility, Sensing and Networking (MSN 2026)",
    venueType: "conference",
    ranking: "CCF-C",
    status: "under-review",
    year: 2026,
    pdfUrl: "https://arxiv.org/abs/2607.11939",
    codeUrl: "https://github.com/imamahasane/TSCA-Net",
    gloss:
      "Forecasts where pedestrians will walk next from multiple sensor views, with interpretable attention maps.",
    bibtex: `@inproceedings{rahman2026tscanet,
  title     = {TSCA-Net: Temporal-Spatial Clique Attention for Interpretable Multimodal Pedestrian Trajectory Prediction},
  author    = {Rahman, Md Mustafizur and Yang, Guangchao and Noor, A F M Abdun and Ahasan, Md Imam},
  booktitle = {International Conference on Mobility, Sensing and Networking (MSN)},
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
    codeUrl: "https://github.com/imamahasane/LightGAN-LD",
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
    id: "J2",
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
    status: "accepted",
    year: 2026,
    gloss:
      "Suppresses noise directly in the raw scanner data for real-time low-dose CT reconstruction.",
    bibtex: `@article{ahasan2026realtimeldct,
  title   = {Toward Real-Time LDCT Reconstruction: A Sinogram-Encoded Lightweight GAN with Measurement-Domain Noise Suppression},
  author  = {Ahasan, Md Imam and Noor, A F M Abdun and Goh, Kah Ong Michael and Mahmud, S M Hasan},
  journal = {Computers, Materials and Continua},
  year    = {2026}
}`,
  },
  {
    id: "J3",
    title:
      "BiLoG-Net: A Bi-Context Location-Guided Network for Breast Mass Segmentation and Malignancy Classification in Mammography",
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
    status: "accepted",
    year: 2026,
    pdfUrl: "https://arxiv.org/abs/2607.10188",
    codeUrl: "https://github.com/imamahasane/BiLoG-Net",
    gloss:
      "Jointly locates and classifies findings in mammograms to support breast cancer screening.",
    bibtex: `@article{noor2026bilognet,
  title   = {BiLoG-Net: A Bi-Context Location-Guided Network for Breast Mass Segmentation and Malignancy Classification in Mammography},
  author  = {Noor, A F M Abdun and Ahasan, Md Imam and Goh, Kah Ong Michael and Mahmud, S M Hasan},
  journal = {Computer Modeling in Engineering and Sciences},
  year    = {2026}
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
    pdfUrl: "https://arxiv.org/abs/2607.12293",
    codeUrl: "https://github.com/imamahasane/ADAPT",
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
  {
    id: "R7",
    title:
      "PCDiff: Physics-Conditioned Bayesian Diffusion Model for Low-Dose CT Reconstruction",
    authors: [
      "Md Imam Ahasan",
      "Guangchao Yang",
      "A F M Abdun Noor",
      "Mohammad Azam Khan",
    ],
    isFirstAuthor: true,
    venue: "Computer Modeling in Engineering and Sciences (CMES)",
    venueType: "journal",
    ranking: "SCIE",
    status: "under-review",
    year: 2026,
    codeUrl: "https://github.com/imamahasane/PCDiff",
    gloss:
      "A Bayesian diffusion model that conditions reconstruction on the CT scanner's physics to better quantify uncertainty in low-dose CT images.",
    bibtex: `@article{ahasan2026pcdiff,
  title   = {PCDiff: Physics-Conditioned Bayesian Diffusion Model for Low-Dose CT Reconstruction},
  author  = {Ahasan, Md Imam and Yang, Guangchao and Noor, A F M Abdun and Khan, Mohammad Azam},
  journal = {Computer Modeling in Engineering and Sciences},
  year    = {2026},
  note    = {Under review}
}`,
  },
  {
    id: "R8",
    title:
      "DeltaPath: Gated Delta-Rule Encoding for Efficient Vehicle Trajectory Representation Learning",
    authors: [
      "Md Ariful Islam",
      "Ruiyuan Li",
      "A F M Abdun Noor",
      "Md Imam Ahasan",
    ],
    isFirstAuthor: false,
    venue: "IEEE Intl. Conf. on Acoustics, Speech and Signal Processing (ICASSP 2027)",
    venueType: "conference",
    ranking: "CCF-B",
    status: "under-review",
    year: 2027,
    gloss:
      "Learns compact, efficient representations of vehicle trajectories for downstream mobility analysis.",
    bibtex: `@inproceedings{islam2027deltapath,
  title     = {DeltaPath: Gated Delta-Rule Encoding for Efficient Vehicle Trajectory Representation Learning},
  author    = {Islam, Md Ariful and Li, Ruiyuan and Noor, A F M Abdun and Ahasan, Md Imam},
  booktitle = {IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  year      = {2027},
  note      = {Under review}
}`,
  },
];

export const firstAuthorPublications = publications.filter(
  (p) => p.isFirstAuthor,
);
