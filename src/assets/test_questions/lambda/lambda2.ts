import type { Question } from '@/types/test_questions'

export const testQuestions: Question[] = [
    {
        question:
            '画像アップロードをきっかけに、数秒でサムネイルを生成して S3 に保存する処理を作りたい。運用負荷を抑えつつ、イベントごとに短時間で処理する前提です。最も適した構成はどれですか?',
        options: [
            {
                text: 'S3 イベントで Lambda を起動し、サムネイル生成後に別の S3 プレフィックスへ保存する',
                isCorrect: true,
                explanation:
                    '短時間のイベント処理で、S3 のオブジェクト作成が明確な起点になるため Lambda が適しています。入力用と出力用のプレフィックス（フォルダ名のようなパスの先頭部分）を分けると、再帰的な起動も避けやすくなります。',
            },
            {
                text: '常時起動した EC2 インスタンスで S3 を数秒ごとにポーリングする',
                isCorrect: false,
                explanation:
                    '実現はできますが、イベント駆動で処理できる内容に対して常時起動サーバーを管理する必要があり、運用負荷が増えやすいです。',
            },
            {
                text: 'AWS Batch を使い、画像1枚ごとに大規模なバッチジョブとして実行する',
                isCorrect: false,
                explanation:
                    'AWS Batch は大量・長時間・計算負荷の高いバッチ処理に向くサービスです。数秒程度の軽量なイベント処理では過剰な構成になりやすいです。',
            },
            {
                text: 'Fargate タスクを常時起動し、アップロードがあるまで待機させる',
                isCorrect: false,
                explanation:
                    'Fargate（サーバー管理を抑えてコンテナを実行するサービス）は有効な選択肢ですが、短時間のイベント処理だけなら Lambda の方が構成を簡単にしやすいです。',
            },
        ],
        explanation:
            'Lambda は、S3 イベントのように明確な起点があり、短時間で終わる処理に向いています。応用設計では「できるか」だけでなく、常時起動が必要か、運用負荷に見合うかも判断します。',
    },
    {
        question:
            'ある処理は1回あたり2時間かかり、CPU とメモリを大きく使います。途中経過を保存しながら大量データを処理する必要があります。この要件に対する判断として最も適切なものはどれですか?',
        options: [
            {
                text: 'Lambda のタイムアウトを長く設定すればよい',
                isCorrect: false,
                explanation:
                    'Lambda には最大実行時間の上限があります。現在の一般的な上限は 15 分であり、2時間の単一処理には向きません。',
            },
            {
                text: 'AWS Batch や ECS / Fargate など、長時間処理に向いた実行基盤を検討する',
                isCorrect: true,
                explanation:
                    '長時間かかる計算処理や大量データ処理では、AWS Batch や ECS / Fargate（コンテナを実行・管理する AWS サービス）などを検討するのが自然です。実際には、ジョブ管理、スケール方式、利用する計算資源、運用方針などで選択が変わります。',
            },
            {
                text: 'Lambda のグローバル変数に途中経過を保存して、次回実行で再開する',
                isCorrect: false,
                explanation:
                    'グローバル変数は永続保存先ではありません。実行環境が再利用される保証はなく、途中経過の保存には S3 や DynamoDB などの外部ストレージを使うべきです。',
            },
            {
                text: 'API Gateway から同期的に Lambda を呼び出し、完了まで待たせる',
                isCorrect: false,
                explanation:
                    '同期 API として2時間待たせる設計は現実的ではありません。API のタイムアウトや利用者体験の面でも問題になりやすいです。',
            },
        ],
        explanation:
            'Lambda は短時間のイベント処理に強い一方、長時間の単一処理には向きにくいです。処理時間、状態保存、リソース使用量を見て、Batch やコンテナ系サービスを選ぶ判断が必要です。',
    },
    {
        question:
            'HTTP API のバックエンド処理として Lambda を使うか検討しています。通常は数百ミリ秒で終わる処理ですが、一部リクエストだけ数分以上かかる可能性があります。最も適切な設計方針はどれですか?',
        options: [
            {
                text: 'すべてのリクエストを同期 Lambda で処理し、長い処理も完了まで待つ',
                isCorrect: false,
                explanation:
                    '同期 API で長時間待たせると、API Gateway やクライアント側のタイムアウト、再試行、利用者体験の悪化につながりやすいです。',
            },
            {
                text: '短時間で返せる処理は同期 API にし、長い処理は SQS や Step Functions などへ逃がして非同期化する',
                isCorrect: true,
                explanation:
                    '短時間の API バックエンドには Lambda が向きますが、長い処理は非同期化するのが一般的です。SQS や Step Functions を使うと、受付と実処理を分離できます。',
            },
            {
                text: '長い処理があるため、短時間処理も含めて Lambda は一切使わない',
                isCorrect: false,
                explanation:
                    '一部の処理が長いからといって、全体で Lambda を避ける必要はありません。処理の性質ごとに同期・非同期を分ける判断が重要です。',
            },
            {
                text: 'Lambda のメモリを最大にすれば、数分以上の処理も API として安全に待てる',
                isCorrect: false,
                explanation:
                    'メモリを増やすと CPU などの処理能力も増えますが、同期 API として長時間待たせる設計そのものの問題は解決できません。',
            },
        ],
        explanation:
            'API バックエンドでは、レスポンスをすぐ返す必要がある処理と、時間がかかる処理を分ける設計が重要です。Lambda は短時間の同期処理にも、非同期処理の部品にも使えます。',
    },
    {
        question:
            '複数ステップの業務処理があります。各ステップは Lambda で実行できますが、承認待ち、分岐、リトライ、失敗時の補償処理を含みます。最も適切な構成はどれですか?',
        options: [
            {
                text: '1つの Lambda 関数に全ステップを詰め込み、内部で長いフローを管理する',
                isCorrect: false,
                explanation:
                    '1つの関数に複雑な業務フローを詰め込むと、リトライ、途中失敗、状態管理、監視が難しくなります。',
            },
            {
                text: 'Lambda 関数同士を直接呼び出し合い、呼び出し順序をコードだけで管理する',
                isCorrect: false,
                explanation:
                    '関数同士の直接連鎖だけで複雑なフローを管理すると、全体の状態や失敗箇所が追いにくくなります。',
            },
            {
                text: 'Step Functions でワークフローを管理し、各処理単位を Lambda などで実行する',
                isCorrect: true,
                explanation:
                    'Step Functions は複数ステップのワークフロー、分岐、リトライ、待機、失敗処理を管理するサービスです。Lambda は各ステップの実行部品として使えます。',
            },
            {
                text: 'すべて S3 イベントに変換し、S3 の通知設定だけで順番を制御する',
                isCorrect: false,
                explanation:
                    'S3 イベントはファイル作成などの起点には使えますが、複雑な業務フローや承認待ちの制御には向きません。',
            },
        ],
        explanation:
            'Lambda を使えるからといって、フロー制御まで Lambda 内に抱え込む必要はありません。複雑な状態遷移やリトライを含む場合は Step Functions が有力です。',
    },
    {
        question:
            'WebSocket の常時接続を大量に維持し、各クライアントと長時間双方向通信する仕組みを作りたい。Lambda 採用判断として最も適切なものはどれですか?',
        options: [
            {
                text: '1つの Lambda 実行で各 WebSocket 接続を何時間も維持する',
                isCorrect: false,
                explanation:
                    'Lambda は常駐プロセスとして長時間接続を維持する用途には向きにくいです。実行時間の上限もあります。',
            },
            {
                text: 'API Gateway WebSocket API などで接続管理を行い、必要に応じてコンテナ系サービスも比較し、Lambda はイベント処理部分で使う',
                isCorrect: true,
                explanation:
                    'WebSocket の接続管理と、接続時・メッセージ受信時のイベント処理は分けて考えます。Lambda はイベントごとの処理には使えますが、常時接続を保持する実行主体には向きません。',
            },
            {
                text: 'Lambda のタイムアウトを最大にすれば、常時接続サーバーとして使える',
                isCorrect: false,
                explanation:
                    'タイムアウトを最大にしても、Lambda を常時接続サーバーとして使う設計にはなりません。最大実行時間の制限も残ります。',
            },
            {
                text: 'グローバル変数に接続情報を保存すれば、すべての接続を安定して管理できる',
                isCorrect: false,
                explanation:
                    'グローバル変数は実行環境ごとの一時的なメモリであり、全接続の永続的な管理には使えません。',
            },
        ],
        explanation:
            'Lambda はイベント駆動の処理に向いていますが、長時間接続を維持する常駐サーバーではありません。接続管理とイベント処理の責任を分ける判断が重要です。',
    },
    {
        question:
            '大量の小さなイベントが短時間に発生し、それぞれを Lambda で処理できます。ただし、処理先の RDS は同時接続数に弱く、急激なアクセス増加で落ちる可能性があります。最も適切な判断はどれですか?',
        options: [
            {
                text: 'Lambda は自動でスケールするため、下流サービスの制限は考えなくてよい',
                isCorrect: false,
                explanation:
                    'Lambda がスケールできても、下流の RDS や外部 API が同じ速度で耐えられるとは限りません。',
            },
            {
                text: 'Reserved Concurrency や SQS などを使い、同時実行数や流量を制御する',
                isCorrect: true,
                explanation:
                    'Reserved Concurrency（関数ごとに使用できる同時実行数を予約・制限する仕組み）や SQS を使うと、Lambda の処理量を調整し、下流サービスを保護しやすくなります。',
            },
            {
                text: 'Lambda を使わず、すべてのイベントを手動で再実行する運用にする',
                isCorrect: false,
                explanation:
                    '大量イベントを手動運用で処理するのは現実的ではありません。自動化しつつ流量制御する設計を検討します。',
            },
            {
                text: 'Lambda のメモリを下げれば、必ず RDS への同時接続数も減る',
                isCorrect: false,
                explanation:
                    'メモリ設定は1実行あたりの処理能力に影響しますが、同時実行数そのものを直接制御する設定ではありません。',
            },
        ],
        explanation:
            '大量並列処理では、Lambda 自体のスケール性能だけでなく、下流サービスの限界を考える必要があります。自動スケールは便利ですが、無制限に流してよいという意味ではありません。',
    },
    {
        question:
            '数ミリ秒単位の安定した低レイテンシが必須で、初回リクエストでも遅延の揺れをほとんど許容できないシステムがあります。Lambda 採用時の判断として最も適切なものはどれですか?',
        options: [
            {
                text: 'Lambda は常に同じ速度で起動するため、低レイテンシ要件では必ず最適である',
                isCorrect: false,
                explanation:
                    'Lambda ではコールドスタートなどにより、初回や久しぶりの実行で遅延が増える可能性があります。',
            },
            {
                text: 'Provisioned Concurrency などの対策を検討し、それでも要件に合わなければ ECS / EC2 など常時起動基盤も比較する',
                isCorrect: true,
                explanation:
                    'Provisioned Concurrency（事前に実行環境を準備しておき、コールドスタートの影響を減らす機能）は対策になります。ただし、厳しい低レイテンシ要件では常時起動の選択肢も比較すべきです。',
            },
            {
                text: 'タイムアウト値を短くすれば、コールドスタートは発生しなくなる',
                isCorrect: false,
                explanation:
                    'タイムアウトは最大実行時間の設定であり、コールドスタートの発生そのものを防ぐ設定ではありません。',
            },
            {
                text: '環境変数を増やせば、実行環境が常に温まった状態になる',
                isCorrect: false,
                explanation:
                    '環境変数は設定値を渡す仕組みであり、実行環境の常時準備を保証するものではありません。',
            },
        ],
        explanation:
            '低レイテンシ要件では、平均速度だけでなく遅延のばらつきも重要です。Lambda を使う場合はコールドスタート対策と、常時起動基盤との比較が必要になります。',
    },
    {
        question:
            '毎日深夜に数十万件のデータを処理するバッチがあります。通常は30分以上かかり、処理失敗時は途中から再開したいです。最も適切な判断はどれですか?',
        options: [
            {
                text: '1つの Lambda 関数で全件を順番に処理する',
                isCorrect: false,
                explanation:
                    '30分以上かかる処理を1つの Lambda 実行にまとめると、実行時間上限に合わず、途中再開や障害対応も難しくなります。',
            },
            {
                text: 'AWS Batch、Step Functions、ECS などを含め、長時間バッチや分割実行に向いた構成を検討する',
                isCorrect: true,
                explanation:
                    '長時間バッチでは、AWS Batch、Step Functions、ECS などが候補になります。処理を分割できるなら Step Functions と Lambda の組み合わせも検討できます。',
            },
            {
                text: 'Lambda の一時領域 /tmp に全件の途中結果を保存すれば、失敗時も確実に再開できる',
                isCorrect: false,
                explanation:
                    '/tmp は実行環境ごとの一時領域であり、永続的な再開ポイントの保存先としては不適切です。',
            },
            {
                text: 'EventBridge Scheduler で Lambda を起動すれば、処理時間の制限はなくなる',
                isCorrect: false,
                explanation:
                    'EventBridge Scheduler は指定時刻や定期スケジュールで処理を起動する機能ですが、起動先の Lambda の実行時間上限をなくすものではありません。',
            },
        ],
        explanation:
            '定期実行だから Lambda が常に最適とは限りません。処理時間、再開性、データ量、失敗時の復旧方式を見て、Batch や Step Functions なども比較します。',
    },
    {
        question:
            '複数チームが「サーバーレスに統一したい」という理由で、すべての処理を Lambda に寄せようとしています。設計レビューで最も適切な指摘はどれですか?',
        options: [
            {
                text: 'サーバーレスに統一すれば、性能・コスト・運用の問題は自動的に解決する',
                isCorrect: false,
                explanation:
                    'サーバーレスは運用負荷を減らせる場面がありますが、すべての設計課題を自動的に解決するものではありません。',
            },
            {
                text: '処理時間、状態管理、接続維持、下流サービス制限、コストを見て、Lambda 以外も比較すべきである',
                isCorrect: true,
                explanation:
                    'Lambda は有力な選択肢ですが、採用判断では要件との適合が重要です。無理に Lambda へ寄せると、複雑な回避策や運用リスクが増えることがあります。',
            },
            {
                text: 'Lambda は高機能なので、RDS や S3 などのデータ保存サービスも不要になる',
                isCorrect: false,
                explanation:
                    'Lambda はコードを実行するサービスであり、永続的なデータ保存には DynamoDB、S3、RDS などを使います。',
            },
            {
                text: 'Lambda を選べば IAM や監視の設計は不要になる',
                isCorrect: false,
                explanation:
                    'Lambda でも IAM 権限、ログ、メトリクス、アラームなどの設計は必要です。',
            },
        ],
        explanation:
            'サーバーレスに寄せること自体を目的にすると、要件に合わない設計になりやすいです。Lambda は適材適所で使うべき部品です。',
    },
    {
        question:
            '動画変換処理を作ります。1ファイルの変換に20〜40分かかり、ffmpeg などの外部バイナリを使います。大量ファイルをキューで順番に処理したいです。最も適切な方針はどれですか?',
        options: [
            {
                text: 'Lambda 1回で動画変換を完了させる前提にする',
                isCorrect: false,
                explanation:
                    '20〜40分かかる単一処理は Lambda の実行時間上限に合いません。外部バイナリや処理時間も考慮すると、別の実行基盤を検討すべきです。',
            },
            {
                text: 'ECS / Fargate や AWS Batch など、長時間のコンテナ実行に向いたサービスを検討する',
                isCorrect: true,
                explanation:
                    '動画変換のような長時間・高負荷・外部バイナリ利用の処理では、コンテナで実行しやすい ECS / Fargate や AWS Batch が候補になります。',
            },
            {
                text: 'Lambda の /tmp を大きくすれば、実行時間上限も自動的に伸びる',
                isCorrect: false,
                explanation:
                    '/tmp の容量設定と Lambda の最大実行時間は別の話です。一時領域を増やしても実行時間上限はなくなりません。',
            },
            {
                text: '動画ファイルを環境変数に入れて Lambda に渡す',
                isCorrect: false,
                explanation:
                    '環境変数は設定値を渡すためのものであり、大きな動画データを渡す用途ではありません。S3 などに保存して参照します。',
            },
        ],
        explanation:
            'Lambda で一部の前処理やイベント受付を行い、重い変換処理は Batch やコンテナへ渡す構成も考えられます。すべてを Lambda に入れる必要はありません。',
    },
    {
        question:
            'ユーザー操作を受け付ける API で、処理開始リクエストを受けたらすぐ受付結果を返し、実際の処理は数分かけて裏側で進めたいです。最も適切な構成はどれですか?',
        options: [
            {
                text: 'API Gateway + Lambda で受付だけを行い、SQS や Step Functions に処理を渡して非同期実行する',
                isCorrect: true,
                explanation:
                    '受付と実処理を分けると、ユーザーにはすぐレスポンスを返し、重い処理は非同期に進められます。SQS や Step Functions は後続処理の管理に使えます。',
            },
            {
                text: 'ユーザーのブラウザを数分間待たせ、Lambda の完了結果だけを返す',
                isCorrect: false,
                explanation:
                    '長時間ブラウザを待たせる設計は、タイムアウトや利用者体験の悪化につながります。',
            },
            {
                text: 'Lambda の戻り値に、数分後に発生する結果を自動的に含められる',
                isCorrect: false,
                explanation:
                    '同期呼び出しの戻り値は、その実行中に返せる結果です。数分後の結果は別途保存し、状態確認 API や通知で扱う設計が必要です。',
            },
            {
                text: 'API Gateway を使う場合、Lambda から他サービスを呼び出すことはできない',
                isCorrect: false,
                explanation:
                    'Lambda の実行ロールに適切な権限があれば、SQS、DynamoDB、Step Functions など他サービスを呼び出せます。',
            },
        ],
        explanation:
            '同期 API と非同期処理の分離は、Lambda を使った設計でよく使われます。受付、状態保存、後続処理、結果通知を分けると設計しやすくなります。',
    },
    {
        question:
            '24時間動き続けるワーカーが必要で、メモリ上に大きなモデルを読み込んだまま継続利用し、リクエストを低遅延で処理したいです。Lambda を採用する判断として最も適切なものはどれですか?',
        options: [
            {
                text: 'Lambda は実行環境を必ず再利用するため、大きなモデルをメモリに置き続ける用途に最適である',
                isCorrect: false,
                explanation:
                    'Lambda の実行環境は再利用されることがありますが、保証ではありません。常に同じメモリ状態を維持する前提にはできません。',
            },
            {
                text: '常駐性や低遅延が強い要件なら、ECS / EC2 など常時起動できる基盤も比較する',
                isCorrect: true,
                explanation:
                    '大きなモデルを読み込んだまま常時待ち受ける設計では、常時起動のコンテナや EC2 が適する場合があります。Lambda を使うならコールドスタートや初期化時間への対策が必要です。',
            },
            {
                text: 'Lambda の環境変数にモデル本体を保存すれば、毎回高速に読み込める',
                isCorrect: false,
                explanation:
                    '環境変数は設定値用であり、大きなモデル本体の保存先ではありません。モデルは S3 やコンテナイメージなどで管理します。',
            },
            {
                text: 'EventBridge Scheduler で1分ごとに起動すれば、常駐プロセスと同じ性質になる',
                isCorrect: false,
                explanation:
                    '定期起動で実行環境が温まる場合はありますが、常駐プロセスと同じ保証はありません。設計の前提にするには危険です。',
            },
        ],
        explanation:
            'Lambda の実行環境再利用は便利ですが、永続的な常駐性の保証ではありません。低遅延・常時メモリ保持が強い要件では、常時起動基盤との比較が重要です。',
    },
    {
        question:
            '月に数回だけ実行される社内向けの自動化処理があります。処理は1分以内で終わり、サーバー管理はできるだけ避けたいです。最も適切な判断はどれですか?',
        options: [
            {
                text: '利用頻度が低く短時間で終わるため、Lambda と EventBridge Scheduler などの組み合わせが有力である',
                isCorrect: true,
                explanation:
                    '低頻度・短時間・自動化処理は Lambda に向きやすいです。EventBridge Scheduler（指定時刻や定期スケジュールで処理を実行できる機能）で起動できます。',
            },
            {
                text: '月に数回でも、必ず EC2 を常時起動しておく必要がある',
                isCorrect: false,
                explanation:
                    '常時起動が不要な処理なら、EC2 を起動し続ける必要はありません。Lambda を使うと、実行した分を中心に課金されます。',
            },
            {
                text: '利用頻度が低い処理では Lambda は起動できない',
                isCorrect: false,
                explanation:
                    '利用頻度が低くても Lambda は起動できます。ただし、久しぶりの実行ではコールドスタートが発生する可能性があります。',
            },
            {
                text: '短時間処理でも、必ず AWS Batch を使うべきである',
                isCorrect: false,
                explanation:
                    'AWS Batch は長時間・大規模なバッチ処理に向くサービスです。1分以内の軽量自動化では Lambda の方が簡単な場合があります。',
            },
        ],
        explanation:
            'Lambda の採用判断では、処理時間、頻度、運用負荷、コールドスタート許容度を見ます。低頻度の短時間処理では、常時起動しない利点が大きくなります。',
    },
]
