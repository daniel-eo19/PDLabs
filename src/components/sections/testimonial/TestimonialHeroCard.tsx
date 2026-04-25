"use client";

// ─────────────────────────────────────────────────────────────────────────────
// TestimonialHeroCard — rotating slider, 4 testimonials
// GSAP-driven out/in transitions: fade + y-translate + clip-path reveal
// Auto-advances every 12 s; pauses on hover
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef, useCallback } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import gsap from "gsap";


const TESTIMONIALS = [
  {
    quote:
      "PD Labs built our entire studio website from scratch and absolutely nailed the aesthetic. The dark cinematic feel, the 3D visuals, the animations — it all came together exactly how we envisioned. Our clients consistently mention the site as the reason they reached out.",
    name: "Aether Labs Studios",
    handle: "@aetherlabsstudios",
    avatarSrc: "/images/web-agency-2/dev-1.webp",
    avatarAlt: "Aether Labs Studios",
  },
  {
    quote:
      "We needed a professional web presence that would speak to corporate clients and government agencies. PD Labs delivered a clean, credible platform with a smooth booking flow. Enquiries have increased significantly since we launched.",
    name: "Vaness Integrated Resources",
    handle: "@vaness.org",
    avatarSrc: "/images/web-agency-2/team-1.webp",
    avatarAlt: "Vaness Integrated Resources",
  },
  {
    quote:
      "Our Shopify store needed to feel as luxurious as our jewellery. PD Labs understood the assignment — every detail feels premium. Customers regularly compliment how beautiful the site is before they've even browsed the collection.",
    name: "Luchy's Luxe",
    handle: "@luchysluxe",
    avatarSrc: "/images/web-agency-2/dev-2.webp",
    avatarAlt: "Luchy's Luxe",
  },
  {
    quote:
      "PD Labs gave Hippo Voices a platform we're genuinely proud to show off. The marketplace experience is seamless, the branding is bold, and the whole build was handled professionally from brief to launch. Exactly the partner we needed.",
    name: "Hippo Voices",
    handle: "@hippovoices.com",
    avatarSrc: "/images/web-agency-2/dev-3.webp",
    avatarAlt: "Hippo Voices",
  },
] as const;

const AUTO_INTERVAL = 6000;

