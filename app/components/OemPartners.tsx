"use client";

import { useState } from "react";
import Image from "next/image";

// ─── Data — ordered exactly as requested (not alphabetical) ──────────────────
const OEM_CATEGORIES = [
  {
    id: "cloud",
    label: "Cloud & Infrastructure",
    icon: "☁️",
    color: "#1e88e5",
    bgFrom: "rgba(246, 246, 246, 0.23)",
    bgTo: "rgba(226, 226, 226, 0.12)",
    partners: [
      { name: "AWS", fullName: "Amazon Web Services", logo: "/logos/AWS (Amazon Web Services).png" },
      { name: "Microsoft", fullName: "Microsoft", logo: "/logos/Microsoft.png" },
      { name: "VMware", fullName: "VMware", logo: "/logos/VMware.jpg" },
      { name: "Veeam", fullName: "Veeam", logo: "/logos/Veeam.png" },
      { name: "Quantum", fullName: "Quantum", logo: "/logos/Quantum.jpg" },
    ],
  },
  {
    id: "networking",
    label: "Networking & Security",
    icon: "🔒",
    color: "#7c3aed",
    bgFrom: "rgba(124,58,237,0.14)",
    bgTo: "rgba(124,58,237,0.04)",
    partners: [
      { name: "Cisco", fullName: "Cisco", logo: "/logos/Cisco.png" },
      { name: "Fortinet", fullName: "Fortinet", logo: "/logos/Fortinet.png" },
      { name: "Palo Alto", fullName: "Palo Alto Networks", logo: "/logos/Palo Alto Networks.png" },
      { name: "Barracuda", fullName: "Barracuda", logo: "/logos/Barracuda.png" },
      { name: "Kaspersky", fullName: "Kaspersky Lab", logo: "/logos/Kaspersky Lab.png" },
      { name: "Trend Micro", fullName: "Trend Micro", logo: "/logos/Trend Micro.png" },
      { name: "Seceon", fullName: "Seceon", logo: "/logos/Seceon.png" },
      { name: "BlackBerry", fullName: "BlackBerry", logo: "/logos/BlackBerry.jpg" },
    ],
  },
  {
    id: "hardware",
    label: "Hardware & Electronics",
    icon: "🖥️",
    color: "#059669",
    bgFrom: "rgba(5,150,105,0.14)",
    bgTo: "rgba(5,150,105,0.04)",
    partners: [
      { name: "Dell", fullName: "Dell", logo: "/logos/Dell.png" },
      { name: "HP", fullName: "HP", logo: "/logos/HP.png" },
      { name: "Toshiba", fullName: "Toshiba", logo: "/logos/Toshiba.png" },
      { name: "StoneFly", fullName: "StoneFly", logo: "/logos/StoneFly.png" },
      { name: "StorTrends", fullName: "StorTrends", logo: "/logos/StorTrends.png" },
    ],
  },
  {
    id: "software",
    label: "IT Services & Software",
    icon: "💡",
    color: "#f59e0b",
    bgFrom: "rgba(245,158,11,0.14)",
    bgTo: "rgba(245,158,11,0.04)",
    partners: [
      { name: "Freshworks", fullName: "Freshworks", logo: "/logos/Freshwo.png" },
      { name: "Lightstorm", fullName: "Lightstorm", logo: "/logos/Lightstorm.jpg" },
      { name: "EverestIMS", fullName: "EverestIMS", logo: "/logos/EverestIMS.jpg" },
      { name: "AnexGATE", fullName: "AnexGATE", logo: "/logos/AnexGATE.jpg" },
      { name: "LogRhythm", fullName: "LogRhythm", logo: "/logos/LogRhythm.jpg" },
      { name: "PeopleLink", fullName: "PeopleLink", logo: "/logos/PeopleLink.png" },
    ],
  },
];

