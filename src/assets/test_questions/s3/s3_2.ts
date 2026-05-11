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
]
