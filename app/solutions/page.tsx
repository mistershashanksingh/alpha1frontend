import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products & Services",
  description: "Explore Alpha1 IT Solutions' enterprise solutions — Zeperon ZTNA, Cyberstanc DLP, AmZetta Storage, and ManageEngine.",
};

const SOLUTIONS = [
  {
    icon: "⚡",
    title: "Zeperon ZTNA Solution",
    tag: "Zero Trust Network Access",
    color: "#0891b2",
    desc: "Advanced Zero Trust Network Access based on the \"never trust, always verify\" principle. Zeperon provides granular, application-level access control, ensuring your users connect securely to only the resources they need, regardless of location.",
    features: [
      "Identity-based access & continuous verification",
      "Micro-segmentation & application cloaking",
      "Seamless secure remote access without traditional VPNs",
      "Centralised visibility and policy enforcement",
    ],
    imageAlt: "Hybrid network topology diagram for Zeperon ZTNA",
  },
  {
    icon: "🛡️",
    title: "Cyberstanc DLP Solution",
    tag: "Data Loss Prevention",
    color: "#7c3aed",
    desc: "Advanced Data Loss Prevention platform that safeguards your organisation's sensitive data. Features real-time monitoring, deep content inspection, and encryption across endpoints, networks, and cloud environments to prevent both internal and external breaches.",
    features: [
      "Real-time monitoring and content inspection",
      "Endpoint, network & cloud DLP coverage",
      "Automated encryption and access restriction",
      "Regulatory compliance reporting (GDPR, ISO 27001)",
    ],
    imageAlt: "Real-time security monitoring dashboard for Cyberstanc DLP",
  },
  {
    icon: "🗄️",
    title: "AmZetta Storage Solution",
    tag: "Enterprise Storage",
    color: "#1e88e5",
    desc: "High-performance, software-defined storage solutions for modern workloads. AmZetta provides intelligent data tiering, high availability, and seamless scalability to meet the demands of data-intensive enterprise applications.",
    features: [
      "Intelligent data tiering (SSD caching & HDD archiving)",
      "High availability architectures with auto-failover",
      "Seamless scalability without downtime",
      "Unified storage management",
    ],
    imageAlt: "Server rack storage infrastructure for AmZetta",
  },
  {
    icon: "⚙️",
    title: "Manage Engine",
    tag: "IT Management Suite",
    color: "#d97706",
    desc: "Comprehensive IT management products covering network monitoring, IT service desk, active directory management, and endpoint security. Alpha1 is an expert partner in deploying and managing the full Manage Engine suite.",
    features: [
      "Network & infrastructure monitoring",
      "IT service desk automation",
      "Endpoint security & unified management",
      "Log management & IT analytics",
    ],
    imageAlt: "IT management command center for Manage Engine",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-badge" style={{ justifyContent:"center" }}>⚡ Products & Services</div>
          <h1 className="section-title" style={{ fontSize:"clamp(32px,5vw,60px)", textAlign:"center" }}>
            Enterprise <span>Solutions</span>
          </h1>
          <p className="section-subtitle" style={{ margin:"0 auto", textAlign:"center" }}>
            We deliver industry-leading products and services to secure, scale, and manage your digital infrastructure.
          </p>
        </div>
      </section>

      <section style={{ padding:"40px 24px 80px" }}>
        <div className="container" style={{ display:"flex", flexDirection:"column", gap:48 }}>
          {SOLUTIONS.map((s, i) => (
            <div key={i} className="glass-card" style={{ padding:40, position:"relative", overflow:"hidden" }}>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:40, alignItems:"start" }}>
                <div>
                  <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:20 }}>
                    <div style={{ width:64, height:64, borderRadius:14, background:`rgba(${s.color === "#1e88e5" ? "30,136,229" : s.color === "#7c3aed" ? "124,58,237" : s.color === "#0891b2" ? "8,145,178" : "217,119,6"},0.15)`, border:`1px solid ${s.color}33`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:28 }}>
                      {s.icon}
                    </div>
                    <div>
                      <div style={{ fontSize:11, fontWeight:700, color:s.color, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:4 }}>{s.tag}</div>
                      <h2 style={{ fontSize:"clamp(18px,2.5vw,26px)", fontWeight:800, color:"#fff" }}>{s.title}</h2>
                    </div>
                  </div>
                  <p style={{ fontSize:15, color:"rgba(255,255,255,0.65)", lineHeight:1.85, marginBottom:28 }}>{s.desc}</p>
                  
                  <h4 style={{ fontSize:13, fontWeight:700, color:"rgba(255,255,255,0.45)", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:16 }}>Core Capabilities</h4>
                  <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10, marginBottom:28 }}>
                    {s.features.map((f, j) => (
                      <li key={j} style={{ display:"flex", gap:10, alignItems:"flex-start", fontSize:14, color:"rgba(255,255,255,0.7)" }}>
                        <span style={{ color:s.color, fontWeight:700, flexShrink:0 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact" className="btn-primary">Enquire Now</Link>
                </div>
                
                {/* Placeholder for realistic/hybrid images */}
                <div style={{ height: "100%", minHeight: 300, background:"rgba(0,0,0,0.3)", border:"1px dashed rgba(255,255,255,0.2)", borderRadius:16, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", padding: 24, textAlign: "center" }}>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>🖼️</div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
                    [Hybrid/Realistic Image Placeholder]<br/>
                    <span style={{ fontSize: 12, opacity: 0.7 }}>{s.imageAlt}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section style={{ padding:"60px 24px 80px" }}>
        <div className="container">
          <div className="glass-md" style={{ borderRadius:18, padding:"48px 36px", textAlign:"center" }}>
            <h2 style={{ fontSize:"clamp(22px,3vw,36px)", fontWeight:800, color:"#fff", marginBottom:14 }}>
              Need a Custom Solution?
            </h2>
            <p style={{ fontSize:16, color:"rgba(255,255,255,0.6)", maxWidth:520, margin:"0 auto 32px", lineHeight:1.75 }}>
              Our experts will assess your requirements and recommend the right technology stack for your business.
            </p>
            <Link href="/contact" className="btn-primary">Talk to our Architects</Link>
          </div>
        </div>
      </section>
    </>
  );
}
