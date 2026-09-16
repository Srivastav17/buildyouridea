import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendLeadNotification, sendLeadConfirmation } from "@/lib/mailer";
import {
  AUDIENCE_OPTIONS,
  STAGE_OPTIONS,
  GOAL_OPTIONS,
  BUDGET_OPTIONS,
} from "@/lib/leadOptions";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isOneOf(value: unknown, options: readonly string[]) {
  return typeof value === "string" && options.includes(value);
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const idea = typeof body.idea === "string" ? body.idea.trim() : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const audience = body.audience;
  const stage = body.stage;
  const goal = body.goal;
  const budget = body.budget;

  const errors: Record<string, string> = {};
  if (idea.length < 15) errors.idea = "Tell us a bit more about what you want to build (15+ characters).";
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (phone.length < 6) errors.phone = "Please enter a valid phone / WhatsApp number.";
  if (!isOneOf(audience, AUDIENCE_OPTIONS)) errors.audience = "Please select who will use it.";
  if (!isOneOf(stage, STAGE_OPTIONS)) errors.stage = "Please select your current stage.";
  if (!isOneOf(goal, GOAL_OPTIONS)) errors.goal = "Please select what you're looking for.";
  if (!isOneOf(budget, BUDGET_OPTIONS)) errors.budget = "Please select an expected budget range.";

  // Honeypot: a hidden field bots tend to fill in.
  if (typeof body.company_website === "string" && body.company_website.trim() !== "") {
    return NextResponse.json({ ok: true }); // silently accept, do not store
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const attribution = (body.attribution ?? {}) as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim().slice(0, 500) : undefined);

  try {
    const lead = await prisma.lead.create({
      data: {
        idea: idea.slice(0, 5000),
        audience: audience as string,
        stage: stage as string,
        goal: goal as string,
        budget: budget as string,
        name: name.slice(0, 200),
        email: email.slice(0, 200),
        phone: phone.slice(0, 50),
        utmSource: str(attribution.utmSource),
        utmMedium: str(attribution.utmMedium),
        utmCampaign: str(attribution.utmCampaign),
        utmTerm: str(attribution.utmTerm),
        utmContent: str(attribution.utmContent),
        referrer: str(attribution.referrer),
        landingPage: str(attribution.landingPage),
        userAgent: str(req.headers.get("user-agent")),
      },
    });

    // Lead is already saved — a failed email shouldn't fail the request.
    // (Vercel serverless functions freeze right after the response is sent, so these
    // must be awaited or the sends never actually complete.)
    const results = await Promise.allSettled([
      sendLeadNotification(lead),
      sendLeadConfirmation(lead),
    ]);
    if (results[0].status === "rejected") {
      console.error("[lead-notification] failed to send:", results[0].reason);
    }
    if (results[1].status === "rejected") {
      console.error("[lead-confirmation] failed to send:", results[1].reason);
    }

    return NextResponse.json({ ok: true, id: lead.id });
  } catch (err) {
    console.error("[api/leads] failed to save lead:", err);
    return NextResponse.json(
      { error: "Something went wrong on our end. Please try again in a moment." },
      { status: 500 }
    );
  }
}
