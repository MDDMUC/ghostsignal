import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

let registered = false;

/**
 * Mirrors `wearemotto.com`'s animation stack: GSAP + ScrollTrigger (+ Draggable in some modules).
 * Call once from client components before creating animations.
 */
export function ensureGsapPlugins() {
  if (registered) return;
  if (typeof window === "undefined") return;
  // Avoid TypeScript/Windows casing issues by requiring Draggable at runtime.
  // This keeps parity with Motto (GSAP Draggable) without breaking `tsc` on Windows.
  /** @type {any} */
  let DraggablePlugin;
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("gsap/Draggable");
    DraggablePlugin = mod?.Draggable ?? mod?.default ?? mod;
  } catch {
    DraggablePlugin = undefined;
  }

  if (DraggablePlugin) gsap.registerPlugin(ScrollTrigger, DraggablePlugin);
  else gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap, ScrollTrigger };

