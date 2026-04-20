"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

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

    // Logo fade in
    tl.fromTo(
      logo,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" }
    )
      .to({}, { duration: 1.1 })
      // Logo exit
      .to(logo, { opacity: 0, y: -16, duration: 0.3, ease: "power2.in" })
      // Panels wipe up — left to right stagger, clearly visible
      .to(
        panels,
        {
          yPercent: -100,
          duration: 0.75,
          ease: "power4.inOut",
          stagger: 0.09,
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
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 99999 }}
      aria-hidden="true"
    >
      {/*
        5 panels side-by-side.
        Each panel is a tall parallelogram via clip-path to create
        the Malkain-style diagonal dividing lines.
        Panels are NOT overflow:hidden so they slide fully off screen.
      */}
      {[0, 1, 2, 3, 4].map((i) => {
        const w = 22; // % — slight overlap to avoid gaps
        const left = i * 20;
        // Diagonal offset in vw — creates the slanted right edge
        const d = 3;
        // clip-path parallelogram: straight left, diagonal right
        const clip = `polygon(0 0, 100% 0, calc(100% + ${d}vw) 100%, 0 100%)`;
        return (
          <div
            key={i}
            className="pl-panel absolute top-0"
            style={{
              left: `${left}%`,
              width: `${w}%`,
              height: "100vh",
              backgroundColor: "#080808",
              clipPath: clip,
              // Each panel slightly different shade so stagger is visible
              filter: `brightness(${1 + i * 0.03})`,
            }}
          />
        );
      })}

      {/* Diagonal white divider lines — one between each panel */}
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="absolute top-0"
          style={{
            left: `${i * 20}%`,
            width: "2px",
            height: "100vh",
            background: "rgba(255,255,255,0.25)",
            transform: "skewX(-8deg)",
            transformOrigin: "top center",
            zIndex: 2,
          }}
        />
      ))}

      {/* Logo */}
      <div
        className="pl-logo absolute inset-0 flex items-center justify-center"
        style={{ opacity: 0, zIndex: 10 }}
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
