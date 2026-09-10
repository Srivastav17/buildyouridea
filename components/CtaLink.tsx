"use client";

import { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

interface CtaLinkProps {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  location: string;
  children?: ReactNode;
  className?: string;
}

export default function CtaLink({
  href,
  label,
  variant = "primary",
  location,
  children,
  className = "",
}: CtaLinkProps) {
  return (
    <a
      href={href}
      onClick={() => trackEvent("cta_click", { label, location })}
      className={`${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`}
    >
      {children ?? label}
    </a>
  );
}
