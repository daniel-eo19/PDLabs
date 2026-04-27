"use client";

import { Sun, Moon } from "lucide-react";
import { useColorMode } from "@/hooks/useColorMode";

export default function ThemeToggle() {
  const { mode, toggle, mounted } = useColorMode();

  // Prevent layout shift during hydration
  if (!mounted) {
    return <div className="w-14 h-7 rounded-full shrink-0" aria-hidden="true" />;
  }

  const isDark = mode === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex items-center h-7 w-14 rounded-full cursor-pointer shrink-0 transition-all duration-500"
      style={{
        background: isDark
          ? "rgba(255,255,255,0.07)"
          : "rgba(0,0,0,0.07)",
        border: `1px solid ${isDark ? "rgba(255,255,255,0.13)" : "rgba(0,0,0,0.13)"}`,
      }}
    >
      {/* Sun icon — left side of track */}
      <Sun
        aria-hidden="true"
        className="absolute left-[0.375rem] w-3 h-3 transition-all duration-300 pointer-events-none"
        style={{
          opacity: isDark ? 0.22 : 0.7,
          color: isDark ? "#ffffff" : "#d97706",
          transform: isDark ? "scale(0.9)" : "scale(1)",
        }}
      />

      {/* Moon icon — right side of track */}
      <Moon
        aria-hidden="true"
        className="absolute right-[0.375rem] w-3 h-3 transition-all duration-300 pointer-events-none"
        style={{
          opacity: isDark ? 0.7 : 0.22,
          color: isDark ? "#a78bfa" : "#1a1520",
          transform: isDark ? "scale(1)" : "scale(0.9)",
        }}
      />

      {/* Sliding knob */}
      <span
        aria-hidden="true"
        className="absolute flex items-center justify-center w-[1.2rem] h-[1.2rem] rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none"
        style={{
          left: isDark ? "calc(100% - 1.4rem)" : "0.2rem",
          background: isDark
            ? "linear-gradient(135deg, #312e81, #4c1d95)"
            : "linear-gradient(135deg, #fbbf24, #f59e0b)",
          boxShadow: isDark
            ? "0 0 10px 2px rgba(139,92,246,0.45), 0 2px 4px rgba(0,0,0,0.4)"
            : "0 0 10px 2px rgba(251,191,36,0.5), 0 2px 4px rgba(0,0,0,0.15)",
        }}
      >
        {isDark
          ? <Moon className="w-2 h-2 text-white" strokeWidth={2.5} />
          : <Sun className="w-2 h-2 text-white" strokeWidth={2.5} />
        }
      </span>
    </button>
  );
}
