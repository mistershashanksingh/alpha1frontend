import type { Metadata } from "next";
import Link from "next/link";
import { Check, Lock, ShieldAlert, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Alpha1 IT Solutions — Enterprise Networking & Cybersecurity",
  description:
    "Alpha1 IT Solutions and Consulting Pvt. Ltd. delivers enterprise networking, cybersecurity, and digital infrastructure.",
};

const STATS = [
  { value: "7+ yr",     label: "experience" },
  { value: "100+",      label: "projects delivered"  },
  { value: "50+",       label: "partners"     },
  { value: "24*7",      label: "support"   },
];

const TESTIMONIALS = [
  { quote: "Alpha1 completely transformed our network architecture. The Zeperon ZTNA implementation was flawless and significantly improved our security posture.", author: "CTO, Financial Services Enterprise" },
  { quote: "Their expertise with AmZetta storage solutions helped us scale our data centers efficiently with zero downtime. Highly recommended IT partner.", author: "IT Director, Healthcare Group" },
  { quote: "The 24*7 support we receive from Alpha1 is exceptional. They are truly an extension of our own IT department.", author: "Operations Head, Manufacturing Corp" },
];

const SECURITY_METRICS = [
  { Icon: Lock,            label: "Data Encrypted",   val: "100%" },
  { Icon: ShieldAlert,     label: "Threats Blocked",  val: "99.9%" },
  { Icon: ClipboardCheck,  label: "Compliance Ready", val: "ISO 27001" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", padding:"120px 24px 80px", textAlign:"center" }}>
        <div style={{ maxWidth:860, margin:"0 auto" }}>
          <div className="section-badge anim-fade delay-1">Enterprise IT Solutions &amp; Consulting</div>
          <h1 className="anim-fade-up delay-2" style={{ fontSize:"clamp(36px,6vw,72px)", fontWeight:800, lineHeight:1.1, marginBottom:12 }}>
            <span className="gradient-text">Alpha1 IT Solutions</span>
          </h1>
          <p className="anim-fade-up delay-3" style={{ fontSize:"clamp(16px,2vw,22px)", color:"rgba(255,255,255,0.6)", marginBottom:8, fontWeight:300, letterSpacing:"0.02em" }}>
            &amp; Consulting Pvt. Ltd.
          </p>
          <p className="anim-fade-up delay-4" style={{ fontSize:"clamp(15px,2vw,20px)", color:"rgba(255,255,255,0.55)", marginBottom:40, lineHeight:1.75, maxWidth:640, margin:"12px auto 40px" }}>
            Transforming enterprises through world-class networking, cybersecurity, and digital infrastructure solutions.
          </p>
          <div className="anim-fade-up delay-5" style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/solutions" className="btn-primary" style={{ fontSize:15 }}>Explore Solutions →</Link>
            <Link href="/contact"  className="btn-outline" style={{ fontSize:15 }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar (Strict Layout) ────────────────────── */}
      <section style={{ padding:"0 24px 80px" }}>
        <div className="container">
          <div className="glass-md" style={{ borderRadius:18, padding:"24px", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-around", gap: 16 }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span className="stat-value" style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>{s.value}</span>
                <span className="stat-label" style={{ marginTop: 0, textTransform: "lowercase", fontSize: "clamp(14px, 1.5vw, 18px)" }}>{s.label}</span>
                {i < STATS.length - 1 && <span style={{ color: "rgba(255,255,255,0.2)", margin: "0 12px", fontSize: 24 }}>|</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cybersecurity Highlight ───────────────────────── */}
      <section className="cyber-section" style={{ padding:"80px 24px" }}>
        <div className="container" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:56, alignItems:"center" }}>
          <div>
            <div className="section-badge">Cybersecurity Spotlight</div>
            <h2 className="section-title">Protect Your Business with <span>Zeperon & Cyberstanc</span></h2>
            <div className="divider" />
            <p style={{ color:"rgba(255,255,255,0.68)", lineHeight:1.85, fontSize:15, marginBottom:24 }}>
              In today's threat landscape, security cannot be an afterthought. Our advanced Zero Trust Network Access (ZTNA) and Data Loss Prevention (DLP) solutions provide comprehensive protection.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:12, marginBottom:32 }}>
              {["\"Never trust, always verify\" ZTNA principles","Real-time data monitoring & threat detection","Advanced endpoint protection & control","Granular application-level access control"].map((f, i) => (
                <div key={i} style={{ display:"flex", gap:10, alignItems:"center" }}>
                  <Check size={16} color="#00d4ff" strokeWidth={3} />
                  <span style={{ fontSize:14, color:"rgba(255,255,255,0.7)" }}>{f}</span>
                </div>
              ))}
            </div>
            <Link href="/solutions" className="btn-primary">Explore Security Solutions</Link>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {SECURITY_METRICS.map((m, i) => (
              <div key={i} className="glass-card" style={{ padding:"20px 24px", display:"flex", alignItems:"center", gap:20 }}>
                <div style={{ width:50, display:"flex", alignItems:"center", justifyContent:"center", color:"#00d4ff" }}>
                  <m.Icon size={32} strokeWidth={1.8} />
                </div>
                <div>
                  <div style={{ fontSize:22, fontWeight:800, background:"linear-gradient(135deg,#1e88e5,#00d4ff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>{m.val}</div>
                  <div style={{ fontSize:13, color:"rgba(255,255,255,0.55)" }}>{m.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section style={{ padding:"80px 24px" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div className="section-badge">Client Feedback</div>
            <h2 className="section-title">What Our <span>Clients Say</span></h2>
            <p className="section-subtitle" style={{ margin:"0 auto" }}>
              Trusted by leading enterprises to deliver mission-critical IT infrastructure.
            </p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:24 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="glass-card" style={{ padding:32 }}>
                <div style={{ color:"#00d4ff", fontSize:40, lineHeight:0.5, marginBottom:16 }}>"</div>
                <p style={{ fontSize:15, color:"rgba(255,255,255,0.8)", lineHeight:1.7, marginBottom:24, fontStyle:"italic" }}>
                  {t.quote}
                </p>
                <div style={{ borderTop:"1px solid rgba(255,255,255,0.1)", paddingTop:16 }}>
                  <div style={{ fontSize:13, fontWeight:600, color:"#fff" }}>{t.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────── */}
      <section style={{ padding:"40px 24px 80px" }}>
        <div className="container">
          <div className="glass-md" style={{ borderRadius:20, padding:"56px 40px", textAlign:"center" }}>
            <div className="section-badge" style={{ justifyContent:"center" }}>Get Started</div>
            <h2 style={{ fontSize:"clamp(24px,3.5vw,42px)", fontWeight:800, color:"#fff", marginBottom:16 }}>
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p style={{ fontSize:16, color:"rgba(255,255,255,0.6)", maxWidth:560, margin:"0 auto 36px", lineHeight:1.75 }}>
              Connect with our expert team to discover how Alpha1 can elevate your enterprise technology capabilities.
            </p>
            <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
              <Link href="/contact" className="btn-primary">Schedule a Consultation</Link>
              <Link href="/solutions" className="btn-outline">View Solutions</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
