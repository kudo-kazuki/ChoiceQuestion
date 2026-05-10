import type { Question } from '@/types/test_questions'

export const testQuestions: Question[] = [
    {
        question:
            'CloudFrontで「ログインユーザーごとに内容が変わるページ」を配信しています。意図せず別ユーザー向けの内容がキャッシュされるリスクを下げる設計として最も適切なものはどれですか?',
        options: [
            {
                text: 'キャッシュキーやオリジンリクエストポリシーで必要なCookie、ヘッダー、クエリ文字列を明示し、個人別レスポンスを不用意に共有キャッシュしない',
                isCorrect: true,
                explanation:
                    'CloudFrontのキャッシュは、キャッシュキーが同じリクエストに対して同じレスポンスを返します。ユーザーごとに内容が変わる場合は、認証や表示内容に影響するCookie、ヘッダー、クエリ文字列を適切にキャッシュキーへ含めるか、対象パスをキャッシュしない設計にします。',
            },
            {
                text: 'TTLを長くすればユーザーごとの表示差分も自動的に安全に分離される',
                isCorrect: false,
                explanation:
                    'TTL（キャッシュを保持してよい時間）を長くするとキャッシュが長く残るだけで、ユーザーごとの差分が自動的に分離されるわけではありません。むしろ誤ったキャッシュ設定の影響が長引く可能性があります。',
            },
            {
                text: 'すべてのCookieとヘッダーを無条件に無視すれば、個人別ページでも必ず安全に配信できる',
                isCorrect: false,
                explanation:
                    '認証状態やユーザー識別に使うCookieやヘッダーを無視すると、異なるユーザーのリクエストが同じキャッシュキーとして扱われる可能性があります。',
            },
            {
                text: 'オリジンをS3に変更すれば、動的ページでもユーザー別キャッシュ問題は必ず解消される',
                isCorrect: false,
                explanation:
                    'オリジン種別を変えるだけでは、ユーザー別のレスポンスをどうキャッシュするかという問題は解決しません。キャッシュキーとレスポンス内容の対応を設計する必要があります。',
            },
        ],
        explanation:
            'CloudFrontの応用設計では「何がレスポンス内容を変える入力なのか」を把握し、それをキャッシュキーに含めるか、キャッシュしないかを判断することが重要です。キャッシュキーに含める値はキャッシュポリシーで決め、オリジンへ送るだけでキャッシュを分けない値はオリジンリクエストポリシーで扱う、という分離も重要です。',
    },
    {
        question:
            '商品一覧ページ `/products?category=books&sort=price` をCloudFrontで配信しています。レスポンスは `category` と `sort` によって変わりますが、広告計測用の `utm_source` では変わりません。キャッシュ効率と正確性の両方を考えた設計として最も適切なものはどれですか?',
        options: [
            {
                text: 'キャッシュキーには `category` と `sort` だけを含め、`utm_source` は含めない',
                isCorrect: true,
                explanation:
                    'キャッシュキー（キャッシュを区別するための識別子）には、レスポンス内容を変える値だけを含めるのが基本です。`category` と `sort` で表示内容が変わるなら含め、表示内容に影響しない `utm_source` を含めないことでキャッシュヒット率を保ちやすくなります。',
            },
            {
                text: 'すべてのクエリ文字列をキャッシュキーに含める',
                isCorrect: false,
                explanation:
                    'すべて含めると、`utm_source` のように表示内容に影響しない値でもキャッシュが分かれます。正確性は保ちやすい一方、不要にキャッシュヒット率（キャッシュから返せた割合）が下がります。',
            },
            {
                text: 'すべてのクエリ文字列を無視する',
                isCorrect: false,
                explanation:
                    '`category` や `sort` で表示内容が変わるのに無視すると、別カテゴリや別ソートのレスポンスを同じキャッシュとして返すリスクがあります。',
            },
            {
                text: 'クエリ文字列はキャッシュキーに含めず、TTLを長くすれば正しい内容が返る',
                isCorrect: false,
                explanation:
                    'TTL（キャッシュを保持してよい時間）を長くしても、レスポンス内容を変える入力がキャッシュキーに含まれていなければ正確性は保てません。',
            },
        ],
        explanation:
            '応用設計では「オリジンがレスポンスを変える入力」と「単に分析や追跡に使う入力」を分けます。前者はキャッシュキー候補、後者はキャッシュキーに含めない候補です。オリジンへは渡したいがキャッシュを分けたくない値は、オリジンリクエストポリシー（CloudFrontからオリジンへ渡す値を決める設定）で扱います。',
    },
    {
        question:
            'API `/profile` は `Authorization` ヘッダーに基づいてユーザーごとのプロフィールを返します。CloudFrontを前段に置く場合、誤キャッシュを避ける設計として最も適切なものはどれですか?',
        options: [
            {
                text: '`/profile` はキャッシュしない、またはユーザーごとのレスポンスを分離できるように認証に関係する値を慎重に扱う',
                isCorrect: true,
                explanation:
                    '`Authorization`（認証情報を送るためのHTTPヘッダー）でレスポンスが変わる場合、安易に共有キャッシュすると別ユーザーの情報を返すリスクがあります。キャッシュキーに含めれば分離はできますが、ユーザーやトークンごとにキャッシュが細分化され、ヒット率低下や認証情報の扱いの複雑化を招きます。実務では対象パスをキャッシュしない判断もよくあります。',
            },
            {
                text: '`Authorization` ヘッダーはオリジンへ転送するが、キャッシュキーには含めない',
                isCorrect: false,
                explanation:
                    'オリジンへ転送するだけでキャッシュキーに含めない場合、異なるユーザーのレスポンスが同じキャッシュキーとして扱われる可能性があります。個人別レスポンスでは危険です。',
            },
            {
                text: 'TTLを短くすれば、ユーザー別レスポンスを同じキャッシュキーで共有しても安全である',
                isCorrect: false,
                explanation:
                    'TTLが短くても、短時間の間に別ユーザーへ誤ったレスポンスを返すリスクは残ります。個人情報を含むレスポンスではキャッシュキー設計またはキャッシュ無効化が重要です。',
            },
            {
                text: 'CloudFrontの圧縮配信を有効にすれば、認証ヘッダーによる誤キャッシュは防げる',
                isCorrect: false,
                explanation:
                    '圧縮配信（レスポンスサイズを小さくして送る仕組み）はキャッシュキーの分離とは別です。認証情報によるレスポンス差分は、キャッシュ設計で扱う必要があります。',
            },
        ],
        explanation:
            '認証済みAPIやマイページでは、キャッシュヒット率より正確性と情報漏えい防止を優先します。キャッシュするなら、何でユーザー別レスポンスが変わるかを厳密に把握し、キャッシュキーに含める値とオリジンへ転送するだけの値を分けて設計します。',
    },
    {
        question:
            'オリジンが `Cache-Control: no-store` を返している動的レスポンスに対し、CloudFrontのキャッシュポリシーで最小TTLを60秒にしました。起こり得る挙動として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudFrontは最小TTLの設定により、`no-store` があっても少なくとも60秒キャッシュする可能性がある',
                isCorrect: true,
                explanation:
                    'CloudFrontでは、キャッシュポリシーの最小TTLが0より大きい場合、オリジンが `Cache-Control: no-cache`、`no-store`、`private` を返していても、最小TTLの間キャッシュすることがあります。動的レスポンスでは特に注意が必要です。',
            },
            {
                text: '`no-store` が常に最優先されるため、CloudFrontの最小TTLは完全に無視される',
                isCorrect: false,
                explanation:
                    'CloudFrontでは最小TTLが0より大きい場合、`no-store` があってもキャッシュされ得ます。HTTPヘッダーだけでなくCloudFront側のTTL設定も確認する必要があります。',
            },
            {
                text: '最小TTLはS3オリジンにだけ適用され、ALBやAPIには適用されない',
                isCorrect: false,
                explanation:
                    '最小TTLはキャッシュポリシーの設定であり、特定のオリジン種別だけに限定されるものではありません。',
            },
            {
                text: 'CloudFrontは必ず `no-store` を削除してオリジンへ再送信する',
                isCorrect: false,
                explanation:
                    'CloudFrontが必ずヘッダーを削除して再送信するという話ではありません。問題は、オリジンが返したキャッシュ制御とCloudFrontのTTL設定の関係です。',
            },
        ],
        explanation:
            '試験でも実務でも、`Cache-Control` だけで判断せず、CloudFrontの最小TTL/デフォルトTTL/最大TTLを合わせて確認するのが重要です。特に最小TTLは、オリジンの `no-store` などより強く効くケースがあります。動的・個人別レスポンスでは最小TTLを0にする判断が必要になることがあります。',
    },
    {
        question:
            '静的アセット `/assets/app.8f3a1c.js` をCloudFrontで配信しています。ファイル名にはビルドごとのハッシュが含まれ、内容が変わるとファイル名も変わります。高いキャッシュヒット率と安全な更新を両立する設計として最も適切なものはどれですか?',
        options: [
            {
                text: '長いTTLを設定し、更新時は新しいハッシュ付きファイル名を参照させる',
                isCorrect: true,
                explanation:
                    'ファイル名にハッシュ（内容に応じて変わる識別子）が含まれる場合、内容が変わればURLも変わります。そのため長いTTLでキャッシュヒット率を高めつつ、新しいファイル名へ切り替えることで古いキャッシュの影響を避けやすくなります。',
            },
            {
                text: 'すべての静的アセットでTTLを0にし、毎回オリジンへ確認させる',
                isCorrect: false,
                explanation:
                    '正確性は保ちやすいですが、ハッシュ付きファイル名の利点を活かせず、オリジン負荷や遅延が増えやすくなります。',
            },
            {
                text: 'ファイル名を常に `/assets/app.js` に固定し、TTLを1年にする',
                isCorrect: false,
                explanation:
                    '内容が変わってもURLが同じまま長期キャッシュすると、利用者が古いファイルを受け取り続ける可能性があります。固定ファイル名で長いTTLを使う場合は更新戦略が難しくなります。',
            },
            {
                text: 'クエリ文字列をすべてキャッシュキーから除外すれば、ファイル名が固定でも必ず安全に更新できる',
                isCorrect: false,
                explanation:
                    'クエリ文字列の扱いだけでは、固定URLの長期キャッシュ問題は解決しません。URL自体を変える、TTLを調整する、Invalidation（無効化）を使うなどの設計が必要です。',
            },
        ],
        explanation:
            '静的アセットでは「長いTTL + ファイル名バージョニング」がよく使われます。URLが変わるため、更新のたびにInvalidation（CloudFrontキャッシュの無効化）を大量実行する必要を減らせます。一方、HTMLは短めのTTLにするなど、コンテンツ種別ごとにキャッシュビヘイビアを分ける設計が実務的です。',
    },
    {
        question:
            '同じAPIで、レスポンス本文は `Accept-Language` ヘッダーによって日本語/英語に変わります。CloudFrontでキャッシュしつつ正しい言語を返す設計として最も適切なものはどれですか?',
        options: [
            {
                text: '`Accept-Language` をキャッシュキーに含めるか、言語をURLパスやクエリ文字列で明示してキャッシュを分離する',
                isCorrect: true,
                explanation:
                    '`Accept-Language`（受け取りたい言語を示すHTTPヘッダー）でレスポンスが変わるなら、その差分をキャッシュキーに含める必要があります。ただしヘッダー値は `ja-JP,ja;q=0.9,en;q=0.8` のように細かく分かれやすく、キャッシュ分断を招きます。`/ja/` や `/en/` のようにURLで言語を明示する設計も有効です。',
            },
            {
                text: '`Accept-Language` はオリジンへ転送するが、キャッシュキーには含めない',
                isCorrect: false,
                explanation:
                    'オリジンへ転送するだけでキャッシュキーに含めない場合、最初にキャッシュされた言語のレスポンスが別言語の利用者にも返る可能性があります。',
            },
            {
                text: '言語ごとの差分はCloudFrontが自動的に判定し、常に正しいキャッシュへ分離する',
                isCorrect: false,
                explanation:
                    'CloudFrontはアプリケーションのレスポンス差分を自動的に理解するわけではありません。キャッシュキーに何を含めるかを設計する必要があります。',
            },
            {
                text: 'キャッシュヒット率を最大化するため、言語ヘッダーは必ず無視する',
                isCorrect: false,
                explanation:
                    'ヒット率は上がる可能性がありますが、正しくない言語のレスポンスを返すリスクがあります。ヒット率と正確性のバランスが必要です。',
            },
        ],
        explanation:
            'ヘッダーをキャッシュキーに含めると正確性は上がりますが、値の種類が多いほどキャッシュが細分化され、ヒット率が下がります。可能ならURL設計で差分を明示すると、運用しやすいキャッシュになります。',
    },
    {
        question:
            'CloudFrontで静的画像はS3、APIはALBへ転送したいと考えています。可用性とキャッシュ効率を考えたキャッシュビヘイビア設計として最も適切なものはどれですか?',
        options: [
            {
                text: '`/images/*` はS3オリジンへ長めのTTLで配信し、`/api/*` はALBオリジンへ短いTTLまたはキャッシュ無効で転送する',
                isCorrect: true,
                explanation:
                    '静的画像とAPIでは、オリジンもキャッシュ要件も異なります。キャッシュビヘイビア（パスごとの配信・キャッシュ設定）を分け、静的ファイルは長めにキャッシュし、APIは必要に応じて短いTTLやキャッシュ無効化を使うのが適切です。',
            },
            {
                text: 'すべてのパスを同じS3オリジンへ転送し、APIもS3で自動処理させる',
                isCorrect: false,
                explanation:
                    'S3は静的オブジェクトの配信には向きますが、ALB背後のAPI処理を自動的に代替するものではありません。APIには適切なオリジンへ転送する必要があります。',
            },
            {
                text: 'すべてのパスを同じALBオリジンへ転送し、静的画像も毎回ALBから取得する',
                isCorrect: false,
                explanation:
                    '動作は可能な場合がありますが、静的画像のキャッシュ効率やオリジン負荷の観点では、S3オリジンと長めのTTLを活かす設計の方が適切です。',
            },
            {
                text: 'デフォルトキャッシュビヘイビアだけを使えば、CloudFrontが画像とAPIを自動判別する',
                isCorrect: false,
                explanation:
                    'CloudFrontが画像とAPIの要件を自動判別して別オリジンへ振り分けるわけではありません。パスパターンとキャッシュビヘイビアで明示します。',
            },
        ],
        explanation:
            '応用問題では、CloudFrontを単なる前段キャッシュではなく、パスごとのルーティングとキャッシュ制御の組み合わせとして考えることが重要です。',
    },
    {
        question:
            'CloudFrontでプライマリオリジンのALBが一時的に障害になる場合に備え、セカンダリオリジンへ切り替えたいと考えています。最も適切な設計はどれですか?',
        options: [
            {
                text: 'オリジングループを作成し、プライマリ/セカンダリオリジンとフェイルオーバー対象のHTTPステータスコードを設定する',
                isCorrect: true,
                explanation:
                    'CloudFrontのオリジンフェイルオーバーでは、オリジングループ（フェイルオーバー用に複数オリジンをまとめる設定）を使います。プライマリオリジンが設定したHTTPステータスコード、例えば500、502、503、504などを返した場合にセカンダリオリジンへ切り替えられます。',
            },
            {
                text: '複数のオリジンを登録するだけで、CloudFrontが常に自動で正常なオリジンを選ぶ',
                isCorrect: false,
                explanation:
                    '複数オリジンを登録するだけではフェイルオーバーにはなりません。キャッシュビヘイビアの転送先としてオリジングループを使い、条件を設定する必要があります。',
            },
            {
                text: 'TTLを長くすれば、プライマリオリジン障害時もすべてのリクエストが必ず成功する',
                isCorrect: false,
                explanation:
                    'キャッシュ済みオブジェクトは返せる場合がありますが、キャッシュにないリクエストやTTL切れのリクエストではオリジン障害の影響を受けます。高可用性にはフェイルオーバー設計が必要です。',
            },
            {
                text: 'Invalidationを定期実行すれば、オリジン障害時に自動でセカンダリへ切り替わる',
                isCorrect: false,
                explanation:
                    'Invalidation（無効化）はCloudFrontキャッシュを削除・更新対象にする操作であり、オリジンのフェイルオーバー条件を設定するものではありません。',
            },
        ],
        explanation:
            '高可用性設計では、キャッシュで吸収できる範囲と、オリジン障害時に切り替える範囲を分けて考えます。CloudFrontのフェイルオーバーはヘルスチェックで常時正常なオリジンを探す方式ではなく、オリジンから返ったHTTPステータスコードなど、指定したエラー条件に基づいて発動します。',
    },
    {
        question:
            'CloudFront経由のAPIで504エラーが増えています。CloudFrontメトリクスでは5xxが増え、オリジンのALBでも応答遅延が確認されています。最初に確認すべき観点として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudFrontからオリジンへの接続・応答タイムアウト、ALB背後のターゲットの応答性能、オリジンの過負荷を確認する',
                isCorrect: true,
                explanation:
                    '504 Gateway Timeoutは、CloudFrontがオリジンから時間内に応答を得られない場合などに発生します。オリジンタイムアウト（CloudFrontがオリジンを待つ時間の制限）、ALB背後のターゲット、アプリケーション処理時間、ネットワーク到達性を確認します。CloudFront起因の接続問題か、オリジン起因の遅延・過負荷かをログとメトリクスで分けて見ます。',
            },
            {
                text: 'CloudFrontの代替ドメイン名を削除すれば、504は必ず解消する',
                isCorrect: false,
                explanation:
                    '代替ドメイン名は独自ドメイン利用の設定です。504の原因がオリジン応答遅延や接続問題なら、ドメイン名削除では解決しません。',
            },
            {
                text: '4xxエラーではないため、オリジンやアプリケーションの確認は不要である',
                isCorrect: false,
                explanation:
                    '5xx、特に504ではオリジン接続や応答遅延が関係することがあります。CloudFrontとオリジンの両方を確認する必要があります。',
            },
            {
                text: 'キャッシュヒット率を下げれば、オリジンへの到達が増えるため504は必ず減る',
                isCorrect: false,
                explanation:
                    'キャッシュヒット率を下げるとオリジンへのリクエストが増え、過負荷やタイムアウトが悪化する可能性があります。原因に応じてキャッシュ、オリジン性能、タイムアウトを調整します。',
            },
        ],
        explanation:
            'トラブルシュートでは、CloudFrontが返した5xxなのか、オリジンが返した5xxなのか、またはCloudFrontがオリジン応答を待ち切れなかったのかをログとメトリクスで切り分けます。CloudFrontの標準ログやリアルタイムログ、ALBログ、CloudWatchメトリクスを突き合わせると原因を追いやすくなります。',
    },
    {
        question:
            'CloudFrontのオリジンフェイルオーバーで、プライマリALBの障害時だけセカンダリS3のメンテナンスページへ切り替えたいと考えています。設計として最も適切なものはどれですか?',
        options: [
            {
                text: 'オリジングループを作成し、プライマリにALB、セカンダリにS3を設定し、500/502/503/504などをフェイルオーバー条件にする',
                isCorrect: true,
                explanation:
                    'CloudFrontのオリジンフェイルオーバーは、オリジングループ（プライマリ/セカンダリオリジンをまとめる設定）とフェイルオーバー対象のHTTPステータスコードで制御します。ALB障害時の代替ページであれば、5xx系を条件にしてS3の静的ページへ切り替える設計が自然です。',
            },
            {
                text: 'ALBとS3をオリジンに登録するだけで、CloudFrontが常に正常な方を自動選択する',
                isCorrect: false,
                explanation:
                    '複数オリジンを登録するだけではフェイルオーバーは動きません。キャッシュビヘイビアの転送先にオリジングループを指定し、切り替え条件を設定する必要があります。',
            },
            {
                text: 'CloudFront FunctionsでALBのヘルスチェックを実行し、失敗したらS3へ常時転送する',
                isCorrect: false,
                explanation:
                    'CloudFront Functions（エッジで軽量なJavaScriptを実行する機能）は外部ネットワークアクセスや重い処理に向きません。オリジンフェイルオーバーにはCloudFrontのオリジングループを使います。',
            },
            {
                text: 'Invalidationを実行すれば、CloudFrontが自動的にS3へ切り替える',
                isCorrect: false,
                explanation:
                    'Invalidation（CloudFrontキャッシュの無効化）はフェイルオーバー条件を設定する操作ではありません。キャッシュ削除とオリジン切り替えは別の機能です。',
            },
        ],
        explanation:
            'フェイルオーバーはヘルスチェックで任意の正常系オリジンを探す仕組みではなく、指定したHTTPステータスコードや接続失敗を契機にセカンダリへ切り替える仕組みです。また、CloudFrontのオリジンフェイルオーバーはGET/HEAD/OPTIONSリクエストでのみ動作します。',
    },
    {
        question:
            'CloudFrontのオリジン選択として、S3、ALB、API Gateway、Lambda Function URLを使い分ける判断で最も適切なものはどれですか?',
        options: [
            {
                text: '静的ファイルはS3、複数ターゲットへ負荷分散するWeb/APIはALB、マネージドAPIはAPI Gateway、軽量な関数HTTPエンドポイントはLambda Function URLを候補にする',
                isCorrect: true,
                explanation:
                    'オリジンは配信元の性質で選びます。S3は静的オブジェクト、ALBは複数ターゲットへのロードバランシング、API GatewayはAPI管理、Lambda Function URLはLambda関数をHTTPで直接呼び出す用途に向きます。CloudFrontではこれらをパスごとのキャッシュビヘイビアで振り分けられます。',
            },
            {
                text: 'CloudFrontを使う場合、すべてのオリジンはS3に統一しなければならない',
                isCorrect: false,
                explanation:
                    'CloudFrontはS3だけでなく、ALB、API Gateway、Lambda Function URL、外部HTTPサーバーなどをオリジンにできます。要件に応じて使い分けます。',
            },
            {
                text: 'API GatewayやLambda Function URLはCloudFrontのオリジンにできない',
                isCorrect: false,
                explanation:
                    'API GatewayやLambda Function URLもCloudFrontのオリジンとして使えます。Lambda Function URLではOAC（Origin Access Control）でCloudFront経由に制限する構成も可能です。',
            },
            {
                text: 'ALBをオリジンにすると、CloudFrontのキャッシュビヘイビアは使えなくなる',
                isCorrect: false,
                explanation:
                    'ALBをオリジンにしてもキャッシュビヘイビアは使えます。パスごとにオリジンやキャッシュポリシーを分ける設計が可能です。',
            },
        ],
        explanation:
            '応用設計では「CloudFrontの前段に何を置くか」ではなく、「CloudFrontの後段にどの性質のオリジンを置くか」を考えます。静的か動的か、キャッシュ可能か、認証が必要か、スケーリング特性、レイテンシ要件を見て、S3、ALB、API Gateway、Lambda Function URLなどを選びます。',
    },
    {
        question:
            'Lambda Function URLをCloudFrontのオリジンにし、利用者が関数URLへ直接アクセスできないようにしたい場合の設計として最も適切なものはどれですか?',
        options: [
            {
                text: 'Lambda Function URLのAuthTypeをAWS_IAMにし、CloudFrontのOACを設定して、関数URLのリソースベースポリシーでCloudFrontからの呼び出しを許可する',
                isCorrect: true,
                explanation:
                    'CloudFrontはLambda Function URLオリジンに対してOAC（Origin Access Control。CloudFrontからオリジンへのアクセスを制御する仕組み）を使えます。OACはCloudFrontが署名付きリクエストをオリジンへ送る仕組みなので、Lambda Function URLは署名を検証できる `AWS_IAM` 認証にし、Lambda側のリソースベースポリシーでCloudFrontサービスプリンシパルと対象ディストリビューションからの呼び出しを許可します。',
            },
            {
                text: 'Lambda Function URLのAuthTypeをNONEにしておけば、CloudFront以外からの直接アクセスは自動的に拒否される',
                isCorrect: false,
                explanation:
                    '`AuthType: NONE` は関数URLを公開しやすい設定です。CloudFront以外からの直接アクセスを制限したい場合は、OACとIAM認証、リソースベースポリシーを使う設計を検討します。',
            },
            {
                text: 'S3のバケットポリシーにLambda Function URLを書けば、CloudFrontからだけ呼び出せる',
                isCorrect: false,
                explanation:
                    'Lambda Function URLのアクセス制御はLambda側のリソースベースポリシーで扱います。S3バケットポリシーはS3バケットへのアクセス許可設定です。',
            },
            {
                text: 'CloudFrontの地理的制限を有効にすれば、Lambda Function URLへの直接アクセスは必ず防げる',
                isCorrect: false,
                explanation:
                    '地理的制限はCloudFront経由のアクセス制御です。利用者がLambda Function URLへ直接アクセスできる状態なら、CloudFrontの制限を迂回される可能性があります。',
            },
        ],
        explanation:
            'Lambda Function URL + OACでは、CloudFrontがオリジンリクエストを署名し、Lambda側がCloudFrontからの呼び出しを明示的に許可します。これにより、関数URLへ直接アクセスされる経路を閉じ、CloudFront経由だけを許可する設計にできます。POST/PUTを使う場合は、リクエスト本文のSHA256を `x-amz-content-sha256` ヘッダーに含める必要がある点にも注意します。',
    },
    {
        question:
            'S3オリジンをCloudFront OACで保護したい一方、同じS3バケットは静的ウェブサイトホスティングも有効にしています。設計判断として最も適切なものはどれですか?',
        options: [
            {
                text: 'OACを使う場合は通常のS3バケットオリジンを使い、S3静的ウェブサイトエンドポイントはカスタムオリジン扱いでOAC/OAIが使えない点を考慮する',
                isCorrect: true,
                explanation:
                    'CloudFront OACはS3 REST APIエンドポイント（通常のS3バケットオリジン）で使います。S3静的ウェブサイトエンドポイントはカスタムオリジンとして扱われるため、OAC/OAI（CloudFront経由に制限するための仕組み）は使えません。',
            },
            {
                text: 'S3静的ウェブサイトエンドポイントを使えば、OACは自動的に有効になる',
                isCorrect: false,
                explanation:
                    'S3静的ウェブサイトエンドポイントではOACは使えません。OACで保護したい場合は通常のS3バケットオリジンを使います。',
            },
            {
                text: 'OACを使うには、S3バケットをパブリック公開する必要がある',
                isCorrect: false,
                explanation:
                    'OACはS3を直接公開せずにCloudFront経由でアクセスさせるための機能です。適切なバケットポリシーでCloudFrontからのアクセスだけを許可します。',
            },
            {
                text: 'S3静的ウェブサイトエンドポイントはHTTPS接続をサポートするため、OACなしでも常に安全である',
                isCorrect: false,
                explanation:
                    'S3静的ウェブサイトエンドポイントはHTTPS接続をサポートしません。CloudFrontからはHTTPで接続することになり、OAC/OAIも使えません。',
            },
        ],
        explanation:
            'S3のREST APIエンドポイントとしてのS3オリジンはOAC/OAIを利用でき、非公開配信ではOACが推奨されます。一方、S3 Website endpointはカスタムオリジン扱いでOAC/OAIを使えず、HTTPS接続もサポートしません。この違いは設計判断で重要です。',
    },
    {
        question:
            'CloudFrontで独自ドメイン `app.example.com` をHTTPS配信したいが、ACM証明書を東京リージョンで発行済みです。最も適切な対応はどれですか?',
        options: [
            {
                text: 'CloudFrontのビューワー向け証明書として使うため、us-east-1で `app.example.com` を含むACM証明書を発行またはインポートする',
                isCorrect: true,
                explanation:
                    'CloudFrontのビューワー向けSSL/TLS証明書（利用者とCloudFront間のHTTPSで使う証明書）は、CloudFrontがグローバルサービスであるため、米国東部（バージニア北部）リージョンである `us-east-1` のACMに作成またはインポートする必要があります。東京リージョンのACM証明書はCloudFrontのビューワー証明書としては使えません。',
            },
            {
                text: '東京リージョンのACM証明書をそのままCloudFrontのビューワー証明書に関連付ける',
                isCorrect: false,
                explanation:
                    'CloudFrontのビューワー証明書には `us-east-1` のACM証明書が必要です。オリジン側が東京リージョンのALBである場合、そのALB用証明書は東京リージョンで管理することがありますが、CloudFrontのビューワー証明書とは別です。',
            },
            {
                text: '証明書なしで代替ドメイン名だけ追加すれば、HTTPS配信できる',
                isCorrect: false,
                explanation:
                    '独自ドメインでHTTPS配信するには、そのドメインをカバーするSSL/TLS証明書が必要です。代替ドメイン名だけではHTTPSの証明書検証を満たせません。',
            },
            {
                text: 'CloudFrontディストリビューションを東京リージョンへ移動すれば、東京リージョンの証明書を使える',
                isCorrect: false,
                explanation:
                    'CloudFrontはグローバルサービスであり、ディストリビューションを東京リージョンへ移動するという考え方ではありません。ビューワー向け証明書は `us-east-1` が必要です。',
            },
        ],
        explanation:
            'CloudFrontの独自ドメイン設定では、代替ドメイン名、`us-east-1` のACM証明書、DNSレコードをセットで考えます。CloudFrontはグローバルサービスですが、ACMやLambda@Edgeなど周辺サービスはリージョン依存で、その中で `us-east-1` が特別扱いされる点が試験でも実務でも重要です。',
    },
    {
        question:
            'CloudFrontで `example.com` と `www.example.com` を同じディストリビューションへ向けたい場合の独自ドメイン設計として最も適切なものはどれですか?',
        options: [
            {
                text: '両方を代替ドメイン名に追加し、証明書で両方をカバーし、Route 53ではA/AAAAエイリアスレコードなどでCloudFrontへ向ける',
                isCorrect: true,
                explanation:
                    '`example.com` と `www.example.com` は別の名前です。CloudFrontの代替ドメイン名に両方を追加し、証明書のSAN（証明書が有効なドメイン名の一覧）で両方をカバーします。Route 53のA/AAAAエイリアスレコードは通常のCNAMEと異なり、apexドメイン（`example.com` のようなルートドメイン）にも設定できます。',
            },
            {
                text: '`www.example.com` だけを代替ドメイン名に追加すれば、`example.com` も自動的に含まれる',
                isCorrect: false,
                explanation:
                    '`example.com` と `www.example.com` は自動的には同一扱いされません。使いたい名前をそれぞれ代替ドメイン名と証明書でカバーする必要があります。',
            },
            {
                text: 'ワイルドカード証明書 `*.example.com` があれば、`example.com` 自体も必ずカバーされる',
                isCorrect: false,
                explanation:
                    '`*.example.com` は `www.example.com` や `api.example.com` などの1階層サブドメインをカバーしますが、`example.com` 自体はカバーしません。apexも使うなら証明書に別途含めます。',
            },
            {
                text: '同じ代替ドメイン名を複数のCloudFrontディストリビューションに登録し、DNSで負荷分散する',
                isCorrect: false,
                explanation:
                    '同じ代替ドメイン名を複数のCloudFrontディストリビューションに重複登録することはできません。CloudFrontでの独自ドメイン割り当てを整理する必要があります。',
            },
        ],
        explanation:
            'HTTPSの独自ドメインでは、CloudFront設定、証明書、DNSの3つが一致している必要があります。特にapexドメインでは通常のCNAMEではなくRoute 53エイリアスを使う判断、ワイルドカード証明書の範囲、CNAME重複が実務でつまずきやすいポイントです。',
    },
    {
        question:
            'CloudFrontで「ビューワーにはHTTPSを強制し、CloudFrontからALBへもHTTPSで接続したい」場合の設定として最も適切なものはどれですか?',
        options: [
            {
                text: 'ビューワープロトコルポリシーでRedirect HTTP to HTTPSまたはHTTPS Onlyを使い、オリジンプロトコルポリシーでHTTPS Onlyを設定する',
                isCorrect: true,
                explanation:
                    'Viewer → CloudFront の通信はビューワープロトコルポリシーで制御し、CloudFront → Origin の通信はオリジンプロトコルポリシーで制御します。ALBへもHTTPSで接続したい場合は、ALB側に有効な証明書を用意し、CloudFrontのオリジンプロトコルポリシーをHTTPS Onlyにします。',
            },
            {
                text: 'ビューワープロトコルポリシーだけをHTTPSにすれば、CloudFrontからALBへの通信も必ずHTTPSになる',
                isCorrect: false,
                explanation:
                    'ビューワー側とオリジン側は別の通信区間です。ビューワープロトコルポリシーだけでは、CloudFrontからALBへの接続方式は決まりません。',
            },
            {
                text: 'オリジンプロトコルポリシーだけをHTTPSにすれば、ビューワーのHTTPアクセスも必ずHTTPSへリダイレクトされる',
                isCorrect: false,
                explanation:
                    'オリジンプロトコルポリシーはCloudFrontからオリジンへの通信を制御します。ビューワーのHTTPアクセスをHTTPSへ誘導するには、ビューワープロトコルポリシーを設定します。',
            },
            {
                text: 'CloudFrontのOACを有効にすれば、ビューワーとALBの両方のHTTPS設定は不要になる',
                isCorrect: false,
                explanation:
                    'OACは対応オリジンへのリクエスト署名やアクセス制御に関係する機能です。HTTPSのプロトコル設定や証明書設定とは別に考えます。',
            },
        ],
        explanation:
            'CloudFrontでは「Viewer → CloudFront」と「CloudFront → Origin」を別々に設計します。前者はCloudFrontのビューワー証明書とビューワープロトコルポリシー、後者はオリジン側証明書とオリジンプロトコルポリシーで制御します。',
    },
    {
        question:
            'CloudFrontでAPIのPOSTリクエストをALBオリジンへ転送しています。プライマリALB障害時にオリジンフェイルオーバーでセカンダリへ切り替わることを期待しています。注意点として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudFrontのオリジンフェイルオーバーはGET/HEAD/OPTIONSでのみ動作し、POSTではフェイルオーバーしない',
                isCorrect: true,
                explanation:
                    'CloudFrontのオリジンフェイルオーバーは、ビューワーリクエストのHTTPメソッドがGET、HEAD、OPTIONSの場合に動作します。POST、PUTなどのメソッドではフェイルオーバーしないため、書き込み系APIの高可用性はALBレベルの冗長化、Route 53フェイルオーバー、アプリケーション側リトライ、マルチリージョン設計などで考える必要があります。',
            },
            {
                text: 'POSTでもGETと同じように、指定ステータスコードが返れば必ずセカンダリへ切り替わる',
                isCorrect: false,
                explanation:
                    'CloudFrontのオリジンフェイルオーバーはPOSTでは動作しません。ステータスコード条件を設定していても、対象メソッドの制約があります。',
            },
            {
                text: 'POSTをキャッシュ対象HTTPメソッドに含めれば、フェイルオーバーも有効になる',
                isCorrect: false,
                explanation:
                    'CloudFrontのキャッシュ対象HTTPメソッドはGET/HEADまたはGET/HEAD/OPTIONSです。POSTを通常のキャッシュ対象にする設定はなく、フェイルオーバー対象にもなりません。',
            },
            {
                text: 'OACを設定すれば、POSTリクエストでもフェイルオーバー条件が無視されずに動作する',
                isCorrect: false,
                explanation:
                    'OACはオリジンへのアクセス制御や署名に関係する機能であり、CloudFrontのオリジンフェイルオーバー対象メソッドを変更するものではありません。',
            },
        ],
        explanation:
            '試験では「オリジングループを使えば何でも自動冗長化できる」と考えないことが重要です。読み取り系のGET/HEAD/OPTIONSと、書き込みを伴うPOST/PUTでは、CloudFrontで吸収できる範囲とアプリケーション側で設計すべき範囲が違います。',
    },
    {
        question:
            '既存のCloudFrontディストリビューションAで `www.example.com` を使っています。新しいディストリビューションBへ切り替えるため、Bにも同じ代替ドメイン名を追加しようとしたところ失敗しました。最も適切な理由と対応はどれですか?',
        options: [
            {
                text: '同じ代替ドメイン名は複数ディストリビューションへ重複登録できないため、証明書を用意したうえで移行手順に従ってCNAMEを移動する',
                isCorrect: true,
                explanation:
                    'CloudFrontでは同じ代替ドメイン名 / CNAME（独自ドメインを使うための設定）を複数のディストリビューションへ重複登録できません。移行先には対象ドメインをカバーする証明書を用意し、CloudFrontのCNAME移行手順やDNS切り替えを計画して進めます。',
            },
            {
                text: 'DNSのTTLを0にすれば、同じCNAMEを複数ディストリビューションに登録できる',
                isCorrect: false,
                explanation:
                    'DNSのTTL（DNS応答をキャッシュしてよい時間）を短くしても、CloudFront側の代替ドメイン名重複制約は変わりません。',
            },
            {
                text: 'Bのディストリビューションをus-east-1に作成すれば、同じCNAMEを重複登録できる',
                isCorrect: false,
                explanation:
                    'CloudFrontはグローバルサービスであり、ディストリビューションを `us-east-1` に作るという考え方ではありません。CNAME重複制約もリージョン変更では解決しません。',
            },
            {
                text: '代替ドメイン名を大文字で登録すれば、CloudFrontは別名として扱う',
                isCorrect: false,
                explanation:
                    'CloudFrontの代替ドメイン名は小文字で登録する必要があります。大文字小文字の違いで重複を回避する設計はできません。',
            },
        ],
        explanation:
            'CNAME移行は、DNS切り替えだけで完了するものではなく、CloudFront側の代替ドメイン名移動手順も含めて計画する必要があります。証明書・DNS・CloudFront設定は独立した要素ですが、必ずセットで整合させます。試験では「同じCNAMEを2つのCloudFrontに同時登録してDNSで切り替える」という選択肢は誤りになりやすいです。',
    },
    {
        question:
            'CloudFrontで `*.example.com` の代替ドメイン名と証明書を使っています。この構成で最も正しい説明はどれですか?',
        options: [
            {
                text: '`www.example.com` や `api.example.com` には使えるが、`example.com` 自体は別途代替ドメイン名と証明書でカバーする必要がある',
                isCorrect: true,
                explanation:
                    '`*.example.com` は `www.example.com` や `api.example.com` のような1階層サブドメインをカバーできますが、apexドメイン（`example.com` のようなルートドメイン）自体や、多段サブドメインの `a.b.example.com` はカバーしません。使いたい名前は、証明書のSAN（証明書が有効なドメイン名の一覧）とCloudFrontの代替ドメイン名の両方で一致している必要があります。',
            },
            {
                text: '`*.example.com` があれば、`example.com` も `a.b.example.com` もすべて自動的にカバーされる',
                isCorrect: false,
                explanation:
                    'ワイルドカード証明書やワイルドカード代替ドメイン名の範囲には制約があります。`*.example.com` は通常 `example.com` 自体をカバーせず、複数階層の `a.b.example.com` も別途考慮が必要です。',
            },
            {
                text: 'ワイルドカード代替ドメイン名では証明書のSAN確認は不要になる',
                isCorrect: false,
                explanation:
                    'ワイルドカードを使う場合でも、代替ドメイン名は証明書のSANでカバーされている必要があります。',
            },
            {
                text: 'ワイルドカードは `api.*.example.com` のように任意の位置に置ける',
                isCorrect: false,
                explanation:
                    'CloudFrontのワイルドカード代替ドメイン名は、先頭に `*.` を置く形式で使います。ドメイン名の途中にワイルドカードを置くことはできません。',
            },
        ],
        explanation:
            'ワイルドカードは便利ですが、apexドメインや複数階層サブドメインまで自動で含むわけではありません。証明書とCloudFront代替ドメイン名は別々の設定なので、どちらか片方だけ合っていてもHTTPS独自ドメインとしては成立しません。',
    },
    {
        question:
            'Route 53で `example.com` のapexドメインをCloudFrontへ向けたいです。最も適切なDNS設計はどれですか?',
        options: [
            {
                text: 'Route 53のA/AAAAエイリアスレコードをCloudFrontディストリビューションへ向ける',
                isCorrect: true,
                explanation:
                    'Route 53のエイリアスレコード（AWSリソースへ向けられるRoute 53独自の拡張DNSレコード）は、通常のCNAMEと異なりapexドメインにも設定できます。IPv6も有効にする場合は、Aエイリアスに加えてAAAAエイリアスも作成します。',
            },
            {
                text: '`example.com` に通常のCNAMEレコードを作成してCloudFrontへ向ける',
                isCorrect: false,
                explanation:
                    'DNSの一般的な制約として、apexドメインに通常のCNAMEを置くことはできません。Route 53ではA/AAAAエイリアスレコードを使うのが一般的です。',
            },
            {
                text: 'CloudFrontの代替ドメイン名だけ追加すれば、DNS設定なしで `example.com` が使える',
                isCorrect: false,
                explanation:
                    'CloudFront側の代替ドメイン名だけでは、利用者のDNS問い合わせはCloudFrontへ向きません。DNSレコード設定も必要です。',
            },
            {
                text: 'ACM証明書を発行すれば、Route 53のレコードは自動的に本番切り替えされる',
                isCorrect: false,
                explanation:
                    'ACM証明書（HTTPS通信で使う証明書）の発行と、DNSの本番向き先設定は別です。証明書、代替ドメイン名、DNSレコードをそろえます。',
            },
        ],
        explanation:
            'CloudFrontの独自ドメインでは、apexドメインなら通常のCNAMEは使えないためRoute 53 alias、サブドメインならCNAMEまたはalias、という判断が出ます。Route 53 aliasはAWSリソース向けの拡張で、CloudFront向けのSAA頻出ポイントです。',
    },
    {
        question:
            'CloudFrontで「利用者にはHTTPSを強制したいが、オリジンのALBへはHTTPで接続する」設計を検討しています。最も正しい理解はどれですか?',
        options: [
            {
                text: 'Viewer → CloudFrontはビューワープロトコルポリシーでHTTPS強制し、CloudFront → OriginはオリジンプロトコルポリシーでHTTP Onlyにできる',
                isCorrect: true,
                explanation:
                    'CloudFrontでは、Viewer → CloudFront はビューワープロトコルポリシーで制御し、CloudFront → Origin はオリジンプロトコルポリシーで制御します。この2つは独立した設定です。利用者側はHTTPSへリダイレクトまたはHTTPS Onlyにしつつ、オリジン側は要件に応じてHTTP Only、HTTPS Only、Match Viewerを選べます。',
            },
            {
                text: 'Viewer → CloudFrontをHTTPSにすると、CloudFront → Originも必ずHTTPSになる',
                isCorrect: false,
                explanation:
                    'ビューワー側とオリジン側は別設定です。ビューワープロトコルポリシーだけでは、CloudFrontからオリジンへの通信方式は決まりません。',
            },
            {
                text: 'CloudFront → OriginをHTTPにすると、Viewer → CloudFrontでもHTTPSは使えない',
                isCorrect: false,
                explanation:
                    'オリジン側がHTTPでも、ビューワー側でHTTPSを使うことはできます。ただし、要件によってはエンドツーエンドでHTTPSにすべきです。',
            },
            {
                text: 'OACを有効にすれば、Viewer側とOrigin側のプロトコルポリシーは不要になる',
                isCorrect: false,
                explanation:
                    'OAC（Origin Access Control）は対応オリジンへのアクセス制御や署名に関係します。HTTP/HTTPSの通信方式を決めるプロトコルポリシーとは別です。',
            },
        ],
        explanation:
            'HTTPS設計では、証明書をどこで使うかも分けて考えます。オリジンをHTTPにする設計は可能ですが、セキュリティ要件によってはViewer → CloudFrontだけでなくCloudFront → OriginもHTTPSにするエンドツーエンドHTTPSが推奨されます。CloudFrontのビューワー向け証明書は `us-east-1` のACMが必要で、ALB側でHTTPSにするならALBのリージョンでオリジン用証明書を管理します。',
    },
    {
        question:
            '会員向け動画配信で、HLSの複数セグメントファイルをCloudFront経由で制限付き配信したいです。既存URLは変えたくありません。最も適切な選択はどれですか?',
        options: [
            {
                text: '署名付きCookieを使い、キーグループの公開鍵でCloudFrontが署名を検証できるようにする',
                isCorrect: true,
                explanation:
                    '署名付きCookie（Cookieで複数ファイルへのアクセスを許可する仕組み）は、HLS動画のようにマニフェストと複数セグメントファイルをまとめて扱う配信に向きます。URLを書き換えずに認可制御でき、CloudFrontはキーグループの公開鍵で署名を検証し、アプリケーション側は対応する秘密鍵でCookieを発行します。',
            },
            {
                text: '各セグメントURLに個別の署名付きURLを必ず付ける必要があり、Cookieは使えない',
                isCorrect: false,
                explanation:
                    '署名付きURLも使えますが、複数ファイルや既存URLを変えたくない場合は署名付きCookieが向いています。',
            },
            {
                text: '地理的制限を有効にすれば、会員認証の代わりとして十分である',
                isCorrect: false,
                explanation:
                    '地理的制限は国単位のアクセス制御です。会員ごとの認可や期限付きアクセス制御の代わりにはなりません。',
            },
            {
                text: 'WAFのSQLインジェクション対策ルールだけで動画ファイルの会員制限を実現する',
                isCorrect: false,
                explanation:
                    'WAFはWebリクエストの検査・防御に使いますが、会員ごとのコンテンツアクセス許可を管理する仕組みではありません。',
            },
        ],
        explanation:
            '制限付き配信では、署名付きURL、署名付きCookie、WAF、地理的制限の役割を分けます。署名付きCookieは「複数ファイル」「既存URLを変えたくない」「Cookieでまとめて認可したい」場合の選択肢として重要です。',
    },
    {
        question:
            '特定の1つのインストーラー `setup.exe` を、購入者だけが24時間ダウンロードできるようにしたいです。CloudFrontの制限付き配信として最も適切なものはどれですか?',
        options: [
            {
                text: '有効期限付きの署名付きURLを発行し、必要ならカスタムポリシーでIPアドレス条件も追加する',
                isCorrect: true,
                explanation:
                    '署名付きURLは、個別ファイルへの一時的なアクセス許可に向いています。URL自体に署名情報を持たせるため、単一ファイルなら管理しやすく、キャッシュ対象URLも明確です。基本的な有効期限に加え、カスタムポリシーを使うとIPアドレス制限なども指定できます。',
            },
            {
                text: '署名付きCookieを必ず使う。個別ファイルには署名付きURLは使えない',
                isCorrect: false,
                explanation:
                    '個別ファイルへの制限付きアクセスには署名付きURLが向いています。署名付きCookieは複数ファイルや既存URLを変えたくない場合に向きます。',
            },
            {
                text: 'CloudFrontの標準ログを有効にすれば、未購入者のダウンロードは自動的に拒否される',
                isCorrect: false,
                explanation:
                    '標準ログはアクセス記録であり、認可制御ではありません。未購入者を拒否するには署名付きURL/Cookieやアプリケーション側の認可が必要です。',
            },
            {
                text: 'Route 53 aliasを使えば、購入者だけに自動でアクセス制限できる',
                isCorrect: false,
                explanation:
                    'Route 53 aliasはDNSでCloudFrontへ向けるための設定です。購入者かどうかの認可は行いません。',
            },
        ],
        explanation:
            'SAA風の問題では「個別ファイルなら署名付きURL」「複数ファイルやURLを変えたくないなら署名付きCookie」という判断軸がよく効きます。多数のファイルに個別URL署名を付けるとURL管理が複雑になるため、用途に応じてCookieと使い分けます。',
    },
    {
        question:
            'CloudFrontで日本以外からのアクセスを拒否しつつ、SQLインジェクションや大量リクエストも防ぎたいです。設計として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudFrontの地理的制限またはAWS WAFの地理一致条件で国制限を行い、WAFのマネージドルールやレートベースルールも組み合わせる',
                isCorrect: true,
                explanation:
                    '地理的制限（国単位のアクセス制御）は国での許可/拒否に使えます。SQLインジェクションのようなリクエスト内容の検査や、大量リクエストへのレート制御にはWAF（Web Application Firewall）のマネージドルールやレートベースルールを組み合わせます。',
            },
            {
                text: 'CloudFrontの地理的制限だけで、SQLインジェクションや大量リクエストも自動的に防げる',
                isCorrect: false,
                explanation:
                    '地理的制限は国単位のアクセス制御です。リクエスト内容の攻撃検査やレート制限にはWAFを使います。',
            },
            {
                text: 'WAFを使うとCloudFrontのキャッシュが完全に無効になるため、使うべきではない',
                isCorrect: false,
                explanation:
                    'WAFをCloudFrontに関連付けても、CloudFrontのキャッシュ機能そのものが完全に無効になるわけではありません。セキュリティ要件に応じて組み合わせます。',
            },
            {
                text: '署名付きURLを使えば、国制限とSQLインジェクション対策とレート制限がすべて自動で有効になる',
                isCorrect: false,
                explanation:
                    '署名付きURLは制限付きコンテンツへのアクセス許可に使います。国制限、攻撃検査、レート制限は別の機能で設計します。',
            },
        ],
        explanation:
            'セキュリティ設計では、国単位の制限、認可、攻撃検査、レート制限を別々の目的として整理します。地理的制限とWAFは役割が異なり、要件によって組み合わせて使います。署名付きURL/Cookieはさらに別の、制限付きコンテンツへの認可制御です。',
    },
    {
        question:
            'CloudFrontで署名付きURLと署名付きCookieを同じファイルに対して両方使った場合の挙動として最も適切なものはどれですか?',
        options: [
            {
                text: 'リクエストに署名付きURLのパラメータが含まれる場合、CloudFrontは署名付きURLを優先して判定する',
                isCorrect: true,
                explanation:
                    'CloudFrontでは署名付きURLと署名付きCookieを同じファイルに使った場合、署名付きURLが優先されます。URLに `Expires`、`Policy`、`Signature`、`Key-Pair-Id` など署名用のクエリパラメータが含まれる場合、CloudFrontは署名付きCookieではなく署名付きURLに基づいてアクセス可否を判断します。',
            },
            {
                text: '署名付きCookieが常に署名付きURLより優先される',
                isCorrect: false,
                explanation:
                    'CloudFrontでは、同じファイルへのアクセス制御で署名付きURLがある場合、署名付きURLが優先されます。',
            },
            {
                text: '両方を使うとCloudFrontは必ず403を返す',
                isCorrect: false,
                explanation:
                    '両方が存在するだけで必ず403になるわけではありません。優先される署名付きURLの条件に基づいて判定されます。',
            },
            {
                text: '両方を使うとCloudFrontはWAFを自動的に無効化する',
                isCorrect: false,
                explanation:
                    '署名付きURL/Cookieの利用とWAFの有効無効は別です。WAFはWeb ACLとしてCloudFrontディストリビューションに関連付けます。',
            },
        ],
        explanation:
            '署名付きURLで使う `Expires`、`Policy`、`Signature`、`Key-Pair-Id` などのクエリ文字列はCloudFrontで特別扱いされます。既存URLにこれらの名前を使っている場合は、アプリケーション側のクエリ文字列と衝突するリスクがあります。',
    },
    {
        question:
            '既存のS3オリジンでOAIを使って非公開配信しています。SSE-KMS暗号化や新しいリージョンへの対応を考え、OACへ移行したいです。移行手順として最も適切なものはどれですか?',
        options: [
            {
                text: '一時的にバケットポリシーでOAIとOACの両方を許可し、ディストリビューションをOACへ切り替えてデプロイ完了後にOAIの許可を削除する',
                isCorrect: true,
                explanation:
                    'OAI（Origin Access Identity）からOAC（Origin Access Control）へ移行する場合、CloudFront設定変更はすべてのエッジロケーションへ即時反映されません。伝播中のアクセス断を避けるゼロダウンタイム移行のため、まずS3バケットポリシーで既存OAIと新しいOAC付きディストリビューションの両方を許可し、デプロイ完了後にOAI向け許可を削除します。',
            },
            {
                text: '最初にOAI向けのバケットポリシーを削除し、その後ゆっくりOACを設定する',
                isCorrect: false,
                explanation:
                    '先にOAIの許可を削除すると、CloudFrontがS3へアクセスできなくなり配信停止につながる可能性があります。移行中は両方を許可しておくのが安全です。',
            },
            {
                text: 'S3バケットをパブリック公開すればOAC移行は不要で、セキュリティ上も同等である',
                isCorrect: false,
                explanation:
                    'S3をパブリック公開すると、CloudFrontを経由しない直接アクセスを許すことになります。OACはS3を直接公開せずCloudFront経由に制限するための仕組みです。',
            },
            {
                text: 'OAIとOACは同時にバケットポリシーへ書けないため、必ずメンテナンス停止が必要である',
                isCorrect: false,
                explanation:
                    '移行時には、OAI向けとOAC向けの両方の許可をバケットポリシーに含められます。停止を避けるための段階的な移行が可能です。',
            },
        ],
        explanation:
            'OACはOAIより新しい推奨方式で、SSE-KMS（AWS KMSによるS3サーバー側暗号化）、新しいリージョン、S3への動的リクエストなどに対応します。既存OAI構成では、CloudFrontの伝播時間を考慮し、いきなり置き換えず段階的に移行する判断が重要です。',
    },
    {
        question:
            'S3バケットでパブリックアクセスブロックを有効にしたまま、CloudFront OAC経由で静的ファイルを配信したいです。最も適切な理解はどれですか?',
        options: [
            {
                text: 'パブリックアクセスブロックは公開許可を抑止する設定であり、OACとバケットポリシーで明示的に許可したCloudFrontからの非公開アクセスとは両立できる',
                isCorrect: true,
                explanation:
                    'S3 Public Access Block（S3のパブリック公開を防ぐ保護設定）は、すべてのアクセスを拒否する設定ではなく、パブリックな許可を抑止する設定です。OACを使い、バケットポリシーでPrincipalに `cloudfront.amazonaws.com`、条件の `AWS:SourceArn` に対象ディストリビューションARN（AWSリソースを一意に表す名前）を指定して `s3:GetObject` を許可すれば、S3を公開せずCloudFront経由だけで配信できます。',
            },
            {
                text: 'パブリックアクセスブロックを有効にすると、CloudFrontからのアクセスも必ず拒否される',
                isCorrect: false,
                explanation:
                    'パブリックアクセスブロックは公開アクセスを防ぐための設定です。明示的に許可されたCloudFront OAC経由のアクセスとは別に考えます。',
            },
            {
                text: 'OACを使うには、パブリックアクセスブロックを無効化し、全オブジェクトを公開する必要がある',
                isCorrect: false,
                explanation:
                    'OACはS3を直接公開せずCloudFront経由に制限するための機能です。全オブジェクト公開はOACの目的と逆です。',
            },
            {
                text: 'バケットポリシーでは `s3:*` を許可するのが最小権限である',
                isCorrect: false,
                explanation:
                    '`s3:*` は広すぎます。読み取り配信だけなら通常 `s3:GetObject` を対象オブジェクトに限定して許可します。',
            },
        ],
        explanation:
            '設計原則は「S3は非公開のまま、CloudFrontだけを明示的に許可」です。パブリックアクセスブロック、OAC、バケットポリシーをセットで考えると、公開アクセスは防ぎつつ、明示的に許可されたCloudFrontサービスアクセスは通せます。',
    },
    {
        question:
            'S3オリジンでSSE-KMS暗号化されたオブジェクトをCloudFrontから配信したいです。OACを使う場合の設計として最も適切なものはどれですか?',
        options: [
            {
                text: 'S3バケットポリシーでCloudFrontからのGetObjectを許可し、KMSキーポリシーでも対象ディストリビューションからの利用を許可する',
                isCorrect: true,
                explanation:
                    'SSE-KMS（AWS KMSによるS3サーバー側暗号化）のオブジェクトをOAC経由で配信する場合、S3バケットポリシーだけでは不十分です。S3アクセス権限に加えて、KMSキーポリシーでもCloudFrontサービスプリンシパルに `kms:Decrypt` を許可し、`AWS:SourceArn` などで対象ディストリビューションに絞る設計が基本です。',
            },
            {
                text: 'OACを使えばKMSキーポリシーは一切不要になり、自動的に復号できる',
                isCorrect: false,
                explanation:
                    'OACを使っても、SSE-KMSの復号にはKMSキー側の権限が必要です。S3とKMSの両方の権限を確認します。',
            },
            {
                text: 'SSE-KMSを使う場合はOAIを使うのが推奨で、OACは対応していない',
                isCorrect: false,
                explanation:
                    '逆です。OACはSSE-KMSに対応しており、OAIより推奨されます。OAIではSSE-KMSなどで制約や回避策が必要になります。',
            },
            {
                text: 'KMSキーをパブリックにすれば、CloudFrontから安全に配信できる',
                isCorrect: false,
                explanation:
                    'KMSキーを広く許可するのは危険です。対象CloudFrontディストリビューションなどに絞って最小権限で許可します。',
            },
        ],
        explanation:
            'OAC/OAIの移行判断では、SSE-KMS、新しいリージョン、S3へのPUT/DELETEなど、OAIが苦手な領域を確認します。SSE-KMSを使う構成では、S3アクセス権限とKMS復号権限という2つの権限レイヤーを分けて設計します。',
    },
    {
        question:
            'CloudFrontの制限付き配信で「会員エリア全体にアクセスさせたいが、既存URLは変更したくない」場合の判断として最も適切なものはどれですか?',
        options: [
            {
                text: '署名付きCookieを使い、複数ファイルに対するアクセス権をCookieでまとめて渡す',
                isCorrect: true,
                explanation:
                    '署名付きCookieは、HLSのセグメントファイルのように多数の制限付きファイルへアクセスさせたい場合や、既存URLを変更したくない場合に向きます。Cookieでセッション的に認可情報を持たせられるため、CloudFrontはCookie内の署名やポリシーを検証し、条件に合う場合だけコンテンツを返します。',
            },
            {
                text: 'すべてのURLに個別の署名付きURLを付けるしかない',
                isCorrect: false,
                explanation:
                    '個別ファイルなら署名付きURLが向きますが、会員エリア全体やHLS動画の複数ファイルでは署名付きCookieの方が扱いやすい場合があります。',
            },
            {
                text: 'WAFを有効化すれば、会員ごとのアクセス許可が自動的に管理される',
                isCorrect: false,
                explanation:
                    'WAFはリクエスト内容の検査やレート制限に使うサービスです。会員ごとのコンテンツ認可を自動管理する機能ではありません。',
            },
            {
                text: '地理的制限を有効にすれば、会員エリアの認可制御として十分である',
                isCorrect: false,
                explanation:
                    '地理的制限は国単位のアクセス制御です。会員ごとの認可とは目的が違います。',
            },
        ],
        explanation:
            '署名付きURL/Cookieは「誰にどのコンテンツを許可するか」を扱います。単一ファイルなら署名付きURL、複数ファイルやURL変更不可なら署名付きCookieが基本判断です。キャッシュとの相性も考え、署名付きURLではURLごとの管理、Cookieでは既存URLを維持した制御がしやすくなります。',
    },
    {
        question:
            'CloudFrontで特定国からのアクセス拒否と、SQLインジェクション対策、レート制限を同時に行いたいです。設計判断として最も適切なものはどれですか?',
        options: [
            {
                text: '国単位の単純な制限はCloudFront地理的制限またはWAFの地理一致条件で行い、攻撃検査やレート制限はWAFルールで行う',
                isCorrect: true,
                explanation:
                    'CloudFront geo restriction（CloudFrontの地理的制限）は国単位の許可/拒否に使えます。一方、SQLインジェクション対策やレート制限はAWS WAFのWeb ACL、マネージドルール、レートベースルールで行います。目的ごとに機能を分けるのが適切です。',
            },
            {
                text: 'CloudFront地理的制限だけで、SQLインジェクションやレート制限も自動的に処理される',
                isCorrect: false,
                explanation:
                    '地理的制限は国単位のアクセス制御です。リクエスト内容の攻撃検査やリクエスト数の制御はWAFで行います。',
            },
            {
                text: 'WAFを使うと地理的な条件は設定できないため、必ずCloudFront地理的制限だけを使う',
                isCorrect: false,
                explanation:
                    'WAFにも地理一致条件があります。単純な国制限ならCloudFront地理的制限、複雑な条件と組み合わせるならWAF、という判断ができます。',
            },
            {
                text: '署名付きURLを使えば、国制限、攻撃検査、レート制限をすべて置き換えられる',
                isCorrect: false,
                explanation:
                    '署名付きURLは制限付きコンテンツへのアクセス許可に使います。国制限や攻撃検査、レート制限とは役割が異なります。',
            },
        ],
        explanation:
            'セキュリティ・制限付き配信では、認可、国制限、攻撃検査、レート制限を分けて考えます。地理的制限は国単位のアクセス制御、WAFは攻撃検査・レート制御、署名付きURL/Cookieは認可制御です。これらは置き換えではなく、要件に応じて組み合わせる機能です。',
    },
    {
        question:
            'CloudFrontで全リクエストに対して軽量なURL正規化と単純なリダイレクトを行いたいです。低レイテンシで実行したい場合の選択として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudFront Functionsをビューワーリクエストイベントに関連付ける',
                isCorrect: true,
                explanation:
                    'CloudFront Functionsは、ビューワーリクエスト/ビューワーレスポンスで動く超低レイテンシの軽量JavaScript処理に向いています。エッジで即実行されますが、外部ネットワークアクセスや重い処理には向きません。URL正規化、単純なリダイレクト、ヘッダー操作などが典型です。',
            },
            {
                text: 'Lambda@Edgeのオリジンレスポンスイベントを必ず使う',
                isCorrect: false,
                explanation:
                    '単純なビューワー側のURL正規化やリダイレクトなら、CloudFront Functionsが軽量で適しています。オリジンレスポンスはCloudFrontがオリジンからレスポンスを受け取った後のイベントで、今回の用途とは合いません。',
            },
            {
                text: 'WAFのSQLインジェクション対策ルールでURL正規化を実装する',
                isCorrect: false,
                explanation:
                    'WAFは攻撃検査やレート制限に使うサービスであり、一般的なURL正規化ロジックを実装する場所ではありません。',
            },
            {
                text: 'CloudFront標準ログを有効にすれば、リダイレクトが自動実行される',
                isCorrect: false,
                explanation:
                    '標準ログはリクエスト記録であり、リダイレクト処理を実行する機能ではありません。',
            },
        ],
        explanation:
            'エッジ処理では、まずCloudFront Functionsで足りるかを確認します。軽量・低レイテンシなviewer request/viewer response処理ならCloudFront Functions、外部連携や重い処理、origin request/origin responseが必要な場合はLambda@Edgeを検討します。',
    },
    {
        question:
            'CloudFrontでオリジンへリクエストを送る直前に、パスを書き換えたりオリジン向けヘッダーを追加したりしたいです。最も適切な選択はどれですか?',
        options: [
            {
                text: 'Lambda@Edgeをオリジンリクエストイベントに関連付ける',
                isCorrect: true,
                explanation:
                    'Lambda@Edgeは、ビューワーリクエスト/レスポンスだけでなく、オリジンリクエスト/レスポンスでも実行できます。CloudFront Functionsはオリジン向きイベントでは使えないため、オリジンへ送る直前の処理にはLambda@Edgeを検討します。',
            },
            {
                text: 'CloudFront Functionsをオリジンリクエストイベントに関連付ける',
                isCorrect: false,
                explanation:
                    'CloudFront Functionsはビューワーリクエスト/ビューワーレスポンスのイベントで使う機能です。オリジンリクエストやオリジンレスポンスでは使えません。',
            },
            {
                text: 'CloudFrontの地理的制限を有効にすれば、オリジン向けヘッダーを追加できる',
                isCorrect: false,
                explanation:
                    '地理的制限は国単位のアクセス制御です。オリジン向けヘッダー追加やパス書き換えにはエッジ関数を検討します。',
            },
            {
                text: 'OAIを有効にすれば、任意のヘッダー変換ができる',
                isCorrect: false,
                explanation:
                    'OAIはS3オリジンへのアクセス制限のレガシーな仕組みです。ヘッダー変換やパス書き換えを行う機能ではありません。',
            },
        ],
        explanation:
            'Lambda@Edgeを使う場合は、関数を `us-east-1` に作成し、`$LATEST` ではなく発行済みバージョンをキャッシュビヘイビアのイベントに関連付けます。通常のLambdaと異なり制約があり、デプロイ反映にも時間がかかるため、どのイベントで処理するかを事前に決めることが重要です。',
    },
    {
        question:
            'CloudFront FunctionsとLambda@Edgeの選択で、最も適切な設計判断はどれですか?',
        options: [
            {
                text: '軽量なビューワー側処理はCloudFront Functionsを優先し、オリジン側イベントやより複雑な処理が必要な場合にLambda@Edgeを検討する',
                isCorrect: true,
                explanation:
                    'CloudFront Functionsは高速・軽量なviewer request/viewer response処理向けです。Lambda@Edgeはorigin request/origin responseにも対応でき、より柔軟な処理に使えますが、`us-east-1`、発行済みバージョン、デプロイ反映、通常のLambdaとの制約差などを考慮する必要があります。',
            },
            {
                text: 'Lambda@Edgeの方が高機能なので、すべての処理でCloudFront Functionsを使うべきではない',
                isCorrect: false,
                explanation:
                    '高機能な方を常に選ぶのが正解ではありません。軽量なビューワー側処理ならCloudFront Functionsの方が低レイテンシで適している場合があります。',
            },
            {
                text: 'CloudFront Functionsはオリジンリクエストでも使えるため、Lambda@Edgeは不要である',
                isCorrect: false,
                explanation:
                    'CloudFront Functionsはオリジンリクエスト/レスポンスでは使えません。オリジン側イベントが必要ならLambda@Edgeを検討します。',
            },
            {
                text: 'どちらもキャッシュビヘイビアに関連付ける必要はなく、作成すれば全ディストリビューションで自動実行される',
                isCorrect: false,
                explanation:
                    'CloudFront FunctionsもLambda@Edgeも、対象のディストリビューション、キャッシュビヘイビア、イベントに関連付けて使います。作成しただけでは全配信に自動適用されません。',
            },
        ],
        explanation:
            'エッジ処理の設計では「どのイベントで処理するか」が最重要です。viewer request、viewer response、origin request、origin responseのどこで処理したいか、処理の重さ、レイテンシ要求、外部連携の有無を整理します。SAAでは、CloudFront FunctionsとLambda@Edgeのイベント範囲と制約の違いが判断軸になります。',
    },
]
