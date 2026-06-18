import { rmSync, existsSync } from "node:fs";
import { join } from "node:path";

const targets = [".next", join(".next", "cache", "images")];

for (const target of targets) {
  if (existsSync(target)) {
    rmSync(target, { recursive: true, force: true });
    console.log(`Removed ${target}`);
  }
}

console.log("Next.js and image cache cleared.");
