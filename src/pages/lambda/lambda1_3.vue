<script setup lang="ts">
import type { Question } from '@/types/test_questions'

const loadQuestions = async (): Promise<Question[]> => {
    const mod = await import('@/assets/test_questions/lambda/lambda1_3')
    return mod.testQuestions
}
</script>

<template>
    <QuestionSetPage
        title="Lambda1_3"
        storage-key="lambda1_3"
        :load-questions="loadQuestions"
    />
</template>