// ─── Single logo card with image-error fallback ───────────────────────────────
function LogoCard({
  partner,
  accent,
}: {
  partner: { name: string; fullName: string; logo: string };
  accent: string;
}) {
  const [err, setErr] = useState(false);

  // Two-letter initials for fallback avatar
  const initials = partner.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="oem-logo-card"
      style={{ "--accent": accent } as React.CSSProperties}
    >
      <div className="oem-logo-inner">
        {!err ? (
          <Image
            src={partner.logo}
            alt={partner.fullName}
            width={120}
            height={52}
            style={{ objectFit: "contain", maxHeight: 52, width: "auto" }}
            onError={() => setErr(true)}
          />
        ) : (
          <div
            className="oem-logo-fallback"
            style={{
              background: `linear-gradient(135deg,${accent}30,${accent}12)`,
              border: `1px solid ${accent}50`,
            }}
          >
            <span style={{ color: accent, fontWeight: 800, fontSize: 17, letterSpacing: "0.04em" }}>
              {initials}
            </span>
          </div>
        )}
      </div>
      <span className="oem-logo-name">{partner.fullName}</span>
    </div>
  );
}

// ─── Main exported component ──────────────────────────────────────────────────
export default function OemPartners() {
  const [activeId, setActiveId] = useState("cloud");
  const active = OEM_CATEGORIES.find((c) => c.id === activeId)!;

  const totalPartners = OEM_CATEGORIES.reduce((s, c) => s + c.partners.length, 0);

  return (
    <section style={{ padding: "40px 24px 100px" }}>
      <div className="container">

        {/* ── Section header ───────────────────────────────────────────── */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-badge">🏭 OEM Alliance</div>
          <h2 className="section-title">
            Our <span>OEM Partners</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Alpha1 is an authorised partner of <strong style={{ color: "#fff" }}>{totalPartners}+ world-class OEMs</strong> across
            cloud, networking, security, hardware, and enterprise software — delivering best-of-breed
            solutions to enterprise clients across India.
          </p>
        </div>

        {/* ── Category tab strip ───────────────────────────────────────── */}
        <div className="oem-tab-strip" role="tablist">
          {OEM_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeId === cat.id}
              aria-controls={`oem-panel-${cat.id}`}
              className={`oem-tab${activeId === cat.id ? " active" : ""}`}
              style={{ "--tab-color": cat.color } as React.CSSProperties}
              onClick={() => setActiveId(cat.id)}
            >
              <span aria-hidden="true">{cat.icon}</span>
              <span>{cat.label}</span>
              <span
                className="oem-tab-count"
                style={
                  activeId === cat.id
                    ? { background: "rgba(255,255,255,0.22)", color: "#fff" }
                    : { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }
                }
              >
                {cat.partners.length}
              </span>
            </button>
          ))}
        </div>

        {/* ── Active category panel ─────────────────────────────────────── */}
        <div
          key={active.id}                        /* key forces re-mount → re-runs fadeIn */
          id={`oem-panel-${active.id}`}
          role="tabpanel"
          className="oem-panel"
          style={{
            background: `linear-gradient(135deg,${active.bgFrom},${active.bgTo})`,
            borderColor: `${active.color}30`,
          }}
        >
          {/* Panel header row */}
          <div className="oem-panel-header">
            <div
              className="oem-panel-icon"
              style={{
                background: `${active.color}22`,
                border: `1px solid ${active.color}44`,
              }}
            >
              {active.icon}
            </div>
            <div>
              <div
                style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: active.color, marginBottom: 3,
                }}
              >
                Partner Category
              </div>
              <h3 style={{ fontWeight: 800, fontSize: 20, color: "#fff" }}>
                {active.label}
              </h3>
            </div>
            <div
              className="oem-panel-count"
              style={{
                background: `${active.color}20`,
                color: active.color,
                border: `1px solid ${active.color}40`,
              }}
            >
              {active.partners.length} Partners
            </div>
          </div>

          {/* Logo grid — category order preserved exactly */}
          <div className="oem-logo-grid">
            {active.partners.map((p) => (
              <LogoCard key={p.name} partner={p} accent={active.color} />
            ))}
          </div>
        </div>

        {/* ── Category summary strip (clickable shortcuts) ──────────────── */}
        <div className="oem-summary-strip">
          {OEM_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`oem-summary-item${activeId === cat.id ? " selected" : ""}`}
              style={{ borderColor: `${cat.color}35` }}
              onClick={() => setActiveId(cat.id)}
            >
              <span style={{ fontSize: 24 }}>{cat.icon}</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#fff", marginBottom: 2 }}>
                  {cat.label}
                </div>
                <div style={{ fontSize: 11, color: cat.color, fontWeight: 600 }}>
                  {cat.partners.length} OEM Partners
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
