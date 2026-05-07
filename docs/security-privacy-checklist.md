# Security / Privacy Checklist

- [x] closed alpha 実装はローカル JSON を入力とし、外部送信しない。
- [x] credentials、tokens、private paths をサンプルに含めない。
- [x] release asset は docs ZIP、manual test docs、strict addendum に限定。
- [x] 入力 source は文字列として扱い、破壊的なファイル操作をしない。
- [x] 手動テストで実データを使う場合の確認項目を明記。
- [ ] 実ホスト連携を追加する前に permission scope を再評価。
