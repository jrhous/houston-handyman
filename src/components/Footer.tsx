import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Missions" },
  { href: "/pricing", label: "Costs" },
  { href: "/about", label: "Crew" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-steel-blue/20">
      {/* Status bar strip */}
      <div className="bg-deep-navy/80 border-b border-steel-blue/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-4 text-[9px] font-body tracking-[0.2em] uppercase text-white-dim/25">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <span className="status-led status-led-green" />
              All Systems Operational
            </span>
            <span className="hidden sm:inline text-steel-blue/20">|</span>
            <span className="hidden sm:inline">
              Serving Charlotte &amp; Sarasota Counties
            </span>
          </div>
          <a
            href="tel:+19413032130"
            className="flex items-center gap-1.5 text-amber/50 hover:text-amber transition-colors"
          >
            <span className="status-led status-led-amber" />
            (941) 303-2130
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-[#06060a]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Logo block */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 border border-amber/40 flex items-center justify-center">
                  <span className="font-heading text-[9px] font-black text-amber">H</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[12px] font-heading font-bold tracking-[0.15em] text-amber">
                    HOUSTON
                  </span>
                  <span className="text-[7px] font-body tracking-[0.25em] text-crt-green-dim/50 mt-px">
                    WE HAVE A PROBLEM
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-white-dim/20 font-body tracking-wider mt-2">
                Family Owned &amp; Operated Handyman Service
              </p>
            </div>

            {/* Nav links */}
            <div className="flex gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[10px] text-white-dim/65 hover:text-amber transition-colors font-body tracking-[0.15em] uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact block */}
            <div className="text-right">
              <a
                href="tel:+19413032130"
                className="text-amber/70 hover:text-amber transition-colors font-body text-sm font-bold block"
              >
                (941) 303-2130
              </a>
              <p className="text-[10px] text-white-dim/40 mt-1 font-body tracking-wider">
                Mon&ndash;Sat 8am&ndash;6pm &middot; Sun by appointment
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 pt-5 border-t border-steel-blue/8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[9px] text-white-dim/35 font-body tracking-wider">
              &copy; {new Date().getFullYear()} HOUSTON WE HAVE A PROBLEM. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[9px] text-steel-blue/25 font-body tracking-wider">
              CHARLOTTE COUNTY &middot; SARASOTA COUNTY &middot; FLORIDA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
