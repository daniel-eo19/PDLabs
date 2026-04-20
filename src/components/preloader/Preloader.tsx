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

    // Prevent scroll during preloader
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
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
    )
      // Hold
      .to({}, { duration: 0.9 })
      // Logo exit
      .to(logo, { opacity: 0, y: -12, duration: 0.4, ease: "power2.in" })
      // Panels wipe upward with stagger
      .to(
        panels,
        {
          yPercent: -100,
          duration: 0.9,
          ease: "power3.inOut",
          stagger: 0.07,
        },
        "-=0.15"
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
      {/* Diagonal panels */}
      {Array.from({ length: PANEL_COUNT }).map((_, i) => (
        <div
          key={i}
          className="pl-panel absolute top-0 h-[110%] bg-[#0a0a0a]"
          style={{
            left: `${i * 20 - 3}%`,
            width: "24%",
            transform: "skewX(-8deg)",
            transformOrigin: "top left",
          }}
        />
      ))}

      {/* Logo centered above panels */}
      <div
        className="pl-logo absolute inset-0 flex flex-col items-center justify-center gap-3 z-10"
        style={{ opacity: 0 }}
      >
        <Image
          src="/images/web-agency-2/PD_LABS_PRIMARY_WHITE.png"
          alt="PD Labs"
          width={180}
          height={72}
          priority
          className="w-[140px] md:w-[180px] h-auto"
        />
      </div>
    </div>
  );
}
