export default function GalleryPage() {
  return (
    <section className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-steel-blue/40" />
            <span className="text-[10px] text-crt-green/60 font-body tracking-[0.25em] uppercase">
              Visual Records
            </span>
            <div className="w-8 h-px bg-steel-blue/40" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Mission <span className="text-amber glow-amber">Log</span>
          </h1>
          <p className="text-[11px] text-white-dim/55 font-body max-w-lg mx-auto leading-relaxed">
            Documentation of completed missions. Before &amp; after records of
            our work.
          </p>
        </div>

        {/* Placeholder Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-14">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="retro-panel aspect-square flex flex-col items-center justify-center gap-2 group hover:border-steel-blue/40 transition-colors overflow-hidden"
            >
              {/* Corner brackets */}
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-steel-blue/15" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-steel-blue/15" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-steel-blue/15" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-steel-blue/15" />

                <svg
                  className="w-8 h-8 text-steel-blue/15 group-hover:text-steel-blue/25 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
                <span className="text-[8px] text-steel-blue/15 font-body tracking-[0.2em] uppercase mt-1">
                  MSN-{String(i + 1).padStart(3, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="max-w-md mx-auto">
          <div className="retro-panel overflow-hidden glow-box-green">
            <div className="flex items-center gap-2 px-5 py-2 bg-crt-green/3 border-b border-crt-green/8">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-crt-green animate-pulse" />
              <span className="text-[9px] font-heading text-crt-green/40 tracking-widest">
                STANDBY
              </span>
            </div>
            <div className="p-8 text-center">
              <h3 className="font-heading text-lg font-bold text-white mb-3">
                Mission Photos Incoming
              </h3>
              <p className="text-[11px] text-white-dim/55 font-body leading-relaxed">
                We&apos;re currently documenting completed missions. Check back
                soon for before &amp; after photos of our work across Charlotte
                &amp; Sarasota Counties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
