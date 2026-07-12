export interface NewsItem {
  date: string;
  category: "paper" | "talk" | "recognition" | "service";
  /** Plain text; wrap a span in **double asterisks** to render it bold. */
  text: string;
  links?: { label: string; url: string }[];
}

export const newsItems: NewsItem[] = [
  {
    date: "Jul 2026",
    category: "service",
    text: "Invited as a **Reviewer** for the Chinese Conference on Pattern Recognition and Computer Vision (**PRCV 2027**).",
  },
  {
    date: "Jul 2026",
    category: "service",
    text: "Serving as an **Ethics Reviewer** for the Conference on Neural Information Processing Systems (**NeurIPS 2026**).",
  },
  {
    date: "Jun 2026",
    category: "recognition",
    text: "Recognized as one of **Chongqing University's** top 1% international graduates (CQU Outstanding International Graduates 2026).",
  },
  {
    date: "May 2026",
    category: "recognition",
    text: "Finished the **BYD China Youth Run** 10 km community run at Chongqing University in 57:33.",
  },
  {
    date: "2026",
    category: "paper",
    text: "**DACD** accepted at the International Joint Conference on Neural Networks (**IJCNN 2026**, CCF-C).",
  },
  {
    date: "2025",
    category: "paper",
    text: "**GeGLUNet** published at the Conference on Pattern Recognition and Computer Vision (**PRCV 2025**, CCF-C).",
    links: [
      { label: "DOI", url: "https://doi.org/10.1007/978-981-95-5631-1_35" },
    ],
  },
  {
    date: "May 2024",
    category: "recognition",
    text: '3rd Prize in **Chongqing University\'s** "The Chinese New Year in My Eyes" essay & video competition.',
  },
];
