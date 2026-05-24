<script setup lang="ts">
import type { Question } from '@/types/test_questions'

const loadQuestions = async (): Promise<Question[]> => {
    const mod = await import('@/assets/test_questions/lambda/lambda2_2')
    return mod.testQuestions
}
</script>

<template>
    <QuestionSetPage
        title="Lambda2_2"
        storage-key="lambda2_2"
        :load-questions="loadQuestions"
    />
</template>
