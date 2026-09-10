"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import { captureAttribution } from "@/lib/utm";

export default function PageViewTracker() {
  useEffect(() => {
    const attribution = captureAttribution();
    trackEvent("landing_page_view", {
      utm_source: attribution.utmSource,
      utm_medium: attribution.utmMedium,
      utm_campaign: attribution.utmCampaign,
    });
  }, []);

  return null;
}
