/**
 * UIStrings.ts
 * ツールチップやガイダンスメッセージなどのUI文字列を一括管理します。
 */

export const UI_STRINGS = {
    HEADER: {
        MUTE: '音声を消す',
        UNMUTE: '音声を出す',
        FULLSCREEN: '全画面表示',
        EXIT_FULLSCREEN: '全画面解除',
        LOGOUT: 'ログアウト',
    },
    FOOTER: {
        MIC_ON: '音声入力を開始',
        MIC_OFF: '音声入力を停止',
        SEND: 'メッセージを送信',
        COOLDOWN: '再送待機中...',
    },
    CHAT: {
        EXPAND: 'チャットを拡大',
        SHRINK: 'チャットを縮小',
        OPEN: 'チャットを開く',
        CLOSE: 'チャットを閉じる',
    },
    PLAYER: {
        COPY_COORDS: '座標をチャットに入力',
    },
    SKILL: {
        INFO_POWER: '威力',
        INFO_MP: '消費MP',
        INFO_COOLDOWN: 'クールダウン',
        INFO_ACCURACY: '命中',
        INFO_RANGE: '射程',
    }
} as const;
