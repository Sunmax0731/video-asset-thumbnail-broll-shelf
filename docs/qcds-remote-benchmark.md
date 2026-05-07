# QCDS Remote Benchmark

## 採用した水準

- 代表シナリオを固定し、期待結果と実測を自動テストで照合する。
- metrics JSON、regression baseline、traceability、security/privacy、release evidence をそろえる。
- release asset と docs ZIP は存在だけでなく、release evidence と紐づける。
- 手動テスト未実施を評価上限に反映する。

## 今回の適用

対象 repo では、ファイル存在だけで S 評価にせず、実装、docs、テスト、release evidence をまとめて評価しました。
