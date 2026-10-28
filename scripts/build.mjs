import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const source = fileURLToPath(new URL("../public/", import.meta.url));
const destination = fileURLToPath(new URL("../dist/", import.meta.url));
const siteUrl = new URL(process.env.SITE_URL || "https://golane.ai/");
if (
  !["https:", "http:"].includes(siteUrl.protocol) ||
  siteUrl.username ||
  siteUrl.password ||
  siteUrl.search ||
  siteUrl.hash
) {
  throw new Error(
    "SITE_URL must be an HTTP(S) URL without credentials, query, or fragment",
  );
}
siteUrl.pathname = siteUrl.pathname.replace(/\/*$/, "/");
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true });
for (const file of ["index.html", "robots.txt", "sitemap.xml"]) {
  const path = resolve(destination, file);
  const content = await readFile(path, "utf8");
  await writeFile(path, content.replaceAll("https://golane.ai/", siteUrl.href));
}
console.log(`Built static site → dist/ (${siteUrl.href})`);
