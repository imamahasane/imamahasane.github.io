import type { Metadata } from "next";
import Section from "@/components/Section";
import AchievementCard from "@/components/AchievementCard";
import MotionSection from "@/components/MotionSection";
import { achievements } from "@/data/achievements";
import { startYear } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Awards and honors.",
};

export default function AchievementsPage() {
  const timelineItems = [...achievements].sort(
    (a, b) => startYear(b.date) - startYear(a.date),
  );

  return (
    <>
      <Section width="prose" className="pb-4 pt-16 md:pt-24">
        <h1 className="font-serif text-3xl font-semibold text-foreground">
          Achievements
        </h1>
      </Section>

      <Section width="wide" className="pt-0">
        <div className="space-y-4">
          {timelineItems.map((item, i) => (
            <MotionSection key={item.id} index={i}>
              <AchievementCard item={item} />
            </MotionSection>
          ))}
        </div>
      </Section>
    </>
  );
}
