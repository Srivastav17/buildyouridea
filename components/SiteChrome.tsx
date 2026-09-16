"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import ChatWidget from "./ChatWidget";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  // Standalone ad landing pages render their own minimal chrome (no header/
  // footer nav) to keep paid traffic on a single conversion path.
  const isLandingPage = pathname?.startsWith("/lp");

  if (isAdmin) return <>{children}</>;

  if (isLandingPage) {
    return (
      <>
        {children}
        <ChatWidget />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ChatWidget />
    </>
  );
}
