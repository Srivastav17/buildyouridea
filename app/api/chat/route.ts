import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getChatCompletion, type ChatMessage } from "@/lib/openai";
import { sendChatTranscript, type StoredChatMessage } from "@/lib/mailer";
import { CHAT_SYSTEM_PROMPT } from "@/lib/chatKnowledge";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 2000;
const MAX_TURNS = 30; // user turns per session before we ask them to switch to email

function greeting(name?: string) {
  const who = name ? name.split(/\s+/)[0] : "";
  return `Hey${who ? " " + who : ""}! Thanks for that. I'm the Builidea assistant — ask me anything about how projects work, what's been built before, pricing, or timelines. What's on your mind, or want to tell me what you're trying to build?`;
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const action = body.action;

  if (action === "start") {
    const name = typeof body.name === "string" ? body.name.trim().slice(0, 200) : "";
    const email = typeof body.email === "string" ? body.email.trim().slice(0, 200) : "";
    const phone = typeof body.phone === "string" ? body.phone.trim().slice(0, 50) : "";

    const errors: Record<string, string> = {};
    if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
    if (phone.length < 6) errors.phone = "Please enter a valid phone / WhatsApp number.";
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const openingMessage = greeting(name);
    const messages: StoredChatMessage[] = [
      { role: "assistant", content: openingMessage, ts: new Date().toISOString() },
    ];

    try {
      let session = await prisma.chatSession.create({
        data: {
          name: name || null,
          email,
          phone,
          messages: messages as unknown as object,
          turnCount: 0,
        },
      });

      const rootMessageId = `<chat-${session.id}-0@builidea.com>`;
      session = await prisma.chatSession.update({
        where: { id: session.id },
        data: { rootMessageId },
      });

      try {
        await sendChatTranscript(session);
      } catch (err) {
        console.error("[chat-transcript] failed to send on start:", err);
      }

      return NextResponse.json({ sessionId: session.id, message: openingMessage });
    } catch (err) {
      console.error("[api/chat] failed to start session:", err);
      return NextResponse.json(
        { error: "Something went wrong on our end. Please try again in a moment." },
        { status: 500 }
      );
    }
  }

  if (action === "message") {
    const sessionId = typeof body.sessionId === "string" ? body.sessionId : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!sessionId) {
      return NextResponse.json({ error: "Missing session." }, { status: 400 });
    }
    if (!message) {
      return NextResponse.json({ error: "Message can't be empty." }, { status: 400 });
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: "That message is too long — please shorten it." },
        { status: 400 }
      );
    }

    const session = await prisma.chatSession.findUnique({ where: { id: sessionId } });
    if (!session) {
      return NextResponse.json({ error: "Chat session not found." }, { status: 404 });
    }

    const existingMessages = (session.messages as unknown as StoredChatMessage[]) || [];

    if (session.turnCount >= MAX_TURNS) {
      return NextResponse.json({
        message:
          "We've covered a lot here — for anything more specific, the best next step is to describe your idea on the form and it'll get picked up personally. I've kept a note of this conversation.",
      });
    }

    const nowIso = new Date().toISOString();
    const userMsg: StoredChatMessage = { role: "user", content: message, ts: nowIso };

    const visitorContext = `\n\nVISITOR: name = ${session.name || "not given"}. Do not repeat their email or phone number back to them — you already have it, no need to ask again or recite it.`;

    const openAiMessages: ChatMessage[] = [
      { role: "system", content: CHAT_SYSTEM_PROMPT + visitorContext },
      ...existingMessages
        .filter((m) => m.role === "user" || m.role === "assistant")
        .map((m) => ({ role: m.role, content: m.content }) as ChatMessage),
      { role: "user", content: message },
    ];

    let reply: string;
    try {
      reply = await getChatCompletion(openAiMessages);
    } catch (err) {
      console.error("[api/chat] OpenAI call failed:", err);
      return NextResponse.json(
        {
          message:
            "Sorry, I'm having trouble responding right now. Could you try again in a moment?",
        },
        { status: 200 }
      );
    }

    const assistantMsg: StoredChatMessage = {
      role: "assistant",
      content: reply,
      ts: new Date().toISOString(),
    };
    const updatedMessages = [...existingMessages, userMsg, assistantMsg];
    const newTurnCount = session.turnCount + 1;

    const updated = await prisma.chatSession.update({
      where: { id: session.id },
      data: {
        messages: updatedMessages as unknown as object,
        turnCount: newTurnCount,
      },
    });

    try {
      await sendChatTranscript(updated);
    } catch (err) {
      console.error("[chat-transcript] failed to send:", err);
    }

    return NextResponse.json({ message: reply });
  }

  return NextResponse.json({ error: "Unknown action." }, { status: 400 });
}
