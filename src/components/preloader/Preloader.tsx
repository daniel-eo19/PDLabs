"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const PANEL_COUNT = 5;

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    const panels = containerRef.current.querySelectorAll<HTMLElement>(".pl-panel");
    const logo = containerRef.current.querySelector<HTMLElement>(".pl-logo");

    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setHidden(true);
      },
    });

    // Logo entrance
    tl.fromTo(
      logo,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" }
    )
      // Hold
      .to({}, { duration: 1.0 })
      // Logo exit upward
      .to(logo, { opacity: 0, y: -16, duration: 0.35, ease: "power2.in" })
      // Panels wipe upward with left-to-right stagger
      .to(
        panels,
        {
          yPercent: -105,
          duration: 0.85,
          ease: "power3.inOut",
          stagger: 0.065,
        },
        "+=0.05"
      );

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, [mounted]);

  if (hidden) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 99999 }}
      aria-hidden="true"
    >
      {/* Diagonal panels — skewed so the reveal edge is diagonal like Malkain */}
      {Array.from({ length: PANEL_COUNT }).map((_, i) => (
        <div
          key={i}
          className="pl-panel absolute top-0 bg-[#080808]"
          style={{
            left: `${i * 20}%`,
            width: "22%",
            height: "110%",
            transform: "skewX(-6deg)",
            transformOrigin: "top left",
            /* Thin white line on right edge acts as the diagonal divider */
            borderRight: i < PANEL_COUNT - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
          }}
        />
      ))}

      {/* Logo — sits above panels, centered */}
      <div
        className="pl-logo absolute inset-0 flex items-center justify-center z-10"
        style={{ opacity: 0 }}
      >
        <Image
          src="/images/web-agency-2/PD_LABS_PRIMARY_WHITE.png"
          alt="PD Labs"
          width={200}
          height={80}
          priority
          className="w-[150px] md:w-[200px] h-auto select-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
