# SKILL

video-asset-thumbnail-broll-shelf の作業手順です。

## 参照順序

1. `README.md`
2. `docs/source-idea-pack.json`
3. `docs/requirements.md`
4. `docs/specification.md`
5. `docs/design.md`
6. `samples/representative-suite.json`

## 実装検証

```powershell
npm test
npm run validate
npm run build
```

## リリース検証

- `docs/releases/v0.1.0-alpha.1.md` を release body に使う。
- asset は `dist/video-asset-thumbnail-broll-shelf-docs.zip`、`docs/manual-test.md`、`docs/strict-manual-test-addendum.md`。
- release 後は `docs/release-evidence.json` を更新し、docs ZIP を再生成して asset を再アップロードする。
