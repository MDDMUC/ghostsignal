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

  // Motto uses CustomEase + a specific "snappy" curve:
  // CustomEase.create("snappy","M0,0 C0.094,0.026 0.124,0.127 0.157,0.29 0.197,0.486 0.254,0.8 0.348,0.884 0.42,0.949 0.374,1 1,1");
  /** @type {any} */
  let CustomEasePlugin;
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("gsap/CustomEase");
    CustomEasePlugin = mod?.CustomEase ?? mod?.default ?? mod;
  } catch {
    CustomEasePlugin = undefined;
  }

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

  if (CustomEasePlugin && DraggablePlugin)
    gsap.registerPlugin(ScrollTrigger, DraggablePlugin, CustomEasePlugin);
  else if (CustomEasePlugin) gsap.registerPlugin(ScrollTrigger, CustomEasePlugin);
  else if (DraggablePlugin) gsap.registerPlugin(ScrollTrigger, DraggablePlugin);
  else gsap.registerPlugin(ScrollTrigger);

  // Ensure "snappy" exists (matches Motto).
  if (CustomEasePlugin?.create) {
    try {
      CustomEasePlugin.create(
        "snappy",
        "M0,0 C0.094,0.026 0.124,0.127 0.157,0.29 0.197,0.486 0.254,0.8 0.348,0.884 0.42,0.949 0.374,1 1,1",
      );
    } catch {
      // Ignore if it already exists or plugin isn't fully available.
    }
  }
  registered = true;
}

export { gsap, ScrollTrigger };

