import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  width?: "prose" | "wide";
  as?: "section" | "div";
  id?: string;
}

export default function Section({
  children,
  className,
  width = "prose",
  as: Tag = "section",
  id,
}: SectionProps) {
  return (
    <Tag id={id} className={cn("py-16 md:py-24", className)}>
      <div
        className={cn(
          "mx-auto px-6",
          width === "prose" ? "max-w-3xl" : "max-w-6xl",
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
