import type { Question } from '@/types/test_questions'

export const testQuestions: Question[] = [
    {
        question:
            'Amazon DynamoDBの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'AWSが提供するフルマネージドのNoSQLデータベースサービス',
                isCorrect: true,
                explanation:
                    'DynamoDBはAWSのフルマネージドNoSQLデータベースサービスです。サーバー管理を意識せず、低レイテンシなキー・バリュー/ドキュメントデータの保存に利用できます。',
            },
            {
                text: 'EC2インスタンス専用のブロックストレージサービス',
                isCorrect: false,
                explanation:
                    'EC2向けのブロックストレージは主にAmazon EBSです。DynamoDBはデータベースサービスです。',
            },
            {
                text: '静的Webサイトを配信するCDNサービス',
                isCorrect: false,
                explanation:
                    'CDNサービスとしてはAmazon CloudFrontがあります。DynamoDBは静的コンテンツ配信サービスではありません。',
            },
            {
                text: 'DNSレコードを管理するサービス',
                isCorrect: false,
                explanation:
                    'DNS管理にはAmazon Route 53が使われます。DynamoDBはDNSサービスではありません。',
            },
        ],
        explanation:
            'DynamoDBはリレーショナルデータベースではなくNoSQLデータベースです。スキーマ設計では、アクセスパターンに合わせたキー設計が重要になります。',
    },
    {
        question:
            'DynamoDBのテーブルにおけるパーティションキーの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'アイテムを一意に識別したり、データの分散に使われたりする主キーの構成要素',
                isCorrect: true,
                explanation:
                    'パーティションキーはDynamoDBの主キーの必須要素です。単独で主キーになる場合もあり、ソートキーと組み合わせて複合主キーを作る場合もあります。',
            },
            {
                text: 'テーブル内のすべての文字列を暗号化するためのパスワード',
                isCorrect: false,
                explanation:
                    'パーティションキーは暗号化用パスワードではありません。アイテムの識別や保存先の分散に関係するキーです。',
            },
            {
                text: 'DynamoDB Streamsだけで使われるログファイル名',
                isCorrect: false,
                explanation:
                    'DynamoDB Streamsは変更履歴を扱う機能ですが、パーティションキーはテーブルの主キー設計に関係します。',
            },
            {
                text: 'テーブルの料金を無料にするための設定',
                isCorrect: false,
                explanation:
                    'パーティションキーは課金を無料にする設定ではありません。DynamoDBのデータモデルにおける重要なキーです。',
            },
        ],
        explanation:
            'DynamoDBでは「どのキーで読み書きするか」が性能と設計に大きく影響します。初歩ではまずパーティションキーが主キーの必須要素であることを押さえます。',
    },
    {
        question:
            'DynamoDBのソートキーの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '同じパーティションキーを持つアイテムを並べ替えたり範囲検索したりするためのキー',
                isCorrect: true,
                explanation:
                    'ソートキーはパーティションキーと組み合わせて複合主キーを構成します。同じパーティションキー内で順序付けや範囲条件の検索に使えます。',
            },
            {
                text: 'DynamoDBテーブルを自動削除する日時',
                isCorrect: false,
                explanation:
                    'テーブルやアイテムの削除日時ではありません。アイテムの並びや検索条件に使う主キーの一部です。',
            },
            {
                text: 'AWSアカウントの請求書を並べ替える設定',
                isCorrect: false,
                explanation:
                    '請求書の並べ替え設定ではありません。DynamoDBテーブルのキー設計に関する用語です。',
            },
            {
                text: '必ず数値型でなければならないカラム',
                isCorrect: false,
                explanation:
                    'ソートキーは数値型に限られません。文字列や数値、バイナリなどをキー属性として使えます。',
            },
        ],
        explanation:
            '例えばユーザーIDをパーティションキー、作成日時をソートキーにすると、特定ユーザーのデータを時系列で取得しやすくなります。',
    },
    {
        question:
            'DynamoDBのアイテムの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'テーブルに保存される1件分のデータ',
                isCorrect: true,
                explanation:
                    'DynamoDBのアイテムは、リレーショナルデータベースでいう行に近い単位です。複数の属性を持つ1件分のデータとして保存されます。',
            },
            {
                text: 'DynamoDBテーブルを配置するAWSリージョンの別名',
                isCorrect: false,
                explanation:
                    'リージョンはAWSリソースを配置する地理的な単位です。アイテムはテーブル内のデータ1件を指します。',
            },
            {
                text: 'DynamoDBの料金プランだけを表す用語',
                isCorrect: false,
                explanation:
                    'アイテムは料金プランではありません。テーブルに保存されるデータの単位です。',
            },
            {
                text: 'S3バケット内のオブジェクト名',
                isCorrect: false,
                explanation:
                    'S3の保存単位はオブジェクトです。DynamoDBではテーブル内の1件のデータをアイテムと呼びます。',
            },
        ],
        explanation:
            'DynamoDBでは、テーブル、アイテム、属性という用語をまず押さえると理解しやすくなります。',
    },
    {
        question:
            'DynamoDBのオンデマンドキャパシティモードの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '読み書きリクエスト量に応じて自動的に処理能力を調整する課金・キャパシティモード',
                isCorrect: true,
                explanation:
                    'オンデマンドキャパシティモードは、アプリケーションのリクエスト量に応じて自動的にスケールするモードです。アクセス量が予測しにくいワークロードに向いています。',
            },
            {
                text: '読み書きキャパシティを必ず手動で固定するモード',
                isCorrect: false,
                explanation:
                    '読み書きキャパシティを指定して使うのはプロビジョンドキャパシティモードです。オンデマンドはリクエスト量に応じて処理能力が調整されます。',
            },
            {
                text: 'DynamoDBを停止して料金を完全に0にするモード',
                isCorrect: false,
                explanation:
                    'オンデマンドはDynamoDBを停止する機能ではありません。リクエスト量に応じた課金・キャパシティのモードです。',
            },
            {
                text: 'バックアップを手動でしか取得できないモード',
                isCorrect: false,
                explanation:
                    'バックアップ方式の説明ではありません。オンデマンドは読み書き処理能力と課金に関するモードです。',
            },
        ],
        explanation:
            'DynamoDBのキャパシティモードは初歩でも重要です。予測しづらいアクセスにはオンデマンド、ある程度予測できる場合はプロビジョンドを検討します。',
    },
    {
        question:
            'DynamoDBでテーブルの主キーが userId だけで構成されており、userId = "u-001" の1件を取得したい場合、最も適切な操作はどれですか?',
        options: [
            {
                text: 'GetItem',
                isCorrect: true,
                explanation:
                    'GetItemは主キーを指定して1つのアイテムを取得する操作です。パーティションキーだけの主キーなら、そのキー値を指定して対象アイテムを直接取得できます。',
            },
            {
                text: 'Scan',
                isCorrect: false,
                explanation:
                    'Scanはテーブルやインデックスを広く読み取る操作です。主キーが分かっている1件取得に使うと非効率です。',
            },
            {
                text: 'BatchWriteItem',
                isCorrect: false,
                explanation:
                    'BatchWriteItemは複数アイテムの書き込みや削除に使う操作です。1件取得には使いません。',
            },
            {
                text: 'DescribeTable',
                isCorrect: false,
                explanation:
                    'DescribeTableはテーブル定義や状態を確認する操作です。アイテムのデータ取得には使いません。',
            },
        ],
        explanation:
            'キーが完全に分かっている1件取得はGetItemが基本です。Scanで探す設計は、データ量が増えるほど遅く高コストになりやすいです。',
    },
    {
        question:
            'DynamoDBで userId をパーティションキー、createdAt をソートキーにしたテーブルがあります。特定ユーザーの注文履歴を新しい順や期間指定で取得したい場合、最も適切な操作はどれですか?',
        options: [
            {
                text: 'Query',
                isCorrect: true,
                explanation:
                    'Queryはパーティションキー値を指定し、必要に応じてソートキー条件を使って複数アイテムを取得できます。特定ユーザーの期間内データ取得に適しています。',
            },
            {
                text: 'Scan',
                isCorrect: false,
                explanation:
                    'Scanで全件を読んでからuserIdやcreatedAtで絞るのは非効率です。キー設計に合う検索ならQueryを使うべきです。',
            },
            {
                text: 'PutItem',
                isCorrect: false,
                explanation:
                    'PutItemはアイテムを書き込む操作です。注文履歴の読み取りには使いません。',
            },
            {
                text: 'DeleteItem',
                isCorrect: false,
                explanation:
                    'DeleteItemはアイテム削除に使う操作です。履歴取得には使いません。',
            },
        ],
        explanation:
            'DynamoDBでは「一覧を取る」場合でも、パーティションキーを指定できるならQueryが基本です。ソートキーをうまく設計すると、時系列や範囲取得がしやすくなります。',
    },
    {
        question:
            'DynamoDBで「全ユーザーから status = "ACTIVE" のアイテムを探す」処理を、毎秒大量に実行する設計として避けるべきものはどれですか?',
        options: [
            {
                text: '毎回Scanでテーブル全体を読み、FilterExpressionでstatusを絞り込む',
                isCorrect: true,
                explanation:
                    '高頻度処理で毎回Scanするのは典型的なアンチパターンです。FilterExpressionは読み取り後の絞り込みであり、読み取り量そのものを大きく減らすものではありません。',
            },
            {
                text: 'アクセスパターンに合わせてGSIを設計し、Queryで取得できるようにする',
                isCorrect: false,
                explanation:
                    'statusで頻繁に検索する要件があるなら、GSIなどでQueryできる設計を検討するのは自然です。',
            },
            {
                text: '検索条件に合うデータを別の集計用テーブルへ非同期に反映する設計を検討する',
                isCorrect: false,
                explanation:
                    '読み取り要件に合わせて別テーブルを持つのはDynamoDBではよくある設計です。Streamsなどと組み合わせて非同期更新することもあります。',
            },
            {
                text: 'アクセス頻度やデータ量を見積もり、キー設計を見直す',
                isCorrect: false,
                explanation:
                    'DynamoDBではアクセスパターンに合わせたキー設計が重要です。高頻度検索があるなら設計を見直すべきです。',
            },
        ],
        explanation:
            'Scanは管理作業や小規模データ、低頻度処理では使うことがありますが、アプリの主要な高頻度アクセスパターンにするのは避けるべきです。',
    },
    {
        question:
            'DynamoDBのFilterExpressionの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '読み取ったアイテムに対して結果を絞り込む条件で、読み取り対象そのものをキー条件のように減らすものではない',
                isCorrect: true,
                explanation:
                    'FilterExpressionはQueryやScanで読み取られた後の結果をフィルタします。消費される読み取りキャパシティは、フィルタ後の件数ではなく読み取ったデータ量に基づく点に注意が必要です。',
            },
            {
                text: 'パーティションキーの指定を不要にしてQueryを実行できるようにする機能',
                isCorrect: false,
                explanation:
                    'Queryではパーティションキー条件が重要です。FilterExpressionでパーティションキー指定が不要になるわけではありません。',
            },
            {
                text: 'DynamoDBの書き込みをすべて無料にする機能',
                isCorrect: false,
                explanation:
                    'FilterExpressionは課金を無料にする機能ではありません。読み取り結果を絞り込むための式です。',
            },
            {
                text: 'テーブルの主キーを自動で変更する機能',
                isCorrect: false,
                explanation:
                    '主キーを自動変更する機能ではありません。キー設計はテーブルやインデックスの設計で決めます。',
            },
        ],
        explanation:
            'FilterExpressionは便利ですが、パフォーマンス対策の主役ではありません。大量に読んでから捨てる設計になっていないか確認する必要があります。',
    },
    {
        question:
            'DynamoDBのQueryやScanで結果が多い場合のページネーション処理として最も適切なものはどれですか?',
        options: [
            {
                text: 'レスポンスのLastEvaluatedKeyを確認し、続きがある場合はExclusiveStartKeyに指定して次ページを取得する',
                isCorrect: true,
                explanation:
                    'DynamoDBのQueryやScanは一度に全件返るとは限りません。LastEvaluatedKeyが返った場合は、ExclusiveStartKeyに指定して続きのページを取得します。',
            },
            {
                text: '1回目のレスポンスだけを見れば、必ず全件取得できる',
                isCorrect: false,
                explanation:
                    '結果が多い場合、1回のQueryやScanでは全件返らないことがあります。ページネーション処理が必要です。',
            },
            {
                text: 'LastEvaluatedKeyが返ったら、必ずテーブルを削除して作り直す',
                isCorrect: false,
                explanation:
                    'LastEvaluatedKeyは続きのページがあることを示す情報です。テーブル削除とは関係ありません。',
            },
            {
                text: 'ページネーションはScanだけの機能で、Queryでは絶対に発生しない',
                isCorrect: false,
                explanation:
                    'Queryでも結果が多ければページネーションが必要になります。Scanだけの話ではありません。',
            },
        ],
        explanation:
            'DynamoDBをコードから扱うとき、ページネーション忘れはよくあるバグです。「最初の1ページだけ取って終わる」実装になっていないか確認します。',
    },
    {
        question:
            'DynamoDBで既存アイテムの一部属性だけを変更したい場合、一般に最も適切な操作はどれですか?',
        options: [
            {
                text: 'UpdateItem',
                isCorrect: true,
                explanation:
                    'UpdateItemは既存アイテムの属性を更新する操作です。UpdateExpressionを使って一部属性の追加、変更、削除などを行えます。',
            },
            {
                text: 'Scan',
                isCorrect: false,
                explanation:
                    'Scanは読み取り操作です。属性の更新には使いません。',
            },
            {
                text: 'DescribeTable',
                isCorrect: false,
                explanation:
                    'DescribeTableはテーブル情報を確認する操作です。アイテムの属性更新には使いません。',
            },
            {
                text: 'Query',
                isCorrect: false,
                explanation:
                    'Queryは条件に合うアイテムを取得する読み取り操作です。更新処理にはUpdateItemなどを使います。',
            },
        ],
        explanation:
            'PutItemはアイテム全体の書き込みに使います。既存アイテムの一部だけを変更したいならUpdateItemを検討します。',
    },
    {
        question:
            'MySQLなどのRDSと比べたときのDynamoDBの特徴として最も適切なものはどれですか?',
        options: [
            {
                text: 'NoSQLのキー・バリュー/ドキュメントデータベースで、アクセスパターンに合わせたキー設計が重要',
                isCorrect: true,
                explanation:
                    'DynamoDBはNoSQLデータベースで、SQLのJOINを前提に正規化して後から自由に検索するより、事前にアクセスパターンを考えてテーブルやキーを設計することが重要です。',
            },
            {
                text: 'MySQLと完全互換のSQLエンジンとして動作する',
                isCorrect: false,
                explanation:
                    'MySQL互換のリレーショナルデータベースを使いたい場合は、RDS for MySQLやAurora MySQL-Compatible Editionを検討します。DynamoDBはMySQL互換SQLエンジンではありません。',
            },
            {
                text: 'すべての検索でJOINを使うことが推奨される',
                isCorrect: false,
                explanation:
                    'DynamoDBにはRDBMSのようなJOINを前提とした設計はありません。必要な読み取りに合わせてアイテム構造やキーを設計します。',
            },
            {
                text: 'テーブル定義を変更しない限り属性を追加できない',
                isCorrect: false,
                explanation:
                    'DynamoDBは柔軟なスキーマを持ち、アイテムごとに異なる属性を持てます。RDBMSのように列定義を厳密にそろえる考え方とは異なります。',
            },
        ],
        explanation:
            'RDS/MySQLはリレーショナルモデルとSQLが強みです。DynamoDBはキーアクセスを中心に、低レイテンシで大規模にスケールしやすい設計を取るサービスです。',
    },
    {
        question:
            '複数テーブルをJOINして柔軟な集計やアドホックなSQL検索を多用する業務システムを作りたい場合、DynamoDBとRDSの選択として最も適切な考え方はどれですか?',
        options: [
            {
                text: 'RDS/MySQLなどのリレーショナルデータベースを優先して検討する',
                isCorrect: true,
                explanation:
                    '複雑なJOIN、柔軟なSQL検索、リレーショナルな整合性を中心にした設計では、RDS/MySQLなどのRDBMSが適していることが多いです。',
            },
            {
                text: 'DynamoDBではJOINが最も得意なので、必ずDynamoDBを選ぶ',
                isCorrect: false,
                explanation:
                    'DynamoDBはRDBMSのようなJOINを得意とするサービスではありません。アクセスパターンに合わせて非正規化やGSIなどを設計します。',
            },
            {
                text: 'RDSはSQLを使えないため、検索要件があるなら必ず避ける',
                isCorrect: false,
                explanation:
                    'RDS for MySQLなどはSQLを使うリレーショナルデータベースです。検索や集計の要件でRDSが適する場面は多くあります。',
            },
            {
                text: 'DynamoDBを使うと、どんな条件でも設計なしで高速検索できる',
                isCorrect: false,
                explanation:
                    'DynamoDBは設計なしで任意条件検索が高速になるサービスではありません。主要なアクセスパターンを事前に考え、キーやインデックスを設計します。',
            },
        ],
        explanation:
            'DynamoDBが悪いという話ではなく、向き不向きの問題です。SQL/JOIN/アドホック分析寄りならRDS、キーアクセス中心で大規模スケールを狙うならDynamoDBが候補になります。',
    },
    {
        question:
            'DynamoDBをRDS/MySQLと比べたときのメリットとして最も適切なものはどれですか?',
        options: [
            {
                text: 'サーバー管理をほぼ意識せず、キーアクセス中心のワークロードで大規模な読み書きにスケールしやすい',
                isCorrect: true,
                explanation:
                    'DynamoDBはフルマネージド/サーバーレスなNoSQLデータベースで、キーアクセス中心のワークロードに対して大規模な読み書き性能を出しやすい特徴があります。',
            },
            {
                text: 'RDSより常にSQLのJOINが高速で、複雑な集計に最適である',
                isCorrect: false,
                explanation:
                    'DynamoDBはSQL JOINや複雑な集計を主目的にしたサービスではありません。そのような要件ではRDSや分析系サービスを検討します。',
            },
            {
                text: 'アクセスパターンを考えなくても、すべての検索が自動的に最適化される',
                isCorrect: false,
                explanation:
                    'DynamoDBではアクセスパターンに合わせたキー設計が重要です。設計を誤るとScan多用などのアンチパターンになりやすいです。',
            },
            {
                text: 'MySQL互換の既存アプリケーションをコード変更なしでそのまま動かせる',
                isCorrect: false,
                explanation:
                    'MySQL互換アプリケーションをそのまま動かしたい場合はRDS for MySQLなどが適しています。DynamoDBはAPIやデータモデルが異なります。',
            },
        ],
        explanation:
            'DynamoDBのメリットは、サーバー管理の少なさ、低レイテンシ、大規模スケール、柔軟な属性構造などです。一方で、SQL/JOIN/任意検索のしやすさはRDSの方が向く場合があります。',
    },
]
