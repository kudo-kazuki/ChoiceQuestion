import type { Question } from '@/types/test_questions'

export const testQuestions: Question[] = [
    {
        question:
            'Amazon CloudFrontの基本的な役割として最も適切な説明はどれですか?',
        options: [
            {
                text: '世界中のエッジロケーションからコンテンツを配信し、低遅延化やオリジン負荷軽減を行うCDNサービス',
                isCorrect: true,
                explanation:
                    'CloudFrontはAWSのCDN（Content Delivery Network）サービスです。ビューワー（CloudFrontへアクセスするクライアント）からのリクエストは、CloudFrontのエッジロケーション（世界各地にある配信用の拠点）で処理され、必要に応じてオリジン（元データを持つ配信元）へ転送されます。',
            },
            {
                text: 'EC2インスタンスのOSパッチを自動適用するサービス',
                isCorrect: false,
                explanation:
                    'OSパッチ（OSの不具合修正やセキュリティ更新）管理はSystems Manager Patch Managerなどの領域です。CloudFrontはコンテンツ配信を扱うCDNサービスです。',
            },
            {
                text: 'RDSデータベースのバックアップだけを管理するサービス',
                isCorrect: false,
                explanation:
                    'RDSのバックアップ管理はRDSの機能です。CloudFrontはデータベースバックアップ専用サービスではありません。',
            },
            {
                text: 'IAMユーザーのパスワードポリシーだけを設定するサービス',
                isCorrect: false,
                explanation:
                    'IAMのパスワードポリシーはIAMで設定します。CloudFrontは認証情報管理ではなく、HTTP/HTTPSコンテンツ配信に関係します。',
            },
        ],
        explanation:
            'CloudFrontでは、S3バケット、ALB、EC2、外部HTTPサーバーなどをオリジンとして指定できます。静的ファイルだけでなく、動的コンテンツやAPIの前段に置いて配信経路を最適化する設計もあります。',
    },
    {
        question:
            'CDNの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '利用者に近い配信拠点からコンテンツを届け、表示の遅延や配信元の負荷を減らす仕組み',
                isCorrect: true,
                explanation:
                    'CDN（Content Delivery Network）は、画像、CSS、JavaScript、動画などのコンテンツを利用者に近い配信拠点から届け、通信遅延やオリジン（元データを持つ配信元）への負荷を減らす仕組みです。',
            },
            {
                text: 'データベースのテーブル設計を自動生成する仕組み',
                isCorrect: false,
                explanation:
                    'CDNはデータベース設計を行う仕組みではありません。コンテンツ配信を高速化・効率化するためのネットワークです。',
            },
            {
                text: 'IAMユーザーの権限を自動的に最小化する仕組み',
                isCorrect: false,
                explanation:
                    'IAM（AWSのアクセス権限管理サービス）の権限設計とCDNは別の領域です。CDNはアクセス権限そのものを自動調整する仕組みではありません。',
            },
            {
                text: 'サーバーのOS更新を必ず全リージョンへ同時配布する仕組み',
                isCorrect: false,
                explanation:
                    'OS更新の配布管理はCDNの基本的な役割ではありません。CloudFrontはWebコンテンツやAPIレスポンスなどの配信に使います。',
            },
        ],
        explanation:
            '基本の流れは「ビューワー → CloudFrontのエッジ → オリジン」です。CloudFrontにキャッシュがあればエッジから返し、なければオリジンへ取りに行きます。',
    },
    {
        question:
            'CloudFrontにおける「エッジロケーション」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: '利用者に近い場所でコンテンツ配信やキャッシュ応答を行うCloudFrontの拠点',
                isCorrect: true,
                explanation:
                    'エッジロケーション（世界各地にある配信用の拠点）は、利用者に近い場所でCloudFrontのリクエストを処理し、キャッシュ（取得済みコンテンツの一時保存）があればそこから応答します。DNS（ドメイン名をIPアドレスなどへ解決する仕組み）により、通常は低遅延で処理できるCloudFrontのPOPへリクエストが向けられます。',
            },
            {
                text: 'S3バケットの中に必ず作成されるフォルダ',
                isCorrect: false,
                explanation:
                    'エッジロケーションはS3（AWSのオブジェクトストレージ）のフォルダではありません。CloudFrontが利用する配信用のネットワーク拠点です。',
            },
            {
                text: 'RDSデータベースの読み取り専用レプリカ',
                isCorrect: false,
                explanation:
                    'RDS（AWSのリレーショナルデータベースサービス）のレプリカではありません。エッジロケーションはCloudFrontの配信拠点です。',
            },
            {
                text: 'CloudFrontの請求書だけを保存する専用リージョン',
                isCorrect: false,
                explanation:
                    '請求書保存用の場所ではありません。エッジロケーションはコンテンツ配信のために使われます。',
            },
        ],
        explanation:
            'エッジロケーションはAWSリージョン（AWSリソースを配置する地域単位）とは別の、配信のための拠点です。利用者に近い拠点から応答できると、オリジンまで毎回取りに行くよりも遅延を小さくしやすくなります。',
    },
    {
        question:
            'CloudFrontにおける「キャッシュ」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'オリジンから取得したコンテンツをCloudFront側で一時保存し、同じようなリクエストへ再利用する仕組み',
                isCorrect: true,
                explanation:
                    'キャッシュ（取得済みコンテンツの一時保存）により、CloudFrontは毎回オリジンへ問い合わせずに応答できる場合があります。キャッシュヒット（キャッシュから返せる状態）ではエッジから応答し、キャッシュミス（キャッシュにない状態）ではオリジンへ取得しに行きます。',
            },
            {
                text: 'S3バケットの暗号化キーを自動的に削除する仕組み',
                isCorrect: false,
                explanation:
                    'キャッシュは暗号化キーの削除機能ではありません。コンテンツを一時保存して再利用する仕組みです。',
            },
            {
                text: 'すべてのHTTPリクエストを必ず永久保存する監査ログ',
                isCorrect: false,
                explanation:
                    'キャッシュは監査ログではありません。また、CloudFrontのキャッシュは設定やHTTPヘッダー（リクエストやレスポンスに付く追加情報）に従って保持されます。',
            },
            {
                text: '利用者のブラウザを強制的に再インストールする機能',
                isCorrect: false,
                explanation:
                    'CloudFrontのキャッシュはブラウザの再インストールとは関係ありません。CloudFront側でコンテンツを保持して再利用する仕組みです。',
            },
        ],
        explanation:
            'キャッシュはCloudFrontを理解するうえで中心になる概念です。何をキャッシュしてよいか、どれくらい保持するかを設計すると、応答時間とオリジン負荷を調整できます。',
    },
    {
        question:
            'CloudFrontにおける「オリジン」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudFrontがコンテンツを取得しに行く配信元のサーバーやストレージ',
                isCorrect: true,
                explanation:
                    'オリジン（元データを持つ配信元）は、CloudFrontがコンテンツを取得する場所です。S3バケット、ALB（Application Load Balancer）、EC2、外部HTTPサーバーなどを指定できます。',
            },
            {
                text: 'CloudFrontへアクセスする利用者の端末',
                isCorrect: false,
                explanation:
                    '利用者の端末やブラウザはビューワー（CloudFrontへアクセスするクライアント）と呼ばれます。オリジンはCloudFrontが取りに行く配信元です。',
            },
            {
                text: 'CloudFrontのキャッシュを削除する操作名',
                isCorrect: false,
                explanation:
                    'キャッシュを削除・更新対象にする操作はInvalidation（無効化）です。オリジンは配信元を指します。',
            },
            {
                text: 'CloudFrontが自動作成するDNSゾーン',
                isCorrect: false,
                explanation:
                    'オリジンはDNSゾーン（DNSレコードを管理する範囲）ではありません。CloudFrontがコンテンツを取得する接続先です。',
            },
        ],
        explanation:
            'CloudFrontは、キャッシュにないコンテンツや再取得が必要なコンテンツをオリジンへ取りに行きます。オリジンはAWS内のリソースだけでなく、インターネット上のHTTP/HTTPSサーバーにすることもできます。',
    },
    {
        question:
            'CloudFrontにおける「ビューワー」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudFrontへリクエストを送る利用者のブラウザ、アプリ、クライアント',
                isCorrect: true,
                explanation:
                    'ビューワー（CloudFrontへアクセスするクライアント）は、Webブラウザ、モバイルアプリ、APIクライアントなど、CloudFrontにリクエストを送る側を指します。',
            },
            {
                text: 'CloudFrontがコンテンツを取りに行くS3バケットやWebサーバー',
                isCorrect: false,
                explanation:
                    'CloudFrontが取りに行く配信元はオリジン（元データを持つ配信元）です。ビューワーはCloudFrontへアクセスする側です。',
            },
            {
                text: 'CloudFrontの設定変更を承認するIAMロールだけを指す用語',
                isCorrect: false,
                explanation:
                    'IAMロール（AWS権限を引き受けるための仕組み）ではありません。ビューワーはCloudFrontへのリクエスト元を表す用語です。',
            },
            {
                text: 'CloudFrontのログを保存するS3バケットの名前',
                isCorrect: false,
                explanation:
                    'ログ保存先ではありません。ビューワーはアクセスしてくる利用者側のクライアントです。',
            },
        ],
        explanation:
            'CloudFrontの設定では、ビューワーからCloudFrontへの通信と、CloudFrontからオリジンへの通信を分けて考えると整理しやすくなります。HTTPSの扱いも、この2つの区間で別々に設定する場面があります。',
    },
    {
        question:
            'CloudFrontにおける「ディストリビューション」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'オリジン、ドメイン名、キャッシュ動作などをまとめて定義するCloudFrontの配信設定単位',
                isCorrect: true,
                explanation:
                    'ディストリビューション（CloudFrontの配信設定の単位）では、オリジン、キャッシュビヘイビア（パスごとの配信・キャッシュ設定）、代替ドメイン名、SSL/TLS証明書（HTTPS通信で使う証明書）などを設定します。',
            },
            {
                text: 'S3オブジェクトを必ず1つだけ保存するファイル形式',
                isCorrect: false,
                explanation:
                    'ディストリビューションはファイル形式ではありません。CloudFrontでコンテンツをどう配信するかを決める設定単位です。',
            },
            {
                text: 'EC2インスタンスの起動テンプレートだけを管理する機能',
                isCorrect: false,
                explanation:
                    'EC2の起動テンプレート管理とは別です。ディストリビューションはCloudFrontの配信設定です。',
            },
            {
                text: 'CloudFrontの利用料金を無料にする割引設定',
                isCorrect: false,
                explanation:
                    '料金割引設定ではありません。ディストリビューションはCloudFront配信の中心となる設定です。',
            },
        ],
        explanation:
            'CloudFrontを使うときは、まずディストリビューションを作り、どこから取得して、どのドメインで、どのようにキャッシュ・配信するかを設定します。初級運用では、この設定単位を中心に画面を見ると理解しやすくなります。',
    },
    {
        question:
            'CloudFrontのドメイン名に関する説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'ディストリビューションにはCloudFrontのドメイン名が割り当てられ、必要に応じて独自ドメインも設定できる',
                isCorrect: true,
                explanation:
                    'CloudFrontディストリビューションには、`xxxxx.cloudfront.net` のようなCloudFrontドメイン名（CloudFrontが割り当てるアクセス用の名前）が付きます。独自ドメインを使う場合は、代替ドメイン名、SSL/TLS証明書、DNSレコード（名前解決の設定）をそろえます。',
            },
            {
                text: 'CloudFrontでは必ずIPアドレスだけでアクセスし、ドメイン名は使えない',
                isCorrect: false,
                explanation:
                    'CloudFrontはドメイン名でアクセスします。CloudFrontが割り当てるドメイン名に加えて、独自ドメインを設定することもできます。',
            },
            {
                text: '独自ドメインを使う場合でもHTTPS証明書は一切不要である',
                isCorrect: false,
                explanation:
                    'HTTPS（暗号化されたHTTP通信）で独自ドメインを使う場合は、そのドメインに対応するSSL/TLS証明書（通信の暗号化とドメイン確認に使う証明書）が必要です。',
            },
            {
                text: 'CloudFrontのドメイン名はS3バケット名と常に完全一致しなければならない',
                isCorrect: false,
                explanation:
                    'CloudFrontのドメイン名がS3バケット名と完全一致する必要はありません。S3をオリジンにする場合でも、CloudFront側のドメイン名とは別に考えます。',
            },
        ],
        explanation:
            '初歩運用では、まずCloudFront標準のドメイン名で動作確認し、その後にDNSや証明書を設定して `www.example.com` のような独自ドメインへ切り替える流れがよくあります。',
    },
    {
        question:
            'CloudFrontにおける「S3オリジン」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'S3バケットをCloudFrontの配信元として指定し、S3内のオブジェクトをCloudFront経由で配信する構成',
                isCorrect: true,
                explanation:
                    'S3オリジン（S3バケットを配信元にする構成）では、画像、HTML、CSS、JavaScriptなどのS3オブジェクト（S3に保存されるファイル相当のデータ）をCloudFront経由で配信できます。通常のS3バケットオリジンでは、OAC（Origin Access Control。CloudFrontからS3へのアクセスを制御する仕組み）を使って非公開配信にできます。',
            },
            {
                text: 'CloudFrontがS3バケットを自動的にリレーショナルデータベースへ変換する構成',
                isCorrect: false,
                explanation:
                    'S3はオブジェクトストレージ（ファイル相当のデータを保存するサービス）であり、CloudFrontがS3をリレーショナルデータベースへ変換することはありません。',
            },
            {
                text: 'S3バケットを使う場合、CloudFrontでは必ず全オブジェクトを公開状態にしなければならない',
                isCorrect: false,
                explanation:
                    '通常のS3バケットオリジンでは、OACなどを使って、S3を直接公開せずにCloudFront経由だけで配信する構成を取れます。',
            },
            {
                text: 'S3バケットはCloudFrontのログ保存先にしか指定できない',
                isCorrect: false,
                explanation:
                    'S3はログ保存先として使える場合もありますが、CloudFrontのオリジンとしてコンテンツ配信元に指定することもできます。',
            },
        ],
        explanation:
            '静的ファイル配信ではS3オリジンがよく使われます。ただし、S3静的ウェブサイトエンドポイントを使う場合は通常のS3バケットオリジンではなく、カスタムオリジンとして扱います。',
    },
    {
        question:
            'CloudFrontにおける「カスタムオリジン」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'HTTP/HTTPSでアクセスできるサーバーやS3静的ウェブサイトエンドポイントなどをCloudFrontの配信元として指定する構成',
                isCorrect: true,
                explanation:
                    'カスタムオリジン（HTTP/HTTPSでアクセスする配信元）には、ALB（Application Load Balancer）、EC2、オンプレミスのWebサーバー、外部のHTTPサーバー、S3静的ウェブサイトエンドポイントなどを指定できます。',
            },
            {
                text: 'CloudFrontのエッジロケーションを利用者が自由に追加する機能',
                isCorrect: false,
                explanation:
                    'カスタムオリジンは配信元の種類に関する用語です。エッジロケーション（世界各地にある配信用の拠点）を利用者が追加する機能ではありません。',
            },
            {
                text: 'CloudFrontの料金を手動で変更するための課金設定',
                isCorrect: false,
                explanation:
                    '課金設定ではありません。カスタムオリジンはCloudFrontがコンテンツを取得する配信元の設定です。',
            },
            {
                text: 'CloudFrontがキャッシュしたファイルを必ずS3へ書き戻す機能',
                isCorrect: false,
                explanation:
                    'CloudFrontは通常、オリジンから取得したコンテンツをキャッシュして配信しますが、キャッシュしたファイルをオリジンへ書き戻す機能ではありません。',
            },
        ],
        explanation:
            'S3静的ウェブサイトエンドポイント（S3のWebサイトホスティング用URL）は、通常のS3バケットオリジンとは違いカスタムオリジンとして扱います。この場合、CloudFrontからそのオリジンへのHTTPS接続やOACは使えない点も基本として押さえておくと安全です。',
    },
    {
        question:
            'CloudFrontにおける「オリジンパス」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudFrontがオリジンへリクエストするときに、オリジン内の特定ディレクトリ相当を基準にする設定',
                isCorrect: true,
                explanation:
                    'オリジンパス（オリジン内の特定パスを配信元の基準にする設定）を指定すると、CloudFrontはビューワーからのリクエストパスの前にそのパスを付けてオリジンへ問い合わせます。ビューワーに見えるURLを変えずに、オリジン側の格納場所を切り替えられます。',
            },
            {
                text: '利用者のブラウザに表示されるURLを必ずオリジンの内部パスへ書き換える設定',
                isCorrect: false,
                explanation:
                    'オリジンパスはCloudFrontからオリジンへ送るリクエストに関する設定です。ビューワー（CloudFrontへアクセスするクライアント）に見えるURLを必ず書き換える設定ではありません。',
            },
            {
                text: 'CloudFrontのキャッシュを削除するために指定するワイルドカード',
                isCorrect: false,
                explanation:
                    'キャッシュを削除・更新対象にする操作はInvalidation（無効化）です。オリジンパスはオリジンへ問い合わせるときのパス設定です。',
            },
            {
                text: 'CloudFrontが利用するAWSリージョンを固定する設定',
                isCorrect: false,
                explanation:
                    'オリジンパスはリージョン固定の設定ではありません。オリジン内のどのパスを基準にするかを指定します。',
            },
        ],
        explanation:
            '例えばオリジンパスに `/production` を指定し、ビューワーが `/images/logo.png` を要求すると、CloudFrontはオリジンへ `/production/images/logo.png` として問い合わせます。',
    },
    {
        question:
            'CloudFrontにおける「オリジンフェイルオーバー」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'プライマリオリジンで特定のエラーが返った場合などに、セカンダリオリジンへリクエストを切り替える仕組み',
                isCorrect: true,
                explanation:
                    'オリジンフェイルオーバー（配信元障害時に別の配信元へ切り替える仕組み）では、プライマリオリジン（通常使う配信元）で設定済みのHTTPステータスコード（例: 500、502、503、504など）が返った場合に、セカンダリオリジン（代替の配信元）へ切り替えます。',
            },
            {
                text: '利用者のブラウザが古い場合に、自動的に新しいブラウザを配布する仕組み',
                isCorrect: false,
                explanation:
                    'ブラウザ配布の仕組みではありません。オリジンフェイルオーバーはCloudFrontから見た配信元の切り替えに関する機能です。',
            },
            {
                text: 'S3バケット内のオブジェクトを必ず別リージョンへコピーするバックアップ機能',
                isCorrect: false,
                explanation:
                    'S3オブジェクトのコピー機能ではありません。複数のオリジンを用意し、リクエスト先を切り替えるCloudFrontの配信設定です。',
            },
            {
                text: 'CloudFrontのキャッシュTTLを常に0秒にする設定',
                isCorrect: false,
                explanation:
                    'TTL（キャッシュを保持してよい時間）を0秒にする設定ではありません。フェイルオーバーはオリジン障害時の切り替えに関係します。',
            },
        ],
        explanation:
            '初歩運用では、単に複数オリジンを登録するだけで自動的に切り替わるわけではなく、オリジングループとフェイルオーバー条件を設計する点が重要です。CloudFrontがオリジンへリクエストするとき、条件に合う失敗時だけセカンダリを試します。',
    },
    {
        question:
            'CloudFrontにおける「オリジングループ」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'オリジンフェイルオーバーのために、プライマリオリジンとセカンダリオリジンをまとめる設定',
                isCorrect: true,
                explanation:
                    'オリジングループ（フェイルオーバー用に複数オリジンをまとめる設定）では、通常使うプライマリオリジンと、障害時に使うセカンダリオリジンを指定します。キャッシュビヘイビアの転送先として、単一オリジンの代わりに指定できます。',
            },
            {
                text: 'CloudFrontの全ディストリビューションを1つの請求書にまとめる設定',
                isCorrect: false,
                explanation:
                    '請求書をまとめる設定ではありません。オリジングループはCloudFrontの配信元切り替えに使う設定です。',
            },
            {
                text: 'S3バケット内のフォルダを見た目だけグループ化する機能',
                isCorrect: false,
                explanation:
                    'S3内のフォルダ表示を整理する機能ではありません。CloudFrontがどのオリジンへリクエストするかを制御する設定です。',
            },
            {
                text: '複数のビューワーをまとめて同じIPアドレスに固定する設定',
                isCorrect: false,
                explanation:
                    'ビューワー（CloudFrontへアクセスするクライアント）をIPアドレスで固定する設定ではありません。オリジングループは複数の配信元をまとめます。',
            },
        ],
        explanation:
            'オリジングループは高可用性（障害が起きてもサービスを継続しやすくする性質）を高めるための基本的な構成要素です。例えば通常はメインのWebサーバーを使い、500エラー時に別のオリジンへ切り替える設計ができます。',
    },
]
