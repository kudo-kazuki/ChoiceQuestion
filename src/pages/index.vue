<script setup lang="ts">
import { questionSetCounts } from '@/assets/test_questions/manifest'
import { useWindowSizeAndDevice } from '@/composables/useWindowSizeAndDevice'
const { width, height, deviceType } = useWindowSizeAndDevice()

const questionSets = [
    {
        title: 'SSA',
        subtitle: 'AWS Solutions Architect Associate',
        description: 'AWS SAA対策の総合問題集',
        to: '/ssa',
        level: 'AWS',
        tone: 'blue',
    },
    {
        title: 'DNS1',
        subtitle: 'DNSの基本用語と初歩的な運用',
        description: '用語確認から簡単な実運用例まで',
        to: '/dns/dns1',
        level: 'Basic',
        tone: 'green',
    },
    {
        title: 'DNS2',
        subtitle: 'DNSの応用・Route 53・トラブルシュート',
        description: '実運用寄りの高難易度問題',
        to: '/dns/dns2',
        level: 'Advanced',
        tone: 'red',
    },
    {
        title: 'CloudFront1',
        subtitle: 'CloudFrontの基本用語と初歩',
        description: 'CDN、オリジン、キャッシュの基礎',
        to: '/cloudfront/cloudfront1',
        level: 'Basic',
        tone: 'cyan',
    },
    {
        title: 'CloudFront2',
        subtitle: 'CloudFrontの設計・運用・高難易度',
        description: 'キャッシュ制御、証明書、トラブルシュート',
        to: '/cloudfront/cloudfront2',
        level: 'Advanced',
        tone: 'indigo',
    },
    {
        title: 'S3_1',
        subtitle: 'S3の基本用語と初歩的な運用',
        description: 'バケット、オブジェクト、基本的な保存先設計',
        to: '/s3/s3_1',
        level: 'Basic',
        tone: 'teal',
    },
    {
        title: 'S3_2',
        subtitle: 'S3の高度な機能と設計判断',
        description: '保持、保護、監査、他サービス連携の応用',
        to: '/s3/s3_2',
        level: 'Advanced',
        tone: 'slate',
    },
    {
        title: 'DynamoDB1',
        subtitle: 'DynamoDBの基本用語と初歩',
        description: 'テーブル、キー、アイテム、キャパシティの基礎',
        to: '/dynamodb/dynamodb1',
        level: 'Basic',
        tone: 'orange',
    },
    {
        title: 'DynamoDB2',
        subtitle: 'DynamoDBの設計・運用・高難易度',
        description: 'GSI、整合性、TTL、Streams、Global Tables',
        to: '/dynamodb/dynamodb2',
        level: 'Advanced',
        tone: 'purple',
    },
] as const
</script>

<template>
    <section
        class="Page"
        :style="{ height: `${height}px` }"
        :data-device="deviceType"
        :data-windowWidth="width"
    >
        <el-scrollbar>
            <div class="Page__inner">
                <header class="Page__header">
                    <p class="Page__label">Question Sets</p>
                    <h1 class="Page__title">問題集</h1>
                </header>

                <ul class="Page__list">
                    <li
                        v-for="questionSet in questionSets"
                        :key="questionSet.to"
                        class="Page__item"
                    >
                        <router-link
                            :to="questionSet.to"
                            class="Page__card"
                            :class="`Page__card--${questionSet.tone}`"
                        >
                            <span class="Page__badge">
                                {{ questionSet.level }}
                            </span>
                            <span class="Page__cardBody">
                                <span class="Page__cardTitle">
                                    {{ questionSet.title }}
                                </span>
                                <span class="Page__cardSubtitle">
                                    {{ questionSet.subtitle }}
                                </span>
                                <span class="Page__cardDescription">
                                    {{ questionSet.description }}
                                </span>
                                <span class="Page__cardMeta">
                                    {{ questionSetCounts[questionSet.to] }} 問
                                </span>
                            </span>
                            <span class="Page__arrow">→</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </el-scrollbar>
    </section>
</template>

