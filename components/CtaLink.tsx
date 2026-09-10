"use client";

import { ReactNode } from "react";
import Link from "next/link";
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
  const classes = `${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`;
  const handleClick = () => trackEvent("cta_click", { label, location });

  if (href.startsWith("#")) {
    return (
      <a href={href} onClick={handleClick} className={classes}>
        {children ?? label}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={classes}>
      {children ?? label}
    </Link>
  );
}
