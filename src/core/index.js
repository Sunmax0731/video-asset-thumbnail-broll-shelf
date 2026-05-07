import { validateItem } from "../validators/index.js";
import { classifyReview } from "../review-model/index.js";

export function evaluateScenario(scenario, config) {
  const results = scenario.items.map((item) => {
    const issues = validateItem(item, config);
    const review = classifyReview(issues);
    return {
      id: item.id,
      title: item.title,
      status: review.status,
      nextAction: review.nextAction,
      issues
    };
  });

  const summary = summarize(results);
  return {
    id: scenario.id,
    title: scenario.title,
    summary,
    expectedSummary: scenario.expectedSummary,
    matchedExpected: JSON.stringify(summary) === JSON.stringify(scenario.expectedSummary),
    results
  };
}

export function runRepresentativeSuite(suite, config) {
  const scenarios = suite.scenarios.map((scenario) => evaluateScenario(scenario, config));
  return {
    product: config.product.repository,
    generatedAt: new Date().toISOString(),
    scenarios,
    summary: summarize(scenarios.flatMap((scenario) => scenario.results))
  };
}

function summarize(results) {
  return results.reduce((acc, result) => {
    acc[result.status] += 1;
    return acc;
  }, { pass: 0, warn: 0, fail: 0 });
}
