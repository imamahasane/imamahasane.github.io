import type { Metadata } from "next";
import Section from "@/components/Section";
import AchievementCard from "@/components/AchievementCard";
import MotionSection from "@/components/MotionSection";
import { achievements } from "@/data/achievements";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Awards, honors, and academic service, including peer review and conference volunteering.",
};

export default function AchievementsPage() {
  const timelineItems = achievements.filter((a) => a.category !== "service");
  const serviceItems = achievements.filter((a) => a.category === "service");

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

      <Section width="wide" className="pt-0">
        <MotionSection>
          <h2 className="mb-6 font-serif text-2xl font-semibold text-foreground">
            Academic Service
          </h2>
        </MotionSection>
        <div className="space-y-4">
          {serviceItems.map((item, i) => (
            <MotionSection key={item.id} index={i}>
              <AchievementCard item={item} />
            </MotionSection>
          ))}
        </div>
      </Section>
    </>
  );
}
