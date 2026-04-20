"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const barLeft   = ref.current.querySelector<HTMLElement>(".pl-bar-left");
    const barRight  = ref.current.querySelector<HTMLElement>(".pl-bar-right");
    const textTop   = ref.current.querySelector<HTMLElement>(".pl-text-top");
    const textBot   = ref.current.querySelector<HTMLElement>(".pl-text-bottom");
    const overlay   = ref.current.querySelector<HTMLElement>(".pl-overlay");

    document.body.style.overflow = "hidden";

    /* ─── Initial states ─────────────────────────────────────────── */
    // Bars: collapsed to 0 width, anchored at the screen center
    gsap.set(barLeft,  { scaleX: 0, transformOrigin: "right center" });
    gsap.set(barRight, { scaleX: 0, transformOrigin: "left center"  });

    // Text: hidden off-screen on opposite sides
    gsap.set(textTop, { xPercent: 120 });   // "PD"   starts off RIGHT
    gsap.set(textBot, { xPercent: -120 });  // "LABS" starts off LEFT

    /* ─── Timeline ───────────────────────────────────────────────── */
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setHidden(true);
      },
    });

    tl
      // 1 ─ Bars grow from the centre outward into blocks
      .to([barLeft, barRight], {
        scaleX: 0.35,
        duration: 0.55,
        ease: "power3.out",
      })

      // 2 ─ Text slides in from opposite sides (split typography reveal)
      .to(textTop, { xPercent: 0, duration: 0.5, ease: "power3.out" }, "-=0.25")
      .to(textBot, { xPercent: 0, duration: 0.5, ease: "power3.out" }, "<")

      // 3 ─ Hold so the full logo is readable
      .to({}, { duration: 0.65 })

      // 4 ─ Text exits: top slides UP, bottom slides DOWN
      .to(textTop, { yPercent: -130, duration: 0.45, ease: "power3.in" })
      .to(textBot, { yPercent:  130, duration: 0.45, ease: "power3.in" }, "<")

      // 5 ─ Bars expand to cover the full screen
      .to([barLeft, barRight], {
        scaleX: 1,
        duration: 0.5,
        ease: "power3.inOut",
      }, "-=0.35")

      // 6 ─ Fade out the whole overlay, revealing the site
      .to(overlay, { opacity: 0, duration: 0.4, ease: "power2.inOut" });

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 99999 }}
      aria-hidden="true"
    >
      <div className="pl-overlay absolute inset-0 bg-[#080808]">

        {/* ── Left bar: full height, anchored to right edge of left half ── */}
        <div
          className="pl-bar-left absolute top-0 left-0 h-full bg-white"
          style={{ width: "50%" }}
        />

        {/* ── Right bar: full height, anchored to left edge of right half ── */}
        <div
          className="pl-bar-right absolute top-0 right-0 h-full bg-white"
          style={{ width: "50%" }}
        />

        {/* ── Brand name split across two lines ─────────────────────────── */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ zIndex: 10, gap: "0.05em" }}
        >
          {/* "PD" — slides in from the RIGHT */}
          <div className="pl-text-top overflow-hidden">
            <span
              style={{
                display: "block",
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(56px, 11vw, 130px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                color: "#ffffff",
                whiteSpace: "nowrap",
              }}
            >
              PD
            </span>
          </div>

          {/* "LABS" — slides in from the LEFT */}
          <div className="pl-text-bottom overflow-hidden">
            <span
              style={{
                display: "block",
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(56px, 11vw, 130px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                color: "#ffffff",
                whiteSpace: "nowrap",
              }}
            >
              LABS
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
