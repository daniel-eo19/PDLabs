"use client";

import { useState, useEffect } from "react";

type ColorMode = "dark" | "light";

export function useColorMode() {
  const [mode, setMode] = useState<ColorMode>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("pd-color-mode") as ColorMode | null;
    const attr = document.documentElement.getAttribute("data-theme") as ColorMode | null;
    setMode(saved ?? attr ?? "dark");
  }, []);

  const toggle = () => {
    setMode(prev => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("pd-color-mode", next);
      document.documentElement.setAttribute("data-theme", next);
      return next;
    });
  };

  return { mode, toggle, mounted };
}
