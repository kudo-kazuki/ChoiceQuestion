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
]
