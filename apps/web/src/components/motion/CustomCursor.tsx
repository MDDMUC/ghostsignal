"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useMemo, useState } from "react";

function isTouchDevice() {
  return (
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0)
  );
}

type CursorMode = "default" | "link" | "drag";

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 420, damping: 34, mass: 0.35 });
  const ringY = useSpring(y, { stiffness: 420, damping: 34, mass: 0.35 });
  const dotX = useSpring(x, { stiffness: 900, damping: 44, mass: 0.18 });
  const dotY = useSpring(y, { stiffness: 900, damping: 44, mass: 0.18 });

  const sizes = useMemo(() => {
    if (mode === "link") return { ring: 44, dot: 8, ringOpacity: 0.55 };
    if (mode === "drag") return { ring: 64, dot: 10, ringOpacity: 0.65 };
    return { ring: 36, dot: 6, ringOpacity: 0.45 };
  }, [mode]);

  useEffect(() => {
    if (reducedMotion) return;
    if (isTouchDevice()) return;

    queueMicrotask(() => setEnabled(true));
    document.documentElement.classList.add("gs-cursor");

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onLeave = () => {
      x.set(-100);
      y.set(-100);
    };

    const classify = (target: EventTarget | null) => {
      const el = target instanceof Element ? target : null;
      if (!el) return "default" as const;
      if (el.closest('[data-cursor="drag"]')) return "drag" as const;
      if (el.closest("a,button,[role='button'],[data-cursor='link']"))
        return "link" as const;
      return "default" as const;
    };

    const onOver = (e: PointerEvent) => setMode(classify(e.target));

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", () => setMode("drag"), {
      passive: true,
    });
    window.addEventListener("pointerup", (e) => setMode(classify(e.target)), {
      passive: true,
    });
    window.addEventListener("blur", onLeave);

    return () => {
      document.documentElement.classList.remove("gs-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("blur", onLeave);
      setEnabled(false);
    };
  }, [reducedMotion, x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[2000]" aria-hidden>
      <motion.div
        className="absolute left-0 top-0 rounded-full border border-black/70 mix-blend-difference"
        style={{
          width: sizes.ring,
          height: sizes.ring,
          x: ringX,
          y: ringY,
          translateX: `-${sizes.ring / 2}px`,
          translateY: `-${sizes.ring / 2}px`,
          opacity: sizes.ringOpacity,
        }}
      />
      <motion.div
        className="absolute left-0 top-0 rounded-full bg-black mix-blend-difference"
        style={{
          width: sizes.dot,
          height: sizes.dot,
          x: dotX,
          y: dotY,
          translateX: `-${sizes.dot / 2}px`,
          translateY: `-${sizes.dot / 2}px`,
          opacity: 0.8,
        }}
      />
    </div>
  );
}
