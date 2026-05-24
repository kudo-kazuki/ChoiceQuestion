import type { Question } from '@/types/test_questions'

export const testQuestions: Question[] = [
    {
            question:
                'Lambda から RDS に直接接続する API を作りました。アクセスが急増すると RDS の接続数が上限に達し、接続エラーやタイムアウトが発生します。最も適切な理解はどれですか?',
            options: [
                {
                    text: 'Lambda の同時実行が増えると、RDS への同時接続数も急増する可能性がある',
                    isCorrect: true,
                    explanation:
                        'Lambda はリクエスト増加に応じて同時実行が増えます。各実行が RDS へ接続すると、RDS の最大接続数（DB インスタンスサイズや設定に依存）に到達し、接続エラーやタイムアウトが発生することがあります。',
                },
                {
                    text: 'Lambda は自動スケールするため、RDS の接続数制限も自動的になくなる',
                    isCorrect: false,
                    explanation:
                        'Lambda がスケールしても、RDS の接続数上限がなくなるわけではありません。下流のデータベースを保護する設計が必要です。',
                },
                {
                    text: 'RDS に接続する場合、Lambda の同時実行数は常に1に固定される',
                    isCorrect: false,
                    explanation:
                        'RDS に接続しても Lambda の同時実行数が自動的に1に固定されるわけではありません。必要なら Reserved Concurrency などで制御します。',
                },
                {
                    text: '接続数枯渇は IAM ロール名を短くすれば解消する',
                    isCorrect: false,
                    explanation:
                        'IAM ロール名は RDS の接続数枯渇とは関係ありません。接続管理、同時実行数、DB 側の上限を確認します。',
                },
            ],
            explanation:
                'Lambda + RDS では、Lambda のスケール性能と RDS の接続数上限の差が問題になりやすいです。アプリの接続方法、同時実行数、RDS Proxy などを合わせて検討します。',
        },
    {
            question:
                'Lambda から RDS へ毎回新規接続し、処理後すぐ切断する実装にしています。リクエスト数が増えると接続確立の遅延と DB 負荷が目立ちます。改善として最も適切なものはどれですか?',
            options: [
                {
                    text: 'Lambda 実行環境が再利用される場合の接続再利用、RDS Proxy、同時実行数制御を検討し、DB 接続を過剰に増やさない',
                    isCorrect: true,
                    explanation:
                        'DB 接続の作成はコストが高く、同時に増えると RDS 側の負荷になります。RDS Proxy（アプリケーションと RDS の間で DB 接続を効率的に管理するサービス）や、Lambda 実行環境が再利用される場合の接続再利用を検討します。',
                },
                {
                    text: '毎回新規接続するほど、RDS の負荷は必ず下がる',
                    isCorrect: false,
                    explanation:
                        '接続確立そのものが負荷になります。リクエスト増加時には接続数や接続作成コストが問題になることがあります。',
                },
                {
                    text: 'Lambda のタイムアウトを短くすれば、DB 接続数は必ず安全に管理される',
                    isCorrect: false,
                    explanation:
                        'タイムアウトは最大実行時間の設定であり、DB 接続数を直接管理する仕組みではありません。',
                },
                {
                    text: 'RDS に接続する処理では、ログを出してはいけない',
                    isCorrect: false,
                    explanation:
                        '機密情報を出さない注意は必要ですが、接続開始、接続成功、クエリ時間、エラーなどのログは調査に役立ちます。',
                },
            ],
            explanation:
                'RDS 連携では、クエリ性能だけでなく接続確立コストと接続数管理が重要です。Lambda のスケールに DB 側が耐えられるように設計します。',
        },
    {
            question:
                'RDS Proxy の利用判断として最も適切なものはどれですか?',
            options: [
                {
                    text: 'Lambda から RDS への接続数急増を緩和し、接続管理を安定させたい場合に検討する',
                    isCorrect: true,
                    explanation:
                        'RDS Proxy は、アプリケーションと RDS の間で接続をプールし、接続数やフェイルオーバー時の影響を緩和するために使えます。Lambda + RDS の接続数問題で有力な選択肢です。',
                },
                {
                    text: 'RDS Proxy を使えば、SQL の設計やインデックス設計は一切不要になる',
                    isCorrect: false,
                    explanation:
                        'RDS Proxy は接続管理を助けますが、遅い SQL や不適切なインデックスを自動的に直すものではありません。',
                },
                {
                    text: 'RDS Proxy を使えば、RDS への IAM 権限や認証情報の管理は不要になる',
                    isCorrect: false,
                    explanation:
                        'RDS Proxy を使っても、接続認証や Secrets Manager などの認証情報管理、IAM DB 認証（IAM を使って DB 認証する仕組み）、IAM 権限の設計は必要です。',
                },
                {
                    text: 'RDS Proxy は DynamoDB テーブル専用のキャッシュ機能である',
                    isCorrect: false,
                    explanation:
                        'RDS Proxy は RDS などのリレーショナルデータベース接続を管理するためのサービスです。DynamoDB 専用キャッシュではありません。',
                },
            ],
            explanation:
                'RDS Proxy は万能な性能改善機能ではありません。接続管理の問題に効く選択肢であり、SQL 性能、スキーマ設計、トランザクション設計は別に考えます。',
        },
    {
            question:
                'Lambda でユーザープロフィールを読み書きする新規機能を作ります。アクセスは大量で、単純なキー参照が中心です。複雑な JOIN や複数テーブルの強いトランザクションは不要です。RDS と DynamoDB の選択として最も自然な判断はどれですか?',
            options: [
                {
                    text: 'アクセスパターンが単純なキー参照中心なら、DynamoDB も有力候補として検討する',
                    isCorrect: true,
                    explanation:
                        'DynamoDB はキー設計に合う高スケールな読み書きに向いています。Lambda とも相性がよく、RDS のような DB 接続数管理を意識しなくてよい場合があります。',
                },
                {
                    text: 'Lambda から使うデータベースは、常に RDS だけが正解である',
                    isCorrect: false,
                    explanation:
                        '要件によって RDS、DynamoDB、S3 などを選びます。リレーショナルな問い合わせや強い整合性が必要か、アクセスパターンが明確かで判断します。',
                },
                {
                    text: 'DynamoDB を使うと、パーティションキーやアクセスパターン設計は不要になる',
                    isCorrect: false,
                    explanation:
                        'DynamoDB ではパーティションキーやソートキー、アクセスパターンの設計が非常に重要です。設計なしに使うと性能やコストの問題が起きます。',
                },
                {
                    text: 'RDS 以外を選ぶと、Lambda からデータを保存できなくなる',
                    isCorrect: false,
                    explanation:
                        'Lambda は DynamoDB、S3、RDS など複数の保存先と連携できます。保存先は要件で選びます。',
                },
            ],
            explanation:
                'Lambda の保存先選定では、接続数、アクセスパターン、整合性、クエリ要件、運用負荷を見ます。DynamoDB は RDS のような DB 接続数管理を意識しなくてよい場合がある一方、キー設計が重要です。',
        },
    {
            question:
                '複数テーブルを JOIN し、複雑な検索条件で集計し、複数行を1つのトランザクションとして更新する業務システムがあります。Lambda から利用するデータストア選定として最も適切な判断はどれですか?',
            options: [
                {
                    text: 'リレーショナルな問い合わせやトランザクション要件が強いなら、RDS などのリレーショナルデータベースを検討する',
                    isCorrect: true,
                    explanation:
                        'RDS は SQL、JOIN、複数テーブルのトランザクションなどに向いています。Lambda から使う場合は、接続数管理や VPC 接続も合わせて設計します。',
                },
                {
                    text: '複雑な JOIN が多いほど、必ず DynamoDB の方が単純になる',
                    isCorrect: false,
                    explanation:
                        'DynamoDB は RDB のような JOIN を前提としたデータベースではありません。アクセスパターンに合わせた非正規化設計が必要です。',
                },
                {
                    text: 'RDS を使う場合、Lambda の接続数やトランザクション時間は考えなくてよい',
                    isCorrect: false,
                    explanation:
                        'RDS を使う場合こそ、接続数、トランザクション時間、ロック、タイムアウトを考慮する必要があります。',
                },
                {
                    text: 'トランザクションが必要な処理では、Lambda は一切使えない',
                    isCorrect: false,
                    explanation:
                        'Lambda から RDS のトランザクションを扱うことはできます。ただし、長時間トランザクションや再試行時の副作用には注意が必要です。',
                },
            ],
            explanation:
                'DynamoDB と RDS は優劣ではなく特性の違いです。SQL / JOIN / 複雑なトランザクションが必要なら RDS が自然な場合があります。',
        },
    {
            question:
                'Lambda で RDS のトランザクションを開始し、外部 API を呼び出してからコミットする実装を考えています。外部 API が遅い場合、最も注意すべき点はどれですか?',
            options: [
                {
                    text: 'トランザクションを開いたまま外部 API を待つと、ロック保持や接続占有が長くなり、他トランザクション待ちやタイムアウトにつながる',
                    isCorrect: true,
                    explanation:
                        'トランザクション中に外部 API の応答を待つと、DB 接続やロックを長時間保持し、他トランザクション待ちやタイムアウトにつながる可能性があります。外部処理と DB トランザクションの境界を慎重に設計します。',
                },
                {
                    text: 'Lambda 内なら、トランザクションは何時間でも安全に開き続けられる',
                    isCorrect: false,
                    explanation:
                        'Lambda には実行時間上限があり、RDS 側でも接続やロックの影響があります。長時間トランザクションは避けるべきです。',
                },
                {
                    text: '外部 API を呼ぶと、RDS のロックは自動的にすべて解除される',
                    isCorrect: false,
                    explanation:
                        '外部 API 呼び出しによって DB トランザクションのロックが自動解除されるわけではありません。明示的な commit / rollback が必要です。',
                },
                {
                    text: 'トランザクション中の外部 API 待ちは、DB 接続数に一切影響しない',
                    isCorrect: false,
                    explanation:
                        'トランザクション中は DB 接続を保持していることが多く、同時実行が増えると接続数やロック待ちに影響します。',
                },
            ],
            explanation:
                'Lambda + RDS のトランザクション設計では、短く閉じることが重要です。外部 API、ユーザー待ち、長い計算処理をトランザクション内に入れると問題が起きやすくなります。',
        },
    {
            question:
                'Lambda が RDS に注文を書き込んだ後、同じ処理内でイベント通知を送ります。通知送信に失敗した場合、注文レコードだけが残る可能性があります。設計として最も適切な考え方はどれですか?',
            options: [
                {
                    text: '注文保存と通知の整合性を考え、Outbox パターン（DB 更新とイベント送信を分離し、後から安全に再送できるようにする設計パターン）などで後続通知を確実に再処理できるようにする',
                    isCorrect: true,
                    explanation:
                        'Outbox パターン（DB 更新とイベント送信を分離し、後から安全に再送できるようにする設計パターン）は、DB 更新と同じトランザクションで送信予定イベントを記録し、後で別処理がイベント送信する設計です。DB 更新と外部通知の部分成功に対応しやすくなります。',
                },
                {
                    text: '通知送信に失敗したら、Lambda が RDS の注文レコードを必ず自動削除する',
                    isCorrect: false,
                    explanation:
                        'Lambda が成功済み DB 書き込みを自動で取り消すわけではありません。整合性を保つための設計が必要です。',
                },
                {
                    text: 'RDS に書いた後の外部通知は、失敗することがない前提でよい',
                    isCorrect: false,
                    explanation:
                        '外部通知やイベント送信は失敗する可能性があります。部分成功を前提に設計します。',
                },
                {
                    text: '通知失敗を隠すため、常に成功ログだけを出す',
                    isCorrect: false,
                    explanation:
                        '失敗を隠すと再処理や調査ができません。失敗イベントを記録し、再送できる設計が必要です。',
                },
            ],
            explanation:
                'RDS のトランザクションと外部イベント送信を同時に扱う場合、部分成功が問題になります。Outbox パターン（DB 更新とイベント送信を分離し、後から安全に再送できるようにする設計パターン）などで再処理可能にすると安全性が上がります。',
        },
    {
            question:
                'Lambda から RDS に接続するための認証情報を環境変数に平文で保存しています。セキュリティと運用の観点で最も適切な改善はどれですか?',
            options: [
                {
                    text: 'Secrets Manager などで認証情報を管理し、Lambda の実行ロールに必要な取得権限だけを与える',
                    isCorrect: true,
                    explanation:
                        'AWS Secrets Manager（パスワードや API キーなどの機密情報を安全に保存・取得するサービス）を使うと、DB 認証情報の保管やローテーション（定期変更）を管理しやすくなります。Lambda には最小限の取得権限を付けます。',
                },
                {
                    text: '認証情報をコードに直接書けば、環境変数より安全である',
                    isCorrect: false,
                    explanation:
                        'コードに認証情報を直接書くと、漏洩やローテーション困難の原因になります。',
                },
                {
                    text: 'RDS のパスワードをログに出しておけば、障害時に調査しやすく安全である',
                    isCorrect: false,
                    explanation:
                        'パスワードをログに出すのは危険です。機密情報はログに出さないようにします。',
                },
                {
                    text: 'Lambda から RDS に接続する場合、認証情報は不要である',
                    isCorrect: false,
                    explanation:
                        'RDS へ接続するには認証が必要です。パスワード、IAM DB 認証（IAM を使って DB 認証する仕組み）など、方式に応じた管理が必要です。',
                },
            ],
            explanation:
                'DB 接続ではネットワーク到達性だけでなく認証情報管理も重要です。Secrets Manager、IAM 権限、ローテーション、ログへの出力防止を考えます。',
        },
    {
            question:
                'Lambda から RDS に書き込む処理でタイムアウトが発生しました。クライアントは再試行し、同じ注文が二重に登録される可能性があります。最も重要な設計はどれですか?',
            options: [
                {
                    text: '注文 ID やリクエスト ID を使って一意制約や冪等性を設計し、再試行時も二重登録されないようにする',
                    isCorrect: true,
                    explanation:
                        'クライアントがタイムアウトしても、RDS 側では commit 済みだがレスポンス返却前にタイムアウトしている場合があります。一意制約（同じ値の重複登録を防ぐ制約）や冪等キーで二重登録を防ぎます。',
                },
                {
                    text: 'タイムアウトした場合、RDS の書き込みは必ず失敗しているため再試行してよい',
                    isCorrect: false,
                    explanation:
                        'クライアントや Lambda から見てタイムアウトしても、DB 側では commit 済みの可能性があります。',
                },
                {
                    text: '再試行時は必ず新しい注文 ID を発行する',
                    isCorrect: false,
                    explanation:
                        '同じ業務操作に新しい ID を発行すると、二重注文につながる可能性があります。再試行を同じ操作として扱う設計が必要です。',
                },
                {
                    text: 'RDS を使っていれば、アプリ側の冪等性設計は不要である',
                    isCorrect: false,
                    explanation:
                        'RDS の機能を使って一意制約やトランザクションを設計できますが、どの値で重複を防ぐかはアプリ側で決める必要があります。',
                },
            ],
            explanation:
                'DB 書き込みとタイムアウトが絡む場合、「失敗したように見えるが成功している」ことがあります。再試行安全な API と DB 制約を組み合わせます。',
        },
    {
            question:
                'Lambda から RDS へ大量の読み取りリクエストが集中しています。毎回同じマスターデータを読んでおり、RDS の負荷が高くなっています。改善として最も適切なものはどれですか?',
            options: [
                {
                    text: 'キャッシュ、DynamoDB への非正規化コピー、リードレプリカなど、読み取り負荷を分散する設計を検討する',
                    isCorrect: true,
                    explanation:
                        '頻繁に読むデータは、ElastiCache（Redis や Memcached を使った高速キャッシュサービス）、DynamoDB への非正規化コピー（読み取りしやすい形へデータを複製して保持する方法）、RDS のリードレプリカ（読み取り専用コピー DB）などで読み取り負荷を分散できる場合があります。整合性要件も合わせて確認します。',
                },
                {
                    text: 'RDS の読み取り負荷が高い場合、Lambda のログを削除すれば必ず改善する',
                    isCorrect: false,
                    explanation:
                        'ログ削除は RDS の読み取り負荷を直接下げません。クエリ数、キャッシュ、インデックス、レプリカなどを確認します。',
                },
                {
                    text: '同じデータを毎回読む場合でも、キャッシュは絶対に使ってはいけない',
                    isCorrect: false,
                    explanation:
                        '更新頻度や整合性要件によってはキャッシュが有効です。ただし古いデータを許容できるか、更新反映タイミング（cache invalidation）をどう扱うかは設計判断です。',
                },
                {
                    text: '読み取り負荷が高い場合、DB 接続数やクエリ数は確認しなくてよい',
                    isCorrect: false,
                    explanation:
                        '読み取り負荷の原因を把握するには、接続数、クエリ数、遅いクエリ、キャッシュヒット率などを確認します。',
                },
            ],
            explanation:
                'Lambda + RDS の読み取り負荷では、接続数だけでなく同じデータを繰り返し読んでいないかも確認します。キャッシュは性能改善に有効ですが、整合性や更新反映タイミング（cache invalidation）とのトレードオフがあります。',
        },
    {
            question:
                'Lambda の実行ロールに `s3:*` と `Resource: *` を付けて、すべての S3 バケットへアクセスできるようにしています。最小権限の観点で最も適切な見直しはどれですか?',
            options: [
                {
                    text: '必要な操作と対象バケット / プレフィックスに絞った権限へ縮小する',
                    isCorrect: true,
                    explanation:
                        '最小権限では、必要な Action（例: `s3:GetObject`、`s3:PutObject`）と対象 Resource をできるだけ限定します。多くの AWS API では、必要なリソースへ限定する方が安全です。',
                },
                {
                    text: '開発を速くするため、本番でも常に `AdministratorAccess` を付ける',
                    isCorrect: false,
                    explanation:
                        '広すぎる権限は、誤操作や侵害時の影響範囲を大きくします。本番では特に最小権限を意識します。',
                },
                {
                    text: 'S3 アクセスを使う Lambda では、IAM ポリシーは不要である',
                    isCorrect: false,
                    explanation:
                        'Lambda が S3 へアクセスするには、実行ロールに適切な IAM 権限が必要です。',
                },
                {
                    text: 'Resource を `*` にしておけば、セキュリティ上は最も安全である',
                    isCorrect: false,
                    explanation:
                        '`Resource: *` は対象リソースを広く許可する指定です。多くの AWS API では、必要なリソースに限定できるなら限定する方が安全です。',
                },
            ],
            explanation:
                'IAM の最小権限では「どの操作を」「どのリソースに対して」許可するかを具体化します。動けばよいではなく、影響範囲を小さくする設計が重要です。',
        },
    {
            question:
                'S3 イベントで Lambda を起動し、Lambda は起動後に DynamoDB へ書き込みます。この構成で権限を考えるとき、最も適切な整理はどれですか?',
            options: [
                {
                    text: 'S3 が Lambda を呼び出す許可と、Lambda が DynamoDB に書き込む実行ロール権限を分けて考える',
                    isCorrect: true,
                    explanation:
                        '他サービスが Lambda を呼び出す権限と、Lambda が他サービスへアクセスする権限は別です。S3 から Lambda を起動する許可と、Lambda 実行ロールの `dynamodb:PutItem` などを分けて確認します。',
                },
                {
                    text: 'Lambda の実行ロールに DynamoDB 権限があれば、S3 は必ず Lambda を呼び出せる',
                    isCorrect: false,
                    explanation:
                        '実行ロールは Lambda が何をできるかの権限です。S3 が Lambda を呼び出せるかは、Lambda 側のリソースベースポリシー（Lambda 関数側に設定する「誰が呼び出せるか」の許可設定）など別の許可が関係します。',
                },
                {
                    text: 'S3 イベント通知を設定すれば、Lambda から DynamoDB への権限も自動的に付く',
                    isCorrect: false,
                    explanation:
                        'イベント通知設定と Lambda 実行ロール権限は別です。DynamoDB へ書き込むには実行ロールに必要な権限を付与します。',
                },
                {
                    text: 'DynamoDB のテーブル名をログに出せば、IAM 権限は不要になる',
                    isCorrect: false,
                    explanation:
                        'ログ出力は権限付与ではありません。AWS API 操作には IAM 権限が必要です。',
                },
            ],
            explanation:
                'Lambda の権限設計では「誰が Lambda を呼ぶか」と「Lambda が何へアクセスするか」を分けて考えます。呼び出し方向を整理すると AccessDenied の切り分けがしやすくなります。',
        },
    {
            question:
                '別アカウントの EventBridge から自アカウントの Lambda を呼び出したいです。クロスアカウント呼び出しの設計として最も適切なものはどれですか?',
            options: [
                {
                    text: 'Lambda 側のリソースベースポリシー（Lambda 関数側に設定する「誰が呼び出せるか」の許可設定）で、相手アカウントや特定の EventBridge ルールからの呼び出しを許可する',
                    isCorrect: true,
                    explanation:
                        'クロスアカウントで Lambda を呼び出す場合、呼び出される Lambda 側に「誰が呼び出せるか」を許可するリソースベースポリシーが必要です。Principal（アクセスを許可する相手）や SourceArn（呼び出し元リソース ARN を条件指定する仕組み。ARN は AWS リソースを一意に識別する名前）を限定すると安全です。',
                },
                {
                    text: '呼び出し元アカウントの Lambda 実行ロールに権限を付ければ、呼び出される側の許可は不要である',
                    isCorrect: false,
                    explanation:
                        '呼び出し元に権限があっても、呼び出される Lambda 側が許可していなければクロスアカウント呼び出しは失敗します。',
                },
                {
                    text: 'クロスアカウント呼び出しでは、アカウント ID を隠せば安全に呼び出せる',
                    isCorrect: false,
                    explanation:
                        'セキュリティはアカウント ID を隠すことではなく、明示的な許可と条件で制御します。',
                },
                {
                    text: 'リソースベースポリシーでは Principal を `*` にするのが常に最小権限である',
                    isCorrect: false,
                    explanation:
                        '`Principal: *` は広い許可です。必要なアカウント、サービス、SourceArn（呼び出し元リソース ARN を条件指定する仕組み。ARN は AWS リソースを一意に識別する名前）などに絞るべきです。',
                },
            ],
            explanation:
                'クロスアカウント呼び出しでは、呼び出し元の権限と呼び出される側のリソースベースポリシー（Lambda 関数側に設定する「誰が呼び出せるか」の許可設定）を両方確認します。信頼関係は無制限許可ではないため、Principal（アクセスを許可する相手）と条件の絞り込みが重要です。',
        },
    {
            question:
                'API Gateway から Lambda を呼び出す構成で、Lambda のリソースベースポリシー（Lambda 関数側に設定する「誰が呼び出せるか」の許可設定）に広く `Principal: *` を許可しています。改善として最も適切なものはどれですか?',
            options: [
                {
                    text: 'API Gateway の特定 API / ステージ / メソッドなど、必要な呼び出し元に限定する',
                    isCorrect: true,
                    explanation:
                        'Lambda のリソースベースポリシーでは、誰が Lambda を呼び出せるかを制御します。API Gateway からの呼び出しだけを許可するなら、execute-api ARN などを SourceArn（呼び出し元リソース ARN を条件指定する仕組み）に指定して対象を絞るのが望ましいです。',
                },
                {
                    text: '`Principal: *` にしておけば、最小権限になる',
                    isCorrect: false,
                    explanation:
                        '`Principal: *` の Principal（アクセスを許可する相手）を全体に広げる指定は、最小権限とは逆方向です。必要な呼び出し元に限定します。',
                },
                {
                    text: 'API Gateway を使う場合、Lambda のリソースベースポリシーは一切関係しない',
                    isCorrect: false,
                    explanation:
                        'API Gateway が Lambda を呼び出すには、Lambda 側で呼び出しを許可する設定が関係します。',
                },
                {
                    text: 'Lambda の環境変数に API ID を書けば、呼び出し元制限は自動的に設定される',
                    isCorrect: false,
                    explanation:
                        '環境変数は設定値を渡す仕組みであり、リソースベースポリシーの代わりにはなりません。',
                },
            ],
            explanation:
                'リソースベースポリシーは、Lambda 関数側に設定する「誰が呼び出せるか」の許可設定です。実行ロールとは別に「誰がこの関数を呼べるか」を制御します。',
        },
    {
            question:
                'Lambda で DB パスワードや外部 API キーを扱います。環境変数に平文で保存する案が出ています。最も適切な判断はどれですか?',
            options: [
                {
                    text: 'Secrets Manager や Parameter Store などを使い、機密情報を安全に保存・取得する設計を検討する',
                    isCorrect: true,
                    explanation:
                        'AWS Secrets Manager（パスワードや API キーなどの機密情報を安全に保存・取得するサービス）や Systems Manager Parameter Store（SSM Parameter Store：設定値や機密値を管理できるサービス）を使うと、機密情報をコードや平文環境変数から分離できます。',
                },
                {
                    text: '環境変数に平文で置けば、誰からも見えないため最も安全である',
                    isCorrect: false,
                    explanation:
                        '環境変数は便利で暗号化機能もありますが、機密情報を平文で扱うと閲覧権限を持つ利用者やログ出力ミスなどで漏洩リスクがあります。機密情報専用の管理サービスを使う方が運用やローテーションをしやすい場合があります。',
                },
                {
                    text: 'API キーは CloudWatch Logs に出しておくと安全に共有できる',
                    isCorrect: false,
                    explanation:
                        '機密情報をログに出すのは危険です。ログは運用者やシステムから参照される可能性があります。',
                },
                {
                    text: 'Secrets Manager を使う場合、Lambda の IAM 権限は不要になる',
                    isCorrect: false,
                    explanation:
                        'Secrets Manager から値を取得するには、Lambda の実行ロールに必要な `secretsmanager:GetSecretValue` などの権限が必要です。',
                },
            ],
            explanation:
                '機密情報はコード、ログ、平文環境変数から分離するのが基本です。保存先だけでなく、取得権限、ログ出力制御、ローテーション（定期的な認証情報変更）、監査を含めて設計します。',
        },
    {
            question:
                'Secrets Manager と Parameter Store の使い分けとして最も適切なものはどれですか?',
            options: [
                {
                    text: '機密情報のローテーションや専用管理が重要なら Secrets Manager、一般的な設定値や階層管理には Parameter Store も検討する',
                    isCorrect: true,
                    explanation:
                        'Secrets Manager はシークレットの管理やローテーション（定期的な認証情報変更）に強みがあります。Systems Manager Parameter Store（SSM Parameter Store）は設定値の階層管理や SecureString（暗号化されたパラメータ保存形式）による機密値管理にも使えます。要件とコストで選びます。',
                },
                {
                    text: 'Secrets Manager を使うと、IAM 権限なしで全シークレットを取得できる',
                    isCorrect: false,
                    explanation:
                        'Secrets Manager でも IAM 権限は必要です。必要なシークレットだけ取得できるように制限します。',
                },
                {
                    text: 'Parameter Store は設定値を一切保存できない',
                    isCorrect: false,
                    explanation:
                        'Systems Manager Parameter Store（SSM Parameter Store）は設定値や機密値を保存できます。階層構造で管理できる点も特徴です。',
                },
                {
                    text: 'どちらを使っても、機密情報をログに出してよい',
                    isCorrect: false,
                    explanation:
                        '保存先に関係なく、取得した機密情報をログに出すのは避けるべきです。',
                },
            ],
            explanation:
                'Secrets Manager と Systems Manager Parameter Store（SSM Parameter Store）はどちらも設定・機密値管理に使えますが、ローテーション（定期的な認証情報変更）、料金、運用、権限制御の要件で選びます。',
        },
    {
            question:
                'Lambda が Secrets Manager から特定の DB パスワードだけを取得します。最小権限の IAM ポリシーとして最も適切な考え方はどれですか?',
            options: [
                {
                    text: '`secretsmanager:GetSecretValue` を対象のシークレット ARN に限定して許可する',
                    isCorrect: true,
                    explanation:
                        '必要な操作はシークレットの取得なので、Action は `secretsmanager:GetSecretValue` などに絞り、Resource は対象シークレットの ARN（AWS リソースを一意に識別する名前）に限定します。',
                },
                {
                    text: '`secretsmanager:*` を `Resource: *` で許可する',
                    isCorrect: false,
                    explanation:
                        'すべての Secrets Manager 操作と全リソースを許可するのは過剰です。必要な操作と対象シークレットに限定します。',
                },
                {
                    text: 'Secrets Manager を使う場合、Lambda 実行ロールには何も権限を付けない',
                    isCorrect: false,
                    explanation:
                        'Lambda が Secrets Manager から値を取得するには実行ロール権限が必要です。',
                },
                {
                    text: 'シークレット名を環境変数に書けば、IAM 権限なしで取得できる',
                    isCorrect: false,
                    explanation:
                        '環境変数にシークレット名を置くことはありますが、値を取得する AWS API 操作には IAM 権限が必要です。',
                },
            ],
            explanation:
                'Secrets Manager 利用時も最小権限が重要です。どの関数が、どのシークレットを、どの操作で使うかを具体的に制限します。',
        },
    {
            question:
                '本番 Lambda の環境変数に DB パスワードを設定しており、開発者の多くが Lambda 設定閲覧権限を持っています。リスクとして最も適切なものはどれですか?',
            options: [
                {
                    text: '設定閲覧権限を持つ人や誤ったログ出力などを通じて、機密情報が漏洩する可能性がある',
                    isCorrect: true,
                    explanation:
                        '環境変数は便利な設定管理の仕組みで暗号化機能もありますが、機密情報を平文で扱うと閲覧権限やログ出力ミスによる漏洩リスクがあります。機密情報管理サービスの利用を検討します。',
                },
                {
                    text: '環境変数に置いた機密情報は、AWS 上では誰にも絶対に見えない',
                    isCorrect: false,
                    explanation:
                        '権限を持つ利用者や管理者が参照できる場合があります。権限設計と機密情報の保存方法が重要です。',
                },
                {
                    text: '環境変数にパスワードを置くと、RDS の接続数上限が自動的に増える',
                    isCorrect: false,
                    explanation:
                        '環境変数は設定値を渡す仕組みであり、RDS の接続数上限を変更するものではありません。',
                },
                {
                    text: '開発者全員に設定閲覧権限を与えることが、常に最小権限である',
                    isCorrect: false,
                    explanation:
                        '最小権限では、業務上必要な人だけに必要な範囲の権限を付けます。全員に広く付与するのは過剰になりがちです。',
                },
            ],
            explanation:
                '環境変数は非機密の設定値には便利です。Lambda 環境変数にも暗号化機能はありますが、機密情報は Secrets Manager などで管理し、閲覧・取得権限やローテーションを分けて設計する方が安全な場合があります。',
        },
    {
            question:
                'Lambda の実行ロールに複数チームの機能で使う権限をまとめて付与しています。結果として、ある関数が本来不要なテーブルやバケットにもアクセスできます。改善として最も適切なものはどれですか?',
            options: [
                {
                    text: '関数や責務ごとに実行ロールを分け、必要なリソースへの権限だけを付与する',
                    isCorrect: true,
                    explanation:
                        '複数の関数で1つの強い実行ロールを共有すると、不要なアクセス権限が広がります。関数の責務ごとにロールを分け、権限境界を小さくします。',
                },
                {
                    text: 'すべての関数で同じ強いロールを使うと、最小権限が実現できる',
                    isCorrect: false,
                    explanation:
                        '同じ強いロールを共有すると、各関数に不要な権限が付く可能性が高くなります。',
                },
                {
                    text: '権限が広いほど、セキュリティリスクは必ず小さくなる',
                    isCorrect: false,
                    explanation:
                        '権限が広いほど、誤操作や侵害時の影響範囲が大きくなります。',
                },
                {
                    text: '実行ロールを分けると、Lambda は AWS サービスへ一切アクセスできなくなる',
                    isCorrect: false,
                    explanation:
                        'ロールを分けても、必要な権限を正しく付与すれば AWS サービスへアクセスできます。',
                },
            ],
            explanation:
                '最小権限はポリシー文だけでなく、ロールの分割単位にも関係します。責務が違う関数に同じ広いロールを共有させない設計が重要です。',
        },
    {
            question:
                'Lambda のクロスアカウント呼び出しを許可するため、相手アカウント全体に呼び出し権限を与える案があります。より安全な設計として最も適切なものはどれですか?',
            options: [
                {
                    text: '相手アカウントに加えて、可能なら SourceArn や SourceAccount などの条件で呼び出し元を限定する',
                    isCorrect: true,
                    explanation:
                        'クロスアカウント許可では、Principal（アクセスを許可する相手）だけでなく SourceArn（呼び出し元リソース ARN を条件指定する仕組み）や SourceAccount（特定 AWS アカウントからの呼び出しに限定する条件）で特定のリソースやアカウントに絞ると安全性が高まります。',
                },
                {
                    text: 'クロスアカウントでは条件を付けることはできないため、常に全アカウントへ公開する',
                    isCorrect: false,
                    explanation:
                        'リソースベースポリシー（Lambda 関数側に設定する「誰が呼び出せるか」の許可設定）では Principal（アクセスを許可する相手）や条件を使って呼び出し元を制限できます。',
                },
                {
                    text: '相手アカウントを信頼していれば、ログや監査は不要である',
                    isCorrect: false,
                    explanation:
                        'クロスアカウント連携では、誰がいつ呼び出したかを追える監査やログも重要です。',
                },
                {
                    text: '呼び出し元を限定すると、Lambda の実行ロールが消える',
                    isCorrect: false,
                    explanation:
                        'リソースベースポリシー（Lambda 関数側に設定する「誰が呼び出せるか」の許可設定）の条件と Lambda 実行ロールは別の設定です。片方を設定しても他方が消えることはありません。',
                },
            ],
            explanation:
                'クロスアカウント連携では、広い信頼ではなく明示的な制限が重要です。Principal（アクセスを許可する相手）、SourceArn（呼び出し元リソース ARN を条件指定する仕組み）、SourceAccount（特定 AWS アカウントからの呼び出しに限定する条件）、監査ログを組み合わせて考えます。',
        },
    {
            question:
                '本番 Lambda の障害検知を強化したいです。CloudWatch Logs / Metrics / Alarms の役割分担として最も適切なものはどれですか?',
            options: [
                {
                    text: 'CloudWatch Logs（ログ保存・検索）で詳細ログを確認し、CloudWatch Metrics（数値監視）で傾向を見て、CloudWatch Alarms（異常通知）で通知する',
                    isCorrect: true,
                    explanation:
                        'CloudWatch Logs（ログ保存・検索）、CloudWatch Metrics（数値監視）、CloudWatch Alarms（異常通知）は役割が異なります。ログで詳細を調べ、メトリクスで傾向を見て、アラームで異常を検知します。',
                },
                {
                    text: 'CloudWatch Logs を有効にすれば、メトリクスやアラームは一切不要になる',
                    isCorrect: false,
                    explanation:
                        'ログは詳細調査に有効ですが、異常を自動検知するにはメトリクスとアラームも重要です。',
                },
                {
                    text: 'CloudWatch Metrics はログ本文を全文検索するための機能である',
                    isCorrect: false,
                    explanation:
                        'ログ本文の検索は主に CloudWatch Logs（ログ保存・検索）側の役割です。CloudWatch Metrics（数値監視）は数値データの時系列監視に使います。',
                },
                {
                    text: 'CloudWatch Alarms は Lambda のコードを自動修正する機能である',
                    isCorrect: false,
                    explanation:
                        'CloudWatch Alarms（異常通知）は異常検知や通知に使う機能です。アプリケーションコードを自動修正するものではありません。',
                },
            ],
            explanation:
                '運用では、ログ、メトリクス、アラームを組み合わせます。障害発生後に調べるだけでなく、発生を早く検知できる設計が重要です。',
        },
    {
            question:
                'Lambda のエラー率（Invocations に対する Errors の割合）が急に上がりました。最初に確認すべき情報の組み合わせとして最も適切なものはどれですか?',
            options: [
                {
                    text: 'Errors、Invocations、Duration、直近の CloudWatch Logs、デプロイ履歴、依存サービスの状態',
                    isCorrect: true,
                    explanation:
                        'エラー率（Invocations に対する Errors の割合）を見るには Errors と Invocations（Lambda 呼び出し回数）の両方が必要です。あわせて Duration（Lambda 実行時間）、ログ、直近の変更、下流サービスの障害有無を確認すると切り分けやすくなります。',
                },
                {
                    text: '関数名だけを確認すれば、エラー原因は必ず特定できる',
                    isCorrect: false,
                    explanation:
                        '関数名だけでは原因は分かりません。ログ、メトリクス、変更履歴、依存先の状態を合わせて確認します。',
                },
                {
                    text: 'Errors だけを見れば、呼び出し数の増減は考えなくてよい',
                    isCorrect: false,
                    explanation:
                        'Errors の絶対数だけでなく、Invocations（Lambda 呼び出し回数）に対する割合を見る必要があります。呼び出し数が急増しただけの場合もあります。',
                },
                {
                    text: 'ログを見ずにメモリを最大にすれば、すべてのエラーは解消する',
                    isCorrect: false,
                    explanation:
                        'メモリ不足が原因なら改善する可能性はありますが、権限不足、入力不正、下流障害などには効きません。原因の切り分けが必要です。',
                },
            ],
            explanation:
                'エラー調査では、単一メトリクスだけを見ないことが重要です。エラー数、呼び出し数、ログ、直近変更、依存サービスをまとめて確認します。',
        },
    {
            question:
                'Lambda の Duration が徐々に長くなっていますが、Errors は増えていません。運用上の見方として最も適切なものはどれですか?',
            options: [
                {
                    text: 'まだ失敗していなくても、下流サービス遅延や処理量増加の兆候として監視・調査する',
                    isCorrect: true,
                    explanation:
                        'Duration（実行時間）の増加は、外部 API、DB、ネットワーク、処理データ量などの変化を示すことがあります。Errors が増える前の予兆として扱えます。',
                },
                {
                    text: 'Errors が0なら、Duration はどれだけ長くても運用上問題にならない',
                    isCorrect: false,
                    explanation:
                        'Duration が長くなると、タイムアウト、コスト増、同時実行数増加、下流詰まりにつながることがあります。',
                },
                {
                    text: 'Duration が長くなった場合、IAM 権限を増やせば必ず改善する',
                    isCorrect: false,
                    explanation:
                        'Duration の増加は権限不足とは限りません。処理時間、外部依存、データ量、ネットワークなどを確認します。',
                },
                {
                    text: 'Duration はログ出力の有無だけで決まる',
                    isCorrect: false,
                    explanation:
                        'ログ量も影響することがありますが、Duration はコード処理、外部 API、DB、ネットワークなど多くの要因で変わります。',
                },
            ],
            explanation:
                '運用では失敗してから見るだけでなく、性能劣化の兆候を早めに検知します。Duration（Lambda 実行時間）の p95 / p99（遅い側 95% / 99% 地点の応答時間指標）など高いパーセンタイルも役立ちます。Init Duration 増加か、通常実行時間増加かを分けて見ることも重要です。',
        },
    {
            question:
                'Lambda の Throttles（同時実行数上限などにより実行が抑制・拒否された回数）が増えています。最も適切な切り分けはどれですか?',
            options: [
                {
                    text: '同時実行数の上限、Reserved Concurrency、アカウント全体の同時実行、イベントソース側の流量を確認する',
                    isCorrect: true,
                    explanation:
                        'Throttles（同時実行数上限などにより実行が抑制・拒否された回数）は、同時実行数（同時に動作している Lambda 実行環境数）などの制限により実行が抑制されたことを示します。関数単位の Reserved Concurrency、アカウント全体の上限、流入量を確認します。',
                },
                {
                    text: 'Throttles は IAM AccessDenied と同じ意味である',
                    isCorrect: false,
                    explanation:
                        'Throttles（同時実行数上限などにより実行が抑制・拒否された回数）は容量や同時実行の制限に関するメトリクスです。AccessDenied は権限不足を示すエラーです。',
                },
                {
                    text: 'Throttles が増えても、呼び出し元や再試行には一切影響しない',
                    isCorrect: false,
                    explanation:
                        'スロットリングにより処理が遅延したり、呼び出し元で再試行や失敗が発生したりする可能性があります。',
                },
                {
                    text: 'Throttles が出た場合、CloudWatch Logs を削除すれば解消する',
                    isCorrect: false,
                    explanation:
                        'ログ削除は同時実行制限の解消にはなりません。上限、予約設定、流入量、処理時間を確認します。',
                },
            ],
            explanation:
                'Throttles（同時実行数上限などにより実行が抑制・拒否された回数）は「コードの例外」ではなく、容量制限や同時実行制御の問題として切り分けます。処理時間が伸びて同時実行が詰まるケースもあります。',
        },
    {
            question:
                'Lambda で AccessDenied エラーが発生しています。最も適切な調査方針はどれですか?',
            options: [
                {
                    text: '誰が、どのリソースに、どの AWS 操作をしようとして拒否されたのかをログと IAM ポリシーで確認する',
                    isCorrect: true,
                    explanation:
                        'AccessDenied は権限不足です。Lambda 実行ロール、対象リソース、Action、Resource、条件、リソースベースポリシーを確認します。',
                },
                {
                    text: 'AccessDenied はネットワークタイムアウトと同じなので、NAT Gateway だけを確認する',
                    isCorrect: false,
                    explanation:
                        'AccessDenied は主に IAM 権限やポリシーの問題です。タイムアウトとは切り分けて考えます。',
                },
                {
                    text: 'AccessDenied が出たら、全サービスに `*` 権限を付けるのが最小権限である',
                    isCorrect: false,
                    explanation:
                        '広すぎる権限を付けるとセキュリティリスクが増えます。必要な操作とリソースに絞って修正します。',
                },
                {
                    text: 'AccessDenied は Lambda のメモリ不足だけが原因である',
                    isCorrect: false,
                    explanation:
                        'メモリ不足と AccessDenied は別の問題です。AccessDenied では権限を確認します。',
                },
            ],
            explanation:
                '障害対応では、エラーの種類ごとに切り分け軸を変えます。AccessDenied は IAM、timeout はネットワークや下流遅延、throttling は同時実行や流量を疑います。',
        },
    {
            question:
                'Lambda の timeout が増えています。最も適切な調査の進め方はどれですか?',
            options: [
                {
                    text: 'ログで処理のどこまで進んだかを確認し、外部 API、DB、ネットワーク、処理量、無限ループなどを切り分ける',
                    isCorrect: true,
                    explanation:
                        'timeout は原因が広い症状です。開始、主要処理、外部呼び出し前後、終了のログを見て、どこで止まっているかを確認します。',
                },
                {
                    text: 'timeout は必ず IAM 権限不足なので、実行ロールだけを確認する',
                    isCorrect: false,
                    explanation:
                        'IAM 権限不足なら AccessDenied が出ることが多いです。timeout では外部依存、ネットワーク、処理時間なども確認します。',
                },
                {
                    text: 'timeout が出たら、必ずタイムアウト値を最大にすれば根本解決する',
                    isCorrect: false,
                    explanation:
                        'タイムアウト値を伸ばすと一時的に失敗を減らせる場合はありますが、外部 API 遅延や設計不備を隠すことがあります。',
                },
                {
                    text: 'timeout 調査では CloudWatch Logs を見てはいけない',
                    isCorrect: false,
                    explanation:
                        'CloudWatch Logs はどこで処理が止まったかを調べる重要な手がかりです。',
                },
            ],
            explanation:
                'timeout は「長くかかった結果」です。なぜ長くなったかを、ログ、Duration（Lambda 実行時間）、外部依存、ネットワーク、入力データ量から切り分けます。',
        },
    {
            question:
                '複数の Lambda と API Gateway、DynamoDB、外部 API をまたぐリクエストで、どこが遅いのか分かりません。調査をしやすくする仕組みとして最も適切なものはどれですか?',
            options: [
                {
                    text: 'AWS X-Ray や分散トレーシング（複数サービスをまたぐリクエスト追跡）を使い、リクエストが各サービスで使った時間を追跡する',
                    isCorrect: true,
                    explanation:
                        'AWS X-Ray は、対応サービス間のリクエストや処理時間を可視化する分散トレーシング（複数サービスをまたぐリクエスト追跡）サービスです。複数サービスをまたぐ遅延調査に役立ちます。',
                },
                {
                    text: '関数名を短くすれば、各サービスの遅延箇所が自動的に分かる',
                    isCorrect: false,
                    explanation:
                        '関数名の長さでは分散システムの遅延箇所は分かりません。トレースやログの相関が必要です。',
                },
                {
                    text: 'X-Ray を使うと IAM 権限設計は不要になる',
                    isCorrect: false,
                    explanation:
                        'X-Ray は可観測性の仕組みです。Lambda が AWS サービスへアクセスする権限設計は別途必要です。',
                },
                {
                    text: '分散トレーシングは単一サービス内でしか使えない',
                    isCorrect: false,
                    explanation:
                        '分散トレーシング（複数サービスをまたぐリクエスト追跡）は、複数サービスにまたがるリクエストの流れを追うために使われます。',
                },
            ],
            explanation:
                'ログだけでは複数サービス間の時間配分が分かりにくい場合があります。X-Ray や相関 ID を使うと、サービス横断の調査がしやすくなります。',
        },
    {
            question:
                'Lambda の同時実行が増え、下流の RDS 接続数も増えて障害になりました。運用時に特に見るべきメトリクスの組み合わせはどれですか?',
            options: [
                {
                    text: 'ConcurrentExecutions、Throttles、Duration、Errors、RDS の接続数や CPU 使用率',
                    isCorrect: true,
                    explanation:
                        'ConcurrentExecutions（Lambda の同時実行数メトリクス）が増えると、下流サービスへの接続数も増えることがあります。Throttles（同時実行数上限などにより実行が抑制・拒否された回数）や Duration（Lambda 実行時間）も含め、Lambda 側と RDS 側のメトリクスを合わせて見ます。',
                },
                {
                    text: 'Lambda の関数説明だけを見れば、RDS 障害の予兆を把握できる',
                    isCorrect: false,
                    explanation:
                        '説明欄では運用メトリクスは分かりません。Lambda と RDS の実測値を見る必要があります。',
                },
                {
                    text: 'RDS の接続数だけ見れば、Lambda 側の流入量や Duration は不要である',
                    isCorrect: false,
                    explanation:
                        'RDS 接続数の増加原因を知るには、Lambda の同時実行数、Duration（Lambda 実行時間）、Invocations（Lambda 呼び出し回数）も見る必要があります。',
                },
                {
                    text: 'ConcurrentExecutions は IAM 権限の許可数を示すメトリクスである',
                    isCorrect: false,
                    explanation:
                        'ConcurrentExecutions（Lambda の同時実行数メトリクス）は Lambda の同時実行数を示すメトリクスです。IAM 権限数ではありません。',
                },
            ],
            explanation:
                '運用監視では Lambda 単体だけでなく、下流の RDS、外部 API、キューなども合わせて見ます。下流障害は Lambda のスケールによって増幅されることがあります。',
        },
    {
            question:
                'Lambda のアラームを設計しています。単純に Errors > 0 だけで通知すると、低頻度の一時的な失敗でも頻繁に通知されます。改善として最も適切なものはどれですか?',
            options: [
                {
                    text: 'エラー率、連続発生、重要度、対象環境を考慮し、ノイズを抑えつつ重要な異常を検知する',
                    isCorrect: true,
                    explanation:
                        'アラームは多すぎると alert fatigue（通知過多による見逃し）につながります。Errors の絶対数だけでなく、Invocations（Lambda 呼び出し回数）に対するエラー率、継続時間、重要度、環境を考慮します。呼び出し数が少ない重要システムでは、単発エラーでも重要になる場合があります。',
                },
                {
                    text: '通知が多い場合、すべてのアラームを削除する',
                    isCorrect: false,
                    explanation:
                        'アラームを削除すると重大障害の検知が遅れます。しきい値や条件を調整してノイズを減らします。',
                },
                {
                    text: 'Errors が1回でも出たら、常に本番停止する',
                    isCorrect: false,
                    explanation:
                        '単発エラーと継続的な障害では対応が異なります。自動対応は慎重に設計する必要があります。',
                },
                {
                    text: 'アラーム設計では呼び出し数や環境を考慮してはいけない',
                    isCorrect: false,
                    explanation:
                        '呼び出し数や環境は重要です。本番の高エラー率と開発環境の単発エラーでは重要度が異なります。',
                },
            ],
            explanation:
                'アラーム設計では、検知漏れと通知ノイズ（alert fatigue：通知過多による見逃し）のバランスが重要です。誰が、いつ、何を見て、どう対応するかまで運用に含めます。',
        },
    {
            question:
                'Lambda の障害対応で、同じリクエストが API Gateway、Lambda、DynamoDB を通ったか追跡したいです。ログ設計として最も適切なものはどれですか?',
            options: [
                {
                    text: '相関 ID を各ログに含め、サービス横断で同じリクエストを検索できるようにする',
                    isCorrect: true,
                    explanation:
                        '相関 ID（Correlation ID：リクエストを追跡するための識別子）を API Gateway、Lambda、下流処理のログに含めると、障害時に同じリクエストの流れを追いやすくなります。',
                },
                {
                    text: '各サービスでランダムな ID を別々に出せば、必ず追跡しやすくなる',
                    isCorrect: false,
                    explanation:
                        'サービスごとに無関係な ID だけを出すと、横断的な追跡が難しくなります。共通の相関 ID が役立ちます。',
                },
                {
                    text: '機密情報をすべてログに出せば、調査しやすく安全である',
                    isCorrect: false,
                    explanation:
                        '機密情報をログに出すのは危険です。調査に必要な識別子や状態を、機密情報を避けて記録します。',
                },
                {
                    text: 'ログに相関 ID を含めると、Lambda は実行できなくなる',
                    isCorrect: false,
                    explanation:
                        '相関 ID はログやレスポンスに含める識別子です。適切に扱えば実行を妨げるものではありません。',
                },
            ],
            explanation:
                '障害対応では、どのリクエストがどの処理を通ったか追えることが重要です。X-Ray などのトレースと、相関 ID を含むログを組み合わせると調査しやすくなります。',
        },
    {
            question:
                'Lambda の運用ダッシュボードを作ります。最低限、運用時に見るべき指標として最も適切な組み合わせはどれですか?',
            options: [
                {
                    text: 'Invocations、Errors / Error rate、Duration、Throttles、ConcurrentExecutions、DLQ 件数やキュー滞留',
                    isCorrect: true,
                    explanation:
                        'Invocations（Lambda 呼び出し回数）、エラー率（Invocations に対する Errors の割合）、Duration（Lambda 実行時間）、Throttles（同時実行数上限などにより実行が抑制・拒否された回数）、ConcurrentExecutions（Lambda の同時実行数メトリクス）は Lambda 運用の基本です。非同期や SQS 連携では DLQ（Dead Letter Queue：繰り返し失敗したイベントを退避するキュー）件数やキュー滞留（処理待ちメッセージ蓄積）も重要です。',
                },
                {
                    text: '関数名と説明だけ',
                    isCorrect: false,
                    explanation:
                        '関数名や説明は識別には役立ちますが、運用状態の監視にはメトリクスが必要です。',
                },
                {
                    text: 'メモリ設定値だけ',
                    isCorrect: false,
                    explanation:
                        'メモリ設定値だけでは、エラー、遅延、スロットリング、同時実行、下流詰まりは分かりません。',
                },
                {
                    text: 'CloudWatch Logs の保存期間だけ',
                    isCorrect: false,
                    explanation:
                        'ログ保存期間も運用上重要ですが、現在の稼働状態を見るにはメトリクスやアラームが必要です。',
                },
            ],
            explanation:
                'Lambda の運用では、呼び出し量、失敗、遅延、スロットリング、同時実行、非同期失敗、下流サービス状態を組み合わせて見ます。',
        }
]
