import type { Question } from '@/types/test_questions'

export const testQuestions: Question[] = [
    {
        question:
            'AWS Lambda の基本的な説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'イベントに応じてコードを実行できるサーバーレスのコンピューティングサービス',
                isCorrect: true,
                explanation:
                    'Lambda は、イベント（何かが起きたという通知や出来事）をきっかけに関数コードを実行するサーバーレスのコンピューティングサービスです。サーバーのプロビジョニングや OS 管理を利用者が直接行う必要はありません。',
            },
            {
                text: '仮想サーバーを作成し、OS にログインして自由に管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EC2 の説明です。Lambda では利用者が OS にログインしてサーバーを管理する形式ではありません。',
            },
            {
                text: 'リレーショナルデータベースを作成して SQL を実行するサービス',
                isCorrect: false,
                explanation:
                    'リレーショナルデータベースには Amazon RDS などを使用します。Lambda はデータベースそのものではなく、コードを実行するサービスです。',
            },
            {
                text: '静的ファイルをオブジェクトとして保存するストレージサービス',
                isCorrect: false,
                explanation:
                    'これは Amazon S3 の説明です。Lambda はファイル保存用のストレージではありません。',
            },
        ],
        explanation:
            'Lambda は「何かが起きたらコードを実行する」用途に向いたサービスです。小さな処理、自動化、イベント処理、API のバックエンドなどでよく使われます。',
    },
    {
        question:
            'Lambda における「関数」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'Lambda で実行されるコードと設定をまとめた実行単位',
                isCorrect: true,
                explanation:
                    'Lambda 関数は、実行するコード、ランタイム（Python や Node.js などの実行環境）、メモリ、タイムアウト（関数の最大実行時間）、実行ロール（Lambda 関数に AWS リソースへのアクセス権限を与える仕組み）などの設定を持つ実行単位です。',
            },
            {
                text: 'AWS アカウント内のすべてのネットワーク設定をまとめた単位',
                isCorrect: false,
                explanation:
                    'ネットワーク設定全体をまとめる単位ではありません。VPC などのネットワーク設定とは別の概念です。',
            },
            {
                text: 'EC2 インスタンスに必ず 1 つだけ割り当てる起動スクリプト',
                isCorrect: false,
                explanation:
                    'Lambda 関数は EC2 インスタンスに必ず割り当てるものではありません。Lambda の管理基盤上で実行されます。',
            },
            {
                text: 'S3 バケット内のフォルダを表す名前',
                isCorrect: false,
                explanation:
                    'S3 のフォルダ構造とは関係ありません。Lambda 関数はコードの実行単位です。',
            },
        ],
        explanation:
            'Lambda 関数は、「1 つの役割を持つ小さなプログラム」のようなイメージです。関数ごとにコードや実行時の設定を管理します。',
    },
    {
        question:
            '「サーバーレス」という言葉の説明として、Lambda の文脈で最も適切なものはどれですか?',
        options: [
            {
                text: 'サーバー管理の多くを AWS に任せ、利用者は主にコードと設定に集中できるという意味',
                isCorrect: true,
                explanation:
                    'サーバーレスは、サーバーが存在しないという意味ではありません。実際には AWS 側のサーバー上で処理が実行されています。利用者はサーバーの準備、OS 管理、スケーリング（負荷に応じて処理能力を増減すること）などを AWS に任せ、主にコード開発に集中できます。',
            },
            {
                text: '物理サーバーも仮想サーバーも一切使わずにコードが実行されるという意味',
                isCorrect: false,
                explanation:
                    '実際には AWS 側のインフラ上でコードが実行されます。利用者がサーバーを直接管理しない、という意味で理解するのが重要です。',
            },
            {
                text: 'インターネット接続がない環境でも必ず実行できるという意味',
                isCorrect: false,
                explanation:
                    'サーバーレスはネットワーク接続の有無を表す言葉ではありません。Lambda の実行環境やアクセス先の設計は別途考える必要があります。',
            },
            {
                text: 'コードを書かなくてもあらゆる処理を自動で実行できるという意味',
                isCorrect: false,
                explanation:
                    'Lambda では基本的に実行したい処理をコードとして用意します。サーバーレスはコード不要という意味ではありません。',
            },
        ],
        explanation:
            'サーバーレスでは、サーバーの運用作業を減らし、イベント処理やアプリケーションロジックに集中しやすくなります。',
    },
    {
        question:
            'Lambda が「イベント駆動」のサービスだと言われる理由として最も適切なものはどれですか?',
        options: [
            {
                text: 'S3 へのファイル作成や API 呼び出しなど、何らかのイベントをきっかけに関数を実行できるため',
                isCorrect: true,
                explanation:
                    'Lambda はイベント（何かが起きたという通知や出来事）を受け取り、その内容に応じて関数コードを実行できます。S3、API Gateway、EventBridge、SQS など多くのサービスと連携できます。',
            },
            {
                text: '利用者が OS にログインして毎回手動でプロセスを起動するため',
                isCorrect: false,
                explanation:
                    'Lambda は OS にログインしてプロセスを手動起動する使い方ではありません。イベントや API 呼び出しによって実行されます。',
            },
            {
                text: '必ず毎秒 1 回、すべての関数が自動実行されるため',
                isCorrect: false,
                explanation:
                    'Lambda 関数は常に一定間隔で実行されるわけではありません。定期実行したい場合は、EventBridge Scheduler（指定時刻や定期スケジュールで処理を実行できるサービス）などでスケジュールを設定します。',
            },
            {
                text: 'データベースのテーブルを作成すると自動で SQL が実行されるため',
                isCorrect: false,
                explanation:
                    'Lambda のイベント駆動は SQL 実行を意味しません。各種イベントをきっかけに関数コードを実行する考え方です。',
            },
        ],
        explanation:
            'イベント駆動では「何が起きたら、どの処理を実行するか」を設計します。Lambda はこのような処理に向いています。',
    },
    {
        question:
            'S3 バケットに画像がアップロードされたときだけサムネイル作成処理を動かしたい場合、Lambda の使い方として最も適切なものはどれですか?',
        options: [
            {
                text: 'S3 のオブジェクト作成イベントをトリガーにして Lambda 関数を実行する',
                isCorrect: true,
                explanation:
                    'S3 のイベント通知を使うと、オブジェクト作成などをきっかけに Lambda 関数を起動できます。アップロード時だけ処理したい用途に合います。',
            },
            {
                text: 'Lambda 関数を常に起動したままにして、while ループで S3 を監視し続ける',
                isCorrect: false,
                explanation:
                    'Lambda は常駐プロセスとして監視し続ける用途には向きません。S3 イベントを使って必要なときだけ起動する方が自然です。',
            },
            {
                text: 'EC2 インスタンスを必ず停止してから Lambda を実行する',
                isCorrect: false,
                explanation:
                    'S3 イベントによる Lambda 実行に EC2 の停止は必要ありません。Lambda は EC2 の状態とは独立して利用できます。',
            },
            {
                text: 'S3 バケット名を Lambda 関数名と完全に同じにする',
                isCorrect: false,
                explanation:
                    'S3 バケット名と Lambda 関数名を同じにする必要はありません。イベント通知や権限設定が重要です。',
            },
        ],
        explanation:
            'Lambda では、S3 にファイルが置かれた、API が呼ばれた、スケジュール時刻になった、というイベントを起点に処理を実行できます。',
    },
    {
        question:
            'Lambda と EC2 の違いとして最も適切なものはどれですか?',
        options: [
            {
                text: 'Lambda は関数単位でコードを実行し、EC2 は仮想サーバーを起動して OS やプロセスを管理する',
                isCorrect: true,
                explanation:
                    'Lambda は関数を実行するサービスで、サーバー管理の多くを AWS に任せます。EC2 は仮想サーバーを起動し、OS やミドルウェアを利用者が管理します。',
            },
            {
                text: 'Lambda は必ず手動実行専用で、EC2 はイベントからしか起動できない',
                isCorrect: false,
                explanation:
                    'Lambda は手動実行だけでなく、各種イベントから起動できます。EC2 もイベント専用のサービスではありません。',
            },
            {
                text: 'Lambda はストレージサービスで、EC2 は DNS サービスである',
                isCorrect: false,
                explanation:
                    'Lambda はコンピューティングサービス、EC2 も仮想サーバーを提供するコンピューティングサービスです。ストレージや DNS そのものではありません。',
            },
            {
                text: 'Lambda を使う場合も、利用者は必ず OS のパッチ適用を直接行う',
                isCorrect: false,
                explanation:
                    'Lambda の実行環境の多くは AWS によって管理されています。EC2 のように OS にログインして直接管理する方式ではありません。',
            },
        ],
        explanation:
            'EC2 はサーバーを持つ感覚に近く、Lambda は処理単位のコードを必要なタイミングで実行する感覚に近いサービスです。',
    },
    {
        question:
            '「Web アプリのバックエンド API を、アクセスがあったときだけ実行したい」という要件に対する Lambda の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'API Gateway などからのリクエストをイベントとして受け取り、必要なときに Lambda 関数を実行できる',
                isCorrect: true,
                explanation:
                    'API Gateway（HTTP API を公開・管理できるサービス）と Lambda を組み合わせると、HTTP リクエストをきっかけに Lambda 関数を実行する API バックエンドを作れます。',
            },
            {
                text: 'Lambda は HTTP リクエストに一切対応できないため、API のバックエンドには使えない',
                isCorrect: false,
                explanation:
                    'Lambda は API Gateway や Lambda Function URLs などと組み合わせて HTTP リクエストを処理できます。',
            },
            {
                text: 'Lambda を使うには必ず EC2 上で Web サーバーを起動しておく必要がある',
                isCorrect: false,
                explanation:
                    'Lambda の実行に EC2 上の Web サーバーを必ず用意する必要はありません。API Gateway などから直接呼び出せます。',
            },
            {
                text: 'Lambda は常に 1 台の固定サーバー上で待ち受け続けるサービスである',
                isCorrect: false,
                explanation:
                    'Lambda は利用者が 1 台の固定サーバーを意識して常時待ち受けさせるサービスではありません。イベントに応じて実行されます。',
            },
        ],
        explanation:
            'Lambda は API のバックエンド、自動化処理、イベント処理などでよく使われます。リクエストが来たときだけ処理する設計と相性が良いです。',
    },
    {
        question:
            'Lambda が「常時起動サーバーではない」ことを踏まえた説明として最も適切なものはどれですか?',
        options: [
            {
                text: '関数はイベントや呼び出しに応じて実行され、利用者がサーバープロセスを常駐管理する前提ではない',
                isCorrect: true,
                explanation:
                    'Lambda は、イベントが発生したときに関数を実行するサービスです。利用者が OS 上でプロセスを常駐させて管理する設計ではありません。',
            },
            {
                text: 'Lambda 関数は一度作成すると、コードがなくても 24 時間同じ処理を実行し続ける',
                isCorrect: false,
                explanation:
                    'Lambda はコードなしで処理を実行し続けるものではありません。関数コードを用意し、呼び出しに応じて実行されます。',
            },
            {
                text: 'Lambda ではイベントがなくても、すべての関数が常に CPU を使い続ける',
                isCorrect: false,
                explanation:
                    'Lambda はイベントや呼び出しがない間、利用者の関数コードが常に CPU を使い続ける前提ではありません。',
            },
            {
                text: 'Lambda を使う場合は必ず SSH でログインし、常駐プロセスを起動する',
                isCorrect: false,
                explanation:
                    'Lambda では SSH でログインして常駐プロセスを起動する使い方はしません。関数コードと設定をデプロイして実行します。',
            },
        ],
        explanation:
            'Lambda を設計するときは、サーバープロセスを起動し続けるのではなく、呼び出されたときに処理を完了する関数として考えることが重要です。',
    },
    {
        question:
            '長時間起動し続けるチャットサーバーのように、常時接続を維持するプロセスを自分で管理したい場合の判断として最も適切なものはどれですか?',
        options: [
            {
                text: 'Lambda よりも、EC2 やコンテナ系サービスなど常駐プロセスを扱いやすい選択肢を検討する',
                isCorrect: true,
                explanation:
                    'Lambda はイベントごとに短い処理を実行する用途に向いています。常時接続や長時間常駐するプロセスを自分で管理したい場合は、EC2 や ECS なども検討します。',
            },
            {
                text: 'Lambda 関数内で無限ループを書けば、常時起動サーバーとして最も適した構成になる',
                isCorrect: false,
                explanation:
                    'Lambda にはタイムアウト（関数の最大実行時間）があり、常時起動サーバーとして無限ループで運用する設計には向きません。',
            },
            {
                text: 'Lambda は OS にログインできるため、常時接続サーバーの管理に最も向いている',
                isCorrect: false,
                explanation:
                    'Lambda は OS にログインして常時接続サーバーを管理するサービスではありません。',
            },
            {
                text: '常時接続が必要な場合でも、必ず S3 イベントだけで実現する',
                isCorrect: false,
                explanation:
                    'S3 イベントはファイル作成などをきっかけに処理する仕組みであり、常時接続サーバーの代替ではありません。',
            },
        ],
        explanation:
            'Lambda は便利ですが、何にでも最適なわけではありません。常時起動や長時間処理が中心なら、別のコンピューティングサービスも候補になります。',
    },
    {
        question:
            'Lambda の使いどころとして最も自然なものはどれですか?',
        options: [
            {
                text: 'S3 へのファイルアップロードをきっかけに、短い変換処理を実行する',
                isCorrect: true,
                explanation:
                    'S3 イベントをトリガーにして Lambda を起動し、画像変換やメタデータ抽出などの短い処理を行う構成はよく使われます。',
            },
            {
                text: 'OS にログインして GUI アプリを常時起動し続ける',
                isCorrect: false,
                explanation:
                    'Lambda は OS にログインして GUI アプリを常時起動する用途には向きません。',
            },
            {
                text: '1 台の仮想サーバーに固定 IP を付けて、手動でミドルウェアを管理する',
                isCorrect: false,
                explanation:
                    'これは EC2 のような仮想サーバーの使い方に近いです。Lambda はサーバーを直接管理する用途ではありません。',
            },
            {
                text: 'リレーショナルデータベースのデータファイルを直接保存する',
                isCorrect: false,
                explanation:
                    'Lambda はデータベースのデータファイルを保存するストレージサービスではありません。データ保存には RDS、DynamoDB、S3 などを検討します。',
            },
        ],
        explanation:
            'Lambda は、イベントをきっかけに短い処理を実行する用途に向いています。サーバー管理を減らしたい自動化処理にも適しています。',
    },
]
