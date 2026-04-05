import Hero from "@/components/Hero";
import MissionPatchCard from "@/components/MissionPatchCard";
import Link from "next/link";

const topServices = [
  {
    icon: "\u{1F6B0}",
    name: "Basic Plumbing",
    description:
      "Leaky faucets, running toilets, clogged drains, pipe repairs, and fixture replacements.",
  },
  {
    icon: "\u26A1",
    name: "Small Electrical",
    description:
      "Outlet & switch replacement, ceiling fan installation, light fixture swaps, and minor electrical work.",
  },
  {
    icon: "\u{1F3E0}",
    name: "Home Repairs",
    description:
      "Drywall patches, door & window adjustments, trim work, minor carpentry, and general fix-it tasks.",
  },
  {
    icon: "\u{1F6CB}\uFE0F",
    name: "Assembly",
    description:
      "Furniture from IKEA, Wayfair, Amazon, or anywhere else? We'll put it together quickly and correctly.",
  },
];

const stats = [
  { value: "100%", label: "Satisfaction Rate", icon: "\u2713" },
  { value: "8+", label: "Service Modules", icon: "\u2261" },
  { value: "$0", label: "Hidden Fees", icon: "\u00D8" },
  { value: "2", label: "Counties Served", icon: "\u2316" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services Preview */}
      <section className="relative z-10 py-24">
        {/* Section divider */}
        <div className="section-divider mb-24" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-steel-blue/40" />
              <span className="text-[10px] text-crt-green/60 font-body tracking-[0.25em] uppercase">
                Mission Briefings
              </span>
              <div className="w-8 h-px bg-steel-blue/40" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Services We Offer
            </h2>
            <p className="text-[11px] text-white-dim/55 font-body mt-3 max-w-md mx-auto leading-relaxed">
              No job too small. We take pride in every task, big or little.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {topServices.map((service, i) => (
              <MissionPatchCard key={service.name} {...service} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="retro-btn retro-btn-outline text-[10px]"
            >
              View All Missions
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us - Mission Control Dashboard */}
      <section className="relative z-10 py-24 bg-deep-navy/40">
        <div className="section-divider mb-24" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Text Column */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="status-led status-led-green" />
                <span className="text-[10px] text-crt-green/60 font-body tracking-[0.25em] uppercase">
                  Why Choose Houston
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6">
                The Handyman You Can Actually Trust
              </h2>

              <p className="text-[12px] text-white-dim/60 font-body leading-[1.8] mb-8">
                We know inviting someone into your home is a big deal. Houston
                We Have A Problem is built on honesty, reliability, and
                craftsmanship. You get a straight answer, a fair price, and work
                done right.
              </p>

              <ul className="space-y-3">
                {[
                  "Upfront pricing \u2014 no hidden fees",
                  "On time, every time",
                  "Clean work areas \u2014 we leave it better",
                  "Satisfaction guaranteed on all work",
                  "Family owned \u2014 your neighbor, not a corp",
                ].map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[11px] text-white-dim/65 font-body group"
                  >
                    <span className="w-5 h-5 border border-amber/30 text-amber text-[9px] flex items-center justify-center flex-shrink-0 group-hover:bg-amber/10 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats Dashboard */}
            <div>
              <div className="retro-panel retro-panel-active">
                {/* Dashboard header */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-steel-blue/20 bg-steel-blue/8">
                  <span className="text-[9px] font-heading text-amber/60 tracking-widest">
                    SYSTEM READOUTS
                  </span>
                  <span className="flex items-center gap-1.5 text-[9px] font-body text-crt-green/40 tracking-wider">
                    <span className="status-led status-led-green" />
                    LIVE
                  </span>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2">
                  {stats.map((stat, i) => (
                    <div
                      key={stat.label}
                      className={`p-6 text-center ${
                        i < 2 ? "border-b border-steel-blue/10" : ""
                      } ${i % 2 === 0 ? "border-r border-steel-blue/10" : ""}`}
                    >
                      <div className="text-[10px] text-white/50 font-body mb-2 tracking-wider">
                        {stat.icon}
                      </div>
                      <div className="readout-value text-2xl font-heading font-black text-amber mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[9px] font-body text-white-dim/65 uppercase tracking-[0.15em]">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative z-10 py-28">
        <div className="section-divider mb-28" />

        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-amber/30" />
            <span className="text-[10px] text-amber/50 font-body tracking-[0.25em] uppercase">
              Transmission
            </span>
            <div className="w-12 h-px bg-amber/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-5">
            Ready for{" "}
            <span className="text-amber glow-amber">Launch</span>
            <span className="text-crt-green glow-green">?</span>
          </h2>

          <p className="text-[12px] text-white-dim/55 font-body mb-10 max-w-md mx-auto leading-relaxed">
            Get a free estimate on your next home repair project. We proudly
            serve Charlotte County &amp; Sarasota County, FL.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="retro-btn retro-btn-amber">
              Initiate Contact
            </Link>
            <a href="tel:+19413032130" className="retro-btn retro-btn-outline">
              Call (941) 303-2130
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
