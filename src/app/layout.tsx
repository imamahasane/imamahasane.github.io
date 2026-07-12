import type { Metadata } from "next";
import { Inter, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Md Imam Ahasan | Computer Science Researcher",
    template: "%s | Md Imam Ahasan",
  },
  description:
    "Md Imam Ahasan is a Computer Science researcher working on physics-informed deep learning and diffusion models for medical image reconstruction, with an emphasis on low-dose CT.",
  openGraph: {
    title: "Md Imam Ahasan | Computer Science Researcher",
    description:
      "Physics-informed deep learning and diffusion models for medical image reconstruction, with an emphasis on low-dose CT.",
    type: "website",
    siteName: "Md Imam Ahasan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Imam Ahasan | Computer Science Researcher",
    description:
      "Physics-informed deep learning and diffusion models for medical image reconstruction, with an emphasis on low-dose CT.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
