<script setup lang="ts">
import { ref } from 'vue'

type DebugCompletionMode = 'correct' | 'incorrect' | 'random'

interface Props {
    disabled?: boolean
}

defineProps<Props>()

const emit = defineEmits<{
    complete: [mode: DebugCompletionMode]
    reset: []
}>()

const isOpen = ref(false)

const runCommand = (mode: DebugCompletionMode) => {
    emit('complete', mode)
    isOpen.value = false
}

const resetQuiz = () => {
    emit('reset')
    isOpen.value = false
}
</script>

<template>
    <button
        type="button"
        class="DebugMenu__toggle"
        @click="isOpen = true"
    >
        デバッグ
    </button>
    <Teleport to="body">
        <div
            v-if="isOpen"
            class="DebugMenu__overlay"
            @click.self="isOpen = false"
        >
            <aside class="DebugMenu__panel" aria-label="デバッグメニュー">
                <header class="DebugMenu__header">
                    <span>デバッグメニュー</span>
                    <button
                        type="button"
                        class="DebugMenu__close"
                        aria-label="デバッグメニューを閉じる"
                        @click="isOpen = false"
                    >
                        &times;
                    </button>
                </header>
                <button
                    type="button"
                    class="DebugMenu__command"
                    :disabled="disabled"
                    @click="runCommand('correct')"
                >
                    全問正解して結果画面へ
                </button>
                <button
                    type="button"
                    class="DebugMenu__command DebugMenu__command--wrong"
                    :disabled="disabled"
                    @click="runCommand('incorrect')"
                >
                    全問不正解して結果画面へ
                </button>
                <button
                    type="button"
                    class="DebugMenu__command DebugMenu__command--random"
                    :disabled="disabled"
                    @click="runCommand('random')"
                >
                    ランダムに正解不正解して結果画面へ
                </button>
                <div class="DebugMenu__divider"></div>
                <button
                    type="button"
                    class="DebugMenu__command DebugMenu__command--reset"
                    :disabled="disabled"
                    @click="resetQuiz"
                >
                    リセット
                </button>
            </aside>
        </div>
    </Teleport>
</template>

<style lang="scss" scoped>
.DebugMenu {
    &__toggle {
        position: absolute;
        top: 50%;
        left: 12px;
        padding: 4px 8px;
        font-size: 11px;
        font-weight: bold;
        color: #596579;
        cursor: pointer;
        background-color: #fff;
        border: 1px solid #d6dce7;
        border-radius: 6px;
        transform: translateY(-50%);
        transition:
            color 0.15s ease,
            border-color 0.15s ease,
            background-color 0.15s ease;

        &:hover {
            color: #283b60;
            background-color: #edf3ff;
            border-color: #9bb2e8;
        }
    }

    &__overlay {
        position: fixed;
        z-index: 10000;
        inset: 0;
        background-color: rgba(28, 36, 48, 0.28);
    }

    &__panel {
        position: absolute;
        inset: 0 auto 0 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: min(320px, calc(100% - 24px));
        padding: 16px;
        background-color: #fff;
        box-shadow: 10px 0 28px rgba(28, 36, 48, 0.2);
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 10px;
        margin-bottom: 4px;
        font-size: 14px;
        font-weight: bold;
        color: #263244;
        border-bottom: 1px solid #e5eaf2;
    }

    &__close {
        display: grid;
        width: 28px;
        height: 28px;
        font-size: 20px;
        line-height: 1;
        color: #617084;
        cursor: pointer;
        background-color: transparent;
        border: none;
        border-radius: 6px;
        place-items: center;

        &:hover {
            color: #293548;
            background-color: #f1f4f8;
        }
    }

    &__command {
        width: 100%;
        padding: 12px;
        font-size: 13px;
        font-weight: bold;
        color: #15643e;
        text-align: left;
        cursor: pointer;
        background-color: #eaf7ef;
        border: 1px solid #b9dfc8;
        border-radius: 6px;
        transition:
            color 0.15s ease,
            border-color 0.15s ease,
            background-color 0.15s ease;

        &:hover {
            background-color: #dff2e6;
            border-color: #84c9a1;
        }

        &--wrong {
            color: #a33232;
            background-color: #fff0f0;
            border-color: #efc1c1;

            &:hover {
                background-color: #ffe5e5;
                border-color: #e59a9a;
            }
        }

        &--random {
            color: #3d526f;
            background-color: #eef3fb;
            border-color: #ccd8ed;

            &:hover {
                background-color: #e3ebf8;
                border-color: #a6bbdf;
            }
        }

        &--reset {
            color: #a33232;
            background-color: #fff;
            border-color: #efc1c1;

            &:hover {
                background-color: #fff0f0;
                border-color: #e59a9a;
            }
        }

        &:disabled,
        &:disabled:hover {
            color: #8d97a5;
            cursor: not-allowed;
            background-color: #f3f5f8;
            border-color: #e3e7ed;
        }
    }

    &__divider {
        height: 1px;
        margin: 4px 0;
        background-color: #e5eaf2;
    }

    @media screen and (max-width: 540px) {
        &__toggle {
            left: 6px;
            padding: 3px 6px;
            font-size: 10px;
        }
    }
}
</style>
