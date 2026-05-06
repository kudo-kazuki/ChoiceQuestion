<script setup lang="ts">
import type { Question } from '@/types/test_questions'

const loadQuestions = async (): Promise<Question[]> => {
    const mod = await import('@/assets/test_questions/dns/dns1')
    return mod.testQuestions
}
</script>

<template>
    <QuestionSetPage
        title="DNS1"
        storage-key="dns1"
        :load-questions="loadQuestions"
    />
</template>
