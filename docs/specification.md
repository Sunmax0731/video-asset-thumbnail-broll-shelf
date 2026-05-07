# 仕様

## プロダクト範囲

| 項目 | 内容 |
| --- | --- |
| Rank | 3 |
| Tier | P0 |
| Score | 71 |
| Domain | WindowsApp |
| Idea No | 18 |
| Repository | video-asset-thumbnail-broll-shelf |
| Surface | Windows ローカル運用向け CLI と静的 HTML ダッシュボード |
| Integration |  |

## 主要フロー

1. ユーザーが JSON 代表データまたは実運用データを選ぶ。
2. `src/core` がシナリオ単位へ正規化する。
3. `src/validators` が必須項目、判断状態、証跡不足を判定する。
4. `src/review-model` が pass / warn / fail と次アクションを決める。
5. `src/report` が summary、item results、QCDS 参照を JSON で出力する。
6. ユーザーは docs の手順に沿って手動確認し、release evidence を確認する。

## データモデル

| Entity | Fields | Purpose |
| --- | --- | --- |
| Scenario | id, title, items, expectedSummary | 代表検証単位 |
| ReviewItem | id, title, owner, source, status, decision, evidence, notes, tags | 対象項目 |
| ValidationResult | level, code, message, field | 検証結果 |
| Report | product, generatedAt, scenarios, summary | 出力証跡 |

## 判定仕様

- 必須項目不足は `fail`。
- `pending`、`needs-review`、`blocked` または証跡不足は `warn`。
- 必須項目と証跡がそろい、許可された decision なら `pass`。
