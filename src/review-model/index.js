export function classifyReview(issues) {
  if (issues.some((issue) => issue.level === "error")) {
    return { status: "fail", nextAction: "必須項目を修正してから再実行してください。" };
  }
  if (issues.some((issue) => issue.level === "warning")) {
    return { status: "warn", nextAction: "手動確認または証跡追加後に承認してください。" };
  }
  return { status: "pass", nextAction: "closed alpha の代表条件を満たしています。" };
}
