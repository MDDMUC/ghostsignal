import fs from "node:fs";
import path from "node:path";

// Next 16.x typegen can reference `cache-life.d.ts` but not always emit it.
// This keeps `tsc --noEmit` stable across machines/clean builds.
const root = process.cwd();
const typesDir = path.join(root, ".next", "types");
const cacheLife = path.join(typesDir, "cache-life.d.ts");

fs.mkdirSync(typesDir, { recursive: true });

if (!fs.existsSync(cacheLife)) {
  fs.writeFileSync(cacheLife, "export {};\n", "utf8");
  console.log("Wrote .next/types/cache-life.d.ts (stub)");
}

