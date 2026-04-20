"use client";

import Image from "next/image";
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
  image: string;
  /** Fallback gradient shown behind the image */
  gradient: string;
  /** Client/brand name displayed in the image area */
  client: string;
  year: string;
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
    image: "/images/web-agency-2/project-1.webp",
    gradient: "linear-gradient(135deg,#1a150d 0%,#231c10 100%)",
    client: "Umbra",
    year: "2024",
    featured: true,
  },
  {
    id: "02",
    category: "Brand Identity",
    title: "Ember Brand System",
    summary:
      "Complete visual identity for a creative consultancy — logomark, type hierarchy, colour language, and a living brand guidelines document.",
    tags: ["Identity", "Typography", "Print", "Guidelines"],
    image: "/images/web-agency-2/pd-bcard.jpg",
    gradient: "linear-gradient(135deg,#1a0e08 0%,#23140a 100%)",
    client: "PD Labs",
    year: "2024",
  },
  {
    id: "03",
    category: "Web Platform",
    title: "Atlas Studio",
    summary:
      "Agency website and interactive case-study platform — fluid page transitions, immersive galleries, and a custom editorial CMS.",
    tags: ["Next.js", "GSAP", "Sanity CMS"],
    image: "/images/web-agency-2/shot-6.webp",
    gradient: "linear-gradient(135deg,#1a1208 0%,#231c10 100%)",
    client: "Luminé",
    year: "2024",
  },
  {
    id: "04",
    category: "Mobile App",
    title: "Flux Mobile",
    summary:
      "iOS and Android app for a fintech startup — real-time portfolio tracking, intelligent push notifications, and a gesture-first interaction model.",
    tags: ["React Native", "Expo", "Figma", "TypeScript"],
    image: "/images/web-agency-2/phone-in-hand-3.jpg",
    gradient: "linear-gradient(135deg,#100a1a 0%,#180f28 100%)",
    client: "Flux",
    year: "2023",
  },
  {
    id: "05",
    category: "Dashboard UI",
    title: "Slate Dashboard",
    summary:
      "Enterprise analytics product — modular data tables, live charts, role-based permission views, and a dark-mode-first design system.",
    tags: ["React", "TypeScript", "Recharts", "Design System"],
    image: "/images/web-agency-2/shot-8.webp",
    gradient: "linear-gradient(135deg,#0a0d10 0%,#101418 100%)",
    client: "Automate",
    year: "2024",
  },
  {
    id: "06",
    category: "Digital Campaign",
    title: "Crest Campaign",
    summary:
      "Multi-channel digital campaign for a luxury property launch — immersive microsite, interactive brand timeline, and social-first motion assets.",
    tags: ["Campaign", "Motion Design", "Microsite", "Social"],
    image: "/images/web-agency-2/project-5.webp",
    gradient: "linear-gradient(135deg,#081410 0%,#0d1f18 100%)",
    client: "Luxe Properties",
    year: "2023",
  },
  {
    id: "07",
    category: "Product Design",
    title: "Horizon Platform",
    summary:
      "End-to-end product design for a B2B SaaS tool — user research, wireframing, high-fidelity prototypes, and a scalable component library.",
    tags: ["UX Research", "Figma", "Prototyping", "Design System"],
    image: "/images/web-agency-2/shot-7.webp",
    gradient: "linear-gradient(135deg,#0a0f1a 0%,#10182a 100%)",
    client: "Learnly",
    year: "2023",
  },
  {
    id: "08",
    category: "Creative Development",
    title: "Vertex Identity",
    summary:
      "Bespoke digital presence — animated brand expression, custom cursor, scroll-driven narrative, and a fully bespoke CMS with live preview editor.",
    tags: ["Creative Dev", "GSAP", "WebGL", "Sanity CMS"],
    image: "/images/web-agency-2/macbook-mockup.png",
    gradient: "linear-gradient(135deg,#150808 0%,#200d0d 100%)",
    client: "PD Labs",
    year: "2024",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SHARED IMAGE AREA
// ─────────────────────────────────────────────────────────────────────────────

function ProjectImage({
  project,
  tall = false,
  contain = false,
}: {
  project: Project;
  tall?: boolean;
  contain?: boolean;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${tall ? "h-[54vh] min-h-[300px]" : "h-56 md:h-72"}`}
      style={{ background: project.gradient }}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className={`transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
          contain ? "object-contain" : "object-cover"
        }`}
        style={{ objectPosition: "center top" }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Legibility gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent" />

      {/* Client badge — bottom left */}
      <div className="absolute bottom-4 left-5 flex items-center gap-2">
        <span
          className="text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-sm"
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.14)",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          {project.client}
        </span>
        <span
          className="text-xs font-mono"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          {project.year}
        </span>
      </div>

      {/* Ghost project number — bottom right */}
      <span
        className="absolute bottom-2 right-5 font-mono font-bold leading-none select-none pointer-events-none"
        style={{
          fontSize: "clamp(52px, 8vw, 96px)",
          color: "rgba(255,255,255,0.06)",
          letterSpacing: "-0.04em",
        }}
      >
        {project.id}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD CONTENT
// ─────────────────────────────────────────────────────────────────────────────

function CardContent({ project }: { project: Project }) {
  return (
    <div className="p-6 md:p-8 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span
            className="text-xs font-mono uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {project.category}
          </span>
          <h2
            className="font-semibold leading-tight"
            style={{
              fontSize: "clamp(18px, 2vw, 26px)",
              color: "var(--foreground)",
            }}
          >
            {project.title}
          </h2>
        </div>
        <span
          className="shrink-0 mt-0.5 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/40"
          style={{ borderColor: "rgba(255,255,255,0.18)" }}
        >
          <ArrowUpRight
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ color: "var(--foreground)" }}
          />
        </span>
      </div>

      <p
        className="leading-relaxed text-sm"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-1.5 pt-0.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs rounded-full"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
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
      {/* ── Sticky header ───────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-40 w-full border-b backdrop-blur-md"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          backgroundColor: "color-mix(in srgb, var(--background) 80%, transparent)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </Link>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/web-agency-2/PD_LABS_LOGOMARK_WHITE.png"
              alt="PD Labs"
              width={22}
              height={22}
              className="opacity-90"
            />
            <span
              className="font-semibold text-sm tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              PD Labs
            </span>
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border transition-all duration-300 hover:bg-white/5"
            style={{
              borderColor: "rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Start a Project
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="flex items-center justify-between mb-5">
            <span
              className="text-xs font-mono uppercase tracking-[0.2em]"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Selected Work
            </span>
            <span
              className="text-xs font-mono"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              {String(projects.length).padStart(2, "0")} Projects
            </span>
          </div>

          <h1
            className="font-semibold leading-[0.88] tracking-tight"
            style={{ fontSize: "clamp(56px, 11vw, 128px)", color: "var(--foreground)" }}
          >
            Work
          </h1>

          <div
            className="mt-6 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <p
              className="text-base md:text-lg max-w-xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              A curated selection of digital work — spanning strategy, craft, and code.
              Every project starts with a problem worth solving.
            </p>
            <div
              className="flex items-center gap-5 shrink-0 text-xs font-mono"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              <span>2022–Present</span>
              <span className="w-px h-4 bg-white/20" />
              <span>Global Clients</span>
            </div>
          </div>
        </section>

        {/* ── Featured project ──────────────────────────────────────────── */}
        <section className="mb-3">
          <div
            className="group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-500 hover:border-white/20"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              backgroundColor: "var(--card)",
            }}
          >
            <ProjectImage project={featured} tall />

            <div className="p-6 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-start">
              <div className="flex flex-col gap-3">
                {/* Category + featured badge */}
                <div className="flex items-center gap-2.5">
                  <span
                    className="text-xs font-mono uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.38)" }}
                  >
                    {featured.category}
                  </span>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                    style={{
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    Featured
                  </span>
                </div>

                <h2
                  className="font-semibold leading-tight tracking-tight"
                  style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--foreground)" }}
                >
                  {featured.title}
                </h2>

                <p
                  className="leading-relaxed max-w-2xl text-sm md:text-base"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {featured.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full"
                      style={{
                        border: "1px solid rgba(255,255,255,0.14)",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: number + arrow */}
              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-4 md:gap-5">
                <span
                  className="font-mono font-bold leading-none select-none"
                  style={{
                    fontSize: "clamp(32px, 5vw, 56px)",
                    color: "rgba(255,255,255,0.07)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {featured.id}
                </span>
                <span
                  className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/40 shrink-0"
                  style={{ borderColor: "rgba(255,255,255,0.18)" }}
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

        {/* ── 2-col grid ──────────────────────────────────────────────────── */}
        <section className="py-3 grid grid-cols-1 md:grid-cols-2 gap-3">
          {grid.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-500 hover:-translate-y-0.5 hover:border-white/20"
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                backgroundColor: "var(--card)",
              }}
            >
              <ProjectImage project={project} />
              <CardContent project={project} />
            </div>
          ))}
        </section>

        {/* ── Closing editorial card ──────────────────────────────────────── */}
        {closing && (
          <section className="py-3 mb-4">
            <div
              className="group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-500 hover:border-white/20"
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                backgroundColor: "var(--card)",
              }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image — left half */}
                <div className="relative overflow-hidden md:w-1/2 h-64 md:h-auto md:min-h-[340px]"
                  style={{ background: closing.gradient }}>
                  <Image
                    src={closing.image}
                    alt={closing.title}
                    fill
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    style={{ objectPosition: "center center" }}
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/40 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />

                  {/* Client badge */}
                  <div className="absolute bottom-4 left-5 flex items-center gap-2">
                    <span
                      className="text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-sm"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.14)",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {closing.client}
                    </span>
                    <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>
                      {closing.year}
                    </span>
                  </div>
                </div>

                {/* Content — right half */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between gap-8">
                  <div className="flex flex-col gap-4">
                    <span
                      className="text-xs font-mono uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,0.38)" }}
                    >
                      {closing.category}
                    </span>
                    <h2
                      className="font-semibold leading-tight tracking-tight"
                      style={{ fontSize: "clamp(24px, 3.5vw, 40px)", color: "var(--foreground)" }}
                    >
                      {closing.title}
                    </h2>
                    <p
                      className="leading-relaxed text-sm md:text-base"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {closing.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {closing.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs rounded-full"
                          style={{
                            border: "1px solid rgba(255,255,255,0.12)",
                            color: "rgba(255,255,255,0.5)",
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
                      style={{ color: "rgba(255,255,255,0.22)" }}
                    >
                      Case Study
                    </span>
                    <span
                      className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/40"
                      style={{ borderColor: "rgba(255,255,255,0.18)" }}
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

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section
          className="mt-8 mb-16 md:mt-12 md:mb-24 py-16 md:py-24 border-t border-b flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {/* Left: PD Labs logo + heading */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/web-agency-2/PD_LABS_LOGOMARK_WHITE.png"
                alt="PD Labs"
                width={28}
                height={28}
                className="opacity-60"
              />
              <span
                className="text-xs font-mono uppercase tracking-[0.2em]"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Next Step
              </span>
            </div>
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
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Let&apos;s build something remarkable together. We&apos;d love to hear from you.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "var(--primary-cta)",
                color: "#ffffff",
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
