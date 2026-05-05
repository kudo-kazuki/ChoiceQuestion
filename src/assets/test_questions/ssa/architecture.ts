import type { Question } from '@/types/test_questions'

export const architectureQuestions: Question[] = [
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
  {
    question:
      "複数のAWSアカウントと複数リージョンにまたがって、EBS、RDS、DynamoDBなどのバックアップを一元管理したいと考えています。バックアップ計画をスケジュール化し、コンプライアンス要件により別アカウントや別リージョンにもコピーしたい場合、最も適切なサービスはどれですか?",
    options: [
      {
        text: "AWS Backup",
        isCorrect: true,
        explanation:
          "AWS Backupは複数のAWSサービスのバックアップを一元管理できるマネージドサービスです。バックアッププランでスケジュールや保持期間を定義し、対応リソースではクロスリージョンコピーやクロスアカウントコピーも構成できます。",
      },
      {
        text: "Amazon Data Lifecycle Managerのみを利用する",
        isCorrect: false,
        explanation:
          "Data Lifecycle Managerは主にEBSスナップショットやEBS-backed AMIのライフサイクル管理に使います。RDSやDynamoDBなど複数サービスを横断したバックアップ一元管理にはAWS Backupが適切です。",
      },
      {
        text: "各サービスの手動スナップショットを運用手順書で管理する",
        isCorrect: false,
        explanation:
          "手動運用は漏れや設定差異が発生しやすく、複数アカウント・複数リージョンのコンプライアンス要件には不向きです。バックアップ計画で自動化する方が適しています。",
      },
      {
        text: "Amazon CloudWatch Logsにリソースの変更履歴を保存する",
        isCorrect: false,
        explanation:
          "CloudWatch Logsはログ収集・保存のサービスであり、EBSやRDSなどの復元可能なバックアップを作成・管理するサービスではありません。",
      },
    ],
    explanation:
      "AWS Backupはバックアップの集中管理、バックアッププラン、バックアップボールト、保持期間、クロスリージョン/クロスアカウントコピーが重要です。サービスごとの個別バックアップ機能と、組織横断の一元管理を切り分けて覚えます。",
  },
]

