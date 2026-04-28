"use client";

import { useState, useTransition } from "react";
import { submitContactForm, type ContactFormData } from "@/app/actions/contact";
// ContactFormData includes: fullName, email, company, projectType, budget, timeline, message
import Button from "@/components/button/Button";
import { ChevronDown } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Custom theme-coloured SVG icons
// ─────────────────────────────────────────────────────────────────────────────

function IconCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9.5"/>
      <path d="M7.5 12.5l3 3 6-6"/>
    </svg>
  );
}

function IconAlert() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9.5"/>
      <path d="M12 8v4.5M12 16h.01"/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Static data
// ─────────────────────────────────────────────────────────────────────────────

const PROJECT_TYPES = [
  "Web App",
  "Landing Page",
  "Mobile App",
  "Brand Identity",
  "UI/UX Design",
  "Other",
];

// ─────────────────────────────────────────────────────────────────────────────
// Input styles — open underline feel
// ─────────────────────────────────────────────────────────────────────────────

const inputCls =
  "w-full px-0 py-3 sm:py-3.5 bg-transparent border-0 border-b border-foreground/12 " +
  "text-foreground text-sm placeholder:text-foreground/25 font-normal " +
  "focus:outline-none focus:border-foreground/40 " +
  "transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed";

const selectCls =
  "w-full px-0 py-3 sm:py-3.5 bg-transparent border-0 border-b border-foreground/12 " +
  "text-sm font-normal appearance-none cursor-pointer " +
  "focus:outline-none focus:border-foreground/40 " +
  "transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed";

const labelCls =
  "block text-xs font-medium text-foreground/35 uppercase tracking-widest mb-1";

// ─────────────────────────────────────────────────────────────────────────────
// Field wrapper
// ─────────────────────────────────────────────────────────────────────────────

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={htmlFor} className={labelCls}>
        {label}
        {required && (
          <span style={{ color: "var(--accent)" }} className="ml-0.5" aria-hidden>*</span>
        )}
      </label>
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ContactForm
// ─────────────────────────────────────────────────────────────────────────────

const BUDGET_OPTIONS = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000+",
  "Happy to discuss",
];

const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1 month",
  "1 to 3 months",
  "3 to 6 months",
  "No fixed deadline",
];

const EMPTY_FORM: ContactFormData = {
  fullName:    "",
  email:       "",
  company:     "",
  projectType: "",
  budget:      "",
  timeline:    "",
  message:     "",
};

