<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Question } from '@/types/test_questions'

interface Props {
    questions: Question[]
}

const props = defineProps<Props>()

function shuffle<T>(arr: readonly T[]): T[] {
    const result = [...arr]
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[result[i], result[j]] = [result[j], result[i]]
    }
    return result
}

function buildShuffled(): Question[] {
    return shuffle(props.questions).map((q) => ({
        ...q,
        options: shuffle(q.options),
    }))
}

const optionLabels = ['A', 'B', 'C', 'D', 'E']

const questions = ref<Question[]>(buildShuffled())
const currentIndex = ref(0)
const selections = ref<Record<number, number>>({})
const pendingSelection = ref<number | null>(null)
const showResults = ref(false)

const currentQuestion = computed(() => questions.value[currentIndex.value])
const total = computed(() => questions.value.length)

const isAnswered = computed(() => currentIndex.value in selections.value)
const isLastQuestion = computed(() => currentIndex.value === total.value - 1)

const isCurrentCorrect = computed(() => {
    if (!isAnswered.value) return false
    const sel = selections.value[currentIndex.value]
    return currentQuestion.value.options[sel].isCorrect
})

const correctCount = computed(() =>
    Object.entries(selections.value).reduce((n, [i, sel]) => {
        return questions.value[Number(i)].options[sel].isCorrect ? n + 1 : n
    }, 0),
)

const incorrectCount = computed(() =>
    Object.entries(selections.value).reduce((n, [i, sel]) => {
        return questions.value[Number(i)].options[sel].isCorrect ? n : n + 1
    }, 0),
)

const answeredCount = computed(() => Object.keys(selections.value).length)
const progressPercent = computed(
    () => (answeredCount.value / total.value) * 100,
)

const isPerfect = computed(
    () =>
        answeredCount.value === total.value &&
        correctCount.value === total.value,
)

const canSubmit = computed(
    () => !isAnswered.value && pendingSelection.value !== null,
)
const canGoNext = computed(() => !showResults.value && isAnswered.value)
const canGoPrev = computed(() => showResults.value || currentIndex.value > 0)

const nextLabel = computed(() =>
    isLastQuestion.value ? '結果を見る →' : '次の問題 →',
)

type OptionState = 'neutral' | 'pending' | 'correct' | 'wrongSelected' | 'wrong'

function optionState(i: number): OptionState {
    if (!isAnswered.value) {
        return pendingSelection.value === i ? 'pending' : 'neutral'
    }
    const opt = currentQuestion.value.options[i]
    if (opt.isCorrect) return 'correct'
    if (selections.value[currentIndex.value] === i) return 'wrongSelected'
    return 'wrong'
}

function questionResult(i: number): boolean {
    const sel = selections.value[i]
    return questions.value[i].options[sel].isCorrect
}

function selectOption(i: number) {
    if (isAnswered.value) return
    pendingSelection.value = i
}

function submit() {
    if (!canSubmit.value) return
    selections.value[currentIndex.value] = pendingSelection.value as number
    pendingSelection.value = null
}

function nextQuestion() {
    if (!canGoNext.value) return
    if (isLastQuestion.value) {
        showResults.value = true
    } else {
        currentIndex.value++
    }
    pendingSelection.value = null
}

function prevQuestion() {
    if (!canGoPrev.value) return
    if (showResults.value) {
        showResults.value = false
    } else {
        currentIndex.value--
    }
    pendingSelection.value = null
}

function retry() {
    questions.value = buildShuffled()
    selections.value = {}
    pendingSelection.value = null
    currentIndex.value = 0
    showResults.value = false
}
</script>

