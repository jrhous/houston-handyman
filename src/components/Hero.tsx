"use client";

import Link from "next/link";

function TelemetryReadout() {
  return (
    <div className="absolute top-8 right-8 hidden xl:block text-[9px] font-body text-steel-blue/30 leading-relaxed text-right select-none pointer-events-none">
      <div className="space-y-0.5">
        <div>SYS.STATUS ........ <span className="text-crt-green/30">NOMINAL</span></div>
        <div>CREW.READY ........ <span className="text-crt-green/30">AFFIRMATIVE</span></div>
        <div>SVC.AREA .......... <span className="text-amber/30">CHARLOTTE</span></div>
        <div>SVC.AREA .......... <span className="text-amber/30">SARASOTA</span></div>
        <div>EST.COST .......... <span className="text-crt-green/30">FREE</span></div>
        <div>SIGNAL ............ <span className="text-crt-green/30">STRONG</span></div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Layered gradient atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_65%_35%,rgba(255,140,0,0.08)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_15%_75%,rgba(0,255,65,0.04)_0%,transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_50%,rgba(255,140,0,0.03)_0%,transparent_60%)]" />
        {/* Horizontal scan accent */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/10 to-transparent" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crt-green/5 to-transparent" />
      </div>

      <TelemetryReadout />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow with status LED */}
          <div className="fade-up inline-flex items-center gap-3 mb-8 px-4 py-2 border border-steel-blue/30 bg-deep-navy/40">
            <span className="status-led status-led-green" />
            <span className="text-crt-green-dim text-[10px] font-body tracking-[0.2em] uppercase">
              Family Owned &amp; Operated
            </span>
            <span className="text-white/30">|</span>
            <span className="text-amber-dim text-[10px] font-body tracking-[0.15em] uppercase">
              Charlotte &amp; Sarasota Counties
            </span>
          </div>

          {/* Main heading - staggered reveal */}
          <h1 className="mb-8">
            <span className="fade-up fade-up-delay-1 block text-5xl sm:text-6xl md:text-8xl font-heading font-black leading-[0.95] text-amber glow-amber">
              HOUSTON
            </span>
            <span className="fade-up fade-up-delay-2 block text-3xl sm:text-4xl md:text-6xl font-heading font-bold leading-[1] text-white/90 mt-1">
              WE HAVE A
            </span>
            <span className="fade-up fade-up-delay-3 block text-5xl sm:text-6xl md:text-8xl font-heading font-black leading-[0.95] text-crt-green glow-green mt-1">
              PROBLEM
            </span>
          </h1>

          {/* Divider accent */}
          <div className="fade-up fade-up-delay-3 w-24 h-px bg-gradient-to-r from-amber via-amber to-transparent mb-8" />

          {/* Tagline */}
          <div className="fade-up fade-up-delay-4 mb-10">
            <p className="text-lg sm:text-xl text-white/80 font-body leading-relaxed tracking-wide">
              One Small Fix, One Giant Leap for Your Home.
            </p>
            <p className="text-sm text-white-dim/60 font-body mt-3 max-w-lg leading-relaxed">
              From leaky faucets to junk removal &mdash; fast, affordable,
              and done right the first time.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="fade-up fade-up-delay-5 flex flex-col sm:flex-row gap-4 mb-14">
            <Link href="/contact" className="retro-btn retro-btn-amber">
              Launch Service Request
            </Link>
            <Link href="/services" className="retro-btn retro-btn-outline">
              View Missions
            </Link>
          </div>

          {/* Trust badges as instrument readouts */}
          <div className="fade-up fade-up-delay-5 flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "Family Owned", status: "CONFIRMED" },
              { label: "Free Estimates", status: "ACTIVE" },
              { label: "Honest Pricing", status: "LOCKED" },
              { label: "Work Guaranteed", status: "ENABLED" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-[10px] font-body tracking-wider"
              >
                <span className="status-led status-led-green" />
                <span className="text-white-dim/60 uppercase">{badge.label}</span>
                <span className="text-crt-green/50">[{badge.status}]</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom edge gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-space-black to-transparent pointer-events-none" />
    </section>
  );
}
