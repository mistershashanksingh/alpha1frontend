import type { Metadata } from "next";
import { Camera, Target, Rocket, Check, Trophy, Award, Lock, BadgeCheck, Mail } from "lucide-react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Alpha1 IT Solutions and Consulting Pvt. Ltd. is a dynamic and forward-thinking technology distributor.",
};

const TEAM = [
  { initials: "MD", name: "[Director Name]",  role: "Managing Director & CEO"        },
  { initials: "CT", name: "[CTO Name]",        role: "Chief Technology Officer"       },
  { initials: "VP", name: "[VP Name]",          role: "VP Sales & Business Development"},
  { initials: "HT", name: "[Head Tech Name]",   role: "Head of Technical Services"    },
];

type AwardItem = { Icon: ComponentType<LucideProps>; title: string; sub: string };

const AWARDS: AwardItem[] = [
  { Icon: Trophy,     title: "Best IT Partner",        sub: "Regional Excellence Award"     },
  { Icon: Award,      title: "ManageEngine Partner",    sub: "Gold Certified Partner"        },
  { Icon: Lock,       title: "ISO 27001",               sub: "Information Security Certified" },
  { Icon: BadgeCheck, title: "Cyberstanc Certified",    sub: "Authorised Solution Provider"   },
];

const COMPETENCIES = [
  "Zero Trust Network Access (ZTNA)",
  "Data Loss Prevention (DLP)",
  "Enterprise Storage Solutions (SAN/NAS)",
  "IT Service Management (ITSM)",
  "Network Performance Monitoring",
  "Cloud Security & Infrastructure",
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-badge" style={{ justifyContent:"center" }}>About Us</div>
          <h1 className="section-title" style={{ fontSize:"clamp(32px,5vw,60px)", textAlign:"center" }}>
            About <span>Alpha1 IT Solutions</span>
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ padding:"20px 24px 80px" }}>
        <div className="container">
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:56, alignItems:"center" }}>
            <div>
              <div className="section-badge">Who We Are</div>
              <h2 className="section-title">Empowering Businesses <span>Through Technology</span></h2>
              <div className="divider" />
              <p style={{ color:"rgba(255,255,255,0.7)", lineHeight:1.9, fontSize:16, marginBottom:18 }}>
                Alpha1 IT Solutions and Consulting Pvt. Ltd. is a dynamic and forward-thinking technology distributor dedicated to delivering comprehensive IT solutions. We specialise in offering state-of-the-art cybersecurity, networking, storage, and IT management products tailored to meet the evolving needs of modern enterprises.
              </p>
              <p style={{ color:"rgba(255,255,255,0.7)", lineHeight:1.9, fontSize:16 }}>
                Through our strategic partnerships with global technology leaders, we provide robust, scalable, and innovative infrastructure solutions that drive digital transformation and ensure operational excellence.
              </p>
            </div>

            {/* Team Photo Placeholder */}
            <div className="glass-card" style={{ padding: 12, position: "relative" }}>
              <div style={{ background: "rgba(0,0,0,0.4)", borderRadius: 12, height: 350, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px dashed rgba(255,255,255,0.2)" }}>
                <Camera size={48} color="rgba(255,255,255,0.65)" strokeWidth={1.5} style={{ marginBottom: 16 }} />
                <div style={{ fontSize: 16, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>Team Group Photo Placeholder</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 8 }}>Insert high-quality image here</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding:"80px 24px", background:"rgba(6,16,31,0.45)" }}>
        <div className="container">
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:32 }}>
            <div className="glass-card" style={{ padding:40 }}>
              <Target size={48} color="#00d4ff" strokeWidth={1.6} style={{ marginBottom: 20 }} />
              <div className="section-badge">Our Vision</div>
              <h2 className="section-title" style={{ fontSize:28 }}>Where We Are <span>Heading</span></h2>
              <div className="divider" />
              <p style={{ color:"rgba(255,255,255,0.75)", lineHeight:1.85, fontSize:16 }}>
                Our vision is to become a trusted technology distributor for businesses by delivering innovative, scalable, and secure IT solutions that empower organizations to thrive in a rapidly evolving digital landscape.
              </p>
            </div>
            <div className="glass-card" style={{ padding:40 }}>
              <Rocket size={48} color="#00d4ff" strokeWidth={1.6} style={{ marginBottom: 20 }} />
              <div className="section-badge">Our Mission</div>
              <h2 className="section-title" style={{ fontSize:28 }}>What Drives <span>Us Forward</span></h2>
              <div className="divider" />
              <p style={{ color:"rgba(255,255,255,0.75)", lineHeight:1.85, fontSize:16 }}>
                Our mission is to empower organizations with the right technology, expertise, and support to streamline their operations, secure their infrastructure, and achieve sustained business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies & Steered By */}
      <section style={{ padding:"80px 24px" }}>
        <div className="container" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:48 }}>

          <div>
            <div className="section-badge">Expertise</div>
            <h2 className="section-title" style={{ fontSize:28 }}>Core <span>Competencies</span></h2>
            <div className="divider" />
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:16 }}>
              {COMPETENCIES.map((comp, idx) => (
                <li key={idx} style={{ display:"flex", gap:12, alignItems:"center", background:"rgba(255,255,255,0.05)", padding:"12px 20px", borderRadius:8, border:"1px solid rgba(255,255,255,0.1)" }}>
                  <Check size={16} color="#00d4ff" strokeWidth={3} />
                  <span style={{ fontSize:15, color:"rgba(255,255,255,0.85)" }}>{comp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="section-badge">Leadership Direction</div>
            <h2 className="section-title" style={{ fontSize:28 }}>Our business is <span>steered by</span></h2>
            <div className="divider" />
            <p style={{ color:"rgba(255,255,255,0.7)", lineHeight:1.85, fontSize:15, marginBottom:24 }}>
              Alpha1 IT Solutions is guided by a team of industry veterans with decades of collective experience in enterprise IT. Their strategic foresight and unwavering commitment to technological excellence ensure we consistently deliver transformative results for our partners and clients.
            </p>
            <div className="glass-card" style={{ padding:24, borderLeft:"4px solid #1e88e5" }}>
              <p style={{ fontStyle:"italic", color:"rgba(255,255,255,0.8)", fontSize:15, lineHeight:1.6 }}>
                "We don't just supply technology; we architect robust digital foundations that allow our clients to focus on their core business with absolute peace of mind."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Team Profiles */}
      <section style={{ padding:"80px 24px", background:"rgba(6,16,31,0.45)" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div className="section-badge">Leadership Profiles</div>
            <h2 className="section-title">Meet Our <span>Expert Team</span></h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:24 }}>
            {TEAM.map((t, i) => (
              <div key={i} className="glass-card" style={{ padding:32, textAlign:"center" }}>
                <div className="avatar-ring">{t.initials}</div>
                <h3 style={{ fontWeight:700, fontSize:16, color:"#fff", marginBottom:6 }}>{t.name}</h3>
                <p style={{ fontSize:13, color:"#00d4ff", fontWeight:500 }}>{t.role}</p>
                <div style={{ display:"flex", justifyContent:"center", gap:12, marginTop:16 }}>
                  {[
                    { key: "in", Icon: FaLinkedinIn, label: "LinkedIn" },
                    { key: "tw", Icon: FaXTwitter,   label: "X" },
                    { key: "em", Icon: Mail,         label: "Email" },
                  ].map(({ key, Icon, label }) => (
                    <div
                      key={key}
                      aria-label={label}
                      style={{
                        width:30, height:30, borderRadius:"50%",
                        background:"rgba(30,136,229,0.15)",
                        border:"1px solid rgba(30,136,229,0.25)",
                        display:"flex", alignItems:"center", justifyContent:"center",
                        color:"rgba(255,255,255,0.55)", cursor:"pointer",
                      }}
                    >
                      <Icon size={13} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section style={{ padding:"80px 24px" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div className="section-badge">Achievements</div>
            <h2 className="section-title">Awards &amp; <span>Certifications</span></h2>
            <p className="section-subtitle" style={{ margin:"0 auto" }}>
              Recognised industry-wide for our commitment to quality, security, and partnership excellence.
            </p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:20 }}>
            {AWARDS.map((a, i) => (
              <div key={i} className="glass-card" style={{ padding:28, textAlign:"center" }}>
                <div style={{ marginBottom:14, display:"flex", justifyContent:"center", color:"#00d4ff" }}>
                  <a.Icon size={36} strokeWidth={1.6} />
                </div>
                <h4 style={{ fontWeight:700, fontSize:15, color:"#fff", marginBottom:6 }}>{a.title}</h4>
                <p style={{ fontSize:12, color:"rgba(255,255,255,0.5)", lineHeight:1.6 }}>{a.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
