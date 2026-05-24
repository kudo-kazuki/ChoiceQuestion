# AWSサービス全般問題集 作成引き継ぎメモ

## 目的

次セッションでは、まず `.codex/AGENTS.md` とこのファイルを読んでから作業を再開すること。

`AWSService1` は、AWS の代表的なサービス名と説明を広く学ぶための初級問題集である。
`AWSService2` は、用途からサービスを選ぶ問題、比較問題、組み合わせ問題を扱う問題集である。

特定サービスを深掘りする問題集ではなく、次のような判断ができるようになることを目的とする。

- サービス名を見て、何のためのサービスかを大まかに説明できる
- やりたいことを見て、候補となる AWS サービスを選べる
- 簡単な要件に対して、基本的なサービスの組み合わせを選べる

AWS には多数のサービスがあるため、全サービス網羅は目指さない。主要サービスに加え、AWS 学習や実務で遭遇しやすい準主要サービスまで扱う。

## 現在の実装状態

ページと問題データは次の構成で追加済み。

```txt
src/pages/aws_service/aws_service1.vue
src/pages/aws_service/aws_service2.vue
src/assets/test_questions/aws_service/aws_service1.ts
src/assets/test_questions/aws_service/aws_service2.ts
```

- ページルートは `/aws_service/aws_service1` と `/aws_service/aws_service2`。
- `aws_service1.vue` は `@/assets/test_questions/aws_service/aws_service1` を dynamic import する。
- `aws_service2.vue` は `@/assets/test_questions/aws_service/aws_service2` を dynamic import する。
- `src/pages/index.vue` のトップページカードに `AWSService1` と `AWSService2` を追加済み。
- `aws_service1.ts` はサービス名から説明を選ぶ問題のみを置く。
- `aws_service2.ts` は用途判断、比較、組み合わせ、対応関係の問題を置く。
- `src/assets/test_questions/manifest.ts` は生成物のため手編集しない。問題追加後の `npm run build` に含まれる生成処理で更新する。

## 問題集の立ち位置

`AWSService1` の難易度は Basic とする。`AWSService2` は Basic+ とし、`AWSService1` より少し判断要素のある問題を扱う。

扱う内容:

- サービスの基本的な役割
- 典型的な使いどころ
- 似たサービスとの大まかな違い
- 初歩的なサービス連携
- 用途から適切なサービスを選ぶ問題

扱わない、または深入りしない内容:

- 高度な性能チューニング
- 詳細な IAM ポリシー設計
- 複雑なネットワーク設計
- 障害時の高度な復旧戦略
- 特定サービスの専門的な設計判断

既に個別問題集がある `S3`、`DynamoDB`、`Lambda`、`CloudFront` も扱う。ただし、この問題集では「何に使うか」「何と組み合わせるか」程度に留め、個別問題集と重複する深掘りは避ける。

## 問題形式

`AWSService1` の問題文は、原則として次の形式に統一する。

- `〇〇 の説明として最も適切なものはどれですか?`

用途からサービスを選ぶ問題、複数サービスの比較問題、サービスの組み合わせ問題は `AWSService2` に置く。

`AWSService2` で中心にする問題形式は以下。

1. 用途からサービスを選ぶ問題
   - 例: 「仮想サーバーを起動して OS を管理したい。適切なサービスはどれですか?」
2. 簡単なサービス組み合わせ問題
   - 例: 「静的 Web コンテンツを保存し、世界中に高速配信したい。適切な組み合わせはどれですか?」
3. サービス比較・対応関係問題
   - 例: 「SQS、SNS、EventBridge の用途の対応関係として最も適切なものはどれですか?」

問題作成時の方針:

- サービス名の暗記だけにならないよう、用途との結び付きを重視する。
- 複数カテゴリをまたぐ連携問題は、各カテゴリの基本問題を追加した後に作る。
- 初級向けなので、専門用語や略語は必要に応じて短い補足を付ける。
- 正答だけでなく、誤答がなぜ用途に合わないのかを解説する。
- サービス名・仕様・提供状況は変更され得るため、問題追加時には AWS 公式ドキュメントで確認する。

## 出題カテゴリと対象サービス

### 1. コンピューティング

最初に作るカテゴリ。アプリケーションや処理をどこで動かすかを学ばせる。

必須:

- Amazon EC2
- AWS Lambda
- Amazon ECS
- AWS Fargate
- AWS Batch
- Amazon EC2 Auto Scaling

準主要:

- AWS Elastic Beanstalk
- AWS App Runner
- Amazon Lightsail
- Amazon EKS

出題軸:

