/**
 * TabLayout.ts
 * 画面上の各サイドタブ（チャット、地図、プレイヤーリスト、十字キー）の配置情報を一括管理します。
 * 各コンポーネントはこの設定を参照して SideTabFrame を構築します。
 */

export interface TabPosition {
    side: 'left' | 'right'
    top?: string
    bottom?: string
    controlsTop?: string
    controlsBottom?: string
}

export const TAB_LAYOUT: Record<string, TabPosition> = {
    // チャットログ（左下基準、地図の上に固定）
    CHAT: {
        side: 'left',
        top: '80px',
        bottom: '152px',
        controlsBottom: '0px'
    },
    // ミニマップ（左下基準、チャットの上に配置）
    MAP: {
        side: 'left',
        top: 'auto',
        bottom: '86px',
        controlsBottom: '8px'
    },
    // プレイヤーリスト（右上基準、縦長）
    PLAYERS: {
        side: 'right',
        top: '32px',
        bottom: '110px', // 十字キー表示時は動的に変更される
        controlsTop: '16px',
        controlsBottom: 'auto'
    },
    // 十字キー（右下基準、スキルボタンの上に固定）
    DPAD: {
        side: 'right',
        top: 'auto',
        bottom: '172px',
        controlsBottom: '0px'
    }
} as const
