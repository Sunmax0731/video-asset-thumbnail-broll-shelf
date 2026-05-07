import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";
import { productConfig } from "../src/product-config.js";

const repo = productConfig.product.repository;
const dist = path.resolve("dist");
const staging = path.join(os.tmpdir(), `${repo}-docs-stage`);
const zipPath = path.join(dist, `${repo}-docs.zip`);
fs.rmSync(staging, { recursive: true, force: true });
fs.mkdirSync(path.join(staging, "docs"), { recursive: true });
fs.mkdirSync(dist, { recursive: true });
for (const file of ["README.md", "AGENTS.md", "SKILL.md", "package.json"]) {
  fs.copyFileSync(file, path.join(staging, file));
}
function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dst, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}
copyDir("docs", path.join(staging, "docs"));
fs.rmSync(zipPath, { force: true });
execFileSync("powershell", ["-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", `Compress-Archive -Path '${staging.replace(/'/g, "''")}\\*' -DestinationPath '${zipPath.replace(/'/g, "''")}' -Force`], { stdio: "inherit" });
console.log(JSON.stringify({ zipPath }, null, 2));
