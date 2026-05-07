import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { productConfig } from "../src/product-config.js";
import { runRepresentativeSuite } from "../src/core/index.js";

const suite = JSON.parse(fs.readFileSync("samples/representative-suite.json", "utf8"));
const result = runRepresentativeSuite(suite, productConfig);

for (const scenario of result.scenarios) {
  assert.deepEqual(scenario.summary, scenario.expectedSummary, `${scenario.id} summary should match expected`);
  assert.equal(scenario.matchedExpected, true, `${scenario.id} should be marked as matched`);
}

const requiredDocs = [
  "README.md",
  "AGENTS.md",
  "SKILL.md",
  "docs/requirements.md",
  "docs/specification.md",
  "docs/design.md",
  "docs/implementation-plan.md",
  "docs/test-plan.md",
  "docs/manual-test.md",
  "docs/installation-guide.md",
  "docs/user-guide.md",
  "docs/release-checklist.md",
  "docs/responsibility-map.md",
  "docs/ui-ux-polish.md",
  "docs/post-mvp-roadmap.md",
  "docs/competitive-benchmark.md",
  "docs/evaluation-criteria.md",
  "docs/qcds-evaluation.md",
  "docs/qcds-remote-benchmark.md",
  "docs/qcds-strict-gap-analysis.md",
  "docs/qcds-strict-metrics.json",
  "docs/qcds-regression-baseline.json",
  "docs/security-privacy-checklist.md",
  "docs/traceability-matrix.md",
  "docs/strict-manual-test-addendum.md",
  "docs/source-idea-pack.json",
  "docs/release-evidence.json",
  "docs/releases/v0.1.0-alpha.1.md"
];
for (const file of requiredDocs) {
  assert.equal(fs.existsSync(file), true, `${file} should exist`);
}

const metrics = JSON.parse(fs.readFileSync("docs/qcds-strict-metrics.json", "utf8"));
assert.equal(metrics.manualTestStatus, "手動テスト未実施");
assert.equal(metrics.manualTestUpperBound, "S-");
assert.equal(metrics.allRatingsAtLeastAMinus, true);
assert.deepEqual(metrics.ratings, { Quality: "S-", Cost: "S-", Delivery: "S-", Satisfaction: "S-" });

const textExtensions = new Set([".md", ".json", ".js", ".mjs", ".html", ".css", ".py"]);
const mojibakeFragments = [0x7e67, 0x90e2, 0x9aeb, 0xfffd].map((codePoint) => String.fromCodePoint(codePoint));
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if ([".git", "node_modules", "dist"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!textExtensions.has(path.extname(entry.name))) continue;
    const text = fs.readFileSync(full, "utf8");
    for (const fragment of mojibakeFragments) {
      assert.equal(text.includes(fragment), false, `${full} contains mojibake fragment ${fragment}`);
    }
  }
}
walk(".");

if (productConfig.product.domain === "ChromeExtension") {
  const manifest = JSON.parse(fs.readFileSync("extension/manifest.json", "utf8"));
  assert.equal(manifest.manifest_version, 3);
  assert.equal(Boolean(manifest.action?.default_popup), true);
}

console.log(JSON.stringify({ product: productConfig.product.repository, scenarios: result.scenarios.length, summary: result.summary }, null, 2));