export default function TestimonialHeroCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Refs that never trigger re-renders
  const isPausedRef      = useRef(false);
  const isAnimatingRef   = useRef(false);
  const activeIndexRef   = useRef(0);

  // DOM targets for GSAP
  const avatarWrapRef = useRef<HTMLDivElement>(null);
  const nameRef       = useRef<HTMLSpanElement>(null);
  const handleRef     = useRef<HTMLParagraphElement>(null);
  const quoteRef      = useRef<HTMLParagraphElement>(null);

  const avatarSize    = "clamp(60px, 6vw, 76px)";
  const avatarOverlap = "clamp(26px, 2.8vw, 34px)";

  // ── Animate all content elements in ───────────────────────────────────────
  const animateIn = useCallback((onDone?: () => void) => {
    gsap.set(avatarWrapRef.current, { scale: 0.93, opacity: 0 });
    gsap.set(nameRef.current,       { y: 6,  opacity: 0 });
    gsap.set(handleRef.current,     { y: 5,  opacity: 0 });
    gsap.set(quoteRef.current,      { y: 8,  opacity: 0, clipPath: "inset(12% 0 0 0)" });

    return gsap.timeline({ onComplete: onDone })
      .to(avatarWrapRef.current, { scale: 1, opacity: 1, duration: 0.70, ease: "power2.out" }, 0.05)
      .to(nameRef.current,       { y: 0,    opacity: 1, duration: 0.55, ease: "power2.out" }, 0.14)
      .to(handleRef.current,     { y: 0,    opacity: 1, duration: 0.50, ease: "power2.out" }, 0.22)
      .to(quoteRef.current,      { y: 0,    opacity: 1, clipPath: "inset(0% 0 0 0)", duration: 0.70, ease: "power2.out" }, 0.28);
  }, []);

  // ── Transition to a new index ───────────────────────────────────────────────
  const transition = useCallback(
    (nextIndex: number) => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      // Safety valve — release lock if anything goes wrong so rotation never stalls
      const safetyId = setTimeout(() => { isAnimatingRef.current = false; }, 3000);
      const unlock = () => { clearTimeout(safetyId); isAnimatingRef.current = false; };

      // Kill any lingering tweens from a previous interrupted animation
      const targets = [avatarWrapRef.current, nameRef.current, handleRef.current, quoteRef.current];
      gsap.killTweensOf(targets);

      // 1. Animate current content OUT
      gsap.timeline({
        onComplete() {
          // 2. flushSync forces React to commit the new content to the DOM
          //    synchronously — GSAP reads correct nodes immediately after
          flushSync(() => {
            activeIndexRef.current = nextIndex;
            setActiveIndex(nextIndex);
          });

          // 3. Animate new content IN
          animateIn(unlock);
        },
      })
        .to(avatarWrapRef.current, { scale: 0.94, opacity: 0, duration: 0.40, ease: "power1.inOut" }, 0)
        .to(nameRef.current,       { y: -5,  opacity: 0, duration: 0.34, ease: "power1.inOut" }, 0)
        .to(handleRef.current,     { y: -4,  opacity: 0, duration: 0.30, ease: "power1.inOut" }, 0.04)
        .to(quoteRef.current,      { y: -6,  opacity: 0, clipPath: "inset(0 0 12% 0)", duration: 0.40, ease: "power1.inOut" }, 0);
    },
    [animateIn]
  );

  const goNext = useCallback(
    () => transition((activeIndexRef.current + 1) % TESTIMONIALS.length),
    [transition]
  );

  // Initial animate-in on mount
  useEffect(() => {
    isAnimatingRef.current = true;
    animateIn(() => { isAnimatingRef.current = false; });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-rotation — stable because goNext is stable
  useEffect(() => {
    const id = setInterval(() => {
      if (!isPausedRef.current) goNext();
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [goNext]);

  const t = TESTIMONIALS[activeIndex];

  return (
    <div
      className="w-content-width mx-auto px-4 py-10 sm:py-14 md:py-18"
      onMouseEnter={() => { isPausedRef.current = true; }}
      onMouseLeave={() => { isPausedRef.current = false; }}
    >
      {/* Section title */}
      <p className="text-xs font-medium text-foreground/35 uppercase tracking-widest mb-5 sm:mb-6">
        Client Success Stories
      </p>

      {/* ── Outer dark card ─────────────────────────────────────────────────── */}
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

        {/* ── Inner content ────────────────────────────────────────────────── */}
        <div className="relative z-10" style={{ paddingTop: avatarOverlap }}>

          {/* Inner dark card */}
          <div className="rounded-xl" style={{ background: "#1a1520" }}>

            {/* Author row */}
            <div
              className="relative flex items-stretch"
              style={{ minHeight: `calc(${avatarSize} * 0.6)` }}
            >
              {/* Invisible spacer so name banner starts after avatar */}
              <div
                className="shrink-0"
                style={{ width: `calc(${avatarSize} + clamp(1rem, 2vw, 1.5rem))` }}
              />

              {/* Name banner */}
              <div
                className="flex-1 flex items-center px-4 sm:px-6 py-3 sm:py-4 overflow-hidden"
                style={{
                  background:          "rgba(230,57,70,0.10)",
                  borderTop:           "1px solid rgba(230,57,70,0.18)",
                  borderTopRightRadius: "0.75rem",
                }}
              >
                <span
                  ref={nameRef}
                  className="text-white font-bold text-xs sm:text-sm md:text-base uppercase tracking-widest leading-tight"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {t.name}
                </span>
              </div>
            </div>

            {/* Avatar — overlaps top of inner card */}
            <div
              ref={avatarWrapRef}
              className="absolute"
              style={{
                width:        avatarSize,
                height:       avatarSize,
                top:          `calc(${avatarOverlap} * -0.85)`,
                left:         "clamp(1rem, 2vw, 1.5rem)",
                borderRadius: "50%",
                overflow:     "hidden",
                border:       "3px solid rgba(255,255,255,0.12)",
                boxShadow:    "0 4px 16px rgba(0,0,0,0.35)",
                zIndex:       20,
              }}
            >
              <Image
                src={t.avatarSrc}
                alt={t.avatarAlt}
                fill
                className="object-cover object-top"
                sizes="96px"
              />
            </div>

            {/* Handle */}
            <p
              ref={handleRef}
              className="text-xs sm:text-sm font-medium text-foreground/45 pt-2 pb-1"
              style={{
                paddingLeft: `calc(${avatarSize} + clamp(1rem, 2vw, 1.5rem) + 0.25rem)`,
              }}
            >
              {t.handle}
            </p>

            {/* Quote */}
            <p
              ref={quoteRef}
              className="text-xs sm:text-sm md:text-base leading-relaxed text-foreground/75 font-normal text-center px-5 sm:px-8 md:px-12 py-4 sm:py-6"
            >
              &ldquo;{t.quote}&rdquo;
            </p>

          </div>
        </div>
      </div>

    </div>
  );
}
