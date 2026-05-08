<script setup lang="ts">
import type { Question } from '@/types/test_questions'

const loadQuestions = async (): Promise<Question[]> => {
    const mod = await import('@/assets/test_questions/cloudfront/cloudfront1')
    return mod.testQuestions
}
</script>

<template>
    <QuestionSetPage
        title="CloudFront1"
        storage-key="cloudfront1"
        :load-questions="loadQuestions"
    />
</template>