<template>
    <div class="TestQuestions">
        <template v-if="!showResults">
            <header class="TestQuestions__header">
                <div class="TestQuestions__meta">
                    <span class="TestQuestions__counter">
                        <span class="TestQuestions__counterCurrent">{{
                            currentIndex + 1
                        }}</span>
                        <span class="TestQuestions__counterSeparator">/</span>
                        <span class="TestQuestions__counterTotal">{{
                            total
                        }}</span>
                        <span class="TestQuestions__counterLabel">問目</span>
                    </span>
                    <div class="TestQuestions__score">
                        <span
                            class="TestQuestions__scoreItem TestQuestions__scoreItem--correct"
                        >
                            <span class="TestQuestions__scoreDot"></span>
                            正解 {{ correctCount }}
                        </span>
                        <span
                            class="TestQuestions__scoreItem TestQuestions__scoreItem--wrong"
                        >
                            <span class="TestQuestions__scoreDot"></span>
                            不正解 {{ incorrectCount }}
                        </span>
                    </div>
                </div>
                <div class="TestQuestions__progress">
                    <div
                        class="TestQuestions__progressBar"
                        :style="{ width: progressPercent + '%' }"
                    ></div>
                </div>
            </header>

            <section class="TestQuestions__body">
                <el-scrollbar>
                    <div class="TestQuestions__bodyInner">
                        <p class="TestQuestions__questionNumber">
                            Question {{ currentIndex + 1 }}
                        </p>
                        <h2 class="TestQuestions__question">
                            {{ currentQuestion.question }}
                        </h2>

                        <div
                            v-if="isAnswered"
                            class="TestQuestions__result"
                            :class="
                                isCurrentCorrect
                                    ? 'TestQuestions__result--correct'
                                    : 'TestQuestions__result--wrong'
                            "
                        >
                            <span class="TestQuestions__resultIcon">{{
                                isCurrentCorrect ? '○' : '×'
                            }}</span>
                            <span class="TestQuestions__resultText">{{
                                isCurrentCorrect ? '正解' : '不正解'
                            }}</span>
                        </div>

                        <ul class="TestQuestions__options">
                            <li
                                v-for="(opt, i) in currentQuestion.options"
                                :key="i"
                                class="TestQuestions__option"
                                :class="`TestQuestions__option--${optionState(i)}`"
                                @click="selectOption(i)"
                            >
                                <div class="TestQuestions__optionMain">
                                    <span class="TestQuestions__optionMark">{{
                                        optionLabels[i]
                                    }}</span>
                                    <span class="TestQuestions__optionText">{{
                                        opt.text
                                    }}</span>
                                    <span
                                        v-if="isAnswered"
                                        class="TestQuestions__optionBadge"
                                    >
                                        {{ opt.isCorrect ? '正解' : '不正解' }}
                                    </span>
                                </div>
                                <p
                                    v-if="isAnswered"
                                    class="TestQuestions__optionExplanation"
                                >
                                    {{ opt.explanation }}
                                </p>
                            </li>
                        </ul>

                        <div
                            v-if="isAnswered && currentQuestion.explanation"
                            class="TestQuestions__summary"
                        >
                            <p class="TestQuestions__summaryLabel">
                                解説・豆知識
                            </p>
                            <p class="TestQuestions__summaryText">
                                {{ currentQuestion.explanation }}
                            </p>
                        </div>

                        <button
                            v-if="!isAnswered"
                            type="button"
                            class="TestQuestions__submit"
                            :disabled="!canSubmit"
                            @click="submit"
                        >
                            回答する
                        </button>
                    </div>
                </el-scrollbar>
            </section>
        </template>

        <section
            v-else
            class="TestQuestions__results"
            :class="{ 'TestQuestions__results--perfect': isPerfect }"
        >
            <el-scrollbar>
                <div class="TestQuestions__resultsInner">
                    <div v-if="isPerfect" class="TestQuestions__celebration">
                        <p class="TestQuestions__celebrationEmoji">🎉🎊✨</p>
                        <h2 class="TestQuestions__celebrationTitle">
                            Congratulations!
                        </h2>
                        <p class="TestQuestions__celebrationSubtitle">
                            全問正解です!素晴らしい 🏆
                        </p>
                    </div>
                    <div v-else class="TestQuestions__resultsHeader">
                        <h2 class="TestQuestions__resultsTitle">
                            お疲れさまでした
                        </h2>
                        <p class="TestQuestions__resultsSubtitle">
                            結果を確認しましょう
                        </p>
                    </div>

                    <div class="TestQuestions__scoreCard">
                        <span class="TestQuestions__scoreCardLabel"
                            >あなたの正解数</span
                        >
                        <p class="TestQuestions__scoreCardValue">
                            <span class="TestQuestions__scoreCardNumerator">{{
                                correctCount
                            }}</span>
                            <span class="TestQuestions__scoreCardSlash">/</span>
                            <span class="TestQuestions__scoreCardDenominator">{{
                                total
                            }}</span>
                        </p>
                    </div>

                    <ul class="TestQuestions__resultsList">
                        <li
                            v-for="(q, i) in questions"
                            :key="i"
                            class="TestQuestions__resultsItem"
                            :class="
                                questionResult(i)
                                    ? 'TestQuestions__resultsItem--correct'
                                    : 'TestQuestions__resultsItem--wrong'
                            "
                        >
                            <span class="TestQuestions__resultsItemMark">
                                {{ questionResult(i) ? '○' : '×' }}
                            </span>
                            <div class="TestQuestions__resultsItemBody">
                                <p class="TestQuestions__resultsItemNum">
                                    Question {{ i + 1 }}
                                </p>
                                <p class="TestQuestions__resultsItemQuestion">
                                    {{ q.question }}
                                </p>
                            </div>
                        </li>
                    </ul>

                    <button
                        type="button"
                        class="TestQuestions__retry"
                        @click="retry"
                    >
                        もう一度挑戦する
                    </button>
                </div>
            </el-scrollbar>
        </section>

        <footer class="TestQuestions__footer">
            <button
                type="button"
                class="TestQuestions__btn TestQuestions__btn--ghost"
                :disabled="!canGoPrev"
                @click="prevQuestion"
            >
                ← 前の問題
            </button>
            <button
                v-if="!showResults"
                type="button"
                class="TestQuestions__btn TestQuestions__btn--primary"
                :disabled="!canGoNext"
                @click="nextQuestion"
            >
                {{ nextLabel }}
            </button>
        </footer>
    </div>
