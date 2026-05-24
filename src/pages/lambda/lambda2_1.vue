<script setup lang="ts">
import type { Question } from '@/types/test_questions'

const loadQuestions = async (): Promise<Question[]> => {
    const mod = await import('@/assets/test_questions/lambda/lambda2_1')
    return mod.testQuestions
}
</script>

<template>
    <QuestionSetPage
        title="Lambda2_1"
        storage-key="lambda2_1"
        :load-questions="loadQuestions"
    />
</template>
