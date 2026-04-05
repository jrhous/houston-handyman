"use client";

import { useState, FormEvent } from "react";

const FORM_EMAIL = "John.H@houstonwehaveaproblem.cc";

const services = [
  "Basic Plumbing",
  "Small Electrical",
  "Painting",
  "Drywall Repair",
  "Carpentry",
  "General Repairs",
  "Assembly",
  "Junk Removal",
  "Other",
];

function FormField({
  label,
  code,
  children,
}: {
  label: string;
  code: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-2 text-[9px] font-body tracking-[0.2em] uppercase">
        <span className="text-white/50">{code}</span>
        <span className="text-white-dim/60">{label}</span>
      </label>
      {children}
    </div>
  );
}

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${FORM_EMAIL}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(Object.fromEntries(formData)),
        }
      );
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Transmission failed. Please try again or call us directly.");
      }
    } catch {
      setError("Transmission failed. Please try again or call us directly.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="retro-panel overflow-hidden glow-box-green">
        <div className="flex items-center gap-2 px-5 py-2 bg-crt-green/5 border-b border-crt-green/10">
          <span className="status-led status-led-green" />
          <span className="text-[9px] font-heading text-crt-green/50 tracking-widest">
            TRANSMISSION CONFIRMED
          </span>
        </div>
        <div className="p-8 text-center">
          <div className="text-crt-green text-3xl mb-3 glow-green">&#10003;</div>
          <h3 className="font-heading text-lg font-bold text-crt-green mb-3 glow-green">
            Transmission Received
          </h3>
          <p className="text-[11px] text-white-dim/60 font-body leading-relaxed">
            Your service request has been logged. We&apos;ll get back to you
            shortly &mdash; usually the same day.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="retro-btn retro-btn-outline text-[10px] mt-6"
          >
            Send Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="retro-panel overflow-hidden">
      {/* Form header */}
      <div className="flex items-center justify-between px-5 py-2 bg-steel-blue/8 border-b border-steel-blue/15">
        <div className="flex items-center gap-2">
          <span className="status-led status-led-amber" />
          <span className="text-[9px] font-heading text-amber/50 tracking-widest">
            SERVICE REQUEST FORM
          </span>
        </div>
        <span className="text-[8px] font-body text-white-dim/15 tracking-wider">
          ALL FIELDS SECURE
        </span>
      </div>

      <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
        <input type="hidden" name="_subject" value="New Service Request - Houston We Have A Problem" />
        <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} />
        {/* Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField label="Full Name" code="NME">
            <input
              type="text"
              name="name"
              required
              placeholder="&gt; enter name_"
              className="terminal-input"
            />
          </FormField>
          <FormField label="Phone" code="TEL">
            <input
              type="tel"
              name="phone"
              required
              placeholder="&gt; (941) 000-0000_"
              className="terminal-input"
            />
          </FormField>
        </div>

        {/* Email */}
        <FormField label="Email Address" code="EML">
          <input
            type="email"
            name="email"
            placeholder="&gt; you@example.com_"
            className="terminal-input"
          />
        </FormField>

        {/* Service */}
        <FormField label="Service Needed" code="SVC">
          <select name="service" required defaultValue="" className="terminal-select">
            <option value="" disabled>
              Select a service...
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </FormField>

        {/* Job Size */}
        <FormField label="Job Size Estimate" code="SIZ">
          <div className="flex gap-1">
            {(["Small", "Medium", "Large"] as const).map((size) => (
              <label
                key={size}
                className="flex-1 cursor-pointer group/radio"
              >
                <input
                  type="radio"
                  name="job_size"
                  value={size}
                  className="sr-only peer"
                />
                <div className="text-center py-2.5 border border-steel-blue/30 text-[10px] font-body text-white-dim/55 tracking-wider uppercase transition-all peer-checked:border-amber peer-checked:text-amber peer-checked:bg-amber/5 hover:border-steel-blue/50">
                  {size}
                </div>
              </label>
            ))}
          </div>
        </FormField>

        {/* Description */}
        <FormField label="Job Description" code="DSC">
          <textarea
            name="description"
            rows={4}
            placeholder="&gt; describe the mission..._"
            className="terminal-input resize-vertical"
          />
        </FormField>

        {/* Preferred Date */}
        <FormField label="Preferred Date" code="DTE">
          <input type="date" name="preferred_date" className="terminal-input" />
        </FormField>

        {/* Divider */}
        <div className="section-divider" />

        {/* Error */}
        {error && (
          <div className="text-[10px] text-red-400 font-body text-center py-2 border border-red-400/20 bg-red-400/5">
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={sending}
          className="retro-btn retro-btn-amber w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {sending ? "Transmitting..." : "Transmit Request"}
        </button>

        <p className="text-[9px] text-white-dim/20 font-body text-center tracking-wider">
          We typically respond within a few hours during business hours.
        </p>
      </form>
    </div>
  );
}
