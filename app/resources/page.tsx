import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "Explore case studies, IT tips, cybersecurity updates, and solution guides from Alpha1 IT Solutions.",
};

const CASE_STUDIES = [
  {
    title: "Securing a Regional Bank's Data Ecosystem",
    tag: "Cybersecurity",
    problem: "The client faced increasing regulatory pressure to secure customer PII across 50+ branches while mitigating insider threats. Legacy security tools provided limited visibility.",
    solution: "Deployed Cyberstanc DLP across all endpoints and network gateways. Configured advanced content inspection and real-time encryption policies aligned with financial regulations.",
    result: "Achieved 100% compliance with local data protection laws. Blocked 1,200+ unauthorized data transfer attempts in the first quarter with zero false positives disrupting operations.",
  },
  {
    title: "Optimising Connectivity for a Retail Giant",
    tag: "Networking",
    problem: "A retail chain with 200+ outlets struggled with slow application performance and frequent network downtime, severely affecting point-of-sale transactions.",
    solution: "Implemented Zeperon ZTNA alongside a complete SD-WAN overhaul. Segmented POS traffic from general internet access and enabled zero-touch provisioning for new branches.",
    result: "Network uptime increased to 99.99%. Transaction processing speeds improved by 45%, and the IT team reduced network management overhead by over 30%.",
  },
  {
    title: "Modernising IT Management for a University",
    tag: "IT Infrastructure",
    problem: "The university's IT department was overwhelmed by helpdesk tickets, unpatched endpoints, and fragmented network monitoring tools spread across a massive campus.",
    solution: "Rolled out the comprehensive ManageEngine suite, integrating OpManager, ServiceDesk Plus, and Endpoint Central into a single, cohesive IT operations center.",
    result: "Reduced average ticket resolution time by 60%. Achieved 98% endpoint patch compliance within a month, significantly reducing the campus's vulnerability footprint.",
  },
];

const BLOG_POSTS = [
  {
    tag: "Cybersecurity Update",
    title: "The Rise of Zero Trust: Why VPNs Are No Longer Enough",
    date: "May 10, 2026",
    excerpt: "Explore the fundamental shifts in network security and why enterprises are rapidly adopting ZTNA architectures like Zeperon over traditional VPN models.",
  },
  {
    tag: "Solution Guide",
    title: "A CIO's Guide to Implementing Enterprise DLP",
    date: "April 28, 2026",
    excerpt: "Data Loss Prevention requires more than just software. Learn the best practices for defining policies, classifying data, and rolling out Cyberstanc DLP effectively.",
  },
  {
    tag: "IT Tips",
    title: "5 Strategies to Optimize Your Hybrid Cloud Storage",
    date: "April 15, 2026",
    excerpt: "Storage costs can spiral out of control if not managed properly. Discover how intelligent data tiering with AmZetta can reduce costs while maintaining high availability.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-badge" style={{ justifyContent:"center" }}>📚 Resources</div>
          <h1 className="section-title" style={{ fontSize:"clamp(32px,5vw,60px)", textAlign:"center" }}>
            Case Studies <span>&amp; Insights</span>
          </h1>
          <p className="section-subtitle" style={{ margin:"0 auto", textAlign:"center" }}>
            Discover how we solve complex IT challenges, and stay updated with the latest in enterprise technology.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section style={{ padding:"40px 24px 80px" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div className="section-badge">📊 Success Stories</div>
            <h2 className="section-title">Client <span>Case Studies</span></h2>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:32 }}>
            {CASE_STUDIES.map((cs, i) => (
              <div key={i} className="glass-card" style={{ padding: 40 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#00d4ff", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>{cs.tag}</div>
                <h3 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, color: "#fff", marginBottom: 32 }}>{cs.title}</h3>
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 24 }}>
                  <div style={{ background: "rgba(255,255,255,0.03)", padding: 24, borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)" }}>
                    <h4 style={{ color: "#ef4444", fontSize: 16, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                      <span>⚠️</span> The Problem
                    </h4>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7 }}>{cs.problem}</p>
                  </div>
                  
                  <div style={{ background: "rgba(30,136,229,0.05)", padding: 24, borderRadius: 12, border: "1px solid rgba(30,136,229,0.15)" }}>
                    <h4 style={{ color: "#3b82f6", fontSize: 16, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                      <span>💡</span> The Solution
                    </h4>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7 }}>{cs.solution}</p>
                  </div>

                  <div style={{ background: "rgba(16,185,129,0.05)", padding: 24, borderRadius: 12, border: "1px solid rgba(16,185,129,0.15)" }}>
                    <h4 style={{ color: "#10b981", fontSize: 16, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                      <span>✅</span> The Result
                    </h4>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7 }}>{cs.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog & Articles Section */}
      <section style={{ padding:"80px 24px", background:"rgba(6,16,31,0.45)" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div className="section-badge">📝 Blog & Insights</div>
            <h2 className="section-title">Latest <span>Articles</span></h2>
            <p className="section-subtitle" style={{ margin:"0 auto" }}>IT tips, cybersecurity updates, and solution guides from our experts.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:24 }}>
            {BLOG_POSTS.map((post, i) => (
              <div key={i} className="glass-card" style={{ padding: 32, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(0,212,255,0.8)", textTransform: "uppercase", letterSpacing: "0.08em", padding: "4px 10px", background: "rgba(0,212,255,0.1)", borderRadius: 100 }}>{post.tag}</span>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{post.date}</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.4 }}>{post.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 24, flex: 1 }}>{post.excerpt}</p>
                <a href="#" style={{ color: "#1e88e5", fontWeight: 600, fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  Read Article <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
