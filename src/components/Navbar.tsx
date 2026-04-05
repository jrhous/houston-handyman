"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home", code: "HQ" },
  { href: "/services", label: "Missions", code: "OPS" },
  { href: "/pricing", label: "Costs", code: "FIN" },
  { href: "/about", label: "Crew", code: "PER" },
  { href: "/gallery", label: "Log", code: "LOG" },
  { href: "/contact", label: "Contact", code: "COM" },
];

function MissionClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-heading text-[10px] text-amber tabular-nums tracking-widest">
      {time || "00:00:00"}
    </span>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-space-black/97 shadow-[0_4px_30px_rgba(0,0,0,0.6)] border-amber/20"
          : "bg-space-black/80 border-steel-blue/30"
      } backdrop-blur-md`}
    >
      {/* Top status bar */}
      <div className="hidden lg:flex items-center justify-between px-6 h-6 bg-deep-navy/60 border-b border-steel-blue/15 text-[9px] font-body tracking-[0.2em] uppercase text-white-dim/65">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="status-led status-led-green" />
            Systems Nominal
          </span>
          <span className="text-white/30">|</span>
          <span>Charlotte &amp; Sarasota Counties, FL</span>
        </div>
        <div className="flex items-center gap-4">
          <span>EST</span>
          <MissionClock />
        </div>
      </div>

      {/* Main nav bar */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[56px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Stylized logo mark */}
          <div className="relative w-8 h-8 border border-amber/60 flex items-center justify-center group-hover:border-amber transition-colors">
            <span className="font-heading text-[11px] font-black text-amber">
              H
            </span>
            <div className="absolute -top-px -right-px w-1.5 h-1.5 bg-amber" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[13px] font-heading font-bold tracking-[0.15em] text-amber glow-amber">
              HOUSTON
            </span>
            <span className="text-[8px] font-body tracking-[0.3em] text-crt-green-dim/70 mt-0.5">
              WE HAVE A PROBLEM
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-3 py-1.5 text-[11px] font-body tracking-[0.15em] uppercase transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? "text-amber bg-amber/8"
                      : "text-white-dim/65 hover:text-amber hover:bg-amber/5"
                  }`}
                >
                  <span className="text-[9px] text-white/50 font-heading">
                    {link.code}
                  </span>
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-px bg-amber" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + signal */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Signal strength indicator */}
          <div className="flex items-end gap-[2px] h-3" title="Signal strength">
            {[3, 5, 7, 9, 11].map((h, i) => (
              <div
                key={i}
                className={`w-[3px] bg-crt-green/70 rounded-sm`}
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
          <Link
            href="/contact"
            className="retro-btn retro-btn-amber text-[10px] py-2 px-5"
          >
            Launch Request
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[2px] bg-amber transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-amber transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-amber transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-3 flex flex-col gap-0 bg-space-black/97 border-t border-steel-blue/15">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 text-[11px] font-body tracking-[0.15em] uppercase border-b border-steel-blue/8 flex items-center gap-3 transition-colors ${
                  isActive ? "text-amber" : "text-white-dim/60 hover:text-amber"
                }`}
              >
                <span className="text-[9px] text-white/50 font-heading w-6">
                  {link.code}
                </span>
                {link.label}
                {isActive && <span className="status-led status-led-amber ml-auto" />}
              </Link>
            );
          })}
          <div className="pt-3 pb-1">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="retro-btn retro-btn-amber text-center text-[10px] w-full block"
            >
              Launch Request
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
