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
]
