<script setup lang="ts">
import type { Question } from '@/types/test_questions'

const loadQuestions = async (): Promise<Question[]> => {
    const mod = await import('@/assets/test_questions/aws_service/aws_service1')
    return mod.testQuestions
}
</script>

<template>
    <QuestionSetPage
        title="AWSService1"
        storage-key="aws_service1"
        :load-questions="loadQuestions"
    />
</template>
