# AGENTS

このリポジトリは `D:\AI\WindowsApp\video-asset-thumbnail-broll-shelf` に配置される WindowsApp 向けクローズドアルファです。

## 作業ルール

- 変更前に `README.md`、`AGENTS.md`、`SKILL.md`、`docs/` を確認する。
- 対象外の PICKUP アイデア、別 repo、既存作業中 repo は変更しない。
- 作業ブランチは `codex/closed-alpha-release` を 1 本だけ使い、完了時は local/remote とも `codex/*` を残さない。
- Markdown / JSON / JS / HTML / CSS / Python は UTF-8 + LF を維持する。
- QCDS は Quality、Cost、Delivery、Satisfaction を `S+ / S- / A+ / A- / B+ / B- / C+ / C- / D+ / D-` で評価する。
- 手動テスト未実施時の最高評価は原則 `S-` とする。

## 再発防止メモ

- docs ZIP、QCDS metrics、release evidence は検証や release 後に再生成されるため、`npm test` と `npm run build` 後に `git status -sb` を確認する。
- 文字化け確認は PowerShell 既定表示ではなく、Node.js UTF-8 読み込みまたは `Get-Content -Encoding UTF8` で行う。
