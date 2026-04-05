import BookingForm from "@/components/BookingForm";

export default function ContactPage() {
  return (
    <section className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="status-led status-led-amber" />
            <span className="text-[10px] text-amber/50 font-body tracking-[0.25em] uppercase">
              Open Channel
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Initiate <span className="text-amber glow-amber">Contact</span>
          </h1>
          <p className="text-[11px] text-white-dim/55 font-body max-w-lg mx-auto leading-relaxed">
            Fill out the form below and we&apos;ll get back to you shortly
            &mdash; usually the same day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <BookingForm />
          </div>

          {/* Contact Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            {/* Phone */}
            <div className="retro-panel overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 bg-steel-blue/8 border-b border-steel-blue/15">
                <span className="text-[9px] font-heading text-amber/40 tracking-widest">
                  DIRECT LINE
                </span>
              </div>
              <div className="p-5 flex items-start gap-4">
                <div className="w-8 h-8 border border-amber/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber/60 text-sm">&#9742;</span>
                </div>
                <div>
                  <a
                    href="tel:+19413032130"
                    className="text-amber hover:text-amber-glow transition-colors font-heading text-sm font-bold tracking-wider"
                  >
                    (941) 303-2130
                  </a>
                  <p className="text-[9px] text-white-dim/25 font-body mt-1 tracking-wider">
                    CALL OR TEXT &middot; 7 DAYS A WEEK
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="retro-panel overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 bg-steel-blue/8 border-b border-steel-blue/15">
                <span className="text-[9px] font-heading text-amber/40 tracking-widest">
                  EMAIL
                </span>
              </div>
              <div className="p-5 flex items-start gap-4">
                <div className="w-8 h-8 border border-amber/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber/60 text-sm">&#9993;</span>
                </div>
                <div>
                  <a
                    href="mailto:John.H@houstonwehaveaproblem.cc"
                    className="text-amber hover:text-amber-glow transition-colors font-heading text-sm font-bold tracking-wider"
                  >
                    John.H@houstonwehaveaproblem.cc
                  </a>
                  <p className="text-[9px] text-white-dim/25 font-body mt-1 tracking-wider">
                    TYPICALLY RESPONDS SAME DAY
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="retro-panel overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 bg-steel-blue/8 border-b border-steel-blue/15">
                <span className="text-[9px] font-heading text-amber/40 tracking-widest">
                  OPERATING HOURS
                </span>
              </div>
              <div className="p-5">
                <div className="space-y-2 text-[11px] font-body">
                  <div className="flex justify-between">
                    <span className="text-white-dim/55">Mon &ndash; Sat</span>
                    <span className="text-crt-green/50 readout-value">08:00 &ndash; 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white-dim/55">Sunday</span>
                    <span className="text-amber/50 readout-value">BY APPOINTMENT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="retro-panel overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 bg-steel-blue/8 border-b border-steel-blue/15">
                <span className="text-[9px] font-heading text-amber/40 tracking-widest">
                  SERVICE AREA
                </span>
              </div>
              <div className="p-5 space-y-2">
                {["Charlotte County, FL", "Sarasota County, FL"].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <span className="status-led status-led-green" />
                    <span className="text-[11px] text-white-dim/60 font-body">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Free Estimate */}
            <div className="retro-panel overflow-hidden glow-box-green">
              <div className="flex items-center gap-2 px-4 py-2 bg-crt-green/3 border-b border-crt-green/8">
                <span className="status-led status-led-green" />
                <span className="text-[9px] font-heading text-crt-green/40 tracking-widest">
                  FREE ESTIMATES
                </span>
              </div>
              <div className="p-5 text-center">
                <p className="text-[10px] text-white-dim/65 font-body leading-relaxed">
                  Every mission starts with a free, no-obligation assessment.
                  Contact us today.
                </p>
              </div>
            </div>

            {/* Large Job Deposit */}
            <div className="retro-panel overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 bg-amber/3 border-b border-amber/10">
                <span className="status-led status-led-amber" />
                <span className="text-[9px] font-heading text-amber/40 tracking-widest">
                  DEPOSIT INFO
                </span>
              </div>
              <div className="p-5">
                <p className="text-[10px] text-white-dim/65 font-body leading-relaxed">
                  For larger projects (full-day or multi-day), a deposit may be
                  required to secure your spot. We accept payments through
                  Square.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
