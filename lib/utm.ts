"use client";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const STORAGE_KEY = "byi_attribution";

export interface Attribution {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  referrer?: string;
  landingPage?: string;
}

/**
 * Captures UTM params from the current URL on first touch and persists them
 * to localStorage so attribution survives across pages/sessions until the
 * lead form is submitted (important for Facebook/Instagram/Google ad traffic
 * that may land, browse, and convert later).
 */
export function captureAttribution(): Attribution {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const hasUtm = UTM_KEYS.some((key) => params.get(key));

  if (hasUtm) {
    const attribution: Attribution = {
      utmSource: params.get("utm_source") || undefined,
      utmMedium: params.get("utm_medium") || undefined,
      utmCampaign: params.get("utm_campaign") || undefined,
      utmTerm: params.get("utm_term") || undefined,
      utmContent: params.get("utm_content") || undefined,
      referrer: document.referrer || undefined,
      landingPage: window.location.href,
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    } catch {
      // ignore storage failures (private mode, quota, etc.)
    }
    return attribution;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored) as Attribution;
  } catch {
    // ignore
  }

  return {
    referrer: document.referrer || undefined,
    landingPage: window.location.href,
  };
}
