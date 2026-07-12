import type { Metadata } from "next";
import Section from "@/components/Section";
import MotionSection from "@/components/MotionSection";
import { peerReview, conferenceVolunteering } from "@/data/service";

export const metadata: Metadata = {
  title: "Service",
  description: "Academic service: peer review and conference volunteering.",
};

export default function ServicePage() {
  return (
    <>
      <Section width="prose" className="pb-4 pt-16 md:pt-24">
        <h1 className="font-serif text-3xl font-semibold text-foreground">
          Service
        </h1>
      </Section>

      <Section width="prose" className="pt-0">
        <MotionSection>
          <h2 className="mb-4 font-serif text-xl font-semibold text-foreground">
            Peer Review
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-foreground">
            {peerReview.map((item) => (
              <li key={item.venue}>
                {item.role ? `${item.role}, ` : ""}
                {item.venue}
              </li>
            ))}
          </ul>
        </MotionSection>
      </Section>

      <Section width="prose" className="pt-0">
        <MotionSection>
          <h2 className="mb-4 font-serif text-xl font-semibold text-foreground">
            Conference Volunteering
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-foreground">
            {conferenceVolunteering.map((item) => (
              <li key={item.event}>{item.event}</li>
            ))}
          </ul>
        </MotionSection>
      </Section>
    </>
  );
}
