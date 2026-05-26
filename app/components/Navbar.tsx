"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/solutions", label: "Solutions" },
  { href: "/partners", label: "Partners" },
  { href: "/resources", label: "Resources" },
  { href: "/careers", label: "Careers" },
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
    if (searchQuery.trim()) {
      alert(`Search for: ${searchQuery}`);
      setSearchQuery("");
    }
  };

  const headerStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 900,
    transition: "all 0.35s ease",
    // Changed to a white translucent background to match the logo
    background: scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    // Adjusted borders and shadows for a light theme
    borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(0, 0, 0, 0.04)",
    boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.05)" : "none",
  };

  return (
    <header style={headerStyle}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 75 }}>

        {/* Replaced text logo with the image logo */}
        <Link href="/" style={{ textDecoration: "none", marginRight: 20, display: "flex", alignItems: "center" }}>
          <img
            src="/Alpha1 IT logo.jpg"
            alt="Alpha1 IT Solutions Logo"
            style={{ maxHeight: "55px", width: "auto", objectFit: "contain" }}
          />
        </Link>

        <nav style={{ display: "flex", gap: 24, alignItems: "center", flex: 1, justifyContent: "center" }} className="hidden lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${pathname === l.href ? " active" : ""}`}
              // Added inline styles to ensure text is visible on the white background
              style={{ color: pathname === l.href ? "#1e88e5" : "#333", fontWeight: 600, textDecoration: "none" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", gap: 16, alignItems: "center" }} className="hidden lg:flex">
          {/* Adjusted search bar background and text for light theme */}
          <form onSubmit={handleSearch} style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.05)", borderRadius: 20, padding: "4px 12px", border: "1px solid rgba(0, 0, 0, 0.1)" }}>
            <Search size={14} color="rgba(0, 0, 0, 0.4)" style={{ marginRight: 8 }} />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ background: "transparent", border: "none", outline: "none", color: "#333", fontSize: 13, width: 120 }}
            />
          </form>
          {/* Adjusted Contact Us button for light theme visibility */}
          <Link href="/contact" className="btn-primary" style={{ padding: "8px 20px", fontSize: 13, borderRadius: 6, backgroundColor: "#0f75bd", color: "#fff", textDecoration: "none", fontWeight: 600 }}>
            Contact Us
          </Link>
        </div>

        {/* Adjusted mobile toggle button for light theme */}
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="lg:hidden"
          style={{ background: "transparent", border: "1px solid rgba(0, 0, 0, 0.15)", borderRadius: 8, padding: "6px 10px", cursor: "pointer", color: "#333", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div style={{ background: "rgba(255, 255, 255, 0.98)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderTop: "1px solid rgba(0, 0, 0, 0.08)", padding: "20px 24px 28px", display: "flex", flexDirection: "column", gap: 18 }}>
          {/* Adjusted mobile search bar */}
          <form onSubmit={handleSearch} style={{ display: "flex", alignItems: "center", background: "rgba(0, 0, 0, 0.04)", borderRadius: 8, padding: "8px 12px", border: "1px solid rgba(0, 0, 0, 0.1)" }}>
            <Search size={14} color="rgba(0, 0, 0, 0.4)" style={{ marginRight: 8 }} />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ background: "transparent", border: "none", outline: "none", color: "#333", fontSize: 14, width: "100%" }}
            />
          </form>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${pathname === l.href ? " active" : ""}`}
              style={{ fontSize: 16, padding: "6px 0", color: pathname === l.href ? "#1e88e5" : "#333", fontWeight: 600, textDecoration: "none" }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ justifyContent: "center", marginTop: 8, backgroundColor: "#0f75bd", color: "#fff", textDecoration: "none", fontWeight: 600, padding: "12px", borderRadius: "8px", textAlign: "center" }}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}