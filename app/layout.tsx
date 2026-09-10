import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import AnalyticsScripts from "@/components/AnalyticsScripts";
import PageViewTracker from "@/components/PageViewTracker";
import SiteChrome from "@/components/SiteChrome";
import GlowBackdrop from "@/components/GlowBackdrop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BuildYourIdea — From idea to working product",
    template: "%s | BuildYourIdea",
  },
  description:
    "Bring your SaaS, AI, or automation idea. I help define what should be built and turn it into a working prototype or MVP using AI-native product development.",
  keywords: [
    "AI product builder",
    "MVP development",
    "SaaS prototype",
    "AI product studio",
    "idea to product",
    "product management",
    "business automation",
  ],
  openGraph: {
    title: "BuildYourIdea — From idea to working product",
    description:
      "You bring the idea. I help define what should be built and turn it into a working prototype or MVP using AI-native product development.",
    url: siteUrl,
    siteName: "BuildYourIdea",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildYourIdea — From idea to working product",
    description:
      "You bring the idea. I help define what should be built and turn it into a working prototype or MVP using AI-native product development.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-ink-950 font-sans">
        <AnalyticsScripts />
        <PageViewTracker />
        <GlowBackdrop />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
