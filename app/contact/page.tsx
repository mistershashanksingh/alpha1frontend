import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import { MapPin, Phone, Mail, Globe, Clock, Map } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Alpha1 IT Solutions — reach out for enterprise IT consulting, solutions, partnerships, or support.",
};

type ContactItem = { Icon: ComponentType<LucideProps>; label: string; val: string };

const CONTACT_ITEMS: ContactItem[] = [
  { Icon: MapPin, label: "Head Office", val: "[Address Placeholder]\nIndia" },
  { Icon: Phone,  label: "Phone",       val: "+91 [Phone Placeholder]" },
  { Icon: Mail,   label: "Email",       val: "info@alpha1itsolutions.com" },
  { Icon: Globe,  label: "Website",     val: "www.alpha1itsolutions.com" },
  { Icon: Clock,  label: "Office Hours",val: "Mon – Sat: 9:00 AM – 6:30 PM IST\nSupport: 24 × 7" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="section-badge" style={{ justifyContent:"center" }}>Contact</div>
          <h1 className="section-title" style={{ fontSize:"clamp(32px,5vw,60px)", textAlign:"center" }}>
            Get in <span>Touch With Us</span>
          </h1>
          <p className="section-subtitle" style={{ margin:"0 auto", textAlign:"center" }}>
            Have a project in mind or want to explore our solutions? Our team of enterprise IT experts is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section style={{ padding:"40px 24px 80px" }}>
        <div className="container" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:48 }}>

          {/* Contact Info */}
          <div>
            <div className="section-badge">Find Us</div>
            <h2 className="section-title" style={{ fontSize:28 }}>Contact <span>Information</span></h2>
            <div className="divider" />
            <div style={{ display:"flex", flexDirection:"column", gap:28 }}>
              {CONTACT_ITEMS.map((c, i) => (
                <div key={i} style={{ display:"flex", gap:16, alignItems:"flex-start" }}>
                  <div style={{ width:44, height:44, borderRadius:10, background:"rgba(30,136,229,0.12)", border:"1px solid rgba(30,136,229,0.22)", display:"flex", alignItems:"center", justifyContent:"center", color:"#00d4ff", flexShrink:0 }}>
                    <c.Icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div style={{ fontSize:11, fontWeight:700, color:"rgba(0,212,255,0.8)", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:4 }}>{c.label}</div>
                    <div style={{ fontSize:14, color:"rgba(255,255,255,0.7)", lineHeight:1.7, whiteSpace:"pre-line" }}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ marginTop:36 }}>
              <div style={{ fontSize:12, fontWeight:700, color:"rgba(255,255,255,0.4)", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:14 }}>Follow Us</div>
              <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                {[
                  { Icon: FaLinkedinIn, label: "LinkedIn" },
                  { Icon: FaXTwitter,   label: "X" },
                  { Icon: FaFacebookF,  label: "Facebook" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    style={{
                      fontSize:12, padding:"6px 14px",
                      background:"rgba(30,136,229,0.12)",
                      border:"1px solid rgba(30,136,229,0.22)",
                      borderRadius:6,
                      color:"rgba(255,255,255,0.65)",
                      textDecoration:"none",
                      display:"flex", alignItems:"center", gap:6,
                    }}
                  >
                    <Icon size={14} /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>

      {/* Map placeholder */}
      <section style={{ padding:"0 24px 80px" }}>
        <div className="container">
          <div className="glass-card" style={{ height:300, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:12 }}>
            <Map size={48} color="rgba(255,255,255,0.55)" strokeWidth={1.5} />
            <div style={{ fontWeight:700, fontSize:18, color:"rgba(255,255,255,0.7)" }}>Interactive Map</div>
            <div style={{ fontSize:13, color:"rgba(255,255,255,0.4)" }}>[Google Maps embed will appear here — add your API key]</div>
          </div>
        </div>
      </section>
    </>
  );
}
