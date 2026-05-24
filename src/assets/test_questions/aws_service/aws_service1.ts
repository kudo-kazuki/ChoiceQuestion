import type { Question } from '@/types/test_questions'

export const testQuestions: Question[] = [
    {
        question:'Amazon EC2 の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'AWS クラウド上で仮想サーバーを起動し、OS やソフトウェアを管理して利用できるサービス',
                isCorrect: true,
                explanation:
                    'Amazon EC2（Elastic Compute Cloud）は、AWS 上で仮想サーバーを利用する基本サービスです。OS やミドルウェアまで比較的自由に管理したい場合に使います。',
            },
            {
                text:'イベントに応じて短時間の関数コードを実行し、利用者がサーバーを管理しないコンピューティングサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Lambda の説明です。Amazon EC2 は、AWS クラウド上で仮想サーバーを起動し、OS やソフトウェアを管理して利用できるサービスです。',
            },
            {
                text:'コンテナ化したアプリケーションを AWS 上でデプロイ、管理、スケールするコンテナオーケストレーションサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon ECS の説明です。Amazon EC2 は、AWS クラウド上で仮想サーバーを起動し、OS やソフトウェアを管理して利用できるサービスです。',
            },
            {
                text:'ECS や EKS のコンテナを、利用者がサーバーを管理せずに実行するためのサーバーレス実行基盤',
                isCorrect: false,
                explanation:
                    'これは主に AWS Fargate の説明です。Amazon EC2 は、AWS クラウド上で仮想サーバーを起動し、OS やソフトウェアを管理して利用できるサービスです。',
            },
        ],
        explanation:'Amazon EC2 は「AWS クラウド上で仮想サーバーを起動し、OS やソフトウェアを管理して利用できるサービス」と整理します。',
    },
    {
        question:'AWS Lambda の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'イベントに応じて短時間の関数コードを実行し、利用者がサーバーを管理しないコンピューティングサービス',
                isCorrect: true,
                explanation:
                    'AWS Lambda は、イベント駆動でコードを実行するサーバーレスのコンピューティングサービスです。S3 へのアップロード、API 呼び出し、スケジュール実行などをきっかけに処理を動かせます。',
            },
            {
                text:'コンテナ化したアプリケーションを AWS 上でデプロイ、管理、スケールするコンテナオーケストレーションサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon ECS の説明です。AWS Lambda は、イベントに応じて短時間の関数コードを実行し、利用者がサーバーを管理しないコンピューティングサービスです。',
            },
            {
                text:'ECS や EKS のコンテナを、利用者がサーバーを管理せずに実行するためのサーバーレス実行基盤',
                isCorrect: false,
                explanation:
                    'これは主に AWS Fargate の説明です。AWS Lambda は、イベントに応じて短時間の関数コードを実行し、利用者がサーバーを管理しないコンピューティングサービスです。',
            },
            {
                text:'大量のバッチジョブをキューに投入し、必要な計算リソースで順次実行するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Batch の説明です。AWS Lambda は、イベントに応じて短時間の関数コードを実行し、利用者がサーバーを管理しないコンピューティングサービスです。',
            },
        ],
        explanation:'AWS Lambda は「イベントに応じて短時間の関数コードを実行し、利用者がサーバーを管理しないコンピューティングサービス」と整理します。',
    },
    {
        question:'Amazon ECS の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'コンテナ化したアプリケーションを AWS 上でデプロイ、管理、スケールするコンテナオーケストレーションサービス',
                isCorrect: true,
                explanation:
                    'Amazon ECS（Elastic Container Service）は、コンテナをどのように実行し続けるかを管理するサービスです。ECS on EC2 または AWS Fargate と組み合わせて利用します。',
            },
            {
                text:'ECS や EKS のコンテナを、利用者がサーバーを管理せずに実行するためのサーバーレス実行基盤',
                isCorrect: false,
                explanation:
                    'これは主に AWS Fargate の説明です。Amazon ECS は、コンテナ化したアプリケーションを AWS 上でデプロイ、管理、スケールするコンテナオーケストレーションサービスです。',
            },
            {
                text:'大量のバッチジョブをキューに投入し、必要な計算リソースで順次実行するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Batch の説明です。Amazon ECS は、コンテナ化したアプリケーションを AWS 上でデプロイ、管理、スケールするコンテナオーケストレーションサービスです。',
            },
            {
                text:'負荷や条件に応じて EC2 インスタンス数を自動で増減させる仕組み',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EC2 Auto Scaling の説明です。Amazon ECS は、コンテナ化したアプリケーションを AWS 上でデプロイ、管理、スケールするコンテナオーケストレーションサービスです。',
            },
        ],
        explanation:'Amazon ECS は「コンテナ化したアプリケーションを AWS 上でデプロイ、管理、スケールするコンテナオーケストレーションサービス」と整理します。',
    },
    {
        question:'AWS Fargate の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'ECS や EKS のコンテナを、利用者がサーバーを管理せずに実行するためのサーバーレス実行基盤',
                isCorrect: true,
                explanation:'AWS Fargate はコンテナの実行基盤です。コンテナを載せる EC2 インスタンスの用意やパッチ管理を抑えたい場合に利用します。',
            },
            {
                text:'大量のバッチジョブをキューに投入し、必要な計算リソースで順次実行するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Batch の説明です。AWS Fargate は、ECS や EKS のコンテナを、利用者がサーバーを管理せずに実行するためのサーバーレス実行基盤です。',
            },
            {
                text:'負荷や条件に応じて EC2 インスタンス数を自動で増減させる仕組み',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EC2 Auto Scaling の説明です。AWS Fargate は、ECS や EKS のコンテナを、利用者がサーバーを管理せずに実行するためのサーバーレス実行基盤です。',
            },
            {
                text:'アプリケーションコードをアップロードし、実行環境の構築やスケーリングを比較的簡単に任せられるサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Elastic Beanstalk の説明です。AWS Fargate は、ECS や EKS のコンテナを、利用者がサーバーを管理せずに実行するためのサーバーレス実行基盤です。',
            },
        ],
        explanation:'AWS Fargate は「ECS や EKS のコンテナを、利用者がサーバーを管理せずに実行するためのサーバーレス実行基盤」と整理します。',
    },
    {
        question:'AWS Batch の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'大量のバッチジョブをキューに投入し、必要な計算リソースで順次実行するサービス',
                isCorrect: true,
                explanation:'AWS Batch は、画像変換、科学技術計算、データ処理などのバッチジョブをまとめて実行するためのサービスです。ジョブキューと計算環境を管理します。',
            },
            {
                text:'負荷や条件に応じて EC2 インスタンス数を自動で増減させる仕組み',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EC2 Auto Scaling の説明です。AWS Batch は、大量のバッチジョブをキューに投入し、必要な計算リソースで順次実行するサービスです。',
            },
            {
                text:'アプリケーションコードをアップロードし、実行環境の構築やスケーリングを比較的簡単に任せられるサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Elastic Beanstalk の説明です。AWS Batch は、大量のバッチジョブをキューに投入し、必要な計算リソースで順次実行するサービスです。',
            },
            {
                text:'ソースコードやコンテナイメージから Web アプリケーションをデプロイするサービス。ただし 2026年4月30日以降は新規顧客向けに提供開始できない',
                isCorrect: false,
                explanation:'これは主に AWS App Runner の説明です。AWS Batch は、大量のバッチジョブをキューに投入し、必要な計算リソースで順次実行するサービスです。',
            },
        ],
        explanation:'AWS Batch は「大量のバッチジョブをキューに投入し、必要な計算リソースで順次実行するサービス」と整理します。',
    },
    {
        question:'Amazon EC2 Auto Scaling の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'負荷や条件に応じて EC2 インスタンス数を自動で増減させる仕組み',
                isCorrect: true,
                explanation:'Amazon EC2 Auto Scaling は、EC2 インスタンスの台数を需要に合わせて調整する機能です。可用性維持やコスト最適化に役立ちます。',
            },
            {
                text:'アプリケーションコードをアップロードし、実行環境の構築やスケーリングを比較的簡単に任せられるサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Elastic Beanstalk の説明です。Amazon EC2 Auto Scaling は、負荷や条件に応じて EC2 インスタンス数を自動で増減させる仕組みです。',
            },
            {
                text:'ソースコードやコンテナイメージから Web アプリケーションをデプロイするサービス。ただし 2026年4月30日以降は新規顧客向けに提供開始できない',
                isCorrect: false,
                explanation:
                    'これは主に AWS App Runner の説明です。Amazon EC2 Auto Scaling は、負荷や条件に応じて EC2 インスタンス数を自動で増減させる仕組みです。',
            },
            {
                text:'小規模な Web サイトやアプリを始めやすい、仮想サーバーや関連リソースをまとめたサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Lightsail の説明です。Amazon EC2 Auto Scaling は、負荷や条件に応じて EC2 インスタンス数を自動で増減させる仕組みです。',
            },
        ],
        explanation:'Amazon EC2 Auto Scaling は「負荷や条件に応じて EC2 インスタンス数を自動で増減させる仕組み」と整理します。',
    },
    {
        question:'AWS Elastic Beanstalk の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'アプリケーションコードをアップロードし、実行環境の構築やスケーリングを比較的簡単に任せられるサービス',
                isCorrect: true,
                explanation:
                    'AWS Elastic Beanstalk は、Web アプリケーションの実行環境を簡単に作るためのサービスです。内部では EC2、ロードバランサー、Auto Scaling などを組み合わせます。',
            },
            {
                text:'ソースコードやコンテナイメージから Web アプリケーションをデプロイするサービス。ただし 2026年4月30日以降は新規顧客向けに提供開始できない',
                isCorrect: false,
                explanation:
                    'これは主に AWS App Runner の説明です。AWS Elastic Beanstalk は、アプリケーションコードをアップロードし、実行環境の構築やスケーリングを比較的簡単に任せられるサービスです。',
            },
            {
                text:'小規模な Web サイトやアプリを始めやすい、仮想サーバーや関連リソースをまとめたサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Lightsail の説明です。AWS Elastic Beanstalk は、アプリケーションコードをアップロードし、実行環境の構築やスケーリングを比較的簡単に任せられるサービスです。',
            },
            {
                text:'AWS 上で Kubernetes クラスターを実行・管理するためのマネージド Kubernetes サービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EKS の説明です。AWS Elastic Beanstalk は、アプリケーションコードをアップロードし、実行環境の構築やスケーリングを比較的簡単に任せられるサービスです。',
            },
        ],
        explanation:'AWS Elastic Beanstalk は「アプリケーションコードをアップロードし、実行環境の構築やスケーリングを比較的簡単に任せられるサービス」と整理します。',
    },
    {
        question:'AWS App Runner の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'ソースコードやコンテナイメージから Web アプリケーションをデプロイするサービス。ただし 2026年4月30日以降は新規顧客向けに提供開始できない',
                isCorrect: true,
                explanation:
                    'AWS App Runner は Web アプリケーションを簡単に公開するためのサービスですが、2026年4月30日以降は新規顧客が利用開始できない点に注意します。既存顧客は継続利用できます。',
            },
            {
                text:'小規模な Web サイトやアプリを始めやすい、仮想サーバーや関連リソースをまとめたサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Lightsail の説明です。AWS App Runner は、ソースコードやコンテナイメージから Web アプリケーションをデプロイするサービス。ただし 2026年4月30日以降は新規顧客向けに提供開始できないです。',
            },
            {
                text:'AWS 上で Kubernetes クラスターを実行・管理するためのマネージド Kubernetes サービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EKS の説明です。AWS App Runner は、ソースコードやコンテナイメージから Web アプリケーションをデプロイするサービス。ただし 2026年4月30日以降は新規顧客向けに提供開始できないです。',
            },
            {
                text:'AWS クラウド上で仮想サーバーを起動し、OS やソフトウェアを管理して利用できるサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EC2 の説明です。AWS App Runner は、ソースコードやコンテナイメージから Web アプリケーションをデプロイするサービス。ただし 2026年4月30日以降は新規顧客向けに提供開始できないです。',
            },
        ],
        explanation:
            'AWS App Runner は「ソースコードやコンテナイメージから Web アプリケーションをデプロイするサービス。ただし 2026年4月30日以降は新規顧客向けに提供開始できない」と整理します。',
    },
    {
        question:'Amazon Lightsail の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'小規模な Web サイトやアプリを始めやすい、仮想サーバーや関連リソースをまとめたサービス',
                isCorrect: true,
                explanation:'Amazon Lightsail は、仮想サーバー、静的 IP、DNS、簡単な管理画面などをまとめて提供します。小規模用途で AWS を始めやすくするサービスです。',
            },
            {
                text:'AWS 上で Kubernetes クラスターを実行・管理するためのマネージド Kubernetes サービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EKS の説明です。Amazon Lightsail は、小規模な Web サイトやアプリを始めやすい、仮想サーバーや関連リソースをまとめたサービスです。',
            },
            {
                text:'AWS クラウド上で仮想サーバーを起動し、OS やソフトウェアを管理して利用できるサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EC2 の説明です。Amazon Lightsail は、小規模な Web サイトやアプリを始めやすい、仮想サーバーや関連リソースをまとめたサービスです。',
            },
            {
                text:'イベントに応じて短時間の関数コードを実行し、利用者がサーバーを管理しないコンピューティングサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Lambda の説明です。Amazon Lightsail は、小規模な Web サイトやアプリを始めやすい、仮想サーバーや関連リソースをまとめたサービスです。',
            },
        ],
        explanation:'Amazon Lightsail は「小規模な Web サイトやアプリを始めやすい、仮想サーバーや関連リソースをまとめたサービス」と整理します。',
    },
    {
        question:'Amazon EKS の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'AWS 上で Kubernetes クラスターを実行・管理するためのマネージド Kubernetes サービス',
                isCorrect: true,
                explanation:
                    'Amazon EKS（Elastic Kubernetes Service）は、Kubernetes を AWS 上で利用するためのサービスです。既存の Kubernetes 設定や運用知識を活かしたい場合に使います。',
            },
            {
                text:'AWS クラウド上で仮想サーバーを起動し、OS やソフトウェアを管理して利用できるサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EC2 の説明です。Amazon EKS は、AWS 上で Kubernetes クラスターを実行・管理するためのマネージド Kubernetes サービスです。',
            },
            {
                text:'イベントに応じて短時間の関数コードを実行し、利用者がサーバーを管理しないコンピューティングサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Lambda の説明です。Amazon EKS は、AWS 上で Kubernetes クラスターを実行・管理するためのマネージド Kubernetes サービスです。',
            },
            {
                text:'コンテナ化したアプリケーションを AWS 上でデプロイ、管理、スケールするコンテナオーケストレーションサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon ECS の説明です。Amazon EKS は、AWS 上で Kubernetes クラスターを実行・管理するためのマネージド Kubernetes サービスです。',
            },
        ],
        explanation:'Amazon EKS は「AWS 上で Kubernetes クラスターを実行・管理するためのマネージド Kubernetes サービス」と整理します。',
    },
    {
        question:'Amazon S3 の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'大量のファイルやデータをオブジェクトとして保存するスケーラブルなストレージサービス',
                isCorrect: true,
                explanation:'Amazon S3（Simple Storage Service）は、画像、ログ、バックアップ、静的コンテンツなどをオブジェクトとして保存する基本サービスです。',
            },
            {
                text:'EC2 インスタンスにアタッチしてディスクのように使うブロックストレージサービス',
                isCorrect: false,
                explanation:'これは主に Amazon EBS の説明です。Amazon S3 は、大量のファイルやデータをオブジェクトとして保存するスケーラブルなストレージサービスです。',
            },
            {
                text:'複数のコンピューティングリソースから共有できる Linux 系のマネージドファイルシステム',
                isCorrect: false,
                explanation:'これは主に Amazon EFS の説明です。Amazon S3 は、大量のファイルやデータをオブジェクトとして保存するスケーラブルなストレージサービスです。',
            },
            {
                text:'アクセス頻度が低いデータを低コストで長期保管するための S3 のアーカイブ向けストレージクラス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon S3 Glacier ストレージクラス の説明です。Amazon S3 は、大量のファイルやデータをオブジェクトとして保存するスケーラブルなストレージサービスです。',
            },
        ],
        explanation:'Amazon S3 は「大量のファイルやデータをオブジェクトとして保存するスケーラブルなストレージサービス」と整理します。',
    },
    {
        question:'Amazon EBS の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'EC2 インスタンスにアタッチしてディスクのように使うブロックストレージサービス',
                isCorrect: true,
                explanation:
                    'Amazon EBS（Elastic Block Store）は、基本的には EC2 に接続して利用する永続的なブロックストレージです。OS ディスクやデータディスクに使います。',
            },
            {
                text:'複数のコンピューティングリソースから共有できる Linux 系のマネージドファイルシステム',
                isCorrect: false,
                explanation:'これは主に Amazon EFS の説明です。Amazon EBS は、EC2 インスタンスにアタッチしてディスクのように使うブロックストレージサービスです。',
            },
            {
                text:'アクセス頻度が低いデータを低コストで長期保管するための S3 のアーカイブ向けストレージクラス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon S3 Glacier ストレージクラス の説明です。Amazon EBS は、EC2 インスタンスにアタッチしてディスクのように使うブロックストレージサービスです。',
            },
            {
                text:'複数の AWS リソースのバックアップ計画、保持期間、復元を一元管理するサービス',
                isCorrect: false,
                explanation:'これは主に AWS Backup の説明です。Amazon EBS は、EC2 インスタンスにアタッチしてディスクのように使うブロックストレージサービスです。',
            },
        ],
        explanation:'Amazon EBS は「EC2 インスタンスにアタッチしてディスクのように使うブロックストレージサービス」と整理します。',
    },
    {
        question:'Amazon EFS の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'複数のコンピューティングリソースから共有できる Linux 系のマネージドファイルシステム',
                isCorrect: true,
                explanation:'Amazon EFS（Elastic File System）は、複数の EC2 インスタンスやコンテナなどから共有できるファイルストレージです。',
            },
            {
                text:'アクセス頻度が低いデータを低コストで長期保管するための S3 のアーカイブ向けストレージクラス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon S3 Glacier ストレージクラス の説明です。Amazon EFS は、複数のコンピューティングリソースから共有できる Linux 系のマネージドファイルシステムです。',
            },
            {
                text:'複数の AWS リソースのバックアップ計画、保持期間、復元を一元管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Backup の説明です。Amazon EFS は、複数のコンピューティングリソースから共有できる Linux 系のマネージドファイルシステムです。',
            },
            {
                text:'Windows の SMB ファイル共有や Windows 固有機能に対応したマネージドファイルサーバー',
                isCorrect: false,
                explanation:
                    'これは主に Amazon FSx for Windows File Server の説明です。Amazon EFS は、複数のコンピューティングリソースから共有できる Linux 系のマネージドファイルシステムです。',
            },
        ],
        explanation:'Amazon EFS は「複数のコンピューティングリソースから共有できる Linux 系のマネージドファイルシステム」と整理します。',
    },
    {
        question:'Amazon S3 Glacier ストレージクラス の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'アクセス頻度が低いデータを低コストで長期保管するための S3 のアーカイブ向けストレージクラス',
                isCorrect: true,
                explanation:'S3 Glacier 系のストレージクラスは、長期保存やアーカイブに向いた S3 の保存階層です。取り出し時間や料金の特性を確認して選びます。',
            },
            {
                text:'複数の AWS リソースのバックアップ計画、保持期間、復元を一元管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Backup の説明です。Amazon S3 Glacier ストレージクラス は、アクセス頻度が低いデータを低コストで長期保管するための S3 のアーカイブ向けストレージクラスです。',
            },
            {
                text:'Windows の SMB ファイル共有や Windows 固有機能に対応したマネージドファイルサーバー',
                isCorrect: false,
                explanation:
                    'これは主に Amazon FSx for Windows File Server の説明です。Amazon S3 Glacier ストレージクラス は、アクセス頻度が低いデータを低コストで長期保管するための S3 のアーカイブ向けストレージクラスです。',
            },
            {
                text:'オンプレミスや AWS 間でファイルデータを高速に転送・同期するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS DataSync の説明です。Amazon S3 Glacier ストレージクラス は、アクセス頻度が低いデータを低コストで長期保管するための S3 のアーカイブ向けストレージクラスです。',
            },
        ],
        explanation:
            'Amazon S3 Glacier ストレージクラス は「アクセス頻度が低いデータを低コストで長期保管するための S3 のアーカイブ向けストレージクラス」と整理します。',
    },
    {
        question:'AWS Backup の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'複数の AWS リソースのバックアップ計画、保持期間、復元を一元管理するサービス',
                isCorrect: true,
                explanation:'AWS Backup は、EBS、EFS、RDS など複数サービスのバックアップをまとめて管理するサービスです。',
            },
            {
                text:'Windows の SMB ファイル共有や Windows 固有機能に対応したマネージドファイルサーバー',
                isCorrect: false,
                explanation:
                    'これは主に Amazon FSx for Windows File Server の説明です。AWS Backup は、複数の AWS リソースのバックアップ計画、保持期間、復元を一元管理するサービスです。',
            },
            {
                text:'オンプレミスや AWS 間でファイルデータを高速に転送・同期するサービス',
                isCorrect: false,
                explanation:'これは主に AWS DataSync の説明です。AWS Backup は、複数の AWS リソースのバックアップ計画、保持期間、復元を一元管理するサービスです。',
            },
            {
                text:'オンプレミスから NFS や SMB のファイル共有としてアクセスし、保存先に Amazon S3 を利用する仕組み',
                isCorrect: false,
                explanation:
                    'これは主に Amazon S3 File Gateway（AWS Storage Gateway） の説明です。AWS Backup は、複数の AWS リソースのバックアップ計画、保持期間、復元を一元管理するサービスです。',
            },
        ],
        explanation:'AWS Backup は「複数の AWS リソースのバックアップ計画、保持期間、復元を一元管理するサービス」と整理します。',
    },
    {
        question:'Amazon FSx for Windows File Server の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'Windows の SMB ファイル共有や Windows 固有機能に対応したマネージドファイルサーバー',
                isCorrect: true,
                explanation:
                    'Amazon FSx for Windows File Server は、Windows アプリケーション向けの共有ファイルストレージを AWS で利用するサービスです。',
            },
            {
                text:'オンプレミスや AWS 間でファイルデータを高速に転送・同期するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS DataSync の説明です。Amazon FSx for Windows File Server は、Windows の SMB ファイル共有や Windows 固有機能に対応したマネージドファイルサーバーです。',
            },
            {
                text:'オンプレミスから NFS や SMB のファイル共有としてアクセスし、保存先に Amazon S3 を利用する仕組み',
                isCorrect: false,
                explanation:
                    'これは主に Amazon S3 File Gateway（AWS Storage Gateway） の説明です。Amazon FSx for Windows File Server は、Windows の SMB ファイル共有や Windows 固有機能に対応したマネージドファイルサーバーです。',
            },
            {
                text:'SFTP、FTPS、FTP などのファイル転送プロトコルで Amazon S3 や EFS へデータを受け入れるサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Transfer Family の説明です。Amazon FSx for Windows File Server は、Windows の SMB ファイル共有や Windows 固有機能に対応したマネージドファイルサーバーです。',
            },
        ],
        explanation:
            'Amazon FSx for Windows File Server は「Windows の SMB ファイル共有や Windows 固有機能に対応したマネージドファイルサーバー」と整理します。',
    },
    {
        question:'AWS DataSync の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'オンプレミスや AWS 間でファイルデータを高速に転送・同期するサービス',
                isCorrect: true,
                explanation:
                    'AWS DataSync は、オンプレミスのファイルサーバーと Amazon S3、Amazon EFS、Amazon FSx などの間でデータを移行・同期するサービスです。',
            },
            {
                text:'オンプレミスから NFS や SMB のファイル共有としてアクセスし、保存先に Amazon S3 を利用する仕組み',
                isCorrect: false,
                explanation:
                    'これは主に Amazon S3 File Gateway（AWS Storage Gateway） の説明です。AWS DataSync は、オンプレミスや AWS 間でファイルデータを高速に転送・同期するサービスです。',
            },
            {
                text:'SFTP、FTPS、FTP などのファイル転送プロトコルで Amazon S3 や EFS へデータを受け入れるサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Transfer Family の説明です。AWS DataSync は、オンプレミスや AWS 間でファイルデータを高速に転送・同期するサービスです。',
            },
            {
                text:'ネットワーク転送が難しい大量データを、物理デバイスを使って AWS へ移送するためのサービス群',
                isCorrect: false,
                explanation:'これは主に AWS Snow Family の説明です。AWS DataSync は、オンプレミスや AWS 間でファイルデータを高速に転送・同期するサービスです。',
            },
        ],
        explanation:'AWS DataSync は「オンプレミスや AWS 間でファイルデータを高速に転送・同期するサービス」と整理します。',
    },
    {
        question:'Amazon S3 File Gateway（AWS Storage Gateway） の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'オンプレミスから NFS や SMB のファイル共有としてアクセスし、保存先に Amazon S3 を利用する仕組み',
                isCorrect: true,
                explanation:
                    'Amazon S3 File Gateway は AWS Storage Gateway の機能の一つで、既存アプリケーションのファイル共有アクセスを残しながら S3 を保存先にできます。',
            },
            {
                text:'SFTP、FTPS、FTP などのファイル転送プロトコルで Amazon S3 や EFS へデータを受け入れるサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Transfer Family の説明です。Amazon S3 File Gateway（AWS Storage Gateway） は、オンプレミスから NFS や SMB のファイル共有としてアクセスし、保存先に Amazon S3 を利用する仕組みです。',
            },
            {
                text:'ネットワーク転送が難しい大量データを、物理デバイスを使って AWS へ移送するためのサービス群',
                isCorrect: false,
                explanation:
                    'これは主に AWS Snow Family の説明です。Amazon S3 File Gateway（AWS Storage Gateway） は、オンプレミスから NFS や SMB のファイル共有としてアクセスし、保存先に Amazon S3 を利用する仕組みです。',
            },
            {
                text:'大量のファイルやデータをオブジェクトとして保存するスケーラブルなストレージサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon S3 の説明です。Amazon S3 File Gateway（AWS Storage Gateway） は、オンプレミスから NFS や SMB のファイル共有としてアクセスし、保存先に Amazon S3 を利用する仕組みです。',
            },
        ],
        explanation:
            'Amazon S3 File Gateway（AWS Storage Gateway） は「オンプレミスから NFS や SMB のファイル共有としてアクセスし、保存先に Amazon S3 を利用する仕組み」と整理します。',
    },
    {
        question:'AWS Transfer Family の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'SFTP、FTPS、FTP などのファイル転送プロトコルで Amazon S3 や EFS へデータを受け入れるサービス',
                isCorrect: true,
                explanation:'AWS Transfer Family は、既存の SFTP クライアントなどを活かして AWS ストレージへファイルを転送するためのサービスです。',
            },
            {
                text:'ネットワーク転送が難しい大量データを、物理デバイスを使って AWS へ移送するためのサービス群',
                isCorrect: false,
                explanation:
                    'これは主に AWS Snow Family の説明です。AWS Transfer Family は、SFTP、FTPS、FTP などのファイル転送プロトコルで Amazon S3 や EFS へデータを受け入れるサービスです。',
            },
            {
                text:'大量のファイルやデータをオブジェクトとして保存するスケーラブルなストレージサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon S3 の説明です。AWS Transfer Family は、SFTP、FTPS、FTP などのファイル転送プロトコルで Amazon S3 や EFS へデータを受け入れるサービスです。',
            },
            {
                text:'EC2 インスタンスにアタッチしてディスクのように使うブロックストレージサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EBS の説明です。AWS Transfer Family は、SFTP、FTPS、FTP などのファイル転送プロトコルで Amazon S3 や EFS へデータを受け入れるサービスです。',
            },
        ],
        explanation:
            'AWS Transfer Family は「SFTP、FTPS、FTP などのファイル転送プロトコルで Amazon S3 や EFS へデータを受け入れるサービス」と整理します。',
    },
    {
        question:'AWS Snow Family の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'ネットワーク転送が難しい大量データを、物理デバイスを使って AWS へ移送するためのサービス群',
                isCorrect: true,
                explanation:'AWS Snow Family は、Snowcone、Snowball などの物理デバイスを使って大量データ移行やエッジ処理を支援するサービス群です。',
            },
            {
                text:'大量のファイルやデータをオブジェクトとして保存するスケーラブルなストレージサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon S3 の説明です。AWS Snow Family は、ネットワーク転送が難しい大量データを、物理デバイスを使って AWS へ移送するためのサービス群です。',
            },
            {
                text:'EC2 インスタンスにアタッチしてディスクのように使うブロックストレージサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EBS の説明です。AWS Snow Family は、ネットワーク転送が難しい大量データを、物理デバイスを使って AWS へ移送するためのサービス群です。',
            },
            {
                text:'複数のコンピューティングリソースから共有できる Linux 系のマネージドファイルシステム',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EFS の説明です。AWS Snow Family は、ネットワーク転送が難しい大量データを、物理デバイスを使って AWS へ移送するためのサービス群です。',
            },
        ],
        explanation:'AWS Snow Family は「ネットワーク転送が難しい大量データを、物理デバイスを使って AWS へ移送するためのサービス群」と整理します。',
    },
    {
        question:'Amazon RDS の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'MySQL や PostgreSQL などのリレーショナルデータベースをマネージドで利用するサービス',
                isCorrect: true,
                explanation:'Amazon RDS（Relational Database Service）は、データベースの作成、バックアップ、パッチ適用などの運用負担を軽減するサービスです。',
            },
            {
                text:'MySQL および PostgreSQL と互換性を持つ、AWS が設計したマネージドなリレーショナルデータベースエンジン',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Aurora の説明です。Amazon RDS は、MySQL や PostgreSQL などのリレーショナルデータベースをマネージドで利用するサービスです。',
            },
            {
                text:'キー値やドキュメント形式のデータを低レイテンシーで扱うマネージド NoSQL データベース',
                isCorrect: false,
                explanation:
                    'これは主に Amazon DynamoDB の説明です。Amazon RDS は、MySQL や PostgreSQL などのリレーショナルデータベースをマネージドで利用するサービスです。',
            },
            {
                text:'Redis や Memcached 互換のインメモリキャッシュをマネージドで利用するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon ElastiCache の説明です。Amazon RDS は、MySQL や PostgreSQL などのリレーショナルデータベースをマネージドで利用するサービスです。',
            },
        ],
        explanation:'Amazon RDS は「MySQL や PostgreSQL などのリレーショナルデータベースをマネージドで利用するサービス」と整理します。',
    },
    {
        question:'Amazon Aurora の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'MySQL および PostgreSQL と互換性を持つ、AWS が設計したマネージドなリレーショナルデータベースエンジン',
                isCorrect: true,
                explanation:'Amazon Aurora は RDS から利用できるデータベースエンジンの一つで、MySQL / PostgreSQL 互換性とクラウド向けの設計が特徴です。',
            },
            {
                text:'キー値やドキュメント形式のデータを低レイテンシーで扱うマネージド NoSQL データベース',
                isCorrect: false,
                explanation:
                    'これは主に Amazon DynamoDB の説明です。Amazon Aurora は、MySQL および PostgreSQL と互換性を持つ、AWS が設計したマネージドなリレーショナルデータベースエンジンです。',
            },
            {
                text:'Redis や Memcached 互換のインメモリキャッシュをマネージドで利用するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon ElastiCache の説明です。Amazon Aurora は、MySQL および PostgreSQL と互換性を持つ、AWS が設計したマネージドなリレーショナルデータベースエンジンです。',
            },
            {
                text:'ログ分析、全文検索、可視化などに使う OpenSearch クラスターをマネージドで利用するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon OpenSearch Service の説明です。Amazon Aurora は、MySQL および PostgreSQL と互換性を持つ、AWS が設計したマネージドなリレーショナルデータベースエンジンです。',
            },
        ],
        explanation:
            'Amazon Aurora は「MySQL および PostgreSQL と互換性を持つ、AWS が設計したマネージドなリレーショナルデータベースエンジン」と整理します。',
    },
    {
        question:'Amazon DynamoDB の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'キー値やドキュメント形式のデータを低レイテンシーで扱うマネージド NoSQL データベース',
                isCorrect: true,
                explanation:'Amazon DynamoDB は、アクセス数が大きく変動するアプリケーションでも使いやすいサーバーレスの NoSQL データベースです。',
            },
            {
                text:'Redis や Memcached 互換のインメモリキャッシュをマネージドで利用するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon ElastiCache の説明です。Amazon DynamoDB は、キー値やドキュメント形式のデータを低レイテンシーで扱うマネージド NoSQL データベースです。',
            },
            {
                text:'ログ分析、全文検索、可視化などに使う OpenSearch クラスターをマネージドで利用するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon OpenSearch Service の説明です。Amazon DynamoDB は、キー値やドキュメント形式のデータを低レイテンシーで扱うマネージド NoSQL データベースです。',
            },
            {
                text:'MongoDB 互換のドキュメント指向データベースをマネージドで利用するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon DocumentDB（MongoDB 互換） の説明です。Amazon DynamoDB は、キー値やドキュメント形式のデータを低レイテンシーで扱うマネージド NoSQL データベースです。',
            },
        ],
        explanation:'Amazon DynamoDB は「キー値やドキュメント形式のデータを低レイテンシーで扱うマネージド NoSQL データベース」と整理します。',
    },
    {
        question:'Amazon ElastiCache の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'Redis や Memcached 互換のインメモリキャッシュをマネージドで利用するサービス',
                isCorrect: true,
                explanation:'Amazon ElastiCache は、頻繁に読むデータをメモリ上に保持して応答時間やデータベース負荷を改善するために利用します。',
            },
            {
                text:'ログ分析、全文検索、可視化などに使う OpenSearch クラスターをマネージドで利用するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon OpenSearch Service の説明です。Amazon ElastiCache は、Redis や Memcached 互換のインメモリキャッシュをマネージドで利用するサービスです。',
            },
            {
                text:'MongoDB 互換のドキュメント指向データベースをマネージドで利用するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon DocumentDB（MongoDB 互換） の説明です。Amazon ElastiCache は、Redis や Memcached 互換のインメモリキャッシュをマネージドで利用するサービスです。',
            },
            {
                text:'人や商品などの関係性をたどるグラフデータを扱うマネージドグラフデータベース',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Neptune の説明です。Amazon ElastiCache は、Redis や Memcached 互換のインメモリキャッシュをマネージドで利用するサービスです。',
            },
        ],
        explanation:'Amazon ElastiCache は「Redis や Memcached 互換のインメモリキャッシュをマネージドで利用するサービス」と整理します。',
    },
    {
        question:'Amazon OpenSearch Service の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'ログ分析、全文検索、可視化などに使う OpenSearch クラスターをマネージドで利用するサービス',
                isCorrect: true,
                explanation:'Amazon OpenSearch Service は、検索やログ分析の基盤として使われます。データベースの正本とは別に検索用として組み合わせることもあります。',
            },
            {
                text:'MongoDB 互換のドキュメント指向データベースをマネージドで利用するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon DocumentDB（MongoDB 互換） の説明です。Amazon OpenSearch Service は、ログ分析、全文検索、可視化などに使う OpenSearch クラスターをマネージドで利用するサービスです。',
            },
            {
                text:'人や商品などの関係性をたどるグラフデータを扱うマネージドグラフデータベース',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Neptune の説明です。Amazon OpenSearch Service は、ログ分析、全文検索、可視化などに使う OpenSearch クラスターをマネージドで利用するサービスです。',
            },
            {
                text:'MySQL や PostgreSQL などのリレーショナルデータベースをマネージドで利用するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon RDS の説明です。Amazon OpenSearch Service は、ログ分析、全文検索、可視化などに使う OpenSearch クラスターをマネージドで利用するサービスです。',
            },
        ],
        explanation:
            'Amazon OpenSearch Service は「ログ分析、全文検索、可視化などに使う OpenSearch クラスターをマネージドで利用するサービス」と整理します。',
    },
    {
        question:'Amazon DocumentDB（MongoDB 互換） の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'MongoDB 互換のドキュメント指向データベースをマネージドで利用するサービス',
                isCorrect: true,
                explanation:'Amazon DocumentDB は、JSON に近いドキュメント形式のデータを扱うアプリケーション向けのデータベースサービスです。',
            },
            {
                text:'人や商品などの関係性をたどるグラフデータを扱うマネージドグラフデータベース',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Neptune の説明です。Amazon DocumentDB（MongoDB 互換） は、MongoDB 互換のドキュメント指向データベースをマネージドで利用するサービスです。',
            },
            {
                text:'MySQL や PostgreSQL などのリレーショナルデータベースをマネージドで利用するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon RDS の説明です。Amazon DocumentDB（MongoDB 互換） は、MongoDB 互換のドキュメント指向データベースをマネージドで利用するサービスです。',
            },
            {
                text:'MySQL および PostgreSQL と互換性を持つ、AWS が設計したマネージドなリレーショナルデータベースエンジン',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Aurora の説明です。Amazon DocumentDB（MongoDB 互換） は、MongoDB 互換のドキュメント指向データベースをマネージドで利用するサービスです。',
            },
        ],
        explanation:'Amazon DocumentDB（MongoDB 互換） は「MongoDB 互換のドキュメント指向データベースをマネージドで利用するサービス」と整理します。',
    },
    {
        question:'Amazon Neptune の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'人や商品などの関係性をたどるグラフデータを扱うマネージドグラフデータベース',
                isCorrect: true,
                explanation:'Amazon Neptune は、友達関係、推薦、ネットワーク構造など、関係性の探索が重要なデータに向くグラフデータベースです。',
            },
            {
                text:'MySQL や PostgreSQL などのリレーショナルデータベースをマネージドで利用するサービス',
                isCorrect: false,
                explanation:'これは主に Amazon RDS の説明です。Amazon Neptune は、人や商品などの関係性をたどるグラフデータを扱うマネージドグラフデータベースです。',
            },
            {
                text:'MySQL および PostgreSQL と互換性を持つ、AWS が設計したマネージドなリレーショナルデータベースエンジン',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Aurora の説明です。Amazon Neptune は、人や商品などの関係性をたどるグラフデータを扱うマネージドグラフデータベースです。',
            },
            {
                text:'キー値やドキュメント形式のデータを低レイテンシーで扱うマネージド NoSQL データベース',
                isCorrect: false,
                explanation:
                    'これは主に Amazon DynamoDB の説明です。Amazon Neptune は、人や商品などの関係性をたどるグラフデータを扱うマネージドグラフデータベースです。',
            },
        ],
        explanation:'Amazon Neptune は「人や商品などの関係性をたどるグラフデータを扱うマネージドグラフデータベース」と整理します。',
    },
    {
        question:'Amazon VPC の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'AWS リソースを配置できる、利用者が定義する論理的に分離された仮想ネットワーク',
                isCorrect: true,
                explanation:
                    'Amazon VPC（Virtual Private Cloud）は、サブネット、ルートテーブル、セキュリティグループなどを使って AWS 上のネットワークを構成する基本サービスです。',
            },
            {
                text:'複数のサーバーやコンテナへ通信を分散し、正常な対象へリクエストを送る負荷分散サービス',
                isCorrect: false,
                explanation:
                    'これは主に Elastic Load Balancing の説明です。Amazon VPC は、AWS リソースを配置できる、利用者が定義する論理的に分離された仮想ネットワークです。',
            },
            {
                text:'ドメイン登録、DNS ルーティング、ヘルスチェックを提供する DNS サービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Route 53 の説明です。Amazon VPC は、AWS リソースを配置できる、利用者が定義する論理的に分離された仮想ネットワークです。',
            },
            {
                text:'世界中のエッジロケーションからコンテンツを低遅延で配信する CDN サービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon CloudFront の説明です。Amazon VPC は、AWS リソースを配置できる、利用者が定義する論理的に分離された仮想ネットワークです。',
            },
        ],
        explanation:'Amazon VPC は「AWS リソースを配置できる、利用者が定義する論理的に分離された仮想ネットワーク」と整理します。',
    },
    {
        question:'Elastic Load Balancing の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'複数のサーバーやコンテナへ通信を分散し、正常な対象へリクエストを送る負荷分散サービス',
                isCorrect: true,
                explanation:
                    'Elastic Load Balancing は、Application Load Balancer や Network Load Balancer などを提供し、アプリケーションの可用性を高めます。',
            },
            {
                text:'ドメイン登録、DNS ルーティング、ヘルスチェックを提供する DNS サービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Route 53 の説明です。Elastic Load Balancing は、複数のサーバーやコンテナへ通信を分散し、正常な対象へリクエストを送る負荷分散サービスです。',
            },
            {
                text:'世界中のエッジロケーションからコンテンツを低遅延で配信する CDN サービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon CloudFront の説明です。Elastic Load Balancing は、複数のサーバーやコンテナへ通信を分散し、正常な対象へリクエストを送る負荷分散サービスです。',
            },
            {
                text:'HTTP API や REST API などの作成、公開、認可、監視を管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon API Gateway の説明です。Elastic Load Balancing は、複数のサーバーやコンテナへ通信を分散し、正常な対象へリクエストを送る負荷分散サービスです。',
            },
        ],
        explanation:'Elastic Load Balancing は「複数のサーバーやコンテナへ通信を分散し、正常な対象へリクエストを送る負荷分散サービス」と整理します。',
    },
    {
        question:'Amazon Route 53 の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'ドメイン登録、DNS ルーティング、ヘルスチェックを提供する DNS サービス',
                isCorrect: true,
                explanation:'Amazon Route 53 は、DNS（Domain Name System）による名前解決やドメイン管理に使うサービスです。',
            },
            {
                text:'世界中のエッジロケーションからコンテンツを低遅延で配信する CDN サービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon CloudFront の説明です。Amazon Route 53 は、ドメイン登録、DNS ルーティング、ヘルスチェックを提供する DNS サービスです。',
            },
            {
                text:'HTTP API や REST API などの作成、公開、認可、監視を管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon API Gateway の説明です。Amazon Route 53 は、ドメイン登録、DNS ルーティング、ヘルスチェックを提供する DNS サービスです。',
            },
            {
                text:'オンプレミス環境と AWS を専用のネットワーク接続で結ぶサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Direct Connect の説明です。Amazon Route 53 は、ドメイン登録、DNS ルーティング、ヘルスチェックを提供する DNS サービスです。',
            },
        ],
        explanation:'Amazon Route 53 は「ドメイン登録、DNS ルーティング、ヘルスチェックを提供する DNS サービス」と整理します。',
    },
    {
        question:'Amazon CloudFront の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'世界中のエッジロケーションからコンテンツを低遅延で配信する CDN サービス',
                isCorrect: true,
                explanation:'Amazon CloudFront は、CDN（Content Delivery Network）として静的ファイルや API などの配信を高速化します。',
            },
            {
                text:'HTTP API や REST API などの作成、公開、認可、監視を管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon API Gateway の説明です。Amazon CloudFront は、世界中のエッジロケーションからコンテンツを低遅延で配信する CDN サービスです。',
            },
            {
                text:'オンプレミス環境と AWS を専用のネットワーク接続で結ぶサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Direct Connect の説明です。Amazon CloudFront は、世界中のエッジロケーションからコンテンツを低遅延で配信する CDN サービスです。',
            },
            {
                text:'オンプレミスネットワークと Amazon VPC を、インターネット上の暗号化トンネルで接続するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Site-to-Site VPN の説明です。Amazon CloudFront は、世界中のエッジロケーションからコンテンツを低遅延で配信する CDN サービスです。',
            },
        ],
        explanation:'Amazon CloudFront は「世界中のエッジロケーションからコンテンツを低遅延で配信する CDN サービス」と整理します。',
    },
    {
        question:'Amazon API Gateway の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'HTTP API や REST API などの作成、公開、認可、監視を管理するサービス',
                isCorrect: true,
                explanation:'Amazon API Gateway は、クライアントからバックエンドサービスへの API の入口を提供するサービスです。Lambda などとよく組み合わせます。',
            },
            {
                text:'オンプレミス環境と AWS を専用のネットワーク接続で結ぶサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Direct Connect の説明です。Amazon API Gateway は、HTTP API や REST API などの作成、公開、認可、監視を管理するサービスです。',
            },
            {
                text:'オンプレミスネットワークと Amazon VPC を、インターネット上の暗号化トンネルで接続するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Site-to-Site VPN の説明です。Amazon API Gateway は、HTTP API や REST API などの作成、公開、認可、監視を管理するサービスです。',
            },
            {
                text:'複数の VPC やオンプレミス接続を中央のハブで集約するネットワーク接続サービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Transit Gateway の説明です。Amazon API Gateway は、HTTP API や REST API などの作成、公開、認可、監視を管理するサービスです。',
            },
        ],
        explanation:'Amazon API Gateway は「HTTP API や REST API などの作成、公開、認可、監視を管理するサービス」と整理します。',
    },
    {
        question:'AWS Direct Connect の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'オンプレミス環境と AWS を専用のネットワーク接続で結ぶサービス',
                isCorrect: true,
                explanation:
                    'AWS Direct Connect は専用のネットワーク接続を提供しますが、通信内容を暗号化するサービスそのものではありません。暗号化が必要な場合は VPN などと組み合わせます。',
            },
            {
                text:'オンプレミスネットワークと Amazon VPC を、インターネット上の暗号化トンネルで接続するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Site-to-Site VPN の説明です。AWS Direct Connect は、オンプレミス環境と AWS を専用のネットワーク接続で結ぶサービスです。',
            },
            {
                text:'複数の VPC やオンプレミス接続を中央のハブで集約するネットワーク接続サービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Transit Gateway の説明です。AWS Direct Connect は、オンプレミス環境と AWS を専用のネットワーク接続で結ぶサービスです。',
            },
            {
                text:'VPC エンドポイントを通じて、対応サービスへインターネットを経由せずプライベートに接続する仕組み',
                isCorrect: false,
                explanation:
                    'これは主に AWS PrivateLink の説明です。AWS Direct Connect は、オンプレミス環境と AWS を専用のネットワーク接続で結ぶサービスです。',
            },
        ],
        explanation:'AWS Direct Connect は「オンプレミス環境と AWS を専用のネットワーク接続で結ぶサービス」と整理します。',
    },
    {
        question:'AWS Site-to-Site VPN の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'オンプレミスネットワークと Amazon VPC を、インターネット上の暗号化トンネルで接続するサービス',
                isCorrect: true,
                explanation:
                    'AWS Site-to-Site VPN は、既存拠点と AWS を VPN で接続するためのサービスです。Direct Connect と比較して導入しやすい構成もあります。',
            },
            {
                text:'複数の VPC やオンプレミス接続を中央のハブで集約するネットワーク接続サービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Transit Gateway の説明です。AWS Site-to-Site VPN は、オンプレミスネットワークと Amazon VPC を、インターネット上の暗号化トンネルで接続するサービスです。',
            },
            {
                text:'VPC エンドポイントを通じて、対応サービスへインターネットを経由せずプライベートに接続する仕組み',
                isCorrect: false,
                explanation:
                    'これは主に AWS PrivateLink の説明です。AWS Site-to-Site VPN は、オンプレミスネットワークと Amazon VPC を、インターネット上の暗号化トンネルで接続するサービスです。',
            },
            {
                text:'固定のグローバル IP を入口にして、AWS グローバルネットワークで正常なエンドポイントへ通信を導くサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Global Accelerator の説明です。AWS Site-to-Site VPN は、オンプレミスネットワークと Amazon VPC を、インターネット上の暗号化トンネルで接続するサービスです。',
            },
        ],
        explanation:
            'AWS Site-to-Site VPN は「オンプレミスネットワークと Amazon VPC を、インターネット上の暗号化トンネルで接続するサービス」と整理します。',
    },
    {
        question:'AWS Transit Gateway の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'複数の VPC やオンプレミス接続を中央のハブで集約するネットワーク接続サービス',
                isCorrect: true,
                explanation:'AWS Transit Gateway は、多数の VPC や拠点接続を個別に結ぶ複雑さを減らすためのサービスです。',
            },
            {
                text:'VPC エンドポイントを通じて、対応サービスへインターネットを経由せずプライベートに接続する仕組み',
                isCorrect: false,
                explanation:
                    'これは主に AWS PrivateLink の説明です。AWS Transit Gateway は、複数の VPC やオンプレミス接続を中央のハブで集約するネットワーク接続サービスです。',
            },
            {
                text:'固定のグローバル IP を入口にして、AWS グローバルネットワークで正常なエンドポイントへ通信を導くサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Global Accelerator の説明です。AWS Transit Gateway は、複数の VPC やオンプレミス接続を中央のハブで集約するネットワーク接続サービスです。',
            },
            {
                text:'AWS リソースを配置できる、利用者が定義する論理的に分離された仮想ネットワーク',
                isCorrect: false,
                explanation:
                    'これは主に Amazon VPC の説明です。AWS Transit Gateway は、複数の VPC やオンプレミス接続を中央のハブで集約するネットワーク接続サービスです。',
            },
        ],
        explanation:'AWS Transit Gateway は「複数の VPC やオンプレミス接続を中央のハブで集約するネットワーク接続サービス」と整理します。',
    },
    {
        question:'AWS PrivateLink の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'VPC エンドポイントを通じて、対応サービスへインターネットを経由せずプライベートに接続する仕組み',
                isCorrect: true,
                explanation:
                    'AWS PrivateLink は、対応する AWS サービスや別 VPC / 別アカウントで公開された VPC エンドポイントサービスへプライベートに接続するための仕組みです。',
            },
            {
                text:'固定のグローバル IP を入口にして、AWS グローバルネットワークで正常なエンドポイントへ通信を導くサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Global Accelerator の説明です。AWS PrivateLink は、VPC エンドポイントを通じて、対応サービスへインターネットを経由せずプライベートに接続する仕組みです。',
            },
            {
                text:'AWS リソースを配置できる、利用者が定義する論理的に分離された仮想ネットワーク',
                isCorrect: false,
                explanation:
                    'これは主に Amazon VPC の説明です。AWS PrivateLink は、VPC エンドポイントを通じて、対応サービスへインターネットを経由せずプライベートに接続する仕組みです。',
            },
            {
                text:'複数のサーバーやコンテナへ通信を分散し、正常な対象へリクエストを送る負荷分散サービス',
                isCorrect: false,
                explanation:
                    'これは主に Elastic Load Balancing の説明です。AWS PrivateLink は、VPC エンドポイントを通じて、対応サービスへインターネットを経由せずプライベートに接続する仕組みです。',
            },
        ],
        explanation:'AWS PrivateLink は「VPC エンドポイントを通じて、対応サービスへインターネットを経由せずプライベートに接続する仕組み」と整理します。',
    },
    {
        question:'AWS Global Accelerator の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'固定のグローバル IP を入口にして、AWS グローバルネットワークで正常なエンドポイントへ通信を導くサービス',
                isCorrect: true,
                explanation:'AWS Global Accelerator は、世界中の利用者からの通信を AWS のグローバルネットワークへ取り込み、可用性や性能の改善を狙うサービスです。',
            },
            {
                text:'AWS リソースを配置できる、利用者が定義する論理的に分離された仮想ネットワーク',
                isCorrect: false,
                explanation:
                    'これは主に Amazon VPC の説明です。AWS Global Accelerator は、固定のグローバル IP を入口にして、AWS グローバルネットワークで正常なエンドポイントへ通信を導くサービスです。',
            },
            {
                text:'複数のサーバーやコンテナへ通信を分散し、正常な対象へリクエストを送る負荷分散サービス',
                isCorrect: false,
                explanation:
                    'これは主に Elastic Load Balancing の説明です。AWS Global Accelerator は、固定のグローバル IP を入口にして、AWS グローバルネットワークで正常なエンドポイントへ通信を導くサービスです。',
            },
            {
                text:'ドメイン登録、DNS ルーティング、ヘルスチェックを提供する DNS サービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Route 53 の説明です。AWS Global Accelerator は、固定のグローバル IP を入口にして、AWS グローバルネットワークで正常なエンドポイントへ通信を導くサービスです。',
            },
        ],
        explanation:
            'AWS Global Accelerator は「固定のグローバル IP を入口にして、AWS グローバルネットワークで正常なエンドポイントへ通信を導くサービス」と整理します。',
    },
    {
        question:'AWS Identity and Access Management（IAM） の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'AWS リソースを誰がどのように利用できるかを認証・認可の観点で管理するサービス',
                isCorrect: true,
                explanation:'IAM は、AWS アカウント内のユーザー、ロール、ポリシーなどを使って権限を管理する基本サービスです。',
            },
            {
                text:'暗号化に利用する鍵を AWS 上で作成・管理・制御するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Key Management Service（AWS KMS） の説明です。AWS Identity and Access Management（IAM） は、AWS リソースを誰がどのように利用できるかを認証・認可の観点で管理するサービスです。',
            },
            {
                text:'SSL/TLS 証明書を発行・保管・更新管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Certificate Manager（ACM） の説明です。AWS Identity and Access Management（IAM） は、AWS リソースを誰がどのように利用できるかを認証・認可の観点で管理するサービスです。',
            },
            {
                text:'データベースパスワードや API キーなどの機密情報を安全に保管・取得・ローテーションするサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Secrets Manager の説明です。AWS Identity and Access Management（IAM） は、AWS リソースを誰がどのように利用できるかを認証・認可の観点で管理するサービスです。',
            },
        ],
        explanation:
            'AWS Identity and Access Management（IAM） は「AWS リソースを誰がどのように利用できるかを認証・認可の観点で管理するサービス」と整理します。',
    },
    {
        question:'AWS Key Management Service（AWS KMS） の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'暗号化に利用する鍵を AWS 上で作成・管理・制御するサービス',
                isCorrect: true,
                explanation:'AWS KMS は、S3、EBS、RDS など多くの AWS サービスの暗号化鍵管理に利用されます。',
            },
            {
                text:'SSL/TLS 証明書を発行・保管・更新管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Certificate Manager（ACM） の説明です。AWS Key Management Service（AWS KMS） は、暗号化に利用する鍵を AWS 上で作成・管理・制御するサービスです。',
            },
            {
                text:'データベースパスワードや API キーなどの機密情報を安全に保管・取得・ローテーションするサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Secrets Manager の説明です。AWS Key Management Service（AWS KMS） は、暗号化に利用する鍵を AWS 上で作成・管理・制御するサービスです。',
            },
            {
                text:'HTTP(S) リクエストを検査し、ルールに基づいて許可またはブロックする Web アプリケーションファイアウォール',
                isCorrect: false,
                explanation:
                    'これは主に AWS WAF の説明です。AWS Key Management Service（AWS KMS） は、暗号化に利用する鍵を AWS 上で作成・管理・制御するサービスです。',
            },
        ],
        explanation:'AWS Key Management Service（AWS KMS） は「暗号化に利用する鍵を AWS 上で作成・管理・制御するサービス」と整理します。',
    },
    {
        question:'AWS Certificate Manager（ACM） の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'SSL/TLS 証明書を発行・保管・更新管理するサービス',
                isCorrect: true,
                explanation:
                    'AWS Certificate Manager は、CloudFront や Application Load Balancer などで HTTPS を提供する際の証明書管理に使います。',
            },
            {
                text:'データベースパスワードや API キーなどの機密情報を安全に保管・取得・ローテーションするサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Secrets Manager の説明です。AWS Certificate Manager（ACM） は、SSL/TLS 証明書を発行・保管・更新管理するサービスです。',
            },
            {
                text:'HTTP(S) リクエストを検査し、ルールに基づいて許可またはブロックする Web アプリケーションファイアウォール',
                isCorrect: false,
                explanation:'これは主に AWS WAF の説明です。AWS Certificate Manager（ACM） は、SSL/TLS 証明書を発行・保管・更新管理するサービスです。',
            },
            {
                text:'DDoS 攻撃から AWS 上のアプリケーションを保護するためのサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Shield の説明です。AWS Certificate Manager（ACM） は、SSL/TLS 証明書を発行・保管・更新管理するサービスです。',
            },
        ],
        explanation:'AWS Certificate Manager（ACM） は「SSL/TLS 証明書を発行・保管・更新管理するサービス」と整理します。',
    },
    {
        question:'AWS Secrets Manager の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'データベースパスワードや API キーなどの機密情報を安全に保管・取得・ローテーションするサービス',
                isCorrect: true,
                explanation:'AWS Secrets Manager は、アプリケーションのソースコードに秘密情報を直接書かないために利用します。',
            },
            {
                text:'HTTP(S) リクエストを検査し、ルールに基づいて許可またはブロックする Web アプリケーションファイアウォール',
                isCorrect: false,
                explanation:
                    'これは主に AWS WAF の説明です。AWS Secrets Manager は、データベースパスワードや API キーなどの機密情報を安全に保管・取得・ローテーションするサービスです。',
            },
            {
                text:'DDoS 攻撃から AWS 上のアプリケーションを保護するためのサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Shield の説明です。AWS Secrets Manager は、データベースパスワードや API キーなどの機密情報を安全に保管・取得・ローテーションするサービスです。',
            },
            {
                text:'AWS 環境のログやデータソースを分析し、不審な通信や脅威を検出するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon GuardDuty の説明です。AWS Secrets Manager は、データベースパスワードや API キーなどの機密情報を安全に保管・取得・ローテーションするサービスです。',
            },
        ],
        explanation:'AWS Secrets Manager は「データベースパスワードや API キーなどの機密情報を安全に保管・取得・ローテーションするサービス」と整理します。',
    },
    {
        question:'AWS WAF の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'HTTP(S) リクエストを検査し、ルールに基づいて許可またはブロックする Web アプリケーションファイアウォール',
                isCorrect: true,
                explanation:
                    'AWS WAF（Web Application Firewall）は、SQL インジェクションや不審なリクエストなどから Web アプリケーションを保護するために使います。',
            },
            {
                text:'DDoS 攻撃から AWS 上のアプリケーションを保護するためのサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Shield の説明です。AWS WAF は、HTTP(S) リクエストを検査し、ルールに基づいて許可またはブロックする Web アプリケーションファイアウォールです。',
            },
            {
                text:'AWS 環境のログやデータソースを分析し、不審な通信や脅威を検出するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon GuardDuty の説明です。AWS WAF は、HTTP(S) リクエストを検査し、ルールに基づいて許可またはブロックする Web アプリケーションファイアウォールです。',
            },
            {
                text:'EC2、ECR コンテナイメージ、Lambda 関数などの脆弱性や意図しない公開を継続的に検査するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Inspector の説明です。AWS WAF は、HTTP(S) リクエストを検査し、ルールに基づいて許可またはブロックする Web アプリケーションファイアウォールです。',
            },
        ],
        explanation:'AWS WAF は「HTTP(S) リクエストを検査し、ルールに基づいて許可またはブロックする Web アプリケーションファイアウォール」と整理します。',
    },
    {
        question:'AWS Shield の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'DDoS 攻撃から AWS 上のアプリケーションを保護するためのサービス',
                isCorrect: true,
                explanation:'AWS Shield は、分散型サービス妨害攻撃への保護に関連するサービスです。AWS Shield Standard は追加料金なしで自動適用されます。',
            },
            {
                text:'AWS 環境のログやデータソースを分析し、不審な通信や脅威を検出するサービス',
                isCorrect: false,
                explanation:'これは主に Amazon GuardDuty の説明です。AWS Shield は、DDoS 攻撃から AWS 上のアプリケーションを保護するためのサービスです。',
            },
            {
                text:'EC2、ECR コンテナイメージ、Lambda 関数などの脆弱性や意図しない公開を継続的に検査するサービス',
                isCorrect: false,
                explanation:'これは主に Amazon Inspector の説明です。AWS Shield は、DDoS 攻撃から AWS 上のアプリケーションを保護するためのサービスです。',
            },
            {
                text:'S3 に保存された機密データを発見し、データセキュリティリスクを把握するサービス',
                isCorrect: false,
                explanation:'これは主に Amazon Macie の説明です。AWS Shield は、DDoS 攻撃から AWS 上のアプリケーションを保護するためのサービスです。',
            },
        ],
        explanation:'AWS Shield は「DDoS 攻撃から AWS 上のアプリケーションを保護するためのサービス」と整理します。',
    },
    {
        question:'Amazon GuardDuty の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'AWS 環境のログやデータソースを分析し、不審な通信や脅威を検出するサービス',
                isCorrect: true,
                explanation:'Amazon GuardDuty は、脅威検出に特化したセキュリティサービスです。CloudTrail、VPC Flow Logs、DNS ログなどを分析します。',
            },
            {
                text:'EC2、ECR コンテナイメージ、Lambda 関数などの脆弱性や意図しない公開を継続的に検査するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Inspector の説明です。Amazon GuardDuty は、AWS 環境のログやデータソースを分析し、不審な通信や脅威を検出するサービスです。',
            },
            {
                text:'S3 に保存された機密データを発見し、データセキュリティリスクを把握するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Macie の説明です。Amazon GuardDuty は、AWS 環境のログやデータソースを分析し、不審な通信や脅威を検出するサービスです。',
            },
            {
                text:'複数のセキュリティサービスの所見を集約し、AWS 環境のセキュリティリスクを一元的に把握するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Security Hub の説明です。Amazon GuardDuty は、AWS 環境のログやデータソースを分析し、不審な通信や脅威を検出するサービスです。',
            },
        ],
        explanation:'Amazon GuardDuty は「AWS 環境のログやデータソースを分析し、不審な通信や脅威を検出するサービス」と整理します。',
    },
    {
        question:'Amazon Inspector の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'EC2、ECR コンテナイメージ、Lambda 関数などの脆弱性や意図しない公開を継続的に検査するサービス',
                isCorrect: true,
                explanation:'Amazon Inspector は、ソフトウェア脆弱性やネットワーク到達可能性などを検査する脆弱性管理サービスです。',
            },
            {
                text:'S3 に保存された機密データを発見し、データセキュリティリスクを把握するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Macie の説明です。Amazon Inspector は、EC2、ECR コンテナイメージ、Lambda 関数などの脆弱性や意図しない公開を継続的に検査するサービスです。',
            },
            {
                text:'複数のセキュリティサービスの所見を集約し、AWS 環境のセキュリティリスクを一元的に把握するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Security Hub の説明です。Amazon Inspector は、EC2、ECR コンテナイメージ、Lambda 関数などの脆弱性や意図しない公開を継続的に検査するサービスです。',
            },
            {
                text:'従業員が複数の AWS アカウントや業務アプリケーションへサインインするアクセスを一元管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS IAM Identity Center の説明です。Amazon Inspector は、EC2、ECR コンテナイメージ、Lambda 関数などの脆弱性や意図しない公開を継続的に検査するサービスです。',
            },
        ],
        explanation:'Amazon Inspector は「EC2、ECR コンテナイメージ、Lambda 関数などの脆弱性や意図しない公開を継続的に検査するサービス」と整理します。',
    },
    {
        question:'Amazon Macie の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'S3 に保存された機密データを発見し、データセキュリティリスクを把握するサービス',
                isCorrect: true,
                explanation:'Amazon Macie は、個人情報や認証番号などの機密データを検出するためのサービスです。',
            },
            {
                text:'複数のセキュリティサービスの所見を集約し、AWS 環境のセキュリティリスクを一元的に把握するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Security Hub の説明です。Amazon Macie は、S3 に保存された機密データを発見し、データセキュリティリスクを把握するサービスです。',
            },
            {
                text:'従業員が複数の AWS アカウントや業務アプリケーションへサインインするアクセスを一元管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS IAM Identity Center の説明です。Amazon Macie は、S3 に保存された機密データを発見し、データセキュリティリスクを把握するサービスです。',
            },
            {
                text:'アプリケーション利用者のサインアップ、サインイン、ユーザーディレクトリを提供する機能',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Cognito ユーザープール の説明です。Amazon Macie は、S3 に保存された機密データを発見し、データセキュリティリスクを把握するサービスです。',
            },
        ],
        explanation:'Amazon Macie は「S3 に保存された機密データを発見し、データセキュリティリスクを把握するサービス」と整理します。',
    },
    {
        question:'AWS Security Hub の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'複数のセキュリティサービスの所見を集約し、AWS 環境のセキュリティリスクを一元的に把握するサービス',
                isCorrect: true,
                explanation:
                    'AWS Security Hub は、GuardDuty、Inspector、Macie などの所見を集約します。Security Hub CSPM は設定や標準準拠の評価に重点があります。',
            },
            {
                text:'従業員が複数の AWS アカウントや業務アプリケーションへサインインするアクセスを一元管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS IAM Identity Center の説明です。AWS Security Hub は、複数のセキュリティサービスの所見を集約し、AWS 環境のセキュリティリスクを一元的に把握するサービスです。',
            },
            {
                text:'アプリケーション利用者のサインアップ、サインイン、ユーザーディレクトリを提供する機能',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Cognito ユーザープール の説明です。AWS Security Hub は、複数のセキュリティサービスの所見を集約し、AWS 環境のセキュリティリスクを一元的に把握するサービスです。',
            },
            {
                text:'AWS リソースを誰がどのように利用できるかを認証・認可の観点で管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Identity and Access Management（IAM） の説明です。AWS Security Hub は、複数のセキュリティサービスの所見を集約し、AWS 環境のセキュリティリスクを一元的に把握するサービスです。',
            },
        ],
        explanation:'AWS Security Hub は「複数のセキュリティサービスの所見を集約し、AWS 環境のセキュリティリスクを一元的に把握するサービス」と整理します。',
    },
    {
        question:'AWS IAM Identity Center の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'従業員が複数の AWS アカウントや業務アプリケーションへサインインするアクセスを一元管理するサービス',
                isCorrect: true,
                explanation:'AWS IAM Identity Center は、組織内ユーザーのシングルサインオンや複数アカウントへのアクセス管理に使います。',
            },
            {
                text:'アプリケーション利用者のサインアップ、サインイン、ユーザーディレクトリを提供する機能',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Cognito ユーザープール の説明です。AWS IAM Identity Center は、従業員が複数の AWS アカウントや業務アプリケーションへサインインするアクセスを一元管理するサービスです。',
            },
            {
                text:'AWS リソースを誰がどのように利用できるかを認証・認可の観点で管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Identity and Access Management（IAM） の説明です。AWS IAM Identity Center は、従業員が複数の AWS アカウントや業務アプリケーションへサインインするアクセスを一元管理するサービスです。',
            },
            {
                text:'暗号化に利用する鍵を AWS 上で作成・管理・制御するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Key Management Service（AWS KMS） の説明です。AWS IAM Identity Center は、従業員が複数の AWS アカウントや業務アプリケーションへサインインするアクセスを一元管理するサービスです。',
            },
        ],
        explanation:
            'AWS IAM Identity Center は「従業員が複数の AWS アカウントや業務アプリケーションへサインインするアクセスを一元管理するサービス」と整理します。',
    },
    {
        question:'Amazon Cognito ユーザープール の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'アプリケーション利用者のサインアップ、サインイン、ユーザーディレクトリを提供する機能',
                isCorrect: true,
                explanation:'Amazon Cognito ユーザープールは、一般利用者向けアプリの認証基盤として利用されます。IAM は AWS リソース操作の権限管理が中心です。',
            },
            {
                text:'AWS リソースを誰がどのように利用できるかを認証・認可の観点で管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Identity and Access Management（IAM） の説明です。Amazon Cognito ユーザープール は、アプリケーション利用者のサインアップ、サインイン、ユーザーディレクトリを提供する機能です。',
            },
            {
                text:'暗号化に利用する鍵を AWS 上で作成・管理・制御するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Key Management Service（AWS KMS） の説明です。Amazon Cognito ユーザープール は、アプリケーション利用者のサインアップ、サインイン、ユーザーディレクトリを提供する機能です。',
            },
            {
                text:'SSL/TLS 証明書を発行・保管・更新管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Certificate Manager（ACM） の説明です。Amazon Cognito ユーザープール は、アプリケーション利用者のサインアップ、サインイン、ユーザーディレクトリを提供する機能です。',
            },
        ],
        explanation:'Amazon Cognito ユーザープール は「アプリケーション利用者のサインアップ、サインイン、ユーザーディレクトリを提供する機能」と整理します。',
    },
    {
        question:'Amazon Simple Queue Service（Amazon SQS） の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'処理したいメッセージをキューに保持し、送信側と受信側を疎結合にするサービス',
                isCorrect: true,
                explanation:'Amazon SQS は、後続処理を非同期化したい場合に使うメッセージキューサービスです。',
            },
            {
                text:'トピックに発行したメッセージを、複数の購読先へ配信できる通知・Pub/Sub サービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Simple Notification Service（Amazon SNS） の説明です。Amazon Simple Queue Service（Amazon SQS） は、処理したいメッセージをキューに保持し、送信側と受信側を疎結合にするサービスです。',
            },
            {
                text:'アプリケーションや AWS サービスからのイベントを受け取り、ルールに応じて対象へルーティングするサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EventBridge の説明です。Amazon Simple Queue Service（Amazon SQS） は、処理したいメッセージをキューに保持し、送信側と受信側を疎結合にするサービスです。',
            },
            {
                text:'複数の処理をステップとして定義し、順序、分岐、待機、失敗時の流れを管理するワークフローサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Step Functions の説明です。Amazon Simple Queue Service（Amazon SQS） は、処理したいメッセージをキューに保持し、送信側と受信側を疎結合にするサービスです。',
            },
        ],
        explanation:
            'Amazon Simple Queue Service（Amazon SQS） は「処理したいメッセージをキューに保持し、送信側と受信側を疎結合にするサービス」と整理します。',
    },
    {
        question:'Amazon Simple Notification Service（Amazon SNS） の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'トピックに発行したメッセージを、複数の購読先へ配信できる通知・Pub/Sub サービス',
                isCorrect: true,
                explanation:'Amazon SNS は、メール、HTTP エンドポイント、SQS キューなど複数の購読先へ同じ通知を届ける用途で使います。',
            },
            {
                text:'アプリケーションや AWS サービスからのイベントを受け取り、ルールに応じて対象へルーティングするサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EventBridge の説明です。Amazon Simple Notification Service（Amazon SNS） は、トピックに発行したメッセージを、複数の購読先へ配信できる通知・Pub/Sub サービスです。',
            },
            {
                text:'複数の処理をステップとして定義し、順序、分岐、待機、失敗時の流れを管理するワークフローサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Step Functions の説明です。Amazon Simple Notification Service（Amazon SNS） は、トピックに発行したメッセージを、複数の購読先へ配信できる通知・Pub/Sub サービスです。',
            },
            {
                text:'Apache ActiveMQ や RabbitMQ と互換性のあるマネージドメッセージブローカーサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon MQ の説明です。Amazon Simple Notification Service（Amazon SNS） は、トピックに発行したメッセージを、複数の購読先へ配信できる通知・Pub/Sub サービスです。',
            },
        ],
        explanation:
            'Amazon Simple Notification Service（Amazon SNS） は「トピックに発行したメッセージを、複数の購読先へ配信できる通知・Pub/Sub サービス」と整理します。',
    },
    {
        question:'Amazon EventBridge の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'アプリケーションや AWS サービスからのイベントを受け取り、ルールに応じて対象へルーティングするサービス',
                isCorrect: true,
                explanation:'Amazon EventBridge は、イベント駆動アーキテクチャでイベントを振り分ける中心的なサービスです。',
            },
            {
                text:'複数の処理をステップとして定義し、順序、分岐、待機、失敗時の流れを管理するワークフローサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Step Functions の説明です。Amazon EventBridge は、アプリケーションや AWS サービスからのイベントを受け取り、ルールに応じて対象へルーティングするサービスです。',
            },
            {
                text:'Apache ActiveMQ や RabbitMQ と互換性のあるマネージドメッセージブローカーサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon MQ の説明です。Amazon EventBridge は、アプリケーションや AWS サービスからのイベントを受け取り、ルールに応じて対象へルーティングするサービスです。',
            },
            {
                text:'処理したいメッセージをキューに保持し、送信側と受信側を疎結合にするサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Simple Queue Service（Amazon SQS） の説明です。Amazon EventBridge は、アプリケーションや AWS サービスからのイベントを受け取り、ルールに応じて対象へルーティングするサービスです。',
            },
        ],
        explanation:'Amazon EventBridge は「アプリケーションや AWS サービスからのイベントを受け取り、ルールに応じて対象へルーティングするサービス」と整理します。',
    },
    {
        question:'AWS Step Functions の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'複数の処理をステップとして定義し、順序、分岐、待機、失敗時の流れを管理するワークフローサービス',
                isCorrect: true,
                explanation:'AWS Step Functions は、Lambda や ECS などの処理を組み合わせ、状態遷移としてワークフローを管理します。',
            },
            {
                text:'Apache ActiveMQ や RabbitMQ と互換性のあるマネージドメッセージブローカーサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon MQ の説明です。AWS Step Functions は、複数の処理をステップとして定義し、順序、分岐、待機、失敗時の流れを管理するワークフローサービスです。',
            },
            {
                text:'処理したいメッセージをキューに保持し、送信側と受信側を疎結合にするサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Simple Queue Service（Amazon SQS） の説明です。AWS Step Functions は、複数の処理をステップとして定義し、順序、分岐、待機、失敗時の流れを管理するワークフローサービスです。',
            },
            {
                text:'トピックに発行したメッセージを、複数の購読先へ配信できる通知・Pub/Sub サービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Simple Notification Service（Amazon SNS） の説明です。AWS Step Functions は、複数の処理をステップとして定義し、順序、分岐、待機、失敗時の流れを管理するワークフローサービスです。',
            },
        ],
        explanation:'AWS Step Functions は「複数の処理をステップとして定義し、順序、分岐、待機、失敗時の流れを管理するワークフローサービス」と整理します。',
    },
    {
        question:'Amazon MQ の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'Apache ActiveMQ や RabbitMQ と互換性のあるマネージドメッセージブローカーサービス',
                isCorrect: true,
                explanation:'Amazon MQ は、既存のメッセージングプロトコルやコードとの互換性を重視して AWS へ移行したい場合に使われます。',
            },
            {
                text:'処理したいメッセージをキューに保持し、送信側と受信側を疎結合にするサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Simple Queue Service（Amazon SQS） の説明です。Amazon MQ は、Apache ActiveMQ や RabbitMQ と互換性のあるマネージドメッセージブローカーサービスです。',
            },
            {
                text:'トピックに発行したメッセージを、複数の購読先へ配信できる通知・Pub/Sub サービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Simple Notification Service（Amazon SNS） の説明です。Amazon MQ は、Apache ActiveMQ や RabbitMQ と互換性のあるマネージドメッセージブローカーサービスです。',
            },
            {
                text:'アプリケーションや AWS サービスからのイベントを受け取り、ルールに応じて対象へルーティングするサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EventBridge の説明です。Amazon MQ は、Apache ActiveMQ や RabbitMQ と互換性のあるマネージドメッセージブローカーサービスです。',
            },
        ],
        explanation:'Amazon MQ は「Apache ActiveMQ や RabbitMQ と互換性のあるマネージドメッセージブローカーサービス」と整理します。',
    },
    {
        question:'Amazon CloudWatch の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'AWS リソースやアプリケーションのメトリクス、ログ、アラームを用いて稼働状況を監視するサービス',
                isCorrect: true,
                explanation:'Amazon CloudWatch は、CPU 使用率などのメトリクス、アプリケーションログ、アラーム通知などを扱う監視サービスです。',
            },
            {
                text:'ユーザー、ロール、AWS サービスなどが行った AWS API 操作をイベントとして記録するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS CloudTrail の説明です。Amazon CloudWatch は、AWS リソースやアプリケーションのメトリクス、ログ、アラームを用いて稼働状況を監視するサービスです。',
            },
            {
                text:'AWS リソースの設定変更履歴やルールへの準拠状況を記録・評価するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Config の説明です。Amazon CloudWatch は、AWS リソースやアプリケーションのメトリクス、ログ、アラームを用いて稼働状況を監視するサービスです。',
            },
            {
                text:'EC2 管理、パッチ適用、コマンド実行、パラメータ管理などの運用作業を支援するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Systems Manager の説明です。Amazon CloudWatch は、AWS リソースやアプリケーションのメトリクス、ログ、アラームを用いて稼働状況を監視するサービスです。',
            },
        ],
        explanation:'Amazon CloudWatch は「AWS リソースやアプリケーションのメトリクス、ログ、アラームを用いて稼働状況を監視するサービス」と整理します。',
    },
    {
        question:'AWS CloudTrail の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'ユーザー、ロール、AWS サービスなどが行った AWS API 操作をイベントとして記録するサービス',
                isCorrect: true,
                explanation:'AWS CloudTrail は、誰がいつどの API 操作を行ったかを監査や調査に利用するためのサービスです。',
            },
            {
                text:'AWS リソースの設定変更履歴やルールへの準拠状況を記録・評価するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Config の説明です。AWS CloudTrail は、ユーザー、ロール、AWS サービスなどが行った AWS API 操作をイベントとして記録するサービスです。',
            },
            {
                text:'EC2 管理、パッチ適用、コマンド実行、パラメータ管理などの運用作業を支援するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Systems Manager の説明です。AWS CloudTrail は、ユーザー、ロール、AWS サービスなどが行った AWS API 操作をイベントとして記録するサービスです。',
            },
            {
                text:'コスト、性能、可用性、セキュリティなどの観点で AWS 環境の改善推奨を確認できるサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Trusted Advisor の説明です。AWS CloudTrail は、ユーザー、ロール、AWS サービスなどが行った AWS API 操作をイベントとして記録するサービスです。',
            },
        ],
        explanation:'AWS CloudTrail は「ユーザー、ロール、AWS サービスなどが行った AWS API 操作をイベントとして記録するサービス」と整理します。',
    },
    {
        question:'AWS Config の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'AWS リソースの設定変更履歴やルールへの準拠状況を記録・評価するサービス',
                isCorrect: true,
                explanation:'AWS Config は、リソース構成の履歴確認や、社内ルールへの準拠評価に使います。',
            },
            {
                text:'EC2 管理、パッチ適用、コマンド実行、パラメータ管理などの運用作業を支援するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Systems Manager の説明です。AWS Config は、AWS リソースの設定変更履歴やルールへの準拠状況を記録・評価するサービスです。',
            },
            {
                text:'コスト、性能、可用性、セキュリティなどの観点で AWS 環境の改善推奨を確認できるサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Trusted Advisor の説明です。AWS Config は、AWS リソースの設定変更履歴やルールへの準拠状況を記録・評価するサービスです。',
            },
            {
                text:'利用中の AWS サービスやリソースに影響する障害、変更、メンテナンス情報を確認するサービス',
                isCorrect: false,
                explanation:'これは主に AWS Health の説明です。AWS Config は、AWS リソースの設定変更履歴やルールへの準拠状況を記録・評価するサービスです。',
            },
        ],
        explanation:'AWS Config は「AWS リソースの設定変更履歴やルールへの準拠状況を記録・評価するサービス」と整理します。',
    },
    {
        question:'AWS Systems Manager の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'EC2 管理、パッチ適用、コマンド実行、パラメータ管理などの運用作業を支援するサービス',
                isCorrect: true,
                explanation:'AWS Systems Manager は、サーバーやアプリケーション運用を一元的に行うための機能群です。',
            },
            {
                text:'コスト、性能、可用性、セキュリティなどの観点で AWS 環境の改善推奨を確認できるサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Trusted Advisor の説明です。AWS Systems Manager は、EC2 管理、パッチ適用、コマンド実行、パラメータ管理などの運用作業を支援するサービスです。',
            },
            {
                text:'利用中の AWS サービスやリソースに影響する障害、変更、メンテナンス情報を確認するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Health の説明です。AWS Systems Manager は、EC2 管理、パッチ適用、コマンド実行、パラメータ管理などの運用作業を支援するサービスです。',
            },
            {
                text:'AWS サービスに設定された利用上限を確認し、必要に応じて引き上げを申請するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Service Quotas の説明です。AWS Systems Manager は、EC2 管理、パッチ適用、コマンド実行、パラメータ管理などの運用作業を支援するサービスです。',
            },
        ],
        explanation:'AWS Systems Manager は「EC2 管理、パッチ適用、コマンド実行、パラメータ管理などの運用作業を支援するサービス」と整理します。',
    },
    {
        question:'AWS Trusted Advisor の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'コスト、性能、可用性、セキュリティなどの観点で AWS 環境の改善推奨を確認できるサービス',
                isCorrect: true,
                explanation:'AWS Trusted Advisor は、AWS ベストプラクティスに基づいたチェック結果を確認するサービスです。',
            },
            {
                text:'利用中の AWS サービスやリソースに影響する障害、変更、メンテナンス情報を確認するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Health の説明です。AWS Trusted Advisor は、コスト、性能、可用性、セキュリティなどの観点で AWS 環境の改善推奨を確認できるサービスです。',
            },
            {
                text:'AWS サービスに設定された利用上限を確認し、必要に応じて引き上げを申請するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Service Quotas の説明です。AWS Trusted Advisor は、コスト、性能、可用性、セキュリティなどの観点で AWS 環境の改善推奨を確認できるサービスです。',
            },
            {
                text:'複数サービスをまたぐリクエストの流れを追跡し、遅延やエラーの原因調査に役立てるサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS X-Ray の説明です。AWS Trusted Advisor は、コスト、性能、可用性、セキュリティなどの観点で AWS 環境の改善推奨を確認できるサービスです。',
            },
        ],
        explanation:'AWS Trusted Advisor は「コスト、性能、可用性、セキュリティなどの観点で AWS 環境の改善推奨を確認できるサービス」と整理します。',
    },
    {
        question:'AWS Health の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'利用中の AWS サービスやリソースに影響する障害、変更、メンテナンス情報を確認するサービス',
                isCorrect: true,
                explanation:'AWS Health は、自分のアカウントや利用リソースに関連する AWS 側イベントを把握するために使います。',
            },
            {
                text:'AWS サービスに設定された利用上限を確認し、必要に応じて引き上げを申請するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Service Quotas の説明です。AWS Health は、利用中の AWS サービスやリソースに影響する障害、変更、メンテナンス情報を確認するサービスです。',
            },
            {
                text:'複数サービスをまたぐリクエストの流れを追跡し、遅延やエラーの原因調査に役立てるサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS X-Ray の説明です。AWS Health は、利用中の AWS サービスやリソースに影響する障害、変更、メンテナンス情報を確認するサービスです。',
            },
            {
                text:'AWS リソースやアプリケーションのメトリクス、ログ、アラームを用いて稼働状況を監視するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon CloudWatch の説明です。AWS Health は、利用中の AWS サービスやリソースに影響する障害、変更、メンテナンス情報を確認するサービスです。',
            },
        ],
        explanation:'AWS Health は「利用中の AWS サービスやリソースに影響する障害、変更、メンテナンス情報を確認するサービス」と整理します。',
    },
    {
        question:'Service Quotas の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'AWS サービスに設定された利用上限を確認し、必要に応じて引き上げを申請するサービス',
                isCorrect: true,
                explanation:'Service Quotas は、EC2 インスタンス数や VPC 数などの上限値を確認・管理するためのサービスです。',
            },
            {
                text:'複数サービスをまたぐリクエストの流れを追跡し、遅延やエラーの原因調査に役立てるサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS X-Ray の説明です。Service Quotas は、AWS サービスに設定された利用上限を確認し、必要に応じて引き上げを申請するサービスです。',
            },
            {
                text:'AWS リソースやアプリケーションのメトリクス、ログ、アラームを用いて稼働状況を監視するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon CloudWatch の説明です。Service Quotas は、AWS サービスに設定された利用上限を確認し、必要に応じて引き上げを申請するサービスです。',
            },
            {
                text:'ユーザー、ロール、AWS サービスなどが行った AWS API 操作をイベントとして記録するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS CloudTrail の説明です。Service Quotas は、AWS サービスに設定された利用上限を確認し、必要に応じて引き上げを申請するサービスです。',
            },
        ],
        explanation:'Service Quotas は「AWS サービスに設定された利用上限を確認し、必要に応じて引き上げを申請するサービス」と整理します。',
    },
    {
        question:'AWS X-Ray の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'複数サービスをまたぐリクエストの流れを追跡し、遅延やエラーの原因調査に役立てるサービス',
                isCorrect: true,
                explanation:'AWS X-Ray は、分散アプリケーションのトレースを可視化し、どの処理で時間がかかっているかを調べるために利用します。',
            },
            {
                text:'AWS リソースやアプリケーションのメトリクス、ログ、アラームを用いて稼働状況を監視するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon CloudWatch の説明です。AWS X-Ray は、複数サービスをまたぐリクエストの流れを追跡し、遅延やエラーの原因調査に役立てるサービスです。',
            },
            {
                text:'ユーザー、ロール、AWS サービスなどが行った AWS API 操作をイベントとして記録するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS CloudTrail の説明です。AWS X-Ray は、複数サービスをまたぐリクエストの流れを追跡し、遅延やエラーの原因調査に役立てるサービスです。',
            },
            {
                text:'AWS リソースの設定変更履歴やルールへの準拠状況を記録・評価するサービス',
                isCorrect: false,
                explanation:'これは主に AWS Config の説明です。AWS X-Ray は、複数サービスをまたぐリクエストの流れを追跡し、遅延やエラーの原因調査に役立てるサービスです。',
            },
        ],
        explanation:'AWS X-Ray は「複数サービスをまたぐリクエストの流れを追跡し、遅延やエラーの原因調査に役立てるサービス」と整理します。',
    },
    {
        question:'AWS CloudFormation の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'JSON や YAML のテンプレートで AWS リソースを定義し、スタックとして作成・更新・削除を管理するサービス',
                isCorrect: true,
                explanation:'AWS CloudFormation は、インフラをコードとして管理する代表的な AWS サービスです。',
            },
            {
                text:'TypeScript や Python などのプログラミング言語でクラウドインフラを定義し、CloudFormation を通じてデプロイする開発フレームワーク',
                isCorrect: false,
                explanation:
                    'これは主に AWS Cloud Development Kit (AWS CDK) の説明です。AWS CloudFormation は、JSON や YAML のテンプレートで AWS リソースを定義し、スタックとして作成・更新・削除を管理するサービスです。',
            },
            {
                text:'ソースコードのコンパイル、テスト、成果物作成を実行するマネージドビルドサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS CodeBuild の説明です。AWS CloudFormation は、JSON や YAML のテンプレートで AWS リソースを定義し、スタックとして作成・更新・削除を管理するサービスです。',
            },
            {
                text:'ソース変更からビルド、テスト、デプロイまでのリリース工程を自動化するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS CodePipeline の説明です。AWS CloudFormation は、JSON や YAML のテンプレートで AWS リソースを定義し、スタックとして作成・更新・削除を管理するサービスです。',
            },
        ],
        explanation:
            'AWS CloudFormation は「JSON や YAML のテンプレートで AWS リソースを定義し、スタックとして作成・更新・削除を管理するサービス」と整理します。',
    },
    {
        question:'AWS Cloud Development Kit (AWS CDK) の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'TypeScript や Python などのプログラミング言語でクラウドインフラを定義し、CloudFormation を通じてデプロイする開発フレームワーク',
                isCorrect: true,
                explanation:'AWS CDK は、プログラミング言語でインフラを記述できる仕組みです。最終的には CloudFormation テンプレートへ合成してデプロイします。',
            },
            {
                text:'ソースコードのコンパイル、テスト、成果物作成を実行するマネージドビルドサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS CodeBuild の説明です。AWS Cloud Development Kit (AWS CDK) は、TypeScript や Python などのプログラミング言語でクラウドインフラを定義し、CloudFormation を通じてデプロイする開発フレームワークです。',
            },
            {
                text:'ソース変更からビルド、テスト、デプロイまでのリリース工程を自動化するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS CodePipeline の説明です。AWS Cloud Development Kit (AWS CDK) は、TypeScript や Python などのプログラミング言語でクラウドインフラを定義し、CloudFormation を通じてデプロイする開発フレームワークです。',
            },
            {
                text:'アプリケーションの新しいバージョンを EC2、オンプレミス、Lambda、ECS などへ自動配備するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS CodeDeploy の説明です。AWS Cloud Development Kit (AWS CDK) は、TypeScript や Python などのプログラミング言語でクラウドインフラを定義し、CloudFormation を通じてデプロイする開発フレームワークです。',
            },
        ],
        explanation:
            'AWS Cloud Development Kit (AWS CDK) は「TypeScript や Python などのプログラミング言語でクラウドインフラを定義し、CloudFormation を通じてデプロイする開発フレームワーク」と整理します。',
    },
    {
        question:'AWS CodeBuild の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'ソースコードのコンパイル、テスト、成果物作成を実行するマネージドビルドサービス',
                isCorrect: true,
                explanation:'AWS CodeBuild は、ビルドサーバーを自前で管理せずにビルドやテストを実行するためのサービスです。',
            },
            {
                text:'ソース変更からビルド、テスト、デプロイまでのリリース工程を自動化するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS CodePipeline の説明です。AWS CodeBuild は、ソースコードのコンパイル、テスト、成果物作成を実行するマネージドビルドサービスです。',
            },
            {
                text:'アプリケーションの新しいバージョンを EC2、オンプレミス、Lambda、ECS などへ自動配備するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS CodeDeploy の説明です。AWS CodeBuild は、ソースコードのコンパイル、テスト、成果物作成を実行するマネージドビルドサービスです。',
            },
            {
                text:'ECS や EKS などで利用するコンテナイメージを保存・管理するレジストリサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Elastic Container Registry (Amazon ECR) の説明です。AWS CodeBuild は、ソースコードのコンパイル、テスト、成果物作成を実行するマネージドビルドサービスです。',
            },
        ],
        explanation:'AWS CodeBuild は「ソースコードのコンパイル、テスト、成果物作成を実行するマネージドビルドサービス」と整理します。',
    },
    {
        question:'AWS CodePipeline の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'ソース変更からビルド、テスト、デプロイまでのリリース工程を自動化するサービス',
                isCorrect: true,
                explanation:'AWS CodePipeline は、CI/CD パイプラインを構成し、リリース作業を順番に自動実行するためのサービスです。',
            },
            {
                text:'アプリケーションの新しいバージョンを EC2、オンプレミス、Lambda、ECS などへ自動配備するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS CodeDeploy の説明です。AWS CodePipeline は、ソース変更からビルド、テスト、デプロイまでのリリース工程を自動化するサービスです。',
            },
            {
                text:'ECS や EKS などで利用するコンテナイメージを保存・管理するレジストリサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Elastic Container Registry (Amazon ECR) の説明です。AWS CodePipeline は、ソース変更からビルド、テスト、デプロイまでのリリース工程を自動化するサービスです。',
            },
            {
                text:'JSON や YAML のテンプレートで AWS リソースを定義し、スタックとして作成・更新・削除を管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS CloudFormation の説明です。AWS CodePipeline は、ソース変更からビルド、テスト、デプロイまでのリリース工程を自動化するサービスです。',
            },
        ],
        explanation:'AWS CodePipeline は「ソース変更からビルド、テスト、デプロイまでのリリース工程を自動化するサービス」と整理します。',
    },
    {
        question:'AWS CodeDeploy の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'アプリケーションの新しいバージョンを EC2、オンプレミス、Lambda、ECS などへ自動配備するサービス',
                isCorrect: true,
                explanation:'AWS CodeDeploy は、アプリケーションのデプロイを管理するサービスです。Blue/Green デプロイなどにも利用できます。',
            },
            {
                text:'ECS や EKS などで利用するコンテナイメージを保存・管理するレジストリサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Elastic Container Registry (Amazon ECR) の説明です。AWS CodeDeploy は、アプリケーションの新しいバージョンを EC2、オンプレミス、Lambda、ECS などへ自動配備するサービスです。',
            },
            {
                text:'JSON や YAML のテンプレートで AWS リソースを定義し、スタックとして作成・更新・削除を管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS CloudFormation の説明です。AWS CodeDeploy は、アプリケーションの新しいバージョンを EC2、オンプレミス、Lambda、ECS などへ自動配備するサービスです。',
            },
            {
                text:'TypeScript や Python などのプログラミング言語でクラウドインフラを定義し、CloudFormation を通じてデプロイする開発フレームワーク',
                isCorrect: false,
                explanation:
                    'これは主に AWS Cloud Development Kit (AWS CDK) の説明です。AWS CodeDeploy は、アプリケーションの新しいバージョンを EC2、オンプレミス、Lambda、ECS などへ自動配備するサービスです。',
            },
        ],
        explanation:'AWS CodeDeploy は「アプリケーションの新しいバージョンを EC2、オンプレミス、Lambda、ECS などへ自動配備するサービス」と整理します。',
    },
    {
        question:'Amazon Elastic Container Registry (Amazon ECR) の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'ECS や EKS などで利用するコンテナイメージを保存・管理するレジストリサービス',
                isCorrect: true,
                explanation:'Amazon ECR は、コンテナイメージを保存し、必要なときに取得できるようにする AWS のコンテナレジストリです。',
            },
            {
                text:'JSON や YAML のテンプレートで AWS リソースを定義し、スタックとして作成・更新・削除を管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS CloudFormation の説明です。Amazon Elastic Container Registry (Amazon ECR) は、ECS や EKS などで利用するコンテナイメージを保存・管理するレジストリサービスです。',
            },
            {
                text:'TypeScript や Python などのプログラミング言語でクラウドインフラを定義し、CloudFormation を通じてデプロイする開発フレームワーク',
                isCorrect: false,
                explanation:
                    'これは主に AWS Cloud Development Kit (AWS CDK) の説明です。Amazon Elastic Container Registry (Amazon ECR) は、ECS や EKS などで利用するコンテナイメージを保存・管理するレジストリサービスです。',
            },
            {
                text:'ソースコードのコンパイル、テスト、成果物作成を実行するマネージドビルドサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS CodeBuild の説明です。Amazon Elastic Container Registry (Amazon ECR) は、ECS や EKS などで利用するコンテナイメージを保存・管理するレジストリサービスです。',
            },
        ],
        explanation:
            'Amazon Elastic Container Registry (Amazon ECR) は「ECS や EKS などで利用するコンテナイメージを保存・管理するレジストリサービス」と整理します。',
    },
    {
        question:'Amazon Athena の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'Amazon S3 上のデータを、サーバーやクラスターを管理せずに SQL で分析するサービス',
                isCorrect: true,
                explanation:'Amazon Athena は、S3 に置いた CSV、JSON、Parquet などのデータに対して SQL で問い合わせるサービスです。',
            },
            {
                text:'データの取り込み、変換、統合、データカタログ管理を支援するサーバーレスデータ統合サービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Glue の説明です。Amazon Athena は、Amazon S3 上のデータを、サーバーやクラスターを管理せずに SQL で分析するサービスです。',
            },
            {
                text:'大規模な分析データを蓄積し、SQL で集計・分析するクラウドデータウェアハウスサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Redshift の説明です。Amazon Athena は、Amazon S3 上のデータを、サーバーやクラスターを管理せずに SQL で分析するサービスです。',
            },
            {
                text:'リアルタイムに流れるデータを受け取り、複数のコンシューマーが処理できるストリームを提供するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Kinesis Data Streams の説明です。Amazon Athena は、Amazon S3 上のデータを、サーバーやクラスターを管理せずに SQL で分析するサービスです。',
            },
        ],
        explanation:'Amazon Athena は「Amazon S3 上のデータを、サーバーやクラスターを管理せずに SQL で分析するサービス」と整理します。',
    },
    {
        question:'AWS Glue の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'データの取り込み、変換、統合、データカタログ管理を支援するサーバーレスデータ統合サービス',
                isCorrect: true,
                explanation:'AWS Glue は、ETL（Extract, Transform, Load）処理や AWS Glue Data Catalog によるメタデータ管理に使います。',
            },
            {
                text:'大規模な分析データを蓄積し、SQL で集計・分析するクラウドデータウェアハウスサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Redshift の説明です。AWS Glue は、データの取り込み、変換、統合、データカタログ管理を支援するサーバーレスデータ統合サービスです。',
            },
            {
                text:'リアルタイムに流れるデータを受け取り、複数のコンシューマーが処理できるストリームを提供するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Kinesis Data Streams の説明です。AWS Glue は、データの取り込み、変換、統合、データカタログ管理を支援するサーバーレスデータ統合サービスです。',
            },
            {
                text:'ストリーミングデータを Amazon S3 や Redshift などの配信先へ管理負担を抑えて届けるサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Data Firehose（旧 Amazon Kinesis Data Firehose） の説明です。AWS Glue は、データの取り込み、変換、統合、データカタログ管理を支援するサーバーレスデータ統合サービスです。',
            },
        ],
        explanation:'AWS Glue は「データの取り込み、変換、統合、データカタログ管理を支援するサーバーレスデータ統合サービス」と整理します。',
    },
    {
        question:'Amazon Redshift の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'大規模な分析データを蓄積し、SQL で集計・分析するクラウドデータウェアハウスサービス',
                isCorrect: true,
                explanation:'Amazon Redshift は、BI ツールなどから大量データを分析するためのデータウェアハウスです。',
            },
            {
                text:'リアルタイムに流れるデータを受け取り、複数のコンシューマーが処理できるストリームを提供するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Kinesis Data Streams の説明です。Amazon Redshift は、大規模な分析データを蓄積し、SQL で集計・分析するクラウドデータウェアハウスサービスです。',
            },
            {
                text:'ストリーミングデータを Amazon S3 や Redshift などの配信先へ管理負担を抑えて届けるサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Data Firehose（旧 Amazon Kinesis Data Firehose） の説明です。Amazon Redshift は、大規模な分析データを蓄積し、SQL で集計・分析するクラウドデータウェアハウスサービスです。',
            },
            {
                text:'分析データからダッシュボードやインタラクティブな可視化を作成して共有する BI 機能',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Quick Sight（旧 Amazon QuickSight） の説明です。Amazon Redshift は、大規模な分析データを蓄積し、SQL で集計・分析するクラウドデータウェアハウスサービスです。',
            },
        ],
        explanation:'Amazon Redshift は「大規模な分析データを蓄積し、SQL で集計・分析するクラウドデータウェアハウスサービス」と整理します。',
    },
    {
        question:'Amazon Kinesis Data Streams の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'リアルタイムに流れるデータを受け取り、複数のコンシューマーが処理できるストリームを提供するサービス',
                isCorrect: true,
                explanation:'Amazon Kinesis Data Streams は、クリックストリームやセンサーデータなどをリアルタイム処理するためのストリーミングサービスです。',
            },
            {
                text:'ストリーミングデータを Amazon S3 や Redshift などの配信先へ管理負担を抑えて届けるサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Data Firehose（旧 Amazon Kinesis Data Firehose） の説明です。Amazon Kinesis Data Streams は、リアルタイムに流れるデータを受け取り、複数のコンシューマーが処理できるストリームを提供するサービスです。',
            },
            {
                text:'分析データからダッシュボードやインタラクティブな可視化を作成して共有する BI 機能',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Quick Sight（旧 Amazon QuickSight） の説明です。Amazon Kinesis Data Streams は、リアルタイムに流れるデータを受け取り、複数のコンシューマーが処理できるストリームを提供するサービスです。',
            },
            {
                text:'Apache Spark や Apache Hadoop などのビッグデータフレームワークを AWS 上で実行するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EMR の説明です。Amazon Kinesis Data Streams は、リアルタイムに流れるデータを受け取り、複数のコンシューマーが処理できるストリームを提供するサービスです。',
            },
        ],
        explanation:
            'Amazon Kinesis Data Streams は「リアルタイムに流れるデータを受け取り、複数のコンシューマーが処理できるストリームを提供するサービス」と整理します。',
    },
    {
        question:'Amazon Data Firehose（旧 Amazon Kinesis Data Firehose） の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'ストリーミングデータを Amazon S3 や Redshift などの配信先へ管理負担を抑えて届けるサービス',
                isCorrect: true,
                explanation:
                    'Amazon Data Firehose は、独自の配信プログラムを管理せずにストリーミングデータを蓄積先へ届けるサービスです。旧称として Amazon Kinesis Data Firehose を見ることがあります。',
            },
            {
                text:'分析データからダッシュボードやインタラクティブな可視化を作成して共有する BI 機能',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Quick Sight（旧 Amazon QuickSight） の説明です。Amazon Data Firehose（旧 Amazon Kinesis Data Firehose） は、ストリーミングデータを Amazon S3 や Redshift などの配信先へ管理負担を抑えて届けるサービスです。',
            },
            {
                text:'Apache Spark や Apache Hadoop などのビッグデータフレームワークを AWS 上で実行するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EMR の説明です。Amazon Data Firehose（旧 Amazon Kinesis Data Firehose） は、ストリーミングデータを Amazon S3 や Redshift などの配信先へ管理負担を抑えて届けるサービスです。',
            },
            {
                text:'S3 上のデータレイクと Glue Data Catalog のメタデータに対し、細かなアクセス制御を一元管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Lake Formation の説明です。Amazon Data Firehose（旧 Amazon Kinesis Data Firehose） は、ストリーミングデータを Amazon S3 や Redshift などの配信先へ管理負担を抑えて届けるサービスです。',
            },
        ],
        explanation:
            'Amazon Data Firehose（旧 Amazon Kinesis Data Firehose） は「ストリーミングデータを Amazon S3 や Redshift などの配信先へ管理負担を抑えて届けるサービス」と整理します。',
    },
    {
        question:'Amazon Quick Sight（旧 Amazon QuickSight） の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'分析データからダッシュボードやインタラクティブな可視化を作成して共有する BI 機能',
                isCorrect: true,
                explanation:
                    'Amazon Quick Sight は、旧 Amazon QuickSight の BI（Business Intelligence）・可視化機能を引き継ぐ位置づけです。名称変更の経緯があるため、旧 QuickSight の可視化機能として理解すると整理しやすくなります。',
            },
            {
                text:'Apache Spark や Apache Hadoop などのビッグデータフレームワークを AWS 上で実行するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EMR の説明です。Amazon Quick Sight（旧 Amazon QuickSight） は、分析データからダッシュボードやインタラクティブな可視化を作成して共有する BI 機能です。',
            },
            {
                text:'S3 上のデータレイクと Glue Data Catalog のメタデータに対し、細かなアクセス制御を一元管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Lake Formation の説明です。Amazon Quick Sight（旧 Amazon QuickSight） は、分析データからダッシュボードやインタラクティブな可視化を作成して共有する BI 機能です。',
            },
            {
                text:'Apache Kafka クラスターをマネージドで運用し、Kafka 互換のストリーミングデータ基盤を利用するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Managed Streaming for Apache Kafka (Amazon MSK) の説明です。Amazon Quick Sight（旧 Amazon QuickSight） は、分析データからダッシュボードやインタラクティブな可視化を作成して共有する BI 機能です。',
            },
        ],
        explanation:
            'Amazon Quick Sight（旧 Amazon QuickSight） は「分析データからダッシュボードやインタラクティブな可視化を作成して共有する BI 機能」と整理します。',
    },
    {
        question:'Amazon EMR の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'Apache Spark や Apache Hadoop などのビッグデータフレームワークを AWS 上で実行するサービス',
                isCorrect: true,
                explanation:'Amazon EMR は、大規模分散処理や分析ワークロードで Spark、Hadoop、Hive などを利用するためのサービスです。',
            },
            {
                text:'S3 上のデータレイクと Glue Data Catalog のメタデータに対し、細かなアクセス制御を一元管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Lake Formation の説明です。Amazon EMR は、Apache Spark や Apache Hadoop などのビッグデータフレームワークを AWS 上で実行するサービスです。',
            },
            {
                text:'Apache Kafka クラスターをマネージドで運用し、Kafka 互換のストリーミングデータ基盤を利用するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Managed Streaming for Apache Kafka (Amazon MSK) の説明です。Amazon EMR は、Apache Spark や Apache Hadoop などのビッグデータフレームワークを AWS 上で実行するサービスです。',
            },
            {
                text:'Amazon S3 上のデータを、サーバーやクラスターを管理せずに SQL で分析するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Athena の説明です。Amazon EMR は、Apache Spark や Apache Hadoop などのビッグデータフレームワークを AWS 上で実行するサービスです。',
            },
        ],
        explanation:'Amazon EMR は「Apache Spark や Apache Hadoop などのビッグデータフレームワークを AWS 上で実行するサービス」と整理します。',
    },
    {
        question:'AWS Lake Formation の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'S3 上のデータレイクと Glue Data Catalog のメタデータに対し、細かなアクセス制御を一元管理するサービス',
                isCorrect: true,
                explanation:'AWS Lake Formation は、データレイクの権限管理やガバナンスを支援するサービスです。Glue Data Catalog と組み合わせて使われます。',
            },
            {
                text:'Apache Kafka クラスターをマネージドで運用し、Kafka 互換のストリーミングデータ基盤を利用するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Managed Streaming for Apache Kafka (Amazon MSK) の説明です。AWS Lake Formation は、S3 上のデータレイクと Glue Data Catalog のメタデータに対し、細かなアクセス制御を一元管理するサービスです。',
            },
            {
                text:'Amazon S3 上のデータを、サーバーやクラスターを管理せずに SQL で分析するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Athena の説明です。AWS Lake Formation は、S3 上のデータレイクと Glue Data Catalog のメタデータに対し、細かなアクセス制御を一元管理するサービスです。',
            },
            {
                text:'データの取り込み、変換、統合、データカタログ管理を支援するサーバーレスデータ統合サービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Glue の説明です。AWS Lake Formation は、S3 上のデータレイクと Glue Data Catalog のメタデータに対し、細かなアクセス制御を一元管理するサービスです。',
            },
        ],
        explanation:
            'AWS Lake Formation は「S3 上のデータレイクと Glue Data Catalog のメタデータに対し、細かなアクセス制御を一元管理するサービス」と整理します。',
    },
    {
        question:'Amazon Managed Streaming for Apache Kafka (Amazon MSK) の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'Apache Kafka クラスターをマネージドで運用し、Kafka 互換のストリーミングデータ基盤を利用するサービス',
                isCorrect: true,
                explanation:'Amazon MSK は、既存の Kafka アプリケーションとの互換性を重視しながら AWS 上で Kafka を利用するためのサービスです。',
            },
            {
                text:'Amazon S3 上のデータを、サーバーやクラスターを管理せずに SQL で分析するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Athena の説明です。Amazon Managed Streaming for Apache Kafka (Amazon MSK) は、Apache Kafka クラスターをマネージドで運用し、Kafka 互換のストリーミングデータ基盤を利用するサービスです。',
            },
            {
                text:'データの取り込み、変換、統合、データカタログ管理を支援するサーバーレスデータ統合サービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Glue の説明です。Amazon Managed Streaming for Apache Kafka (Amazon MSK) は、Apache Kafka クラスターをマネージドで運用し、Kafka 互換のストリーミングデータ基盤を利用するサービスです。',
            },
            {
                text:'大規模な分析データを蓄積し、SQL で集計・分析するクラウドデータウェアハウスサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Redshift の説明です。Amazon Managed Streaming for Apache Kafka (Amazon MSK) は、Apache Kafka クラスターをマネージドで運用し、Kafka 互換のストリーミングデータ基盤を利用するサービスです。',
            },
        ],
        explanation:
            'Amazon Managed Streaming for Apache Kafka (Amazon MSK) は「Apache Kafka クラスターをマネージドで運用し、Kafka 互換のストリーミングデータ基盤を利用するサービス」と整理します。',
    },
    {
        question:'Amazon Bedrock の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'複数の基盤モデルを API から利用し、生成 AI アプリケーションを構築するサービス',
                isCorrect: true,
                explanation:'Amazon Bedrock は、文章生成、要約、チャット、検索拡張生成などの生成 AI アプリケーション構築に使うサービスです。',
            },
            {
                text:'機械学習モデルの構築、学習、デプロイをマネージド環境で行うサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon SageMaker AI の説明です。Amazon Bedrock は、複数の基盤モデルを API から利用し、生成 AI アプリケーションを構築するサービスです。',
            },
            {
                text:'画像や動画に写る物体、人物、場面、不適切なコンテンツなどを分析するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Rekognition の説明です。Amazon Bedrock は、複数の基盤モデルを API から利用し、生成 AI アプリケーションを構築するサービスです。',
            },
            {
                text:'スキャン文書や画像から文字、フォーム項目、表などを抽出するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Textract の説明です。Amazon Bedrock は、複数の基盤モデルを API から利用し、生成 AI アプリケーションを構築するサービスです。',
            },
        ],
        explanation:'Amazon Bedrock は「複数の基盤モデルを API から利用し、生成 AI アプリケーションを構築するサービス」と整理します。',
    },
    {
        question:'Amazon SageMaker AI の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'機械学習モデルの構築、学習、デプロイをマネージド環境で行うサービス',
                isCorrect: true,
                explanation:'Amazon SageMaker AI は、自社データを使った機械学習モデル開発から推論エンドポイントの提供までを支援します。',
            },
            {
                text:'画像や動画に写る物体、人物、場面、不適切なコンテンツなどを分析するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Rekognition の説明です。Amazon SageMaker AI は、機械学習モデルの構築、学習、デプロイをマネージド環境で行うサービスです。',
            },
            {
                text:'スキャン文書や画像から文字、フォーム項目、表などを抽出するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Textract の説明です。Amazon SageMaker AI は、機械学習モデルの構築、学習、デプロイをマネージド環境で行うサービスです。',
            },
            {
                text:'音声データをテキストへ変換する自動音声認識サービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Transcribe の説明です。Amazon SageMaker AI は、機械学習モデルの構築、学習、デプロイをマネージド環境で行うサービスです。',
            },
        ],
        explanation:'Amazon SageMaker AI は「機械学習モデルの構築、学習、デプロイをマネージド環境で行うサービス」と整理します。',
    },
    {
        question:'Amazon Rekognition の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'画像や動画に写る物体、人物、場面、不適切なコンテンツなどを分析するサービス',
                isCorrect: true,
                explanation:'Amazon Rekognition は、機械学習の専門知識を必須とせずに画像・動画分析を利用できる AI サービスです。',
            },
            {
                text:'スキャン文書や画像から文字、フォーム項目、表などを抽出するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Textract の説明です。Amazon Rekognition は、画像や動画に写る物体、人物、場面、不適切なコンテンツなどを分析するサービスです。',
            },
            {
                text:'音声データをテキストへ変換する自動音声認識サービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Transcribe の説明です。Amazon Rekognition は、画像や動画に写る物体、人物、場面、不適切なコンテンツなどを分析するサービスです。',
            },
            {
                text:'入力された文章を別の言語へ機械翻訳するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Translate の説明です。Amazon Rekognition は、画像や動画に写る物体、人物、場面、不適切なコンテンツなどを分析するサービスです。',
            },
        ],
        explanation:'Amazon Rekognition は「画像や動画に写る物体、人物、場面、不適切なコンテンツなどを分析するサービス」と整理します。',
    },
    {
        question:'Amazon Textract の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'スキャン文書や画像から文字、フォーム項目、表などを抽出するサービス',
                isCorrect: true,
                explanation:'Amazon Textract は、請求書や申込書などの文書処理を自動化するために利用します。',
            },
            {
                text:'音声データをテキストへ変換する自動音声認識サービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Transcribe の説明です。Amazon Textract は、スキャン文書や画像から文字、フォーム項目、表などを抽出するサービスです。',
            },
            {
                text:'入力された文章を別の言語へ機械翻訳するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Translate の説明です。Amazon Textract は、スキャン文書や画像から文字、フォーム項目、表などを抽出するサービスです。',
            },
            {
                text:'文章から感情、エンティティ、キーフレーズなどを抽出・分析する自然言語処理サービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Comprehend の説明です。Amazon Textract は、スキャン文書や画像から文字、フォーム項目、表などを抽出するサービスです。',
            },
        ],
        explanation:'Amazon Textract は「スキャン文書や画像から文字、フォーム項目、表などを抽出するサービス」と整理します。',
    },
    {
        question:'Amazon Transcribe の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'音声データをテキストへ変換する自動音声認識サービス',
                isCorrect: true,
                explanation:'Amazon Transcribe は、会議音声や問い合わせ録音などを文字起こしし、検索や分析に使えるようにします。',
            },
            {
                text:'入力された文章を別の言語へ機械翻訳するサービス',
                isCorrect: false,
                explanation:'これは主に Amazon Translate の説明です。Amazon Transcribe は、音声データをテキストへ変換する自動音声認識サービスです。',
            },
            {
                text:'文章から感情、エンティティ、キーフレーズなどを抽出・分析する自然言語処理サービス',
                isCorrect: false,
                explanation:'これは主に Amazon Comprehend の説明です。Amazon Transcribe は、音声データをテキストへ変換する自動音声認識サービスです。',
            },
            {
                text:'テキストや音声の入力を理解して応答する会話型ボットを構築するサービス',
                isCorrect: false,
                explanation:'これは主に Amazon Lex V2 の説明です。Amazon Transcribe は、音声データをテキストへ変換する自動音声認識サービスです。',
            },
        ],
        explanation:'Amazon Transcribe は「音声データをテキストへ変換する自動音声認識サービス」と整理します。',
    },
    {
        question:'Amazon Translate の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'入力された文章を別の言語へ機械翻訳するサービス',
                isCorrect: true,
                explanation:'Amazon Translate は、多言語対応アプリケーションや文章翻訳の自動化に利用します。',
            },
            {
                text:'文章から感情、エンティティ、キーフレーズなどを抽出・分析する自然言語処理サービス',
                isCorrect: false,
                explanation:'これは主に Amazon Comprehend の説明です。Amazon Translate は、入力された文章を別の言語へ機械翻訳するサービスです。',
            },
            {
                text:'テキストや音声の入力を理解して応答する会話型ボットを構築するサービス',
                isCorrect: false,
                explanation:'これは主に Amazon Lex V2 の説明です。Amazon Translate は、入力された文章を別の言語へ機械翻訳するサービスです。',
            },
            {
                text:'複数の基盤モデルを API から利用し、生成 AI アプリケーションを構築するサービス',
                isCorrect: false,
                explanation:'これは主に Amazon Bedrock の説明です。Amazon Translate は、入力された文章を別の言語へ機械翻訳するサービスです。',
            },
        ],
        explanation:'Amazon Translate は「入力された文章を別の言語へ機械翻訳するサービス」と整理します。',
    },
    {
        question:'Amazon Comprehend の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'文章から感情、エンティティ、キーフレーズなどを抽出・分析する自然言語処理サービス',
                isCorrect: true,
                explanation:'Amazon Comprehend は、顧客レビューや問い合わせ文章などを分析し、意味のある情報を取り出すために使います。',
            },
            {
                text:'テキストや音声の入力を理解して応答する会話型ボットを構築するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Lex V2 の説明です。Amazon Comprehend は、文章から感情、エンティティ、キーフレーズなどを抽出・分析する自然言語処理サービスです。',
            },
            {
                text:'複数の基盤モデルを API から利用し、生成 AI アプリケーションを構築するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Bedrock の説明です。Amazon Comprehend は、文章から感情、エンティティ、キーフレーズなどを抽出・分析する自然言語処理サービスです。',
            },
            {
                text:'機械学習モデルの構築、学習、デプロイをマネージド環境で行うサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon SageMaker AI の説明です。Amazon Comprehend は、文章から感情、エンティティ、キーフレーズなどを抽出・分析する自然言語処理サービスです。',
            },
        ],
        explanation:'Amazon Comprehend は「文章から感情、エンティティ、キーフレーズなどを抽出・分析する自然言語処理サービス」と整理します。',
    },
    {
        question:'Amazon Lex V2 の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'テキストや音声の入力を理解して応答する会話型ボットを構築するサービス',
                isCorrect: true,
                explanation:'Amazon Lex V2 は、チャットボットや音声ボットを作るためのサービスです。',
            },
            {
                text:'複数の基盤モデルを API から利用し、生成 AI アプリケーションを構築するサービス',
                isCorrect: false,
                explanation:'これは主に Amazon Bedrock の説明です。Amazon Lex V2 は、テキストや音声の入力を理解して応答する会話型ボットを構築するサービスです。',
            },
            {
                text:'機械学習モデルの構築、学習、デプロイをマネージド環境で行うサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon SageMaker AI の説明です。Amazon Lex V2 は、テキストや音声の入力を理解して応答する会話型ボットを構築するサービスです。',
            },
            {
                text:'画像や動画に写る物体、人物、場面、不適切なコンテンツなどを分析するサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Rekognition の説明です。Amazon Lex V2 は、テキストや音声の入力を理解して応答する会話型ボットを構築するサービスです。',
            },
        ],
        explanation:'Amazon Lex V2 は「テキストや音声の入力を理解して応答する会話型ボットを構築するサービス」と整理します。',
    },
    {
        question:'AWS Database Migration Service (AWS DMS) の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'オンプレミスや他環境のデータベースを AWS のデータベースへ移行するサービス',
                isCorrect: true,
                explanation:'AWS DMS は、リレーショナルデータベースなどの移行に使います。移行中の変更を継続的に反映する構成にも対応します。',
            },
            {
                text:'物理サーバーや仮想サーバー上の既存アプリケーションを、大きな変更を加えずに AWS へリホスト移行するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Application Migration Service の説明です。AWS Database Migration Service (AWS DMS) は、オンプレミスや他環境のデータベースを AWS のデータベースへ移行するサービスです。',
            },
            {
                text:'複数の移行ツールや移行対象アプリケーションの進捗を一つの場所で追跡するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Migration Hub の説明です。AWS Database Migration Service (AWS DMS) は、オンプレミスや他環境のデータベースを AWS のデータベースへ移行するサービスです。',
            },
            {
                text:'AWS クラウド上で仮想サーバーを起動し、OS やソフトウェアを管理して利用できるサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EC2 の説明です。AWS Database Migration Service (AWS DMS) は、オンプレミスや他環境のデータベースを AWS のデータベースへ移行するサービスです。',
            },
        ],
        explanation:
            'AWS Database Migration Service (AWS DMS) は「オンプレミスや他環境のデータベースを AWS のデータベースへ移行するサービス」と整理します。',
    },
    {
        question:'AWS Application Migration Service の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'物理サーバーや仮想サーバー上の既存アプリケーションを、大きな変更を加えずに AWS へリホスト移行するサービス',
                isCorrect: true,
                explanation:'AWS Application Migration Service は、既存サーバーを Amazon EC2 上へ移行するリホスト用途で使います。',
            },
            {
                text:'複数の移行ツールや移行対象アプリケーションの進捗を一つの場所で追跡するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Migration Hub の説明です。AWS Application Migration Service は、物理サーバーや仮想サーバー上の既存アプリケーションを、大きな変更を加えずに AWS へリホスト移行するサービスです。',
            },
            {
                text:'オンプレミスや他環境のデータベースを AWS のデータベースへ移行するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Database Migration Service (AWS DMS) の説明です。AWS Application Migration Service は、物理サーバーや仮想サーバー上の既存アプリケーションを、大きな変更を加えずに AWS へリホスト移行するサービスです。',
            },
            {
                text:'AWS クラウド上で仮想サーバーを起動し、OS やソフトウェアを管理して利用できるサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EC2 の説明です。AWS Application Migration Service は、物理サーバーや仮想サーバー上の既存アプリケーションを、大きな変更を加えずに AWS へリホスト移行するサービスです。',
            },
        ],
        explanation:
            'AWS Application Migration Service は「物理サーバーや仮想サーバー上の既存アプリケーションを、大きな変更を加えずに AWS へリホスト移行するサービス」と整理します。',
    },
    {
        question:'AWS Migration Hub の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'複数の移行ツールや移行対象アプリケーションの進捗を一つの場所で追跡するサービス',
                isCorrect: true,
                explanation:'AWS Migration Hub は、移行プロジェクト全体の状況を把握するためのサービスです。実際の移行処理そのものではなく進捗管理に使います。',
            },
            {
                text:'オンプレミスや他環境のデータベースを AWS のデータベースへ移行するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Database Migration Service (AWS DMS) の説明です。AWS Migration Hub は、複数の移行ツールや移行対象アプリケーションの進捗を一つの場所で追跡するサービスです。',
            },
            {
                text:'物理サーバーや仮想サーバー上の既存アプリケーションを、大きな変更を加えずに AWS へリホスト移行するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Application Migration Service の説明です。AWS Migration Hub は、複数の移行ツールや移行対象アプリケーションの進捗を一つの場所で追跡するサービスです。',
            },
            {
                text:'AWS クラウド上で仮想サーバーを起動し、OS やソフトウェアを管理して利用できるサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EC2 の説明です。AWS Migration Hub は、複数の移行ツールや移行対象アプリケーションの進捗を一つの場所で追跡するサービスです。',
            },
        ],
        explanation:'AWS Migration Hub は「複数の移行ツールや移行対象アプリケーションの進捗を一つの場所で追跡するサービス」と整理します。',
    },
    {
        question:'AWS Organizations の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'複数の AWS アカウントを組織としてまとめ、ポリシー適用や一括請求を管理するサービス',
                isCorrect: true,
                explanation:'AWS Organizations は、複数アカウント環境を管理する基本サービスです。組織単位でサービスコントロールポリシーを適用できます。',
            },
            {
                text:'AWS の利用料金をサービス別やアカウント別に可視化し、過去実績や予測を分析するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Cost Explorer の説明です。AWS Organizations は、複数の AWS アカウントを組織としてまとめ、ポリシー適用や一括請求を管理するサービスです。',
            },
            {
                text:'AWS 利用料金や使用量に予算しきい値を設定し、超過しそうな場合に通知するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Budgets の説明です。AWS Organizations は、複数の AWS アカウントを組織としてまとめ、ポリシー適用や一括請求を管理するサービスです。',
            },
            {
                text:'ベストプラクティスに沿ったマルチアカウント環境を標準化してセットアップ・統制するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Control Tower の説明です。AWS Organizations は、複数の AWS アカウントを組織としてまとめ、ポリシー適用や一括請求を管理するサービスです。',
            },
        ],
        explanation:'AWS Organizations は「複数の AWS アカウントを組織としてまとめ、ポリシー適用や一括請求を管理するサービス」と整理します。',
    },
    {
        question:'AWS Cost Explorer の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'AWS の利用料金をサービス別やアカウント別に可視化し、過去実績や予測を分析するサービス',
                isCorrect: true,
                explanation:'AWS Cost Explorer は、コスト傾向をグラフで確認し、費用の増減要因を把握するために使います。',
            },
            {
                text:'AWS 利用料金や使用量に予算しきい値を設定し、超過しそうな場合に通知するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Budgets の説明です。AWS Cost Explorer は、AWS の利用料金をサービス別やアカウント別に可視化し、過去実績や予測を分析するサービスです。',
            },
            {
                text:'ベストプラクティスに沿ったマルチアカウント環境を標準化してセットアップ・統制するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Control Tower の説明です。AWS Cost Explorer は、AWS の利用料金をサービス別やアカウント別に可視化し、過去実績や予測を分析するサービスです。',
            },
            {
                text:'一定期間の利用額をコミットする代わりに、対象利用料金の割引を受ける料金モデル',
                isCorrect: false,
                explanation:
                    'これは主に Savings Plans の説明です。AWS Cost Explorer は、AWS の利用料金をサービス別やアカウント別に可視化し、過去実績や予測を分析するサービスです。',
            },
        ],
        explanation:'AWS Cost Explorer は「AWS の利用料金をサービス別やアカウント別に可視化し、過去実績や予測を分析するサービス」と整理します。',
    },
    {
        question:'AWS Budgets の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'AWS 利用料金や使用量に予算しきい値を設定し、超過しそうな場合に通知するサービス',
                isCorrect: true,
                explanation:'AWS Budgets は、予算管理と通知に使うサービスです。実績または予測がしきい値に近づいたときに通知できます。',
            },
            {
                text:'ベストプラクティスに沿ったマルチアカウント環境を標準化してセットアップ・統制するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Control Tower の説明です。AWS Budgets は、AWS 利用料金や使用量に予算しきい値を設定し、超過しそうな場合に通知するサービスです。',
            },
            {
                text:'一定期間の利用額をコミットする代わりに、対象利用料金の割引を受ける料金モデル',
                isCorrect: false,
                explanation:
                    'これは主に Savings Plans の説明です。AWS Budgets は、AWS 利用料金や使用量に予算しきい値を設定し、超過しそうな場合に通知するサービスです。',
            },
            {
                text:'AWS の請求と利用量について、リソースやタグを含む詳細な行単位データを S3 に出力する機能',
                isCorrect: false,
                explanation:
                    'これは主に AWS Cost and Usage Reports (AWS CUR) の説明です。AWS Budgets は、AWS 利用料金や使用量に予算しきい値を設定し、超過しそうな場合に通知するサービスです。',
            },
        ],
        explanation:'AWS Budgets は「AWS 利用料金や使用量に予算しきい値を設定し、超過しそうな場合に通知するサービス」と整理します。',
    },
    {
        question:'AWS Control Tower の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'ベストプラクティスに沿ったマルチアカウント環境を標準化してセットアップ・統制するサービス',
                isCorrect: true,
                explanation:'AWS Control Tower は、ログ保管、監査、アカウント作成などを含むランディングゾーンを整備するために使います。',
            },
            {
                text:'一定期間の利用額をコミットする代わりに、対象利用料金の割引を受ける料金モデル',
                isCorrect: false,
                explanation:
                    'これは主に Savings Plans の説明です。AWS Control Tower は、ベストプラクティスに沿ったマルチアカウント環境を標準化してセットアップ・統制するサービスです。',
            },
            {
                text:'AWS の請求と利用量について、リソースやタグを含む詳細な行単位データを S3 に出力する機能',
                isCorrect: false,
                explanation:
                    'これは主に AWS Cost and Usage Reports (AWS CUR) の説明です。AWS Control Tower は、ベストプラクティスに沿ったマルチアカウント環境を標準化してセットアップ・統制するサービスです。',
            },
            {
                text:'複数の AWS アカウントを組織としてまとめ、ポリシー適用や一括請求を管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Organizations の説明です。AWS Control Tower は、ベストプラクティスに沿ったマルチアカウント環境を標準化してセットアップ・統制するサービスです。',
            },
        ],
        explanation:'AWS Control Tower は「ベストプラクティスに沿ったマルチアカウント環境を標準化してセットアップ・統制するサービス」と整理します。',
    },
    {
        question:'Savings Plans の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'一定期間の利用額をコミットする代わりに、対象利用料金の割引を受ける料金モデル',
                isCorrect: true,
                explanation:'Savings Plans は、安定して発生する利用に対して 1 年または 3 年のコミットメントを行い、料金割引を受ける仕組みです。',
            },
            {
                text:'AWS の請求と利用量について、リソースやタグを含む詳細な行単位データを S3 に出力する機能',
                isCorrect: false,
                explanation:
                    'これは主に AWS Cost and Usage Reports (AWS CUR) の説明です。Savings Plans は、一定期間の利用額をコミットする代わりに、対象利用料金の割引を受ける料金モデルです。',
            },
            {
                text:'複数の AWS アカウントを組織としてまとめ、ポリシー適用や一括請求を管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Organizations の説明です。Savings Plans は、一定期間の利用額をコミットする代わりに、対象利用料金の割引を受ける料金モデルです。',
            },
            {
                text:'AWS の利用料金をサービス別やアカウント別に可視化し、過去実績や予測を分析するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Cost Explorer の説明です。Savings Plans は、一定期間の利用額をコミットする代わりに、対象利用料金の割引を受ける料金モデルです。',
            },
        ],
        explanation:'Savings Plans は「一定期間の利用額をコミットする代わりに、対象利用料金の割引を受ける料金モデル」と整理します。',
    },
    {
        question:'AWS Cost and Usage Reports (AWS CUR) の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'AWS の請求と利用量について、リソースやタグを含む詳細な行単位データを S3 に出力する機能',
                isCorrect: true,
                explanation:'AWS Cost and Usage Reports は、詳細な課金データを Athena などで分析したい場合に利用します。',
            },
            {
                text:'複数の AWS アカウントを組織としてまとめ、ポリシー適用や一括請求を管理するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Organizations の説明です。AWS Cost and Usage Reports (AWS CUR) は、AWS の請求と利用量について、リソースやタグを含む詳細な行単位データを S3 に出力する機能です。',
            },
            {
                text:'AWS の利用料金をサービス別やアカウント別に可視化し、過去実績や予測を分析するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Cost Explorer の説明です。AWS Cost and Usage Reports (AWS CUR) は、AWS の請求と利用量について、リソースやタグを含む詳細な行単位データを S3 に出力する機能です。',
            },
            {
                text:'AWS 利用料金や使用量に予算しきい値を設定し、超過しそうな場合に通知するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Budgets の説明です。AWS Cost and Usage Reports (AWS CUR) は、AWS の請求と利用量について、リソースやタグを含む詳細な行単位データを S3 に出力する機能です。',
            },
        ],
        explanation:
            'AWS Cost and Usage Reports (AWS CUR) は「AWS の請求と利用量について、リソースやタグを含む詳細な行単位データを S3 に出力する機能」と整理します。',
    },
    {
        question:'AWS IoT Core の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'IoT デバイスを AWS クラウドへ安全に接続し、メッセージを受け取って他サービスへ連携するサービス',
                isCorrect: true,
                explanation:'AWS IoT Core は、デバイスとクラウドの安全な接続、メッセージ交換、ルールによる連携を提供します。',
            },
            {
                text:'IoT デバイスやエッジ環境の近くでローカル処理やデータ集約を行うサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS IoT Greengrass の説明です。AWS IoT Core は、IoT デバイスを AWS クラウドへ安全に接続し、メッセージを受け取って他サービスへ連携するサービスです。',
            },
            {
                text:'AWS クラウド上で仮想サーバーを起動し、OS やソフトウェアを管理して利用できるサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EC2 の説明です。AWS IoT Core は、IoT デバイスを AWS クラウドへ安全に接続し、メッセージを受け取って他サービスへ連携するサービスです。',
            },
            {
                text:'イベントに応じて短時間の関数コードを実行し、利用者がサーバーを管理しないコンピューティングサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Lambda の説明です。AWS IoT Core は、IoT デバイスを AWS クラウドへ安全に接続し、メッセージを受け取って他サービスへ連携するサービスです。',
            },
        ],
        explanation:'AWS IoT Core は「IoT デバイスを AWS クラウドへ安全に接続し、メッセージを受け取って他サービスへ連携するサービス」と整理します。',
    },
    {
        question:'AWS IoT Greengrass の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'IoT デバイスやエッジ環境の近くでローカル処理やデータ集約を行うサービス',
                isCorrect: true,
                explanation:'AWS IoT Greengrass は、クラウドに送る前のフィルタリング、ローカルイベントへの応答、通信断への対応などに利用します。',
            },
            {
                text:'IoT デバイスを AWS クラウドへ安全に接続し、メッセージを受け取って他サービスへ連携するサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS IoT Core の説明です。AWS IoT Greengrass は、IoT デバイスやエッジ環境の近くでローカル処理やデータ集約を行うサービスです。',
            },
            {
                text:'AWS クラウド上で仮想サーバーを起動し、OS やソフトウェアを管理して利用できるサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EC2 の説明です。AWS IoT Greengrass は、IoT デバイスやエッジ環境の近くでローカル処理やデータ集約を行うサービスです。',
            },
            {
                text:'イベントに応じて短時間の関数コードを実行し、利用者がサーバーを管理しないコンピューティングサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS Lambda の説明です。AWS IoT Greengrass は、IoT デバイスやエッジ環境の近くでローカル処理やデータ集約を行うサービスです。',
            },
        ],
        explanation:'AWS IoT Greengrass は「IoT デバイスやエッジ環境の近くでローカル処理やデータ集約を行うサービス」と整理します。',
    },
    {
        question:'Amazon Simple Email Service (Amazon SES) の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'アプリケーションから通知メールや確認メールなどを送信し、一部のメール受信にも対応するメールサービス',
                isCorrect: true,
                explanation:'Amazon SES は、マーケティングメールや注文確認メールなどを送信する代表的なメールサービスです。要件によっては受信処理にも利用できます。',
            },
            {
                text:'Web / モバイルアプリの構築、バックエンド連携、デプロイ、ホスティングを支援するサービス群',
                isCorrect: false,
                explanation:
                    'これは主に AWS Amplify の説明です。Amazon Simple Email Service (Amazon SES) は、アプリケーションから通知メールや確認メールなどを送信し、一部のメール受信にも対応するメールサービスです。',
            },
            {
                text:'GraphQL API とリアルタイム更新を提供し、複数データソースへのアクセスをまとめるサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS AppSync の説明です。Amazon Simple Email Service (Amazon SES) は、アプリケーションから通知メールや確認メールなどを送信し、一部のメール受信にも対応するメールサービスです。',
            },
            {
                text:'AWS クラウド上で仮想サーバーを起動し、OS やソフトウェアを管理して利用できるサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EC2 の説明です。Amazon Simple Email Service (Amazon SES) は、アプリケーションから通知メールや確認メールなどを送信し、一部のメール受信にも対応するメールサービスです。',
            },
        ],
        explanation:
            'Amazon Simple Email Service (Amazon SES) は「アプリケーションから通知メールや確認メールなどを送信し、一部のメール受信にも対応するメールサービス」と整理します。',
    },
    {
        question:'AWS Amplify の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'Web / モバイルアプリの構築、バックエンド連携、デプロイ、ホスティングを支援するサービス群',
                isCorrect: true,
                explanation:'AWS Amplify は、フロントエンド開発者が認証、API、データ、ホスティングなどを扱いやすくするためのサービスです。',
            },
            {
                text:'GraphQL API とリアルタイム更新を提供し、複数データソースへのアクセスをまとめるサービス',
                isCorrect: false,
                explanation:
                    'これは主に AWS AppSync の説明です。AWS Amplify は、Web / モバイルアプリの構築、バックエンド連携、デプロイ、ホスティングを支援するサービス群です。',
            },
            {
                text:'アプリケーションから通知メールや確認メールなどを送信し、一部のメール受信にも対応するメールサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Simple Email Service (Amazon SES) の説明です。AWS Amplify は、Web / モバイルアプリの構築、バックエンド連携、デプロイ、ホスティングを支援するサービス群です。',
            },
            {
                text:'AWS クラウド上で仮想サーバーを起動し、OS やソフトウェアを管理して利用できるサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EC2 の説明です。AWS Amplify は、Web / モバイルアプリの構築、バックエンド連携、デプロイ、ホスティングを支援するサービス群です。',
            },
        ],
        explanation:'AWS Amplify は「Web / モバイルアプリの構築、バックエンド連携、デプロイ、ホスティングを支援するサービス群」と整理します。',
    },
    {
        question:'AWS AppSync の説明として最も適切なものはどれですか?',
        options: [
            {
                text:'GraphQL API とリアルタイム更新を提供し、複数データソースへのアクセスをまとめるサービス',
                isCorrect: true,
                explanation:'AWS AppSync は、モバイルアプリや Web アプリから GraphQL API を通じてデータを取得・更新するためのサービスです。',
            },
            {
                text:'アプリケーションから通知メールや確認メールなどを送信し、一部のメール受信にも対応するメールサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon Simple Email Service (Amazon SES) の説明です。AWS AppSync は、GraphQL API とリアルタイム更新を提供し、複数データソースへのアクセスをまとめるサービスです。',
            },
            {
                text:'Web / モバイルアプリの構築、バックエンド連携、デプロイ、ホスティングを支援するサービス群',
                isCorrect: false,
                explanation:
                    'これは主に AWS Amplify の説明です。AWS AppSync は、GraphQL API とリアルタイム更新を提供し、複数データソースへのアクセスをまとめるサービスです。',
            },
            {
                text:'AWS クラウド上で仮想サーバーを起動し、OS やソフトウェアを管理して利用できるサービス',
                isCorrect: false,
                explanation:
                    'これは主に Amazon EC2 の説明です。AWS AppSync は、GraphQL API とリアルタイム更新を提供し、複数データソースへのアクセスをまとめるサービスです。',
            },
        ],
        explanation:'AWS AppSync は「GraphQL API とリアルタイム更新を提供し、複数データソースへのアクセスをまとめるサービス」と整理します。',
    }
]
