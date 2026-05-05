import type { Question } from '@/types/test_questions'
import { architectureQuestions } from './architecture'
import { databaseQuestions } from './database'
import { networkingQuestions } from './networking'
import { securityQuestions } from './security'
import { storageQuestions } from './storage'

export const testQuestions: Question[] = [
    ...storageQuestions,
    ...networkingQuestions,
    ...architectureQuestions,
    ...databaseQuestions,
    ...securityQuestions,
]