- 仮想サーバーを自由に管理する: `EC2`
- イベントに応じた短時間のコード実行: `Lambda`
- コンテナを管理して実行する: `ECS`
- サーバー管理を抑えてコンテナを実行する: `Fargate`
- 大量・バッチ処理を実行する: `Batch`
- EC2 台数を負荷に応じて増減する: `EC2 Auto Scaling`
- Web アプリを比較的簡単に公開する: `Elastic Beanstalk` / `App Runner`
- 小規模で簡単な仮想サーバー利用: `Lightsail`

### 2. ストレージ・バックアップ

データの保存方法と、保存対象に応じた選択を扱う。

必須:

- Amazon S3
- Amazon EBS
- Amazon EFS
- S3 Glacier ストレージクラス
- AWS Backup

準主要:

- Amazon FSx
- AWS Storage Gateway
- AWS DataSync
- AWS Transfer Family
- AWS Snow Family

出題軸:

- ファイルや画像をオブジェクトとして保存する: `S3`
- EC2 に接続するディスクを用意する: `EBS`
- 複数の EC2 から共有するファイルシステム: `EFS`
- 長期間保管し、アクセス頻度が低いデータ: `S3 Glacier`
- 複数リソースのバックアップをまとめて管理する: `AWS Backup`
- Windows 系ファイルシステムなど特定用途の共有ファイル: `FSx`

### 3. データベース・キャッシュ・検索

保存するデータの形式やアクセス方法による選択を扱う。

必須:

- Amazon RDS
- Amazon Aurora
- Amazon DynamoDB
- Amazon ElastiCache
- Amazon OpenSearch Service

準主要:

- Amazon DocumentDB
- Amazon Neptune

出題軸:

- SQL を使用するリレーショナルデータベース: `RDS` / `Aurora`
- 高速なキー値アクセスを中心とした NoSQL: `DynamoDB`
- よく読むデータを一時保存して高速化する: `ElastiCache`
- ログ検索や全文検索: `OpenSearch Service`
- ドキュメント指向データベース: `DocumentDB`
- 関係性をたどるグラフデータ: `Neptune`

### 4. ネットワーク・配信・API

通信経路、名前解決、負荷分散、コンテンツ配信、API 公開を扱う。

必須:

- Amazon VPC
- Elastic Load Balancing
- Amazon Route 53
- Amazon CloudFront
- Amazon API Gateway

準主要:

- AWS Direct Connect
- AWS Site-to-Site VPN
- AWS Transit Gateway
- AWS PrivateLink
- AWS Global Accelerator

出題軸:

- AWS 上の仮想ネットワーク: `VPC`
- 複数のサーバーなどへ通信を分散する: `Elastic Load Balancing`
- DNS とドメインの名前解決: `Route 53`
- コンテンツ配信を高速化する: `CloudFront`
- HTTP API を公開・管理する: `API Gateway`
- オンプレミスと AWS を専用線で接続する: `Direct Connect`
- 複数 VPC や拠点の接続を集約する: `Transit Gateway`

### 5. 認証・セキュリティ・機密管理

アクセス許可、暗号化、証明書、機密情報、脅威対策を扱う。

必須:

- AWS Identity and Access Management (IAM)
- AWS Key Management Service (KMS)
- AWS Certificate Manager (ACM)
- AWS Secrets Manager
- AWS WAF
- AWS Shield
- Amazon GuardDuty

準主要:

- AWS IAM Identity Center
- Amazon Cognito
- Amazon Inspector
- Amazon Macie
- AWS Security Hub

出題軸:

- AWS リソースへのアクセス権限管理: `IAM`
- 暗号鍵の作成・管理: `KMS`
- TLS 証明書の管理: `ACM`
- パスワードや API キーなどの機密情報管理: `Secrets Manager`
- Web アプリへの攻撃を検知・遮断する: `WAF`
- DDoS 攻撃への保護: `Shield`
- 不審なアクティビティや脅威の検知: `GuardDuty`
- S3 などにある機密データの発見: `Macie`

### 6. メッセージング・イベント・ワークフロー

疎結合な処理、通知、イベント連携、複数ステップ処理を扱う。

必須:

- Amazon SQS
- Amazon SNS
- Amazon EventBridge
- AWS Step Functions

準主要:

- Amazon MQ

出題軸:

- メッセージをキューに保持して後で処理する: `SQS`
- 複数の購読先へ通知を配信する: `SNS`
- イベントをルールで振り分ける: `EventBridge`
- 処理の順番、分岐、待機を管理する: `Step Functions`
- 既存メッセージブローカー互換性を意識する: `Amazon MQ`

