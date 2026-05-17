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
]
