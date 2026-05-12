# S3問題集作成 引き継ぎメモ

## 目的

次セッションでは、まずこのファイルを読んでから作業を再開すること。

ここまでで `s3_1`（S3初級問題集）は完成扱いになった。次は `s3_2`（S3応用・高難易度問題集）を作っていく。

## 現在のS3問題集構成

S3問題集のページとデータは次の構成。

```txt
src/pages/s3/s3_1.vue
src/pages/s3/s3_2.vue
src/assets/test_questions/s3/s3_1.ts
src/assets/test_questions/s3/s3_2.ts
```

- `s3_1.vue` は `@/assets/test_questions/s3/s3_1` をdynamic importする。
- `s3_2.vue` は `@/assets/test_questions/s3/s3_2` をdynamic importする。
- `src/pages/index.vue` のトップページカードには `S3_1` と `S3_2` が追加済み。
- `src/assets/test_questions/manifest.ts` は生成物。手編集しない。

現在の問題数:

- `/s3/s3_1`: 54問
- `/s3/s3_2`: 1問

## ここまでやったこと

### S3ページ追加

以下を追加した。

- `src/pages/s3/s3_1.vue`
- `src/pages/s3/s3_2.vue`
- `src/assets/test_questions/s3/s3_1.ts`
- `src/assets/test_questions/s3/s3_2.ts`

ページは既存の `dns`、`cloudfront`、`dynamodb` と同じく `QuestionSetPage` を使う形式。

### S3_1 初級問題集

`src/assets/test_questions/s3/s3_1.ts` に初級問題を追加し、最終的に54問になった。

扱ったカテゴリ:

- S3の基本概念
    - S3とは何か
    - オブジェクトストレージ
    - バケット、オブジェクト、キー、メタデータ
    - プレフィックスとフォルダ表示
- バケット作成と基本操作
    - バケット名の一意性
    - バケットのリージョン
    - アップロード、ダウンロード、削除
    - バケット削除前に空にする必要
- アクセス制御の基礎
    - デフォルト非公開
    - IAMポリシーとバケットポリシー
    - Block Public Access
    - ACLは新規設計では基本避ける
- 静的Webサイト・公開用途
    - S3静的Webサイトホスティング
    - 公開バケットのリスク
    - CloudFrontとの組み合わせ
    - WebサイトエンドポイントとREST APIエンドポイント
- ストレージクラス
    - S3 Standard
    - S3 Standard-IA
    - S3 One Zone-IA
    - Glacier系
    - アクセス頻度、取り出し料金、最低保存期間
- バージョニング
    - 誤削除・上書きからの復旧
    - versionId
    - Delete Marker
    - 非現行バージョン
    - コスト増
    - Object Lockとの違い
- ライフサイクル管理
    - Transition
    - Expiration
    - NoncurrentVersionExpiration
    - prefix単位の管理
    - ログ、バックアップ、一時ファイルの運用
- 暗号化
    - サーバー側暗号化
    - SSE-S3
    - SSE-KMS
    - 暗号化とアクセス許可は別物
    - 2023年以降のS3デフォルト暗号化
- 署名付きURL
    - 非公開オブジェクトの一時共有
    - 有効期限
    - バケット公開との違い
- 運用・開発シナリオ
    - 画像アップロード
    - アプリログ保管
    - バックアップ置き場
    - 誤公開防止
    - 大量ファイルのキー設計
- SAA対策として追加した補完テーマ
    - リクエスト課金
    - データ転送料金
    - Strong consistency
    - Multipart Upload
    - Replication
    - Event Notifications
    - Intelligent-Tiering

### レビュー反映の進め方

問題追加後、ChatGPTレビューを受けて、妥当な指摘だけを反映した。

反映方針:

- 致命的な誤りがない場合でも、AWS公式仕様に寄せて表現を強化した。
- 初級問題でも、SAAで問われやすい引っかけを解説に入れた。
- 「暗号化とアクセス制御」「削除と削除マーカー」「移行と削除」「バケット公開と署名付きURL」など、混同しやすい対比を明確にした。
- 問題数はレビュー時には増やさず、既存問題の解説・選択肢をブラッシュアップした。
- 仕様が変わりやすい項目は公式ドキュメントを確認した。

## 問題作成時の重要ルール

`.codex/AGENTS.md` の `# 問題集の問題作成について` を必ず読むこと。

特に重要:

- 新規問題集やまとまった問題追加では、いきなり詳細問題を作らない。
- まず難易度・立ち位置に応じてジャンル・カテゴリーを洗い出す。
- ユーザーとカテゴリーを確認してから、カテゴリー単位で問題を追加する。
- 問題追加後はレビューを受け、必要なら修正してから次のカテゴリーへ進む。
- 問題文・解説は正確性最優先。
- 解説は長くなってもよい。実務での使いどころ、落とし穴、トレードオフを入れる。

## 次にやること: S3_2 応用・高難易度問題集

次セッションでは `src/assets/test_questions/s3/s3_2.ts` を育てる。

`s3_2` の立ち位置:

- S3応用・高難易度問題集
- 単純な用語確認ではなく、設計判断・トラブルシュート・他サービス連携・セキュリティ/コスト/可用性のトレードオフを扱う

次セッションで最初にやるべきこと:

1. `.codex/AGENTS.md` の問題作成方針を読む。
2. このファイル `docs/s3-question-handoff.md` を読む。
3. 既存の `src/assets/test_questions/s3/s3_2.ts` を確認する。
4. いきなり問題文を作らず、まず `s3_2` に必要なカテゴリーを洗い出す。
5. ユーザーにカテゴリー案を提示して確認する。
6. 確認後、カテゴリー単位で問題を作る。

## S3_2で扱うとよさそうなカテゴリー案

次セッションで改めて洗い出すこと。以下はたたき台。

- 高度なアクセス制御
    - バケットポリシーの条件キー
    - 明示的Deny
    - VPC Endpoint経由制限
    - クロスアカウントアクセス
    - ACL無効化とObject Ownership
- CloudFront連携
    - OAC
    - S3 REST APIオリジンとWebサイトエンドポイントの使い分け
    - HTTPS要件
    - 直接S3アクセスの遮断
    - キャッシュとS3更新の反映
- 暗号化・KMS
    - SSE-KMSの権限不足
    - KMSキーポリシー
    - Bucket Key
    - CloudTrail監査
    - クロスアカウントKMS利用
- Object Lock / コンプライアンス
    - Governance mode
    - Compliance mode
    - Legal Hold
    - WORM要件
    - バージョニングとの関係
- Replication応用
    - CRR / SRR
    - Replication Time Control
    - 既存オブジェクトのBatch Replication
    - KMS暗号化オブジェクトの複製
    - 削除マーカー複製
- ライフサイクル応用
    - NoncurrentVersionTransition
    - NoncurrentVersionExpiration
    - Glacier復元とライフサイクル
    - 最低保存期間とコスト
    - Intelligent-Tieringの詳細
- パフォーマンス・大容量処理
    - Multipart Upload
    - Transfer Acceleration
    - prefix設計
    - S3 request rate
    - 未完了Multipart Uploadの整理
- イベント駆動・連携
    - Event Notifications
    - EventBridge連携
    - Lambda/SQS/SNS
    - 重複イベント・順序保証なし
    - 画像処理・ログ処理パイプライン
- データ分析・データレイク入口
    - Athena
    - Glue Data Catalog
    - Parquet/圧縮/パーティション
    - S3 Inventory
    - Storage Lens
- コスト最適化・設計判断
    - リクエスト料金
    - データ転送料金
    - Glacier復元料金
    - Intelligent-Tiering監視料金
    - CloudFront併用

## 検証コマンド

問題データやページを変更したら、可能なら以下を実行する。

```powershell
$env:PATH = 'C:\Program Files\nodejs;' + $env:PATH; & 'C:\Program Files\nodejs\npm.cmd' run generate:question-manifest
$env:PATH = 'C:\Program Files\nodejs;' + $env:PATH; & 'C:\Program Files\nodejs\npm.cmd' run build
```

この環境では通常の `npm` がPATHにないことがあるため、上記のように `C:\Program Files\nodejs\npm.cmd` を使う。

既知のビルド警告:

- Sass `@import` 非推奨警告
- chunkサイズ警告

これらは既存由来で、今回のS3問題追加によるエラーではない。

## 参照すべきファイル

- `.codex/AGENTS.md`
- `docs/s3-question-handoff.md`
- `docs/test-question-architecture.md`
- `src/assets/test_questions/s3/s3_1.ts`
- `src/assets/test_questions/s3/s3_2.ts`
- `src/pages/s3/s3_1.vue`
- `src/pages/s3/s3_2.vue`
- `src/pages/index.vue`
- `src/assets/test_questions/manifest.ts`
