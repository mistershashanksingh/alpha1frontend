"use client";
import { useState } from "react";

type Msg = { role: "bot" | "user"; text: string };

const INITIAL: Msg[] = [
  { role: "bot", text: "👋 Hi! I'm Alpha1's AI Assistant. How can I help you today?" },
  { role: "bot", text: "You can ask me about our services, solutions, partnerships, or how to contact our team." },
];

const AUTO_REPLIES: Record<string, string> = {
  service: "We offer AmZetta Storage, Cyberstanc DLP, Zeperon, and ManageEngine solutions. Which interests you?",
  partner: "We work with Resellers, System Integrators, Channel Partners and OEMs. Visit our Partners page to learn more!",
  career: "We're always looking for talented people! Check our Careers page for current openings.",
  contact: "You can reach us at info@alpha1itsolutions.com or visit our Contact page.",
  price: "Our pricing depends on your specific requirements. Contact our sales team for a custom quote.",
  default: "Thanks for reaching out! Our team will get back to you shortly. You can also email us at info@alpha1itsolutions.com.",
};

function autoReply(text: string): string {
  const lower = text.toLowerCase();
  if (lower.includes("service") || lower.includes("solution") || lower.includes("product")) return AUTO_REPLIES.service;
  if (lower.includes("partner")) return AUTO_REPLIES.partner;
  if (lower.includes("career") || lower.includes("job") || lower.includes("hire")) return AUTO_REPLIES.career;
  if (lower.includes("contact") || lower.includes("reach") || lower.includes("email")) return AUTO_REPLIES.contact;
  if (lower.includes("price") || lower.includes("cost") || lower.includes("quote")) return AUTO_REPLIES.price;
  return AUTO_REPLIES.default;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>(INITIAL);
  const [input, setInput] = useState("");

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Msg = { role: "user", text };
    setMsgs((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      setMsgs((prev) => [...prev, { role: "bot", text: autoReply(text) }]);
    }, 600);
  };

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <div style={{ width:36, height:36, borderRadius:"50%", background:"linear-gradient(135deg,#1e88e5,#00d4ff)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>🤖</div>
              <div>
                <div style={{ fontWeight:700, fontSize:14, color:"#fff" }}>Alpha1 AI Assistant</div>
                <div style={{ fontSize:11, color:"rgba(0,212,255,0.8)" }}>● Online — Powered by AI</div>
              </div>
            </div>
          </div>
          <div className="chatbot-messages">
            {msgs.map((m, i) => (
              <div key={i} className={m.role === "bot" ? "chat-msg-bot" : "chat-msg-user"}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input-row">
            <input
              className="chatbot-input"
              placeholder="Type your message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
            />
            <button className="chatbot-send" onClick={send}>➤</button>
          </div>
        </div>
      )}

      {/* FAB */}
      <button className="chatbot-fab" onClick={() => setOpen(!open)} aria-label="Open chat">
        {open ? "✕" : "💬"}
      </button>
    </>
  );
}
