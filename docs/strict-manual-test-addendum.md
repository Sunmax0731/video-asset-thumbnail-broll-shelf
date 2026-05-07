# Strict Manual Test Addendum

Codex 側では手動テスト未実施です。ユーザーが実施する追加確認です。

## 厳格確認項目

1. Release ページで `v0.1.0-alpha.1` が prerelease であり latest ではないことを確認する。
2. Asset が 3 件で、`dist/video-asset-thumbnail-broll-shelf-docs.zip`、`manual-test.md`、`strict-manual-test-addendum.md` があることを確認する。
3. docs ZIP を展開し、README、導入手順、ユーザーガイド、QCDS、security/privacy、traceability、release evidence が読めることを確認する。
4. 代表シナリオ以外の小さな実データを 1 件追加し、warn または pass の判断が妥当か確認する。
5. 文字化け断片が UI 表示、Markdown、JSON に残っていないことを確認する。
