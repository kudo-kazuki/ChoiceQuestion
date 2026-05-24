import type { Question } from '@/types/test_questions'

export const testQuestions: Question[] = [
    {
            question:
                'SQS キューのメッセージを Lambda で処理します。この連携で使われるイベントソースマッピングの説明として最も適切なものはどれですか?',
            options: [
                {
                    text: 'Lambda が SQS からメッセージを読み取り、取得したメッセージをイベントとして関数に渡す仕組み',
                    isCorrect: true,
                    explanation:
                        'SQS 連携では、イベントソースマッピングが SQS からメッセージを読み取り、Lambda 関数を起動します。S3 イベント通知のようにイベントを直接送るというより、Lambda 側が SQS をポーリング（定期的に確認して取得すること）して取得します。',
                },
                {
                    text: 'SQS が Lambda の実行ロールを使って DynamoDB に直接書き込む仕組み',
                    isCorrect: false,
                    explanation:
                        'イベントソースマッピングは、SQS メッセージを Lambda に渡すための仕組みです。SQS が Lambda の実行ロールを使って DynamoDB に直接書き込むものではありません。',
                },
                {
                    text: 'Lambda 関数のコードを SQS キュー内に保存する仕組み',
                    isCorrect: false,
                    explanation:
                        'SQS はメッセージキューであり、Lambda のコード保存先ではありません。',
                },
                {
                    text: 'Lambda の非同期呼び出し Destination と完全に同じ仕組み',
                    isCorrect: false,
                    explanation:
                        'Destination は非同期呼び出し結果の送信先を設定する機能です。SQS から Lambda へ読み取るイベントソースマッピングとは役割が異なります。',
                },
            ],
            explanation:
                'SQS、Kinesis Data Streams（大量データをリアルタイムに順序付きで処理できるストリームサービス）、DynamoDB Streams と Lambda の連携では、イベントソースマッピングが重要です。どのサービスが起点で、Lambda がどう読み取るかを理解する必要があります。',
        },
    {
            question:
                'SQS と Lambda を連携しています。処理に最大2分かかることがあるのに、SQS の可視性タイムアウトが30秒に設定されています。起きやすい問題はどれですか?',
            options: [
                {
                    text: '処理中のメッセージが再び見えるようになり、同じメッセージが重複処理される可能性がある',
                    isCorrect: true,
                    explanation:
                        '可視性タイムアウトは、処理中のメッセージを一時的に他の処理から見えなくする時間です。処理時間より短すぎると、処理完了前に再配信される可能性があります。',
                },
                {
                    text: '可視性タイムアウトが短いほど、同じメッセージは必ず1回だけ処理される',
                    isCorrect: false,
                    explanation:
                        '可視性タイムアウトが短すぎると、むしろ重複処理の可能性が高まります。',
                },
                {
                    text: 'Lambda のメモリ使用量が自動的に0になる',
                    isCorrect: false,
                    explanation:
                        '可視性タイムアウトは SQS メッセージの再配信に関する設定であり、Lambda のメモリ使用量を直接変えるものではありません。',
                },
                {
                    text: 'SQS メッセージが DynamoDB Streams に自動変換される',
                    isCorrect: false,
                    explanation:
                        '可視性タイムアウトはメッセージの見え方を制御する設定です。別サービスのストリームへ自動変換するものではありません。',
                },
            ],
            explanation:
                'SQS 連携では、Lambda のタイムアウト、実際の処理時間、SQS の可視性タイムアウトを合わせて設計します。重複処理を完全には避けられないため、冪等性も必要です。',
        },
    {
            question:
                'SQS イベントソースマッピングでバッチサイズを大きくしたところ、1回の Lambda 実行で多くのメッセージを処理できるようになりました。一方で注意すべき点として最も適切なものはどれですか?',
            options: [
                {
                    text: '1件の失敗がバッチ全体の再処理につながる可能性があるため、部分バッチ失敗の扱いや冪等性を設計する',
                    isCorrect: true,
                    explanation:
                        'バッチで複数メッセージを処理する場合、一部だけ失敗した時の扱いが重要です。部分バッチ失敗を返す仕組みや、再処理されても安全な設計を検討します。',
                },
                {
                    text: 'バッチサイズを大きくすれば、失敗時も成功したメッセージは必ず自動的に完全保存される',
                    isCorrect: false,
                    explanation:
                        '設定や実装によっては、失敗時にバッチ内のメッセージが再処理されることがあります。成功済みメッセージの重複処理を考慮します。',
                },
                {
                    text: 'バッチサイズは Lambda の IAM 権限を自動的に増やす設定である',
                    isCorrect: false,
                    explanation:
                        'バッチサイズは1回の呼び出しで渡されるレコード数に関する設定です。IAM 権限を増やすものではありません。',
                },
                {
                    text: 'バッチサイズを大きくすると、Lambda の実行時間上限がなくなる',
                    isCorrect: false,
                    explanation:
                        'バッチサイズを変えても Lambda の最大実行時間上限はなくなりません。1回の実行で処理しきれる量に調整する必要があります。',
                },
            ],
            explanation:
                'バッチサイズはスループット向上に役立ちますが、失敗時の影響範囲も大きくなります。性能と再処理リスクのバランスを見ます。',
        },
    {
            question:
                'SQS から Lambda へメッセージを処理しています。特定のメッセージだけが常に失敗し、同じメッセージが何度も再処理されています。このようなメッセージへの対応として最も適切なものはどれですか?',
            options: [
                {
                    text: 'Poison pill メッセージ（繰り返し失敗して全体処理を妨げる問題メッセージ）として扱い、最大受信回数や DLQ を設定して通常処理を詰まらせないようにする',
                    isCorrect: true,
                    explanation:
                        'Poison pill メッセージは、処理すると繰り返し失敗して全体の処理を妨げるメッセージを指します。SQS の redrive policy（一定回数失敗したメッセージを DLQ へ移動する設定）などを使って退避します。',
                },
                {
                    text: '失敗するメッセージは必ず成功するまで無限に即時再試行する',
                    isCorrect: false,
                    explanation:
                        '無限再試行は通常処理を詰まらせ、コスト増や処理遅延につながります。DLQ（Dead Letter Queue：繰り返し失敗したメッセージを退避するキュー）へ退避して調査できるようにします。',
                },
                {
                    text: 'Poison pill メッセージは、Lambda のメモリを増やせば必ず正常化する',
                    isCorrect: false,
                    explanation:
                        '失敗原因がデータ不正や業務ルール違反の場合、メモリを増やしても解決しません。原因を切り分ける必要があります。',
                },
                {
                    text: 'SQS では失敗メッセージが再処理されることはないため、対策は不要である',
                    isCorrect: false,
                    explanation:
                        'SQS では処理失敗や可視性タイムアウト切れにより、メッセージが再処理される可能性があります。',
                },
            ],
            explanation:
                'Poison pill メッセージ（繰り返し失敗して全体処理を妨げる問題メッセージ）を放置すると、キュー処理全体の遅延やコスト増につながります。DLQ（Dead Letter Queue：繰り返し失敗したメッセージを退避するキュー）、監視、再処理手順まで設計します。',
        },
    {
            question:
                'SQS の Lambda 連携で、バッチ内の10件中1件だけ処理に失敗しました。成功した9件をできるだけ再処理したくありません。検討すべき機能はどれですか?',
            options: [
                {
                    text: '部分バッチ失敗の応答を使い、失敗したメッセージだけを再処理対象にする',
                    isCorrect: true,
                    explanation:
                        '部分バッチ失敗を使うと、バッチ内で失敗したメッセージを明示し、成功したメッセージの不要な再処理を減らせます。ただし、実装と冪等性の設計は必要です。',
                },
                {
                    text: '成功した9件を CloudWatch Logs に出せば、自動的に SQS から削除される',
                    isCorrect: false,
                    explanation:
                        'ログ出力は SQS メッセージ削除の制御にはなりません。イベントソースマッピングの応答形式や処理結果で制御します。',
                },
                {
                    text: 'Lambda のタイムアウトを短くすれば、失敗した1件だけが必ず再処理される',
                    isCorrect: false,
                    explanation:
                        'タイムアウトを短くしても部分バッチ失敗の制御にはなりません。むしろバッチ全体が失敗しやすくなります。',
                },
                {
                    text: 'バッチ処理では一部成功を扱えないため、常に全件を手動削除するしかない',
                    isCorrect: false,
                    explanation:
                        'SQS と Lambda の連携では、部分バッチ失敗を使って失敗した項目を返す設計が可能です。',
                },
            ],
            explanation:
                '部分バッチ失敗は、バッチ処理の再処理範囲を小さくするために重要です。特に大量メッセージ処理では、無駄な再処理を減らせます。',
        },
    {
            question:
                'Kinesis Data Streams（大量データをリアルタイムに順序付きで処理できるストリームサービス）を Lambda で処理しています。ある shard の特定レコードで関数が失敗し続け、後続レコードの処理が進みにくくなっています。最も適切な理解はどれですか?',
            options: [
                {
                    text: 'ストリーム系では順序性のため、失敗レコードが同じ shard（Kinesis ストリーム内のデータ分割単位）の後続処理を妨げることがある',
                    isCorrect: true,
                    explanation:
                        'Kinesis Data Streams では shard（Kinesis ストリーム内のデータ分割単位）内の順序性が重要です。特定レコードが失敗し続けると、その shard の後続レコード処理が遅れる可能性があります。',
                },
                {
                    text: 'Kinesis では失敗したレコードがあっても、同じ shard の後続レコードは常に無制限に先へ進む',
                    isCorrect: false,
                    explanation:
                        'Kinesis Data Streams では shard（Kinesis ストリーム内のデータ分割単位）内の順序性を保つ必要があるため、失敗レコードの扱いが後続処理に影響することがあります。',
                },
                {
                    text: 'Kinesis の shard は SQS の可視性タイムアウトと同じ設定で制御される',
                    isCorrect: false,
                    explanation:
                        'Kinesis の shard（Kinesis ストリーム内のデータ分割単位）と SQS の可視性タイムアウトは別の概念です。SQS の可視性タイムアウトで Kinesis の順序性は制御しません。',
                },
                {
                    text: 'Kinesis 連携では、失敗レコードの再処理や破棄の設計は不要である',
                    isCorrect: false,
                    explanation:
                        'ストリーム処理でも失敗レコードへの対応、再試行回数、失敗時の送信先などを設計する必要があります。',
                },
            ],
            explanation:
                'Kinesis Data Streams や DynamoDB Streams では、SQS よりも順序性や shard（Kinesis ストリーム内のデータ分割単位）単位の進み方を意識する必要があります。Poison pill 的なレコードが後続処理を止めるリスクがあります。',
        },
    {
            question:
                'DynamoDB Streams の変更イベントを Lambda で処理し、別テーブルへ集計結果を書き込んでいます。ストリーム処理で特に意識すべき点はどれですか?',
            options: [
                {
                    text: '同じ変更イベントの再処理や順序性を考慮し、集計更新を冪等に近づける',
                    isCorrect: true,
                    explanation:
                        'DynamoDB Streams はテーブルの変更履歴をイベントとして扱う仕組みです。再処理や順序性を考慮し、同じイベントで集計値が二重加算されないように設計します。',
                },
                {
                    text: 'DynamoDB Streams は常に完全に1回だけ Lambda を起動するため、冪等性は不要である',
                    isCorrect: false,
                    explanation:
                        'ストリーム処理でも再試行や重複処理を考慮します。完全に1回だけ処理される前提は危険です。',
                },
                {
                    text: 'DynamoDB Streams を使うと、Lambda の実行時間上限はなくなる',
                    isCorrect: false,
                    explanation:
                        'ストリーム連携を使っても Lambda の実行時間上限はなくなりません。',
                },
                {
                    text: '集計結果をグローバル変数に保存すれば、すべての変更イベントで正しい合計を維持できる',
                    isCorrect: false,
                    explanation:
                        'グローバル変数は永続的な集計保存先ではありません。集計結果は DynamoDB などの外部ストレージへ保存します。',
                },
            ],
            explanation:
                'ストリーム処理は、変更イベントを使った後続処理に便利ですが、重複・順序・再処理の設計が必要です。集計の二重加算は典型的な事故ポイントです。',
        },
    {
            question:
                'Kinesis Data Streams（大量データをリアルタイムに順序付きで処理できるストリームサービス）連携の Lambda でスループットを上げたいです。ただし、順序性を壊したくありません。検討として最も適切なものはどれですか?',
            options: [
                {
                    text: 'shard 数、Parallelization Factor、バッチサイズなどを見直し、順序性への影響を理解したうえで調整する',
                    isCorrect: true,
                    explanation:
                        'Kinesis Data Streams では shard（Kinesis ストリーム内のデータ分割単位）数が処理並列度に関係します。Parallelization Factor（1つの shard に対する Lambda の並列処理数を増やす設定）やバッチサイズもスループットに影響しますが、順序性要件とのバランスが必要です。',
                },
                {
                    text: 'バッチサイズを最大にすれば、順序性を一切気にせず無限にスループットを上げられる',
                    isCorrect: false,
                    explanation:
                        'バッチサイズには上限があり、処理時間や失敗時の再処理範囲も大きくなります。順序性や遅延も考慮します。',
                },
                {
                    text: '順序性が必要な場合、Kinesis と Lambda は一切使えない',
                    isCorrect: false,
                    explanation:
                        'Kinesis Data Streams は shard（Kinesis ストリーム内のデータ分割単位）内の順序性を扱えるサービスです。ただし、並列度を上げる時は順序性要件を理解した設計が必要です。',
                },
                {
                    text: 'Lambda の環境変数を増やすと、Kinesis の shard 数も自動で増える',
                    isCorrect: false,
                    explanation:
                        '環境変数は Lambda の設定値です。Kinesis Data Streams の shard（Kinesis ストリーム内のデータ分割単位）数を自動的に増やすものではありません。',
                },
            ],
            explanation:
                'ストリーム系のスループット改善では、Lambda だけでなく Kinesis Data Streams 側の shard（Kinesis ストリーム内のデータ分割単位）設計も重要です。どこで並列化するかを理解して調整します。',
        },
    {
            question:
                'SQS キューのメッセージ処理が遅れており、キューにメッセージが溜まっています。Lambda の同時実行数を増やせば処理は速くなりそうですが、下流の RDS が接続数に弱いです。最も適切な方針はどれですか?',
            options: [
                {
                    text: 'SQS の滞留量、Lambda の同時実行数、RDS の接続上限を見ながら、並列度を制御して処理する',
                    isCorrect: true,
                    explanation:
                        'SQS 連携では Lambda の並列処理でスループットを上げられますが、下流の RDS が耐えられない場合があります。Reserved Concurrency やイベントソースマッピングの最大同時実行数などで制御します。',
                },
                {
                    text: 'Lambda は自動スケールするため、RDS の接続数は考慮しなくてよい',
                    isCorrect: false,
                    explanation:
                        'Lambda がスケールできても、下流サービスが同じだけ耐えられるとは限りません。下流保護が必要です。',
                },
                {
                    text: 'SQS にメッセージが溜まったら、必ずすべて手動で削除する',
                    isCorrect: false,
                    explanation:
                        '手動削除はデータ損失につながる可能性があります。遅延原因と処理能力、下流制限を確認して設計します。',
                },
                {
                    text: 'RDS が弱い場合は、Lambda のログ出力を増やせば接続数問題は解決する',
                    isCorrect: false,
                    explanation:
                        'ログ出力は調査には役立ちますが、RDS の接続数上限そのものを解決するものではありません。',
                },
            ],
            explanation:
                'SQS + Lambda はスケールしやすい構成ですが、下流サービス保護が重要です。キュー滞留を減らすことと、下流を壊さないことのバランスを取ります。',
        },
    {
            question:
                'イベントソースマッピングで処理するレコードの失敗が続いています。運用上、再処理だけでなく「どこまで処理できたか」を把握したいです。最も重要な観点はどれですか?',
            options: [
                {
                    text: '成功・失敗したレコード ID、バッチ ID、再試行回数、最終退避先をログやメトリクスで追跡できるようにする',
                    isCorrect: true,
                    explanation:
                        'バッチ処理やストリーム処理では、どのレコードが成功し、どれが失敗したかを追えることが重要です。再処理や DLQ（Dead Letter Queue：繰り返し失敗したイベントを退避するキュー）調査のため、識別子をログに含めます。',
                },
                {
                    text: '失敗時はログを出さず、Lambda が自動的に原因を修正するのを待つ',
                    isCorrect: false,
                    explanation:
                        'Lambda が業務データやコードの問題を自動修正するわけではありません。原因を調査できるログとメトリクスが必要です。',
                },
                {
                    text: 'バッチ処理では個別レコードの識別子を記録してはいけない',
                    isCorrect: false,
                    explanation:
                        '機密情報には注意が必要ですが、レコード ID やイベント ID のような識別子は再処理や調査に役立ちます。',
                },
                {
                    text: '再処理設計では、成功したレコードと失敗したレコードを区別する必要はない',
                    isCorrect: false,
                    explanation:
                        '成功済みと失敗済みを区別できないと、不要な再処理や二重更新が起きやすくなります。',
                },
            ],
            explanation:
                'イベントソースマッピングの運用では、処理単位がバッチになることがあります。バッチ全体だけでなく、レコード単位で追跡できる設計が重要です。',
        },
    {
            question:
                'API Gateway + Lambda で注文処理 API を作っています。リクエスト受付はすぐ終わりますが、在庫確認、決済、通知まで行うと数分かかることがあります。最も適切な設計はどれですか?',
            options: [
                {
                    text: 'API では受付結果をすぐ返し、重い後続処理は SQS や Step Functions へ渡して非同期に進める',
                    isCorrect: true,
                    explanation:
                        '同期 API で長時間待たせると、タイムアウト、クライアント再試行、利用者体験の悪化につながります。受付と後続処理を分け、ジョブ ID や処理状態を返す設計が有効です。',
                },
                {
                    text: 'クライアントを数分間待たせ、Lambda が全処理を終えるまでレスポンスを返さない',
                    isCorrect: false,
                    explanation:
                        '長時間の同期待機は API のタイムアウトや再試行、利用者体験の悪化につながりやすいです。非同期処理への切り分けを検討します。',
                },
                {
                    text: 'Lambda のメモリを最大にすれば、API のタイムアウト制限はなくなる',
                    isCorrect: false,
                    explanation:
                        'メモリ増加で処理が速くなる可能性はありますが、API Gateway やクライアント側のタイムアウト制限そのものはなくなりません。',
                },
                {
                    text: 'API Gateway を使う場合、SQS や Step Functions へ処理を渡すことはできない',
                    isCorrect: false,
                    explanation:
                        'Lambda の実行ロールに適切な権限があれば、SQS や Step Functions へ後続処理を渡せます。',
                },
            ],
            explanation:
                'API 設計では、ユーザーに即時応答すべき部分と、時間がかかる処理を分けます。Lambda は同期 API の処理にも、非同期ワークフローの入口にも使えます。',
        },
    {
            question:
                'API Gateway から Lambda を同期呼び出ししています。Lambda 側の処理は最大10分かかります。タイムアウト制限への対応として最も適切なものはどれですか?',
            options: [
                {
                    text: 'API Gateway やクライアントの待機時間制限を考慮し、長時間処理は非同期化してステータス確認 API などを用意する',
                    isCorrect: true,
                    explanation:
                        'Lambda 自体が動ける時間と、同期 API としてクライアントを待たせられる時間は別です。長時間処理はジョブ化し、受付後に状態確認や通知で結果を扱う設計が一般的です。',
                },
                {
                    text: 'Lambda のタイムアウトを10分にすれば、API Gateway も必ず10分待ってくれる',
                    isCorrect: false,
                    explanation:
                        'Lambda のタイムアウト設定と API Gateway やクライアントのタイムアウトは別です。片方を伸ばしても、他方の制限が残ることがあります。',
                },
                {
                    text: 'タイムアウトが心配な場合、すべてのエラーを 200 OK として返せばよい',
                    isCorrect: false,
                    explanation:
                        'HTTP ステータスを偽装しても、処理時間やタイムアウトの問題は解決しません。失敗時のレスポンス設計も不明確になります。',
                },
                {
                    text: 'クライアントが何度も再試行すれば、長時間同期 API の問題は必ず解決する',
                    isCorrect: false,
                    explanation:
                        '不用意な再試行は二重処理や負荷増加につながります。冪等性や非同期化を設計する必要があります。',
                },
            ],
            explanation:
                'API のタイムアウト対応では、Lambda の最大実行時間だけを見てはいけません。入口サービス、クライアント、下流処理の制限を合わせて判断します。',
        },
    {
            question:
                'API Gateway + Lambda の API で、ユーザーごとにアクセス制御を行いたいです。設計として最も適切なものはどれですか?',
            options: [
                {
                    text: 'Cognito、JWT オーソライザー、Lambda オーソライザー、IAM 認証など、要件に合う認証認可方式を API の入口で設計する',
                    isCorrect: true,
                    explanation:
                        'API Gateway では、Cognito、JWT オーソライザー（JWT トークンを検証して API アクセスを制御する仕組み）、Lambda オーソライザー（Lambda 関数で独自認証ロジックを実行する仕組み）、IAM 認証などを使って入口で認証認可を設計できます。Lambda 内の業務チェックと組み合わせることもあります。',
                },
                {
                    text: 'Lambda 関数名を長くすれば、認証は不要になる',
                    isCorrect: false,
                    explanation:
                        '関数名は認証認可の仕組みではありません。API を保護するには適切な認証認可設定が必要です。',
                },
                {
                    text: 'API Gateway を使う場合、すべての API は必ず匿名公開される',
                    isCorrect: false,
                    explanation:
                        'API Gateway では認証認可の設定が可能です。匿名公開するかどうかは設計次第です。',
                },
                {
                    text: 'Lambda の実行ロールに S3 権限を付ければ、利用者の API アクセス制御も自動で完了する',
                    isCorrect: false,
                    explanation:
                        '実行ロールは Lambda が AWS リソースへアクセスするための権限です。API 利用者の認証認可とは別に考えます。',
                },
            ],
            explanation:
                'API 認証認可では「誰が API を呼べるか」と「Lambda が何へアクセスできるか」を分けて考えます。入口の認証とバックエンド権限は別の責務です。',
        },
    {
            question:
                'API Gateway から呼ばれる Lambda で、例外発生時にスタックトレースをそのままクライアントへ返しています。エラーハンドリングとして最も適切な見直しはどれですか?',
            options: [
                {
                    text: 'クライアントには適切な HTTP ステータスと安全なエラーメッセージを返し、詳細はログに記録する',
                    isCorrect: true,
                    explanation:
                        '内部エラーの詳細やスタックトレースを外部へ返すと、セキュリティリスクになります。クライアント向けのエラー形式と、運用者向けのログを分けます。',
                },
                {
                    text: 'すべてのエラーを 200 OK で返せば、クライアントは必ず正しく処理できる',
                    isCorrect: false,
                    explanation:
                        'HTTP ステータスを適切に使わないと、クライアントや監視が失敗を検知しにくくなります。',
                },
                {
                    text: 'エラー時はログを一切出さない方が安全である',
                    isCorrect: false,
                    explanation:
                        '機密情報を避ける必要はありますが、原因調査に必要なログは重要です。何を出すかを設計します。',
                },
                {
                    text: 'スタックトレースを返すと、API Gateway が自動的に脆弱性を修正する',
                    isCorrect: false,
                    explanation:
                        'API Gateway がアプリケーションの脆弱性を自動修正するわけではありません。返却内容を制御する必要があります。',
                },
            ],
            explanation:
                'API のエラーハンドリングでは、利用者に返す情報と運用者が見る情報を分けます。HTTP ステータス、エラーコード、ログの粒度を設計します。',
        },
    {
            question:
                'API Gateway の Lambda proxy integration（HTTP リクエスト情報をまとめて Lambda へ渡し、Lambda の戻り値を HTTP レスポンスとして返す統合方式）で Lambda からレスポンスを返します。基本的なレスポンス形式として最も適切なものはどれですか?',
            options: [
                {
                    text: 'statusCode、headers、body などを含む形式で返し、body は通常文字列として返す',
                    isCorrect: true,
                    explanation:
                        'Lambda proxy integration では、HTTP レスポンスとして扱える形式で返す必要があります。代表的には statusCode、headers、body を含め、body は通常文字列として返し、JSON を返す場合も文字列化します。',
                },
                {
                    text: 'DynamoDB の PutItem 結果をそのまま返せば、必ず HTTP レスポンスとして解釈される',
                    isCorrect: false,
                    explanation:
                        'AWS SDK の戻り値をそのまま返しても、API Gateway が期待する HTTP レスポンス形式とは限りません。レスポンス形式を整える必要があります。',
                },
                {
                    text: 'body には必ず Lambda の実行ロールを入れて返す',
                    isCorrect: false,
                    explanation:
                        '実行ロールは Lambda の権限設定であり、API レスポンスに返すものではありません。権限情報を外部へ返すのは危険です。',
                },
                {
                    text: 'API Gateway を使う場合、Lambda は戻り値を返せない',
                    isCorrect: false,
                    explanation:
                        '同期呼び出しでは Lambda の戻り値を API Gateway が受け取り、HTTP レスポンスとしてクライアントへ返せます。',
                },
            ],
            explanation:
                'API Gateway + Lambda では、Lambda の戻り値が HTTP レスポンスに変換されます。統一したレスポンス形式を設計すると、クライアント実装や監視が安定します。',
        },
    {
            question:
                '社内の簡単な webhook 受信エンドポイントを作りたいです。高度な API 管理、細かい認証機能、複雑なルーティングは不要で、できるだけ簡単に HTTPS エンドポイントを用意したいです。候補として最も自然なのはどれですか?',
            options: [
                {
                    text: 'Lambda Function URL を検討する',
                    isCorrect: true,
                    explanation:
                        'Lambda Function URL は、Lambda 関数に HTTPS エンドポイントを簡単に付ける機能です。Lambda をシンプルに HTTPS 公開したい用途では有力ですが、高度な API 管理や認証認可が必要な場合は API Gateway なども比較します。',
                },
                {
                    text: '必ず ALB を作成し、ターゲットグループを複数構成する',
                    isCorrect: false,
                    explanation:
                        'ALB（Application Load Balancer：HTTP/HTTPS リクエストを複数ターゲットへ振り分けるロードバランサー）は有力な選択肢ですが、単純な Lambda 公開用途では過剰な場合があります。',
                },
                {
                    text: 'Function URL を使えば、認証や公開範囲の検討は一切不要になる',
                    isCorrect: false,
                    explanation:
                        'Function URL でも公開範囲、認証方式、呼び出し元制限、CORS などの検討は必要です。',
                },
                {
                    text: 'HTTPS エンドポイントを作るには、必ず EC2 で Web サーバーを常時起動する必要がある',
                    isCorrect: false,
                    explanation:
                        'Lambda Function URL や API Gateway を使えば、EC2 の常時起動なしに HTTPS エンドポイントを作れます。',
                },
            ],
            explanation:
                'Lambda Function URL は、Lambda をシンプルに HTTPS 公開したい用途に向く方法です。ただし、本格的な API 管理、認証認可、レート制限、複雑なルーティングが必要なら API Gateway などを検討します。',
        },
    {
            question:
                '公開 API として、認証、レート制限、API キー、ステージ管理、詳細なルーティング、CORS 制御を行いたいです。Lambda の入口として最も適した候補はどれですか?',
            options: [
                {
                    text: 'API Gateway を検討する',
                    isCorrect: true,
                    explanation:
                        'API Gateway は API の公開・管理に向いたサービスです。認証認可、レート制限、ステージ、CORS（Cross-Origin Resource Sharing：異なるオリジン間のリクエスト制御）、ルーティングなどを扱えます。',
                },
                {
                    text: 'Lambda Function URL だけを使えば、API Gateway のすべての API 管理機能を代替できる',
                    isCorrect: false,
                    explanation:
                        'Function URL はシンプルな HTTPS エンドポイントには便利ですが、API Gateway のような高度な API 管理機能がすべて揃っているわけではありません。',
                },
                {
                    text: 'SQS を直接ブラウザに公開すれば、HTTP API として利用できる',
                    isCorrect: false,
                    explanation:
                        'SQS はメッセージキューであり、公開 HTTP API の管理サービスではありません。',
                },
                {
                    text: 'CloudWatch Logs を公開すれば、API のレスポンスとして利用できる',
                    isCorrect: false,
                    explanation:
                        'CloudWatch Logs はログ保存・監視のためのサービスであり、API エンドポイントではありません。',
                },
            ],
            explanation:
                '入口サービスの選定では、単に Lambda を呼べるかだけでなく、API 管理、認証、流量制御、運用機能が必要かを見ます。',
        },
    {
            question:
                '既存システムでは ALB 配下に複数の Web サービスがあり、一部パスだけ Lambda に処理させたいです。VPC 内の構成や既存の ALB 運用を活かしたい場合、候補として最も自然なのはどれですか?',
            options: [
                {
                    text: 'ALB のターゲットとして Lambda を使う構成を検討する',
                    isCorrect: true,
                    explanation:
                        'ALB は Lambda をターゲットにできます。既存の ALB、パスベースルーティング、他のターゲットとの共存を活かしたい場合に候補になります。',
                },
                {
                    text: 'ALB を使う場合、Lambda は絶対に呼び出せない',
                    isCorrect: false,
                    explanation:
                        'ALB は Lambda をターゲットとして呼び出せます。API Gateway だけが Lambda の入口ではありません。',
                },
                {
                    text: 'ALB を使えば、Lambda のタイムアウトやレスポンス形式を一切考えなくてよい',
                    isCorrect: false,
                    explanation:
                        'ALB 経由でも、Lambda の実行時間、レスポンス形式、エラー処理、権限設定は考慮する必要があります。',
                },
                {
                    text: 'ALB は S3 オブジェクト保存専用のサービスである',
                    isCorrect: false,
                    explanation:
                        'ALB は HTTP/HTTPS リクエストを複数のターゲットへ振り分けるロードバランサーです。S3 のオブジェクト保存サービスではありません。',
                },
            ],
            explanation:
                'Lambda の HTTP 入口は API Gateway だけではありません。既存 ALB との統合やパスベースルーティングを重視する場合、ALB + Lambda も候補になります。',
        },
    {
            question:
                'API Gateway + Lambda で 500 エラーが増えています。CloudWatch Logs には Lambda の例外が出ていますが、クライアントには原因不明のエラーだけが返っています。改善として最も適切なものはどれですか?',
            options: [
                {
                    text: '相関 ID をレスポンスとログに含め、クライアントの問い合わせと Lambda ログを紐づけられるようにする',
                    isCorrect: true,
                    explanation:
                        '相関 ID（Correlation ID：リクエストを追跡するための識別子）を使うと、クライアント側のエラーとサーバー側ログを対応付けやすくなります。詳細な内部情報は返さず、調査できる手がかりを返す設計が有効です。',
                },
                {
                    text: 'すべてのエラー詳細をクライアントへ返し、ログは削除する',
                    isCorrect: false,
                    explanation:
                        '内部情報を外部へ返すのは危険です。ログを残しつつ、クライアントには安全なエラー情報と問い合わせ用の識別子を返します。',
                },
                {
                    text: '500 エラーは必ず API Gateway の障害なので、Lambda のログを見る必要はない',
                    isCorrect: false,
                    explanation:
                        '500 エラーの原因は Lambda の例外、レスポンス形式不正、権限、統合設定などさまざまです。ログとメトリクスで切り分けます。',
                },
                {
                    text: 'エラー時は CloudWatch Logs に何も出さない方が、トラブルシューティングしやすい',
                    isCorrect: false,
                    explanation:
                        'ログがないと原因調査が難しくなります。機密情報を避けつつ、必要な情報を記録します。',
                },
            ],
            explanation:
                'API の運用では、利用者向けレスポンスと運用者向けログをつなぐ情報が重要です。相関 ID（Correlation ID）、HTTP ステータス、エラーコードを整理します。',
        },
    {
            question:
                'Lambda API で、クライアントがタイムアウトした後に同じリクエストを再送することがあります。サーバー側では最初の処理が実は成功している可能性があります。最も重要な設計はどれですか?',
            options: [
                {
                    text: 'クライアントリクエスト ID や冪等キーを受け取り、同じ操作が二重実行されないようにする',
                    isCorrect: true,
                    explanation:
                        '同期 API でも、クライアント再試行によって同じ操作が複数回来ることがあります。冪等キー（同じ業務操作を識別する重複しない値）を使うと、二重注文や二重決済を防ぎやすくなります。',
                },
                {
                    text: 'タイムアウトしたリクエストは、サーバー側で必ず失敗しているため考慮不要である',
                    isCorrect: false,
                    explanation:
                        'クライアントがタイムアウトしても、サーバー側処理が成功している場合があります。再送時の重複を考慮する必要があります。',
                },
                {
                    text: '再送を検知したら、常に新しい注文として処理する',
                    isCorrect: false,
                    explanation:
                        '同じ業務操作の再送を新規処理すると、二重注文や二重決済につながる可能性があります。',
                },
                {
                    text: 'API Gateway を使えば、すべてのクライアント再試行は自動的に無害化される',
                    isCorrect: false,
                    explanation:
                        'API Gateway が業務上の重複実行を自動的に防いでくれるわけではありません。アプリケーション側で冪等性を設計します。',
                },
            ],
            explanation:
                '同期 API でも分散システムの問題は起きます。クライアントタイムアウト、再試行、サーバー側成功のズレを前提に、冪等な API を設計します。',
        },
    {
            question:
                'Lambda Function URL、API Gateway、ALB のどれを使うか迷っています。選定観点として最も適切なものはどれですか?',
            options: [
                {
                    text: '必要な API 管理機能、認証認可、既存 ALB 連携、ルーティング、コスト、運用方針を比較して選ぶ',
                    isCorrect: true,
                    explanation:
                        'Function URL はシンプルな公開、API Gateway は API 管理、ALB は既存ロードバランサー連携や複数ターゲット統合で候補になります。要件に応じて比較します。',
                },
                {
                    text: 'Lambda を HTTP 公開する場合、常に Function URL が最も高機能である',
                    isCorrect: false,
                    explanation:
                        'Function URL はシンプルですが、API Gateway や ALB の機能をすべて置き換えるものではありません。',
                },
                {
                    text: 'API Gateway、Function URL、ALB は名前が違うだけで機能差はない',
                    isCorrect: false,
                    explanation:
                        'それぞれ機能、運用、認証認可、ルーティング、統合方法が異なります。要件に合わせて選びます。',
                },
                {
                    text: 'ALB を選ぶと、Lambda の IAM 権限設計は不要になる',
                    isCorrect: false,
                    explanation:
                        'ALB 経由で呼び出しても、Lambda が AWS リソースへアクセスするなら実行ロールなどの権限設計が必要です。',
                },
            ],
            explanation:
                'Lambda の HTTP 入口は複数あります。簡単さだけでなく、認証、ルーティング、流量制御、既存構成、運用性を見て選定します。',
        },
    {
            question:
                'Lambda からインターネット上の外部 API と DynamoDB だけにアクセスします。RDS や社内専用サブネット内のリソースにはアクセスしません。VPC（AWS 上で仮想ネットワークを構成する仕組み）接続の判断として最も適切なものはどれですか?',
            options: [
                {
                    text: '必要な理由がなければ、Lambda を VPC に入れない構成も検討する',
                    isCorrect: true,
                    explanation:
                        'Lambda は VPC（AWS 上で仮想ネットワークを構成する仕組み）に入れなくても、インターネット上の API や多くの AWS サービスへアクセスできます。VPC 内リソースへ接続する必要がないなら、構成を単純に保つ判断も重要です。',
                },
                {
                    text: 'すべての Lambda は必ず VPC に入れないと実行できない',
                    isCorrect: false,
                    explanation:
                        'Lambda は VPC に接続しなくても実行できます。VPC 接続は、プライベートサブネット（インターネットから直接アクセスされないサブネット）内の RDS などへアクセスしたい場合に検討します。',
                },
                {
                    text: 'VPC に入れれば、IAM 権限の設計は不要になる',
                    isCorrect: false,
                    explanation:
                        'VPC（AWS 上で仮想ネットワークを構成する仕組み）はネットワーク境界の設計であり、IAM 権限の代わりではありません。DynamoDB や S3 へアクセスするには実行ロール権限も必要です。',
                },
                {
                    text: 'VPC に入れれば、すべての外部 API への通信が自動的に高速化される',
                    isCorrect: false,
                    explanation:
                        'VPC 接続は外部 API 通信を自動的に高速化する設定ではありません。むしろ NAT 経路など追加のネットワーク設計が必要になることがあります。',
                },
            ],
            explanation:
                'Lambda を VPC（AWS 上で仮想ネットワークを構成する仕組み）に入れるかは「何に接続する必要があるか」で判断します。VPC 内のプライベートリソースに接続する必要がなければ、入れない方がシンプルな場合があります。',
        },
    {
            question:
                'Lambda をプライベートサブネット（インターネットから直接アクセスされないサブネット）に配置したところ、外部の SaaS API への HTTPS 通信がタイムアウトするようになりました。最も疑うべき設定はどれですか?',
            options: [
                {
                    text: 'プライベートサブネットからインターネットへ出るための NAT Gateway などの経路があるか',
                    isCorrect: true,
                    explanation:
                        'プライベートサブネット（インターネットから直接アクセスされないサブネット）内の Lambda がインターネットへ出るには、通常 NAT Gateway（プライベートサブネットから外部インターネットへ出るためのマネージド NAT サービス）などの経路が必要です。',
                },
                {
                    text: 'Lambda の関数名が短すぎないか',
                    isCorrect: false,
                    explanation:
                        '関数名の長さは外部 API へのネットワーク到達性とは関係ありません。',
                },
                {
                    text: 'CloudWatch Logs のロググループ名が API の URL と一致しているか',
                    isCorrect: false,
                    explanation:
                        'ロググループ名はログ保存先であり、外部 API への通信経路を決めるものではありません。',
                },
                {
                    text: 'DynamoDB のテーブル名を変更すれば、外部 SaaS API への通信が復旧する',
                    isCorrect: false,
                    explanation:
                        'DynamoDB テーブル名と外部 SaaS API へのネットワーク経路は別の問題です。',
                },
            ],
            explanation:
                'VPC 内 Lambda の外部通信タイムアウトでは、サブネットのルートテーブル、NAT Gateway、セキュリティグループ、DNS 解決などを確認します。',
        },
    {
            question:
                'VPC 内の Lambda から S3 へ大量にアクセスします。NAT Gateway 経由の通信量とコストが気になっています。設計として最も適切な選択肢はどれですか?',
            options: [
                {
                    text: 'S3 用の VPC エンドポイントを検討し、VPC 内から AWS サービスへプライベートに到達できるようにする',
                    isCorrect: true,
                    explanation:
                        'VPC エンドポイント（VPC 内から AWS サービスへインターネットを経由せず接続する仕組み。サービスごとに作成可能）を使うと、S3 などへの通信を NAT Gateway 経由にしない設計ができます。',
                },
                {
                    text: 'S3 にアクセスするには、必ず NAT Gateway を経由しなければならない',
                    isCorrect: false,
                    explanation:
                        'S3 には VPC エンドポイントを使ってアクセスできる場合があります。必ず NAT Gateway が必要とは限りません。',
                },
                {
                    text: 'VPC エンドポイントを作ると、Lambda の実行ロール権限は不要になる',
                    isCorrect: false,
                    explanation:
                        'VPC エンドポイント（VPC 内から AWS サービスへインターネットを経由せず接続する仕組み。サービスごとに作成可能）はネットワーク経路の仕組みです。S3 へアクセスする IAM 権限は別途必要です。',
                },
                {
                    text: 'S3 のバケット名を短くすれば、NAT Gateway のコストは必ずゼロになる',
                    isCorrect: false,
                    explanation:
                        'バケット名の長さは NAT Gateway の通信経路やコストとは関係ありません。',
                },
            ],
            explanation:
                'VPC 内から AWS サービスへアクセスする場合、NAT Gateway 経由にするか VPC エンドポイント（サービスごとに作成可能）を使うかは重要な設計判断です。コスト、セキュリティ、到達性を見て選びます。',
        },
    {
            question:
                'Lambda からプライベートサブネット（インターネットから直接アクセスされないサブネット）内の RDS に接続したいです。ネットワーク設計として最低限確認すべきものはどれですか?',
            options: [
                {
                    text: 'Lambda の VPC、サブネット、セキュリティグループ、RDS 側のセキュリティグループ許可を確認する',
                    isCorrect: true,
                    explanation:
                        'RDS がプライベートサブネット内にある場合、Lambda も接続可能な VPC（AWS 上で仮想ネットワークを構成する仕組み）/ サブネットに配置し、セキュリティグループ（通信を許可・拒否する仮想ファイアウォール）で DB ポートを許可する必要があります。',
                },
                {
                    text: 'Lambda の説明欄に RDS のエンドポイントを書けば接続できる',
                    isCorrect: false,
                    explanation:
                        '説明欄はメモ用であり、ネットワーク接続や認証情報の設定には使われません。',
                },
                {
                    text: 'RDS に接続する場合、Lambda は必ず VPC の外に置く',
                    isCorrect: false,
                    explanation:
                        'プライベート RDS に接続するには、通常 Lambda を同じ VPC または接続可能な VPC 構成に入れる必要があります。',
                },
                {
                    text: 'RDS への接続では、セキュリティグループは一切関係しない',
                    isCorrect: false,
                    explanation:
                        'セキュリティグループは RDS 接続で非常に重要です。Lambda 側から RDS のポートへ到達できる許可が必要です。',
                },
            ],
            explanation:
                'VPC 内リソースへの接続では、コードだけでなくネットワーク到達性が重要です。サブネット、ルート、セキュリティグループ、DNS、認証情報を切り分けます。',
        },
    {
            question:
                'Lambda から RDS へ高頻度に接続しています。アクセス増加時に RDS の接続数が枯渇し、タイムアウトが増えています。最も適切な見直しはどれですか?',
            options: [
                {
                    text: 'RDS Proxy や接続再利用、Lambda の同時実行数制御を検討する',
                    isCorrect: true,
                    explanation:
                        'Lambda は同時実行が増えやすく、RDS への接続数が急増することがあります。RDS Proxy（アプリケーションと RDS の間で DB 接続を効率的に管理するサービス）や同時実行数制御で下流を保護します。',
                },
                {
                    text: 'Lambda の同時実行数を無制限に増やせば、RDS の接続数問題は解決する',
                    isCorrect: false,
                    explanation:
                        '同時実行数を増やすと、RDS への接続数も増え、問題が悪化する可能性があります。',
                },
                {
                    text: 'RDS の接続数が枯渇しても、Lambda 側ではタイムアウトは発生しない',
                    isCorrect: false,
                    explanation:
                        'RDS 接続待ちや接続失敗により、Lambda 側でもタイムアウトやエラーが発生することがあります。',
                },
                {
                    text: 'RDS 接続問題は IAM ロール名を変更すれば必ず解消する',
                    isCorrect: false,
                    explanation:
                        'IAM ロール名の変更だけで DB 接続数やネットワーク待ちの問題は解決しません。',
                },
            ],
            explanation:
                'Lambda + RDS では、ネットワーク到達性だけでなく接続数管理が重要です。自動スケールする Lambda と接続数に制限がある RDS の特性を合わせて設計します。',
        },
    {
            question:
                'Lambda から ElastiCache for Redis に接続したいです。ElastiCache は VPC（AWS 上で仮想ネットワークを構成する仕組み）内のプライベートサブネットにあります。最も適切な理解はどれですか?',
            options: [
                {
                    text: 'Lambda を接続可能な VPC / サブネットに配置し、セキュリティグループで Redis ポートへの通信を許可する必要がある',
                    isCorrect: true,
                    explanation:
                        'ElastiCache（Redis や Memcached などのキャッシュをマネージドで提供するサービス）は通常 VPC 内で利用します。Lambda から接続するにはネットワーク到達性とセキュリティグループの許可が必要です。',
                },
                {
                    text: 'ElastiCache は常にインターネット公開されているため、VPC 設定は不要である',
                    isCorrect: false,
                    explanation:
                        'ElastiCache は通常 VPC 内のプライベートなリソースとして扱います。インターネット公開前提ではありません。',
                },
                {
                    text: 'Lambda の環境変数に Redis ポートを書けば、ネットワーク許可は不要になる',
                    isCorrect: false,
                    explanation:
                        '環境変数は接続先設定の管理には使えますが、ネットワーク到達性やセキュリティグループ許可の代わりにはなりません。',
                },
                {
                    text: 'ElastiCache に接続する場合、Lambda の実行時間上限はなくなる',
                    isCorrect: false,
                    explanation:
                        'ElastiCache へ接続しても Lambda の最大実行時間上限は変わりません。',
                },
            ],
            explanation:
                'Lambda から VPC 内キャッシュへ接続する場合、RDS と同じく VPC、サブネット、セキュリティグループ、DNS、接続管理を確認します。',
        },
    {
            question:
                'VPC 内 Lambda がタイムアウトします。ログを見ると、関数開始後すぐに外部 API 呼び出しで止まっているようです。ネットワーク起因の切り分けとして最も適切なものはどれですか?',
            options: [
                {
                    text: 'NAT Gateway、ルートテーブル、セキュリティグループ、NACL、DNS 解決、外部 API 側の応答を順に確認する',
                    isCorrect: true,
                    explanation:
                        'VPC 内 Lambda の外部通信タイムアウトでは、NAT Gateway、ルートテーブル、セキュリティグループ、NACL（Network ACL：サブネット単位の通信制御）、DNS 解決、外部 API 側の遅延を切り分けます。',
                },
                {
                    text: 'Lambda の関数説明を空欄にすれば、外部 API へ到達できる',
                    isCorrect: false,
                    explanation:
                        '関数説明はネットワーク到達性に影響しません。',
                },
                {
                    text: 'タイムアウトは必ず Lambda のコードバグであり、ネットワーク設定は確認しなくてよい',
                    isCorrect: false,
                    explanation:
                        'タイムアウトの原因はコード、外部 API、DNS、NAT、ルート、セキュリティグループなどさまざまです。切り分けが必要です。',
                },
                {
                    text: 'CloudWatch Logs を削除すれば、ネットワークタイムアウトは解消する',
                    isCorrect: false,
                    explanation:
                        'ログを削除してもネットワーク経路は改善しません。むしろ調査が難しくなります。',
                },
            ],
            explanation:
                'ネットワーク起因のタイムアウトは、Lambda のメモリやタイムアウト値だけを見ても分かりません。通信経路と依存先の両方を確認します。',
        },
    {
            question:
                'Lambda を VPC に入れた後、CloudWatch Logs へのログ出力はできていますが、Secrets Manager へのアクセスがタイムアウトします。NAT Gateway を使わずに VPC 内から安全にアクセスしたい場合、検討すべきものはどれですか?',
            options: [
                {
                    text: 'Secrets Manager 用の VPC エンドポイントを検討する',
                    isCorrect: true,
                    explanation:
                        'VPC エンドポイント（VPC 内から AWS サービスへインターネットを経由せず接続する仕組み。サービスごとに作成可能）を使うと、VPC 内から Secrets Manager などの AWS サービスへプライベートに接続できます。NAT Gateway を使わずに到達させたい場合の候補です。',
                },
                {
                    text: 'Secrets Manager のシークレット名を短くする',
                    isCorrect: false,
                    explanation:
                        'シークレット名の長さは VPC 内から Secrets Manager へ到達できるかどうかとは関係ありません。',
                },
                {
                    text: 'Lambda のタイムアウトを1秒にすれば、Secrets Manager への通信は成功する',
                    isCorrect: false,
                    explanation:
                        'タイムアウトを短くしても通信経路は作られません。むしろ失敗しやすくなります。',
                },
                {
                    text: 'CloudWatch Logs に出力できるなら、すべての AWS サービスへ必ず到達できる',
                    isCorrect: false,
                    explanation:
                        'CloudWatch Logs へのログ出力と Secrets Manager へのネットワーク到達性は別に確認します。サービスごとの VPC エンドポイントや経路が必要な場合があります。',
                },
            ],
            explanation:
                'VPC 内 Lambda から AWS サービスへアクセスする場合、NAT Gateway か VPC エンドポイントを検討します。VPC エンドポイントはサービスごとに必要なものが異なるため、対象サービスと権限を確認します。',
        },
    {
            question:
                'Lambda から RDS への接続で、たまに DNS 名の解決や接続開始に時間がかかります。調査として最も適切なものはどれですか?',
            options: [
                {
                    text: '接続開始前後のログを出し、DNS 解決、TCP 接続、認証、SQL 実行のどこで遅いかを分けて確認する',
                    isCorrect: true,
                    explanation:
                        '「RDS が遅い」とまとめず、DNS 解決、ネットワーク接続、認証、クエリ実行を分けて計測すると原因を切り分けやすくなります。',
                },
                {
                    text: 'RDS 接続が遅い場合、必ず Lambda のデプロイパッケージサイズだけが原因である',
                    isCorrect: false,
                    explanation:
                        'デプロイパッケージサイズはコールドスタートに影響することがありますが、RDS 接続開始の遅さには DNS、ネットワーク、認証、DB 負荷なども関係します。',
                },
                {
                    text: 'SQL 実行前にタイムアウトしている場合でも、SQL チューニングだけを行えば必ず解決する',
                    isCorrect: false,
                    explanation:
                        'SQL 実行前に遅いなら、DNS 解決や接続確立など SQL 以前の問題を疑う必要があります。',
                },
                {
                    text: '接続処理のログは不要で、最終的な Lambda タイムアウトだけ見れば十分である',
                    isCorrect: false,
                    explanation:
                        '最終的なタイムアウトだけでは、どこで時間を使ったか分かりません。段階ごとのログが重要です。',
                },
            ],
            explanation:
                'ネットワーク起因の問題は、処理を段階に分けて観測することが重要です。外部接続では、接続前、接続後、クエリ前後などのログが役立ちます。',
        },
    {
            question:
                'Lambda を複数 AZ のプライベートサブネット（インターネットから直接アクセスされないサブネット）に配置しています。外部通信のために NAT Gateway を1つの AZ にだけ置いています。高可用性の観点で注意すべき点はどれですか?',
            options: [
                {
                    text: 'NAT Gateway が単一 AZ だけだと、その AZ 障害や経路設計によって外部通信の可用性に影響する可能性がある',
                    isCorrect: true,
                    explanation:
                        '高可用性を考える場合、各 AZ のプライベートサブネットから適切な NAT Gateway へ出る設計を検討します。単一 NAT Gateway は障害時の影響範囲やクロス AZ 通信コストにも注意が必要です。',
                },
                {
                    text: 'NAT Gateway はリージョン全体で完全に共有されるため、AZ 配置は一切考えなくてよい',
                    isCorrect: false,
                    explanation:
                        'NAT Gateway は AZ に配置されるリソースです。高可用性や経路設計では AZ を意識します。',
                },
                {
                    text: 'Lambda を複数 AZ に配置すると、NAT Gateway は自動で各 AZ に作成される',
                    isCorrect: false,
                    explanation:
                        'Lambda の VPC 設定だけで NAT Gateway が自動作成されるわけではありません。ネットワーク側で設計・作成します。',
                },
                {
                    text: 'NAT Gateway を使うと、IAM 権限の最小権限設計は不要になる',
                    isCorrect: false,
                    explanation:
                        'NAT Gateway はネットワーク経路のためのリソースです。IAM 権限設計とは別の観点です。',
                },
            ],
            explanation:
                'VPC 内 Lambda の外部通信では、NAT Gateway の有無だけでなく AZ 配置、ルートテーブル、可用性、コストも確認します。',
        },
    {
            question:
                'VPC 内 Lambda から RDS には接続できますが、S3 と DynamoDB へのアクセスがタイムアウトします。IAM 権限は正しく設定されています。次に確認すべき観点として最も適切なものはどれですか?',
            options: [
                {
                    text: 'NAT Gateway または S3 / DynamoDB 用 VPC エンドポイントなど、AWS サービスへのネットワーク経路があるか確認する',
                    isCorrect: true,
                    explanation:
                        'IAM 権限が正しくても、VPC 内から S3 や DynamoDB へ到達するネットワーク経路がなければタイムアウトすることがあります。NAT Gateway や VPC エンドポイント（サービスごとに作成可能）を確認します。',
                },
                {
                    text: 'RDS に接続できるなら、S3 と DynamoDB にも必ず同じ経路で接続できる',
                    isCorrect: false,
                    explanation:
                        'RDS は VPC 内リソース、S3 や DynamoDB は AWS サービスエンドポイントへの通信です。必要な経路やエンドポイントが異なる場合があります。',
                },
                {
                    text: 'IAM 権限が正しければ、ネットワーク経路は存在しなくても AWS サービスへ到達できる',
                    isCorrect: false,
                    explanation:
                        'IAM は許可の仕組みであり、ネットワーク到達性を作るものではありません。権限と経路は別に確認します。',
                },
                {
                    text: 'DynamoDB のテーブル名を変更すれば、S3 へのタイムアウトも解消する',
                    isCorrect: false,
                    explanation:
                        'テーブル名と S3 へのネットワーク経路は関係ありません。',
                },
            ],
            explanation:
                'VPC 内 Lambda のトラブルでは、IAM とネットワークを分けて考えます。AccessDenied なら権限、タイムアウトなら経路や DNS を疑う、という切り分けが重要です。',
        }
]
