import type { Question } from '@/types/test_questions'

export const testQuestions: Question[] = [
    {
        question:
            'DynamoDBテーブルで、既存のパーティションキーとは異なる属性を使って高頻度に検索したいと考えています。テーブル作成後にも追加でき、元テーブルとは異なるパーティションキーを持てるインデックスとして最も適切なものはどれですか?',
        options: [
            {
                text: 'グローバルセカンダリインデックス（GSI）',
                isCorrect: true,
                explanation:
                    'GSIは元テーブルとは異なるパーティションキー、必要に応じてソートキーを持てるセカンダリインデックスです。テーブル作成後にも追加でき、別のアクセスパターンを支えるためによく使われます。',
            },
            {
                text: 'ローカルセカンダリインデックス（LSI）',
                isCorrect: false,
                explanation:
                    'LSIは元テーブルと同じパーティションキーを使い、異なるソートキーを持つインデックスです。またテーブル作成時に定義する必要があります。',
            },
            {
                text: 'DynamoDB Streams',
                isCorrect: false,
                explanation:
                    'DynamoDB Streamsはテーブルの変更イベントを時系列で取得する機能です。別属性で検索するためのインデックスではありません。',
            },
            {
                text: 'TTL',
                isCorrect: false,
                explanation:
                    'TTLは指定した時刻を過ぎたアイテムを自動削除するための機能です。検索用インデックスではありません。',
            },
        ],
        explanation:
            'DynamoDBではアクセスパターンに合わせて主キーやGSIを設計します。ただしGSIは追加すれば万能というものではなく、キーの偏りや書き込み増加、射影属性、整合性の違いも考慮します。',
    },
    {
        question:
            'DynamoDBで強い整合性のある読み込み（strongly consistent read）について、最も適切な説明はどれですか?',
        options: [
            {
                text: '同一リージョン内のテーブルやLSIでは利用できるが、GSIでは強い整合性の読み込みは利用できない',
                isCorrect: true,
                explanation:
                    'DynamoDBではテーブルやLSIに対して強い整合性の読み込みを指定できます。一方、GSIの読み込みは結果整合性です。',
            },
            {
                text: 'GSIでもLSIでも、すべての読み込みは必ず強い整合性になる',
                isCorrect: false,
                explanation:
                    'DynamoDBの読み込みはデフォルトでは結果整合性です。強い整合性を指定できる対象にも制限があり、GSIでは強い整合性の読み込みは使えません。',
            },
            {
                text: '強い整合性の読み込みを使うと、書き込みキャパシティが必ず0になる',
                isCorrect: false,
                explanation:
                    '強い整合性の読み込みは読み込み時の整合性設定であり、書き込みキャパシティを0にする機能ではありません。',
            },
            {
                text: '強い整合性の読み込みはTTLが有効なテーブルでしか使えない',
                isCorrect: false,
                explanation:
                    'TTLの有効無効と強い整合性の読み込み可否は別の話です。TTLはアイテム自動削除に関係します。',
            },
        ],
        explanation:
            '「最新の書き込みを必ず読みたい」要件では強い整合性を検討します。ただしGSIやグローバルテーブルなど、強い整合性が使えない/期待できない範囲を理解して設計する必要があります。',
    },
    {
        question:
            'DynamoDB TTLを有効にして、expiresAt属性にUNIXエポック秒を入れています。期限を過ぎたアイテムについて最も適切な理解はどれですか?',
        options: [
            {
                text: '期限切れ後、DynamoDBがバックグラウンドで削除するが、削除は即時とは限らない',
                isCorrect: true,
                explanation:
                    'TTLは期限切れアイテムを自動削除する機能ですが、指定時刻になった瞬間に必ず削除されるわけではありません。削除はバックグラウンドで非同期に行われます。',
            },
            {
                text: '期限時刻になると、読み込みリクエストは必ず即座に404相当になる',
                isCorrect: false,
                explanation:
                    'TTLの削除は即時保証ではないため、期限を過ぎたアイテムがしばらく読み取れる可能性があります。アプリ側で期限属性を見て扱う設計も必要になることがあります。',
            },
            {
                text: 'TTLを有効にすると、すべてのアイテムが1時間後に削除される',
                isCorrect: false,
                explanation:
                    'TTLは指定した属性値に基づいてアイテムごとに期限を判断します。すべてのアイテムが一律1時間後に削除されるわけではありません。',
            },
            {
                text: 'TTL属性は必ず文字列の日付フォーマットで保存する必要がある',
                isCorrect: false,
                explanation:
                    'DynamoDB TTLでは、期限属性にUNIXエポック時刻の秒を数値として保存するのが基本です。任意の文字列日付ではTTLとして解釈されません。',
            },
        ],
        explanation:
            'TTLはセッション、期限付きトークン、一時データなどで便利です。ただし即時削除を前提にしたセキュリティ制御や厳密な有効期限判定は、アプリケーション側でも期限を確認する設計が必要です。',
    },
    {
        question:
            'DynamoDB Streamsを有効化する目的として最も適切なものはどれですか?',
        options: [
            {
                text: 'テーブルのアイテム変更を時系列のイベントとして取得し、Lambdaなどで後続処理を行うため',
                isCorrect: true,
                explanation:
                    'DynamoDB Streamsは、テーブル内のアイテム作成、更新、削除といった変更イベントを取得できる機能です。Lambdaと組み合わせた非同期処理でよく使われます。',
            },
            {
                text: 'DynamoDBテーブルをS3静的Webサイトとして公開するため',
                isCorrect: false,
                explanation:
                    'DynamoDB StreamsはWebサイト公開機能ではありません。テーブル変更イベントを扱う機能です。',
            },
            {
                text: 'GSIの読み込みを強い整合性に変更するため',
                isCorrect: false,
                explanation:
                    'Streamsを有効にしてもGSIの読み込み整合性が強い整合性に変わるわけではありません。GSIの読み込みは結果整合性です。',
            },
            {
                text: 'テーブルのパーティションキーを自動で最適な名前に変更するため',
                isCorrect: false,
                explanation:
                    'Streamsは主キー設計を自動変更しません。キー設計はテーブル設計時にアクセスパターンを考えて決めます。',
            },
        ],
        explanation:
            'Streamsはイベント駆動設計の入口です。変更履歴を使って検索インデックス更新、監査ログ作成、別システム連携などを非同期に行えます。',
    },
    {
        question:
            '複数リージョンでDynamoDBテーブルを利用し、各リージョンでローカルに低レイテンシで読み書きしたいと考えています。DynamoDB Global Tablesの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '複数リージョンにテーブルをレプリケーションし、各リージョンで読み書きできるマルチリージョン構成を提供する',
                isCorrect: true,
                explanation:
                    'DynamoDB Global Tablesは、複数リージョンにまたがるマルチリージョン、マルチアクティブなテーブル構成を提供します。各リージョンでローカルに読み書きできます。',
            },
            {
                text: '単一AZ内だけでDynamoDBを動かすための低価格モード',
                isCorrect: false,
                explanation:
                    'Global Tablesは単一AZ専用の低価格モードではありません。複数リージョンにまたがる可用性や低レイテンシを目的とした機能です。',
            },
            {
                text: 'DynamoDBをRDSのSQLテーブルへ自動変換する機能',
                isCorrect: false,
                explanation:
                    'Global TablesはDynamoDBテーブルをRDSへ変換する機能ではありません。DynamoDBテーブルを複数リージョンへレプリケーションします。',
            },
            {
                text: 'S3バケットをDynamoDBテーブルとして直接マウントする機能',
                isCorrect: false,
                explanation:
                    'S3をDynamoDBテーブルとしてマウントする機能ではありません。DynamoDBのマルチリージョンレプリケーション機能です。',
            },
        ],
        explanation:
            'Global Tablesはグローバルアプリケーションやリージョン障害対策で強力ですが、レプリケーション遅延、競合、整合性、コストを理解して設計する必要があります。',
    },
]
