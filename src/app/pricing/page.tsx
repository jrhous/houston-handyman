import Link from "next/link";

const pricingData = [
  { service: "General Repairs", price: "$75+", code: "GEN" },
  { service: "Faucet / Fixture Replacement", price: "$125+", code: "PLB" },
  { service: "Ceiling Fan Installation", price: "$75+", code: "ELC" },
  { service: "Toilet Replacement", price: "$75+", code: "PLB" },
  { service: "Painting (per room)", price: "$200+", code: "PNT" },
  { service: "Drywall Repair", price: "$150+", code: "DRY" },
  { service: "Assembly", price: "$75+", code: "ASM" },
  { service: "Electrical (minor)", price: "$95+", code: "ELC" },
  { service: "Junk Removal", price: "$150+", code: "JNK" },
  { service: "Carpentry", price: "$95+", code: "CRP" },
];

export default function PricingPage() {
  return (
    <section className="relative z-10 py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-steel-blue/40" />
            <span className="text-[10px] text-crt-green/60 font-body tracking-[0.25em] uppercase">
              Transparent Pricing
            </span>
            <div className="w-8 h-px bg-steel-blue/40" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Mission <span className="text-amber glow-amber">Costs</span>
          </h1>
          <p className="text-[11px] text-white-dim/55 font-body max-w-lg mx-auto leading-relaxed">
            No hidden fees. No surprises. Just honest pricing for honest work.
          </p>
        </div>

        {/* Pricing Table as instrument panel */}
        <div className="retro-panel retro-panel-active overflow-hidden glow-box-amber">
          {/* Panel header */}
          <div className="flex items-center justify-between px-6 py-3 bg-steel-blue/12 border-b border-steel-blue/25">
            <div className="flex items-center gap-3">
              <span className="status-led status-led-green" />
              <span className="font-heading text-[9px] text-amber/60 tracking-widest">
                RATE SCHEDULE
              </span>
            </div>
            <span className="text-[9px] font-body text-white-dim/20 tracking-wider">
              CHARLOTTE &amp; SARASOTA COUNTIES
            </span>
          </div>

          {/* Column headers */}
          <div className="flex items-center px-6 py-2.5 border-b border-steel-blue/15 bg-steel-blue/5">
            <span className="w-12 text-[8px] font-heading text-white/50 tracking-widest">
              CODE
            </span>
            <span className="flex-1 text-[8px] font-heading text-crt-green/40 tracking-widest ml-3">
              SERVICE MODULE
            </span>
            <span className="text-[8px] font-heading text-crt-green/40 tracking-widest text-right">
              BASE RATE
            </span>
          </div>

          {/* Rows */}
          {pricingData.map((item, i) => (
            <div
              key={item.service}
              className={`flex items-center px-6 py-3.5 border-b border-steel-blue/8 transition-colors hover:bg-amber/3 ${
                i % 2 === 0 ? "bg-panel-dark/30" : ""
              }`}
            >
              <span className="w-12 text-[9px] font-heading text-white/50 tracking-widest">
                {item.code}
              </span>
              <span className="flex-1 font-body text-[11px] text-white-dim/70 ml-3">
                {item.service}
              </span>
              <span className="readout-value text-[13px] font-heading font-bold text-amber tabular-nums">
                {item.price}
              </span>
            </div>
          ))}

          {/* Hourly Rate - highlighted */}
          <div className="flex items-center px-6 py-5 bg-amber/6 border-t-2 border-amber/25">
            <span className="w-12 text-[9px] font-heading text-amber/50 tracking-widest">
              HRL
            </span>
            <span className="flex-1 font-heading text-[11px] font-bold text-white/80 tracking-wider ml-3">
              Hourly Rate
            </span>
            <span className="readout-value text-xl font-heading font-black text-amber glow-amber tabular-nums">
              $75&ndash;$95/hr
            </span>
          </div>
        </div>

        {/* Job Size Categories */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              size: "Small",
              desc: "Quick fixes, single tasks",
              note: "No deposit required",
              led: "status-led-green",
            },
            {
              size: "Medium",
              desc: "Half-day projects",
              note: "No deposit required",
              led: "status-led-green",
            },
            {
              size: "Large",
              desc: "Full-day or multi-day jobs",
              note: "Deposit may be required",
              led: "status-led-amber",
            },
          ].map((tier) => (
            <div key={tier.size} className="retro-panel overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 bg-steel-blue/8 border-b border-steel-blue/15">
                <span className={`status-led ${tier.led}`} />
                <span className="text-[9px] font-heading text-white-dim/60 tracking-widest">
                  {tier.size.toUpperCase()} JOB
                </span>
              </div>
              <div className="p-4 text-center">
                <p className="text-[11px] text-white-dim/65 font-body mb-2">
                  {tier.desc}
                </p>
                <p className="text-[9px] text-white-dim/45 font-body tracking-wider">
                  {tier.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Free Estimate CTA */}
        <div className="mt-14 retro-panel overflow-hidden glow-box-green">
          <div className="flex items-center gap-2 px-5 py-2 bg-crt-green/5 border-b border-crt-green/10">
            <span className="status-led status-led-green" />
            <span className="text-[9px] font-heading text-crt-green/50 tracking-widest">
              INCOMING TRANSMISSION
            </span>
          </div>
          <div className="p-8 text-center">
            <h3 className="font-heading text-xl font-bold text-white mb-3">
              Free Estimates on All Missions
            </h3>
            <p className="text-[11px] text-white-dim/55 font-body mb-6 max-w-md mx-auto leading-relaxed">
              Not sure about the cost? Contact us for a free, no-obligation
              estimate. We&apos;ll assess the job and give you an honest quote.
            </p>
            <Link
              href="/contact"
              className="retro-btn retro-btn-amber text-[10px]"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
