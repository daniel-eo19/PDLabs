"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const overlay   = ref.current.querySelector<HTMLElement>(".pl-overlay");
    const barL      = ref.current.querySelector<HTMLElement>(".pl-bar-l");
    const barR      = ref.current.querySelector<HTMLElement>(".pl-bar-r");
    const logoInner = ref.current.querySelector<HTMLElement>(".pl-logo-inner");

    document.body.style.overflow = "hidden";

    /*
     * INITIAL STATE
     * Bars:  8×8 px white squares, centred on screen
     * Logo:  starts BELOW its clip container (y = +100%)
     */
    gsap.set(barL,      { width: 8, height: 8 });
    gsap.set(barR,      { width: 8, height: 8 });
    gsap.set(logoInner, { y: "100%" });

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setHidden(true);
      },
    });

    tl
      /*
       * PHASE 1 — squares grow into horizontal bars
       */
      .to([barL, barR], {
        width:    "clamp(80px, 11vw, 140px)",
        height:   8,
        duration: 0.55,
        ease:     "power3.out",
      })

      /*
       * PHASE 2 — logo slides up into its clip container
       */
      .to(logoInner, {
        y:        "0%",
        duration: 0.5,
        ease:     "power3.out",
      }, "+=0.05")

      /* HOLD — let the logo be seen */
      .to({}, { duration: 0.75 })

      /*
       * PHASE 3 — logo exits upward
       */
      .to(logoInner, {
        y:        "-105%",
        duration: 0.45,
        ease:     "power3.in",
      })

      /*
       * PHASE 4 — bars expand to full-screen block
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

  /* Logo clip height — matches the rendered logo height */
  const logoH = "clamp(36px, 5vw, 56px)";

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 99999 }}
      aria-hidden="true"
    >
      {/* Full-screen dark backdrop */}
      <div className="pl-overlay absolute inset-0 bg-[#080808]">

        {/* Centred layout column: [logo clip] [bars] */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center" style={{ gap: 14 }}>

            {/*
              LOGO CLIP — overflow:hidden hides the logo until it slides up.
              Height must match the rendered logo height.
            */}
            <div className="overflow-hidden" style={{ height: logoH }}>
              <div className="pl-logo-inner flex items-center justify-center">
                <Image
                  src="/images/web-agency-2/PD_LABS_PRIMARY_WHITE.png"
                  alt="PD Labs"
                  width={220}
                  height={56}
                  style={{
                    height:     logoH,
                    width:      "auto",
                    objectFit:  "contain",
                    display:    "block",
                  }}
                  priority
                />
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

          </div>
        </div>

      </div>
    </div>
  );
}
