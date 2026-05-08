<script setup lang="ts">
import type { Question } from '@/types/test_questions'

const loadQuestions = async (): Promise<Question[]> => {
    const mod = await import('@/assets/test_questions/cloudfront/cloudfront2')
    return mod.testQuestions
}
</script>

<template>
    <QuestionSetPage
        title="CloudFront2"
        storage-key="cloudfront2"
        :load-questions="loadQuestions"
    />
</template>
