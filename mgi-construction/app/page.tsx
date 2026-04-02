import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Star, HardHat, Home, Building, Shovel, Wrench, LayoutDashboard } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const stats = [
  { number: "10+", label: "Years of Excellence" },
  { number: "500+", label: "Projects Completed" },
  { number: "8", label: "Ontario Markets" },
  { number: "100%", label: "Owner-Operated" },
];

const services = [
  { icon: Home, title: "Luxury Renovation", desc: "Full-scope interior and exterior renovations. Kitchens, bathrooms, basements, and whole-home transformations." },
  { icon: HardHat, title: "Custom Home Builds", desc: "From foundation to finish — we design and build custom homes that reflect the vision and lifestyle of each client." },
  { icon: Building, title: "Multi-Unit Development", desc: "Purpose-built residential communities and conversion projects across Ontario's fastest-growing markets." },
  { icon: LayoutDashboard, title: "Commercial Construction", desc: "Retail storefronts, office fit-outs, and commercial builds — delivered on time and to spec." },
  { icon: Shovel, title: "Hardscaping & Exteriors", desc: "Concrete driveways, patios, retaining walls, and landscape construction built to last the Ontario climate." },
  { icon: Wrench, title: "Project Management", desc: "End-to-end project oversight, permitting, and trade coordination for owners and investors." },
];