</template>

<style scoped lang="scss">
@keyframes tq-bounce {
    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.TestQuestions {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    padding: 12px;
    margin: 0 auto;
    overflow: hidden;

    &__header {
        flex-shrink: 1;
        padding: 20px 24px;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 12px;
    }

    &__meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
    }

    &__counter {
        font-size: 14px;
        color: #888;
    }

    &__counterCurrent {
        font-size: 20px;
        font-weight: bold;
        color: #494949;
    }

    &__counterSeparator {
        margin: 0 4px;
    }

    &__counterLabel {
        margin-left: 4px;
    }

    &__score {
        display: flex;
        gap: 16px;
    }

    &__scoreDot {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
    }

    &__scoreItem {
        display: inline-flex;
        gap: 6px;
        align-items: center;
        font-size: 13px;
        font-weight: bold;

        &--correct {
            color: #2e8b57;

            .TestQuestions__scoreDot {
                background-color: #2e8b57;
            }
        }

        &--wrong {
            color: #d64545;

            .TestQuestions__scoreDot {
                background-color: #d64545;
            }
        }
    }

    &__progress {
        width: 100%;
        height: 6px;
        overflow: hidden;
        background-color: #f0f0f0;
        border-radius: 999px;
    }

    &__progressBar {
        height: 100%;
        background: linear-gradient(90deg, #4a6cf7, #6b8cff);
        border-radius: 999px;
        transition: width 0.3s ease;
    }

    &__body {
        height: 100%;
        overflow: hidden;
    }

    &__bodyInner {
        height: 100%;
        padding: 32px;
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 12px;
    }

    &__questionNumber {
        margin: 0 0 8px;
        font-size: 13px;
        font-weight: bold;
        color: #4a6cf7;
        letter-spacing: 0.05em;
    }

    &__question {
        margin: 0 0 20px;
        font-size: 20px;
        font-weight: bold;
        line-height: 1.6;
        color: #2a2a2a;
    }

    &__result {
        display: flex;
        gap: 10px;
        align-items: center;
        padding: 12px 20px;
        margin-bottom: 20px;
        font-weight: bold;
        border-radius: 10px;

        &--correct {
            color: #2e8b57;
            background-color: #e8f6ee;
            border: 1px solid #b7e1c6;
        }

        &--wrong {
            color: #d64545;
            background-color: #fdecec;
            border: 1px solid #f5c2c2;
        }
    }

    &__resultIcon {
        font-size: 22px;
    }

    &__resultText {
        font-size: 18px;
    }

    &__options {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 0;
        margin: 0 0 20px;
        list-style: none;
    }

    &__option {
        padding: 16px 20px;
        background-color: #fff;
        border: 2px solid #e5e5e5;
        border-radius: 10px;
        transition: all 0.15s ease;

        &--neutral {
            cursor: pointer;

            &:hover {
                background-color: #f9faff;
                border-color: #b8c5ff;
            }
        }

        &--pending {
            cursor: pointer;
            background-color: #eef2ff;
            border-color: #4a6cf7;
        }

        &--correct {
            background-color: #e8f6ee;
            border-color: #2e8b57;
        }

        &--wrongSelected {
            background-color: #fdecec;
            border-color: #d64545;
        }

        &--wrong {
            background-color: #fafafa;
            border-color: #e5e5e5;
            opacity: 0.75;
        }
    }

    &__optionMain {
        display: flex;
        gap: 16px;
        align-items: center;
        // padding: 16px 20px;
    }

    &__optionMark {
        display: inline-flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        font-size: 14px;
        font-weight: bold;
        color: #666;
        background-color: #f4f4f4;
        border-radius: 50%;

        .TestQuestions__option--pending & {
            color: #fff;
            background-color: #4a6cf7;
        }

        .TestQuestions__option--correct & {
            color: #fff;
            background-color: #2e8b57;
        }

        .TestQuestions__option--wrongSelected & {
            color: #fff;
            background-color: #d64545;
        }
    }

    &__optionText {
        flex: 1;
        font-size: 16px;
        color: #2a2a2a;
    }

    &__optionBadge {
        padding: 3px 10px;
        font-size: 12px;
        font-weight: bold;
        color: #fff;
        border-radius: 999px;

        .TestQuestions__option--correct & {
            background-color: #2e8b57;
        }

        .TestQuestions__option--wrongSelected &,
        .TestQuestions__option--wrong & {
            background-color: #d64545;
        }
    }

    &__optionExplanation {
        padding: 0 20px 0 48px;
        margin: 0;
        margin-top: 4px;
        font-size: 13px;
        line-height: 1.7;
        color: #555;
    }

    &__summary {
        padding: 16px 20px;
        background-color: #fdfaf0;
        border: 1px solid #ebe2c4;
        border-left: 4px solid #d4a84a;
        border-radius: 6px;
    }

    &__summaryLabel {
        margin: 0 0 6px;
        font-size: 12px;
        font-weight: bold;
        color: #a07820;
        letter-spacing: 0.05em;
    }

    &__summaryText {
        margin: 0;
        font-size: 14px;
        line-height: 1.7;
        color: #4a4a4a;
    }

    &__submit {
        display: block;
        width: 140px;
        padding: 14px;
        margin: 0 auto;
        font-size: 15px;
        font-weight: bold;
        color: #fff;
        text-align: center;
        cursor: pointer;
        background-color: #4a6cf7;
        border: none;
        border-radius: 8px;
        transition: all 0.15s ease;

        &:disabled {
            cursor: not-allowed;
            background-color: #c8d0e0;
        }

        &:hover:not(:disabled) {
            background-color: #3b5ce0;
        }
    }

    &__results {
        // padding: 48px 32px 36px;
        // margin-bottom: 20px;
        text-align: center;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 12px;
        overflow: hidden;

        &--perfect {
            background:
                radial-gradient(circle at 20% 0%, #fff4d1 0%, transparent 40%),
                radial-gradient(circle at 80% 0%, #ffe1dc 0%, transparent 40%),
                #fff;
            border-color: #f0c94a;
        }
    }

    &__resultsInner {
        padding: 24px;
    }

    &__celebration {
        margin-bottom: 28px;
    }

    &__celebrationEmoji {
        margin: 0 0 12px;
        font-size: 56px;
        line-height: 1;
        animation: tq-bounce 1.4s ease-in-out infinite;
    }

    &__celebrationTitle {
        margin: 0 0 6px;
        font-size: 32px;
        font-weight: bold;
        color: #e8a320;
        letter-spacing: 0.02em;
        background: linear-gradient(90deg, #e8a320, #f05a28);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    &__celebrationSubtitle {
        margin: 0;
        font-size: 15px;
        font-weight: bold;
        color: #8a6410;
    }

    &__resultsHeader {
        margin-bottom: 24px;
    }

    &__resultsTitle {
        margin: 0 0 6px;
        font-size: 24px;
        font-weight: bold;
        color: #2a2a2a;
    }

    &__resultsSubtitle {
        margin: 0;
        font-size: 14px;
        color: #666;
    }

    &__scoreCard {
        display: inline-block;
        padding: 18px 44px;
        margin-bottom: 32px;
        background-color: #f9faff;
        border: 2px solid #4a6cf7;
        border-radius: 16px;

        .TestQuestions__results--perfect & {
            background-color: #fffaea;
            border-color: #e8a320;
            box-shadow: 0 6px 20px rgb(232 163 32 / 25%);
        }
    }

    &__scoreCardLabel {
        display: block;
        margin-bottom: 6px;
        font-size: 12px;
        font-weight: bold;
        color: #666;
        letter-spacing: 0.05em;
    }

    &__scoreCardValue {
        display: flex;
        gap: 4px;
        align-items: baseline;
        justify-content: center;
        margin: 0;
        font-weight: bold;
        line-height: 1;
        color: #4a6cf7;

        .TestQuestions__results--perfect & {
            color: #e8a320;
        }
    }

    &__scoreCardNumerator {
        font-size: 56px;
    }

    &__scoreCardSlash {
        font-size: 32px;
        color: #aaa;
    }

    &__scoreCardDenominator {
        font-size: 32px;
        color: #888;
    }

    &__resultsList {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0;
        margin: 0 0 28px;
        text-align: left;
        list-style: none;
    }

    &__resultsItem {
        display: flex;
        gap: 14px;
        align-items: flex-start;
        padding: 14px 18px;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        border-left-width: 4px;
        border-radius: 8px;

        &--correct {
            border-left-color: #2e8b57;
        }

        &--wrong {
            border-left-color: #d64545;
        }
    }

    &__resultsItemMark {
        display: inline-flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        border-radius: 50%;

        .TestQuestions__resultsItem--correct & {
            background-color: #2e8b57;
        }

        .TestQuestions__resultsItem--wrong & {
            background-color: #d64545;
        }
    }

    &__resultsItemBody {
        flex: 1;
    }

    &__resultsItemNum {
        margin: 0 0 4px;
        font-size: 12px;
        font-weight: bold;
        color: #4a6cf7;
        letter-spacing: 0.05em;
    }

    &__resultsItemQuestion {
        margin: 0;
        font-size: 14px;
        line-height: 1.5;
        color: #2a2a2a;
    }

    &__retry {
        padding: 14px 36px;
        font-size: 15px;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
        background-color: #4a6cf7;
        border: none;
        border-radius: 8px;
        transition: all 0.15s ease;

        &:hover {
            background-color: #3b5ce0;
        }

        .TestQuestions__results--perfect & {
            background: linear-gradient(90deg, #e8a320, #f05a28);
            box-shadow: 0 6px 16px rgb(232 163 32 / 40%);

            &:hover {
                background: linear-gradient(90deg, #d48f15, #de4d1e);
            }
        }
    }

    &__footer {
        display: flex;
        flex-shrink: 1;
        gap: 12px;
        justify-content: space-between;
        margin-top: auto;
    }

    &__btn {
        padding: 12px 24px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        border: none;
        border-radius: 8px;
        transition: all 0.15s ease;

        &:disabled {
            cursor: not-allowed;
            opacity: 0.4;
        }

        &--ghost {
            color: #666;
            background-color: #fff;
            border: 1px solid #e5e5e5;

            &:hover:not(:disabled) {
                background-color: #f4f4f4;
            }
        }

        &--primary {
            color: #fff;
            background-color: #4a6cf7;

            &:hover:not(:disabled) {
                background-color: #3b5ce0;
            }
        }
    }

    @media screen and (max-width: 540px) {
        row-gap: 12px;

        &__header {
            padding: 4px 12px;
        }

        &__meta {
            margin-bottom: 4px;
        }

        &__bodyInner {
            padding: 12px;
        }

        &__question {
            margin: 0 0 12px;
            font-size: 15px;
        }

        &__option {
            padding: 12px 16px;
        }

        &__optionMain {
            gap: 14px;
        }

        &__optionText {
            font-size: 14px;
        }

        &__submit {
            padding: 12px;
            font-size: 14px;
        }

        &__result {
            gap: 8px;
            padding: 4px 12px;
            margin-bottom: 12px;
        }

        &__resultIcon {
            font-size: 18px;
        }

        &__resultText {
            font-size: 16px;
        }

        &__btn {
            padding: 8px 18px;
            font-size: 14px;
        }

        &__resultsInner {
            padding: 12px;
        }
    }
}
</style>
