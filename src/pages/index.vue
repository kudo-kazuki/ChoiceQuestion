<script setup lang="ts">
import { useWindowSizeAndDevice } from '@/composables/useWindowSizeAndDevice'
const { width, height, deviceType } = useWindowSizeAndDevice()
</script>

<template>
    <section
        class="Page"
        :style="{ height: `${height}px` }"
        :data-device="deviceType"
        :data-windowWidth="width"
    >
        <el-scrollbar>
            <ul>
                <li>
                    <router-link to="/ssa">ssa</router-link>
                </li>
            </ul>
        </el-scrollbar>
    </section>
</template>

<style lang="scss" scoped>
.Page {
    width: 100%;
    overflow: hidden;
    height: 100%;
    padding: 24px;

    pre {
        white-space: pre-wrap;
    }

    @media screen and (max-width: 740px) {
    }
}
</style>
