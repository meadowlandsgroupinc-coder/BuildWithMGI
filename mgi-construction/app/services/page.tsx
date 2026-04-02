import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Home, HardHat, Building, Shovel, Wrench, LayoutDashboard } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const services = [
  {
    icon: Home,
    title: "Luxury Renovation",
    tagline: "Transform every room. Elevate every detail.",
    desc: "From full kitchen and bathroom overhauls to basement suites and whole-home renovations, MGI delivers interior transformations that combine precision craftsmanship with designs that last. We manage every trade, permit, and timeline so you don't have to.",
    includes: ["Kitchen & bathroom renovations","Basement finishing & suites","Open-concept conversions","Flooring, millwork & finishes","Permit acquisition & management","Design-build service available"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80",
  },
  {
    icon: HardHat,
    title: "Custom Home Builds",
    tagline: "Your vision. Our expertise. Exceptional results.",
    desc: "We build custom homes from the ground up — managing architecture coordination, site preparation, foundation, framing, mechanical, and every finishing detail. Every MGI custom home is a reflection of the family who will live in it.",
    includes: ["Full architectural coordination","Site prep & foundation","Structural framing & envelope","MEP (mechanical, electrical, plumbing)","Interior finishes & millwork","Final inspection & handover"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
  },
  {
    icon: Building,
    title: "Multi-Unit Development",
    tagline: "From vision to viable. We build for the long term.",
    desc: "MGI specializes in multi-residential conversions and purpose-built rental communities across Ontario. With active projects from 13 to 68 units, our team understands the complexity of multi-unit builds — and delivers institutional quality at every scale.",
    includes: ["Multi-residential conversions","Purpose-built rental communities","CMHC MLI Select structuring","Phased construction sequencing","Permit-to-possession management","Investor reporting & documentation"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80",
  },
  {
    icon: LayoutDashboard,
    title: "Commercial Construction",
    tagline: "Professional spaces that work as hard as you do.",
    desc: "Whether it's a retail storefront, professional office, restaurant fit-out, or commercial renovation, MGI builds commercial spaces to the same exacting standard as our residential work — on schedule, on budget, and fully code-compliant.",
    includes: ["Retail & storefront buildouts","Office renovations & fit-outs","Restaurant & hospitality spaces","Commercial permitting","Millwork & branding integration","Fast-track scheduling available"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
  },
  {
    icon: Shovel,
    title: "Hardscaping & Exteriors",
    tagline: "Curb appeal that commands attention.",
    desc: "From poured concrete driveways to full landscape construction, retaining walls, interlock patios, and exterior grading — MGI's hardscaping division delivers exterior environments built for Ontario's toughest conditions and most discerning homeowners.",
    includes: ["Concrete driveways & aprons","Interlock patios & walkways","Retaining walls & grading","Exterior stairs & landings","Drainage & waterproofing","Landscape structure installation"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  },
  {
    icon: Wrench,
    title: "Project Management",
    tagline: "Your project, fully handled.",
    desc: "MGI offers standalone project management services for developers, investors, and property owners who need experienced oversight on complex builds. From trade coordination and scheduling to compliance and reporting — we become your boots on the ground.",
    includes: ["General contractor coordination","Trade scheduling & procurement","Site supervision & inspection","Budget tracking & reporting","Permit & inspection management","Investor-ready documentation"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80" alt="Services" fill className="object-cover opacity-15" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 to-charcoal" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimateOnScroll>
            <span className="teal-bar" />
            <span className="section-label block mb-4">What We Build</span>
            <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-offwhite tracking-tight mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Services</h1>
            <p className="font-body text-lg text-warm-light max-w-2xl leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              From single-room renovations to full multi-unit developments — MGI delivers every scope with the same uncompromising standard of quality, precision, and professionalism.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services list */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-10">
          {services.map((svc, i) => (
            <AnimateOnScroll key={svc.title} delay={i * 60}>
              <div className="card-dark overflow-hidden hover-lift">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className={`relative h-52 sm:h-64 md:h-auto ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <Image src={svc.image} alt={svc.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 to-transparent" />
                    <div className="absolute top-0 left-0 w-10 h-0.5 bg-teal" />
                  </div>
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="w-11 h-11 bg-teal/15 border border-teal/30 flex items-center justify-center mb-5">
                      <svc.icon size={19} className="text-teal-pale" />
                    </div>
                    <h2 className="font-heading font-black text-2xl md:text-3xl text-offwhite mb-2 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>{svc.title}</h2>
                    <p className="font-heading font-600 text-sm text-teal-pale mb-5 tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>{svc.tagline}</p>
                    <p className="font-body text-sm text-warm-light leading-relaxed mb-7" style={{ fontFamily: "'Open Sans', sans-serif" }}>{svc.desc}</p>
                    <div className="divider-warm mb-6" />
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                      {svc.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-warm-light">
                          <CheckCircle2 size={13} className="text-teal-pale mt-0.5 flex-shrink-0" />
                          <span style={{ fontFamily: "'Open Sans', sans-serif" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn-teal self-start">Get a Quote <ArrowRight size={14} /></Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-charcoal-mid text-center border-t border-white/5">
        <AnimateOnScroll>
          <span className="teal-bar mx-auto" />
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-offwhite mb-5 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>Not sure which service fits?</h2>
          <p className="font-body text-warm-light max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base" style={{ fontFamily: "'Open Sans', sans-serif" }}>Tell us about your project and we&apos;ll provide a free consultation and quote — no obligation, no pressure.</p>
          <Link href="/contact" className="btn-teal w-full sm:w-auto">Book a Free Consultation <ArrowRight size={16} /></Link>
        </AnimateOnScroll>
      </section>
    </>
  );
}
