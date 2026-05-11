<script setup lang="ts">
import type { Question } from '@/types/test_questions'

const loadQuestions = async (): Promise<Question[]> => {
    const mod = await import('@/assets/test_questions/s3/s3_2')
    return mod.testQuestions
}
</script>

<template>
    <QuestionSetPage
        title="S3_2"
        storage-key="s3_2"
        :load-questions="loadQuestions"
    />
</template>
