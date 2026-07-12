import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarPlaceholderProps {
  src?: string;
  name?: string;
  size?: number;
  className?: string;
}

export default function AvatarPlaceholder({
  src,
  name = "Md Imam Ahasan",
  size = 128,
  className,
}: AvatarPlaceholderProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        width={size}
        height={size}
        className={cn("rounded-full object-cover", className)}
      />
    );
  }

  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      role="img"
      aria-label={name}
      style={{ width: size, height: size }}
      className={cn(
        "flex items-center justify-center rounded-full border border-border bg-accent-soft font-serif text-accent",
        className,
      )}
    >
      <span style={{ fontSize: size * 0.36 }}>{initials}</span>
    </div>
  );
}
