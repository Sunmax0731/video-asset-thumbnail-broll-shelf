# 責務分割

| Path | Responsibility |
| --- | --- |
| src/core | シナリオ実行、summary 集計、代表データ処理 |
| src/validators | 必須項目、状態、証跡、decision の検証 |
| src/review-model | pass / warn / fail と nextAction の判断 |
| src/report | レポート JSON の生成 |
| src/cli | CLI 入出力、dist 出力 |
| samples | 代表シナリオ |
| tests | 自動検証 |
| docs | 要件、仕様、設計、QCDS、release evidence |
| extension / public / src/host-adapter | プロダクト別 UI または host adapter |
