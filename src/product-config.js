export const productConfig = {
  "product": {
    "rank": 3,
    "tier": "P0",
    "score": 71,
    "domain": "WindowsApp",
    "ideaNo": 18,
    "ideaName": "映像素材リンク・サムネイル・Bロール棚",
    "repository": "video-asset-thumbnail-broll-shelf",
    "publish": "GitHub Release / BOOTH",
    "priorityReason": "映像素材の所在、サムネイル、用途管理は既存メディア検品ツールの後続価値が高い。",
    "surface": "Windows ローカル運用向け CLI と静的 HTML ダッシュボード",
    "integration": "",
    "overview": "映像、音声、画像、AEコンポのリンク監査、プロキシ、サムネイル、尺、Bロール候補、使用済み状態を一覧する。",
    "problem": "素材が増えるとリンク切れ、重複、未使用候補、Bロール探しに時間がかかる。",
    "differentiation": "素材の所在、見た目、用途、使用履歴を同じ棚で管理する。",
    "adobeHost": null,
    "adobeHostReason": null
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
