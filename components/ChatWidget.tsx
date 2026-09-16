"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface DisplayMessage {
  role: "user" | "assistant";
  content: string;
}

const STORAGE_KEY = "builidea_chat_session";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<DisplayMessage[]>([]);
  const [gateName, setGateName] = useState("");
  const [gateEmail, setGateEmail] = useState("");
  const [gatePhone, setGatePhone] = useState("");
  const [gateErrors, setGateErrors] = useState<Record<string, string>>({});
  const [gateSubmitting, setGateSubmitting] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.sessionId && Array.isArray(parsed.messages)) {
          setSessionId(parsed.sessionId);
          setMessages(parsed.messages);
        }
      }
    } catch {
      // ignore corrupt/blocked storage
    }
  }, []);

  useEffect(() => {
    if (!sessionId) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ sessionId, messages }));
    } catch {
      // ignore
    }
  }, [sessionId, messages]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function handleGateSubmit(e: React.FormEvent) {
    e.preventDefault();
    setGateErrors({});
    const errors: Record<string, string> = {};
    if (!EMAIL_RE.test(gateEmail.trim())) errors.email = "Enter a valid email address.";
    if (gatePhone.trim().length < 6) errors.phone = "Enter a valid phone number.";
    if (Object.keys(errors).length > 0) {
      setGateErrors(errors);
      return;
    }

    setGateSubmitting(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "start",
          name: gateName.trim(),
          email: gateEmail.trim(),
          phone: gatePhone.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setGateErrors(data.errors || { email: data.error || "Something went wrong." });
        return;
      }
      setSessionId(data.sessionId);
      setMessages([{ role: "assistant", content: data.message }]);
    } catch {
      setGateErrors({ email: "Couldn't connect. Please try again." });
    } finally {
      setGateSubmitting(false);
    }
  }

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || !sessionId || sending) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "message", sessionId, message: text }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message || "Something went wrong. Please try again." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Couldn't connect — please try again in a moment." },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 flex h-[520px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-sm border border-ink-700/60 bg-ink-950 shadow-2xl">
          <div className="flex items-center justify-between border-b border-ink-800 bg-ink-900/80 px-4 py-3">
            <div>
              <p className="font-display text-sm font-semibold text-white">Builidea Assistant</p>
              <p className="font-mono text-[10px] text-ink-500">ask about process, pricing, work</p>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-sm text-ink-400 transition hover:bg-ink-800 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {!sessionId ? (
            <form onSubmit={handleGateSubmit} className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
              <p className="text-sm leading-relaxed text-ink-300">
                Quick before we start — share your email and phone so we can follow up if the chat
                doesn&rsquo;t cover everything.
              </p>
              <div>
                <input
                  type="text"
                  placeholder="Name (optional)"
                  value={gateName}
                  onChange={(e) => setGateName(e.target.value)}
                  className="field-input !py-2.5 text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={gateEmail}
                  onChange={(e) => setGateEmail(e.target.value)}
                  className="field-input !py-2.5 text-sm"
                />
                {gateErrors.email && <p className="mt-1 text-xs text-red-400">{gateErrors.email}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp"
                  value={gatePhone}
                  onChange={(e) => setGatePhone(e.target.value)}
                  className="field-input !py-2.5 text-sm"
                />
                {gateErrors.phone && <p className="mt-1 text-xs text-red-400">{gateErrors.phone}</p>}
              </div>
              <button type="submit" disabled={gateSubmitting} className="btn-primary !py-2.5 text-sm">
                {gateSubmitting ? "Starting…" : "Start chat"}
              </button>
              <p className="text-[11px] text-ink-500">
                Your details are only used to follow up on this conversation.
              </p>
            </form>
          ) : (
            <>
              <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`max-w-[85%] rounded-sm px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "ml-auto bg-accent-500 text-ink-950"
                        : "bg-ink-800 text-ink-100"
                    }`}
                  >
                    {m.content}
                  </div>
                ))}
                {sending && (
                  <div className="max-w-[70%] rounded-sm bg-ink-800 px-3.5 py-2.5 text-sm text-ink-400">
                    …
                  </div>
                )}
              </div>
              <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-ink-800 p-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message…"
                  className="field-input !py-2.5 text-sm"
                  disabled={sending}
                />
                <button
                  type="submit"
                  disabled={sending || !input.trim()}
                  aria-label="Send"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent-500 text-ink-950 transition hover:bg-accent-400 disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </>
          )}
        </div>
      )}

      <button
        type="button"
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((o) => !o)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500 text-ink-950 shadow-2xl transition hover:bg-accent-400 active:scale-95"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
