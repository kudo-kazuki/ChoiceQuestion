import type { Question } from '@/types/test_questions'

export const storageQuestions: Question[] = [
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
      "複数のアベイラビリティーゾーンに配置されたEC2インスタンス群から、同じファイルを同時に読み書きする必要があります。Linuxベースのアプリケーションで、サーバー管理を最小化しつつ高可用な共有ファイルシステムを利用したい場合、最も適切なサービスはどれですか?",
    options: [
      {
        text: "Amazon EBSボリュームを1つ作成し、複数AZのEC2インスタンスに同時アタッチする",
        isCorrect: false,
        explanation:
          "EBS（EC2向けのブロックストレージ）は基本的に単一AZ内のリソースであり、複数AZのインスタンスから共有ファイルシステムとして同時利用する用途には適しません。EBS Multi-Attachにも制約があり、一般的な複数AZ共有ファイル用途の第一選択ではありません。",
      },
      {
        text: "Amazon EFSのリージョナルファイルシステムを作成し、各AZにマウントターゲットを配置する",
        isCorrect: true,
        explanation:
          "Amazon EFS（Elastic File System）はNFSベースのフルマネージド共有ファイルシステムです。リージョナルファイルシステムではデータが複数AZに冗長保存され、各AZのマウントターゲット経由で複数のEC2インスタンスから同時にアクセスできます。",
      },
      {
        text: "Amazon S3をNFSファイルシステムとしてEC2に直接マウントする",
        isCorrect: false,
        explanation:
          "S3はオブジェクトストレージであり、POSIX互換の共有ファイルシステムではありません。アプリケーションが通常のNFSファイル共有を必要とする場合はEFSの方が適切です。",
      },
      {
        text: "各EC2インスタンスのローカルインスタンスストアにファイルを保存し、定期的に同期する",
        isCorrect: false,
        explanation:
          "インスタンスストアは一時的なローカルストレージで、インスタンス停止や障害時にデータが失われる可能性があります。共有ファイルシステムとしての一貫性や高可用性も確保しにくいです。",
      },
    ],
    explanation:
      "複数EC2から同じLinuxファイルシステムを共有する要件ではEFSが定番です。高可用性が重要な本番用途では、単一AZに閉じるEFS One Zoneではなくリージョナルファイルシステムを選ぶのが基本です。",
  },
  {
    question:
      "監査要件により、S3に保存したログファイルを7年間削除・上書きできないようにする必要があります。管理者やルートユーザーであっても保持期間中に削除できない強いWORM要件を満たす最も適切な設定はどれですか?",
    options: [
      {
        text: "S3 Object Lockをコンプライアンスモードで有効化し、保持期間を設定する",
        isCorrect: true,
        explanation:
          "S3 Object Lockのコンプライアンスモードでは、保持期間中のオブジェクトバージョンはルートユーザーを含むどのユーザーからも上書き・削除できません。WORM要件や厳格な規制対応に適しています。",
      },
      {
        text: "S3バケットポリシーでDeleteObjectを明示的に拒否する",
        isCorrect: false,
        explanation:
          "バケットポリシーによる削除拒否は有効な保護策ですが、ポリシーを変更できる管理者がいる場合は厳格なWORM要件を満たしにくいです。保持期間中の不変性にはObject Lockのコンプライアンスモードが適しています。",
      },
      {
        text: "S3ライフサイクルルールで7年後にGlacier Deep Archiveへ移行する",
        isCorrect: false,
        explanation:
          "ライフサイクルルールはストレージクラス移行や有効期限管理のための機能であり、保持期間中の削除・上書きを禁止するWORM機能ではありません。",
      },
      {
        text: "S3 Transfer Accelerationを有効化する",
        isCorrect: false,
        explanation:
          "S3 Transfer Accelerationは遠隔地からS3への転送を高速化する機能であり、オブジェクトの不変性や保持期間の制御とは関係ありません。",
      },
    ],
    explanation:
      "S3 Object Lockはバージョニングと組み合わせてオブジェクトバージョンを保護します。ガバナンスモードは特別な権限で回避可能ですが、コンプライアンスモードは保持期間を短縮できない点が試験で問われやすいです。",
  },
  {
    question:
      "オンプレミスのファイルサーバーを利用する業務アプリケーションがあります。既存アプリケーションはNFSでファイルを読み書きしており、アプリケーション改修を最小限にしながら、保存先をAmazon S3へ移行したいと考えています。オンプレミス側には低レイテンシアクセス用のキャッシュも必要です。最も適切なサービスはどれですか?",
    options: [
      {
        text: "AWS Storage GatewayのAmazon S3 File Gatewayを利用する",
        isCorrect: true,
        explanation:
          "S3 File Gatewayはオンプレミス環境にNFS/SMBのファイル共有を提供し、書き込まれたファイルをS3オブジェクトとして保存します。ローカルキャッシュにより頻繁に使うデータへ低レイテンシでアクセスできます。",
      },
      {
        text: "Amazon S3 Transfer Accelerationを有効化する",
        isCorrect: false,
        explanation:
          "S3 Transfer Accelerationは遠隔地からS3への転送を高速化する機能ですが、NFS/SMBのファイル共有インターフェースやローカルキャッシュは提供しません。",
      },
      {
        text: "Amazon EBSボリュームをオンプレミスサーバーにアタッチする",
        isCorrect: false,
        explanation:
          "EBSはEC2にアタッチするブロックストレージであり、オンプレミスサーバーへ直接アタッチしてNFS共有として使うサービスではありません。",
      },
      {
        text: "Amazon S3 Glacier Deep Archiveへ直接ファイルを書き込む",
        isCorrect: false,
        explanation:
          "S3 Glacier Deep Archiveは長期アーカイブ向けの低コストストレージで、頻繁なファイルアクセスやNFS互換の既存アプリケーション連携には適しません。",
      },
    ],
    explanation:
      "Storage GatewayはオンプレミスとAWSストレージをつなぐハイブリッド構成で頻出です。ファイルインターフェースでS3を使いたいならS3 File Gateway、ブロックストレージ用途ならVolume Gateway、仮想テープ置き換えならTape Gatewayです。",
  },
  {
    question:
      "グローバルに展開するアプリケーションが、複数リージョンのS3バケットに保存された同一データセットへアクセスします。ユーザーに最も近いリージョンのバケットへ自動的にルーティングし、単一のグローバルエンドポイントでアクセスさせたい場合、最も適切な構成はどれですか?",
    options: [
      {
        text: "S3 Multi-Region Access Pointsを作成し、必要に応じてクロスリージョンレプリケーションを設定する",
        isCorrect: true,
        explanation:
          "S3 Multi-Region Access Pointsは単一のグローバルエンドポイントを提供し、リクエスト元に近い関連バケットへルーティングします。各リージョンのバケットに同一データを保持するには、S3 Cross-Region Replicationなどでデータを複製します。",
      },
      {
        text: "各リージョンのS3バケットURLをアプリケーションにハードコードする",
        isCorrect: false,
        explanation:
          "アプリケーション側でリージョンごとのURLを管理すると運用負荷が高く、ネットワーク状況や近接性に応じた自動ルーティングも行いにくくなります。",
      },
      {
        text: "S3バケットを1つだけ作成し、すべてのユーザーに同じリージョンから配信する",
        isCorrect: false,
        explanation:
          "単一リージョンのS3バケットでは遠隔地ユーザーのレイテンシやリージョン障害時の可用性に課題が残ります。複数リージョンのバケット活用要件にも合いません。",
      },
      {
        text: "AWS Site-to-Site VPNを各リージョンに構成する",
        isCorrect: false,
        explanation:
          "Site-to-Site VPNはオンプレミスとVPCを接続するための機能で、S3バケットへのグローバルエンドポイントや近接ルーティングを提供するものではありません。",
      },
    ],
    explanation:
      "S3 Multi-Region Access Pointsは、複数リージョンのS3バケットを単一エンドポイントで扱い、近接性に基づいてリクエストを振り分ける機能です。ただしデータ内容を自動的に一致させる機能ではないため、必要に応じてCRRと組み合わせます。",
  },
]

