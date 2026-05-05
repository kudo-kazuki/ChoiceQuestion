<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { onMounted, shallowRef } from 'vue'
import type { Question } from '@/types/test_questions'

const { height } = useWindowSize()
const testQuestions = shallowRef<Question[] | null>(null)

onMounted(async () => {
    const mod = await import('@/assets/test_questions/ssa')
    testQuestions.value = mod.testQuestions
})
</script>

<template>
    <div class="Page" :style="{ height: height + 'px' }">
        <h1 class="Page__h1">SSA Test</h1>
        <TestQuestions
            v-if="testQuestions"
            class="Page__testQuestions"
            :questions="testQuestions"
        />
        <div v-else class="Page__loading">Loading questions...</div>
    </div>
</template>

<style lang="scss" scoped>
.Page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;

    &__h1 {
        padding: 8px;
        font-size: 20px;
        font-weight: bold;
        color: #494949;
        text-align: center;
        background-color: #f4f4f4;
    }

    & &__testQuestions {
        width: 100%;
        height: 100%;
    }

    &__loading {
        display: grid;
        width: 100%;
        height: 100%;
        font-size: 14px;
        font-weight: bold;
        color: #666;
        place-items: center;
    }

    @media screen and (max-width: 540px) {
        &__h1 {
            padding: 6px;
            font-size: 16px;
        }
    }
}
</style>
