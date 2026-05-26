import type { Metadata } from "next";
import Link from "next/link";
import { HardDrive, Shield, Zap, Settings, Check } from "lucide-react";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Alpha1 IT Solutions' enterprise services — AmZetta Storage, Cyberstanc DLP, Zeperon, and ManageEngine.",
};

type Service = {
  Icon: ComponentType<LucideProps>;
  title: string;
  tag: string;
  color: string;
  desc: string;
  features: string[];
  useCases: string[];
};

const SERVICES: Service[] = [
  {
    Icon: HardDrive,
    title: "AmZetta Storage Solutions",
    tag: "Enterprise Storage",
    color: "#1e88e5",
    desc: "AmZetta delivers high-performance, enterprise-grade storage solutions designed for modern data-intensive workloads. Our AmZetta portfolio provides NAS, SAN, and unified storage platforms that deliver high availability, redundancy, and scalability.",
    features: [
      "Unified NAS & SAN storage architectures",
      "High availability with automatic failover",
      "Scalable from SMB to enterprise deployments",
      "Advanced data deduplication & compression",
      "Seamless cloud integration & hybrid storage",
      "24×7 monitoring and proactive support",
    ],
    useCases: ["Data centres", "Backup & DR", "Virtualisation", "Media & entertainment"],
  },
  {
    Icon: Shield,
    title: "Cyberstanc DLP",
    tag: "Data Loss Prevention",
    color: "#7c3aed",
    desc: "Cyberstanc provides a next-generation Data Loss Prevention platform that safeguards your organisation's sensitive data from both insider threats and sophisticated external attacks. Our DLP solution offers comprehensive visibility and control across endpoints, networks, and cloud environments.",
    features: [
      "Real-time data discovery and classification",
      "Endpoint, network & cloud DLP coverage",
      "Advanced threat intelligence integration",
      "Policy-based access control & enforcement",
      "Regulatory compliance (GDPR, ISO 27001, PDPA)",
      "Centralised security dashboard & reporting",
    ],
    useCases: ["BFSI", "Healthcare", "Government", "Manufacturing"],
  },
  {
    Icon: Zap,
    title: "Zeperon",
    tag: "Network Performance",
    color: "#0891b2",
    desc: "Zeperon delivers next-generation network performance optimisation and management solutions, enabling enterprises to achieve superior connectivity, reliability, and efficiency. Our Zeperon implementations ensure your network infrastructure meets the demands of modern digital business.",
    features: [
      "SD-WAN and next-gen networking",
      "Real-time network performance analytics",
      "Intelligent traffic optimisation & QoS",
      "Zero-touch provisioning & automation",
      "Multi-site & hybrid cloud connectivity",
      "Advanced network security integration",
    ],
    useCases: ["Retail chains", "Multi-branch offices", "ISPs", "Cloud-first enterprises"],
  },
  {
    Icon: Settings,
    title: "ManageEngine",
    tag: "IT Management Suite",
    color: "#d97706",
    desc: "ManageEngine offers a comprehensive suite of IT management tools covering network monitoring, IT helpdesk, security operations, and endpoint management. As a Gold Certified ManageEngine Partner, Alpha1 provides expert deployment, customisation, and ongoing support.",
    features: [
      "Network & infrastructure monitoring (OpManager)",
      "IT service desk & ITSM (ServiceDesk Plus)",
      "Endpoint security & management",
      "Log management & SIEM (EventLog Analyzer)",
      "Patch management & vulnerability assessment",
      "IT analytics & reporting dashboards",
    ],
    useCases: ["Enterprise IT teams", "MSPs", "Government agencies", "Educational institutions"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="section-badge" style={{ justifyContent:"center" }}>Our Solutions</div>
          <h1 className="section-title" style={{ fontSize:"clamp(32px,5vw,60px)", textAlign:"center" }}>
            Enterprise <span>Technology Solutions</span>
          </h1>
          <p className="section-subtitle" style={{ margin:"0 auto", textAlign:"center" }}>
            We are authorised partners for world-leading enterprise technology brands, delivering tailored solutions that drive real business outcomes.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section style={{ padding:"40px 24px 80px" }}>
        <div className="container" style={{ display:"flex", flexDirection:"column", gap:48 }}>
          {SERVICES.map((s, i) => (
            <div key={i} className="glass-card" style={{ padding:40 }}>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:40, alignItems:"start" }}>
                <div>
                  <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:20 }}>
                    <div style={{ width:64, height:64, borderRadius:14, background:`rgba(${s.color === "#1e88e5" ? "30,136,229" : s.color === "#7c3aed" ? "124,58,237" : s.color === "#0891b2" ? "8,145,178" : "217,119,6"},0.15)`, border:`1px solid ${s.color}33`, display:"flex", alignItems:"center", justifyContent:"center", color:s.color }}>
                      <s.Icon size={30} strokeWidth={1.8} />
                    </div>
                    <div>
                      <div style={{ fontSize:11, fontWeight:700, color:s.color, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:4 }}>{s.tag}</div>
                      <h2 style={{ fontSize:"clamp(18px,2.5vw,26px)", fontWeight:800, color:"#fff" }}>{s.title}</h2>
                    </div>
                  </div>
                  <p style={{ fontSize:15, color:"rgba(255,255,255,0.65)", lineHeight:1.85, marginBottom:28 }}>{s.desc}</p>
                  <Link href="/contact" className="btn-primary">Request a Demo</Link>
                </div>
                <div>
                  <h4 style={{ fontSize:13, fontWeight:700, color:"rgba(255,255,255,0.45)", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:16 }}>Key Features</h4>
                  <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10, marginBottom:28 }}>
                    {s.features.map((f, j) => (
                      <li key={j} style={{ display:"flex", gap:10, alignItems:"flex-start", fontSize:14, color:"rgba(255,255,255,0.7)" }}>
                        <Check size={16} color={s.color} strokeWidth={3} style={{ marginTop:2, flexShrink:0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <h4 style={{ fontSize:13, fontWeight:700, color:"rgba(255,255,255,0.45)", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:12 }}>Ideal For</h4>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                    {s.useCases.map((u, j) => (
                      <span key={j} style={{ fontSize:12, padding:"4px 12px", borderRadius:100, background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.12)", color:"rgba(255,255,255,0.6)" }}>{u}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:"60px 24px 80px" }}>
        <div className="container">
          <div className="glass-md" style={{ borderRadius:18, padding:"48px 36px", textAlign:"center" }}>
            <h2 style={{ fontSize:"clamp(22px,3vw,36px)", fontWeight:800, color:"#fff", marginBottom:14 }}>
              Not Sure Which Solution Fits?
            </h2>
            <p style={{ fontSize:16, color:"rgba(255,255,255,0.6)", maxWidth:520, margin:"0 auto 32px", lineHeight:1.75 }}>
              Our experts will assess your requirements and recommend the right technology stack for your business.
            </p>
            <Link href="/contact" className="btn-primary">Talk to an Expert</Link>
          </div>
        </div>
      </section>
    </>
  );
}
