"use client";

import { useRef, useState } from "react";
import {
  AUDIENCE_OPTIONS,
  STAGE_OPTIONS,
  GOAL_OPTIONS,
  BUDGET_OPTIONS,
} from "@/lib/leadOptions";
import { trackEvent } from "@/lib/analytics";
import { captureAttribution } from "@/lib/utm";

interface FormState {
  idea: string;
  audience: string;
  stage: string;
  goal: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  company_website: string; // honeypot
}

const initialState: FormState = {
  idea: "",
  audience: "",
  stage: "",
  goal: "",
  budget: "",
  name: "",
  email: "",
  phone: "",
  company_website: "",
};

function PillGroup({
  name,
  options,
  value,
  onChange,
  error,
}: {
  name: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <div className="grid gap-2.5 sm:grid-cols-2">
        {options.map((option) => (
          <button
            type="button"
            key={option}
            onClick={() => onChange(option)}
            aria-pressed={value === option}
            className={`pill-option text-left ${value === option ? "pill-option-selected" : ""}`}
          >
            {option}
          </button>
        ))}
      </div>
      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
}

export default function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const hasStarted = useRef(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    if (!hasStarted.current && key !== "company_website" && value) {
      hasStarted.current = true;
      trackEvent("form_started");
    }
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    setErrorMessage("");
    setStatus("submitting");

    const attribution = captureAttribution();

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, attribution }),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        setErrorMessage(data.error || "Please check the highlighted fields.");
        setStatus("error");
        return;
      }

      trackEvent("form_submitted", {
        goal: form.goal,
        stage: form.stage,
        budget: form.budget,
      });
      setStatus("success");
    } catch {
      setErrorMessage("Something went wrong. Please try again in a moment.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card mx-auto max-w-2xl p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/15 text-2xl text-accent-300">
          ✓
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold text-white">
          Thanks. Your idea has been received.
        </h3>
        <p className="mt-3 text-ink-300">
          We&rsquo;ll review it and get back to you with the next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card mx-auto max-w-2xl p-6 sm:p-10" noValidate>
      {/* Honeypot field — hidden from real users, catches bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.company_website}
          onChange={(e) => setForm((p) => ({ ...p, company_website: e.target.value }))}
        />
      </div>

      <div>
        <label className="field-label" htmlFor="idea">
          What do you want to build?
        </label>
        <textarea
          id="idea"
          rows={5}
          className="field-input resize-none"
          placeholder="For example: I want to build an AI tool that helps real estate agents automatically qualify leads and schedule property visits."
          value={form.idea}
          onChange={(e) => update("idea", e.target.value)}
        />
        {errors.idea && <p className="mt-2 text-sm text-red-400">{errors.idea}</p>}
      </div>

      <div className="mt-8">
        <label className="field-label">Who will use it?</label>
        <PillGroup
          name="audience"
          options={AUDIENCE_OPTIONS}
          value={form.audience}
          onChange={(v) => update("audience", v)}
          error={errors.audience}
        />
      </div>

      <div className="mt-8">
        <label className="field-label">What stage are you at?</label>
        <PillGroup
          name="stage"
          options={STAGE_OPTIONS}
          value={form.stage}
          onChange={(v) => update("stage", v)}
          error={errors.stage}
        />
      </div>

      <div className="mt-8">
        <label className="field-label">What are you looking for?</label>
        <PillGroup
          name="goal"
          options={GOAL_OPTIONS}
          value={form.goal}
          onChange={(v) => update("goal", v)}
          error={errors.goal}
        />
      </div>

      <div className="mt-8">
        <label className="field-label">Expected budget range</label>
        <PillGroup
          name="budget"
          options={BUDGET_OPTIONS}
          value={form.budget}
          onChange={(v) => update("budget", v)}
          error={errors.budget}
        />
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="field-input"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
          {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label className="field-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="field-input"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
          {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
        </div>
      </div>

      <div className="mt-6">
        <label className="field-label" htmlFor="phone">
          WhatsApp / Phone
        </label>
        <input
          id="phone"
          type="tel"
          className="field-input"
          placeholder="+91 98765 43210"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
        {errors.phone && <p className="mt-2 text-sm text-red-400">{errors.phone}</p>}
      </div>

      {status === "error" && errorMessage && (
        <p className="mt-6 rounded-sm border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-10 w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Get My Idea Reviewed"}
      </button>
      <p className="mt-4 text-center text-xs text-ink-500">
        Submitting doesn&rsquo;t commit you to anything. Every idea is reviewed individually.
      </p>
    </form>
  );
}
