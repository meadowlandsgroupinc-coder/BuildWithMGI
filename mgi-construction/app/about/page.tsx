import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Users, Award, TrendingUp } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const values = [
  { icon: Shield, title: "Uncompromising Quality", desc: "Every detail matters. We hold our work to a standard that we'd be proud of in our own homes." },
  { icon: Users, title: "Family-Led", desc: "We're a family-owned company and we treat every client like one. That personal accountability defines us." },
  { icon: Award, title: "Proven Excellence", desc: "10+ years, 500+ projects, and a reputation built entirely on referrals and results." },
  { icon: TrendingUp, title: "Long-Term Vision", desc: "We build relationships that outlast projects. Many of our clients have been with us since day one." },
];

const team = [
  { name: "Faisal Mirza", role: "Owner & CEO", bio: "Faisal founded Meadowlands Group in 2014 and has driven its growth from a boutique renovation company into one of Ontario's most trusted construction and development brands. He leads strategy, business development, and client relationships.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
  { name: "Saleem Mirza", role: "Co-Owner & COO, C.E.T.", bio: "Holding a Civil Engineering Technology diploma from Mohawk College, Saleem brings deep technical expertise to every MGI project. As COO, he oversees construction operations, quality control, and trade management across all active builds.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80" },
  { name: "Asad Mirza", role: "Senior Director & Project Manager", bio: "Asad manages MGI's most complex projects from permit to possession, ensuring every build is executed with precision, clear communication, and unwavering accountability to the client.", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&q=80" },
];

const milestones = [
  { year: "2014", text: "Meadowlands Group Inc. founded in Newmarket, Ontario" },
  { year: "2016", text: "Expanded into multi-unit residential and commercial renovation" },
  { year: "2018", text: "Saleem Mirza completes C.E.T. — Mohawk College" },
  { year: "2020", text: "Commercial construction division launched" },
  { year: "2022", text: "MirzaCapital Investments established for development pipeline" },
  { year: "2024", text: "68-unit Chatham-Kent project reaches permit-ready status" },
  { year: "2025", text: "Active across 8 Ontario markets with 500+ projects delivered" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80" alt="About MGI" fill className="object-cover opacity-15" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 to-charcoal" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimateOnScroll>
            <span className="teal-bar" />
            <span className="section-label block mb-4">Our Story</span>
            <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-offwhite tracking-tight mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>Built Different.<br />Since 2014.</h1>
            <p className="font-body text-lg text-warm-light max-w-2xl leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>Meadowlands Group is the result of two brothers who believed Ontario deserved a construction company that actually cared — about the work, the client, and the community.</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
          <AnimateOnScroll>
            <div className="relative h-[280px] sm:h-[400px] md:h-[500px] teal-glow">
              <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80" alt="MGI team" fill className="object-cover" />
              <div className="absolute top-0 left-0 w-12 h-0.5 bg-teal" />
              <div className="absolute top-0 left-0 w-0.5 h-12 bg-teal" />
              <div className="absolute bottom-0 right-0 w-12 h-0.5 bg-teal" />
              <div className="absolute bottom-0 right-0 w-0.5 h-12 bg-teal" />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <span className="teal-bar" />
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-offwhite mb-6 sm:mb-8 tracking-tight leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>A decade building Ontario from the ground up.</h2>
            <div className="flex flex-col gap-5 font-body text-sm text-warm-light leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              <p>Meadowlands Group Inc. was founded in Newmarket in 2014 by brothers Faisal and Saleem Mirza — with a clear vision: build better, communicate honestly, and treat every client&apos;s home or business the way you&apos;d treat your own.</p>
              <p>What began as a residential renovation company has grown into a vertically integrated construction and development firm with active projects across the GTA, York Region, Hamilton, Kingston, Chatham-Kent, Eastern Ontario, and Ottawa.</p>
              <p>Our affiliated investment entity, MirzaCapital Investments, manages a growing development pipeline that includes purpose-built rental communities and multi-unit acquisitions across Ontario&apos;s most dynamic markets.</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-charcoal-mid border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-10 sm:mb-14">
              <span className="teal-bar mx-auto" />
              <span className="section-label block mb-3">What Drives Us</span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-offwhite tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>Our Core Values</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {values.map((val, i) => (
              <AnimateOnScroll key={val.title} delay={i * 90}>
                <div className="card-teal-border p-6 sm:p-8 hover-lift h-full">
                  <div className="w-12 h-12 bg-teal/15 border border-teal/30 flex items-center justify-center mb-6"><val.icon size={20} className="text-teal-pale" /></div>
                  <h3 className="font-heading font-700 text-lg text-offwhite mb-3 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>{val.title}</h3>
                  <p className="font-body text-sm text-warm-light leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>{val.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-charcoal border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-10 sm:mb-14">
              <span className="teal-bar mx-auto" />
              <span className="section-label block mb-3">Leadership</span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-offwhite tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>The Team Behind the Build</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-7">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 100}>
                <div className="card-dark overflow-hidden hover-lift">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={member.image} alt={member.name} fill className="object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-heading font-700 text-xl text-offwhite tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>{member.name}</h3>
                    <p className="font-heading font-600 text-[0.68rem] tracking-[0.15em] text-teal-pale uppercase mt-1 mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>{member.role}</p>
                    <div className="divider-teal mb-4" />
                    <p className="font-body text-sm text-warm-light leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>{member.bio}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-charcoal-mid border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-10 sm:mb-14">
              <span className="teal-bar mx-auto" />
              <span className="section-label block mb-3">Our Journey</span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-offwhite tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>A Decade of Milestones</h2>
            </div>
          </AnimateOnScroll>
          <div className="relative">
            <div className="absolute left-[52px] sm:left-[72px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-teal/40 to-transparent" />
            <div className="flex flex-col gap-5 sm:gap-7">
              {milestones.map((m, i) => (
                <AnimateOnScroll key={m.year} delay={i * 70}>
                  <div className="flex items-start gap-4 sm:gap-8">
                    <span className="font-heading font-black text-sm sm:text-lg text-teal-pale w-10 sm:w-14 flex-shrink-0 text-right" style={{ fontFamily: "'Montserrat', sans-serif" }}>{m.year}</span>
                    <div className="flex-shrink-0 w-3 h-3 rounded-full bg-teal border-2 border-teal-pale mt-1 relative z-10" />
                    <p className="font-body text-sm text-warm-light leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>{m.text}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-charcoal text-center border-t border-white/5">
        <AnimateOnScroll>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-offwhite mb-6 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>Ready to build with us?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-teal">Get a Free Quote <ArrowRight size={16} /></Link>
            <Link href="/portfolio" className="btn-outline-teal">View Our Work</Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
