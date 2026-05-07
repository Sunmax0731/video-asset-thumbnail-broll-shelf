import fs from "node:fs";
import path from "node:path";
import { productConfig } from "../product-config.js";
import { runRepresentativeSuite } from "../core/index.js";
import { buildReport } from "../report/index.js";

function getArg(name, fallback) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

const inputPath = getArg("--input", "samples/representative-suite.json");
const outputPath = getArg("--output", "dist/report.json");
const suite = JSON.parse(fs.readFileSync(inputPath, "utf8"));
const result = buildReport(runRepresentativeSuite(suite, productConfig), productConfig);
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(result, null, 2) + "\n", "utf8");
console.log(JSON.stringify({ outputPath, summary: result.summary, scenarios: result.scenarios.length }, null, 2));
