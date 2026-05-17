import type { Question } from '@/types/test_questions'

export const testQuestions: Question[] = [
    {
        question:
            '複数アプリケーションが同じS3バケットへログを書き込みます。誤削除や上書きに強くし、一定期間は管理者でも削除できない形でログを保持したい場合、最も適切な設計はどれですか?',
        options: [
            {
                text: 'バケットでバージョニングを有効化し、S3 Object Lockをコンプライアンスモードで設定する',
                isCorrect: true,
                explanation:
                    'S3 Object LockはWORM（Write Once Read Many）モデルでオブジェクトの削除や上書きを防ぐ機能です。コンプライアンスモードでは、保持期間中はルートユーザーを含めて保持設定を短縮したり削除したりできません。Object Lockにはバージョニングが必要です。',
            },
            {
                text: 'S3 Standard-IAへ保存すれば、保持期間中の削除は自動的に完全禁止される',
                isCorrect: false,
                explanation:
                    'S3 Standard-IAは低頻度アクセス向けのストレージクラスです。コスト特性は変わりますが、削除や上書きを禁止する保持制御にはなりません。',
            },
            {
                text: 'バケットポリシーでPutObjectだけを許可すれば、既存オブジェクトの上書きは常に不可能になる',
                isCorrect: false,
                explanation:
                    'S3では同じキーへPutObjectすると、バージョニング無効時は既存オブジェクトが上書きされます。権限設計だけで一定期間の改ざん不能性を保証したい要件にはObject Lockの方が適しています。',
            },
            {
                text: 'ライフサイクルルールで即時削除を設定すれば、誤削除に強いログ保管になる',
                isCorrect: false,
                explanation:
                    'ライフサイクルルールは移行や期限切れ削除を自動化する機能です。即時削除を設定すると保持とは逆の動きになり、誤削除や改ざん防止の要件を満たしません。',
            },
        ],
        explanation:
            '監査ログや規制対応の保管では、単なるバックアップや低コスト化ではなく「保持期間中に消せない・変えられない」ことが要件になる場合があります。その場合はバージョニング、Object Lock、保持モード、保持期間、リーガルホールドの違いを理解して設計します。',
    },
    {
        question:
            '別アカウントのIAMロールから、自社アカウントのS3バケット内のオブジェクトを読み取らせたいです。対象オブジェクトはSSE-S3で暗号化されており、バケットは非公開のままにします。最も適切な権限設計はどれですか?',
        options: [
            {
                text: '相手アカウントのIAMロールにs3:GetObjectを許可し、自社バケットポリシーでもそのロールにs3:GetObjectを許可する',
                isCorrect: true,
                explanation:
                    'クロスアカウントアクセスでは、呼び出し元側のアイデンティティベースポリシーと、リソース所有側のバケットポリシーの両方で許可が必要になります。SSE-S3はS3管理の暗号化なので、SSE-KMSのようなKMSキーポリシー調整は不要です。実務では、Principalに相手アカウントのロールARNを正しく指定しているか、相手がそのロールをAssumeRoleしてからアクセスする前提なのかも確認します。',
            },
            {
                text: '相手アカウントのIAMロールにs3:GetObjectを許可すれば、バケットポリシーは不要で必ず読める',
                isCorrect: false,
                explanation:
                    '別アカウントのリソースへアクセスする場合、呼び出し元のIAMポリシーだけでは不十分です。バケット側でそのプリンシパルを信頼して許可する必要があります。同一アカウント内ならIAMポリシーだけで足りるケースもありますが、クロスアカウントではリソース側の許可を確認します。',
            },
            {
                text: 'バケットポリシーでPrincipalを*にして全員へs3:GetObjectを許可する',
                isCorrect: false,
                explanation:
                    'この方法でも条件次第では読める可能性がありますが、バケットを広く公開する設計になり、非公開のまま特定ロールだけに許可する要件を満たしません。特定のIAMロールARNをPrincipalに指定する方が適切です。',
            },
            {
                text: 'S3 ACLで相手アカウントにREADを付けることを最優先にする',
                isCorrect: false,
                explanation:
                    '現在のS3設計ではACLよりもIAMポリシーとバケットポリシーで制御するのが基本です。新規バケットではObject OwnershipのBucket owner enforcedがデフォルトで、ACLは無効です。',
            },
        ],
        explanation:
            'クロスアカウントS3アクセスでは「誰が呼び出すか」と「バケット側がその呼び出し元を許すか」を分けて考えます。Principalの指定ミス、ロールをAssumeRoleしていない、バケットポリシーが別のロールを許可している、といった原因は典型的です。さらにSSE-KMS暗号化の場合は、S3の許可に加えてKMSキーの利用許可も必要になります。',
    },
    {
        question:
            'あるIAMロールにはs3:GetObjectが許可されていますが、特定のS3バケットだけアクセスするとAccessDeniedになります。バケットポリシーには、そのロールに対する明示的Denyが条件付きで設定されていました。この場合の評価として最も適切なものはどれですか?',
        options: [
            {
                text: '明示的Denyが条件に一致すると、IAM側のAllowがあってもアクセスは拒否される',
                isCorrect: true,
                explanation:
                    'AWSのポリシー評価では、明示的DenyはAllowより優先されます。IAMロールにs3:GetObjectのAllowがあっても、バケットポリシーのDeny条件に一致すればアクセスは拒否されます。AWS Organizations配下ではSCP（Service Control Policy：組織単位で許可範囲を制限するポリシー）のDenyも原因になり得ます。',
            },
            {
                text: 'IAMロールのAllowは常にバケットポリシーのDenyより優先される',
                isCorrect: false,
                explanation:
                    'AllowがDenyを上書きするわけではありません。明示的Denyは、アイデンティティベースポリシーとリソースベースポリシーをまたいでも強く効きます。',
            },
            {
                text: 'バケットポリシーのDenyは、同じアカウント内のIAMロールには適用されない',
                isCorrect: false,
                explanation:
                    'バケットポリシーは同一アカウントのプリンシパルにも適用されます。PrincipalやConditionに一致すれば、同一アカウント内のロールでも拒否されます。',
            },
            {
                text: 'Denyを回避するには、オブジェクトをSSE-S3で暗号化すればよい',
                isCorrect: false,
                explanation:
                    '暗号化方式はポリシー評価のDenyを回避する手段ではありません。アクセス拒否の原因が明示的Denyなら、ポリシー条件を見直す必要があります。',
            },
        ],
        explanation:
            'S3のAccessDenied調査では、まず「必要なAllowがあるか」だけでなく「どこかに明示的Denyがないか」を確認します。Organizations配下ではSCPでアカウント全体の上限が絞られていることもあります。IAMポリシー、バケットポリシー、SCP、VPCエンドポイントポリシー、KMSキーポリシーなど、複数のレイヤーで拒否される可能性があります。',
    },
    {
        question:
            '静的ファイルを一時的にS3から直接公開しようとして、バケットポリシーでPrincipal: "*"に対するs3:GetObjectを許可しました。しかし匿名アクセスは拒否されます。最も可能性が高い原因はどれですか?',
        options: [
            {
                text: 'アカウントまたはバケットのS3 Block Public Accessが、公開ポリシーによるアクセスをブロックしている',
                isCorrect: true,
                explanation:
                    'S3 Block Public Accessは、バケットポリシーやACLで意図せずpublic accessが許可されても、それを上位でブロックできます。アカウントレベルとバケットレベルの設定があり、実効設定としてより制限的な設定が効きます。代表的な設定には、公開ACLを無視するIgnorePublicAclsや、公開ポリシーの設定を拒否するBlockPublicPolicyなどがあります。',
            },
            {
                text: 'バケットポリシーで匿名読み取りを許可しているため、Block Public Accessの設定は結果に影響しない',
                isCorrect: false,
                explanation:
                    'バケットポリシーで公開読み取りを許可していても、Block Public Accessや組織ポリシー、アカウントレベル設定でブロックされることがあります。公開ポリシーの文法が正しいことと、実際に公開アクセスが通ることは別です。',
            },
            {
                text: 'SSE-S3で暗号化されたオブジェクトは、どのような設定でも匿名読み取りできない',
                isCorrect: false,
                explanation:
                    'SSE-S3はS3が管理するサーバー側暗号化です。暗号化されていることだけで匿名読み取りが常に不可能になるわけではありません。アクセス可否は主にポリシーやBlock Public Accessで決まります。',
            },
            {
                text: 'S3バケット名にハイフンが含まれているため、公開アクセスが拒否されている',
                isCorrect: false,
                explanation:
                    'バケット名のハイフンは一般的に利用できます。公開アクセスが拒否される直接原因としては、Block Public Accessやポリシー評価を確認すべきです。',
            },
        ],
        explanation:
            '実務では、公開したつもりでもBlock Public Accessで止まっているケースがよくあります。特にアカウントレベルやAWS Organizationsレベルで制御されている場合、バケット単体の設定だけを見ても原因に気づきにくいです。調査ではバケットポリシー、バケットレベルのBlock Public Access、アカウントレベルのBlock Public Access、組織側の制御を順に確認します。',
    },
    {
        question:
            '社内VPCのEC2からだけS3バケットへアクセスさせるため、バケットポリシーでaws:SourceVpceが特定のVPCエンドポイントIDと一致しない場合にDenyする設定を入れました。その直後、管理者がAWSマネジメントコンソールからも対象バケットを開けなくなりました。最も適切な説明はどれですか?',
        options: [
            {
                text: 'コンソールからのリクエストは通常そのVPCエンドポイント経由ではないため、Deny条件に一致して拒否される',
                isCorrect: true,
                explanation:
                    'aws:SourceVpceで特定VPCエンドポイント以外をDenyすると、指定エンドポイントを通らないアクセスは拒否されます。aws:SourceVpceはエンドポイント単位、aws:SourceVpcはVPC単位の条件です。AWSマネジメントコンソールからの操作も、そのVPCエンドポイント経由とは限らないため、管理者自身を締め出すことがあります。',
            },
            {
                text: 'aws:SourceVpcを使っていれば、どのVPCエンドポイントからでも必ず同じ制御になる',
                isCorrect: false,
                explanation:
                    'aws:SourceVpcはVPC単位の条件で、aws:SourceVpceは個々のVPCエンドポイント単位の条件です。要件が「特定エンドポイントだけ」なのか「特定VPCから」なのかで使う条件キーが変わります。',
            },
            {
                text: 'VPCエンドポイントを使うと、S3バケットは自動的にpublic readになる',
                isCorrect: false,
                explanation:
                    'VPCエンドポイントは通信経路をプライベートにする仕組みであり、バケットを公開する機能ではありません。アクセス制御はIAM、バケットポリシー、エンドポイントポリシーなどで決まります。',
            },
            {
                text: 'S3ではVPCエンドポイント経由のアクセス制御はサポートされていない',
                isCorrect: false,
                explanation:
                    'S3バケットポリシーではaws:SourceVpceやaws:SourceVpcなどの条件キーを使って、特定のVPCエンドポイントやVPCからのアクセスに制限できます。',
            },
        ],
        explanation:
            'VPC Endpoint経由制限は強力ですが、Deny条件を誤ると管理者や運用ツールもアクセスできなくなります。特に「指定経路以外をDenyする」設計では、例外条件、ブレークグラス手順、コンソール操作への影響を事前に確認します。エンドポイント単位で絞るならaws:SourceVpce、VPC単位で絞るならaws:SourceVpcという違いも押さえます。',
    },
    {
        question:
            '新しく作成したS3バケットで、アップロード時にpublic-read ACLを指定したところ失敗しました。このバケットはObject OwnershipがBucket owner enforcedです。最も適切な説明はどれですか?',
        options: [
            {
                text: 'Bucket owner enforcedではACLが無効化され、アクセス制御はIAMポリシーやバケットポリシーで行う',
                isCorrect: true,
                explanation:
                    'Object OwnershipのBucket owner enforcedではACLが無効になり、バケット所有者がすべてのオブジェクトを所有します。public-readのようなACLではなく、ポリシーでアクセスを制御します。旧来はクロスアカウント書き込みでbucket-owner-full-control ACLを使う場面がありましたが、現在の新規設計ではACLを無効化して所有権と権限管理を単純にする方が基本です。',
            },
            {
                text: 'Bucket owner enforcedでは、すべてのオブジェクトが自動的にpublic readになる',
                isCorrect: false,
                explanation:
                    'Bucket owner enforcedは所有権とACL無効化の設定であり、自動公開の設定ではありません。公開するには別途ポリシー設計が必要で、Block Public Accessの影響も受けます。',
            },
            {
                text: 'Bucket owner enforcedを使うには、必ずすべてのオブジェクトをSSE-KMSで暗号化する必要がある',
                isCorrect: false,
                explanation:
                    'Object Ownershipと暗号化方式は別の設定です。Bucket owner enforcedを使うためにSSE-KMSが必須になるわけではありません。',
            },
            {
                text: 'public-read ACLを使えば、Block Public Accessの設定に関係なく公開できる',
                isCorrect: false,
                explanation:
                    'Block Public Accessは公開ACLや公開ポリシーをブロックできます。さらにBucket owner enforcedではACL自体がアクセス制御に使われません。ACLに依存する公開手順は、現在のS3のデフォルト設定では失敗しやすい古い運用です。',
            },
        ],
        explanation:
            '現在のS3では、ACLに頼らずポリシーでアクセス制御する設計が基本です。古い手順でpublic-read ACLやbucket-owner-full-control ACLを前提にすると、Object OwnershipやBlock Public Accessにより期待通り動かないことがあります。ACLを使わない方が、所有権の混乱や個別オブジェクト単位の例外を減らせます。',
    },
    {
        question:
            'SSE-KMSで暗号化されたS3オブジェクトを読み取ろうとしたところ、IAMロールにはs3:GetObjectが許可されているのにAccessDeniedになりました。最も確認すべき追加要素はどれですか?',
        options: [
            {
                text: 'そのロールが対象KMSキーを復号に使えるよう、KMSキーポリシーまたはIAMポリシーでkms:Decryptなどが許可されているか',
                isCorrect: true,
                explanation:
                    'SSE-KMSで暗号化されたオブジェクトを読むには、S3のGetObject権限だけでなく、対象KMSキーを使った復号権限も必要です。PUTではkms:GenerateDataKey、Multipart Uploadではkms:GenerateDataKeyとkms:Decryptが必要になるなど、操作によって必要なKMS権限が変わります。クロスアカウントではKMSキーポリシー側の許可漏れが原因になりやすいです。',
            },
            {
                text: 'SSE-KMSのオブジェクトは、所有者本人以外は絶対に読み取れない仕様かどうか',
                isCorrect: false,
                explanation:
                    'SSE-KMSのオブジェクトでも、S3権限とKMS権限が適切に設定されていれば読み取れます。絶対に所有者本人しか読めないわけではありません。',
            },
            {
                text: 'バケットのリージョンを毎回変更してからGetObjectしているか',
                isCorrect: false,
                explanation:
                    'バケットのリージョンは作成後に変更できません。SSE-KMSのAccessDeniedでは、S3権限とKMSキー権限、KMSキーが対象オブジェクトの暗号化に使われたキーか、キーのリージョンや状態などを確認します。',
            },
            {
                text: 'オブジェクトキーにスラッシュが含まれていないか',
                isCorrect: false,
                explanation:
                    'キーにスラッシュを含めることは一般的です。AccessDeniedの主因としては、ポリシー、Block Public Access、KMS権限、VPCエンドポイント制限などを確認します。',
            },
        ],
        explanation:
            'SSE-KMSは「S3にアクセスできるか」と「KMSキーを使えるか」の両方を満たす必要があります。SSE-S3ではこのKMSキー権限の問題は通常発生しないため、暗号化方式の違いはトラブルシュートで重要です。調査順序としては、IAMポリシー、バケットポリシー、明示的Deny、Block Public Access、KMSキー権限、VPC Endpoint制限を順に切り分けると原因を見つけやすくなります。',
    },
    {
        question:
            '外部ベンダーのAWSアカウントから、自社S3バケットへレポートファイルをPUTさせます。自社側で後から確実に読み取り・ライフサイクル管理できるようにしたい場合、現在の新規設計として最も適切なものはどれですか?',
        options: [
            {
                text: 'Object OwnershipをBucket owner enforcedにしてACLを無効化し、バケットポリシーでベンダーのPUTを必要最小限に許可する',
                isCorrect: true,
                explanation:
                    'Bucket owner enforcedではACLが無効になり、バケット所有者がアップロードされたオブジェクトを所有します。クロスアカウント書き込みでも所有権問題を避けやすく、アクセス制御はバケットポリシーなどで管理できます。実務ではベンダーが書き込めるprefixを限定し、必要ならs3:x-amz-server-side-encryptionなどの条件で暗号化方式も強制します。',
            },
            {
                text: 'ベンダーに任意のACLを付けてアップロードしてもらい、所有権はベンダー側に残す',
                isCorrect: false,
                explanation:
                    'オブジェクト所有権がベンダー側に残ると、自社側の読み取りや管理で問題が出ることがあります。旧来はbucket-owner-full-control ACLで補う設計もありましたが、新規設計ではACL依存を避け、Bucket owner enforcedでバケット所有者に統一する方が扱いやすいです。',
            },
            {
                text: 'バケットを完全公開し、ベンダーが匿名でPUTできるようにする',
                isCorrect: false,
                explanation:
                    '匿名PUTを許可する公開バケットは重大なセキュリティリスクです。ベンダーのIAMプリンシパルに限定し、必要なprefixだけにPutObjectを許可するなど、最小権限で設計します。',
            },
            {
                text: '自社アカウントのルートユーザーのアクセスキーをベンダーに渡す',
                isCorrect: false,
                explanation:
                    'ルートユーザーの認証情報を外部へ渡すのは避けるべきです。クロスアカウントIAMロールやベンダー側プリンシパルを使い、バケットポリシーで限定的に許可します。',
            },
        ],
        explanation:
            '昔のS3ではクロスアカウント書き込み時にbucket-owner-full-control ACLを意識する場面がありました。現在の新規設計では、Object OwnershipでACLを無効化し、バケット所有者がオブジェクトを所有する構成にすると、所有権と権限管理がシンプルになります。さらにprefix制限、暗号化条件、必要に応じたオブジェクトタグ条件などを組み合わせ、ベンダーに不要な読み取りや上書きを許可しないようにします。',
    },
    {
        question:
            'S3バケットの特定prefixだけ、社内アプリケーション用のIAMロールに読み書きさせたいです。最小権限に近い設計として最も適切なものはどれですか?',
        options: [
            {
                text: 'IAMロールに対象prefixのオブジェクトARNへのs3:GetObject / s3:PutObjectを許可し、必要ならListBucketはs3:prefix条件で絞る',
                isCorrect: true,
                explanation:
                    'オブジェクト操作は arn:aws:s3:::bucket/prefix/* のように対象を絞れます。一方、一覧操作のs3:ListBucketはバケットARNに対する権限として評価されるため、prefix制限にはs3:prefix条件を使うのが実務上の重要点です。コンソールや一覧表示の見え方を制御する場合は、s3:delimiter条件を併用する設計もあります。',
            },
            {
                text: 'IAMロールにバケット全体のs3:ListBucketとs3:GetObjectを許可し、アプリケーション側で対象prefixだけを表示する',
                isCorrect: false,
                explanation:
                    'アプリケーションコードだけに依存するのは最小権限ではありません。バケット全体の一覧や読み取りを許可すると、誤実装や認証情報漏えい時の影響が大きくなります。IAMポリシーでもprefixやオブジェクトARNを絞ります。',
            },
            {
                text: '対象prefix名を推測しにくい文字列にすれば、IAMポリシーで制限しなくてもよい',
                isCorrect: false,
                explanation:
                    '推測しにくい名前はアクセス制御ではありません。S3ではIAMポリシーやバケットポリシーなどで明示的に許可範囲を制限する必要があります。',
            },
            {
                text: 'バケット全体をpublic readにして、書き込みだけIAMロールに許可する',
                isCorrect: false,
                explanation:
                    '社内アプリケーション用の限定アクセスに対して、バケット全体の公開は過剰です。読み取りも書き込みも必要な範囲だけに制限する設計が適切です。',
            },
        ],
        explanation:
            'S3の権限制御では、バケット操作とオブジェクト操作でResourceの指定が異なります。GetObjectやPutObjectはオブジェクトARN、ListBucketはバケットARNに対する権限です。prefix単位の制限ではこの違いを押さえる必要があります。ListBucketを許可し忘れると一覧できず、逆に広く許可しすぎると他prefixの存在を見せてしまうことがあります。',
    },
    {
        question:
            'S3バケットへ「社内ネットワークからのアクセスだけ許可したい」と考え、バケットポリシーに送信元IPアドレス条件を入れる案が出ました。ただしアプリケーションはVPC内のEC2からS3 Gateway Endpoint経由でアクセスします。この場合の注意点として最も適切なものはどれですか?',
        options: [
            {
                text: 'VPCエンドポイント経由のS3アクセスでは、条件キーとしてaws:SourceIpではなくaws:VpcSourceIpやaws:SourceVpceの利用を検討する',
                isCorrect: true,
                explanation:
                    'S3 Gateway Endpoint経由のリクエストでは、通常の送信元グローバルIPを前提にしたaws:SourceIp条件は使えません。VPC内の送信元IPを見るaws:VpcSourceIpや、エンドポイントIDを見るaws:SourceVpceなどを使って制御します。NAT Gateway経由でS3の公開エンドポイントへ出る構成なら、評価される送信元はNAT側のパブリックIPになるため、条件により正解が変わります。',
            },
            {
                text: 'Gateway Endpointを使うと、すべてのS3アクセス制御は無効になる',
                isCorrect: false,
                explanation:
                    'Gateway Endpointはアクセス制御を無効化しません。IAMポリシー、バケットポリシー、VPCエンドポイントポリシーなどは引き続き評価されます。',
            },
            {
                text: 'aws:SourceIpを使えば、VPCエンドポイント経由かどうかに関係なく常にEC2のプライベートIPで評価される',
                isCorrect: false,
                explanation:
                    'Gateway Endpoint経由のS3アクセスでは、aws:SourceIpではなくaws:VpcSourceIpを使うべき場面があります。エンドポイント単位で制限したい場合はaws:SourceVpceを使います。一方、NAT経由で公開エンドポイントへアクセスする構成では、送信元IP条件の見え方が変わります。',
            },
            {
                text: 'VPCエンドポイント経由にすると、バケットポリシーではPrincipalを指定できない',
                isCorrect: false,
                explanation:
                    'バケットポリシーではPrincipalやConditionを組み合わせて制御できます。VPCエンドポイント経由制限でも、誰に許可するかと、どの経路から許可するかを分けて設計します。',
            },
        ],
        explanation:
            'ネットワーク条件を使ったS3制御では、インターネット経由、NAT経由、Gateway Endpoint経由、Interface Endpoint（PrivateLink）経由で評価に使う条件やネットワーク上の見え方が変わる点に注意します。Gateway EndpointはPrivateLinkではなく、Interface EndpointはENIを持つ有料のPrivateLink型です。経路制御だけでなく、IAMプリンシパルの最小権限も併用するのが基本です。',
    },
    {
        question:
            '非公開のS3バケットに保存した画像を、利用者にはCloudFront経由でだけ配信したいです。S3のURLへ直接アクセスされることは避けたい場合、最も適切な構成はどれですか?',
        options: [
            {
                text: 'S3バケットを通常のS3オリジンとしてCloudFrontに設定し、OACを使ってCloudFrontからのアクセスだけをバケットポリシーで許可する',
                isCorrect: true,
                explanation:
                    'OAC（Origin Access Control：CloudFrontからS3オリジンへのアクセスを制御する仕組み）を使うと、S3バケットを非公開にしたままCloudFrontからのリクエストだけを許可できます。バケットポリシーではCloudFrontサービスプリンシパルをPrincipalにし、aws:SourceArn条件で対象CloudFrontディストリビューションのARNに絞ります。CloudFrontはサービスとしてS3へアクセスするため、利用者本人ではなくCloudFrontサービスプリンシパルを許可する点が重要です。',
            },
            {
                text: 'S3バケットをpublic readにして、CloudFrontのキャッシュ時間を長くする',
                isCorrect: false,
                explanation:
                    'public readにすると、利用者はS3のURLへ直接アクセスできる可能性があります。CloudFront経由だけにしたい要件では、S3は非公開にしてOACなどでCloudFrontからのアクセスだけを許可します。',
            },
            {
                text: 'S3の静的Webサイトホスティングを有効化し、OACを必ず設定する',
                isCorrect: false,
                explanation:
                    'S3静的WebサイトエンドポイントはCloudFrontではカスタムオリジンとして扱います。この構成ではOACやOAIを使えません。非公開S3をCloudFront経由だけで配信したい場合は、Webサイトエンドポイントではなく通常のS3 REST APIエンドポイントをオリジンにします。',
            },
            {
                text: 'S3オブジェクトごとに推測しにくいキー名を付ければ、バケットポリシーは不要である',
                isCorrect: false,
                explanation:
                    '推測しにくいキー名はアクセス制御の代わりになりません。S3直アクセスを防ぐには、バケットを非公開にし、バケットポリシーでCloudFrontからのアクセスだけを明示的に許可します。',
            },
        ],
        explanation:
            'S3 + CloudFrontの非公開配信では、「S3を公開してCloudFrontも置く」のではなく、「S3は非公開、CloudFrontだけがS3を読める」形にします。CloudFrontを前段に置くだけではS3直アクセスは防げません。OAC設定、バケットポリシー、Block Public Accessを組み合わせて初めて意図した非公開配信になります。現在の新規設計ではOAI（Origin Access Identity）よりOACが推奨され、SSE-KMSや一部の動的リクエストなどにも対応しやすくなります。',
    },
    {
        question:
            '既存システムではCloudFrontのOAIを使ってS3バケットを非公開配信しています。新しく作る配信基盤ではSSE-KMSで暗号化したS3オブジェクトも扱い、将来はPUTリクエストをCloudFront経由でS3へ送る可能性もあります。最も適切な判断はどれですか?',
        options: [
            {
                text: '新規構成ではOACを採用し、S3バケットポリシーや必要なKMS権限をCloudFrontからのアクセスに合わせて設定する',
                isCorrect: true,
                explanation:
                    'OACはOAIより新しい方式で、CloudFrontからS3へのオリジンリクエストをSigV4（Signature Version 4）で署名できます。すべてのS3リージョン、SSE-KMS、PUTやDELETEなどの動的リクエストに対応しやすい設計です。SSE-KMSを使う場合は、S3バケットポリシーだけでなくKMSキー側の許可も確認します。',
            },
            {
                text: 'OAIはOACより新しい方式なので、SSE-KMSやPUTを扱う新規構成では必ずOAIを選ぶ',
                isCorrect: false,
                explanation:
                    'OAIは従来方式です。既存構成で使われていることはありますが、新規設計ではOACの方が推奨されます。特にSSE-KMSや動的リクエストを考える場合、OAIでは制約や追加対応が問題になりやすいです。',
            },
            {
                text: 'SSE-KMSを使う場合、CloudFrontとS3の間の制御は不要になり、S3をpublic readにしてよい',
                isCorrect: false,
                explanation:
                    'SSE-KMSは暗号化の仕組みであり、公開アクセスを安全にする機能ではありません。S3をpublic readにすると、CloudFrontを経由しないアクセスを許すことになります。アクセス制御と暗号化は別に設計します。',
            },
            {
                text: 'OACを使う場合、S3バケットポリシーは不要で、CloudFrontに設定するだけで自動的にS3直アクセスが遮断される',
                isCorrect: false,
                explanation:
                    'OACを作成してCloudFrontに関連付けるだけでは十分ではありません。S3バケット側で、CloudFrontからのアクセスを許可し、それ以外を許可しないポリシー設計が必要です。',
            },
        ],
        explanation:
            'OAIを知っていると「S3非公開配信 = OAI」と覚えがちですが、現在の新規設計ではOACを優先します。AWSドキュメント上もOACの利用が推奨されており、OAIは既存構成で残っていることが多い従来方式として扱うと整理しやすいです。ただし既存OAI構成をすぐ壊す必要があるわけではなく、要件追加や更改のタイミングでOACへの移行を検討します。',
    },
    {
        question:
            'S3に置いた静的サイトをCloudFrontで配信します。index.htmlや404.htmlをS3静的Webサイトホスティングの機能で処理したい一方、S3バケットは完全非公開にしたいという要件があります。この要件の整理として最も適切なものはどれですか?',
        options: [
            {
                text: 'S3静的Webサイトエンドポイントを使う場合はCloudFrontではカスタムオリジンになり、OAC/OAIで非公開S3として保護する構成とは両立しない',
                isCorrect: true,
                explanation:
                    'S3静的Webサイトエンドポイントは、Webサイト機能を使える代わりにCloudFrontからはカスタムオリジンとして扱います。この場合、通常のS3オリジン向けのOACやOAIは使えません。またS3 Webサイトエンドポイント自体はHTTPのみです。非公開S3をCloudFront経由だけで配信したいなら、HTTPSに対応するS3 REST APIエンドポイントをオリジンにしてOACを使う設計を検討します。',
            },
            {
                text: 'S3静的Webサイトエンドポイントを使う場合でも、OACを設定すればバケットを完全非公開にできる',
                isCorrect: false,
                explanation:
                    'S3静的WebサイトエンドポイントはOAC/OAIの対象ではありません。Webサイトエンドポイントを使う場合は、オリジンとしての扱いが通常のS3 REST APIエンドポイントとは異なります。',
            },
            {
                text: 'S3 REST APIエンドポイントを使うと、S3の静的Webサイトホスティングのindex.htmlや404.html機能をそのまま利用できる',
                isCorrect: false,
                explanation:
                    'S3 REST APIエンドポイントはHTTPSに対応し、OACで非公開配信しやすい一方、S3静的WebサイトホスティングのWebサイト機能とは別です。CloudFront側のデフォルトルートオブジェクトやカスタムエラーレスポンスなどで代替設計することがあります。',
            },
            {
                text: 'CloudFrontを使うと、S3のオリジン種別に関係なく必ずS3直アクセスが自動的に禁止される',
                isCorrect: false,
                explanation:
                    'CloudFrontを前段に置くだけでS3直アクセスが自動的に禁止されるわけではありません。通常のS3オリジンならOACとバケットポリシー、Webサイトエンドポイントなら公開範囲や別の制御を考える必要があります。',
            },
        ],
        explanation:
            'S3の「REST APIエンドポイント」と「Webサイトエンドポイント」は試験でも実務でも混同しやすい点です。非公開配信とHTTPS対応を優先するならREST APIエンドポイント + OAC、S3のWebサイト機能を優先するならWebサイトエンドポイントをカスタムオリジンとして使う、というように要件で選びます。利便性と非公開配信の安全性はトレードオフになります。',
    },
    {
        question:
            '独自ドメインの静的サイトをHTTPSで配信したいです。コンテンツはS3に置きますが、利用者にはHTTPSでアクセスさせ、証明書管理も適切に行いたい場合、最も適切な設計はどれですか?',
        options: [
            {
                text: 'CloudFrontに独自ドメインを設定し、us-east-1のACM証明書を関連付けて、S3をオリジンとして配信する',
                isCorrect: true,
                explanation:
                    'CloudFrontで独自ドメインのHTTPS配信をする場合、CloudFrontに関連付けるACM証明書は米国東部（バージニア北部、us-east-1）で発行またはインポートします。CloudFrontはグローバルサービスであり、ディストリビューション用の証明書はus-east-1で管理する必要があります。S3をオリジンにし、必要に応じてOACで非公開配信にします。',
            },
            {
                text: 'S3静的WebサイトエンドポイントにACM証明書を直接関連付ければ、独自ドメインのHTTPS配信ができる',
                isCorrect: false,
                explanation:
                    'S3静的Webサイトエンドポイント自体にACM証明書を直接関連付けてHTTPS化する構成ではありません。独自ドメインでHTTPS配信したい場合は、CloudFrontを前段に置くのが代表的な設計です。',
            },
            {
                text: 'S3バケット名を独自ドメインと同じにすれば、証明書なしでHTTPS配信できる',
                isCorrect: false,
                explanation:
                    'バケット名を独自ドメインに合わせるだけでは、独自ドメインのHTTPS証明書は用意されません。HTTPSでは証明書とドメイン名の一致が必要です。',
            },
            {
                text: 'CloudFrontではHTTPSを使えないため、S3のHTTPエンドポイントを直接公開する',
                isCorrect: false,
                explanation:
                    'CloudFrontは利用者向けのHTTPS配信に対応しています。S3のHTTPエンドポイントを直接公開すると、HTTPS要件やキャッシュ、WAF連携、S3直アクセス制御などの面で要件を満たしにくくなります。',
            },
        ],
        explanation:
            'S3単体の静的Webサイトホスティングは手軽ですが、独自ドメインのHTTPS、グローバル配信、WAF連携、キャッシュ制御を考えるとCloudFrontを前段に置く設計が自然です。CloudFrontはグローバルに動作するサービスですが、ACM証明書はus-east-1のものを関連付ける必要があります。このリージョン指定は試験の引っかけになりやすい点です。',
    },
    {
        question:
            'S3上のJavaScriptファイルを更新しましたが、利用者にはしばらく古い内容が返っています。CloudFrontで長めのTTLを設定している構成です。頻繁に更新される静的ファイルを安定して配信する設計として最も適切なものはどれですか?',
        options: [
            {
                text: 'ファイル名にバージョンやハッシュを含めて新しいURLで配信し、必要な場合だけCloudFront Invalidationを使う',
                isCorrect: true,
                explanation:
                    '静的アセットでは app.abc123.js のようにファイル名を変えると、CloudFrontやブラウザに古いファイルが残っていても新しいURLで確実に新バージョンを取得できます。Cache-Controlで長いmax-ageとimmutableを付ける戦略とも相性がよいです。既存URLのキャッシュを早く消したい場合はInvalidationを使います。',
            },
            {
                text: 'S3でオブジェクトを上書きすれば、CloudFrontの全エッジキャッシュは常に即時更新される',
                isCorrect: false,
                explanation:
                    'S3のオブジェクトを更新しても、CloudFrontのエッジキャッシュが即時に消えるわけではありません。TTLが切れるまで古いレスポンスが返る可能性があります。',
            },
            {
                text: 'すべてのオブジェクトにTTL 0を設定すれば、常に最も低コストで高性能な配信になる',
                isCorrect: false,
                explanation:
                    'TTL 0に近づけるとCloudFrontが毎回オリジンへ確認しやすくなり、S3へのリクエスト増加やレイテンシ増加につながります。Cache-ControlヘッダーやCloudFrontのキャッシュポリシーを使い、更新頻度とキャッシュ効率のバランスを取る必要があります。',
            },
            {
                text: 'Invalidationを毎秒実行すれば、コストや運用負荷を気にせず常に最適になる',
                isCorrect: false,
                explanation:
                    'Invalidationは便利ですが、頻繁に大量実行すると運用負荷やコストの要因になります。ビルド時にファイル名を変えるバージョニング戦略の方が、静的アセットでは扱いやすいことが多いです。',
            },
        ],
        explanation:
            'CloudFrontのキャッシュは性能とコストを改善する一方、S3更新の反映タイミングを考える必要があります。さらに利用者のブラウザキャッシュも影響するため、CloudFrontだけをInvalidationしてもブラウザに古いファイルが残る場合があります。HTMLのように短めTTLが向くもの、JS/CSS/画像のようにファイル名バージョニング、長めTTL、immutableが向くものを分けて設計します。',
    },
    {
        question:
            '有料会員だけに動画ファイルを一定時間だけ配信したいです。ファイルは非公開S3バケットに置き、世界中の利用者へ低遅延で配信したい場合、最も適切な設計はどれですか?',
        options: [
            {
                text: 'S3をOAC付きCloudFrontのオリジンにし、CloudFront signed URLまたはsigned cookiesで視聴権限を制御する',
                isCorrect: true,
                explanation:
                    'CloudFront signed URLやsigned cookiesを使うと、CloudFront経由のコンテンツ配信に有効期限や条件を付けられます。S3はOACで非公開にし、利用者はS3ではなくCloudFrontから取得します。単一ファイルならsigned URL、複数ファイルをまとめて許可したい場合はsigned cookiesが候補になります。HLSのように複数セグメントを読む動画配信ではsigned cookiesが扱いやすいことがあります。',
            },
            {
                text: 'S3 presigned URLだけを利用者に配布し、CloudFrontは使わない',
                isCorrect: false,
                explanation:
                    'S3 presigned URLはS3オブジェクトへの一時アクセスには有効ですが、利用者はCloudFrontではなくS3へ直接アクセスします。世界中への低遅延配信、CloudFrontキャッシュ、S3直アクセス遮断を重視するならCloudFrontの署名付きURLやsigned cookiesを検討します。',
            },
            {
                text: 'S3バケットをpublic readにして、アプリ側で会員かどうかを画面表示だけで制御する',
                isCorrect: false,
                explanation:
                    'バケットを公開すると、URLを知っている人がアプリを経由せずにアクセスできる可能性があります。有料コンテンツでは、配信レイヤーで署名付きURLや署名付きCookieを使ってアクセス制御します。',
            },
            {
                text: 'CloudFront signed URLを使えば、S3バケットはpublic readにしておく必要がある',
                isCorrect: false,
                explanation:
                    'CloudFront signed URLはCloudFrontへのアクセスを制御する仕組みです。S3オリジンはOACなどで非公開にし、CloudFrontからだけ読めるようにするのが基本です。',
            },
        ],
        explanation:
            'S3 presigned URLとCloudFront signed URLはどちらも一時的なアクセス制御に使えますが、どこへアクセスするURLかが違います。S3 presigned URLはS3へ直接アクセスするURLです。CloudFront signed URLはCloudFront経由でアクセスするURLです。S3へ直接アップロード・ダウンロードさせたいならS3 presigned URL、CloudFront経由で低遅延に配信しつつ利用者制限したいならCloudFront signed URLやsigned cookiesを使います。',
    },
    {
        question:
            '過去の契約書PDFをS3に長期アーカイブ用途で保存します。アクセス頻度は年に数回ですが、問い合わせ対応では数秒以内に取得できる必要があります。可用性も複数AZ相当を維持しつつ、保存コストも抑えたい場合、最も適切なストレージクラスはどれですか?',
        options: [
            {
                text: 'S3 Glacier Instant Retrieval',
                isCorrect: true,
                explanation:
                    'S3 Glacier Instant Retrievalは、ほとんどアクセスされない長期保存データで、ミリ秒単位の取得が必要な場合に向きます。複数AZに保存され、アーカイブ復元待ちなしでGETできます。最低保存期間は90日で、取り出し料金や128KBの最小オブジェクトサイズも考慮します。Standard-IAもミリ秒取得できますが、Glacier Instant Retrievalは四半期に1回程度のアクセスで長期保存するデータ向けに、より低い保存コストを狙う選択肢です。',
            },
            {
                text: 'S3 Glacier Deep Archive',
                isCorrect: false,
                explanation:
                    'S3 Glacier Deep Archiveは非常に低コストですが、取り出しに通常数時間から最大48時間程度かかる前提のアーカイブ向けです。数秒以内に取得する要件には合いません。',
            },
            {
                text: 'S3 One Zone-IA',
                isCorrect: false,
                explanation:
                    'S3 One Zone-IAは1つのアベイラビリティゾーン内に保存されるため、複数AZ相当の可用性を維持したい要件には合いません。再作成可能なデータやAZ障害時のリスクを許容できるデータに向きます。',
            },
            {
                text: 'S3 Standard',
                isCorrect: false,
                explanation:
                    'S3 Standardも数秒以内取得や複数AZ相当の要件は満たせます。しかし、問題では長期アーカイブ用途で保存コストも抑えたいという条件があります。年に数回しか読まない長期保存データでは、Standardは保存コストが高くなりがちです。',
            },
        ],
        explanation:
            'ストレージクラス選定では、保存単価だけでなく「取り出しまで待てるか」「最低保存期間を満たすか」「AZ障害を許容できるか」「取り出し料金が問題にならないか」を同時に見ます。Deep Archiveは安いですが、即時取得要件がある時点で外れます。「安いストレージクラス = 常に最適」ではなく、RTO（復旧・取得までに許容できる時間）や利用者対応の要件で候補が変わります。',
    },
    {
        question:
            '画像サムネイルを数千万個S3に保存しています。各オブジェクトは20KB程度で、作成後30日以内に削除されるものも多いです。保存容量は小さいのにS3コストが期待ほど下がりません。最も注意すべき設計上の論点はどれですか?',
        options: [
            {
                text: '小さいオブジェクトでは、IA系ストレージクラスの最小課金サイズや最低保存期間、リクエスト料金が効きやすい',
                isCorrect: true,
                explanation:
                    'S3 Standard-IAやOne Zone-IAは128KB未満のオブジェクトでも128KB相当で課金され、30日の最低保存期間があります。Glacier Instant Retrievalも128KBの最小オブジェクトサイズと90日の最低保存期間があります。小さいオブジェクトが大量にあり、短期間で削除される場合は、保存容量よりも最小課金サイズ、早期削除、PUT/GET/LISTなどのリクエスト料金が目立つことがあります。',
            },
            {
                text: 'S3ではオブジェクトが128KB未満なら、すべてのストレージクラスで保存料金が無料になる',
                isCorrect: false,
                explanation:
                    '小さいオブジェクトが無料になるわけではありません。むしろIA系やGlacier Instant Retrievalでは最小課金サイズがあるため、実データ量より大きく課金される場合があります。Intelligent-Tieringでも128KB未満のオブジェクトは自動階層化の対象外になり、頻繁アクセス階層に残ります。',
            },
            {
                text: 'S3 Standard-IAへ移行すれば、30日以内に削除しても最低保存期間の影響は受けない',
                isCorrect: false,
                explanation:
                    'S3 Standard-IAやOne Zone-IAには30日の最低保存期間があります。30日より前に削除、上書き、別クラスへ移行しても、残り期間分の料金が発生することがあります。',
            },
            {
                text: '大量の小さいオブジェクトでは、GETやLISTのリクエスト料金は常に0になる',
                isCorrect: false,
                explanation:
                    'S3では保存容量だけでなく、PUT、GET、LISTなどのリクエストにも料金が発生します。小さいオブジェクトを大量に扱う場合、リクエスト回数がコストの主因になることがあります。',
            },
        ],
        explanation:
            '「低頻度アクセスだからIAへ移す」と単純に考えると、小さいオブジェクトや短期保存では逆にコスト最適化にならない場合があります。小さいファイルが大量にある場合は、圧縮してまとめる、キー設計や集計単位を見直す、ライフサイクル対象を慎重に絞るなどの設計も検討します。オブジェクトサイズ、保持期間、リクエスト回数、取り出し料金を合わせて見るのが実務的です。',
    },
    {
        question:
            'アクセスパターンが読みにくい大量のレポートファイルをS3に保存します。ある月は頻繁に読まれますが、数か月まったく読まれないこともあります。運用チームは細かいLifecycleルールを頻繁に調整したくありません。最も適切な選択はどれですか?',
        options: [
            {
                text: 'S3 Intelligent-Tieringを使い、アクセスパターンに応じた自動階層化に任せる',
                isCorrect: true,
                explanation:
                    'S3 Intelligent-Tieringは、アクセスパターンが不明または変化するデータに向きます。監視・自動化料金は発生しますが、30日アクセスがないと低頻度アクセス階層、90日アクセスがないとArchive Instant Access階層へ自動移動するなど、運用負荷を抑えてコスト最適化できます。128KB未満のオブジェクトは自動階層化の対象外で、頻繁アクセス階層に残ります。',
            },
            {
                text: 'すべてのファイルを作成直後からS3 Glacier Deep Archiveへ保存する',
                isCorrect: false,
                explanation:
                    'Deep Archiveは取り出しに時間がかかるアーカイブ向けです。頻繁に読まれる月があるデータや、急に必要になる可能性があるデータを最初からDeep Archiveに置くと、復元待ちや復元料金が問題になります。',
            },
            {
                text: 'S3 Standard-IAへ固定し、アクセスが増えた場合もそのまま使い続ける',
                isCorrect: false,
                explanation:
                    'Standard-IAは低頻度アクセス向けで、取り出し料金が発生します。アクセス頻度が大きく変動する場合は、頻繁に読まれる期間の取り出し料金が効いてくる可能性があります。',
            },
            {
                text: 'Lifecycleルールを毎日手動で書き換え、前日に読まれたファイルだけStandardへ戻す',
                isCorrect: false,
                explanation:
                    '手動運用はミスや運用負荷が大きくなります。アクセスパターンが予測しにくい場合に自動で階層を調整したい、という要件にはIntelligent-Tieringが合います。',
            },
        ],
        explanation:
            'Intelligent-TieringとLifecycleの使い分けでは、アクセスパターンを予測できるかが重要です。一定期間後に必ずアーカイブするログならLifecycleが向きます。一方、読まれ方が変動し、運用で細かく調整したくないデータならIntelligent-Tieringが候補になります。アーカイブアクセス階層やディープアーカイブアクセス階層を有効化する場合は、即時取得ではなく復元時間が発生する点も要件と照らして確認します。',
    },
    {
        question:
            '監査ログを7年間保存します。通常は参照しませんが、監査時には数時間から半日程度待てばよく、取得コストも抑えたいです。最低保存期間を満たす長期保管であることを前提に、最も適切なストレージクラスはどれですか?',
        options: [
            {
                text: 'S3 Glacier Deep Archive',
                isCorrect: true,
                explanation:
                    'S3 Glacier Deep Archiveは、年に1回未満のアクセスで、復元に時間を待てる長期アーカイブに向きます。Standard retrievalでは通常12時間以内、Bulk retrievalでは通常48時間以内が目安です。最低保存期間は180日で、7年保存のような長期保持なら最低保存期間の制約を満たしやすいです。',
            },
            {
                text: 'S3 Standard',
                isCorrect: false,
                explanation:
                    'S3 Standardは即時アクセスできますが、ほぼ参照しない7年保存の監査ログでは保存コストが高くなりがちです。復元待ちを許容できるならアーカイブ系を検討します。',
            },
            {
                text: 'S3 Glacier Instant Retrieval',
                isCorrect: false,
                explanation:
                    'Glacier Instant Retrievalはミリ秒単位の取得が必要な低頻度アクセス向けです。監査時に数時間から半日待てるなら、より低コストなDeep Archiveが候補になります。',
            },
            {
                text: 'S3 One Zone-IA',
                isCorrect: false,
                explanation:
                    'One Zone-IAは1つのAZに保存される低頻度アクセス向けです。7年間の監査ログ保管では、AZ障害時の耐久性やコンプライアンス要件を考えると、多くの場合は複数AZに保存されるアーカイブ系を検討します。',
            },
        ],
        explanation:
            'Glacier系は「安い」だけで選ぶのではなく、復元時間と最低保存期間を見る必要があります。Glacier Flexible Retrievalは90日、Deep Archiveは180日の最低保存期間があります。短期で消すデータをDeep Archiveへ移すと、早期削除コストで期待ほど安くならないことがあります。監査ログではコストだけでなく、Object Lock、Compliance mode、Governance mode、リーガルホールドなどを使った保持要件と削除防止も検討します。',
    },
    {
        question:
            'S3に保存したバックアップをS3 Glacier Flexible Retrievalへ移行しました。障害対応で一部のバックアップをすぐに使いたいのですが、GETしてもすぐには取得できません。最も適切な理解はどれですか?',
        options: [
            {
                text: 'Glacier Flexible Retrievalのオブジェクトはアーカイブ状態のため、RestoreObjectで復元を開始し、復元完了後に一時コピーへアクセスする',
                isCorrect: true,
                explanation:
                    'S3 Glacier Flexible RetrievalやDeep Archiveのオブジェクトは、通常のGETで即時取得できる状態ではありません。RestoreObjectで復元を開始し、Expedited、Standard、Bulkなどの復元オプションに応じた時間を待ってから、一時的にアクセス可能な復元コピーへアクセスします。',
            },
            {
                text: 'Glacier Flexible RetrievalはStandardと同じく、常にミリ秒単位で直接GETできる',
                isCorrect: false,
                explanation:
                    'ミリ秒単位で取得できるGlacier系はS3 Glacier Instant Retrievalです。Glacier Flexible Retrievalは復元処理が必要なアーカイブストレージクラスです。',
            },
            {
                text: '復元を開始すると、オブジェクトは必ずS3 Standardへ完全移行され、元のアーカイブは削除される',
                isCorrect: false,
                explanation:
                    '復元では、指定した期間アクセスできる一時コピーが作られます。元のアーカイブオブジェクトが自動的に削除されるわけではありません。復元期間が切れると再び直接GETできなくなります。恒久的にStandardなどへ戻したい場合は、復元後にCopyObjectなどで別ストレージクラスへコピーします。',
            },
            {
                text: 'Bulk復元を選べば、常に最速で取得できる',
                isCorrect: false,
                explanation:
                    'Bulk復元は低コストで大量復元に向く選択肢ですが、最速ではありません。急ぐ場合はGlacier Flexible RetrievalのExpedited復元などを検討します。ただしDeep ArchiveにはExpedited復元はありません。',
            },
        ],
        explanation:
            'アーカイブ系ストレージでは、障害時のRTO（Recovery Time Objective：復旧までに許容できる時間）を満たせるかが重要です。保存コストだけでDeep ArchiveやFlexible Retrievalを選ぶと、復元待ち時間や復元料金が復旧要件に合わないことがあります。復元コピーの有効期間、恒久的なストレージクラス変更の必要性、RPO（Recovery Point Objective：どの時点まで戻せる必要があるか）も合わせて考えます。',
    },
    {
        question:
            '同じリージョン内のアプリケーションがS3へ大量のログを書き込み、別リージョンの分析基盤がそのログを定期的に読み取ります。S3コストを見積もるとき、保存容量以外で特に考慮すべきものとして最も適切な組み合わせはどれですか?',
        options: [
            {
                text: 'PUT/LIST/GETなどのリクエスト料金、別リージョンへのデータ転送料金、低頻度アクセス系なら取り出し料金',
                isCorrect: true,
                explanation:
                    'S3のコストは保存容量だけではありません。大量ログではPUT、GET、LISTなどのリクエストが増えます。さらに別リージョンへ読み出す場合はクロスリージョンのデータ転送料金が問題になります。Standard-IAやGlacier系を使う場合は取り出し料金や復元料金も考慮します。',
            },
            {
                text: 'バケット名の長さ、オブジェクトキーのスラッシュ数、フォルダ表示の階層数',
                isCorrect: false,
                explanation:
                    'バケット名の長さやスラッシュ数そのものでは課金されません。キー設計は運用性や一覧・分析のしやすさに影響しますが、主要なコスト要素は保存容量、リクエスト、データ転送、取り出し、管理機能などです。',
            },
            {
                text: 'S3 Standardを使っていれば、リクエスト料金やデータ転送料金は発生しない',
                isCorrect: false,
                explanation:
                    'S3 Standardでもリクエスト料金やデータ転送料金は発生します。ストレージクラスをStandardにすれば容量以外の料金が消えるわけではありません。',
            },
            {
                text: '同じAWSアカウント内であれば、リージョン間の読み取りでもデータ転送料金は常に無料になる',
                isCorrect: false,
                explanation:
                    '同じアカウントかどうかだけでデータ転送料金が決まるわけではありません。リージョン間転送やインターネット向け転送など、通信の向きと宛先を確認する必要があります。',
            },
        ],
        explanation:
            'S3コスト最適化では「GB単価が安いクラスにする」だけでは不十分です。ログや分析用途では、PUT/LIST/GETの回数、ライフサイクル移行リクエスト、別リージョンやインターネットへのデータ転送、Athenaなど周辺サービスのスキャン量、取り出し料金、Intelligent-Tieringの監視・自動化料金まで含めて設計します。',
    },
    {
        question:
            'バージョニングを有効化したS3バケットで、不要になった大きなオブジェクトに対して通常のDELETEを実行しました。しかしストレージ使用量が期待ほど減りません。最も可能性が高い理由はどれですか?',
        options: [
            {
                text: '通常のDELETEでは削除マーカーが追加され、元のオブジェクトバージョンは非現行バージョンとして残るため',
                isCorrect: true,
                explanation:
                    'バージョニング有効なバケットでversionIdを指定せずにDELETEすると、S3はオブジェクトを完全削除せず、削除マーカー（Delete Marker）を現在バージョンとして追加します。削除マーカー自体にもキー名など最小限のメタデータ分のストレージは発生しますが、ストレージ使用量が減らない主因は元のデータが非現行バージョンとして残ることです。',
            },
            {
                text: 'S3では一度アップロードしたオブジェクトは、どのような方法でも永久に削除できないため',
                isCorrect: false,
                explanation:
                    'S3オブジェクトは適切な権限と条件があれば削除できます。バージョニング有効時に完全削除したい場合は、対象のversionIdを指定してそのバージョンを削除するか、ライフサイクルで非現行バージョンを期限切れにします。',
            },
            {
                text: '削除マーカーには元オブジェクトと同じサイズのデータ本体が保存されるため',
                isCorrect: false,
                explanation:
                    '削除マーカー自体には元オブジェクトと同じデータ本体はありません。メタデータ分のストレージは発生しますが、ストレージ使用量が減らない主因は、元のオブジェクトバージョンが非現行バージョンとして残っていることです。',
            },
            {
                text: 'S3 StandardからS3 Glacierへ自動移行されたため、使用量が必ず2倍になるため',
                isCorrect: false,
                explanation:
                    'ストレージクラス移行と通常DELETE時の削除マーカー作成は別の話です。バージョニング有効時の削除挙動を確認する必要があります。',
            },
        ],
        explanation:
            '「削除したのに消えない」系の原因として、バージョニングと削除マーカーは最重要です。現在バージョンが削除マーカーになると、versionIdを指定しないGETは404のように見えますが、過去バージョンは残っています。S3の削除には、削除マーカー追加、特定versionIdの完全削除、非現行バージョンのLifecycle削除、Expired Object Delete Marker削除、Object Lockで削除不可、といった複数の意味があります。',
    },
    {
        question:
            'バージョニング有効なS3バケットに、LifecycleのExpirationを「30日後に期限切れ」として設定しました。30日後、オブジェクト数が減るどころか増えたように見えます。最も適切な説明はどれですか?',
        options: [
            {
                text: 'Expirationは現在バージョンに作用し、バージョニング有効時は完全削除ではなく削除マーカーを追加するため',
                isCorrect: true,
                explanation:
                    'バージョニング有効なバケットでは、LifecycleのExpirationは現在バージョンに作用します。このときS3は現在バージョンを完全削除せず、削除マーカーを追加し、元の現在バージョンは非現行バージョンになります。そのため、オブジェクト数が一時的に増えたように見えることがあります。容量削減には、非現行バージョンを削除するNoncurrentVersionExpirationも必要です。',
            },
            {
                text: 'Expirationは非現行バージョンだけを完全削除するアクションであり、削除マーカーは作らないため',
                isCorrect: false,
                explanation:
                    '非現行バージョンを完全削除するのはNoncurrentVersionExpirationです。Expirationは現在バージョンに作用します。バージョニング有効時は削除マーカーが作成される点が重要です。',
            },
            {
                text: 'Lifecycleはバージョニング有効なバケットでは一切動作しないため',
                isCorrect: false,
                explanation:
                    'Lifecycleはバージョニング有効なバケットでも動作します。ただし、現在バージョン、非現行バージョン、削除マーカーに対するアクションが分かれているため、期待通りの削除には複数の設定が必要になることがあります。',
            },
            {
                text: 'Expirationを設定すると、すべての非現行バージョンが即座にS3 Standardへ戻るため',
                isCorrect: false,
                explanation:
                    'Expirationはストレージクラスを戻す機能ではありません。期限切れや削除マーカー作成に関係するアクションです。',
            },
        ],
        explanation:
            'バージョニング有効バケットをLifecycleで整理する場合は、現在バージョンのExpiration、非現行バージョンのNoncurrentVersionExpiration、不要になった削除マーカーのExpiredObjectDeleteMarkerを分けて考えます。現在バージョンだけを期限切れにしても、非現行バージョンが残れば容量は減りません。またLifecycle処理は非同期で実行されるため、条件に到達した瞬間に必ず即時反映されるわけではありません。',
    },
    {
        question:
            'アプリケーションログをS3に保存し、バージョニングを有効化しています。最新版は30日後に削除扱いにし、過去バージョンは90日後に完全削除してコストを抑えたいです。最も適切なLifecycle設計はどれですか?',
        options: [
            {
                text: 'Expirationで現在バージョンを30日後に期限切れにし、NoncurrentVersionExpirationで非現行バージョンを90日後に削除する',
                isCorrect: true,
                explanation:
                    '現在バージョンにはExpirationを使い、非現行バージョンにはNoncurrentVersionExpirationを使います。バージョニング有効時にExpirationだけを設定すると削除マーカーが追加されるだけで、元データは非現行バージョンとして残ります。「30日後に削除扱い」と「データ本体を完全削除」は違うため、非現行バージョンの完全削除には別途NoncurrentVersionExpirationが必要です。',
            },
            {
                text: 'Expirationだけを設定すれば、現在バージョンも非現行バージョンもすべて完全削除される',
                isCorrect: false,
                explanation:
                    'Expirationは現在バージョンに作用します。非現行バージョンを削除したい場合はNoncurrentVersionExpirationを設定します。',
            },
            {
                text: 'NoncurrentVersionTransitionだけを設定すれば、非現行バージョンは自動的に完全削除される',
                isCorrect: false,
                explanation:
                    'NoncurrentVersionTransitionは非現行バージョンを別のストレージクラスへ移行するアクションです。完全削除ではありません。削除にはNoncurrentVersionExpirationを使います。',
            },
            {
                text: 'ExpiredObjectDeleteMarkerだけを設定すれば、全バージョンのデータ本体が90日後に完全削除される',
                isCorrect: false,
                explanation:
                    'ExpiredObjectDeleteMarkerは、全てのオブジェクトバージョンが削除され、削除マーカーだけが残った状態を整理するための設定です。非現行バージョンのデータ本体を削除するアクションではありません。',
            },
        ],
        explanation:
            'Lifecycle設計では、TransitionとExpirationを混同しないことが重要です。移行はストレージクラスを変えるだけで、削除ではありません。さらにバージョニング有効時は現在バージョンと非現行バージョンでアクションが分かれます。非現行バージョンを削除した後に削除マーカーだけが残る場合は、ExpiredObjectDeleteMarkerの整理も検討します。',
    },
    {
        question:
            'S3バケットでNoncurrentVersionExpirationを設定し、「非現行になって30日後、かつ新しい非現行バージョンを10個保持する」としました。古い非現行バージョンが30日を過ぎても削除されません。最も適切な説明はどれですか?',
        options: [
            {
                text: 'NoncurrentDaysとNewerNoncurrentVersionsの両方の条件を満たす必要があるため',
                isCorrect: true,
                explanation:
                    'NoncurrentVersionExpirationでNoncurrentDaysとNewerNoncurrentVersionsを指定した場合、削除には両方の条件を満たす必要があります。OR条件ではなくAND条件です。NewerNoncurrentVersionsは「新しい非現行バージョンを指定数だけ残す」ための条件で、非現行になって指定日数を超え、かつ保持数を超えた古いバージョンが対象になります。',
            },
            {
                text: 'NewerNoncurrentVersionsを指定すると、NoncurrentDaysは無視され、すべて即時削除されるため',
                isCorrect: false,
                explanation:
                    'NewerNoncurrentVersionsを指定してもNoncurrentDaysが無視されるわけではありません。両方の条件を満たす必要があります。',
            },
            {
                text: 'NoncurrentVersionExpirationは現在バージョンだけを削除するため',
                isCorrect: false,
                explanation:
                    'NoncurrentVersionExpirationは非現行バージョンを完全削除するアクションです。現在バージョンに対する期限切れはExpirationで扱います。',
            },
            {
                text: 'S3 Lifecycleは最低1年経たないと、どの設定でも削除処理を開始しないため',
                isCorrect: false,
                explanation:
                    'Lifecycleの削除開始が常に1年後になるわけではありません。設定した日数や条件に基づいて処理されます。ただしLifecycle処理は即時実行ではなく、反映まで時間がかかる場合があります。',
            },
        ],
        explanation:
            '「日数を過ぎたのに削除されない」場合、保持する非現行バージョン数の条件を見落としていることがあります。NewerNoncurrentVersionsを指定する場合はFilterも必要です。これはライフサイクルルールの対象範囲を明確にするためで、prefixやタグなどで対象を定義します。Lifecycleは日次処理であり、条件を満たした瞬間に即座に消えるとは限らない点も運用上の注意です。',
    },
    {
        question:
            'バージョニング有効なS3バケットで、非現行バージョンをLifecycleで全て削除しました。その後、データ本体は残っていないのに削除マーカーだけが残り続けています。この削除マーカーを自動で整理したい場合、最も適切な設定はどれですか?',
        options: [
            {
                text: 'LifecycleのExpirationでExpiredObjectDeleteMarkerを有効にする',
                isCorrect: true,
                explanation:
                    '削除マーカーだけが残り、非現行バージョンが存在しない状態の削除マーカーはExpired Object Delete Markerとして扱われます。LifecycleのExpiredObjectDeleteMarkerを使うと、この不要な削除マーカーを削除できます。これは削除マーカーの整理であり、データ本体を削除するアクションではありません。',
            },
            {
                text: 'NoncurrentVersionTransitionで削除マーカーをGlacier Deep Archiveへ移行する',
                isCorrect: false,
                explanation:
                    '削除マーカーにはデータ本体がなく、通常のオブジェクトのようにストレージクラス移行する対象ではありません。不要な削除マーカーの整理にはExpiredObjectDeleteMarkerを使います。',
            },
            {
                text: 'S3 Object LockのCompliance modeを有効化して、削除マーカーを自動削除する',
                isCorrect: false,
                explanation:
                    'Object Lockは削除や上書きを防ぐための機能であり、削除マーカーを自動削除する機能ではありません。むしろ保護対象のバージョンがある場合、Lifecycleによる完全削除が制限されることがあります。',
            },
            {
                text: 'バケットポリシーでs3:GetObjectをDenyすれば、削除マーカーは自動的に消える',
                isCorrect: false,
                explanation:
                    'アクセス拒否ポリシーは削除マーカーのライフサイクル管理ではありません。不要な削除マーカーはLifecycleの対象として整理します。',
            },
        ],
        explanation:
            '削除マーカーは、ユーザーから見るとオブジェクトが削除されたように見せるためのプレースホルダーです。ExpiredObjectDeleteMarkerは「削除マーカーだけが残った状態」を整理するもので、非現行バージョンが残っている場合は対象になりません。バージョニング有効バケットを長期運用すると、非現行バージョンと削除マーカーの両方を管理しないと、オブジェクト数や管理対象が期待通り減らないことがあります。',
    },
    {
        question:
            '規制対応のため、S3に保存した監査データを一定期間WORMとして保護します。一部の管理者には緊急時に保持設定を解除できる余地を残したい一方、別のデータセットではルートユーザーを含めて保持期間中の削除を絶対に許したくありません。最も適切な整理はどれですか?',
        options: [
            {
                text: '緊急時の上書き余地が必要なものはGovernance mode、誰にも保持短縮や削除を許したくないものはCompliance modeを使う',
                isCorrect: true,
                explanation:
                    'Object LockのGovernance modeでは、通常ユーザーによる削除や上書きを防ぎつつ、特別な権限を持つユーザーがバイパスできます。バイパスにはs3:BypassGovernanceRetention権限に加え、APIやCLIでは明示的なバイパス指定が必要です。Compliance modeでは保持期間中、ルートユーザーを含めて保持設定の短縮や削除ができません。要件の強さに応じて使い分けます。',
            },
            {
                text: 'Governance modeはルートユーザーを含めて絶対に削除できず、Compliance modeは誰でも解除できる',
                isCorrect: false,
                explanation:
                    '逆です。Compliance modeは最も強い保持モードで、保持期間中はルートユーザーでも削除や短縮ができません。Governance modeは特別な権限とバイパス指定により解除できる余地があります。',
            },
            {
                text: 'Legal Holdは保持期間を必ず30日で自動終了するため、WORM要件には使えない',
                isCorrect: false,
                explanation:
                    'Legal Holdは固定の終了日時を持たず、明示的に解除されるまで対象バージョンの削除や上書きを防ぎます。Retention periodは保持期限を持つ保護、Legal Holdは期限を持たない保護として整理できます。両者は独立して設定できます。',
            },
            {
                text: 'Object Lockはバージョニングと無関係に、どのS3バケットでも後から自由に無効化できる',
                isCorrect: false,
                explanation:
                    'Object Lockはバージョニング有効なバケットで動作します。Object Lockはバケット作成時に有効化するのが基本で、既存バケットで後から有効化する場合にも制約や手順があります。また、Object Lockを有効化したバケットでは、Object Lockを無効化できないなどの重要な制約があります。導入前に保持要件と運用手順を確認します。',
            },
        ],
        explanation:
            'Object Lockはバケット全体を単純に削除禁止にする機能ではなく、オブジェクトの「バージョン」を保護する機能です。保持期間やLegal Holdは対象バージョンの削除や上書きを防ぎますが、新しいバージョンの作成や削除マーカーの追加そのものを常に防ぐわけではありません。WORM要件では、モード、保持期間、Legal Hold、権限、Lifecycleとの関係をセットで設計します。',
    },
    {
        question:
            '東京リージョンのS3バケットに保存した重要な画像データを、リージョン障害時にも別リージョンから利用できるようにしたいです。新規アップロード分を継続的に大阪リージョンへ複製する設計として最も適切なものはどれですか?',
        options: [
            {
                text: '送信元・送信先バケットのバージョニングを有効化し、CRRで大阪リージョンのバケットへ複製する',
                isCorrect: true,
                explanation:
                    'CRR（Cross-Region Replication：別リージョンへのレプリケーション）は、リージョン障害対策やデータ所在地要件に使います。S3 Replicationを設定するには、送信元と送信先の両方でバージョニングが有効である必要があります。新規オブジェクトはルールに従って非同期に自動複製されます。',
            },
            {
                text: 'SRRを設定すれば、必ず別リージョンへ自動複製される',
                isCorrect: false,
                explanation:
                    'SRR（Same-Region Replication：同一リージョン内のレプリケーション）は同じリージョン内の別バケットへ複製する機能です。リージョン障害対策として別リージョンへ置くならCRRを使います。',
            },
            {
                text: 'バケットの静的Webサイトホスティングを有効化すれば、自動的に全リージョンへ複製される',
                isCorrect: false,
                explanation:
                    '静的Webサイトホスティングは配信機能であり、別リージョンへのデータ複製ではありません。可用性や災害対策のための複製はReplicationやバックアップで設計します。',
            },
            {
                text: '送信元バケットだけバージョニングを有効にすれば、送信先バケットのバージョニングは不要である',
                isCorrect: false,
                explanation:
                    'S3 Replicationでは送信元と送信先の両方でバージョニングが必要です。片方だけではレプリケーション構成の要件を満たしません。',
            },
        ],
        explanation:
            'CRRはリージョン障害対策や地理的分散、SRRは同一リージョン内での集約、ログ分離、本番と分析環境の分離などに向きます。ただしReplicationは非同期であり、完全な即時フェイルオーバーではありません。アプリケーションのRTO/RPO、フェイルオーバー手順、送信先バケットの権限、KMS、アプリ側の参照先切替まで含めて設計します。既存オブジェクトは通常のライブReplicationだけでは自動的に対象にならず、必要ならBatch Replicationを使います。',
    },
    {
        question:
            '規制要件により、S3へアップロードされた大半のオブジェクトを15分以内に別リージョンへ複製したことを監視・証跡化したいです。最も適切なS3機能はどれですか?',
        options: [
            {
                text: 'S3 Replication Time Controlを有効化し、レプリケーションメトリクスやしきい値超過イベントを監視する',
                isCorrect: true,
                explanation:
                    'S3 Replication Time Control（S3 RTC）は、レプリケーション時間の可視化とコンプライアンス要件への対応を支援します。多くのオブジェクトを数秒で、99.9%を15分以内に複製するSLAがありますが、すべてのオブジェクトの15分以内完了を無条件に保証するものではありません。メトリクスや15分しきい値を超えたイベントで監視できます。',
            },
            {
                text: '通常のCRRを設定すれば、必ずすべてのオブジェクトが15分以内に複製されるSLAが付く',
                isCorrect: false,
                explanation:
                    '通常のS3 Replicationは非同期で、15分以内のSLAやメトリクス要件を満たしたい場合はS3 RTCを検討します。単にCRRを設定しただけでは、RTCのSLAや追加の可視化が得られるわけではありません。',
            },
            {
                text: 'S3 Transfer Accelerationを有効化すれば、レプリケーション完了を15分以内に保証できる',
                isCorrect: false,
                explanation:
                    'S3 Transfer AccelerationはクライアントからS3へのアップロード高速化に使う機能です。S3バケット間レプリケーションの15分SLAやコンプライアンス監視を提供する機能ではありません。',
            },
            {
                text: 'S3 Inventoryを有効化すれば、リアルタイムに15分以内の複製完了が保証される',
                isCorrect: false,
                explanation:
                    'S3 Inventoryはオブジェクト一覧やメタデータを定期的に出力する機能です。レプリケーションの15分SLAを提供するものではありません。複製状況の分析には役立ちますが、RTCとは役割が異なります。',
            },
        ],
        explanation:
            'S3 RTCは「複製する」だけでなく「複製時間を要件として管理したい」場合に検討します。通常のCRRより追加コストが発生しますが、CloudWatch metricsやEventBridge eventsを使って遅延やしきい値超過を監視しやすくなります。災害対策だけなら通常のCRRで足りることもありますが、監査や業務要件でレプリケーション時間の見える化やSLAが必要ならRTCが候補になります。',
    },
    {
        question:
            'S3 Replicationを設定しましたが、設定前から存在していた数百万個のオブジェクトが送信先バケットに複製されていません。既存オブジェクトもまとめて複製したい場合、最も適切な対応はどれですか?',
        options: [
            {
                text: 'S3 Batch Replicationを使い、既存オブジェクトや過去に複製失敗したオブジェクトをオンデマンドで複製する',
                isCorrect: true,
                explanation:
                    '通常のライブレプリケーションは、レプリケーション設定後に作成された新規オブジェクトを主対象として継続的に複製します。設定前から存在するオブジェクトや複製に失敗したオブジェクトを後から複製したい場合は、S3 Batch Replicationを使います。Batch ReplicationではS3 InventoryやCSVなどのマニフェストで対象を指定します。',
            },
            {
                text: 'Replicationルールを保存し直せば、過去に存在していた全オブジェクトが必ず自動で遡及複製される',
                isCorrect: false,
                explanation:
                    'Replicationルールを設定しても、既存オブジェクトは自動的には遡及複製されません。既存オブジェクトにはBatch Replicationを使います。',
            },
            {
                text: '送信先バケットを削除して作り直せば、送信元の既存オブジェクトが自動的に再複製される',
                isCorrect: false,
                explanation:
                    '送信先バケットを作り直しても、既存オブジェクトの再複製が自動的に始まるわけではありません。対象を明示してBatch ReplicationやBatch Copyを設計します。',
            },
            {
                text: 'S3 LifecycleでTransitionを設定すれば、既存オブジェクトが別バケットへ複製される',
                isCorrect: false,
                explanation:
                    'LifecycleのTransitionは同じオブジェクトを別ストレージクラスへ移行する機能です。別バケットへの複製ではありません。',
            },
        ],
        explanation:
            'S3 Replicationでは「今後作成されるオブジェクトの継続複製」と「既存オブジェクトのバックフィル」を分けます。Batch ReplicationではS3 InventoryやCSVマニフェストを使い、未複製、失敗、既に複製済みなどのステータスで対象を絞れます。Glacier Flexible RetrievalやDeep Archive、Intelligent-Tieringのアーカイブ階層にある一部オブジェクトは、先に復元が必要になる場合があります。',
    },
    {
        question:
            'SSE-KMSで暗号化されたS3オブジェクトを別アカウント・別リージョンのバケットへCRRで複製したいです。Replicationルールは作成しましたが、対象オブジェクトが複製に失敗します。最も確認すべき点はどれですか?',
        options: [
            {
                text: 'Replication用IAMロールにS3の複製権限だけでなく、送信元KMSキーの復号と送信先KMSキーでの暗号化に必要な権限があるか',
                isCorrect: true,
                explanation:
                    'SSE-KMS暗号化オブジェクトのレプリケーションでは、S3のGetObjectVersionForReplicationなどの権限に加え、KMSキー権限が必要です。送信元KMSキーではkms:Decrypt、送信先KMSキーではkms:Encryptやkms:GenerateDataKeyなどの許可を確認します。クロスアカウントでは、IAMポリシーだけでなくKMSキーポリシー側の許可漏れが原因になりやすいです。',
            },
            {
                text: 'SSE-KMSで暗号化されたオブジェクトは、S3 Replicationでは一切複製できない',
                isCorrect: false,
                explanation:
                    'SSE-KMS暗号化オブジェクトも、必要な設定と権限を満たせばS3 Replicationで複製できます。複製不可と決めつけず、Replication設定、IAMロール、KMSキーポリシー、送信先キーを確認します。',
            },
            {
                text: '送信元と送信先で同じKMSキーIDを必ず使う必要がある',
                isCorrect: false,
                explanation:
                    'KMSキーはリージョンに属します。クロスリージョン複製では送信先リージョン側のKMSキーを指定して暗号化する設計が一般的です。同じキーIDを使えばよい、という単純な話ではなく、送信先リージョンと送信先アカウントで使えるキーを明示的に指定します。',
            },
            {
                text: 'バケットをpublic readにすれば、KMS権限がなくても複製できる',
                isCorrect: false,
                explanation:
                    '公開設定はKMSキーを使う権限の代わりになりません。SSE-KMSの復号・暗号化にはKMS側の許可が必要です。バケット公開はセキュリティリスクを増やすだけです。',
            },
        ],
        explanation:
            'SSE-KMSを使うと、S3アクセス権限とKMSキー権限の両方が必要になります。Replicationの失敗調査では、x-amz-replication-statusやレプリケーションメトリクス、IAMロール、送信元・送信先バケットポリシー、送信元と送信先それぞれのKMSキーポリシーを順に確認します。Replication関連の必須条件として、バージョニング、IAMロール、バケットポリシー、KMSキー権限、対象prefixやタグ条件をセットで見る必要があります。',
    },
    {
        question:
            'バージョニング有効なS3バケットでCRRを設定しています。送信元でオブジェクトを通常DELETEしたところ、送信先にはオブジェクトが残っていました。送信元の削除操作を送信先にも反映したい場合、最も適切な理解はどれですか?',
        options: [
            {
                text: '削除マーカーのレプリケーションを有効化する必要があり、タグベースのReplicationルールでは削除マーカー複製に制約がある',
                isCorrect: true,
                explanation:
                    'デフォルトでは、送信元で通常DELETEを行って削除マーカーが作成されても、送信先へ削除マーカーが複製されない場合があります。送信元の削除状態を送信先にも反映したいならDelete Marker Replicationを有効化します。これは「オブジェクトが削除されたように見える状態」を同期する設定です。ただしタグベースのReplicationルールでは削除マーカー複製はサポートされません。',
            },
            {
                text: 'CRRでは削除マーカーも常に自動複製されるため、送信先に残ることはあり得ない',
                isCorrect: false,
                explanation:
                    '削除マーカーの扱いは設定やルールによって変わります。デフォルトで常に送信先へ反映されると考えるのは危険です。削除マーカー複製の有効化やルール制約を確認します。',
            },
            {
                text: '送信元で通常DELETEすると、送信先の全バージョンが必ず完全削除される',
                isCorrect: false,
                explanation:
                    'バージョニング有効時の通常DELETEは削除マーカーを追加する操作であり、全バージョンを完全削除する操作ではありません。versionIdを指定した完全削除は基本的にレプリケートされません。送信先の過去バージョンの扱いも別途設計が必要です。',
            },
            {
                text: '削除マーカーを複製したい場合は、必ずS3 Object LockをCompliance modeにする',
                isCorrect: false,
                explanation:
                    'Object Lockは保持・改ざん防止の機能であり、削除マーカー複製を有効化する機能ではありません。削除マーカー複製はReplication設定で扱います。',
            },
        ],
        explanation:
            '削除の複製は、災害対策と誤削除対策のトレードオフです。削除マーカーを複製しない設計は、送信元の誤削除から送信先データを守る助けになります。一方、送信元と送信先の見え方を一致させたい場合は削除マーカー複製を検討します。Delete Marker Replicationあり・なしのどちらが正しいかは、同期性を優先するのか、誤削除からの保護を優先するのかで変わります。',
    },
    {
        question:
            'S3バケットの誤削除対策とリージョン障害対策を同時に満たしたいです。CRRを設定すれば十分だという意見が出ました。最も適切な設計判断はどれですか?',
        options: [
            {
                text: 'CRRはリージョン障害対策には有効だが、誤削除対策にはバージョニング、Object Lock、AWS Backupなども組み合わせて検討する',
                isCorrect: true,
                explanation:
                    'CRRは別リージョンへデータを複製するためリージョン障害対策に役立ちます。ただし削除マーカー複製や上書き、権限ミス、ランサムウェア的な操作まで考えると、Replicationだけをバックアップとみなすのは危険です。バージョニング、Object Lock、AWS Backupの継続バックアップやPITR、別アカウント保管、Backup Vault Lockを組み合わせて設計します。',
            },
            {
                text: 'CRRを設定すれば、誤削除もランサムウェアもすべて自動的に無効化され、バックアップは不要になる',
                isCorrect: false,
                explanation:
                    'Replicationは複製機能であり、すべての削除や改ざんを防ぐ完全なバックアップではありません。設定によっては削除マーカーや変更が複製されることもあります。復旧要件に応じてバックアップや保持制御を組み合わせます。',
            },
            {
                text: 'AWS Backup for S3はリージョン障害対策には使えず、S3とは連携できない',
                isCorrect: false,
                explanation:
                    'AWS BackupはS3バックアップに対応しており、継続バックアップやポイントインタイムリストアを使える構成があります。クロスリージョンやクロスアカウントコピーも設計できますが、コピー先の復元粒度やPITRの扱いなど制約を確認します。',
            },
            {
                text: 'Object Lockを有効にすれば、別リージョンへのデータ複製は不要になる',
                isCorrect: false,
                explanation:
                    'Object Lockは削除や上書きを防ぐ保持機能であり、リージョン障害時に別リージョンから提供する仕組みではありません。可用性や災害対策にはCRRやバックアップコピーなどを別に設計します。',
            },
        ],
        explanation:
            'ReplicationとBackupは目的が違います。DR（Disaster Recovery：災害対策）は別リージョンで継続利用できること、Backupは過去時点へ戻せることが中心です。Replicationは現在状態を複製する寄りの機能で、Backupは復元点を保持する寄りの機能です。RTO（復旧までの許容時間）、RPO（どの時点まで戻せる必要があるか）、削除保護、別アカウント隔離、監査要件を分けて設計します。',
    },
    {
        question:
            '数十GBの動画ファイルをクライアントからS3へアップロードしています。ネットワークが不安定なため、単一PUTでは途中失敗時に最初からやり直しになり、時間がかかります。最初に検討すべきS3の仕組みはどれですか?',
        options: [
            {
                text: 'Multipart Uploadを使い、ファイルを複数パートに分けて並列アップロードし、失敗したパートだけ再送する',
                isCorrect: true,
                explanation:
                    'Multipart Uploadは大容量オブジェクトを複数パートに分けてアップロードする仕組みです。パートを並列に送れるためスループットを上げやすく、失敗時もオブジェクト全体ではなく失敗したパートだけを再送できます。AWSは100MB以上のオブジェクトではMultipart Uploadの利用をベストプラクティスとしており、5GBを超えるオブジェクトではMultipart Uploadが必須です。',
            },
            {
                text: 'S3 Standard-IAへ保存先を変えれば、アップロード失敗時に自動で途中から再開される',
                isCorrect: false,
                explanation:
                    'ストレージクラスを変えても、単一PUTの途中失敗を自動で途中再開できるわけではありません。アップロード方法としてMultipart Uploadを使う必要があります。',
            },
            {
                text: 'オブジェクトキーを短くすれば、単一PUTの再送が不要になる',
                isCorrect: false,
                explanation:
                    'キー名の長さは、大容量ファイルの再送方式の本質ではありません。ネットワーク断による再送コストを抑えるには、パート単位で再送できるMultipart Uploadが適しています。',
            },
            {
                text: 'バケットをpublic readにすれば、アップロード帯域が自動的に増える',
                isCorrect: false,
                explanation:
                    '公開設定はアップロード性能を改善する機能ではありません。公開範囲を広げるとセキュリティリスクが増えます。',
            },
        ],
        explanation:
            '大容量アップロードでは、単にストレージクラスやバケット設定を見るのではなく、クライアント側のアップロード方式を設計します。S3の1オブジェクト最大サイズは5TBです。Multipart Uploadの各パートは原則5MB以上で、最後のパートだけは例外です。パートサイズ、並列数、リトライ、チェックサム、完了処理を適切に扱う必要があります。',
    },
    {
        question:
            'Multipart Uploadを使うアプリケーションで、途中失敗やクライアント切断が多発しています。S3の保存容量が想定より増えており、完成していないアップロードのパートが残っている可能性があります。最も適切な対応はどれですか?',
        options: [
            {
                text: 'LifecycleルールのAbortIncompleteMultipartUploadを設定し、指定日数を超えた未完了Multipart Uploadを中止する',
                isCorrect: true,
                explanation:
                    'Multipart UploadはCompleteMultipartUploadまたはAbortMultipartUploadが実行されるまで、アップロード済みパートがS3に保持され、課金対象になります。未完了パートは通常のオブジェクト一覧では目立ちにくい一方で課金対象になるため、LifecycleのAbortIncompleteMultipartUploadで指定日数を超えた未完了アップロードを中止し、関連パートを削除します。',
            },
            {
                text: '未完了Multipart Uploadのパートはオブジェクトとして完成していないため、保存料金は一切発生しない',
                isCorrect: false,
                explanation:
                    '未完了であっても、アップロード済みパートはS3に保存され、CompleteまたはAbortされるまで課金対象になります。放置するとコスト増につながります。',
            },
            {
                text: 'バケットのVersioningを停止すれば、未完了Multipart Uploadのパートはすべて即時削除される',
                isCorrect: false,
                explanation:
                    'Versioningの有効・停止は未完了Multipart Uploadのパート整理とは別です。未完了パートを消すにはAbortMultipartUploadやLifecycleのAbortIncompleteMultipartUploadを使います。',
            },
            {
                text: 'NoncurrentVersionExpirationを設定すれば、未完了Multipart Uploadのパートが削除される',
                isCorrect: false,
                explanation:
                    'NoncurrentVersionExpirationは非現行バージョンを削除するLifecycleアクションです。未完了Multipart Uploadのパート整理にはAbortIncompleteMultipartUploadを使います。',
            },
        ],
        explanation:
            'Multipart Uploadは性能と耐障害性を高めますが、完了・中止の後始末も設計に含める必要があります。未完了アップロードはコンソールやAPIで確認でき、Lifecycleで自動中止するのが実務上の基本です。さらにアプリケーション側でも、処理失敗時にAbortMultipartUploadを呼ぶ設計が望ましいです。AbortIncompleteMultipartUploadではタグベースのFilterを使えない点にも注意します。',
    },
    {
        question:
            '世界中の拠点から、中央のS3バケットへ数GBから数十GBのファイルを頻繁にアップロードします。特に遠距離拠点からのアップロードが遅く、通常のインターネット経路では帯域を使い切れていません。最も適切に検討すべき機能はどれですか?',
        options: [
            {
                text: 'S3 Transfer Accelerationを有効化し、s3-accelerateエンドポイントを使ってアップロードする',
                isCorrect: true,
                explanation:
                    'S3 Transfer Accelerationは、CloudFrontのエッジロケーションとAWSの最適化されたネットワーク経路を使い、遠距離からS3汎用バケットへの転送を高速化する機能です。ただし利用者がCloudFront distributionを自分で作るわけではなく、Transfer Acceleration用のs3-accelerateエンドポイントを使います。世界中のクライアントから中央バケットへ大容量ファイルをアップロードするようなケースで候補になります。',
            },
            {
                text: 'S3 Transfer Accelerationを有効化すれば、追加料金なしで必ずすべての通信が高速化される',
                isCorrect: false,
                explanation:
                    'Transfer Accelerationには追加のデータ転送料金が発生する場合があります。また、すべての環境で必ず高速化されるとは限らないため、Speed Comparison Toolなどで効果を比較します。',
            },
            {
                text: 'S3 Transfer Accelerationは同一リージョンのEC2からS3へアクセスする場合だけに使う機能である',
                isCorrect: false,
                explanation:
                    'Transfer Accelerationは長距離転送の最適化が主な用途です。VPC内や同一リージョン内のEC2とS3の通信を高速化する目的では、通常は優先度が低く、まず同一リージョン配置、VPC Endpoint、アプリ側並列化、EC2のネットワーク帯域などを確認します。',
            },
            {
                text: 'S3 Transfer Accelerationを使うには、バケット名にドットを含める必要がある',
                isCorrect: false,
                explanation:
                    'Transfer Accelerationを使うバケット名はDNS準拠である必要があり、ドット（.）を含めることはできません。ドットを含める必要があるのではなく、含めてはいけない制約です。また、accelerateエンドポイントを使う必要があります。',
            },
        ],
        explanation:
            'Transfer Accelerationは「S3が遅いから常に有効化」する機能ではありません。長距離転送、インターネット経路の制約、追加料金、バケット名制約、利用するエンドポイントを確認して判断します。大容量ファイルではMultipart Uploadと組み合わせて検討することもあります。',
    },
    {
        question:
            'S3に保存された100GBの分析用ファイルを、EC2上の処理プログラムが何度もダウンロードします。単一のGETで全体を取得すると時間がかかり、失敗時の再試行も重いです。スループットと再試行効率を改善する方法として最も適切なものはどれですか?',
        options: [
            {
                text: 'Range GETを使って複数のbyte rangeを並列取得し、必要に応じてMultipart Upload時のパート境界に合わせる',
                isCorrect: true,
                explanation:
                    'S3ではRangeヘッダーを使ってオブジェクトの一部だけを取得できます。複数接続で異なるbyte rangeを並列取得すると、単一GETより高い集約スループットを狙えます。失敗した範囲だけ再取得しやすくなるため、再試行効率も上がります。Multipart Uploadで作成したオブジェクトなら、パート境界に合わせてGETすると扱いやすい場合があります。',
            },
            {
                text: 'S3のGETは常に単一接続で全体を取得する必要があり、部分取得はできない',
                isCorrect: false,
                explanation:
                    'S3はRange GETに対応しています。大きなオブジェクトでは、必要な範囲だけ取得したり、複数範囲を並列に取得したりする設計が有効です。',
            },
            {
                text: 'オブジェクトをS3 Glacier Deep Archiveへ移行すれば、GETのスループットが必ず最大化される',
                isCorrect: false,
                explanation:
                    'Deep Archiveは長期アーカイブ向けで、通常のGETで即時取得する用途には向きません。分析処理で繰り返し読む大容量ファイルのスループット改善策ではありません。',
            },
            {
                text: 'オブジェクトキーにランダムな文字を追加すれば、1つの巨大オブジェクトの単一GETが自動的に分割される',
                isCorrect: false,
                explanation:
                    'キー名を変えても、1つの巨大オブジェクトのGETが自動分割されるわけではありません。クライアント側でRange GETや並列取得を実装します。',
            },
        ],
        explanation:
            '大容量ダウンロードでは、S3側だけでなくクライアント側の取得方式も重要です。Range GETは、失敗した範囲だけ再取得しやすく、ネットワーク帯域を並列に使いやすい設計です。一方、分析用途では巨大な単一ファイルを読むより、Parquetのような列指向形式、圧縮、パーティション、処理単位に合わせたファイル分割を検討した方がよい場合もあります。EC2とS3を同じリージョンに置くこともレイテンシと転送効率に効きます。',
    },
    {
        question:
            'S3へ毎秒数万件のPUTとGETを行うワークロードを設計しています。昔の知識をもとに「S3は先頭prefixをランダム化しないと性能が出ない」と言われました。現在のS3性能設計として最も適切なものはどれですか?',
        options: [
            {
                text: 'S3は高いリクエストレートへ自動的にスケールし、必要なら用途に応じた複数prefixへ並列化する。性能目的だけのランダムprefix化は基本方針ではない',
                isCorrect: true,
                explanation:
                    '現在のS3は高いリクエストレートへ自動的にスケールします。目安として、partitioned prefixごとに少なくとも毎秒3,500 PUT/COPY/POST/DELETE、5,500 GET/HEADリクエストを達成できます。これは設計時の目安であり、実際の性能はワークロードやスケールの進み方に影響されます。prefix数に上限はなく、複数prefixへ並列化すればさらにスループットを伸ばせます。古い「ランダムな先頭文字で必ず分散する」という設計をそのまま使う必要はありません。',
            },
            {
                text: '現在でもS3では必ずキーの先頭6文字をランダム化しないと、GETが一切成功しない',
                isCorrect: false,
                explanation:
                    '現在のS3では、そのような必須ルールはありません。性能目的だけのランダム化より、日付、テナント、用途など運用しやすいprefix設計と、必要に応じた並列化を検討します。',
            },
            {
                text: 'prefixはS3の性能に一切関係しないため、毎秒数百万リクエストでも単一prefixで必ず即時に処理できる',
                isCorrect: false,
                explanation:
                    'S3は自動的にスケールしますが、prefixごとのリクエストレート目安があります。非常に高い負荷では複数prefixへの並列化、指数バックオフ付きリトライ、503 Slow Downへの対応、KMS利用時のKMSクォータ確認などが必要です。',
            },
            {
                text: 'S3 request rateを上げるには、バケットをpublic readにする必要がある',
                isCorrect: false,
                explanation:
                    '公開設定はrequest rateのスケール手段ではありません。性能設計とアクセス制御は分けて考えます。',
            },
        ],
        explanation:
            '昔のS3性能設計では、prefixランダム化が強く意識されていました。現在はS3が高いリクエストレートへ自動スケールするため、運用性の低いランダムprefixを最初から入れるより、用途に応じたprefix設計、水平並列化、指数バックオフ付きリトライ、メトリクス監視を考える方が実務的です。prefixは性能だけでなく、運用性、Lifecycle、分析、権限制御にも影響します。スケールは徐々に進むため、急激な負荷増では一時的に503 Slow Downが見えることもあります。',
    },
    {
        question:
            'SSE-KMSで暗号化したオブジェクトをS3へ高頻度にPUT/GETする設計です。S3のprefixごとのrequest rate目安には余裕があるはずなのに、KMS関連のエラーやスロットリングが疑われています。最も適切な確認ポイントはどれですか?',
        options: [
            {
                text: 'S3のrequest rateだけでなく、AWS KMSのリクエストクォータやキー利用状況も確認する',
                isCorrect: true,
                explanation:
                    'SSE-KMSを使うと、S3リクエストに伴ってKMSキーの利用が発生します。S3側のprefixごとのrequest rateに余裕があっても、KMSのリクエストクォータやキー利用状況がボトルネックになることがあります。KMSクォータはリージョン単位・アカウント単位で考え、CloudWatch、CloudTrail、KMS関連メトリクスで確認します。',
            },
            {
                text: 'S3のprefixを増やせば、KMSのリクエストクォータも必ず同じ比率で自動的に増える',
                isCorrect: false,
                explanation:
                    'prefixを増やすとS3側の並列性は上げやすくなりますが、KMSのクォータが同じ比率で自動的に増えるわけではありません。SSE-KMSではKMS側の制限も別に確認します。',
            },
            {
                text: 'SSE-KMSを使っている場合、S3はMultipart Uploadをサポートしない',
                isCorrect: false,
                explanation:
                    'SSE-KMSとMultipart Uploadは組み合わせて利用できます。ただし、アップロードやダウンロード、レプリケーションなどで必要なKMS権限やKMSリクエスト量を考慮します。',
            },
            {
                text: 'KMS関連の制約は、S3 Transfer Accelerationを有効化すれば必ず解消される',
                isCorrect: false,
                explanation:
                    'Transfer Accelerationは長距離転送の最適化機能であり、KMSクォータを増やす機能ではありません。KMSがボトルネックなら、KMSクォータ、キー設計、S3 Bucket Keyの利用可否などを検討します。S3 Bucket KeyはSSE-KMS利用時のKMSリクエスト削減に役立つ場合があります。',
            },
        ],
        explanation:
            'S3性能問題では、S3単体だけを見ると原因を見誤ることがあります。SSE-KMS、CloudFrontキャッシュ、VPC Endpoint、NAT Gateway、クライアントの接続数、リトライ設定、EC2のネットワーク帯域など、周辺要素もボトルネックになります。特にKMSは高頻度S3ワークロードで見落とされやすい確認ポイントです。SSE-S3とSSE-KMSでは、暗号化の管理責任だけでなく性能・クォータ面の考慮も変わります。',
    },
    {
        question:
            'S3に画像がアップロードされたら、サムネイル生成だけをすぐ実行したいです。処理は軽く、失敗時の再試行はLambda側の標準的な非同期実行の範囲で十分です。最もシンプルで適切な構成はどれですか?',
        options: [
            {
                text: 'S3 Event NotificationsからLambdaを直接呼び出し、対象prefixだけをイベント条件にする',
                isCorrect: true,
                explanation:
                    '単一の軽い後続処理であれば、S3 Event NotificationsからLambdaを直接非同期呼び出しする構成がシンプルです。prefixや.jpg、.pngなどのsuffixフィルターで入力ファイルだけを対象にし、出力先prefixを分けることで不要な起動や再帰実行ループを避けます。',
            },
            {
                text: '必ずSQSとSNSとEventBridgeをすべて挟まないと、S3イベントからLambdaは起動できない',
                isCorrect: false,
                explanation:
                    'S3 Event NotificationsはLambdaを直接宛先にできます。SQSやSNS、EventBridgeは、バッファリング、ファンアウト、ルーティング、リトライ制御などが必要な場合に検討します。',
            },
            {
                text: 'Lambdaの出力サムネイルを同じ入力prefixに保存し、すべてのObjectCreatedイベントを対象にする',
                isCorrect: false,
                explanation:
                    '同じbucket/prefixに出力し、同じイベント条件で再度Lambdaが起動すると、Lambdaが自分の出力で再び起動する再帰実行ループを起こす可能性があります。入力prefixと出力prefixを分ける、別バケットに出す、suffix条件を使うなどの対策が必要です。',
            },
            {
                text: 'S3 Inventoryを毎日出力し、それを待ってLambdaを実行する',
                isCorrect: false,
                explanation:
                    'S3 Inventoryは定期的なオブジェクト一覧の出力に向く機能で、アップロード直後のイベント処理には向きません。即時処理にはS3 Event NotificationsやEventBridgeを使います。',
            },
        ],
        explanation:
            'S3イベント処理では、要件が単純ならLambda直呼びが最も小さく済みます。ただし、Lambda直呼びはバースト吸収や下流処理量の制御が弱くなりがちです。処理時間が長い、失敗時に確実に再処理したい、処理量を平準化したい、複数処理へ配りたい場合は、SQS、SNS、EventBridgeを組み合わせる設計に変わります。Lambdaが起動しない場合は、Lambdaのリソースベースポリシー、prefix/suffixフィルター、イベント種別を確認します。',
    },
    {
        question:
            'S3に大量のログファイルが短時間にアップロードされます。各ファイルを後続処理で解析しますが、Lambdaへ直接イベントを流すと一時的なバーストで処理が詰まり、失敗時の再処理も管理しづらいです。最も適切な構成はどれですか?',
        options: [
            {
                text: 'S3 Event Notificationsの宛先をSQSキューにし、LambdaはSQSをポーリングして処理し、DLQも設計する',
                isCorrect: true,
                explanation:
                    'SQSを挟むと、S3イベントをキューに蓄積して後続処理のペースを制御できます。LambdaはSQSイベントソースマッピングで処理でき、同時実行数やバッチサイズで処理量を調整しやすくなります。失敗時の再試行、可視性タイムアウト、DLQ（Dead Letter Queue：処理不能メッセージの退避先）も設計しやすくなります。',
            },
            {
                text: 'S3 Event NotificationsからLambdaを直接呼び出せば、どれだけバーストしても必ず順序通り1件ずつ処理される',
                isCorrect: false,
                explanation:
                    'S3 Event Notificationsは順序保証を提供しません。Lambda直呼びはシンプルですが、バースト吸収や処理ペース制御、失敗メッセージの退避を細かく設計したい場合はSQSを挟む方が適しています。',
            },
            {
                text: 'S3バケットをpublic readにすれば、Lambdaのバースト処理問題は解消する',
                isCorrect: false,
                explanation:
                    '公開設定はイベント処理のバースト吸収や再試行制御とは関係ありません。不要な公開はセキュリティリスクになります。',
            },
            {
                text: 'SQSを使うとメッセージが保存されないため、バースト吸収には使えない',
                isCorrect: false,
                explanation:
                    'SQSはメッセージを一定期間保持するキューサービスで、バースト吸収や非同期処理のデカップリングに向きます。コンシューマー側の処理能力に合わせて処理できます。',
            },
        ],
        explanation:
            'SQSは「S3イベントを何で受けるか」の代表的な答えです。処理量が急増する、下流の処理速度を制御したい、失敗イベントをDLQへ逃がしたい、複数ワーカーで水平スケールしたい場合に有効です。Visibility TimeoutはLambdaの最大処理時間より短すぎると、処理中メッセージが再表示され重複処理につながります。失敗レコードだけを返すpartial batch responseも検討できます。ただしSQS標準キューでは重複や順序入れ替わりを前提に、処理を冪等にします。',
    },
    {
        question:
            'S3にファイルがアップロードされたら、サムネイル生成、メタデータ抽出、監査ログ記録の3つの独立した処理をそれぞれ起動したいです。各処理は互いに依存せず、後から処理を追加する可能性もあります。最も適切な構成はどれですか?',
        options: [
            {
                text: 'S3イベントをEventBridgeへ送信し、EventBridgeルールで各処理のLambdaやSQSへルーティングする',
                isCorrect: true,
                explanation:
                    'EventBridgeを使うと、S3から送られたイベントをルールで複数ターゲットへ振り分けられます。条件に応じたルーティングや後からのターゲット追加がしやすく、複数の独立処理を疎結合にできます。この問題では「後から処理を追加する可能性」と「条件分岐」があるため、単純なPub/SubよりEventBridgeが自然です。',
            },
            {
                text: 'S3 Event Notificationsでは1つの通知設定に複数の宛先を同時指定できるため、1設定だけで3つのLambdaを直接指定する',
                isCorrect: false,
                explanation:
                    'S3 Event Notificationsでは、1つのイベント通知設定で指定できる宛先は1つです。複数処理へ配る場合は、複数の通知設定、SNS、EventBridgeなどを検討します。条件の重複にも注意が必要です。',
            },
            {
                text: 'サムネイル生成Lambdaの最後で、他の2つのLambdaを必ず同期呼び出しする',
                isCorrect: false,
                explanation:
                    '処理が独立しているなら、1つのLambdaに後続処理の起動責務を集めると結合が強くなります。失敗時の切り分けや処理追加も難しくなります。イベントバスやPub/Subで疎結合にする方が自然です。',
            },
            {
                text: 'S3のバケットポリシーで3つのLambdaをPrincipalに指定すれば、自動的にファンアウトされる',
                isCorrect: false,
                explanation:
                    'バケットポリシーはアクセス制御の仕組みであり、イベントを複数処理へ配信する機能ではありません。イベント配信にはS3 Event Notifications、SNS、SQS、EventBridgeなどを使います。',
            },
        ],
        explanation:
            'ファンアウト設計では、SNSとEventBridgeが候補になります。SNSは単純なPub/Subで複数購読者へ配信する用途に強く、SNSから複数SQSへ配れば各下流が独立に処理できます。EventBridgeはイベント内容に基づくルール、AWSサービス連携、外部SaaSやAPI Destination、将来の拡張に向きます。単に「複数処理へ流す」だけでなく、フィルタリング、運用、再試行、ターゲットの種類で選びます。',
    },
    {
        question:
            'S3のObjectCreatedイベントをSQS FIFOキューで受け、同じオブジェクトキー単位で順序を保って処理したいです。S3 Event Notificationsの宛先にSQS FIFOキューを直接指定しようとしました。最も適切な説明はどれですか?',
        options: [
            {
                text: 'S3 Event NotificationsはSQS FIFOキューを直接宛先にできないため、EventBridgeを経由してSQS FIFOへ送る構成を検討する',
                isCorrect: true,
                explanation:
                    'S3 Event Notificationsの宛先としてSQS Standardキューは使えますが、SQS FIFOキューは直接サポートされません。S3イベントをSQS FIFOキューへ送りたい場合は、EventBridgeを経由する構成を検討します。ただしEventBridge経由でも、MessageGroupIdや重複排除IDをどう設計するかを考える必要があります。',
            },
            {
                text: 'S3 Event NotificationsからSQS FIFOキューへ直接送れるため、EventBridgeは不要である',
                isCorrect: false,
                explanation:
                    'S3 Event NotificationsはSQS FIFOキューを直接宛先にできません。FIFOキューを使いたい場合はEventBridgeなど別の経路を考えます。',
            },
            {
                text: 'S3 Event Notificationsはすべてのイベントを厳密に順序保証するため、FIFOキュー自体が不要である',
                isCorrect: false,
                explanation:
                    'S3 Event Notificationsは少なくとも1回配信で、イベント発生順に到着する保証はありません。順序が重要な処理では、キュー設計やアプリケーション側の整合性管理が必要です。',
            },
            {
                text: 'SQS FIFOキューを使えば、S3からの重複イベントが完全に発生しなくなる',
                isCorrect: false,
                explanation:
                    'FIFOキューには重複排除機能がありますが、設計次第です。S3イベント自体は重複する可能性があり、FIFOを使ってもアプリケーション側の冪等性が不要になるわけではありません。',
            },
        ],
        explanation:
            'S3イベントで順序や重複排除を強く意識する場合、S3 Event Notificationsの性質をそのまま信じるのではなく、EventBridge、SQS FIFO、MessageGroupId、重複排除ID、処理済み記録などを組み合わせて設計します。',
    },
    {
        question:
            'S3イベントを使って注文ファイルを処理しています。まれに同じオブジェクトに対するイベントが重複し、処理結果が二重登録されることがあります。最も適切なアプリケーション設計はどれですか?',
        options: [
            {
                text: 'S3イベントはat-least-once配信で重複や順序入れ替わりがあり得るため、オブジェクトキーやversionId、ETagなどを使って冪等に処理する',
                isCorrect: true,
                explanation:
                    'S3 Event Notificationsは少なくとも1回配信されますが、重複イベントが発生する場合があり、イベント順序も保証されません。処理済みIDをDynamoDBなどに条件付き書き込みで記録する、同じキーとversionIdの処理を二重実行しない、非バージョニングバケットではETagやsequencerなども使って判定する、出力を上書き安全にするなど、冪等性（同じ処理を複数回実行しても結果が壊れない性質）を設計します。',
            },
            {
                text: 'S3 Event Notificationsはexactly-once配信なので、二重登録はアプリケーションでは考慮しなくてよい',
                isCorrect: false,
                explanation:
                    'S3 Event Notificationsはexactly-onceではありません。重複や順序入れ替わりを前提にアプリケーションを設計する必要があります。',
            },
            {
                text: 'Lambdaのメモリを増やせば、S3イベントの重複は発生しなくなる',
                isCorrect: false,
                explanation:
                    'Lambdaのメモリ設定は処理性能に影響しますが、S3イベントの配信保証をexactly-onceに変えるものではありません。重複対策はアプリケーションロジックやキュー設計で行います。',
            },
            {
                text: '重複イベントが嫌な場合は、S3バケットをpublic readにすればよい',
                isCorrect: false,
                explanation:
                    '公開設定はイベント配信の重複対策ではありません。不要な公開は情報漏えいリスクを増やします。',
            },
        ],
        explanation:
            'イベント駆動では「イベントが1回だけ、順番通りに届く」と仮定しないことが重要です。S3イベント、SQS標準キュー、EventBridgeなどはat-least-onceを前提にし、処理済み管理、条件付き書き込み、ユニークキー、リトライ可能な出力設計で冪等性を確保します。ETagはMultipart Uploadや暗号化条件によって単純なMD5とは限らないため、唯一の判断材料にしすぎない点にも注意します。',
    },
    {
        question:
            'S3アップロード後の処理で、複数の下流システムへ通知したいです。一部は人向け通知、一部はキュー処理、一部は後から追加される外部HTTPエンドポイントです。SNS、SQS、EventBridgeの使い分けとして最も適切なものはどれですか?',
        options: [
            {
                text: 'SQSはバッファリングとワーカー処理、SNSはPub/Sub通知、EventBridgeはイベントルールによる柔軟なルーティングやAWSサービス連携に向く',
                isCorrect: true,
                explanation:
                    'SQSはコンシューマーがポーリングするキューで、通知というより処理の平準化、バッファリング、再試行に向きます。SNSはPub/Subで複数購読者へプッシュ配信する通知に向きます。EventBridgeはイベントバスとルールで、イベント内容に応じたルーティング、AWSサービスや外部SaaS連携、API Destination、後からの拡張に向きます。',
            },
            {
                text: 'SQS、SNS、EventBridgeは完全に同じ機能なので、どれを選んでも設計上の違いはない',
                isCorrect: false,
                explanation:
                    '3つはすべて疎結合化に使えますが、通信モデル、保持、フィルタリング、配信先、順序、再試行、運用方法が異なります。要件に応じて選びます。',
            },
            {
                text: 'SNSはメッセージを長期間キューに保持して、ワーカーが好きなタイミングでポーリングするためのサービスである',
                isCorrect: false,
                explanation:
                    'ワーカーがポーリングして処理するキューはSQSです。SNSはPub/Subの通知サービスで、購読者へプッシュ配信します。必要ならSNSからSQSへファンアウトして、各処理が自分のキューで処理できます。',
            },
            {
                text: 'EventBridgeを使う場合、イベント内容に基づくルールやターゲット追加はできない',
                isCorrect: false,
                explanation:
                    'EventBridgeはイベントパターンに基づいてルールを定義し、複数のAWSサービスやHTTPエンドポイントなどへルーティングできます。後から処理を追加しやすい点が強みです。',
            },
        ],
        explanation:
            'S3イベント連携では「何で受けるか」を目的で分けます。シンプルさならLambda直呼び、バースト吸収ならSQS、単純ファンアウトならSNS、条件分岐や拡張性ならEventBridge、順序制御ならFIFOとアプリケーション設計が候補です。実務ではSNSから複数SQSへ配るなど、組み合わせることも多いです。',
    },
    {
        question:
            'Webアクセスログを日次でS3に保存しています。月に数回、SQLで集計するだけで、常時オンライン更新やトランザクション処理は不要です。低コストに月次分析したい場合、RDSへ全件ロードするより適切な設計はどれですか?',
        options: [
            {
                text: 'S3上のログをGlue Data Catalogでテーブル定義し、Athenaで必要なときだけSQLクエリする',
                isCorrect: true,
                explanation:
                    'AthenaはS3上のデータを直接SQLでクエリできるサーバーレスサービスです。RDSのように常時稼働するデータベースへ全件ロードしなくても、必要なときだけログを分析できます。Athenaはクエリ実行時課金で、スキャン量がコストに直結します。Glue Data Catalogでテーブル定義やスキーマを管理すると、Athenaや他の分析サービスから参照しやすくなります。',
            },
            {
                text: 'RDSへ全ログをロードし、分析しない時間帯も常にインスタンスを起動し続ける',
                isCorrect: false,
                explanation:
                    'RDSはオンライン更新、低レイテンシ照会、トランザクション処理やアプリケーションのDBに向きます。月に数回の大規模ログ分析だけが目的なら、常時稼働のDBへ全件ロードするより、S3 + Athenaの方が低コストで運用しやすい場合があります。',
            },
            {
                text: 'S3ではSQL分析ができないため、必ずEC2上に独自DBを構築する',
                isCorrect: false,
                explanation:
                    'Athenaを使うと、S3上のファイルに対してSQLクエリを実行できます。独自DBを構築しなくても分析できるケースがあります。',
            },
            {
                text: 'S3に保存したログは、分析前に必ず全件をLambdaのメモリへ読み込む',
                isCorrect: false,
                explanation:
                    '大量ログをLambdaのメモリへ全件読み込む設計はスケールしにくく、実行時間やメモリ制限にも引っかかりやすいです。Athenaのような分析サービスを使う方が自然です。',
            },
        ],
        explanation:
            'S3は単なるファイル置き場ではなく、データレイクの入口として使えます。頻繁な更新や低レイテンシのトランザクションが必要ならRDSなどを検討しますが、大量ログの低頻度分析ではS3 + Glue Data Catalog + Athenaが有力です。Glue Data Catalogはメタデータ管理であり、データ本体をS3から移動するものではありません。Athenaはクエリ対象データ量に応じた課金なので、形式、圧縮、パーティション、必要列だけSELECTする設計が重要です。',
    },
    {
        question:
            'S3にCSV形式で保存した数TBのイベントログをAthenaで分析しています。多くのクエリは数列だけを参照しますが、毎回スキャン量が大きく、コストと実行時間が問題です。最も適切な改善策はどれですか?',
        options: [
            {
                text: 'CSVをParquetなどの列指向形式に変換し、圧縮して保存する',
                isCorrect: true,
                explanation:
                    'ParquetやORCは列指向フォーマットで、Athenaが必要な列だけを読みやすくなります。圧縮も組み合わせることで、スキャン量、クエリ時間、コストを削減できます。CSVは扱いやすい一方、列単位の読み飛ばしや型情報の面で大規模分析には不利になりがちです。圧縮形式は圧縮率だけでなく、分割可能性やクエリエンジンのサポートも確認します。',
            },
            {
                text: 'CSVのファイル名を短くすれば、Athenaのスキャン量は必ず大幅に減る',
                isCorrect: false,
                explanation:
                    'ファイル名の長さはAthenaのデータスキャン量の主要因ではありません。スキャン量を減らすには、列指向形式、圧縮、パーティション、必要列だけを読む設計が重要です。',
            },
            {
                text: 'すべてのCSVをZIPファイルにまとめれば、Athenaが最も高速に並列スキャンできる',
                isCorrect: false,
                explanation:
                    'AthenaはZIP形式をサポートしません。圧縮形式にもサポート状況や分割可能性があります。大規模分析ではParquetやORCなどの列指向形式がよく使われます。',
            },
            {
                text: 'Athenaは圧縮データを読み取れないため、すべて非圧縮CSVに戻す',
                isCorrect: false,
                explanation:
                    'Athenaは多くの圧縮形式を読み取れます。ParquetやORCは圧縮と相性がよく、クエリ性能とコスト改善に役立ちます。',
            },
        ],
        explanation:
            'Athenaはスキャンしたデータ量がコストと性能に強く影響します。CSVのまま全列・全期間をスキャンする設計は、データ量が増えると高コストになります。Parquet/ORC、圧縮、適切なファイルサイズ、パーティションを組み合わせるのがデータレイク設計の基本です。小さいファイルが大量にある場合は、メタデータオーバーヘッドやリクエスト増で遅くなるため、ファイル結合やコンパクションも検討します。',
    },
    {
        question:
            'S3に保存したアクセスログをAthenaで日付指定して分析します。データは s3://bucket/logs/year=2026/month=05/day=17/ のように配置されています。日付条件のクエリで不要なデータスキャンを減らす設計として最も適切なものはどれですか?',
        options: [
            {
                text: 'year、month、dayなどをパーティションとしてGlue Data Catalogに登録し、クエリで対象日付を絞る',
                isCorrect: true,
                explanation:
                    'Athenaでは、S3上のデータをパーティションで分けると、クエリ条件に合うパーティションだけを読みやすくなります。これをパーティションプルーニングと呼びます。日付でよく絞るログなら、year/month/dayなどのパーティション設計によりスキャン量とコストを削減できます。',
            },
            {
                text: '全ログを1つの巨大なCSVファイルにまとめれば、日付条件のクエリは必ず最小スキャンになる',
                isCorrect: false,
                explanation:
                    '1つの巨大ファイルにまとめると、日付条件で一部だけ読みたい場合でも不要な範囲をスキャンしやすくなります。日付や利用頻度に応じたパーティション設計が重要です。',
            },
            {
                text: 'パーティションを増やせば増やすほど常に高速になるため、ユーザーIDごとに無制限に細かく分ける',
                isCorrect: false,
                explanation:
                    'パーティションを細かくしすぎると、メタデータ管理やクエリ計画、小さいファイルの増加で逆に遅くなることがあります。よく使う絞り込み条件とデータ量に基づいて、適切な粒度を選びます。',
            },
            {
                text: 'Glue Data Catalogを使うと、AthenaはS3上のデータを読めなくなる',
                isCorrect: false,
                explanation:
                    'Glue Data Catalogはテーブル定義やパーティション情報を管理するメタデータカタログです。AthenaはGlue Data Catalogのメタデータを使ってS3上のデータをクエリできます。',
            },
        ],
        explanation:
            'パーティション設計はAthenaコストの中心です。日付、リージョン、サービス名など、クエリでよく指定する条件を軸にします。ただし過剰なパーティションや小さいファイルの大量生成はメタデータオーバーヘッドを増やします。大量パーティションでは、パーティションを手動登録し続ける代わりにpartition projectionやGlue partition indexが有効な場合があります。',
    },
    {
        question:
            'S3バケット内に古い暗号化方式のオブジェクトや、特定ストレージクラスのオブジェクトがどれだけあるかを定期的に棚卸ししたいです。個々のオブジェクト単位で一覧をSQL分析したい場合、最も適切な組み合わせはどれですか?',
        options: [
            {
                text: 'S3 Inventoryを有効化し、出力されたCSV/ORC/ParquetレポートをAthenaでクエリする',
                isCorrect: true,
                explanation:
                    'S3 Inventoryは、バケット内オブジェクトの一覧とメタデータを日次または週次で出力する機能で、リアルタイム一覧ではありません。AthenaでInventoryレポートをクエリすれば、暗号化状態、ストレージクラス、レプリケーション状態、Object Lock関連情報などをオブジェクト単位で分析できます。S3 InventoryではORCやParquet形式が推奨されることがあります。',
            },
            {
                text: 'S3 Storage Lensだけを使えば、必ず全オブジェクトキーをSQLで直接一覧できる',
                isCorrect: false,
                explanation:
                    'S3 Storage Lensは組織、アカウント、リージョン、バケット、prefixなどの集計メトリクスと傾向分析に向きます。個々のオブジェクト一覧をSQLで分析したい場合はS3 Inventoryが適しています。',
            },
            {
                text: 'CloudFrontのキャッシュログを見れば、S3内の全オブジェクトの暗号化状態が分かる',
                isCorrect: false,
                explanation:
                    'CloudFrontログは配信リクエストのログであり、S3バケット内の全オブジェクトメタデータの棚卸しには向きません。S3 Inventoryを使います。',
            },
            {
                text: 'S3 Event Notificationsを有効化すれば、過去から存在する全オブジェクト一覧が即時に通知される',
                isCorrect: false,
                explanation:
                    'S3 Event Notificationsはイベント発生時の通知であり、既存オブジェクトの定期棚卸しではありません。過去から存在するオブジェクトの一覧にはS3 Inventoryが適しています。',
            },
        ],
        explanation:
            'S3 InventoryとS3 Storage Lensは似て見えますが目的が違います。Inventoryはオブジェクト単位の棚卸し、Storage Lensはストレージ利用状況やベストプラクティスの集計・可視化に向きます。大量オブジェクトに対してListObjectsを繰り返すより、Inventoryを出力してAthenaで分析する方が効率的な場面があります。監査、移行、暗号化状況確認、レプリケーション状況確認ではInventory + Athenaが強力です。',
    },
    {
        question:
            '組織全体でS3の利用状況を可視化し、急増しているバケット、古い非現行バージョン、未完了Multipart Upload、暗号化やバージョニングのベストプラクティス違反を見つけたいです。個々のオブジェクト一覧ではなく、集計・傾向・推奨を見たい場合に最も適切な機能はどれですか?',
        options: [
            {
                text: 'S3 Storage Lensを使って、組織・アカウント・リージョン・バケット・prefix単位のメトリクスを可視化する',
                isCorrect: true,
                explanation:
                    'S3 Storage Lensは、S3ストレージの利用状況やアクティビティを組織横断で可視化し、コスト最適化、データ保護、アクセス管理、パフォーマンス改善のヒントを得るための分析機能です。AWS Organizationsと連携して組織全体を見られます。未完了Multipart Uploadや非現行バージョン、暗号化、バージョニングなどの傾向把握に役立ちます。',
            },
            {
                text: 'S3 Inventoryだけを使えば、組織全体のStorage Lensダッシュボードと同じ推奨事項が自動で表示される',
                isCorrect: false,
                explanation:
                    'S3 Inventoryはオブジェクト単位の一覧出力です。Storage Lensのような組織横断ダッシュボード、集計メトリクス、推奨の可視化とは目的が異なります。',
            },
            {
                text: 'Athenaで1つの空テーブルを作れば、S3全体の利用傾向が自動的に可視化される',
                isCorrect: false,
                explanation:
                    'AthenaはSQLクエリエンジンです。S3全体の利用状況を自動的に可視化するダッシュボードではありません。必要なデータソースを用意してクエリする必要があります。',
            },
            {
                text: 'S3 Transfer Accelerationを有効化すれば、古い非現行バージョンや未完了Multipart Uploadを自動的に検出できる',
                isCorrect: false,
                explanation:
                    'Transfer Accelerationは長距離転送を高速化する機能です。S3利用状況の可視化やベストプラクティス違反検出にはStorage Lensを検討します。',
            },
        ],
        explanation:
            '個々のオブジェクトを調べたいならS3 Inventory、組織全体の傾向やコスト・保護・アクセス管理のメトリクスを見たいならS3 Storage Lens、と整理すると判断しやすいです。Storage Lensの高度なメトリクスやエクスポートには追加設定や追加料金が関係する場合があります。Storage LensのレポートをS3へエクスポートし、さらにAthenaなどで分析する設計もあります。',
    },
    {
        question:
            'S3上のデータレイクに蓄積した大規模データを、BIチームが高い同時実行性で定常的に分析します。既にRedshiftを利用しており、Redshift内のデータとS3上の外部データを組み合わせた複雑な分析も行いたいです。Athenaだけでなく検討すべき選択肢として最も適切なものはどれですか?',
        options: [
            {
                text: 'Amazon Redshift Spectrumを使い、RedshiftからS3上の外部テーブルをクエリする',
                isCorrect: true,
                explanation:
                    'Redshift Spectrumを使うと、S3上の構造化・半構造化データをRedshiftから外部テーブルとしてクエリできます。既存のRedshiftデータとS3データを組み合わせた分析や、BI利用者が多い定常的なDWHワークロードでは候補になります。',
            },
            {
                text: 'AthenaはS3をクエリできるため、RedshiftやRedshift Spectrumはどのような場合でも不要である',
                isCorrect: false,
                explanation:
                    'Athenaはサーバーレスでアドホック分析に向きますが、既存Redshift環境との結合、BIワークロード、同時実行性、パフォーマンス要件によってはRedshift SpectrumやRedshiftへのロードが適する場合があります。',
            },
            {
                text: 'Redshift Spectrumを使うには、S3上のデータを必ずRedshiftの内部テーブルへ全件ロードする必要がある',
                isCorrect: false,
                explanation:
                    'Redshift SpectrumはS3上のデータを外部テーブルとしてクエリできます。全件をRedshift内部へロードしなくても、S3上にデータを置いたまま分析できます。',
            },
            {
                text: 'S3上のデータを分析する場合、Glue Data Catalogや外部スキーマのようなメタデータ管理は一切不要である',
                isCorrect: false,
                explanation:
                    'S3上のファイルをテーブルとして扱うには、スキーマやパーティションなどのメタデータ管理が必要です。AthenaでもRedshift Spectrumでも、Glue Data Catalogなどのメタデータ設計が重要です。',
            },
        ],
        explanation:
            'AthenaとRedshift SpectrumはどちらもS3上のデータをクエリできますが、使いどころが違います。Athenaはサーバーレスのアドホッククエリや探索、低頻度分析に向きます。Redshift SpectrumはRedshift環境と統合し、大規模BIや既存DWHデータとの結合に向くことがあります。RDSはオンラインアプリケーションやトランザクション向けです。データ形式、パーティション、Glue Data Catalog、Lake Formation、IAM権限設計も含めて設計します。',
    },
    {
        question:
            '多数のWebアプリケーションから発生するJSONログを、継続的にS3へ集約したいです。ログは一定サイズまたは一定時間ごとにまとめ、必要ならLambdaで変換し、将来Athenaで分析しやすい形にしたい場合、最も適切な構成はどれですか?',
        options: [
            {
                text: 'Amazon Data Firehoseにログを送信し、S3宛先、バッファリング、Lambda変換、必要に応じてParquet/ORC変換を設定する',
                isCorrect: true,
                explanation:
                    'Amazon Data Firehoseは、ストリーミングデータをS3などの宛先へnear real-timeに配信するフルマネージドサービスです。S3宛先では、受信レコードをバッファリングして一定サイズまたは一定時間ごとにS3オブジェクトとして配信できます。小さいファイル問題を避けつつ、Lambda変換やJSONからParquet/ORCへの形式変換も設定できます。',
            },
            {
                text: '各アプリケーションが1ログ行ごとにS3 PutObjectを直接実行し、1行1オブジェクトとして保存する',
                isCorrect: false,
                explanation:
                    '直接S3へ書くこと自体は可能ですが、1行1オブジェクトにすると小さいファイルが大量に発生し、S3リクエスト料金、一覧処理、Athenaクエリ性能に悪影響が出やすくなります。ログ集約ではFirehoseのバッファリングで適切なサイズにまとめる設計がよく使われます。',
            },
            {
                text: 'S3 Transfer Accelerationを使えば、ログの変換やParquet化まで自動で行われる',
                isCorrect: false,
                explanation:
                    'Transfer Accelerationは長距離転送の最適化機能であり、ログのバッファリング、変換、Parquet化を行う機能ではありません。',
            },
            {
                text: 'S3 Event Notificationsを使えば、アプリケーションから送られていないログも自動収集できる',
                isCorrect: false,
                explanation:
                    'S3 Event NotificationsはS3上で発生したイベントを通知する仕組みです。アプリケーションログをS3へ継続的に取り込む配信パイプラインそのものではありません。',
            },
        ],
        explanation:
            'Firehoseは「アプリから直接S3へ細かく書く」代わりに、配信・バッファリング・変換・圧縮・形式変換をマネージドに任せたい場合に向きます。S3をログ蓄積先にする場合、後段のAthena分析を意識して、ファイルサイズ、日付パーティションを意識したprefix、Parquet/ORC、圧縮、Glue Data Catalogとの連携、エラー出力prefixも考えます。完全な即時処理ではなくnear real-time配信である点も要件と照らします。',
    },
    {
        question:
            'クリックストリームをリアルタイムに処理し、複数の独自アプリケーションが同じデータを読み取って、数秒以内に不正検知やパーソナライズ処理を行います。一方で、最終的にはS3にも保存したいです。最も適切な設計はどれですか?',
        options: [
            {
                text: 'Kinesis Data Streamsでストリームを受け、複数コンシューマーでリアルタイム処理し、必要に応じてData FirehoseなどでS3へ配信する',
                isCorrect: true,
                explanation:
                    'Kinesis Data Streamsは、大量のレコードをリアルタイムに収集・処理し、複数のコンシューマーアプリケーションが読み取る用途に向きます。Enhanced Fan-Outなどでコンシューマーごとの読み取り性能を高める設計もあります。Firehoseは配信先へのロードをマネージドに行うサービスなので、独自の低レイテンシ処理が必要ならData Streamsを中心にし、S3への保存にはFirehoseなどを組み合わせます。',
            },
            {
                text: 'Data Firehoseだけを使えば、複数の独自コンシューマーが同じストリームを任意のタイミングで低レイテンシに再読込できる',
                isCorrect: false,
                explanation:
                    'Data Firehoseは宛先への配信をマネージドに行うサービスであり、複数の独自コンシューマーが低レイテンシで自由に読み取るストリーム処理基盤としてはKinesis Data Streamsの方が適しています。',
            },
            {
                text: 'S3だけに直接書き込めば、複数コンシューマーが数秒以内に順序付きで処理できる',
                isCorrect: false,
                explanation:
                    'S3は耐久性の高いオブジェクトストレージですが、複数コンシューマーが低レイテンシにストリーム処理するためのサービスではありません。リアルタイム処理にはData StreamsやManaged Service for Apache Flinkなどを検討します。',
            },
            {
                text: 'Athenaを使えば、書き込まれる前のクリックイベントをリアルタイムに処理できる',
                isCorrect: false,
                explanation:
                    'AthenaはS3などに保存されたデータをSQLで分析するサービスであり、到着前のイベントをリアルタイムに処理するストリーミングコンシューマーではありません。',
            },
        ],
        explanation:
            'Data StreamsとFirehoseは似ていますが、目的が違います。Data Streamsはストリームを保持し、複数アプリケーションが低レイテンシに処理する基盤です。FirehoseはS3、Redshift、OpenSearch、HTTPエンドポイントなどへの配信をマネージド化するサービスです。Data Streams → Firehose → S3のように、リアルタイム処理とS3蓄積を組み合わせる構成も代表的です。',
    },
    {
        question:
            'Data FirehoseでS3へログを配信しています。運用チームは「ログが1件届いた瞬間に必ずS3オブジェクトとして作られる」と想定していましたが、実際には数十秒から数分の遅延があります。最も適切な説明はどれですか?',
        options: [
            {
                text: 'Firehoseはバッファサイズまたはバッファ間隔に到達してからS3へオブジェクトを配信するため、一定の遅延が発生する',
                isCorrect: true,
                explanation:
                    'Data FirehoseはS3宛先に配信する際、複数レコードをバッファリングし、設定したバッファサイズまたはバッファ間隔のどちらか早い方の条件を満たすとS3オブジェクトとして配信します。そのため1件ごとに即時S3オブジェクトが作られるわけではありません。',
            },
            {
                text: 'FirehoseはS3へ1件ずつ必ず即時PUTするため、遅延がある場合はS3が停止している',
                isCorrect: false,
                explanation:
                    'Firehoseは通常、レコードをまとめてS3へ配信します。バッファリングによる遅延は設計上の動作です。S3停止と決めつけるのは誤りです。',
            },
            {
                text: 'バッファリングを使うと、S3へデータが一切保存されなくなる',
                isCorrect: false,
                explanation:
                    'バッファリングは配信の単位をまとめる仕組みであり、保存されなくなるわけではありません。バッファ条件に到達するとS3へオブジェクトとして配信されます。',
            },
            {
                text: 'FirehoseのバッファリングはAthenaのクエリ結果にだけ適用され、S3配信には関係しない',
                isCorrect: false,
                explanation:
                    'FirehoseのバッファリングはS3配信に直接関係します。Athenaのクエリ結果とは別の話です。',
            },
        ],
        explanation:
            'FirehoseはS3に小さいオブジェクトを大量生成しないよう、サイズや時間でバッファリングします。新鮮さを優先してバッファ間隔を短くすると小さいファイルが増え、Athena性能やS3リクエスト料金に影響します。分析効率を優先してバッファを大きくすると、遅延は増えますがS3上のファイルサイズは扱いやすくなりやすいです。これは設計上のトレードオフです。',
    },
    {
        question:
            'Data FirehoseでアプリログをS3へ保存する前に、個人情報をマスクし、不要なレコードを破棄したいです。処理は軽量で、配信パイプライン内で完結させたい場合、最も適切な構成はどれですか?',
        options: [
            {
                text: 'Firehoseのデータ変換でLambdaを呼び出し、各レコードにOk、Dropped、ProcessingFailedなどの結果を返す',
                isCorrect: true,
                explanation:
                    'Data Firehoseは配信前にLambdaを同期呼び出ししてデータ変換できます。Lambdaは変換済みデータと処理結果を返し、不要なレコードはDroppedとして扱えます。処理失敗はProcessingFailedとして扱われ、Firehose側の失敗処理やS3バックアップprefixの設計に関わります。',
            },
            {
                text: 'S3に保存した後でしか変換できないため、Firehoseでは配信前の変換はできない',
                isCorrect: false,
                explanation:
                    'FirehoseはLambdaによる配信前変換に対応しています。S3保存後に別処理する設計もありますが、軽量な変換やマスクならFirehose内の変換が候補になります。',
            },
            {
                text: 'FirehoseのLambda変換は最大24時間実行できるため、重いバッチ処理をすべてここで行う',
                isCorrect: false,
                explanation:
                    'FirehoseのLambda変換にはタイムアウトやペイロードサイズの制約があります。長時間の重いバッチ処理には向きません。重い処理はS3着地後に別のETLやバッチ基盤で行うことを検討します。',
            },
            {
                text: 'Firehoseの変換を使うと、S3への配信先を設定できなくなる',
                isCorrect: false,
                explanation:
                    'Firehoseの変換は、変換後のデータをS3などの宛先へ配信するための機能です。変換を有効にしてもS3宛先を設定できます。',
            },
        ],
        explanation:
            'FirehoseのLambda変換は、軽量な正規化、マスキング、フィールド追加、不要レコードの破棄に向きます。ただし同期呼び出し、タイムアウト、リクエスト/レスポンスサイズ制限があるため、複雑で重いETL処理をすべて詰め込む場所ではありません。変換失敗データをどのS3 prefixへ退避するか、元データをバックアップするかも運用設計に含めます。',
    },
    {
        question:
            'JSONログをData FirehoseでS3へ保存し、Athenaで分析します。クエリコストを下げるため、S3保存時点で列指向形式に変換したいです。最も適切な設計はどれですか?',
        options: [
            {
                text: 'Firehoseのレコード形式変換を有効化し、Glue Data Catalogのスキーマを使ってJSONをParquetまたはORCへ変換してS3へ保存する',
                isCorrect: true,
                explanation:
                    'Data Firehoseは、入力JSONをApache ParquetまたはORCへ変換してS3へ保存できます。形式変換では、Glue Data Catalogのテーブルスキーマなどを使ってデータを解釈します。Parquet/ORCは列指向で、Athenaのスキャン量やクエリ時間を減らしやすい形式です。変換失敗データの退避先も合わせて設計します。',
            },
            {
                text: 'FirehoseはJSONをParquetへ変換できないため、必ずアプリケーション側でParquetファイルを直接S3へPUTする',
                isCorrect: false,
                explanation:
                    'FirehoseはJSONからParquet/ORCへの形式変換に対応しています。アプリケーション側で直接Parquetを書けるならそれも選択肢ですが、Firehoseでマネージドに変換する構成も可能です。',
            },
            {
                text: 'CSVや任意のテキストは、Glue Data Catalogだけで何もせずParquetへ自動変換される',
                isCorrect: false,
                explanation:
                    'Firehoseの形式変換はJSON入力を前提にParquet/ORCへ変換します。CSVや構造化テキストなどJSON以外を変換したい場合は、先にLambdaでJSONへ変換するなどの処理が必要です。',
            },
            {
                text: 'Parquetへ変換すると、Athenaのパーティション設計やファイルサイズ設計は不要になる',
                isCorrect: false,
                explanation:
                    'Parquetは有効ですが、それだけで最適化が完了するわけではありません。prefix、パーティション、ファイルサイズ、小さいファイル問題、Glue Data Catalogのスキーマ管理も引き続き重要です。',
            },
        ],
        explanation:
            'ログをS3に置くだけでなく、置き方を分析向けに整えることが重要です。Firehoseの形式変換を使えば、取り込み時にJSONをParquet/ORC化して後段のAthenaやRedshift Spectrumで扱いやすくできます。ただしParquet/ORC化しても、prefix、パーティション、ファイルサイズ、小さいファイル問題、Glue Data Catalogのスキーマ管理は引き続き重要です。変換できる入力形式、スキーマ、失敗時のバックアップ先も設計します。',
    },
    {
        question:
            'アプリケーションから直接S3へログを書き込む設計と、Data Firehoseを経由してS3へ配信する設計を比較しています。Firehoseを選ぶ理由として最も適切なものはどれですか?',
        options: [
            {
                text: 'アプリ側のS3書き込み実装を単純化し、バッファリング、圧縮、変換、失敗時の再試行やバックアップをマネージドに任せやすい',
                isCorrect: true,
                explanation:
                    'Firehoseを使うと、アプリケーションはFirehoseへレコードを送るだけに近づき、S3オブジェクトのサイズ調整、バッファリング、圧縮、変換、失敗時の処理をサービス側に寄せられます。直接S3へ細かく書くより、小さいファイル問題や再試行実装を抑えやすくなります。ただし必ずFirehoseが正解ではなく、遅延・制約・コストを要件と比べます。',
            },
            {
                text: 'Firehoseを経由すれば、ログは必ず1ミリ秒以内にS3へ保存される',
                isCorrect: false,
                explanation:
                    'FirehoseはバッファリングしてからS3へ配信するため、一定の遅延が発生します。ミリ秒単位の即時保存を保証するものではありません。',
            },
            {
                text: 'Firehoseを使うと、S3のアクセス制御や暗号化設計は不要になる',
                isCorrect: false,
                explanation:
                    'Firehoseを使っても、S3バケットポリシー、IAMロール、暗号化、KMSキー権限、失敗データの保存先などの設計は必要です。',
            },
            {
                text: 'FirehoseはS3にしか配信できず、RedshiftやOpenSearchなど他の宛先には対応しない',
                isCorrect: false,
                explanation:
                    'Data FirehoseはS3のほか、Redshift、OpenSearch Service、Splunk、HTTPエンドポイントなど複数の宛先へ配信できます。S3は代表的な配信先の1つです。',
            },
        ],
        explanation:
            '直接S3書き込みは、単純な少量データやアプリ側でファイルサイズ、分割、再試行、形式を細かく制御したい場合には有効です。その代わり、それらはアプリケーション側の責務になります。一方、大量ログを継続的に集約し、分析向けに整えてS3へ蓄積したい場合はFirehoseが有力です。Firehoseは運用をマネージド化できる代わりに、near real-timeの遅延、変換制約、追加コスト、失敗時の扱い、S3 prefix設計を比較して選びます。',
    },
    {
        question:
            'モバイルアプリから数GBの動画をアップロードします。APIサーバーで動画本体を受け取ってからS3へ転送する案と、APIで認可後にS3のPresigned URLを発行し、クライアントからS3へ直接アップロードする案があります。最も適切な判断はどれですか?',
        options: [
            {
                text: 'API Gateway + Lambdaなどでユーザー認可とキー決定だけを行い、短い有効期限のPresigned URLを発行してクライアントからS3へ直接アップロードさせる',
                isCorrect: true,
                explanation:
                    '大容量ファイルをAPIサーバーで中継すると、API Gatewayのペイロードサイズ制限、Lambdaの実行時間・メモリ・同時実行数、サーバー帯域、タイムアウト、コストの制約を受けやすくなります。Presigned URLを使うと、認可済みユーザーに対して特定のS3操作を短時間だけ許可し、ファイル本体はクライアントからS3へ直接送れます。API側はキー名、サイズ、Content-Type、アップロード可能なユーザーなどを検証してからURLを発行します。',
            },
            {
                text: 'セキュリティのため、動画本体は必ずAPI GatewayとLambdaを経由してS3へ転送する',
                isCorrect: false,
                explanation:
                    'API GatewayやLambdaで大容量ファイル本体を中継すると、ペイロードサイズや実行時間、帯域、コストの制約に当たりやすくなります。認可はAPIで行い、データ転送はS3へ直接行わせる構成がよく使われます。',
            },
            {
                text: 'S3バケットをpublic writeにすれば、Presigned URLや認可APIは不要になる',
                isCorrect: false,
                explanation:
                    'public writeは誰でも書き込める危険な設定で、悪用やコスト増、マルウェア配置につながります。Presigned URLや一時認証情報で、ユーザーと操作範囲を限定します。',
            },
            {
                text: 'Presigned URLを使うと、アップロードされたオブジェクトは自動的にウイルススキャン済みになる',
                isCorrect: false,
                explanation:
                    'Presigned URLは一時的なS3操作権限を与える仕組みであり、ファイル検査を自動実行する機能ではありません。必要ならアップロード後にイベント駆動で検査や変換を行います。',
            },
        ],
        explanation:
            '大容量アップロードでは「認可」と「データ転送」を分けるのが重要です。API Gateway + Lambdaは、ユーザー認証、アップロード先prefix、ファイル種別、サイズ上限、メタデータ条件、Presigned URL発行に使います。実際のバイト列はS3へ直接送ることで、サーバー中継のボトルネックを避けられます。ただし直接アップロードでも、完了後の検証、ウイルススキャン、状態管理、公開可否の制御は別途設計します。',
    },
    {
        question:
            'Presigned URLでS3へアップロードできるようにしました。URLを受け取ったユーザーが、想定外のContent-Typeや別のキーへアップロードできないようにしたいです。最も適切な設計はどれですか?',
        options: [
            {
                text: 'API側でユーザーを認可し、許可するbucket/key、HTTPメソッド、有効期限、必要なヘッダー条件を含めてPresigned URLまたはPresigned POSTを発行する',
                isCorrect: true,
                explanation:
                    'Presigned URLは、発行に使った認証情報の権限をもとに、特定のS3操作を期限付きで許可します。PutObject用に発行したURLは、指定したbucket/keyや署名対象ヘッダーに結びつきます。ブラウザフォームでContent-Typeやサイズなどの条件を強く縛りたい場合はPresigned POSTも候補になり、content-length-rangeのような条件でアップロードサイズを制約できます。',
            },
            {
                text: 'Presigned URLを発行すれば、ユーザーは同じバケット内の任意のキーへ自由にアップロードできる',
                isCorrect: false,
                explanation:
                    'Presigned URLは署名された特定のリクエストに対して有効です。任意のキーに自由にアップロードできる包括的な認証情報を渡すものではありません。ただし発行側が広すぎる権限や不適切なkeyを許すと危険です。',
            },
            {
                text: 'Presigned URLの有効期限を長くすればするほど、アップロード可能範囲は自動的に狭くなる',
                isCorrect: false,
                explanation:
                    '有効期限を長くしても権限範囲が狭くなるわけではありません。むしろ漏えい時の悪用可能時間が長くなります。必要最小限の期限と条件で発行します。',
            },
            {
                text: 'URLをHTTPSではなくHTTPで配布すれば、署名情報が保護される',
                isCorrect: false,
                explanation:
                    'Presigned URLには署名情報が含まれるため、HTTPSで扱うべきです。HTTPで送ると盗聴や漏えいのリスクが高まります。',
            },
        ],
        explanation:
            'Presigned URLは便利ですが、発行時点の認可設計が重要です。誰が、どのprefixに、どのメソッドで、どのくらいの時間、どのContent-Typeやメタデータ条件でアップロードできるかをAPI側で決めます。Presigned POSTはフォームベースの条件指定に向き、バケットポリシー条件キーと組み合わせて暗号化方式、prefix、署名バージョン、送信元条件などをさらに制御できます。漏えい時の影響を小さくするため、有効期限は短くします。',
    },
    {
        question:
            'ブラウザからPresigned URLを使ってS3へ直接アップロードしようとしたところ、URL自体は正しいのにブラウザでCORSエラーになりました。最も適切な対応はどれですか?',
        options: [
            {
                text: 'S3バケットのCORS設定で、許可するOrigin、HTTPメソッド、ヘッダーをアップロード要件に合わせて設定する',
                isCorrect: true,
                explanation:
                    'ブラウザから別オリジンのS3へ直接アップロードする場合、S3バケット側のCORS（Cross-Origin Resource Sharing：異なるオリジン間のリクエスト制御）設定が必要です。PUTや独自ヘッダーを含むリクエストでは、事前にPreflightのOPTIONSリクエストが送られることがあります。Presigned URLの署名が正しくても、ブラウザのCORSチェックに失敗すればリクエストはブロックされます。',
            },
            {
                text: 'CORSエラーはIAM権限不足だけが原因なので、常にs3:*を許可すれば解決する',
                isCorrect: false,
                explanation:
                    'CORSとIAM権限は別の制御です。IAMや署名が正しくてもCORS設定が不足していればブラウザはブロックします。過剰なs3:*許可は最小権限に反します。',
            },
            {
                text: 'CORSを避けるには、S3バケットをpublic writeにする必要がある',
                isCorrect: false,
                explanation:
                    'public writeは不要で危険です。CORSはブラウザのクロスオリジン制御であり、公開書き込みにする必要はありません。必要なOriginとメソッドだけを許可します。',
            },
            {
                text: 'Presigned URLを使う場合、ブラウザはCORSを一切確認しない',
                isCorrect: false,
                explanation:
                    'Presigned URLを使っても、ブラウザからクロスオリジンでアクセスする場合はCORSチェックが行われます。サーバーサイドからのHTTPクライアントとブラウザでは挙動が異なります。',
            },
        ],
        explanation:
            'Presigned URLのトラブルでは、署名、期限、リージョン、HTTPメソッド、署名対象ヘッダー、CORSを分けて確認します。特にブラウザアップロードでは、PreflightのOPTIONS、PUTやPOST、Content-Type、x-amz-*ヘッダーをCORSで許可しているかが重要です。CORSはブラウザ側の制約なので、サーバーサイドのHTTPクライアントでは同じ失敗にならないことがあります。',
    },
    {
        question:
            '10GBの動画をPresigned URLでS3へアップロードしたいです。単一PUTでは失敗時の再送が重く、安定しません。クライアントから直接S3へ大容量アップロードする設計として最も適切なものはどれですか?',
        options: [
            {
                text: 'Multipart Uploadを使い、各パート用のPresigned URLを発行してクライアントが並列アップロードし、最後にCompleteMultipartUploadする',
                isCorrect: true,
                explanation:
                    '大容量ファイルではMultipart Uploadを使うと、パート単位で並列アップロードや再送ができます。Presigned URLを各UploadPartに対して発行し、クライアントがS3へ直接パートを送信します。最後にUploadId、PartNumber、各パートのETagを使ってCompleteMultipartUploadを呼び、1つのオブジェクトとして確定します。',
            },
            {
                text: '10GBのファイルは必ずAPI Gateway経由でLambdaへ送り、Lambdaのメモリに全体を載せてからS3へPUTする',
                isCorrect: false,
                explanation:
                    'API GatewayやLambdaで10GBのファイル本体を中継する設計は、ペイロードサイズ、実行時間、メモリ、帯域の制約に合いません。大容量ファイルはS3 Multipart Uploadで直接アップロードさせる方が自然です。',
            },
            {
                text: 'Presigned URLではMultipart Uploadを使えないため、5GBを超えるオブジェクトはアップロードできない',
                isCorrect: false,
                explanation:
                    'Presigned URLはUploadPartなどのS3操作にも使えます。5GBを超えるオブジェクトではMultipart Uploadが必要で、各パートに対して署名付きURLを発行する設計ができます。',
            },
            {
                text: 'S3 Transfer Accelerationを有効化すれば、Multipart Uploadの完了処理やパート管理は不要になる',
                isCorrect: false,
                explanation:
                    'Transfer Accelerationは長距離転送の最適化であり、Multipart Uploadのパート管理や完了処理を不要にする機能ではありません。必要に応じて両方を組み合わせます。',
            },
        ],
        explanation:
            'Presigned URLとMultipart Uploadを組み合わせると、大容量ファイルをサーバーで中継せずにアップロードできます。ただし、API側はUploadIdの管理、各パートURL発行、PartNumberとETagの管理、完了/中止処理、期限切れ時の再発行、未完了Multipart Uploadの清掃を設計する必要があります。失敗時にAbortMultipartUploadを呼ばないと、未完了パートの課金が残ります。',
    },
    {
        question:
            'Presigned URLを7日間有効にしてファイル共有したいです。発行には一時的なSTS認証情報を使っており、その認証情報は1時間で期限切れになります。この場合の挙動として最も適切なものはどれですか?',
        options: [
            {
                text: 'Presigned URLは指定した期限より前でも、発行に使った一時認証情報が失効すると使えなくなる',
                isCorrect: true,
                explanation:
                    'Presigned URLは、発行に使った認証情報に基づいて署名されます。一時認証情報で発行した場合、URLのExpiresInを長くしても、その認証情報が期限切れ、無効化、削除されるとPresigned URLも使えなくなります。実効期限は、URLに指定した期限と認証情報の期限の短い方です。',
            },
            {
                text: 'Presigned URLは常に指定したExpiresInだけ有効で、発行元の認証情報の期限とは無関係である',
                isCorrect: false,
                explanation:
                    '発行元の認証情報が失効すると、Presigned URLも使えなくなります。一時認証情報を使う場合は、URLの有効期限と認証情報の有効期限の短い方が実質的な上限になります。',
            },
            {
                text: 'Presigned URLは一度発行すると、認証情報が削除されても永久に使える',
                isCorrect: false,
                explanation:
                    'Presigned URLは永久権限ではありません。期限付きであり、発行元の認証情報の状態にも影響されます。',
            },
            {
                text: 'Presigned URLは有効期限を設定できないため、必ず1分で期限切れになる',
                isCorrect: false,
                explanation:
                    'Presigned URLには有効期限を設定できます。AWS CLIやSDKでは最大7日まで指定できますが、一時認証情報で発行する場合はその認証情報の期限にも制約されます。',
            },
        ],
        explanation:
            'Presigned URLの有効期限は、指定したExpiresInだけでなく、発行に使った認証情報の寿命にも左右されます。AWS CLI/SDKでは最大7日、S3コンソールでは最大12時間など、発行方法による上限もあります。AssumeRole、Cognito、IAMユーザーなど、発行元の認証情報の種類でも実効上限が変わります。長すぎるPresigned URLは漏えい時の影響が大きいため、用途に応じて短い期限にするのが基本です。',
    },
    {
        question:
            'ユーザーがPresigned URLでS3へアップロードした後、ウイルススキャン、メタデータ登録、サムネイル生成などを行いたいです。アップロードAPIの応答を速く保ちつつ、後続処理も確実に実行したい場合、最も適切な設計はどれですか?',
        options: [
            {
                text: 'Presigned URLでS3へ直接アップロードさせ、ObjectCreatedイベントをEventBridgeやSQS/Lambdaへ連携して後続処理を非同期に実行する',
                isCorrect: true,
                explanation:
                    '大容量ファイル本体はS3へ直接アップロードさせ、アップロード完了後の処理はS3イベントを起点に非同期で実行すると、APIの応答性と後続処理の分離を両立できます。SQSを挟めばバースト吸収、再試行、DLQ設計がしやすくなり、複数ステップの検査や変換が必要ならStep Functionsでワークフロー化する選択肢もあります。',
            },
            {
                text: 'アップロードAPI内で動画全体を受け取り、スキャンとサムネイル生成が完了するまで同期的に待ってからS3へ保存する',
                isCorrect: false,
                explanation:
                    '大容量ファイル処理をAPIリクエスト内で同期実行すると、タイムアウトやスケール、ユーザー体験の問題が出やすくなります。アップロードと後続処理は分離する方が実務的です。',
            },
            {
                text: 'Presigned URLでアップロードすれば、S3が自動的にウイルススキャンとサムネイル生成を行う',
                isCorrect: false,
                explanation:
                    'S3はオブジェクトを保存するサービスであり、Presigned URLだけでウイルススキャンやサムネイル生成が自動実行されるわけではありません。必要な処理はイベント駆動で別途実装します。',
            },
            {
                text: '後続処理が必要な場合、S3への直接アップロードは使えない',
                isCorrect: false,
                explanation:
                    'S3直接アップロードと後続処理は両立できます。S3 Event Notifications、EventBridge、SQS、Lambda、Step Functionsなどを組み合わせて処理パイプラインを構成します。',
            },
        ],
        explanation:
            'アップロード設計では、Presigned URLによる直接アップロード、S3イベント、非同期処理を組み合わせるとスケールしやすくなります。アップロード直後のオブジェクトを未検査prefixに置き、検査済みprefixや公開prefixへ移動する、メタデータDBで状態管理する、失敗時に隔離するなどの運用も重要です。同期APIで全部処理するより、アップロード、検査、公開を段階に分ける方が障害時の復旧もしやすくなります。',
    },
    {
        question:
            'S3オブジェクトへGetObjectしたところ、あるユーザーでは403 AccessDenied、別のユーザーでは404 Not Foundのように見えます。実際にオブジェクトが存在するかも含めて切り分けたい場合、最も適切な考え方はどれですか?',
        options: [
            {
                text: 'GetObject権限、ListBucket権限、バケットポリシーの明示的Deny、Block Public Access、KMS権限、VPC Endpoint条件を順に確認する',
                isCorrect: true,
                explanation:
                    'S3の403/404は、単に「存在しない」「存在する」だけでは判断できません。対象キーへのGetObject/HeadObject権限、バケットに対するListBucket権限、バケットポリシーやIAMポリシーの明示的Deny、Block Public Access、SSE-KMSならKMS権限、aws:SourceVpceなどの条件を切り分けます。ListBucket権限がないと、存在確認を隠すため、存在しないキーでも403になることがあります。',
            },
            {
                text: '404が返る場合は、必ずS3内部でデータが消失している',
                isCorrect: false,
                explanation:
                    '404はキーが存在しない場合に返ることがありますが、バージョニング、削除マーカー、キー名の大文字小文字、prefixの誤り、アクセス権限の見え方なども確認が必要です。S3内部のデータ消失と決めつけるのは不適切です。',
            },
            {
                text: '403が返る場合は、IAMユーザーにAdministratorAccessを付ければ原因調査は不要になる',
                isCorrect: false,
                explanation:
                    'AdministratorAccessを付けても、バケットポリシー、SCP、VPC Endpointポリシー、KMSキーポリシー、明示的Denyなどで拒否されることがあります。過剰権限で隠すのではなく、どのレイヤーで拒否されているかを調査します。',
            },
            {
                text: 'S3はStrong consistencyではないため、GetObjectの403/404は数日待つまで判断できない',
                isCorrect: false,
                explanation:
                    'S3は現在、PUT、DELETE、LISTなどに対して強い整合性を提供します。数日待てば必ず解決するという考え方ではなく、権限、キー、バージョン、削除マーカー、KMS、ネットワーク条件を確認します。',
            },
        ],
        explanation:
            'S3アクセス障害の切り分けでは、IAMだけを見ても不十分です。実務では、リクエストしたprincipal、bucket/key、versionId、HTTPメソッド、リージョン、IAM、バケットポリシー、明示的Deny/SCP、Block Public Access、Object Ownership、KMS、VPC Endpoint、CloudFront、Browser/CORSを順に確認します。CloudTrail Data Eventsを有効化していれば、実際の拒否理由や呼び出し元の確認にも役立ちます。403/404は「表示上の結果」であり、原因は複数レイヤーにまたがることがあります。',
    },
    {
        question:
            '静的画像を一時的に公開するため、オブジェクトにpublic-read ACLを付けたのにインターネットからアクセスできません。現在のS3運用として最も疑うべき原因の組み合わせはどれですか?',
        options: [
            {
                text: 'Block Public Access、Object OwnershipのBucket owner enforced、バケットポリシーの許可不足、アカウントレベル設定を確認する',
                isCorrect: true,
                explanation:
                    '現在のS3では、public-read ACLを付ければ必ず公開されるとは限りません。Block Public Accessが有効なら公開ACLや公開バケットポリシーがブロックされます。Object OwnershipがBucket owner enforcedの場合、ACLは無効化されます。さらにアカウントレベルのBlock Public Accessはバケットレベルより広く、優先度が高い制御として効くため、両方を確認します。',
            },
            {
                text: 'S3 Standard以外のストレージクラスでは、public-read ACLを付けてもHTTPアクセスできない',
                isCorrect: false,
                explanation:
                    '公開可否はストレージクラスではなく、アクセス制御、Block Public Access、オブジェクト状態、復元状態などに依存します。Glacier系で未復元なら取得できない場合はありますが、public-read ACLの可否とは別の問題です。',
            },
            {
                text: 'バケット名にハイフンが含まれていると、S3はすべての公開アクセスを拒否する',
                isCorrect: false,
                explanation:
                    'バケット名にハイフンが含まれていても、それだけで公開アクセスが拒否されるわけではありません。バケット名の命名規則とアクセス制御は別の論点です。',
            },
            {
                text: 'SSE-S3で暗号化されたオブジェクトは、どのような権限を設定しても公開できない',
                isCorrect: false,
                explanation:
                    'SSE-S3はS3管理キーによるサーバー側暗号化であり、適切なS3アクセス権限があれば取得できます。公開すべきかは別として、SSE-S3そのものが公開アクセスを常に不可能にするわけではありません。',
            },
        ],
        explanation:
            '「公開したはずなのに見えない」問題では、ACLだけを見ると誤ります。ACLはレガシー寄りの制御であり、現在はBucket owner enforcedでACLを無効化し、ポリシーベースで制御する設計が推奨されます。公開が必要な場合でも、S3バケットを直接publicにするより、CloudFront + OACで配信経路を限定し、必要に応じて署名付きURLや最小権限のバケットポリシーを使う構成が一般的です。',
    },
    {
        question:
            'Webアプリの画像はCloudFront経由では正常に表示されますが、S3のREST APIエンドポイントへ直接アクセスすると403になります。この構成の説明として最も適切なものはどれですか?',
        options: [
            {
                text: '非公開S3バケットにOACを設定し、CloudFrontサービスプリンシパルからのアクセスだけをバケットポリシーで許可している可能性が高い',
                isCorrect: true,
                explanation:
                    '非公開S3バケットをCloudFront経由だけで配信する構成では、OAC（Origin Access Control）を使い、バケットポリシーでCloudFrontサービスプリンシパルと特定distributionのAWS:SourceArn条件を許可します。この場合、S3 REST APIエンドポイントへの直アクセスが403になるのは意図した挙動です。',
            },
            {
                text: 'CloudFront経由で見えるなら、S3バケットは必ずpublic readである',
                isCorrect: false,
                explanation:
                    'CloudFront経由で表示できても、S3バケットがpublicであるとは限りません。むしろ実務では、S3直アクセスを拒否し、CloudFrontからのアクセスだけを許可する構成がよく使われます。',
            },
            {
                text: 'CloudFrontはS3の権限を完全に無視してオブジェクトを取得する',
                isCorrect: false,
                explanation:
                    'CloudFrontもオリジンであるS3へアクセスするための許可が必要です。OACやOAI、バケットポリシー、KMS暗号化ならKMS権限などを正しく設定します。',
            },
            {
                text: 'S3直アクセスで403になる場合、CloudFrontのキャッシュは必ず空である',
                isCorrect: false,
                explanation:
                    'S3直アクセスの403とCloudFrontキャッシュの有無は別です。CloudFrontが過去に取得したオブジェクトをキャッシュしている場合もありますし、OACで現在も取得できている場合もあります。切り分けにはキャッシュ状態、オリジンアクセス、Invalidation、レスポンスヘッダーを確認します。',
            },
        ],
        explanation:
            'CloudFront配信では「CloudFrontで見えるか」と「S3直アクセスできるか」は分けて考えます。非公開配信では、S3直アクセスを拒否し、CloudFrontだけを許可するのが安全な設計です。障害時は、OAC/OAI、バケットポリシー、AWS:SourceArn、KMS権限、CloudFrontキャッシュ、オリジンエンドポイント種別を確認します。S3 REST APIエンドポイントはOACで非公開オリジンにしやすい一方、S3 Website endpointはHTTPのみでOACの対象ではないため、要件に応じて選びます。CloudFrontキャッシュにより、一時的にオリジン障害や権限変更が見えづらいこともあります。',
    },
    {
        question:
            'S3へ画像をアップロードしてもLambdaが起動しません。S3 Event Notificationsを使った構成のトラブルシューティングとして、最も適切な確認項目はどれですか?',
        options: [
            {
                text: 'イベント種別、prefix/suffixフィルター、Lambdaのリソースベースポリシー、同一リージョン、送信先設定、CloudWatch Logsを確認する',
                isCorrect: true,
                explanation:
                    'S3からLambdaを起動するには、ObjectCreatedなどのイベント種別、prefix/suffixフィルター、Lambda関数を呼び出すためのリソースベースポリシー、同一リージョン、通知設定が正しい必要があります。Lambda側にはlambda:AddPermission相当でS3からのInvokeFunctionを許可します。ファイル名がsuffix条件に合わない、出力prefixと入力prefixが重なって再帰を避けるために除外されている、権限がない、といった原因がよくあります。',
            },
            {
                text: 'S3 Event NotificationsはLambdaを直接起動できないため、必ずSNSを挟む必要がある',
                isCorrect: false,
                explanation:
                    'S3 Event NotificationsはLambdaを直接宛先にできます。SNS、SQS、EventBridgeは、ファンアウト、バッファリング、柔軟なルーティングなどが必要な場合に検討します。',
            },
            {
                text: 'S3イベントは必ず1秒以内に1回だけ届くため、少し待って起動しなければS3障害である',
                isCorrect: false,
                explanation:
                    'S3イベントは少なくとも1回配信の前提で、重複や遅延が起き得ます。起動しない場合はS3障害と決めつけず、通知設定、フィルター、権限、宛先側のエラー、CloudWatch Logsを確認します。',
            },
            {
                text: 'Lambdaが起動しない場合、S3バケットをpublicにすればイベント通知が有効になる',
                isCorrect: false,
                explanation:
                    'S3イベント通知はバケットのpublic設定とは別です。公開設定を広げてもLambda起動の権限やイベント設定は解決しません。',
            },
        ],
        explanation:
            'S3イベント処理の障害では、イベントが発生していないのか、フィルターで除外されているのか、S3が宛先を呼べないのか、宛先側で失敗しているのかを分けて見ます。Lambda直呼びならLambdaのリソースベースポリシーと同一リージョン制約、SQSならキューポリシー、S3からEventBridge経由ならEventBridgeルールとターゲット、いずれもログとメトリクスで確認します。再帰ループ防止のため、入力prefixと出力prefixを分ける設計も重要です。',
    },
    {
        question:
            'SSE-KMSで暗号化されたS3オブジェクトだけGetObjectがAccessDeniedになります。同じIAMロールはSSE-S3のオブジェクトなら読めます。最も疑うべき原因はどれですか?',
        options: [
            {
                text: 'S3のGetObject権限はあるが、対象KMSキーのkms:Decrypt権限またはキーポリシー許可が不足している',
                isCorrect: true,
                explanation:
                    'SSE-KMSのオブジェクトを読むには、S3のGetObject権限に加えて、対象KMSキーでの復号権限が必要です。IAMポリシーだけでなく、KMSキーポリシー、クロスアカウント許可、キーのリージョン、kms:ViaService条件、キーの無効化や削除待ち状態、明示的Denyも確認します。PUTやMultipart Uploadではkms:GenerateDataKeyが関係する場合もあります。',
            },
            {
                text: 'SSE-KMSで暗号化されたオブジェクトは、所有者であっても永遠に読み取れない',
                isCorrect: false,
                explanation:
                    'SSE-KMSでも、適切なS3権限とKMS権限があれば読み取れます。AccessDeniedは権限設計やキー状態の問題として切り分けます。',
            },
            {
                text: 'SSE-S3のオブジェクトが読めるなら、KMS権限も必ず十分である',
                isCorrect: false,
                explanation:
                    'SSE-S3はS3管理キーを使うため、利用者がKMSキー権限を直接持つ必要はありません。SSE-S3が読めることと、SSE-KMSのKMSキーを使えることは別です。',
            },
            {
                text: 'GetObjectのAccessDeniedは常にCORS設定が原因である',
                isCorrect: false,
                explanation:
                    'ブラウザではCORSが関係することがありますが、SSE-KMSオブジェクトだけ失敗するならKMS権限が有力です。CORS、S3権限、KMS権限、VPC Endpoint条件などを分けて確認します。',
            },
        ],
        explanation:
            'KMS絡みのS3 AccessDeniedは実務で頻出です。S3の許可があっても、KMSキー側でDecryptやGenerateDataKeyが許可されていなければ失敗します。特にクロスアカウントでは、IAMポリシーだけでなくキーポリシー側の許可も必須です。CloudFront OAC、Replication、Athena、Lambdaなどサービス連携時は、サービスロール、キーポリシー、IAMポリシー、kms:ViaService条件、キー状態、リージョン一致をまとめて確認します。',
    },
    {
        question:
            'バージョニング有効なS3バケットでLifecycleのExpirationを設定しましたが、想定ほどストレージ使用量が減りません。最も適切な原因分析はどれですか?',
        options: [
            {
                text: 'Expirationは現行バージョンに削除マーカーを追加する場合があり、非現行バージョン削除、削除マーカー整理、Object Lock、フィルター条件、処理の非同期性を確認する',
                isCorrect: true,
                explanation:
                    'バージョニング有効バケットでは、Expirationにより現行バージョンが削除マーカーで隠れるだけで、過去の非現行バージョンが残ることがあります。容量削減にはNoncurrentVersionExpirationや、削除マーカーだけが残った場合に整理するExpiredObjectDeleteMarkerの設計が必要です。Object Lock、Legal Hold、Lifecycle Filter、Glacier系ストレージクラスの最低保存期間課金、処理の非同期性も確認します。',
            },
            {
                text: 'Lifecycleルールは設定した時刻に必ず秒単位で実行されるため、即時に容量が減らなければ設定ミスである',
                isCorrect: false,
                explanation:
                    'Lifecycle処理は非同期で、条件到達直後に即時反映されるとは限りません。しばらく遅れて処理されることがあります。即時性だけで判断せず、条件、対象、バージョニング、Object Lockを確認します。',
            },
            {
                text: 'Expirationを設定すれば、非現行バージョンも削除マーカーもObject Lock中のバージョンもすべて即時削除される',
                isCorrect: false,
                explanation:
                    'Expiration、NoncurrentVersionExpiration、ExpiredObjectDeleteMarkerは役割が異なります。またObject Lockの保持期間中やLegal Hold中のオブジェクトバージョンは削除できません。',
            },
            {
                text: 'S3 Intelligent-Tieringを有効化すれば、Lifecycleの削除失敗は自動的に修復される',
                isCorrect: false,
                explanation:
                    'Intelligent-Tieringはアクセス頻度に応じた階層化の仕組みであり、Lifecycle削除ルールやObject Lockの制約を自動修復する機能ではありません。',
            },
        ],
        explanation:
            'Lifecycleトラブルでは、「削除扱い」と「物理的に課金対象が減る」ことを分けて考えます。バージョニング、削除マーカー、非現行バージョン、Object Lock、Legal Hold、Filter、prefix/tag条件、最低保存期間、Glacier復元状態、Lifecycleの非同期性を確認します。大量オブジェクトではS3 Inventoryを出力し、Athenaで非現行バージョン、ストレージクラス、Object Lock状態、Replication statusを棚卸しするのが実務的です。',
    },
    {
        question:
            'S3からEventBridge経由で起動する処理が、同じオブジェクトに対して複数回実行され、まれに処理順序も前後します。最も適切な設計上の対策はどれですか?',
        options: [
            {
                text: 'S3イベントはat-least-onceで順序保証なしと考え、versionIdやsequencerなどを使った冪等性、処理済み管理、条件付き書き込みを実装する',
                isCorrect: true,
                explanation:
                    'S3イベント連携では、重複イベントや順序の前後を前提に設計します。バージョニング有効ならversionId、同一オブジェクト内の順序判断を補助するsequencer、bucket/key、ETag、メタデータなどを組み合わせ、DynamoDBの条件付き書き込みなどで処理済みを管理します。ETagはMultipart Uploadや暗号化条件で単純なMD5とは限らない点にも注意します。',
            },
            {
                text: 'EventBridgeを使えば、S3イベントは必ず1回だけ順序通りに配信される',
                isCorrect: false,
                explanation:
                    'EventBridgeを使っても、すべてのS3イベント処理が厳密に1回だけ順序通りになるわけではありません。重複や再試行を考慮し、アプリケーション側で冪等性を持たせます。',
            },
            {
                text: '重複を避けるには、Lambdaのタイムアウトを0秒にする',
                isCorrect: false,
                explanation:
                    'タイムアウトを極端に短くしても重複防止にはなりません。むしろ失敗や再試行を増やす可能性があります。処理済み管理、リトライ設計、DLQ、可観測性を整えます。',
            },
            {
                text: 'S3イベントの重複はバケットをpublicにすれば解消する',
                isCorrect: false,
                explanation:
                    'イベント重複とバケット公開設定は関係ありません。公開範囲を広げるとセキュリティリスクが増えます。',
            },
        ],
        explanation:
            'イベント駆動のトラブルでは、配信基盤に「一度だけ」「順序通り」を期待しすぎないことが重要です。SQS FIFOを組み合わせても、MessageGroupIdや重複排除ID、再試行、下流処理の冪等性設計が必要で、全体が自動的にexactly-onceになるわけではありません。S3 Event Notifications、EventBridge、SQS標準キュー、Lambda再試行を含め、重複、遅延、再実行を前提に、冪等な出力、処理済みテーブル、DLQ、リプレイ手順を設計します。',
    },
    {
        question:
            'ブラウザからS3へPresigned URLでPUTすると、開発者ツールではCORSエラーに見えます。一方、同じURLをcurlで実行すると403 SignatureDoesNotMatchになります。最も適切な切り分け方はどれですか?',
        options: [
            {
                text: 'CORSだけでなく、HTTPメソッド、リージョン、期限、署名対象ヘッダー、Content-Typeの一致、クライアント時刻ずれを確認する',
                isCorrect: true,
                explanation:
                    'ブラウザではCORSエラーとして見えていても、実際にはPreflight、署名不一致、期限切れ、リージョン違い、HTTPメソッド違い、Content-Typeやx-amz-*ヘッダーの不一致、クライアント時刻ずれが絡むことがあります。Presigned URLは署名時の条件と実リクエストが一致している必要があります。',
            },
            {
                text: 'curlで403になるなら、ブラウザのCORS設定は必ず正しい',
                isCorrect: false,
                explanation:
                    'curlはブラウザのCORS制約を受けません。curlで403になる署名問題と、ブラウザのCORS設定不足が同時に存在することもあります。別々に切り分けます。',
            },
            {
                text: 'CORSエラーは必ずS3の障害なので、アプリケーション側で確認できる項目はない',
                isCorrect: false,
                explanation:
                    'CORSエラーの多くは、AllowedOrigins、AllowedMethods、AllowedHeaders、署名対象ヘッダー、Content-Type、HTTPメソッドの不一致など設定や実装で切り分けられます。',
            },
            {
                text: 'SignatureDoesNotMatchは、S3バケットをpublicにすれば無視される',
                isCorrect: false,
                explanation:
                    '署名付きリクエストの署名不一致は、バケットを公開して解決するものではありません。公開設定を広げるのではなく、署名生成と実リクエストの差分を確認します。',
            },
        ],
        explanation:
            'ブラウザアップロードの障害では、ブラウザに表示されるCORSエラーだけを鵜呑みにしないことが重要です。Preflightの成否、実リクエストのステータス、S3のエラーコード、署名生成時のメソッド・ヘッダー・リージョン・期限・時刻、CORSのAllowedHeadersを分けて確認します。Content-Typeが署名時と実送信で違う、ブラウザやライブラリがヘッダーを自動追加する、x-amz-content-sha256やhostヘッダーが想定と違う、といった差分もSignatureDoesNotMatchの原因になります。',
    },
    {
        question:
            'S3にアップロードされたCSVファイルを、検証、形式変換、保存、通知の順に処理したいです。検証結果に応じた分岐、ステップごとの再試行、失敗時の通知、処理状態の追跡も必要です。最も適切な設計はどれですか?',
        options: [
            {
                text: 'S3イベントを起点にStep Functionsを開始し、Lambdaなどのタスクを検証、変換、保存、通知の各ステップとして定義する',
                isCorrect: true,
                explanation:
                    '複数ステップの処理、分岐、再試行、タイムアウト、失敗時処理、状態管理が必要な場合は、Step Functionsでワークフローとして表現するのが適しています。S3からStep Functionsを直接起動するというより、S3イベントをEventBridgeやLambda経由でStep Functions開始につなげる構成が一般的です。各処理はLambdaやAWS SDK連携に分割します。',
            },
            {
                text: 'S3 Lifecycleルールだけで、CSV検証、形式変換、通知まで順序制御する',
                isCorrect: false,
                explanation:
                    'S3 Lifecycleはストレージクラス移行や期限切れ削除のための仕組みであり、任意のファイル検証、変換、通知のワークフローを順序制御する機能ではありません。',
            },
            {
                text: '1つの巨大なLambda関数にすべての処理を詰め込み、分岐や再試行は関数内のwhileループで実装する',
                isCorrect: false,
                explanation:
                    '単純な処理なら1つのLambdaでも足りますが、複数ステップ、分岐、再試行、状態管理、失敗時の再開が必要な場合は関数が複雑になりやすいです。Step Functionsでステップを分けると、どこで失敗したかを追いやすくなります。',
            },
            {
                text: 'S3バケットポリシーに処理順序を書けば、アップロード後の検証と通知を自動実行できる',
                isCorrect: false,
                explanation:
                    'バケットポリシーはアクセス制御の仕組みであり、処理ワークフローを定義するものではありません。処理の起動にはS3イベント、EventBridge、Lambda、Step Functionsなどを使います。',
            },
        ],
        explanation:
            '単発のサムネイル生成ならS3 Event NotificationsからLambda直呼びでも十分な場合があります。一方、検証、変換、保存、通知のように段階があり、分岐や再試行、失敗時通知、状態追跡が必要ならStep Functionsが候補になります。長時間実行、監査性、実行履歴、確実な状態追跡を重視するならStandard Workflow、短時間・高頻度・高スループット寄りならExpress Workflowも候補です。S3は保存、EventBridgeはイベントルーティング、Lambdaは個別処理、Step Functionsは処理全体の状態管理という役割で分けます。',
    },
    {
        question:
            'S3にアップロードされたファイルを処理するLambdaが、外部APIの一時障害で失敗することがあります。処理量のバーストもあり、後続処理を一定ペースで進めたいです。Step Functionsを使う前に、最も自然に検討すべき構成はどれですか?',
        options: [
            {
                text: 'S3イベントをSQSに入れ、Lambdaがキューからバッチ処理し、Visibility Timeout、DLQ、同時実行数で処理量と再試行を制御する',
                isCorrect: true,
                explanation:
                    '単一処理のバースト吸収や再試行制御が主目的なら、SQSを挟む構成が自然です。Lambdaの同時実行数やバッチサイズで処理量を制御し、Visibility TimeoutをLambda処理時間より十分長く設定し、DLQで失敗時の隔離を設計できます。複数ステップの分岐や長い状態管理が必要になったらStep Functionsを検討します。',
            },
            {
                text: 'S3からLambdaを直接起動すれば、下流APIのレート制限に合わせて自動的に処理量が完全制御される',
                isCorrect: false,
                explanation:
                    'Lambda直呼びはシンプルですが、バースト吸収や下流の処理量制御は弱くなりがちです。外部APIのレート制限や一時障害がある場合は、SQSを挟んで処理を平準化する設計が有効です。',
            },
            {
                text: 'SNSを使えば、メッセージは必ず1件ずつ順序通りに処理されるため、SQSは不要である',
                isCorrect: false,
                explanation:
                    'SNSはPub/Sub通知やファンアウトに向くサービスで、処理の平準化やコンシューマー側のペース制御はSQSの方が向いています。SNSから複数SQSへ配る構成もよく使われます。',
            },
            {
                text: 'EventBridgeを使うと、失敗した外部API呼び出しの処理状態を自動的に永続管理し、途中から再開できる',
                isCorrect: false,
                explanation:
                    'EventBridgeはイベントルーティングに強いサービスですが、複数ステップの状態管理や途中再開を自動で担うものではありません。状態を持つワークフローにはStep Functions、バッファリングにはSQSを検討します。',
            },
        ],
        explanation:
            'Lambda直呼び、SQS経由、EventBridge、Step Functionsは役割が違います。シンプルさならLambda直呼び、バースト吸収、再試行、平準化ならSQS、イベント内容によるルーティングならEventBridge、状態遷移、分岐、再試行、可視化ならStep Functionsです。SQSは状態管理サービスではなく、処理待ちメッセージを保持してコンシューマーのペースに合わせるキューです。SQS、SNS、EventBridgeは似て見えますが、キュー、通知、イベントバスという目的の違いで選びます。',
    },
    {
        question:
            'S3にアップロードされたファイルの種類によって、画像ならサムネイル生成、CSVならGlueジョブ、動画なら長時間の変換処理へ分岐したいです。後から処理対象も増える予定です。最も適切な設計はどれですか?',
        options: [
            {
                text: 'S3イベントをEventBridgeに送り、イベントパターンで対象を振り分け、必要に応じてStep FunctionsやLambdaをターゲットにする',
                isCorrect: true,
                explanation:
                    'EventBridgeはイベントパターンに基づくルーティングやターゲット追加に向きます。単純に1つのLambdaを起動するだけならS3 Event Notificationsで足りますが、ファイル種別ごとの分岐、複数ターゲット、ルール分割、将来拡張がある場合はEventBridgeを挟むと疎結合にしやすくなります。複数ステップの処理はStep Functionsへ渡します。',
            },
            {
                text: 'S3 Event NotificationsはEventBridgeより常に高機能なので、複数サービスへの分岐にも必ず単独で使う',
                isCorrect: false,
                explanation:
                    'S3 Event Notificationsはシンプルな宛先連携に向きますが、複雑なルーティングや将来のターゲット追加ではEventBridgeの方が扱いやすい場合があります。どちらが常に上位というより、要件で使い分けます。',
            },
            {
                text: 'バケットACLに画像、CSV、動画の処理先を設定すれば、S3が自動で分岐する',
                isCorrect: false,
                explanation:
                    'ACLはアクセス制御であり、イベントルーティングや処理分岐の設定ではありません。現在はACLよりもBucket owner enforcedとポリシーベースのアクセス制御が推奨されます。',
            },
            {
                text: 'CloudFront signed URLを使えば、S3アップロード後の処理分岐を自動で実行できる',
                isCorrect: false,
                explanation:
                    'CloudFront signed URLはCloudFront経由の配信アクセスを制限する仕組みです。S3アップロード後のイベントルーティングや処理分岐には、S3イベント、EventBridge、Lambda、Step Functionsなどを使います。',
            },
        ],
        explanation:
            'S3 Event NotificationsとEventBridgeの比較では、単純な起動か、柔軟なルーティングかを見ます。ただしEventBridgeは大量データの処理バッファそのものではないため、高スループットの平準化にはSQS、継続的なログ配信にはFirehoseが向く場合があります。CloudFront signed URLとS3署名付きURLの比較では、配信経路を制限するのか、S3へ直接アップロード/ダウンロードさせるのかを見ます。処理パイプラインでは、アクセス制御、イベントルーティング、ワークフロー管理を混同しないことが重要です。',
    },
    {
        question:
            '大量のアプリケーションログをS3に蓄積し、一部は取り込み時に軽く変換し、後でAthenaで月次分析します。Step Functionsで全ログを1件ずつ処理する案と、Kinesis Data FirehoseでS3へ配信する案を比較しています。最も適切な判断はどれですか?',
        options: [
            {
                text: '継続的な大量ログ配信、バッファリング、圧縮、軽い変換、S3保存が中心ならFirehoseを優先し、複雑なファイル単位ワークフローにはStep Functionsを使い分ける',
                isCorrect: true,
                explanation:
                    'Data FirehoseはログやストリーミングデータをS3などへnear real-timeにマネージド配信する用途に向きます。バッファリング、圧縮、Parquet/ORC形式変換、失敗時のバックアップをサービス側に寄せられ、小さいファイル問題を抑えやすくなります。一方、Step Functionsはファイル単位の検証、承認、変換、通知など、状態を持つ複数ステップのワークフローに向きます。',
            },
            {
                text: 'Firehoseを使うとAthenaではクエリできなくなるため、必ずStep FunctionsでS3へ1件ずつPutObjectする',
                isCorrect: false,
                explanation:
                    'FirehoseでS3へ保存したデータも、形式、prefix、パーティション、Glue Data Catalogを適切に設計すればAthenaで分析できます。むしろログ分析ではFirehoseとS3 + Athenaの組み合わせがよく使われます。',
            },
            {
                text: 'Athenaを使う場合、必ずRDSへ全ログをロードしてからSQLを実行する',
                isCorrect: false,
                explanation:
                    'AthenaはS3上のデータを直接クエリできるサーバーレス分析サービスです。オンライン更新や低レイテンシのトランザクションにはRDS、DWHやBI統合にはRedshift、低頻度やアドホックな大規模ログ分析にはS3 + Athenaが候補になります。',
            },
            {
                text: 'Intelligent-Tieringを有効化すれば、ログの取り込み、変換、パーティション作成、Athenaテーブル作成がすべて自動化される',
                isCorrect: false,
                explanation:
                    'Intelligent-Tieringはアクセス頻度に応じたストレージ階層化の仕組みです。ログの取り込み、変換、パーティション設計、Glue Data Catalog登録、Athenaテーブル作成を自動で完了させるものではありません。',
            },
        ],
        explanation:
            'S3直接書き込みとFirehoseの比較では、アプリ側でファイルサイズや再試行を細かく制御するか、マネージドなバッファリングと配信に寄せるかを見ます。Firehoseは1件ごとの詳細な状態管理には向かず、Step Functionsで全ログを1件ずつ処理するのはコストと運用面で過剰になりがちです。Athena、RDS、Redshiftの比較では、S3上の低コスト分析、オンラインDB、DWHのどれが要件に合うかを判断します。Intelligent-TieringとLifecycleは保存コスト最適化の比較軸であり、処理パイプラインそのものの代替ではありません。',
    },
    {
        question:
            'S3を中心にした設計レビューで、複数の候補サービスが混ざっています。比較軸の整理として最も適切なものはどれですか?',
        options: [
            {
                text: 'アクセス制御はIAM/バケットポリシー/ACL、配信はCloudFront/S3直配信、イベントはS3 Event Notifications/EventBridge、処理制御はSQS/Step Functions、保護はReplication/Backup/Object Lock/Versioningで役割を分ける',
                isCorrect: true,
                explanation:
                    'S3設計では、似た選択肢を役割で分けることが重要です。IAMポリシーはprincipal側、バケットポリシーはリソース側、ACLは現在の新規設計では基本的に非推奨寄りのオブジェクト単位制御です。CloudFrontは配信、S3直配信は単純アクセスです。S3 Event Notificationsは単純イベント連携、EventBridgeはルーティング、SQSはバッファリング、Step Functionsは状態管理です。Replicationは別場所への複製、Backupは復元点保持、Object LockはWORM保持、Versioningは過去バージョン保持です。',
            },
            {
                text: 'IAMポリシー、バケットポリシー、ACLは完全に同じ機能なので、どれを使っても運用上の違いはない',
                isCorrect: false,
                explanation:
                    'IAMポリシー、バケットポリシー、ACLは評価対象や運用上の意味が異なります。特に現在はACLを無効化し、IAMとバケットポリシーで制御する設計が一般的です。',
            },
            {
                text: 'Replicationを設定すれば、バックアップ、WORM保持、過去時点復旧、リージョン切替がすべて自動的に満たされる',
                isCorrect: false,
                explanation:
                    'Replicationは主にオブジェクトを別バケットや別リージョンへ非同期複製する仕組みです。過去時点への復旧はBackup、削除防止や改ざん防止はObject Lock、アプリの切替はDR設計として別途考える必要があります。',
            },
            {
                text: 'S3署名付きURLとCloudFront signed URLはどちらも同じURLであり、常にS3直アクセスになる',
                isCorrect: false,
                explanation:
                    'S3署名付きURLはS3へ直接アクセスするURLです。CloudFront signed URLはCloudFront経由の配信アクセスを制限するURLです。どの経路にアクセスさせたいかで使い分けます。',
            },
        ],
        explanation:
            '応用問題では、単にサービス名を知っているかではなく、何を比較しているかを整理します。ACLは新規設計では避け、IAM/バケットポリシー中心にする。OACは新しいCloudFront + S3非公開配信、OAIは旧来方式。S3 Event Notificationsは単純連携、EventBridgeは条件分岐と拡張。SQSはキュー、SNSはPub/Sub通知。Versioningは過去バージョン保持、Object LockはWORM保持。Replicationは現在状態を別場所へ複製、Backupは復元点を保持。こうした比較を、シンプルさ、スループット、状態管理、再試行、コスト、監査性、将来拡張性の軸で判断します。',
    },
]
