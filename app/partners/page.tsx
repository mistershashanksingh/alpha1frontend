import type { Metadata } from "next";
import Link from "next/link";
import OemPartners from "../components/OemPartners";
import { Handshake, Link2, Radio, Factory, Shield, HardDrive, Settings, Zap, Rocket, Check, Mail } from "lucide-react";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export const metadata: Metadata = {
  title: "Partners",
  description: "Alpha1 IT Solutions partner ecosystem — Resellers, System Integrators, Channel Partners, and OEM collaborations.",
};

type Category = {
  Icon: ComponentType<LucideProps>;
  type: string;
  color: string;
  desc: string;
  benefits: string[];
};

const CATEGORIES: Category[] = [
  {
    Icon: Handshake, type: "Reseller Partner",
    color: "#1e88e5",
    desc: "As an authorised reseller, you gain access to Alpha1's full portfolio of enterprise IT products at competitive margins, backed by our pre-sales and post-sales support infrastructure.",
    benefits: ["Competitive partner pricing & margins", "Dedicated account management", "Access to demo equipment & labs", "Marketing & lead-generation support", "Joint customer engagement opportunities"],
  },
  {
    Icon: Link2, type: "System Integrator",
    color: "#7c3aed",
    desc: "System Integrator partners work alongside Alpha1 to design and deploy end-to-end IT infrastructure solutions for enterprise clients, leveraging our deep product expertise and project delivery experience.",
    benefits: ["Technical co-delivery support", "Access to certified engineers", "Joint solution design workshops", "Preferred project referral pipeline", "Co-branded proposal & bid support"],
  },
  {
    Icon: Radio, type: "Channel Partner",
    color: "#0891b2",
    desc: "Channel partners expand their service portfolio by incorporating Alpha1's solutions, reaching new market segments and driving incremental revenue through a structured partnership programme.",
    benefits: ["Tiered revenue-sharing model", "Exclusive territory rights (select regions)", "Quarterly business reviews & planning", "Training & certification sponsorship", "Dedicated partner portal access"],
  },
  {
    Icon: Factory, type: "OEM Partner",
    color: "#059669",
    desc: "Our OEM partnerships give hardware and software manufacturers a channel to deliver their products to enterprise clients across India through Alpha1's established sales and support network.",
    benefits: ["Direct enterprise market access", "Joint go-to-market planning", "Alpha1-certified integration & validation", "Customer success co-management", "Technology roadmap collaboration"],
  },
];

type Partner = { name: string; category: string; Icon: ComponentType<LucideProps> };

const CURRENT_PARTNERS: Partner[] = [
  { name: "Cyberstanc", category: "Technology Partner", Icon: Shield },
  { name: "AmZetta", category: "Storage OEM", Icon: HardDrive },
  { name: "ManageEngine", category: "Gold Partner", Icon: Settings },
  { name: "Zeperon", category: "Network Partner", Icon: Zap },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="section-badge" style={{ justifyContent: "center" }}>Partnerships</div>
          <h1 className="section-title" style={{ fontSize: "clamp(32px,5vw,60px)", textAlign: "center" }}>
            Our Partner <span>Ecosystem</span>
          </h1>
          <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
            We collaborate with industry-leading technology companies and channel partners to deliver unmatched enterprise IT solutions.
          </p>
        </div>
      </section>

      {/* OEM Partners — client component (tabs + logo cards) */}
      <OemPartners />
      {/* Partner Categories */}
      <section style={{ padding: "40px 24px 80px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-badge">Partner Types</div>
            <h2 className="section-title">Partnership <span>Categories</span></h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 18,
          }}
            className="partner-cat-grid"
          >
            {CATEGORIES.map((c, i) => (
              <div key={i} className="glass-card" style={{ padding: "24px 20px" }}>
                <div style={{ width: 46, height: 46, borderRadius: 11, background: `rgba(30,136,229,0.1)`, border: `1px solid ${c.color}33`, display: "flex", alignItems: "center", justifyContent: "center", color: c.color, marginBottom: 14 }}>
                  <c.Icon size={22} strokeWidth={1.8} />
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, color: c.color, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Partner Type</div>
                <h3 style={{ fontWeight: 800, fontSize: 16, color: "#fff", marginBottom: 10 }}>{c.type}</h3>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.58)", lineHeight: 1.7, marginBottom: 14 }}>{c.desc}</p>
                <h4 style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.38)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Partner Benefits</h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                  {c.benefits.map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: 7, fontSize: 11.5, color: "rgba(255,255,255,0.62)", alignItems: "flex-start" }}>
                      <Check size={13} color={c.color} strokeWidth={3} style={{ flexShrink: 0, marginTop: 2 }} />{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section style={{ padding: "80px 24px", background: "rgba(6,16,31,0.45)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="section-badge">Our Network</div>
            <h2 className="section-title">Trusted <span>Technology Partners</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 20 }}>
            {CURRENT_PARTNERS.map((p, i) => (
              <div key={i} className="partner-card">
                <div style={{ marginBottom: 12, display: "flex", justifyContent: "center", color: "#00d4ff" }}>
                  <p.Icon size={36} strokeWidth={1.8} />
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 6 }}>{p.name}</div>
                <div style={{ fontSize: 11, color: "rgba(0,212,255,0.75)", fontWeight: 500 }}>{p.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section style={{ padding: "80px 24px" }}>
        <div className="container">
          <div className="glass-md" style={{ borderRadius: 20, padding: "60px 40px", textAlign: "center" }}>
            <div style={{ marginBottom: 16, display: "flex", justifyContent: "center", color: "#00d4ff" }}>
              <Rocket size={48} strokeWidth={1.6} />
            </div>
            <h2 style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 800, color: "#fff", marginBottom: 16 }}>
              Ready to Partner with Alpha1?
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.8 }}>
              Join our growing partner ecosystem and unlock new revenue streams, technical expertise, and enterprise market access.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Apply to Become a Partner</Link>
              <a href="mailto:partners@alpha1itsolutions.com" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Mail size={16} /> partners@alpha1itsolutions.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
