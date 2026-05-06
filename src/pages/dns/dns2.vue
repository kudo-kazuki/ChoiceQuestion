<script setup lang="ts">
import type { Question } from '@/types/test_questions'

const loadQuestions = async (): Promise<Question[]> => {
    const mod = await import('@/assets/test_questions/dns/dns2')
    return mod.testQuestions
}
</script>

<template>
    <QuestionSetPage
        title="DNS2"
        storage-key="dns2"
        :load-questions="loadQuestions"
    />
</template>