### 7. 監視・監査・運用管理

動作確認、操作履歴、構成管理、サーバー運用を扱う。

必須:

- Amazon CloudWatch
- AWS CloudTrail
- AWS Config
- AWS Systems Manager

準主要:

- AWS Trusted Advisor
- AWS Health
- Service Quotas
- AWS X-Ray

出題軸:

- ログ、メトリクス、アラーム: `CloudWatch`
- 誰がどの AWS API 操作を行ったかの記録: `CloudTrail`
- リソース設定の変更や準拠状況の確認: `AWS Config`
- EC2 管理、パッチ、パラメータ管理: `Systems Manager`
- サービス上限の確認: `Service Quotas`
- 複数サービスをまたぐ処理の追跡: `X-Ray`

### 8. インフラ構築・デプロイ

インフラ定義、ビルド、リリース、コンテナイメージ管理を扱う。

必須:

- AWS CloudFormation
- AWS CodeBuild
- AWS CodePipeline
- AWS CodeDeploy
- Amazon ECR

準主要:

- AWS Cloud Development Kit (AWS CDK)

出題軸:

- インフラ設定をテンプレートとして管理する: `CloudFormation`
- プログラミング言語でインフラを定義する: `AWS CDK`
- ソースコードをビルド・テストする: `CodeBuild`
- リリースフローを自動化する: `CodePipeline`
- アプリケーションをデプロイする: `CodeDeploy`
- コンテナイメージを保存する: `ECR`

### 9. 分析・データ処理

蓄積したデータの検索、変換、集計、可視化、ストリーム処理を扱う。

必須:

- Amazon Athena
- AWS Glue
- Amazon Redshift
- Amazon Kinesis Data Streams
- Amazon QuickSight

準主要:

- Amazon EMR
- Amazon Data Firehose
- AWS Lake Formation
- Amazon Managed Streaming for Apache Kafka (Amazon MSK)

出題軸:

- S3 上のデータを SQL で分析する: `Athena`
- データ変換やデータカタログを管理する: `Glue`
- データウェアハウスで分析する: `Redshift`
- リアルタイムに流れるデータを受け取る: `Kinesis Data Streams`
- ダッシュボードで可視化する: `QuickSight`
- Hadoop / Spark などによる大規模分散処理: `EMR`
- ストリームデータを配信先へ届ける: `Data Firehose`

### 10. AI / 機械学習・生成 AI

生成 AI、モデル開発、画像・文書・音声・文章処理を扱う。

必須:

- Amazon Bedrock
- Amazon SageMaker AI
- Amazon Rekognition
- Amazon Textract

準主要:

- Amazon Transcribe
- Amazon Translate
- Amazon Comprehend
- Amazon Lex

出題軸:

- 基盤モデルを利用して生成 AI アプリケーションを作る: `Bedrock`
- 機械学習モデルを構築・学習・デプロイする: `SageMaker AI`
- 画像や動画を分析する: `Rekognition`
- 文書画像から文字や表を抽出する: `Textract`
- 音声を文字に変換する: `Transcribe`
- 翻訳する: `Translate`
- 文章から感情や情報を分析する: `Comprehend`
- 会話型インターフェースを作る: `Lex`

### 11. 移行・ハイブリッド連携

既存環境から AWS への移行や、オンプレミスとの連携を扱う。

必須:

- AWS Database Migration Service (AWS DMS)
- AWS Application Migration Service
- AWS DataSync
- AWS Storage Gateway

準主要:

- AWS Transfer Family
- AWS Snow Family
- AWS Migration Hub

出題軸:

- データベースを移行する: `AWS DMS`
- 既存サーバーを AWS へ移行する: `Application Migration Service`
- ファイルデータを AWS へ転送する: `DataSync`
- オンプレミスからクラウドストレージを利用する: `Storage Gateway`
- SFTP などの転送プロトコルで S3 へ受け入れる: `Transfer Family`
- ネットワーク転送が難しい大量データを物理的に移送する: `Snow Family`

### 12. コスト・組織管理

複数アカウントの管理、利用料金の確認、予算管理を扱う。

必須:

- AWS Organizations
- AWS Cost Explorer
- AWS Budgets

準主要:

- AWS Control Tower
- Savings Plans
- AWS Cost and Usage Report

出題軸:

- 複数の AWS アカウントをまとめて管理する: `Organizations`
- 利用料金を分析する: `Cost Explorer`
- 予算を設定して超過を通知する: `Budgets`
- 複数アカウント環境を標準化して立ち上げる: `Control Tower`
- 一定の利用を約束して料金割引を得る: `Savings Plans`

