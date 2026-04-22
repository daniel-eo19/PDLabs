import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ContactForm from "./ContactForm";
import SceneDecorations from "@/components/background/SceneDecorations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — PD Labs",
  description: "Start a project with PD Labs. Tell us what you're building.",
};

const akira   = { fontFamily: "'Akira Expanded', sans-serif" } as const;
const satoshi = { fontFamily: "'Satoshi', sans-serif" } as const;

// ─────────────────────────────────────────────────────────────────────────────
// Custom theme-coloured SVG icons
// ─────────────────────────────────────────────────────────────────────────────

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2.5"/>
      <path d="M2 7l8.586 5.657a2.5 2.5 0 002.828 0L22 7"/>
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9.5"/>
      <path d="M12 7v5.25l3.5 2.25"/>
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9.5"/>
      <path d="M2.5 12h19M12 2.5c-2.5 3-4 6-4 9.5s1.5 6.5 4 9.5M12 2.5c2.5 3 4 6 4 9.5s-1.5 6.5-4 9.5"/>
    </svg>
  );
}

// Accent-coloured icon badge — matches brand primary CTA color
function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
      style={{
        background: "rgba(230,57,70,0.08)",
        border:     "1px solid rgba(230,57,70,0.18)",
        color:      "var(--accent)",
      }}
    >
      {children}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div style={satoshi}>

        {/* ── Navbar ────────────────────────────────────────────────────── */}
        <header
          className="fixed top-0 left-0 right-0 z-40 h-14 border-b border-foreground/8 backdrop-blur-md"
          style={{ backgroundColor: "color-mix(in srgb, var(--background) 82%, transparent)" }}
        >
          <div className="w-content-width mx-auto h-full px-4 flex items-center justify-between gap-4">

            {/* Back */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground/80 transition-colors duration-200 shrink-0"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
              <span className="font-medium hidden xs:inline">Back</span>
            </Link>

            {/* Logo — full primary logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/web-agency-2/PD_LABS_PRIMARY_WHITE.png"
                alt="PD Labs"
                width={88}
                height={22}
                style={{ height: "22px", width: "auto", objectFit: "contain" }}
                className="opacity-90"
                priority
              />
            </Link>

            {/* View Work pill */}
            <Link
              href="/portfolio"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-foreground/15 text-foreground/60 hover:bg-foreground/5 transition-all duration-200 shrink-0"
            >
              View Work
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </header>

        <main className="pt-14">

          {/* ── HERO ────────────────────────────────────────────────────── */}
          <section
            className="relative w-full flex flex-col items-center justify-center overflow-hidden"
            style={{
              minHeight: "clamp(260px, 44vh, 500px)",
              background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(230,57,70,0.10) 0%, transparent 70%)",
            }}
          >
            <SceneDecorations preset="hero" />
            {/* Grid texture */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            <div className="absolute top-0 left-0 right-0 h-px bg-foreground/8" />

            <div className="relative z-10 w-content-width mx-auto px-4 flex flex-col items-center gap-5 sm:gap-7 py-14 sm:py-20 md:py-24 text-center">

              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs font-medium text-foreground/30" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-foreground/60 transition-colors duration-200">Home</Link>
                <span>/</span>
                <span className="text-foreground/55">Contact</span>
              </nav>

              <div className="w-16 sm:w-24 h-px bg-foreground/10" />

              <h1
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-bold text-foreground leading-none tracking-wide uppercase"
                style={akira}
              >
                Contact Us
              </h1>

              <div className="w-16 sm:w-24 h-px bg-foreground/10" />

              <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-normal max-w-md sm:max-w-lg leading-relaxed">
                We work with ambitious teams and founders to craft digital
                products worth noticing. Let&apos;s talk about yours.
              </p>

            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/8" />
          </section>

          {/* ── MAIN CONTACT SECTION ──────────────────────────────────── */}
          <section className="relative w-full py-14 sm:py-18 md:py-24">
            <div className="w-content-width mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-24">

                {/* ── LEFT: info ────────────────────────────────────────── */}
                <div className="w-full lg:w-5/12 flex flex-col gap-8 lg:gap-10">

                  {/* Heading */}
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <h2
                      className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight uppercase tracking-wide"
                      style={akira}
                    >
                      Get In
                      <br />
                      <span className="text-foreground/25">Touch.</span>
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed text-foreground/55 font-normal max-w-sm">
                      Every project starts with a conversation. Share your brief
                      — we&apos;ll come back with a clear perspective and an honest
                      assessment within 24 hours.
                    </p>
                  </div>

                  {/* Contact info */}
                  <div className="flex flex-col gap-0">
                    <p className="text-xs font-medium text-foreground/30 uppercase tracking-widest mb-4">
                      Direct contact
                    </p>
                    {[
                      {
                        icon:  <IconMail />,
                        label: "Email us",
                        value: "hello@pdlabs.io",
                        href:  "mailto:hello@pdlabs.io",
                      },
                      {
                        icon:  <IconClock />,
                        label: "Response time",
                        value: "Within 24 hours",
                        href:  null,
                      },
                      {
                        icon:  <IconGlobe />,
                        label: "Location",
                        value: "Remote-first — Global",
                        href:  null,
                      },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-4 py-4 border-t border-foreground/8">
                        <IconBadge>{item.icon}</IconBadge>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-xs text-foreground/30 font-medium uppercase tracking-wider">
                            {item.label}
                          </span>
                          {item.href ? (
                            <a href={item.href} className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200">
                              {item.value}
                            </a>
                          ) : (
                            <span className="text-sm font-medium text-foreground/70">{item.value}</span>
                          )}
                        </div>
                      </div>
                    ))}
                    <div className="border-t border-foreground/8" />
                  </div>

                  {/* Process steps */}
                  <div className="flex flex-col gap-0">
                    <p className="text-xs font-medium text-foreground/30 uppercase tracking-widest mb-4">
                      How it works
                    </p>
                    {[
                      { num: "01", label: "Share your brief",   desc: "What you're building, goals, and timeline." },
                      { num: "02", label: "We review & align",  desc: "Clear perspective and honest proposal." },
                      { num: "03", label: "We get to work",     desc: "Focused, collaborative — start to launch." },
                    ].map((step, i, arr) => (
                      <div
                        key={step.num}
                        className={`flex items-start gap-4 py-3.5 sm:py-4 border-t border-foreground/8 ${i === arr.length - 1 ? "border-b" : ""}`}
                      >
                        <span className="text-xs font-medium mt-0.5 shrink-0 w-6 tabular-nums" style={{ color: "var(--accent)" }}>
                          {step.num}
                        </span>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-sm font-semibold text-foreground/65">{step.label}</span>
                          <span className="text-xs text-foreground/35 leading-relaxed font-normal">{step.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* ── RIGHT: form ───────────────────────────────────────── */}
                <div className="w-full lg:w-7/12 flex flex-col gap-6 sm:gap-8">

                  {/* Form heading */}
                  <div className="flex flex-col gap-3 pb-6 border-b border-foreground/8">
                    <span className="px-3 py-1 text-xs rounded-full border border-foreground/15 bg-foreground/5 inline-flex items-center gap-2 w-fit text-foreground/50 font-medium uppercase tracking-wider">
                      Project Brief
                    </span>
                    <h3
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight uppercase tracking-wide"
                      style={akira}
                    >
                      Let&apos;s Build
                      <br />
                      <span className="text-foreground/25">Something.</span>
                    </h3>
                    <p className="text-sm text-foreground/40 font-normal leading-relaxed max-w-sm sm:max-w-md">
                      Fill in what you can — the more detail the better.
                      Fields marked <span style={{ color: "var(--accent)" }}>*</span> are required.
                    </p>
                  </div>

                  <ContactForm />

                </div>

              </div>
            </div>
          </section>

          {/* ── REASSURANCE CTA ───────────────────────────────────────── */}
          <section className="relative w-full py-12 sm:py-16 md:py-20">
            <div className="w-content-width mx-auto px-4">
              <div className="rounded-2xl overflow-hidden primary-button p-7 sm:p-12 md:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <span className="px-3 py-1 text-xs rounded-full border border-primary-cta-text/20 bg-primary-cta-text/10 inline-flex items-center gap-2 w-fit text-primary-cta-text/70 font-medium uppercase tracking-wider">
                    See our work first
                  </span>
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-cta-text leading-tight uppercase tracking-wide"
                    style={{ ...akira, maxWidth: "16ch" }}
                  >
                    Not sure yet?
                  </h2>
                  <p className="text-sm leading-relaxed text-primary-cta-text/60 max-w-xs font-normal">
                    Browse our portfolio to see the kind of work we do and the
                    standards we hold ourselves to.
                  </p>
                </div>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold bg-primary-cta-text text-primary-cta hover:opacity-90 transition-opacity duration-200 shrink-0"
                >
                  View Portfolio
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* ── FOOTER ────────────────────────────────────────────────── */}
          <footer className="py-6 sm:py-8 border-t border-foreground/8">
            <div className="w-content-width mx-auto px-4 flex flex-col sm:flex-row items-center sm:justify-between gap-4">

              {/* Full primary logo */}
              <Link href="/" className="flex items-center shrink-0">
                <Image
                  src="/images/web-agency-2/PD_LABS_PRIMARY_WHITE.png"
                  alt="PD Labs"
                  width={72}
                  height={18}
                  style={{ height: "18px", width: "auto", objectFit: "contain" }}
                  className="opacity-55"
                />
              </Link>

              <span className="text-xs sm:text-sm font-medium text-foreground/30 text-center">
                © {new Date().getFullYear()} PD Labs. All rights reserved.
              </span>

              <Link
                href="/"
                className="text-sm font-medium text-foreground/40 hover:text-foreground/70 transition-colors duration-200"
              >
                Back to Home
              </Link>
            </div>
          </footer>

        </main>
      </div>
    </ThemeProvider>
  );
}
