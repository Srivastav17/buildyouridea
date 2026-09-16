import nodemailer from "nodemailer";
import type { Lead, ChatSession } from "@prisma/client";
import type { ChatMessage } from "./openai";

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
    `New lead received on Builidea`,
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

export async function sendLeadConfirmation(lead: Lead) {
  const transport = getTransport();
  const from = process.env.LEAD_FROM_EMAIL || "leads@builidea.com";
  const replyTo = process.env.LEAD_NOTIFICATION_EMAIL || from;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://builidea.com";

  const subject = "Got your idea — here's what happens next";
  const firstName = lead.name.trim().split(/\s+/)[0] || lead.name;

  const text = [
    `Hi ${firstName},`,
    ``,
    `Thanks for sharing your idea with Builidea — this is a quick confirmation that it's been received:`,
    ``,
    `"${lead.idea}"`,
    ``,
    `What happens next: this gets reviewed personally, and you'll hear back — usually within a couple of business days — with initial thoughts on scope and how to approach it. There's no automated proposal or sales sequence after this; the next email you get will be a real reply about your specific idea.`,
    ``,
    `See real products built end to end while you wait: ${siteUrl}/work`,
    ``,
    `If you want to add anything in the meantime, just reply to this email — it goes straight to the inbox this gets reviewed from.`,
    ``,
    `Talk soon,`,
    `Builidea`,
    siteUrl,
  ].join("\n");

  const html = `
  <div style="background:#f4f4f5; padding:32px 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px; margin:0 auto; background:#ffffff; border:1px solid #e5e5e5; border-radius:6px; overflow:hidden;">
      <tr>
        <td>
          <img src="${siteUrl}/api/email-header" width="560" height="168" alt="Builidea" style="display:block; width:100%; height:auto; border:0;" />
        </td>
      </tr>
      <tr>
        <td style="padding:32px 32px 8px;">
          <p style="margin:0 0 16px; font-size:15px; line-height:1.6; color:#1a1a1a;">Hi ${escapeHtml(firstName)},</p>
          <p style="margin:0 0 16px; font-size:15px; line-height:1.6; color:#1a1a1a;">
            Thanks for sharing your idea with Builidea — this is a quick confirmation that it&rsquo;s been received:
          </p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
            <tr>
              <td style="border-left:3px solid #F5A623; background:#faf8f5; padding:14px 16px; font-size:14px; line-height:1.6; color:#3a3a3a; font-style:italic;">
                ${escapeHtml(lead.idea)}
              </td>
            </tr>
          </table>
          <p style="margin:0 0 16px; font-size:15px; line-height:1.6; color:#1a1a1a;">
            <strong>What happens next:</strong> this gets reviewed personally, and you&rsquo;ll hear back &mdash; usually within a couple of business days &mdash; with initial thoughts on scope and how to approach it. No automated proposal, no sales sequence &mdash; the next email you get will be a real reply about your specific idea.
          </p>
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0;">
            <tr>
              <td style="background:#F5A623; border-radius:4px;">
                <a href="${siteUrl}/work" style="display:inline-block; padding:12px 24px; font-size:14px; font-weight:600; color:#0B0D10; text-decoration:none;">
                  See what&rsquo;s already been built &rarr;
                </a>
              </td>
            </tr>
          </table>
          <p style="margin:0 0 24px; font-size:14px; line-height:1.6; color:#555;">
            Want to add anything before then? Just reply to this email &mdash; it goes straight to the inbox this gets reviewed from.
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 32px; border-top:1px solid #eee; font-size:12px; color:#999;">
          Builidea &middot; <a href="${siteUrl}" style="color:#999;">builidea.com</a> &middot; part of India Fashion World
        </td>
      </tr>
    </table>
  </div>
  `;

  if (!transport) {
    console.log("[lead-confirmation] SMTP not configured, logging instead:\n", text);
    return;
  }

  await transport.sendMail({ from, to: lead.email, replyTo, subject, text, html });
}

export interface StoredChatMessage extends ChatMessage {
  ts: string;
}

export async function sendChatTranscript(session: ChatSession) {
  const transport = getTransport();
  const to = process.env.LEAD_NOTIFICATION_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL || "leads@builidea.com";
  if (!transport || !to) {
    console.log(`[chat-transcript] SMTP not configured, skipping for session ${session.id}`);
    return;
  }

  const messages = (session.messages as unknown as StoredChatMessage[]) || [];
  const rootMessageId = session.rootMessageId || `<chat-${session.id}@builidea.com>`;
  const thisMessageId = `<chat-${session.id}-${session.turnCount}@builidea.com>`;

  const subject = `Website chat — ${session.name || session.email}`;
  const transcriptText = messages
    .filter((m) => m.role !== "system")
    .map((m) => `${m.role === "user" ? "Visitor" : "Assistant"} (${m.ts}):\n${m.content}`)
    .join("\n\n");

  const text = [
    `Chat session ${session.id}`,
    `Name: ${session.name || "(not given)"}`,
    `Email: ${session.email}`,
    `Phone: ${session.phone}`,
    `Started: ${session.createdAt.toISOString()}`,
    ``,
    `--- Transcript so far ---`,
    ``,
    transcriptText,
  ].join("\n");

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; max-width:600px; color:#1a1a1a;">
      <p style="margin:0 0 4px;"><strong>Chat session:</strong> ${escapeHtml(session.id)}</p>
      <p style="margin:0 0 4px;"><strong>Name:</strong> ${escapeHtml(session.name || "(not given)")}</p>
      <p style="margin:0 0 4px;"><strong>Email:</strong> ${escapeHtml(session.email)}</p>
      <p style="margin:0 0 16px;"><strong>Phone:</strong> ${escapeHtml(session.phone)}</p>
      <hr style="border:none; border-top:1px solid #ddd; margin:0 0 16px;" />
      ${messages
        .filter((m) => m.role !== "system")
        .map(
          (m) => `
        <p style="margin:0 0 14px;">
          <strong style="color:${m.role === "user" ? "#0B0D10" : "#B36B00"};">${
            m.role === "user" ? "Visitor" : "Assistant"
          }</strong>
          <span style="color:#999; font-size:12px;"> — ${escapeHtml(m.ts)}</span><br/>
          <span style="white-space:pre-wrap;">${escapeHtml(m.content)}</span>
        </p>`
        )
        .join("")}
    </div>
  `;

  await transport.sendMail({
    from,
    to,
    replyTo: session.email,
    subject,
    text,
    html,
    messageId: thisMessageId,
    references: rootMessageId,
    inReplyTo: session.turnCount > 0 ? rootMessageId : undefined,
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
