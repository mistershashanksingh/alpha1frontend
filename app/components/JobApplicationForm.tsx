"use client";

import { useState } from "react";

export default function JobApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="glass-card" style={{ padding: 40, maxWidth: 800, margin: "0 auto" }}>
      <h3 style={{ fontWeight: 700, fontSize: 24, color: "#fff", marginBottom: 12 }}>Apply Now</h3>
      <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", marginBottom: 32 }}>Fill out the application form below to apply for one of our open positions.</p>
      
      {submitted ? (
        <div style={{ padding: 24, background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: 12, color: "#10b981", textAlign: "center" }}>
          Thank you for applying! Our HR team will review your application and get back to you shortly.
        </div>
      ) : (
        <form style={{ display: "flex", flexDirection: "column", gap: 20 }} onSubmit={handleSubmit}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 20 }}>
            <div>
              <label htmlFor="fullName" style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Full Name</label>
              <input id="fullName" type="text" placeholder="John Doe" required style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "12px 16px", color: "#fff", fontSize: 15, outline: "none", fontFamily: "inherit" }} />
            </div>
            <div>
              <label htmlFor="appEmail" style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Email Address</label>
              <input id="appEmail" type="email" placeholder="john@example.com" required style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "12px 16px", color: "#fff", fontSize: 15, outline: "none", fontFamily: "inherit" }} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 20 }}>
            <div>
              <label htmlFor="appPhone" style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Phone Number</label>
              <input id="appPhone" type="tel" placeholder="+91 9999 999 999" required style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "12px 16px", color: "#fff", fontSize: 15, outline: "none", fontFamily: "inherit" }} />
            </div>
            <div>
              <label htmlFor="role" style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Position Applied For</label>
              <select id="role" required style={{ width: "100%", background: "rgba(6,16,31,0.9)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "12px 16px", color: "rgba(255,255,255,0.85)", fontSize: 15, outline: "none", fontFamily: "inherit" }}>
                <option value="">Select a role...</option>
                <option>Network Engineer</option>
                <option>Cybersecurity Analyst</option>
                <option>Pre-Sales Technical Consultant</option>
                <option>ManageEngine Implementation Specialist</option>
                <option>Business Development Executive</option>
                <option>IT Support Engineer (L2/L3)</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="resumeLink" style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Link to Resume / Portfolio</label>
            <input id="resumeLink" type="url" placeholder="https://linkedin.com/in/..." required style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "12px 16px", color: "#fff", fontSize: 15, outline: "none", fontFamily: "inherit" }} />
          </div>
          <div>
            <label htmlFor="coverLetter" style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.6)", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Cover Letter / Brief Intro</label>
            <textarea id="coverLetter" rows={5} placeholder="Tell us why you'd be a great fit for Alpha1 IT Solutions..." required style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "12px 16px", color: "#fff", fontSize: 15, outline: "none", fontFamily: "inherit", resize: "vertical" }} />
          </div>
          <button type="submit" className="btn-primary" style={{ justifyContent: "center", padding: "14px 24px", fontSize: 16 }}>
            Submit Application 🚀
          </button>
        </form>
      )}
    </div>
  );
}
