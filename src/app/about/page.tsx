import Link from "next/link";

const crew = [
  {
    name: "John Houston",
    title: "Co-Owner & Operator",
    callsign: "HOUSTON-1",
    bio: "Experienced handyman with a passion for quality work and customer satisfaction. John brings years of hands-on expertise to every job.",
  },
  {
    name: "Christian Trowbridge",
    title: "Co-Owner & Operator",
    callsign: "HOUSTON-2",
    bio: "Detail-oriented craftsman who treats every home like his own. Christian ensures every project meets the highest standards.",
  },
];

const values = [
  {
    label: "Integrity",
    code: "INT",
    desc: "Honest pricing and transparent communication on every job.",
  },
  {
    label: "Quality",
    code: "QAL",
    desc: "We do things the right way, not the fast way.",
  },
  {
    label: "Reliability",
    code: "REL",
    desc: "On time, every time. We show up when we say we will.",
  },
  {
    label: "Respect",
    code: "RSP",
    desc: "We treat your home like our own and clean up when we're done.",
  },
];

export default function AboutPage() {
  return (
    <section className="relative z-10 py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="status-led status-led-green" />
            <span className="text-[10px] text-crt-green/60 font-body tracking-[0.25em] uppercase">
              Personnel File
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Meet the <span className="text-amber glow-amber">Crew</span>
          </h1>
          <p className="text-[11px] text-white-dim/55 font-body max-w-lg mx-auto leading-relaxed">
            Family-owned and operated, serving Charlotte County &amp; Sarasota
            County, Florida.
          </p>
        </div>

        {/* Crew Cards - astronaut ID badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {crew.map((member) => (
            <div
              key={member.name}
              className="retro-panel retro-panel-active overflow-hidden glow-box-amber"
            >
              {/* Badge header strip */}
              <div className="flex items-center justify-between px-5 py-2 bg-steel-blue/10 border-b border-steel-blue/20">
                <span className="text-[9px] font-heading text-amber/50 tracking-widest">
                  CREW MEMBER ID
                </span>
                <span className="text-[9px] font-body text-crt-green/40 tracking-wider">
                  {member.callsign}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-5">
                  {/* Photo placeholder */}
                  <div className="w-20 h-24 flex-shrink-0 bg-space-black/50 border border-steel-blue/30 flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Helmet icon */}
                    <svg
                      className="w-9 h-9 text-steel-blue/25"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    </svg>
                    <span className="text-[7px] text-steel-blue/20 font-body mt-0.5 tracking-widest">
                      PHOTO
                    </span>
                    {/* Corner brackets */}
                    <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-steel-blue/20" />
                    <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-steel-blue/20" />
                    <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-steel-blue/20" />
                    <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-steel-blue/20" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-base font-bold text-amber tracking-wider">
                      {member.name}
                    </h3>
                    <p className="text-[10px] text-white-dim/55 font-body tracking-[0.15em] uppercase mb-3">
                      {member.title}
                    </p>

                    <div className="gauge-bar w-16 mb-3">
                      <div className="gauge-bar-fill w-full" />
                    </div>

                    <p className="text-[11px] text-white-dim/60 font-body leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom status */}
              <div className="flex items-center justify-between px-5 py-2 bg-steel-blue/5 border-t border-steel-blue/10">
                <span className="flex items-center gap-1.5 text-[8px] font-body text-crt-green/30 tracking-wider">
                  <span className="status-led status-led-green" />
                  ACTIVE DUTY
                </span>
                <span className="text-[8px] font-body text-white-dim/15 tracking-wider">
                  CHARLOTTE / SARASOTA
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="retro-panel overflow-hidden mb-20 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 px-5 py-2 bg-steel-blue/8 border-b border-steel-blue/15">
            <div className="w-8 h-px bg-steel-blue/30" />
            <span className="text-[9px] font-heading text-white-dim/65 tracking-widest">
              MISSION BACKGROUND
            </span>
            <div className="w-8 h-px bg-steel-blue/30" />
          </div>
          <div className="p-8">
            <h2 className="font-heading text-lg font-bold text-white mb-5 text-center">
              Our <span className="text-crt-green glow-green">Story</span>
            </h2>
            <div className="space-y-4 text-[11px] text-white-dim/60 font-body leading-[1.9]">
              <p>
                Houston We Have A Problem was founded with a simple belief:
                everyone deserves quality home repairs without being overcharged
                or kept waiting.
              </p>
              <p>
                As a family-owned operation, we handle every job personally
                &mdash; so you always know who&apos;s coming through your door.
                Whether it&apos;s a one-hour fix or a full day of work, we treat
                every home like our own.
              </p>
              <p>
                We proudly serve Charlotte County and Sarasota County, Florida,
                bringing honest work and fair prices to our neighbors.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Parameters / Values */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-steel-blue/40" />
            <span className="text-[10px] text-crt-green/60 font-body tracking-[0.25em] uppercase">
              Core Protocol
            </span>
            <div className="w-8 h-px bg-steel-blue/40" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-white">
            Mission <span className="text-crt-green glow-green">Parameters</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {values.map((value) => (
            <div
              key={value.label}
              className="retro-panel overflow-hidden group hover:border-amber/30 transition-all"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-steel-blue/8 border-b border-steel-blue/15">
                <span className="text-[9px] font-heading text-white/50 tracking-widest">
                  {value.code}
                </span>
                <span className="text-steel-blue/20">|</span>
                <span className="text-[9px] font-heading text-amber/50 tracking-widest">
                  {value.label.toUpperCase()}
                </span>
              </div>
              <div className="p-5">
                <p className="text-[11px] text-white-dim/60 font-body leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link href="/contact" className="retro-btn retro-btn-amber">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
