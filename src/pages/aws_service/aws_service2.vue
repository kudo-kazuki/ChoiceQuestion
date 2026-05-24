<script setup lang="ts">
import type { Question } from '@/types/test_questions'

const loadQuestions = async (): Promise<Question[]> => {
    const mod = await import('@/assets/test_questions/aws_service/aws_service2')
    return mod.testQuestions
}
</script>

<template>
    <QuestionSetPage
        title="AWSService2"
        storage-key="aws_service2"
        :load-questions="loadQuestions"
    />
</template>
