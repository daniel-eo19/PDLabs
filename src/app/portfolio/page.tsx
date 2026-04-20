"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

interface Project {
  id: string;
  category: string;
  title: string;
  summary: string;
  tags: string[];
  /** CSS gradient string for the abstract image treatment */
  gradient: string;
  /** Subtle orb/glow colour overlay */
  orb: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "01",
    category: "E-Commerce",
    title: "Nova Commerce",
    summary:
      "A headless e-commerce platform for a premium lifestyle brand — editorial product storytelling, frictionless checkout flows, and real-time inventory built for scale.",
    tags: ["Next.js", "Shopify", "Headless CMS", "Motion UI"],
    gradient: "linear-gradient(135deg,#1a150d 0%,#231c10 100%)",
    orb: "#c9a87c",
    featured: true,
  },
  {
    id: "02",
    category: "Brand Identity",
    title: "Ember Brand System",
    summary:
      "Complete visual identity for a San Francisco creative consultancy — logomark, type hierarchy, colour language, and a living brand guidelines document.",
    tags: ["Identity", "Typography", "Print", "Guidelines"],
    gradient: "linear-gradient(135deg,#1a0e08 0%,#23140a 100%)",
    orb: "#c47a3a",
  },
  {
    id: "03",
    category: "Web Platform",
    title: "Atlas Studio",
    summary:
      "Agency website and interactive case-study platform for a global architecture firm — fluid page transitions, immersive galleries, and a custom editorial CMS.",
    tags: ["Next.js", "GSAP", "Sanity CMS"],
    gradient: "linear-gradient(135deg,#080f1a 0%,#0c1525 100%)",
    orb: "#4a7cb8",
  },
  {
    id: "04",
    category: "Mobile App",
    title: "Flux Mobile",
    summary:
      "iOS and Android app for a fintech startup — real-time portfolio tracking, intelligent push notifications, and a gesture-first interaction model designed for clarity under pressure.",
    tags: ["React Native", "Expo", "Figma", "TypeScript"],
    gradient: "linear-gradient(135deg,#100a1a 0%,#180f28 100%)",
    orb: "#7b5ea7",
  },
  {
    id: "05",
    category: "Dashboard UI",
    title: "Slate Dashboard",
    summary:
      "Enterprise analytics product for a global logistics company — modular data tables, live charts, role-based permission views, and a dark-mode-first design system.",
    tags: ["React", "TypeScript", "Recharts", "Design System"],
    gradient: "linear-gradient(135deg,#0a0d10 0%,#101418 100%)",
    orb: "#6e8494",
  },
  {
    id: "06",
    category: "Digital Campaign",
    title: "Crest Campaign",
    summary:
      "Multi-channel digital campaign for a luxury beverage launch — immersive microsite, interactive brand timeline, and social-first motion assets that reached 2M+ impressions in the first week.",
    tags: ["Campaign", "Motion Design", "Microsite", "Social"],
    gradient: "linear-gradient(135deg,#081410 0%,#0d1f18 100%)",
    orb: "#4a8a6e",
  },
  {
    id: "07",
    category: "Product Design",
    title: "Horizon Platform",
    summary:
      "End-to-end product design for a B2B SaaS tool — user research, wireframing, high-fidelity prototypes, and a scalable component library fully handed off to engineering.",
    tags: ["UX Research", "Figma", "Prototyping", "Design System"],
    gradient: "linear-gradient(135deg,#181208 0%,#231a0c 100%)",
    orb: "#c49a35",
  },
  {
    id: "08",
    category: "Creative Development",
    title: "Vertex Identity",
    summary:
      "Bespoke digital presence for an independent creative agency — animated brand expression, custom cursor, scroll-driven narrative, and a fully bespoke CMS with a live preview editor.",
    tags: ["Creative Dev", "GSAP", "WebGL", "Sanity CMS"],
    gradient: "linear-gradient(135deg,#150808 0%,#200d0d 100%)",
    orb: "#b54a4a",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ABSTRACT MOCKUP CARD VISUAL
// ─────────────────────────────────────────────────────────────────────────────

function MockupArea({
  project,
  tall = false,
}: {
  project: Project;
  tall?: boolean;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${tall ? "h-[52vh] min-h-[280px]" : "h-56 md:h-64"}`}
      style={{ background: project.gradient }}
    >
      {/* Radial orb glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 65% 35%, ${project.orb}28 0%, transparent 65%)`,
        }}
      />
      {/* Subtle abstract rings — suggest interface depth */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div
          className="rounded-full border"
          style={{
            width: "38%",
            aspectRatio: "1",
            borderColor: `${project.orb}18`,
          }}
        />
        <div
          className="absolute rounded-full border"
          style={{
            width: "60%",
            aspectRatio: "1",
            borderColor: `${project.orb}0e`,
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "18%",
            aspectRatio: "1",
            background: `radial-gradient(circle, ${project.orb}22 0%, transparent 70%)`,
          }}
        />
      </div>
      {/* Bottom gradient for content legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      {/* Ghost project number — bottom right */}
      <span
        className="absolute bottom-4 right-5 font-mono font-semibold leading-none select-none"
        style={{
          fontSize: "clamp(48px, 7vw, 80px)",
          color: `${project.orb}1a`,
          letterSpacing: "-0.04em",
        }}
      >
        {project.id}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD CONTENT BLOCK
// ─────────────────────────────────────────────────────────────────────────────

function CardContent({ project }: { project: Project }) {
  return (
    <div className="p-6 md:p-8 flex flex-col gap-3">
      {/* Top row: category + arrow */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <span
            className="text-xs font-mono uppercase tracking-widest"
            style={{ color: "var(--foreground)", opacity: 0.38 }}
          >
            {project.category}
          </span>
          <h2
            className="font-semibold leading-tight"
            style={{
              fontSize: "clamp(20px, 2.2vw, 28px)",
              color: "var(--foreground)",
            }}
          >
            {project.title}
          </h2>
        </div>
        {/* Hover arrow */}
        <span
          className="shrink-0 mt-0.5 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:border-foreground/40 group-hover:bg-foreground/5"
          style={{ borderColor: "var(--foreground)", opacity: 0.18 }}
        >
          <ArrowUpRight
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ color: "var(--foreground)" }}
          />
        </span>
      </div>

      {/* Summary */}
      <p
        className="leading-relaxed text-sm md:text-base"
        style={{ color: "var(--foreground)", opacity: 0.55 }}
      >
        {project.summary}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-1">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs rounded-full border"
            style={{
              borderColor: "rgba(255,255,255,0.15)",
              color: "var(--foreground)",
              opacity: 0.65,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const featured = projects[0];
  const grid = projects.slice(1, 7);
  const closing = projects[7];

  return (
    <main
      className="min-h-screen w-full"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      {/* ── Sticky header bar ───────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-40 w-full border-b backdrop-blur-md"
        style={{
          borderColor: "var(--foreground)",
          borderOpacity: 0.08,
          backgroundColor: "color-mix(in srgb, var(--background) 85%, transparent)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
            style={{ color: "var(--foreground)", opacity: 0.55 }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </Link>

          <Link
            href="/"
            className="font-semibold text-sm tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            PD Labs
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border transition-all duration-300 hover:opacity-80"
            style={{
              borderColor: "var(--foreground)",
              color: "var(--foreground)",
              opacity: 0.6,
            }}
          >
            Start a Project
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="pt-16 pb-14 md:pt-24 md:pb-20">
          {/* Eyebrow row */}
          <div className="flex items-center justify-between mb-6">
            <span
              className="text-xs font-mono uppercase tracking-[0.2em]"
              style={{ color: "var(--foreground)", opacity: 0.4 }}
            >
              Selected Work
            </span>
            <span
              className="text-xs font-mono"
              style={{ color: "var(--foreground)", opacity: 0.3 }}
            >
              {String(projects.length).padStart(2, "0")} Projects
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-semibold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(56px, 11vw, 128px)", color: "var(--foreground)" }}
          >
            Work
          </h1>

          {/* Sub-row */}
          <div
            className="mt-6 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t"
            style={{ borderColor: "var(--foreground)", opacity: 1, borderOpacity: 0.08 }}
          >
            <p
              className="text-base md:text-lg max-w-xl leading-relaxed"
              style={{ color: "var(--foreground)", opacity: 0.55 }}
            >
              A curated selection of digital work — spanning strategy, craft, and code.
              Every project starts with a problem worth solving.
            </p>
            <div
              className="flex items-center gap-6 shrink-0 text-xs font-mono"
              style={{ color: "var(--foreground)", opacity: 0.3 }}
            >
              <span>2022–Present</span>
              <span className="w-px h-4" style={{ backgroundColor: "var(--foreground)", opacity: 0.2 }} />
              <span>Global</span>
            </div>
          </div>
        </section>

        {/* ── Featured project ─────────────────────────────────────────── */}
        <section className="mb-4">
          <div
            className="group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-500 hover:border-opacity-30"
            style={{
              borderColor: "var(--foreground)",
              borderOpacity: 0.1,
              backgroundColor: "var(--card)",
            }}
          >
            <MockupArea project={featured} tall />

            {/* Featured content — horizontal on md+ */}
            <div className="p-6 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-start">
              {/* Left: meta + title + summary */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-mono uppercase tracking-widest"
                    style={{ color: "var(--foreground)", opacity: 0.38 }}
                  >
                    {featured.category}
                  </span>
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded-full border"
                    style={{
                      borderColor: "var(--foreground)",
                      color: "var(--foreground)",
                      opacity: 0.25,
                    }}
                  >
                    Featured
                  </span>
                </div>
                <h2
                  className="font-semibold leading-tight tracking-tight"
                  style={{
                    fontSize: "clamp(28px, 4vw, 48px)",
                    color: "var(--foreground)",
                  }}
                >
                  {featured.title}
                </h2>
                <p
                  className="leading-relaxed max-w-2xl text-sm md:text-base"
                  style={{ color: "var(--foreground)", opacity: 0.55 }}
                >
                  {featured.summary}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full border"
                      style={{
                        borderColor: "var(--foreground)",
                        color: "var(--foreground)",
                        opacity: 0.4,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: number + arrow */}
              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-4 md:gap-6">
                <span
                  className="font-mono font-semibold leading-none select-none"
                  style={{
                    fontSize: "clamp(32px, 5vw, 56px)",
                    color: "var(--foreground)",
                    opacity: 0.08,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {featured.id}
                </span>
                <span
                  className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:border-foreground/40 group-hover:bg-foreground/5 shrink-0"
                  style={{ borderColor: "var(--foreground)", opacity: 0.2 }}
                >
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: "var(--foreground)" }}
                  />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Main project grid ─────────────────────────────────────────── */}
        <section className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {grid.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-500 hover:-translate-y-0.5"
              style={{
                borderColor: "var(--foreground)",
                borderOpacity: 0.1,
                backgroundColor: "var(--card)",
              }}
            >
              <MockupArea project={project} />
              <CardContent project={project} />
            </div>
          ))}
        </section>

        {/* ── Closing editorial card ────────────────────────────────────── */}
        {closing && (
          <section className="py-4 mb-6">
            <div
              className="group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-500 hover:border-opacity-30"
              style={{
                borderColor: "var(--foreground)",
                borderOpacity: 0.1,
                backgroundColor: "var(--card)",
              }}
            >
              {/* Horizontal layout on desktop */}
              <div className="flex flex-col md:flex-row">
                {/* Image — 50% width on desktop */}
                <div
                  className="relative overflow-hidden md:w-1/2 h-64 md:h-auto md:min-h-[320px]"
                  style={{ background: closing.gradient }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse at 65% 35%, ${closing.orb}28 0%, transparent 65%)`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className="rounded-full border"
                      style={{ width: "38%", aspectRatio: "1", borderColor: `${closing.orb}18` }}
                    />
                    <div
                      className="absolute rounded-full border"
                      style={{ width: "60%", aspectRatio: "1", borderColor: `${closing.orb}0e` }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 md:block hidden" />
                  <span
                    className="absolute bottom-4 right-5 font-mono font-semibold leading-none select-none"
                    style={{
                      fontSize: "clamp(48px, 6vw, 72px)",
                      color: `${closing.orb}1a`,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {closing.id}
                  </span>
                </div>

                {/* Content — 50% width on desktop */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between gap-8">
                  <div className="flex flex-col gap-4">
                    <span
                      className="text-xs font-mono uppercase tracking-widest"
                      style={{ color: "var(--foreground)", opacity: 0.38 }}
                    >
                      {closing.category}
                    </span>
                    <h2
                      className="font-semibold leading-tight tracking-tight"
                      style={{
                        fontSize: "clamp(24px, 3.5vw, 40px)",
                        color: "var(--foreground)",
                      }}
                    >
                      {closing.title}
                    </h2>
                    <p
                      className="leading-relaxed text-sm md:text-base"
                      style={{ color: "var(--foreground)", opacity: 0.55 }}
                    >
                      {closing.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {closing.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs rounded-full border"
                          style={{
                            borderColor: "var(--foreground)",
                            color: "var(--foreground)",
                            opacity: 0.4,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-mono"
                      style={{ color: "var(--foreground)", opacity: 0.25 }}
                    >
                      Case Study
                    </span>
                    <span
                      className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:border-foreground/40 group-hover:bg-foreground/5"
                      style={{ borderColor: "var(--foreground)", opacity: 0.2 }}
                    >
                      <ArrowUpRight
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        style={{ color: "var(--foreground)" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section
          className="mt-8 mb-16 md:mt-12 md:mb-24 py-16 md:py-24 border-t border-b flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
          style={{ borderColor: "var(--foreground)", borderOpacity: 0.08 }}
        >
          <div className="flex flex-col gap-3">
            <span
              className="text-xs font-mono uppercase tracking-[0.2em]"
              style={{ color: "var(--foreground)", opacity: 0.35 }}
            >
              Next Step
            </span>
            <p
              className="font-semibold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(28px, 5vw, 56px)",
                color: "var(--foreground)",
                maxWidth: "14ch",
              }}
            >
              Have a project in mind?
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <p
              className="text-sm md:text-base max-w-xs md:text-right leading-relaxed"
              style={{ color: "var(--foreground)", opacity: 0.5 }}
            >
              Let&apos;s build something remarkable together. We&apos;d love to hear from you.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "var(--primary-cta)",
                color: "var(--primary-cta-text)",
              }}
            >
              Start a Conversation
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