export default function ContactForm() {
  const [form, setForm]   = useState<ContactFormData>(EMPTY_FORM);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  function update(field: keyof ContactFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (error) setError(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.fullName.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    startTransition(async () => {
      const result = await submitContactForm(form);
      if (result.success) setSuccess(true);
      else setError(result.message);
    });
  }

  // ── Success ───────────────────────────────────────────────────────────────
  if (success) {
    return (
      <div role="status" aria-live="polite" className="flex flex-col items-start gap-5 sm:gap-6 py-8 sm:py-10">
        {/* Accent-coloured success icon */}
        <span
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center"
          style={{
            background: "rgba(230,57,70,0.08)",
            border:     "1px solid rgba(230,57,70,0.18)",
            color:      "var(--accent)",
          }}
        >
          <IconCheck />
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground">Message received.</h3>
          <p className="text-sm sm:text-base text-foreground/50 leading-relaxed max-w-sm font-normal">
            Thanks for reaching out. We review every enquiry personally and
            respond within 24 hours.
          </p>
        </div>
        <button
          onClick={() => { setForm(EMPTY_FORM); setSuccess(false); }}
          className="text-sm text-foreground/35 hover:text-foreground/65 transition-colors duration-200 underline underline-offset-4 font-normal"
        >
          Send another message
        </button>
      </div>
    );
  }

  // ── Form ──────────────────────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 sm:gap-7">

      {/* Row 1: Full Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
        <Field label="Full Name" htmlFor="fullName" required>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="Alex Johnson"
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            disabled={isPending}
            className={inputCls}
            required
          />
        </Field>
        <Field label="Email Address" htmlFor="email" required>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="alex@company.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            disabled={isPending}
            className={inputCls}
            required
          />
        </Field>
      </div>

      {/* Row 2: Company + Project Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
        <Field label="Company / Brand" htmlFor="company">
          <input
            id="company"
            type="text"
            autoComplete="organization"
            placeholder="Acme Inc."
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            disabled={isPending}
            className={inputCls}
          />
        </Field>
        <Field label="Project Type" htmlFor="projectType">
          <div className="relative">
            <select
              id="projectType"
              value={form.projectType}
              onChange={(e) => update("projectType", e.target.value)}
              disabled={isPending}
              className={selectCls + " pr-6"}
              style={{ color: form.projectType ? "var(--foreground)" : "rgba(255,255,255,0.25)" }}
            >
              <option value="" disabled hidden>Select type</option>
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t} style={{ color: "#fff", background: "#1a1520" }}>{t}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-foreground/25 pointer-events-none" aria-hidden />
          </div>
        </Field>
      </div>

      {/* Row 3: Budget + Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
        <Field label="Budget Range" htmlFor="budget">
          <div className="relative">
            <select
              id="budget"
              value={form.budget}
              onChange={(e) => update("budget", e.target.value)}
              disabled={isPending}
              className={selectCls + " pr-6"}
              style={{ color: form.budget ? "var(--foreground)" : "rgba(255,255,255,0.25)" }}
            >
              <option value="" disabled hidden>Select range</option>
              {BUDGET_OPTIONS.map((b) => (
                <option key={b} value={b} style={{ color: "#fff", background: "#1a1520" }}>{b}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-foreground/25 pointer-events-none" aria-hidden />
          </div>
        </Field>
        <Field label="Timeline" htmlFor="timeline">
          <div className="relative">
            <select
              id="timeline"
              value={(form as ContactFormData & { timeline: string }).timeline ?? ""}
              onChange={(e) => update("timeline" as keyof ContactFormData, e.target.value)}
              disabled={isPending}
              className={selectCls + " pr-6"}
              style={{ color: (form as ContactFormData & { timeline: string }).timeline ? "var(--foreground)" : "rgba(255,255,255,0.25)" }}
            >
              <option value="" disabled hidden>Select timeline</option>
              {TIMELINE_OPTIONS.map((t) => (
                <option key={t} value={t} style={{ color: "#fff", background: "#1a1520" }}>{t}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-foreground/25 pointer-events-none" aria-hidden />
          </div>
        </Field>
      </div>

      {/* Row 4: Message */}
      <Field label="Project Details" htmlFor="message" required>
        <textarea
          id="message"
          placeholder="Tell us about your project — what you're building, your goals, timeline, or anything that helps us understand the brief."
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          disabled={isPending}
          rows={5}
          className={
            "w-full px-0 py-3 sm:py-3.5 bg-transparent border-0 border-b border-foreground/12 " +
            "text-foreground text-sm placeholder:text-foreground/25 font-normal resize-none leading-relaxed " +
            "focus:outline-none focus:border-foreground/40 " +
            "transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
          }
          required
        />
      </Field>

      {/* Error */}
      {error && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex items-start gap-2.5 px-4 py-3 rounded-xl text-sm"
          style={{
            border:     "1px solid rgba(230,57,70,0.2)",
            background: "rgba(230,57,70,0.05)",
            color:      "rgba(230,100,110,1)",
          }}
        >
          <span className="mt-0.5 shrink-0"><IconAlert /></span>
          <span className="font-normal">{error}</span>
        </div>
      )}

      {/* Submit */}
      <div className="flex flex-col gap-3 pt-1">
        <Button
          variant="text-stagger"
          text={isPending ? "Sending…" : "Send Your Brief"}
          type="submit"
          className="text-primary-cta-text glossy-btn w-full justify-center"
          bgClassName="primary-button"
        />
        <p className="text-xs text-foreground/25 text-center font-normal">
          Fields marked <span style={{ color: "var(--accent)" }}>*</span> required — response within 24 hours
        </p>
      </div>

    </form>
  );
}
