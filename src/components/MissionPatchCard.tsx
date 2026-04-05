import Link from "next/link";

interface MissionPatchCardProps {
  icon: string;
  name: string;
  description: string;
  href?: string;
  index?: number;
}

export default function MissionPatchCard({
  icon,
  name,
  description,
  href = "/contact",
  index = 0,
}: MissionPatchCardProps) {
  const missionNum = String(index + 1).padStart(2, "0");

  return (
    <div className="retro-panel group hover:border-amber/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,140,0,0.1)] overflow-visible">
      {/* Mission designator strip */}
      <div className="flex items-center justify-between px-5 py-2 bg-steel-blue/10 border-b border-steel-blue/20">
        <span className="text-[9px] font-heading text-white/50 tracking-widest">
          MSN-{missionNum}
        </span>
        <span className="status-led status-led-green" />
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col items-center text-center">
        {/* Icon with ring */}
        <div className="relative w-16 h-16 mb-4">
          <div className="absolute inset-0 rounded-full border border-dashed border-steel-blue/30 group-hover:border-amber/30 transition-colors" />
          <div className="absolute inset-[3px] rounded-full border border-steel-blue/15 group-hover:border-amber/15 transition-colors" />
          <div className="w-full h-full rounded-full flex items-center justify-center">
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
              {icon}
            </span>
          </div>
        </div>

        {/* Service name */}
        <h3 className="font-heading text-[11px] font-bold text-amber tracking-[0.15em] mb-2 group-hover:glow-amber transition-all">
          {name}
        </h3>

        {/* Gauge bar accent */}
        <div className="gauge-bar w-12 mb-3">
          <div className="gauge-bar-fill w-full" />
        </div>

        {/* Description */}
        <p className="text-[11px] text-white-dim/65 font-body leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Link */}
        <Link
          href={href}
          className="text-[10px] text-crt-green/60 font-body tracking-[0.15em] hover:text-crt-green transition-colors uppercase flex items-center gap-1.5 group/link"
        >
          <span className="w-1 h-1 rounded-full bg-crt-green/40 group-hover/link:bg-crt-green transition-colors" />
          Request Mission
        </Link>
      </div>
    </div>
  );
}
