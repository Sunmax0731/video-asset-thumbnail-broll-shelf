# リリースチェックリスト

## 自動検証

- [x] `npm test`
- [x] `npm run validate`
- [x] `npm run build`
- [x] docs ZIP 生成
- [x] QCDS metrics 生成
- [x] release evidence 作成

## GitHub prerelease

- [x] GitHub public repo 作成
- [x] `v0.1.0-alpha.1` prerelease 作成
- [x] `--prerelease --latest=false` を使用
- [x] release body は `docs/releases/v0.1.0-alpha.1.md`
- [x] asset 3 件を添付

## 手動確認

- [ ] ユーザーによる手動テスト
- [ ] 実データでの表示確認
- [ ] BOOTH / Chrome Web Store など公開先向け説明文と画像の確認

## 注意

Codex 側では手動テスト未実施。QCDS の最高評価は S- に制限しています。
