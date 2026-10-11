"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

// Staggered reveal (Declut's list pattern): a StaggerGroup's StaggerItems rise in one after another,
// either when the group scrolls into view or, with trigger="load", straight away (hero).
type Tag = "div" | "ul" | "li" | "article" | "figure";

const groupVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function StaggerGroup({
  children,
  className,
  as = "div",
  trigger = "view",
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
  trigger?: "view" | "load";
}) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const Comp = motion[as];
  return (
    <Comp
      variants={groupVariants}
      initial="hidden"
      {...(trigger === "load"
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once: true, amount: 0.2 } })}
      className={className}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
}) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const Comp = motion[as];
  return (
    <Comp variants={itemVariants} className={className}>
      {children}
    </Comp>
  );
}
