import { profile } from "@/data/profile";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-muted">
          © {year} {profile.name}. Built with Next.js.
        </p>
        <SocialLinks links={profile.social} />
      </div>
    </footer>
  );
}
