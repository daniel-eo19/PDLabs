"use client";

// ─────────────────────────────────────────────────────────────────────────────
// SceneDecorations
// Subtle decorative background shapes: ×, +, ·, ○, ─, ◇
// All pointer-events:none, absolute inset-0, overflow-hidden.
// Animations: deco-float / deco-drift / deco-pulse keyframes in utilities.css.
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type ShapeType  = "x" | "plus" | "dot" | "ring" | "line" | "diamond";
type AnimType   = "float" | "drift" | "pulse" | "still";

export interface Deco {
  type:    ShapeType;
  top?:    string;
  left?:   string;
  right?:  string;
  bottom?: string;
  size:    number;   // px
  opacity: number;   // 0–1
  color?:  string;   // full CSS color string (incl. alpha)
  anim:    AnimType;
  delay:   number;   // seconds
}

// ─── Shape renderers ─────────────────────────────────────────────────────────

function XShape({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" aria-hidden>
      <line x1="0.5" y1="0.5" x2="9.5" y2="9.5" stroke={color} strokeWidth="0.85" strokeLinecap="round" />
      <line x1="9.5" y1="0.5" x2="0.5" y2="9.5" stroke={color} strokeWidth="0.85" strokeLinecap="round" />
    </svg>
  );
}

function PlusShape({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" aria-hidden>
      <line x1="5"   y1="0.5" x2="5"   y2="9.5" stroke={color} strokeWidth="0.85" strokeLinecap="round" />
      <line x1="0.5" y1="5"   x2="9.5" y2="5"   stroke={color} strokeWidth="0.85" strokeLinecap="round" />
    </svg>
  );
}

function DotShape({ size, color }: { size: number; color: string }) {
  return (
    <div
      aria-hidden
      style={{ width: size, height: size, borderRadius: "50%", background: color }}
    />
  );
}

function RingShape({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10.5" stroke={color} strokeWidth="0.9" />
    </svg>
  );
}

