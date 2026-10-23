
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  MessageCircle,
  Send,
  X,
  Sparkles,
  LoaderCircle,
  Minimize2,
  GraduationCap,
  Wallet,
  BookOpen,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

import {
  askCampusKhojAI,
  type ChatMessage,
} from "./aiService";

const LOGO = "/campuskhoj-ai-logo.png";

const suggestions = [
  {
    icon: GraduationCap,
    title: "Find B.Tech Colleges",
    subtitle: "Explore college options",
    prompt: "Mujhe Greater Noida aur NCR mein B.Tech CSE colleges ke options batao.",
  },
  {
    icon: Wallet,
    title: "Compare Course Fees",
    subtitle: "Plan your budget",
    prompt: "B.Tech CSE colleges ki fees compare karne mein meri help karo.",
  },
  {
    icon: BookOpen,
    title: "Admission Guidance",
    subtitle: "Understand eligibility",
    prompt: "B.Tech admission ke liye eligibility aur admission process samjhao.",
  },
];

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Namaste! 👋 Welcome to CampusKhoj AI!\n\nMain aapka personal college discovery assistant hoon. 🎓\n\nAap mujhe apna course, budget aur preferred location bata sakte hain. Main aapko college options aur admission process samajhne mein help karunga.",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, loading, open, minimized]);

  useEffect(() => {
    if (open && !minimized) {
      const timer = window.setTimeout(() => {
        inputRef.current?.focus();
      }, 250);

      return () => window.clearTimeout(timer);
    }
  }, [open, minimized]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();

    if (!trimmed || loading) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: trimmed,
    };

    const nextMessages = [...messages, userMessage].slice(-10);

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const reply = await askCampusKhojAI(nextMessages);

      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: reply,
        },
      ]);
    } catch (error) {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "AI se connection nahi ho paaya. Please dobara try karein.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  function startNewChat() {
    if (loading) return;

    setMessages([
      {
        role: "assistant",
        content:
          "Namaste! 👋 Main CampusKhoj AI hoon.\n\nAaj aap kis course ya college ke baare mein jaanna chahte hain? 🎓",
      },
    ]);
    setInput("");
  }

  return (
    <>
      {/* Floating AI Agent Button */}
      <button
        type="button"
        onClick={() => {
          setOpen((value) => !value);
          setMinimized(false);
        }}
        aria-label={open ? "Close CampusKhoj AI" : "Open CampusKhoj AI"}
        aria-expanded={open}
        className="group fixed bottom-5 right-5 z-[100] grid h-[68px] w-[68px] place-items-center rounded-full border-2 border-amber-300 bg-[#10192c] p-1 shadow-[0_8px_35px_rgba(245,185,50,0.4)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_45px_rgba(245,185,50,0.55)]"
      >
        {open ? (
          <span className="grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-[#10192c]">
            <X size={27} />
          </span>
        ) : (
          <img
            src={LOGO}
            alt="CampusKhoj AI"
            className="h-full w-full rounded-full object-cover"
          />
        )}

        {!open && (
          <>
            <span className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full border-2 border-[#10192c] bg-emerald-400" />
            <span className="pointer-events-none absolute bottom-[76px] right-0 w-max rounded-xl border border-amber-200 bg-white px-3 py-2 text-xs font-bold text-[#10192c] opacity-0 shadow-xl transition group-hover:opacity-100">
              Ask CampusKhoj AI ✨
            </span>
          </>
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <section
          aria-label="CampusKhoj AI assistant"
          className={`fixed bottom-[100px] right-3 z-[100] flex w-[min(420px,calc(100vw-24px))] flex-col overflow-hidden rounded-[26px] border border-amber-200/70 bg-white shadow-[0_25px_90px_rgba(15,23,42,0.28)] transition-all duration-300 sm:right-5 ${
            minimized
              ? "h-[76px]"
              : "h-[min(680px,calc(100dvh-125px))]"
          }`}
        >
          {/* Premium Header */}
          <header className="relative flex shrink-0 items-center gap-3 overflow-hidden bg-gradient-to-br from-[#10192c] via-[#172544] to-[#0b1220] px-4 py-4 text-white">
            <div className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full border border-amber-300/20" />
            <div className="pointer-events-none absolute -right-2 -top-8 h-24 w-24 rounded-full border border-amber-300/20" />

            <div className="relative h-[54px] w-[54px] shrink-0 overflow-hidden rounded-2xl border border-amber-300/70 bg-[#10192c] shadow-[0_0_22px_rgba(245,185,50,0.2)]">
              <img
                src={LOGO}
                alt="CampusKhoj AI Robot"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="relative min-w-0 flex-1">
              <h2 className="flex flex-wrap items-center gap-1.5 text-[17px] font-extrabold tracking-tight">
                <span>CampusKhoj</span>
                <span className="text-amber-300">AI</span>
                <Sparkles size={16} className="text-amber-300" />
              </h2>

              <p className="mt-1 text-[11px] text-slate-300 sm:text-xs">
                Your personal college assistant
              </p>

              <p className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                Here to help you
              </p>
            </div>

            <div className="relative flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={() => setMinimized((value) => !value)}
                aria-label={minimized ? "Expand chat" : "Minimize chat"}
                className="grid h-9 w-9 place-items-center rounded-xl text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <Minimize2 size={17} />
              </button>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="grid h-9 w-9 place-items-center rounded-xl text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
          </header>

          {!minimized && (
            <>
              {/* Chat Messages */}
              <div
                className="flex-1 space-y-4 overflow-y-auto bg-gradient-to-b from-slate-50 to-white p-4"
                aria-live="polite"
                aria-relevant="additions text"
              >
                {messages.map((message, index) => (
                  <div
                    key={`${index}-${message.role}`}
                    className={`flex items-end gap-2 ${
                      message.role === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="mb-1 h-8 w-8 shrink-0 overflow-hidden rounded-full border border-amber-200 bg-[#10192c]">
                        <img
                          src={LOGO}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] whitespace-pre-wrap break-words rounded-[19px] px-4 py-3 text-[13px] leading-[1.7] ${
                        message.role === "user"
                          ? "rounded-br-md bg-gradient-to-br from-[#10192c] to-[#20365f] text-white shadow-md"
                          : "rounded-bl-md border border-slate-200/80 bg-white text-slate-700 shadow-[0_3px_12px_rgba(15,23,42,0.04)]"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}

                {/* Quick Suggestions */}
                {messages.length === 1 && !loading && (
                  <div className="pt-1">
                    <p className="mb-3 flex items-center gap-2 text-xs font-bold text-[#10192c]">
                      <Sparkles size={15} className="text-amber-500" />
                      Aap kya jaanna chahte hain?
                    </p>

                    <div className="space-y-2">
                      {suggestions.map((suggestion) => {
                        const Icon = suggestion.icon;

                        return (
                          <button
                            key={suggestion.title}
                            type="button"
                            onClick={() => void sendMessage(suggestion.prompt)}
                            className="group flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-50/60 hover:shadow-md"
                          >
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 text-[#10192c] transition group-hover:from-amber-300 group-hover:to-amber-400">
                              <Icon size={20} />
                            </span>

                            <span className="min-w-0 flex-1">
                              <span className="block text-xs font-bold text-[#10192c] sm:text-sm">
                                {suggestion.title}
                              </span>
                              <span className="mt-1 block text-[11px] text-slate-500">
                                {suggestion.subtitle}
                              </span>
                            </span>

                            <ArrowRight
                              size={17}
                              className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-amber-600"
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Loading Indicator */}
                {loading && (
                  <div className="flex items-end gap-2">
                    <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-amber-200 bg-[#10192c]">
                      <img
                        src={LOGO}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3 text-xs text-slate-500 shadow-sm">
                      <LoaderCircle
                        size={16}
                        className="animate-spin text-amber-500"
                      />
                      CampusKhoj AI is thinking...
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="shrink-0 border-t border-slate-200 bg-white p-3">
                {messages.length > 1 && !loading && (
                  <div className="mb-2 flex justify-end">
                    <button
                      type="button"
                      onClick={startNewChat}
                      className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-[11px] font-semibold text-slate-500 transition hover:bg-amber-50 hover:text-amber-700"
                    >
                      <RotateCcw size={12} />
                      New chat
                    </button>
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1.5 transition focus-within:border-amber-400 focus-within:ring-4 focus-within:ring-amber-100/70"
                >
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    maxLength={2000}
                    placeholder="Ask me about colleges..."
                    aria-label="Your message"
                    className="min-w-0 flex-1 bg-transparent px-2 py-2.5 text-[13px] text-slate-800 outline-none placeholder:text-slate-400"
                  />

                  <button
                    type="submit"
                    disabled={!input.trim() || loading}
                    aria-label="Send message"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-amber-300 to-amber-500 text-[#10192c] shadow-sm transition hover:scale-105 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
                  >
                    {loading ? (
                      <LoaderCircle size={18} className="animate-spin" />
                    ) : (
                      <Send size={18} />
                    )}
                  </button>
                </form>

                <p className="mt-2 flex items-center justify-center gap-1 text-center text-[10px] text-slate-400">
                  <Sparkles size={11} className="text-amber-500" />
                  Powered by AI · Verify important details with colleges
                </p>
              </div>
            </>
          )}
        </section>
      )}
    </>
  );
}
