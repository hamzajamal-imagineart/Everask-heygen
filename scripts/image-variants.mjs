// Responsive image variants (performance pass, 21 Oct): for every WebP under public/assets/{heygen,mag,topaz}
// wider than a target, write `<name>-640w.webp` / `<name>-1280w.webp` beside it and record them in
// lib/image-variants.json, which lib/responsive.ts turns into srcset strings. Re-run after adding images:
//   node scripts/image-variants.mjs
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const DIRS = ["heygen", "mag", "topaz"].map((d) => path.join(ROOT, "public/assets", d));
const TARGETS = [640, 1280];
const manifest = {};
const files = [];
const walk = (d) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (p.endsWith(".webp") && !/-(640|1280)w\.webp$/.test(p)) files.push(p);
  }
};
DIRS.forEach(walk);
for (const f of files) {
  const { width, height } = await sharp(f).metadata();
  const variants = [];
  for (const w of TARGETS) {
    if (width < w * 1.1) continue; // not worth a variant
    const out = f.replace(/\.webp$/, `-${w}w.webp`);
    if (!fs.existsSync(out)) await sharp(f).resize({ width: w }).webp({ quality: /-before\./.test(f) ? 70 : 78, effort: 5 }).toFile(out);
    variants.push(["/" + path.relative(path.join(ROOT, "public"), out).split(path.sep).join("/"), w]);
  }
  if (variants.length) manifest["/" + path.relative(path.join(ROOT, "public"), f).split(path.sep).join("/")] = { w: width, h: height, variants };
}
fs.writeFileSync(path.join(ROOT, "lib/image-variants.json"), JSON.stringify(manifest, null, 0) + "\n");
console.log(`${files.length} images, ${Object.keys(manifest).length} with variants`);
