import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline";
}

export default function Badge({
  children,
  className,
  variant = "outline",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide",
        variant === "solid"
          ? "bg-accent text-white"
          : "border border-border bg-accent-soft text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
