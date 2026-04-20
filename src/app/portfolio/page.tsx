"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

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
  year: string;
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
    year: "2024",
  },
  {
    id: "02",
    category: "Brand Identity",
    title: "Ember Identity",
    summary:
      "Complete visual identity for a creative consultancy — logomark, type hierarchy, colour language, and a living brand guidelines document.",
    tags: ["Identity Design", "Typography", "Print", "Brand Guidelines"],
    image: "/images/web-agency-2/pd-bcard.jpg",
    year: "2024",
  },
  {
    id: "03",
    category: "Web Platform",
    title: "Atlas Studio",
    summary:
      "Agency website and interactive case-study platform — fluid page transitions, immersive galleries, and a custom editorial CMS built for long-term content ownership.",
    tags: ["Next.js", "GSAP", "Sanity CMS", "Framer Motion"],
    image: "/images/web-agency-2/shot-6.webp",
    year: "2024",
  },
  {
    id: "04",
    category: "Mobile App",
    title: "Flux Mobile",
    summary:
      "iOS and Android app for a fintech startup — real-time portfolio tracking, intelligent push notifications, and a gesture-first interaction model designed for clarity under pressure.",
    tags: ["React Native", "Expo", "TypeScript", "Figma"],
    image: "/images/web-agency-2/phone-in-hand-3.jpg",
    year: "2023",
  },
  {
    id: "05",
    category: "Product Design",
    title: "Slate Systems",
    summary:
      "Enterprise analytics product for a global logistics firm — modular data tables, live charts, role-based permission views, and a dark-mode-first design system.",
    tags: ["UX Research", "Figma", "Design System", "Prototyping"],
    image: "/images/web-agency-2/shot-8.webp",
    year: "2024",
  },
  {
    id: "06",
    category: "Digital Campaign",
    title: "Crest Campaign",
    summary:
      "Multi-channel digital campaign for a luxury property launch — immersive microsite, interactive brand timeline, and social-first motion assets that reached 2M+ impressions in the first week.",
    tags: ["Microsite", "Motion Design", "Social Content", "Campaign"],
    image: "/images/web-agency-2/project-5.webp",
    year: "2023",
  },
  {
    id: "07",
    category: "Creative Development",
    title: "Horizon Platform",
    summary:
      "End-to-end product design and development for a B2B SaaS tool — user research, wireframing, high-fidelity prototypes, and a scalable component library handed off to engineering.",
    tags: ["Next.js", "TypeScript", "GSAP", "Sanity CMS"],
    image: "/images/web-agency-2/shot-7.webp",
    year: "2023",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
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
        <div className="w-content-width mx-auto h-full flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground/80 transition-colors duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="font-mono tracking-tight">Back</span>
          </Link>

          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/web-agency-2/PD_LABS_LOGOMARK_WHITE.png"
              alt="PD Labs"
              width={22}
              height={20}
              className="opacity-90"
            />
            <span className="font-medium text-sm tracking-tight text-foreground">PD Labs</span>
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-foreground/15 text-foreground/60 hover:bg-foreground/5 transition-all duration-200"
          >
            Start a Project
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </header>

      {/* ── Main content ───────────────────────────────────────────────────── */}
      <main className="pt-14">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative py-20 w-full">
          <div className="w-content-width mx-auto flex flex-col gap-8">

            {/* Eyebrow row */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 text-sm rounded-full border border-foreground/15 bg-foreground/5 inline-flex items-center gap-2 text-foreground/60 font-mono">
                Selected Work
              </span>
              <span className="text-sm font-mono text-foreground/30">
                {String(projects.length).padStart(2, "0")} Projects
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-8xl md:text-9xl font-medium text-foreground leading-none tracking-tight">
              Portfolio
            </h1>

            {/* Divider + subtext */}
            <div className="pt-6 border-t border-foreground/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-lg leading-relaxed text-foreground/60 max-w-xl">
                A curated selection of digital work — spanning strategy, craft,
                and code. Every project starts with a problem worth solving.
              </p>
              <div className="flex items-center gap-5 shrink-0 text-sm font-mono text-foreground/30">
                <span>2022–Present</span>
                <span className="w-px h-4 bg-foreground/20" />
                <span>Global Clients</span>
              </div>
            </div>

          </div>
        </section>

        {/* ── Stacked project cards ─────────────────────────────────────────── */}
        <section className="relative overflow-visible h-fit pb-20 w-full">
          <div className="w-content-width mx-auto flex flex-col gap-[6.25vh]">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group sticky top-[12.5vh] w-full h-[75vh] rounded-2xl overflow-hidden border border-foreground/10 bg-card/60 backdrop-blur-md cursor-pointer transition-colors duration-300 hover:border-foreground/20"
              >
                <div className="relative z-10 w-full h-full flex flex-col md:flex-row justify-between overflow-hidden">

                  {/* ── Left: meta + content ─────────────────────────────── */}
                  <div className="relative w-full md:w-1/2 md:h-full flex flex-col justify-between p-8 md:p-12">

                    {/* Top: label pill + large number */}
                    <div className="flex flex-col gap-4 md:gap-6">
                      <span className="px-3 py-1 text-sm rounded-full border border-foreground/15 bg-foreground/5 inline-flex items-center gap-2 w-fit text-foreground/60 font-mono">
                        {project.category}
                      </span>
                      <h2 className="text-6xl md:text-8xl font-medium leading-none text-foreground font-mono">
                        {project.id}
                      </h2>
                    </div>

                    {/* Bottom: title + summary + tags */}
                    <div className="flex flex-col gap-3 md:gap-4">
                      <h3 className="text-2xl md:text-4xl font-medium text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed text-foreground/65">
                        {project.summary}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-sm rounded-full border border-foreground/15 bg-foreground/5 text-foreground/55"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* ── Right: ghost number + project image ──────────────── */}
                  <div className="relative w-full md:w-5/12 md:h-full flex flex-col gap-6 p-8 md:p-12">

                    {/* Ghost number */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono text-foreground/25">{project.year}</span>
                      <span className="hidden md:block text-9xl font-medium text-foreground/[0.06] leading-none select-none font-mono">
                        {project.id}
                      </span>
                    </div>

                    {/* Rotated image thumbnail */}
                    <div className="relative flex-1 min-h-0 w-full rounded-xl overflow-hidden rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.02]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>

                    {/* View arrow */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono text-foreground/30 uppercase tracking-widest text-xs">
                        Case Study
                      </span>
                      <span className="w-9 h-9 rounded-full border border-foreground/15 flex items-center justify-center transition-all duration-300 group-hover:border-foreground/40 group-hover:bg-foreground/5">
                        <ArrowUpRight className="w-3.5 h-3.5 text-foreground/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA section ──────────────────────────────────────────────────── */}
        <section className="relative py-20 w-full">
          <div className="w-content-width mx-auto">
            <div className="rounded-2xl overflow-hidden primary-button p-12 md:p-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">

              {/* Left */}
              <div className="flex flex-col gap-4">
                <span className="px-3 py-1 text-sm rounded-full border border-primary-cta-text/20 bg-primary-cta-text/10 inline-flex items-center gap-2 w-fit text-primary-cta-text/70 font-mono">
                  Next Step
                </span>
                <h2 className="text-4xl md:text-6xl font-medium text-primary-cta-text leading-tight tracking-tight" style={{ maxWidth: "14ch" }}>
                  Have a project in mind?
                </h2>
              </div>

              {/* Right */}
              <div className="flex flex-col items-start md:items-end gap-5">
                <p className="text-base md:text-lg leading-relaxed text-primary-cta-text/65 max-w-xs md:text-right">
                  Let&apos;s build something remarkable together. We&apos;d love to hear from you.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-primary-cta-text text-primary-cta hover:opacity-90 transition-opacity duration-200"
                >
                  Start a Conversation
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ── Footer strip ─────────────────────────────────────────────────── */}
        <footer className="py-8 border-t border-foreground/8">
          <div className="w-content-width mx-auto flex items-center justify-between">
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
            <span className="text-sm font-mono text-foreground/30">
              © {new Date().getFullYear()} PD Labs. All rights reserved.
            </span>
            <Link
              href="/"
              className="text-sm font-mono text-foreground/40 hover:text-foreground/70 transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
        </footer>

      </main>
    </ThemeProvider>
  );
}
