"use client";

import { motion, useAnimation, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type Props = {
  className?: string;
  label?: string;
};

export function RouteWipe({ className, label = "GHOST SIGNAL" }: Props) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const controls = useAnimation();
  const prev = useRef<string | null>(null);
  const running = useRef(false);

  useEffect(() => {
    // First render: only set baseline.
    if (prev.current === null) {
      prev.current = pathname;
      return;
    }

    if (prev.current === pathname) return;
    prev.current = pathname;
    if (reducedMotion) return;
    if (running.current) return;

    running.current = true;

    (async () => {
      // Quick wipe-in, then wipe-out. Mimics "curtain" transitions.
      await controls.start({
        scaleY: 1,
        transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
      });
      await sleep(90);
      await controls.start({
        scaleY: 0,
        transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
      });
      running.current = false;
    })().catch(() => {
      running.current = false;
    });
  }, [controls, pathname, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <motion.div
      className={[
        "pointer-events-none fixed inset-0 z-[999] origin-top bg-black",
        className ?? "",
      ].join(" ")}
      initial={{ scaleY: 0 }}
      animate={controls}
      aria-hidden
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="text-[11px] font-semibold tracking-[0.4em] text-white/70">
            {label}
          </p>
          <p className="mt-3 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            {pathname === "/" ? "Home" : pathname.replace("/", "")}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

