# テスト計画

## 自動テスト

作業ディレクトリ:

```powershell
cd D:\AI\WindowsApp\video-asset-thumbnail-broll-shelf
npm test
npm run validate
npm run build
```

## 代表シナリオ

- happy-path: 1 pass / 0 warn / 0 fail
- missing-required: 0 pass / 0 warn / 1 fail
- warning: 0 pass / 1 warn / 0 fail
- mixed-batch: 1 pass / 1 warn / 1 fail

## Codex 側確認

- 代表シナリオの期待結果と実測を `tests/product.test.mjs` で照合する。
- 必須 docs、QCDS metrics、release checklist、manual test docs の存在と文字化けを確認する。
- `npm run validate` で `dist/video-asset-thumbnail-broll-shelf-representative-report.json` を生成する。
- `npm run build` で docs ZIP を生成する。

## 手動テスト

Codex 側では手動テスト未実施。ユーザー実施項目は `docs/manual-test.md` と `docs/strict-manual-test-addendum.md` を参照する。
