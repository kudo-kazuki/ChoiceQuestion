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
    {
        question:
            'CloudFrontにおける「キャッシュビヘイビア」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'URLパスごとに、どのオリジンへ転送し、どのようにキャッシュや配信を行うかを決める設定',
                isCorrect: true,
                explanation:
                    'キャッシュビヘイビア（パスごとの配信・キャッシュ設定）では、パスパターン（適用対象のURLパス条件）、オリジン、キャッシュポリシー（キャッシュキーやTTLを管理する設定）、許可するHTTPメソッドなどを設定します。',
            },
            {
                text: 'CloudFrontの利用料金を月ごとに固定する契約設定',
                isCorrect: false,
                explanation:
                    '料金契約の設定ではありません。キャッシュビヘイビアは、リクエストのパスに応じた配信動作を決める設定です。',
            },
            {
                text: 'S3バケット内のオブジェクトを自動的に圧縮して削除する機能',
                isCorrect: false,
                explanation:
                    'オブジェクト削除機能ではありません。CloudFrontには圧縮配信の設定はありますが、キャッシュビヘイビア自体は配信ルールの単位です。',
            },
            {
                text: 'CloudFrontのすべてのエッジロケーションを手動で選択する設定',
                isCorrect: false,
                explanation:
                    'エッジロケーション（世界各地にある配信用の拠点）を個別に選ぶ設定ではありません。キャッシュビヘイビアはURLパスごとの動作を決めます。',
            },
        ],
        explanation:
            '例えば `/images/*` はS3へ、`/api/*` はALBへ転送するように、パスごとに配信先やキャッシュ方法を分けられます。',
    },
    {
        question:
            'CloudFrontにおける「デフォルトキャッシュビヘイビア」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: '他のキャッシュビヘイビアのパスパターンに一致しないリクエストへ適用される基本設定',
                isCorrect: true,
                explanation:
                    'デフォルトキャッシュビヘイビア（どの個別ルールにも一致しない場合の基本動作）は、ディストリビューションに必ず存在します。パスパターン（適用対象URLを指定する条件）は `*` 固定で変更できません。',
            },
            {
                text: 'CloudFrontが最初に作成するS3バケットの名前',
                isCorrect: false,
                explanation:
                    'S3バケット名ではありません。デフォルトキャッシュビヘイビアはCloudFrontディストリビューション内の配信設定です。',
            },
            {
                text: 'CloudFrontのキャッシュをすべて即時削除する操作',
                isCorrect: false,
                explanation:
                    'キャッシュを削除・更新対象にする操作はInvalidation（無効化）です。デフォルトキャッシュビヘイビアは削除操作ではありません。',
            },
            {
                text: 'CloudFrontでHTTPSを完全に無効化する専用設定',
                isCorrect: false,
                explanation:
                    'HTTPS（暗号化されたHTTP通信）の扱いはビューワープロトコルポリシーなどで設定します。デフォルトキャッシュビヘイビアは、基本となる配信ルールです。',
            },
        ],
        explanation:
            '明示的なパスルールを作らない場合でも、CloudFrontはデフォルトキャッシュビヘイビアに基づいてリクエストを処理します。',
    },
    {
        question:
            'CloudFrontにおける「パスパターン」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'どのURLパスにキャッシュビヘイビアを適用するかを指定する条件',
                isCorrect: true,
                explanation:
                    'パスパターン（適用対象URLを指定する条件）は、`images/*` や `*.jpg` のように書きます。先頭の `/` は付けても付けなくても同じように扱われます。',
            },
            {
                text: 'CloudFrontがオリジンへ接続するときのTCPポート番号',
                isCorrect: false,
                explanation:
                    'TCPポート番号ではありません。パスパターンはURLパスに基づいてキャッシュビヘイビアを選ぶための条件です。',
            },
            {
                text: 'CloudFrontのログを保存するS3バケットのプレフィックスだけを指定する項目',
                isCorrect: false,
                explanation:
                    'ログ保存先のプレフィックスではありません。配信時のリクエストパスに対して、どの設定を適用するかを決めます。',
            },
            {
                text: 'CloudFrontのDNS名を独自ドメインへ変換する設定',
                isCorrect: false,
                explanation:
                    '独自ドメインの利用には代替ドメイン名、証明書、DNSレコード（名前解決の設定）が関係します。パスパターンはドメイン名ではなくURLパスを扱います。',
            },
        ],
        explanation:
            '複数のキャッシュビヘイビアがある場合、CloudFrontは一覧の上から順にパスパターンを確認し、最初に一致したものを適用します。順序を間違えると想定外の設定が使われることがあります。',
    },
    {
        question:
            'CloudFrontにおける「キャッシュキー」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudFrontがキャッシュ内のオブジェクトを区別し、キャッシュヒットするか判断するための識別子',
                isCorrect: true,
                explanation:
                    'キャッシュキー（キャッシュを区別するための識別子）は、リクエストされたパスに加えて、必要に応じてクエリ文字列、Cookie、HTTPヘッダー（リクエストやレスポンスに付く追加情報）などを含めて作られます。',
            },
            {
                text: 'CloudFrontの管理画面へログインするためのパスワード',
                isCorrect: false,
                explanation:
                    'ログイン用パスワードではありません。キャッシュキーは、CloudFrontが同じキャッシュとして扱ってよいかを判断するための値です。',
            },
            {
                text: 'S3バケットを暗号化するKMSキーだけを指す用語',
                isCorrect: false,
                explanation:
                    'KMSキー（AWSの暗号鍵管理サービスで扱う鍵）ではありません。CloudFrontのキャッシュキーはキャッシュ判定に使う識別子です。',
            },
            {
                text: 'CloudFrontのエッジロケーションを作成するためのAPIキー',
                isCorrect: false,
                explanation:
                    'APIキーではありません。エッジロケーションはAWSが運用する配信拠点であり、キャッシュキーはオブジェクトのキャッシュ判定に使います。',
            },
        ],
        explanation:
            'キャッシュキーに含める値が多すぎるとキャッシュが細かく分かれ、キャッシュヒット率（キャッシュから返せた割合）が下がることがあります。一方で、ユーザーごとに内容が変わる値を省くと誤配信の原因になります。',
    },
    {
        question:
            'CloudFrontにおける「TTL（Time To Live）」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudFrontがキャッシュしたオブジェクトを有効なものとして保持する時間',
                isCorrect: true,
                explanation:
                    'TTL（Time To Live。キャッシュを保持してよい時間）は、CloudFrontがキャッシュ内のオブジェクトを有効とみなす時間です。TTLが切れると、CloudFrontは必要に応じてオリジンへ更新確認や再取得を行います。',
            },
            {
                text: 'CloudFrontのディストリビューション名に使える文字数の上限',
                isCorrect: false,
                explanation:
                    '文字数制限ではありません。TTLはキャッシュの有効期間を表す値です。',
            },
            {
                text: 'ビューワーが必ずHTTPSでアクセスしなければならない回数',
                isCorrect: false,
                explanation:
                    'HTTPSアクセス回数ではありません。HTTPSの扱いはビューワープロトコルポリシーなどで設定します。',
            },
            {
                text: 'オリジンフェイルオーバー時に必ず待機する固定時間',
                isCorrect: false,
                explanation:
                    'フェイルオーバー待機時間ではありません。TTLはキャッシュをどれくらい保持するかに関係します。',
            },
        ],
        explanation:
            'TTLが長いとオリジン負荷を減らしやすい一方、更新内容が反映されるまで時間がかかる場合があります。TTLが短いと更新は反映しやすくなりますが、オリジンへの問い合わせは増えやすくなります。',
    },
    {
        question:
            'CloudFrontの「最小TTL / デフォルトTTL / 最大TTL」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudFrontがオブジェクトをキャッシュする時間の下限、ヘッダーがない場合の既定値、上限を指定する設定',
                isCorrect: true,
                explanation:
                    '最小TTL（少なくとも保持する時間）、デフォルトTTL（オリジンがCache-ControlやExpiresを返さない場合の保持時間）、最大TTL（保持時間の上限）は、CloudFrontのキャッシュ保持時間を制御する設定です。',
            },
            {
                text: 'CloudFrontが必ず3つのオリジンへ同時にリクエストするための設定',
                isCorrect: false,
                explanation:
                    'オリジン数の設定ではありません。3つのTTLはキャッシュ時間を制御する値です。',
            },
            {
                text: 'CloudFrontのエッジロケーションを小・中・大の3種類から選ぶ設定',
                isCorrect: false,
                explanation:
                    'エッジロケーションのサイズ選択ではありません。TTLはキャッシュの有効期間に関係します。',
            },
            {
                text: 'HTTPステータスコードの最小値、通常値、最大値を決める設定',
                isCorrect: false,
                explanation:
                    'HTTPステータスコード（200、404、500などの応答状態を示す番号）の範囲を決める設定ではありません。キャッシュ時間の範囲を決める設定です。',
            },
        ],
        explanation:
            '注意点として、最小TTLが0より大きい場合、オリジンが `Cache-Control: no-cache`、`no-store`、`private` を返しても、CloudFrontは最小TTLの間キャッシュすることがあります。',
    },
    {
        question:
            'CloudFrontで使われる「Cache-Control」ヘッダーの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'オリジンがレスポンスに付け、CloudFrontやブラウザのキャッシュ方法や保持時間を指示するHTTPヘッダー',
                isCorrect: true,
                explanation:
                    'Cache-Control（キャッシュ制御用HTTPヘッダー）は、`max-age=3600` のようにキャッシュしてよい秒数を示したり、`no-cache`、`no-store`、`private` のようにキャッシュの扱いを指示したりします。',
            },
            {
                text: 'CloudFrontディストリビューションのDNS名を決める専用ヘッダー',
                isCorrect: false,
                explanation:
                    'DNS名を決めるヘッダーではありません。CloudFrontのドメイン名や独自ドメインはディストリビューション設定とDNSレコードで扱います。',
            },
            {
                text: 'S3バケットポリシーを自動生成するためのJSONヘッダー',
                isCorrect: false,
                explanation:
                    'S3バケットポリシー（S3へのアクセス許可設定）を生成するためのものではありません。HTTPレスポンスのキャッシュ制御に使うヘッダーです。',
            },
            {
                text: 'CloudFrontのアクセスログを暗号化するためのヘッダー',
                isCorrect: false,
                explanation:
                    'アクセスログ暗号化用ではありません。Cache-Controlはコンテンツのキャッシュ動作に影響します。',
            },
        ],
        explanation:
            'CloudFrontのTTL設定とオリジンのCache-Controlは一緒に評価されます。例えば `max-age=3600` は、通常そのオブジェクトを3600秒キャッシュしてよいという指示です。',
    },
    {
        question:
            'CloudFrontで使われる「Expires」ヘッダーの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'オリジンがレスポンスに付け、キャッシュの有効期限を日時で示すHTTPヘッダー',
                isCorrect: true,
                explanation:
                    'Expires（キャッシュ期限を日時で示すHTTPヘッダー）は、キャッシュをいつまで有効とみなすかを日時で指定します。Cache-Controlの `max-age` とExpiresの両方がある場合、通常はCache-Controlが優先されます。',
            },
            {
                text: 'CloudFrontディストリビューションを削除する予約日時を指定するヘッダー',
                isCorrect: false,
                explanation:
                    'ディストリビューション削除予約ではありません。ExpiresはHTTPレスポンスのキャッシュ期限を表すヘッダーです。',
            },
            {
                text: 'SSL/TLS証明書の有効期限をCloudFrontへ登録するためだけのヘッダー',
                isCorrect: false,
                explanation:
                    '証明書の有効期限登録用ではありません。SSL/TLS証明書（HTTPS通信で使う証明書）の期限管理と、HTTPのExpiresヘッダーは別です。',
            },
            {
                text: 'ビューワーのログインセッションを必ず終了させるCloudFront専用ヘッダー',
                isCorrect: false,
                explanation:
                    'ログインセッション終了専用のCloudFrontヘッダーではありません。Expiresはキャッシュ期限を指定する標準的なHTTPヘッダーです。',
            },
        ],
        explanation:
            '新しい設定ではCache-Controlを使うことが多いですが、Expiresもキャッシュ期間の判断に関係します。両方を使う場合は矛盾した指示にならないようにします。',
    },
    {
        question:
            'CloudFrontにおける「キャッシュヒット」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'リクエストに対応する有効なオブジェクトがCloudFrontのキャッシュにあり、オリジンへ取りに行かずに返せる状態',
                isCorrect: true,
                explanation:
                    'キャッシュヒット（キャッシュから返せる状態）では、ビューワーへの応答をCloudFrontのエッジロケーションから返せます。これによりオリジン負荷の削減とレスポンス遅延の低減が期待できます。',
            },
            {
                text: 'CloudFrontが必ずオリジンへリクエストを転送した状態',
                isCorrect: false,
                explanation:
                    'オリジンへ取りに行く状態はキャッシュミスや再検証が必要な状態です。キャッシュヒットでは、有効なキャッシュから応答できます。',
            },
            {
                text: 'ビューワーが間違ったURLへアクセスして404になる状態',
                isCorrect: false,
                explanation:
                    '404はHTTPステータスコード（リソースが見つからないことを示す番号）です。キャッシュヒットは、リクエストに対応するキャッシュが有効に存在する状態を指します。',
            },
            {
                text: 'CloudFrontのDNS名が削除された状態',
                isCorrect: false,
                explanation:
                    'DNS名の削除状態ではありません。キャッシュヒットはCloudFront内部のキャッシュ判定に関する用語です。',
            },
        ],
        explanation:
            'キャッシュヒット率が高いほど、CloudFrontがエッジから返せる割合が増えます。ただし、キャッシュしてはいけない個人別データまでヒットさせないように設計が必要です。',
    },
    {
        question:
            'CloudFrontにおける「キャッシュミス」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'リクエストに対応する有効なオブジェクトがCloudFrontのキャッシュになく、オリジンへ取得しに行く状態',
                isCorrect: true,
                explanation:
                    'キャッシュミス（キャッシュにない状態）では、CloudFrontはオリジン（元データを持つ配信元）へリクエストしてコンテンツを取得します。取得したレスポンスは、設定に応じてCloudFrontにキャッシュされます。',
            },
            {
                text: 'CloudFrontがキャッシュから正常に応答できた状態',
                isCorrect: false,
                explanation:
                    'キャッシュから正常に応答できる状態はキャッシュヒットです。キャッシュミスは、CloudFrontがオリジンへ取りに行く必要がある状態です。',
            },
            {
                text: 'CloudFrontのディストリビューション作成に失敗した状態',
                isCorrect: false,
                explanation:
                    'ディストリビューション作成エラーではありません。キャッシュミスは配信時のキャッシュ判定に関する用語です。',
            },
            {
                text: 'S3バケットの暗号化設定が必ず間違っている状態',
                isCorrect: false,
                explanation:
                    'S3の暗号化設定ミスとは限りません。初回アクセス、TTL切れ、キャッシュキーの違いなどでもキャッシュミスは発生します。',
            },
        ],
        explanation:
            '初回アクセスではキャッシュがまだないためキャッシュミスになりやすく、2回目以降はTTLやキャッシュキーの条件が合えばキャッシュヒットしやすくなります。',
    },
    {
        question:
            'CloudFrontにおける「Invalidation（無効化）」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: '指定したパスのCloudFrontキャッシュを期限前に無効化し、次回以降に新しい内容を取得させる操作',
                isCorrect: true,
                explanation:
                    'Invalidation（無効化）は、CloudFrontに残っているキャッシュをTTL切れ前に無効化する操作です。例えば `/images/logo.png` や `/images/*` のようにパスを指定して、古いコンテンツを使わせないようにします。',
            },
            {
                text: 'オリジンのS3バケット内のファイルを完全に削除する操作',
                isCorrect: false,
                explanation:
                    'InvalidationはCloudFrontキャッシュを無効化する操作であり、オリジンのS3オブジェクト（S3に保存されるファイル相当のデータ）を削除する操作ではありません。',
            },
            {
                text: 'CloudFrontディストリビューションを必ず削除して作り直す操作',
                isCorrect: false,
                explanation:
                    'ディストリビューション削除ではありません。既存のディストリビューションに対して、指定パスのキャッシュを無効化できます。',
            },
            {
                text: 'DNSレコードを削除して独自ドメインを使えなくする操作',
                isCorrect: false,
                explanation:
                    'DNSレコードを削除する操作ではありません。InvalidationはCloudFront内部のキャッシュに対する操作です。',
            },
        ],
        explanation:
            'ファイルを更新したのに古い内容が表示される場合、TTLが切れるのを待つか、Invalidationで対象パスのキャッシュを無効化します。ワイルドカード `*` を使う場合は、`/images/*` のようにパスの末尾に置きます。',
    },
    {
        question:
            'CloudFrontで扱う「HTTPメソッド」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'GET、HEAD、POSTなど、HTTPリクエストでクライアントが実行したい操作を示す種類',
                isCorrect: true,
                explanation:
                    'HTTPメソッド（HTTPリクエストの操作種別）には、GET、HEAD、OPTIONS、PUT、PATCH、POST、DELETEなどがあります。CloudFrontでは、キャッシュビヘイビア（パスごとの配信・キャッシュ設定）ごとに処理するメソッドを設定します。',
            },
            {
                text: 'CloudFrontのディストリビューションIDを暗号化する方式',
                isCorrect: false,
                explanation:
                    '暗号化方式ではありません。HTTPメソッドは、Webリクエストがどのような操作を意図しているかを示す値です。',
            },
            {
                text: 'S3バケットのリージョンを自動判定するための名前',
                isCorrect: false,
                explanation:
                    'S3バケットのリージョン判定名ではありません。HTTPメソッドはHTTP通信で使われる操作種別です。',
            },
            {
                text: 'CloudFrontのキャッシュTTLを秒単位で指定する項目',
                isCorrect: false,
                explanation:
                    'TTL（キャッシュを保持してよい時間）とは別です。HTTPメソッドはGETやPOSTなどのリクエスト種別です。',
            },
        ],
        explanation:
            'Webページの取得ではGETがよく使われ、APIではPOSTやPUTなどが使われることがあります。CloudFrontの前段にAPIを置く場合は、必要なHTTPメソッドを許可する必要があります。',
    },
    {
        question:
            'CloudFrontの「許可HTTPメソッド」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudFrontが受け付け、必要に応じてオリジンへ転送するHTTPメソッドの範囲を決める設定',
                isCorrect: true,
                explanation:
                    '許可HTTPメソッド（CloudFrontが処理・転送するメソッドの設定）では、GET/HEAD、GET/HEAD/OPTIONS、またはGET/HEAD/OPTIONS/PUT/PATCH/POST/DELETEの組み合わせを選びます。これはCloudFrontが受け付けてオリジンへ転送できるメソッドの範囲であり、キャッシュ対象HTTPメソッドとは別です。',
            },
            {
                text: 'CloudFrontが必ずキャッシュするHTTPメソッドを7種類すべてに広げる設定',
                isCorrect: false,
                explanation:
                    '許可HTTPメソッドは、CloudFrontが受け付けてオリジンへ転送できるメソッドの範囲です。キャッシュ対象HTTPメソッドとは別で、すべてのメソッドがキャッシュ対象になるわけではありません。',
            },
            {
                text: 'オリジンのOSユーザーに付与するLinux権限',
                isCorrect: false,
                explanation:
                    'OSユーザー権限ではありません。CloudFrontの配信設定として、どのHTTPメソッドを扱うかを指定します。',
            },
            {
                text: 'ビューワーのブラウザ種類を許可リスト化する設定',
                isCorrect: false,
                explanation:
                    'ブラウザ種類の許可リストではありません。許可HTTPメソッドはGETやPOSTなどのリクエスト操作種別を扱います。',
            },
        ],
        explanation:
            '許可していないメソッドでアクセスすると、CloudFrontはInvalid methodとして403を返すことがあります。PUTやDELETEなどを許可する場合は、オリジン側で不要な更新・削除ができないようにアクセス制御も必要です。',
    },
    {
        question:
            'CloudFrontの「キャッシュ対象HTTPメソッド」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudFrontがレスポンスをキャッシュする対象のHTTPメソッドを決める設定で、GET/HEADまたはGET/HEAD/OPTIONSを選べる',
                isCorrect: true,
                explanation:
                    'キャッシュ対象HTTPメソッド（レスポンスをキャッシュするメソッドの設定）は、GETとHEAD、またはGET、HEAD、OPTIONSから選びます。CloudFrontはPOST、PUT、PATCH、DELETEのレスポンスを通常のキャッシュ対象にはしません。',
            },
            {
                text: '許可HTTPメソッドで選んだすべてのメソッドを必ずキャッシュする設定',
                isCorrect: false,
                explanation:
                    '許可HTTPメソッドとキャッシュ対象HTTPメソッドは別です。例えばPOSTを許可してオリジンへ転送できても、POSTレスポンスがCloudFrontの通常キャッシュ対象になるわけではありません。',
            },
            {
                text: 'CloudFrontがオリジンへ送るHTTPヘッダーをすべて削除する設定',
                isCorrect: false,
                explanation:
                    'HTTPヘッダー（リクエストやレスポンスに付く追加情報）の転送制御ではありません。どのメソッドのレスポンスをキャッシュするかを決めます。',
            },
            {
                text: 'CloudFrontのログに記録するメソッド名を非表示にする設定',
                isCorrect: false,
                explanation:
                    'ログ表示の設定ではありません。キャッシュ対象HTTPメソッドはキャッシュ動作に関する設定です。',
            },
        ],
        explanation:
            'CORS（別オリジンからのブラウザアクセス制御）のプリフライトで使うOPTIONSをキャッシュしたい場合は、GET/HEAD/OPTIONSを選びます。あわせて、OriginやAccess-Control-Request-Methodなど、CORSの判定に必要なヘッダーを適切に扱う必要があります。',
    },
    {
        question:
            'CloudFrontにおける「クエリ文字列」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'URLの `?` 以降に付くパラメータで、キャッシュキーやオリジンへの転送対象に含めるかを設定できる値',
                isCorrect: true,
                explanation:
                    'クエリ文字列（URLの `?a=1` のような追加パラメータ）は、CloudFrontでキャッシュキー（キャッシュを区別する識別子）に含めたり、オリジンリクエスト（CloudFrontからオリジンへのリクエスト）へ転送したりできます。',
            },
            {
                text: 'CloudFrontのディストリビューションを削除するための確認文字列',
                isCorrect: false,
                explanation:
                    '削除確認文字列ではありません。クエリ文字列はURLに付くパラメータです。',
            },
            {
                text: 'S3バケットの中に作られる隠しフォルダ',
                isCorrect: false,
                explanation:
                    'S3のフォルダではありません。クエリ文字列はHTTPリクエストURLの一部です。',
            },
            {
                text: 'HTTPメソッドをGETからPOSTへ自動変換する設定',
                isCorrect: false,
                explanation:
                    'HTTPメソッド変換の設定ではありません。クエリ文字列はリクエストに付く追加パラメータです。',
            },
        ],
        explanation:
            '例えば `/search?q=cloudfront` の `q=cloudfront` がクエリ文字列です。内容がクエリ文字列で変わるページでは、必要なクエリ文字列をキャッシュキーに含めないと誤った内容を返す可能性があります。',
    },
    {
        question:
            'CloudFrontにおける「Cookie」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'ブラウザなどがリクエストに付ける状態管理用データで、必要に応じてキャッシュキーやオリジンへの転送対象にできる値',
                isCorrect: true,
                explanation:
                    'Cookie（ブラウザなどが保持して送信する状態管理用データ）は、ログイン状態、表示言語、ABテストなどに使われます。CloudFrontでは、どのCookieをキャッシュキーに含めるか、またはオリジンへ転送するかを設定できます。',
            },
            {
                text: 'CloudFrontのエッジロケーションを増やすための申請データ',
                isCorrect: false,
                explanation:
                    'エッジロケーション（世界各地にある配信用の拠点）を増やす申請データではありません。CookieはHTTPリクエストに含まれる状態管理用データです。',
            },
            {
                text: 'CloudFrontがキャッシュを完全に無効化するための専用コマンド',
                isCorrect: false,
                explanation:
                    'キャッシュ無効化の操作はInvalidation（無効化）です。Cookieはリクエストに付くデータです。',
            },
            {
                text: 'S3オブジェクトを暗号化するための鍵',
                isCorrect: false,
                explanation:
                    '暗号鍵ではありません。CookieはHTTP通信でクライアントとサーバーの間で使われる状態管理用データです。',
            },
        ],
        explanation:
            'Cookieをキャッシュキーに含めない設定では、Cookieだけが違うリクエストは同じキャッシュとして扱われることがあります。ユーザーごとに内容が変わるCookieは慎重に扱います。',
    },
    {
        question:
            'CloudFrontにおける「HTTPヘッダー」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'HTTPリクエストやレスポンスに付く追加情報で、必要に応じてキャッシュキーやオリジンへの転送対象にできる値',
                isCorrect: true,
                explanation:
                    'HTTPヘッダー（リクエストやレスポンスに付く追加情報）には、`Accept-Encoding`、`Origin`、`Authorization`、`User-Agent` などがあります。CloudFrontでは一部のヘッダーをキャッシュキーに含めたり、オリジンへ転送したりできます。',
            },
            {
                text: 'Webページの一番上に表示される見出し画像だけを指す用語',
                isCorrect: false,
                explanation:
                    '画面上の見出し画像ではありません。HTTPヘッダーはHTTP通信のメタデータです。',
            },
            {
                text: 'CloudFrontの料金明細の先頭行',
                isCorrect: false,
                explanation:
                    '料金明細の行ではありません。HTTPヘッダーはWeb通信のリクエストやレスポンスに含まれる情報です。',
            },
            {
                text: 'S3バケットのオブジェクト名を必ず変更する設定',
                isCorrect: false,
                explanation:
                    'オブジェクト名を変更する設定ではありません。ヘッダーはリクエストやレスポンスの追加情報です。',
            },
        ],
        explanation:
            'ヘッダーをキャッシュキーに含めると、ヘッダー値ごとに別キャッシュになります。Authorization（認証情報を送るためのヘッダー）のような認証に関係するヘッダーを扱う場合は、ユーザーごとのレスポンスを誤って共有キャッシュしないよう注意が必要です。',
    },
    {
        question:
            'CloudFrontにおける「圧縮配信」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'ビューワーが対応している場合に、GzipやBrotliなどでコンテンツサイズを小さくして配信する仕組み',
                isCorrect: true,
                explanation:
                    '圧縮配信（ファイルサイズを小さくして送る仕組み）では、ビューワーが `Accept-Encoding` ヘッダーでGzipやBrotliに対応していることを示した場合、CloudFrontが圧縮済みオブジェクトを返したり、条件を満たすオブジェクトを圧縮したりできます。',
            },
            {
                text: 'CloudFrontが画像の意味を解析して自動で別画像に差し替える機能',
                isCorrect: false,
                explanation:
                    '画像差し替え機能ではありません。圧縮配信は、同じ内容をより小さいデータ量で送るための仕組みです。',
            },
            {
                text: 'オリジンのディスク容量を必ず削減するバックアップ機能',
                isCorrect: false,
                explanation:
                    'オリジンの保存容量を削減するバックアップ機能ではありません。CloudFrontからビューワーへの配信データ量を減らすことに関係します。',
            },
            {
                text: 'HTTPメソッドを自動的にGETだけへ変換する機能',
                isCorrect: false,
                explanation:
                    'HTTPメソッド変換ではありません。圧縮配信はレスポンス本文のサイズを小さくする仕組みです。',
            },
        ],
        explanation:
            'CloudFrontが自動圧縮するには、ビューワーがAccept-Encodingでgzipまたはbrに対応していることに加え、対象Content-Type（レスポンス本文の種類を示すヘッダー）やサイズなどの条件を満たす必要があります。圧縮を有効にすると、`Accept-Encoding` はキャッシュキーやオリジンリクエストで特別に扱われます。',
    },
    {
        question:
            'CloudFrontの「キャッシュポリシー」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'キャッシュキーに含めるクエリ文字列、Cookie、HTTPヘッダーや、TTLなどをまとめて管理する設定',
                isCorrect: true,
                explanation:
                    'キャッシュポリシー（キャッシュキーやTTLを管理する設定）では、キャッシュキーに含めるクエリ文字列、Cookie、HTTPヘッダー、最小TTL、デフォルトTTL、最大TTL、圧縮サポートなどを指定します。',
            },
            {
                text: 'CloudFrontからビューワーへ返すHTTPレスポンスヘッダーだけを追加・削除する設定',
                isCorrect: false,
                explanation:
                    'レスポンスヘッダーの追加・削除はレスポンスヘッダーポリシーの役割です。キャッシュポリシーはキャッシュキーやTTLを扱います。',
            },
            {
                text: 'CloudFrontのオリジンを自動的に作成する設定',
                isCorrect: false,
                explanation:
                    'オリジン作成機能ではありません。キャッシュポリシーは既存のキャッシュビヘイビアに付けて、キャッシュ動作を制御する設定です。',
            },
            {
                text: 'S3バケットのパブリックアクセスブロックを解除する設定',
                isCorrect: false,
                explanation:
                    'S3の公開設定ではありません。CloudFrontのキャッシュ判定と保持時間に関する設定です。',
            },
        ],
        explanation:
            'キャッシュポリシーでキャッシュキーに含めたクエリ文字列、Cookie、HTTPヘッダーは、CloudFrontからオリジンへのリクエストにも自動的に含まれます。キャッシュに関係しない追加情報をオリジンへ送りたい場合は、オリジンリクエストポリシーを使います。',
    },
    {
        question:
            'CloudFrontの「オリジンリクエストポリシー」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'キャッシュキーには含めず、CloudFrontからオリジンへ転送するクエリ文字列、Cookie、HTTPヘッダーを決める設定',
                isCorrect: true,
                explanation:
                    'オリジンリクエストポリシー（オリジンへ渡す情報を決める設定）は、CloudFrontがオリジンへ送る追加のクエリ文字列、Cookie、HTTPヘッダーを制御します。ここで指定した値はオリジンへ送られますが、キャッシュキーには含まれません。',
            },
            {
                text: 'CloudFrontがビューワーへ返すレスポンスヘッダーだけを追加する設定',
                isCorrect: false,
                explanation:
                    'ビューワーへ返すレスポンスヘッダーの追加・削除はレスポンスヘッダーポリシーの役割です。オリジンリクエストポリシーはオリジンへ送るリクエストを制御します。',
            },
            {
                text: 'CloudFrontのキャッシュをすべて無効化する操作',
                isCorrect: false,
                explanation:
                    'キャッシュを無効化する操作はInvalidationです。オリジンリクエストポリシーはオリジンへ転送する値を決める設定です。',
            },
            {
                text: 'CloudFrontのディストリビューションを別リージョンへ移動する設定',
                isCorrect: false,
                explanation:
                    'リージョン移動の設定ではありません。CloudFrontはグローバルサービスであり、オリジンリクエストポリシーはリクエストに含める値を扱います。',
            },
        ],
        explanation:
            'キャッシュポリシーと一緒に使うと、キャッシュキーに入れる値と、オリジンへ送るだけの値を分けられます。これにより、キャッシュヒット率を下げすぎずにオリジンへ必要情報を渡せます。',
    },
    {
        question:
            'CloudFrontの「レスポンスヘッダーポリシー」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudFrontがビューワーへ返すレスポンスに、HTTPヘッダーを追加・削除するための設定',
                isCorrect: true,
                explanation:
                    'レスポンスヘッダーポリシー（レスポンスに付けるHTTPヘッダーを管理する設定）では、CORSヘッダー（別オリジンアクセス制御用ヘッダー）、セキュリティヘッダー、カスタムヘッダーの追加や、不要なヘッダーの削除を設定できます。',
            },
            {
                text: 'CloudFrontがオリジンへ送るCookieだけをキャッシュキーに含める設定',
                isCorrect: false,
                explanation:
                    'Cookieをキャッシュキーに含める設定はキャッシュポリシーの役割です。レスポンスヘッダーポリシーはビューワーへ返すレスポンスヘッダーを扱います。',
            },
            {
                text: 'CloudFrontの許可HTTPメソッドを7種類に固定する設定',
                isCorrect: false,
                explanation:
                    '許可HTTPメソッドの設定ではありません。レスポンスヘッダーポリシーはHTTPレスポンスのヘッダーを制御します。',
            },
            {
                text: 'CloudFrontのオリジンフェイルオーバー条件を設定する項目',
                isCorrect: false,
                explanation:
                    'オリジンフェイルオーバー条件ではありません。レスポンスヘッダーポリシーは、CloudFrontが返すレスポンスに含めるヘッダーを管理します。',
            },
        ],
        explanation:
            '例えばセキュリティヘッダーを全ページに付けたい場合、アプリケーション側を変更せずにCloudFrontのレスポンスヘッダーポリシーで付与できる場合があります。',
    },
    {
        question:
            'CloudFrontの「マネージドポリシー」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'AWSが用意している定番用途向けのキャッシュポリシー、オリジンリクエストポリシー、レスポンスヘッダーポリシー',
                isCorrect: true,
                explanation:
                    'マネージドポリシー（AWSが管理する定番設定）は、CloudFrontでよく使う用途向けにAWSが用意したポリシーです。例えば、キャッシュ最適化、キャッシュ無効化、CORS（別オリジンからのブラウザアクセス制御）、セキュリティヘッダー向けの管理ポリシーがあります。',
            },
            {
                text: '利用者が作成し、自由に名前や設定を変更できるポリシーだけを指す用語',
                isCorrect: false,
                explanation:
                    '利用者が作成するものはカスタムポリシーです。マネージドポリシーはAWSが用意・管理しているポリシーです。',
            },
            {
                text: 'CloudFrontディストリビューションを自動的に削除するポリシー',
                isCorrect: false,
                explanation:
                    '削除ポリシーではありません。マネージドポリシーはキャッシュ、オリジンリクエスト、レスポンスヘッダーなどの設定テンプレートとして使えます。',
            },
            {
                text: 'S3バケットポリシーをCloudFrontが自動生成する機能',
                isCorrect: false,
                explanation:
                    'S3バケットポリシー自動生成機能ではありません。CloudFrontの各種ポリシー設定として、AWSが用意したものを指します。',
            },
        ],
        explanation:
            'まずはマネージドポリシーで用途に合うものがないか確認し、合わない場合にカスタムポリシーを作ると設定ミスを減らしやすくなります。',
    },
    {
        question:
            'CloudFrontの「カスタムポリシー」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: '用途に合わせて利用者が作成する、キャッシュやオリジンリクエストやレスポンスヘッダーの独自設定',
                isCorrect: true,
                explanation:
                    'カスタムポリシー（利用者が作る用途別設定）は、マネージドポリシーでは合わない場合に作成します。種類に応じて、キャッシュキー、TTL、オリジンへ転送する値、ビューワーへ返すレスポンスヘッダーなどを用途に合わせて指定できます。',
            },
            {
                text: 'AWSが内容を固定しており、利用者が設定を一切選べないポリシー',
                isCorrect: false,
                explanation:
                    '内容がAWS側で用意されているものはマネージドポリシーです。カスタムポリシーは利用者が要件に合わせて作成します。',
            },
            {
                text: 'CloudFrontのエッジロケーションを物理的に追加するための申請',
                isCorrect: false,
                explanation:
                    'エッジロケーション追加申請ではありません。カスタムポリシーはCloudFrontの配信動作を細かく調整する設定です。',
            },
            {
                text: 'CloudFrontのアクセスログを自動的に翻訳する機能',
                isCorrect: false,
                explanation:
                    'ログ翻訳機能ではありません。カスタムポリシーはキャッシュやリクエスト、レスポンスヘッダーの扱いを自分で定義する設定です。',
            },
        ],
        explanation:
            'カスタムポリシーは便利ですが、不要なヘッダーやCookieを含めすぎるとキャッシュが細かく分かれてヒット率が下がることがあります。必要な値だけを選ぶのが基本です。',
    },
    {
        question:
            'CloudFrontの「代替ドメイン名 / CNAME」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudFront標準のドメイン名ではなく、www.example.comのような独自ドメインで配信するためにディストリビューションへ登録する名前',
                isCorrect: true,
                explanation:
                    '代替ドメイン名 / CNAME（CloudFrontで独自ドメインを使うための設定）は、`d111111abcdef8.cloudfront.net` の代わりに `www.example.com` のような名前でアクセスさせるために使います。代替ドメイン名は小文字で登録し、同じ名前を複数のCloudFrontディストリビューションへ重複登録することはできません。',
            },
            {
                text: 'CloudFrontが自動的に作成するS3バケット名',
                isCorrect: false,
                explanation:
                    'S3バケット名ではありません。代替ドメイン名は、CloudFrontディストリビューションに紐づける独自ドメイン名です。',
            },
            {
                text: 'CloudFrontのキャッシュを削除するためのワイルドカード指定',
                isCorrect: false,
                explanation:
                    'キャッシュ削除に関係する操作はInvalidation（無効化）です。代替ドメイン名はアクセス時に使うドメイン名の設定です。',
            },
            {
                text: 'CloudFrontからオリジンへ送るCookieを選ぶ設定',
                isCorrect: false,
                explanation:
                    'Cookieの転送制御はキャッシュポリシーやオリジンリクエストポリシーで扱います。代替ドメイン名は独自ドメイン利用のための設定です。',
            },
        ],
        explanation:
            '独自ドメインを使うには、代替ドメイン名をCloudFrontに追加し、その名前をカバーするSSL/TLS証明書（HTTPS通信で使う証明書）を関連付け、DNSでCloudFrontへ向けます。Route 53では、CloudFrontディストリビューションへA/AAAAエイリアスレコードを向ける構成がよく使われます。',
    },
    {
        question:
            'CloudFrontで使う「SSL/TLS証明書」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'HTTPS通信でドメインの正当性を示し、通信を暗号化するために使う証明書',
                isCorrect: true,
                explanation:
                    'SSL/TLS証明書（HTTPS通信で使う証明書）は、ブラウザなどのビューワー（CloudFrontへアクセスするクライアント）が接続先ドメインを確認し、暗号化通信を行うために使います。独自ドメインをCloudFrontで使う場合、そのドメインをカバーする証明書が必要です。',
            },
            {
                text: 'CloudFrontのキャッシュTTLを長くするための証明書',
                isCorrect: false,
                explanation:
                    'TTL（キャッシュを保持してよい時間）を制御するものではありません。SSL/TLS証明書はHTTPS通信に関係します。',
            },
            {
                text: 'S3バケットのオブジェクト名を自動変換するための証明書',
                isCorrect: false,
                explanation:
                    'S3オブジェクト名の変換機能ではありません。証明書はドメイン確認と暗号化通信に使います。',
            },
            {
                text: 'CloudFrontのアクセスログを圧縮するための証明書',
                isCorrect: false,
                explanation:
                    'ログ圧縮用ではありません。SSL/TLS証明書は、HTTPSで安全に通信するためのものです。',
            },
        ],
        explanation:
            'CloudFrontに代替ドメイン名を追加する場合、証明書のSAN（Subject Alternative Name。証明書が有効なドメイン名の一覧）にそのドメイン名が含まれている必要があります。`*.example.com` の証明書は `www.example.com` や `api.example.com` には使えますが、`example.com` 自体や `a.b.example.com` には使えません。',
    },
    {
        question:
            'CloudFrontで使う「ACM（AWS Certificate Manager）」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'AWSでSSL/TLS証明書を発行・管理できるサービスで、CloudFrontのビューワー向け証明書はus-east-1で用意する必要がある',
                isCorrect: true,
                explanation:
                    'ACM（AWS Certificate Manager。AWSで証明書を発行・管理するサービス）を使うと、CloudFrontのHTTPS用証明書を管理できます。ビューワーとCloudFront間のHTTPSで使うACM証明書は、米国東部（バージニア北部）リージョンである `us-east-1` に作成またはインポートする必要があります。',
            },
            {
                text: 'CloudFrontのキャッシュキーだけを作成するサービス',
                isCorrect: false,
                explanation:
                    'キャッシュキー（キャッシュを区別する識別子）を作るサービスではありません。ACMは証明書の発行・管理に使います。',
            },
            {
                text: 'S3バケットポリシーを必ず自動削除するサービス',
                isCorrect: false,
                explanation:
                    'バケットポリシー削除サービスではありません。ACMはSSL/TLS証明書を扱います。',
            },
            {
                text: 'CloudFrontのオリジンフェイルオーバー条件を設定するサービス',
                isCorrect: false,
                explanation:
                    'オリジンフェイルオーバー（配信元障害時に別の配信元へ切り替える仕組み）の条件設定ではありません。ACMは証明書管理のサービスです。',
            },
        ],
        explanation:
            'CloudFrontはグローバルサービスですが、ビューワー向けのACM証明書は `us-east-1` が必要です。一方、オリジン側がALBなどの場合、そのオリジンで使う証明書はオリジン側のリージョンで管理することがあります。',
    },
    {
        question:
            'CloudFrontの「ビューワープロトコルポリシー」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'ビューワーからCloudFrontへのアクセスをHTTP/HTTPSのどちらで許可するかを決める設定',
                isCorrect: true,
                explanation:
                    'ビューワープロトコルポリシー（利用者からCloudFrontへの通信方式を決める設定）では、HTTPとHTTPSの両方を許可する、HTTPをHTTPSへリダイレクトする、HTTPSのみ許可する、といった選択ができます。',
            },
            {
                text: 'CloudFrontからオリジンへ接続するときのHTTP/HTTPSを決める設定',
                isCorrect: false,
                explanation:
                    'CloudFrontからオリジンへの通信方式はオリジンプロトコルポリシーで扱います。ビューワープロトコルポリシーは、ビューワーからCloudFrontへの通信を扱います。',
            },
            {
                text: 'CloudFrontがキャッシュするCookieの一覧を決める設定',
                isCorrect: false,
                explanation:
                    'Cookieの扱いはキャッシュポリシーやオリジンリクエストポリシーで設定します。ビューワープロトコルポリシーはHTTP/HTTPSの扱いです。',
            },
            {
                text: 'CloudFrontのエッジロケーションをリージョン単位で固定する設定',
                isCorrect: false,
                explanation:
                    'エッジロケーション固定の設定ではありません。ビューワープロトコルポリシーは通信プロトコルの制御です。',
            },
        ],
        explanation:
            '通信経路は「ビューワー → CloudFront」と「CloudFront → オリジン」に分けて考えます。ビューワープロトコルポリシーは前者のHTTP/HTTPSを制御します。',
    },
    {
        question:
            'CloudFrontの「オリジンプロトコルポリシー」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudFrontからカスタムオリジンへ接続するときにHTTP/HTTPSのどちらを使うかを決める設定',
                isCorrect: true,
                explanation:
                    'オリジンプロトコルポリシー（CloudFrontからオリジンへの通信方式を決める設定）は、カスタムオリジンへの接続でHTTPのみ、HTTPSのみ、またはビューワーに合わせる、を選ぶ設定です。',
            },
            {
                text: 'ビューワーからCloudFrontへの通信をHTTPSだけにする設定',
                isCorrect: false,
                explanation:
                    'ビューワーからCloudFrontへの通信はビューワープロトコルポリシーで扱います。オリジンプロトコルポリシーはCloudFrontからオリジンへの通信です。',
            },
            {
                text: 'CloudFrontのキャッシュをすべて即時削除する設定',
                isCorrect: false,
                explanation:
                    'キャッシュ削除はInvalidation（無効化）で行います。オリジンプロトコルポリシーはHTTP/HTTPS接続の設定です。',
            },
            {
                text: 'CloudFrontの代替ドメイン名を小文字へ変換する設定',
                isCorrect: false,
                explanation:
                    '代替ドメイン名の変換設定ではありません。CloudFrontからオリジンへどのプロトコルで接続するかを決めます。',
            },
        ],
        explanation:
            'オリジンプロトコルポリシーはカスタムオリジン向けの設定です。S3静的ウェブサイトエンドポイントはカスタムオリジンとして扱われ、HTTPS接続をサポートしないため、CloudFrontからはHTTPで接続します。',
    },
    {
        question:
            'CloudFrontの「HTTP to HTTPSリダイレクト」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'ビューワーがHTTPでアクセスしたとき、CloudFrontがHTTPSのURLへリダイレクトする設定',
                isCorrect: true,
                explanation:
                    'HTTP to HTTPSリダイレクト（HTTPアクセスをHTTPSへ転送する設定）は、ビューワープロトコルポリシーで「Redirect HTTP to HTTPS」を選ぶことで利用できます。GETやHEADのHTTPリクエストはHTTPS URLへリダイレクトされますが、DELETE、OPTIONS、PATCH、POST、PUTは403になる点に注意します。',
            },
            {
                text: 'CloudFrontからオリジンへのHTTPS通信をHTTPへ変換する設定',
                isCorrect: false,
                explanation:
                    '逆方向の変換ではありません。HTTP to HTTPSリダイレクトは、ビューワーからCloudFrontへのHTTPアクセスをHTTPSへ誘導する設定です。',
            },
            {
                text: 'S3バケット内のhttpという名前のフォルダをhttpsへリネームする機能',
                isCorrect: false,
                explanation:
                    'S3オブジェクト名やフォルダ名を変更する機能ではありません。通信プロトコルをHTTPSへ誘導する設定です。',
            },
            {
                text: 'CloudFrontのキャッシュTTLをHTTPSアクセス時だけ0にする設定',
                isCorrect: false,
                explanation:
                    'TTLを0にする設定ではありません。HTTP to HTTPSリダイレクトはビューワーアクセスのプロトコル制御です。',
            },
        ],
        explanation:
            '注意点として、CloudFrontはHTTPのDELETE、OPTIONS、PATCH、POST、PUTをHTTPSへリダイレクトせず、該当設定では403を返します。APIの前段で使う場合はHTTPメソッドも考慮します。',
    },
    {
        question:
            'CloudFrontの「OAC（Origin Access Control）」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudFrontからS3オリジンへのリクエストを署名し、S3を直接公開せずCloudFront経由に制限するための推奨機能',
                isCorrect: true,
                explanation:
                    'OAC（Origin Access Control。CloudFrontからオリジンへのアクセスを制御する仕組み）は、CloudFrontがS3オリジンへ認証済みリクエストを送るために使います。S3バケットを直接公開せず、CloudFront経由のアクセスに制限できます。',
            },
            {
                text: 'CloudFrontの代替ドメイン名を自動で登録するDNSサービス',
                isCorrect: false,
                explanation:
                    'DNSサービスではありません。OACはCloudFrontからS3オリジンへのアクセス制御に使います。',
            },
            {
                text: 'CloudFrontのキャッシュをすべて圧縮して保存する設定',
                isCorrect: false,
                explanation:
                    'キャッシュ圧縮の設定ではありません。OACはオリジンへのアクセス制限に関係します。',
            },
            {
                text: 'ビューワーのブラウザにCookieを自動発行する機能',
                isCorrect: false,
                explanation:
                    'Cookie発行機能ではありません。OACはCloudFrontとS3オリジン間のアクセス制御です。',
            },
        ],
        explanation:
            '新しいS3オリジンの非公開配信では、レガシーなOAIよりOACの利用が推奨されます。ただし、S3静的ウェブサイトエンドポイントはカスタムオリジン扱いのため、OACは使えません。',
    },
    {
        question:
            'CloudFrontの「OAI（Origin Access Identity）」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudFront経由でS3へアクセスさせるために使われてきた古い仕組みで、現在はOACの利用が推奨される',
                isCorrect: true,
                explanation:
                    'OAI（Origin Access Identity。CloudFrontからS3へアクセスするためのレガシーな識別子）は、S3オリジンを直接公開せずにCloudFront経由へ制限するために使われてきた仕組みです。現在はより多くの機能に対応するOACが推奨されています。',
            },
            {
                text: 'ACMで証明書を自動更新するためのDNSレコード',
                isCorrect: false,
                explanation:
                    'ACM証明書のDNS検証レコードではありません。OAIはCloudFrontとS3のアクセス制限に関係します。',
            },
            {
                text: 'CloudFrontのレスポンスヘッダーを追加するためのポリシー',
                isCorrect: false,
                explanation:
                    'レスポンスヘッダーを追加するのはレスポンスヘッダーポリシーです。OAIはS3オリジンへのアクセス制御の仕組みです。',
            },
            {
                text: 'CloudFrontがHTTPをHTTPSへリダイレクトする設定',
                isCorrect: false,
                explanation:
                    'HTTP to HTTPSリダイレクトはビューワープロトコルポリシーで設定します。OAIはリダイレクト機能ではありません。',
            },
        ],
        explanation:
            'OAIは既存構成ではまだ見かけますが、新規構築では原則OACを検討します。移行時は、OAIの制約や既存バケットポリシーへの影響を確認します。',
    },
    {
        question:
            'S3オリジンをCloudFrontから非公開配信するときの「バケットポリシー」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'S3バケットに対するアクセス許可を定義し、CloudFrontからのアクセスだけを許可するために使えるポリシー',
                isCorrect: true,
                explanation:
                    'バケットポリシー（S3バケットへのアクセス許可を定義するJSON形式の設定）では、CloudFrontサービスプリンシパル（AWSサービスとしてのCloudFront）や特定ディストリビューションからのアクセスを許可できます。OACを使う場合も、S3側でCloudFrontにアクセス権を与える設定が必要です。',
            },
            {
                text: 'CloudFrontのキャッシュキーを自動で作るための設定',
                isCorrect: false,
                explanation:
                    'キャッシュキーはキャッシュポリシーで管理します。バケットポリシーはS3へのアクセス許可を制御します。',
            },
            {
                text: 'ACM証明書の有効期限を延長するための設定',
                isCorrect: false,
                explanation:
                    '証明書の有効期限管理ではありません。バケットポリシーはS3バケットのアクセス制御です。',
            },
            {
                text: 'CloudFrontのパスパターンを上から順に並べ替える設定',
                isCorrect: false,
                explanation:
                    'パスパターンの順序はCloudFrontのキャッシュビヘイビアで管理します。バケットポリシーはS3側の権限設定です。',
            },
        ],
        explanation:
            'OAC構成では、バケットポリシーに `cloudfront.amazonaws.com` と対象ディストリビューションのARN（AWSリソースを一意に表す名前）を条件として設定し、想定したCloudFrontからだけ読めるようにするのが基本です。読み取り配信のみなら `s3:GetObject` を許可し、アップロードや削除が必要な場合だけ最小権限で追加します。',
    },
    {
        question:
            'S3の「パブリックアクセスブロック」とCloudFrontの関係として最も適切な説明はどれですか?',
        options: [
            {
                text: 'S3バケットを不用意に公開しないための保護設定で、OACなどを使えばS3を公開せずCloudFront経由で配信できる',
                isCorrect: true,
                explanation:
                    'パブリックアクセスブロック（S3を意図せず公開しないための保護設定）は、S3バケットやアカウント単位でパブリック公開を抑止する機能です。全アクセスを禁止する設定ではなく、CloudFront OACのように明示的に許可された非公開アクセスとは別に考えます。',
            },
            {
                text: '有効にするとCloudFrontからもS3へ絶対にアクセスできなくなる設定',
                isCorrect: false,
                explanation:
                    'パブリックアクセスブロックは公開アクセスを防ぐための設定です。適切なOACとバケットポリシーを使えば、CloudFrontからの許可されたアクセスは可能です。',
            },
            {
                text: 'CloudFrontのエッジロケーションをすべて無効化する設定',
                isCorrect: false,
                explanation:
                    'エッジロケーションを無効化する設定ではありません。S3の公開アクセスを防ぐための設定です。',
            },
            {
                text: 'CloudFrontの独自ドメイン用証明書を自動作成する設定',
                isCorrect: false,
                explanation:
                    '証明書作成はACMなどで行います。パブリックアクセスブロックはS3の公開アクセス制御です。',
            },
        ],
        explanation:
            'S3静的ファイル配信では、S3をパブリック公開するよりも、パブリックアクセスブロックを有効にしたままCloudFront OAC経由にする構成がよく使われます。',
    },
]
