import type { Question } from '@/types/test_questions'

export const testQuestions: Question[] = [
    {
        question:
            'DNSの基本的な役割として最も適切な説明はどれですか?',
        options: [
            {
                text: 'ドメイン名とIPアドレスなどの情報を対応付けて名前解決する仕組み',
                isCorrect: true,
                explanation:
                    'DNS（Domain Name System）は、example.com のようなドメイン名をIPアドレスなどの情報に対応付ける分散型の名前解決システムです。',
            },
            {
                text: 'WebページのHTMLを暗号化して保存する仕組み',
                isCorrect: false,
                explanation:
                    'Web通信の暗号化は主にTLS/HTTPSの役割です。DNS自体はHTMLを暗号化して保存する仕組みではありません。',
            },
            {
                text: 'サーバーのCPU使用率を監視して自動復旧する仕組み',
                isCorrect: false,
                explanation:
                    '監視や自動復旧は監視サービスやオーケストレーションの領域です。DNSは名前解決を扱います。',
            },
            {
                text: 'IPアドレスを必ず暗号化して第三者から隠す仕組み',
                isCorrect: false,
                explanation:
                    '通常のDNS問い合わせは名前解決結果を返す仕組みであり、IPアドレスを必ず隠すものではありません。暗号化されたDNSとしてDoHやDoTはありますが、DNS全体の基本役割ではありません。',
            },
        ],
        explanation:
            'DNSはインターネットの住所録のような役割を持ちます。人間が覚えやすいドメイン名を、通信に必要なIPアドレスなどへ変換します。',
    },
    {
        question:
            'Aレコードの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'ドメイン名をIPv4アドレスに対応付けるレコード',
                isCorrect: true,
                explanation:
                    'Aレコードはドメイン名またはホスト名をIPv4アドレスに対応付けます。例えば example.com を 192.0.2.10 に向けるような用途です。',
            },
            {
                text: 'ドメイン名をIPv6アドレスに対応付けるレコード',
                isCorrect: false,
                explanation:
                    'IPv6アドレスに対応付けるのはAAAAレコードです。AレコードはIPv4アドレスを扱います。',
            },
            {
                text: 'メール配送先のメールサーバーを指定するレコード',
                isCorrect: false,
                explanation:
                    'メール配送先のメールサーバーを指定するのはMXレコードです。AレコードはIPアドレスへの対応付けに使います。',
            },
            {
                text: '別名として他のドメイン名を指し示すレコード',
                isCorrect: false,
                explanation:
                    '別名として他のドメイン名を指し示すのはCNAMEレコードです。Aレコードは最終的にIPv4アドレスを返します。',
            },
        ],
        explanation:
            'Aレコードの「A」はAddressの意味です。IPv4はAレコード、IPv6はAAAAレコード、と分けて覚えると整理しやすいです。',
    },
    {
        question:
            'CNAMEレコードの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'ある名前を別の正式な名前の別名として扱うレコード',
                isCorrect: true,
                explanation:
                    'CNAME（Canonical Name）レコードは、あるホスト名を別のホスト名の別名として定義します。例えば www.example.com を example.com の別名にするような用途があります。',
            },
            {
                text: 'ドメインに対する権威DNSサーバーを指定するレコード',
                isCorrect: false,
                explanation:
                    '権威DNSサーバーを指定するのはNSレコードです。CNAMEは別名を定義するレコードです。',
            },
            {
                text: 'ドメイン名をIPv4アドレスに直接対応付けるレコード',
                isCorrect: false,
                explanation:
                    'IPv4アドレスに直接対応付けるのはAレコードです。CNAMEは別の名前を指します。',
            },
            {
                text: 'DNS応答をキャッシュしてよい秒数だけを指定する専用レコード',
                isCorrect: false,
                explanation:
                    'キャッシュしてよい時間はTTLとして各DNSレコードに設定される値です。CNAME自体はTTL専用のレコードではありません。',
            },
        ],
        explanation:
            'CNAMEは「この名前は別の名前の別名です」と示すレコードです。最終的なIPアドレスは、参照先のAレコードやAAAAレコードなどをさらに解決して得ます。',
    },
    {
        question:
            'MXレコードの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'そのドメイン宛てのメールを受け取るメールサーバーを指定するレコード',
                isCorrect: true,
                explanation:
                    'MX（Mail Exchanger）レコードは、example.com 宛てのメールをどのメールサーバーへ配送するかを指定します。',
            },
            {
                text: 'WebサイトのトップページのURLを指定するレコード',
                isCorrect: false,
                explanation:
                    'DNSレコードはURLのパスまでは指定しません。Webサイトのホスト名をIPアドレスなどに解決するにはA、AAAA、CNAMEなどを使います。',
            },
            {
                text: 'DNSゾーンの管理者メールアドレスだけを指定するレコード',
                isCorrect: false,
                explanation:
                    'ゾーンの管理情報を含むのはSOAレコードです。MXレコードはメール配送先のメールサーバーを指定します。',
            },
            {
                text: 'ドメイン名をIPv6アドレスに対応付けるレコード',
                isCorrect: false,
                explanation:
                    'IPv6アドレスに対応付けるのはAAAAレコードです。MXレコードはメール配送先を扱います。',
            },
        ],
        explanation:
            'MXレコードには優先度を表す値もあります。複数のメールサーバーがある場合、一般に優先度の値が小さいものから配送先として試されます。',
    },
    {
        question:
            'DNSにおけるTTLの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'DNS応答をキャッシュしてよい時間を示す値',
                isCorrect: true,
                explanation:
                    'TTL（Time To Live）は、リゾルバーなどがDNS応答をキャッシュしてよい時間を秒単位で示します。',
            },
            {
                text: 'ドメイン名に使える文字数の最大値を示す値',
                isCorrect: false,
                explanation:
                    'TTLは文字数制限ではありません。DNS応答のキャッシュ期間を示す値です。',
            },
            {
                text: 'メールサーバーの優先度だけを示す値',
                isCorrect: false,
                explanation:
                    'MXレコードにはメールサーバーの優先度がありますが、TTLはDNS応答のキャッシュ期間を示す値です。',
            },
            {
                text: 'DNSサーバーが必ず再起動するまでの時間を示す値',
                isCorrect: false,
                explanation:
                    'TTLはDNSサーバーの再起動時間ではありません。キャッシュの有効期間に関する値です。',
            },
        ],
        explanation:
            'TTLが長いとキャッシュが効きやすく問い合わせ数を減らせますが、レコード変更の反映には時間がかかりやすくなります。TTLが短いと変更は反映されやすい一方、問い合わせ回数は増えやすくなります。',
    },
    {
        question:
            '自社サイト www.example.com を新しいWebサーバーのIPv4アドレス 203.0.113.10 へ向けたい場合、最も基本的なDNS設定はどれですか?',
        options: [
            {
                text: 'www.example.com のAレコードに 203.0.113.10 を設定する',
                isCorrect: true,
                explanation:
                    'Aレコードはホスト名をIPv4アドレスに対応付けるレコードです。www.example.com を特定のIPv4アドレスへ向ける基本的な設定です。',
            },
            {
                text: 'www.example.com のMXレコードに 203.0.113.10 を設定する',
                isCorrect: false,
                explanation:
                    'MXレコードはメール配送先のメールサーバーを指定するためのレコードです。WebサーバーのIPv4アドレスへ向ける用途ではAレコードを使います。',
            },
            {
                text: 'www.example.com のTXTレコードに 203.0.113.10 を設定する',
                isCorrect: false,
                explanation:
                    'TXTレコードは任意のテキスト情報や認証用文字列などに使われます。通常、Webアクセス先のIPv4アドレス指定には使いません。',
            },
            {
                text: 'www.example.com のNSレコードに 203.0.113.10 を設定する',
                isCorrect: false,
                explanation:
                    'NSレコードはそのゾーンやサブドメインの権威DNSサーバーを示すためのレコードです。Webサーバーの宛先IP指定には使いません。',
            },
        ],
        explanation:
            '「名前をIPv4アドレスへ向けるならAレコード」が基本です。IPv6アドレスへ向ける場合はAAAAレコードを使います。',
    },
    {
        question:
            '外部サービスから「所有確認のため、example.com に指定されたTXTレコードを追加してください」と案内されました。最も適切な対応はどれですか?',
        options: [
            {
                text: 'DNS管理画面で指定された名前と値のTXTレコードを追加する',
                isCorrect: true,
                explanation:
                    'SaaSやメールサービスなどでは、ドメイン所有確認のためにTXTレコードの追加を求めることがあります。指定されたホスト名と値を正確に登録します。',
            },
            {
                text: 'Aレコードを削除してからTXTレコードを追加する',
                isCorrect: false,
                explanation:
                    '所有確認用TXTレコードの追加に、既存のAレコード削除は通常不要です。誤って削除するとWebサイトに影響する可能性があります。',
            },
            {
                text: 'MXレコードの優先度を0に変更する',
                isCorrect: false,
                explanation:
                    'MXレコードはメール配送先の優先度に関係します。TXTレコードによる所有確認とは別の設定です。',
            },
            {
                text: 'TTLを必ず1年に設定する',
                isCorrect: false,
                explanation:
                    'TXTレコードにTTLは設定できますが、所有確認のために必ず1年にする必要はありません。サービス側の指示や運用方針に従います。',
            },
        ],
        explanation:
            '実運用では、Google Search Console、メール配信サービス、CDN、SaaS連携などでTXTレコードによる所有確認がよく使われます。',
    },
    {
        question:
            'example.com でメールを受信できるようにしたい場合、DNSで特に重要になるレコードはどれですか?',
        options: [
            {
                text: 'MXレコード',
                isCorrect: true,
                explanation:
                    'MXレコードは、そのドメイン宛てのメールをどのメールサーバーへ配送するかを指定します。メール受信の基本設定です。',
            },
            {
                text: 'CNAMEレコード',
                isCorrect: false,
                explanation:
                    'CNAMEは別名を定義するレコードです。メール受信先の指定には通常MXレコードを使います。',
            },
            {
                text: 'PTRレコード',
                isCorrect: false,
                explanation:
                    'PTRレコードは主にIPアドレスから名前を引く逆引きに使われます。メール送信元の信頼性確認で関係することはありますが、受信先指定の基本はMXレコードです。',
            },
            {
                text: 'AAAAレコードだけ',
                isCorrect: false,
                explanation:
                    'AAAAレコードはIPv6アドレスへの対応付けです。メールサーバー自体の名前解決に関係することはありますが、ドメイン宛てメールの配送先指定はMXレコードです。',
            },
        ],
        explanation:
            'メール運用ではMXレコードに加えて、送信側の認証やなりすまし対策としてSPF、DKIM、DMARCなどのTXTレコードもよく使われます。',
    },
    {
        question:
            'DNSレコードを変更した直後、一部の利用者だけ古いWebサーバーへアクセスしてしまいます。初歩的な原因として最も考えやすいものはどれですか?',
        options: [
            {
                text: 'リゾルバーや端末に古いDNS応答がTTLの間キャッシュされている',
                isCorrect: true,
                explanation:
                    'DNS応答はTTLの間キャッシュされるため、変更直後は利用者や利用しているリゾルバーによって古い結果が返ることがあります。',
            },
            {
                text: 'DNSは変更すると全世界で必ず同時に即時反映されるため、キャッシュは関係ない',
                isCorrect: false,
                explanation:
                    'DNSにはキャッシュがあります。権威DNS側で変更が完了していても、各所のキャッシュが残っている間は古い結果が返ることがあります。',
            },
            {
                text: 'Aレコードは一度設定すると二度と変更できない',
                isCorrect: false,
                explanation:
                    'Aレコードは変更できます。変更後の反映の見え方にはTTLやキャッシュが関係します。',
            },
            {
                text: 'WebサーバーがHTTPS対応しているとDNS変更は無効になる',
                isCorrect: false,
                explanation:
                    'HTTPS対応の有無でDNS変更が無効になるわけではありません。DNSは名前解決、HTTPSは通信の暗号化と証明書検証に関係します。',
            },
        ],
        explanation:
            'DNS変更後の確認では、権威DNSの応答、利用中リゾルバーの応答、端末やブラウザのキャッシュを分けて考えると原因を切り分けやすくなります。',
    },
    {
        question:
            'DNS設定を確認するときに「権威DNSサーバーが現在どの値を返しているか」を見る目的として最も適切なものはどれですか?',
        options: [
            {
                text: 'DNS管理画面で設定した最新の正式な応答を確認し、キャッシュの影響と切り分けるため',
                isCorrect: true,
                explanation:
                    '権威DNSサーバーはそのゾーンの正式な情報を返すサーバーです。権威DNSの応答を見ることで、設定自体が反映済みか、リゾルバー側のキャッシュ問題かを切り分けやすくなります。',
            },
            {
                text: '権威DNSサーバーを見ると、全利用者のブラウザキャッシュを削除できるため',
                isCorrect: false,
                explanation:
                    '権威DNSサーバーの確認は状態確認であり、利用者のブラウザやリゾルバーのキャッシュを削除する操作ではありません。',
            },
            {
                text: '権威DNSサーバーを見ると、WebサーバーのHTML内容が表示されるため',
                isCorrect: false,
                explanation:
                    'DNS確認で返るのはDNSレコードの情報です。WebサーバーのHTML内容はHTTP/HTTPSで取得するものです。',
            },
            {
                text: '権威DNSサーバーを見ると、SSL証明書の有効期限が必ず分かるため',
                isCorrect: false,
                explanation:
                    'SSL/TLS証明書の有効期限はDNSレコードそのものではありません。証明書確認にはHTTPS接続や証明書確認用のツールを使います。',
            },
        ],
        explanation:
            'トラブルシューティングでは「権威DNSは正しいか」「普段使っているリゾルバーは何を返すか」を分けるのが基本です。dig や nslookup などのツールで確認できます。',
    },
    {
        question: 'ISPの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'インターネット接続サービスを提供する事業者',
                isCorrect: true,
                explanation:
                    'ISP（Internet Service Provider）は、家庭や企業にインターネット接続を提供する事業者です。プロバイダーと呼ばれることもあります。',
            },
            {
                text: 'DNSレコードの一種',
                isCorrect: false,
                explanation:
                    'ISPはDNSレコードの種類ではありません。DNSレコードにはA、AAAA、CNAME、MX、TXT、NSなどがあります。',
            },
            {
                text: 'Webページを暗号化する証明書の名前',
                isCorrect: false,
                explanation:
                    'Web通信の暗号化にはTLS証明書などが関係します。ISPはインターネット接続サービスを提供する事業者を指します。',
            },
            {
                text: 'IPアドレスを必ずIPv6へ変換する機能',
                isCorrect: false,
                explanation:
                    'ISPは機能名ではなく事業者の分類です。IPv4やIPv6の接続サービスを提供することはありますが、必ずIPv6へ変換する機能という意味ではありません。',
            },
        ],
        explanation:
            'ISPは利用者をインターネットへ接続する役割を持ちます。利用者が使うDNSリゾルバーも、ISPが提供している場合があります。',
    },
    {
        question:
            'DNSリゾルバーの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '利用者の代わりにDNS問い合わせを行い、名前解決結果を返すサーバーや仕組み',
                isCorrect: true,
                explanation:
                    'DNSリゾルバーは、利用者の端末やアプリケーションからの問い合わせを受け、必要に応じてDNS階層をたどって名前解決結果を返します。',
            },
            {
                text: 'Webサーバー上でHTMLを生成するプログラム',
                isCorrect: false,
                explanation:
                    'HTML生成はWebアプリケーションなどの役割です。DNSリゾルバーは名前解決に関係します。',
            },
            {
                text: 'メール本文を保存する専用ストレージ',
                isCorrect: false,
                explanation:
                    'メール本文の保存はメールサーバーやメールボックスの領域です。DNSリゾルバーはメール本文を保存する仕組みではありません。',
            },
            {
                text: 'ドメイン名を購入するためだけの申請書',
                isCorrect: false,
                explanation:
                    'ドメイン名の登録にはレジストラなどが関係します。DNSリゾルバーは問い合わせを処理して名前解決を行う仕組みです。',
            },
        ],
        explanation:
            '普段PCやスマホが直接すべての権威DNSへ問い合わせているとは限りません。多くの場合、ISPやパブリックDNSなどのリゾルバーを利用します。',
    },
    {
        question:
            '権威DNSサーバーの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '特定のDNSゾーンについて正式なDNSレコード情報を持つサーバー',
                isCorrect: true,
                explanation:
                    '権威DNSサーバーは、example.com など特定のゾーンについて正式なDNSレコードを管理し、問い合わせに回答します。',
            },
            {
                text: '利用者のブラウザ履歴を保存するサーバー',
                isCorrect: false,
                explanation:
                    '権威DNSサーバーはDNSレコード情報を扱うサーバーです。ブラウザ履歴を保存するサーバーではありません。',
            },
            {
                text: 'すべてのWebサイトのHTMLをコピーして配信するサーバー',
                isCorrect: false,
                explanation:
                    'HTMLのキャッシュ配信はCDNなどの領域です。権威DNSサーバーはDNSレコードに回答します。',
            },
            {
                text: 'PCのローカルフォルダにある設定ファイル',
                isCorrect: false,
                explanation:
                    '権威DNSサーバーはDNSゾーンの正式な情報を返すDNSサーバーです。PC上のローカル設定ファイルそのものではありません。',
            },
        ],
        explanation:
            'DNSの確認では、リゾルバーが返す値と権威DNSサーバーが返す値を分けて見ると、キャッシュの影響を理解しやすくなります。',
    },
    {
        question:
            'AAAAレコードの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'ドメイン名をIPv6アドレスに対応付けるレコード',
                isCorrect: true,
                explanation:
                    'AAAAレコードは、ドメイン名やホスト名をIPv6アドレスに対応付けるDNSレコードです。',
            },
            {
                text: 'ドメイン名をIPv4アドレスに対応付けるレコード',
                isCorrect: false,
                explanation:
                    'IPv4アドレスに対応付けるのはAレコードです。AAAAレコードはIPv6アドレスを扱います。',
            },
            {
                text: 'メール配送先のメールサーバーを指定するレコード',
                isCorrect: false,
                explanation:
                    'メール配送先を指定するのはMXレコードです。AAAAレコードはIPv6アドレスへの対応付けに使います。',
            },
            {
                text: 'DNSゾーンの権威DNSサーバーを指定するレコード',
                isCorrect: false,
                explanation:
                    '権威DNSサーバーを指定するのはNSレコードです。AAAAレコードはIPv6アドレスを返します。',
            },
        ],
        explanation:
            'IPv4はAレコード、IPv6はAAAAレコードです。IPv6対応サイトではAとAAAAの両方を設定することもあります。',
    },
    {
        question:
            'NSレコードの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'そのゾーンの権威DNSサーバーを指定するレコード',
                isCorrect: true,
                explanation:
                    'NS（Name Server）レコードは、そのドメインやゾーンを担当する権威DNSサーバーを指定します。',
            },
            {
                text: 'ドメイン名をIPv4アドレスに対応付けるレコード',
                isCorrect: false,
                explanation:
                    'IPv4アドレスに対応付けるのはAレコードです。NSレコードは権威DNSサーバーを示します。',
            },
            {
                text: 'メール配送先の優先度だけを指定するレコード',
                isCorrect: false,
                explanation:
                    'メール配送先と優先度を指定するのはMXレコードです。NSレコードはDNSサーバーの指定に使います。',
            },
            {
                text: '所有確認用の文字列だけを保存するレコード',
                isCorrect: false,
                explanation:
                    '所有確認用の文字列にはTXTレコードがよく使われます。NSレコードはネームサーバーを指定するレコードです。',
            },
        ],
        explanation:
            'NSレコードを見ると、そのドメインのDNS情報をどのネームサーバーが正式に管理しているかを確認できます。',
    },
    {
        question:
            'SOAレコードの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'DNSゾーンの管理情報を持つレコード',
                isCorrect: true,
                explanation:
                    'SOA（Start of Authority）レコードは、ゾーンの開始点を示し、プライマリネームサーバー、管理者情報、シリアル番号などの管理情報を持ちます。',
            },
            {
                text: 'ドメイン名をIPv4アドレスに対応付けるレコード',
                isCorrect: false,
                explanation:
                    'IPv4アドレスに対応付けるのはAレコードです。SOAレコードはゾーン管理情報を表します。',
            },
            {
                text: 'メール配送先のメールサーバーを指定するレコード',
                isCorrect: false,
                explanation:
                    'メール配送先を指定するのはMXレコードです。SOAレコードはメール配送先の指定には使いません。',
            },
            {
                text: '別名として他のドメイン名を指すレコード',
                isCorrect: false,
                explanation:
                    '別名を定義するのはCNAMEレコードです。SOAレコードはゾーン全体の管理情報に関係します。',
            },
        ],
        explanation:
            'SOAレコードは普段直接編集しないことも多いですが、DNSゾーンには基本的に存在する重要な管理用レコードです。',
    },
    {
        question:
            '自社ドメインから送信されるメールの送信元として許可するサーバーを示したい場合、よく使われるDNS設定はどれですか?',
        options: [
            {
                text: 'SPFの内容をTXTレコードとして設定する',
                isCorrect: true,
                explanation:
                    'SPF（Sender Policy Framework）は、そのドメインのメール送信元として許可するサーバーを示す仕組みで、通常はTXTレコードとして公開します。',
            },
            {
                text: 'Aレコードをすべて削除する',
                isCorrect: false,
                explanation:
                    'SPF設定のためにAレコードを削除する必要はありません。誤って削除するとWebサイトなどの名前解決に影響します。',
            },
            {
                text: 'NSレコードをメール本文に書く',
                isCorrect: false,
                explanation:
                    'NSレコードは権威DNSサーバーを指定するDNSレコードです。メール本文に書いて送信元認証を行うものではありません。',
            },
            {
                text: 'TTLを0にすればSPFと同じ効果になる',
                isCorrect: false,
                explanation:
                    'TTLはキャッシュ時間を示す値です。メール送信元の許可設定を表すSPFとは役割が違います。',
            },
        ],
        explanation:
            'SPFはメールのなりすまし対策でよく出てくる基本設定です。実運用ではDKIMやDMARCとあわせて設定することが多いです。',
    },
    {
        question:
            'blog.example.com というサブドメインを作り、既存のWebサーバーのIPv4アドレスへ向けたい場合、最も基本的な設定はどれですか?',
        options: [
            {
                text: 'blog.example.com のAレコードを作成してWebサーバーのIPv4アドレスを設定する',
                isCorrect: true,
                explanation:
                    'サブドメインも通常のホスト名と同じように、IPv4アドレスへ向けるならAレコードを作成します。',
            },
            {
                text: 'example.com のSOAレコードを削除する',
                isCorrect: false,
                explanation:
                    'SOAレコードはゾーン管理情報です。サブドメインを追加するために削除するものではありません。',
            },
            {
                text: 'blog.example.com のMXレコードだけを作成する',
                isCorrect: false,
                explanation:
                    'MXレコードはメール配送先の指定です。Webサーバーへ向ける基本設定にはAレコードやAAAAレコードなどを使います。',
            },
            {
                text: 'TTLだけを変更すればサブドメインが自動作成される',
                isCorrect: false,
                explanation:
                    'TTLはキャッシュ時間です。サブドメインとして名前解決させるには、その名前のAレコードなど必要なDNSレコードを作成します。',
            },
        ],
        explanation:
            'サブドメイン追加は実運用でよくある作業です。名前、レコード種別、値を間違えないことが基本です。',
    },
    {
        question:
            'WebサイトをIPv6でもアクセスできるようにしたい場合、DNSで追加を検討するレコードはどれですか?',
        options: [
            {
                text: 'AAAAレコード',
                isCorrect: true,
                explanation:
                    'AAAAレコードはホスト名をIPv6アドレスに対応付けるレコードです。IPv6対応ではAAAAレコードの設定を検討します。',
            },
            {
                text: 'MXレコード',
                isCorrect: false,
                explanation:
                    'MXレコードはメール配送先を指定するレコードです。WebサイトのIPv6アドレス指定にはAAAAレコードを使います。',
            },
            {
                text: 'TXTレコード',
                isCorrect: false,
                explanation:
                    'TXTレコードは任意のテキスト情報や認証用情報に使います。IPv6アドレスへの対応付けにはAAAAレコードを使います。',
            },
            {
                text: 'PTRレコードだけ',
                isCorrect: false,
                explanation:
                    'PTRレコードは逆引きに使います。WebサイトをIPv6で正引きできるようにする基本設定はAAAAレコードです。',
            },
        ],
        explanation:
            'IPv6対応ではDNSだけでなく、Webサーバー、ロードバランサー、ファイアウォール、証明書設定なども合わせて確認します。',
    },
    {
        question:
            'DNSレコードを変更する前に「この変更はすぐ全員に見えるとは限らない」と説明する理由として最も適切なものはどれですか?',
        options: [
            {
                text: 'DNS応答はTTLに従ってリゾルバーなどにキャッシュされるため',
                isCorrect: true,
                explanation:
                    'DNS応答はTTLの間キャッシュされます。そのため、権威DNSで変更済みでも、利用者によってはしばらく古い値を見ることがあります。',
            },
            {
                text: 'DNSレコードは一度作ると変更できないため',
                isCorrect: false,
                explanation:
                    'DNSレコードは変更できます。ただし、変更後の見え方にはTTLやキャッシュが関係します。',
            },
            {
                text: 'Aレコードはメールサーバーにしか使えないため',
                isCorrect: false,
                explanation:
                    'Aレコードは名前をIPv4アドレスに対応付けるレコードで、Webサーバーなどにも使います。この説明は反映時間の理由ではありません。',
            },
            {
                text: 'ISPはDNSを一切使わないため',
                isCorrect: false,
                explanation:
                    'ISPがDNSリゾルバーを提供することもあります。DNS変更の見え方には、リゾルバーや端末のキャッシュが関係します。',
            },
        ],
        explanation:
            '初歩的な運用でも、DNS変更前にはTTLとキャッシュを意識することが重要です。急な切り替えでは、事前にTTLを短くしておくことがあります。',
    },
    {
        question:
            'ドメイン名の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'インターネット上の名前空間で使われる、人間が扱いやすい階層的な名前',
                isCorrect: true,
                explanation:
                    'ドメイン名は example.com のような階層的な名前です。DNSによってIPアドレスなどの情報へ対応付けられます。',
            },
            {
                text: '必ずIPv4アドレスだけを表す数値',
                isCorrect: false,
                explanation:
                    'IPv4アドレスは 192.0.2.1 のような数値表現です。ドメイン名は example.com のような名前です。',
            },
            {
                text: 'WebページのHTMLファイル名',
                isCorrect: false,
                explanation:
                    'HTMLファイル名はWebサーバー上のファイル名です。ドメイン名はDNSで名前解決される名前です。',
            },
            {
                text: 'メール本文を暗号化するための鍵',
                isCorrect: false,
                explanation:
                    'メール本文の暗号化鍵ではありません。ドメイン名はインターネット上の名前として使われます。',
            },
        ],
        explanation:
            'DNSを学ぶときは、ドメイン名は「名前」、IPアドレスは「通信先を示すアドレス」と分けて考えると整理しやすいです。',
    },
    {
        question:
            'FQDNの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'DNS階層上で省略せず完全に指定されたドメイン名',
                isCorrect: true,
                explanation:
                    'FQDN（Fully Qualified Domain Name）は、DNS階層上で完全に指定された名前です。例として www.example.com. のような名前が挙げられます。',
            },
            {
                text: 'IPv4アドレスを4つ並べた表記',
                isCorrect: false,
                explanation:
                    'IPv4アドレスは 192.0.2.1 のような表記です。FQDNは完全修飾ドメイン名を指します。',
            },
            {
                text: 'メールサーバーの優先度',
                isCorrect: false,
                explanation:
                    'メールサーバーの優先度はMXレコードで使われる値です。FQDNは完全なドメイン名です。',
            },
            {
                text: 'DNSレコードのキャッシュ時間',
                isCorrect: false,
                explanation:
                    'DNSレコードのキャッシュ時間はTTLです。FQDNは名前の指定方法に関する用語です。',
            },
        ],
        explanation:
            '文脈によっては末尾のドットを省略して書くことがありますが、厳密にはルートまで含めた完全な名前という考え方です。',
    },
    {
        question:
            'ホスト名の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'ドメイン内の特定のコンピューターやサービスを識別する名前',
                isCorrect: true,
                explanation:
                    'ホスト名は www や mail のように、ドメイン内の特定のホストやサービスを識別する名前として使われます。',
            },
            {
                text: 'DNSのキャッシュ時間だけを表す値',
                isCorrect: false,
                explanation:
                    'キャッシュ時間を表す値はTTLです。ホスト名は名前の一部として使われます。',
            },
            {
                text: 'メール送信者の本文署名',
                isCorrect: false,
                explanation:
                    'メール本文の署名とは別の概念です。ホスト名はDNS名やコンピューター名として使われます。',
            },
            {
                text: 'ドメインを販売する事業者',
                isCorrect: false,
                explanation:
                    'ドメインを販売・登録する事業者はレジストラです。ホスト名は名前そのものに関する用語です。',
            },
        ],
        explanation:
            '例えば www.example.com では、文脈によりますが www がホスト名、example.com がドメイン名として扱われることがあります。',
    },
    {
        question:
            'DNSゾーンの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'ある範囲のDNSレコードをまとめて管理する単位',
                isCorrect: true,
                explanation:
                    'DNSゾーンは、example.com のような範囲のDNSレコードをまとめて管理する単位です。ホストゾーンと呼ばれることもあります。',
            },
            {
                text: 'Webサーバーのディスク容量',
                isCorrect: false,
                explanation:
                    'DNSゾーンはDNSレコードの管理単位です。Webサーバーのディスク容量ではありません。',
            },
            {
                text: 'IPv6アドレスだけを保存する専用ファイル',
                isCorrect: false,
                explanation:
                    'DNSゾーンはIPv6専用ではありません。A、AAAA、MX、TXT、NSなどさまざまなレコードを管理できます。',
            },
            {
                text: 'TLS証明書の有効期限',
                isCorrect: false,
                explanation:
                    'TLS証明書の有効期限とDNSゾーンは別の概念です。DNSゾーンは名前解決情報の管理単位です。',
            },
        ],
        explanation:
            'Route 53のHosted Zoneもこの考え方に近いです。Public Hosted ZoneとPrivate Hosted Zoneの理解にもつながります。',
    },
    {
        question:
            'ルートDNSサーバーの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'DNS階層の最上位にあり、TLDのDNSサーバーをたどる入口になるサーバー',
                isCorrect: true,
                explanation:
                    'ルートDNSサーバーはDNS階層の最上位に位置し、.com や .jp などTLDを管理するDNSサーバーへの情報を返します。',
            },
            {
                text: 'すべてのWebページのHTMLを保存するサーバー',
                isCorrect: false,
                explanation:
                    'ルートDNSサーバーはHTMLを保存しません。DNS階層をたどるための情報を返します。',
            },
            {
                text: '各家庭に必ず1台置かれるWi-Fiルーター',
                isCorrect: false,
                explanation:
                    '家庭用ルーターとは別物です。ルートDNSサーバーはDNS名前空間の最上位に関係するサーバーです。',
            },
            {
                text: 'メール本文を配送するサーバー',
                isCorrect: false,
                explanation:
                    'メール本文を配送するのはメールサーバーです。ルートDNSサーバーはDNS階層の入口です。',
            },
        ],
        explanation:
            'リゾルバーは必要に応じてルート、TLD、権威DNSへ問い合わせをたどり、最終的な名前解決結果を得ます。',
    },
    {
        question: 'TLDの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '.com や .jp のようなドメイン名の最上位部分',
                isCorrect: true,
                explanation:
                    'TLD（Top-Level Domain）は、.com、.jp、.org などドメイン名の最上位部分です。',
            },
            {
                text: 'DNS応答をキャッシュしてよい時間',
                isCorrect: false,
                explanation:
                    'DNS応答をキャッシュしてよい時間はTTLです。TLDはドメイン名の階層に関する用語です。',
            },
            {
                text: 'IPv4アドレスの最後の数字',
                isCorrect: false,
                explanation:
                    'TLDはIPアドレスの一部ではありません。ドメイン名の最上位部分を指します。',
            },
            {
                text: 'メールサーバーの優先度',
                isCorrect: false,
                explanation:
                    'メールサーバーの優先度はMXレコードで使われます。TLDは .com や .jp などです。',
            },
        ],
        explanation:
            'example.com なら .com、example.co.jp なら階層としては .jp がTLDです。DNSは階層構造で管理されています。',
    },
    {
        question:
            'レジストラの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '利用者からドメイン名の登録申請を受け付ける事業者',
                isCorrect: true,
                explanation:
                    'レジストラは、利用者からドメイン名の登録や更新などの申請を受け付ける事業者です。',
            },
            {
                text: 'DNS応答をキャッシュするPC内のメモリ',
                isCorrect: false,
                explanation:
                    'DNS応答のキャッシュはリゾルバーや端末で行われることがあります。レジストラはドメイン登録に関わる事業者です。',
            },
            {
                text: 'Aレコードだけを保存するDNSレコード',
                isCorrect: false,
                explanation:
                    'レジストラはDNSレコードの種類ではありません。ドメイン名の登録を扱う事業者です。',
            },
            {
                text: 'メール本文を暗号化するプロトコル',
                isCorrect: false,
                explanation:
                    'レジストラは暗号化プロトコルではありません。ドメイン名の登録手続きを扱います。',
            },
        ],
        explanation:
            'ドメインを取得するサービス会社はレジストラまたはリセラーであることが多いです。DNSサーバーの運用者とは分けて理解します。',
    },
    {
        question:
            'DNSにおける委任の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'あるDNS名前空間の管理を別の権威DNSサーバーへ任せること',
                isCorrect: true,
                explanation:
                    '委任は、親ゾーンから子ゾーンの権威DNSサーバーをNSレコードなどで示し、その範囲の管理を任せる仕組みです。',
            },
            {
                text: 'WebサーバーのCPU処理を別スレッドへ渡すこと',
                isCorrect: false,
                explanation:
                    'CPU処理の委譲とは別の話です。DNSでの委任は名前空間の管理を別のDNSサーバーへ任せることです。',
            },
            {
                text: 'DNSレコードのTTLを必ず0にすること',
                isCorrect: false,
                explanation:
                    'TTLを0にすることは委任ではありません。委任では親ゾーンが子ゾーンの権威DNSサーバーを示します。',
            },
            {
                text: 'メールを別の宛先へ転送することだけを指す',
                isCorrect: false,
                explanation:
                    'メール転送とは別の概念です。DNSの委任は名前空間の管理委譲です。',
            },
        ],
        explanation:
            'sub.example.com を別チームに管理させる、TLDから各ドメインの権威DNSへたどる、といった理解に必要な用語です。',
    },
    {
        question:
            'グルーレコードの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '委任先ネームサーバー名を解決するために、親ゾーン側に置かれる補助的なA/AAAA情報',
                isCorrect: true,
                explanation:
                    'グルーレコードは、委任先のネームサーバー名が委任対象ドメイン配下にある場合などに、名前解決の循環を避けるため親ゾーン側に置かれる補助情報です。',
            },
            {
                text: 'DNSレコード同士を物理的に接着するファイル',
                isCorrect: false,
                explanation:
                    '名前はglueですが、物理的な接着ファイルではありません。委任時の名前解決を助けるDNS上の補助情報です。',
            },
            {
                text: 'メール本文に添付する署名画像',
                isCorrect: false,
                explanation:
                    'メール署名画像ではありません。グルーレコードはDNS委任に関係します。',
            },
            {
                text: 'TTLを長くするためだけの専用レコード',
                isCorrect: false,
                explanation:
                    'TTL専用のレコードではありません。委任先ネームサーバーの名前解決を助けるA/AAAA情報です。',
            },
        ],
        explanation:
            '例えば ns1.example.com が example.com のネームサーバーである場合、ns1.example.com を解決するために example.com の情報が必要になり、循環しやすくなります。そこで親側のグルーレコードが重要になります。',
    },
    {
        question:
            'NXDOMAINの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '問い合わせたドメイン名が存在しないことを示すDNS応答',
                isCorrect: true,
                explanation:
                    'NXDOMAINは、問い合わせた名前がDNS上に存在しないことを示す応答コードです。',
            },
            {
                text: 'DNS問い合わせが成功し、Aレコードが返ったことを示す応答',
                isCorrect: false,
                explanation:
                    'Aレコードが正常に返る場合は名前が存在して解決できています。NXDOMAINは名前が存在しないことを示します。',
            },
            {
                text: 'メールサーバーの優先度が最大であることを示す値',
                isCorrect: false,
                explanation:
                    'メールサーバーの優先度はMXレコードの値です。NXDOMAINはDNS応答コードです。',
            },
            {
                text: 'DNSSECの署名鍵そのもの',
                isCorrect: false,
                explanation:
                    'DNSSECの鍵にはDNSKEYなどがあります。NXDOMAINは名前が存在しないことを示す応答です。',
            },
        ],
        explanation:
            'トラブルシューティングでは、NXDOMAIN（名前が存在しない）とSERVFAIL（処理失敗）を区別することが重要です。',
    },
    {
        question:
            '再帰問い合わせの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '問い合わせを受けたDNSサーバーが、必要な問い合わせを代行して最終的な答えを返す方式',
                isCorrect: true,
                explanation:
                    '再帰問い合わせでは、リゾルバーが利用者の代わりにルート、TLD、権威DNSなどをたどり、最終的な答えを返します。',
            },
            {
                text: 'WebブラウザがHTMLを何度も再読み込みする方式',
                isCorrect: false,
                explanation:
                    'ブラウザの再読み込みとは別の概念です。再帰問い合わせはDNSの名前解決方式に関する用語です。',
            },
            {
                text: 'DNSレコードを必ず削除してから再作成する方式',
                isCorrect: false,
                explanation:
                    'DNSレコードの削除や再作成とは関係ありません。問い合わせ処理の進め方を指します。',
            },
            {
                text: 'メールを複数の宛先へ転送する方式',
                isCorrect: false,
                explanation:
                    'メール転送ではありません。再帰問い合わせはDNSリゾルバーの動作に関係します。',
            },
        ],
        explanation:
            'PCやスマホは通常、近くのリゾルバーへ再帰問い合わせを依頼します。リゾルバーがDNS階層をたどって答えを集めます。',
    },
    {
        question:
            '反復問い合わせの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '問い合わせ先DNSサーバーが、知っている範囲の答えや次に問い合わせるべきDNSサーバー情報を返す方式',
                isCorrect: true,
                explanation:
                    '反復問い合わせでは、DNSサーバーは最終回答を代行して探し切るのではなく、自分が知っている情報や次の参照先を返します。',
            },
            {
                text: '同じDNSレコードを無限に登録し続ける方式',
                isCorrect: false,
                explanation:
                    'レコード登録の繰り返しではありません。反復問い合わせはDNS階層をたどる問い合わせ方式です。',
            },
            {
                text: 'TTLが切れる前に必ずキャッシュを削除する方式',
                isCorrect: false,
                explanation:
                    'キャッシュ削除の方式ではありません。反復問い合わせはDNSサーバー同士の問い合わせで使われます。',
            },
            {
                text: 'Webサーバーが同じHTMLを何度も返す方式',
                isCorrect: false,
                explanation:
                    'Webサーバーの応答方式ではなく、DNSの問い合わせ方式です。',
            },
        ],
        explanation:
            'リゾルバーがルートDNS、TLD DNS、権威DNSを順にたどるとき、反復問い合わせの考え方が関係します。',
    },
    {
        question:
            'スタブリゾルバーの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '端末やOS側にあり、通常はフルリゾルバーへ名前解決を依頼する簡易的なリゾルバー',
                isCorrect: true,
                explanation:
                    'スタブリゾルバーはPCやスマホなどの端末側で動き、通常はISPやパブリックDNSなどのフルリゾルバーへ問い合わせを送ります。',
            },
            {
                text: 'DNSゾーンを正式に管理する権威DNSサーバー',
                isCorrect: false,
                explanation:
                    'ゾーンを正式に管理するのは権威DNSサーバーです。スタブリゾルバーは端末側で名前解決を依頼する役割です。',
            },
            {
                text: 'ドメイン名を販売する事業者',
                isCorrect: false,
                explanation:
                    'ドメイン名の登録を扱う事業者はレジストラです。スタブリゾルバーはDNS問い合わせに関係します。',
            },
            {
                text: 'メールの送信元を認証するTXTレコード',
                isCorrect: false,
                explanation:
                    'メール送信元認証にはSPF、DKIM、DMARCなどがあります。スタブリゾルバーはDNS問い合わせを行う端末側の仕組みです。',
            },
        ],
        explanation:
            '普段の名前解決では、端末のスタブリゾルバーがフルリゾルバーへ依頼し、フルリゾルバーが必要な問い合わせを進めます。',
    },
    {
        question:
            'フルリゾルバーの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '利用者の代わりにDNS階層をたどり、名前解決結果を返すリゾルバー',
                isCorrect: true,
                explanation:
                    'フルリゾルバーは、必要に応じてルート、TLD、権威DNSへ問い合わせ、最終的な名前解決結果を利用者へ返します。キャッシュも行います。',
            },
            {
                text: '必ずWebサーバーと同じマシンで動くDNSレコード',
                isCorrect: false,
                explanation:
                    'フルリゾルバーはDNSレコードではなく、名前解決を行うサーバーや機能です。Webサーバーと同じマシンである必要もありません。',
            },
            {
                text: 'ドメインの所有者情報だけを表示するサービス',
                isCorrect: false,
                explanation:
                    'ドメイン所有者情報の確認にはwhoisやRDAPが関係します。フルリゾルバーはDNS問い合わせを解決します。',
            },
            {
                text: 'IPv6アドレスだけを保存するDNSゾーン',
                isCorrect: false,
                explanation:
                    'IPv6アドレスの対応付けにはAAAAレコードを使います。フルリゾルバーはゾーンではありません。',
            },
        ],
        explanation:
            'ISPのDNSやGoogle Public DNS、Cloudflare DNSなどは、利用者から見るとフルリゾルバーとして使われることがあります。',
    },
    {
        question:
            'SERVFAILの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'DNSサーバーが問い合わせ処理に失敗したことを示す応答コード',
                isCorrect: true,
                explanation:
                    'SERVFAILはServer Failureの意味で、DNSサーバー側で問い合わせを正常に処理できなかったことを示します。',
            },
            {
                text: '問い合わせた名前が存在しないことを示す応答コード',
                isCorrect: false,
                explanation:
                    '名前が存在しないことを示す代表的な応答はNXDOMAINです。SERVFAILは処理失敗を示します。',
            },
            {
                text: 'DNS応答が成功し、必ずAレコードが返ったことを示す応答',
                isCorrect: false,
                explanation:
                    'SERVFAILは成功ではありません。何らかの理由で問い合わせ処理に失敗した状態です。',
            },
            {
                text: 'TTLが長すぎることだけを示す警告',
                isCorrect: false,
                explanation:
                    'SERVFAILはTTLの長さだけを示す警告ではありません。権威DNSの問題、DNSSEC検証失敗、到達性問題など複数の原因があり得ます。',
            },
        ],
        explanation:
            'DNSトラブルでは、NXDOMAINとSERVFAILの違いが重要です。前者は名前がない、後者は処理できなかった、という違いです。',
    },
    {
        question:
            'パブリックDNSの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '誰でも利用できる公開されたDNSリゾルバーサービス',
                isCorrect: true,
                explanation:
                    'パブリックDNSは、Google Public DNSやCloudflare DNSのように、利用者が設定して使える公開DNSリゾルバーサービスです。',
            },
            {
                text: 'インターネット上に公開されたWebページのHTMLそのもの',
                isCorrect: false,
                explanation:
                    'HTMLそのものではありません。パブリックDNSはDNS名前解決のためのサービスです。',
            },
            {
                text: '必ずすべてのDNSレコードを編集できる管理画面',
                isCorrect: false,
                explanation:
                    'パブリックDNSは通常リゾルバーサービスです。自分のドメインのDNSレコードを編集する管理画面とは別です。',
            },
            {
                text: 'メールサーバー専用の暗号化方式',
                isCorrect: false,
                explanation:
                    'メール暗号化方式ではありません。パブリックDNSは名前解決に使うDNSリゾルバーサービスです。',
            },
        ],
        explanation:
            'トラブルシューティングでは、ISPのDNSとパブリックDNSで応答を比べることがあります。ただしキャッシュ状態が違う点に注意します。',
    },
    {
        question:
            'hostsファイルの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '端末側で特定の名前とIPアドレスの対応を手動指定できるローカルファイル',
                isCorrect: true,
                explanation:
                    'hostsファイルはOS側のローカル設定で、特定のホスト名を指定したIPアドレスへ解決させるために使われることがあります。',
            },
            {
                text: '権威DNSサーバーが必ず公開するゾーンファイル',
                isCorrect: false,
                explanation:
                    'hostsファイルは端末側のローカルファイルです。権威DNSサーバーが公開するDNSゾーンとは別です。',
            },
            {
                text: 'MXレコードの優先度を自動計算するファイル',
                isCorrect: false,
                explanation:
                    'hostsファイルはMX優先度を計算するものではありません。名前とIPアドレスのローカル対応付けに使われます。',
            },
            {
                text: 'DNSSECの署名鍵を保存する専用ファイル',
                isCorrect: false,
                explanation:
                    'DNSSECの署名鍵管理とは別です。hostsファイルは端末のローカル名前解決に関係します。',
            },
        ],
        explanation:
            '検証時にhostsファイルを使うことがありますが、設定を戻し忘れると「自分の端末だけ違うIPへ行く」トラブルになります。',
    },
    {
        question:
            'digコマンドの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'DNS問い合わせの結果を確認するためによく使われるコマンド',
                isCorrect: true,
                explanation:
                    'digはDNS問い合わせを行い、返ってきたレコードや応答情報を確認するためのコマンドです。DNS調査でよく使われます。',
            },
            {
                text: 'WebサーバーのHTMLを編集するためのコマンド',
                isCorrect: false,
                explanation:
                    'digはHTML編集用ではありません。DNS問い合わせ結果の確認に使います。',
            },
            {
                text: 'メール本文を送信するためだけのコマンド',
                isCorrect: false,
                explanation:
                    'メール送信用コマンドではありません。DNSレコードの確認に使われます。',
            },
            {
                text: 'TLS証明書を必ず自動発行するコマンド',
                isCorrect: false,
                explanation:
                    'TLS証明書の発行コマンドではありません。digはDNS確認用のコマンドです。',
            },
        ],
        explanation:
            'dig example.com A、dig example.com MX、dig @8.8.8.8 example.com のように、レコード種別や問い合わせ先DNSサーバーを指定して確認できます。',
    },
    {
        question:
            'nslookupコマンドの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'DNSの名前解決結果を確認するために使われるコマンド',
                isCorrect: true,
                explanation:
                    'nslookupは、ドメイン名の名前解決結果やDNSサーバーの応答を確認するために使われるコマンドです。',
            },
            {
                text: 'DNSレコードを必ず削除するコマンド',
                isCorrect: false,
                explanation:
                    'nslookupは確認用のコマンドであり、DNSレコードを削除するコマンドではありません。',
            },
            {
                text: 'Webサイトの画像サイズを圧縮するコマンド',
                isCorrect: false,
                explanation:
                    '画像圧縮用ではありません。nslookupはDNS確認に使います。',
            },
            {
                text: 'メールサーバーの迷惑メールを自動削除するコマンド',
                isCorrect: false,
                explanation:
                    '迷惑メール削除用ではありません。DNSの名前解決結果を調べるコマンドです。',
            },
        ],
        explanation:
            'Windows環境でも使いやすいため、初歩的なDNS確認でよく登場します。digと同様に問い合わせ先DNSサーバーを指定して確認できます。',
    },
    {
        question:
            'whoisの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'ドメイン名やIPアドレスの登録情報を調べるための仕組み',
                isCorrect: true,
                explanation:
                    'whoisは、ドメイン名やIPアドレスの登録者、レジストラ、登録日、有効期限などの情報を調べるために使われます。',
            },
            {
                text: 'DNS応答のTTLを強制的に0にする仕組み',
                isCorrect: false,
                explanation:
                    'whoisはTTLを変更する仕組みではありません。登録情報を調べるための仕組みです。',
            },
            {
                text: 'AレコードをCNAMEへ自動変換する仕組み',
                isCorrect: false,
                explanation:
                    'whoisはDNSレコード変換を行いません。ドメインやIPアドレスの登録情報を参照します。',
            },
            {
                text: 'Webページの表示速度を測るためだけの仕組み',
                isCorrect: false,
                explanation:
                    '表示速度測定ではありません。whoisは登録情報確認に使われます。',
            },
        ],
        explanation:
            '最近はプライバシー保護で登録者情報が非公開になることも多いですが、レジストラやネームサーバー確認などに役立ちます。',
    },
    {
        question:
            'RDAPの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'ドメイン名やIPアドレスの登録情報を取得するための、whoisの後継的な仕組み',
                isCorrect: true,
                explanation:
                    'RDAP（Registration Data Access Protocol）は、ドメイン名やIPアドレスの登録情報を取得するためのプロトコルで、構造化された形式で情報を扱えます。',
            },
            {
                text: 'DNS応答を暗号化するためだけのレコードタイプ',
                isCorrect: false,
                explanation:
                    'RDAPはDNSレコードタイプではありません。登録情報を参照するための仕組みです。',
            },
            {
                text: 'メール本文に署名するための公開鍵レコード',
                isCorrect: false,
                explanation:
                    'メール署名にはDKIMなどが関係します。RDAPは登録情報の取得に使います。',
            },
            {
                text: 'WebサーバーのCPU使用率を監視する仕組み',
                isCorrect: false,
                explanation:
                    'RDAPは監視の仕組みではありません。ドメイン名やIPアドレスの登録情報に関係します。',
            },
        ],
        explanation:
            'whoisと同じく登録情報確認に関係する用語です。DNSレコードそのものではなく、ドメイン管理周辺の知識として覚えます。',
    },
    {
        question:
            'DKIMの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'メールに電子署名を付け、受信側がDNSで公開鍵を取得して検証できる仕組み',
                isCorrect: true,
                explanation:
                    'DKIM（DomainKeys Identified Mail）はメールに電子署名を付け、受信側がDNS上のTXTレコードなどで公開鍵を取得して検証する仕組みです。',
            },
            {
                text: 'WebサイトのIPv6アドレスを指定するDNSレコード',
                isCorrect: false,
                explanation:
                    'IPv6アドレスを指定するのはAAAAレコードです。DKIMはメール認証に関係します。',
            },
            {
                text: 'DNSレコードのキャッシュ時間を決める値',
                isCorrect: false,
                explanation:
                    'キャッシュ時間を決める値はTTLです。DKIMはメールの署名検証に関係します。',
            },
            {
                text: 'ドメイン名を販売する事業者',
                isCorrect: false,
                explanation:
                    'ドメイン名の登録を扱う事業者はレジストラです。DKIMはメール認証の仕組みです。',
            },
        ],
        explanation:
            'DKIMはSPFやDMARCと並ぶメールなりすまし対策の重要用語です。DNSには公開鍵情報を置くため、DNS運用にも関係します。',
    },
    {
        question:
            'DMARCの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'SPFやDKIMの結果をもとに、受信側へメールの扱い方を伝える仕組み',
                isCorrect: true,
                explanation:
                    'DMARCは、SPFやDKIMの認証結果とドメインの整合性をもとに、失敗したメールをどう扱うかを受信側へ伝える仕組みです。',
            },
            {
                text: 'IPv4アドレスを返すDNSレコード',
                isCorrect: false,
                explanation:
                    'IPv4アドレスを返すのはAレコードです。DMARCはメール認証ポリシーに関係します。',
            },
            {
                text: 'DNSゾーンを別の権威DNSサーバーへ委任する仕組み',
                isCorrect: false,
                explanation:
                    'DNSゾーンの委任にはNSレコードなどが関係します。DMARCはメール認証の仕組みです。',
            },
            {
                text: 'ブラウザのキャッシュを削除するDNSコマンド',
                isCorrect: false,
                explanation:
                    'DMARCはコマンドではありません。メールのなりすまし対策に使われます。',
            },
        ],
        explanation:
            'DMARCは通常 _dmarc.example.com のTXTレコードとして公開されます。メール送信ドメインの信頼性に関係します。',
    },
    {
        question:
            'CAAレコードの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'そのドメインの証明書を発行できる認証局を指定するDNSレコード',
                isCorrect: true,
                explanation:
                    'CAA（Certification Authority Authorization）レコードは、どの認証局がそのドメインの証明書を発行できるかを指定するDNSレコードです。',
            },
            {
                text: 'メール配送先のメールサーバーを指定するDNSレコード',
                isCorrect: false,
                explanation:
                    'メール配送先を指定するのはMXレコードです。CAAレコードは証明書発行に関係します。',
            },
            {
                text: 'ドメイン名をIPv6アドレスに対応付けるDNSレコード',
                isCorrect: false,
                explanation:
                    'IPv6アドレスに対応付けるのはAAAAレコードです。CAAレコードは認証局の制御に使います。',
            },
            {
                text: 'DNS応答が存在しないことを示す応答コード',
                isCorrect: false,
                explanation:
                    '名前が存在しないことを示す応答はNXDOMAINです。CAAはDNSレコードの種類です。',
            },
        ],
        explanation:
            'CAAはHTTPS証明書の発行管理に関係します。DNSはWebアクセス先だけでなく、証明書発行の制御にも使われます。',
    },
    {
        question:
            'ゾーン転送の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'DNSゾーンのレコード情報を別のDNSサーバーへ複製する仕組み',
                isCorrect: true,
                explanation:
                    'ゾーン転送は、プライマリDNSからセカンダリDNSへゾーン情報を同期するために使われます。AXFRやIXFRといった方式があります。',
            },
            {
                text: 'Webサイトの画像をCDNへアップロードする仕組み',
                isCorrect: false,
                explanation:
                    '画像配信やCDNアップロードとは別です。ゾーン転送はDNSゾーン情報の同期に関係します。',
            },
            {
                text: 'メール本文を別の宛先へ転送する仕組み',
                isCorrect: false,
                explanation:
                    'メール転送ではありません。DNSゾーンの情報をDNSサーバー間で転送する仕組みです。',
            },
            {
                text: 'TTLを短くするためだけのDNSレコード',
                isCorrect: false,
                explanation:
                    'ゾーン転送はレコード種別ではありません。DNSサーバー間でゾーン情報を同期する仕組みです。',
            },
        ],
        explanation:
            'ゾーン転送は便利ですが、許可範囲を誤るとゾーン情報が不要に外部へ見えるリスクがあります。基本用語として覚えておくと運用理解に役立ちます。',
    },
    {
        question:
            'プライマリDNSの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'DNSゾーンの元となる情報を管理し、セカンダリDNSへ転送元になるDNSサーバー',
                isCorrect: true,
                explanation:
                    'プライマリDNSはゾーン情報の原本側として扱われ、セカンダリDNSへゾーン転送する構成で使われます。',
            },
            {
                text: '利用者のPCに必ず内蔵されているWi-Fi機器',
                isCorrect: false,
                explanation:
                    'Wi-Fi機器ではありません。プライマリDNSはDNSゾーン管理に関する用語です。',
            },
            {
                text: 'DNSSECの署名検証に失敗した応答コード',
                isCorrect: false,
                explanation:
                    '署名検証失敗時にはSERVFAILなどとして見えることがあります。プライマリDNSは応答コードではありません。',
            },
            {
                text: 'メール配送先の優先度が最も高いMXレコード',
                isCorrect: false,
                explanation:
                    'MXレコードの優先度とは別の概念です。プライマリDNSはゾーン管理の役割です。',
            },
        ],
        explanation:
            '現在のクラウドDNSでは内部実装を意識しないこともありますが、プライマリ/セカンダリの考え方はDNS運用の基礎です。',
    },
    {
        question:
            'セカンダリDNSの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'プライマリDNSからゾーン情報を受け取り、同じゾーンの問い合わせに応答するDNSサーバー',
                isCorrect: true,
                explanation:
                    'セカンダリDNSは、プライマリDNSからゾーン転送で情報を受け取り、冗長性や可用性を高めるために使われます。',
            },
            {
                text: 'DNSレコードを削除する専用の管理画面',
                isCorrect: false,
                explanation:
                    'セカンダリDNSは削除専用の管理画面ではありません。DNSゾーンの複製を持つサーバーです。',
            },
            {
                text: 'Webサーバーのバックアップ画像',
                isCorrect: false,
                explanation:
                    'Webサーバーのバックアップ画像ではありません。DNSサーバーの役割に関する用語です。',
            },
            {
                text: 'IPv6アドレスだけを返すDNSレコード',
                isCorrect: false,
                explanation:
                    'IPv6アドレスを返すのはAAAAレコードです。セカンダリDNSはDNSサーバーの役割です。',
            },
        ],
        explanation:
            '複数の権威DNSサーバーを用意することで、DNSの可用性を高められます。NSレコードには複数のネームサーバーが並ぶことがよくあります。',
    },
    {
        question:
            'シリアル番号の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'SOAレコードに含まれ、ゾーン情報の更新有無を判断するために使われる番号',
                isCorrect: true,
                explanation:
                    'DNSゾーンのシリアル番号はSOAレコードに含まれ、セカンダリDNSがゾーン情報の更新有無を判断するために使います。',
            },
            {
                text: 'AレコードのIPv4アドレスそのもの',
                isCorrect: false,
                explanation:
                    'IPv4アドレスとシリアル番号は別です。シリアル番号はゾーン情報のバージョン管理に関係します。',
            },
            {
                text: 'メールサーバーの優先度の別名',
                isCorrect: false,
                explanation:
                    'メールサーバーの優先度はMXレコードで使われる値です。シリアル番号はSOAレコードに含まれるゾーン管理情報です。',
            },
            {
                text: 'DNS問い合わせが成功したことを示す応答コード',
                isCorrect: false,
                explanation:
                    '応答コードではありません。シリアル番号はゾーン情報の更新管理に使われます。',
            },
        ],
        explanation:
            'ゾーンファイルを手動管理する環境では、レコードを変更したらシリアル番号も更新する、という運用が重要になります。',
    },
    {
        question:
            'ラウンドロビンDNSの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '同じ名前に複数のIPアドレスを返し、接続先を分散させるDNSの使い方',
                isCorrect: true,
                explanation:
                    'ラウンドロビンDNSでは、同じ名前に複数のAレコードなどを設定し、複数のIPアドレスを返して接続先を分散させます。',
            },
            {
                text: 'DNSレコードを必ず時計回りに並べるルール',
                isCorrect: false,
                explanation:
                    '物理的な並び順のルールではありません。複数のIPアドレスを返して負荷分散に使う考え方です。',
            },
            {
                text: 'メール本文を複数人で順番に確認する仕組み',
                isCorrect: false,
                explanation:
                    'メール確認フローではありません。DNS応答を使った簡易的な分散方法です。',
            },
            {
                text: 'DNSSECの署名鍵を定期的に交換すること',
                isCorrect: false,
                explanation:
                    'DNSSECの鍵交換とは別です。ラウンドロビンDNSは複数IPアドレスによる接続先分散に関係します。',
            },
        ],
        explanation:
            'ラウンドロビンDNSは簡単ですが、ヘルスチェックやセッション制御まで自動で完璧に行う仕組みではありません。本格的な負荷分散とは違いがあります。',
    },
    {
        question:
            'ワイルドカードDNSの説明として最も適切なものはどれですか?',
        options: [
            {
                text: '*.example.com のように、明示的に存在しない名前にもまとめて応答させるDNS設定',
                isCorrect: true,
                explanation:
                    'ワイルドカードDNSは、*.example.com のような形で、個別に定義していないサブドメインにも一定の応答を返す設定です。',
            },
            {
                text: 'DNSサーバーが必ず不正アクセスを検知する機能',
                isCorrect: false,
                explanation:
                    '不正アクセス検知機能ではありません。ワイルドカードDNSは名前解決の応答範囲を広げる設定です。',
            },
            {
                text: 'メールをすべて迷惑メールに分類するDNSレコード',
                isCorrect: false,
                explanation:
                    '迷惑メール分類のレコードではありません。サブドメインの名前解決に関係します。',
            },
            {
                text: 'TLDを自由に作成できる仕組み',
                isCorrect: false,
                explanation:
                    'TLDを自由に作成する仕組みではありません。自分が管理するゾーン内でワイルドカード名を設定します。',
            },
        ],
        explanation:
            'ワイルドカードDNSは便利ですが、意図しない名前まで解決されるため、証明書、アプリのルーティング、セキュリティ上の影響も考える必要があります。',
    },
    {
        question:
            'NSレコードを確認する主な目的として最も適切なものはどれですか?',
        options: [
            {
                text: 'そのドメインのDNS情報をどのネームサーバーが管理しているかを確認するため',
                isCorrect: true,
                explanation:
                    'NSレコードは、そのゾーンの権威DNSサーバーを示します。つまり、どのネームサーバーが正式なDNS情報を持っているかを確認できます。',
            },
            {
                text: 'WebサイトのHTML本文を確認するため',
                isCorrect: false,
                explanation:
                    'NSレコードで確認できるのはネームサーバー情報です。HTML本文はHTTP/HTTPSでWebサーバーから取得します。',
            },
            {
                text: 'メール本文が暗号化されているか確認するため',
                isCorrect: false,
                explanation:
                    'メール本文の暗号化確認とは別です。NSレコードはDNSを管理するネームサーバーに関係します。',
            },
            {
                text: 'IPv4アドレスを直接返すため',
                isCorrect: false,
                explanation:
                    'IPv4アドレスを直接返すのはAレコードです。NSレコードはネームサーバー名を返します。',
            },
        ],
        explanation:
            'DNSトラブルでは、まず「どのネームサーバーが権威を持っているか」を確認することがあります。NSレコードはその入口になります。',
    },
    {
        question:
            'ネームサーバーの説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'DNS問い合わせに対して、ドメイン名に関する情報を返すDNSサーバー',
                isCorrect: true,
                explanation:
                    'ネームサーバーはDNSサーバーの一種で、ドメイン名に関するDNSレコード情報を返します。権威DNSサーバーとしてゾーンを管理するものもあります。',
            },
            {
                text: 'Webページを表示するブラウザの別名',
                isCorrect: false,
                explanation:
                    'ブラウザはWebページを閲覧するソフトウェアです。ネームサーバーはDNS問い合わせに応答するサーバーです。',
            },
            {
                text: 'メール本文だけを保存するサーバー',
                isCorrect: false,
                explanation:
                    'メール本文の保存はメールサーバーやメールボックスの役割です。ネームサーバーはDNS情報を扱います。',
            },
            {
                text: 'ドメイン名の料金を決める請求システム',
                isCorrect: false,
                explanation:
                    '料金や請求システムではありません。ネームサーバーはDNSの名前解決に関係します。',
            },
        ],
        explanation:
            '「ネームサーバーを変更する」とは、そのドメインのDNS情報を管理するDNSサーバーを切り替える作業を指すことが多いです。',
    },
    {
        question:
            'SPFレコードを設定する目的として最も適切なものはどれですか?',
        options: [
            {
                text: 'そのドメインのメール送信元として許可するサーバーを示すため',
                isCorrect: true,
                explanation:
                    'SPFは、そのドメイン名を使ってメールを送信してよいサーバーをDNS上で示す仕組みです。通常はTXTレコードとして設定します。',
            },
            {
                text: 'Webサイトの表示先IPアドレスを指定するため',
                isCorrect: false,
                explanation:
                    'Webサイトの表示先IPアドレスを指定する基本レコードはAやAAAAです。SPFはメール送信元の認証に関係します。',
            },
            {
                text: 'ドメインの権威DNSサーバーを指定するため',
                isCorrect: false,
                explanation:
                    '権威DNSサーバーを指定するのはNSレコードです。SPFはメール送信元の許可情報を示します。',
            },
            {
                text: 'DNS応答をキャッシュしてよい時間を指定するため',
                isCorrect: false,
                explanation:
                    'キャッシュ時間を指定するのはTTLです。SPFはメールのなりすまし対策に関係します。',
            },
        ],
        explanation:
            'SPFだけでメール認証が完結するわけではありません。実運用ではDKIMやDMARCと組み合わせて、なりすまし対策を強化します。',
    },
]
