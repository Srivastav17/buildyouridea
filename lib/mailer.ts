import nodemailer from "nodemailer";
import type { Lead } from "@prisma/client";

function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) return null;

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });
}

export async function sendLeadNotification(lead: Lead) {
  const transport = getTransport();
  const to = process.env.LEAD_NOTIFICATION_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL || "leads@builidea.com";

  const subject = `New idea submitted: ${lead.name} (${lead.goal})`;
  const text = [
    `New lead received on Buildia`,
    ``,
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone/WhatsApp: ${lead.phone}`,
    ``,
    `Idea: ${lead.idea}`,
    ``,
    `Who will use it: ${lead.audience}`,
    `Stage: ${lead.stage}`,
    `Looking for: ${lead.goal}`,
    `Budget: ${lead.budget}`,
    ``,
    `Source: ${lead.utmSource || "direct"} / ${lead.utmMedium || "-"} / ${lead.utmCampaign || "-"}`,
    `Landing page: ${lead.landingPage || "-"}`,
    `Referrer: ${lead.referrer || "-"}`,
    ``,
    `Lead ID: ${lead.id}`,
  ].join("\n");

  if (!transport || !to) {
    // No SMTP configured — log so the submission is never silently lost.
    console.log("[lead-notification] SMTP not configured, logging instead:\n", text);
    return;
  }

  await transport.sendMail({ from, to, replyTo: lead.email, subject, text });
}