const featuredProjects = [
  { title: "Luxury Master Suite Renovation", location: "Newmarket, ON", type: "Residential", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80" },
  { title: "13-Unit Residential Conversion", location: "Cornwall, ON", type: "Multi-Unit", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80" },
  { title: "Retail Storefront Buildout", location: "GTA, ON", type: "Commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
  { title: "Custom Home — 3,800 sqft", location: "York Region, ON", type: "Custom Build", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
];

const testimonials = [
  { name: "David R.", location: "Newmarket, ON", text: "MGI delivered our full basement renovation on time, on budget, and beyond what we imagined. The craftsmanship is second to none.", stars: 5 },
  { name: "Sandra M.", location: "Richmond Hill, ON", text: "From the first meeting to the final walkthrough, the team was professional, communicative, and genuinely cared about the outcome.", stars: 5 },
  { name: "James K.", location: "Hamilton, ON", text: "They handled our commercial buildout with the precision of a seasoned team. We'll be using MGI for every future project.", stars: 5 },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=85" alt="Premium construction" fill priority className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-charcoal/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8 animate-fade-in" style={{ animationFillMode: "both" }}>
              <div className="w-8 h-8 bg-teal flex items-center justify-center flex-shrink-0">
                <span className="text-white font-heading font-black text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>MGI</span>
              </div>
              <div className="h-px flex-1 max-w-[60px] bg-teal" />
              <span className="font-heading font-600 text-[0.68rem] tracking-[0.3em] text-teal-pale uppercase" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>Build with MGI</span>
            </div>

            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-offwhite leading-[1.05] tracking-tight mb-6 animate-fade-up"
              style={{ fontFamily: "'Montserrat', sans-serif", animationFillMode: "both", animationDelay: "120ms" }}>
              We Don&apos;t Just<br />
              Build Spaces.<br />
              <span className="text-teal-shimmer">We Elevate Them.</span>
            </h1>

            <p className="font-body text-base text-warm-light leading-relaxed max-w-lg mb-10 animate-fade-up"
              style={{ fontFamily: "'Open Sans', sans-serif", animationFillMode: "both", animationDelay: "260ms" }}>
              Meadowlands Group Inc. is Ontario&apos;s premier construction and renovation company — delivering exceptional craftsmanship, precision project management, and spaces that transform the way people live and work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationFillMode: "both", animationDelay: "380ms" }}>
              <Link href="/contact" className="btn-teal">Get a Free Quote <ArrowRight size={16} /></Link>
              <Link href="/portfolio" className="btn-outline-teal">View Our Work</Link>
            </div>

            <div className="flex flex-wrap gap-5 mt-14 animate-fade-up" style={{ animationFillMode: "both", animationDelay: "480ms" }}>
              {["Licensed & Insured", "10+ Years Experience", "Owner-Operated"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-teal-pale" />
                  <span className="font-body text-xs text-warm-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Teal accent bar bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal via-teal-light to-transparent" />
      </section>

      {/* ── STATS ── */}
      <section className="bg-charcoal-mid py-14 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 80}>
              <div className="flex flex-col items-center text-center md:px-8 py-4">
                <span className="font-heading font-black text-5xl md:text-6xl text-teal-pale leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>{stat.number}</span>
                <span className="font-body text-xs text-warm-light tracking-[0.1em] uppercase mt-2" style={{ fontFamily: "'Open Sans', sans-serif" }}>{stat.label}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-28 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="teal-bar" />
                <span className="section-label block mb-3">What We Do</span>
                <h2 className="font-heading font-black text-4xl md:text-5xl text-offwhite tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Full-Service<br />Construction Excellence
                </h2>
              </div>
              <Link href="/services" className="self-start md:self-end font-heading font-600 text-sm text-teal-pale hover:text-teal-light transition-colors flex items-center gap-2" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
                All Services <ArrowRight size={14} />
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <AnimateOnScroll key={svc.title} delay={i * 80}>
                <div className="card-dark p-8 hover-lift group h-full">
                  <div className="w-12 h-12 bg-teal/15 border border-teal/30 flex items-center justify-center mb-6 group-hover:bg-teal/25 transition-colors">
                    <svc.icon size={20} className="text-teal-pale" />
                  </div>
                  <h3 className="font-heading font-700 text-lg text-offwhite mb-3 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>{svc.title}</h3>
                  <p className="font-body text-sm text-warm-light leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>{svc.desc}</p>
                  <div className="mt-6 divider-teal" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-24 px-6 bg-charcoal-mid">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <span className="teal-bar" />
                <span className="section-label block mb-3">Our Work</span>
                <h2 className="font-heading font-black text-4xl md:text-5xl text-offwhite tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>Featured Projects</h2>
              </div>
              <Link href="/portfolio" className="self-start md:self-end font-heading font-600 text-sm text-teal-pale hover:text-teal-light transition-colors flex items-center gap-2" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
                Full Portfolio <ArrowRight size={14} />
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredProjects.map((proj, i) => (
              <AnimateOnScroll key={proj.title} delay={i * 90}>
                <div className="relative overflow-hidden group hover-lift h-72 md:h-80">
                  <Image src={proj.image} alt={proj.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="badge badge-teal">{proj.type}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading font-700 text-xl text-offwhite mb-1 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>{proj.title}</h3>
                    <p className="font-body text-xs text-warm-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>{proj.location}</p>
                  </div>
                  {/* Teal bottom accent on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MGI ── */}
      <section className="py-28 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll>
            <div className="relative h-[540px] teal-glow">
              <Image src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80" alt="MGI craftsmanship" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              {/* Teal corner accent */}
              <div className="absolute top-0 left-0 w-12 h-1 bg-teal" />
              <div className="absolute top-0 left-0 w-1 h-12 bg-teal" />
              <div className="absolute bottom-0 right-0 w-12 h-1 bg-teal" />
              <div className="absolute bottom-0 right-0 w-1 h-12 bg-teal" />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <span className="teal-bar" />
            <span className="section-label block mb-3">Why Build with MGI</span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-offwhite mb-8 tracking-tight leading-[1.1]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Craftsmanship You<br />Can Count On.
            </h2>
            <p className="font-body text-warm-light text-sm leading-relaxed mb-5" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              At Meadowlands Group, we believe that every project — whether a basement suite or a 68-unit development — deserves the same level of precision, accountability, and care. That philosophy is built into everything we do.
            </p>
            <p className="font-body text-warm-light text-sm leading-relaxed mb-10" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              As a family-owned, owner-operated company, we stake our reputation on every single build. No shortcuts. No surprises. Just exceptional work, delivered exactly as promised.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Transparent, fixed-price quotes",
                "Fully licensed & insured trades",
                "Dedicated project manager on every job",
                "On-time, on-budget track record",
                "Owner-involved quality control",
                "Post-project warranty coverage",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-teal-pale mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm text-warm-light" style={{ fontFamily: "'Open Sans', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-outline-teal">Our Story <ArrowRight size={15} /></Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6 bg-charcoal-mid border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <span className="teal-bar mx-auto" />
              <span className="section-label block mb-3">What Clients Say</span>
              <h2 className="font-heading font-black text-4xl text-offwhite tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>Built on Trust</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 100}>
                <div className="card-teal-border p-8 hover-lift h-full flex flex-col">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.stars }).map((_, s) => <Star key={s} size={14} className="text-teal-pale fill-teal-pale" />)}
                  </div>
                  <p className="font-body text-sm text-warm-light leading-relaxed flex-grow mb-6" style={{ fontFamily: "'Open Sans', sans-serif" }}>&ldquo;{t.text}&rdquo;</p>
                  <div className="divider-teal mb-4" />
                  <div>
                    <p className="font-heading font-700 text-offwhite text-sm" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>{t.name}</p>
                    <p className="font-body text-xs text-warm" style={{ fontFamily: "'Open Sans', sans-serif" }}>{t.location}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
