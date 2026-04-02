"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? "bg-charcoal/97 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-teal flex items-center justify-center flex-shrink-0">
              <span className="text-white font-heading font-black text-sm tracking-tight">MGI</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-offwhite text-sm tracking-[0.08em] uppercase leading-tight">Meadowlands Group</span>
              <span className="font-body text-[0.6rem] text-warm tracking-[0.2em] uppercase leading-tight">Build with MGI</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className={`font-heading font-600 text-[0.75rem] tracking-[0.12em] uppercase transition-colors duration-300 relative group ${pathname === link.href ? "text-offwhite" : "text-warm-light hover:text-offwhite"}`}
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
                {link.label}
                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-teal transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
            <Link href="/contact" className="btn-teal text-[0.72rem] py-3 px-6">Get a Quote</Link>
          </nav>

          <button className="md:hidden text-offwhite p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-charcoal/99 backdrop-blur-lg flex flex-col justify-center items-center gap-10 transition-all duration-400 md:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {navLinks.map((link, i) => (
          <Link key={link.href} href={link.href}
            className="font-heading font-bold text-3xl text-offwhite hover:text-teal-pale transition-colors duration-300 tracking-wide uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif", transitionDelay: `${i * 50}ms` }}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact" className="btn-teal mt-4">Get a Quote</Link>
      </div>
    </>
  );
}
