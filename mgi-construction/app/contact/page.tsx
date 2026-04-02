"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const projectTypes = ["Residential Renovation","Custom Home Build","Multi-Unit Development","Commercial Construction","Hardscaping / Exterior","Project Management","Not Sure Yet"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "", budget: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <span className="teal-bar" />
            <span className="section-label block mb-4">Start Your Project</span>
            <h1 className="font-heading font-black text-6xl md:text-7xl text-offwhite tracking-tight mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>Get in Touch</h1>
            <p className="font-body text-lg text-warm-light max-w-xl leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Tell us about your project and we&apos;ll provide a free consultation and detailed quote. No pressure. No obligation. Just honest answers.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Contact info */}
          <div className="lg:col-span-2">
            <AnimateOnScroll>
              <div className="card-dark p-8 mb-5">
                <h2 className="font-heading font-700 text-xl text-offwhite mb-6" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>Contact Information</h2>
                <div className="flex flex-col gap-6">
                  {[
                    { href: "tel:+19059951234", Icon: Phone, label: "Phone", value: "(905) 995-1234" },
                    { href: "mailto:info@meadowlandsgroup.ca", Icon: Mail, label: "Email", value: "info@meadowlandsgroup.ca" },
                  ].map(({ href, Icon, label, value }) => (
                    <a key={label} href={href} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-teal/15 border border-teal/30 flex items-center justify-center flex-shrink-0 group-hover:border-teal/60 transition-colors"><Icon size={15} className="text-teal-pale" /></div>
                      <div>
                        <p className="font-heading font-600 text-[0.62rem] tracking-[0.15em] text-teal-pale uppercase mb-0.5" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>{label}</p>
                        <p className="font-body text-sm text-offwhite group-hover:text-white transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>{value}</p>
                      </div>
                    </a>
                  ))}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal/15 border border-teal/30 flex items-center justify-center flex-shrink-0"><MapPin size={15} className="text-teal-pale" /></div>
                    <div>
                      <p className="font-heading font-600 text-[0.62rem] tracking-[0.15em] text-teal-pale uppercase mb-0.5" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>Headquarters</p>
                      <p className="font-body text-sm text-offwhite" style={{ fontFamily: "'Open Sans', sans-serif" }}>Newmarket, Ontario</p>
                      <p className="font-body text-xs text-warm mt-0.5" style={{ fontFamily: "'Open Sans', sans-serif" }}>Serving all of Ontario</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal/15 border border-teal/30 flex items-center justify-center flex-shrink-0"><Clock size={15} className="text-teal-pale" /></div>
                    <div>
                      <p className="font-heading font-600 text-[0.62rem] tracking-[0.15em] text-teal-pale uppercase mb-0.5" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>Hours</p>
                      <p className="font-body text-sm text-offwhite" style={{ fontFamily: "'Open Sans', sans-serif" }}>Mon–Fri: 8:00 AM – 6:00 PM</p>
                      <p className="font-body text-xs text-warm mt-0.5" style={{ fontFamily: "'Open Sans', sans-serif" }}>Sat: 9:00 AM – 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-dark p-8">
                <h3 className="font-heading font-700 text-lg text-offwhite mb-5" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>Where We Build</h3>
                <div className="flex flex-wrap gap-2">
                  {["GTA & York Region","Hamilton","Chatham-Kent","Kingston","Ottawa","Cornwall / SDG","London","Barrie"].map((m) => <span key={m} className="badge badge-warm text-[0.62rem]">{m}</span>)}
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <AnimateOnScroll delay={120}>
              <div className="card-dark p-8 md:p-12">
                {submitted ? (
                  <div className="flex flex-col items-center text-center py-16 gap-5">
                    <div className="w-16 h-16 bg-teal/20 border border-teal/40 flex items-center justify-center">
                      <CheckCircle2 size={32} className="text-teal-pale" />
                    </div>
                    <h2 className="font-heading font-black text-3xl text-offwhite tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>Message Received</h2>
                    <p className="font-body text-warm-light max-w-sm leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>Thank you for reaching out. A member of the MGI team will follow up within 1–2 business days.</p>
                    <button onClick={() => { setSubmitted(false); setForm({ name:"",email:"",phone:"",type:"",budget:"",message:"" }); }} className="btn-outline-teal mt-2">Send Another Message</button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading font-black text-2xl text-offwhite mb-2 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>Tell Us About Your Project</h2>
                    <p className="font-body text-sm text-warm mb-8" style={{ fontFamily: "'Open Sans', sans-serif" }}>We respond within 1 business day.</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[
                          { name: "name", label: "Full Name *", type: "text", placeholder: "John Smith", required: true },
                          { name: "email", label: "Email Address *", type: "email", placeholder: "john@email.com", required: true },
                          { name: "phone", label: "Phone Number", type: "tel", placeholder: "(416) 000-0000", required: false },
                        ].map((field) => (
                          <div key={field.name} className={`flex flex-col gap-2 ${field.name === "phone" ? "sm:col-span-1" : ""}`}>
                            <label className="font-heading font-600 text-[0.62rem] tracking-[0.15em] text-teal-pale uppercase" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>{field.label}</label>
                            <input type={field.type} name={field.name} required={field.required} value={(form as Record<string, string>)[field.name]} onChange={handleChange} placeholder={field.placeholder}
                              className="bg-charcoal-mid border border-white/10 text-offwhite placeholder:text-warm/40 px-4 py-3 text-sm focus:outline-none focus:border-teal/50 transition-colors font-body"
                              style={{ fontFamily: "'Open Sans', sans-serif" }} />
                          </div>
                        ))}
                        <div className="flex flex-col gap-2">
                          <label className="font-heading font-600 text-[0.62rem] tracking-[0.15em] text-teal-pale uppercase" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>Project Type *</label>
                          <select name="type" required value={form.type} onChange={handleChange}
                            className="bg-charcoal-mid border border-white/10 text-offwhite px-4 py-3 text-sm focus:outline-none focus:border-teal/50 transition-colors appearance-none"
                            style={{ fontFamily: "'Open Sans', sans-serif" }}>
                            <option value="" disabled>Select project type…</option>
                            {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-heading font-600 text-[0.62rem] tracking-[0.15em] text-teal-pale uppercase" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>Estimated Budget</label>
                        <select name="budget" value={form.budget} onChange={handleChange}
                          className="bg-charcoal-mid border border-white/10 text-offwhite px-4 py-3 text-sm focus:outline-none focus:border-teal/50 transition-colors appearance-none"
                          style={{ fontFamily: "'Open Sans', sans-serif" }}>
                          <option value="">Select a budget range…</option>
                          {["Under $25K","$25K – $75K","$75K – $150K","$150K – $500K","$500K – $1M","$1M+","Not Sure Yet"].map((b) => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-heading font-600 text-[0.62rem] tracking-[0.15em] text-teal-pale uppercase" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>Project Details *</label>
                        <textarea name="message" required value={form.message} onChange={handleChange} rows={5} placeholder="Describe your project, timeline, location, and any key requirements…"
                          className="bg-charcoal-mid border border-white/10 text-offwhite placeholder:text-warm/40 px-4 py-3 text-sm focus:outline-none focus:border-teal/50 transition-colors resize-none"
                          style={{ fontFamily: "'Open Sans', sans-serif" }} />
                      </div>

                      <button type="submit" disabled={loading} className="btn-teal self-start mt-2 disabled:opacity-60 disabled:cursor-not-allowed">
                        {loading ? "Sending…" : <><span>Send Message</span><Send size={15} /></>}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
