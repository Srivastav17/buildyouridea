import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import AnalyticsScripts from "@/components/AnalyticsScripts";
import PageViewTracker from "@/components/PageViewTracker";
import SiteChrome from "@/components/SiteChrome";
import JsonLd from "@/components/JsonLd";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Builidea — From idea to working product",
    template: "%s | Builidea",
  },
  description:
    "Bring your SaaS, AI, or automation idea. This product studio helps define what should be built and turns it into a working prototype or MVP using AI-native product development.",
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
    title: "Builidea — From idea to working product",
    description:
      "You bring the idea. This product studio helps define what should be built and turns it into a working prototype or MVP using AI-native product development.",
    url: siteUrl,
    siteName: "Builidea",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Builidea — From idea to working product",
    description:
      "You bring the idea. This product studio helps define what should be built and turns it into a working prototype or MVP using AI-native product development.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="min-h-screen bg-ink-950 font-sans">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": `${siteUrl}/#organization`,
            name: "Builidea",
            url: siteUrl,
            description:
              "Builidea is a product studio that turns SaaS, AI, and automation ideas into working prototypes and MVPs using AI-native product development.",
            image: `${siteUrl}/opengraph-image`,
            parentOrganization: {
              "@type": "Organization",
              name: "India Fashion World",
            },
            areaServed: "IN",
            sameAs: [],
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            url: siteUrl,
            name: "Builidea",
            publisher: { "@id": `${siteUrl}/#organization` },
          }}
        />
        <AnalyticsScripts />
        <PageViewTracker />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
