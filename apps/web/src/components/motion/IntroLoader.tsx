"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type Props = {
  storageKey?: string;
  label?: string;
};

export function IntroLoader({
  storageKey = "gs_intro_seen_v1",
  label = "GHOST SIGNAL",
}: Props) {
  const reducedMotion = useReducedMotion();
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    try {
      const seen = window.sessionStorage.getItem(storageKey) === "1";
      if (seen) return;
      window.sessionStorage.setItem(storageKey, "1");
      queueMicrotask(() => setShow(true));
    } catch {
      queueMicrotask(() => setShow(true));
    }
  }, [reducedMotion, storageKey]);

  useEffect(() => {
    if (!show) return;
    const t = window.setTimeout(() => setLeaving(true), 1550);
    return () => window.clearTimeout(t);
  }, [show]);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[1000] origin-top bg-white"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: leaving ? 0 : 1 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={() => {
        if (leaving) setShow(false);
      }}
      aria-hidden
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_30%,rgba(0,0,0,0.06),transparent_62%)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle,rgba(0,0,0,0.18)_1px,transparent_1px)] [background-size:14px_14px]" />
      </div>

      <div className="relative flex h-full items-center justify-center px-6">
        <div className="max-w-2xl text-center text-black">
          <motion.p
            className="text-[11px] font-semibold tracking-[0.45em] text-black/60"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {label}
          </motion.p>

          <motion.h1
            className="mt-8 text-balance text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.05,
            }}
          >
            Values-based advertising.
            <br />
            Cinematic delivery.
          </motion.h1>

          <motion.div
            className="mx-auto mt-10 h-[2px] w-40 overflow-hidden rounded bg-black/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.22 }}
          >
            <motion.div
              className="h-full bg-black/70"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                repeat: 1,
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
