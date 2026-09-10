"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { captureAttribution } from "@/lib/utm";

export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const attribution = captureAttribution();
    trackEvent("landing_page_view", {
      path: pathname,
      utm_source: attribution.utmSource,
      utm_medium: attribution.utmMedium,
      utm_campaign: attribution.utmCampaign,
    });
  }, [pathname]);

  return null;
}
