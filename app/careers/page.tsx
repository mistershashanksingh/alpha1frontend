import type { Metadata } from "next";
import JobApplicationForm from "../components/JobApplicationForm";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Alpha1 IT Solutions team. Explore career opportunities in enterprise networking, cybersecurity, and IT consulting.",
};

const OPENINGS = [
  { title:"Network Engineer",            dept:"Technical",   type:"Full-Time", loc:"On-Site", exp:"2–5 yrs" },
  { title:"Cybersecurity Analyst",       dept:"Security",    type:"Full-Time", loc:"Hybrid",  exp:"2–4 yrs" },
  { title:"Pre-Sales Technical Consultant", dept:"Sales",   type:"Full-Time", loc:"On-Site", exp:"3–6 yrs" },
  { title:"ManageEngine Implementation Specialist", dept:"Technical", type:"Full-Time", loc:"On-Site", exp:"1–3 yrs" },
  { title:"Business Development Executive", dept:"Sales",   type:"Full-Time", loc:"Hybrid",  exp:"1–3 yrs" },
  { title:"IT Support Engineer (L2/L3)", dept:"Support",    type:"Full-Time", loc:"On-Site", exp:"2–4 yrs" },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="section-badge" style={{ justifyContent:"center" }}>💼 Careers</div>
          <h1 className="section-title" style={{ fontSize:"clamp(32px,5vw,60px)", textAlign:"center" }}>
            Build Your Career at <span>Alpha1</span>
          </h1>
          <p className="section-subtitle" style={{ margin:"0 auto", textAlign:"center" }}>
            Join a team of passionate IT professionals driving enterprise transformation.
          </p>
        </div>
      </section>

      {/* Hiring Info */}
      <section style={{ padding:"40px 24px" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 800 }}>
          <h2 className="section-title" style={{ fontSize: 28, marginBottom: 24 }}>Why Join <span>Our Team?</span></h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: 24 }}>
            At Alpha1 IT Solutions, we foster an environment of continuous learning, innovation, and collaboration. You will have the opportunity to work on cutting-edge enterprise projects involving leading technologies from Zeperon, Cyberstanc, AmZetta, and ManageEngine.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20, marginTop: 40 }}>
            {["Continuous Training & Certifications", "Competitive Compensation & Benefits", "Global Enterprise Projects", "Hybrid/Flexible Work Environments"].map((perk, i) => (
              <div key={i} className="glass-card" style={{ padding: 20, background: "rgba(255,255,255,0.03)" }}>
                <span style={{ color: "#00d4ff", fontSize: 24, display: "block", marginBottom: 12 }}>✓</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section style={{ padding:"80px 24px", background:"rgba(6,16,31,0.45)" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div className="section-badge">📋 Openings</div>
            <h2 className="section-title">Current <span>Opportunities</span></h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:20 }}>
            {OPENINGS.map((o, i) => (
              <div key={i} className="glass-card" style={{ padding:"28px 32px", display:"flex", flexDirection: "column", gap:16 }}>
                <div>
                  <h3 style={{ fontWeight:800, fontSize:18, color:"#fff", marginBottom:12 }}>{o.title}</h3>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                    {[o.dept, o.type, o.loc, `Exp: ${o.exp}`].map((tag, j) => (
                      <span key={j} style={{ fontSize:12, padding:"4px 12px", borderRadius:100, background:"rgba(30,136,229,0.12)", border:"1px solid rgba(30,136,229,0.22)", color:"rgba(0,212,255,0.85)", fontWeight: 500 }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <a href="#apply" className="btn-outline" style={{ width: "100%", justifyContent: "center", fontSize: 13, padding: "8px 0" }}>Apply Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" style={{ padding:"80px 24px" }}>
        <div className="container">
          <JobApplicationForm />
        </div>
      </section>
    </>
  );
}
