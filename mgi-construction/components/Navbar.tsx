"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-charcoal/97 backdrop-blur-md border-b border-white/5 py-2 sm:py-3"
            : "bg-transparent py-3 sm:py-5"
        }`}
        style={{ paddingTop: `max(env(safe-area-inset-top), ${scrolled ? "0.5rem" : "0.75rem"})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-h-[44px]">
            <div className="w-9 h-9 bg-teal flex items-center justify-center flex-shrink-0">
              <span className="text-white font-heading font-black text-sm tracking-tight">MGI</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-offwhite text-xs sm:text-sm tracking-[0.08em] uppercase leading-tight">Meadowlands Group</span>
              <span className="font-body text-[0.55rem] sm:text-[0.6rem] text-warm tracking-[0.2em] uppercase leading-tight">Build with MGI</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className={`font-heading text-[0.75rem] tracking-[0.12em] uppercase transition-colors duration-300 relative group min-h-[44px] flex items-center ${pathname === link.href ? "text-offwhite" : "text-warm-light hover:text-offwhite"}`}
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
                {link.label}
                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-teal transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
            <Link href="/contact" className="btn-teal text-[0.72rem] py-3 px-6">Get a Quote</Link>
          </nav>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a href="tel:+19059951234" className="w-11 h-11 flex items-center justify-center text-teal-pale hover:text-offwhite transition-colors" aria-label="Call us">
              <Phone size={20} />
            </a>
            <button
              className="w-11 h-11 flex items-center justify-center text-offwhite"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal/99 backdrop-blur-lg flex flex-col justify-center items-center gap-8 transition-all duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {navLinks.map((link, i) => (
          <Link key={link.href} href={link.href}
            className={`font-heading font-bold text-2xl sm:text-3xl hover:text-teal-pale transition-colors duration-300 tracking-wide uppercase min-h-[48px] flex items-center ${
              pathname === link.href ? "text-teal-pale" : "text-offwhite"
            }`}
            style={{ fontFamily: "'Montserrat', sans-serif", transitionDelay: `${i * 50}ms` }}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact" className="btn-teal mt-4 text-base py-4 px-10">Get a Quote</Link>
        <a href="tel:+19059951234" className="flex items-center gap-2 text-warm-light hover:text-offwhite transition-colors mt-2">
          <Phone size={16} className="text-teal-pale" />
          <span className="font-body text-sm" style={{ fontFamily: "'Open Sans', sans-serif" }}>(905) 995-1234</span>
        </a>
      </div>
    </>
  );
}
