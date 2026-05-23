import type { Question } from '@/types/test_questions'

export const testQuestions: Question[] = [
    {
        question: '表示確認用のダミー問題です。Amazon S3 はどのようなサービスですか?',
        options: [
            {
                text: 'ファイルなどのデータをオブジェクトとして保存するサービス',
                isCorrect: true,
                explanation: '表示確認用の仮問題です。後続の問題追加時に正式な内容へ置き換えます。',
            },
            {
                text: '仮想サーバーを起動するサービス',
                isCorrect: false,
                explanation: '表示確認用の誤答です。',
            },
            {
                text: 'ドメイン名を登録するためだけのサービス',
                isCorrect: false,
                explanation: '表示確認用の誤答です。',
            },
            {
                text: 'ソースコードを自動で生成するサービス',
                isCorrect: false,
                explanation: '表示確認用の誤答です。',
            },
        ],
        explanation: 'この問題はページ表示確認用のダミー問題です。',
    },
]
