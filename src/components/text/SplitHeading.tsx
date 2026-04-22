"use client";

// ─────────────────────────────────────────────────────────────────────────────
// SplitHeading
// Renders a heading with a staggered per-letter upward reveal using GSAP.
// Each letter starts below (y offset) at opacity 0 and animates into place.
// Respects prefers-reduced-motion — skips animation and shows text immediately.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SplitHeadingProps {
  text:       string;
  as?:        "h1" | "h2" | "h3";
  className?: string;
  style?:     React.CSSProperties;
  /** Seconds before the animation begins */
  delay?:     number;
  /** Seconds between each letter */
  stagger?:   number;
  /** Duration of each letter's tween */
  duration?:  number;
  /** Starting y offset in px */
  yOffset?:   number;
}

export default function SplitHeading({
  text,
  as: Tag = "h1",
  className = "",
  style,
  delay    = 0.1,
  stagger  = 0.038,
  duration = 0.55,
  yOffset  = 22,
}: SplitHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const letters = el.querySelectorAll<HTMLElement>(".sh-letter");

    // Skip animation if the user prefers reduced motion — show text immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(letters, { opacity: 1, y: 0 });
      return;
    }

    // Start hidden, then animate into place
    gsap.set(letters, { opacity: 0, y: yOffset });

    const tween = gsap.to(letters, {
      opacity:  1,
      y:        0,
      duration,
      stagger,
      delay,
      ease:     "power3.out",
      clearProps: "transform", // clean up after animation finishes
    });

    return () => { tween.kill(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Split into words; each word is an inline-block span so line breaks work
  // naturally. Letters and spaces are individual .sh-letter spans.
  const words = text.split(" ");

  return (
    <Tag
      ref={ref}
      className={className}
      style={style}
      aria-label={text}        // full text for screen readers
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block">
          {word.split("").map((char, ci) => (
            <span
              key={ci}
              className="sh-letter inline-block"
              aria-hidden
              // Prevent layout shift: start hidden via inline style so there
              // is no flash of visible text before useEffect fires.
              style={{ opacity: 0 }}
            >
              {char}
            </span>
          ))}
          {/* Space between words — also animated so the stagger flows through */}
          {wi < words.length - 1 && (
            <span
              className="sh-letter inline-block"
              aria-hidden
              style={{ opacity: 0 }}
            >
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </Tag>
  );
}
