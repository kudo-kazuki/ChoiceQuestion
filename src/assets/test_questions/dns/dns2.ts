import type { Question } from '@/types/test_questions'

export const testQuestions: Question[] = [
    {
        question:
            'Webサイトの移行に備えて、example.com のAレコードを1週間後に新しいIPアドレスへ切り替える予定です。切り替え時の古いIPアドレスへの到達をできるだけ短くしたい場合、最も適切な事前対応はどれですか?',
        options: [
            {
                text: '切り替え前にAレコードのTTLを十分短くしておき、既存キャッシュが短いTTLへ更新される時間を確保する',
                isCorrect: true,
                explanation:
                    'DNS応答はTTLの間キャッシュされます。切り替え直前にTTLを下げても、以前の長いTTLでキャッシュ済みのリゾルバーには効きません。事前にTTLを短くし、そのTTLが行き渡る時間を確保するのが実運用上の定番です。',
            },
            {
                text: '切り替え当日にTTLを短くすれば、全リゾルバーのキャッシュが即座に消える',
                isCorrect: false,
                explanation:
                    'TTL変更は既にキャッシュされた応答を強制削除しません。以前のTTLが残っているリゾルバーは、その期限まで古い応答を使う可能性があります。',
            },
            {
                text: 'Aレコードを削除してから新しいAレコードを追加すれば、キャッシュは必ず無効化される',
                isCorrect: false,
                explanation:
                    'レコードを削除しても、既にキャッシュされた古い応答が即座に消えるわけではありません。さらに削除状態がキャッシュされると一時的な名前解決失敗を広げる可能性があります。',
            },
            {
                text: 'TTLを長くすれば、変更後のIPアドレスがより早く全世界へ伝播する',
                isCorrect: false,
                explanation:
                    'TTLを長くするとキャッシュは長持ちしますが、変更の反映は遅くなりやすいです。切り替え直前の反映性を重視するなら短めのTTLが適しています。',
            },
        ],
        explanation:
            'DNS変更でよく言われる「伝播待ち」の多くは、権威DNSの同期ではなくリゾルバー側のキャッシュ待ちです。事前にTTLを下げ、切り替え後に安定したらTTLを戻す運用がよく使われます。',
    },
    {
        question:
            'sub.example.com を別事業部のDNSチームへ委任したいと考えています。親ゾーン example.com 側で最も重要な設定はどれですか?',
        options: [
            {
                text: 'sub.example.com のNSレコードを親ゾーンに作成し、委任先の権威DNSサーバーを指定する',
                isCorrect: true,
                explanation:
                    'サブドメイン委任では、親ゾーンに委任先を示すNSレコードを置きます。これによりリゾルバーは sub.example.com 以下の問い合わせを委任先の権威DNSサーバーへたどれます。',
            },
            {
                text: '親ゾーンのAレコードをすべて削除し、sub.example.com 側に移す',
                isCorrect: false,
                explanation:
                    '委任に親ゾーンの既存Aレコード削除は不要です。委任したいサブドメインに対するNSレコードを親ゾーンへ追加します。',
            },
            {
                text: 'sub.example.com にCNAMEレコードを設定すれば、サブドメイン全体が委任される',
                isCorrect: false,
                explanation:
                    'CNAMEは特定の名前を別名にするレコードであり、ゾーン全体の委任ではありません。サブドメインの管理を分けるにはNSによる委任を使います。',
            },
            {
                text: '親ゾーンのMXレコードを委任先のDNSサーバー名に変更する',
                isCorrect: false,
                explanation:
                    'MXレコードはメール配送先を指定するレコードです。DNS管理の委任先を指定する用途ではありません。',
            },
        ],
        explanation:
            '委任では親ゾーンにNSレコード、子ゾーン側には実際の各レコードを配置します。委任先ネームサーバー名が委任対象ドメイン配下にある場合は、名前解決の循環を避けるためグルーレコードが必要になることがあります。',
    },
    {
        question:
            'www.example.com にCNAMEレコードを設定しようとしたところ、同じ名前にTXTレコードも必要になりました。DNSの仕様上、最も適切な判断はどれですか?',
        options: [
            {
                text: 'CNAMEがある名前には原則として他のデータレコードを共存させないため、別の設計を検討する',
                isCorrect: true,
                explanation:
                    'CNAMEレコードはその名前が別名であることを示します。CNAMEが存在する名前には、原則として他のレコードタイプを同居させません。TXTも同じ名前に置きたい場合は、A/AAAAやサービス側のALIAS/ANAME相当機能など別設計を検討します。',
            },
            {
                text: 'CNAMEとTXTは用途が違うため、同じ名前に必ず自由に共存できる',
                isCorrect: false,
                explanation:
                    'CNAMEは例外的な扱いを持つレコードです。同じ所有者名に他のデータレコードを共存させる前提で設計すると、DNS仕様やDNSサービスの制約にぶつかります。',
            },
            {
                text: 'TXTレコードを追加すると、CNAMEの参照先IPアドレスが自動的にTXTへコピーされる',
                isCorrect: false,
                explanation:
                    'TXTは任意のテキスト情報を置くためのレコードであり、CNAMEの解決結果を自動コピーする機能はありません。',
            },
            {
                text: 'CNAMEをMXレコードに変換すれば、WebアクセスとTXT検証の両方を満たせる',
                isCorrect: false,
                explanation:
                    'MXはメール配送先を指定するレコードで、Webアクセス先の別名設定には使いません。CNAME制約の解決策にもなりません。',
            },
        ],
        explanation:
            '実運用では、CDNやSaaSの接続確認でTXTが必要な名前と、CNAMEで向けたい名前が衝突することがあります。DNSサービスが提供するALIAS/ANAME風の独自機能や、検証用ホスト名の分離などを検討します。',
    },
    {
        question:
            'DNSSECを有効化したドメインで、多くの利用者から「名前解決がSERVFAILになる」と報告されました。一方、権威DNSサーバーには対象レコードが存在します。原因として最も疑うべきものはどれですか?',
        options: [
            {
                text: 'DSレコードや署名鍵の不整合により、検証リゾルバーがDNSSEC検証に失敗している',
                isCorrect: true,
                explanation:
                    'DNSSECでは親ゾーンのDSレコードと子ゾーンのDNSKEY、署名済み応答の整合性が重要です。不整合があると、検証リゾルバーは改ざんの可能性がある応答として扱い、SERVFAILを返すことがあります。',
            },
            {
                text: 'Aレコードが存在する場合、DNSSECでは必ずSERVFAILになる',
                isCorrect: false,
                explanation:
                    'AレコードとDNSSECは両立できます。DNSSECはレコードの存在そのものではなく、署名と信頼の連鎖を検証します。',
            },
            {
                text: 'TTLが0より大きい場合、DNSSEC検証は必ず失敗する',
                isCorrect: false,
                explanation:
                    'TTLが0より大きいこと自体はDNSSEC失敗の原因ではありません。通常のDNSSEC署名付きレコードにもTTLは設定されます。',
            },
            {
                text: 'MXレコードがないドメインは、DNSSECでWebアクセスも必ず失敗する',
                isCorrect: false,
                explanation:
                    'MXレコードはメール配送用です。Webアクセスの名前解決やDNSSEC検証の成否とは直接関係しません。',
            },
        ],
        explanation:
            'DNSSECトラブルでは、権威DNSにレコードがあるかだけでなく、DS、DNSKEY、RRSIG、NSEC/NSEC3などの整合性を確認します。特にレジストラ側DS更新漏れや鍵ロールオーバー失敗は典型的な原因です。',
    },
    {
        question:
            'メール送信元IPアドレスの逆引きDNSを設定したいと考えています。最も適切な説明はどれですか?',
        options: [
            {
                text: '逆引きはIPアドレスから名前を引く仕組みで、通常はIPアドレスを管理する事業者側の逆引きゾーンにPTRレコードを設定する',
                isCorrect: true,
                explanation:
                    '逆引きDNSはPTRレコードでIPアドレスからホスト名を返します。多くの場合、逆引きゾーンはIPアドレスの割り当てを受けているISP、クラウド事業者、ホスティング事業者側が管理します。',
            },
            {
                text: '自分のドメインの通常ゾーンにAレコードを追加すれば、任意のIPアドレスの逆引きは必ず設定できる',
                isCorrect: false,
                explanation:
                    'Aレコードは名前からIPアドレスへの正引きです。逆引きにはIPアドレス側の逆引きゾーンにPTRレコードが必要で、通常ゾーンのAレコード追加だけでは逆引き設定になりません。',
            },
            {
                text: 'PTRレコードはWebサイトのリダイレクト先URLを指定するためのレコードである',
                isCorrect: false,
                explanation:
                    'PTRレコードは逆引きでIPアドレスに対応する名前を返すレコードです。URLリダイレクトを指定するDNSレコードではありません。',
            },
            {
                text: '逆引きDNSはDNSSECを有効にしたドメインでは使用できない',
                isCorrect: false,
                explanation:
                    '逆引きDNSとDNSSECは排他的な仕組みではありません。逆引きゾーンにもDNSSEC署名を適用することは可能です。',
            },
        ],
        explanation:
            'メール運用では、送信元IPのPTR、PTRが返す名前の正引き、SPF/DKIM/DMARCなどを合わせて確認されることがあります。逆引きは自ドメインの通常DNSゾーンだけで完結しない点が重要です。',
    },
    {
        question:
            'Route 53で example.com のようなゾーン apex をCloudFrontディストリビューションへ向けたいと考えています。DNS仕様上CNAMEはapexに作れません。最も適切な設定はどれですか?',
        options: [
            {
                text: 'Route 53のAliasレコードを作成し、CloudFrontディストリビューションをターゲットにする',
                isCorrect: true,
                explanation:
                    'Route 53のAliasレコードはAWSリソースなどへルーティングできるRoute 53独自の拡張です。CNAMEを作れないゾーンapexでもAliasレコードを使ってCloudFrontなどへ向けられます。',
            },
            {
                text: 'example.com にCNAMEレコードを作成し、CloudFrontのドメイン名を値にする',
                isCorrect: false,
                explanation:
                    'DNS仕様上、ゾーンapexにはCNAMEレコードを作成できません。Route 53ではこの用途にAliasレコードを使います。',
            },
            {
                text: 'example.com のNSレコードをCloudFrontのドメイン名に変更する',
                isCorrect: false,
                explanation:
                    'NSレコードは権威DNSサーバーを指定するレコードです。CloudFrontへのWebトラフィック誘導には使いません。',
            },
            {
                text: 'MXレコードでCloudFrontのドメイン名を指定する',
                isCorrect: false,
                explanation:
                    'MXレコードはメール配送先の指定です。WebアクセスをCloudFrontへ向ける用途ではありません。',
            },
        ],
        explanation:
            'Route 53 Aliasは、ゾーンapexをCloudFront、ELB、S3静的Webサイトエンドポイントなどへ向けるときに頻出です。通常のCNAME制約とRoute 53独自機能の違いを押さえる必要があります。',
    },
    {
        question:
            'Route 53で新旧2つのWeb環境へ段階的にトラフィックを移し、最初は新環境10%、旧環境90%で配信したいと考えています。最も適切なルーティングポリシーはどれですか?',
        options: [
            {
                text: '加重ルーティングポリシー',
                isCorrect: true,
                explanation:
                    '加重ルーティングは複数リソースへ指定した比率でDNS応答を返す用途に使います。段階移行、カナリアリリース、A/Bテストのようなシナリオに向いています。',
            },
            {
                text: 'フェイルオーバールーティングポリシー',
                isCorrect: false,
                explanation:
                    'フェイルオーバールーティングはアクティブ/パッシブ構成で、正常性に応じて待機系へ切り替える用途です。10%/90%のような比率配分には加重ルーティングが適切です。',
            },
            {
                text: 'シンプルルーティングポリシー',
                isCorrect: false,
                explanation:
                    'シンプルルーティングは単一リソースなど単純な応答に使います。段階的な比率配分の制御には向きません。',
            },
            {
                text: '位置情報ルーティングポリシー',
                isCorrect: false,
                explanation:
                    '位置情報ルーティングはユーザーの地理的位置に基づく応答制御です。新旧環境への割合配分が主目的なら加重ルーティングです。',
            },
        ],
        explanation:
            'Route 53のルーティングポリシーは用途で選びます。割合配分は加重、アクティブ/パッシブはフェイルオーバー、リージョン間の低レイテンシ誘導はレイテンシールーティングです。',
    },
    {
        question:
            'VPC内のEC2から db.internal.example.com をプライベートIPへ解決したいが、インターネット上からは解決させたくありません。Route 53で最も適切な構成はどれですか?',
        options: [
            {
                text: 'Private Hosted Zoneを作成して対象VPCに関連付け、db.internal.example.com のAレコードを登録する',
                isCorrect: true,
                explanation:
                    'Route 53 Private Hosted Zoneは、関連付けたVPC内からのDNS問い合わせに対してプライベートな名前解決を提供します。内部向け名前解決に適しています。',
            },
            {
                text: 'Public Hosted ZoneにプライベートIPのAレコードを登録すれば、インターネット上からは必ず見えない',
                isCorrect: false,
                explanation:
                    'Public Hosted Zoneはインターネット上のDNS問い合わせに応答します。プライベートIPを返すことは技術的にできても、名前自体は公開DNSで解決されるため内部専用の設計として不適切です。',
            },
            {
                text: 'CloudFrontディストリビューションを作成すれば、VPC内だけのDNS名になる',
                isCorrect: false,
                explanation:
                    'CloudFrontはグローバルCDNです。VPC内だけの名前解決を作る機能ではありません。',
            },
            {
                text: 'MXレコードを作成すれば、VPC内のEC2からだけ名前解決される',
                isCorrect: false,
                explanation:
                    'MXレコードはメール配送先を指定するレコードです。VPC内限定の名前解決にはPrivate Hosted Zoneを使います。',
            },
        ],
        explanation:
            'Private Hosted ZoneはVPCとの関連付けが重要です。またVPC側でDNS解決に必要な設定が無効だと期待通りに解決できないため、VPCのDNS設定も確認対象になります。',
    },
    {
        question:
            'オンプレミス環境からAWS VPC内のPrivate Hosted Zoneの名前を解決したいと考えています。オンプレミスDNSからVPC Resolverへ問い合わせを転送するために使うRoute 53 Resolverの構成はどれですか?',
        options: [
            {
                text: 'Inbound Resolver EndpointをVPCに作成し、オンプレミスDNSからそのIPへ条件付きフォワードする',
                isCorrect: true,
                explanation:
                    'Inbound Resolver Endpointはオンプレミスなど外部ネットワークからVPCのDNS Resolverへ問い合わせを入れるための入口です。オンプレミスDNS側で対象ドメインをInbound endpointのIPへ転送します。',
            },
            {
                text: 'Outbound Resolver Endpointだけを作成すれば、オンプレミスからAWSへの問い合わせを受けられる',
                isCorrect: false,
                explanation:
                    'Outbound Resolver EndpointはVPCからオンプレミスなど外部DNSへ問い合わせを転送するための出口です。オンプレミスからAWSへ入る問い合わせにはInbound endpointを使います。',
            },
            {
                text: 'Public Hosted Zoneに同じレコードを作る以外に方法はない',
                isCorrect: false,
                explanation:
                    'Private Hosted Zoneの名前解決をオンプレミスから利用するには、ネットワーク接続とRoute 53 Resolver Inbound Endpointを使う構成があります。公開DNSへ出す必要はありません。',
            },
            {
                text: 'NAT Gatewayを作成するとDNS問い合わせが自動的にPrivate Hosted Zoneへ転送される',
                isCorrect: false,
                explanation:
                    'NAT Gatewayは主にプライベートサブネットからインターネット等へ送信するためのNAT機能です。オンプレミスDNSからPrivate Hosted Zoneへの名前解決転送を自動構成するものではありません。',
            },
        ],
        explanation:
            'ハイブリッドDNSでは向きが重要です。オンプレミスからAWSへ入る名前解決はInbound、AWSからオンプレミスへ出る名前解決はOutboundとResolver ruleを組み合わせます。',
    },
    {
        question:
            '同じドメイン名 example.com についてPublic Hosted ZoneとPrivate Hosted Zoneの両方をRoute 53に持っています。VPC内のEC2から example.com を問い合わせると、想定と違う内部向けレコードが返りました。最も適切な理解はどれですか?',
        options: [
            {
                text: 'VPCに関連付いたPrivate Hosted Zoneがある場合、VPC内のResolverはそのプライベート名前空間を優先して解決することがある',
                isCorrect: true,
                explanation:
                    'Public Hosted ZoneとPrivate Hosted Zoneで同じ名前空間を使うsplit-view DNS構成では、VPC内の問い合わせは関連付いたPrivate Hosted Zoneのレコードに基づいて応答されます。内部と外部で異なる応答になる点に注意が必要です。',
            },
            {
                text: 'Public Hosted ZoneとPrivate Hosted Zoneは同じ名前では絶対に作成できない',
                isCorrect: false,
                explanation:
                    'PublicとPrivateで同じドメイン名のホストゾーンを持つ構成はsplit-view DNSとして使われます。問題は作成可否ではなく、どこから問い合わせるかで応答が変わることです。',
            },
            {
                text: 'VPC内からの問い合わせでも常にPublic Hosted Zoneだけが使われる',
                isCorrect: false,
                explanation:
                    'VPCにPrivate Hosted Zoneが関連付いている場合、VPC内のResolverはプライベート名前空間を考慮します。常にPublicだけを見るわけではありません。',
            },
            {
                text: 'Private Hosted ZoneはMXレコード専用なのでAレコードの解決には影響しない',
                isCorrect: false,
                explanation:
                    'Private Hosted ZoneではA、AAAA、CNAME、MXなど通常のDNSレコードを扱えます。Aレコードの解決にも影響します。',
            },
        ],
        explanation:
            'Split-view DNSは便利ですが、内部と外部で同じ名前が異なる値を返すためトラブルシュートが難しくなりがちです。問い合わせ元、関連付けVPC、ホストゾーンの重複を確認します。',
    },
    {
        question:
            'Route 53のフェイルオーバールーティングで、プライマリが異常な場合だけセカンダリへ切り替えたいと考えています。最も重要な設定として適切なものはどれですか?',
        options: [
            {
                text: 'プライマリ/セカンダリのレコードを作成し、ヘルスチェックを関連付けてプライマリの正常性を判定する',
                isCorrect: true,
                explanation:
                    'Route 53のフェイルオーバールーティングでは、プライマリとセカンダリのレコードを用意し、ヘルスチェックの結果に応じて応答を切り替えます。プライマリの異常を正しく検知できるヘルスチェック設計が重要です。',
            },
            {
                text: 'TTLを長くすれば、プライマリ障害時に必ず即時セカンダリへ切り替わる',
                isCorrect: false,
                explanation:
                    'TTLが長いと、リゾルバー側に古い応答が長く残る可能性があります。フェイルオーバー設計ではヘルスチェックに加え、TTLの影響も考えます。',
            },
            {
                text: 'MXレコードを作成すれば、Webトラフィックも自動的にフェイルオーバーする',
                isCorrect: false,
                explanation:
                    'MXレコードはメール配送先の指定です。Webトラフィックのフェイルオーバーには対象名のA/AAAA/CNAME/Aliasなどに対するルーティング設定を使います。',
            },
            {
                text: 'フェイルオーバールーティングではヘルスチェックは一切使えない',
                isCorrect: false,
                explanation:
                    'フェイルオーバールーティングでは、ヘルスチェックによる正常性判定が中心的な役割を持ちます。',
            },
        ],
        explanation:
            'DNSフェイルオーバーは「DNS応答を切り替える」仕組みです。既にキャッシュされた応答やアプリ側の接続維持までは即時に制御できないため、TTLと復旧要件の理解が必要です。',
    },
    {
        question:
            'example.com の権威DNSを別プロバイダーへ移行しました。移行後、一部TLD側では古いNSが返り続けています。最も適切な確認箇所はどれですか?',
        options: [
            {
                text: 'レジストラに登録されているネームサーバー情報と、親ゾーン側の委任情報',
                isCorrect: true,
                explanation:
                    '権威DNSの移行では、DNSゾーン内のNSレコードだけでなく、レジストラ経由で親ゾーンへ登録される委任情報が重要です。親側が古いNSを返していると、利用者は古い権威DNSへたどる可能性があります。',
            },
            {
                text: 'WebサーバーのHTMLファイル名',
                isCorrect: false,
                explanation:
                    'HTMLファイル名は権威DNSの委任情報とは関係ありません。TLD側で古いNSが返るなら、レジストラ/親ゾーン側の委任を確認します。',
            },
            {
                text: 'MXレコードの優先度だけ',
                isCorrect: false,
                explanation:
                    'MXレコードはメール配送先です。権威DNSの移行ではNS委任情報が重要です。',
            },
            {
                text: 'ブラウザのCookieだけ',
                isCorrect: false,
                explanation:
                    'CookieはWebアプリの状態管理に使われます。TLD側のNS応答とは関係ありません。',
            },
        ],
        explanation:
            'DNS移行では「ゾーン内NS」と「親ゾーンの委任NS」を混同しないことが重要です。dig +trace のような確認で、どこで古い情報が返るかをたどれます。',
    },
    {
        question:
            'DNSSEC有効化後、検証リゾルバーではSERVFAILになりますが、DNSSEC検証をしない環境ではAレコードが返ります。最も疑うべき原因はどれですか?',
        options: [
            {
                text: 'DSレコード、DNSKEY、RRSIGなどの不整合によりDNSSEC検証に失敗している',
                isCorrect: true,
                explanation:
                    'DNSSEC検証を行うリゾルバーだけでSERVFAILになる場合、信頼の連鎖や署名検証の不整合が強く疑われます。親ゾーンのDS、子ゾーンのDNSKEY、RRSIGの整合性を確認します。',
            },
            {
                text: 'Aレコードが存在する場合、DNSSECでは必ずSERVFAILになる',
                isCorrect: false,
                explanation:
                    'AレコードとDNSSECは両立できます。問題はレコードの存在ではなく、署名や鍵、信頼の連鎖の整合性です。',
            },
            {
                text: 'TTLが短すぎるとDNSSEC検証は必ず失敗する',
                isCorrect: false,
                explanation:
                    'TTLが短いこと自体でDNSSEC検証が必ず失敗するわけではありません。署名期限や鍵の整合性などを確認します。',
            },
            {
                text: 'MXレコードが未設定だと、Web用AレコードのDNSSEC検証も必ず失敗する',
                isCorrect: false,
                explanation:
                    'MXレコードの有無はWeb用AレコードのDNSSEC検証失敗と直接関係しません。',
            },
        ],
        explanation:
            'DNSSEC障害は「レコードがあるか」だけでは判断できません。検証するリゾルバーと検証しないリゾルバーで挙動が違う場合、DNSSEC関連レコードの整合性を優先的に確認します。',
    },
    {
        question:
            'オンプレミスからAWSのPrivate Hosted Zoneを解決し、AWS VPCからオンプレミスの internal.corp も解決したい双方向のハイブリッドDNSを構成します。最も適切な考え方はどれですか?',
        options: [
            {
                text: 'AWS側にInbound/Outbound Resolver Endpointを用途に応じて作成し、オンプレミスDNSとRoute 53 Resolverルールで条件付き転送を構成する',
                isCorrect: true,
                explanation:
                    'オンプレミスからAWSへ入る問い合わせにはInbound Endpoint、AWSからオンプレミスへ出る問い合わせにはOutbound EndpointとResolver ruleを使います。双方向要件では問い合わせの向きを分けて設計します。',
            },
            {
                text: 'NAT Gatewayを1つ作成すれば、DNSの双方向転送は自動的に完成する',
                isCorrect: false,
                explanation:
                    'NAT GatewayはDNSの条件付き転送を自動構成するものではありません。Route 53 Resolver EndpointとDNS転送設定が必要です。',
            },
            {
                text: 'Public Hosted Zoneにすべての内部レコードを公開すれば、常に最も安全である',
                isCorrect: false,
                explanation:
                    '内部名やプライベートIPをPublic Hosted Zoneに公開するのは、情報公開や設計上のリスクがあります。内部向けにはPrivate Hosted ZoneやハイブリッドDNSを検討します。',
            },
            {
                text: 'MXレコードを設定すれば、オンプレミスとAWS間の全DNS問い合わせが転送される',
                isCorrect: false,
                explanation:
                    'MXはメール配送先を指定するレコードです。DNS問い合わせの転送制御にはResolver Endpointや条件付きフォワーダーを使います。',
            },
        ],
        explanation:
            'ハイブリッドDNSの設計では、ネットワーク到達性、セキュリティグループ、NACL、オンプレミスDNSのフォワード設定、Route 53 Resolver ruleの関連付けVPCを確認します。',
    },
    {
        question:
            '多数の利用者から「たまにだけ名前解決が失敗する」と報告があります。調査すると権威DNSのNSレコードに複数のネームサーバーがあり、そのうち1台だけが対象ゾーンに正しく応答していません。最も適切な説明はどれですか?',
        options: [
            {
                text: 'lame delegationや権威DNS間の不整合が疑われ、問い合わせが問題のNSへ向いたときだけ失敗する可能性がある',
                isCorrect: true,
                explanation:
                    '複数NSのうち一部だけが正しく応答しない場合、リゾルバーがどのNSへ問い合わせるかによって成功したり失敗したりします。lame delegationやゾーン同期不備を疑います。',
            },
            {
                text: '複数のNSがある場合、1台でも正しく応答すれば他のNSは一切使われない',
                isCorrect: false,
                explanation:
                    'リゾルバーは複数の権威DNSサーバーへ問い合わせる可能性があります。1台だけ正常でも、他のNSの不備が断続的な失敗として現れることがあります。',
            },
            {
                text: 'Aレコードが存在するなら、NSの不整合は名前解決に影響しない',
                isCorrect: false,
                explanation:
                    'Aレコードがゾーン内に存在しても、問い合わせ先の権威DNSが正しく応答しなければ名前解決は失敗する可能性があります。',
            },
            {
                text: 'TTLを長くすれば、不正なNSも必ず正しい応答を返すようになる',
                isCorrect: false,
                explanation:
                    'TTLを長くしても、誤設定されたNSが正しい応答を返すようにはなりません。権威DNS側の設定やゾーン同期を修正する必要があります。',
            },
        ],
        explanation:
            '断続的なDNS障害では「複数NSのうち一部だけ壊れている」ケースがあります。各権威DNSへ直接問い合わせて応答差を確認するのが有効です。',
    },
]
