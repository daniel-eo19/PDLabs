"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Web Platform",
    category: "Web Development",
    description: "A modern, high-performance web application built with Next.js and a clean design system. Optimized for speed, accessibility, and conversion.",
    imageSrc: "/images/web-agency-2/macbook-mockup.png",
    imageAlt: "PD Labs web platform",
    tags: ["Next.js", "TypeScript", "UI/UX"],
  },
  {
    id: "02",
    title: "Mobile Experience",
    category: "Mobile Design",
    description: "End-to-end mobile product design — from wireframes to pixel-perfect screens. Seamless interactions across iOS and Android.",
    imageSrc: "/images/web-agency-2/phone-in-hand-2.jpg",
    imageAlt: "PD Labs mobile experience",
    tags: ["Mobile", "UI/UX", "Prototyping"],
  },
  {
    id: "03",
    title: "Venue Branding",
    category: "Brand Identity",
    description: "On-site brand presentation design for a premium venue. Signage, print collateral, and environmental graphics that command attention.",
    imageSrc: "/images/web-agency-2/venue-mockup.jpg",
    imageAlt: "PD Labs venue branding",
    tags: ["Branding", "Print", "Environmental"],
  },
  {
    id: "04",
    title: "Brand Merchandise",
    category: "Brand Identity",
    description: "Branded lifestyle merchandise — hoodies, apparel, and accessories that extend the brand beyond the screen into the real world.",
    imageSrc: "/images/web-agency-2/hoodie-mockup.jpg",
    imageAlt: "PD Labs brand merchandise",
    tags: ["Merchandise", "Apparel", "Brand"],
  },
  {
    id: "05",
    title: "Brand Identity System",
    category: "Brand Identity",
    description: "Complete visual identity — logo, typography, color system, and business collateral. A cohesive brand language built to scale.",
    imageSrc: "/images/web-agency-2/pd-bcard.jpg",
    imageAlt: "PD Labs brand identity",
    tags: ["Logo", "Typography", "Collateral"],
  },
  {
    id: "06",
    title: "Digital Product Design",
    category: "UI/UX Design",
    description: "User-centric digital product design with a focus on intuitive flows, micro-interactions, and visual clarity that drives engagement.",
    imageSrc: "/images/web-agency-2/phone-in-hand-3.jpg",
    imageAlt: "PD Labs digital product",
    tags: ["UI/UX", "Product", "Design Systems"],
  },
];

export default function PortfolioPage() {
  return (
    <main
      className="min-h-screen w-full"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Header */}
      <div className="w-full border-b border-foreground/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-foreground/20 hover:border-foreground/50 transition-colors"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-sm font-mono text-foreground/50 uppercase tracking-widest">
            Our Work
          </span>
          <h1 className="text-6xl md:text-8xl font-medium leading-none">
            Portfolio
          </h1>
          <p className="text-lg text-foreground/60 max-w-xl mt-2">
            A selection of projects we&apos;re proud of — from brand identity to full-stack web platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden border border-foreground/10 cursor-pointer transition-transform duration-500 hover:-translate-y-1 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
              style={{ backgroundColor: "var(--card)" }}
            >
              {/* Image */}
              <div
                className={`relative w-full overflow-hidden ${
                  i === 0 ? "h-[50vh]" : "h-64"
                }`}
              >
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-mono text-foreground/40 uppercase tracking-widest">
                      {project.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-medium">{project.title}</h2>
                  </div>
                  <span className="text-4xl font-mono font-medium text-foreground/10 leading-none shrink-0">
                    {project.id}
                  </span>
                </div>
                <p className="text-foreground/60 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full border border-foreground/15 text-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center flex flex-col items-center gap-6">
          <p className="text-2xl md:text-4xl font-medium max-w-xl">
            Ready to build something great?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "var(--primary-cta)",
              color: "var(--primary-cta-text)",
            }}
          >
            Start Your Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