### 13. IoT・エッジ

扱う問題数は少なめでよい。デバイスとの接続とエッジ処理の存在を知ることが目的。

対象:

- AWS IoT Core
- AWS IoT Greengrass

出題軸:

- IoT デバイスからクラウドへデータを送る: `IoT Core`
- デバイスの近くで処理を実行する: `IoT Greengrass`

### 14. メール・フロントエンド・ユーザー機能

アプリケーション利用者に近い機能を提供するサービスを扱う。問題数は少なめでよい。

対象:

- Amazon Simple Email Service (Amazon SES)
- AWS Amplify
- Amazon Cognito
- AWS AppSync

出題軸:

- メール送信: `SES`
- Web / モバイルアプリ開発支援: `Amplify`
- アプリユーザーのサインアップ・サインイン: `Cognito`
- GraphQL API を提供する: `AppSync`

## 原則として扱わないサービス分野

以下は AWS に存在すること自体を否定するものではないが、この問題集の目的では優先度が低いため、原則として出題しない。

- 量子コンピューティング
- 衛星通信
- ブロックチェーン系サービス
- ゲーム専用サービス
- エンドユーザーコンピューティング専用サービス
- メディア制作・放送に特化したサービス群
- 業界特化ソリューション
- 非常に専門性の高いセキュリティ・ネットワークサービス

## 追加順序

正式問題は以下の順でカテゴリ単位に追加する。

1. コンピューティング
2. ストレージ・バックアップ
3. データベース・キャッシュ・検索
4. ネットワーク・配信・API
5. 認証・セキュリティ・機密管理
6. メッセージング・イベント・ワークフロー
7. 監視・監査・運用管理
8. インフラ構築・デプロイ
9. 分析・データ処理
10. AI / 機械学習・生成 AI
11. 移行・ハイブリッド連携
12. コスト・組織管理
13. IoT・エッジ
14. メール・フロントエンド・ユーザー機能

初回の正式問題追加では、`src/assets/test_questions/aws_service/aws_service1.ts` のダミー問題を削除し、カテゴリ1のコンピューティング問題に置き換える。

## 問題数の目安

単一セットで全体像を学ばせるため、最終的な問題数は 120〜150 問程度を目安とする。

| 分野 | 問題数目安 |
|---|---:|
| コンピューティング | 12 |
| ストレージ・バックアップ | 12 |
| データベース・キャッシュ・検索 | 12 |
| ネットワーク・配信・API | 12 |
| 認証・セキュリティ・機密管理 | 14 |
| メッセージング・イベント・ワークフロー | 10 |
| 監視・監査・運用管理 | 10 |
| インフラ構築・デプロイ | 8 |
| 分析・データ処理 | 12 |
| AI / 機械学習・生成 AI | 10 |
| 移行・ハイブリッド連携 | 8 |
| コスト・組織管理 | 8 |
| IoT・エッジ | 4 |
| メール・フロントエンド・ユーザー機能 | 6 |

## 進め方

カテゴリごとに次の順で作業する。

1. `.codex/AGENTS.md` とこのファイルを確認する。
2. 対象カテゴリで扱うサービスと問題軸を確認する。
3. 問題を追加する前に、必要ならユーザーへ範囲を確認する。
4. 対象カテゴリの問題を `src/assets/test_questions/aws_service/aws_service1.ts` に追加する。
5. 初回カテゴリ追加時のみ、表示確認用ダミー問題を削除する。
6. `npm run build` を実行し、型・構文・マニフェスト生成を確認する。
7. ユーザーがレビュー結果を提示した場合、妥当な修正を反映してから次カテゴリへ進む。

## 品質上の注意

- 初級問題集であるため、サービスの用途を理解するうえで不要な高度設定へ踏み込みすぎない。
- ただし、誤解につながる過度な単純化は避ける。
- 略語や専門用語には、初登場時を中心に短い補足を付ける。
  - 例: `IAM（AWS リソースへのアクセス権限を管理する仕組み）`
  - 例: `SQS（メッセージキューサービス）`
  - 例: `VPC（AWS 上で仮想ネットワークを構成する仕組み）`
- 似たサービスの違いを問う場合は、比較軸を明確にする。
  - 例: `EBS` と `EFS`
  - 例: `SQS` と `SNS`
  - 例: `CloudWatch` と `CloudTrail`
  - 例: `RDS` と `DynamoDB`
- 仕様や名称が変わる可能性のあるサービスは、問題作成時点で AWS 公式ドキュメントを確認する。
