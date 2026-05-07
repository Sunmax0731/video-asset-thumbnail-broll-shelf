export function buildReport(suiteResult, config) {
  return {
    product: config.product,
    qcds: config.qcds,
    manualTestStatus: "手動テスト未実施",
    ...suiteResult
  };
}
