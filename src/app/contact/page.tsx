import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail, Clock, MapPin } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ContactForm from "./ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — PD Labs",
  description: "Start a project with PD Labs. Tell us what you're building.",
};

// ─────────────────────────────────────────────────────────────────────────────
// Font constants (matches portfolio page)
// ─────────────────────────────────────────────────────────────────────────────

const akira = { fontFamily: "'Akira Expanded', sans-serif" } as const;

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
      {/* ── Fixed page header ─────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-40 h-14 border-b border-foreground/8 backdrop-blur-md"
        style={{ backgroundColor: "color-mix(in srgb, var(--background) 82%, transparent)" }}
      >
        <div className="w-content-width mx-auto h-full px-4 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground/80 transition-colors duration-200 shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="font-medium tracking-tight">Back</span>
          </Link>

          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/images/web-agency-2/PD_LABS_LOGOMARK_WHITE.png"
              alt="PD Labs"
              width={22}
              height={20}
              className="opacity-90"
            />
            <span className="font-medium text-sm text-foreground">PD Labs</span>
          </Link>

          <Link
            href="/portfolio"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-foreground/15 text-foreground/60 hover:bg-foreground/5 transition-all duration-200 shrink-0"
          >
            View Work
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </header>

      {/* ── Main ──────────────────────────────────────────────────────────── */}
      <main className="pt-14">

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="relative py-12 sm:py-16 md:py-20 w-full">
          <div className="w-content-width mx-auto px-4 flex flex-col gap-6 sm:gap-8">

            {/* Eyebrow */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 text-xs sm:text-sm rounded-full border border-foreground/15 bg-foreground/5 inline-flex items-center gap-2 text-foreground/60 font-medium tracking-wider uppercase">
                Get In Touch
              </span>
              <span className="text-sm font-medium text-foreground/30 hidden sm:block">
                Response within 24h
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-6xl md:text-7xl 2xl:text-8xl font-bold text-foreground leading-none tracking-wide uppercase"
              style={akira}
            >
              Let&apos;s Build
              <br />
              <span className="text-foreground/25">Something.</span>
            </h1>

            {/* Divider + copy */}
            <div className="pt-4 sm:pt-6 border-t border-foreground/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-base sm:text-lg leading-relaxed text-foreground/60 max-w-xl font-normal">
                Have a project in mind? Tell us about it. We work with ambitious
                teams and founders to craft digital products worth noticing.
              </p>
              <div className="flex items-center gap-5 shrink-0 text-sm font-medium text-foreground/30">
                <span>Global</span>
                <span className="w-px h-4 bg-foreground/20" />
                <span>Remote-first</span>
              </div>
            </div>

          </div>
        </section>

        {/* ── Divider ─────────────────────────────────────────────────────── */}
        <div className="w-content-width mx-auto px-4">
          <div className="border-t border-foreground/8" />
        </div>

        {/* ── Contact content ─────────────────────────────────────────────── */}
        <section className="relative py-12 sm:py-16 md:py-20 w-full">
          <div className="w-content-width mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

              {/* ── Left column ─────────────────────────────────────────────── */}
              <div className="w-full lg:w-5/12 flex flex-col gap-8 lg:gap-10">

                {/* Intro */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug">
                    Start a conversation.
                    <br />
                    <span className="text-foreground/40">We&apos;re easy to talk to.</span>
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground/55 font-normal max-w-sm">
                    Every project starts with a conversation. Share your brief — we&apos;ll
                    come back with a clear perspective and an honest assessment.
                  </p>
                </div>

                {/* Contact details */}
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-foreground/30 uppercase tracking-widest mb-3">
                    Direct contact
                  </span>
                  <a
                    href="mailto:hello@pdlabs.io"
                    className="inline-flex items-center gap-3 py-3 border-t border-foreground/8 text-sm text-foreground/60 hover:text-foreground/90 transition-colors duration-200 group"
                  >
                    <span className="w-8 h-8 rounded-full border border-foreground/10 bg-foreground/5 flex items-center justify-center group-hover:border-foreground/20 transition-colors duration-200 shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </span>
                    <span>hello@pdlabs.io</span>
                  </a>
                  <div className="inline-flex items-center gap-3 py-3 border-t border-foreground/8 text-sm text-foreground/40">
                    <span className="w-8 h-8 rounded-full border border-foreground/10 bg-foreground/5 flex items-center justify-center shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                    </span>
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="inline-flex items-center gap-3 py-3 border-t border-b border-foreground/8 text-sm text-foreground/40">
                    <span className="w-8 h-8 rounded-full border border-foreground/10 bg-foreground/5 flex items-center justify-center shrink-0">
                      <MapPin className="w-3.5 h-3.5" />
                    </span>
                    <span>Remote-first — working globally</span>
                  </div>
                </div>

                {/* Process highlights */}
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-foreground/30 uppercase tracking-widest mb-3">
                    How it works
                  </span>
                  {[
                    { num: "01", label: "Share your brief",   desc: "Tell us what you're building, your goals, and your timeline." },
                    { num: "02", label: "We review and align", desc: "We come back with questions, a perspective, and a clear proposal." },
                    { num: "03", label: "We get to work",      desc: "From kickoff to launch — a focused, collaborative process." },
                  ].map((step) => (
                    <div key={step.num} className="flex items-start gap-4 py-4 border-t border-foreground/8">
                      <span className="text-xs font-medium text-foreground/20 font-mono mt-0.5 shrink-0 w-5">
                        {step.num}
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-medium text-foreground/70">{step.label}</span>
                        <span className="text-xs text-foreground/35 leading-relaxed font-normal">{step.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* ── Right column — Form ──────────────────────────────────────── */}
              <div className="w-full lg:w-7/12">
                <div className="rounded-2xl border border-foreground/10 bg-card/60 backdrop-blur-md p-6 sm:p-8 md:p-10">

                  {/* Form header */}
                  <div className="flex flex-col gap-2 mb-8 pb-6 border-b border-foreground/8">
                    <span className="px-3 py-1 text-xs rounded-full border border-foreground/15 bg-foreground/5 inline-flex items-center gap-2 w-fit text-foreground/50 font-medium uppercase tracking-wider">
                      Project Brief
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-1">
                      Tell us about your project
                    </h3>
                    <p className="text-sm text-foreground/45 font-normal leading-relaxed">
                      Fill in what you can — the more detail the better. All fields
                      marked <span className="text-accent">*</span> are required.
                    </p>
                  </div>

                  {/* Form component */}
                  <ContactForm />

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Reassurance CTA ─────────────────────────────────────────────── */}
        <section className="relative py-12 sm:py-16 md:py-20 w-full">
          <div className="w-content-width mx-auto px-4">
            <div className="rounded-2xl overflow-hidden primary-button p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">

              {/* Left */}
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
                <p className="text-sm sm:text-base leading-relaxed text-primary-cta-text/60 max-w-xs font-normal">
                  Browse our portfolio to see the kind of work we do and the
                  standards we hold ourselves to.
                </p>
              </div>

              {/* Right */}
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold bg-primary-cta-text text-primary-cta hover:opacity-90 transition-opacity duration-200 shrink-0"
              >
                View Portfolio
                <ArrowUpRight className="w-4 h-4" />
              </Link>

            </div>
          </div>
        </section>

        {/* ── Footer strip ────────────────────────────────────────────────── */}
        <footer className="py-6 sm:py-8 border-t border-foreground/8">
          <div className="w-content-width mx-auto px-4 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/images/web-agency-2/PD_LABS_LOGOMARK_WHITE.png"
                alt="PD Labs"
                width={18}
                height={16}
                className="opacity-60"
              />
              <span className="text-sm font-medium text-foreground/50">PD Labs</span>
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
    </ThemeProvider>
  );
}
