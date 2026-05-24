import type { Question } from '@/types/test_questions'

export const testQuestions: Question[] = [
    {
            question:
                'Lambda 関数が失敗したとき、まず確認する情報として最も適切なものはどれですか?',
            options: [
                {
                    text: 'CloudWatch Logs に出力されたエラーメッセージや処理の進み具合',
                    isCorrect: true,
                    explanation:
                        'Lambda のトラブルシューティングでは、まず CloudWatch Logs（AWS のログ監視・保存サービス）でエラー内容や処理の進み具合を確認します。どこまで処理が進み、どこで失敗したかを追うのが基本です。',
                },
                {
                    text: '関数名の文字数だけ',
                    isCorrect: false,
                    explanation:
                        '関数名の文字数だけを見ても、失敗原因は分かりません。ログやエラー内容を確認します。',
                },
                {
                    text: 'S3 バケット名が Lambda と完全一致しているかだけ',
                    isCorrect: false,
                    explanation:
                        'S3 バケット名と Lambda 関数名の一致は、一般的な失敗原因の確認ポイントではありません。',
                },
                {
                    text: '説明欄が空欄かどうかだけ',
                    isCorrect: false,
                    explanation:
                        '説明欄は運用上の分かりやすさには役立ちますが、失敗原因の特定にはログや実行結果の確認が重要です。',
                },
            ],
            explanation:
                'ログには、エラーメッセージ、処理中に出力した情報、実行時間やメモリ使用量の手がかりが含まれます。',
        },
    {
            question:
                'CloudWatch Logs を使った Lambda の調査として最も適切なものはどれですか?',
            options: [
                {
                    text: '関数のログを確認し、エラー行、リクエスト ID、処理時間などを手がかりに原因を絞る',
                    isCorrect: true,
                    explanation:
                        'CloudWatch Logs では、エラー行や自分で出力したログ、リクエスト ID、CloudWatch Logs に自動出力される REPORT 行（実行時間やメモリ使用量などの実行結果情報）などを確認できます。これらを手がかりに原因を絞ります。',
                },
                {
                    text: 'CloudWatch Logs を開けば、コードのバグが必ず自動修正される',
                    isCorrect: false,
                    explanation:
                        'CloudWatch Logs はログ確認のためのサービスです。コードの自動修正は行いません。',
                },
                {
                    text: 'ログを見るには必ず EC2 に SSH ログインする',
                    isCorrect: false,
                    explanation:
                        'Lambda のログは Lambda コンソールや CloudWatch コンソール、AWS CLI などから確認できます。EC2 への SSH ログインは不要です。',
                },
                {
                    text: 'CloudWatch Logs は S3 バケットのフォルダ名を変更するための機能である',
                    isCorrect: false,
                    explanation:
                        'CloudWatch Logs はログの保存・確認に使うサービスです。S3 のフォルダ名変更機能ではありません。',
                },
            ],
            explanation:
                '障害調査では、ログに出す情報も重要です。処理開始、外部サービス呼び出し前後、エラー時の情報を残すと原因を追いやすくなります。',
        },
    {
            question:
                'Lambda 関数がタイムアウトした場合、最初に確認する観点として最も適切なものはどれですか?',
            options: [
                {
                    text: '処理がどこで時間を使っているか、タイムアウト設定が処理内容に対して短すぎないかを確認する',
                    isCorrect: true,
                    explanation:
                        'タイムアウトは、関数が最大実行時間を超えたときに発生します。ログで処理の進み具合を確認し、外部 API 呼び出し（外部サービスへの通信）、S3 からの大きなファイル取得、重い計算などで時間を使っていないかを見ます。',
                },
                {
                    text: '関数名を短くすれば必ずタイムアウトしなくなる',
                    isCorrect: false,
                    explanation:
                        '関数名の長さは通常、タイムアウトの原因ではありません。処理時間や外部サービスの応答を確認します。',
                },
                {
                    text: 'CloudWatch Logs を削除すればタイムアウトしなくなる',
                    isCorrect: false,
                    explanation:
                        'ログを削除してもタイムアウトの根本原因は解決しません。処理内容やタイムアウト設定を確認します。',
                },
                {
                    text: 'タイムアウトは Lambda では発生しないため確認不要',
                    isCorrect: false,
                    explanation:
                        'Lambda にはタイムアウト設定があり、設定時間を超えると実行が停止されます。',
                },
            ],
            explanation:
                'タイムアウト時は、単に設定値を大きくするだけでなく、処理を分割できないか、外部サービス呼び出しが遅くないかも確認します。',
        },
    {
            question:
                'Lambda 関数から S3 にアクセスしたとき AccessDenied が出た場合、最も適切な確認はどれですか?',
            options: [
                {
                    text: '実行ロールに対象 S3 バケットへの必要な操作権限があるか確認する',
                    isCorrect: true,
                    explanation:
                        'Lambda から S3 へアクセスする場合は、実行ロールに対象バケットへの必要な権限が必要です。読み取りなら `GetObject`（S3 オブジェクトを読み取る API）、書き込みなら `PutObject`（S3 にファイルを書き込む API）など、操作に応じた権限を確認します。',
                },
                {
                    text: 'Lambda 関数の説明欄を長くする',
                    isCorrect: false,
                    explanation:
                        '説明欄を長くしても S3 へのアクセス権限は付与されません。',
                },
                {
                    text: 'テストイベントを空にすれば必ず解決する',
                    isCorrect: false,
                    explanation:
                        'テストイベントを空にしても権限不足は解決しません。実行ロールや対象リソースを確認します。',
                },
                {
                    text: 'メモリ設定を最大にすれば権限不足は自動解消される',
                    isCorrect: false,
                    explanation:
                        'メモリ設定と IAM 権限は別です。AccessDenied は権限設定を確認します。',
                },
            ],
            explanation:
                '権限不足の調査では、「誰が」「どのリソースに」「どの操作をしようとしているか」を整理します。',
        },
    {
            question:
                'S3 イベントを設定したのに Lambda が起動しない場合、確認する観点として最も適切なものはどれですか?',
            options: [
                {
                    text: 'S3 側のイベント通知設定と、S3 が Lambda を呼び出せる権限を確認する',
                    isCorrect: true,
                    explanation:
                        'S3 から Lambda を起動するには、S3 のイベント通知設定と、S3 が Lambda を呼び出せる権限が必要です。これは Lambda の実行ロールとは別で、S3 から Lambda を呼び出せる許可設定を確認します。',
                },
                {
                    text: 'Lambda のメモリを最大にすれば必ず S3 から起動する',
                    isCorrect: false,
                    explanation:
                        'メモリ設定を最大にしても、S3 のイベント通知や呼び出し権限が正しくなければ起動しません。',
                },
                {
                    text: 'DynamoDB テーブルを作成すれば S3 イベントが自動設定される',
                    isCorrect: false,
                    explanation:
                        'DynamoDB テーブル作成で S3 イベント通知が自動設定されるわけではありません。',
                },
                {
                    text: 'Lambda の環境変数をすべて削除する',
                    isCorrect: false,
                    explanation:
                        '環境変数削除は S3 イベント通知の基本的な確認ポイントではありません。',
                },
            ],
            explanation:
                '「Lambda が外へアクセスする権限」と「外部サービスが Lambda を呼び出す権限」を分けて確認します。',
        },
    {
            question:
                'Lambda のハンドラー設定ミスが疑われる状況として最も適切なものはどれですか?',
            options: [
                {
                    text: 'デプロイはできたが、実行時に処理の入口となる関数が見つからないエラーになる',
                    isCorrect: true,
                    explanation:
                        'ハンドラー設定は、Lambda が最初に呼び出す関数を指定します。ファイル名や関数名の指定がコードと合っていないと、実行時に入口を見つけられずエラーになります。',
                },
                {
                    text: 'S3 バケット名が短いため必ず実行できない',
                    isCorrect: false,
                    explanation:
                        'S3 バケット名の長さだけでハンドラー設定ミスとは判断できません。',
                },
                {
                    text: 'CloudWatch Logs の保持期間が 1 年だから必ず失敗する',
                    isCorrect: false,
                    explanation:
                        'ログ保持期間はハンドラー設定ミスとは別の設定です。',
                },
                {
                    text: 'DynamoDB テーブルにデータが 1 件以上あるから必ず失敗する',
                    isCorrect: false,
                    explanation:
                        'DynamoDB のデータ件数はハンドラー設定ミスの直接原因ではありません。',
                },
            ],
            explanation:
                'ハンドラー設定ミスは、コードの配置、ファイル名、エクスポート名、Lambda 側のハンドラー設定を照らし合わせて確認します。',
        },
    {
            question:
                'Lambda 関数で環境変数 `TABLE_NAME` を使っているのに KeyError や undefined のようなエラーが出る場合、まず確認することはどれですか?',
            options: [
                {
                    text: 'Lambda の環境変数に `TABLE_NAME` が設定されているか、名前の大文字小文字が一致しているかを確認する',
                    isCorrect: true,
                    explanation:
                        '環境変数の設定漏れや名前の不一致はよくある原因です。言語によってエラー名は異なりますが、環境変数が取得できていない可能性があります。`TABLE_NAME` と `table_name` のように大文字小文字が違うだけでも、コードから参照できない場合があります。',
                },
                {
                    text: 'Lambda 関数名を TABLE_NAME に変更する',
                    isCorrect: false,
                    explanation:
                        '関数名を変更しても、環境変数 `TABLE_NAME` が自動設定されるわけではありません。',
                },
                {
                    text: 'CloudWatch Logs を削除すれば環境変数が復元される',
                    isCorrect: false,
                    explanation:
                        'ログを削除しても環境変数は復元されません。Lambda の設定を確認します。',
                },
                {
                    text: 'S3 バケットを新規作成すれば環境変数が自動追加される',
                    isCorrect: false,
                    explanation:
                        'S3 バケット作成で Lambda の環境変数が自動追加されるわけではありません。',
                },
            ],
            explanation:
                '環境変数のトラブルでは、設定漏れ、名前のスペルミス、大文字小文字、期待する環境にデプロイされているかを確認します。',
        },
    {
            question:
                '本番環境の Lambda が開発用 DynamoDB テーブルを参照してしまう場合、疑うべき設定として最も適切なものはどれですか?',
            options: [
                {
                    text: '環境変数に設定したテーブル名が本番用ではなく開発用になっていないか',
                    isCorrect: true,
                    explanation:
                        '環境変数でテーブル名を切り替えている場合、本番環境に開発用の値が入っていると誤ったテーブルを参照します。環境ごとの設定値を確認します。',
                },
                {
                    text: 'Lambda 関数の説明欄が短すぎないか',
                    isCorrect: false,
                    explanation:
                        '説明欄の長さは、参照先 DynamoDB テーブルの切り替えとは通常関係ありません。',
                },
                {
                    text: 'CloudWatch Logs のログ保持期間が長すぎないか',
                    isCorrect: false,
                    explanation:
                        'ログ保持期間は参照先テーブル名の設定とは別です。',
                },
                {
                    text: 'SQS キューが存在するかどうか',
                    isCorrect: false,
                    explanation:
                        'このシナリオでは、まず Lambda が参照しているテーブル名の設定を確認します。',
                },
            ],
            explanation:
                '環境変数は環境ごとの設定切り替えに便利ですが、値の入れ間違いは実務上よくあるトラブルです。',
        },
    {
            question:
                'テストイベントを使ったトラブルシューティングとして最も適切なものはどれですか?',
            options: [
                {
                    text: '実際のイベントに近い入力データを用意し、関数が期待どおり処理できるか確認する',
                    isCorrect: true,
                    explanation:
                        'テストイベントでは、S3 イベントや API リクエストに近い JSON（キーと値で構成されたデータ形式）を用意して、関数の動作を確認します。実運用に近い入力ほど、問題を見つけやすくなります。',
                },
                {
                    text: 'テストイベントは常に空 JSON にすれば十分である',
                    isCorrect: false,
                    explanation:
                        '空 JSON では、実際のイベントに含まれるバケット名、オブジェクトキー、リクエスト本文などを確認できません。実際に近い形を用意します。',
                },
                {
                    text: 'テストイベントを作ると、IAM 権限が自動で全許可になる',
                    isCorrect: false,
                    explanation:
                        'テストイベントを作っても IAM 権限が自動で全許可になるわけではありません。権限は実行ロールなどで管理します。',
                },
                {
                    text: 'テストイベントを使うと、CloudWatch Logs は確認できなくなる',
                    isCorrect: false,
                    explanation:
                        'テストイベントで実行した場合も、ログは CloudWatch Logs などで確認できます。',
                },
            ],
            explanation:
                'テストイベントは、関数ロジックを小さく確認するための有効な手段です。入力データの形が実際と違うと、見逃す問題もあります。',
        },
    {
            question:
                'Lambda のテストイベントで S3 イベントを再現したい場合、含める情報として自然なものはどれですか?',
            options: [
                {
                    text: '対象のバケット名とオブジェクトキー',
                    isCorrect: true,
                    explanation:
                        'S3 イベントを再現するなら、どのバケットのどのオブジェクトに対するイベントかを表す情報が重要です。オブジェクトキーは S3 内でのファイル名やパスのような識別子です。',
                },
                {
                    text: 'Lambda 関数へ SSH ログインするためのパスワード',
                    isCorrect: false,
                    explanation:
                        'Lambda 関数へ SSH ログインする使い方はしません。テストイベントにも SSH パスワードを入れるべきではありません。',
                },
                {
                    text: 'AWS アカウントのルートユーザーパスワード',
                    isCorrect: false,
                    explanation:
                        'ルートユーザーパスワードをテストイベントに含めてはいけません。機密情報を不用意に入れないようにします。',
                },
                {
                    text: 'CloudWatch Logs の保存期間だけ',
                    isCorrect: false,
                    explanation:
                        'S3 イベントの再現には、バケット名やオブジェクトキーなど、実際のイベントに近い情報が必要です。',
                },
            ],
            explanation:
                'イベントの形が実際と違うと、コードが正しく動くか判断しにくくなります。AWS サービスごとのイベント形式を意識します。',
        },
    {
            question:
                '「ローカルでは動いたが Lambda では失敗する」場合の初歩的な確認として最も適切なものはどれですか?',
            options: [
                {
                    text: 'Lambda 上のログ、環境変数、実行ロール、ランタイムやアーキテクチャの違いを確認する',
                    isCorrect: true,
                    explanation:
                        'ローカル環境と Lambda 実行環境では、環境変数、権限、ランタイム、CPU アーキテクチャ、ファイル配置などが異なることがあります。CloudWatch Logs を見ながら差分を確認します。',
                },
                {
                    text: 'Lambda は必ずローカルと完全に同じ環境なので確認不要',
                    isCorrect: false,
                    explanation:
                        'Lambda とローカル環境は完全に同じとは限りません。環境差分を確認することが重要です。',
                },
                {
                    text: '関数名を長くすれば必ず動く',
                    isCorrect: false,
                    explanation:
                        '関数名の長さでローカルとの差分は解決しません。',
                },
                {
                    text: 'S3 バケットを削除すれば原因が必ず分かる',
                    isCorrect: false,
                    explanation:
                        '不要な削除は避けるべきです。まずログや設定を確認します。',
                },
            ],
            explanation:
                'Lambda の基本的なトラブルシューティングでは、ログ、入力イベント、環境変数、権限、実行環境の差分を順に確認します。',
        },
    {
            question:
                'Lambda のトラブルシューティングで、ログに出すと役立つ情報として最も適切なものはどれですか?',
            options: [
                {
                    text: '処理開始、主要な分岐、外部サービス呼び出し前後、エラー内容など',
                    isCorrect: true,
                    explanation:
                        'ログには、処理開始、重要な入力の一部、主要な分岐、外部サービス呼び出し前後、エラー内容などを出すと調査しやすくなります。ただし、パスワードや API キーなどの機密情報は出さないようにします。',
                },
                {
                    text: 'AWS アカウントのルートユーザーパスワード',
                    isCorrect: false,
                    explanation:
                        'パスワードなどの機密情報をログに出してはいけません。',
                },
                {
                    text: 'すべてのユーザーの個人情報を無条件で出力する',
                    isCorrect: false,
                    explanation:
                        '個人情報や機密情報を不用意にログへ出すのは避けるべきです。必要最小限の情報にします。',
                },
                {
                    text: 'ログは一切出さない方が必ず調査しやすい',
                    isCorrect: false,
                    explanation:
                        'ログがないと、どこで失敗したか分かりにくくなります。必要な範囲で適切にログを出します。',
                },
            ],
            explanation:
                'ログは多ければよいわけではありません。調査に必要な情報を、機密情報を避けて出すことが大切です。',
        },
    {
            question:
                'Lambda 関数でエラーが発生したときの基本的な考え方として最も適切なものはどれですか?',
            options: [
                {
                    text: '呼び出し方法や連携サービスによって、リトライや失敗時の扱いが変わる',
                    isCorrect: true,
                    explanation:
                        'Lambda の失敗時の挙動は、同期呼び出し、非同期呼び出し、SQS などのイベントソースマッピングで異なります。エラーが出たら、まず「どう呼び出されているか」を確認します。',
                },
                {
                    text: 'どの呼び出し方法でも、失敗したイベントは必ず永久に保存される',
                    isCorrect: false,
                    explanation:
                        '失敗したイベントが必ず永久保存されるわけではありません。呼び出し方式や設定によって、リトライ、破棄、失敗先への送信など挙動が変わります。',
                },
                {
                    text: 'Lambda はエラーを返しても必ず成功扱いになる',
                    isCorrect: false,
                    explanation:
                        'Lambda 関数のエラーは呼び出し元やログで確認できます。成功扱いになるとは限りません。',
                },
                {
                    text: 'エラーが出たら必ずメモリだけ最大にすればよい',
                    isCorrect: false,
                    explanation:
                        'メモリ不足が原因のこともありますが、権限、入力データ、外部サービス、コードバグなど多くの原因があります。ログや呼び出し方式を確認します。',
                },
            ],
            explanation:
                '失敗時は「どの呼び出し方式か」「どこまで処理されたか」「再実行される可能性があるか」を確認します。',
        },
    {
            question:
                '同期呼び出しで Lambda 関数がエラーになった場合の基本的な説明として最も適切なものはどれですか?',
            options: [
                {
                    text: '呼び出し元がエラーを受け取り、必要に応じて呼び出し元側で再試行を判断する',
                    isCorrect: true,
                    explanation:
                        '同期呼び出しでは、呼び出し元が Lambda の完了を待ちます。関数がエラーになった場合、呼び出し元はエラーを確認し、再試行するか、ユーザーへエラーを返すかなどを判断します。',
                },
                {
                    text: '同期呼び出しでは、Lambda が常に同じイベントを無限に自動再試行する',
                    isCorrect: false,
                    explanation:
                        '同期呼び出しで関数コードがエラーになった場合、Lambda が常に無限リトライするわけではありません。呼び出し元側の扱いが重要です。',
                },
                {
                    text: '同期呼び出しでは、エラー内容を呼び出し元が一切確認できない',
                    isCorrect: false,
                    explanation:
                        '同期呼び出しでは、呼び出し元が結果やエラーを確認できます。',
                },
                {
                    text: '同期呼び出しでは、必ず SQS キューにイベントが保存される',
                    isCorrect: false,
                    explanation:
                        '同期呼び出しで必ず SQS に保存されるわけではありません。SQS を使うかどうかは構成次第です。',
                },
            ],
            explanation:
                'API Gateway からの呼び出しなどでは、Lambda のエラーをどのような HTTP レスポンスとして扱うかも考えます。',
        },
    {
            question:
                '非同期呼び出しで Lambda 関数がエラーを返した場合の基本的な説明として最も適切なものはどれですか?',
            options: [
                {
                    text: 'Lambda がイベントをキューで管理し、設定に従って再試行することがある',
                    isCorrect: true,
                    explanation:
                        '非同期呼び出しでは、呼び出し元は完了を待たず、Lambda が非同期イベントを内部的に管理します。関数エラー時には、設定に従ってリトライされることがあります。',
                },
                {
                    text: '非同期呼び出しでは、Lambda 関数は実行されない',
                    isCorrect: false,
                    explanation:
                        '非同期呼び出しでも Lambda 関数は実行されます。違いは、呼び出し元が完了を待たないことです。',
                },
                {
                    text: '非同期呼び出しでは、エラーが出ると必ず EC2 インスタンスが起動する',
                    isCorrect: false,
                    explanation:
                        '非同期呼び出しのエラーで EC2 インスタンスが必ず起動するわけではありません。',
                },
                {
                    text: '非同期呼び出しでは、リトライや失敗時の扱いを一切設定できない',
                    isCorrect: false,
                    explanation:
                        '非同期呼び出しでは、最大リトライ回数やイベントの最大保持時間、失敗時の送信先などを設定できる場合があります。',
                },
            ],
            explanation:
                '非同期呼び出しでは、呼び出し元が結果を待たないため、失敗したイベントをどう扱うかを設計しておくことが重要です。',
        },
    {
            question:
                '非同期呼び出しで同じイベントが複数回処理される可能性について、最も適切な説明はどれですか?',
            options: [
                {
                    text: 'エラー時のリトライなどにより、同じイベントが複数回処理される可能性がある',
                    isCorrect: true,
                    explanation:
                        '非同期呼び出しでは、関数エラーや一時的な問題によりリトライされることがあります。そのため、同じイベントが複数回処理される可能性を考慮します。',
                },
                {
                    text: 'Lambda はクラウドサービスなので、同じイベントは絶対に複数回処理されない',
                    isCorrect: false,
                    explanation:
                        'Lambda では、呼び出し方式や連携サービスによって同じイベントが複数回処理される可能性があります。',
                },
                {
                    text: '同じイベントが複数回処理されるのは、関数名が短い場合だけである',
                    isCorrect: false,
                    explanation:
                        '関数名の長さは、同じイベントが再処理される主な理由ではありません。',
                },
                {
                    text: '同じイベントが複数回処理される場合、必ず IAM ロールが削除される',
                    isCorrect: false,
                    explanation:
                        'イベントの再処理と IAM ロール削除は直接関係ありません。',
                },
            ],
            explanation:
                'リトライがある構成では、処理が複数回走っても安全になるように設計します。',
        },
    {
            question:
                '冪等性の初歩的な説明として最も適切なものはどれですか?',
            options: [
                {
                    text: '同じ処理を複数回実行しても、データ重複や不整合が起きにくい性質',
                    isCorrect: true,
                    explanation:
                        '冪等性は、同じ入力で何度処理しても、不自然な重複や不整合が起きにくい性質です。Lambda のリトライや SQS 連携では重要です。',
                },
                {
                    text: 'Lambda 関数を必ず 1 回だけ実行する AWS の保証',
                    isCorrect: false,
                    explanation:
                        '冪等性は AWS が必ず 1 回だけ実行してくれる保証ではありません。複数回実行されても安全にするための設計上の性質です。',
                },
                {
                    text: 'CloudWatch Logs を削除する機能',
                    isCorrect: false,
                    explanation:
                        '冪等性はログ削除機能ではありません。再実行に強い処理設計の考え方です。',
                },
                {
                    text: 'Lambda 関数のメモリを自動で増やす機能',
                    isCorrect: false,
                    explanation:
                        '冪等性はメモリ自動増加の機能ではありません。',
                },
            ],
            explanation:
                '例えば「同じ注文 ID の処理は一度だけ保存する」「同じファイル名なら上書きする」など、重複実行に備えた工夫が冪等性につながります。',
        },
    {
            question:
                'Lambda の処理を冪等に近づける工夫として最も適切なものはどれですか?',
            options: [
                {
                    text: 'イベント ID や注文 ID などの一意なキーを使い、同じ処理を二重登録しないようにする',
                    isCorrect: true,
                    explanation:
                        '一意なキー（一つのイベントや注文を識別できる重複しない値）を使って処理済みかどうかを確認すると、同じイベントが再処理されても二重登録を避けやすくなります。',
                },
                {
                    text: '毎回ランダムな ID で必ず新規データを追加する',
                    isCorrect: false,
                    explanation:
                        '毎回ランダム ID で新規追加すると、同じイベントが再処理されたときに重複データが増える可能性があります。',
                },
                {
                    text: 'エラーが出たらログを見ずに全データを削除する',
                    isCorrect: false,
                    explanation:
                        '全データ削除は危険です。ログや入力データを確認し、重複や失敗に強い設計を考えます。',
                },
                {
                    text: '環境変数をすべて空にする',
                    isCorrect: false,
                    explanation:
                        '環境変数を空にしても冪等性は得られません。処理の設計が重要です。',
                },
            ],
            explanation:
                '冪等性は、処理結果の保存方法や重複チェックの設計で実現します。',
        },
    {
            question:
                'SQS と Lambda の連携で、関数処理が失敗した場合の基本的なイメージとして最も適切なものはどれですか?',
            options: [
                {
                    text: 'メッセージがすぐ完全消滅するとは限らず、可視性タイムアウト後に再び処理対象になることがある',
                    isCorrect: true,
                    explanation:
                        'SQS では、Lambda がメッセージ処理に失敗した場合、メッセージがキューに戻り、可視性タイムアウト後に再び処理対象になることがあります。可視性タイムアウトは、処理中扱いのメッセージを一時的に他の処理から見えなくする時間です。',
                },
                {
                    text: 'SQS 連携では、失敗したメッセージは必ず即座に永久削除される',
                    isCorrect: false,
                    explanation:
                        '失敗したメッセージが必ず即座に永久削除されるわけではありません。再処理される可能性があります。',
                },
                {
                    text: 'SQS 連携では、Lambda 関数は一切リトライされない',
                    isCorrect: false,
                    explanation:
                        'SQS と Lambda の連携では、失敗時に再処理される可能性があります。重複処理に備えます。',
                },
                {
                    text: 'SQS 連携では、同じメッセージが複数回処理される可能性は絶対にない',
                    isCorrect: false,
                    explanation:
                        'SQS 連携では、同じメッセージが複数回処理される可能性を考慮します。',
                },
            ],
            explanation:
                'SQS 連携では「メッセージが再び見えるようになり、再処理されることがある」と考えると理解しやすいです。',
        },
    {
            question:
                'SQS メッセージ処理で重複実行に備える設計として最も適切なものはどれですか?',
            options: [
                {
                    text: 'メッセージ ID や業務 ID を使って、すでに処理済みか確認してから更新する',
                    isCorrect: true,
                    explanation:
                        'SQS では同じメッセージが複数回処理される可能性があります。メッセージ ID や注文 ID などを使って処理済みか確認すると、重複登録や二重請求のような問題を避けやすくなります。',
                },
                {
                    text: '重複実行は絶対に起きないので何も考えない',
                    isCorrect: false,
                    explanation:
                        'SQS 連携では重複実行の可能性を考慮する必要があります。',
                },
                {
                    text: '失敗したら必ず全ユーザーのデータを削除する',
                    isCorrect: false,
                    explanation:
                        '全ユーザーのデータ削除は危険です。重複実行に備えた安全な処理を設計します。',
                },
                {
                    text: 'Lambda 関数の名前を retry に変える',
                    isCorrect: false,
                    explanation:
                        '関数名を変えても重複実行への備えにはなりません。処理済みチェックなどの設計が必要です。',
                },
            ],
            explanation:
                'キュー処理では、成功・失敗・再試行を前提に、同じメッセージが再度来ても安全な処理にします。',
        },
    {
            question:
                'SQS と Lambda の連携で、何度も失敗するメッセージへの基本的な考え方として最も適切なものはどれですか?',
            options: [
                {
                    text: '再試行し続けるだけでなく、失敗メッセージを別のキューに逃がして調査する設計を検討する',
                    isCorrect: true,
                    explanation:
                        '何度も失敗するメッセージは、通常処理を止め続ける原因になります。デッドレターキュー（処理に失敗したメッセージを退避するキュー）などを使い、後で原因を調査できるようにする設計があります。',
                },
                {
                    text: '失敗メッセージは必ず成功扱いにして無視する',
                    isCorrect: false,
                    explanation:
                        '失敗を無条件に成功扱いにすると、データ欠落や処理漏れに気づけなくなります。',
                },
                {
                    text: '何度失敗しても、ログを出さない方が調査しやすい',
                    isCorrect: false,
                    explanation:
                        '失敗原因を調べるにはログや失敗メッセージの内容が重要です。',
                },
                {
                    text: 'SQS を使うと失敗は絶対に発生しない',
                    isCorrect: false,
                    explanation:
                        'SQS を使っても、Lambda のコードエラーや外部サービス障害などで処理が失敗することはあります。',
                },
            ],
            explanation:
                '失敗時の退避先を用意しておくと、通常処理を守りながら後で原因を調査しやすくなります。',
        },
    {
            question:
                '同じイベントが複数回処理される可能性がある場合、避けるべき実装はどれですか?',
            options: [
                {
                    text: '重複チェックなしで、呼び出されるたびに同じ注文を新規作成する',
                    isCorrect: true,
                    explanation:
                        '重複チェックなしで毎回新規作成すると、リトライや再処理で同じ注文が複数作られる可能性があります。注文 ID などを使って処理済みか確認する設計が必要です。',
                },
                {
                    text: 'イベント ID を記録して、同じイベントなら二重処理を避ける',
                    isCorrect: false,
                    explanation:
                        'イベント ID などを使って重複処理を避けるのは、冪等性を高めるための自然な設計です。',
                },
                {
                    text: 'DynamoDB の条件付き書き込みなどで二重登録を防ぐ',
                    isCorrect: false,
                    explanation:
                        '条件付き書き込みを使うと、すでに存在するデータを誤って重複作成しにくくできます。',
                },
                {
                    text: '同じ入力で何度実行しても同じ結果になるように設計する',
                    isCorrect: false,
                    explanation:
                        '同じ入力で何度実行しても安全な設計は、冪等性の考え方に合っています。',
                },
            ],
            explanation:
                'リトライがある構成では、処理が成功した後に同じイベントが再度来る可能性も考えます。',
        },
    {
            question:
                'Lambda の失敗時に「どこまで処理されたか」を考える理由として最も適切なものはどれですか?',
            options: [
                {
                    text: '一部の処理だけ成功してからエラーになることがあり、再試行時に二重処理が起きる可能性があるため',
                    isCorrect: true,
                    explanation:
                        'Lambda 関数は、途中で DynamoDB に書き込んだ後、別の処理で失敗することがあります。その後リトライされると、すでに成功した処理がもう一度実行される可能性があります。',
                },
                {
                    text: 'Lambda は失敗時に必ずすべての処理を自動で巻き戻すため',
                    isCorrect: false,
                    explanation:
                        'Lambda が外部サービスへの書き込みを必ず自動で巻き戻してくれるわけではありません。どこまで処理されたかを考える必要があります。',
                },
                {
                    text: '失敗時にはログが絶対に残らないため',
                    isCorrect: false,
                    explanation:
                        '失敗時にも CloudWatch Logs にログが残ることがあります。ログを確認してどこまで進んだかを調べます。',
                },
                {
                    text: '失敗時には IAM ロールが必ず削除されるため',
                    isCorrect: false,
                    explanation:
                        'Lambda の失敗で IAM ロールが必ず削除されるわけではありません。',
                },
            ],
            explanation:
                '失敗時の再試行を考えるときは、処理が完全に失敗したのか、一部だけ成功したのかを意識します。',
        },
    {
            question:
                'Lambda のリトライを前提にしたログ出力として最も適切なものはどれですか?',
            options: [
                {
                    text: 'イベント ID や処理対象 ID、開始・成功・失敗のログを出し、同じイベントの再処理を追えるようにする',
                    isCorrect: true,
                    explanation:
                        'リトライがある場合、同じイベントが何度処理されたかを追えるログが役立ちます。イベント ID、注文 ID、ファイル名、開始・成功・失敗などを記録すると調査しやすくなります。',
                },
                {
                    text: 'リトライがある場合はログを一切出さない',
                    isCorrect: false,
                    explanation:
                        'ログがないと、同じイベントが何回処理されたか、どこで失敗したかを追いにくくなります。',
                },
                {
                    text: 'パスワードや API キーを毎回ログに出す',
                    isCorrect: false,
                    explanation:
                        'パスワードや API キーなどの機密情報をログに出してはいけません。',
                },
                {
                    text: 'ログには必ず全ユーザーの個人情報を出す',
                    isCorrect: false,
                    explanation:
                        '個人情報や機密情報を不用意にログへ出すのは避けます。調査に必要な範囲に絞ります。',
                },
            ],
            explanation:
                'リトライや重複処理を調査するには、同じイベントを識別できる情報を安全な範囲でログに残すことが有効です。',
        },
    {
            question:
                'Lambda の使いどころとして最も適切なものはどれですか?',
            options: [
                {
                    text: 'S3 にファイルがアップロードされたときだけ、短い変換処理を実行する',
                    isCorrect: true,
                    explanation:
                        'Lambda は、イベントをきっかけに短時間の処理を実行する用途に向いています。S3 アップロード後の画像変換やメタデータ抽出などは典型例です。',
                },
                {
                    text: 'OS にログインして GUI アプリを常時表示し続ける',
                    isCorrect: false,
                    explanation:
                        'Lambda は OS にログインして GUI（画面操作を前提としたアプリケーション）を常時動かす用途には向きません。常駐アプリには EC2 やコンテナ系サービス（アプリケーションをコンテナ単位で実行・管理するサービス）などを検討します。',
                },
                {
                    text: '数日間かかる処理を 1 回の関数呼び出しで実行する',
                    isCorrect: false,
                    explanation:
                        'Lambda には 1 回の呼び出しで実行できる最大時間があります。数日間かかる処理には別の構成を検討します。',
                },
                {
                    text: '大量のユーザー状態をメモリに保持し続ける常駐サーバー',
                    isCorrect: false,
                    explanation:
                        'Lambda は呼び出しごとに短い処理を行う考え方に向いています。ユーザー状態をメモリに保持し続ける常駐サーバー用途には向きにくいです。',
                },
            ],
            explanation:
                'Lambda は「必要なときだけ起動して、短い処理を終える」用途と相性が良いサービスです。',
        },
    {
            question:
                'Lambda が向いている自動化処理として最も適切なものはどれですか?',
            options: [
                {
                    text: '毎日決まった時刻に不要な一時データを削除する',
                    isCorrect: true,
                    explanation:
                        'EventBridge や EventBridge Scheduler（指定時刻や定期スケジュールで処理を実行できる機能）と Lambda を組み合わせると、定期的な自動化処理を実行できます。',
                },
                {
                    text: '管理者が SSH で入って手作業する前提の長時間メンテナンス',
                    isCorrect: false,
                    explanation:
                        'Lambda は SSH で入って手作業するサーバーではありません。長時間の手作業メンテナンスには向きません。',
                },
                {
                    text: '24 時間同じプロセスで画面を表示し続ける',
                    isCorrect: false,
                    explanation:
                        'Lambda は常時画面表示を続ける用途には向きません。イベントごとに処理する設計が基本です。',
                },
                {
                    text: '関数内で無限ループを動かし続けて定期実行を実現する',
                    isCorrect: false,
                    explanation:
                        'Lambda にはタイムアウト（関数の最大実行時間）があります。定期実行は無限ループではなく、EventBridge などのスケジュール機能を使います。',
                },
            ],
            explanation:
                'Lambda は、定期実行、自動通知、ファイル処理など、人が常に操作しなくてもよい小さな自動化に向いています。',
        },
    {
            question:
                'API のバックエンドとして Lambda を使うケースとして最も適切なものはどれですか?',
            options: [
                {
                    text: 'API Gateway で HTTP リクエストを受け、Lambda で認証後の簡単なデータ取得処理を行う',
                    isCorrect: true,
                    explanation:
                        'API Gateway（HTTP API を公開・管理できるサービス）を入口にし、Lambda をバックエンド処理として使う構成はよくあります。小規模 API やアクセス量が変動する API と相性があります。',
                },
                {
                    text: 'Lambda 関数を SSH サーバーとして公開する',
                    isCorrect: false,
                    explanation:
                        'Lambda は SSH サーバーとして公開する用途ではありません。HTTP API の入口には API Gateway などを使います。',
                },
                {
                    text: 'Lambda の環境変数に HTML を全部保存して Web サーバーとして常時配信する',
                    isCorrect: false,
                    explanation:
                        '環境変数は設定値を渡すための仕組みであり、Web サイト全体を常時配信する保存場所ではありません。',
                },
                {
                    text: 'WebSocket の常時接続を 1 つの Lambda 実行で何日も維持する',
                    isCorrect: false,
                    explanation:
                        'Lambda は 1 回の実行時間に上限があり、1 つの実行で何日も常時接続を保持する用途には向きません。',
                },
            ],
            explanation:
                'API バックエンドでは、リクエストを受けたときだけ Lambda が処理し、結果を HTTP レスポンスとして返す構成がよく使われます。',
        },
    {
            question:
                'Lambda で扱いやすい軽量バッチ処理として最も適切なものはどれですか?',
            options: [
                {
                    text: 'S3 に置かれた小さな CSV ファイルを読み、集計結果を DynamoDB に保存する',
                    isCorrect: true,
                    explanation:
                        '短時間で終わる軽量なバッチ処理は Lambda に向いています。CSV（カンマ区切りの表形式データファイル）などを S3 から読み、DynamoDB や S3 に結果を保存する構成が考えられます。',
                },
                {
                    text: '数十時間かかる巨大なデータ処理を 1 回の Lambda 実行で行う',
                    isCorrect: false,
                    explanation:
                        'Lambda は短時間の処理向けで、1 回の実行時間にも上限があります。長時間の巨大データ処理には別のサービスや処理分割を検討します。',
                },
                {
                    text: 'OS にログインして対話的にコマンドを実行し続ける',
                    isCorrect: false,
                    explanation:
                        'Lambda は OS にログインして対話操作するサービスではありません。',
                },
                {
                    text: '関数のグローバル変数だけに集計結果を永続保存する',
                    isCorrect: false,
                    explanation:
                        'グローバル変数は永続保存先ではありません。永続的な結果は DynamoDB、S3、RDS などに保存します。',
                },
            ],
            explanation:
                'Lambda のバッチ利用は、短時間で完了し、入力と出力が明確な処理に向いています。',
        },
    {
            question:
                'Lambda に向きにくいケースとして最も適切なものはどれですか?',
            options: [
                {
                    text: '長時間動き続ける常駐プロセスを自分で管理したいケース',
                    isCorrect: true,
                    explanation:
                        'Lambda はイベントごとに短時間の処理を実行する用途に向いています。長時間動き続ける常駐プロセスを自分で管理したい場合は、EC2、ECS や Fargate（コンテナを実行・管理する AWS サービス）なども検討します。',
                },
                {
                    text: 'S3 にファイルが置かれたときだけ処理したいケース',
                    isCorrect: false,
                    explanation:
                        'S3 イベントをきっかけに処理する用途は Lambda に向いています。',
                },
                {
                    text: 'EventBridge で 1 日 1 回だけ処理したいケース',
                    isCorrect: false,
                    explanation:
                        'EventBridge と Lambda を組み合わせた定期実行はよく使われます。',
                },
                {
                    text: 'API Gateway から短いバックエンド処理を呼びたいケース',
                    isCorrect: false,
                    explanation:
                        'API Gateway と Lambda を組み合わせた短い API バックエンド処理は Lambda に向いています。',
                },
            ],
            explanation:
                'Lambda は便利ですが、常時起動や長時間処理を中心にしたい場合は、別のコンピューティングサービスも検討します。',
        },
    {
            question:
                'Lambda の最大実行時間に関する説明として最も適切なものはどれですか?',
            options: [
                {
                    text: '1 回の関数呼び出しには最大実行時間があり、長時間処理には注意が必要である',
                    isCorrect: true,
                    explanation:
                        'Lambda には 1 回の関数呼び出しで実行できる最大時間があります。現在の一般的な上限は 15 分です。長時間処理は分割や別サービスの利用を検討します。',
                },
                {
                    text: 'Lambda は 1 回の呼び出しで何日でも実行できる',
                    isCorrect: false,
                    explanation:
                        'Lambda は 1 回の呼び出しで何日でも実行できるサービスではありません。タイムアウト上限があります。',
                },
                {
                    text: '最大実行時間は関数名を長くすると無制限になる',
                    isCorrect: false,
                    explanation:
                        '関数名の長さで最大実行時間が無制限になることはありません。',
                },
                {
                    text: '最大実行時間は CloudWatch Logs を削除すると伸びる',
                    isCorrect: false,
                    explanation:
                        'CloudWatch Logs の削除で Lambda の最大実行時間が伸びるわけではありません。',
                },
            ],
            explanation:
                'Lambda に向くかどうかを判断するときは、処理が最大実行時間内に安定して終わるかを確認します。',
        },
    {
            question:
                'Lambda の料金の基本として最も適切なものはどれですか?',
            options: [
                {
                    text: '主にリクエスト数と実行時間などに基づいて課金される',
                    isCorrect: true,
                    explanation:
                        'Lambda は、主に関数のリクエスト数と実行時間などに基づいて課金されます。実行時間は、設定したメモリ量とも関係します。',
                },
                {
                    text: '関数を作成した瞬間から、実行しなくても必ず EC2 と同じ固定月額がかかる',
                    isCorrect: false,
                    explanation:
                        'Lambda は使った分に応じた課金が基本です。関数を作っただけで EC2 と同じ固定月額が必ずかかるわけではありません。',
                },
                {
                    text: '関数名が長いほど必ず料金が高くなる',
                    isCorrect: false,
                    explanation:
                        '関数名の長さで料金が決まるわけではありません。',
                },
                {
                    text: 'CloudWatch Logs を使うと Lambda の実行料金が必ず無料になる',
                    isCorrect: false,
                    explanation:
                        'CloudWatch Logs を使っても Lambda の実行料金が必ず無料になるわけではありません。ログ保存にも別途コストがかかる場合があります。',
                },
            ],
            explanation:
                'Lambda のコストを見るときは、呼び出し回数、実行時間、メモリ設定、ログ量などを確認します。',
        },
    {
            question:
                'Lambda のコストを考えるときの説明として最も適切なものはどれですか?',
            options: [
                {
                    text: 'メモリを増やすと処理が速くなる場合もあるが、設定メモリと実行時間が料金に影響するため測定して判断する',
                    isCorrect: true,
                    explanation:
                        'Lambda ではメモリを増やすと CPU などの処理能力も増えるため、処理時間が短くなる場合があります。一方で料金にも影響するため、実行時間やコストを測定して判断します。',
                },
                {
                    text: '常に最大メモリにすれば、必ず最安になる',
                    isCorrect: false,
                    explanation:
                        '最大メモリが必ず最安とは限りません。処理時間の短縮と料金のバランスを測定して判断します。',
                },
                {
                    text: '常に最小メモリにすれば、必ず最速になる',
                    isCorrect: false,
                    explanation:
                        '最小メモリでは処理能力が足りず、実行時間が長くなる場合があります。',
                },
                {
                    text: 'ログを大量に出してもコストや調査性には一切影響しない',
                    isCorrect: false,
                    explanation:
                        'ログ量はコストや調査性に影響する場合があります。必要な情報を適切に出すことが重要です。',
                },
            ],
            explanation:
                'Lambda は「メモリを増やすと高い、少なくすると安い」と単純には言い切れません。処理時間も含めて見る必要があります。',
        },
    {
            question:
                'Lambda を使う判断として最も適切なものはどれですか?',
            options: [
                {
                    text: 'イベント発生時だけ短く処理でき、状態は外部サービスに保存できるなら候補になる',
                    isCorrect: true,
                    explanation:
                        'Lambda は短時間のイベント処理に向いています。状態をメモリに持ち続けるのではなく、DynamoDB、S3、RDS など外部サービスに保存できる設計なら候補になります。',
                },
                {
                    text: '状態をすべてメモリに持ち続けたい場合に常に最適である',
                    isCorrect: false,
                    explanation:
                        'Lambda は状態をメモリに持ち続ける常駐サーバー用途には向きにくいです。状態は外部ストレージに保存する設計を考えます。',
                },
                {
                    text: '処理時間が何日かかっても、Lambda だけで必ず実現する',
                    isCorrect: false,
                    explanation:
                        'Lambda には最大実行時間があります。長時間処理には別サービスや処理分割を検討します。',
                },
                {
                    text: 'OS やミドルウェアを細かく手動管理したい場合に最優先で選ぶ',
                    isCorrect: false,
                    explanation:
                        'OS やミドルウェアを細かく手動管理したい場合は、EC2 やコンテナ系サービスの方が向くことがあります。',
                },
            ],
            explanation:
                'Lambda の判断では、イベント駆動か、短時間で終わるか、状態を外部化できるか、常駐が必要かを確認します。',
        },
    {
            question:
                '短時間のイベント処理に Lambda が向いている理由として最も適切なものはどれですか?',
            options: [
                {
                    text: 'イベントが発生したときだけ関数を実行し、処理が終われば実行を終えられるため',
                    isCorrect: true,
                    explanation:
                        'Lambda はイベント駆動で、必要なときに関数を実行する仕組みです。短い処理を都度実行する用途では、サーバーを常時管理しなくてよい点が利点になります。',
                },
                {
                    text: '必ず 1 台のサーバーを 24 時間起動し続けるため',
                    isCorrect: false,
                    explanation:
                        'Lambda は利用者が 1 台のサーバーを常時起動管理するサービスではありません。',
                },
                {
                    text: 'OS にログインして手動でプロセスを起動するため',
                    isCorrect: false,
                    explanation:
                        'Lambda は OS にログインして手動でプロセスを起動する使い方ではありません。',
                },
                {
                    text: '実行時間の上限がないため',
                    isCorrect: false,
                    explanation:
                        'Lambda には最大実行時間があります。短時間処理に向いている点を理解することが重要です。',
                },
            ],
            explanation:
                'Lambda は、ファイルアップロード、API 呼び出し、メッセージ到着、スケジュール時刻などをきっかけに短い処理を実行する用途に向いています。',
        },
    {
            question:
                '常駐処理が必要な場合の判断として最も適切なものはどれですか?',
            options: [
                {
                    text: 'Lambda だけにこだわらず、EC2、ECS、Fargate など常駐処理を扱いやすいサービスも検討する',
                    isCorrect: true,
                    explanation:
                        '常時起動、長時間接続、OS やプロセスの細かい管理が必要な場合は、Lambda より EC2、ECS や Fargate（コンテナを実行・管理する AWS サービス）などが向くことがあります。',
                },
                {
                    text: 'Lambda 関数内で無限ループを書けば、常駐処理として常に最適になる',
                    isCorrect: false,
                    explanation:
                        'Lambda にはタイムアウトがあり、無限ループで常駐処理を実現する設計には向きません。',
                },
                {
                    text: '常駐処理が必要でも、必ず S3 イベントだけで実現する',
                    isCorrect: false,
                    explanation:
                        'S3 イベントはファイル作成などをきっかけに処理する仕組みで、常駐処理の代替ではありません。',
                },
                {
                    text: '常駐処理では IAM 権限を一切考えなくてよい',
                    isCorrect: false,
                    explanation:
                        'どのサービスを使う場合でも、AWS リソースへアクセスするなら権限設計は重要です。',
                },
            ],
            explanation:
                'Lambda が向かないケースを判断できることも重要です。無理に Lambda へ寄せず、要件に合うサービスを選びます。',
        },
    {
            question:
                'Lambda の利用判断で「向かない可能性が高い」と考えるべき要件はどれですか?',
            options: [
                {
                    text: '1 回の処理が最大実行時間を大きく超える見込みで、途中で分割しにくい',
                    isCorrect: true,
                    explanation:
                        'Lambda には 1 回の実行時間の上限があります。処理が上限を大きく超え、分割もしにくい場合は、別のコンピューティングサービスを検討します。',
                },
                {
                    text: 'S3 にファイルが置かれたときだけ軽い処理をしたい',
                    isCorrect: false,
                    explanation:
                        'S3 イベントで軽い処理を行う用途は Lambda に向いています。',
                },
                {
                    text: 'API Gateway から短い処理を呼び出したい',
                    isCorrect: false,
                    explanation:
                        '短い API バックエンド処理は Lambda の代表的な用途です。',
                },
                {
                    text: 'EventBridge で 1 日 1 回だけ処理を起動したい',
                    isCorrect: false,
                    explanation:
                        'EventBridge と Lambda の定期実行はよく使われる構成です。',
                },
            ],
            explanation:
                'Lambda に向くかどうかは、処理時間、状態管理、常駐性、イベント駆動との相性で判断します。',
        }
]
