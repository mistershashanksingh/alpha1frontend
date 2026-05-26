"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="glass-card" style={{ padding:40 }}>
      <h3 style={{ fontWeight:700, fontSize:22, color:"#fff", marginBottom:8 }}>Send a Message</h3>
      <p style={{ fontSize:14, color:"rgba(255,255,255,0.5)", marginBottom:28 }}>Fill out the form and our team will respond within 24 hours.</p>
      
      {submitted ? (
        <div style={{ padding: 20, background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: 8, color: "#10b981", textAlign: "center" }}>
          Thank you! Your message has been sent successfully.
        </div>
      ) : (
        <form style={{ display:"flex", flexDirection:"column", gap:18 }} onSubmit={handleSubmit}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
            {[{id:"fname",label:"First Name",ph:"John"},{id:"lname",label:"Last Name",ph:"Smith"}].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} style={{ fontSize:12, fontWeight:600, color:"rgba(255,255,255,0.55)", display:"block", marginBottom:6, textTransform:"uppercase", letterSpacing:"0.06em" }}>{f.label}</label>
                <input id={f.id} type="text" placeholder={f.ph} required style={{ width:"100%", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:8, padding:"10px 14px", color:"#fff", fontSize:14, outline:"none", fontFamily:"inherit" }} />
              </div>
            ))}
          </div>
          {[
            { id:"email",   label:"Email Address",  type:"email", ph:"john@company.com"      },
            { id:"phone",   label:"Phone Number",   type:"tel",   ph:"+91 9999 999 999"       },
            { id:"company", label:"Company",        type:"text",  ph:"Your Company Name"      },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} style={{ fontSize:12, fontWeight:600, color:"rgba(255,255,255,0.55)", display:"block", marginBottom:6, textTransform:"uppercase", letterSpacing:"0.06em" }}>{f.label}</label>
              <input id={f.id} type={f.type} placeholder={f.ph} required={f.type === "email"} style={{ width:"100%", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:8, padding:"10px 14px", color:"#fff", fontSize:14, outline:"none", fontFamily:"inherit" }} />
            </div>
          ))}
          <div>
            <label htmlFor="service" style={{ fontSize:12, fontWeight:600, color:"rgba(255,255,255,0.55)", display:"block", marginBottom:6, textTransform:"uppercase", letterSpacing:"0.06em" }}>Interested In</label>
            <select id="service" style={{ width:"100%", background:"rgba(6,16,31,0.9)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:8, padding:"10px 14px", color:"rgba(255,255,255,0.75)", fontSize:14, outline:"none", fontFamily:"inherit" }}>
              <option value="">Select a solution</option>
              <option>AmZetta Storage Solutions</option>
              <option>Cyberstanc DLP</option>
              <option>Zeperon ZTNA</option>
              <option>ManageEngine</option>
              <option>Multiple Solutions</option>
              <option>General Enquiry</option>
            </select>
          </div>
          <div>
            <label htmlFor="msg" style={{ fontSize:12, fontWeight:600, color:"rgba(255,255,255,0.55)", display:"block", marginBottom:6, textTransform:"uppercase", letterSpacing:"0.06em" }}>Message</label>
            <textarea id="msg" rows={4} required placeholder="Tell us about your project or requirements…" style={{ width:"100%", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:8, padding:"10px 14px", color:"#fff", fontSize:14, outline:"none", fontFamily:"inherit", resize:"vertical" }} />
          </div>
          <button type="submit" className="btn-primary" style={{ justifyContent:"center", display:"inline-flex", alignItems:"center", gap:8 }}>
            Send Message <Send size={16} />
          </button>
        </form>
      )}
    </div>
  );
}
