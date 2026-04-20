"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const overlay    = ref.current.querySelector<HTMLElement>(".pl-overlay");
    const barL       = ref.current.querySelector<HTMLElement>(".pl-bar-l");
    const barR       = ref.current.querySelector<HTMLElement>(".pl-bar-r");
    const topInner   = ref.current.querySelector<HTMLElement>(".pl-top-inner");
    const botInner   = ref.current.querySelector<HTMLElement>(".pl-bot-inner");

    document.body.style.overflow = "hidden";

    /*
     * INITIAL STATE
     * Bars:  8×8 px white squares, centred on screen, no height yet
     * Text:  "PD" starts BELOW its clip  (y = +100%)
     *        "LABS" starts ABOVE its clip (y = -100%)
     */
    gsap.set(barL,     { width: 8,  height: 8 });
    gsap.set(barR,     { width: 8,  height: 8 });
    gsap.set(topInner, { y: "100%" });
    gsap.set(botInner, { y: "-100%" });

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setHidden(true);
      },
    });

    tl
      /*
       * PHASE 1 — squares grow into horizontal bars
       * Matches: "minimal bar elements → structured blocks"
       */
      .to([barL, barR], {
        width:    "clamp(80px, 11vw, 140px)",
        height:   8,
        duration: 0.55,
        ease:     "power3.out",
      })

      /*
       * PHASE 2 — split typography reveal (opposing direction)
       * "PD"   rises  UP  into its clip container (from below)
       * "LABS" drops DOWN into its clip container (from above)
       */
      .to(topInner, { y: "0%", duration: 0.5, ease: "power3.out" }, "+=0.05")
      .to(botInner, { y: "0%", duration: 0.5, ease: "power3.out" }, "<")

      /* HOLD — let the logo be seen */
      .to({}, { duration: 0.7 })

      /*
       * PHASE 3 — text exits (reverse of entry)
       * "PD"   exits UP,   "LABS" exits DOWN
       */
      .to(topInner, { y: "-105%", duration: 0.45, ease: "power3.in" })
      .to(botInner, { y:  "105%", duration: 0.45, ease: "power3.in" }, "<")

      /*
       * PHASE 4 — bars expand to full-screen block
       * First grow tall (100 vh), then fill the full width
       * Matches: "expands into a full-screen transition"
       */
      .to([barL, barR], {
        height:   "100vh",
        duration: 0.35,
        ease:     "power3.inOut",
      }, "-=0.3")
      .to([barL, barR], {
        width:    "50vw",
        duration: 0.4,
        ease:     "power3.inOut",
      }, "-=0.2")

      /*
       * PHASE 5 — clean fade out, revealing the site
       */
      .to(overlay, { opacity: 0, duration: 0.4, ease: "power2.inOut" });

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  if (hidden) return null;

  /* ─── Shared text style ─────────────────────────────────────── */
  const fs = "clamp(52px, 9.5vw, 112px)";

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 99999 }}
      aria-hidden="true"
    >
      {/* Full-screen dark backdrop */}
      <div className="pl-overlay absolute inset-0 bg-[#080808]">

        {/* Centred layout column: [top clip] [bars] [bottom clip] */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center" style={{ gap: 0 }}>

            {/*
              TOP CLIP — overflow:hidden hides "PD" until it slides up.
              Height must match the rendered line-height of the text.
            */}
            <div className="overflow-hidden" style={{ height: fs }}>
              <div className="pl-top-inner">
                <span style={{
                  display:        "block",
                  fontFamily:     "'Satoshi', sans-serif",
                  fontWeight:     900,
                  fontSize:       fs,
                  lineHeight:     1,
                  letterSpacing:  "-0.04em",
                  color:          "#ffffff",
                  whiteSpace:     "nowrap",
                }}>
                  PD
                </span>
              </div>
            </div>

            {/* BARS — start as two 8×8 squares, grow outward */}
            <div className="flex items-center justify-center" style={{ gap: 4 }}>
              <div
                className="pl-bar-l bg-white"
                style={{ width: 8, height: 8, transformOrigin: "right center" }}
              />
              <div
                className="pl-bar-r bg-white"
                style={{ width: 8, height: 8, transformOrigin: "left center" }}
              />
            </div>

            {/*
              BOTTOM CLIP — overflow:hidden hides "LABS" until it slides down.
            */}
            <div className="overflow-hidden" style={{ height: fs }}>
              <div className="pl-bot-inner">
                <span style={{
                  display:        "block",
                  fontFamily:     "'Satoshi', sans-serif",
                  fontWeight:     900,
                  fontSize:       fs,
                  lineHeight:     1,
                  letterSpacing:  "-0.04em",
                  color:          "#ffffff",
                  whiteSpace:     "nowrap",
                }}>
                  LABS
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
