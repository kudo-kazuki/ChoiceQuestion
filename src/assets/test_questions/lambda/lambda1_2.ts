import type { Question } from '@/types/test_questions'

export const testQuestions: Question[] = [
    {
            question:
                'Lambda 関数を手動で実行して動作確認したい場合、最も自然な方法はどれですか?',
            options: [
                {
                    text: 'AWS マネジメントコンソールの Lambda 画面で、テストイベントを作成して実行する',
                    isCorrect: true,
                    explanation:
                        'AWS マネジメントコンソールの Lambda 画面では、テストイベント（関数に渡すサンプルのイベントデータ）を作成して関数を手動実行できます。初期の動作確認に使いやすい方法です。',
                },
                {
                    text: '必ず EC2 に SSH ログインして Lambda プロセスを起動する',
                    isCorrect: false,
                    explanation:
                        'Lambda は EC2 に SSH ログインしてプロセスを起動するサービスではありません。コンソールや AWS CLI、SDK などから呼び出せます。',
                },
                {
                    text: 'S3 バケット名を関数名と同じにしないと手動実行できない',
                    isCorrect: false,
                    explanation:
                        'S3 バケット名と関数名を同じにする必要はありません。手動実行ではテストイベントを使えます。',
                },
                {
                    text: 'Lambda は手動実行できず、必ず他サービスからしか起動できない',
                    isCorrect: false,
                    explanation:
                        'Lambda は他サービスのイベントから起動できるだけでなく、コンソールや AWS CLI などから手動で呼び出すこともできます。',
                },
            ],
            explanation:
                '最初に関数を作ったときは、AWS マネジメントコンソールのテストイベントで入力データとログを確認すると、基本的な動作を確認しやすいです。',
        },
    {
            question:
                'Lambda のテストイベントの説明として最も適切なものはどれですか?',
            options: [
                {
                    text: '関数に渡すイベントオブジェクトのサンプルを用意して、手動実行に使うもの',
                    isCorrect: true,
                    explanation:
                        'テストイベントは、Lambda 関数へ渡すイベントオブジェクトのサンプルです。S3 イベントや API リクエストを想定した JSON（キーと値で構成されたデータ形式）を用意して動作確認できます。',
                },
                {
                    text: 'Lambda 関数を本番環境では絶対に実行できなくする設定',
                    isCorrect: false,
                    explanation:
                        'テストイベントは実行禁止の設定ではありません。関数を手動実行して動作確認するための入力データです。',
                },
                {
                    text: 'CloudWatch Logs を自動削除するためだけの設定',
                    isCorrect: false,
                    explanation:
                        'テストイベントはログ削除の設定ではありません。Lambda 関数への入力データとして使います。',
                },
                {
                    text: 'Lambda 関数のメモリを自動で最大値にする機能',
                    isCorrect: false,
                    explanation:
                        'テストイベントでメモリ設定が自動的に最大値になるわけではありません。メモリは関数の設定で指定します。',
                },
            ],
            explanation:
                'テストイベントを使うと、実際の S3 アップロードや API 呼び出しを待たずに、関数の処理ロジックを確認できます。実際の S3 イベントや API リクエストに近い JSON を用意すると、実運用に近い形で動作確認できます。',
        },
    {
            question:
                'AWS CLI から Lambda 関数を直接呼び出したい場合に使う代表的なコマンドはどれですか?',
            options: [
                {
                    text: 'aws lambda invoke',
                    isCorrect: true,
                    explanation:
                        'AWS CLI（ターミナルやコマンドラインから AWS を操作するツール）では、`aws lambda invoke` を使って Lambda 関数を直接呼び出せます。',
                },
                {
                    text: 'aws s3 mb',
                    isCorrect: false,
                    explanation:
                        '`aws s3 mb` は S3 バケットを作成するためのコマンドです。Lambda 関数の呼び出しには `aws lambda invoke` を使います。',
                },
                {
                    text: 'aws ec2 start-instances',
                    isCorrect: false,
                    explanation:
                        '`aws ec2 start-instances` は EC2 インスタンスを起動するコマンドです。Lambda 関数の呼び出しとは別です。',
                },
                {
                    text: 'aws iam create-user',
                    isCorrect: false,
                    explanation:
                        '`aws iam create-user` は IAM ユーザーを作成するコマンドです。Lambda 関数の呼び出しには使いません。',
                },
            ],
            explanation:
                'AWS CLI から呼び出すと、自動テストや運用スクリプトから Lambda 関数を実行しやすくなります。',
        },
    {
            question:
                'AWS SDK から Lambda 関数を呼び出す説明として最も適切なものはどれですか?',
            options: [
                {
                    text: 'アプリケーションコードから AWS SDK を使って Lambda の Invoke API を呼び出す',
                    isCorrect: true,
                    explanation:
                        'AWS SDK（AWS サービスをコードから操作するためのライブラリ）を使うと、アプリケーションコードから Lambda 関数を呼び出せます。内部ツールやバックエンド処理から Lambda を実行したい場合に使えます。',
                },
                {
                    text: 'Lambda 関数の中では AWS SDK を一切使えない',
                    isCorrect: false,
                    explanation:
                        'Lambda 関数内でも AWS SDK を使って他の AWS サービスを操作できます。また、外部のアプリケーションから SDK で Lambda を呼び出すこともできます。',
                },
                {
                    text: 'AWS SDK は S3 バケット名を自動で Lambda 関数名に変更する機能である',
                    isCorrect: false,
                    explanation:
                        'AWS SDK は AWS サービスをコードから操作するためのライブラリです。S3 バケット名を自動で Lambda 関数名に変更する機能ではありません。',
                },
                {
                    text: 'AWS SDK で呼び出す場合は、Lambda のコードが必ず Java でなければならない',
                    isCorrect: false,
                    explanation:
                        'SDK から呼び出す側の言語と、Lambda 関数の実装言語は必ず同じである必要はありません。',
                },
            ],
            explanation:
                'Lambda はコンソールだけでなく、CLI や SDK からも呼び出せます。どこから実行したいかに応じて方法を選びます。',
        },
    {
            question:
                '他の AWS サービスから Lambda を起動する例として最も適切なものはどれですか?',
            options: [
                {
                    text: 'S3 にファイルがアップロードされたことをきっかけに Lambda を実行する',
                    isCorrect: true,
                    explanation:
                        'S3 のオブジェクト作成イベントをトリガーにして Lambda 関数を起動できます。他にも API Gateway、EventBridge、SQS、DynamoDB Streams などから Lambda を起動できます。',
                },
                {
                    text: 'Lambda 関数名を S3 バケット名と同じにすると、必ず毎秒起動する',
                    isCorrect: false,
                    explanation:
                        '関数名と S3 バケット名を同じにしても、自動で毎秒起動するわけではありません。イベント通知やスケジュールなどの設定が必要です。',
                },
                {
                    text: 'EC2 の OS パッチ適用が完了すると、すべての Lambda 関数が必ず起動する',
                    isCorrect: false,
                    explanation:
                        'EC2 の OS パッチ適用とすべての Lambda 関数の起動は直接結び付きません。何をきっかけに起動するかを設定します。',
                },
                {
                    text: 'CloudWatch Logs を開いただけで、すべての Lambda 関数が自動実行される',
                    isCorrect: false,
                    explanation:
                        'CloudWatch Logs を開くことが、すべての Lambda 関数の実行トリガーになるわけではありません。',
                },
            ],
            explanation:
                'Lambda はイベント駆動のサービスです。他の AWS サービスで起きた出来事をきっかけに処理を実行できます。',
        },
    {
            question:
                'Lambda の「トリガー」の基本的な説明として最も適切なものはどれですか?',
            options: [
                {
                    text: 'Lambda 関数を起動するきっかけとなるイベントやサービス連携の設定',
                    isCorrect: true,
                    explanation:
                        'トリガーは、Lambda 関数を起動するきっかけです。例えば S3 のファイル作成、API Gateway の HTTP リクエスト、EventBridge のスケジュールなどがトリガーになります。',
                },
                {
                    text: 'Lambda 関数のメモリを自動で最大にする設定',
                    isCorrect: false,
                    explanation:
                        'トリガーはメモリ設定ではありません。関数をいつ、何をきっかけに起動するかに関わる設定です。',
                },
                {
                    text: 'Lambda 関数のソースコードを暗号化しないようにする設定',
                    isCorrect: false,
                    explanation:
                        'トリガーは暗号化無効化の設定ではありません。関数起動のきっかけに関する設定です。',
                },
                {
                    text: 'Lambda 関数を削除するためだけのボタン',
                    isCorrect: false,
                    explanation:
                        'トリガーは関数削除用のボタンではありません。関数を呼び出すきっかけを設定するものです。',
                },
            ],
            explanation:
                '初級段階では、トリガーを「Lambda を動かすきっかけ」と覚えると理解しやすいです。',
        },
    {
            question:
                '同期呼び出しの説明として最も適切なものはどれですか?',
            options: [
                {
                    text: '呼び出し元が Lambda 関数の完了を待ち、戻り値を受け取る方式',
                    isCorrect: true,
                    explanation:
                        '同期呼び出しは、呼び出し元が Lambda 関数の処理完了まで待つ方式です。完了後に戻り値やエラー情報を受け取れます。',
                },
                {
                    text: '呼び出し元が関数の完了を一切待たず、戻り値も直接受け取らない方式',
                    isCorrect: false,
                    explanation:
                        'これは非同期呼び出しの説明です。同期呼び出しでは、呼び出し元が処理完了を待ちます。',
                },
                {
                    text: 'Lambda 関数を常に 24 時間起動し続ける方式',
                    isCorrect: false,
                    explanation:
                        '同期呼び出しは常時起動を意味しません。呼び出し元が処理完了まで待つ呼び出し方式です。',
                },
                {
                    text: 'S3 バケットを作成するたびに必ず実行される方式',
                    isCorrect: false,
                    explanation:
                        '同期呼び出しは S3 バケット作成専用の方式ではありません。Lambda の呼び出し元と応答の待ち方に関する考え方です。',
                },
            ],
            explanation:
                'API のバックエンドなど、呼び出し元がその場で結果を受け取りたい場合は、同期呼び出しの考え方が重要になります。',
        },
    {
            question:
                '非同期呼び出しの説明として最も適切なものはどれですか?',
            options: [
                {
                    text: '呼び出し元がイベントを渡した後、関数の完了を待たずに次の処理へ進む方式',
                    isCorrect: true,
                    explanation:
                        '非同期呼び出しは、呼び出し元が Lambda にイベントを渡した後、関数の完了や戻り値を待たずに次へ進む方式です。処理結果を残したい場合は、関数内で S3 や DynamoDB などに保存する設計を考えます。',
                },
                {
                    text: '呼び出し元が Lambda の処理完了まで必ず待ち、戻り値を受け取る方式',
                    isCorrect: false,
                    explanation:
                        'これは同期呼び出しの説明です。非同期呼び出しでは、呼び出し元は完了を待ちません。',
                },
                {
                    text: 'Lambda 関数が実行されない方式',
                    isCorrect: false,
                    explanation:
                        '非同期呼び出しでも Lambda 関数は実行されます。違いは、呼び出し元が完了を待つかどうかです。',
                },
                {
                    text: 'Lambda 関数を削除するための呼び出し方式',
                    isCorrect: false,
                    explanation:
                        '非同期呼び出しは関数削除の方式ではありません。関数実行の呼び出し方式です。',
                },
            ],
            explanation:
                '非同期呼び出しは、時間のかかる処理や、呼び出し元がすぐに結果を必要としない処理で使われます。',
        },
    {
            question:
                'AWS CLI で Lambda を非同期呼び出ししたい場合の考え方として最も適切なものはどれですか?',
            options: [
                {
                    text: 'InvocationType を Event にして、呼び出し元が完了を待たない方式にする',
                    isCorrect: true,
                    explanation:
                        'AWS CLI や Invoke API では、InvocationType を Event にすると非同期呼び出しになります。例えば `aws lambda invoke --invocation-type Event ...` のように指定します。呼び出し元は関数の完了や戻り値を待ちません。',
                },
                {
                    text: 'メモリ設定を 0 MB にすると非同期呼び出しになる',
                    isCorrect: false,
                    explanation:
                        'メモリ設定で同期・非同期は決まりません。呼び出し方式は InvocationType などで指定します。',
                },
                {
                    text: '関数名を async にすると必ず非同期呼び出しになる',
                    isCorrect: false,
                    explanation:
                        '関数名に async を含めても呼び出し方式は変わりません。呼び出し時の設定が重要です。',
                },
                {
                    text: 'CloudWatch Logs を無効にすると非同期呼び出しになる',
                    isCorrect: false,
                    explanation:
                        'ログ出力設定と同期・非同期の呼び出し方式は別の概念です。',
                },
            ],
            explanation:
                '同期・非同期は、Lambda をどう呼び出すかの指定です。CLI や SDK から呼び出す場合は、呼び出し時のパラメータを確認します。',
        },
    {
            question:
                'API Gateway から Lambda を呼び出す構成の説明として最も適切なものはどれですか?',
            options: [
                {
                    text: 'HTTP リクエストを受けた API Gateway が Lambda 関数を呼び出し、API のバックエンド処理を実行する',
                    isCorrect: true,
                    explanation:
                        'API Gateway（HTTP API を公開・管理できるサービス）と Lambda を組み合わせると、HTTP リクエストをきっかけに Lambda 関数を実行できます。Web API のバックエンドとしてよく使われます。',
                },
                {
                    text: 'API Gateway は Lambda 関数のメモリを自動で最大化するサービスである',
                    isCorrect: false,
                    explanation:
                        'API Gateway は HTTP API の公開・管理に使うサービスです。Lambda のメモリを自動で最大化するサービスではありません。',
                },
                {
                    text: 'API Gateway を使うと Lambda 関数のコードが不要になる',
                    isCorrect: false,
                    explanation:
                        'API Gateway はリクエストの入口を提供しますが、処理内容は Lambda 関数などで実装します。',
                },
                {
                    text: 'API Gateway は S3 の一時領域 `/tmp` を増やす設定である',
                    isCorrect: false,
                    explanation:
                        'API Gateway は `/tmp` の容量設定ではありません。HTTP リクエストを受ける入口として使います。',
                },
            ],
            explanation:
                'HTTP リクエストを受けてすぐ結果を返す API では、Lambda の戻り値が HTTP レスポンスに関係するため、同期呼び出しの考え方も重要です。',
        },
    {
            question:
                'EventBridge を使って Lambda を起動する例として最も適切なものはどれですか?',
            options: [
                {
                    text: '毎日決まった時刻に Lambda 関数を実行する',
                    isCorrect: true,
                    explanation:
                        'EventBridge や EventBridge Scheduler（指定時刻や定期スケジュールで処理を実行できる機能）を使うと、決まった時刻や一定間隔で Lambda 関数を起動できます。',
                },
                {
                    text: 'Lambda 関数のソースコードを自動で日本語に翻訳する',
                    isCorrect: false,
                    explanation:
                        'EventBridge はコード翻訳サービスではありません。イベントやスケジュールをもとに処理を起動するために使います。',
                },
                {
                    text: 'Lambda 関数のタイムアウトを無制限にする',
                    isCorrect: false,
                    explanation:
                        'EventBridge を使っても Lambda のタイムアウトが無制限になるわけではありません。',
                },
                {
                    text: 'S3 バケット内のファイルを必ず永久保存する',
                    isCorrect: false,
                    explanation:
                        'EventBridge は S3 ファイルの永久保存設定ではありません。イベントやスケジュールに応じて処理を起動するサービスです。',
                },
            ],
            explanation:
                '定期実行したい処理は、Lambda 単体ではなく EventBridge などのスケジュール機能と組み合わせて設計します。',
        },
    {
            question:
                'SQS や DynamoDB Streams などから Lambda を起動する場合に出てくる「イベントソースマッピング」の説明として最も適切なものはどれですか?',
            options: [
                {
                    text: 'キューやストリームからレコードを読み取り、Lambda 関数へ渡すための設定',
                    isCorrect: true,
                    explanation:
                        'イベントソースマッピングは、SQS、DynamoDB Streams、Kinesis などのキューやストリームからデータを読み取り、Lambda 関数を呼び出すための設定です。複数レコードをまとめて渡す場合もあります。',
                },
                {
                    text: 'Lambda 関数の表示名を自動で変更する設定',
                    isCorrect: false,
                    explanation:
                        'イベントソースマッピングは関数名を変更する設定ではありません。イベントソースから Lambda へデータを渡すための設定です。',
                },
                {
                    text: 'CloudWatch Logs の保持期間だけを決める設定',
                    isCorrect: false,
                    explanation:
                        'CloudWatch Logs の保持期間とは別の設定です。イベントソースマッピングは、キューやストリームと Lambda 関数の連携に使います。',
                },
                {
                    text: 'Lambda 関数の環境変数をすべて削除する機能',
                    isCorrect: false,
                    explanation:
                        'イベントソースマッピングは環境変数削除の機能ではありません。',
                },
            ],
            explanation:
                '初級段階では、S3 や API Gateway のような直接的なトリガーと、SQS や DynamoDB Streams のように Lambda が読み取りに行く連携がある、と整理すると理解しやすいです。',
        },
    {
            question:
                'S3 イベントで Lambda を起動する代表的な用途として最も適切なものはどれですか?',
            options: [
                {
                    text: 'S3 バケットに画像がアップロードされたら、サムネイル作成処理を実行する',
                    isCorrect: true,
                    explanation:
                        'S3 のオブジェクト作成イベントをトリガーにして Lambda を起動できます。画像アップロード後のサムネイル作成、メタデータ抽出、ファイル検査などによく使われます。',
                },
                {
                    text: 'S3 バケット名を変更するたびに、すべての EC2 インスタンスを必ず削除する',
                    isCorrect: false,
                    explanation:
                        'S3 イベント連携は、S3 で起きた出来事をきっかけに Lambda を起動する仕組みです。EC2 インスタンス削除を必ず行うものではありません。',
                },
                {
                    text: 'Lambda 関数を OS にログインして常時起動する',
                    isCorrect: false,
                    explanation:
                        'S3 イベント連携では、S3 のイベントをきっかけに Lambda が実行されます。OS にログインして常時起動する使い方ではありません。',
                },
                {
                    text: 'S3 の保存容量を Lambda のメモリ設定として自動反映する',
                    isCorrect: false,
                    explanation:
                        'S3 の保存容量が Lambda のメモリ設定に自動反映されるわけではありません。',
                },
            ],
            explanation:
                'S3 イベント連携は、「ファイルが置かれたら処理する」というイベント駆動の典型例です。',
        },
    {
            question:
                'S3 イベントで Lambda を起動する構成の注意点として最も適切なものはどれですか?',
            options: [
                {
                    text: 'Lambda が同じバケットへファイルを書き戻すと、設定によっては再び Lambda が起動してループする可能性がある',
                    isCorrect: true,
                    explanation:
                        'S3 のアップロードをトリガーにした Lambda が同じバケットへ別ファイルを書き込むと、その書き込みでも再度 Lambda が起動する可能性があります。入力用と出力用のバケットやプレフィックス（フォルダ名のようなパスの先頭部分）を分けるなどの工夫が必要です。',
                },
                {
                    text: 'S3 イベントを使うと Lambda のタイムアウトが無制限になる',
                    isCorrect: false,
                    explanation:
                        'S3 イベントで起動しても Lambda のタイムアウトは無制限になりません。関数のタイムアウト設定に従います。',
                },
                {
                    text: 'S3 イベントでは Lambda にイベントデータが一切渡されない',
                    isCorrect: false,
                    explanation:
                        'S3 イベントでは、バケット名やオブジェクトキー（S3 内でのファイル名やパスのような識別子）などの情報がイベントデータとして渡されます。',
                },
                {
                    text: 'S3 イベントを使うには、Lambda 関数名を必ず bucket にする必要がある',
                    isCorrect: false,
                    explanation:
                        'Lambda 関数名を bucket にする必要はありません。イベント通知や権限設定が重要です。',
                },
            ],
            explanation:
                'S3 と Lambda の連携では、処理結果を書き込む場所が再度トリガー対象にならないように注意します。',
        },
    {
            question:
                'API Gateway と Lambda を組み合わせる用途として最も適切なものはどれですか?',
            options: [
                {
                    text: 'HTTP リクエストを受け付ける API のバックエンド処理を Lambda で実行する',
                    isCorrect: true,
                    explanation:
                        'API Gateway（HTTP API を公開・管理できるサービス）を入口にし、Lambda をバックエンド処理として実行できます。小規模 API やサーバーレス API の構成でよく使われます。',
                },
                {
                    text: 'Lambda 関数の実行環境へ SSH ログインする入口を作る',
                    isCorrect: false,
                    explanation:
                        'API Gateway は HTTP API の入口を作るサービスです。Lambda の実行環境へ SSH ログインするための入口ではありません。',
                },
                {
                    text: 'DynamoDB テーブルのパーティションキーを自動で設計する',
                    isCorrect: false,
                    explanation:
                        'API Gateway は DynamoDB のテーブル設計を自動化するサービスではありません。',
                },
                {
                    text: 'Lambda のメモリをアクセス数に応じて自動で最大化する',
                    isCorrect: false,
                    explanation:
                        'API Gateway と連携しても、Lambda のメモリ設定が自動で最大化されるわけではありません。',
                },
            ],
            explanation:
                'API Gateway はリクエストの入口、Lambda は処理本体、という役割分担で考えると理解しやすいです。',
        },
    {
            question:
                'API Gateway から Lambda を呼び出すシナリオで、Lambda の戻り値について最も適切な説明はどれですか?',
            options: [
                {
                    text: '構成によっては、Lambda の戻り値が HTTP レスポンスとしてクライアントに返される',
                    isCorrect: true,
                    explanation:
                        'API Gateway と Lambda の統合では、Lambda の戻り値を HTTP レスポンス（ブラウザやアプリへ返す結果データ）としてクライアントへ返す構成があります。ステータスコードやレスポンス本文を意識して実装します。',
                },
                {
                    text: 'Lambda の戻り値は必ず S3 バケットとして作成される',
                    isCorrect: false,
                    explanation:
                        'Lambda の戻り値が自動的に S3 バケットとして作成されることはありません。',
                },
                {
                    text: 'API Gateway から呼び出した場合、Lambda は戻り値を一切返せない',
                    isCorrect: false,
                    explanation:
                        'API Gateway との統合では、Lambda の戻り値をレスポンスとして扱う構成があります。',
                },
                {
                    text: 'Lambda の戻り値は必ず DynamoDB Streams のレコードになる',
                    isCorrect: false,
                    explanation:
                        'Lambda の戻り値が DynamoDB Streams のレコードになるわけではありません。DynamoDB Streams は DynamoDB テーブル変更の履歴を扱う仕組みです。',
                },
            ],
            explanation:
                'API のバックエンドとして Lambda を使う場合、処理結果をどのような HTTP レスポンスとして返すかを考えます。',
        },
    {
            question:
                'EventBridge を使って Lambda を定期実行する用途として最も適切なものはどれですか?',
            options: [
                {
                    text: '毎日深夜に古い一時データを削除する処理を実行する',
                    isCorrect: true,
                    explanation:
                        'EventBridge や EventBridge Scheduler（指定時刻や定期スケジュールで処理を実行できる機能）を使うと、決まった時刻や一定間隔で Lambda を起動できます。定期的なメンテナンス処理に向いています。',
                },
                {
                    text: 'HTTP API の入口としてリクエストを受け付ける',
                    isCorrect: false,
                    explanation:
                        'HTTP API の入口には API Gateway などを使います。EventBridge はイベントやスケジュールをきっかけに処理を起動する用途に向いています。',
                },
                {
                    text: 'S3 オブジェクトを永続保存するストレージとして使う',
                    isCorrect: false,
                    explanation:
                        'EventBridge はストレージサービスではありません。S3 がオブジェクトストレージサービスです。',
                },
                {
                    text: 'Lambda 関数のソースコードを自動生成する',
                    isCorrect: false,
                    explanation:
                        'EventBridge は Lambda のソースコード自動生成サービスではありません。',
                },
            ],
            explanation:
                'スケジュール実行では、Lambda 単体ではなく EventBridge 系のサービスと組み合わせて「いつ実行するか」を決めます。',
        },
    {
            question:
                'SQS と Lambda を組み合わせる用途として最も適切なものはどれですか?',
            options: [
                {
                    text: 'キューに入ったメッセージを Lambda で順次処理する',
                    isCorrect: true,
                    explanation:
                        'SQS（メッセージを一時的にためるキューサービス）と Lambda を組み合わせると、キューに入ったメッセージを Lambda で処理できます。処理を非同期化したい場合に使いやすい構成です。',
                },
                {
                    text: 'Lambda 関数のコードを画像形式で保存する',
                    isCorrect: false,
                    explanation:
                        'SQS はメッセージキューサービスです。Lambda 関数のコードを画像形式で保存するサービスではありません。',
                },
                {
                    text: 'HTTP リクエストの入口を公開する',
                    isCorrect: false,
                    explanation:
                        'HTTP リクエストの入口には API Gateway などを使います。SQS はメッセージをためて後で処理する用途に向いています。',
                },
                {
                    text: 'Lambda の実行環境へ SSH 接続する',
                    isCorrect: false,
                    explanation:
                        'SQS は Lambda 実行環境へ SSH 接続するためのサービスではありません。',
                },
            ],
            explanation:
                'SQS を挟むと、送信側と処理側を分離しやすくなります。送信側はすぐ処理を終えられ、処理側は後から順番に処理できます。処理が一時的に遅れても、メッセージをキューにためておけます。',
        },
    {
            question:
                'SQS から Lambda でメッセージ処理する場合の基本的な注意点として最も適切なものはどれですか?',
            options: [
                {
                    text: '同じメッセージが複数回処理される可能性を考え、処理を冪等にする',
                    isCorrect: true,
                    explanation:
                        'SQS と Lambda の連携では、エラーや再試行により同じメッセージが複数回処理される可能性があります。冪等性（同じ処理を複数回実行しても、データ重複や不整合が起きにくい性質）を意識します。',
                },
                {
                    text: 'SQS を使うと Lambda の実行ロールが不要になる',
                    isCorrect: false,
                    explanation:
                        'Lambda 関数には実行ロールが必要です。SQS から読み取るための権限なども関係します。',
                },
                {
                    text: 'SQS を使うと Lambda のタイムアウトが無制限になる',
                    isCorrect: false,
                    explanation:
                        'SQS から起動しても Lambda のタイムアウトは無制限にはなりません。',
                },
                {
                    text: 'SQS のメッセージは必ず 1 回だけ、絶対に重複なく処理される',
                    isCorrect: false,
                    explanation:
                        'SQS と Lambda の連携では、重複処理の可能性を考慮します。処理側で安全に再実行できる設計が重要です。',
                },
            ],
            explanation:
                'キュー処理では、失敗時の再試行や重複処理を前提に設計します。これは初級段階でも重要な考え方です。',
        },
    {
            question:
                'DynamoDB Streams と Lambda を組み合わせる用途として最も適切なものはどれですか?',
            options: [
                {
                    text: 'DynamoDB テーブルの項目追加や更新をきっかけに、後続処理を実行する',
                    isCorrect: true,
                    explanation:
                        'DynamoDB Streams は、DynamoDB テーブルの変更履歴をイベントとして扱う仕組みです。項目追加、更新、削除などの変更情報を Lambda に渡し、データ変更をきっかけに後続処理を実行できます。',
                },
                {
                    text: 'DynamoDB のテーブル名を Lambda 関数名に自動変更する',
                    isCorrect: false,
                    explanation:
                        'DynamoDB Streams はテーブル名を変更する機能ではありません。テーブル変更の情報を処理するために使います。',
                },
                {
                    text: 'Lambda 関数のメモリ使用量を DynamoDB に自動保存する専用機能',
                    isCorrect: false,
                    explanation:
                        'DynamoDB Streams は Lambda のメモリ使用量を自動保存する機能ではありません。DynamoDB テーブルの変更履歴を扱います。',
                },
                {
                    text: 'HTTP リクエストを受け付ける API の入口を作る',
                    isCorrect: false,
                    explanation:
                        'HTTP API の入口には API Gateway などを使います。DynamoDB Streams はテーブル変更イベントを扱う仕組みです。',
                },
            ],
            explanation:
                'DynamoDB Streams と Lambda は、データ変更に連動した処理に向いています。変更履歴ストリームを使った監査ログ作成、集計、別サービスへの通知などが例です。',
        },
    {
            question:
                'DynamoDB Streams から Lambda を起動する場合の説明として最も適切なものはどれですか?',
            options: [
                {
                    text: 'イベントソースマッピングを使って、ストリームのレコードを Lambda に渡す',
                    isCorrect: true,
                    explanation:
                        'DynamoDB Streams と Lambda の連携では、イベントソースマッピングを作成して、ストリームのレコードを Lambda 関数へ渡します。Lambda が変更レコードを処理する形です。',
                },
                {
                    text: 'DynamoDB のすべてのテーブルが自動で Lambda を起動する',
                    isCorrect: false,
                    explanation:
                        'すべての DynamoDB テーブルが自動で Lambda を起動するわけではありません。Streams を有効化し、Lambda との連携を設定します。',
                },
                {
                    text: 'Lambda 関数名を table にすると自動で連携される',
                    isCorrect: false,
                    explanation:
                        '関数名だけで DynamoDB Streams との連携が自動設定されるわけではありません。イベントソースマッピングなどの設定が必要です。',
                },
                {
                    text: 'DynamoDB Streams を使うと、Lambda のコードは一切不要になる',
                    isCorrect: false,
                    explanation:
                        'DynamoDB Streams は変更情報を渡しますが、その後どう処理するかは Lambda 関数のコードで実装します。',
                },
            ],
            explanation:
                'DynamoDB Streams は、データ変更そのものをイベントとして扱える点が特徴です。',
        },
    {
            question:
                'Lambda 関数から DynamoDB にデータを書き込みたい場合、必要になるものとして最も適切なものはどれですか?',
            options: [
                {
                    text: 'Lambda の実行ロールに DynamoDB への書き込み権限を付与する',
                    isCorrect: true,
                    explanation:
                        'Lambda 関数から DynamoDB に書き込むには、実行ロール（IAM を使って Lambda 関数へ AWS リソースへのアクセス権限を与える仕組み）に `PutItem`（DynamoDB にデータを書き込む API）など必要な DynamoDB 権限を付与します。',
                },
                {
                    text: 'DynamoDB テーブル名を必ず Lambda にする',
                    isCorrect: false,
                    explanation:
                        'DynamoDB テーブル名を Lambda にする必要はありません。必要なのは、対象テーブルへアクセスするための権限とコードです。',
                },
                {
                    text: 'Lambda 関数の説明欄にパスワードを書く',
                    isCorrect: false,
                    explanation:
                        '説明欄にパスワードを書くのは避けるべきです。DynamoDB へのアクセスは IAM 権限で制御します。',
                },
                {
                    text: 'CloudWatch Logs の保存期間を 0 日にする',
                    isCorrect: false,
                    explanation:
                        'CloudWatch Logs の保存期間は DynamoDB 書き込み権限とは関係ありません。',
                },
            ],
            explanation:
                'Lambda から他の AWS サービスへアクセスする場合は、コードだけでなく実行ロールの権限も確認します。',
        },
    {
            question:
                'Lambda 関数から S3 にファイルを保存したい場合の説明として最も適切なものはどれですか?',
            options: [
                {
                    text: 'コードで S3 へ書き込む処理を実装し、実行ロールに S3 書き込み権限を付与する',
                    isCorrect: true,
                    explanation:
                        'Lambda から S3 にファイルを保存するには、AWS SDK（AWS サービスをコードから操作するためのライブラリ）などで S3 に書き込む処理を実装し、実行ロールに必要な S3 権限を付与します。',
                },
                {
                    text: 'Lambda の戻り値にファイル名を書くだけで、必ず S3 に保存される',
                    isCorrect: false,
                    explanation:
                        '戻り値にファイル名を書くだけで S3 に自動保存されるわけではありません。S3 へ書き込む処理をコードで実装します。',
                },
                {
                    text: 'S3 に保存するには Lambda のメモリを必ず最大にする必要がある',
                    isCorrect: false,
                    explanation:
                        'S3 への保存に必ず最大メモリが必要なわけではありません。処理内容に応じてメモリ設定を調整します。',
                },
                {
                    text: 'S3 に保存するには Lambda 関数名を bucket にする必要がある',
                    isCorrect: false,
                    explanation:
                        'Lambda 関数名を bucket にする必要はありません。S3 へアクセスするためのコードと権限が必要です。',
                },
            ],
            explanation:
                'Lambda から S3 や DynamoDB へアクセスする場合、「コードで何をするか」と「実行ロールに権限があるか」の両方を確認します。',
        },
    {
            question:
                'Lambda と他 AWS サービスを連携するときの権限の考え方として最も適切なものはどれですか?',
            options: [
                {
                    text: 'Lambda が他サービスへアクセスする権限と、他サービスが Lambda を呼び出す権限を分けて考える',
                    isCorrect: true,
                    explanation:
                        'Lambda では、関数が S3 や DynamoDB へアクセスするための実行ロール権限と、S3 や API Gateway などが Lambda を呼び出すための権限を分けて考えます。例えば、Lambda が S3 にファイルを書き込むには Lambda 側の実行ロール権限が必要です。一方、S3 が Lambda を起動するには、S3 側から Lambda を呼び出せる設定も関係します。',
                },
                {
                    text: '一度 Lambda 関数を作れば、すべての AWS サービスへ自動で無制限アクセスできる',
                    isCorrect: false,
                    explanation:
                        'Lambda 関数はすべての AWS サービスへ自動で無制限アクセスできるわけではありません。必要な権限を付与します。',
                },
                {
                    text: '他サービスと連携する場合、IAM は一切関係しない',
                    isCorrect: false,
                    explanation:
                        'IAM（Identity and Access Management: AWS の認証・認可を管理する仕組み）は Lambda の権限管理に関係します。',
                },
                {
                    text: '権限が不足していても、Lambda は必ず自動で権限を追加する',
                    isCorrect: false,
                    explanation:
                        'Lambda が不足した権限を必ず自動追加するわけではありません。アクセス拒否エラーが出た場合は、必要な権限を確認します。',
                },
            ],
            explanation:
                '連携のトラブルでは、「誰が誰を呼び出すのか」「Lambda がどのサービスへアクセスするのか」を分けて確認すると原因を見つけやすくなります。',
        },
    {
            question:
                '画像アップロード後にサムネイルを作成し、結果を別の S3 バケットへ保存する構成として最も適切なものはどれですか?',
            options: [
                {
                    text: '入力用 S3 バケットの作成イベントで Lambda を起動し、Lambda が出力用 S3 バケットへサムネイルを書き込む',
                    isCorrect: true,
                    explanation:
                        '入力用バケットと出力用バケットを分けると、Lambda が出力したファイルで同じトリガーが再実行されるループを避けやすくなります。Lambda には出力先 S3 への書き込み権限も必要です。',
                },
                {
                    text: 'Lambda の `/tmp` にサムネイルを保存すれば、永続的な公開ファイルとして必ず使える',
                    isCorrect: false,
                    explanation:
                        '`/tmp` は一時領域です。永続的に保存したいサムネイルは S3 などに保存します。',
                },
                {
                    text: 'API Gateway を使えば、S3 のアップロードイベント設定は必ず不要になる',
                    isCorrect: false,
                    explanation:
                        'S3 アップロードをきっかけに処理したい場合は、S3 イベント通知などの設定が必要です。API Gateway は HTTP リクエストの入口として使います。',
                },
                {
                    text: 'DynamoDB Streams を使えば、S3 にアップロードされた画像を必ず自動検出できる',
                    isCorrect: false,
                    explanation:
                        'DynamoDB Streams は DynamoDB テーブルの変更を扱う仕組みです。S3 のオブジェクト作成イベントとは別です。',
                },
            ],
            explanation:
                'サービス連携では、イベントの発生元、Lambda の処理、出力先、権限、ループ防止をセットで考えます。',
        },
    {
            question:
                'Lambda の実行ロールの説明として最も適切なものはどれですか?',
            options: [
                {
                    text: 'Lambda 関数が AWS サービスやリソースへアクセスするために使う IAM ロール',
                    isCorrect: true,
                    explanation:
                        '実行ロールは、Lambda 関数が S3、DynamoDB、CloudWatch Logs などへアクセスするために使う IAM ロール（AWS サービスなどへ一時的に権限を渡す仕組み）です。IAM は AWS の認証・認可を管理する仕組みです。',
                },
                {
                    text: 'Lambda 関数の表示名を自動生成する設定',
                    isCorrect: false,
                    explanation:
                        '実行ロールは表示名を自動生成する設定ではありません。Lambda 関数に AWS リソースへのアクセス権限を与えるための仕組みです。',
                },
                {
                    text: 'Lambda 関数を必ず 24 時間起動し続けるための設定',
                    isCorrect: false,
                    explanation:
                        '実行ロールは常時起動の設定ではありません。権限管理に関する設定です。',
                },
                {
                    text: 'S3 バケット内の一時フォルダ名',
                    isCorrect: false,
                    explanation:
                        '実行ロールは S3 のフォルダ名ではありません。IAM ロールの一種です。',
                },
            ],
            explanation:
                'Lambda 関数が他の AWS サービスを操作するときは、コードだけでなく実行ロールの権限も必要です。',
        },
    {
            question:
                'Lambda 関数に実行ロールが必要な理由として最も適切なものはどれですか?',
            options: [
                {
                    text: 'Lambda 関数がどの AWS 操作を行ってよいかを AWS に判断させるため',
                    isCorrect: true,
                    explanation:
                        '実行ロールには、Lambda 関数が実行してよい AWS の操作をポリシーとして定義します。例えば S3 から読み取る、DynamoDB に書き込む、CloudWatch Logs にログを出す、といった権限です。',
                },
                {
                    text: 'Lambda 関数のコードを自動で高速化するため',
                    isCorrect: false,
                    explanation:
                        '実行ロールはコード高速化の機能ではありません。権限管理の仕組みです。',
                },
                {
                    text: 'Lambda 関数の戻り値を必ず S3 に保存するため',
                    isCorrect: false,
                    explanation:
                        '実行ロールだけで戻り値が自動的に S3 へ保存されるわけではありません。S3 に保存するにはコードで書き込み処理を実装し、必要な権限を付与します。',
                },
                {
                    text: '関数名を AWS アカウント内で必ず重複させるため',
                    isCorrect: false,
                    explanation:
                        '実行ロールは関数名の重複を目的とした設定ではありません。',
                },
            ],
            explanation:
                '実行ロールは「この Lambda 関数は何をしてよいか」を AWS に伝えるための重要な設定です。',
        },
    {
            question:
                'Lambda のログを CloudWatch Logs に出力するために必要なものとして最も適切なものはどれですか?',
            options: [
                {
                    text: '実行ロールに CloudWatch Logs へ書き込む権限を付与する',
                    isCorrect: true,
                    explanation:
                        'Lambda のログを CloudWatch Logs（AWS のログ監視・保存サービス）へ送るには、実行ロールに CloudWatch Logs へログを書き込むための権限が必要です。',
                },
                {
                    text: '関数名を必ず logs にする',
                    isCorrect: false,
                    explanation:
                        '関数名を logs にする必要はありません。必要なのは CloudWatch Logs への書き込み権限です。',
                },
                {
                    text: 'Lambda 関数のメモリを最大値にする',
                    isCorrect: false,
                    explanation:
                        'ログ出力に必ず最大メモリが必要なわけではありません。権限とログ出力処理を確認します。',
                },
                {
                    text: 'S3 バケットを作成しておけば、CloudWatch Logs 権限は不要になる',
                    isCorrect: false,
                    explanation:
                        'S3 バケットの有無と CloudWatch Logs への書き込み権限は別です。CloudWatch Logs に出すには対応する権限が必要です。',
                },
            ],
            explanation:
                'Lambda の基本的なログ出力には、`AWSLambdaBasicExecutionRole`（Lambda の基本的なログ出力権限を含む AWS 管理ポリシー）のような CloudWatch Logs への書き込み権限を含むポリシーが使われることがあります。',
        },
    {
            question:
                'Lambda のログが CloudWatch Logs に出てこない場合、初級者がまず確認することとして最も適切なものはどれですか?',
            options: [
                {
                    text: '実行ロールに CloudWatch Logs への書き込み権限があるか確認する',
                    isCorrect: true,
                    explanation:
                        'ログが出ない場合は、まず実行ロールに CloudWatch Logs への書き込み権限があるか確認します。あわせて、関数が実際に呼び出されているか、コードでログ出力しているかも確認します。',
                },
                {
                    text: 'S3 バケットのプレフィックスを必ず logs に変更する',
                    isCorrect: false,
                    explanation:
                        'S3 のプレフィックス変更は CloudWatch Logs への出力権限とは関係ありません。',
                },
                {
                    text: 'DynamoDB テーブルを削除する',
                    isCorrect: false,
                    explanation:
                        'DynamoDB テーブル削除はログが出ない問題の基本対応ではありません。不要な削除は避けるべきです。',
                },
                {
                    text: 'Lambda のタイムアウトを 0 秒にする',
                    isCorrect: false,
                    explanation:
                        'タイムアウトを 0 秒にすることはできず、ログ出力問題の解決にもなりません。',
                },
            ],
            explanation:
                '権限不足、関数未実行、ログ出力コードの不足などを順番に切り分けます。',
        },
    {
            question:
                'Lambda 関数から S3 のオブジェクトを読み取りたい場合、必要になる権限として最も適切なものはどれですか?',
            options: [
                {
                    text: '実行ロールに対象 S3 オブジェクトを読み取る権限を付与する',
                    isCorrect: true,
                    explanation:
                        'Lambda 関数から S3 を読むには、実行ロールに対象バケットやオブジェクトへの読み取り権限が必要です。例えば `GetObject`（S3 オブジェクトを読み取る API）のような読み取り API への権限を検討します。',
                },
                {
                    text: 'S3 バケット名を Lambda 関数名と同じにする',
                    isCorrect: false,
                    explanation:
                        'バケット名と関数名を同じにしても、S3 読み取り権限が自動で付与されるわけではありません。',
                },
                {
                    text: 'Lambda の説明欄に S3 と書く',
                    isCorrect: false,
                    explanation:
                        '説明欄に S3 と書いても、S3 への読み取り権限は付与されません。IAM ポリシーで権限を設定します。',
                },
                {
                    text: 'CloudWatch Logs を無効にする',
                    isCorrect: false,
                    explanation:
                        'CloudWatch Logs を無効にしても S3 読み取り権限は得られません。',
                },
            ],
            explanation:
                'Lambda から他サービスへアクセスする場合は、対象サービスでどの操作をするのかに応じて実行ロールへ権限を付けます。',
        },
    {
            question:
                'Lambda 関数から DynamoDB に項目を書き込みたい場合の権限設定として最も適切なものはどれですか?',
            options: [
                {
                    text: '実行ロールに対象テーブルへの書き込み権限を付与する',
                    isCorrect: true,
                    explanation:
                        'Lambda から DynamoDB に項目を書き込むには、実行ロールに対象テーブルへの書き込み権限が必要です。例えば `PutItem`（DynamoDB にデータを書き込む API）などの権限を付与します。',
                },
                {
                    text: 'DynamoDB テーブル名を必ず lambda に変更する',
                    isCorrect: false,
                    explanation:
                        'テーブル名を lambda にしても書き込み権限は付与されません。実行ロールの IAM ポリシーで権限を設定します。',
                },
                {
                    text: 'Lambda 関数の戻り値に true を返せば自動で書き込める',
                    isCorrect: false,
                    explanation:
                        '戻り値に true を返すだけで DynamoDB に書き込まれるわけではありません。コードで書き込み処理を実装し、権限も付与します。',
                },
                {
                    text: 'API Gateway を作成すれば DynamoDB 権限は不要になる',
                    isCorrect: false,
                    explanation:
                        'API Gateway は HTTP API の入口です。Lambda から DynamoDB へ書き込むには実行ロールの権限が必要です。',
                },
            ],
            explanation:
                'DynamoDB 連携では、コード、対象テーブル名、実行ロールの権限をセットで確認します。',
        },
    {
            question:
                'S3 が Lambda 関数を起動するための権限について、最も適切な説明はどれですか?',
            options: [
                {
                    text: 'S3 がその Lambda 関数を呼び出せるように、Lambda 側のリソースベースポリシーなどで許可する',
                    isCorrect: true,
                    explanation:
                        'S3 のような AWS サービスが Lambda を呼び出すには、Lambda 関数側でそのサービスからの呼び出しを許可する必要があります。これは Lambda 関数そのものに設定されるアクセス許可ポリシーである、リソースベースポリシーで管理されます。',
                },
                {
                    text: 'Lambda の実行ロールに S3 書き込み権限を付ければ、S3 は必ず Lambda を起動できる',
                    isCorrect: false,
                    explanation:
                        '実行ロールは Lambda が他サービスへアクセスするための権限です。S3 が Lambda を呼び出す権限とは別に考えます。',
                },
                {
                    text: 'S3 バケットの中に Lambda 関数コードを置くだけで、自動的に呼び出し権限が付く',
                    isCorrect: false,
                    explanation:
                        'コードを S3 に置くだけで、S3 から Lambda を呼び出す権限が自動設定されるわけではありません。',
                },
                {
                    text: 'CloudWatch Logs の保持期間を長くすれば、S3 が Lambda を起動できる',
                    isCorrect: false,
                    explanation:
                        'CloudWatch Logs の保持期間は、S3 が Lambda を呼び出す権限とは関係ありません。',
                },
            ],
            explanation:
                'Lambda が外へアクセスする権限と、外部サービスが Lambda を呼び出す権限は分けて考えます。',
        },
    {
            question:
                'Lambda のリソースベースポリシーの説明として最も適切なものはどれですか?',
            options: [
                {
                    text: '他の AWS サービスやアカウントが、その Lambda 関数を呼び出せるかを制御するポリシー',
                    isCorrect: true,
                    explanation:
                        'リソースベースポリシーは、Lambda 関数そのものに設定されるアクセス許可ポリシーです。「誰がこの関数を呼び出せるか」を制御し、S3 や API Gateway などからの呼び出し許可に関係します。',
                },
                {
                    text: 'Lambda 関数のメモリ使用量を自動で増減する設定',
                    isCorrect: false,
                    explanation:
                        'リソースベースポリシーはメモリ設定ではありません。アクセス許可に関するポリシーです。',
                },
                {
                    text: 'Lambda 関数のソースコードを自動圧縮する機能',
                    isCorrect: false,
                    explanation:
                        'リソースベースポリシーはソースコード圧縮機能ではありません。',
                },
                {
                    text: 'DynamoDB テーブルの項目を自動削除する設定',
                    isCorrect: false,
                    explanation:
                        'リソースベースポリシーは DynamoDB の項目削除設定ではありません。',
                },
            ],
            explanation:
                '実行ロールは Lambda が何をできるか、リソースベースポリシーは誰が Lambda を呼べるか、と分けると理解しやすいです。',
        },
    {
            question:
                '「Lambda から S3 に書き込めない」という AccessDenied エラーが出た場合、まず確認すべきものはどれですか?',
            options: [
                {
                    text: 'Lambda の実行ロールに、対象 S3 バケットへの書き込み権限があるか',
                    isCorrect: true,
                    explanation:
                        'Lambda から S3 に書き込む処理で AccessDenied が出る場合、まず実行ロールに対象バケットへの書き込み権限があるか確認します。対象リソースや操作がポリシーで許可されているかが重要です。',
                },
                {
                    text: 'Lambda 関数名が 3 文字以下か',
                    isCorrect: false,
                    explanation:
                        '関数名の長さは、S3 書き込みの AccessDenied の主な原因ではありません。',
                },
                {
                    text: 'CloudWatch Logs にログが 100 行以上あるか',
                    isCorrect: false,
                    explanation:
                        'ログ行数は S3 書き込み権限の有無を決めません。エラー内容を見ることは大切ですが、権限設定を確認します。',
                },
                {
                    text: 'SQS キュー名が DynamoDB テーブル名と一致しているか',
                    isCorrect: false,
                    explanation:
                        'SQS キュー名と DynamoDB テーブル名の一致は、Lambda から S3 に書き込む権限とは関係ありません。',
                },
            ],
            explanation:
                'AccessDenied は権限不足の代表的なエラーです。「誰が」「どのリソースに」「どの操作をしようとしているか」を確認します。',
        },
    {
            question:
                '最小権限の考え方として最も適切なものはどれですか?',
            options: [
                {
                    text: '必要な操作と対象リソースだけを許可する',
                    isCorrect: true,
                    explanation:
                        '最小権限は、作業に必要な操作と対象リソースだけを許可する考え方です。例えば特定の S3 バケットに読み取りだけ必要なら、すべての S3 操作を許可するのではなく、必要な読み取り操作に絞ります。',
                },
                {
                    text: '開発を楽にするため、常にすべての AWS サービスへの管理者権限を付ける',
                    isCorrect: false,
                    explanation:
                        '常に管理者権限を付けると、誤操作や情報漏えい時の影響が大きくなります。必要な権限に絞ることが重要です。',
                },
                {
                    text: '権限エラーが出たら、理由を確認せず全権限を付与する',
                    isCorrect: false,
                    explanation:
                        '権限エラーが出た場合は、必要な操作と対象リソースを確認して、必要な権限だけを追加します。',
                },
                {
                    text: 'ログ出力だけの関数にも、DynamoDB の全テーブル削除権限を付ける',
                    isCorrect: false,
                    explanation:
                        'ログ出力だけの関数に DynamoDB の全テーブル削除権限は不要です。不要な権限は付けないようにします。',
                },
            ],
            explanation:
                '最小権限はセキュリティの基本です。Lambda の実行ロールでも、関数の役割に必要な権限だけを付与します。',
        },
    {
            question:
                '最小権限に近い Lambda 実行ロールの例として最も適切なものはどれですか?',
            options: [
                {
                    text: '特定の DynamoDB テーブルに `PutItem` だけ必要な関数へ、そのテーブルへの書き込み権限だけを付ける',
                    isCorrect: true,
                    explanation:
                        '特定のテーブルへ書き込むだけの関数なら、対象テーブルと必要な操作に絞った権限が最小権限に近い考え方です。',
                },
                {
                    text: 'すべての AWS サービスに対して管理者権限を付ける',
                    isCorrect: false,
                    explanation:
                        '管理者権限は範囲が広すぎます。最小権限の考え方からは外れます。',
                },
                {
                    text: 'S3 を読まない関数に、すべての S3 バケット削除権限を付ける',
                    isCorrect: false,
                    explanation:
                        '使わないサービスや不要な削除権限を付けるべきではありません。',
                },
                {
                    text: 'ログを書くだけの関数に、全リージョンの DynamoDB 全削除権限を付ける',
                    isCorrect: false,
                    explanation:
                        'ログを書くだけなら CloudWatch Logs への必要権限を中心に考えます。DynamoDB の全削除権限は不要で危険です。',
                },
            ],
            explanation:
                '最小権限では、操作の種類と対象リソースの両方を絞ります。',
        },
    {
            question:
                'Lambda の権限トラブルを調べるときの考え方として最も適切なものはどれですか?',
            options: [
                {
                    text: '呼び出し方向を整理し、Lambda が外へアクセスする権限か、外部から Lambda を呼ぶ権限かを分けて確認する',
                    isCorrect: true,
                    explanation:
                        '権限トラブルでは、まず「誰が誰にアクセスしているのか」を整理します。Lambda が S3 や DynamoDB へアクセスするなら実行ロール、S3 や API Gateway が Lambda を呼ぶなら Lambda 側の呼び出し許可を確認します。',
                },
                {
                    text: '権限エラーは必ずメモリ不足が原因なので、メモリだけ最大にする',
                    isCorrect: false,
                    explanation:
                        '権限エラーは IAM ポリシーやリソースベースポリシーなどが原因であることが多いです。メモリ設定だけでは解決しません。',
                },
                {
                    text: 'AccessDenied が出たら、ログを見ずに関数を削除する',
                    isCorrect: false,
                    explanation:
                        '関数削除は基本対応ではありません。ログやエラー内容を確認し、必要な権限を見直します。',
                },
                {
                    text: 'Lambda の権限設定は一切変更できないため、調査しても意味がない',
                    isCorrect: false,
                    explanation:
                        'Lambda の実行ロールやリソースベースポリシーは確認・更新できます。権限トラブルでは重要な調査対象です。',
                },
            ],
            explanation:
                'Lambda の権限は、実行ロール、リソースベースポリシー、呼び出し元サービスの設定など複数の観点で確認します。',
        },
    {
            question:
                'S3 に置かれたファイルを読み取り、結果を DynamoDB に保存する Lambda 関数に必要な権限として最も適切なものはどれですか?',
            options: [
                {
                    text: '実行ロールに、対象 S3 オブジェクトの読み取り権限と対象 DynamoDB テーブルへの書き込み権限を付ける',
                    isCorrect: true,
                    explanation:
                        'この Lambda 関数は S3 から読み取り、DynamoDB に書き込むため、実行ロールには対象 S3 への読み取り権限と対象 DynamoDB テーブルへの書き込み権限が必要です。',
                },
                {
                    text: 'S3 と DynamoDB の権限は不要で、CloudWatch Logs 権限だけあれば必ず動く',
                    isCorrect: false,
                    explanation:
                        'ログ出力権限だけでは S3 読み取りや DynamoDB 書き込みはできません。アクセス先ごとの権限が必要です。',
                },
                {
                    text: 'DynamoDB に保存するには、Lambda 関数名を DynamoDB テーブル名と同じにする',
                    isCorrect: false,
                    explanation:
                        '関数名とテーブル名を同じにしても権限は付与されません。実行ロールで許可します。',
                },
                {
                    text: 'S3 を読むには API Gateway のステージ名を変更する',
                    isCorrect: false,
                    explanation:
                        'API Gateway のステージ名は S3 読み取り権限とは関係ありません。',
                },
            ],
            explanation:
                'シナリオごとに「Lambda がどのサービスへ、どの操作をするか」を書き出すと、必要な権限を整理しやすくなります。',
        }
]
