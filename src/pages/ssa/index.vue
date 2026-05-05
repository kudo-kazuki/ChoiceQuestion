<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { testQuestions } from '@/assets/test_questions/ssa'

const { height } = useWindowSize()
</script>

<template>
    <div class="Page" :style="{ height: height + 'px' }">
        <h1 class="Page__h1">SSA Test</h1>
        <TestQuestions class="Page__testQuestions" :questions="testQuestions" />
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

    @media screen and (max-width: 540px) {
        &__h1 {
            padding: 6px;
            font-size: 16px;
        }
    }
}
</style>
