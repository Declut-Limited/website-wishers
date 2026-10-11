"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

// Gentle endless bob (Declut's hero badges): GSAP yoyos the element up or down by `distance` px.
// GSAP writes `transform`; Tailwind v4's rotate-* uses the separate `rotate` property, so tilts stay.
export default function Float({
  children,
  className,
  distance = 10,
  duration = 2.4,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: distance,
        duration,
        delay,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, [prefersReducedMotion, distance, duration, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
