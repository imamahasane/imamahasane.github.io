export interface GalleryItem {
  title: string;
  date: string;
  caption: string;
  imageUrl: string;
}

export const galleryItems: GalleryItem[] = [
  {
    title: "Farewell & Honors Ceremony, CQU International Graduates 2026",
    date: "Jun 2026",
    caption:
      "With fellow honorees at Chongqing University's farewell and honors ceremony for 2026 international graduates.",
    imageUrl: "/images/gallery/honored.jpg",
  },
  {
    title: "Presenting GenDiff at Chongqing University",
    date: "2026",
    caption:
      "Presenting GenDiff research to the College of Computer Science at Chongqing University.",
    imageUrl: "/images/research-presentation.jpg",
  },
  {
    title: "With My Supervisor, Dr. Guangchao Yang",
    date: "2026",
    caption:
      "A thank-you moment with my supervisor, Dr. Guangchao Yang, College of Computer Science, Chongqing University.",
    imageUrl: "/images/gallery/with-supervisor.jpg",
  },
];
