import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5">

      {/* CTA band */}
      <div className="bg-teal py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-body text-teal-light/60 text-sm uppercase tracking-widest mb-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>Ready to build?</p>
            <h2 className="font-heading font-bold text-offwhite text-4xl md:text-5xl tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>Let&apos;s transform your space.</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-offwhite font-heading font-700 text-sm tracking-widest uppercase hover:bg-charcoal-light transition-colors" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>
              Get a Quote <ArrowRight size={15} />
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-offwhite font-heading font-600 text-sm tracking-widest uppercase border border-offwhite/40 hover:border-offwhite transition-colors" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-teal flex items-center justify-center">
              <span className="text-white font-heading font-black text-sm">MGI</span>
            </div>
            <div>
              <span className="font-heading font-bold text-offwhite text-sm tracking-wide uppercase block" style={{ fontFamily: "'Montserrat', sans-serif" }}>Meadowlands Group Inc.</span>
              <span className="font-body text-[0.6rem] text-warm tracking-widest uppercase" style={{ fontFamily: "'Open Sans', sans-serif" }}>Build with MGI</span>
            </div>
          </div>
          <p className="font-body text-sm text-warm-light leading-relaxed max-w-sm mb-8" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Premium construction, renovation, and development across Ontario. Transforming spaces with unmatched craftsmanship, precision, and care since 2014.
          </p>
          <div className="divider-warm mb-6" />
          <div className="flex flex-col gap-3">
            <a href="tel:+19059951234" className="flex items-center gap-3 text-sm text-warm-light hover:text-offwhite transition-colors group" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              <Phone size={14} className="text-teal group-hover:text-teal-pale transition-colors" />(905) 995-1234
            </a>
            <a href="mailto:info@meadowlandsgroup.ca" className="flex items-center gap-3 text-sm text-warm-light hover:text-offwhite transition-colors group" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              <Mail size={14} className="text-teal group-hover:text-teal-pale transition-colors" />info@meadowlandsgroup.ca
            </a>
            <span className="flex items-center gap-3 text-sm text-warm-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              <MapPin size={14} className="text-teal" />Newmarket, Ontario · Serving all of Ontario
            </span>
          </div>
          <div className="flex items-center gap-4 mt-8">
            {[Instagram, Linkedin, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 border border-white/10 flex items-center justify-center text-warm-light hover:border-teal hover:text-teal-pale transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-700 text-[0.68rem] tracking-[0.2em] text-teal-pale uppercase mb-6" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>Services</h4>
          <ul className="flex flex-col gap-3">
            {["Luxury Renovation","Custom Home Builds","Multi-Unit Development","Commercial Construction","Hardscaping & Exteriors","Project Management"].map((s) => (
              <li key={s}><Link href="/services" className="font-body text-sm text-warm-light hover:text-offwhite transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-700 text-[0.68rem] tracking-[0.2em] text-teal-pale uppercase mb-6" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>Company</h4>
          <ul className="flex flex-col gap-3">
            {[{ label: "Portfolio", href: "/portfolio" },{ label: "About Us", href: "/about" },{ label: "Contact", href: "/contact" }].map((l) => (
              <li key={l.href}><Link href={l.href} className="font-body text-sm text-warm-light hover:text-offwhite transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>{l.label}</Link></li>
            ))}
          </ul>
          <div className="mt-8">
            <h4 className="font-heading font-700 text-[0.68rem] tracking-[0.2em] text-teal-pale uppercase mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>Markets</h4>
            <p className="font-body text-xs text-warm-light leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>GTA · York Region · Hamilton · Kingston · Ottawa · Chatham-Kent · Eastern Ontario · London</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-body text-xs text-warm" style={{ fontFamily: "'Open Sans', sans-serif" }}>© {new Date().getFullYear()} Meadowlands Group Inc. All rights reserved.</p>
          <p className="font-body text-xs text-warm/50" style={{ fontFamily: "'Open Sans', sans-serif" }}>Build with MGI · Newmarket, Ontario</p>
        </div>
      </div>
    </footer>
  );
}
