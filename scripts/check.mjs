import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../public/", import.meta.url));
const html = await readFile(resolve(root, "index.html"), "utf8");
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, "HTML IDs must be unique");
for (const [, destination] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
  if (destination.startsWith("#")) {
    assert(
      ids.includes(destination.slice(1)),
      `Missing section: ${destination}`,
    );
  } else if (!/^(https?:|mailto:)/.test(destination)) {
    assert(
      (await stat(resolve(root, destination.replace(/^\//, "")))).isFile(),
      `Missing asset: ${destination}`,
    );
  }
}
assert(
  !/https?:[^"']+\.(?:js|css|ttf|woff)/.test(html),
  "Runtime assets must be self-hosted",
);
assert(html.includes("https://golane.ai/"), "Canonical URL must use golane.ai");
assert(
  html.includes("mailto:support@golane.ai"),
  "Contact must use the approved address",
);
assert(
  (await stat(resolve(root, "assets/social-card.png"))).isFile(),
  "Social preview image must exist",
);
console.log(
  "Static assets, section links, metadata, and contact checks passed.",
);
