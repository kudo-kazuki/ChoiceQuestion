<script setup lang="ts">
import type { Question } from '@/types/test_questions'

const loadQuestions = async (): Promise<Question[]> => {
    const mod = await import('@/assets/test_questions/dynamodb/dynamodb1')
    return mod.testQuestions
}
</script>

<template>
    <QuestionSetPage
        title="DynamoDB1"
        storage-key="dynamodb1"
        :load-questions="loadQuestions"
    />
</template>
