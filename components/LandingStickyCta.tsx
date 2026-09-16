"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function LandingStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-800 bg-ink-950/95 p-3 backdrop-blur-md sm:hidden">
      <a
        href="#idea-form"
        onClick={() => trackEvent("cta_click", { label: "Tell Me Your Idea", location: "sticky-mobile" })}
        className="btn-primary flex w-full items-center justify-center gap-2"
      >
        Tell Me Your Idea
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
