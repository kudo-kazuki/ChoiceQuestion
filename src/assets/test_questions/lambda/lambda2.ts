import type { Question } from '@/types/test_questions'

export const testQuestions: Question[] = [
    {
        question: 'Lambda dummy question 2?',
        options: [
            {
                text: 'Correct dummy answer',
                isCorrect: true,
                explanation: 'This is a dummy correct answer.',
            },
            {
                text: 'Wrong dummy answer A',
                isCorrect: false,
                explanation: 'This is a dummy wrong answer.',
            },
            {
                text: 'Wrong dummy answer B',
                isCorrect: false,
                explanation: 'This is a dummy wrong answer.',
            },
            {
                text: 'Wrong dummy answer C',
                isCorrect: false,
                explanation: 'This is a dummy wrong answer.',
            },
        ],
        explanation: 'Dummy explanation for Lambda2.',
    },
]
