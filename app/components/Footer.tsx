import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";

const LINKS = [
  { label:"Home", href:"/" },
  { label:"About Us", href:"/about" },
  { label:"Solutions", href:"/solutions" },
  { label:"Partners", href:"/partners" },
  { label:"Resources", href:"/resources" },
  { label:"Careers", href:"/careers" },
  { label:"Contact", href:"/contact" },
];

const SERVICES = [
  { label:"AmZetta Storage", href:"/solutions" },
  { label:"Cyberstanc DLP", href:"/solutions" },
  { label:"Zeperon ZTNA", href:"/solutions" },
  { label:"ManageEngine", href:"/solutions" },
];

export default function Footer() {
  return (
    <footer>
      <div className="container" style={{ padding:"64px 24px 32px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:40, marginBottom:48 }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom:16 }}>
              <div style={{ fontSize:22, fontWeight:800, background:"linear-gradient(135deg,#1e88e5,#00d4ff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                Alpha1
              </div>
              <div style={{ fontSize:11, color:"rgba(255,255,255,0.45)", letterSpacing:"0.06em" }}>IT SOLUTIONS &amp; CONSULTING PVT. LTD.</div>
            </div>
            <p style={{ fontSize:13, color:"rgba(255,255,255,0.55)", lineHeight:1.75, marginBottom:20 }}>
              Transforming businesses through cutting-edge networking, cybersecurity, and digital infrastructure solutions.
            </p>
            <div style={{ display:"flex", gap:10, alignItems:"center" }}>
              {[
                { Icon: FaLinkedinIn,  label: "LinkedIn",  href: "#" },
                { Icon: FaXTwitter,    label: "X",         href: "#" },
                { Icon: FaFacebookF,   label: "Facebook",  href: "#" },
                { Icon: FaInstagram,   label: "Instagram", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: 34, height: 34, borderRadius: "50%",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.75)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    textDecoration: "none", transition: "all 0.2s",
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize:13, fontWeight:700, color:"rgba(255,255,255,0.5)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:18 }}>Quick Links</h4>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color:"rgba(255,255,255,0.65)", textDecoration:"none", fontSize:14, transition:"color 0.2s" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize:13, fontWeight:700, color:"rgba(255,255,255,0.5)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:18 }}>Our Solutions</h4>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} style={{ color:"rgba(255,255,255,0.65)", textDecoration:"none", fontSize:14, transition:"color 0.2s" }}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize:13, fontWeight:700, color:"rgba(255,255,255,0.5)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:18 }}>Contact Us</h4>
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              <div style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
                <MapPin size={16} style={{ marginTop:2, flexShrink:0, color:"rgba(255,255,255,0.65)" }} />
                <span style={{ fontSize:13, color:"rgba(255,255,255,0.6)", lineHeight:1.6 }}>
                  [Company Address Placeholder],<br />India
                </span>
              </div>
              <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                <Phone size={16} style={{ flexShrink:0, color:"rgba(255,255,255,0.65)" }} />
                <span style={{ fontSize:13, color:"rgba(255,255,255,0.6)" }}>+91 [Phone Placeholder]</span>
              </div>
              <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                <Mail size={16} style={{ flexShrink:0, color:"rgba(255,255,255,0.65)" }} />
                <a href="mailto:info@alpha1itsolutions.com" style={{ fontSize:13, color:"#00d4ff", textDecoration:"none" }}>
                  info@alpha1itsolutions.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)", paddingTop:24, display:"flex", flexWrap:"wrap", gap:12, justifyContent:"space-between", alignItems:"center" }}>
          <p style={{ fontSize:13, color:"rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Alpha1 IT Solutions and Consulting Pvt. Ltd. All rights reserved.
          </p>
          <p style={{ fontSize:13, color:"rgba(255,255,255,0.35)" }}>
            <a href="https://www.alpha1itsolutions.com" style={{ color:"rgba(30,136,229,0.75)", textDecoration:"none" }} target="_blank" rel="noopener noreferrer">
              www.alpha1itsolutions.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
