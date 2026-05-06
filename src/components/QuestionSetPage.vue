<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { onMounted, shallowRef, watchEffect } from 'vue'
import type { Question } from '@/types/test_questions'

interface Props {
    title: string
    loadQuestions: () => Promise<Question[]>
    storageKey?: string
}

const props = defineProps<Props>()

const { height } = useWindowSize()
const testQuestions = shallowRef<Question[] | null>(null)

watchEffect(() => {
    document.title = props.title
})

onMounted(async () => {
    testQuestions.value = await props.loadQuestions()
})
</script>

<template>
    <div class="Page" :style="{ height: height + 'px' }">
        <h1 class="Page__h1">
            {{ title }}
            <router-link to="/" class="Page__topLink">TOP</router-link>
        </h1>
        <TestQuestions
            v-if="testQuestions"
            class="Page__testQuestions"
            :questions="testQuestions"
            :storage-key="storageKey"
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
        position: relative;
        display: flex;
        justify-content: center;
        padding: 8px;
        font-size: 20px;
        font-weight: bold;
        color: #494949;
        text-align: center;
        background-color: #f4f4f4;
    }

    &__topLink {
        position: absolute;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);
        background-color: #4a6cf7;
        color: #fff;
        font-size: 11px;
        text-decoration: none;
        padding: 2px 8px;
        border-radius: 6px;
        transition: 0.15s ease background-color;

        &:hover {
            background-color: #3b5ce0;
        }
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
