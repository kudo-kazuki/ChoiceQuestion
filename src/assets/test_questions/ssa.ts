import type { Question } from "@/types/test_questions";

export const testQuestions: Question[] = [
  {
    question:
      "ある企業が新しいデータレイクをS3上に構築します。保存されるオブジェクトはアクセスパターンが予測不能で、頻繁にアクセスされるものもあれば、長期間アクセスされないものもあります。運用負荷を増やさずにストレージコストを最適化するのに最も適切なS3ストレージクラスはどれですか?",
    options: [
      {
        text: "S3 Standard",
        isCorrect: false,
        explanation:
          "S3 Standardは高頻度アクセス用の標準ストレージクラスで、アクセス頻度に関わらず同一の保管料金がかかるため、長期間アクセスされないオブジェクトに対してコスト効率が良くありません。",
      },
      {
        text: "S3 Standard-IA",
        isCorrect: false,
        explanation:
          "S3 Standard-IA（Infrequent Access = 低頻度アクセス）はアクセス頻度が低いことが事前に分かっているデータ向けで、保管料金は安い一方でデータ取り出し時に料金が発生するため、頻繁にアクセスするとコストが嵩みます。",
      },
      {
        text: "S3 Intelligent-Tiering",
        isCorrect: true,
        explanation:
          "S3 Intelligent-Tieringはアクセスパターンをモニタリングし、自動的に最適なアクセス階層にオブジェクトを移動します。アクセスパターンが予測不能で運用負荷を増やしたくないケースに最適です。",
      },
      {
        text: "S3 Glacier Deep Archive",
        isCorrect: false,
        explanation:
          "S3 Glacier Deep Archiveは最も安価ですが、取り出しに数時間かかるアーカイブ用ストレージクラスで、頻繁にアクセスされるオブジェクトには適しません。",
      },
    ],
    explanation:
      "S3 Intelligent-Tieringは月額わずかなモニタリング料金でアクセスパターンに応じて自動階層化を行います。取り出し料金は発生しないため、アクセスパターンが不明なワークロードのデフォルト選択肢として推奨されています。",
  },
  {
    question:
      "プライベートサブネットで稼働するEC2インスタンスから、同一リージョンのS3バケットへ大量のデータ転送を行う必要があります。通信をAWSネットワーク内に閉じ、追加コストを最小化する構成はどれですか?",
    options: [
      {
        text: "NAT Gatewayを配置してS3にアクセスする",
        isCorrect: false,
        explanation:
          "NAT Gateway（プライベートサブネットからインターネット等外部への送信専用ゲートウェイ）を経由するとデータ処理料金と時間料金が発生し、S3 Gateway Endpointを利用する構成と比較して非効率です。",
      },
      {
        text: "S3用のVPCゲートウェイエンドポイントを作成する",
        isCorrect: true,
        explanation:
          "VPCエンドポイント（VPCから特定AWSサービスへプライベートに到達するための経路）のうち、S3とDynamoDBはルートテーブル経由で使うゲートウェイ型をサポートし、追加料金なしでAWSネットワーク内を経由してS3にアクセスできます。",
      },
      {
        text: "EC2にパブリックIPを割り当て、インターネットゲートウェイ経由でS3にアクセスする",
        isCorrect: false,
        explanation:
          "インターネットゲートウェイ（VPCとインターネットを接続するゲートウェイ）経由でEC2をパブリック化するとプライベートサブネット要件に反し、セキュリティリスクも高まります。",
      },
      {
        text: "AWS Site-to-Site VPNを構成してS3にアクセスする",
        isCorrect: false,
        explanation:
          "Site-to-Site VPNはオンプレミス拠点とVPCをIPsecで接続するための機能で、VPC内EC2からS3へのアクセス経路としては用途が合いません。",
      },
    ],
    explanation:
      "VPCエンドポイントにはゲートウェイ型（S3, DynamoDB）と、PrivateLinkを用いるインターフェース型（ENIを介して多くのAWSサービスに接続、時間料金あり）があります。S3への通信はゲートウェイ型を使うのが定番で、追加料金がかからずコスト最適です。",
  },
  {
    question:
      "あるWebアプリケーションを、単一障害点を排除しつつ可用性とスケーラビリティを確保した構成にしたいと考えています。最も適切な構成はどれですか?",
    options: [
      {
        text: "単一AZのEC2インスタンスにElastic IPを割り当てる",
        isCorrect: false,
        explanation:
          "AZ（アベイラビリティーゾーン）は1リージョン内の物理的に分離されたデータセンター群で、Elastic IP（付け替え可能な静的パブリックIP）を付けても単一AZ・単一インスタンス構成ではAZ障害で全面停止します。",
      },
      {
        text: "複数アベイラビリティーゾーンにまたがるAuto Scaling GroupとApplication Load Balancerを組み合わせる",
        isCorrect: true,
        explanation:
          "Application Load Balancer（L7のロードバランサー）は複数AZにリクエストを分散し、Auto Scaling Group（EC2群を自動で増減・自己修復する仕組み）は需要に応じてインスタンス数を調整しつつ異常インスタンスを自動置換します。AWSの高可用性アーキテクチャの定番パターンです。",
      },
      {
        text: "大型EC2インスタンス1台にEBSのスナップショットを定期取得する",
        isCorrect: false,
        explanation:
          "EBS（EC2にアタッチするブロックストレージ）のスナップショット（S3に保存される時点バックアップ）は復旧手段であり、スケールアップだけでは単一障害点が残り可用性を直接高めません。",
      },
      {
        text: "複数のEC2インスタンスを同一AZに配置してRoute 53で加重ルーティングする",
        isCorrect: false,
        explanation:
          "Route 53（AWSのDNSサービス）の加重ルーティングでトラフィックを振り分けても、同一AZ内のみの配置では当該AZ障害で全インスタンスが影響を受けるため、高可用性には複数AZ構成が必須です。",
      },
    ],
    explanation:
      "「複数AZ + ALB + Auto Scaling Group」はSAA試験で頻出の高可用性・スケーラビリティ構成です。AZ障害・インスタンス障害・需要変動のいずれにも自動的に対処できます。",
  },
  {
    question:
      "Amazon RDS for MySQL上で稼働する本番データベースに対し、レポート用の重い読み取りクエリが急増し、トランザクション処理のレイテンシが悪化しています。アプリケーションの書き込み処理に影響を与えず、読み取り負荷をスケールさせる方法として最も適切なものはどれですか?",
    options: [
      {
        text: "マルチAZ配置を有効化する",
        isCorrect: false,
        explanation:
          "通常のマルチAZ DBインスタンス構成ではスタンバイは可用性向上を目的としており、読み取りクエリを振り向けることは通常できません（Multi-AZ DB Cluster構成など一部例外を除く）。",
      },
      {
        text: "リードレプリカを作成し、読み取りクエリをレプリカに向ける",
        isCorrect: true,
        explanation:
          "リードレプリカ（プライマリDBから非同期レプリケーションされる読み取り専用コピー）は、アプリケーションを読み取り/書き込みで分離することで書き込みに影響を与えずに読み取り負荷をスケールアウトできます。",
      },
      {
        text: "EBSボリュームのIOPSをプロビジョンドIOPSに変更する",
        isCorrect: false,
        explanation:
          "IOPS（1秒あたりのI/O操作数）をプロビジョンドIOPS（性能を事前指定できる高性能EBSタイプ）に変更するのはディスクI/Oのボトルネック対策で、読み取りクエリの処理能力自体をスケールアウトするものではありません。",
      },
      {
        text: "自動バックアップの保持期間を延長する",
        isCorrect: false,
        explanation:
          "自動バックアップは復旧用であり、読み取りパフォーマンスには影響しません。",
      },
    ],
    explanation:
      "マルチAZは可用性向上、リードレプリカは読み取りスケールアウトという役割の違いを押さえることはSAA試験の頻出ポイントです。Aurora ではリードレプリカが最大15台まで作成可能です。",
  },
  {
    question:
      "ECサイトにおいて、セール時に注文処理が急増するとアプリケーション層がバックエンドのDB処理を同期的に待ち、タイムアウトが頻発しています。疎結合化してスパイクに耐えるアーキテクチャとして最も適切なものはどれですか?",
    options: [
      {
        text: "アプリケーション層とバックエンドワーカーの間にAmazon SQSキューを配置する",
        isCorrect: true,
        explanation:
          "SQS（Simple Queue Service、フルマネージドのメッセージキュー）を介在させることでアプリ層はメッセージを投入するだけで応答を返せ、ワーカーは自身のペースで非同期処理できます。スパイクをキューが吸収するため疎結合とバッファリングが同時に実現できます。",
      },
      {
        text: "RDSをより大きなインスタンスタイプにスケールアップする",
        isCorrect: false,
        explanation:
          "スケールアップ（インスタンスサイズの引き上げ）で一時的に性能は上がりますが、同期的な結合は解消されず、さらなるスパイクで再び限界に達するため疎結合化の要件を満たしません。",
      },
      {
        text: "Amazon CloudFrontをアプリケーション層の前段に配置する",
        isCorrect: false,
        explanation:
          "CloudFront（AWSのグローバルCDN）は主に静的・動的コンテンツのキャッシュ配信用で、書き込み処理のバッファリングには適しません。",
      },
      {
        text: "アプリケーション層のEC2インスタンスを手動で増設する",
        isCorrect: false,
        explanation:
          "インスタンス追加は一時対応であり、バックエンドとの同期結合という根本原因を解消できません。",
      },
    ],
    explanation:
      "SQSによる疎結合化は「Design Resilient Architectures」ドメインの中心的なパターンです。処理順序と重複排除が必要ならFIFOキュー（順序保証あり）、高スループット重視なら標準キュー（ベストエフォート順序）を選択します。",
  },
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
      "us-east-1のS3バケットにある静的Webコンテンツを、世界中のエンドユーザーに低レイテンシで配信したいと考えています。最も適切なサービスはどれですか?",
    options: [
      {
        text: "Route 53のレイテンシベースルーティングを有効化する",
        isCorrect: false,
        explanation:
          "レイテンシベースルーティング（Route 53が最もレイテンシの低いリージョンのエンドポイントのIPをDNSで返す機能）はDNS応答の最適化のみを行い、コンテンツ自体をエッジにキャッシュする機能はありません。",
      },
      {
        text: "Amazon CloudFrontをS3の前段に配置する",
        isCorrect: true,
        explanation:
          "CloudFront（AWSのグローバルCDN）はエッジロケーション（世界各地に配置されたキャッシュ拠点）に静的コンテンツをキャッシュし、ユーザーから最寄りのエッジで配信します。S3と組み合わせる静的サイト配信の標準構成です。",
      },
      {
        text: "S3 Transfer Accelerationを有効化する",
        isCorrect: false,
        explanation:
          "S3 Transfer Accelerationは遠隔地からCloudFrontのエッジを経由して特定S3バケットへの大容量アップロードを高速化する機能で、ダウンロード（グローバル配信）のための機能ではありません。",
      },
      {
        text: "各リージョンにS3バケットを作成し手動でレプリケーションする",
        isCorrect: false,
        explanation:
          "運用負荷が高く、ユーザーのリージョン振り分けも追加実装が必要で、CloudFrontに比べ明らかに非効率です。",
      },
    ],
    explanation:
      "CloudFront + S3は静的ウェブサイト配信のデファクト構成です。動的コンテンツでもオリジンをALB/API Gatewayにすることでレイテンシ削減やオリジン保護に活用できます。",
  },
  {
    question:
      "新規モバイルゲームのバックエンドで、プレイヤーのセッション情報を保存するデータストアを選定しています。要件は「ミリ秒単位のレスポンス」「スキーマが単純なキーバリュー形式」「アクセス数が予測不能で急激に増減する」です。最も適切なサービスはどれですか?",
    options: [
      {
        text: "Amazon RDS for PostgreSQL",
        isCorrect: false,
        explanation:
          "RDS（AWSが運用を引き受けるリレーショナルDBマネージドサービス）のPostgreSQLはスキーマが固定のリレーショナルデータ向けで、急激なスケール要求やキーバリュー型アクセスには不向きです。",
      },
      {
        text: "Amazon Redshift",
        isCorrect: false,
        explanation:
          "Redshift（列指向のペタバイト級データウェアハウス）は大量のデータに対する分析クエリ（OLAP）向けで、オンラインのセッション参照のようなトランザクション的アクセスには適しません。",
      },
      {
        text: "Amazon DynamoDBをオンデマンドキャパシティモードで利用する",
        isCorrect: true,
        explanation:
          "DynamoDB（フルマネージドのNoSQLキーバリュー/ドキュメントストア）は一桁ミリ秒のレイテンシと自動スケールを提供し、オンデマンドキャパシティモード（事前にキャパシティを見積もる必要がなく、リクエスト単位課金となるモード）はトラフィック予測が難しい場合に最適です。",
      },
      {
        text: "Amazon EC2上にMySQLを自前で構築する",
        isCorrect: false,
        explanation:
          "自前運用はスケーリング・冗長化・バックアップすべてを利用者が担う必要があり、要件に対して運用負荷が大きすぎます。",
      },
    ],
    explanation:
      "「キーバリュー・ミリ秒・スケール予測困難」というキーワードはDynamoDBのシグナルです。さらに低レイテンシが必要ならDAX（DynamoDB Accelerator、DynamoDB専用のインメモリキャッシュ）も併用検討できます。",
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
      "本番環境で24時間365日稼働し続けるEC2インスタンス群があります。今後3年間の継続運用が決定しており、この定常ワークロードのコストを削減する最も適切な方法はどれですか?",
    options: [
      {
        text: "スポットインスタンスに切り替える",
        isCorrect: false,
        explanation:
          "スポットインスタンス（EC2の余剰キャパシティを大幅割引で使えるが、AWS側の判断で中断される可能性がある購入オプション）は最大90%割引になりますが、常時稼働が必要な本番ワークロードには中断リスクが不適切です。",
      },
      {
        text: "オンデマンドインスタンスのまま利用を継続する",
        isCorrect: false,
        explanation:
          "オンデマンド（事前のコミットメントなしに従量課金で利用する標準的な購入オプション）は最も柔軟ですが割引がなく、定常ワークロードに対してコスト効率が悪いです。",
      },
      {
        text: "Compute Savings Plansまたはリザーブドインスタンスを1〜3年契約で購入する",
        isCorrect: true,
        explanation:
          "Savings Plans（1〜3年間の時間あたり利用額コミットと引き換えに割引される購入モデル）やリザーブドインスタンス（同じく1〜3年のインスタンス利用コミット）は、定常ワークロードに対しオンデマンドより大幅な割引（EC2 Instance Savings PlansやRIは最大72%程度、Compute Savings Plansは最大66%程度）を提供します。Compute Savings Plansはインスタンスファミリーやリージョンを超えて柔軟に適用できます。",
      },
      {
        text: "毎日インスタンスを停止し、必要時のみ起動する",
        isCorrect: false,
        explanation:
          "24時間365日の稼働が要件であるため、停止することはそもそも要件に反します。",
      },
    ],
    explanation:
      "ワークロード別のコスト最適化手法はSAA頻出です。定常稼働にはSavings Plans/RI、中断許容のバッチにはSpot、短期/変動が激しいならオンデマンド、という使い分けを覚えておきましょう。",
  },
];
