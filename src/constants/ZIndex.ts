/**
 * ZIndex.ts
 * ゲーム画面全体の UI 重なり順（z-index）を一括管理します。
 * 値が大きいほど手前に表示されます。
 */
export const Z_INDEX = {
    /** デバッグメニュー (最前面) */
    DEBUG_MENU: 1100000000,    
 
    /** モーダル、ローディング、接続オーバーレイ */
    MODAL_OVERLAY: 1000000,
    
    /** チャット入力欄 (モーダルよりも手前) */
    CHAT_INPUT: 500000,

    /** スキルアクションバー (十字ボタンより手前) */
    SKILL_ACTION_BAR: 30000,
    
    /** 十字ボタンタブ (他のタブより手前) */
    DIRECTIONAL_PAD_TAB: 25000,
    
    /** サイドタブ (チャットログ、プレイヤーステータス等) */
    SIDE_TAB_FRAME: 20000,
    
    /** ヘッダー */
    GAME_HEADER: 10000,
    
    /** フッター */
    GAME_FOOTER: 10000,
    
    /** ゲーム描画エリア (最背面) */
    GAME_CANVAS: 1
} as const
