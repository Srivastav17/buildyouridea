import { getChatCompletion } from "./openai";

const SUMMARY_SYSTEM_PROMPT = `You write a short, plain-language summary of a product idea someone submitted through a contact form, for use in their own confirmation email. Rules:
- 1-2 sentences, factual and neutral in tone.
- Only restate what's actually in their text — never add features, numbers, or claims they didn't mention.
- Write it as if describing their idea back to them ("You're looking to build...").
- No preamble, no quotation marks, just the summary itself.`;

export async function summarizeIdea(idea: string): Promise<string> {
  try {
    const summary = await getChatCompletion([
      { role: "system", content: SUMMARY_SYSTEM_PROMPT },
      { role: "user", content: idea },
    ]);
    return summary;
  } catch (err) {
    console.error("[lead-summary] failed to summarize, falling back to raw idea:", err);
    // Fall back to the visitor's own words, trimmed, so the email never breaks.
    return idea.length > 280 ? idea.slice(0, 277).trimEnd() + "…" : idea;
  }
}
