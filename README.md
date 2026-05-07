# 映像素材リンク・サムネイル・Bロール棚

video-asset-thumbnail-broll-shelf は、WindowsApp 領域の NON PICKUP Rank 3 アイデアをクローズドアルファとして実装したローカルファーストの検証ツールです。

## 目的

素材が増えるとリンク切れ、重複、未使用候補、Bロール探しに時間がかかる。

このリポジトリでは、映像、音声、画像、AEコンポのリンク監査、プロキシ、サムネイル、尺、Bロール候補、使用済み状態を一覧する。 ための入力正規化、代表シナリオ検証、レビュー判断、レポート出力、導入・手動テスト手順、QCDS 証跡を一式で管理します。

## クローズドアルファ範囲

- 中核ロジック: `src/core`
- 入力検証: `src/validators`
- レポート生成: `src/report`
- 判断モデル: `src/review-model`
- CLI: `src/cli`
- ホスト/UI adapter: `public/index.html`
- 代表サンプル: `samples/representative-suite.json`

## 実行

```powershell
npm test
npm run validate
npm run build
```

## 公開位置づけ

- Version: v0.1.0-alpha.1
- GitHub prerelease: closed alpha
- 手動テスト: Codex 側では未実施。ユーザー実施用の手順は `docs/manual-test.md` と `docs/strict-manual-test-addendum.md` に記録。
- 主な公開先: GitHub Release / BOOTH

## 差別化

素材の所在、見た目、用途、使用履歴を同じ棚で管理する。
