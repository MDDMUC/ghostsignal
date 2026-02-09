import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const srcDir = path.join(root, "src");
const publicDir = path.join(root, "public");

const args = new Set(process.argv.slice(2));
const writeManifest = args.has("--write-manifest");
const check = args.has("--check") || (!writeManifest && !args.has("--no-check"));

const EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".css"]);

function walk(dir) {
  /** @type {string[]} */
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(full));
    else if (ent.isFile()) out.push(full);
  }
  return out;
}

function toPosix(p) {
  return p.split(path.sep).join("/");
}

function extractPublicPaths(fileText) {
  /** @type {Set<string>} */
  const found = new Set();

  // Quote-delimited absolute public paths like "/images/..." "/lottie/..."
  // Intentionally only tracks assets that *should* live under public/.
  const quoted = /["'`]\s*(\/(?:images|brand|lottie|models|textures)\/[^"'`)\s]+)\s*["'`]/g;
  let m;
  while ((m = quoted.exec(fileText))) {
    const p = m[1];
    if (p.startsWith("//")) continue;
    if (p.startsWith("/http")) continue;
    found.add(p);
  }

  // CSS url(/images/...) url("/images/...")
  const cssUrl =
    /url\(\s*(?:"|')?(\/(?:images|brand|lottie|models|textures)\/[^"')\s]+)(?:"|')?\s*\)/g;
  while ((m = cssUrl.exec(fileText))) found.add(m[1]);

  return found;
}

function main() {
  if (!fs.existsSync(srcDir)) {
    console.error(`Missing src dir: ${srcDir}`);
    process.exitCode = 2;
    return;
  }
  if (!fs.existsSync(publicDir)) {
    console.error(`Missing public dir: ${publicDir}`);
    process.exitCode = 2;
    return;
  }

  const files = walk(srcDir).filter((f) => EXTS.has(path.extname(f)));

  /** @type {Map<string, Set<string>>} */
  const assetToRefs = new Map(); // publicPath -> Set<relativeSourceFile>

  for (const f of files) {
    const rel = toPosix(path.relative(root, f));
    const text = fs.readFileSync(f, "utf8");
    const paths = extractPublicPaths(text);
    for (const p of paths) {
      if (!assetToRefs.has(p)) assetToRefs.set(p, new Set());
      assetToRefs.get(p).add(rel);
    }
  }

  const assets = [...assetToRefs.keys()].sort((a, b) => a.localeCompare(b));
  const missing = [];

  for (const p of assets) {
    const onDisk = path.join(publicDir, p.replace(/^\//, ""));
    if (!fs.existsSync(onDisk)) missing.push(p);
  }

  if (writeManifest) {
    const manifestPath = path.join(publicDir, "assets.manifest.json");
    const payload = {
      generatedAt: new Date().toISOString(),
      count: assets.length,
      assets,
    };
    fs.writeFileSync(manifestPath, JSON.stringify(payload, null, 2) + "\n", "utf8");
    console.log(`Wrote ${path.relative(root, manifestPath)} (${assets.length} entries)`);
  }

  if (missing.length > 0) {
    console.error(`Missing public assets (${missing.length}):`);
    for (const p of missing) {
      const refs = [...(assetToRefs.get(p) ?? [])].slice(0, 5);
      const suffix = refs.length > 0 ? ` (referenced by: ${refs.join(", ")})` : "";
      console.error(`- ${p}${suffix}`);
    }
    process.exitCode = check ? 1 : 0;
  } else {
    console.log(`OK: ${assets.length} referenced public assets exist.`);
  }
}

main();

