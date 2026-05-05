import type { Question } from '@/types/test_questions'

export const databaseQuestions: Question[] = [
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
          "IOPS（1秒あたりのI/O（入出力）操作数）をプロビジョンドIOPS（性能を事前指定できる高性能EBSタイプ）に変更するのはディスクI/O（ディスクへの読み書き）のボトルネック対策で、読み取りクエリの処理能力自体をスケールアウトするものではありません。",
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
      "Lambda関数からAmazon RDS for MySQLへ接続するアプリケーションがあります。アクセス急増時に短時間で大量のDB接続が作成され、データベースの接続数上限やCPU負荷が問題になっています。アプリケーション変更を最小限にしながら接続管理を改善する最も適切な構成はどれですか?",
    options: [
      {
        text: "Amazon RDS ProxyをRDSの前段に配置する",
        isCorrect: true,
        explanation:
          "RDS Proxyはデータベース接続をプールして再利用し、急激な接続増加によるDB側の負荷を抑えます。Lambdaのように同時実行数が増えるサービスとRDSを組み合わせる場合の接続管理に適しています。",
      },
      {
        text: "RDSの自動バックアップ保持期間を延長する",
        isCorrect: false,
        explanation:
          "自動バックアップは復旧ポイントを確保する機能であり、アプリケーションからのDB接続数や接続作成コストを削減するものではありません。",
      },
      {
        text: "Amazon CloudFrontをRDSの前段に配置する",
        isCorrect: false,
        explanation:
          "CloudFrontはHTTP/HTTPSコンテンツ配信用のCDNであり、RDSのデータベース接続をプールしたり、SQL接続を管理したりするサービスではありません。",
      },
      {
        text: "RDSをシングルAZ構成に変更する",
        isCorrect: false,
        explanation:
          "シングルAZ化は可用性を下げるだけで、接続集中の問題を根本的に解決しません。接続管理にはRDS Proxyのような接続プール機構が適しています。",
      },
    ],
    explanation:
      "RDS Proxyは接続プール、フェイルオーバー時のアプリケーション影響軽減、Secrets ManagerやIAM認証との連携がポイントです。SAAでは「LambdaなどからRDSへ大量接続」「接続プール」「フェイルオーバー影響軽減」という文脈で問われやすいです。",
  },
  {
    question:
      "グローバルに利用されるアプリケーションでAurora MySQLを使用しています。世界各地のユーザーに低レイテンシの読み取りを提供しつつ、リージョン全体の障害時には別リージョンで迅速に復旧できる構成にしたい場合、最も適切な選択肢はどれですか?",
    options: [
      {
        text: "Aurora Global Databaseを構成し、セカンダリリージョンに読み取り用クラスターを配置する",
        isCorrect: true,
        explanation:
          "Aurora Global Databaseは複数リージョンにまたがるAurora構成で、プライマリリージョンの変更をセカンダリリージョンへレプリケートします。遠隔地ユーザーへの低レイテンシ読み取りと、リージョン障害時の災害対策に適しています。",
      },
      {
        text: "同一リージョン内でRDSのマルチAZ配置を有効化する",
        isCorrect: false,
        explanation:
          "マルチAZは同一リージョン内のAZ障害に対する高可用性を高めますが、世界各地での低レイテンシ読み取りやリージョン障害へのDR要件には不十分です。",
      },
      {
        text: "Auroraの自動バックアップ保持期間を長くする",
        isCorrect: false,
        explanation:
          "自動バックアップは復旧に役立ちますが、別リージョンでの常時読み取りや迅速なリージョンフェイルオーバーを提供する構成ではありません。",
      },
      {
        text: "Amazon ElastiCacheを単一リージョンに配置してすべての読み取りをキャッシュする",
        isCorrect: false,
        explanation:
          "ElastiCacheは読み取り負荷やレイテンシの改善に使えますが、単一リージョン配置では世界各地の低レイテンシ読み取りやリージョン障害時のデータベース復旧要件を満たしません。",
      },
    ],
    explanation:
      "Aurora Global Databaseはグローバル読み取りとクロスリージョンDRの文脈で出題されやすいサービスです。単一リージョン内の可用性ならマルチAZ、複数リージョンにまたがる低レイテンシ読み取りとDRならGlobal Database、と切り分けます。",
  },
  {
    question:
      "世界各地から利用されるモバイルアプリのユーザープロファイルをDynamoDBに保存しています。複数リージョンで低レイテンシの読み書きを行い、あるリージョンに書き込まれたデータを他リージョンにも自動的に複製したい場合、最も適切な構成はどれですか?",
    options: [
      {
        text: "DynamoDBグローバルテーブルを構成する",
        isCorrect: true,
        explanation:
          "DynamoDBグローバルテーブルは複数リージョンにレプリカテーブルを持つマルチリージョン構成で、どのレプリカへの書き込みも他のレプリカへ自動的に複製されます。グローバルな低レイテンシ読み書きに適しています。",
      },
      {
        text: "DynamoDB Streamsを有効化するだけでリージョン間複製を完了する",
        isCorrect: false,
        explanation:
          "DynamoDB Streamsはテーブル変更イベントを取得する機能です。独自実装で複製処理を組むことはできますが、マネージドなマルチリージョン複製要件にはグローバルテーブルが適切です。",
      },
      {
        text: "DynamoDB Accelerator (DAX) を各リージョンに配置する",
        isCorrect: false,
        explanation:
          "DAXはDynamoDB向けのインメモリキャッシュで読み取りレイテンシ改善に役立ちますが、リージョン間のデータ複製やマルチリージョン書き込みを提供するものではありません。",
      },
      {
        text: "S3 Cross-Region Replicationを設定する",
        isCorrect: false,
        explanation:
          "S3 Cross-Region ReplicationはS3オブジェクトをリージョン間で複製する機能です。DynamoDBテーブルのマルチリージョン複製には使用しません。",
      },
    ],
    explanation:
      "DynamoDBグローバルテーブルは、サーバーレス・マルチリージョン・マルチアクティブのNoSQL構成です。RDBならAurora Global Database、DynamoDBならグローバルテーブル、という切り分けが重要です。",
  },
]

