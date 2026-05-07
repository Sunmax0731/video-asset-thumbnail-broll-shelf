# 設計

## 選択肢

| Option | 内容 | 評価 |
| --- | --- | --- |
| A | フル GUI アプリとして作る | 初期実装と配布準備が重く、20 repo 同時の closed alpha には過剰 |
| B | CLI + 代表 JSON + 静的 UI/host adapter | ローカル検証、docs ZIP、release asset を揃えやすい |
| C | docs のみで実装を後回しにする | 自動テストと代表シナリオの完了条件を満たせない |

## 採用

Option B を採用する。理由は、WindowsApp の実運用へ接続できる責務分割を保ちながら、closed alpha で必要な検証、導入手順、手動テスト、QCDS 証跡を短いループで確認できるため。

## UI/UX 方針

- 最初の画面または CLI 出力で、対象、状態、警告、次アクションを確認できる。
- 破壊的操作は実装しない。closed alpha は読み取り、検証、レポート出力に限定する。
- 手動確認者が迷わないよう、manual-test と strict addendum に具体的な入力、操作、期待結果を残す。