<style lang="scss" scoped>
.Page {
    width: 100%;
    overflow: hidden;
    height: 100%;
    background: linear-gradient(180deg, #f7f9fc 0%, #fff 44%), #fff;

    &__inner {
        width: min(100%, 1120px);
        padding: 32px 24px;
        margin: 0 auto;
    }

    &__header {
        margin-bottom: 20px;
    }

    &__label {
        margin: 0 0 4px;
        font-size: 12px;
        font-weight: 900;
        color: #5c6b82;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    &__title {
        margin: 0;
        font-size: 28px;
        font-weight: 900;
        color: #1c2430;
    }

    &__list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 16px;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    &__item {
        display: flex;
        min-width: 0;
    }

    &__card {
        position: relative;
        display: grid;
        grid-template-columns: 1fr auto;
        width: 100%;
        height: 100%;
        min-height: 132px;
        padding: 18px;
        overflow: hidden;
        color: #1c2430;
        text-decoration: none;
        background-color: rgba(255, 255, 255, 0.94);
        border: 1px solid #e3e8f0;
        border-radius: 8px;
        box-shadow: 0 10px 28px rgba(28, 36, 48, 0.08);
        transition:
            transform 0.15s ease,
            border-color 0.15s ease,
            box-shadow 0.15s ease;

        &::before {
            position: absolute;
            inset: 0 auto 0 0;
            width: 4px;
            content: '';
            background-color: #4a6cf7;
        }

        &:hover {
            color: #1c2430;
            text-decoration: none;
            border-color: #c9d4e5;
            box-shadow: 0 14px 34px rgba(28, 36, 48, 0.12);
            transform: translateY(-2px);
        }

        &--green {
            &::before {
                background-color: #19a36b;
            }

            .Page__badge {
                color: #08744a;
                background-color: #e7f7ef;
            }
        }

        &--red {
            &::before {
                background-color: #d94a4a;
            }

            .Page__badge {
                color: #a82e2e;
                background-color: #fff0f0;
            }
        }

        &--orange {
            &::before {
                background-color: #e38b29;
            }

            .Page__badge {
                color: #9a570f;
                background-color: #fff4e3;
            }
        }

        &--purple {
            &::before {
                background-color: #7b5be6;
            }

            .Page__badge {
                color: #5538b7;
                background-color: #f2eeff;
            }
        }

        &--cyan {
            &::before {
                background-color: #0891b2;
            }

            .Page__badge {
                color: #0e7490;
                background-color: #ecfeff;
            }
        }

        &--indigo {
            &::before {
                background-color: #4f46e5;
            }

            .Page__badge {
                color: #3730a3;
                background-color: #eef2ff;
            }
        }

        &--teal {
            &::before {
                background-color: #0f766e;
            }

            .Page__badge {
                color: #0f766e;
                background-color: #f0fdfa;
            }
        }

        &--slate {
            &::before {
                background-color: #475569;
            }

            .Page__badge {
                color: #334155;
                background-color: #f1f5f9;
            }
        }

        &--blue {
            .Page__badge {
                color: #2f4fd3;
                background-color: #eef2ff;
            }
        }
    }

    &__badge {
        position: absolute;
        top: 14px;
        right: 14px;
        display: inline-flex;
        align-items: center;
        min-height: 24px;
        padding: 3px 8px;
        font-size: 11px;
        font-weight: 900;
        line-height: 1;
        border-radius: 999px;
    }

    &__cardBody {
        display: flex;
        flex-direction: column;
        min-width: 0;
        padding-right: 56px;
    }

    &__cardTitle {
        margin-bottom: 8px;
        font-size: 24px;
        font-weight: 900;
        line-height: 1.2;
    }

    &__cardSubtitle {
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 700;
        line-height: 1.45;
        color: #3d4654;
    }

    &__cardDescription {
        font-size: 13px;
        line-height: 1.5;
        color: #6d7786;
    }

    &__cardMeta {
        display: inline-flex;
        align-items: center;
        width: fit-content;
        min-height: 22px;
        padding: 3px 8px;
        margin-top: 12px;
        font-size: 12px;
        font-weight: 900;
        line-height: 1;
        color: #3d4654;
        background-color: #f3f6fa;
        border: 1px solid #e2e8f0;
        border-radius: 999px;
    }

    &__arrow {
        align-self: end;
        display: grid;
        width: 34px;
        height: 34px;
        font-size: 18px;
        font-weight: 900;
        color: #fff;
        background-color: #1c2430;
        border-radius: 50%;
        place-items: center;
    }

    @media screen and (max-width: 740px) {
        &__inner {
            padding: 20px 14px;
        }

        &__header {
            margin-bottom: 14px;
        }

        &__title {
            font-size: 24px;
        }

        &__list {
            grid-template-columns: 1fr;
            gap: 12px;
        }

        &__card {
            min-height: 116px;
            padding: 16px;
        }

        &__cardTitle {
            font-size: 22px;
        }

        &__cardSubtitle {
            font-size: 13px;
        }

        &__cardDescription {
            font-size: 12px;
        }
    }
}
</style>
