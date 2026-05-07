export function validateItem(item, config) {
  const issues = [];
  for (const field of config.validation.requiredFields) {
    const value = item[field];
    if (value === undefined || value === null || value === "" || (Array.isArray(value) && value.length === 0 && field !== "evidence")) {
      issues.push({ level: "error", code: "missing-required", field, message: `${field} is required.` });
    }
  }

  if (item.decision && !config.validation.acceptedDecisions.includes(item.decision)) {
    issues.push({ level: "error", code: "invalid-decision", field: "decision", message: `Unsupported decision: ${item.decision}` });
  }

  if (config.validation.warningStatuses.includes(item.status)) {
    issues.push({ level: "warning", code: "needs-human-review", field: "status", message: `Status ${item.status} requires human review.` });
  }

  if (!Array.isArray(item.evidence) || item.evidence.length === 0) {
    issues.push({ level: "warning", code: "missing-evidence", field: "evidence", message: "Evidence is recommended for closed alpha review." });
  }

  return issues;
}