function LineShape({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={2} viewBox={`0 0 ${size} 2`} fill="none" aria-hidden>
      <line x1="0" y1="1" x2={size} y2="1" stroke={color} strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

function DiamondShape({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" aria-hidden>
      <rect x="2.3" y="2.3" width="5.4" height="5.4" stroke={color} strokeWidth="0.85" transform="rotate(45 5 5)" />
    </svg>
  );
}

// ─── Presets ─────────────────────────────────────────────────────────────────

const W = "rgba(255,255,255,1)";
const A = "rgba(230,57,70,1)";

// Full hero — generous scatter across tall section
export const DECOS_HERO: Deco[] = [
  { type: "x",       top: "13%",    left: "3%",    size: 11, opacity: 0.08,  anim: "float",  delay: 0.0, color: W },
  { type: "x",       top: "27%",    right: "3.5%", size: 9,  opacity: 0.065, anim: "float",  delay: 1.8, color: W },
  { type: "x",       bottom: "9%",  right: "5.5%", size: 8,  opacity: 0.055, anim: "float",  delay: 2.7, color: W },
  { type: "plus",    bottom: "21%", left: "6.5%",  size: 13, opacity: 0.07,  anim: "drift",  delay: 0.9, color: W },
  { type: "plus",    top: "54%",    right: "2%",   size: 10, opacity: 0.055, anim: "drift",  delay: 2.4, color: W },
  { type: "dot",     top: "19%",    left: "17%",   size: 3,  opacity: 0.15,  anim: "pulse",  delay: 2.0, color: W },
  { type: "dot",     top: "37%",    right: "13%",  size: 2,  opacity: 0.12,  anim: "pulse",  delay: 0.4, color: W },
  { type: "dot",     bottom: "33%", left: "21%",   size: 2,  opacity: 0.10,  anim: "pulse",  delay: 3.2, color: W },
  { type: "dot",     top: "9%",     right: "21%",  size: 2,  opacity: 0.12,  anim: "pulse",  delay: 1.1, color: A },
  { type: "ring",    bottom: "27%", right: "6.5%", size: 20, opacity: 0.055, anim: "drift",  delay: 1.2, color: W },
  { type: "ring",    top: "47%",    left: "1.5%",  size: 28, opacity: 0.04,  anim: "float",  delay: 3.5, color: W },
  { type: "line",    top: "61%",    right: "2%",   size: 44, opacity: 0.07,  anim: "still",  delay: 0.0, color: W },
  { type: "line",    bottom: "14%", left: "2.5%",  size: 32, opacity: 0.06,  anim: "still",  delay: 0.0, color: W },
  { type: "diamond", bottom: "17%", left: "4.5%",  size: 8,  opacity: 0.09,  anim: "drift",  delay: 2.1, color: A },
];

// Sparse — for interior content sections; corners + edges only
export const DECOS_SPARSE: Deco[] = [
  { type: "x",       top: "11%",    left: "1.5%",  size: 10, opacity: 0.065, anim: "float",  delay: 0.0, color: W },
  { type: "x",       bottom: "10%", right: "2%",   size: 9,  opacity: 0.055, anim: "float",  delay: 2.2, color: W },
  { type: "plus",    bottom: "18%", right: "2.5%", size: 12, opacity: 0.06,  anim: "drift",  delay: 1.5, color: W },
  { type: "plus",    top: "14%",    right: "3%",   size: 10, opacity: 0.05,  anim: "drift",  delay: 3.0, color: W },
  { type: "dot",     top: "40%",    right: "6%",   size: 2,  opacity: 0.10,  anim: "pulse",  delay: 0.8, color: W },
  { type: "dot",     top: "22%",    left: "7%",    size: 2,  opacity: 0.08,  anim: "pulse",  delay: 1.4, color: A },
  { type: "ring",    bottom: "30%", left: "3%",    size: 22, opacity: 0.04,  anim: "float",  delay: 2.5, color: W },
  { type: "line",    top: "68%",    right: "1.5%", size: 36, opacity: 0.06,  anim: "still",  delay: 0.0, color: W },
];

// Corners — minimal, just the four corners
export const DECOS_CORNERS: Deco[] = [
  { type: "x",       top: "5%",    left: "2.5%",  size: 10, opacity: 0.07,  anim: "float",  delay: 0.0, color: W },
  { type: "plus",    top: "5%",    right: "2.5%", size: 11, opacity: 0.06,  anim: "float",  delay: 1.2, color: W },
  { type: "dot",     top: "11%",   left: "5.5%",  size: 2,  opacity: 0.12,  anim: "pulse",  delay: 0.6, color: W },
  { type: "dot",     top: "11%",   right: "5.5%", size: 2,  opacity: 0.10,  anim: "pulse",  delay: 1.8, color: W },
  { type: "x",       bottom: "5%", left: "2.5%",  size: 8,  opacity: 0.06,  anim: "float",  delay: 2.0, color: W },
  { type: "plus",    bottom: "5%", right: "2.5%", size: 9,  opacity: 0.055, anim: "float",  delay: 0.8, color: W },
  { type: "diamond", bottom: "12%", left: "5%",   size: 7,  opacity: 0.07,  anim: "drift",  delay: 1.6, color: A },
];

const PRESETS: Record<string, Deco[]> = {
  hero:    DECOS_HERO,
  sparse:  DECOS_SPARSE,
  corners: DECOS_CORNERS,
};

// ─── Animation timing per type ────────────────────────────────────────────────

function animDuration(anim: AnimType, index: number): number {
  switch (anim) {
    case "float": return 6 + (index % 3) * 1.5;
    case "drift": return 9 + (index % 4) * 1.5;
    case "pulse": return 4 + (index % 3);
    default:      return 0;
  }
}

function animName(anim: AnimType): string {
  switch (anim) {
    case "float": return "deco-float";
    case "drift": return "deco-drift";
    case "pulse": return "deco-pulse";
    default:      return "";
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

interface Props {
  items?:   Deco[];
  preset?:  "hero" | "sparse" | "corners";
  className?: string;
}

export default function SceneDecorations({ items, preset = "sparse", className = "" }: Props) {
  const decos = items ?? PRESETS[preset] ?? DECOS_SPARSE;

  return (
    <div
      aria-hidden
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
      style={{ zIndex: 0 }}
    >
      {decos.map((d, i) => {
        const color = d.color ?? W;
        const name  = animName(d.anim);
        const dur   = animDuration(d.anim, i);

        const animStyle: React.CSSProperties = name
          ? { animation: `${name} ${dur}s ${d.delay}s ease-in-out infinite alternate` }
          : {};

        const posStyle: React.CSSProperties = {
          position: "absolute",
          top:      d.top,
          left:     d.left,
          right:    d.right,
          bottom:   d.bottom,
          opacity:  d.opacity,
          ...animStyle,
        };

        let shape: React.ReactNode;
        switch (d.type) {
          case "x":       shape = <XShape       size={d.size} color={color} />; break;
          case "plus":    shape = <PlusShape     size={d.size} color={color} />; break;
          case "dot":     shape = <DotShape      size={d.size} color={color} />; break;
          case "ring":    shape = <RingShape     size={d.size} color={color} />; break;
          case "line":    shape = <LineShape     size={d.size} color={color} />; break;
          case "diamond": shape = <DiamondShape  size={d.size} color={color} />; break;
        }

        return (
          <div key={i} style={posStyle}>
            {shape}
          </div>
        );
      })}
    </div>
  );
}
