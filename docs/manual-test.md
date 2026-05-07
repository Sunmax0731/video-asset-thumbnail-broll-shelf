# 手動テスト

Codex 側では手動テスト未実施です。以下はユーザー実施用の手順です。

## 前提

- 作業ディレクトリ: `D:\AI\WindowsApp\video-asset-thumbnail-broll-shelf`
- Node.js: `node --version` で確認
- 入力データ: `samples/representative-suite.json`

## 手順

1. `npm test` を実行し、4 つの代表シナリオが合格することを確認する。
2. `npm run validate` を実行し、`dist/video-asset-thumbnail-broll-shelf-representative-report.json` が生成されることを確認する。
3. レポート JSON を開き、happy-path、missing-required、warning、mixed-batch の summary が期待値通りであることを確認する。
4. public/index.html をブラウザで開き、主要な説明と操作導線が表示されることを確認する。
5. `docs/release-evidence.json` を開き、GitHub release URL、asset 3 件、main...origin/main clean、codex branch なしが記録されていることを確認する。

## 期待結果

- 手動確認者が入力、検証、結果、release asset の位置を迷わず追える。
- 手動テスト未実施の状態では QCDS の最高評価が S- を超えていない。
