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
    {
        question:
            'Lambda 関数の役割として最も適切なものはどれですか?',
        options: [
            {
                text: 'イベントを受け取り、決められた処理を実行する小さなプログラムとして動く',
                isCorrect: true,
                explanation:
                    'Lambda 関数は、イベント（何かが起きたという通知や出来事）を受け取り、その内容に応じてコードを実行する単位です。1 つの役割を持つ小さなプログラムとして考えると理解しやすいです。',
            },
            {
                text: 'AWS アカウント全体の請求情報を集計するためだけの設定項目',
                isCorrect: false,
                explanation:
                    'Lambda 関数は請求情報を集計するだけの設定項目ではありません。コードを実行するための単位です。',
            },
            {
                text: 'S3 バケットに保存されたファイル名を自動的に変更する専用機能',
                isCorrect: false,
                explanation:
                    'Lambda を使って S3 オブジェクトに関する処理を実装することはできますが、Lambda 関数自体は S3 ファイル名変更専用の機能ではありません。',
            },
            {
                text: 'EC2 インスタンスにログインするためのユーザー名',
                isCorrect: false,
                explanation:
                    'Lambda 関数は EC2 のログインユーザー名ではありません。Lambda の実行基盤上でコードを実行する単位です。',
            },
        ],
        explanation:
            'Lambda 関数は、イベントを受けて処理を行い、必要に応じて結果を返します。処理内容、ランタイム、メモリ、タイムアウトなどの設定を関数単位で管理します。',
    },
    {
        question:
            'Lambda の「ハンドラー」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'Lambda が関数を実行するときに最初に呼び出す、イベント処理の入口となる関数',
                isCorrect: true,
                explanation:
                    'ハンドラーは、Lambda が関数コードを実行するときの入口です。言語によって細かい形は異なりますが、初級段階では「最初に呼び出される関数」と考えると理解しやすいです。Lambda はイベントデータをハンドラーに渡し、ハンドラー内の処理が実行されます。',
            },
            {
                text: 'Lambda 関数の実行ログを保存する S3 バケットの名前',
                isCorrect: false,
                explanation:
                    'ハンドラーはログ保存先ではありません。Lambda のログは通常 CloudWatch Logs（AWS のログ監視・保存サービス）に出力されます。',
            },
            {
                text: 'Lambda 関数を配置する AWS リージョンを自動選択する仕組み',
                isCorrect: false,
                explanation:
                    'ハンドラーはリージョン選択の仕組みではありません。関数コードのどこから処理を始めるかを示す入口です。',
            },
            {
                text: 'Lambda 関数に割り当てる固定 IP アドレス',
                isCorrect: false,
                explanation:
                    'ハンドラーは IP アドレスではありません。イベントを処理するコード上の入口です。',
            },
        ],
        explanation:
            '例えば Python なら `lambda_handler` のような関数、Node.js なら `handler` のような関数をハンドラーとして設定します。言語ごとに書き方は異なりますが、役割は「処理の入口」です。',
    },
    {
        question:
            'Lambda のハンドラー設定を間違えた場合に起きやすい問題として最も適切なものはどれですか?',
        options: [
            {
                text: 'Lambda が実行開始すべき関数を見つけられず、呼び出し時にエラーになる',
                isCorrect: true,
                explanation:
                    'ハンドラー名やファイル名の指定が実際のコードと合っていないと、Lambda は処理の入口を見つけられずエラーになります。',
            },
            {
                text: 'S3 バケットの保存容量が自動的に 0 になる',
                isCorrect: false,
                explanation:
                    'ハンドラー設定ミスで S3 バケット容量が 0 になるわけではありません。主な問題は Lambda が実行すべきコードの入口を見つけられないことです。',
            },
            {
                text: 'EC2 インスタンスが必ず自動停止する',
                isCorrect: false,
                explanation:
                    'Lambda のハンドラー設定ミスによって EC2 インスタンスが必ず自動停止することはありません。',
            },
            {
                text: 'Lambda 関数のメモリ設定が必ず最大値に変更される',
                isCorrect: false,
                explanation:
                    'ハンドラー設定ミスでメモリ設定が自動的に最大値へ変更されることはありません。',
            },
        ],
        explanation:
            'トラブルシューティングでは、コード内の関数名、ファイル名、Lambda 側のハンドラー設定が一致しているかを確認します。',
    },
    {
        question:
            'Lambda の「ランタイム」の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'Python や Node.js など、関数コードを実行するための言語ごとの実行環境',
                isCorrect: true,
                explanation:
                    'ランタイムは、関数コードを実行するための言語ごとの実行環境です。例えば Python で書いた関数なら Python ランタイム、Node.js で書いた関数なら Node.js ランタイムを使います。',
            },
            {
                text: 'Lambda 関数を必ず 24 時間実行し続けるための設定',
                isCorrect: false,
                explanation:
                    'ランタイムは常時実行の設定ではありません。コードをどの言語環境で実行するかに関わる設定です。',
            },
            {
                text: 'Lambda 関数の実行結果を保存するデータベース',
                isCorrect: false,
                explanation:
                    'ランタイムはデータベースではありません。実行結果を保存したい場合は、S3、DynamoDB、RDS など別のサービスを使います。',
            },
            {
                text: 'Lambda 関数を呼び出せる IAM ユーザーの一覧',
                isCorrect: false,
                explanation:
                    '呼び出し権限は IAM（Identity and Access Management: AWS の認証・認可を管理する仕組み）やリソースベースポリシーで管理します。ランタイムは権限一覧ではありません。',
            },
        ],
        explanation:
            'ランタイムを選ぶことで、Lambda はその言語のコードを実行できるようになります。対応している言語やバージョンを選ぶ点が基本です。',
    },
    {
        question:
            'Python で書いた Lambda 関数を実行したい場合、基本的に選ぶべき設定として最も適切なものはどれですか?',
        options: [
            {
                text: 'Python のランタイムを選ぶ',
                isCorrect: true,
                explanation:
                    'Python で書いたコードを Lambda で実行するには、Python のランタイム（Python コードを実行するための環境）を選びます。',
            },
            {
                text: '必ず Java のランタイムを選ぶ',
                isCorrect: false,
                explanation:
                    'Python のコードを Java ランタイムでそのまま実行することはできません。コードの言語に合ったランタイムを選びます。',
            },
            {
                text: 'ランタイムはどの言語を選んでも実行結果は必ず同じになる',
                isCorrect: false,
                explanation:
                    'ランタイムは関数コードを実行する言語環境なので、コードの言語と合っている必要があります。',
            },
            {
                text: 'ランタイムを選ばずに S3 バケット名だけ指定する',
                isCorrect: false,
                explanation:
                    'S3 バケット名だけでは Lambda 関数のコードを実行できません。コードを実行するためのランタイム設定が必要です。',
            },
        ],
        explanation:
            'Lambda では、コードの言語とランタイムの対応を意識します。初級段階では「Python のコードなら Python ランタイム」のように考えると十分です。',
    },
    {
        question:
            'Lambda 関数がイベントオブジェクトを受け取る説明として最も適切なものはどれですか?',
        options: [
            {
                text: '関数を起動した出来事に関するデータが、ハンドラーの引数として渡される',
                isCorrect: true,
                explanation:
                    'Lambda では、関数を起動したイベントのデータがハンドラーに渡されます。例えば S3 イベントなら、対象バケットやオブジェクトキー（S3 内でのファイル名やパスのような識別子）などの情報をイベントオブジェクトから確認できます。',
            },
            {
                text: 'イベントオブジェクトは常に空で、関数内からは何も参照できない',
                isCorrect: false,
                explanation:
                    'イベントオブジェクトには、呼び出し元サービスやイベント内容に応じた情報が入ります。常に空というわけではありません。',
            },
            {
                text: 'イベントオブジェクトは Lambda 関数のメモリサイズだけを表す数値である',
                isCorrect: false,
                explanation:
                    'イベントオブジェクトはメモリサイズだけを表すものではありません。イベントの内容を表すデータです。',
            },
            {
                text: 'イベントオブジェクトは EC2 インスタンスのログインパスワードである',
                isCorrect: false,
                explanation:
                    'イベントオブジェクトはログインパスワードではありません。Lambda 関数を起動した出来事に関するデータです。',
            },
        ],
        explanation:
            'イベントオブジェクトは、多くの場合 JSON（キーと値で構成されたデータ形式）をもとにしたオブジェクトとして扱います。どのような項目が入るかは、呼び出し元のサービスによって変わります。',
    },
    {
        question:
            'S3 のオブジェクト作成イベントで Lambda が起動された場合、イベントオブジェクトから確認する情報として自然なものはどれですか?',
        options: [
            {
                text: '作成されたオブジェクトのバケット名やキー',
                isCorrect: true,
                explanation:
                    'S3 イベントでは、どのバケットのどのオブジェクトに関するイベントかをイベントデータから確認できます。キーは S3 オブジェクトの名前やパスのような識別子です。',
            },
            {
                text: 'Lambda 関数に SSH 接続するためのパスワード',
                isCorrect: false,
                explanation:
                    'Lambda に SSH 接続して管理する使い方はしません。イベントオブジェクトに SSH パスワードが入るわけではありません。',
            },
            {
                text: 'AWS アカウントのルートユーザーパスワード',
                isCorrect: false,
                explanation:
                    'イベントオブジェクトにルートユーザーのパスワードが入ることはありません。認証情報をイベントに含める設計は避けるべきです。',
            },
            {
                text: 'EC2 インスタンスの OS パッチ適用履歴だけ',
                isCorrect: false,
                explanation:
                    'S3 イベントは S3 オブジェクトに関する出来事を表します。EC2 の OS パッチ履歴を表すものではありません。',
            },
        ],
        explanation:
            'イベントオブジェクトの中身は、何をきっかけに Lambda が起動されたかで変わります。S3 ならバケット名やオブジェクトキー、API Gateway なら HTTP リクエスト情報などが代表例です。',
    },
    {
        question:
            'Lambda のハンドラーに渡される context オブジェクトの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '呼び出し ID や関数名など、実行中の呼び出しや関数に関する補足情報を持つオブジェクト',
                isCorrect: true,
                explanation:
                    'context オブジェクトには、リクエスト ID、関数名、残り実行時間など、現在の呼び出しや実行環境に関する情報が含まれます。event が「何が起きたか」を表すのに対して、context は「今回の実行そのもの」に関する補足情報を表します。',
            },
            {
                text: 'Lambda 関数のソースコードそのものを保存するオブジェクト',
                isCorrect: false,
                explanation:
                    'context オブジェクトはソースコード本体ではありません。実行中の呼び出しに関する補足情報を提供します。',
            },
            {
                text: 'S3 バケットを自動作成するためだけの設定値',
                isCorrect: false,
                explanation:
                    'context オブジェクトは S3 バケット自動作成用の設定ではありません。',
            },
            {
                text: 'Lambda 関数の戻り値を必ず破棄するための設定',
                isCorrect: false,
                explanation:
                    'context オブジェクトは戻り値を破棄する設定ではありません。呼び出しや関数に関する情報を参照するためのものです。',
            },
        ],
        explanation:
            '初級段階では、event は「起きた出来事のデータ」、context は「今回の実行に関する補足情報」と分けて覚えると理解しやすいです。',
    },
    {
        question:
            'Lambda 関数の戻り値について、同期呼び出しの場合の説明として最も適切なものはどれですか?',
        options: [
            {
                text: '呼び出し元が Lambda の実行結果として戻り値を受け取れる',
                isCorrect: true,
                explanation:
                    '同期呼び出し（呼び出し元が処理完了まで待つ方式）では、呼び出し元は Lambda 関数の処理完了を待ち、戻り値を結果として受け取れます。例えばコンソールのテスト実行や API Gateway 経由の呼び出しで意識しやすい動きです。API Gateway と組み合わせる場合は、戻り値が HTTP レスポンスとして扱われる設計もあります。',
            },
            {
                text: '同期呼び出しでは、Lambda 関数は戻り値を一切返せない',
                isCorrect: false,
                explanation:
                    '同期呼び出しでは戻り値を呼び出し元に返せます。戻り値の扱いは呼び出し方や連携サービスによって変わります。',
            },
            {
                text: '同期呼び出しでは、戻り値は必ず S3 バケットとして作成される',
                isCorrect: false,
                explanation:
                    '戻り値が自動的に S3 バケットとして作成されることはありません。必要ならコード内で S3 に書き込む処理を実装します。',
            },
            {
                text: '同期呼び出しでは、戻り値は必ず EC2 インスタンスの起動設定になる',
                isCorrect: false,
                explanation:
                    '戻り値が EC2 の起動設定になるわけではありません。関数コードが返した値として扱われます。',
            },
        ],
        explanation:
            '戻り値は、呼び出し元や連携サービスがその結果をどう扱うかまで含めて考えます。同期呼び出し（呼び出し元が処理完了まで待つ方式）では結果を受け取れる点が基本です。',
    },
    {
        question:
            'Lambda 関数の戻り値について、非同期呼び出しの場合の基本的な考え方として最も適切なものはどれですか?',
        options: [
            {
                text: '呼び出し元は関数の完了を待たないため、戻り値を直接受け取る用途には向きにくい',
                isCorrect: true,
                explanation:
                    '非同期呼び出し（呼び出し元が処理完了を待たずに次へ進む方式）では、呼び出し元はイベントを Lambda に渡した後、関数の完了や戻り値を待ちません。結果を残したい場合は、関数内で DynamoDB や S3 などに書き込む設計を考えます。',
            },
            {
                text: '非同期呼び出しでは、戻り値が必ず呼び出し元の画面に表示される',
                isCorrect: false,
                explanation:
                    '非同期呼び出しでは、呼び出し元が戻り値を直接待ち受ける動きではありません。結果の扱いは別途設計します。',
            },
            {
                text: '非同期呼び出しでは、Lambda 関数のコードが実行されない',
                isCorrect: false,
                explanation:
                    '非同期呼び出しでも Lambda 関数は実行されます。ただし、呼び出し元が完了や戻り値を待たない点が同期呼び出しと異なります。',
            },
            {
                text: '非同期呼び出しでは、必ず EC2 インスタンスを経由しなければならない',
                isCorrect: false,
                explanation:
                    '非同期呼び出しに EC2 経由は必須ではありません。Lambda の呼び出し方式の 1 つとして利用できます。',
            },
        ],
        explanation:
            '戻り値をすぐ呼び出し元に返したいのか、処理を依頼して後で結果を保存すればよいのかで、同期呼び出しと非同期呼び出しの考え方が変わります。',
    },
]
