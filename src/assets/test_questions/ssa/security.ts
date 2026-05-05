import type { Question } from '@/types/test_questions'

export const securityQuestions: Question[] = [
  {
    question:
      "EC2インスタンス上で稼働するアプリケーションから、同一アカウント内のS3バケットにアクセスする必要があります。セキュリティのベストプラクティスに沿った認証方法はどれですか?",
    options: [
      {
        text: "IAMユーザーのアクセスキーをEC2内の設定ファイルに保存する",
        isCorrect: false,
        explanation:
          "IAMユーザー（人やアプリケーションに紐づく恒久的なID）のアクセスキー（長期認証情報）をインスタンス内に保存することは漏洩リスクが高く、ローテーションも煩雑になるためAWSは非推奨としています。",
      },
      {
        text: "S3バケットをパブリック読み書き可能にする",
        isCorrect: false,
        explanation:
          "パブリック公開は不特定多数からのアクセスを許可することになり、重大なセキュリティインシデントの原因となります。",
      },
      {
        text: "EC2インスタンスに適切な権限を付与したIAMロールをアタッチする",
        isCorrect: true,
        explanation:
          "IAMロール（AWSサービス等が一時的に引き受ける権限セット）をEC2にアタッチすると、インスタンスメタデータサービス（EC2内から169.254.169.254で参照できる内部エンドポイント）経由で一時認証情報が自動付与・ローテーションされます。アクセスキーを保存する必要がなく、最小権限の原則も適用しやすいベストプラクティスです。",
      },
      {
        text: "ルートアカウントのアクセスキーをアプリケーションに設定する",
        isCorrect: false,
        explanation:
          "ルートアカウント（AWSアカウント作成時のメールアドレスに紐づく最上位ユーザー）は全権限を持つため、日常運用での使用はAWSが強く禁じており、ルートのアクセスキーは作成自体を避けるべきです。",
      },
    ],
    explanation:
      "EC2にIAMロールをアタッチする構成はSAA試験で頻出です。EKS/ECSではIRSA（IAM Roles for Service Accounts、Pod単位でロールを割り当て）やタスクロール、Lambdaでは実行ロールと、サービスごとの対応するロール機構も押さえておきましょう。",
  },
  {
    question:
      "コンプライアンス要件として、S3に保存するデータを保管時暗号化し、暗号鍵の使用履歴を監査可能にする必要があります。最も適切な方式はどれですか?",
    options: [
      {
        text: "SSE-S3 (Amazon S3マネージドキーによるサーバーサイド暗号化)",
        isCorrect: false,
        explanation:
          "SSE-S3（S3が内部で鍵を管理して保存時に自動暗号化する方式）ではAWSが鍵を完全管理するため、個別の鍵使用ログを取得することはできず、監査要件を満たしにくいです。",
      },
      {
        text: "SSE-KMS (AWS KMSマネージドキーによるサーバーサイド暗号化)",
        isCorrect: true,
        explanation:
          "SSE-KMS（AWS KMS = Key Management Serviceで管理された鍵を使う暗号化方式）ではKMSキーの使用履歴がCloudTrail（AWSのAPI呼び出し監査ログサービス）に記録され、誰がいつ暗号/復号に鍵を使用したかを監査できます。キーローテーションやアクセスポリシーも細かく制御可能です。",
      },
      {
        text: "暗号化は行わず、S3バケットポリシーでアクセス制限のみ行う",
        isCorrect: false,
        explanation:
          "アクセス制御と保管時暗号化は別要件です。保管時暗号化要件を満たせません。",
      },
      {
        text: "バケットをパブリックに設定しつつ、オブジェクトにパスワードを付与する",
        isCorrect: false,
        explanation:
          "パブリック公開は情報漏洩リスクが極めて高く、そもそもコンプライアンス要件に反します。",
      },
    ],
    explanation:
      "SSE-KMSはCloudTrailによる鍵使用監査、きめ細かなキーポリシー、カスタマー管理キー（Customer Managed Key、利用者が作成・ポリシー制御するKMSキー）のローテーションなど、監査要件に応えやすい暗号化方式です。SSE-S3との違いはSAAで頻出です。",
  },
  {
    question:
      "アプリケーションで利用するRDSの認証情報を安全に保管し、定期的なローテーションも自動化したいと考えています。認証情報をソースコードや環境変数に直接埋め込まず、AWSのマネージド機能で運用負荷を下げる最も適切なサービスはどれですか?",
    options: [
      {
        text: "AWS Secrets Manager",
        isCorrect: true,
        explanation:
          "AWS Secrets Managerはデータベース認証情報やAPIキーなどのシークレットを安全に保存し、対応するデータベースではローテーションを自動化できます。アプリケーションは実行時に必要なシークレットを取得できます。",
      },
      {
        text: "Amazon CloudWatch Logs",
        isCorrect: false,
        explanation:
          "CloudWatch Logsはログの収集・保存・検索に使うサービスであり、認証情報の安全な保管やローテーションを目的としたサービスではありません。",
      },
      {
        text: "IAMアクセスキーをソースコードに暗号化して保存する",
        isCorrect: false,
        explanation:
          "ソースコードに認証情報を含める設計は、暗号化していても漏洩やローテーション漏れのリスクがあります。シークレット管理サービスを利用する方が安全で運用しやすいです。",
      },
      {
        text: "AWS CloudTrail",
        isCorrect: false,
        explanation:
          "CloudTrailはAWS API呼び出しの監査ログを記録するサービスです。監査には有効ですが、アプリケーションシークレットの保管や自動ローテーションを行うサービスではありません。",
      },
    ],
    explanation:
      "Secrets Managerはシークレットの保管、KMSによる暗号化、きめ細かなIAM制御、自動ローテーションが重要です。Parameter Storeも設定値管理に使えますが、RDS認証情報の自動ローテーションまで含む要件ではSecrets Managerがより直接的です。",
  },
]

