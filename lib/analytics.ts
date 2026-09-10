"use client";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEvent =
  | "landing_page_view"
  | "cta_click"
  | "form_started"
  | "form_submitted";

interface EventPayload {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Fires the same logical event to GA4 and Meta Pixel (both are no-ops until
 * NEXT_PUBLIC_GA_MEASUREMENT_ID / NEXT_PUBLIC_META_PIXEL_ID are set).
 */
export function trackEvent(event: AnalyticsEvent, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;

  try {
    window.gtag?.("event", event, payload);
  } catch {
    // analytics should never break the page
  }

  try {
    const metaMap: Partial<Record<AnalyticsEvent, string>> = {
      landing_page_view: "PageView",
      cta_click: "Lead",
      form_started: "InitiateCheckout",
      form_submitted: "CompleteRegistration",
    };
    const metaEvent = metaMap[event];
    if (metaEvent) window.fbq?.("track", metaEvent, payload);
  } catch {
    // analytics should never break the page
  }

  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", event, payload);
  }
}
