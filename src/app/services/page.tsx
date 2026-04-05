import MissionPatchCard from "@/components/MissionPatchCard";

const services = [
  {
    icon: "\u{1F6B0}",
    name: "Basic Plumbing",
    description:
      "Leaky faucets, running toilets, clogged drains, pipe repairs, and fixture replacements \u2014 we've got it covered.",
  },
  {
    icon: "\u26A1",
    name: "Small Electrical",
    description:
      "Outlet & switch replacement, ceiling fan installation, light fixture swaps, and other minor electrical work.",
  },
  {
    icon: "\u{1F3A8}",
    name: "Painting",
    description:
      "Interior painting, touch-ups, accent walls, and full room repaints. Clean lines and professional results.",
  },
  {
    icon: "\u{1F9F1}",
    name: "Drywall Repair",
    description:
      "Patch holes, fix cracks, smooth damage, and restore your walls to like-new condition.",
  },
  {
    icon: "\u{1FA9A}",
    name: "Carpentry",
    description:
      "Trim work, door adjustments, shelving, minor structural repairs, and custom woodwork solutions.",
  },
  {
    icon: "\u{1F3E0}",
    name: "General Repairs",
    description:
      "Drywall patches, door & window adjustments, trim work, and general fix-it tasks around the house.",
  },
  {
    icon: "\u{1F4E6}",
    name: "Assembly",
    description:
      "Furniture from IKEA, Wayfair, Amazon, or anywhere else? We'll put it together quickly and correctly.",
  },
  {
    icon: "\u{1F69B}",
    name: "Junk Removal",
    description:
      "Old furniture, appliances, yard debris, and clutter \u2014 we load it up and haul it away.",
  },
];

export default function ServicesPage() {
  return (
    <section className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="status-led status-led-green" />
            <span className="text-[10px] text-crt-green/60 font-body tracking-[0.25em] uppercase">
              All Systems Go
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Mission <span className="text-amber glow-amber">Briefings</span>
          </h1>
          <p className="text-[11px] text-white-dim/55 font-body max-w-lg mx-auto leading-relaxed">
            From minor repairs to major overhauls, our crew is trained and ready
            for any mission. Select your operation below.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <MissionPatchCard key={service.name} {...service} index={i} />
          ))}
        </div>

        {/* Restriction Notice */}
        <div className="mt-20 max-w-2xl mx-auto">
          <div className="retro-panel overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-2 bg-retro-orange/8 border-b border-retro-orange/20">
              <span className="text-retro-orange text-xs">&#9888;</span>
              <span className="text-[9px] font-heading text-retro-orange/70 tracking-widest">
                MISSION RESTRICTION
              </span>
            </div>
            <div className="p-5 text-center">
              <p className="text-[11px] text-white-dim/65 font-body leading-relaxed">
                We do <strong className="text-amber">NOT</strong> perform
                roofing work. For roofing needs, please contact a licensed
                roofing contractor in your area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
