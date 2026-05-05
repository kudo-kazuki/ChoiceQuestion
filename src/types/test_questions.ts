export declare interface QuestionOption {
  /** 選択肢として表示される文言 */
  text: string;
  /** この選択肢が正解かどうか */
  isCorrect: boolean;
  /** 回答後に選択肢ごとに表示される解説文。正解ならなぜ正解か、不正解ならなぜ不正解かを記載する */
  explanation: string;
}

export declare interface Question {
  /** 問題文 */
  question: string;
  /** 選択肢の配列。isCorrect: true を持つ選択肢が正解 */
  options: QuestionOption[];
  /** 回答後に問題下部に表示される、問題全体の総括的な解説や豆知識 (任意) */
  explanation?: string;
}
