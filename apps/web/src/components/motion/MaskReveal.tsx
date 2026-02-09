"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  radiusPx?: number;
};

export function MaskReveal({
  children,
  className,
  delay = 0,
  once = true,
  radiusPx = 28,
}: Props) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return <div className={className}>{children}</div>;

  // Motto-style: content appears as if unmasked from below, with a soft eased curve.
  const r = `${radiusPx}px`;

  return (
    <motion.div
      className={className}
      initial={{ clipPath: `inset(0 0 100% 0 round ${r})`, opacity: 1 }}
      whileInView={{ clipPath: `inset(0 0 0% 0 round ${r})`, opacity: 1 }}
      viewport={{ once, amount: 0.35 }}
      transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

