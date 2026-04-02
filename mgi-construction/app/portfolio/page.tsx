import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const projects = [
  { title: "Luxury Master Suite & Ensuite", location: "Newmarket, ON", type: "Residential Renovation", scope: "Full master bedroom and ensuite transformation — custom millwork, heated floors, walk-in shower, and soaker tub.", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", tag: "badge-teal" },
  { title: "13-Unit Residential Conversion", location: "Cornwall, ON", type: "Multi-Unit Development", scope: "Full conversion of a commercial building to 13 residential suites with updated MEP systems and OBC compliance.", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80", tag: "badge-light" },
  { title: "Open-Concept Kitchen Renovation", location: "Richmond Hill, ON", type: "Residential Renovation", scope: "Full kitchen gut and rebuild — waterfall island, custom cabinetry, quartz countertops, and structural wall removal.", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", tag: "badge-teal" },
  { title: "Commercial Retail Storefront", location: "Vaughan, ON", type: "Commercial Construction", scope: "Ground-up retail storefront fit-out with custom facade, interior buildout, and signage integration.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", tag: "badge-warm" },
  { title: "Custom Home — 4,200 sqft", location: "King City, ON", type: "Custom Build", scope: "Full custom home build from foundation to finish — 4 beds, 4.5 baths, double garage, and luxury interior package.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", tag: "badge-teal" },
  { title: "Concrete Driveway & Hardscape", location: "Barrie, ON", type: "Hardscaping", scope: "Full property hardscape package — exposed aggregate driveway, interlock patio, retaining walls, and exterior stairs.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", tag: "badge-warm" },
  { title: "Basement Suite — Legal 2BR", location: "Markham, ON", type: "Residential Renovation", scope: "Full legal basement suite conversion — separate entrance, kitchen, 2 bedrooms, full bath, egress windows.", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80", tag: "badge-teal" },
  { title: "68-Unit Purpose-Built Community", location: "Chatham-Kent, ON", type: "Multi-Unit Development", scope: "Permit-ready 68-unit purpose-built rental community — phased construction with full procurement pipeline.", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80", tag: "badge-light" },
];

const categories = ["All", "Residential", "Multi-Unit", "Commercial", "Hardscaping", "Custom Build"];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80" alt="Portfolio" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 to-charcoal" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimateOnScroll>
            <span className="teal-bar" />
            <span className="section-label block mb-4">Our Work</span>
            <h1 className="font-heading font-black text-6xl md:text-7xl text-offwhite tracking-tight mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>Project Portfolio</h1>
            <p className="font-body text-lg text-warm-light max-w-2xl leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Every project is a story of transformation. Browse our work across renovation, custom builds, multi-unit development, and commercial construction.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="flex flex-wrap gap-2 mt-10">
              {categories.map((cat, i) => (
                <span key={cat} className={`badge cursor-pointer ${i === 0 ? "badge-teal" : "badge-warm"}`}>{cat}</span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((proj, i) => (
            <AnimateOnScroll key={proj.title} delay={i * 70}>
              <div className="card-dark overflow-hidden hover-lift group h-full flex flex-col">
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <Image src={proj.image} alt={proj.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                  <div className="absolute top-4 left-4"><span className={`badge ${proj.tag}`}>{proj.type}</span></div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading font-700 text-lg text-offwhite mb-2 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>{proj.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-warm-light mb-3">
                    <MapPin size={11} className="text-teal-pale" />
                    <span style={{ fontFamily: "'Open Sans', sans-serif" }}>{proj.location}</span>
                  </div>
                  <p className="font-body text-xs text-warm-light leading-relaxed flex-grow" style={{ fontFamily: "'Open Sans', sans-serif" }}>{proj.scope}</p>
                  <div className="divider-teal mt-5" />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-charcoal-mid text-center border-t border-white/5">
        <AnimateOnScroll>
          <span className="teal-bar mx-auto" />
          <h2 className="font-heading font-black text-4xl text-offwhite mb-5 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>Your project could be next.</h2>
          <p className="font-body text-warm-light max-w-lg mx-auto mb-10 leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>We&apos;d love to hear about what you&apos;re building. Get in touch for a free quote and consultation.</p>
          <Link href="/contact" className="btn-teal">Start Your Project <ArrowRight size={16} /></Link>
        </AnimateOnScroll>
      </section>
    </>
  );
}
