"use client";

import { useState, useTransition } from "react";
import { LEAD_STATUSES, LEAD_STATUS_LABELS } from "@/lib/leadOptions";

const statusColors: Record<string, string> = {
  NEW: "bg-accent-500/15 text-accent-300 border-accent-500/40",
  REVIEWING: "bg-signal-amber/15 text-signal-amber border-signal-amber/40",
  CONTACTED: "bg-sky-500/15 text-sky-300 border-sky-500/40",
  QUALIFIED: "bg-signal-teal/15 text-signal-teal border-signal-teal/40",
  PROPOSAL_SENT: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/40",
  WON: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
  LOST: "bg-ink-700 text-ink-400 border-ink-600",
};

export default function LeadStatusSelect({ id, status }: { id: string; status: string }) {
  const [value, setValue] = useState(status);
  const [pending, startTransition] = useTransition();

  async function handleChange(newStatus: string) {
    setValue(newStatus);
    startTransition(async () => {
      try {
        await fetch(`/api/admin/leads/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        });
      } catch {
        setValue(status);
      }
    });
  }

  return (
    <select
      value={value}
      disabled={pending}
      onChange={(e) => handleChange(e.target.value)}
      className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold outline-none ${
        statusColors[value] || statusColors.NEW
      } bg-ink-950`}
    >
      {LEAD_STATUSES.map((s) => (
        <option key={s} value={s} className="bg-ink-900 text-ink-100">
          {LEAD_STATUS_LABELS[s]}
        </option>
      ))}
    </select>
  );
}
