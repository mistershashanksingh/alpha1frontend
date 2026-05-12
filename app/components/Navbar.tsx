"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/",           label: "Home" },
  { href: "/about",      label: "About Us" },
  { href: "/solutions",  label: "Solutions" },
  { href: "/partners",   label: "Partners" },
  { href: "/resources",  label: "Resources" },
  { href: "/careers",    label: "Careers" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if(searchQuery.trim()) {
      alert(`Search for: ${searchQuery}`);
      setSearchQuery("");
    }
  };

  const headerStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 900,
    transition: "all 0.35s ease",
    background: scrolled ? "rgba(6,16,31,0.92)" : "rgba(6,16,31,0.5)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    borderBottom: scrolled ? "1px solid rgba(30,136,229,0.25)" : "1px solid rgba(255,255,255,0.08)",
    boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
  };

  return (
    <header style={headerStyle}>
      <div className="container" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", height:75 }}>
        <Link href="/" style={{ textDecoration:"none", marginRight: 20 }}>
          <div style={{ lineHeight:1.2 }}>
            <div style={{ fontSize:22, fontWeight:800, background:"linear-gradient(135deg,#1e88e5,#00d4ff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              Alpha1
            </div>
            <div style={{ fontSize:10, color:"rgba(255,255,255,0.6)", letterSpacing:"0.06em", fontWeight:600 }}>
              IT SOLUTIONS &amp; CONSULTING
            </div>
          </div>
        </Link>

        <nav style={{ display:"flex", gap:24, alignItems:"center", flex: 1, justifyContent: "center" }} className="hidden lg:flex">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={`nav-link${pathname===l.href?" active":""}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div style={{ display:"flex", gap:16, alignItems:"center" }} className="hidden lg:flex">
          <form onSubmit={handleSearch} style={{ display:"flex", alignItems:"center", background:"rgba(255,255,255,0.08)", borderRadius:20, padding:"4px 12px", border:"1px solid rgba(255,255,255,0.15)" }}>
            <span style={{ fontSize:14, color:"rgba(255,255,255,0.5)", marginRight:8 }}>🔍</span>
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ background:"transparent", border:"none", outline:"none", color:"#fff", fontSize:13, width: 120 }} 
            />
          </form>
          <Link href="/contact" className="btn-primary" style={{ padding:"8px 20px", fontSize:13, borderRadius:6 }}>
            Contact Us
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="lg:hidden"
          style={{ background:"transparent", border:"1px solid rgba(255,255,255,0.18)", borderRadius:8, padding:"6px 10px", cursor:"pointer", color:"#fff", fontSize:20 }}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div style={{ background:"rgba(6,16,31,0.97)", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)", borderTop:"1px solid rgba(255,255,255,0.08)", padding:"20px 24px 28px", display:"flex", flexDirection:"column", gap:18 }}>
          <form onSubmit={handleSearch} style={{ display:"flex", alignItems:"center", background:"rgba(255,255,255,0.08)", borderRadius:8, padding:"8px 12px", border:"1px solid rgba(255,255,255,0.15)" }}>
            <span style={{ fontSize:14, color:"rgba(255,255,255,0.5)", marginRight:8 }}>🔍</span>
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ background:"transparent", border:"none", outline:"none", color:"#fff", fontSize:14, width:"100%" }} 
            />
          </form>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={`nav-link${pathname===l.href?" active":""}`} style={{ fontSize:16, padding:"6px 0" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ justifyContent:"center", marginTop:8 }}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
