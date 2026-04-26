"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Button from "@/components/button/Button";
import SceneDecorations from "@/components/background/SceneDecorations";
import SplitHeading from "@/components/text/SplitHeading";

// ─────────────────────────────────────────────────────────────────────────────
// Font helpers
// ─────────────────────────────────────────────────────────────────────────────

const satoshi = { fontFamily: "'Satoshi', sans-serif" } as const;
const akira   = { fontFamily: "'Akira Expanded', sans-serif" } as const;

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

type FilterCategory = "All" | "Web App" | "Landing Page" | "Mobile App" | "Brand Identity";

const FILTERS: FilterCategory[] = ["All", "Web App", "Landing Page", "Mobile App", "Brand Identity"];

interface Project {
  id: string;
  category: string;
  filterCategory: FilterCategory;
  title: string;
  summary: string;
  tags: string[];
  image: string;
  year: string;
  link?: string;
  imageContain?: boolean;
}

const projects: Project[] = [
  {
    id: "01",
    category: "Web Design",
    filterCategory: "Web App",
    title: "Aether Labs Studios",
    summary:
      "Full website design and build for a leading product design studio — immersive hero, 3D visual language, service showcases, and a dark cinematic aesthetic that captures the brand's cutting edge identity.",
    tags: ["Web Design", "UI/UX", "3D Visuals", "Motion UI"],
    image: "/images/web-agency-2/aetherlabs-screenshot.jpg",
    year: "2025",
    link: "https://www.aetherlabsstudios.com",
    imageContain: true,
  },
  {
    id: "02",
    category: "Web Design",
    filterCategory: "Landing Page",
    title: "Vaness Integrated Resources",
    summary:
      "Full website for a Lagos based professional training and consultancy firm — clean service pages, booking flow, client showcase, and a responsive layout built to convert corporate prospects.",
    tags: ["Web Design", "Landing Page", "Consultancy", "UI/UX"],
    image: "/images/web-agency-2/vaness-screenshot.jpg",
    year: "2025",
    link: "https://www.vaness.org",
    imageContain: true,
  },
  {
    id: "03",
    category: "E-Commerce",
    filterCategory: "Web App",
    title: "Luchy's Luxe",
    summary:
      "Premium jewellery and accessories e-commerce store for a Lagos-based luxury brand — editorial product presentation, custom collections flow, and a seamless storefront built for high-intent shoppers.",
    tags: ["Shopify", "E-Commerce", "Luxury Retail", "UI Design"],
    image: "/images/web-agency-2/luchysluxe-screenshot.jpg",
    year: "2025",
    link: "https://www.luchysluxe.com",
    imageContain: true,
  },
  {
    id: "04",
    category: "E-Commerce",
    filterCategory: "Web App",
    title: "Modojaa",
    summary:
      "Fashion-forward clothing store with a curated catalogue, smooth product discovery, and a bold visual identity — designed to help the brand stand out in a competitive streetwear market.",
    tags: ["Shopify", "Fashion", "E-Commerce", "Brand Design"],
    image: "/images/web-agency-2/modojaa-screenshot.jpg",
    year: "2025",
    link: "https://www.modojaa.com",
    imageContain: true,
  },
  {
    id: "05",
    category: "Web Platform",
    filterCategory: "Web App",
    title: "Hippo Voices",
    summary:
      "Full-stack platform for casting African voice-over talents, translators and dubbing professionals — talent discovery, job listings, quote requests, and a vibrant brand identity built for a pan-African audience.",
    tags: ["Web App", "Marketplace", "UI/UX", "Brand Identity"],
    image: "/images/web-agency-2/hippovoices-screenshot.jpg",
    year: "2025",
    link: "https://hippovoices.com",
    imageContain: true,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.filterCategory === activeFilter);

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
      {/* All text on this page uses Satoshi as base, Akira Expanded for display */}
      <div style={satoshi}>

        {/* ── Fixed page header ───────────────────────────────────────────── */}
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

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-foreground/15 text-foreground/60 hover:bg-foreground/5 transition-all duration-200 shrink-0"
            >
              Start a Project
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </header>

        {/* ── Main content ─────────────────────────────────────────────────── */}
        <main className="pt-14">

          {/* ── Hero ────────────────────────────────────────────────────────── */}
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
                <span className="text-foreground/55">Portfolio</span>
              </nav>

              <div className="w-16 sm:w-24 h-px bg-foreground/10" />

              <SplitHeading
                text="Portfolio"
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-bold text-foreground leading-none tracking-wide uppercase"
                style={akira}
              />

              <div className="w-16 sm:w-24 h-px bg-foreground/10" />

              <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-normal max-w-md sm:max-w-lg leading-relaxed">
                A curated selection of digital work — spanning strategy, craft,
                and code. Every project starts with a problem worth solving.
              </p>

            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/8" />
          </section>

          {/* ── Stacked project cards ───────────────────────────────────────── */}
          <section className="relative overflow-visible h-fit pb-12 sm:pb-16 md:pb-20 w-full">
            <div className="w-content-width mx-auto px-4 flex flex-col gap-6 sm:gap-8">

              {/* Filter tab bar */}
              <div className="flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
                <span className="text-xs font-medium text-foreground/30 uppercase tracking-widest shrink-0">
                  Filter
                </span>
                <div
                  role="group"
                  aria-label="Filter projects by category"
                  className="flex items-center gap-1 p-1 rounded-full border border-foreground/10 bg-foreground/[0.03] overflow-x-auto max-w-full"
                  style={{ scrollbarWidth: "none" }}
                >
                  {FILTERS.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 whitespace-nowrap shrink-0 ${
                        activeFilter === filter
                          ? "bg-foreground/10 text-foreground"
                          : "text-foreground/45 hover:text-foreground/70"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Card stack */}
              <div className="flex flex-col gap-4 sm:gap-[6.25vh]">
                {filtered.map((project) => (
                  <div
                    key={project.id}
                    className="group md:sticky md:top-[12.5vh] w-full h-auto md:h-[75vh] rounded-2xl overflow-hidden border border-foreground/10 bg-card/60 backdrop-blur-md cursor-pointer transition-colors duration-300 hover:border-foreground/20"
                  >
                    <div className="relative z-10 w-full h-full flex flex-col md:flex-row justify-between overflow-hidden">

                      {/* ── Left: meta + content ───────────────────────────── */}
                      <div className="w-full md:w-1/2 md:h-full flex flex-col justify-between p-6 sm:p-8 md:p-12 gap-6 md:gap-0">

                        {/* Top: label pill + large number */}
                        <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
                          <span className="px-3 py-1 text-xs rounded-full border border-foreground/15 bg-foreground/5 inline-flex items-center gap-2 w-fit text-foreground/60 font-medium uppercase tracking-wider">
                            {project.category}
                          </span>
                          <h2
                            className="text-5xl sm:text-6xl md:text-8xl font-bold leading-none text-foreground"
                            style={akira}
                          >
                            {project.id}
                          </h2>
                        </div>

                        {/* Bottom: title + summary + tags */}
                        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                          <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-foreground">
                            {project.title}
                          </h3>
                          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/65 font-normal">
                            {project.summary}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-1">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 text-xs rounded-full border border-foreground/15 bg-foreground/5 text-foreground/55 font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>

                      {/* ── Right: ghost number + project image ────────────── */}
                      <div className="w-full md:w-5/12 md:h-full flex flex-col gap-4 md:gap-6 p-6 sm:p-8 md:p-12 pt-0 md:pt-12">

                        {/* Ghost number — desktop only */}
                        <div className="hidden md:flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground/25">{project.year}</span>
                          <span
                            className="text-9xl font-bold text-foreground/[0.06] leading-none select-none"
                            style={akira}
                          >
                            {project.id}
                          </span>
                        </div>

                        {/* Image thumbnail */}
                        <div
                          className="relative w-full h-48 sm:h-64 md:h-auto md:flex-1 rounded-xl overflow-hidden md:rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.02]"
                          style={project.imageContain ? { background: "#0d0a0e" } : undefined}
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className={project.imageContain ? "object-contain" : "object-cover object-top"}
                            sizes="(max-width: 768px) 100vw, 40vw"
                          />
                        </div>

                        {/* View arrow */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-foreground/30 uppercase tracking-widest">
                            {project.link ? "Live Site" : "Case Study"}
                          </span>
                          {project.link ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="w-9 h-9 rounded-full border border-foreground/15 flex items-center justify-center transition-all duration-300 group-hover:border-foreground/40 group-hover:bg-foreground/5"
                            >
                              <ArrowUpRight className="w-3.5 h-3.5 text-foreground/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                          ) : (
                            <span className="w-9 h-9 rounded-full border border-foreground/15 flex items-center justify-center transition-all duration-300 group-hover:border-foreground/40 group-hover:bg-foreground/5">
                              <ArrowUpRight className="w-3.5 h-3.5 text-foreground/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                          )}
                        </div>

                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* ── CTA section ─────────────────────────────────────────────────── */}
          <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 w-full">
            <SceneDecorations preset="corners" />
            <div className="relative z-10 w-content-width mx-auto px-4">
              <div className="rounded-2xl overflow-hidden primary-button p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 sm:gap-8">

                {/* Left */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  <span className="px-3 py-1 text-xs rounded-full border border-primary-cta-text/20 bg-primary-cta-text/10 inline-flex items-center gap-2 w-fit text-primary-cta-text/70 font-medium uppercase tracking-wider">
                    Next Step
                  </span>
                  <h2
                    className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary-cta-text leading-tight uppercase tracking-wide"
                    style={{ ...akira, maxWidth: "14ch" }}
                  >
                    Have a project in mind?
                  </h2>
                </div>

                {/* Right */}
                <div className="flex flex-col items-start md:items-end gap-4 sm:gap-5">
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-primary-cta-text/65 max-w-xs md:text-right font-normal">
                    Let&apos;s build something remarkable together. We&apos;d love to hear from you.
                  </p>
                  <Button
                    variant="text-stagger"
                    text="Start a Conversation"
                    href="/contact"
                    className="text-primary-cta-text glossy-btn"
                    bgClassName="primary-button"
                  />
                </div>

              </div>
            </div>
          </section>

          {/* ── Footer strip ────────────────────────────────────────────────── */}
          <footer className="py-6 sm:py-8 border-t border-foreground/8">
            <div className="w-content-width mx-auto px-4 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
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
