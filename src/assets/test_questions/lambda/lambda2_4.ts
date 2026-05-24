import type { Question } from '@/types/test_questions'

export const testQuestions: Question[] = [
    {
            question:
                '複数の Lambda 関数を同じ AWS アカウントで運用しています。ある関数への大量リクエストにより、他の重要な関数まで実行されにくくなりました。最も適切な確認・対策はどれですか?',
            options: [
                {
                    text: 'アカウント全体の同時実行数（同時に動作している Lambda 実行環境数）上限と関数ごとの同時実行設定を確認し、重要関数には Reserved Concurrency などで枠を確保する',
                    isCorrect: true,
                    explanation:
                        'Lambda にはリージョン単位で管理されるアカウント同時実行数（同時に動作している Lambda 実行環境数）上限があります。特定関数が使い切ると他の関数へ影響するため、Reserved Concurrency（関数ごとの同時実行数を予約・制限する仕組み）で重要関数の枠を確保できます。',
                },
                {
                    text: 'Lambda は関数ごとに完全に独立しているため、同じアカウント内の他関数へ影響することはない',
                    isCorrect: false,
                    explanation:
                        'リージョン単位で管理されるアカウント同時実行数（同時に動作している Lambda 実行環境数）上限を共有するため、特定関数の急増が他関数に影響することがあります。',
                },
                {
                    text: '関数名を長くすれば、アカウント同時実行数の上限は自動的に増える',
                    isCorrect: false,
                    explanation:
                        '関数名は同時実行数上限に影響しません。必要なら上限緩和申請や同時実行制御を検討します。',
                },
                {
                    text: 'CloudWatch Logs を削除すれば、同時実行数不足は解消する',
                    isCorrect: false,
                    explanation:
                        'ログ削除は同時実行数の上限や流入量を変えません。ConcurrentExecutions や Throttles を確認します。',
                },
            ],
            explanation:
                '同時実行制御では、関数単体だけでなくアカウント全体の上限を意識します。重要関数の保護と暴走関数の制限を両方考える必要があります。',
        },
    {
            question:
                'Reserved Concurrency の説明として最も適切なものはどれですか?',
            options: [
                {
                    text: '特定の Lambda 関数に同時実行数を予約し、その関数が使える最大同時実行数も制限する設定',
                    isCorrect: true,
                    explanation:
                        'Reserved Concurrency は、関数ごとに同時実行数（同時に動作している Lambda 実行環境数）を予約し、その関数の最大同時実行数も制限します。重要関数の枠確保や下流サービス保護に使えます。',
                },
                {
                    text: 'コールドスタートを減らすために、実行環境を事前に必ず起動しておく設定',
                    isCorrect: false,
                    explanation:
                        'これは主に Provisioned Concurrency（実行環境を事前準備してコールドスタート影響を減らす仕組み）の役割です。Reserved Concurrency は同時実行数の予約・制限であり、実行環境を事前準備する設定ではありません。',
                },
                {
                    text: 'Lambda の最大実行時間を延長する設定',
                    isCorrect: false,
                    explanation:
                        'Reserved Concurrency は実行時間上限を延長しません。同時実行数に関する設定です。',
                },
                {
                    text: 'IAM 権限を自動的に最小権限へ変換する設定',
                    isCorrect: false,
                    explanation:
                        'Reserved Concurrency は IAM ポリシーを変更しません。権限設計は別途必要です。',
                },
            ],
            explanation:
                'Reserved Concurrency は「予約」と「上限」の両面を持ちます。重要関数の実行枠を守る一方で、その関数が下流へ流しすぎることも防げます。',
        },
    {
            question:
                'Provisioned Concurrency と Reserved Concurrency の違いとして最も適切なものはどれですか?',
            options: [
                {
                    text: 'Provisioned Concurrency は実行環境を事前準備してコールドスタート影響を減らし、Reserved Concurrency は同時実行数を予約・制限する',
                    isCorrect: true,
                    explanation:
                        'Provisioned Concurrency（実行環境を事前準備してコールドスタート影響を減らす仕組み）と Reserved Concurrency（関数ごとの同時実行数を予約・制限する仕組み）は目的が異なります。',
                },
                {
                    text: 'Provisioned Concurrency は IAM 権限、Reserved Concurrency は環境変数を管理する設定である',
                    isCorrect: false,
                    explanation:
                        'どちらも IAM 権限や環境変数を管理する設定ではありません。Lambda の実行環境や同時実行に関する設定です。',
                },
                {
                    text: 'Reserved Concurrency を設定すれば、必ずコールドスタートが完全になくなる',
                    isCorrect: false,
                    explanation:
                        'Reserved Concurrency は実行枠を制御する設定であり、実行環境を事前準備するものではありません。コールドスタート対策には Provisioned Concurrency（実行環境を事前準備してコールドスタート影響を減らす仕組み）などを検討します。',
                },
                {
                    text: 'Provisioned Concurrency は同時実行数と無関係で、コストも一切発生しない',
                    isCorrect: false,
                    explanation:
                        'Provisioned Concurrency（実行環境を事前準備してコールドスタート影響を減らす仕組み）は事前準備する実行環境数に関係し、待機中にもコストが発生します。必要量を見積もる必要があります。',
                },
            ],
            explanation:
                '名前が似ていますが、Provisioned Concurrency は低レイテンシ対策、Reserved Concurrency は枠の予約・制限という役割です。両方を組み合わせる場面もあります。',
        },
    {
            question:
                'SQS キューに大量のメッセージが溜まり、Lambda が一気に並列処理した結果、下流の RDS が接続数不足で不安定になりました。最も適切な対策はどれですか?',
            options: [
                {
                    text: 'イベントソースマッピングの最大同時実行数や Reserved Concurrency で並列度を制御し、RDS の許容量に合わせる',
                    isCorrect: true,
                    explanation:
                        'SQS + Lambda はキュー量に応じて並列度が増えることがあります。一方で、下流 RDS が耐えられないことがあります。イベントソースマッピング側の最大同時実行数や Reserved Concurrency を使って流量を制御します。',
                },
                {
                    text: 'SQS にメッセージが溜まったら、Lambda の同時実行数を無制限に増やす',
                    isCorrect: false,
                    explanation:
                        '同時実行数（同時に動作している Lambda 実行環境数）を増やすと処理は速くなる可能性がありますが、下流サービスを壊すことがあります。下流の許容量に合わせた制御が必要です。',
                },
                {
                    text: 'RDS が不安定な場合、SQS の可視性タイムアウトを0秒にする',
                    isCorrect: false,
                    explanation:
                        '可視性タイムアウト（処理中メッセージを一時的に他処理から見えなくする時間）を短すぎる値にすると、処理中メッセージが再配信されやすくなり、重複処理が増える可能性があります。',
                },
                {
                    text: 'SQS 連携では Lambda の並列度は常に1固定なので、制御は不要である',
                    isCorrect: false,
                    explanation:
                        'SQS 連携ではメッセージ量に応じて Lambda の並列度が増えることがあります。必要に応じて制限します。',
                },
            ],
            explanation:
                'キューで非同期化しても、下流サービスの許容量を無視してよいわけではありません。キュー滞留を減らすことと下流保護のバランスが重要です。',
        },
    {
            question:
                'Lambda の Throttles が増えていますが、意図的に Reserved Concurrency を低く設定して外部 API への呼び出し量を抑えています。この状況の理解として最も適切なものはどれですか?',
            options: [
                {
                    text: 'Throttles は常に悪ではなく、下流保護のための意図した制限として発生する場合もある',
                    isCorrect: true,
                    explanation:
                        'Throttles（同時実行数上限などにより実行が抑制・拒否された回数）は障害の兆候になることもありますが、下流サービス保護のための意図的なスロットリング（intentional throttling）として設計される場合もあります。設計意図と実際の影響を確認します。',
                },
                {
                    text: 'Throttles が1件でも出たら、必ず Reserved Concurrency を削除すべきである',
                    isCorrect: false,
                    explanation:
                        '意図した制限なら削除すべきとは限りません。呼び出し元の再試行、遅延、DLQ、利用者影響を見て判断します。',
                },
                {
                    text: 'Throttles は AccessDenied と同じ意味なので、IAM 権限を広げれば解消する',
                    isCorrect: false,
                    explanation:
                        'Throttles は同時実行などの制限による抑制であり、AccessDenied は権限不足です。切り分けが必要です。',
                },
                {
                    text: 'Reserved Concurrency を低くすると、外部 API のレート制限は必ず無視できる',
                    isCorrect: false,
                    explanation:
                        'Reserved Concurrency は Lambda 側の並列度制御に役立ちますが、外部 API のレート制限（一定時間あたりの呼び出し上限）やリトライ設計も合わせて考える必要があります。',
                },
            ],
            explanation:
                'スロットリングは原因と意図を見て判断します。意図しない Throttles は問題ですが、下流保護のための意図的なスロットリング（intentional throttling）として設計されることもあります。',
        },
    {
            question:
                '重要な決済処理 Lambda に Reserved Concurrency を設定したところ、他の関数に使える同時実行枠が減りました。設計上の注意点として最も適切なものはどれですか?',
            options: [
                {
                    text: 'Reserved Concurrency はアカウント全体の同時実行枠から予約するため、他関数への影響も考えて配分する',
                    isCorrect: true,
                    explanation:
                        'Reserved Concurrency は重要関数の枠を守れますが、リージョン単位で管理されるアカウント全体の同時実行枠から確保されます。過剰に予約すると他関数が使える枠が減る可能性があります。',
                },
                {
                    text: 'Reserved Concurrency はアカウント上限とは無関係に無限に設定できる',
                    isCorrect: false,
                    explanation:
                        'Reserved Concurrency はリージョン単位で管理されるアカウントの同時実行枠と関係します。無限に設定できるわけではありません。',
                },
                {
                    text: 'Reserved Concurrency を設定すると、他関数の実行枠は必ず増える',
                    isCorrect: false,
                    explanation:
                        '特定関数に枠を予約すると、他関数が使える未予約枠は減る場合があります。',
                },
                {
                    text: '重要関数には必ずアカウント上限すべてを予約するのが最小構成である',
                    isCorrect: false,
                    explanation:
                        'すべてを予約すると他関数が動けなくなる可能性があります。重要度、流量、上限を見て配分します。',
                },
            ],
            explanation:
                'Reserved Concurrency は保護にも制限にも使える強力な設定です。関数単体ではなく、アカウント全体の配分として設計します。',
        },
    {
            question:
                '低レイテンシが必要な API Lambda に Provisioned Concurrency を設定したいです。運用上の判断として最も適切なものはどれですか?',
            options: [
                {
                    text: '必要な時間帯と同時実行数を見積もり、コストと低レイテンシ要件のバランスで設定する',
                    isCorrect: true,
                    explanation:
                        'Provisioned Concurrency（実行環境を事前準備してコールドスタート影響を減らす仕組み）はコールドスタートの影響を減らせますが、待機中の実行環境にもコストがかかります。アクセス予測、p95 / p99、必要な同時実行数を見て調整します。',
                },
                {
                    text: '常に最大値を設定すれば、コストも最小になる',
                    isCorrect: false,
                    explanation:
                        'Provisioned Concurrency（実行環境を事前準備してコールドスタート影響を減らす仕組み）は設定した分のコストが発生します。過剰設定はコスト増につながります。',
                },
                {
                    text: 'Provisioned Concurrency を設定すると、下流 RDS の接続数上限も自動的に増える',
                    isCorrect: false,
                    explanation:
                        'Provisioned Concurrency（実行環境を事前準備してコールドスタート影響を減らす仕組み）は Lambda 実行環境の事前準備に関する設定です。RDS の接続数上限は別に考える必要があります。',
                },
                {
                    text: 'Provisioned Concurrency はスロットリングを完全に防ぐための IAM 設定である',
                    isCorrect: false,
                    explanation:
                        'Provisioned Concurrency（実行環境を事前準備してコールドスタート影響を減らす仕組み）は IAM 設定ではありません。Provisioned Concurrency を超える流量では、通常実行環境側でコールドスタートやスロットリングが発生する可能性があります。',
                },
            ],
            explanation:
                'Provisioned Concurrency（実行環境を事前準備してコールドスタート影響を減らす仕組み）は性能要件とコストのトレードオフです。低レイテンシ要件がある API で有効ですが、過剰設定や下流への影響に注意します。',
        },
    {
            question:
                'SQS 連携の Lambda で、キュー滞留を早く解消したい一方、外部 API には1秒あたりの呼び出し上限があります。最も適切な設計はどれですか?',
            options: [
                {
                    text: '外部 API のレート制限に合わせて Lambda の並列度やバッチ処理、リトライ間隔を調整する',
                    isCorrect: true,
                    explanation:
                        'キュー滞留（処理待ちメッセージ蓄積）を減らすために並列度を上げすぎると、外部 API のレート制限（一定時間あたりの呼び出し上限）に引っかかる可能性があります。並列度、バッチサイズ、リトライ、バックオフ（失敗時に待機時間を徐々に伸ばす再試行制御）を合わせて設計します。',
                },
                {
                    text: '外部 API の制限を無視して、Lambda の同時実行数をできるだけ増やす',
                    isCorrect: false,
                    explanation:
                        '外部 API の制限を超えると、エラーやリトライ増加、アカウント停止などにつながる可能性があります。',
                },
                {
                    text: 'SQS を使うと、外部 API のレート制限は自動的に無効になる',
                    isCorrect: false,
                    explanation:
                        'SQS はメッセージをためる仕組みですが、外部 API のレート制限（一定時間あたりの呼び出し上限）を無効にするものではありません。',
                },
                {
                    text: 'キュー滞留がある場合、DLQ のメッセージをすべて削除すれば処理能力が上がる',
                    isCorrect: false,
                    explanation:
                        'DLQ 削除は処理能力向上にはなりません。原因調査と安全な再処理が必要です。',
                },
            ],
            explanation:
                'SQS は流量を平準化できますが、処理側の速度は下流制限に合わせる必要があります。過剰並列はリトライ嵐やコスト増につながります。',
        },
    {
            question:
                'Lambda の同時実行制御を設計する際、下流サービス保護の観点で最も適切な考え方はどれですか?',
            options: [
                {
                    text: 'Lambda の最大処理能力ではなく、RDS、外部 API、SaaS、キューなど下流が安全に受けられる量に合わせて制御する',
                    isCorrect: true,
                    explanation:
                        'Lambda は大きくスケールできますが、下流サービスが同じだけ耐えられるとは限りません。下流の接続数、レート制限（一定時間あたりの呼び出し上限）、処理能力に合わせて同時実行数（同時に動作している Lambda 実行環境数）や流量を設計します。',
                },
                {
                    text: 'Lambda がスケールできるなら、下流サービスの制限は無視してよい',
                    isCorrect: false,
                    explanation:
                        '下流制限を無視すると、DB 接続枯渇、外部 API レート制限（一定時間あたりの呼び出し上限）、リトライ増加などが起きます。',
                },
                {
                    text: '下流サービス保護は IAM 権限だけで実現する',
                    isCorrect: false,
                    explanation:
                        'IAM はアクセス許可の制御には重要ですが、リクエスト量や同時実行数の制御とは別です。',
                },
                {
                    text: '同時実行制御はログ保存期間だけで決まる',
                    isCorrect: false,
                    explanation:
                        'ログ保存期間は監査や調査の設定です。同時実行制御は Reserved Concurrency、イベントソース設定、上限設計などで行います。',
                },
            ],
            explanation:
                'サーバーレス設計では、Lambda のスケールをそのまま下流へ流すと障害を増幅することがあります。速く処理することと安全に処理することのバランスを取ります。',
        },
    {
            question:
                'Lambda の Throttles アラームが発報しました。原因を切り分けるために見るべき情報として最も適切なものはどれですか?',
            options: [
                {
                    text: 'ConcurrentExecutions、Reserved Concurrency、アカウント上限、Provisioned Concurrency 設定、呼び出し元の流量と再試行',
                    isCorrect: true,
                    explanation:
                        'Throttles（同時実行数上限などにより実行が抑制・拒否された回数）の原因は、関数の Reserved Concurrency、リージョン単位のアカウント全体上限、急激な流入、Provisioned Concurrency（実行環境を事前準備してコールドスタート影響を減らす仕組み）との関係など複数あります。呼び出し元の再試行も確認します。',
                },
                {
                    text: 'Throttles は常にコードの構文エラーなので、ソースコードだけ見ればよい',
                    isCorrect: false,
                    explanation:
                        'Throttles（同時実行数上限などにより実行が抑制・拒否された回数）は同時実行制限などによる抑制です。コード例外とは別に切り分けます。',
                },
                {
                    text: '関数の説明欄を確認すれば、アカウント同時実行上限が分かる',
                    isCorrect: false,
                    explanation:
                        '説明欄では実際の上限やメトリクスは分かりません。CloudWatch Metrics や Lambda の設定を確認します。',
                },
                {
                    text: 'Throttles が出た場合、必ず API Gateway を削除する',
                    isCorrect: false,
                    explanation:
                        'API Gateway が原因とは限りません。流量、同時実行上限、関数設定、イベントソースを確認します。',
                },
            ],
            explanation:
                'Throttles は、どの上限に当たったのかを特定することが重要です。Lambda 側の設定だけでなく、呼び出し元の再試行や流量も確認します。',
        },
    {
            question:
                'Lambda の本番 API で、デプロイ後にすぐ問題が起きた場合に素早く戻せるようにしたいです。バージョンとエイリアスの使い方として最も適切なものはどれですか?',
            options: [
                {
                    text: '発行済みバージョン（コードと設定を固定したスナップショット）に対して `prod` などのエイリアスを向け、問題時はエイリアスを前のバージョンへ戻す',
                    isCorrect: true,
                    explanation:
                        'Lambda の発行済みバージョン（コードと設定を固定したスナップショット）を使います。エイリアス（特定バージョンを指す別名）を使うと、呼び出し先を安定した名前に保ったまま、向き先バージョンを切り替えられます。',
                },
                {
                    text: '`$LATEST` だけを本番から直接呼び続ける',
                    isCorrect: false,
                    explanation:
                        '`$LATEST`（未発行の最新編集状態）は最新の未発行状態を指します。本番運用では、発行済みバージョン（コードと設定を固定したスナップショット）とエイリアス（特定バージョンを指す別名）を使う方がロールバック（安定版へ切り戻すこと）しやすくなります。',
                },
                {
                    text: '関数名を変更すれば、自動的に過去バージョンへロールバックされる',
                    isCorrect: false,
                    explanation:
                        '関数名の変更はロールバック（安定版へ切り戻すこと）ではありません。どのバージョンを本番が呼ぶかを管理する必要があります。',
                },
                {
                    text: 'エイリアスを使うと、IAM 権限設計は不要になる',
                    isCorrect: false,
                    explanation:
                        'エイリアス（特定バージョンを指す別名）は呼び出し先バージョンの管理に役立ちますが、IAM 権限設計は別途必要です。',
                },
            ],
            explanation:
                'Lambda の本番デプロイでは、`$LATEST`（未発行の最新編集状態）ではなく発行済みバージョン（コードと設定を固定したスナップショット）とエイリアス（特定バージョンを指す別名）を使うと、切り戻しや段階的リリース（徐々に本番トラフィックを切り替える運用）がしやすくなります。',
        },
    {
            question:
                'Lambda の新バージョンを本番へ出す際、最初は少量のトラフィックだけ新バージョンへ流し、問題がなければ徐々に増やしたいです。最も適切なデプロイ方式はどれですか?',
            options: [
                {
                    text: 'Canary または Linear デプロイを使い、エイリアスのトラフィック配分を段階的に切り替える',
                    isCorrect: true,
                    explanation:
                        'Canary デプロイ（少量トラフィックだけ先に流して段階確認する方式）、Linear デプロイ（一定割合ずつ段階的に切り替える方式）です。Lambda エイリアス（特定バージョンを指す別名）の重み付きトラフィック配分（新旧バージョンへ割合指定で振り分ける仕組み）で実現できます。',
                },
                {
                    text: '常に100%のトラフィックを一瞬で新バージョンへ切り替える',
                    isCorrect: false,
                    explanation:
                        '一括切り替えは単純ですが、問題があった場合の影響が大きくなります。重要な本番処理では段階的リリース（徐々に本番トラフィックを切り替える運用）を検討します。',
                },
                {
                    text: '新バージョンをデプロイしたら、古いバージョンを即座にすべて削除する',
                    isCorrect: false,
                    explanation:
                        '古いバージョンをすぐ削除すると、問題発生時に戻しにくくなります。ロールバック（安定版へ切り戻すこと）方針を考えて管理します。',
                },
                {
                    text: 'Canary デプロイを使うと、テストや監視は不要になる',
                    isCorrect: false,
                    explanation:
                        'Canary デプロイ（少量トラフィックだけ先に流して段階確認する方式）は影響範囲を抑える手段ですが、メトリクス監視やエラー検知がなければ問題に気づけません。',
                },
            ],
            explanation:
                '段階的デプロイでは、新旧バージョンへ流す割合と監視条件が重要です。少量リリース、確認、拡大、問題時の停止・ロールバック（安定版へ切り戻すこと）まで設計します。',
        },
    {
            question:
                'Lambda のデプロイで CodeDeploy を使う理由として最も適切なものはどれですか?',
            options: [
                {
                    text: 'Lambda エイリアスを使った段階的デプロイや、アラーム連動の自動ロールバックを管理しやすくするため',
                    isCorrect: true,
                    explanation:
                        'AWS CodeDeploy は Lambda エイリアス（特定バージョンを指す別名）のトラフィック切り替え（traffic shifting）を段階的に管理でき、CloudWatch Alarms（メトリクス異常時に通知や自動処理を行う監視機能）と組み合わせて異常時に自動ロールバック（安定版へ切り戻すこと）できます。',
                },
                {
                    text: 'CodeDeploy を使えば、Lambda のコードレビューが自動的に完了する',
                    isCorrect: false,
                    explanation:
                        'CodeDeploy はデプロイを支援するサービスです。コードレビューや設計判断を自動で完了するものではありません。',
                },
                {
                    text: 'CodeDeploy を使うと、Lambda の実行時間上限がなくなる',
                    isCorrect: false,
                    explanation:
                        'CodeDeploy はデプロイ管理のためのサービスです。Lambda の最大実行時間を延長するものではありません。',
                },
                {
                    text: 'CodeDeploy は S3 バケットの暗号化専用サービスである',
                    isCorrect: false,
                    explanation:
                        'CodeDeploy はアプリケーションのデプロイを管理するサービスです。S3 暗号化専用サービスではありません。',
                },
            ],
            explanation:
                'CodeDeploy 連携は、Lambda の段階的リリース（徐々に本番トラフィックを切り替える運用）と自動ロールバック（安定版へ切り戻すこと）を運用しやすくするために有効です。特に本番 API や重要処理では監視とセットで考えます。',
        },
    {
            question:
                'Canary デプロイ中に新バージョンのエラー率が上がりました。最も適切な対応はどれですか?',
            options: [
                {
                    text: 'アラームで異常を検知し、新バージョンへのトラフィック拡大を止め、エイリアスを安定版へ戻す',
                    isCorrect: true,
                    explanation:
                        'Canary デプロイ（少量トラフィックだけ先に流して段階確認する方式）では、少量トラフィックで異常を検知したら拡大を止めてロールバック（安定版へ切り戻すこと）します。CloudWatch Alarms（メトリクス異常時に通知や自動処理を行う監視機能）と CodeDeploy を連携すると自動化できます。',
                },
                {
                    text: 'エラー率が上がっても、必ず100%まで切り替える',
                    isCorrect: false,
                    explanation:
                        '段階的デプロイの目的は問題を小さい影響範囲で検知することです。異常があれば停止やロールバック（安定版へ切り戻すこと）を検討します。',
                },
                {
                    text: 'アラームを無効化すれば、デプロイは成功したことになる',
                    isCorrect: false,
                    explanation:
                        'アラームを無効化しても問題が消えるわけではありません。障害検知が遅れるだけです。',
                },
                {
                    text: '新バージョンのログを削除すれば、ロールバックは不要になる',
                    isCorrect: false,
                    explanation:
                        'ログ削除は障害対応ではありません。原因調査と安全な切り戻しが必要です。',
                },
            ],
            explanation:
                'ロールバック（安定版へ切り戻すこと）は「戻せる仕組み」だけでなく「何を条件に戻すか」が重要です。エラー率、Duration、Throttles、業務メトリクス（注文成功率、決済成功率など）などを監視します。',
        },
    {
            question:
                'Lambda のバージョンを発行した後に、環境変数を変更しました。バージョン管理の理解として最も適切なものはどれですか?',
            options: [
                {
                    text: '発行済みバージョン（コードと設定を固定したスナップショット）は基本的に固定されるため、変更を反映したい場合は新しいバージョンを発行してエイリアスを切り替える',
                    isCorrect: true,
                    explanation:
                        'Lambda の発行済みバージョン（コードと設定を固定したスナップショット）は、コードと一部設定を固定したスナップショットです。設定変更を本番へ反映する場合は、新しいバージョンを発行し、エイリアス（特定バージョンを指す別名）を更新する運用が自然です。',
                },
                {
                    text: '発行済みバージョンの環境変数は、`$LATEST` を変更すると必ず自動的に書き換わる',
                    isCorrect: false,
                    explanation:
                        '発行済みバージョン（コードと設定を固定したスナップショット）は `$LATEST`（未発行の最新編集状態）の変更に自動追従するものではありません。',
                },
                {
                    text: '環境変数はバージョン管理と無関係なので、どのバージョンでも常に同じ値になる',
                    isCorrect: false,
                    explanation:
                        'Lambda のバージョンには設定も関係します。どの値がどのバージョンに反映されているかを管理する必要があります。',
                },
                {
                    text: '環境変数を変更すると、過去のすべてのログも自動的に書き換わる',
                    isCorrect: false,
                    explanation:
                        '環境変数を変更しても過去の CloudWatch Logs は書き換わりません。',
                },
            ],
            explanation:
                'Lambda のバージョン管理では、コードだけでなく設定も含めて考えます。環境ごとの設定差分をどう管理するかが重要です。',
        },
    {
            question:
                'dev / stg / prod の各環境で Lambda を運用します。環境ごとの設定管理として最も適切なものはどれですか?',
            options: [
                {
                    text: '環境ごとにエイリアス、環境変数、Secrets Manager / Parameter Store の値、権限を明確に分けて管理する',
                    isCorrect: true,
                    explanation:
                        '環境ごとに接続先、認証情報、権限、ログ設定が異なることがあります。エイリアス（特定バージョンを指す別名）や Parameter Store（設定値や機密値を管理するサービス）などを使い、dev / stg / prod の差分を明確にします。',
                },
                {
                    text: 'すべての環境で同じ DB パスワードと同じ IAM ロールを共有する',
                    isCorrect: false,
                    explanation:
                        '環境間で機密情報や強い権限を共有すると、誤接続や影響範囲拡大のリスクがあります。',
                },
                {
                    text: '本番の設定値を開発環境のログに出しておく',
                    isCorrect: false,
                    explanation:
                        '機密情報をログに出すのは危険です。環境ごとの設定値は安全に管理します。',
                },
                {
                    text: '環境名を関数名に含めれば、設定や権限の管理は不要になる',
                    isCorrect: false,
                    explanation:
                        '関数名で識別することは有用ですが、設定値や権限管理の代わりにはなりません。',
                },
            ],
            explanation:
                '環境ごとの設定管理では、名前だけでなく接続先、権限、機密情報、デプロイ先を分けます。誤って本番リソースへ接続しない設計が重要です。',
        },
    {
            question:
                'Lambda のロールバック（安定版へ切り戻すこと）を素早く行うために、デプロイ前に準備しておくべきこととして最も適切なものはどれですか?',
            options: [
                {
                    text: '安定版のバージョンとエイリアス、監視アラーム、切り戻し手順を事前に用意する',
                    isCorrect: true,
                    explanation:
                        'ロールバック（安定版へ切り戻すこと）は障害発生後に考えるのではなく、デプロイ前に準備します。どのバージョンへ戻すか、何を見て判断するか、誰が実行するかを決めます。',
                },
                {
                    text: '古いバージョンをすべて削除しておく',
                    isCorrect: false,
                    explanation:
                        '古い安定版を削除すると、問題時に戻しにくくなります。不要な古いバージョン整理とロールバック（安定版へ切り戻すこと）可能性のバランスを取ります。',
                },
                {
                    text: 'アラームをすべて無効化しておく',
                    isCorrect: false,
                    explanation:
                        'アラームを無効化すると異常検知が遅れます。デプロイ時こそ監視が重要です。',
                },
                {
                    text: 'ロールバックは AWS が常に自動判断するため、手順は不要である',
                    isCorrect: false,
                    explanation:
                        'CodeDeploy とアラームで自動化できる場合はありますが、設計と設定、手動時の手順は必要です。',
                },
            ],
            explanation:
                '安全なデプロイには、リリース手順と同じくらい切り戻し手順が重要です。バージョン、エイリアス（特定バージョンを指す別名）、監視、責任者を明確にします。',
        },
    {
            question:
                'Lambda の新バージョンで DynamoDB への書き込み形式を変更します。コードだけロールバック（安定版へ切り戻すこと）しても、すでに書かれたデータ形式が戻らない可能性があります。最も適切な考え方はどれですか?',
            options: [
                {
                    text: 'コードのロールバックだけでなく、データ互換性やマイグレーション、前後バージョンの共存（backward compatibility）を設計する',
                    isCorrect: true,
                    explanation:
                        'ロールバック（安定版へ切り戻すこと）はコードだけの問題ではありません。データ形式、スキーマ、イベント形式が変わる場合、新旧バージョンが一時的に共存できるかを考えます。',
                },
                {
                    text: 'Lambda のエイリアスを戻せば、DynamoDB のデータも必ず自動で元に戻る',
                    isCorrect: false,
                    explanation:
                        'エイリアス（特定バージョンを指す別名）を戻しても、すでに書き込まれたデータは自動で戻りません。データ互換性や補正処理が必要な場合があります。',
                },
                {
                    text: 'データ形式変更がある場合でも、監視や検証は不要である',
                    isCorrect: false,
                    explanation:
                        'データ形式変更は影響が大きいため、検証、監視、ロールバック（安定版へ切り戻すこと）方針が重要です。',
                },
                {
                    text: '新バージョンを出したら、旧バージョンが読めない形式に必ず即時変更する',
                    isCorrect: false,
                    explanation:
                        '旧バージョンとの互換性を壊すと、段階的デプロイやロールバック（安定版へ切り戻すこと）が難しくなります。',
                },
            ],
            explanation:
                'デプロイ・ロールバック（安定版へ切り戻すこと）では、コード、設定、データ、イベント形式をまとめて考えます。後方互換性（backward compatibility）を保つ設計は段階的リリース（徐々に本番トラフィックを切り替える運用）で重要です。',
        },
    {
            question:
                'Lambda のエイリアス（特定バージョンを指す別名）を使って本番とステージングを管理しています。`prod` エイリアスに Provisioned Concurrency を設定しています。デプロイ時の注意点として最も適切なものはどれですか?',
            options: [
                {
                    text: 'Provisioned Concurrency はエイリアスやバージョンに紐づくため、切り替え先バージョンの事前準備とコストを確認する',
                    isCorrect: true,
                    explanation:
                        'Provisioned Concurrency（実行環境を事前準備してコールドスタート影響を減らす仕組み）はエイリアス（特定バージョンを指す別名）やバージョンに関連して設定します。切り替え時に期待した低レイテンシが維持されるか確認が必要です。',
                },
                {
                    text: 'エイリアスを使うと Provisioned Concurrency のコストは必ずゼロになる',
                    isCorrect: false,
                    explanation:
                        'Provisioned Concurrency は待機中にもコストがかかります。エイリアス（特定バージョンを指す別名）を使っても無料になるわけではありません。',
                },
                {
                    text: 'Provisioned Concurrency は `$LATEST` にだけ設定でき、バージョンやエイリアスには関係しない',
                    isCorrect: false,
                    explanation:
                        'Provisioned Concurrency はバージョンやエイリアス（特定バージョンを指す別名）と組み合わせて使う運用が一般的です。`$LATEST`（未発行の最新編集状態）へ直接本番を向ける設計は慎重に扱います。',
                },
                {
                    text: 'エイリアスを切り替えると、すべての CloudWatch Logs が削除される',
                    isCorrect: false,
                    explanation:
                        'エイリアス（特定バージョンを指す別名）を切り替えても過去の CloudWatch Logs が自動削除されるわけではありません。',
                },
            ],
            explanation:
                'バージョン、エイリアス（特定バージョンを指す別名）、Provisioned Concurrency を組み合わせる場合、どのバージョンにどれだけ事前準備するかが性能とコストに影響します。',
        },
    {
            question:
                'Lambda のデプロイで、コード変更と環境変数変更を別々に手作業で行っています。たまにコードと設定の組み合わせがずれて障害になります。改善として最も適切なものはどれですか?',
            options: [
                {
                    text: 'IaC や CI/CD でコード・設定・権限・エイリアス更新を一貫して管理する',
                    isCorrect: true,
                    explanation:
                        'IaC（Infrastructure as Code：インフラ設定をコードとして管理する考え方）や CI/CD（ビルド・テスト・デプロイを自動化する仕組み）を使うと、コード、環境変数、IAM、エイリアス（特定バージョンを指す別名）更新を再現性のある形で管理できます。',
                },
                {
                    text: '手作業を増やせば、設定ずれは必ず減る',
                    isCorrect: false,
                    explanation:
                        '手作業が多いほど設定漏れや手順ミスが起きやすくなります。自動化とレビュー可能な設定管理が有効です。',
                },
                {
                    text: '環境変数変更は本番でだけ直接行い、記録しない',
                    isCorrect: false,
                    explanation:
                        '本番だけ手作業で変更すると、差分が追えず再現性が落ちます。変更履歴を管理します。',
                },
                {
                    text: 'CI/CD を使うと、ロールバックや監視は不要になる',
                    isCorrect: false,
                    explanation:
                        'CI/CD（ビルド・テスト・デプロイを自動化する仕組み）はデプロイを安定化しますが、ロールバック（安定版へ切り戻すこと）設計や監視は引き続き必要です。',
                },
            ],
            explanation:
                'デプロイ事故はコードだけでなく設定差分でも起きます。IaC、CI/CD（ビルド・テスト・デプロイを自動化する仕組み）、レビュー、環境ごとの設定管理を組み合わせると安全性が上がります。',
        },
    {
            question:
                'Lambda のメモリ設定を増やすと1回あたりの単価は上がりますが、処理時間が大きく短くなる可能性があります。コスト最適化の考え方として最も適切なものはどれですか?',
            options: [
                {
                    text: 'メモリ量、実行時間、呼び出し回数を測定し、総コストと性能のバランスがよい設定を探す',
                    isCorrect: true,
                    explanation:
                        'Lambda ではメモリを増やすと CPU などの割り当てリソースも増えます。単価は上がっても Duration（Lambda 実行時間）が短くなり、総コストが下がる場合があります。',
                },
                {
                    text: 'メモリは常に最小値にすれば、必ず最も安くなる',
                    isCorrect: false,
                    explanation:
                        'メモリが少なすぎると処理時間が長くなり、結果的にコストが上がる場合があります。性能劣化やタイムアウトにも注意が必要です。',
                },
                {
                    text: 'メモリは常に最大値にすれば、必ず最も安くなる',
                    isCorrect: false,
                    explanation:
                        '最大メモリで処理が速くなっても、単価上昇に見合うとは限りません。実測して判断します。',
                },
                {
                    text: 'Lambda のコストは関数名だけで決まる',
                    isCorrect: false,
                    explanation:
                        '関数名はコストを決めません。Duration（Lambda 実行時間）、メモリ、呼び出し回数、Provisioned Concurrency（実行環境を事前準備してコールドスタート影響を減らす仕組み）、ログ量などが関係します。',
                },
            ],
            explanation:
                'Lambda のコスト最適化では、安い設定を推測で決めるのではなく、Duration（Lambda 実行時間）とメモリ設定を実測します。性能とコストのバランスを見ることが重要です。',
        },
    {
            question:
                '低レイテンシ API のために Provisioned Concurrency を常時多めに設定しています。アクセスは日中だけ多く、夜間はほぼありません。コスト判断として最も適切なものはどれですか?',
            options: [
                {
                    text: '必要な時間帯と必要数に合わせて Provisioned Concurrency を調整し、低レイテンシ要件と待機コストのバランスを見る',
                    isCorrect: true,
                    explanation:
                        'Provisioned Concurrency（実行環境を事前準備してコールドスタート影響を減らす仕組み）は待機中にもコストがかかります。アクセスがない時間帯でも待機環境分のコストが発生するため、過剰に設定すると無駄になりやすいです。',
                },
                {
                    text: 'Provisioned Concurrency は無料なので、常に最大値にしてよい',
                    isCorrect: false,
                    explanation:
                        'Provisioned Concurrency は設定した実行環境に対してコストが発生します。必要量を見積もる必要があります。',
                },
                {
                    text: '夜間アクセスが少なくても、必ず日中と同じ数を維持しなければならない',
                    isCorrect: false,
                    explanation:
                        '低レイテンシ要件やアクセス予測に応じて時間帯ごとに調整できる場合があります。',
                },
                {
                    text: 'Provisioned Concurrency を設定すると、ログや実行時間のコストは一切発生しなくなる',
                    isCorrect: false,
                    explanation:
                        'Provisioned Concurrency はコールドスタート対策であり、実行やログに関するコストを消すものではありません。',
                },
            ],
            explanation:
                'Provisioned Concurrency（実行環境を事前準備してコールドスタート影響を減らす仕組み）は性能改善に有効ですが、常時待機コストがあります。アクセスパターン、p95 / p99（遅い側 95% / 99% 地点の応答時間指標）、ビジネス要件を見て設定します。',
        },
    {
            question:
                'Lambda で詳細ログを大量に出力しています。障害調査には便利ですが、CloudWatch Logs（ログ保存・検索サービス）の保存量と取り込み量が増えています。コスト最適化として最も適切なものはどれですか?',
            options: [
                {
                    text: 'ログレベル、出力項目、保存期間を見直し、必要な情報を残しつつ過剰なログを減らす',
                    isCorrect: true,
                    explanation:
                        'CloudWatch Logs（ログ保存・検索サービス）はログの取り込み量や保存量がコストに影響します。機密情報を出さず、調査に必要な構造化ログ（検索・分析しやすい形式のログ）と保存期間を設計します。',
                },
                {
                    text: 'コスト削減のため、本番ログをすべて無効にする',
                    isCorrect: false,
                    explanation:
                        'ログをすべて消すと障害調査や監査が難しくなります。必要な情報を残しつつ、過剰な出力を減らします。',
                },
                {
                    text: 'ログを増やすほど、CloudWatch Logs のコストは必ず下がる',
                    isCorrect: false,
                    explanation:
                        '一般にログ量が増えると、取り込みや保存のコストが増える可能性があります。',
                },
                {
                    text: '機密情報をログに出しておけば、調査が楽になりセキュリティ上も安全である',
                    isCorrect: false,
                    explanation:
                        '機密情報をログに出すのは危険です。必要な識別子や状態だけを記録します。',
                },
            ],
            explanation:
                'ログは運用に必要ですが、無制限に出すものではありません。ログ量、保存期間、検索性、セキュリティ、コストのバランスを取ります。',
        },
    {
            question:
                '外部 API 障害時に Lambda が何度もリトライし、さらに呼び出し元も再試行するため、実行回数と外部 API 呼び出し数が急増しました。コスト面で最も適切な見直しはどれですか?',
            options: [
                {
                    text: 'リトライ回数、バックオフ、タイムアウト、冪等性、DLQ / Destination を見直し、過剰実行を抑える',
                    isCorrect: true,
                    explanation:
                        'リトライは信頼性向上に役立ちますが、多層リトライは実行回数、外部 API 呼び出し、ログ量を増やします。バックオフ（失敗時に待機時間を徐々に伸ばす再試行制御）、DLQ（Dead Letter Queue：繰り返し失敗したイベントを退避するキュー）、Destination（非同期実行結果を別サービスへ送る仕組み）を設計します。',
                },
                {
                    text: 'リトライは多いほど常に安くなるため、回数を無制限に増やす',
                    isCorrect: false,
                    explanation:
                        '過剰なリトライはコスト増、下流サービス負荷、重複処理につながります。',
                },
                {
                    text: '外部 API が落ちている間も、待ち時間なしで全件即時再試行し続ける',
                    isCorrect: false,
                    explanation:
                        '即時再試行を続けるとリトライ嵐になり、コストと負荷が増えます。バックオフや停止条件が必要です。',
                },
                {
                    text: 'DLQ を使えば、リトライや実行回数の設計は不要になる',
                    isCorrect: false,
                    explanation:
                        'DLQ（Dead Letter Queue：繰り返し失敗したイベントを退避するキュー）は失敗イベントを退避しますが、リトライ設計や冪等性の代わりにはなりません。',
                },
            ],
            explanation:
                'コスト最適化では、正常時だけでなく障害時の再試行コストも見ます。リトライ設計が悪いと、障害時に実行回数とログ量が急増します。',
        },
    {
            question:
                '毎日数時間かかる大規模データ処理を Lambda で細かく分割して実行しています。状態管理や再試行制御のために複雑な仕組みが増え、コストも読みにくくなっています。最も適切な判断はどれですか?',
            options: [
                {
                    text: 'AWS Batch、ECS / Fargate、Step Functions なども含め、処理時間、運用、再試行、コストを比較する',
                    isCorrect: true,
                    explanation:
                        '長時間・大規模処理を無理に Lambda へ寄せると、分割制御や状態管理が複雑になり、コストも増えることがあります。AWS Batch（大規模バッチ処理を管理するサービス）、ECS / Fargate（コンテナ実行基盤サービス）、Step Functions（ワークフロー管理サービス）などと比較します。',
                },
                {
                    text: '長時間処理でも、必ず Lambda が最安で最も単純である',
                    isCorrect: false,
                    explanation:
                        'Lambda は短時間イベント処理に強い一方、長時間・高頻度・大規模処理では他サービスの方が適する場合があります。',
                },
                {
                    text: 'Step Functions や Batch はコストが常にゼロなので、比較は不要である',
                    isCorrect: false,
                    explanation:
                        'どのサービスにも料金体系があります。状態遷移数（Step Functions 内のステップ実行回数）、Duration（Lambda 実行時間）、コンピュート利用量などを見て比較します。',
                },
                {
                    text: '処理が複雑でも、CloudWatch Logs を削除すればアーキテクチャの複雑さは解消する',
                    isCorrect: false,
                    explanation:
                        'ログ削除は設計複雑性を解消しません。処理分割、状態管理、再試行、運用負荷を見直します。',
                },
            ],
            explanation:
                'コストは単価だけでなく、運用複雑性や失敗時の再処理も含めて考えます。Lambda が適切か、Step Functions（ワークフロー管理サービス）/ ECS / Fargate（コンテナ実行基盤サービス）/ AWS Batch（大規模バッチ処理を管理するサービス）が適切かは要件次第です。',
        },
    {
            question:
                'Lambda で1秒未満の軽い処理を月に数回だけ実行します。EC2 を常時起動する案と比較しています。コスト判断として最も適切なものはどれですか?',
            options: [
                {
                    text: '低頻度・短時間処理では、実行時中心に課金される Lambda が有利になる場合がある',
                    isCorrect: true,
                    explanation:
                        'Lambda はリクエスト数と実行時間を中心に課金されます。低頻度・短時間処理では、常時起動の EC2 よりコストと運用負荷を抑えやすい場合があります。',
                },
                {
                    text: '月に数回しか実行しない処理でも、必ず EC2 を24時間起動する方が安い',
                    isCorrect: false,
                    explanation:
                        '常時起動の EC2 は使っていない時間もコストや運用負荷が発生します。利用頻度と処理時間で比較します。',
                },
                {
                    text: 'Lambda は低頻度処理では起動できない',
                    isCorrect: false,
                    explanation:
                        '低頻度でも Lambda は起動できます。ただし久しぶりの実行ではコールドスタートを考慮します。',
                },
                {
                    text: 'EC2 と Lambda は料金体系が同じなので比較不要である',
                    isCorrect: false,
                    explanation:
                        'EC2 はインスタンス稼働時間、Lambda はリクエスト数や実行時間など、料金体系が異なります。',
                },
            ],
            explanation:
                'コスト最適化では、稼働していない時間のコストも重要です。低頻度・短時間処理では Lambda のイベント発生時中心の従量課金が有利になることがあります。',
        },
    {
            question:
                '高頻度で常にリクエストがあり、各処理も数分かかるワークロードを Lambda で実行しています。Provisioned Concurrency も多く設定しています。コストと適性の観点で最も適切な判断はどれですか?',
            options: [
                {
                    text: 'Lambda の実行時間・呼び出し数・Provisioned Concurrency コストを合算し、ECS / Fargate や EC2 など常時稼働基盤とも比較する',
                    isCorrect: true,
                    explanation:
                        '高頻度・長めの処理では、Lambda の実行コストや Provisioned Concurrency（実行環境を事前準備してコールドスタート影響を減らす仕組み）の待機コストが大きくなることがあります。ECS / Fargate（コンテナ実行基盤サービス）や EC2 の方が適する場合もあります。',
                },
                {
                    text: '高頻度・長時間処理では、常に Lambda が最安になる',
                    isCorrect: false,
                    explanation:
                        'Lambda は便利ですが、高頻度・長時間処理では他の実行基盤の方がコストや運用に合う場合があります。',
                },
                {
                    text: 'Provisioned Concurrency を増やすほど、必ず総コストは下がる',
                    isCorrect: false,
                    explanation:
                        'Provisioned Concurrency（実行環境を事前準備してコールドスタート影響を減らす仕組み）は待機コストが発生します。低レイテンシ要件に見合うか確認が必要です。',
                },
                {
                    text: '処理時間が長いほど、Lambda のタイムアウト制限やコストは考慮不要になる',
                    isCorrect: false,
                    explanation:
                        '処理時間が長いほど、タイムアウト制限や実行コストが重要になります。',
                },
            ],
            explanation:
                'Lambda は低頻度・短時間処理だけでなく高頻度処理にも使えますが、常に最適とは限りません。実行時間、頻度、待機コスト、運用要件で比較します。',
        },
    {
            question:
                'Step Functions で Lambda を多数連携するワークフローを作っています。状態遷移が非常に多く、各 Lambda は短時間です。コスト比較で見るべき点として最も適切なものはどれですか?',
            options: [
                {
                    text: 'Lambda の実行コストだけでなく、Step Functions の状態遷移数や実行回数も含めて比較する',
                    isCorrect: true,
                    explanation:
                        'Step Functions（ワークフロー管理サービス）は便利ですが、状態遷移数（Step Functions 内のステップ実行回数）などがコストに影響します。Lambda の Duration（Lambda 実行時間）だけを見ていると全体コストを見誤ります。',
                },
                {
                    text: 'Step Functions を使うと、状態遷移コストは常にゼロになる',
                    isCorrect: false,
                    explanation:
                        'Step Functions（ワークフロー管理サービス）には料金体系があります。状態遷移数（Step Functions 内のステップ実行回数）や Standard / Express などの実行タイプを確認します。',
                },
                {
                    text: 'Lambda が短時間なら、Step Functions の設計はコストに影響しない',
                    isCorrect: false,
                    explanation:
                        'Lambda が短時間でも、状態遷移数（Step Functions 内のステップ実行回数）が非常に多いと Step Functions 側のコストが無視できない場合があります。',
                },
                {
                    text: 'ワークフローが複雑な場合、必ず EC2 だけを使うべきである',
                    isCorrect: false,
                    explanation:
                        '複雑なワークフローでは Step Functions が有効な場合があります。コストと運用性を比較して判断します。',
                },
            ],
            explanation:
                'サービスを組み合わせる場合、Lambda 単体のコストだけでなく周辺サービスの料金も含めます。Step Functions（ワークフロー管理サービス）は運用性とコストの両方で評価します。',
        },
    {
            question:
                'Lambda のコストが想定より増えています。調査すると、同じ S3 オブジェクトを何度も処理しており、ログも大量に出ています。最も適切な改善はどれですか?',
            options: [
                {
                    text: '重複トリガーや再帰起動を防ぎ、冪等性とログ量を見直す',
                    isCorrect: true,
                    explanation:
                        '同じイベントの重複処理や S3 書き戻しによる再帰起動は、実行回数とログ量を増やします。入力 / 出力プレフィックス（S3 キー先頭のパス部分）分離、処理済み判定、ログレベル調整を検討します。',
                },
                {
                    text: 'コストが増えたら、必ずメモリを最大にするだけで解決する',
                    isCorrect: false,
                    explanation:
                        'メモリ調整で改善する場合もありますが、重複実行やログ過多が原因なら別の対策が必要です。',
                },
                {
                    text: '同じオブジェクトを何度も処理するほど、コストは必ず下がる',
                    isCorrect: false,
                    explanation:
                        '不要な再処理は実行回数、実行時間、ログ量を増やし、コスト増につながります。',
                },
                {
                    text: 'ログ量はコストに影響しないため、調査対象から外してよい',
                    isCorrect: false,
                    explanation:
                        'CloudWatch Logs の取り込み量や保存量はコストに影響します。ログ量も確認します。',
                },
            ],
            explanation:
                'Lambda コスト増では、メモリや実行時間だけでなく、重複起動、再帰起動、リトライ、ログ量を確認します。不要な実行を減らすことも大きな最適化です。',
        },
    {
            question:
                'コスト最適化のために Lambda を別サービスへ置き換えるか検討しています。最も適切な判断軸はどれですか?',
            options: [
                {
                    text: '実行時間、頻度、待機要件、スケール特性、運用負荷、周辺サービス費用を合わせて比較する',
                    isCorrect: true,
                    explanation:
                        'Lambda、ECS / Fargate（コンテナ実行基盤サービス）、EC2、AWS Batch（大規模バッチ処理を管理するサービス）、Step Functions（ワークフロー管理サービス）は料金体系と運用特性が異なります。単価だけでなく、全体の処理量、待機時間、運用負荷、障害時再処理も含めます。',
                },
                {
                    text: 'Lambda 以外のサービスは常に無料なので、すぐ置き換える',
                    isCorrect: false,
                    explanation:
                        'どのサービスにも料金体系があります。置き換えで安くなるとは限りません。',
                },
                {
                    text: 'サービス選定では、運用負荷や障害対応コストは無視してよい',
                    isCorrect: false,
                    explanation:
                        '運用負荷も実質的なコストです。複雑な構成や手動運用が増えると、総合的には高くなる場合があります。',
                },
                {
                    text: '実行時間と頻度を見ずに、名前の印象だけでサービスを選ぶ',
                    isCorrect: false,
                    explanation:
                        'サービス名ではなく、実際の要件と料金体系で比較します。',
                },
            ],
            explanation:
                'コスト最適化は、Lambda の設定だけで完結しないことがあります。ワークロードに合う実行基盤を選び、全体コストと運用性を比較します。',
        },
    {
            question:
                'S3 に数百万件の既存ファイルがあり、それぞれを変換して別の場所へ保存したいです。新規アップロード時の処理だけでなく、既存ファイルの一括処理も必要です。最も適切な設計方針はどれですか?',
            options: [
                {
                    text: 'S3 イベント通知だけに任せず、S3 Batch Operations やジョブ管理の仕組みを使って対象・進捗・失敗再処理を管理する',
                    isCorrect: true,
                    explanation:
                        '大量の既存オブジェクトを処理する場合、通常の S3 イベント通知だけでは対象管理や再処理が難しくなります。S3 Batch Operations（大量 S3 オブジェクトへの一括処理を実行・管理する機能）やキュー、ジョブ管理（対象一覧、進捗、失敗、再実行を追跡する仕組み）を使い、進捗、失敗、再実行を追える設計にします。',
                },
                {
                    text: 'S3 に既にあるファイルは、Lambda が自動的にすべて検出して処理してくれる',
                    isCorrect: false,
                    explanation:
                        'S3 イベント通知は主に新しいイベントをきっかけにします。既存ファイルの一括処理は、対象リストやジョブ実行の仕組みを別途設計する必要があります。',
                },
                {
                    text: 'すべてのファイル名を環境変数に入れて Lambda で処理する',
                    isCorrect: false,
                    explanation:
                        '環境変数は大量ファイル一覧の管理場所ではありません。対象リスト、進捗、失敗情報は S3、DynamoDB、ジョブ管理（対象一覧、進捗、失敗、再実行を追跡する仕組み）サービスなどで扱う方が現実的です。',
                },
                {
                    text: '失敗したファイルはログに出せば十分で、再処理の仕組みは不要である',
                    isCorrect: false,
                    explanation:
                        '大量処理では一部失敗が起きる前提で、失敗対象の記録、原因分類、安全な再処理手順が必要です。ログだけに頼ると再処理漏れが起きやすくなります。',
                },
            ],
            explanation:
                '大量ファイル処理では、単に Lambda を並べるだけでなく、対象管理、進捗管理、失敗記録、再処理、出力先分離を設計します。新規イベント処理と既存データの一括処理は分けて考える必要があります。',
        },
    {
            question:
                'キャンペーン開始直後に大量イベントが一気に流入し、Lambda は急速にスケールできます。一方、下流の RDS と外部 API には処理上限があります。最も適切な設計はどれですか?',
            options: [
                {
                    text: 'SQS などでバッファし、同時実行数・バッチサイズ・レート制限を調整して下流サービスの処理能力に合わせる',
                    isCorrect: true,
                    explanation:
                        '大量流入では、Lambda のスケール性能だけでなく下流サービス保護が重要です。SQS（メッセージキューサービス）で流量を平準化し、同時実行数（同時に動作している Lambda 実行環境数）、バッチサイズ、レート制限（一定時間あたりの呼び出し上限）を調整します。',
                },
                {
                    text: 'Lambda は自動スケールするため、下流サービスの上限は考慮しなくてよい',
                    isCorrect: false,
                    explanation:
                        'Lambda がスケールしても、RDS、外部 API、DynamoDB などの下流サービスには別の上限があります。過剰並列は接続枯渇、スロットリング、障害拡大につながります。',
                },
                {
                    text: 'すべて同期 API で処理し、ユーザーを完了まで待たせる',
                    isCorrect: false,
                    explanation:
                        '大量イベントや重い処理を同期 API で待たせると、タイムアウト、再試行、利用者体験悪化につながります。受付と実処理を分離する設計を検討します。',
                },
                {
                    text: '下流が落ちた場合も、Lambda のメモリを最大にすれば安全に処理できる',
                    isCorrect: false,
                    explanation:
                        'メモリ増加は Lambda 側の処理能力に影響しますが、下流サービスの処理上限や障害を解決するものではありません。流量制御と再試行設計が必要です。',
                },
            ],
            explanation:
                '大規模イベント流入では、入口のスケールだけでなく下流の耐性を見ます。SQS（メッセージキューサービス）などのキュー、同時実行制御、バックオフ（失敗時に待機時間を徐々に伸ばす再試行制御）、DLQ（Dead Letter Queue：繰り返し失敗したイベントを退避するキュー）を組み合わせます。',
        },
    {
            question:
                '大量イベント処理中に一部の Lambda 実行が失敗しました。障害復旧後、失敗分だけを安全に再処理したいです。最も重要な設計はどれですか?',
            options: [
                {
                    text: 'イベント ID や処理対象 ID を記録し、成功・失敗・処理済み状態を追跡して冪等に再処理できるようにする',
                    isCorrect: true,
                    explanation:
                        '大量処理の再処理では、どのイベントが成功し、どれが失敗したかを追えることが重要です。イベント ID や対象 ID を使い、冪等性（同じ入力で何度処理しても重複した副作用や不整合が起きにくい性質）を持たせます。',
                },
                {
                    text: '失敗時はすべてのイベントを無条件で最初から再実行すればよい',
                    isCorrect: false,
                    explanation:
                        '全件再実行は時間、コスト、重複副作用を増やします。必要な場合もありますが、処理済み判定や冪等性がないと危険です。',
                },
                {
                    text: 'CloudWatch Logs を削除してから再実行すると、重複処理を防げる',
                    isCorrect: false,
                    explanation:
                        'ログ削除は処理済み状態を戻すものではありません。再処理には、処理状態を管理するデータストアや冪等キーが必要です。',
                },
                {
                    text: 'DLQ に入ったイベントは必ず自動的に元の順序で完全再処理される',
                    isCorrect: false,
                    explanation:
                        'DLQ は失敗イベントの退避先です。再投入や再処理の順序、冪等性、失敗原因の解消は運用側で設計する必要があります。',
                },
            ],
            explanation:
                '障害時の再処理設計では、失敗イベントを見つける仕組み、処理済み判定、冪等キー、再投入手順、再処理結果の監視が必要です。再処理は本番運用の一部として設計します。',
        },
    {
            question:
                'S3、SQS（メッセージキューサービス）、Lambda、DynamoDB、外部決済 API を連携する注文処理を作っています。障害時に「どこが何を保証するか」が曖昧で、調査や復旧が難しくなっています。改善として最も適切なものはどれですか?',
            options: [
                {
                    text: '各サービスの責任分界（どのサービス・処理が何を保証するかの境界）、成功条件、失敗時の再試行・補償処理・監視ポイントを明確にする',
                    isCorrect: true,
                    explanation:
                        'マルチサービス連携では、責任分界（どのサービス・処理が何を保証するかの境界）として、どのサービスが受け付け、どこで状態を保存し、どこが再試行し、失敗時に誰が復旧するかを明確にします。補償処理（後から打ち消しや整合性回復を行う処理）や監視ポイントも設計対象です。',
                },
                {
                    text: 'サービスを多く使うほど AWS が責任分界を自動で決めてくれるため、設計は不要である',
                    isCorrect: false,
                    explanation:
                        'AWS マネージドサービスは基盤運用を助けますが、アプリケーション上の整合性、再処理、責任分界（どのサービス・処理が何を保証するかの境界）は利用者側で設計する必要があります。',
                },
                {
                    text: 'Lambda の実行ロールに AdministratorAccess を付ければ、責任分界の問題は解決する',
                    isCorrect: false,
                    explanation:
                        '権限を広げても責任分界（どのサービス・処理が何を保証するかの境界）や復旧手順は明確になりません。むしろ最小権限から外れ、セキュリティリスクが増えます。',
                },
                {
                    text: '外部決済 API の結果はログだけに残し、DB には状態を保存しない',
                    isCorrect: false,
                    explanation:
                        '決済のような重要な副作用は、追跡可能な状態として保存する必要があります。ログだけでは再処理や問い合わせ対応に不十分です。',
                },
            ],
            explanation:
                '実運用では、サービスのつなぎ目で障害が起きます。責任分界（どのサービス・処理が何を保証するかの境界）、状態管理、再試行、補償処理（後から打ち消しや整合性回復を行う処理）、監査ログ、運用手順を合わせて設計することが重要です。',
        },
    {
            question:
                'Lambda 関数が増え、各関数に個別の環境変数、IAM、ログ、アラーム、デプロイ手順があります。小さく分けた結果、保守が難しくなってきました。最も適切な判断はどれですか?',
            options: [
                {
                    text: '関数分割の粒度、共通化、IaC、監視設計を見直し、運用負荷と変更容易性のバランスを取る',
                    isCorrect: true,
                    explanation:
                        'Lambda は小さく分けやすい一方、分割しすぎると設定、権限、監視、デプロイ、障害調査の負荷が増えます。IaC（Infrastructure as Code：インフラ設定をコードとして管理し、再現性を高める考え方）や共通基盤で保守性を上げます。',
                },
                {
                    text: 'Lambda は小さいほど常に良いため、1行ごとに関数を分ける',
                    isCorrect: false,
                    explanation:
                        '過剰な分割は運用負荷、呼び出し遅延、障害調査の複雑さを増やします。責務単位で適切な粒度を選ぶ必要があります。',
                },
                {
                    text: '関数が増えたら、監視やアラームを減らせば保守性は必ず上がる',
                    isCorrect: false,
                    explanation:
                        '監視を減らすだけでは障害検知が遅れます。重要度に応じたアラーム、構造化ログ（検索・分析しやすい形式のログ）、共通ダッシュボードなどで運用しやすくします。',
                },
                {
                    text: '手動で設定すれば柔軟なので、IaC や CI/CD は避けるべきである',
                    isCorrect: false,
                    explanation:
                        '手動設定が増えると設定ずれや再現性低下につながります。大規模運用では IaC（Infrastructure as Code：インフラ設定をコードとして管理し、再現性を高める考え方）や CI/CD（ビルド・テスト・デプロイを自動化する仕組み）が重要になります。',
                },
            ],
            explanation:
                '大規模な Lambda 運用では、コードだけでなく設定、権限、ログ、アラーム、デプロイ、ドキュメントも保守対象です。細かい分割が常に良いとは限らず、運用しやすい境界を選びます。',
        },
    {
            question:
                'SQS（メッセージキューサービス）から Lambda で大量メッセージを処理しています。障害後に DLQ へ大量のメッセージが溜まりました。再処理方針として最も適切なものはどれですか?',
            options: [
                {
                    text: '失敗原因を分類し、冪等性と下流サービスの余力を確認したうえで、段階的に再投入する',
                    isCorrect: true,
                    explanation:
                        'DLQ の大量再処理では、原因未解消のまま戻すと再び失敗や負荷集中が起きます。失敗原因、重複実行の安全性、下流の処理能力、再投入速度を確認します。',
                },
                {
                    text: 'DLQ の全メッセージを一度に戻せば、最も安全に復旧できる',
                    isCorrect: false,
                    explanation:
                        '大量一括再投入は再障害や下流過負荷につながります。段階的な再処理と監視が必要です。',
                },
                {
                    text: 'DLQ に入ったメッセージは不要なので、調査せず必ず削除する',
                    isCorrect: false,
                    explanation:
                        'DLQ には処理できなかった重要イベントが含まれる可能性があります。破棄判断には業務影響と再処理可否の確認が必要です。',
                },
                {
                    text: '再処理時はログをすべて無効化すると、失敗原因を特定しやすい',
                    isCorrect: false,
                    explanation:
                        '再処理時こそ、必要なログやメトリクスで進捗、成功率、失敗原因を確認します。ただし機密情報や過剰ログには注意します。',
                },
            ],
            explanation:
                'DLQ は復旧の入口であり、問題解決そのものではありません。大量再処理では、原因解消、冪等性、再投入速度、監視、停止判断を運用手順に含めます。',
        },
    {
            question:
                '毎分数十万件のイベントが継続的に流入する分析基盤を検討しています。Lambda だけで全処理を行う案がありますが、順序性、スループット、再処理、コスト、運用負荷が懸念されています。最も適切な判断はどれですか?',
            options: [
                {
                    text: 'Kinesis、SQS、ECS / Fargate、AWS Batch、Step Functions なども含め、流量特性と運用要件に合う構成を比較する',
                    isCorrect: true,
                    explanation:
                        '継続的な大量イベント処理では、Lambda だけでなく Kinesis Data Streams（大量データをリアルタイムに順序付きで処理できるストリームサービス）、SQS（メッセージキューサービス）、ECS / Fargate（コンテナ実行基盤サービス）などを比較します。順序性、再処理、スループット、下流制限、コストを見ます。',
                },
                {
                    text: 'Lambda は自動スケールするため、毎分数十万件でも設計上の検討は不要である',
                    isCorrect: false,
                    explanation:
                        '大量・継続流入では、同時実行上限、下流サービス、再処理、ログ量、コスト、順序性が問題になります。自動スケールだけでは設計は完了しません。',
                },
                {
                    text: '順序性が必要な場合でも、すべての Lambda を無制限並列にすればよい',
                    isCorrect: false,
                    explanation:
                        '無制限並列は順序性を壊す可能性があります。Kinesis の shard（Kinesis ストリーム内のデータ分割単位）や SQS FIFO など、順序性の単位を意識します。',
                },
                {
                    text: 'コスト比較では Lambda のメモリ単価だけを見れば十分である',
                    isCorrect: false,
                    explanation:
                        '大規模処理では、実行時間、呼び出し回数、ログ量、再処理、周辺サービス、運用負荷を含めた総合判断が必要です。',
                },
            ],
            explanation:
                '大規模イベント基盤では、イベント数だけでなく継続性、順序性、再処理、遅延許容、下流制限、運用体制を見ます。Lambda は有力な部品ですが、全体設計の中で使いどころを決めます。',
        },
    {
            question:
                '複数チームが同じ AWS アカウントで Lambda を運用しています。あるチームの大量処理が原因で同時実行数（同時に動作している Lambda 実行環境数）やログ量を消費し、他チームの本番処理にも影響が出ました。運用設計として最も適切なものはどれですか?',
            options: [
                {
                    text: 'アカウント分離、Reserved Concurrency、予算・アラーム、タグ付け、運用ルールで影響範囲を管理する',
                    isCorrect: true,
                    explanation:
                        '複数チーム運用では、影響範囲の分離が重要です。Reserved Concurrency（関数ごとに使用できる同時実行数を予約・制限する仕組み）、アカウント分離、タグによるコスト配賦、CloudWatch Alarms（メトリクス異常時に通知や自動処理を行う監視機能）などを設計します。',
                },
                {
                    text: '同じアカウントなら、各チームの処理は互いに一切影響しない',
                    isCorrect: false,
                    explanation:
                        '同じアカウントやリージョンでは、Lambda 同時実行上限、ログ量、予算、共有リソースが影響し合うことがあります。',
                },
                {
                    text: '影響が出たら、すべての Lambda に同じ最大同時実行数を設定する',
                    isCorrect: false,
                    explanation:
                        '重要度や流量は関数ごとに異なります。一律設定では重要処理を守れない場合があります。重要度に応じた予約・制限が必要です。',
                },
                {
                    text: 'コストや同時実行の問題は開発チームではなく AWS が完全に調整するため、運用設計は不要である',
                    isCorrect: false,
                    explanation:
                        'AWS は基盤を提供しますが、利用量、影響範囲、予算、優先度の設計は利用者側の責任です。',
                },
            ],
            explanation:
                '実運用では、技術設計だけでなくチーム境界、アカウント境界、コスト管理、同時実行制御、監視責任も重要です。大規模化するほど運用ルールが品質に直結します。',
        },
    {
            question:
                '複数サービスを連携した夜間バッチで、Lambda、Step Functions、DynamoDB、S3、外部 API を使っています。たまに途中で失敗しますが、どこまで完了したか分からず、手作業で復旧しています。最も適切な改善はどれですか?',
            options: [
                {
                    text: 'ワークフロー状態、各ステップの入出力、相関 ID、再実行可能な単位を設計し、運用手順を明確にする',
                    isCorrect: true,
                    explanation:
                        '複数サービスをまたぐ処理では、どのステップが成功したかを追跡できる必要があります。相関 ID（Correlation ID：リクエスト追跡用の識別子）、状態管理、再実行単位、手動介入手順を決めます。',
                },
                {
                    text: 'すべての処理を1つの巨大な Lambda にまとめれば、必ず復旧しやすくなる',
                    isCorrect: false,
                    explanation:
                        '巨大な Lambda は状態や失敗箇所が見えにくくなり、タイムアウトや保守性の問題も増えることがあります。適切な単位で状態と責任を分けます。',
                },
                {
                    text: '失敗時は CloudWatch Logs を見ずに、毎回最初から手動実行する',
                    isCorrect: false,
                    explanation:
                        '手動で全再実行すると重複処理や復旧漏れが起きやすくなります。ログ、状態、再実行単位を使って安全に復旧します。',
                },
                {
                    text: '外部 API の失敗は自社システムに影響しないため、記録しなくてよい',
                    isCorrect: false,
                    explanation:
                        '外部 API との連携失敗は、業務状態の不整合や再処理に直結します。成功・失敗・応答内容の扱いを設計する必要があります。',
                },
            ],
            explanation:
                '大規模運用では、障害が起きない前提ではなく、途中失敗から復旧できる前提で設計します。状態管理、相関 ID（Correlation ID：リクエスト追跡用の識別子）、再実行単位、運用手順が保守性を左右します。',
        },
    {
            question:
                'Lambda を中心に多くの機能をサーバーレス化しましたが、障害調査ではログが複数サービスに分散し、デプロイや権限変更の影響範囲も把握しにくくなっています。最も適切な改善方針はどれですか?',
            options: [
                {
                    text: '構成を可視化し、サービスごとの責任、ログ・メトリクス・トレース、変更管理、影響範囲を整理する',
                    isCorrect: true,
                    explanation:
                        'サーバーレス構成では運用対象がコードからサービス設定にも広がります。構成図、責任分界（どのサービス・処理が何を保証するかの境界）、CloudWatch Logs（ログ保存・検索サービス）、メトリクス、X-Ray（対応サービス間のリクエストや処理時間を可視化する分散トレーシングサービス）などを整理します。',
                },
                {
                    text: 'サーバーレスなら運用不要なので、構成図や監視は作らない',
                    isCorrect: false,
                    explanation:
                        'サーバーレスはサーバー管理を減らしますが、アプリケーション運用、監視、権限、障害対応は必要です。',
                },
                {
                    text: '調査が難しい場合は、すべての権限を広げれば原因が分かりやすくなる',
                    isCorrect: false,
                    explanation:
                        '権限を広げても可観測性や責任分界（どのサービス・処理が何を保証するかの境界）は改善しません。セキュリティリスクが増えるため、ログ、トレース、メトリクス、変更履歴で調査性を上げます。',
                },
                {
                    text: 'Lambda の関数名を短くすれば、マルチサービス連携の保守性は必ず改善する',
                    isCorrect: false,
                    explanation:
                        '命名は重要ですが、それだけでは責任分界（どのサービス・処理が何を保証するかの境界）、監視、変更管理、再処理手順の問題は解決しません。',
                },
            ],
            explanation:
                'サーバーレスに寄せるほど、サービス間の接続、権限、監視、デプロイ、障害復旧の設計が重要になります。運用負荷と保守性もアーキテクチャ選定の判断材料です。',
        }
]
