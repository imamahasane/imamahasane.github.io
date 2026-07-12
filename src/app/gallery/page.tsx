import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import MotionSection from "@/components/MotionSection";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from research, awards, and campus life.",
};

export default function GalleryPage() {
  return (
    <>
      <Section width="prose" className="pb-4 pt-16 md:pt-24">
        <h1 className="font-serif text-3xl font-semibold text-foreground">
          Gallery
        </h1>
      </Section>

      <Section width="prose" className="pt-0">
        <div className="space-y-16">
          {galleryItems.map((item, i) => (
            <MotionSection key={item.title} index={i}>
              <figure>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={1200}
                  height={900}
                  className="w-full rounded-lg border border-border"
                />
                <figcaption className="mt-3">
                  <p className="font-serif text-lg font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="text-sm text-muted">{item.date}</p>
                  <p className="mt-1 leading-relaxed text-foreground">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            </MotionSection>
          ))}
        </div>
      </Section>
    </>
  );
}
