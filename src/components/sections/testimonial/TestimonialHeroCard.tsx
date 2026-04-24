"use client";

// ─────────────────────────────────────────────────────────────────────────────
// TestimonialHeroCard
// Reference: wide card with dark radial-glow background, 4-pointed sparkle
// corner accents, inner white card, circular avatar overlapping the top edge,
// solid dark name banner, handle, and centered quote text.
// ─────────────────────────────────────────────────────────────────────────────

import Image from "next/image";


export interface TestimonialHeroCardProps {
  quote:      string;
  name:       string;
  handle?:    string;
  avatarSrc:  string;
  avatarAlt?: string;
}

export default function TestimonialHeroCard({
  quote,
  name,
  handle    = "@client",
  avatarSrc,
  avatarAlt = "Client",
}: TestimonialHeroCardProps) {
  // Avatar dimensions — responsive via CSS clamp
  const avatarSize   = "clamp(60px, 6vw, 76px)";
  const avatarOverlap = "clamp(26px, 2.8vw, 34px)"; // how much it sticks above white card

  return (
    <div className="w-content-width mx-auto px-4 py-10 sm:py-14 md:py-18">

      {/* Section title */}
      <p className="text-xs font-medium text-foreground/35 uppercase tracking-widest mb-5 sm:mb-6">
        Client Success Story
      </p>

      {/* ── Outer dark card ───────────────────────────────────────────── */}
      <div
        className="relative rounded-2xl"
        style={{
          background: [
            "radial-gradient(ellipse 75% 80% at 50% 55%,",
            "  rgba(230,57,70,0.18) 0%,",
            "  rgba(26,21,32,0.94) 55%,",
            "  #0d0a0e 100%)",
          ].join(""),
          padding: "clamp(1.25rem, 3vw, 2.25rem)",
        }}
      >

        {/* Grain texture */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.055'/%3E%3C/svg%3E")`,
            backgroundSize: "300px 300px",
          }}
        />

{/* ── Inner content ─────────────────────────────────────────── */}
        {/* Extra top padding creates the space the avatar will overlap into */}
        <div
          className="relative z-10"
          style={{ paddingTop: avatarOverlap }}
        >
          {/* Inner dark card */}
          <div className="rounded-xl" style={{ background: "#1a1520" }}>

            {/* ── Author row ──────────────────────────────────────── */}
            {/* The avatar is absolutely positioned overlapping the top */}
            <div
              className="relative flex items-stretch"
              style={{ minHeight: `calc(${avatarSize} * 0.6)` }}
            >
              {/* Invisible spacer that matches avatar width so banner aligns */}
              <div
                className="shrink-0"
                style={{
                  width: `calc(${avatarSize} + clamp(1rem, 2vw, 1.5rem))`,
                }}
              />

              {/* Dark name banner — fills the right portion of the row */}
              <div
                className="flex-1 flex items-center px-4 sm:px-6 py-3 sm:py-4"
                style={{ background: "rgba(230,57,70,0.10)", borderTop: "1px solid rgba(230,57,70,0.18)", borderTopRightRadius: "0.75rem" }}
              >
                <span
                  className="text-white font-bold text-xs sm:text-sm md:text-base uppercase tracking-widest leading-tight"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {name}
                </span>
              </div>
            </div>

            {/* Avatar — positioned absolute, overlapping the top of the white card */}
            <div
              className="absolute"
              style={{
                width:  avatarSize,
                height: avatarSize,
                top:    `calc(${avatarOverlap} * -0.85)`,
                left:   "clamp(1rem, 2vw, 1.5rem)",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid rgba(255,255,255,0.12)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
                zIndex: 20,
              }}
            >
              <Image
                src={avatarSrc}
                alt={avatarAlt}
                fill
                className="object-cover object-top"
                sizes="96px"
              />
            </div>

            {/* Handle */}
            <p
              className="text-xs sm:text-sm font-medium text-foreground/45 pt-2 pb-1"
              style={{
                paddingLeft: `calc(${avatarSize} + clamp(1rem, 2vw, 1.5rem) + 0.25rem)`,
              }}
            >
              {handle}
            </p>

            {/* Quote */}
            <p
              className="text-xs sm:text-sm md:text-base leading-relaxed text-foreground/75 font-normal text-center px-5 sm:px-8 md:px-12 py-4 sm:py-6"
            >
              &ldquo;{quote}&rdquo;
            </p>

          </div>{/* end white card */}
        </div>
      </div>
    </div>
  );
}
