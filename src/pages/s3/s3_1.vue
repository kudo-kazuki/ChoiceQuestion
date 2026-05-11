<script setup lang="ts">
import type { Question } from '@/types/test_questions'

const loadQuestions = async (): Promise<Question[]> => {
    const mod = await import('@/assets/test_questions/s3/s3_1')
    return mod.testQuestions
}
</script>

<template>
    <QuestionSetPage
        title="S3_1"
        storage-key="s3_1"
        :load-questions="loadQuestions"
    />
</template>
