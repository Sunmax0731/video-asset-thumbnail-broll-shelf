# Traceability Matrix

| Requirement | Implementation | Test | Docs |
| --- | --- | --- | --- |
| FR-1 入力取り込み | src/cli, src/core | happy-path | user-guide, manual-test |
| FR-2 一覧/状態確認 | src/report | all scenarios | specification |
| FR-3 中核処理 | src/core, validators | happy-path, mixed-batch | design |
| FR-4 結果/判断/履歴 | src/report, dist report | validate script | release-evidence |
| FR-5 失敗/警告復旧 | review-model | missing-required, warning | strict-manual-test-addendum |
| QCDS A- 以上 | qcds metrics | product.test.mjs | qcds-evaluation, gap-analysis |
| Release asset | build-docs-zip | release verification | release-checklist |
