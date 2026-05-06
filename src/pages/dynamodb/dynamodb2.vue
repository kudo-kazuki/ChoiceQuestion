<script setup lang="ts">
import type { Question } from '@/types/test_questions'

const loadQuestions = async (): Promise<Question[]> => {
    const mod = await import('@/assets/test_questions/dynamodb/dynamodb2')
    return mod.testQuestions
}
</script>

<template>
    <QuestionSetPage
        title="DynamoDB2"
        storage-key="dynamodb2"
        :load-questions="loadQuestions"
    />
</template>
