import type { Question } from '@/types/test_questions'

export const testQuestions: Question[] = [
    {
        question:
            'Amazon EC2 の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'AWS クラウド上で仮想サーバーを起動し、OS やソフトウェアを管理して利用できるサービス',
                isCorrect: true,
                explanation:
                    'Amazon EC2（Elastic Compute Cloud）は、AWS クラウド上で仮想サーバーである EC2 インスタンスを起動するサービスです。利用者はインスタンスタイプ、OS を含むイメージ、ネットワークやストレージなどを選択し、必要に応じてサーバー上のソフトウェアを管理します。',
            },
            {
                text: 'ファイルをオブジェクトとして保存し、URL などで取得できるストレージサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon S3 の説明です。EC2 はデータ保存専用ではなく、アプリケーションなどを実行する仮想サーバーを提供します。',
            },
            {
                text: 'イベントを受け取ったときだけ関数コードを実行し、利用者がサーバーを管理しないサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Lambda の説明です。EC2 では利用者が仮想サーバーを選択し、OS や実行環境の管理を行う範囲が広くなります。',
            },
            {
                text: 'ドメイン名を IP アドレスなどへ変換する DNS サービス',
                isCorrect: false,
                explanation:
                    'これは Amazon Route 53 などが担う役割です。EC2 は仮想サーバーを起動して処理を実行するサービスです。',
            },
        ],
        explanation:
            'EC2 は、OS にログインして設定を変更したい場合や、既存ソフトウェアをサーバー上で動かしたい場合など、実行環境を柔軟に管理したい用途の基本的な選択肢です。',
    },
    {
        question:
            '画像が S3 にアップロードされたときにだけ、サムネイルを作成する短時間の処理を実行したいと考えています。最も適切なコンピューティングサービスはどれですか?',
        options: [
            {
                text: 'AWS Lambda',
                isCorrect: true,
                explanation:
                    'Lambda は、S3 へのファイルアップロードなどのイベントをきっかけにコードを実行できるサーバーレスのコンピューティングサービスです。必要なときにだけ処理を動かす用途に適しています。',
            },
            {
                text: 'Amazon EC2 Auto Scaling',
                isCorrect: false,
                explanation:
                    'EC2 Auto Scaling は EC2 インスタンスの台数を需要に応じて調整する仕組みです。アップロード単位で短いコードを直接実行するサービスではありません。',
            },
            {
                text: 'Amazon EKS',
                isCorrect: false,
                explanation:
                    'EKS は Kubernetes クラスターを実行・管理するサービスです。コンテナ基盤を必要とする要件が示されていない短時間のイベント処理には、Lambda の方が目的に直接合います。',
            },
            {
                text: 'Amazon Lightsail',
                isCorrect: false,
                explanation:
                    'Lightsail は Web サイトなどを簡単に始めるための仮想サーバーや関連リソースを提供します。S3 イベントごとのコード実行を直接目的とするサービスではありません。',
            },
        ],
        explanation:
            'Lambda はサーバーや OS の管理を AWS に任せてコードを実行でき、イベント駆動の小さな処理でよく利用されます。',
    },
    {
        question:
            'Amazon ECS の基本的な役割として最も適切なものはどれですか?',
        options: [
            {
                text: 'コンテナ化したアプリケーションをデプロイ、管理、スケールするためのコンテナオーケストレーションサービス',
                isCorrect: true,
                explanation:
                    'Amazon ECS（Elastic Container Service）は、コンテナ化したワークロードを AWS 上でデプロイ、管理、スケールするためのサービスです。コンテナをどのように実行し続けるかを管理します。',
            },
            {
                text: '仮想サーバーのディスクとして利用するブロックストレージサービス',
                isCorrect: false,
                explanation:
                    'これは Amazon EBS の説明です。ECS はコンテナ化されたアプリケーションの実行を管理するサービスです。',
            },
            {
                text: 'データベースを SQL で操作できるようにするリレーショナルデータベースサービス',
                isCorrect: false,
                explanation:
                    'これは Amazon RDS などの説明です。ECS はデータベースではなく、コンテナの実行管理を担います。',
            },
            {
                text: 'ユーザーのアクセス権限を管理するサービス',
                isCorrect: false,
                explanation:
                    'アクセス権限管理は AWS Identity and Access Management（IAM）の役割です。ECS はコンテナアプリケーションの実行基盤です。',
            },
        ],
        explanation:
            'コンテナはアプリケーションと依存関係をまとめて実行しやすくする単位です。ECS は、コンテナをサービスとして継続実行したり、必要数を保ったりする役割を担います。',
    },
    {
        question:
            'Amazon ECS でコンテナを実行したい一方、コンテナを載せる EC2 インスタンスの用意や管理はできるだけ行いたくありません。適切な選択肢はどれですか?',
        options: [
            {
                text: 'AWS Fargate を ECS の実行基盤として利用する',
                isCorrect: true,
                explanation:
                    'AWS Fargate は、コンテナ向けのサーバーレスコンピューティングエンジンです。ECS で Fargate を利用すると、利用者がコンテナ用 EC2 インスタンスを用意・管理せずにコンテナタスクを実行できます。',
            },
            {
                text: 'Amazon S3 を ECS の実行基盤として利用する',
                isCorrect: false,
                explanation:
                    'S3 はオブジェクトストレージであり、コンテナを実行するコンピューティング基盤ではありません。',
            },
            {
                text: 'Amazon Route 53 を ECS の実行基盤として利用する',
                isCorrect: false,
                explanation:
                    'Route 53 は DNS やドメイン管理などに使うサービスであり、コンテナを実行する基盤ではありません。',
            },
            {
                text: 'AWS Certificate Manager を ECS の実行基盤として利用する',
                isCorrect: false,
                explanation:
                    'AWS Certificate Manager（ACM）は TLS 証明書を管理するサービスです。コンテナの実行基盤にはなりません。',
            },
        ],
        explanation:
            'ECS はコンテナを管理するサービスで、Fargate はコンテナを実際に動かすためのサーバー管理不要の実行基盤として組み合わせられます。',
    },
    {
        question:
            '多数の画像変換ジョブをまとめて投入し、キューに入れたジョブを利用可能な計算資源で順次処理したい場合、最も適切なサービスはどれですか?',
        options: [
            {
                text: 'AWS Batch',
                isCorrect: true,
                explanation:
                    'AWS Batch は、バッチジョブを投入して実行するためのマネージドサービスです。ジョブキューやコンピューティング環境を使い、処理量に応じて必要なコンピューティングリソースでジョブを実行できます。',
            },
            {
                text: 'Amazon Route 53',
                isCorrect: false,
                explanation:
                    'Route 53 は DNS とドメイン関連のサービスです。多数の計算ジョブをスケジュールして処理する用途には合いません。',
            },
            {
                text: 'AWS WAF',
                isCorrect: false,
                explanation:
                    'AWS WAF（Web Application Firewall）は Web リクエストを検査して攻撃などをブロックするためのサービスです。バッチ計算の実行管理は行いません。',
            },
            {
                text: 'Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'CloudFront はコンテンツ配信を高速化するサービスです。計算ジョブをキューに投入して処理するサービスではありません。',
            },
        ],
        explanation:
            'AWS Batch は、シミュレーション、メディア変換、分析など、即時応答ではなくまとまった処理を効率よく実行したいバッチワークロードに適しています。',
    },
    {
        question:
            'EC2 上で動作する Web アプリケーションへのアクセス数が増減します。負荷に応じて EC2 インスタンス数を自動で増減させたい場合に利用するサービスはどれですか?',
        options: [
            {
                text: 'Amazon EC2 Auto Scaling',
                isCorrect: true,
                explanation:
                    'Amazon EC2 Auto Scaling は、Auto Scaling グループ内の EC2 インスタンスを需要や設定した条件に応じて起動または終了し、必要な台数を保つためのサービスです。',
            },
            {
                text: 'AWS Lambda',
                isCorrect: false,
                explanation:
                    'Lambda はコードを実行する別のコンピューティングサービスであり、既存の EC2 インスタンス群の台数を調整するサービスではありません。',
            },
            {
                text: 'Amazon ECR',
                isCorrect: false,
                explanation:
                    'Amazon ECR（Elastic Container Registry）はコンテナイメージを保存するサービスです。EC2 の台数を負荷に応じて増減させる役割はありません。',
            },
            {
                text: 'AWS CloudFormation',
                isCorrect: false,
                explanation:
                    'CloudFormation は AWS リソースをテンプレートで定義・作成するサービスです。負荷の変化に応じて EC2 台数を継続的に調整する主役は EC2 Auto Scaling です。',
            },
        ],
        explanation:
            'EC2 Auto Scaling では、最小・最大・希望するインスタンス数やスケーリングポリシーを設定できます。需要増加時の性能確保と、需要低下時の過剰な稼働抑制に役立ちます。',
    },
    {
        question:
            'アプリケーションを実行する環境として、Amazon EC2 と AWS Lambda の違いを正しく説明しているものはどれですか?',
        options: [
            {
                text: 'EC2 は仮想サーバーを管理して利用し、Lambda は利用者がサーバーを管理せずにコードを実行する',
                isCorrect: true,
                explanation:
                    'EC2 では仮想サーバーを起動し、OS やミドルウェアなどを管理できます。Lambda ではサーバーや OS の管理の多くを AWS が担い、利用者は主に実行するコードと設定を管理します。',
            },
            {
                text: 'EC2 はファイル保存専用で、Lambda はリレーショナルデータベース専用である',
                isCorrect: false,
                explanation:
                    'EC2 は仮想サーバー、Lambda はコード実行のサービスです。ファイル保存専用やデータベース専用ではありません。',
            },
            {
                text: 'EC2 はコンテナにしか利用できず、Lambda は OS にログインして管理する必要がある',
                isCorrect: false,
                explanation:
                    'EC2 はコンテナ以外にもさまざまなソフトウェアを実行できます。また、Lambda で利用者が OS にログインして管理することは基本的な利用方法ではありません。',
            },
            {
                text: 'EC2 と Lambda は同じサービスの異なる料金プランであり、実行方式に違いはない',
                isCorrect: false,
                explanation:
                    'EC2 と Lambda は異なる実行モデルを持つ別サービスです。サーバー管理の範囲や、処理の起動方法などが異なります。',
            },
        ],
        explanation:
            '環境を細かく制御したい、常駐プロセスを動かしたい場合は EC2 が候補になります。イベントを契機としたコード実行でサーバー管理を抑えたい場合は Lambda が候補になります。',
    },
    {
        question:
            'Web アプリケーションのソースコードをアップロードし、EC2 インスタンスの準備、ロードバランシング、ヘルスモニタリング、環境のスケーリングをサービスに任せて公開したい場合、候補として最も適切なものはどれですか?',
        options: [
            {
                text: 'AWS Elastic Beanstalk',
                isCorrect: true,
                explanation:
                    'Elastic Beanstalk は、対応するプラットフォームの Web アプリケーションをデプロイすると、EC2 インスタンスのプロビジョニング、ロードバランシング、ヘルスモニタリング、環境のスケーリングなどを構成します。',
            },
            {
                text: 'Amazon EBS',
                isCorrect: false,
                explanation:
                    'EBS は EC2 などで利用するブロックストレージです。Web アプリケーションの実行環境全体を作成・管理するサービスではありません。',
            },
            {
                text: 'Amazon GuardDuty',
                isCorrect: false,
                explanation:
                    'GuardDuty は脅威検知のサービスです。アプリケーションをデプロイして実行環境を作成するサービスではありません。',
            },
            {
                text: 'Amazon SQS',
                isCorrect: false,
                explanation:
                    'SQS はメッセージをキューで受け渡すサービスです。Web アプリケーションの実行環境の構築・公開を自動で行うものではありません。',
            },
        ],
        explanation:
            'Elastic Beanstalk は、アプリケーションのデプロイを簡単にしつつ、作成される EC2 などの基盤リソースを利用者の AWS アカウント内で扱えるサービスです。',
    },
    {
        question:
            '個人の小規模な Web サイトを立ち上げるため、仮想プライベートサーバー、静的 IP、DNS 管理などを分かりやすい画面と予測しやすい月額料金で利用したい場合、最も適切なサービスはどれですか?',
        options: [
            {
                text: 'Amazon Lightsail',
                isCorrect: true,
                explanation:
                    'Amazon Lightsail は、Web サイトや Web アプリケーションを手早く始める用途に向け、仮想プライベートサーバー、ストレージ、ネットワーク関連機能などを簡単に利用できる形で提供します。',
            },
            {
                text: 'AWS Batch',
                isCorrect: false,
                explanation:
                    'AWS Batch はバッチジョブを実行するためのサービスです。小規模な Web サイトのサーバーや DNS を簡単に用意する用途とは異なります。',
            },
            {
                text: 'Amazon Kinesis Data Streams',
                isCorrect: false,
                explanation:
                    'Kinesis Data Streams はリアルタイムに流れるデータを取り込むためのサービスです。Web サイトの仮想サーバー一式を簡単に開始するサービスではありません。',
            },
            {
                text: 'AWS Step Functions',
                isCorrect: false,
                explanation:
                    'Step Functions は複数の処理の順序や分岐を管理するワークフローサービスです。Web サイト用の仮想サーバーを提供するものではありません。',
            },
        ],
        explanation:
            'Lightsail は、AWS の多くの選択肢を個別に組み合わせる前に、小規模なサイトや学習用環境をシンプルに始めたい場合の候補になります。',
    },
    {
        question:
            '既存の Kubernetes 用の設定や運用知識を活用して、AWS 上で Kubernetes クラスターを実行したい場合、最も適切なサービスはどれですか?',
        options: [
            {
                text: 'Amazon EKS',
                isCorrect: true,
                explanation:
                    'Amazon EKS（Elastic Kubernetes Service）は、AWS 上で Kubernetes クラスターを実行するためのマネージドサービスです。Kubernetes を利用することが要件の場合の代表的な選択肢です。',
            },
            {
                text: 'Amazon ECS',
                isCorrect: false,
                explanation:
                    'ECS もコンテナを管理するサービスですが、Kubernetes クラスターを提供するサービスではありません。Kubernetes を要件とする場合は EKS が適切です。',
            },
            {
                text: 'AWS Lambda',
                isCorrect: false,
                explanation:
                    'Lambda は関数コードをサーバーレスで実行するサービスであり、Kubernetes クラスターを実行するサービスではありません。',
            },
            {
                text: 'Amazon EC2 Auto Scaling',
                isCorrect: false,
                explanation:
                    'EC2 Auto Scaling は EC2 インスタンス群の台数を調整する仕組みです。Kubernetes のコントロールプレーンを提供するサービスではありません。',
            },
        ],
        explanation:
            'コンテナを実行したいだけなら ECS も候補です。Kubernetes の API やエコシステムを使う明確な要件がある場合に EKS を選ぶ、という比較軸が重要です。',
    },
    {
        question:
            'コンテナ化した Web API を Amazon ECS で常時稼働させ、サーバーの管理を抑えたい場合の組み合わせとして最も適切なものはどれですか?',
        options: [
            {
                text: 'Amazon ECS と AWS Fargate',
                isCorrect: true,
                explanation:
                    'ECS はコンテナ化されたアプリケーションのデプロイや管理を担い、Fargate は基盤となるサーバーを利用者が管理せずにコンテナを実行できる選択肢です。常時稼働するコンテナサービスにも利用できます。',
            },
            {
                text: 'Amazon ECS と Amazon Route 53 だけ',
                isCorrect: false,
                explanation:
                    'Route 53 は名前解決などに利用できますが、コンテナを実際に動かすコンピューティング基盤ではありません。ECS のタスクを実行する基盤が別途必要です。',
            },
            {
                text: 'Amazon ECS と Amazon S3 だけ',
                isCorrect: false,
                explanation:
                    'S3 はオブジェクトストレージです。コンテナイメージや静的データの保存用途とは別に、ECS タスクの実行基盤が必要です。',
            },
            {
                text: 'Amazon ECS と AWS Budgets だけ',
                isCorrect: false,
                explanation:
                    'AWS Budgets は予算の設定や通知に利用するサービスです。コンテナを実行する計算資源にはなりません。',
            },
        ],
        explanation:
            'ECS と Fargate の関係は、ECS がコンテナの管理を担い、Fargate がサーバー管理不要の実行場所を提供する、と整理すると理解しやすくなります。',
    },
    {
        question:
            'AWS App Runner の利用を検討している新規の AWS 顧客に対する説明として、現在の公式ドキュメントに照らして最も適切なものはどれですか?',
        options: [
            {
                text: 'App Runner はソースコードやコンテナイメージから Web アプリケーションをデプロイするサービスだが、現在は新規顧客には提供開始できず、既存顧客は継続利用できる',
                isCorrect: true,
                explanation:
                    'AWS 公式ドキュメントでは、App Runner は新規顧客には利用開始できず、既存顧客は通常どおり継続利用できると案内されています。機能の概要だけでなく、利用可能性の確認もサービス選定では重要です。',
            },
            {
                text: 'App Runner はすべての新規顧客が新しい Web アプリケーションで優先的に採用すべき現行サービスである',
                isCorrect: false,
                explanation:
                    'App Runner は Web アプリケーションをデプロイする機能を持ちますが、現在は新規顧客には提供開始できないため、新規採用の推奨として扱うのは不正確です。',
            },
            {
                text: 'App Runner は DNS レコードだけを管理するサービスであり、アプリケーションは実行できない',
                isCorrect: false,
                explanation:
                    'App Runner はソースコードやコンテナイメージからスケーラブルな Web アプリケーションをデプロイするサービスです。DNS 専用サービスではありません。',
            },
            {
                text: 'App Runner は EC2 のストレージボリュームのバックアップだけを取得するサービスである',
                isCorrect: false,
                explanation:
                    'App Runner は Web アプリケーションのデプロイと実行に関するサービスです。EC2 のストレージバックアップ専用サービスではありません。',
            },
        ],
        explanation:
            'AWS サービスの学習では、役割だけでなく、新規利用の可否や名称変更など最新の提供状況も公式情報で確認する必要があります。',
    },
    {
        question:
            '画像ファイル、ログ、バックアップデータなどを、サーバーのディスクではなくオブジェクトとして保存したい場合、最も適切なサービスはどれですか?',
        options: [
            {
                text: 'Amazon S3',
                isCorrect: true,
                explanation:
                    'Amazon S3 はオブジェクトストレージサービスです。データをバケット内のオブジェクトとして保存でき、画像、ログ、静的コンテンツ、バックアップなど幅広い用途に利用されます。',
            },
            {
                text: 'Amazon EC2',
                isCorrect: false,
                explanation:
                    'EC2 は仮想サーバーを起動して処理を実行するサービスです。データをオブジェクトとして保存するストレージサービスではありません。',
            },
            {
                text: 'Amazon Route 53',
                isCorrect: false,
                explanation:
                    'Route 53 は DNS（ドメイン名と接続先を対応付ける仕組み）などを扱うサービスです。ファイルやログの保存先ではありません。',
            },
            {
                text: 'AWS Lambda',
                isCorrect: false,
                explanation:
                    'Lambda はコードを実行するサービスです。処理結果を S3 に保存する構成はありますが、Lambda 自体はオブジェクトストレージではありません。',
            },
        ],
        explanation:
            'AWSService1 では、S3 は「大量のファイルやデータをオブジェクトとして保存する基本サービス」と整理します。バケット設定やアクセス制御の詳細は S3 の個別問題集で深掘りします。',
    },
    {
        question:
            'EC2 インスタンスで動くアプリケーションの OS ディスクやデータディスクとして、ブロック単位で読み書きできる永続ストレージを使いたい場合、最も適切なサービスはどれですか?',
        options: [
            {
                text: 'Amazon EBS',
                isCorrect: true,
                explanation:
                    'Amazon EBS（Elastic Block Store）は、EC2 インスタンスで利用するブロックストレージです。ディスクのようにインスタンスへアタッチし、ファイルシステムを作成して利用できます。',
            },
            {
                text: 'Amazon EFS',
                isCorrect: false,
                explanation:
                    'EFS は複数のコンピューティングリソースからマウントできる共有ファイルシステムです。EC2 に接続するディスクとして扱う代表的なブロックストレージは EBS です。',
            },
            {
                text: 'Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'CloudFront はコンテンツ配信を高速化するサービスです。EC2 のディスクを提供するサービスではありません。',
            },
            {
                text: 'AWS Backup',
                isCorrect: false,
                explanation:
                    'AWS Backup はバックアップを一元管理するサービスです。EC2 が日常的に読み書きするブロックストレージとして使うものではありません。',
            },
        ],
        explanation:
            'EBS は EC2 で利用する永続的なディスクの基本選択肢です。インスタンスの終了方法や設定によってボリュームを残せるため、インスタンス内の一時領域とは区別します。',
    },
    {
        question:
            '複数の EC2 インスタンスから同じファイルを同時に読み書きできる、共有の Linux 系ファイルシステムを利用したい場合、最も適切なサービスはどれですか?',
        options: [
            {
                text: 'Amazon EFS',
                isCorrect: true,
                explanation:
                    'Amazon EFS（Elastic File System）は、複数のコンピューティングリソースからマウントして利用できる、マネージドな共有ファイルシステムです。複数の EC2 で同じファイル群を共有したい用途に合います。',
            },
            {
                text: 'Amazon EBS',
                isCorrect: false,
                explanation:
                    'EBS は EC2 向けのブロックストレージであり、一般的な基本用途として複数の EC2 から同じファイルシステムを共有するサービスではありません。',
            },
            {
                text: 'Amazon S3 Glacier Deep Archive',
                isCorrect: false,
                explanation:
                    'S3 Glacier Deep Archive は長期アーカイブ向けのストレージクラスです。アプリケーションから共有ファイルシステムとして即時に読み書きする用途には合いません。',
            },
            {
                text: 'Amazon API Gateway',
                isCorrect: false,
                explanation:
                    'API Gateway は API を公開・管理するサービスです。共有ファイルシステムを提供しません。',
            },
        ],
        explanation:
            'EBS はインスタンスに接続するディスク、EFS は複数の処理から共有しやすいファイルシステム、と区別すると用途選択がしやすくなります。',
    },
    {
        question:
            '数年間保管する法定保存データがあり、ほとんど参照しないものの必要時には取り出せるようにしたいと考えています。低コストの長期アーカイブ向けに選ぶ対象として最も適切なものはどれですか?',
        options: [
            {
                text: 'Amazon S3 Glacier ストレージクラス',
                isCorrect: true,
                explanation:
                    'S3 Glacier Instant Retrieval、S3 Glacier Flexible Retrieval、S3 Glacier Deep Archive などのストレージクラスは、低コストの長期保存やアーカイブを目的として設計されています。取得頻度や必要な取り出し時間に応じて選択します。',
            },
            {
                text: 'Amazon EC2 Auto Scaling',
                isCorrect: false,
                explanation:
                    'EC2 Auto Scaling は EC2 インスタンス台数を調整するサービスです。長期保存のストレージクラスではありません。',
            },
            {
                text: 'Amazon ECS',
                isCorrect: false,
                explanation:
                    'ECS はコンテナの実行を管理するサービスです。アーカイブデータの保管先ではありません。',
            },
            {
                text: 'Amazon Route 53',
                isCorrect: false,
                explanation:
                    'Route 53 は名前解決などを扱うサービスです。長期データ保管を行いません。',
            },
        ],
        explanation:
            'S3 Glacier ストレージクラスは S3 に保存するオブジェクトの保存方式です。特に Flexible Retrieval や Deep Archive はリアルタイムアクセス用ではなく、取り出し手順や時間、料金を考慮して利用します。',
    },
    {
        question:
            'EBS ボリューム、EFS ファイルシステム、RDS データベースなど、複数の AWS リソースのバックアップ計画や保持期間を一元的に管理したい場合、最も適切なサービスはどれですか?',
        options: [
            {
                text: 'AWS Backup',
                isCorrect: true,
                explanation:
                    'AWS Backup は、対応する複数の AWS サービスについてバックアップを集中管理し、バックアップ計画、スケジュール、保持期間などを設定できるサービスです。',
            },
            {
                text: 'Amazon EFS',
                isCorrect: false,
                explanation:
                    'EFS は共有ファイルシステムです。EFS 自体のバックアップ対象にはなれますが、複数サービスのバックアップを一元管理する役割は AWS Backup が担います。',
            },
            {
                text: 'Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'CloudFront はコンテンツ配信サービスです。EBS や RDS などのバックアップ計画を管理しません。',
            },
            {
                text: 'AWS Fargate',
                isCorrect: false,
                explanation:
                    'Fargate はコンテナを実行するためのサーバー管理不要のコンピューティング基盤です。バックアップ管理サービスではありません。',
            },
        ],
        explanation:
            'バックアップを各サービスで個別に扱う方法もありますが、組織的にバックアップ方針を適用したい場合は AWS Backup による集中管理が候補になります。',
    },
    {
        question:
            'Amazon EBS と Amazon EFS の違いとして最も適切な説明はどれですか?',
        options: [
            {
                text: 'EBS は主に EC2 にアタッチするブロックストレージで、EFS は複数のコンピューティングリソースから共有できるファイルシステムである',
                isCorrect: true,
                explanation:
                    'EBS はディスクのように利用するブロックストレージで、EC2 の OS やアプリケーションデータに使われます。EFS は NFS ベースの共有ファイルシステムとして、複数の処理から同じファイルにアクセスする用途に使われます。',
            },
            {
                text: 'EBS は DNS サービスで、EFS は CDN サービスである',
                isCorrect: false,
                explanation:
                    'DNS は Route 53、CDN（コンテンツ配信ネットワーク）は CloudFront の代表的な役割です。EBS と EFS はどちらもストレージに関するサービスです。',
            },
            {
                text: 'EBS はバックアップ一元管理サービスで、EFS は暗号鍵管理サービスである',
                isCorrect: false,
                explanation:
                    'バックアップ一元管理は AWS Backup、暗号鍵管理は AWS KMS の役割です。EBS と EFS はデータを保存・提供するストレージです。',
            },
            {
                text: 'EBS と EFS はどちらも S3 のアーカイブ用ストレージクラスの名称である',
                isCorrect: false,
                explanation:
                    'S3 のアーカイブ向けストレージクラスには S3 Glacier 系があります。EBS と EFS は S3 のストレージクラスではありません。',
            },
        ],
        explanation:
            '「ディスクとして接続する必要があるか」「複数のサーバーから同じファイルシステムを共有したいか」が EBS と EFS を見分ける基本的な判断軸です。',
    },
    {
        question:
            'Windows アプリケーションが利用する共有フォルダを AWS に移行し、SMB（Windows で広く使われるファイル共有プロトコル）や Windows 固有の機能との互換性を重視したい場合、候補として最も適切なものはどれですか?',
        options: [
            {
                text: 'Amazon FSx for Windows File Server',
                isCorrect: true,
                explanation:
                    'Amazon FSx for Windows File Server は、Microsoft Windows ファイルシステムを基盤としたマネージドファイルサーバーです。SMB や Windows ファイルシステムの機能との互換性を必要とするワークロードに適しています。',
            },
            {
                text: 'Amazon EBS を DNS サーバーとして使用する',
                isCorrect: false,
                explanation:
                    'EBS はブロックストレージであり、DNS サーバーサービスではありません。また、複数利用者向けの Windows ファイル共有をマネージドに提供する説明にも該当しません。',
            },
            {
                text: 'AWS Lambda の関数を共有フォルダとしてマウントする',
                isCorrect: false,
                explanation:
                    'Lambda はコード実行のサービスで、Windows 共有フォルダを提供するファイルサーバーではありません。',
            },
            {
                text: 'Amazon CloudFront のキャッシュを Windows ファイル共有として利用する',
                isCorrect: false,
                explanation:
                    'CloudFront はコンテンツ配信のキャッシュを扱います。SMB による Windows ファイル共有を提供するサービスではありません。',
            },
        ],
        explanation:
            '共有ファイルという同じ分類でも、一般的な共有ファイル用途では EFS、Windows との互換性が明示された場合は FSx for Windows File Server が候補になります。',
    },
    {
        question:
            'オンプレミスのファイルサーバーにある大量のデータを、ネットワーク経由で Amazon S3 や Amazon EFS へ高速に移行または定期転送したい場合、最も適切なサービスはどれですか?',
        options: [
            {
                text: 'AWS DataSync',
                isCorrect: true,
                explanation:
                    'AWS DataSync は、オンプレミスや AWS のストレージ間でファイルまたはオブジェクトデータを転送するための、高速でマネージドなデータ転送サービスです。移行や定期的なデータ転送に利用できます。',
            },
            {
                text: 'Amazon SES',
                isCorrect: false,
                explanation:
                    'Amazon SES はメール送信サービスです。ファイルサーバーのデータを S3 や EFS に移す用途ではありません。',
            },
            {
                text: 'Amazon ECR',
                isCorrect: false,
                explanation:
                    'ECR はコンテナイメージを保管するレジストリサービスです。オンプレミスの一般ファイルをストレージへ転送するサービスではありません。',
            },
            {
                text: 'AWS WAF',
                isCorrect: false,
                explanation:
                    'AWS WAF は Web リクエストに対するセキュリティ対策のサービスです。データ転送を行いません。',
            },
        ],
        explanation:
            'DataSync は、ネットワーク経由でデータを移動する用途の選択肢です。ネットワークで送ることが困難なほど大量のデータを物理機器で移送する場合は Snow Family との区別が必要です。',
    },
    {
        question:
            'オンプレミスの既存アプリケーションから NFS や SMB のファイル共有としてアクセスしつつ、保存先として Amazon S3 を利用したい場合、適切な選択肢はどれですか?',
        options: [
            {
                text: 'Amazon S3 File Gateway（AWS Storage Gateway）',
                isCorrect: true,
                explanation:
                    'Amazon S3 File Gateway は、オンプレミスなどにゲートウェイを配置し、NFS や SMB のファイルインターフェースを通じて Amazon S3 のオブジェクトを保存・取得できるようにします。',
            },
            {
                text: 'Amazon EC2 Auto Scaling',
                isCorrect: false,
                explanation:
                    'EC2 Auto Scaling は EC2 の台数を調整するサービスであり、オンプレミス向けのファイル共有インターフェースを S3 に接続するものではありません。',
            },
            {
                text: 'Amazon Athena',
                isCorrect: false,
                explanation:
                    'Athena は S3 上のデータなどを SQL で分析するサービスです。既存アプリケーションに NFS や SMB の共有先を提供する役割ではありません。',
            },
            {
                text: 'AWS Certificate Manager',
                isCorrect: false,
                explanation:
                    'ACM は証明書を管理するサービスです。ファイル共有と S3 の連携を提供しません。',
            },
        ],
        explanation:
            'Storage Gateway は、既存のファイル共有によるアクセス方法を保ちながら AWS ストレージを活用するハイブリッド構成で使われます。',
    },
    {
        question:
            '取引先が現在利用している SFTP クライアントを変更せずに、アップロード先を Amazon S3 にしたい場合、ファイル転送の受け口として最も適切なサービスはどれですか?',
        options: [
            {
                text: 'AWS Transfer Family',
                isCorrect: true,
                explanation:
                    'AWS Transfer Family は、SFTP（SSH File Transfer Protocol：暗号化されたファイル転送プロトコル）などを使ったファイル転送を、Amazon S3 や Amazon EFS と連携して提供するマネージドサービスです。',
            },
            {
                text: 'Amazon EBS',
                isCorrect: false,
                explanation:
                    'EBS は EC2 向けのブロックストレージです。取引先向けのマネージド SFTP エンドポイントを提供するサービスではありません。',
            },
            {
                text: 'Amazon CloudWatch',
                isCorrect: false,
                explanation:
                    'CloudWatch はログやメトリクスの監視に利用するサービスです。ファイル転送の受け口ではありません。',
            },
            {
                text: 'AWS CloudFormation',
                isCorrect: false,
                explanation:
                    'CloudFormation はインフラリソースをテンプレートで作成するサービスです。SFTP 接続を受けてファイルを保存するサービスそのものではありません。',
            },
        ],
        explanation:
            'DataSync はストレージ間のデータ移行・同期向け、Transfer Family は SFTP など既存のファイル転送プロトコルで利用者や取引先からファイルを受け渡す用途向け、と整理できます。',
    },
    {
        question:
            'ネットワーク帯域や転送期間の制約により、オンプレミスにある非常に大量のデータをインターネット経由で AWS へ送ることが現実的ではありません。物理デバイスを用いたデータ移送の候補はどれですか?',
        options: [
            {
                text: 'AWS Snow Family',
                isCorrect: true,
                explanation:
                    'AWS Snow Family は、物理デバイスを利用して大量データを AWS へ移送する用途などに使われます。ネットワーク転送が長時間かかる、または帯域が限られる状況で候補になります。',
            },
            {
                text: 'Amazon Route 53',
                isCorrect: false,
                explanation:
                    'Route 53 は DNS などのサービスであり、データを物理的に輸送する仕組みではありません。',
            },
            {
                text: 'AWS Lambda',
                isCorrect: false,
                explanation:
                    'Lambda はコード実行サービスです。大量データを保存したデバイスを配送して移送するサービスではありません。',
            },
            {
                text: 'Amazon SNS',
                isCorrect: false,
                explanation:
                    'SNS は通知を配信するメッセージングサービスです。大容量データの物理移送を行いません。',
            },
        ],
        explanation:
            'ネットワーク経由で効率よく転送できる場合は DataSync、物理移送が必要な規模や制約がある場合は Snow Family が候補になる、という比較が基本です。',
    },
    {
        question:
            '社内のファイルサーバーから AWS への移行方法を選んでいます。「ネットワークで定期同期する」「既存の共有アクセスを残す」「取引先の SFTP 受付を提供する」の対応関係として最も適切なものはどれですか?',
        options: [
            {
                text: '定期同期は DataSync、共有アクセスを残す構成は Storage Gateway、SFTP 受付は Transfer Family',
                isCorrect: true,
                explanation:
                    'DataSync はストレージ間の高速なデータ転送、Storage Gateway の File Gateway は NFS/SMB を通じた AWS ストレージ利用、Transfer Family は SFTP などを通じたファイル転送受付に適しています。',
            },
            {
                text: '定期同期は Route 53、共有アクセスは AWS Budgets、SFTP 受付は EC2 Auto Scaling',
                isCorrect: false,
                explanation:
                    'Route 53 は DNS、Budgets は予算管理、EC2 Auto Scaling は EC2 台数調整のサービスであり、挙げられたストレージ連携の用途には対応しません。',
            },
            {
                text: '定期同期は ACM、共有アクセスは WAF、SFTP 受付は CloudTrail',
                isCorrect: false,
                explanation:
                    'ACM は証明書管理、WAF は Web 攻撃対策、CloudTrail は API 操作記録です。ファイル転送や共有アクセスを提供するサービスではありません。',
            },
            {
                text: '三つの要件はいずれも S3 Glacier Deep Archive を選ぶだけで実現できる',
                isCorrect: false,
                explanation:
                    'S3 Glacier Deep Archive はアーカイブ用ストレージクラスです。データ転送方式、共有プロトコル、SFTP の受付機能を単独で提供するものではありません。',
            },
        ],
        explanation:
            '同じ「ファイルを AWS へ持っていく」要件でも、移行・同期、ハイブリッドアクセス、外部とのファイル授受では使うサービスが異なります。目的を先に整理して選択します。',
    },
    {
        question:
            'MySQL や PostgreSQL などのリレーショナルデータベースを AWS 上で利用し、データベースのセットアップ、バックアップ、パッチ適用などの運用負担を減らしたい場合、代表的なサービスはどれですか?',
        options: [
            {
                text: 'Amazon RDS',
                isCorrect: true,
                explanation:
                    'Amazon RDS（Relational Database Service）は、対応するリレーショナルデータベースエンジンを AWS 上で運用するためのマネージドサービスです。プロビジョニング、バックアップ、ソフトウェアのパッチ適用などの管理作業を軽減します。',
            },
            {
                text: 'Amazon S3',
                isCorrect: false,
                explanation:
                    'S3 はオブジェクトストレージです。ファイルやログの保存先として使えますが、SQL を利用するリレーショナルデータベースを運用するサービスではありません。',
            },
            {
                text: 'Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'CloudFront はコンテンツ配信を高速化するサービスです。リレーショナルデータベースの運用管理は行いません。',
            },
            {
                text: 'AWS Lambda',
                isCorrect: false,
                explanation:
                    'Lambda はコードを実行するサービスです。RDS に接続するアプリケーション処理を動かすことはできますが、データベース自体を提供するサービスではありません。',
            },
        ],
        explanation:
            '表、行、列でデータを管理し、SQL やトランザクションを利用する一般的な業務アプリケーションでは、RDS が基本的な候補になります。',
    },
    {
        question:
            'Amazon Aurora の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'MySQL および PostgreSQL と互換性を持つ、AWS が設計したマネージドなリレーショナルデータベースエンジン',
                isCorrect: true,
                explanation:
                    'Amazon Aurora は、MySQL および PostgreSQL と互換性を持つリレーショナルデータベースエンジンです。Amazon RDS によって管理され、可用性や性能を重視するリレーショナルデータベース用途の候補になります。',
            },
            {
                text: 'ファイルを長期保管するための S3 アーカイブ用ストレージクラス',
                isCorrect: false,
                explanation:
                    '長期アーカイブ向けの S3 ストレージクラスは S3 Glacier 系です。Aurora はリレーショナルデータベースです。',
            },
            {
                text: 'サーバーレスでコンテナを実行するためのサービス',
                isCorrect: false,
                explanation:
                    'サーバーを管理せずにコンテナを実行する代表的なサービスは AWS Fargate です。Aurora はデータベースエンジンです。',
            },
            {
                text: 'DNS レコードを管理するためのサービス',
                isCorrect: false,
                explanation:
                    'DNS の管理は Route 53 などが担います。Aurora はデータを保持し、SQL で利用するリレーショナルデータベースです。',
            },
        ],
        explanation:
            '初級では、RDS は複数の一般的なデータベースエンジンをマネージドに扱うサービス、Aurora は MySQL/PostgreSQL 互換の AWS 設計エンジン、と整理します。',
    },
    {
        question:
            '商品マスタと注文データをテーブルで関連付け、SQL の JOIN やトランザクションを使って管理したい場合、候補として最も適切なものはどれですか?',
        options: [
            {
                text: 'Amazon RDS または Amazon Aurora',
                isCorrect: true,
                explanation:
                    '商品と注文のように関係を持つデータをテーブルで扱い、SQL の JOIN や整合性を重視したトランザクションを利用したい場合は、リレーショナルデータベースである RDS や Aurora が候補になります。',
            },
            {
                text: 'Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'CloudFront はコンテンツ配信のサービスです。テーブル間の関係やトランザクションを管理するデータベースではありません。',
            },
            {
                text: 'AWS WAF',
                isCorrect: false,
                explanation:
                    'AWS WAF は Web リクエストを検査・制御するセキュリティサービスです。業務データのデータベースにはなりません。',
            },
            {
                text: 'Amazon EFS',
                isCorrect: false,
                explanation:
                    'EFS は共有ファイルシステムです。ファイルは保存できますが、SQL によるテーブル関係の管理を目的とするサービスではありません。',
            },
        ],
        explanation:
            'リレーショナルデータベースは、関連するデータを整合性を保ちながら更新する業務システムでよく利用されます。',
    },
    {
        question:
            'ユーザーIDをキーとしてプロフィールを高速に取得する Web アプリケーションを構築します。アクセス数が大きく変動し、SQL の JOIN は必要ありません。適切なデータベース候補はどれですか?',
        options: [
            {
                text: 'Amazon DynamoDB',
                isCorrect: true,
                explanation:
                    'Amazon DynamoDB は、キー値およびドキュメントデータモデルに対応するフルマネージドな NoSQL データベースです。キーを指定して低レイテンシーでデータを取得する、大規模な Web アプリケーションなどに適しています。',
            },
            {
                text: 'Amazon Route 53',
                isCorrect: false,
                explanation:
                    'Route 53 は DNS などを扱うサービスです。ユーザープロフィールをキーで保存・取得するデータベースではありません。',
            },
            {
                text: 'Amazon EBS',
                isCorrect: false,
                explanation:
                    'EBS は EC2 に接続するブロックストレージです。アプリケーションからキーでアクセスするマネージド NoSQL データベースではありません。',
            },
            {
                text: 'AWS Batch',
                isCorrect: false,
                explanation:
                    'AWS Batch はまとまった計算ジョブを実行するためのサービスです。ユーザーデータを低遅延で取得するデータベースではありません。',
            },
        ],
        explanation:
            'DynamoDB では、どのキーでデータを読み書きするかというアクセスパターンを意識した設計が重要です。この問題集では、まず高速なキー値アクセスに向くサービスとして理解します。',
    },
    {
        question:
            'Amazon RDS と Amazon DynamoDB の基本的な違いとして最も適切な説明はどれですか?',
        options: [
            {
                text: 'RDS は主に SQL を利用するリレーショナルデータベースで、DynamoDB はキー値やドキュメント形式を扱う NoSQL データベースである',
                isCorrect: true,
                explanation:
                    'RDS はテーブル間の関係や SQL を活用するリレーショナルデータベース用途に向きます。DynamoDB はキーを中心に高速アクセスする NoSQL データベースで、データモデルや設計の考え方が異なります。',
            },
            {
                text: 'RDS はコンテナ実行サービスで、DynamoDB はファイル共有サービスである',
                isCorrect: false,
                explanation:
                    'コンテナ実行には ECS や Fargate、ファイル共有には EFS などが利用されます。RDS と DynamoDB はどちらもデータベースサービスです。',
            },
            {
                text: 'RDS は CDN で、DynamoDB は DNS サービスである',
                isCorrect: false,
                explanation:
                    'CDN は CloudFront、DNS は Route 53 の代表的な役割です。RDS と DynamoDB はアプリケーションデータを保持するサービスです。',
            },
            {
                text: 'RDS と DynamoDB は同一の SQL データベースエンジンを異なる料金で提供するサービスである',
                isCorrect: false,
                explanation:
                    'RDS と DynamoDB は異なるデータモデルを持つサービスです。DynamoDB は一般的な SQL リレーショナルデータベースとして利用するものではありません。',
            },
        ],
        explanation:
            'データベース選定では、保存データの形と読み書きの方法を考えます。関係性や SQL が必要ならリレーショナル系、キー中心の高速アクセスなら DynamoDB が候補になります。',
    },
    {
        question:
            'アプリケーションが同じ商品情報を何度もデータベースから読み込み、応答時間とデータベースへの読み取り負荷を改善したい場合、キャッシュ用途で利用する候補はどれですか?',
        options: [
            {
                text: 'Amazon ElastiCache',
                isCorrect: true,
                explanation:
                    'Amazon ElastiCache は、インメモリのデータストアまたはキャッシュ環境を管理・スケールしやすくするサービスです。頻繁に読むデータをキャッシュして、データベースへの読み取り負荷や応答遅延を減らす用途に使われます。',
            },
            {
                text: 'Amazon S3 Glacier Deep Archive',
                isCorrect: false,
                explanation:
                    'S3 Glacier Deep Archive は長期アーカイブ向けであり、頻繁な読み取りを高速化するキャッシュ用途には適しません。',
            },
            {
                text: 'AWS CloudFormation',
                isCorrect: false,
                explanation:
                    'CloudFormation はインフラをテンプレートから作成・管理するサービスです。アプリケーションが頻繁に読むデータをメモリにキャッシュするサービスではありません。',
            },
            {
                text: 'AWS Transfer Family',
                isCorrect: false,
                explanation:
                    'Transfer Family は SFTP などによるファイル転送を提供します。データベース読み取り結果のキャッシュ用途ではありません。',
            },
        ],
        explanation:
            'ElastiCache はデータベースの代わりに永続的な正本を必ず保存するサービス、と単純化するのではなく、読み取りを高速化するキャッシュとして利用する場面をまず理解します。',
    },
    {
        question:
            'Web アプリケーションのアクセスログを蓄積し、キーワード検索や時間帯ごとの分析、ダッシュボードでの可視化を行いたい場合、候補として最も適切なサービスはどれですか?',
        options: [
            {
                text: 'Amazon OpenSearch Service',
                isCorrect: true,
                explanation:
                    'Amazon OpenSearch Service は、OpenSearch クラスターを AWS 上でデプロイ、運用、スケールしやすくするマネージドサービスです。ログ分析、全文検索、リアルタイムのアプリケーション監視などに利用できます。',
            },
            {
                text: 'Amazon EBS',
                isCorrect: false,
                explanation:
                    'EBS は EC2 に接続するブロックストレージです。ログを保存する土台にはなり得ますが、検索や分析のためのマネージド検索エンジンではありません。',
            },
            {
                text: 'Amazon Lightsail',
                isCorrect: false,
                explanation:
                    'Lightsail は小規模な Web サイトなどを始めやすくするサービスです。ログ検索・分析を目的とする検索エンジンのサービスではありません。',
            },
            {
                text: 'AWS Certificate Manager',
                isCorrect: false,
                explanation:
                    'ACM は TLS 証明書の管理に利用します。ログの全文検索や可視化を行うサービスではありません。',
            },
        ],
        explanation:
            'OpenSearch Service は、アプリケーション内の主データベースというより、検索やログ分析、監視データの調査といった用途で選ばれることが多いサービスです。',
    },
    {
        question:
            '商品カタログの説明文を検索しやすくするため、部分一致や全文検索に適した検索基盤を用意したい場合、最も適切なサービスはどれですか?',
        options: [
            {
                text: 'Amazon OpenSearch Service',
                isCorrect: true,
                explanation:
                    'OpenSearch Service は検索および分析エンジンをマネージドに利用できるサービスです。商品説明などをインデックス化し、キーワード検索や全文検索を行う用途に適しています。',
            },
            {
                text: 'Amazon DynamoDB だけを全文検索エンジンとして利用する',
                isCorrect: false,
                explanation:
                    'DynamoDB はキーによる高速な取得に適した NoSQL データベースです。検索要件によっては OpenSearch Service と連携する構成が候補になり、DynamoDB だけを全文検索の専用基盤として扱う説明は適切ではありません。',
            },
            {
                text: 'Amazon EFS を全文検索エンジンとして利用する',
                isCorrect: false,
                explanation:
                    'EFS は共有ファイルシステムです。保存したファイルをアプリケーションが処理することはできますが、検索インデックスを管理する検索サービスではありません。',
            },
            {
                text: 'AWS Budgets を全文検索エンジンとして利用する',
                isCorrect: false,
                explanation:
                    'AWS Budgets はコストの予算設定や通知に利用するサービスで、データ検索を提供しません。',
            },
        ],
        explanation:
            '検索のために最適化したインデックスが必要な場合は、業務データを保存する主データベースと検索サービスを役割分担させることがあります。',
    },
    {
        question:
            'JSON に近いドキュメント形式のデータを扱う既存アプリケーションがあり、MongoDB と互換性のあるマネージドデータベースを AWS で利用したい場合、候補はどれですか?',
        options: [
            {
                text: 'Amazon DocumentDB（MongoDB 互換）',
                isCorrect: true,
                explanation:
                    'Amazon DocumentDB（MongoDB 互換）は、MongoDB と互換性のあるデータベースを AWS 上でセットアップ、運用、スケールしやすくするマネージドサービスです。ドキュメント指向のデータを扱う用途の候補になります。',
            },
            {
                text: 'Amazon Route 53',
                isCorrect: false,
                explanation:
                    'Route 53 は DNS などを扱うサービスです。JSON に近いドキュメント形式のデータを管理するデータベースではありません。',
            },
            {
                text: 'Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'CloudFront はコンテンツ配信を高速化するサービスです。MongoDB 互換のデータベースではありません。',
            },
            {
                text: 'AWS Batch',
                isCorrect: false,
                explanation:
                    'AWS Batch は計算ジョブの実行を管理するサービスです。ドキュメントデータベースを提供しません。',
            },
        ],
        explanation:
            '初級では、DocumentDB はドキュメント指向で MongoDB 互換性が求められる場合の候補、と整理します。互換機能の細部は導入時に公式資料で確認が必要です。',
    },
    {
        question:
            '人と人のつながりをたどる SNS の友達関係や、商品間の関連をもとに推薦を行うデータを扱いたい場合、グラフデータベースの候補はどれですか?',
        options: [
            {
                text: 'Amazon Neptune',
                isCorrect: true,
                explanation:
                    'Amazon Neptune は、つながりの強いデータを扱うグラフアプリケーション向けのマネージドデータベースサービスです。関係性をたどるソーシャルネットワーク、推薦、知識グラフなどの用途が候補になります。',
            },
            {
                text: 'Amazon EBS',
                isCorrect: false,
                explanation:
                    'EBS は EC2 用のブロックストレージです。データの関係をグラフとして問い合わせるデータベースサービスではありません。',
            },
            {
                text: 'AWS Backup',
                isCorrect: false,
                explanation:
                    'AWS Backup はバックアップ管理のサービスです。友達関係や推薦用の関係データを問い合わせるデータベースではありません。',
            },
            {
                text: 'Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'CloudFront はコンテンツの配信を高速化するサービスです。グラフデータベースではありません。',
            },
        ],
        explanation:
            'データベースはすべて同じ用途ではありません。テーブル、キー値、ドキュメント、グラフ、検索など、扱いたいデータと問い合わせ方に合わせて選びます。',
    },
    {
        question:
            'データの用途とサービスの組み合わせとして最も適切なものはどれですか?',
        options: [
            {
                text: 'SQL で管理する受注データは RDS、キーで高速取得するセッション情報は DynamoDB、頻繁に読む結果の一時保持は ElastiCache、ログ検索は OpenSearch Service',
                isCorrect: true,
                explanation:
                    'RDS はリレーショナルデータ、DynamoDB はキー値中心の高速アクセス、ElastiCache はインメモリキャッシュ、OpenSearch Service は検索・ログ分析に適しています。それぞれ目的に沿った組み合わせです。',
            },
            {
                text: 'SQL で管理する受注データは CloudFront、セッション情報は Route 53、キャッシュは IAM、ログ検索は EBS',
                isCorrect: false,
                explanation:
                    'CloudFront は配信、Route 53 は DNS、IAM は権限管理、EBS はブロックストレージです。挙げられたデータベースや検索の目的には対応しません。',
            },
            {
                text: 'SQL で管理する受注データは WAF、セッション情報は ACM、キャッシュは Transfer Family、ログ検索は Snow Family',
                isCorrect: false,
                explanation:
                    'これらはセキュリティ、証明書、ファイル転送、物理データ移送などのサービスで、データ保存・キャッシュ・検索の対応関係として不適切です。',
            },
            {
                text: 'すべての用途で S3 Glacier Deep Archive を利用すれば、即時検索と更新を含めて最適になる',
                isCorrect: false,
                explanation:
                    'S3 Glacier Deep Archive は長期アーカイブ向けで、業務データの即時更新、キャッシュ、ログの対話的検索をまとめて担うものではありません。',
            },
        ],
        explanation:
            '用途ごとに適したデータサービスを選ぶ考え方を、目的特化型データベースと呼ぶことがあります。初級段階では、サービスごとの代表用途を結び付けて判断できることが重要です。',
    },
    {
        question:
            'ユーザー向けの商品検索画面で、商品レコードの正本はデータベースに保持しつつ、説明文の高速なキーワード検索も提供したい場合の考え方として最も適切なものはどれですか?',
        options: [
            {
                text: '商品データの保存には用途に合うデータベースを使い、検索用には Amazon OpenSearch Service を組み合わせる構成を検討する',
                isCorrect: true,
                explanation:
                    'データの正本を扱うデータベースと、全文検索に向いた OpenSearch Service を役割分担させる構成があります。検索性能や検索機能が重要な場合、目的ごとにサービスを組み合わせる判断が適切です。',
            },
            {
                text: '商品データの正本も検索も AWS Budgets に保存して管理する',
                isCorrect: false,
                explanation:
                    'AWS Budgets は予算管理サービスであり、商品データの保存や全文検索を提供しません。',
            },
            {
                text: '全文検索のために Amazon EBS ボリューム名だけを検索結果として利用する',
                isCorrect: false,
                explanation:
                    'EBS はブロックストレージです。商品説明をインデックス化し検索 API を提供する検索サービスではありません。',
            },
            {
                text: '検索画面の要件がある場合は、必ずデータベースを使わず CloudFront のみで商品情報を管理する',
                isCorrect: false,
                explanation:
                    'CloudFront はコンテンツ配信を高速化しますが、商品情報の更新や全文検索の正本管理を単独で担うデータベースではありません。',
            },
        ],
        explanation:
            'サービスを1つに集約することが常に正解ではありません。保存、検索、キャッシュなどの役割を明確にし、必要に応じて組み合わせます。',
    },
    {
        question:
            'Amazon VPC の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'AWS リソースを配置できる、利用者が定義する論理的に分離された仮想ネットワーク',
                isCorrect: true,
                explanation:
                    'Amazon VPC（Virtual Private Cloud）は、IP アドレス範囲、サブネット、ルーティングなどを設計し、EC2 などの AWS リソースを配置できる論理的に分離された仮想ネットワークです。',
            },
            {
                text: '画像やログをオブジェクトとして保存するストレージサービス',
                isCorrect: false,
                explanation:
                    'これは Amazon S3 の役割です。VPC はデータを保存するサービスではなく、AWS 上のネットワーク環境を構成するサービスです。',
            },
            {
                text: 'SQL を使用してデータを管理するリレーショナルデータベース',
                isCorrect: false,
                explanation:
                    'リレーショナルデータベースには Amazon RDS や Amazon Aurora などがあります。VPC はデータベースではありません。',
            },
            {
                text: 'コンテナイメージを保存するレジストリサービス',
                isCorrect: false,
                explanation:
                    'コンテナイメージを保存する代表的なサービスは Amazon ECR です。VPC はネットワークの境界や接続を設計するためのサービスです。',
            },
        ],
        explanation:
            'VPC は、AWS 上でアプリケーションを配置するときのネットワークの土台です。パブリック/プライベートな配置や外部との接続を考える前提になります。',
    },
    {
        question:
            '複数の EC2 インスタンスで Web アプリケーションを動かしており、アクセスを正常なインスタンスへ分散したい場合、利用する代表的なサービスはどれですか?',
        options: [
            {
                text: 'Elastic Load Balancing',
                isCorrect: true,
                explanation:
                    'Elastic Load Balancing（ELB）は、EC2 インスタンス、コンテナ、IP アドレスなど複数のターゲットへ受信トラフィックを分散します。ヘルスチェックにより正常なターゲットへルーティングできます。',
            },
            {
                text: 'AWS Backup',
                isCorrect: false,
                explanation:
                    'AWS Backup はバックアップの管理に利用するサービスです。Web リクエストを複数のインスタンスへ分散しません。',
            },
            {
                text: 'Amazon S3 Glacier ストレージクラス',
                isCorrect: false,
                explanation:
                    'S3 Glacier 系は長期アーカイブ向けです。アプリケーションへのアクセスを EC2 に振り分けるサービスではありません。',
            },
            {
                text: 'Amazon DocumentDB',
                isCorrect: false,
                explanation:
                    'DocumentDB はドキュメント指向のデータベースです。HTTP などのアクセスを複数の Web サーバーへ分散する役割ではありません。',
            },
        ],
        explanation:
            'ELB と EC2 Auto Scaling はよく組み合わせられます。Auto Scaling が台数を調整し、ロードバランサーが正常な実行先へトラフィックを分配します。',
    },
    {
        question:
            'Amazon Route 53 の基本的な役割として最も適切なものはどれですか?',
        options: [
            {
                text: 'ドメイン登録、DNS ルーティング、リソースのヘルスチェックを提供するサービス',
                isCorrect: true,
                explanation:
                    'Amazon Route 53 は可用性とスケーラビリティを備えた DNS（Domain Name System：ドメイン名を接続先に対応付ける仕組み）サービスで、ドメイン登録、DNS ルーティング、ヘルスチェックを提供します。',
            },
            {
                text: 'EC2 に接続するブロックストレージを提供するサービス',
                isCorrect: false,
                explanation:
                    'EC2 向けのブロックストレージは Amazon EBS です。Route 53 はストレージではなく、名前解決やトラフィックのルーティングを扱います。',
            },
            {
                text: 'アプリケーションコードをイベントに応じて実行するサービス',
                isCorrect: false,
                explanation:
                    'イベントをきっかけにコードを実行する代表的なサービスは AWS Lambda です。Route 53 はコード実行サービスではありません。',
            },
            {
                text: 'データベースの読み取り結果をメモリにキャッシュするサービス',
                isCorrect: false,
                explanation:
                    'キャッシュ用途には Amazon ElastiCache などが利用されます。Route 53 は DNS を中心とするネットワークサービスです。',
            },
        ],
        explanation:
            '利用者が `www.example.com` のような名前でサービスへアクセスできるようにする場面では、Route 53 が接続先へ導く役割を担います。',
    },
    {
        question:
            'S3 に保存した画像や静的 Web コンテンツを、世界中の利用者へ低い遅延で配信したい場合、最も適切なサービスはどれですか?',
        options: [
            {
                text: 'Amazon CloudFront',
                isCorrect: true,
                explanation:
                    'Amazon CloudFront は、エッジロケーションと呼ばれる世界各地の拠点を利用して、静的および動的な Web コンテンツの配信を高速化するサービスです。S3 をオリジン（元データの取得先）として使用できます。',
            },
            {
                text: 'Amazon EBS',
                isCorrect: false,
                explanation:
                    'EBS は EC2 に接続するディスク用途のストレージです。世界中の利用者へ Web コンテンツをキャッシュ配信するサービスではありません。',
            },
            {
                text: 'Amazon RDS',
                isCorrect: false,
                explanation:
                    'RDS はリレーショナルデータベースです。静的ファイルをエッジ拠点から配信する CDN（Content Delivery Network）の役割は担いません。',
            },
            {
                text: 'AWS Batch',
                isCorrect: false,
                explanation:
                    'AWS Batch はバッチジョブの実行を管理するサービスです。Web コンテンツの高速配信には利用しません。',
            },
        ],
        explanation:
            'S3 はファイルの保存先、CloudFront は利用者に近い場所からの高速配信を担う、という組み合わせは代表的な基本構成です。',
    },
    {
        question:
            'モバイルアプリから呼び出す HTTP API を公開し、リクエストの受け付けや監視、認可との連携を管理したい場合、候補として最も適切なサービスはどれですか?',
        options: [
            {
                text: 'Amazon API Gateway',
                isCorrect: true,
                explanation:
                    'Amazon API Gateway は、REST、HTTP、WebSocket API を作成、公開、維持、監視、保護するためのサービスです。Lambda や他のバックエンド処理への入口として利用できます。',
            },
            {
                text: 'Amazon EFS',
                isCorrect: false,
                explanation:
                    'EFS は共有ファイルシステムです。モバイルアプリ向け API の受付や管理を行うサービスではありません。',
            },
            {
                text: 'AWS Snow Family',
                isCorrect: false,
                explanation:
                    'Snow Family は大量データの物理移送などに関するサービスです。HTTP API の公開と管理には使用しません。',
            },
            {
                text: 'Amazon ElastiCache',
                isCorrect: false,
                explanation:
                    'ElastiCache はキャッシュに利用するサービスです。API のエンドポイントを公開・管理するサービスではありません。',
            },
        ],
        explanation:
            'API Gateway と Lambda を組み合わせると、HTTP API からサーバー管理を抑えたコード実行へつなぐ初歩的なサーバーレス構成を作れます。',
    },
    {
        question:
            '静的 Web サイト用のファイルを保存し、独自ドメインで世界中へ高速配信したい場合の基本的な組み合わせとして最も適切なものはどれですか?',
        options: [
            {
                text: 'Amazon S3、Amazon CloudFront、Amazon Route 53',
                isCorrect: true,
                explanation:
                    'S3 は静的ファイルの保存先、CloudFront はエッジ配信による高速化、Route 53 は独自ドメインの DNS ルーティングを担えます。それぞれの役割が要件に合います。',
            },
            {
                text: 'Amazon EBS、AWS Batch、Amazon Neptune',
                isCorrect: false,
                explanation:
                    'EBS は EC2 向けディスク、Batch はバッチ処理、Neptune はグラフデータベースです。静的サイトの保存・配信・名前解決を担う組み合わせではありません。',
            },
            {
                text: 'Amazon ElastiCache、AWS Backup、Amazon DocumentDB',
                isCorrect: false,
                explanation:
                    'これらはキャッシュ、バックアップ、ドキュメントデータベースのサービスであり、静的 Web コンテンツの公開構成として目的が異なります。',
            },
            {
                text: 'AWS WAF のみ',
                isCorrect: false,
                explanation:
                    'WAF は Web アプリケーションへの攻撃リクエストを検査・制御するサービスで、ファイル保存、配信、DNS の役割を単独で提供しません。',
            },
        ],
        explanation:
            'AWS の基本構成では、保存、配信、名前解決などをそれぞれ適したサービスに分けて組み合わせます。',
    },
    {
        question:
            '社内データセンターと AWS を、インターネットを経由する通常の VPN ではなく、専用のネットワーク接続で結びたい場合に検討するサービスはどれですか?',
        options: [
            {
                text: 'AWS Direct Connect',
                isCorrect: true,
                explanation:
                    'AWS Direct Connect は、オンプレミス環境から AWS への専用ネットワーク接続を確立するサービスです。インターネットベースの接続より、一貫したネットワーク体験や高い帯域が必要な場合に検討されます。',
            },
            {
                text: 'AWS Site-to-Site VPN',
                isCorrect: false,
                explanation:
                    'Site-to-Site VPN はオンプレミスと AWS の間を IPsec により安全に接続しますが、基本的には VPN 接続であり、専用線を提供する Direct Connect とは異なります。',
            },
            {
                text: 'Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'CloudFront はエンドユーザー向けのコンテンツ配信を高速化します。社内拠点と VPC を専用ネットワークで接続するサービスではありません。',
            },
            {
                text: 'Amazon DynamoDB',
                isCorrect: false,
                explanation:
                    'DynamoDB は NoSQL データベースです。オンプレミスと AWS のネットワーク接続を提供しません。',
            },
        ],
        explanation:
            'Direct Connect は専用接続、Site-to-Site VPN は暗号化された VPN 接続という基本的な違いを押さえます。可用性要件に応じて併用する設計もあります。',
    },
    {
        question:
            'オンプレミスのネットワークと Amazon VPC を、インターネット上の暗号化されたトンネルを使用して接続したい場合、最も適切なサービスはどれですか?',
        options: [
            {
                text: 'AWS Site-to-Site VPN',
                isCorrect: true,
                explanation:
                    'AWS Site-to-Site VPN は、オンプレミス機器と VPC などの AWS 側ネットワークを IPsec VPN 接続で結びます。通信は暗号化された VPN トンネルを通ります。',
            },
            {
                text: 'AWS Direct Connect のみ',
                isCorrect: false,
                explanation:
                    'Direct Connect は専用ネットワーク接続のサービスです。問題文が求めるインターネット上の暗号化 VPN トンネルに直接該当するのは Site-to-Site VPN です。',
            },
            {
                text: 'Amazon API Gateway',
                isCorrect: false,
                explanation:
                    'API Gateway は API を公開・管理するサービスです。社内ネットワークと VPC を VPN トンネルで接続するものではありません。',
            },
            {
                text: 'Amazon Aurora',
                isCorrect: false,
                explanation:
                    'Aurora はリレーショナルデータベースエンジンです。ネットワーク間の暗号化接続を提供しません。',
            },
        ],
        explanation:
            'Site-to-Site VPN は、オンプレミスと AWS のプライベートネットワークを比較的始めやすく安全に接続する基本的な手段です。',
    },
    {
        question:
            '複数の VPC とオンプレミス接続が増え、個別に多数の接続を管理するのではなく、中央のハブを介してネットワークを接続したい場合、候補として最も適切なものはどれですか?',
        options: [
            {
                text: 'AWS Transit Gateway',
                isCorrect: true,
                explanation:
                    'AWS Transit Gateway は、複数の VPC とオンプレミスネットワークなどを相互接続するネットワークの中継ハブとして利用できます。接続が増える環境で中心的なルーティングを構成する候補です。',
            },
            {
                text: 'Amazon S3',
                isCorrect: false,
                explanation:
                    'S3 はオブジェクトストレージです。VPC やオンプレミスネットワークを中継するネットワークハブではありません。',
            },
            {
                text: 'Amazon ElastiCache',
                isCorrect: false,
                explanation:
                    'ElastiCache はインメモリキャッシュサービスです。ネットワーク接続を集約する機能ではありません。',
            },
            {
                text: 'AWS Backup',
                isCorrect: false,
                explanation:
                    'AWS Backup はバックアップ計画を管理するサービスです。ネットワークの接続ハブにはなりません。',
            },
        ],
        explanation:
            'VPC が少数なら単純な接続方法もありますが、接続先が増えると Transit Gateway のようなハブ型構成が管理しやすくなる場合があります。',
    },
    {
        question:
            'プライベートサブネット内のアプリケーションから、インターネットゲートウェイや NAT デバイスを経由せずに、対応する AWS サービスや別アカウントのサービスへプライベートに接続したい場合、利用を検討するものはどれですか?',
        options: [
            {
                text: 'AWS PrivateLink',
                isCorrect: true,
                explanation:
                    'AWS PrivateLink は、VPC から対応サービスやリソースへ、公開 IP やインターネットゲートウェイ、NAT デバイスなどを使わずにプライベートに接続できる技術です。',
            },
            {
                text: 'Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'CloudFront は利用者へのコンテンツ配信を高速化するサービスです。プライベートサブネットからサービスへ非公開で接続する VPC エンドポイントの役割ではありません。',
            },
            {
                text: 'Amazon S3 Glacier Flexible Retrieval',
                isCorrect: false,
                explanation:
                    'これはアーカイブデータ向けの S3 ストレージクラスです。VPC とサービスのネットワーク接続方式ではありません。',
            },
            {
                text: 'Amazon Neptune',
                isCorrect: false,
                explanation:
                    'Neptune はグラフデータベースです。プライベート接続技術そのものではありません。',
            },
        ],
        explanation:
            'PrivateLink は、特定のサービスへのプライベート接続を提供する考え方です。複数ネットワーク全体を相互接続する Transit Gateway とは目的が異なります。',
    },
    {
        question:
            '世界各地の利用者がアクセスするアプリケーションで、固定のグローバル IP アドレスを入口にし、AWS のグローバルネットワークを通じて正常なリージョン内エンドポイントへトラフィックを導きたい場合、候補はどれですか?',
        options: [
            {
                text: 'AWS Global Accelerator',
                isCorrect: true,
                explanation:
                    'AWS Global Accelerator は、静的 IP アドレスを入口として提供し、AWS のグローバルネットワークを利用して、利用者の位置やエンドポイントの正常性などに基づき適切なリージョン内エンドポイントへトラフィックをルーティングできます。',
            },
            {
                text: 'Amazon EFS',
                isCorrect: false,
                explanation:
                    'EFS は共有ファイルシステムです。グローバルなアプリケーション通信の入口やルーティング最適化を提供しません。',
            },
            {
                text: 'Amazon RDS',
                isCorrect: false,
                explanation:
                    'RDS はデータベースサービスです。グローバルな固定 IP を提供して利用者トラフィックを最適化するサービスではありません。',
            },
            {
                text: 'AWS DataSync',
                isCorrect: false,
                explanation:
                    'DataSync はストレージ間のデータ転送に利用するサービスです。ユーザーのアプリケーションアクセスを最適なエンドポイントへ送るものではありません。',
            },
        ],
        explanation:
            'CloudFront は Web コンテンツのキャッシュ配信を中心に扱い、Global Accelerator はアプリケーション通信を AWS ネットワーク経由で適切なエンドポイントへ導く用途が代表的です。',
    },
    {
        question:
            'ネットワーク・配信・API に関するサービスの対応関係として最も適切なものはどれですか?',
        options: [
            {
                text: 'VPC は仮想ネットワーク、Elastic Load Balancing は負荷分散、Route 53 は DNS、CloudFront はコンテンツ配信、API Gateway は API 公開管理',
                isCorrect: true,
                explanation:
                    '各サービスの代表的な役割を正しく対応付けています。アプリケーション構成では、これらを必要に応じて組み合わせて利用します。',
            },
            {
                text: 'VPC はデータベース、Elastic Load Balancing はバックアップ、Route 53 はブロックストレージ、CloudFront は暗号鍵管理、API Gateway は物理データ移送',
                isCorrect: false,
                explanation:
                    '挙げられた役割はいずれも対応していません。ネットワーク、配信、API の役割をサービスごとに整理する必要があります。',
            },
            {
                text: 'VPC はキャッシュ、Elastic Load Balancing はメール送信、Route 53 はコンテナ実行、CloudFront は SQL データベース、API Gateway は共有ファイルシステム',
                isCorrect: false,
                explanation:
                    'これらは別カテゴリのサービスの役割が混在しています。VPC などのネットワーク関連サービスの基本用途とは異なります。',
            },
            {
                text: '五つのサービスはいずれも同じ DNS サービスであり、機能差はない',
                isCorrect: false,
                explanation:
                    'DNS を主に扱うのは Route 53 です。各サービスには仮想ネットワーク、負荷分散、配信、API 管理など異なる役割があります。',
            },
        ],
        explanation:
            '初級の段階では、要件の文中に「ネットワーク」「負荷分散」「ドメイン名」「世界中への配信」「API 公開」のどれが現れるかを見て、サービス候補を結び付けられることが重要です。',
    },
    {
        question:
            'AWS Identity and Access Management（IAM）の基本的な役割として最も適切なものはどれですか?',
        options: [
            {
                text: 'AWS リソースを誰がどのように利用できるかを認証・認可の観点で管理する',
                isCorrect: true,
                explanation:
                    'IAM は、AWS リソースへのアクセスを安全に制御するサービスです。ユーザーやロールなどのアイデンティティとポリシーを用いて、誰がどの操作を実行できるかを管理します。',
            },
            {
                text: '画像やログをオブジェクトとして保存する',
                isCorrect: false,
                explanation:
                    'オブジェクトストレージの代表例は Amazon S3 です。IAM はデータ保存サービスではなく、AWS リソースへのアクセス権限を管理します。',
            },
            {
                text: '世界各地のエッジ拠点からコンテンツを配信する',
                isCorrect: false,
                explanation:
                    'コンテンツ配信には Amazon CloudFront が利用されます。IAM は配信サービスではありません。',
            },
            {
                text: 'SQL データベースを運用する',
                isCorrect: false,
                explanation:
                    'SQL を扱うマネージドデータベースには Amazon RDS や Aurora などがあります。IAM はそれらへのアクセス権限を制御することはありますが、データベース本体ではありません。',
            },
        ],
        explanation:
            'IAM は AWS 環境全体の基本になるアクセス管理サービスです。日常作業でルートユーザーを使い続けるのではなく、必要な権限を適切なアイデンティティへ付与する考え方が重要です。',
    },
    {
        question:
            'S3 に保存するデータや EBS ボリュームなどを暗号化する際に利用する暗号鍵を、AWS 上で作成・制御したい場合、利用するサービスはどれですか?',
        options: [
            {
                text: 'AWS Key Management Service（AWS KMS）',
                isCorrect: true,
                explanation:
                    'AWS KMS は、データの暗号化や署名に使用する鍵を作成・制御するためのマネージドサービスです。多くの AWS サービスの暗号化機能と連携します。',
            },
            {
                text: 'AWS Secrets Manager',
                isCorrect: false,
                explanation:
                    'Secrets Manager はデータベース認証情報や API キーなどのシークレットを管理するサービスです。暗号化に使う鍵そのものの管理を主目的とするサービスは KMS です。',
            },
            {
                text: 'Amazon Route 53',
                isCorrect: false,
                explanation:
                    'Route 53 は DNS などのサービスです。暗号鍵の作成や管理を行いません。',
            },
            {
                text: 'Amazon ECS',
                isCorrect: false,
                explanation:
                    'ECS はコンテナを管理するサービスです。暗号鍵を作成・制御するサービスではありません。',
            },
        ],
        explanation:
            'KMS は「暗号化に使う鍵」を管理します。パスワードや API キーのようなアプリケーションが取得して使用する秘密情報は Secrets Manager と区別します。',
    },
    {
        question:
            'CloudFront や Application Load Balancer で HTTPS 通信を提供するため、SSL/TLS 証明書を発行・保管・更新管理したい場合に利用するサービスはどれですか?',
        options: [
            {
                text: 'AWS Certificate Manager（ACM）',
                isCorrect: true,
                explanation:
                    'ACM は、AWS の Web サイトやアプリケーションを保護する SSL/TLS 証明書の作成、保存、更新に伴う管理負担を軽減するサービスです。CloudFront やロードバランサーなど対応サービスと連携できます。',
            },
            {
                text: 'Amazon DynamoDB',
                isCorrect: false,
                explanation:
                    'DynamoDB は NoSQL データベースです。HTTPS 用証明書を発行・管理するサービスではありません。',
            },
            {
                text: 'AWS Batch',
                isCorrect: false,
                explanation:
                    'AWS Batch はバッチジョブ実行のサービスです。TLS 証明書管理には使用しません。',
            },
            {
                text: 'Amazon EFS',
                isCorrect: false,
                explanation:
                    'EFS は共有ファイルシステムです。証明書の発行や更新管理を行うものではありません。',
            },
        ],
        explanation:
            'ACM は HTTPS に必要な証明書を扱います。暗号鍵一般を管理する KMS や、アプリケーション用のパスワード等を管理する Secrets Manager とは目的が異なります。',
    },
    {
        question:
            'アプリケーションのソースコードにデータベースパスワードや API キーを直接書かず、安全に保管し、必要に応じて取得・ローテーションしたい場合、最も適切なサービスはどれですか?',
        options: [
            {
                text: 'AWS Secrets Manager',
                isCorrect: true,
                explanation:
                    'AWS Secrets Manager は、データベース認証情報、アプリケーション認証情報、OAuth トークン、API キーなどのシークレットをライフサイクル全体で管理・取得・ローテーションするためのサービスです。',
            },
            {
                text: 'AWS KMS の鍵名にパスワードを埋め込む',
                isCorrect: false,
                explanation:
                    'KMS は暗号鍵を管理するサービスであり、鍵名をアプリケーションのパスワード保管場所として使うものではありません。認証情報の管理には Secrets Manager が適切です。',
            },
            {
                text: 'Amazon CloudFront のキャッシュに API キーを保存する',
                isCorrect: false,
                explanation:
                    'CloudFront はコンテンツ配信のサービスです。機密情報の保存やローテーションを目的としたサービスではありません。',
            },
            {
                text: 'Amazon Route 53 の DNS レコードにパスワードを記録する',
                isCorrect: false,
                explanation:
                    'DNS レコードは接続先などの名前解決に利用するもので、機密情報の安全な保管場所ではありません。',
            },
        ],
        explanation:
            'シークレットをコードにハードコードしないことは基本的なセキュリティ対策です。アプリケーションは実行時に権限を用いて Secrets Manager から必要な情報を取得する設計を検討します。',
    },
    {
        question:
            'Web アプリケーションに送られる HTTP(S) リクエストを調べ、送信元 IP アドレスやリクエスト内容に基づいて悪意のあるリクエストを許可またはブロックしたい場合、利用するサービスはどれですか?',
        options: [
            {
                text: 'AWS WAF',
                isCorrect: true,
                explanation:
                    'AWS WAF（Web Application Firewall）は、保護対象の Web アプリケーションリソースへ送られる HTTP(S) リクエストを監視し、定義した条件に基づいてアクセスを制御します。',
            },
            {
                text: 'AWS Backup',
                isCorrect: false,
                explanation:
                    'AWS Backup はバックアップの管理に利用します。Web リクエストを検査してブロックするサービスではありません。',
            },
            {
                text: 'Amazon Neptune',
                isCorrect: false,
                explanation:
                    'Neptune はグラフデータベースです。Web アプリケーションへの不正リクエストをフィルタリングしません。',
            },
            {
                text: 'AWS DataSync',
                isCorrect: false,
                explanation:
                    'DataSync はデータ転送サービスです。HTTP(S) リクエストに基づくアクセス制御を行いません。',
            },
        ],
        explanation:
            'WAF は CloudFront、API Gateway REST API、Application Load Balancer などの Web アプリケーション向けリソースを保護できます。',
    },
    {
        question:
            'インターネット公開アプリケーションについて、DDoS（大量の通信でサービス提供を妨害する攻撃）への保護を強化したい場合に関連する AWS サービスはどれですか?',
        options: [
            {
                text: 'AWS Shield',
                isCorrect: true,
                explanation:
                    'AWS Shield は DDoS 攻撃に対する保護に関連するサービスです。AWS 上で提供される基本的な保護に加え、Shield Advanced では追加の DDoS 検知、緩和、対応機能を利用できます。',
            },
            {
                text: 'Amazon RDS',
                isCorrect: false,
                explanation:
                    'RDS はリレーショナルデータベースです。DDoS 防御を目的とするサービスではありません。',
            },
            {
                text: 'Amazon ECR',
                isCorrect: false,
                explanation:
                    'ECR はコンテナイメージを保存するレジストリです。DDoS 攻撃への保護を提供するサービスではありません。',
            },
            {
                text: 'AWS Glue',
                isCorrect: false,
                explanation:
                    'Glue はデータ統合やカタログに関するサービスです。インターネット向けアプリケーションの DDoS 防御には利用しません。',
            },
        ],
        explanation:
            'WAF は HTTP(S) リクエストのルールベース制御、Shield は DDoS 保護という観点で役割が異なります。両者を組み合わせる構成もあります。',
    },
    {
        question:
            'AWS 環境のログやデータソースを継続的に分析し、不正な認証情報利用や不審な通信、暗号資産マイニングなどの脅威を検出したい場合、候補はどれですか?',
        options: [
            {
                text: 'Amazon GuardDuty',
                isCorrect: true,
                explanation:
                    'Amazon GuardDuty は脅威検出サービスで、AWS 環境のデータソースやログを継続的に監視・分析し、不審または悪意のある可能性があるアクティビティに対する所見を生成します。',
            },
            {
                text: 'AWS Certificate Manager',
                isCorrect: false,
                explanation:
                    'ACM は TLS 証明書を管理するサービスです。ログを継続分析して脅威検出の所見を生成する役割ではありません。',
            },
            {
                text: 'Amazon S3 Glacier Deep Archive',
                isCorrect: false,
                explanation:
                    'S3 Glacier Deep Archive は長期アーカイブ用のストレージクラスです。不審な挙動を検出する脅威検出サービスではありません。',
            },
            {
                text: 'Amazon Lightsail',
                isCorrect: false,
                explanation:
                    'Lightsail は小規模な Web サイトなどを始めやすくするサービスです。AWS 環境全体の脅威検出サービスではありません。',
            },
        ],
        explanation:
            'GuardDuty は「攻撃や不審な活動が発生していないか」を検知する用途です。ソフトウェア脆弱性を継続スキャンする Inspector とは焦点が異なります。',
    },
    {
        question:
            'Amazon EC2 インスタンス、Amazon ECR のコンテナイメージ、AWS Lambda 関数について、ソフトウェア脆弱性や意図しないネットワーク公開を継続的に検査したい場合、候補はどれですか?',
        options: [
            {
                text: 'Amazon Inspector',
                isCorrect: true,
                explanation:
                    'Amazon Inspector は脆弱性管理サービスで、対象ワークロードを自動検出し、EC2、ECR のコンテナイメージ、Lambda 関数などについてソフトウェア脆弱性や意図しないネットワーク露出を継続的にスキャンします。',
            },
            {
                text: 'Amazon Route 53',
                isCorrect: false,
                explanation:
                    'Route 53 は DNS などを扱うサービスです。ソフトウェア脆弱性のスキャンは行いません。',
            },
            {
                text: 'Amazon SQS',
                isCorrect: false,
                explanation:
                    'SQS はメッセージキューサービスです。EC2 やコンテナイメージの脆弱性を検査しません。',
            },
            {
                text: 'AWS Budgets',
                isCorrect: false,
                explanation:
                    'AWS Budgets は予算の管理と通知に利用するサービスです。ワークロードの脆弱性管理を行いません。',
            },
        ],
        explanation:
            'Inspector は脆弱性や意図しない公開状態の発見、GuardDuty は不審な活動や脅威の検出という比較で覚えると用途を分けやすくなります。',
    },
    {
        question:
            'Amazon S3 バケットに個人情報や認証番号のような機密データが含まれていないかを発見し、データセキュリティリスクを把握したい場合、利用するサービスはどれですか?',
        options: [
            {
                text: 'Amazon Macie',
                isCorrect: true,
                explanation:
                    'Amazon Macie は、機械学習やパターンマッチングを利用して Amazon S3 内の機密データを発見し、S3 データのセキュリティリスクに関する可視性を提供するサービスです。',
            },
            {
                text: 'Amazon ECS',
                isCorrect: false,
                explanation:
                    'ECS はコンテナを実行・管理するサービスです。S3 内の機密データを検出するサービスではありません。',
            },
            {
                text: 'Amazon EBS',
                isCorrect: false,
                explanation:
                    'EBS は EC2 向けブロックストレージです。S3 バケットに含まれる機密データの発見を目的とするサービスではありません。',
            },
            {
                text: 'AWS Direct Connect',
                isCorrect: false,
                explanation:
                    'Direct Connect は専用ネットワーク接続を提供するサービスです。機密データの検出や分類を行いません。',
            },
        ],
        explanation:
            'Macie は S3 に保存されたデータの中身や公開状態のリスクを把握する用途で使われます。脅威活動の検出を中心とする GuardDuty と役割を分けて理解します。',
    },
    {
        question:
            'GuardDuty、Inspector、Macie など複数のセキュリティサービスが生成する所見を集約し、AWS 環境のセキュリティ状態やベストプラクティスへの準拠状況を一元的に把握したい場合、候補はどれですか?',
        options: [
            {
                text: 'AWS Security Hub CSPM',
                isCorrect: true,
                explanation:
                    'AWS Security Hub CSPM（Cloud Security Posture Management）は、AWS 環境のセキュリティ状態を包括的に可視化し、セキュリティ標準に対するチェックを行い、GuardDuty、Inspector、Macie などの所見を集約できます。',
            },
            {
                text: 'Amazon EFS',
                isCorrect: false,
                explanation:
                    'EFS は共有ファイルシステムです。複数のセキュリティサービスの所見を集約・優先付けするサービスではありません。',
            },
            {
                text: 'Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'CloudFront はコンテンツ配信を高速化するサービスです。セキュリティ所見の集中管理を行いません。',
            },
            {
                text: 'AWS Batch',
                isCorrect: false,
                explanation:
                    'AWS Batch はバッチ処理を実行するサービスです。セキュリティ態勢の評価や所見集約を担うものではありません。',
            },
        ],
        explanation:
            '各検出サービスがそれぞれ所見を作り、Security Hub CSPM が複数サービス・複数アカウントにまたがる状況を集約して把握しやすくする、という整理が基本です。',
    },
    {
        question:
            '自社の従業員が複数の AWS アカウントや業務用クラウドアプリケーションへサインインするためのアクセスを、一元的に管理したい場合に利用を検討するサービスはどれですか?',
        options: [
            {
                text: 'AWS IAM Identity Center',
                isCorrect: true,
                explanation:
                    'AWS IAM Identity Center は、従業員などのワークフォースユーザーを作成または接続し、複数の AWS アカウントや対応するアプリケーションへのアクセスを一元管理するためのサービスです。',
            },
            {
                text: 'Amazon Cognito のみが従業員向け AWS アカウント管理の専用サービスである',
                isCorrect: false,
                explanation:
                    'Amazon Cognito は主に Web やモバイルアプリの利用者認証に用いるアイデンティティプラットフォームです。従業員の AWS アカウントアクセスを集中的に管理する要件では IAM Identity Center が候補になります。',
            },
            {
                text: 'Amazon S3',
                isCorrect: false,
                explanation:
                    'S3 はオブジェクトストレージです。従業員のサインインや複数アカウントのアクセスを管理しません。',
            },
            {
                text: 'Amazon OpenSearch Service',
                isCorrect: false,
                explanation:
                    'OpenSearch Service は検索・分析サービスです。ワークフォースのサインインアクセスを一元管理するサービスではありません。',
            },
        ],
        explanation:
            'IAM は AWS リソースへの権限管理の基礎、IAM Identity Center はワークフォースの複数アカウントやアプリへのサインイン管理で利用するサービスとして整理できます。',
    },
    {
        question:
            '一般利用者向けの Web アプリケーションで、ユーザーのサインアップ、サインイン、Google など外部 ID プロバイダーとの連携を実装したい場合、候補はどれですか?',
        options: [
            {
                text: 'Amazon Cognito',
                isCorrect: true,
                explanation:
                    'Amazon Cognito は Web およびモバイルアプリ向けのアイデンティティプラットフォームです。ユーザーディレクトリ、認証、外部 ID プロバイダーとの連携などを提供します。',
            },
            {
                text: 'AWS IAM Identity Center を顧客向けサインアップ画面の唯一の標準サービスとして使用する',
                isCorrect: false,
                explanation:
                    'IAM Identity Center は主に従業員などのワークフォースユーザーの AWS アカウントや業務アプリへのアクセス管理に利用します。一般顧客向けアプリ認証では Cognito が代表的な候補です。',
            },
            {
                text: 'AWS Shield',
                isCorrect: false,
                explanation:
                    'Shield は DDoS 保護に関するサービスです。アプリユーザーの登録やログイン機能を提供しません。',
            },
            {
                text: 'Amazon EBS',
                isCorrect: false,
                explanation:
                    'EBS は EC2 向けディスクです。Web アプリケーション利用者の認証基盤ではありません。',
            },
        ],
        explanation:
            'Cognito はアプリ利用者、IAM Identity Center は社内ユーザーなどのワークフォースという区別を押さえると、認証サービスの選択を誤りにくくなります。',
    },
    {
        question:
            'AWS WAF と AWS Shield の違いとして最も適切な説明はどれですか?',
        options: [
            {
                text: 'WAF は HTTP(S) リクエストをルールで検査・制御し、Shield は DDoS 攻撃への保護に関連する',
                isCorrect: true,
                explanation:
                    'WAF は Web リクエストの内容や送信元などをもとに許可・ブロックを制御します。Shield は大量通信などによる DDoS 攻撃への防御を中心とするサービスです。',
            },
            {
                text: 'WAF はデータベースサービスで、Shield はオブジェクトストレージサービスである',
                isCorrect: false,
                explanation:
                    'WAF と Shield はどちらも Web アプリケーション等の保護に関係するサービスであり、データベースやストレージではありません。',
            },
            {
                text: 'WAF は暗号鍵を作成し、Shield は TLS 証明書を発行する',
                isCorrect: false,
                explanation:
                    '暗号鍵には KMS、TLS 証明書には ACM が対応します。WAF と Shield の役割ではありません。',
            },
            {
                text: 'WAF と Shield はどちらもユーザーのサインアップ情報を管理するサービスである',
                isCorrect: false,
                explanation:
                    'アプリユーザーの認証には Cognito などが利用されます。WAF と Shield は外部攻撃への防御に関係します。',
            },
        ],
        explanation:
            'Web アプリケーションの保護では、攻撃の性質に応じてサービスを使い分け、必要に応じて組み合わせます。',
    },
    {
        question:
            'セキュリティサービスの用途の対応関係として最も適切なものはどれですか?',
        options: [
            {
                text: 'KMS は暗号鍵管理、Secrets Manager は認証情報等の秘密管理、GuardDuty は脅威検出、Inspector は脆弱性管理、Macie は S3 の機密データ発見',
                isCorrect: true,
                explanation:
                    '各サービスの代表的な役割を正しく対応付けています。暗号化、シークレット、脅威、脆弱性、機密データ発見は似て見えても目的が異なります。',
            },
            {
                text: 'KMS は DNS、Secrets Manager は CDN、GuardDuty はファイル共有、Inspector は SQL データベース、Macie はコンテナ実行',
                isCorrect: false,
                explanation:
                    'これらは全て誤った対応です。サービス名ではなく、解決したいセキュリティ課題から役割を結び付ける必要があります。',
            },
            {
                text: '五つのサービスはいずれも同じ TLS 証明書更新専用サービスである',
                isCorrect: false,
                explanation:
                    'TLS 証明書管理を主に担うのは ACM です。KMS、Secrets Manager、GuardDuty、Inspector、Macie は異なるセキュリティ課題を扱います。',
            },
            {
                text: '五つのサービスはいずれもバックアップ保存先であり、セキュリティ機能は持たない',
                isCorrect: false,
                explanation:
                    'いずれもセキュリティ関連の役割を持つサービスであり、単なるバックアップ保存先ではありません。',
            },
        ],
        explanation:
            'セキュリティ分野はサービス名が多いため、「守る対象」と「検出・防御・管理のどれをするか」で整理すると理解しやすくなります。',
    },
    {
        question:
            'Amazon Simple Queue Service（Amazon SQS）の基本的な役割として最も適切なものはどれですか?',
        options: [
            {
                text: '処理したいメッセージをキューに保持し、送信側と受信側を疎結合にするサービス',
                isCorrect: true,
                explanation:
                    'Amazon SQS は、メッセージをキューに保持し、プロデューサーとコンシューマーがそれぞれの速度で処理できるようにするマネージドなメッセージキューサービスです。',
            },
            {
                text: 'ドメイン名を IP アドレスへ対応付ける DNS サービス',
                isCorrect: false,
                explanation:
                    'DNS を担う代表的なサービスは Amazon Route 53 です。SQS は処理待ちのメッセージを保持するキューです。',
            },
            {
                text: 'TLS 証明書を発行・更新するサービス',
                isCorrect: false,
                explanation:
                    '証明書の管理には AWS Certificate Manager が利用されます。SQS は証明書を管理しません。',
            },
            {
                text: '複数のテーブルを SQL で結合して検索するデータベースサービス',
                isCorrect: false,
                explanation:
                    'SQL を利用するデータベースには RDS や Aurora などがあります。SQS はデータベースではなくメッセージキューです。',
            },
        ],
        explanation:
            'SQS は、注文処理や画像処理のように、依頼をいったん受け取り、後続処理が可能な速度で取り出して実行する構成でよく利用されます。',
    },
    {
        question:
            '注文受付 API が、後続の在庫更新処理の完了を待つため応答が遅くなっています。注文をいったん受け付け、後続処理を非同期で実行できるようにするための候補はどれですか?',
        options: [
            {
                text: '注文メッセージを Amazon SQS キューへ送信し、ワーカーが後で取得して処理する',
                isCorrect: true,
                explanation:
                    'SQS に処理依頼を保持させると、受付側は後続処理と切り離され、ワーカーはキューからメッセージを取り出して処理できます。負荷の急増をキューで受け止める用途にも合います。',
            },
            {
                text: 'Amazon Route 53 の DNS レコードへ注文内容を保存する',
                isCorrect: false,
                explanation:
                    'Route 53 は名前解決のサービスであり、処理依頼を保持して非同期処理するキューではありません。',
            },
            {
                text: 'AWS Certificate Manager に注文を証明書として登録する',
                isCorrect: false,
                explanation:
                    'ACM は証明書管理サービスです。業務メッセージの処理待ちキューには使用しません。',
            },
            {
                text: 'Amazon CloudFront のエッジキャッシュを注文処理キューとして利用する',
                isCorrect: false,
                explanation:
                    'CloudFront はコンテンツ配信のキャッシュです。処理依頼をワーカーへ確実に引き渡すメッセージキューではありません。',
            },
        ],
        explanation:
            '疎結合とは、送信側と処理側が同じタイミングで直接処理し続けなくても連携できるようにする考え方です。SQS はその基本サービスです。',
    },
    {
        question:
            'Amazon Simple Notification Service（Amazon SNS）の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'トピックに発行したメッセージを、複数の購読先へ配信できる通知・Pub/Sub サービス',
                isCorrect: true,
                explanation:
                    'Amazon SNS は、発行者がトピックへ送信したメッセージを、SQS キュー、Lambda 関数、HTTP(S)、メール、SMS などの複数購読先へ配信できるサービスです。',
            },
            {
                text: 'EC2 に接続するディスクを提供するサービス',
                isCorrect: false,
                explanation:
                    'EC2 向けのディスクは Amazon EBS です。SNS は通知やメッセージ配信に用います。',
            },
            {
                text: 'コンテナを Kubernetes で管理するサービス',
                isCorrect: false,
                explanation:
                    'Kubernetes を AWS 上で扱うサービスは Amazon EKS です。SNS はコンテナ管理サービスではありません。',
            },
            {
                text: '暗号鍵を作成・制御するサービス',
                isCorrect: false,
                explanation:
                    '暗号鍵管理には AWS KMS を使用します。SNS はメッセージを購読先へ配信するサービスです。',
            },
        ],
        explanation:
            'SNS は、ひとつの出来事を複数の受け手に知らせたいときに適しています。メール通知とシステム処理を同じイベントから開始する構成などが例です。',
    },
    {
        question:
            'システム障害が発生したとき、運用担当者へのメール通知と、別システムでの自動対応処理の両方へ同じ通知を配信したい場合、候補として最も適切なものはどれですか?',
        options: [
            {
                text: 'Amazon SNS のトピックへ通知を発行し、複数の購読先へ配信する',
                isCorrect: true,
                explanation:
                    'SNS はひとつのトピックに発行されたメッセージを複数の購読先へ配信できます。メールと Lambda や SQS などへ同じ通知をファンアウトする用途に合います。',
            },
            {
                text: 'Amazon EBS ボリュームを複数作成して通知を保存する',
                isCorrect: false,
                explanation:
                    'EBS はブロックストレージです。通知を購読先へ即時配信する Pub/Sub サービスではありません。',
            },
            {
                text: 'Amazon RDS のテーブルを DNS として利用する',
                isCorrect: false,
                explanation:
                    'RDS はリレーショナルデータベースで、通知配信用のトピックサービスではありません。また DNS として使用する説明も不適切です。',
            },
            {
                text: 'AWS WAF のルールをメール購読先として登録する',
                isCorrect: false,
                explanation:
                    'WAF は Web リクエストの制御を行います。メールなど複数の購読先へ通知を配信するサービスではありません。',
            },
        ],
        explanation:
            'SNS のファンアウトでは、同じメッセージを複数のシステムへ渡せます。処理先ごとに確実に保持したい場合、SNS から複数の SQS キューへ配信する構成もあります。',
    },
    {
        question:
            'Amazon EventBridge の基本的な役割として最も適切なものはどれですか?',
        options: [
            {
                text: 'アプリケーションや AWS サービスからのイベントを受け取り、ルールに一致したイベントを対象の処理へルーティングするサービス',
                isCorrect: true,
                explanation:
                    'Amazon EventBridge はイベントでアプリケーションコンポーネントをつなぐサーバーレスサービスです。イベントバスがイベントを受け、定義したルールに基づいて Lambda や Step Functions などのターゲットへ届けられます。',
            },
            {
                text: 'EC2 インスタンスの OS ディスクを提供するサービス',
                isCorrect: false,
                explanation:
                    'OS ディスクなどには EBS が利用されます。EventBridge はストレージではなく、イベントルーティングのサービスです。',
            },
            {
                text: 'データを長期アーカイブするストレージクラス',
                isCorrect: false,
                explanation:
                    '長期アーカイブには S3 Glacier 系ストレージクラスなどがあります。EventBridge はデータ保管サービスではありません。',
            },
            {
                text: 'アプリユーザーのサインインを管理するサービス',
                isCorrect: false,
                explanation:
                    'Web やモバイルアプリのユーザー認証には Cognito などが利用されます。EventBridge はイベントによる連携を担います。',
            },
        ],
        explanation:
            'EventBridge は、「どの出来事が起きたら、どの処理へ届けるか」をルールで構成するイベント駆動アーキテクチャで利用されます。',
    },
    {
        question:
            'EC2 インスタンスの状態変更やアプリケーションのイベントを受け取り、イベント内容に応じて異なる Lambda 関数や Step Functions ワークフローへ振り分けたい場合、適切なサービスはどれですか?',
        options: [
            {
                text: 'Amazon EventBridge',
                isCorrect: true,
                explanation:
                    'EventBridge は複数のソースからイベントを取り込み、イベントパターンに一致したものを複数のターゲットへルーティングできます。イベント内容で処理先を分けたい要件に合います。',
            },
            {
                text: 'Amazon S3 Glacier Deep Archive',
                isCorrect: false,
                explanation:
                    'S3 Glacier Deep Archive は長期保存用のストレージクラスです。イベント内容に基づいて処理先を振り分ける機能ではありません。',
            },
            {
                text: 'AWS Certificate Manager',
                isCorrect: false,
                explanation:
                    'ACM は TLS 証明書を管理するサービスです。イベントルーティングを提供しません。',
            },
            {
                text: 'Amazon FSx for Windows File Server',
                isCorrect: false,
                explanation:
                    'FSx for Windows File Server は Windows 互換の共有ファイルシステムです。イベント処理先の振り分けには利用しません。',
            },
        ],
        explanation:
            'SQS はメッセージをキューに保持して処理を待たせる用途、SNS は購読先への配信、EventBridge はイベント内容によるルーティングが代表的な違いです。',
    },
    {
        question:
            'AWS Step Functions の説明として最も適切なものはどれですか?',
        options: [
            {
                text: '複数の処理をステップとして定義し、順序、分岐、待機、失敗時の流れなどを管理するワークフローサービス',
                isCorrect: true,
                explanation:
                    'AWS Step Functions は、ステートマシンと呼ばれるワークフローを作成し、分散アプリケーションやマイクロサービスの処理手順をオーケストレーションするサービスです。',
            },
            {
                text: 'ドメイン名を登録し DNS で名前解決するサービス',
                isCorrect: false,
                explanation:
                    'ドメイン登録や DNS は Route 53 の代表的な機能です。Step Functions は処理の流れを管理します。',
            },
            {
                text: 'EC2 にアタッチするディスクの性能を設定するサービス',
                isCorrect: false,
                explanation:
                    'EC2 のブロックストレージには EBS を利用します。Step Functions はストレージ管理ではありません。',
            },
            {
                text: 'S3 内の機密データを発見するサービス',
                isCorrect: false,
                explanation:
                    'S3 の機密データ発見には Amazon Macie を利用します。Step Functions は処理手順を管理するワークフローサービスです。',
            },
        ],
        explanation:
            'Step Functions は、たとえば「注文を検証する、決済する、在庫を更新する、通知する」のような複数段階の処理を可視化しながら管理できます。',
    },
    {
        question:
            '画像処理パイプラインで、「画像を検査する」「変換処理を実行する」「成功なら保存し、失敗なら通知する」という処理の順序や分岐を管理したい場合、最も適切なサービスはどれですか?',
        options: [
            {
                text: 'AWS Step Functions',
                isCorrect: true,
                explanation:
                    'Step Functions は、複数ステップの処理順序、条件分岐、エラー処理などをワークフローとして管理できます。Lambda や他の AWS サービスをタスクとして呼び出す構成が可能です。',
            },
            {
                text: 'Amazon Route 53',
                isCorrect: false,
                explanation:
                    'Route 53 は DNS やヘルスチェックを扱います。アプリケーション処理の順序や分岐を管理しません。',
            },
            {
                text: 'Amazon EFS',
                isCorrect: false,
                explanation:
                    'EFS は共有ファイルシステムです。画像ファイルの保存先として関係する場合はありますが、処理ワークフローを制御するサービスではありません。',
            },
            {
                text: 'AWS Shield',
                isCorrect: false,
                explanation:
                    'Shield は DDoS 防御に関連します。処理の順序や失敗分岐を管理するものではありません。',
            },
        ],
        explanation:
            'ひとつの通知やイベントを届けるだけでなく、複数の処理を決められた流れで進める要件では Step Functions が候補になります。',
    },
    {
        question:
            'オンプレミスで Apache ActiveMQ や RabbitMQ を利用しているアプリケーションを AWS へ移行し、既存のメッセージングプロトコルやコードとの互換性を重視したい場合、候補はどれですか?',
        options: [
            {
                text: 'Amazon MQ',
                isCorrect: true,
                explanation:
                    'Amazon MQ は Apache ActiveMQ Classic と RabbitMQ のマネージドメッセージブローカーサービスです。既存の標準メッセージングプロトコルやコードとの互換性を維持した移行で候補になります。',
            },
            {
                text: 'Amazon SQS は既存ブローカーの全プロトコル互換をそのまま提供するため、常にコード変更なしで置き換えられる',
                isCorrect: false,
                explanation:
                    'SQS は新規アプリケーションの疎結合化などで使いやすいキューサービスですが、既存の ActiveMQ や RabbitMQ のプロトコル互換性をそのまま提供するサービスではありません。',
            },
            {
                text: 'Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'CloudFront はコンテンツ配信サービスです。メッセージブローカーを提供しません。',
            },
            {
                text: 'AWS KMS',
                isCorrect: false,
                explanation:
                    'KMS は暗号鍵管理サービスです。既存のメッセージブローカー互換環境を提供するものではありません。',
            },
        ],
        explanation:
            '新規のシンプルな非同期連携では SQS や SNS が候補になりやすく、既存ブローカー互換性が重要な移行では Amazon MQ が候補になります。',
    },
    {
        question:
            'メッセージング・イベント・ワークフローサービスの用途の対応関係として最も適切なものはどれですか?',
        options: [
            {
                text: 'SQS はキュー保持、SNS は複数購読先への通知、EventBridge はイベントルールによるルーティング、Step Functions は処理手順管理、Amazon MQ は既存ブローカー互換性を意識した移行候補',
                isCorrect: true,
                explanation:
                    '各サービスの代表的な用途を正しく整理しています。同じ非同期連携に関係するサービスでも、メッセージを待たせるのか、配信するのか、振り分けるのか、処理の流れを管理するのかで選択肢が変わります。',
            },
            {
                text: 'SQS は DNS、SNS はブロックストレージ、EventBridge は TLS 証明書、Step Functions はオブジェクトストレージ、Amazon MQ は CDN',
                isCorrect: false,
                explanation:
                    'これらはすべて誤った対応です。メッセージング関連サービスと、ネットワーク・ストレージ・証明書などのサービスを混同しています。',
            },
            {
                text: '五つのサービスはいずれも SQL リレーショナルデータベースであり、メッセージ連携には使わない',
                isCorrect: false,
                explanation:
                    'いずれもメッセージングやイベント連携、ワークフローに関わるサービスです。データベースサービスではありません。',
            },
            {
                text: '五つのサービスはいずれも DDoS 防御専用であり、処理の非同期化には使えない',
                isCorrect: false,
                explanation:
                    'DDoS 防御は AWS Shield などが関係します。SQS、SNS、EventBridge、Step Functions、Amazon MQ は非同期処理や連携に利用されます。',
            },
        ],
        explanation:
            '「後で処理したい」「複数へ知らせたい」「内容で振り分けたい」「手順を管理したい」「既存ブローカーを移行したい」のどれかを識別すると、適したサービスを選びやすくなります。',
    },
    {
        question:
            'Amazon CloudWatch の基本的な役割として最も適切なものはどれですか?',
        options: [
            {
                text: 'AWS リソースやアプリケーションのメトリクス、ログ、アラームなどを用いて稼働状況を監視する',
                isCorrect: true,
                explanation:
                    'Amazon CloudWatch は、AWS リソースや AWS 上で動作するアプリケーションをリアルタイムで監視し、メトリクス、ログ、ダッシュボード、アラームなどを通じて運用状況を把握するためのサービスです。',
            },
            {
                text: 'ユーザーやロールが実行した AWS API 操作の監査記録だけを作成する',
                isCorrect: false,
                explanation:
                    'API 操作の記録と監査を中心に扱うサービスは AWS CloudTrail です。CloudWatch は性能や稼働状況の監視、ログ確認、アラームなどを扱います。',
            },
            {
                text: 'S3 内の個人情報を自動発見する',
                isCorrect: false,
                explanation:
                    'S3 の機密データ発見には Amazon Macie が利用されます。CloudWatch は監視・可観測性のサービスです。',
            },
            {
                text: 'オンプレミスから AWS へ物理デバイスでデータを移送する',
                isCorrect: false,
                explanation:
                    '大量データの物理移送には AWS Snow Family などが関係します。CloudWatch はデータ移送サービスではありません。',
            },
        ],
        explanation:
            'CloudWatch は「システムが今どう動いているか」を観察するための基本サービスです。CPU 使用率のメトリクスやアプリケーションログに対するアラームなどが代表例です。',
    },
    {
        question:
            'EC2 インスタンスの CPU 使用率が高くなったときに運用担当者へ通知し、アプリケーションログもまとめて確認したい場合、主に利用するサービスはどれですか?',
        options: [
            {
                text: 'Amazon CloudWatch',
                isCorrect: true,
                explanation:
                    'CloudWatch ではメトリクスを監視してしきい値に基づくアラームを設定でき、CloudWatch Logs でアプリケーションログなどを収集・検索できます。',
            },
            {
                text: 'AWS CloudTrail',
                isCorrect: false,
                explanation:
                    'CloudTrail は AWS API 操作履歴を記録するサービスです。CPU 使用率の監視や一般的なアプリケーションログ確認を主目的とするものではありません。',
            },
            {
                text: 'AWS Certificate Manager',
                isCorrect: false,
                explanation:
                    'ACM は TLS 証明書の管理を行います。CPU 使用率の監視やログ収集には利用しません。',
            },
            {
                text: 'Amazon S3 Glacier Deep Archive',
                isCorrect: false,
                explanation:
                    'S3 Glacier Deep Archive はアーカイブ用途のストレージクラスです。即時の監視や通知に用いるサービスではありません。',
            },
        ],
        explanation:
            '稼働メトリクスやログを観察し、障害の兆候に応じてアラームを出す要件では CloudWatch が中心になります。',
    },
    {
        question:
            'AWS CloudTrail の基本的な役割として最も適切なものはどれですか?',
        options: [
            {
                text: 'ユーザー、ロール、AWS サービスなどが行った AWS API 操作をイベントとして記録し、監査や調査に利用できるようにする',
                isCorrect: true,
                explanation:
                    'AWS CloudTrail は、AWS Management Console、AWS CLI、SDK、API などを通じて行われたアクションをイベントとして記録し、運用監査、ガバナンス、コンプライアンス、セキュリティ調査に役立てるサービスです。',
            },
            {
                text: 'EC2 の CPU 使用率を継続監視し、メトリクスアラームを作ることだけを目的とする',
                isCorrect: false,
                explanation:
                    'CPU 使用率などのメトリクス監視とアラームは CloudWatch の代表的な用途です。CloudTrail は誰がどの AWS 操作をしたかの履歴を扱います。',
            },
            {
                text: 'コンテンツを世界中のエッジ拠点からキャッシュ配信する',
                isCorrect: false,
                explanation:
                    'これは CloudFront の役割です。CloudTrail はコンテンツ配信サービスではありません。',
            },
            {
                text: 'データベースパスワードをローテーションする',
                isCorrect: false,
                explanation:
                    'データベース認証情報などの管理とローテーションには Secrets Manager が利用されます。CloudTrail は操作履歴を記録します。',
            },
        ],
        explanation:
            '「誰が S3 バケット設定を変えたか」「いつ IAM ロールが変更されたか」を調べるような要件では CloudTrail が重要です。',
    },
    {
        question:
            'セキュリティグループの設定が過去にどのように変更され、現在の社内ルールに準拠しているかを評価したい場合、最も適切なサービスはどれですか?',
        options: [
            {
                text: 'AWS Config',
                isCorrect: true,
                explanation:
                    'AWS Config は AWS リソースの設定や関連性、過去の構成履歴を記録・可視化し、Config ルールにより設定が求める条件に準拠しているかを評価できます。',
            },
            {
                text: 'Amazon SNS',
                isCorrect: false,
                explanation:
                    'SNS は通知を複数の購読先へ配信するサービスです。リソース構成履歴や準拠状態を評価する役割ではありません。',
            },
            {
                text: 'Amazon ECR',
                isCorrect: false,
                explanation:
                    'ECR はコンテナイメージを保存するサービスです。セキュリティグループの構成履歴を評価しません。',
            },
            {
                text: 'AWS Fargate',
                isCorrect: false,
                explanation:
                    'Fargate はコンテナの実行基盤です。AWS リソースの設定変更履歴と準拠状況の確認を提供しません。',
            },
        ],
        explanation:
            'CloudTrail は設定変更操作を誰が実行したかを記録し、Config はリソースがどう設定されていたかやルールへの準拠を扱う、という違いがあります。',
    },
    {
        question:
            '多数の EC2 インスタンスについて、OS パッチ適用、コマンド実行、パラメータの管理などの日常的な運用作業を一元的に行いたい場合、候補となるサービスはどれですか?',
        options: [
            {
                text: 'AWS Systems Manager',
                isCorrect: true,
                explanation:
                    'AWS Systems Manager は、AWS 上やハイブリッド環境のノードを管理するための運用管理サービスです。EC2 のパッチ管理、コマンド実行、パラメータ管理などの機能を利用できます。',
            },
            {
                text: 'Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'CloudFront はコンテンツ配信サービスです。EC2 の OS パッチ適用や管理コマンド実行には利用しません。',
            },
            {
                text: 'Amazon Neptune',
                isCorrect: false,
                explanation:
                    'Neptune はグラフデータベースです。サーバー運用管理のサービスではありません。',
            },
            {
                text: 'AWS Transfer Family',
                isCorrect: false,
                explanation:
                    'Transfer Family は SFTP などのファイル転送を提供します。EC2 のパッチ管理やパラメータ管理を担いません。',
            },
        ],
        explanation:
            'Systems Manager は、複数のサーバーを運用する際の管理作業をまとめやすくするサービスです。監視が中心の CloudWatch とは役割が異なります。',
    },
    {
        question:
            'AWS 環境を点検し、コスト削減、性能、可用性、セキュリティ上の改善機会に関する推奨事項を確認したい場合に利用するサービスはどれですか?',
        options: [
            {
                text: 'AWS Trusted Advisor',
                isCorrect: true,
                explanation:
                    'AWS Trusted Advisor は、AWS のベストプラクティスに基づき環境を検査し、コスト削減、システムの可用性や性能の改善、セキュリティ上の改善機会などに関する推奨事項を提示します。',
            },
            {
                text: 'Amazon API Gateway',
                isCorrect: false,
                explanation:
                    'API Gateway は API を公開・管理するサービスです。AWS 環境全体に対するベストプラクティス推奨を提示するものではありません。',
            },
            {
                text: 'Amazon SQS',
                isCorrect: false,
                explanation:
                    'SQS はメッセージキューです。コストや可用性などに関する環境レビューの推奨事項を提供しません。',
            },
            {
                text: 'AWS KMS',
                isCorrect: false,
                explanation:
                    'KMS は暗号鍵を管理するサービスです。環境全体の改善推奨を提示するサービスではありません。',
            },
        ],
        explanation:
            'Trusted Advisor の利用可能なチェック範囲はサポートプランにより異なる場合があります。初級では、AWS 環境の改善推奨を確認するサービスとして押さえます。',
    },
    {
        question:
            '利用中の AWS リソースやサービスに影響する障害、変更、計画メンテナンスなどについて、自分のアカウントに関連する情報を確認したい場合、候補はどれですか?',
        options: [
            {
                text: 'AWS Health',
                isCorrect: true,
                explanation:
                    'AWS Health は、AWS サービスやアカウント、リソースの可用性や性能に関する情報を提供し、利用中のアプリケーションに影響し得るイベントや計画作業を把握する助けになります。',
            },
            {
                text: 'Amazon DynamoDB',
                isCorrect: false,
                explanation:
                    'DynamoDB は NoSQL データベースです。AWS サービスの障害やメンテナンスイベントの通知サービスではありません。',
            },
            {
                text: 'AWS WAF',
                isCorrect: false,
                explanation:
                    'WAF は Web リクエストを検査・制御します。AWS 側のサービスイベントや計画メンテナンスの案内を提供する役割ではありません。',
            },
            {
                text: 'Amazon EFS',
                isCorrect: false,
                explanation:
                    'EFS は共有ファイルシステムです。アカウントに関連するサービス健全性イベントを確認するサービスではありません。',
            },
        ],
        explanation:
            'CloudWatch は自分のリソースのメトリクスやログ監視、AWS Health は AWS 側のイベントが自分の利用環境へ及ぼす影響の把握という観点で区別します。',
    },
    {
        question:
            'EC2 インスタンス数や VPC 数など、AWS サービスに設定された利用上限を確認し、必要に応じて引き上げを申請したい場合に利用するサービスはどれですか?',
        options: [
            {
                text: 'Service Quotas',
                isCorrect: true,
                explanation:
                    'Service Quotas は、AWS サービスのクォータ（利用上限）を一元的に確認・管理し、調整可能な上限について引き上げをリクエストできるサービスです。',
            },
            {
                text: 'Amazon Macie',
                isCorrect: false,
                explanation:
                    'Macie は S3 に保存された機密データの発見に利用します。サービス利用上限の管理は行いません。',
            },
            {
                text: 'Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'CloudFront はコンテンツ配信サービスです。複数サービスのクォータを確認・申請するためのサービスではありません。',
            },
            {
                text: 'Amazon Aurora',
                isCorrect: false,
                explanation:
                    'Aurora はリレーショナルデータベースです。AWS サービス全体の利用上限を集中管理するものではありません。',
            },
        ],
        explanation:
            '自動スケーリングや障害時切り替えを計画していても、必要数のリソースを作成できるクォータが不足していると構成が成立しません。上限確認は運用上重要です。',
    },
    {
        question:
            'API Gateway、Lambda、データベースなど複数サービスを経由するリクエストについて、どの処理で遅延やエラーが発生しているかを追跡したい場合、利用する候補はどれですか?',
        options: [
            {
                text: 'AWS X-Ray',
                isCorrect: true,
                explanation:
                    'AWS X-Ray はアプリケーションが処理したリクエストに関するトレースデータを収集し、下流の AWS リソース、マイクロサービス、データベース、Web API への呼び出しを含めて遅延や問題の分析に役立てます。',
            },
            {
                text: 'Amazon S3 Glacier Flexible Retrieval',
                isCorrect: false,
                explanation:
                    'S3 Glacier Flexible Retrieval はアーカイブ向けストレージクラスです。アプリケーションリクエストの処理経路をトレースしません。',
            },
            {
                text: 'AWS IAM Identity Center',
                isCorrect: false,
                explanation:
                    'IAM Identity Center はワークフォースのアクセス管理に利用します。分散アプリケーションのリクエスト遅延追跡を行うサービスではありません。',
            },
            {
                text: 'Amazon FSx for Windows File Server',
                isCorrect: false,
                explanation:
                    'FSx for Windows File Server は共有ファイルシステムです。API リクエストの処理経路を追跡するトレーシングサービスではありません。',
            },
        ],
        explanation:
            'メトリクスとログを広く確認する CloudWatch に対し、X-Ray は個々のリクエストが複数サービスをどう通過したかの追跡に適しています。',
    },
    {
        question:
            '監視・監査・運用管理サービスの用途の対応関係として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudWatch はメトリクスとログ監視、CloudTrail は API 操作記録、Config は構成履歴と準拠評価、Systems Manager はサーバー運用管理、X-Ray はリクエスト追跡',
                isCorrect: true,
                explanation:
                    '各サービスの代表的な用途を正しく対応付けています。運用では、障害の兆候を見る、操作履歴を確認する、設定の変化を評価する、管理作業を行う、処理の遅延を追うといった目的で使い分けます。',
            },
            {
                text: 'CloudWatch はメール送信、CloudTrail は CDN、Config はコンテナ実行、Systems Manager は長期アーカイブ、X-Ray は DNS',
                isCorrect: false,
                explanation:
                    'これらはいずれも誤った対応です。監視・監査・運用系のサービスを別カテゴリの機能と混同しています。',
            },
            {
                text: '五つのサービスはいずれも同じ SQL データベースであり、運用情報は扱わない',
                isCorrect: false,
                explanation:
                    'これらは監視、監査、構成管理、運用、トレースに関するサービスであり、SQL データベースではありません。',
            },
            {
                text: '五つのサービスはいずれも DDoS 防御専用であり、ログや操作記録には使わない',
                isCorrect: false,
                explanation:
                    'DDoS 防御には Shield などが関係します。CloudWatch や CloudTrail などは運用可視化や監査記録で重要です。',
            },
        ],
        explanation:
            '運用系サービスは、何を観測・記録・管理したいかで切り分けます。「稼働状況」「操作履歴」「設定状態」「管理作業」「処理経路」が代表的なキーワードです。',
    },
    {
        question:
            'AWS CloudFormation の基本的な用途として最も適切なものはどれですか?',
        options: [
            {
                text: 'JSON や YAML のテンプレートで AWS リソースを定義し、スタックとして作成・更新・削除を管理する',
                isCorrect: true,
                explanation:
                    'CloudFormation はテンプレートに記述した AWS リソースをスタックという単位で管理します。IaC（Infrastructure as Code: インフラをコードで定義する考え方）を実現する代表的なサービスです。',
            },
            {
                text: 'コンテナイメージを保存し、ECS や EKS から取得できるようにする',
                isCorrect: false,
                explanation:
                    'コンテナイメージの保管には Amazon ECR が適しています。CloudFormation はインフラの構成をテンプレートから作成・管理するサービスです。',
            },
            {
                text: 'ソースコードをコンパイルし、テスト結果とビルド成果物を作成する',
                isCorrect: false,
                explanation:
                    'ビルドとテストの実行には AWS CodeBuild が適しています。CloudFormation はビルド処理ではなく、AWS リソースの構築と管理に使います。',
            },
            {
                text: 'アプリケーションの API 呼び出しを記録し、監査ログとして保存する',
                isCorrect: false,
                explanation:
                    'AWS API 操作の記録は AWS CloudTrail の役割です。CloudFormation はリソース定義とプロビジョニングを担当します。',
            },
        ],
        explanation:
            'CloudFormation は、同じ構成を再現可能な形で構築したい場合に利用するサービスです。テンプレート、スタック、IaC というキーワードを押さえます。',
    },
    {
        question:
            '開発環境と本番環境に、同じ構成の VPC、EC2、RDS を繰り返し作成したい場合に最も適した AWS サービスはどれですか?',
        options: [
            {
                text: 'AWS CloudFormation',
                isCorrect: true,
                explanation:
                    'CloudFormation のテンプレートに構成を定義すると、環境ごとに一貫したリソース群をスタックとして作成できます。手作業の構築差異を減らす用途に適しています。',
            },
            {
                text: 'Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'CloudFront は CDN（Content Delivery Network: コンテンツ配信ネットワーク）であり、VPC や RDS をテンプレートから構築する用途ではありません。',
            },
            {
                text: 'Amazon Inspector',
                isCorrect: false,
                explanation:
                    'Inspector はワークロードの脆弱性管理に関するサービスです。環境構築の再現には CloudFormation が適しています。',
            },
            {
                text: 'Amazon Simple Notification Service (Amazon SNS)',
                isCorrect: false,
                explanation:
                    'SNS はメッセージ通知の配信に使用します。複数リソースからなる環境を定義して作成するサービスではありません。',
            },
        ],
        explanation:
            '複数の AWS リソースを同じ構成で繰り返し用意する要件では、CloudFormation のテンプレートによる自動構築が代表的な選択肢です。',
    },
    {
        question:
            'AWS Cloud Development Kit (AWS CDK) の説明として最も適切なものはどれですか?',
        options: [
            {
                text: 'TypeScript や Python などのプログラミング言語でクラウドインフラを定義し、CloudFormation を通じてデプロイできる開発フレームワーク',
                isCorrect: true,
                explanation:
                    'AWS CDK は、使い慣れたプログラミング言語でインフラを定義できます。定義内容は CloudFormation テンプレートに合成され、CloudFormation によりリソースとして反映されます。',
            },
            {
                text: '本番サーバーへアプリケーションを段階的に配布するデプロイ専用サービス',
                isCorrect: false,
                explanation:
                    'デプロイ作業の自動化には AWS CodeDeploy が関係します。CDK はインフラをプログラムで定義するためのフレームワークです。',
            },
            {
                text: 'コンテナを実行するためのサーバーレスコンピューティングエンジン',
                isCorrect: false,
                explanation:
                    'コンテナのサーバーレス実行には AWS Fargate が利用できます。CDK 自体がコンテナを実行するものではありません。',
            },
            {
                text: 'データウェアハウス上で SQL 分析を実行するサービス',
                isCorrect: false,
                explanation:
                    '分析用データウェアハウスには Amazon Redshift などが関係します。CDK はクラウドインフラ定義のためのツールです。',
            },
        ],
        explanation:
            'CDK は CloudFormation と競合するものではなく、プログラムによる定義を CloudFormation の仕組みにつなげる方法として理解します。',
    },
    {
        question:
            'ソースコードの変更を受け取り、コンパイルや単体テストを実行して、デプロイに使う成果物を作成するマネージドサービスはどれですか?',
        options: [
            {
                text: 'AWS CodeBuild',
                isCorrect: true,
                explanation:
                    'CodeBuild はソースコードをコンパイルし、テストを実行し、デプロイ可能な成果物を作成するマネージドビルドサービスです。ビルドサーバーを自身で管理する負担を減らせます。',
            },
            {
                text: 'AWS CodeDeploy',
                isCorrect: false,
                explanation:
                    'CodeDeploy は作成済みのアプリケーションを対象環境へ配備する役割です。コンパイルやテストによる成果物作成の主役は CodeBuild です。',
            },
            {
                text: 'AWS CloudFormation',
                isCorrect: false,
                explanation:
                    'CloudFormation は AWS リソースの構成をテンプレートから作成・管理するサービスです。ソースコードをビルドするサービスではありません。',
            },
            {
                text: 'Amazon Route 53',
                isCorrect: false,
                explanation:
                    'Route 53 は DNS（Domain Name System: ドメイン名を宛先に対応付ける仕組み）などを提供します。ビルド処理には使用しません。',
            },
        ],
        explanation:
            'CodeBuild は CI（Continuous Integration: 継続的インテグレーション）のビルド・テスト部分を担うサービスとして整理します。',
    },
    {
        question:
            'リポジトリへの変更を契機に、ビルド、テスト、デプロイといったリリース工程を順番に自動実行したい場合に最も適したサービスはどれですか?',
        options: [
            {
                text: 'AWS CodePipeline',
                isCorrect: true,
                explanation:
                    'CodePipeline はソース取得、ビルド、テスト、デプロイなどのステージを組み合わせ、変更に応じたリリースワークフローを自動化します。',
            },
            {
                text: 'Amazon Elastic Container Registry (Amazon ECR)',
                isCorrect: false,
                explanation:
                    'ECR はコンテナイメージのレジストリです。リリース工程全体の流れを組み立てて自動実行する役割は CodePipeline が担います。',
            },
            {
                text: 'AWS Key Management Service (AWS KMS)',
                isCorrect: false,
                explanation:
                    'KMS は暗号化キーの管理に使います。リリース工程のオーケストレーションを行うサービスではありません。',
            },
            {
                text: 'Amazon Elastic File System (Amazon EFS)',
                isCorrect: false,
                explanation:
                    'EFS は共有ファイルストレージです。ソース変更からデプロイまでの工程を自動化するサービスではありません。',
            },
        ],
        explanation:
            'CodePipeline は CI/CD（継続的インテグレーション/継続的デリバリー）における工程の流れを管理します。個々のビルドやデプロイ処理は別サービスと連携できます。',
    },
    {
        question:
            'アプリケーションの新しいバージョンを EC2 インスタンス、オンプレミスサーバー、Lambda 関数、または ECS サービスへ自動的に配備したい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'AWS CodeDeploy',
                isCorrect: true,
                explanation:
                    'CodeDeploy は EC2、オンプレミスインスタンス、Lambda、ECS などへのアプリケーションデプロイを自動化するサービスです。',
            },
            {
                text: 'AWS CodeBuild',
                isCorrect: false,
                explanation:
                    'CodeBuild は主にビルドとテスト、成果物の作成を担当します。対象環境への配備を自動化する役割には CodeDeploy が適しています。',
            },
            {
                text: 'Amazon S3 Glacier Deep Archive',
                isCorrect: false,
                explanation:
                    'S3 Glacier Deep Archive は長期保存向けの低頻度アクセスストレージクラスです。アプリケーション配備のサービスではありません。',
            },
            {
                text: 'AWS Config',
                isCorrect: false,
                explanation:
                    'Config は AWS リソース構成の記録と評価に使います。アプリケーションのデプロイ自動化は担当しません。',
            },
        ],
        explanation:
            'CodeDeploy は「どこへアプリケーションを配るか」に関係するサービスです。CodeBuild の「作る」、CodePipeline の「流れを管理する」と区別します。',
    },
    {
        question:
            'ECS や EKS で実行するコンテナアプリケーションのイメージを保存し、必要なときに取得できるようにする AWS サービスはどれですか?',
        options: [
            {
                text: 'Amazon Elastic Container Registry (Amazon ECR)',
                isCorrect: true,
                explanation:
                    'Amazon ECR はマネージドコンテナイメージレジストリです。コンテナイメージを保存し、ECS や EKS などでの実行時に取得できます。',
            },
            {
                text: 'AWS CodePipeline',
                isCorrect: false,
                explanation:
                    'CodePipeline はリリース工程を自動化するサービスであり、コンテナイメージを保存するレジストリではありません。',
            },
            {
                text: 'AWS Secrets Manager',
                isCorrect: false,
                explanation:
                    'Secrets Manager はパスワードや API キーなどの機密情報管理に使用します。コンテナイメージの保存先ではありません。',
            },
            {
                text: 'Amazon EventBridge',
                isCorrect: false,
                explanation:
                    'EventBridge はイベントの受信やルーティングに利用します。コンテナイメージを保管するサービスではありません。',
            },
        ],
        explanation:
            'ECR の R は Registry です。コンテナイメージの保存場所という役割を、コンテナの実行環境である ECS や EKS と分けて理解します。',
    },
    {
        question:
            'インフラ構築・デプロイに関する AWS サービスの用途の対応関係として最も適切なものはどれですか?',
        options: [
            {
                text: 'CloudFormation はテンプレートによるインフラ構築、CDK はプログラミング言語によるインフラ定義、CodeBuild はビルドとテスト、CodePipeline はリリース工程の自動化、CodeDeploy は配備、ECR はコンテナイメージ保管',
                isCorrect: true,
                explanation:
                    '各サービスの代表的な役割を正しく対応付けています。構築、定義方法、ビルド、工程管理、配備、イメージ保管を分けて覚えると整理しやすくなります。',
            },
            {
                text: 'CloudFormation は DNS、CDK は監査ログ、CodeBuild はメール送信、CodePipeline は SQL データベース、CodeDeploy は暗号鍵管理、ECR は DDoS 防御',
                isCorrect: false,
                explanation:
                    'いずれも誤った対応です。インフラ構築やデプロイ関連サービスを、ネットワーク、監査、データベース、セキュリティ機能と混同しています。',
            },
            {
                text: 'すべてのサービスが同じ目的のコンテナ実行サービスであり、役割の違いはない',
                isCorrect: false,
                explanation:
                    'これらのサービスには、インフラ定義、ビルド、パイプライン管理、デプロイ、イメージ保存という異なる役割があります。',
            },
            {
                text: 'すべてのサービスがバックアップ専用であり、アプリケーションの提供工程には関係しない',
                isCorrect: false,
                explanation:
                    'これらはインフラ作成やアプリケーションのリリース工程に関係するサービスです。バックアップ専用サービスではありません。',
            },
        ],
        explanation:
            'デプロイ周辺のサービスは似た文脈で登場するため、何を作るか、どの工程を管理するか、何を保管するかで切り分けて理解します。',
    },
    {
        question:
            'Amazon S3 に保存された CSV や JSON 形式のログデータを、サーバーやクラスターを管理せずに SQL で対話的に分析したい場合に最も適したサービスはどれですか?',
        options: [
            {
                text: 'Amazon Athena',
                isCorrect: true,
                explanation:
                    'Athena は Amazon S3 上のデータに対して標準 SQL を使った対話的なクエリを実行できるサービスです。分析のために専用サーバーやクラスターを管理する必要がありません。',
            },
            {
                text: 'Amazon Elastic Block Store (Amazon EBS)',
                isCorrect: false,
                explanation:
                    'EBS は主に EC2 に接続するブロックストレージです。S3 上のデータを SQL で分析するサービスではありません。',
            },
            {
                text: 'AWS CodeDeploy',
                isCorrect: false,
                explanation:
                    'CodeDeploy はアプリケーションのデプロイを自動化するサービスです。保存されたログデータへの SQL 分析には Athena が適しています。',
            },
            {
                text: 'Amazon Simple Queue Service (Amazon SQS)',
                isCorrect: false,
                explanation:
                    'SQS はメッセージをキューに保持して非同期処理に利用するサービスです。S3 データへのアドホックな SQL クエリは提供しません。',
            },
        ],
        explanation:
            'Athena は、S3 のデータを素早く調査したい場面で使いやすいサービスです。アドホック分析とは、定型処理ではなく必要に応じてその場で行う分析を指します。',
    },
    {
        question:
            '複数のデータソースからデータを取り込み、変換して分析用に準備し、データのスキーマをカタログとして管理したい場合に最も適したサービスはどれですか?',
        options: [
            {
                text: 'AWS Glue',
                isCorrect: true,
                explanation:
                    'AWS Glue はサーバーレスのデータ統合サービスです。ETL（Extract, Transform, Load: 抽出・変換・格納）処理や AWS Glue Data Catalog によるメタデータ管理に利用できます。',
            },
            {
                text: 'Amazon Route 53',
                isCorrect: false,
                explanation:
                    'Route 53 は DNS やドメインに関するサービスです。データ変換やスキーマのカタログ管理は AWS Glue の用途です。',
            },
            {
                text: 'AWS Shield',
                isCorrect: false,
                explanation:
                    'Shield は DDoS（Distributed Denial of Service: 分散型サービス拒否）攻撃への防御に関するサービスです。データ統合処理には使いません。',
            },
            {
                text: 'Amazon EC2 Auto Scaling',
                isCorrect: false,
                explanation:
                    'EC2 Auto Scaling は需要に応じた EC2 台数の調整に使います。データを変換しカタログ化するサービスではありません。',
            },
        ],
        explanation:
            'AWS Glue は分析前のデータ準備とメタデータ管理で重要です。Athena などが、Glue Data Catalog に登録されたテーブル情報を利用して分析できます。',
    },
    {
        question:
            '大規模な分析データを蓄積し、BI ツールなどから SQL を使って集計・分析するクラウドデータウェアハウスサービスはどれですか?',
        options: [
            {
                text: 'Amazon Redshift',
                isCorrect: true,
                explanation:
                    'Amazon Redshift はフルマネージドのデータウェアハウスサービスです。大量の分析データに対する SQL クエリや BI（Business Intelligence: データを可視化・分析して意思決定に役立てる仕組み）用途に適しています。',
            },
            {
                text: 'Amazon DynamoDB',
                isCorrect: false,
                explanation:
                    'DynamoDB は低レイテンシーのキー値・ドキュメントアクセスを中心とした NoSQL データベースです。分析データウェアハウスの代表的な選択肢は Redshift です。',
            },
            {
                text: 'Amazon Elastic Container Registry (Amazon ECR)',
                isCorrect: false,
                explanation:
                    'ECR はコンテナイメージを保存するレジストリです。SQL による分析用データウェアハウスではありません。',
            },
            {
                text: 'AWS Certificate Manager (ACM)',
                isCorrect: false,
                explanation:
                    'ACM は TLS 証明書の発行・管理に利用します。分析データの蓄積や集計を担当するサービスではありません。',
            },
        ],
        explanation:
            'Redshift は、大量のデータを継続的に集計・分析するデータウェアハウスの用途で覚えます。S3 上のデータをその場で問い合わせる Athena とは代表的な使い分けがあります。',
    },
    {
        question:
            'Web サイトのクリック情報やセンサーデータを連続して受け取り、複数のコンシューマーアプリケーションがリアルタイムに処理できるストリームを用意したい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'Amazon Kinesis Data Streams',
                isCorrect: true,
                explanation:
                    'Kinesis Data Streams は、プロデューサーが継続的に送信するデータレコードをストリームに保持し、コンシューマーがリアルタイムに読み取り処理する用途に適しています。',
            },
            {
                text: 'Amazon Data Firehose',
                isCorrect: false,
                explanation:
                    'Data Firehose はストリーミングデータを S3 や Redshift などの送達先へ配信する用途に適しています。複数の独自コンシューマーがストリームを直接処理する要件では Kinesis Data Streams が代表的です。',
            },
            {
                text: 'AWS Backup',
                isCorrect: false,
                explanation:
                    'AWS Backup はバックアップを一元的に管理するサービスです。リアルタイムデータストリームの受け取りと処理には使いません。',
            },
            {
                text: 'Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'CloudFront はコンテンツ配信を高速化する CDN です。リアルタイムイベントをストリームとして処理するサービスではありません。',
            },
        ],
        explanation:
            'Kinesis Data Streams は、ストリーム上のレコードをアプリケーションが読み取り処理する場面を中心に理解します。データを保存先へ届けることが主目的なら Data Firehose と比較します。',
    },
    {
        question:
            'アプリケーションから継続的に送られるログを、独自の配信プログラムを管理せずに Amazon S3 や Amazon Redshift などへ届けたい場合に最も適したサービスはどれですか?',
        options: [
            {
                text: 'Amazon Data Firehose',
                isCorrect: true,
                explanation:
                    'Amazon Data Firehose は、リアルタイムのストリーミングデータを S3、Redshift、OpenSearch Service などの宛先へ配信するフルマネージドサービスです。配信前の変換も構成できます。',
            },
            {
                text: 'Amazon Kinesis Data Streams',
                isCorrect: false,
                explanation:
                    'Kinesis Data Streams はアプリケーションがストリームを読み取って処理する構成に向きます。管理する処理を減らして所定の宛先へ配信する要件では Data Firehose が適しています。',
            },
            {
                text: 'AWS CloudFormation',
                isCorrect: false,
                explanation:
                    'CloudFormation はテンプレートに基づいて AWS リソースを構築・管理するサービスです。ストリーミングログを宛先へ継続配信するサービスではありません。',
            },
            {
                text: 'Amazon Cognito',
                isCorrect: false,
                explanation:
                    'Cognito はアプリケーション利用者の認証やユーザーディレクトリに関するサービスです。ログデータの送達は担当しません。',
            },
        ],
        explanation:
            'Data Firehose は「流れてくるデータを指定した保存・分析先へ届ける」用途で覚えます。名前に Kinesis を含んでいた過去の表記と混同しないよう、現行名は Amazon Data Firehose です。',
    },
    {
        question:
            '分析データからダッシュボードやインタラクティブな可視化を作成して組織で共有したい場合に利用できる、Amazon Quick の可視化機能はどれですか?',
        options: [
            {
                text: 'Amazon Quick Sight',
                isCorrect: true,
                explanation:
                    'Amazon Quick Sight は、Amazon Quick 内でデータ可視化、ダッシュボード共有、埋め込み分析などを提供する機能です。旧 Amazon QuickSight の既存機能は Quick Sight として継続しています。',
            },
            {
                text: 'AWS CloudTrail',
                isCorrect: false,
                explanation:
                    'CloudTrail は AWS API 操作の記録と監査に使います。分析結果をダッシュボードとして可視化・共有する機能ではありません。',
            },
            {
                text: 'Amazon Simple Email Service (Amazon SES)',
                isCorrect: false,
                explanation:
                    'SES はメール送信・受信に関するサービスです。BI ダッシュボードを作成するためのサービスではありません。',
            },
            {
                text: 'Amazon Virtual Private Cloud (Amazon VPC)',
                isCorrect: false,
                explanation:
                    'VPC は AWS 上のネットワーク環境を構成するサービスです。データ可視化やダッシュボード共有の機能ではありません。',
            },
        ],
        explanation:
            'Amazon QuickSight は Amazon Quick にリブランドされ、可視化に関する既存機能は Amazon Quick Sight として位置付けられています。学習時は現在の名称と従来の名称の対応を把握しておくと混乱を避けられます。',
    },
    {
        question:
            'Apache Spark や Apache Hadoop などのオープンソースのビッグデータフレームワークを AWS 上で利用し、大量データを処理・分析したい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'Amazon EMR',
                isCorrect: true,
                explanation:
                    'Amazon EMR は Apache Spark や Apache Hadoop などのビッグデータフレームワークを AWS 上で実行しやすくするマネージドプラットフォームです。大量データの処理や分析に利用できます。',
            },
            {
                text: 'Amazon Route 53',
                isCorrect: false,
                explanation:
                    'Route 53 は DNS やヘルスチェックなどのネットワーク関連サービスです。Spark や Hadoop による大規模処理を提供しません。',
            },
            {
                text: 'AWS Secrets Manager',
                isCorrect: false,
                explanation:
                    'Secrets Manager は認証情報などの機密情報を安全に管理するサービスです。ビッグデータフレームワークの実行基盤ではありません。',
            },
            {
                text: 'Amazon Elastic Load Balancing (ELB)',
                isCorrect: false,
                explanation:
                    'ELB は受信トラフィックを複数のターゲットへ分散します。大規模なデータ分析フレームワークを実行するサービスではありません。',
            },
        ],
        explanation:
            'EMR は以前の名称 Amazon Elastic MapReduce に由来しますが、現在は Spark や Hadoop を含む複数の大規模データ処理フレームワークを扱うサービスとして理解します。',
    },
    {
        question:
            'Amazon S3 上のデータレイクと AWS Glue Data Catalog のメタデータについて、テーブルや列、行単位などの細かなアクセス制御を一元的に管理したい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'AWS Lake Formation',
                isCorrect: true,
                explanation:
                    'Lake Formation はデータレイクのデータとカタログメタデータに対するアクセス制御を中央管理できます。分析利用者ごとに参照可能なデータ範囲を細かく制御したい場面に適しています。',
            },
            {
                text: 'Amazon Elastic Container Service (Amazon ECS)',
                isCorrect: false,
                explanation:
                    'ECS はコンテナ化されたアプリケーションを実行・管理するサービスです。データレイクの細かな権限統制には Lake Formation を利用します。',
            },
            {
                text: 'AWS CodeBuild',
                isCorrect: false,
                explanation:
                    'CodeBuild はソースコードのビルドやテストに使います。分析データへの列・行レベルのアクセス管理を行うサービスではありません。',
            },
            {
                text: 'Amazon Lightsail',
                isCorrect: false,
                explanation:
                    'Lightsail は比較的簡単に仮想サーバー等を利用するためのサービスです。データレイクのガバナンスは提供しません。',
            },
        ],
        explanation:
            'Lake Formation は「分析データを誰がどこまで見られるか」を管理するサービスとして整理します。Glue のカタログ管理や Athena の問い合わせと連携する場面があります。',
    },
    {
        question:
            '既存の Apache Kafka を利用するアプリケーションを大きく書き換えずに、AWS 上で Kafka クラスターの運用負担を抑えてストリーミングデータを扱いたい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'Amazon Managed Streaming for Apache Kafka (Amazon MSK)',
                isCorrect: true,
                explanation:
                    'Amazon MSK は Apache Kafka を使用するアプリケーション向けのフルマネージドサービスです。Kafka のプロデューサーやコンシューマーの仕組みを利用しながら、クラスター管理の負担を軽減できます。',
            },
            {
                text: 'Amazon Athena',
                isCorrect: false,
                explanation:
                    'Athena は主に S3 上のデータを SQL で問い合わせるサービスです。Apache Kafka クラスターの提供や管理を行いません。',
            },
            {
                text: 'AWS Identity and Access Management (IAM)',
                isCorrect: false,
                explanation:
                    'IAM は AWS リソースへの認証・認可を管理します。Kafka 互換のストリーミング基盤を実行するサービスではありません。',
            },
            {
                text: 'Amazon Elastic File System (Amazon EFS)',
                isCorrect: false,
                explanation:
                    'EFS は複数のコンピューティングリソースから利用できるファイルストレージです。Kafka クラスターのマネージド運用には使いません。',
            },
        ],
        explanation:
            'MSK は Managed Streaming for Apache Kafka の略です。AWS 独自のストリーミング API を中心に使う Kinesis Data Streams と、Kafka 互換性を重視する MSK を用途で区別します。',
    },
    {
        question:
            'S3 に保管したアクセスログのスキーマを自動検出してカタログ化し、その情報を利用して SQL で必要なログだけを調査したい場合に適した組み合わせはどれですか?',
        options: [
            {
                text: 'AWS Glue Data Catalog と Amazon Athena',
                isCorrect: true,
                explanation:
                    'AWS Glue のクローラーなどでデータのスキーマをカタログに登録し、Athena がそのテーブル情報を利用して S3 上のログに SQL クエリを実行する構成が適しています。',
            },
            {
                text: 'AWS Shield と Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'Shield と CloudFront は主に DDoS 防御やコンテンツ配信に関係します。ログのスキーマ検出と SQL 分析を行う組み合わせではありません。',
            },
            {
                text: 'Amazon ECR と AWS CodeDeploy',
                isCorrect: false,
                explanation:
                    'ECR と CodeDeploy はコンテナイメージ保管やアプリケーション配備に関係します。S3 ログのカタログ化や分析の組み合わせではありません。',
            },
            {
                text: 'Amazon Cognito と AWS Certificate Manager',
                isCorrect: false,
                explanation:
                    'Cognito と ACM は認証や TLS 証明書に関係します。分析対象データのカタログ化と SQL クエリには利用しません。',
            },
        ],
        explanation:
            'Glue Data Catalog はデータの構造を管理し、Athena はその構造を基に S3 のデータを問い合わせます。データを別のデータベースへ必ず移す必要はありません。',
    },
    {
        question:
            'リアルタイムデータを扱うサービスの使い分けとして最も適切なものはどれですか?',
        options: [
            {
                text: '独自のコンシューマーでストリームを処理するなら Kinesis Data Streams、S3 や Redshift などへ管理負担を抑えて配信するなら Amazon Data Firehose、Apache Kafka 互換性を重視するなら Amazon MSK',
                isCorrect: true,
                explanation:
                    'Kinesis Data Streams はストリームをアプリケーションが消費する用途、Data Firehose は指定宛先への配信、MSK は Apache Kafka を用いるアプリケーション向けという代表的な使い分けです。',
            },
            {
                text: 'Kinesis Data Streams は DNS 管理、Data Firehose は証明書発行、MSK は静的 Web 配信に使用する',
                isCorrect: false,
                explanation:
                    'いずれもストリーミングデータ処理とは異なる機能です。DNS は Route 53、証明書は ACM、配信は CloudFront などが関係します。',
            },
            {
                text: '三つとも S3 に保存されたファイルを SQL で直接検索するためだけの同一サービスである',
                isCorrect: false,
                explanation:
                    'S3 上のファイルへの SQL 分析は Athena の代表的用途です。これら三つはストリーミングデータの取り込み・配信・処理基盤に関係します。',
            },
            {
                text: '三つとも EC2 インスタンスの台数を自動調整するサービスであり、データ処理には使用しない',
                isCorrect: false,
                explanation:
                    'EC2 の台数調整は EC2 Auto Scaling に関する用途です。Kinesis Data Streams、Data Firehose、MSK はストリーミングデータに関係します。',
            },
        ],
        explanation:
            'ストリーミング系サービスは、アプリケーションが読み取って処理するか、宛先への配信を任せるか、Kafka 互換性が必要かを見て選びます。',
    },
    {
        question:
            '分析・データ処理サービスの用途の対応関係として最も適切なものはどれですか?',
        options: [
            {
                text: 'Athena は S3 データへの SQL 問い合わせ、Glue はデータ統合とカタログ、Redshift はデータウェアハウス、Quick Sight は可視化、EMR は大規模分散処理、Lake Formation はデータレイクのアクセス統制',
                isCorrect: true,
                explanation:
                    '各サービスの代表的な役割を正しく対応付けています。分析では、準備、問い合わせ、蓄積・集計、可視化、処理基盤、ガバナンスを目的に応じて組み合わせます。',
            },
            {
                text: 'Athena はコンテナ保管、Glue はメール送信、Redshift は DNS、Quick Sight は暗号鍵管理、EMR は証明書発行、Lake Formation はロードバランサー',
                isCorrect: false,
                explanation:
                    'これらは誤った対応です。分析・データ処理のサービスを、コンテナ、メール、ネットワーク、セキュリティのサービスと混同しています。',
            },
            {
                text: 'すべてのサービスは仮想サーバーを起動するためのサービスであり、分析用途の違いはない',
                isCorrect: false,
                explanation:
                    'これらは分析の異なる工程を担当します。仮想サーバーの提供を中心とする EC2 とは役割が異なります。',
            },
            {
                text: 'すべてのサービスは同じバックアップ保管サービスであり、SQL や可視化には利用できない',
                isCorrect: false,
                explanation:
                    'Athena や Redshift は SQL 分析、Quick Sight は可視化に関係します。バックアップ専用のサービス群ではありません。',
            },
        ],
        explanation:
            '分析サービスは、データを準備する、問い合わせる、集計する、見せる、処理する、統制するという段階に分けると整理しやすくなります。',
    },
    {
        question:
            '複数の提供元が提供する基盤モデルを API から利用し、文章生成や要約などの生成 AI アプリケーションを構築したい場合に最も適したサービスはどれですか?',
        options: [
            {
                text: 'Amazon Bedrock',
                isCorrect: true,
                explanation:
                    'Amazon Bedrock は、Amazon やサードパーティーの基盤モデルを利用して生成 AI アプリケーションを構築するためのフルマネージドサービスです。FM（Foundation Model: 大量データで事前学習された汎用モデル）を API で利用できます。',
            },
            {
                text: 'Amazon Elastic Block Store (Amazon EBS)',
                isCorrect: false,
                explanation:
                    'EBS は主に EC2 インスタンスに接続して利用するブロックストレージです。基盤モデルを利用する生成 AI アプリケーションの構築サービスではありません。',
            },
            {
                text: 'AWS CloudTrail',
                isCorrect: false,
                explanation:
                    'CloudTrail は AWS API 操作の履歴を記録するサービスです。文章生成や要約を行う基盤モデルの提供には使いません。',
            },
            {
                text: 'Amazon Route 53',
                isCorrect: false,
                explanation:
                    'Route 53 は DNS などのネットワーク関連サービスです。生成 AI モデルを利用するためのサービスではありません。',
            },
        ],
        explanation:
            'Bedrock は、事前学習済みの基盤モデルを選択して生成 AI 機能をアプリケーションに組み込みたい場合の代表的なサービスです。',
    },
    {
        question:
            '自社データを使った機械学習モデルを構築・学習し、推論用エンドポイントとしてデプロイする作業をマネージド環境で行いたい場合に最も適したサービスはどれですか?',
        options: [
            {
                text: 'Amazon SageMaker AI',
                isCorrect: true,
                explanation:
                    'Amazon SageMaker AI は、機械学習モデルを構築、学習、デプロイするためのフルマネージドサービスです。学習済みモデルを推論用のホスト環境へデプロイできます。',
            },
            {
                text: 'Amazon Bedrock',
                isCorrect: false,
                explanation:
                    'Bedrock は主に提供されている基盤モデルを用いて生成 AI アプリケーションを作る用途に適しています。モデル構築・学習・デプロイを広く制御する要件では SageMaker AI が代表的です。',
            },
            {
                text: 'Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'CloudFront はコンテンツ配信を高速化する CDN です。機械学習モデルを学習・デプロイする環境ではありません。',
            },
            {
                text: 'AWS Backup',
                isCorrect: false,
                explanation:
                    'AWS Backup は対応リソースのバックアップを管理するサービスです。機械学習モデル開発の基盤ではありません。',
            },
        ],
        explanation:
            'Amazon SageMaker は 2024 年12月に機械学習モデル構築向け機能の名称が `Amazon SageMaker AI` となりました。Bedrock との比較では、独自のモデル開発や学習を重視するかが判断軸になります。',
    },
    {
        question:
            '製品画像や動画に写っている物体、場面、不適切なコンテンツなどを機械学習の専門知識を必須とせずに分析したい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'Amazon Rekognition',
                isCorrect: true,
                explanation:
                    'Amazon Rekognition は画像と動画を分析し、物体、場面、テキスト、不適切なコンテンツ、顔などを検出できるサービスです。アプリケーションへコンピュータビジョン機能を追加する用途に適しています。',
            },
            {
                text: 'Amazon Textract',
                isCorrect: false,
                explanation:
                    'Textract は書類画像や PDF から文字、フォーム、表などを抽出する用途に特化しています。一般的な物体や場面の画像・動画分析は Rekognition の代表的用途です。',
            },
            {
                text: 'Amazon Transcribe',
                isCorrect: false,
                explanation:
                    'Transcribe は音声をテキストへ変換するサービスです。画像や動画内の物体・場面の分析には使いません。',
            },
            {
                text: 'AWS DataSync',
                isCorrect: false,
                explanation:
                    'DataSync はファイルやオブジェクトデータの移動を支援するサービスです。画像の内容分析を行う AI サービスではありません。',
            },
        ],
        explanation:
            'Rekognition は「画像や動画の中に何があるか」を分析するサービスです。文書に書かれた構造化情報を取り出したい場合は Textract と比較します。',
    },
    {
        question:
            'スキャンした請求書や申込書から、印刷文字や手書き文字に加えてフォーム項目や表を抽出して業務処理に利用したい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'Amazon Textract',
                isCorrect: true,
                explanation:
                    'Amazon Textract は文書から文字を検出し、フォームや表などの構造を抽出できます。請求書や申込書のデータ入力を自動化する用途に適しています。',
            },
            {
                text: 'Amazon Rekognition',
                isCorrect: false,
                explanation:
                    'Rekognition も画像内のテキスト検出機能を持ちますが、文書のフォームや表の構造を抽出して処理する代表的なサービスは Textract です。',
            },
            {
                text: 'Amazon Translate',
                isCorrect: false,
                explanation:
                    'Translate は入力されたテキストを別の言語へ翻訳するサービスです。文書画像から表やフォームを抽出するサービスではありません。',
            },
            {
                text: 'Amazon Kinesis Data Streams',
                isCorrect: false,
                explanation:
                    'Kinesis Data Streams は連続的に発生するデータレコードを扱うストリーミングサービスです。文書内容の抽出には利用しません。',
            },
        ],
        explanation:
            'Textract は OCR（Optical Character Recognition: 画像の文字を読み取る技術）に加え、書類の表やフォームの構造を取り扱える点が重要です。',
    },
    {
        question:
            '録音された問い合わせ音声や会議音声をテキストに変換し、検索や分析に使えるようにしたい場合に最も適したサービスはどれですか?',
        options: [
            {
                text: 'Amazon Transcribe',
                isCorrect: true,
                explanation:
                    'Amazon Transcribe は機械学習を用いる自動音声認識サービスで、音声をテキストへ変換します。保存済み音声ファイルの一括処理やリアルタイム音声の文字起こしに利用できます。',
            },
            {
                text: 'Amazon Translate',
                isCorrect: false,
                explanation:
                    'Translate はテキストの言語翻訳を行います。音声自体を文字に変換する役割は Transcribe です。',
            },
            {
                text: 'Amazon Comprehend',
                isCorrect: false,
                explanation:
                    'Comprehend は入力されたテキストから感情やエンティティなどを分析します。音声を文字に変換した後のテキスト分析で連携することはありますが、文字起こしの担当ではありません。',
            },
            {
                text: 'Amazon Elastic Container Service (Amazon ECS)',
                isCorrect: false,
                explanation:
                    'ECS はコンテナアプリケーションを実行するサービスです。音声認識機能を提供するサービスではありません。',
            },
        ],
        explanation:
            'Transcribe の代表的用途は speech-to-text（音声からテキストへの変換）です。文字化された内容の翻訳や感情分析は別サービスと組み合わせます。',
    },
    {
        question:
            '多言語に対応するアプリケーションで、入力された文章を別の言語へ機械翻訳したい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'Amazon Translate',
                isCorrect: true,
                explanation:
                    'Amazon Translate は機械学習を利用するテキスト翻訳サービスです。文書やチャットなどの文章を複数言語に翻訳する機能をアプリケーションへ組み込めます。',
            },
            {
                text: 'Amazon Transcribe',
                isCorrect: false,
                explanation:
                    'Transcribe は音声をテキストへ変換します。ある言語のテキストを別言語へ翻訳するサービスは Translate です。',
            },
            {
                text: 'Amazon Rekognition',
                isCorrect: false,
                explanation:
                    'Rekognition は画像や動画の分析を行うサービスです。文章の翻訳は担当しません。',
            },
            {
                text: 'Amazon Elastic File System (Amazon EFS)',
                isCorrect: false,
                explanation:
                    'EFS は共有ファイルシステムです。機械翻訳の機能は提供しません。',
            },
        ],
        explanation:
            'Translate は翻訳する対象となるテキストがすでに存在する場面で利用します。音声入力であれば、まず Transcribe で文字化してから翻訳する構成も考えられます。',
    },
    {
        question:
            '顧客レビューの文章を分析し、肯定的か否定的かという感情や、商品名などのエンティティ、重要な語句を抽出したい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'Amazon Comprehend',
                isCorrect: true,
                explanation:
                    'Amazon Comprehend は NLP（Natural Language Processing: 自然言語処理）を使い、文章から感情、エンティティ、キーフレーズ、言語などの情報を抽出できます。',
            },
            {
                text: 'Amazon Textract',
                isCorrect: false,
                explanation:
                    'Textract は文書画像や PDF から文字や構造を取り出すサービスです。抽出済みテキストの感情や重要語句の分析には Comprehend が適しています。',
            },
            {
                text: 'AWS CodePipeline',
                isCorrect: false,
                explanation:
                    'CodePipeline はソフトウェアのリリース工程を自動化するサービスです。顧客レビューの自然言語分析には使いません。',
            },
            {
                text: 'Amazon VPC',
                isCorrect: false,
                explanation:
                    'VPC は仮想ネットワークを構成するサービスです。文章の感情分析やエンティティ抽出を提供しません。',
            },
        ],
        explanation:
            'Comprehend は「文章の中身を理解して分類・抽出する」サービスとして整理します。入力が画像文書であれば Textract で文字を取り出してから分析する連携もあります。',
    },
    {
        question:
            'Web アプリケーションに、ユーザーのテキストまたは音声による依頼を理解して応答する予約受付チャットボットを追加したい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'Amazon Lex V2',
                isCorrect: true,
                explanation:
                    'Amazon Lex V2 は音声とテキストを利用する会話型インターフェースを構築するサービスです。ユーザーの意図を理解し、チャットボットや音声ボットを作成できます。',
            },
            {
                text: 'Amazon Bedrock',
                isCorrect: false,
                explanation:
                    'Bedrock でも生成 AI を利用した会話アプリケーションを構築できますが、意図やスロットに基づく会話型ボットを直接構築する基本サービスとしては Lex V2 が適しています。',
            },
            {
                text: 'Amazon Redshift',
                isCorrect: false,
                explanation:
                    'Redshift は分析向けのデータウェアハウスです。利用者との音声・テキスト会話を管理するボットサービスではありません。',
            },
            {
                text: 'AWS Certificate Manager (ACM)',
                isCorrect: false,
                explanation:
                    'ACM は TLS 証明書を管理します。チャットボットの会話理解や応答を提供しません。',
            },
        ],
        explanation:
            'Lex V2 は、予約や問い合わせなどの会話フローを設計するボット用途で覚えます。生成 AI を幅広く活用する Bedrock とは、まず基本的な出題軸を分けて理解します。',
    },
    {
        question:
            'AI サービスを組み合わせて、音声の問い合わせを文字化し、その内容の感情を分析する場合に適した組み合わせはどれですか?',
        options: [
            {
                text: 'Amazon Transcribe と Amazon Comprehend',
                isCorrect: true,
                explanation:
                    'Transcribe で音声をテキスト化し、Comprehend でテキストから感情などを分析する組み合わせが適しています。それぞれの入力と出力をつなげた構成です。',
            },
            {
                text: 'Amazon ECR と Amazon Route 53',
                isCorrect: false,
                explanation:
                    'ECR はコンテナイメージ保管、Route 53 は DNS に関するサービスです。音声文字起こしや感情分析には利用しません。',
            },
            {
                text: 'AWS Backup と Amazon EBS',
                isCorrect: false,
                explanation:
                    'Backup と EBS はバックアップやブロックストレージに関係します。音声や自然言語の分析サービスではありません。',
            },
            {
                text: 'AWS Shield と Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'Shield と CloudFront は主に DDoS 防御やコンテンツ配信に関係します。音声を文字化し感情を分析する構成にはなりません。',
            },
        ],
        explanation:
            'AI サービスの連携では、データが何から何へ変換されるかを見ることが重要です。音声からテキストは Transcribe、テキストの意味分析は Comprehend が担当します。',
    },
    {
        question:
            'AI / 機械学習・生成 AI サービスの用途の対応関係として最も適切なものはどれですか?',
        options: [
            {
                text: 'Bedrock は基盤モデルを用いた生成 AI アプリ構築、SageMaker AI はモデルの構築・学習・デプロイ、Rekognition は画像・動画分析、Textract は文書抽出、Transcribe は音声文字起こし、Translate は翻訳、Comprehend は文章分析、Lex V2 は会話型ボット',
                isCorrect: true,
                explanation:
                    '各サービスの代表的な用途を正しく対応付けています。入力データが文章、画像、書類、音声のどれか、またモデル自体を開発するのか既存機能を利用するのかで整理できます。',
            },
            {
                text: 'Bedrock は DNS、SageMaker AI は証明書管理、Rekognition はバックアップ、Textract はロードバランサー、Transcribe はコンテナ保管、Translate は監査ログ、Comprehend は VPC、Lex V2 はブロックストレージ',
                isCorrect: false,
                explanation:
                    'いずれも誤った対応です。AI サービスをネットワーク、セキュリティ、ストレージ、運用のサービスと混同しています。',
            },
            {
                text: 'すべて同じ画像ストレージサービスであり、生成 AI や音声処理には利用しない',
                isCorrect: false,
                explanation:
                    'これらは生成 AI、モデル開発、画像分析、文書抽出、音声・文章処理、会話ボットなど異なる機能を提供するサービスです。',
            },
            {
                text: 'すべて EC2 インスタンスの起動台数を調整するサービスであり、AI 機能は提供しない',
                isCorrect: false,
                explanation:
                    'EC2 インスタンスの台数調整は EC2 Auto Scaling に関する用途です。ここで挙げたサービスは AI や機械学習の機能に関係します。',
            },
        ],
        explanation:
            'AI 系サービスは似た印象を持ちやすいため、「モデルを使う・作る」「画像」「文書」「音声」「文章」「会話」という目的で役割を区別します。',
    },
    {
        question:
            'オンプレミスで稼働しているリレーショナルデータベースのデータを Amazon RDS や Amazon Aurora へ移行し、必要に応じて移行中の変更も継続的に反映したい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'AWS Database Migration Service (AWS DMS)',
                isCorrect: true,
                explanation:
                    'AWS DMS はデータベースやデータウェアハウスなどのデータストアを AWS へ、または AWS と他環境の間で移行するサービスです。一度の移行に加え、ソース側の継続的な変更をターゲットへ複製する構成にも利用できます。',
            },
            {
                text: 'AWS Application Migration Service',
                isCorrect: false,
                explanation:
                    'Application Migration Service はサーバー全体をリホストする用途に適しています。データベースのデータ移行と変更複製を中心に扱う場合は AWS DMS が代表的です。',
            },
            {
                text: 'Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'CloudFront はコンテンツ配信を高速化する CDN です。データベースの移行やレプリケーションを行うサービスではありません。',
            },
            {
                text: 'AWS Certificate Manager (ACM)',
                isCorrect: false,
                explanation:
                    'ACM は TLS 証明書の管理に使います。データベースを AWS へ移行するサービスではありません。',
            },
        ],
        explanation:
            'DMS は Database Migration Service の略です。移行元と移行先のデータストアを接続し、データを移すサービスとして理解します。',
    },
    {
        question:
            '物理サーバーや仮想サーバーで動いている既存アプリケーションを、大きな変更を加えずに Amazon EC2 上へリホスト移行したい場合に最も適したサービスはどれですか?',
        options: [
            {
                text: 'AWS Application Migration Service',
                isCorrect: true,
                explanation:
                    'AWS Application Migration Service は、物理、仮想、他クラウドのサーバーを AWS へ lift-and-shift（リホスト: アプリケーションを大幅に変更せず移す方式）するためのサービスです。ソースサーバーを複製し、移行準備ができた時点で AWS 上に起動できます。',
            },
            {
                text: 'AWS Database Migration Service (AWS DMS)',
                isCorrect: false,
                explanation:
                    'DMS は主にデータストア内のデータを移行するサービスです。OS やアプリケーションを含むサーバー単位のリホストには Application Migration Service が適しています。',
            },
            {
                text: 'Amazon Athena',
                isCorrect: false,
                explanation:
                    'Athena は S3 のデータを SQL で分析するサービスです。既存サーバーを EC2 として移行する用途ではありません。',
            },
            {
                text: 'Amazon Simple Notification Service (Amazon SNS)',
                isCorrect: false,
                explanation:
                    'SNS はメッセージ通知の配信に利用します。サーバーの移行や起動変換を行うサービスではありません。',
            },
        ],
        explanation:
            'サーバーをほぼそのまま AWS へ移す要件では Application Migration Service を選びます。データベースの論理的なデータ移行を行う DMS とは移行対象の単位が異なります。',
    },
    {
        question:
            'オンプレミスの NFS や SMB ファイルサーバーに保存された大量のファイルを、ネットワーク経由で Amazon S3 や Amazon EFS へ高速かつ安全に移行したい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'AWS DataSync',
                isCorrect: true,
                explanation:
                    'AWS DataSync はオンプレミスや他ストレージと AWS ストレージ間で、ファイルやオブジェクトデータを高速かつ安全に転送するサービスです。NFS（Network File System）や SMB（Server Message Block）を含むファイル移行に利用できます。',
            },
            {
                text: 'AWS Storage Gateway',
                isCorrect: false,
                explanation:
                    'Storage Gateway はオンプレミスから AWS ストレージへ継続的にアクセスするハイブリッド構成に適しています。一括または定期的なデータ転送を中心に行う要件では DataSync が代表的です。',
            },
            {
                text: 'Amazon Bedrock',
                isCorrect: false,
                explanation:
                    'Bedrock は基盤モデルを利用した生成 AI アプリケーション構築に関係します。ファイルデータの転送サービスではありません。',
            },
            {
                text: 'AWS CodeBuild',
                isCorrect: false,
                explanation:
                    'CodeBuild はソースコードのビルドとテストに利用します。オンプレミスファイルの AWS ストレージへの移行には使いません。',
            },
        ],
        explanation:
            'DataSync は、ネットワークを利用して既存ファイルデータを AWS のストレージへ動かす役割で理解します。転送中の暗号化やデータ整合性検証にも対応します。',
    },
    {
        question:
            'オンプレミスのアプリケーションから NFS や SMB のファイル共有としてアクセスしながら、実体のデータは Amazon S3 に保存するハイブリッドストレージ構成に適したサービスはどれですか?',
        options: [
            {
                text: 'Amazon S3 File Gateway (AWS Storage Gateway)',
                isCorrect: true,
                explanation:
                    'Amazon S3 File Gateway は、オンプレミス等に配置したゲートウェイを通じて S3 オブジェクトを NFS や SMB のファイル共有として扱えるようにします。既存のファイルアクセス方式を維持しながら S3 を利用できます。',
            },
            {
                text: 'AWS DataSync',
                isCorrect: false,
                explanation:
                    'DataSync はファイルやオブジェクトの転送を自動化するサービスです。アプリケーションが継続的にマウントするファイル共有インターフェースを S3 に対して提供する主役は S3 File Gateway です。',
            },
            {
                text: 'Amazon Rekognition',
                isCorrect: false,
                explanation:
                    'Rekognition は画像や動画の分析サービスです。オンプレミス向けのファイル共有インターフェースは提供しません。',
            },
            {
                text: 'AWS CodePipeline',
                isCorrect: false,
                explanation:
                    'CodePipeline はソフトウェアのリリース工程を自動化するサービスです。S3 をファイル共有として利用する構成とは関係ありません。',
            },
        ],
        explanation:
            'Storage Gateway の S3 File Gateway は、クラウド移行を一度に完了させず、既存環境から S3 をファイルとして使うハイブリッド連携に適しています。',
    },
    {
        question:
            '取引先が現在使用している SFTP クライアントの利用方法を大きく変えずに、アップロード先を Amazon S3 に移行したい場合に最も適したサービスはどれですか?',
        options: [
            {
                text: 'AWS Transfer Family',
                isCorrect: true,
                explanation:
                    'AWS Transfer Family は SFTP、FTPS、FTP、AS2 などのファイル転送を AWS ストレージへ直接受け入れるフルマネージドサービスです。SFTP（SSH File Transfer Protocol: SSH を用いるファイル転送方式）を維持しつつ S3 を保存先にできます。',
            },
            {
                text: 'Amazon S3 File Gateway',
                isCorrect: false,
                explanation:
                    'S3 File Gateway は NFS や SMB のファイル共有として S3 を利用する構成向けです。外部の SFTP クライアントからファイル転送を受け付けるには Transfer Family が適しています。',
            },
            {
                text: 'Amazon ElastiCache',
                isCorrect: false,
                explanation:
                    'ElastiCache はキャッシュとしてデータアクセスを高速化するサービスです。SFTP によるファイル受け入れには利用しません。',
            },
            {
                text: 'Amazon EventBridge',
                isCorrect: false,
                explanation:
                    'EventBridge はイベントのルーティングに利用します。SFTP エンドポイントを提供してファイルを受け入れるサービスではありません。',
            },
        ],
        explanation:
            'Transfer Family は、既存のファイル転送プロトコルを利用する業務を AWS ストレージへ移行したい場合に選択します。',
    },
    {
        question:
            'ネットワーク回線が十分でない拠点から、非常に大容量のデータを AWS へ移行するため、AWS が管理する物理デバイスによる搬送を利用したい場合に適したサービス群はどれですか?',
        options: [
            {
                text: 'AWS Snow Family',
                isCorrect: true,
                explanation:
                    'AWS Snow Family は、安定したネットワーク接続が不足する場所などで、AWS が管理する物理デバイスを用いて大量データを移送する用途に対応します。',
            },
            {
                text: 'AWS DataSync',
                isCorrect: false,
                explanation:
                    'DataSync はネットワーク経由の高速転送に利用します。ネットワーク帯域が移行要件を満たしにくく、物理搬送が必要な場合は Snow Family が適しています。',
            },
            {
                text: 'Amazon Comprehend',
                isCorrect: false,
                explanation:
                    'Comprehend は文章から感情やエンティティなどを抽出する自然言語処理サービスです。物理データ移送には利用しません。',
            },
            {
                text: 'AWS Web Application Firewall (AWS WAF)',
                isCorrect: false,
                explanation:
                    'WAF は Web リクエストを検査・制御するセキュリティサービスです。大量データを物理的に搬送するサービスではありません。',
            },
        ],
        explanation:
            'データ移行ではネットワーク転送が常に最適とは限りません。回線容量や移行期限によっては、物理デバイスを利用する Snow Family が選択肢になります。',
    },
    {
        question:
            '複数の移行ツールや移行対象アプリケーションについて、AWS への移行進捗を一つの場所で確認したい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'AWS Migration Hub',
                isCorrect: true,
                explanation:
                    'AWS Migration Hub は、複数の AWS やパートナーの移行ソリューションを利用するアプリケーション移行の進捗を一か所で追跡するために利用できます。',
            },
            {
                text: 'Amazon Route 53',
                isCorrect: false,
                explanation:
                    'Route 53 は DNS やトラフィックルーティングに関するサービスです。複数の移行案件の進捗を集約して追跡するサービスではありません。',
            },
            {
                text: 'Amazon Textract',
                isCorrect: false,
                explanation:
                    'Textract は書類からテキストやフォーム、表を抽出するサービスです。移行作業の進捗管理には利用しません。',
            },
            {
                text: 'AWS Key Management Service (AWS KMS)',
                isCorrect: false,
                explanation:
                    'KMS は暗号化キーの作成と管理に使います。アプリケーション移行の進行状況を管理するサービスではありません。',
            },
        ],
        explanation:
            'Migration Hub は、データやサーバーを直接移動するサービスではなく、移行状況を集約して把握するための役割を持ちます。',
    },
    {
        question:
            '移行・ハイブリッド連携サービスの用途の対応関係として最も適切なものはどれですか?',
        options: [
            {
                text: 'DMS はデータベース移行、Application Migration Service はサーバーのリホスト、DataSync はネットワーク経由のファイル転送、S3 File Gateway は S3 へのファイル共有アクセス、Transfer Family は SFTP 等の転送受け入れ、Snow Family は物理データ搬送、Migration Hub は移行進捗追跡',
                isCorrect: true,
                explanation:
                    '各サービスの代表的な役割を正しく対応付けています。移行対象がデータベースかサーバーかファイルか、継続アクセスか転送か、物理搬送か進捗管理かで分けて考えます。',
            },
            {
                text: 'DMS は画像分析、Application Migration Service は翻訳、DataSync は DNS、S3 File Gateway は証明書発行、Transfer Family は生成 AI、Snow Family は SQL 分析、Migration Hub はメール送信',
                isCorrect: false,
                explanation:
                    'いずれも誤った対応です。移行・ハイブリッド連携のサービスを、AI、ネットワーク、セキュリティ、分析、メールのサービスと混同しています。',
            },
            {
                text: 'すべてのサービスは同一のリレーショナルデータベースであり、移行には利用できない',
                isCorrect: false,
                explanation:
                    'これらは移行やハイブリッド連携の異なる目的に利用するサービスです。データベースそのものではありません。',
            },
            {
                text: 'すべてのサービスはロードバランサーであり、オンプレミス環境との連携には関係しない',
                isCorrect: false,
                explanation:
                    'ロードバランシングは ELB などの役割です。ここで挙げたサービスは既存環境から AWS への移行や連携に関係します。',
            },
        ],
        explanation:
            '移行系のサービスは対象と方法で整理します。「データベース」「サーバー」「ファイル」「ファイル共有」「転送プロトコル」「物理搬送」「進捗把握」が代表的な判断軸です。',
    },
    {
        question:
            '複数の AWS アカウントを一つの組織としてまとめ、組織単位でポリシーを適用したり、支払いを集約したりしたい場合に最も適したサービスはどれですか?',
        options: [
            {
                text: 'AWS Organizations',
                isCorrect: true,
                explanation:
                    'AWS Organizations は複数の AWS アカウントを組織として集中管理します。アカウントを OU（Organizational Unit: 組織単位）にグループ化し、SCP（Service Control Policy: 組織内の権限上限を制御するポリシー）を適用したり、請求をまとめたりできます。',
            },
            {
                text: 'AWS Cost Explorer',
                isCorrect: false,
                explanation:
                    'Cost Explorer はコストと使用量を表示・分析するツールです。複数アカウントを組織として作成・統制する中心サービスは Organizations です。',
            },
            {
                text: 'Amazon Elastic Container Registry (Amazon ECR)',
                isCorrect: false,
                explanation:
                    'ECR はコンテナイメージを保存するサービスです。AWS アカウントの組織管理や一括請求には使用しません。',
            },
            {
                text: 'Amazon Transcribe',
                isCorrect: false,
                explanation:
                    'Transcribe は音声をテキストに変換する AI サービスです。アカウントや請求の集約管理とは関係ありません。',
            },
        ],
        explanation:
            'Organizations は、マルチアカウント環境の土台となるサービスです。複数アカウントをまとめて管理し、ポリシーや請求を集中化する用途で覚えます。',
    },
    {
        question:
            'AWS の利用料金について、サービス別やアカウント別の支出傾向をグラフで確認し、過去の実績や今後の予測を分析したい場合に利用するサービスはどれですか?',
        options: [
            {
                text: 'AWS Cost Explorer',
                isCorrect: true,
                explanation:
                    'AWS Cost Explorer は AWS のコストと使用量を表示・分析するためのツールです。フィルターやグループ化により支出傾向を確認し、予測を含めてコストの調査に利用できます。',
            },
            {
                text: 'AWS Budgets',
                isCorrect: false,
                explanation:
                    'Budgets は設定した予算や利用量のしきい値に対して通知する用途が中心です。コスト傾向を探索的に分析する中心ツールは Cost Explorer です。',
            },
            {
                text: 'AWS Application Migration Service',
                isCorrect: false,
                explanation:
                    'Application Migration Service は既存サーバーを AWS へリホスト移行するサービスです。料金分析を行うツールではありません。',
            },
            {
                text: 'Amazon Rekognition',
                isCorrect: false,
                explanation:
                    'Rekognition は画像・動画を分析する AI サービスです。AWS 利用料金の分析には利用しません。',
            },
        ],
        explanation:
            'Cost Explorer は「何にいくら使っているか」「支出がどう変化しているか」を調査するために使います。予算超過への通知は Budgets と区別します。',
    },
    {
        question:
            '月額の AWS 利用料金に予算上限を設定し、実際の支出または予測支出がしきい値を超えそうな場合にメールや Amazon SNS で通知したい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'AWS Budgets',
                isCorrect: true,
                explanation:
                    'AWS Budgets はコストや使用量について予算を設定し、実績値または予測値がしきい値に達した場合に通知できます。予算管理とアラート設定に適しています。',
            },
            {
                text: 'AWS Cost and Usage Reports (AWS CUR)',
                isCorrect: false,
                explanation:
                    'AWS CUR は詳細なコスト・使用量データを S3 へ配信するレポートです。予算しきい値を設定して通知する役割は Budgets が担います。',
            },
            {
                text: 'Amazon Kinesis Data Streams',
                isCorrect: false,
                explanation:
                    'Kinesis Data Streams はリアルタイムデータストリームを扱うサービスです。AWS 利用料金の予算通知には利用しません。',
            },
            {
                text: 'AWS CodeDeploy',
                isCorrect: false,
                explanation:
                    'CodeDeploy はアプリケーションのデプロイ自動化に使います。予算や料金アラートを管理するサービスではありません。',
            },
        ],
        explanation:
            'Budgets の通知には請求データ反映までの遅延があり、通知時点で既にしきい値を上回っている場合もあります。通知は利用停止を常に保証するものではありません。',
    },
    {
        question:
            '多数の AWS アカウントを利用する企業が、ログ保管や監査用アカウントを含む標準的なマルチアカウント環境をベストプラクティスに沿って立ち上げ、継続的に統制したい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'AWS Control Tower',
                isCorrect: true,
                explanation:
                    'AWS Control Tower は、AWS Organizations などの機能を組み合わせ、ベストプラクティスに基づく landing zone（標準化されたマルチアカウント環境）をセットアップし、controls によって統制するサービスです。',
            },
            {
                text: 'AWS Organizations',
                isCorrect: false,
                explanation:
                    'Organizations はアカウントの集中管理やポリシー適用の基盤です。標準的な landing zone のセットアップや事前定義された統制を容易に導入する用途では Control Tower が適しています。',
            },
            {
                text: 'Amazon Athena',
                isCorrect: false,
                explanation:
                    'Athena は S3 上のデータを SQL で分析するサービスです。複数アカウント環境のセットアップやガバナンスを行うサービスではありません。',
            },
            {
                text: 'Amazon Simple Queue Service (Amazon SQS)',
                isCorrect: false,
                explanation:
                    'SQS はメッセージキューによる非同期処理に使用します。企業のマルチアカウント統制基盤を構築するものではありません。',
            },
        ],
        explanation:
            'Control Tower は Organizations を土台として活用しながら、アカウント作成やガバナンスを標準化しやすくします。Organizations の置き換えではなく、上位の統制支援として理解します。',
    },
    {
        question:
            '安定して発生する対象の AWS 利用について、1年または3年の一定利用額をコミットする代わりに、オンデマンド料金より低い価格を適用したい場合に検討するものはどれですか?',
        options: [
            {
                text: 'Savings Plans',
                isCorrect: true,
                explanation:
                    'Savings Plans は、対象となる AWS 利用について一定の時間当たり使用額を1年または3年コミットする代わりに、オンデマンド料金より低い価格を提供する料金モデルです。',
            },
            {
                text: 'AWS Budgets',
                isCorrect: false,
                explanation:
                    'Budgets は予算の追跡と通知を行いますが、利用コミットメントによる割引価格を提供する仕組みではありません。',
            },
            {
                text: 'AWS CloudTrail',
                isCorrect: false,
                explanation:
                    'CloudTrail は AWS API 操作を記録するサービスです。料金割引の購入モデルではありません。',
            },
            {
                text: 'Amazon S3 Glacier Deep Archive',
                isCorrect: false,
                explanation:
                    'S3 Glacier Deep Archive は長期保存向けのストレージクラスです。対象利用全体へのコミットメント割引の制度ではありません。',
            },
        ],
        explanation:
            'Savings Plans はコスト削減に役立ちますが、購入後のコミットメントは途中で変更できないため、継続的な利用見込みを踏まえて検討します。',
    },
    {
        question:
            'AWS の請求と利用量について、リソースやタグなどを含む詳細な行単位データを Amazon S3 に出力し、Amazon Athena などで詳細分析したい場合に適した機能はどれですか?',
        options: [
            {
                text: 'AWS Cost and Usage Reports (AWS CUR)',
                isCorrect: true,
                explanation:
                    'AWS CUR は利用可能な中でも詳細なコストと使用量データを含むレポートで、指定した S3 バケットへ配信できます。S3 に出力されたレポートを Athena 等で分析できます。',
            },
            {
                text: 'AWS Cost Explorer',
                isCorrect: false,
                explanation:
                    'Cost Explorer は画面や API で料金傾向を可視化・分析する用途に便利です。S3 へ詳細な請求明細ファイルを配信する役割は AWS CUR です。',
            },
            {
                text: 'Amazon Lex V2',
                isCorrect: false,
                explanation:
                    'Lex V2 は音声やテキストの会話型インターフェースを構築するサービスです。課金明細を S3 へ出力する機能ではありません。',
            },
            {
                text: 'AWS DataSync',
                isCorrect: false,
                explanation:
                    'DataSync はファイルやオブジェクトデータをストレージ間で移動するサービスです。AWS の課金明細を生成するサービスではありません。',
            },
        ],
        explanation:
            'Cost Explorer は見やすく傾向を確認する用途、CUR は詳細データを取得して独自に分析する用途として区別します。CUR は現在 AWS Data Exports のドキュメントで案内されています。',
    },
    {
        question:
            'コスト管理サービスの使い分けとして最も適切なものはどれですか?',
        options: [
            {
                text: 'Cost Explorer は支出傾向の可視化と分析、Budgets は予算しきい値と通知、Cost and Usage Reports は S3 に配信する詳細な課金データ、Savings Plans はコミットメントに基づく料金割引',
                isCorrect: true,
                explanation:
                    '各機能の目的を正しく対応付けています。調査、通知、詳細データ利用、割引購入という目的の違いで選択します。',
            },
            {
                text: 'Cost Explorer はコンテナ実行、Budgets は DNS、Cost and Usage Reports はチャットボット、Savings Plans は画像分析',
                isCorrect: false,
                explanation:
                    'いずれもコスト管理とは異なる用途です。コスト関連機能をコンピューティング、ネットワーク、AI のサービスと混同しています。',
            },
            {
                text: '四つはすべて同じ予算通知機能であり、料金分析や割引購入には関係しない',
                isCorrect: false,
                explanation:
                    'Budgets は通知が中心ですが、Cost Explorer は分析、CUR は詳細データの配信、Savings Plans は割引の料金モデルという異なる役割があります。',
            },
            {
                text: '四つは AWS リソースへのアクセス権限を設定する IAM ポリシーの種類である',
                isCorrect: false,
                explanation:
                    'これらは IAM ポリシーではありません。コストの分析、管理、データ取得、最適化に関係する機能です。',
            },
        ],
        explanation:
            'コスト管理では、現状を分析すること、予算からの逸脱を知ること、詳細データで掘り下げること、継続利用の割引を検討することを分けて扱います。',
    },
    {
        question:
            'コスト・組織管理に関する AWS サービスと機能の用途の対応関係として最も適切なものはどれですか?',
        options: [
            {
                text: 'Organizations は複数アカウント管理と一括請求、Control Tower は標準化されたマルチアカウント環境のセットアップと統制、Cost Explorer は料金分析、Budgets は予算通知、Savings Plans はコミットメント割引、Cost and Usage Reports は詳細課金データ出力',
                isCorrect: true,
                explanation:
                    '各サービスと機能の代表的な役割を正しく対応付けています。組織統制と費用管理は関係しますが、それぞれ目的に応じたサービスを使い分けます。',
            },
            {
                text: 'Organizations は音声認識、Control Tower はファイル転送、Cost Explorer は文書抽出、Budgets は CDN、Savings Plans は DNS、Cost and Usage Reports はデータベース移行',
                isCorrect: false,
                explanation:
                    'いずれも誤った対応です。組織・コスト管理のサービスを AI、移行、配信、ネットワークのサービスと混同しています。',
            },
            {
                text: 'すべての機能は EC2 インスタンスの OS を管理するためのサービスで、請求やアカウントには関係しない',
                isCorrect: false,
                explanation:
                    'これらはアカウント統制や利用料金の分析・管理に関係します。EC2 の OS 管理を目的とするサービス群ではありません。',
            },
            {
                text: 'すべての機能は S3 のストレージクラスであり、予算やポリシーは扱わない',
                isCorrect: false,
                explanation:
                    'これらはストレージクラスではなく、組織管理やコスト管理に関するサービスおよび料金機能です。',
            },
        ],
        explanation:
            '組織管理ではアカウントと統制の範囲を、コスト管理では可視化、通知、詳細分析、料金割引の目的を判断軸にします。',
    },
    {
        question:
            '多数の IoT デバイスを AWS クラウドへ安全に接続し、デバイスが送信するメッセージを受け取って他の AWS サービスへ連携したい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'AWS IoT Core',
                isCorrect: true,
                explanation:
                    'AWS IoT Core は接続されたデバイスがクラウドアプリケーションや他のデバイスと安全に通信できるようにするマネージドサービスです。MQTT（IoT でよく利用される軽量なメッセージ通信プロトコル）などを用いたメッセージ交換に対応します。',
            },
            {
                text: 'AWS IoT Greengrass',
                isCorrect: false,
                explanation:
                    'IoT Greengrass はデバイス側で処理やデータ集約を実行するエッジ用途に適しています。デバイスをクラウドへ接続しメッセージを仲介する中心サービスは IoT Core です。',
            },
            {
                text: 'AWS Cost Explorer',
                isCorrect: false,
                explanation:
                    'Cost Explorer は AWS のコストと使用量を分析するツールです。IoT デバイスの接続やメッセージ交換は担当しません。',
            },
            {
                text: 'Amazon Textract',
                isCorrect: false,
                explanation:
                    'Textract は文書からテキストや表を抽出する AI サービスです。デバイス接続基盤ではありません。',
            },
        ],
        explanation:
            'IoT Core は「デバイスをクラウドへつなぎ、メッセージをやり取りする」ための基本サービスとして理解します。',
    },
    {
        question:
            '工場の機器で生成されるデータをクラウドに送る前に、機器の近くでフィルタリングや集計を行い、通信が不安定でもローカルイベントへ応答したい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'AWS IoT Greengrass',
                isCorrect: true,
                explanation:
                    'AWS IoT Greengrass は IoT デバイスで動作するエッジランタイムとクラウドサービスです。データが生成される近くで処理を実行し、ローカルのイベントへ応答したり、必要なデータを AWS IoT Core 経由でクラウドへ送ったりできます。',
            },
            {
                text: 'AWS IoT Core',
                isCorrect: false,
                explanation:
                    'IoT Core はデバイスとクラウド間の安全な接続やメッセージルーティングを提供します。デバイス上でローカル処理を実行する要件では IoT Greengrass が適しています。',
            },
            {
                text: 'AWS Database Migration Service (AWS DMS)',
                isCorrect: false,
                explanation:
                    'DMS はデータストア間の移行やレプリケーションに使います。現場のデバイスでローカル処理を実行するためのサービスではありません。',
            },
            {
                text: 'Amazon CloudFront',
                isCorrect: false,
                explanation:
                    'CloudFront はコンテンツ配信ネットワークです。デバイス近傍での処理やオフラインに近い環境での応答には利用しません。',
            },
        ],
        explanation:
            'エッジ処理とは、クラウドだけに依存せず、データが発生する現場に近い場所で処理を行う考え方です。Greengrass はこの用途に対応します。',
    },
    {
        question:
            'IoT センサーのデータを現場で絞り込んでからクラウドへ送信する構成として、最も適切な組み合わせはどれですか?',
        options: [
            {
                text: 'AWS IoT Greengrass でローカル処理し、AWS IoT Core を通じて必要なデータをクラウドへ送る',
                isCorrect: true,
                explanation:
                    'Greengrass はデバイス側でデータのフィルタリングや集計を行えます。処理後に必要なメッセージを IoT Core を介して AWS クラウドへ安全に連携する構成が適しています。',
            },
            {
                text: 'AWS Budgets でセンサーデータを解析し、AWS Organizations で機器を接続する',
                isCorrect: false,
                explanation:
                    'Budgets と Organizations はコスト管理やアカウント管理に関係します。IoT データのローカル処理やデバイス接続には利用しません。',
            },
            {
                text: 'Amazon Route 53 で画像分析し、Amazon Rekognition で MQTT 通信を管理する',
                isCorrect: false,
                explanation:
                    'Route 53 は DNS、Rekognition は画像・動画分析のサービスです。IoT 接続やエッジでのデータ絞り込みの役割とは異なります。',
            },
            {
                text: 'AWS CodeBuild でセンサーを認証し、Amazon ECR でクラウドメッセージを配信する',
                isCorrect: false,
                explanation:
                    'CodeBuild はビルド処理、ECR はコンテナイメージ保管に使います。IoT デバイスとクラウドのメッセージ連携を提供する組み合わせではありません。',
            },
        ],
        explanation:
            'IoT 構成では、端末側で即時に判断する役割と、クラウドへ安全に接続して連携する役割を分けることがあります。',
    },
    {
        question:
            'IoT・エッジに関する AWS サービスの用途の対応関係として最も適切なものはどれですか?',
        options: [
            {
                text: 'AWS IoT Core はデバイスとクラウドの安全な接続とメッセージ交換、AWS IoT Greengrass はデバイス側でのローカル処理やデータ集約',
                isCorrect: true,
                explanation:
                    'IoT Core と IoT Greengrass の代表的な役割を正しく対応付けています。クラウド接続を中心に見るか、現場近くでの処理を中心に見るかが判断軸です。',
            },
            {
                text: 'AWS IoT Core は SQL データウェアハウス、AWS IoT Greengrass は請求明細レポート',
                isCorrect: false,
                explanation:
                    'データウェアハウスには Redshift、詳細課金レポートには AWS CUR などが関係します。IoT 系サービスの用途ではありません。',
            },
            {
                text: 'AWS IoT Core は TLS 証明書の発行専用、AWS IoT Greengrass はドメイン名の DNS 解決専用',
                isCorrect: false,
                explanation:
                    '証明書管理や DNS は別カテゴリの機能です。IoT Core は接続・メッセージ交換、Greengrass はエッジ処理を中心に提供します。',
            },
            {
                text: 'どちらもオンプレミスデータベースの移行だけを目的とするサービスである',
                isCorrect: false,
                explanation:
                    'データベース移行には AWS DMS などが関係します。IoT Core と Greengrass は接続されたデバイスとそのデータ処理のためのサービスです。',
            },
        ],
        explanation:
            'IoT の基本では、センサーや機器をクラウドにつなぐ役割と、現場で処理するエッジの役割の違いを理解します。',
    },
    {
        question:
            'Web アプリケーションから、会員登録の確認メールや注文完了メールを利用者へ送信したい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'Amazon Simple Email Service (Amazon SES)',
                isCorrect: true,
                explanation:
                    'Amazon SES は、アプリケーションからマーケティングメールや注文確認などのトランザクションメールを送受信するためのメールプラットフォームです。API や SMTP インターフェースを利用して送信できます。',
            },
            {
                text: 'Amazon Simple Queue Service (Amazon SQS)',
                isCorrect: false,
                explanation:
                    'SQS はメッセージをキューへ保持する非同期処理サービスです。メール自体を利用者へ配信する機能は SES の役割です。',
            },
            {
                text: 'AWS AppSync',
                isCorrect: false,
                explanation:
                    'AppSync は GraphQL やリアルタイム API を提供します。電子メールの送信プラットフォームではありません。',
            },
            {
                text: 'AWS IoT Core',
                isCorrect: false,
                explanation:
                    'IoT Core は IoT デバイスをクラウドへ接続しメッセージを交換するサービスです。アプリ利用者へのメール送信には使用しません。',
            },
        ],
        explanation:
            'SES は Simple Email Service の略で、アプリケーションにメール送受信機能を追加するためのサービスです。通知のメッセージングサービスである SNS とは用途を分けて理解します。',
    },
    {
        question:
            'フロントエンド開発者が Web またはモバイルアプリを構築し、認証やデータなどのバックエンド機能を追加しながら、Web アプリのデプロイとホスティングも進めたい場合に利用できるサービスはどれですか?',
        options: [
            {
                text: 'AWS Amplify',
                isCorrect: true,
                explanation:
                    'AWS Amplify は Web やモバイルアプリの構築・デプロイを支援し、認証、データ、ストレージなどのバックエンド機能とフロントエンドを連携しやすくします。Amplify Hosting で Web アプリをデプロイ・ホストできます。',
            },
            {
                text: 'AWS Database Migration Service (AWS DMS)',
                isCorrect: false,
                explanation:
                    'DMS はデータベース等のデータ移行を支援するサービスです。Web やモバイルアプリのフロントエンド開発・ホスティング支援には Amplify が適しています。',
            },
            {
                text: 'AWS Cost and Usage Reports (AWS CUR)',
                isCorrect: false,
                explanation:
                    'AWS CUR は詳細な課金と使用量データを S3 へ出力します。アプリ開発やデプロイのサービスではありません。',
            },
            {
                text: 'Amazon Transcribe',
                isCorrect: false,
                explanation:
                    'Transcribe は音声をテキストへ変換する AI サービスです。フルスタックアプリの構築やホスティングを行うサービスではありません。',
            },
        ],
        explanation:
            'Amplify はアプリ利用者に近いフロントエンド開発で、AWS のバックエンド機能を組み合わせて提供しやすくするサービスとして整理します。',
    },
    {
        question:
            'Web アプリケーションの一般利用者について、サインアップとサインインを提供し、ユーザーディレクトリを管理したい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'Amazon Cognito user pools',
                isCorrect: true,
                explanation:
                    'Amazon Cognito の user pool はアプリケーション利用者のユーザーディレクトリとして機能し、サインアップ、サインイン、認証トークンの発行などを提供できます。',
            },
            {
                text: 'AWS IAM Identity Center',
                isCorrect: false,
                explanation:
                    'IAM Identity Center は主に組織の従業員などが AWS アカウントや業務アプリケーションへアクセスするための集中管理に使います。一般向けアプリ利用者のサインアップ機能では Cognito user pools が代表的です。',
            },
            {
                text: 'Amazon SES',
                isCorrect: false,
                explanation:
                    'SES はメールの送受信に利用します。登録確認メールと組み合わせることはありますが、ユーザーディレクトリやサインインの中心サービスではありません。',
            },
            {
                text: 'AWS Glue',
                isCorrect: false,
                explanation:
                    'Glue はデータ統合や ETL、データカタログ管理に使用します。アプリ利用者を認証するサービスではありません。',
            },
        ],
        explanation:
            'Cognito の user pools は「アプリのユーザーを認証する」役割です。認証済みまたはゲストユーザーに一時的な AWS 資格情報を渡す用途では identity pools も関係します。',
    },
    {
        question:
            'モバイルアプリから一つの API エンドポイントを通じて複数のデータソースへアクセスし、GraphQL による取得や更新、リアルタイムな更新通知を提供したい場合に適したサービスはどれですか?',
        options: [
            {
                text: 'AWS AppSync',
                isCorrect: true,
                explanation:
                    'AWS AppSync は安全でサーバーレスな GraphQL API とリアルタイム機能を提供します。GraphQL はクライアントが必要なデータを指定して取得できる API の問い合わせ言語です。',
            },
            {
                text: 'Amazon Simple Email Service (Amazon SES)',
                isCorrect: false,
                explanation:
                    'SES はメール送受信に使用します。アプリのデータ取得・更新用 GraphQL API を提供するサービスではありません。',
            },
            {
                text: 'AWS Snow Family',
                isCorrect: false,
                explanation:
                    'Snow Family は主に物理デバイスを使った大量データ搬送やエッジ用途に関係します。モバイルアプリ向け GraphQL API には使用しません。',
            },
            {
                text: 'AWS Budgets',
                isCorrect: false,
                explanation:
                    'Budgets は利用料金や使用量の予算と通知を管理します。アプリケーションの API を提供するサービスではありません。',
            },
        ],
        explanation:
            'AppSync はアプリケーションが利用するデータ API のサービスとして把握します。Amplify を使ったアプリ開発のバックエンド機能として利用されることもあります。',
    },
    {
        question:
            '会員制 Web アプリを作り、画面の開発・デプロイを支援しつつ、利用者のサインインと GraphQL によるデータ API も用意したい場合の基本的なサービスの組み合わせとして最も適切なものはどれですか?',
        options: [
            {
                text: 'AWS Amplify、Amazon Cognito、AWS AppSync',
                isCorrect: true,
                explanation:
                    'Amplify は Web アプリの構築・デプロイ支援、Cognito はアプリ利用者の認証、AppSync は GraphQL API を担う組み合わせです。アプリ要件に応じてこれらを連携できます。',
            },
            {
                text: 'AWS Snow Family、AWS DMS、Amazon Athena',
                isCorrect: false,
                explanation:
                    'これらは物理データ移送、データベース移行、S3 データ分析に関係します。会員制 Web アプリの画面配信、認証、GraphQL API の基本構成とは異なります。',
            },
            {
                text: 'AWS Organizations、AWS Budgets、Savings Plans',
                isCorrect: false,
                explanation:
                    'これらはアカウント統制やコスト管理に関するサービス・機能です。アプリのサインインや GraphQL API を提供しません。',
            },
            {
                text: 'Amazon Rekognition、Amazon Transcribe、Amazon Translate',
                isCorrect: false,
                explanation:
                    'これらは画像、音声、翻訳を扱う AI サービスです。会員制 Web アプリの認証とデータ API の基本構成ではありません。',
            },
        ],
        explanation:
            '利用者向けアプリでは、フロントエンドを提供すること、利用者を認証すること、データへアクセスする API を提供することを別の役割として組み合わせます。',
    },
    {
        question:
            'メール・フロントエンド・ユーザー機能に関する AWS サービスの用途の対応関係として最も適切なものはどれですか?',
        options: [
            {
                text: 'SES はメール送受信、Amplify は Web / モバイルアプリの構築・デプロイ支援、Cognito はアプリ利用者の認証、AppSync は GraphQL とリアルタイム API',
                isCorrect: true,
                explanation:
                    '各サービスの代表的な役割を正しく対応付けています。アプリ利用者に近い機能では、通知、画面と開発支援、認証、データ API を目的に応じて組み合わせます。',
            },
            {
                text: 'SES はデータベース移行、Amplify は暗号鍵管理、Cognito は物理データ搬送、AppSync は請求分析',
                isCorrect: false,
                explanation:
                    'いずれも誤った対応です。アプリ利用者向けのサービスを移行、セキュリティ、コストのサービスと混同しています。',
            },
            {
                text: '四つはすべて IoT デバイス向けのエッジランタイムであり、Web やモバイルアプリには利用しない',
                isCorrect: false,
                explanation:
                    'IoT のエッジ処理には Greengrass などが関係します。SES、Amplify、Cognito、AppSync は Web やモバイルアプリでも利用される機能です。',
            },
            {
                text: '四つはすべて S3 の長期保存用ストレージクラスであり、利用者認証や API は提供しない',
                isCorrect: false,
                explanation:
                    'これらはストレージクラスではありません。メール、アプリ開発、認証、API といったアプリケーション機能を提供します。',
            },
        ],
        explanation:
            'このカテゴリでは、利用者が触れるアプリ機能を AWS サービスへ対応付けます。メール、認証、API、アプリ開発支援の違いを押さえます。',
    },
]
