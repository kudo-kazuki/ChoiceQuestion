# 問題データ管理方針

## 背景

このプロジェクトでは、AWS SAA向けの選択問題を `Question` 型の静的データとして管理している。

当初は `src/assets/test_questions/ssa.ts` にすべての問題をまとめて定義していた。実装としては単純で扱いやすい一方、問題数が増えるほど次の懸念が出てくる。

- 1ファイルが巨大化し、編集・レビューしづらくなる
- 問題データがフロントエンドのビルド成果物に埋め込まれる
- SAA以外の問題集を追加したとき、不要な問題データまで初回バンドルに混ざる可能性がある
- 将来的に数百問規模になった場合、初回ロードやJSのparse/execute負荷が無視しづらくなる

一方で、現状の `TestQuestions.vue` は「渡された全問題を一度まとめてシャッフルする」設計になっている。この挙動は重要で、カテゴリ別ファイルに分けても、出題順がカテゴリ順に偏らないことが求められる。

## 現在の構成

SAA問題はカテゴリ別ファイルに分割し、`index.ts` で結合して公開する。

```txt
src/assets/test_questions/
  ssa/
    index.ts
    architecture.ts
    database.ts
    networking.ts
    security.ts
    storage.ts
```

`src/assets/test_questions/ssa/index.ts` は各カテゴリの配列を結合し、従来と同じ `testQuestions` をexportする。

```ts
export const testQuestions: Question[] = [
    ...storageQuestions,
    ...networkingQuestions,
    ...architectureQuestions,
    ...databaseQuestions,
    ...securityQuestions,
]
```

この結合順はファイル上の管理順であり、実際の出題順ではない。`TestQuestions.vue` が受け取った全体配列をシャッフルするため、ユーザーにはカテゴリ順に表示されない。

## 読み込み方式

`src/pages/ssa/index.vue` では、SAA問題セットをstatic importせず、ページ表示時にdynamic importする。

```ts
const mod = await import('@/assets/test_questions/ssa')
testQuestions.value = mod.testQuestions
```

これにより、SAAページに来たときだけSAA問題データが読み込まれる。将来、別ジャンルの問題集を追加しても、そのページを開くまで該当ジャンルの問題データを読み込まない構成にしやすい。

読み込み完了後は従来通り `TestQuestions` に全問配列を渡す。

```vue
<TestQuestions
    v-if="testQuestions"
    :questions="testQuestions"
/>
```

そのため、`TestQuestions.vue` のUI・回答状態・結果表示・全体シャッフルの挙動は維持されている。

## 今回追加した問題

既存のAWS SAA向け問題・解説の文体に合わせ、公式ドキュメントで確認した内容を元に問題を追加した。

主な追加テーマは以下。

- Amazon EFS
- Amazon RDS Proxy
- AWS Secrets Manager
- S3 Object Lock
- Aurora Global Database
- AWS Storage Gateway / S3 File Gateway
- S3 Multi-Region Access Points
- Route 53 フェイルオーバールーティング
- DynamoDB グローバルテーブル
- AWS Backup

実試験の流出過去問やダンプは使わず、AWS公式の試験範囲・公式ドキュメントで事実確認して作成する方針とした。

## この構成の利点

- 問題ファイルをカテゴリ単位で編集できる
- `TestQuestions.vue` を大きく変更せずに済む
- 全問シャッフルが維持され、カテゴリ順の偏りが発生しない
- SAA以外の問題集追加時に、ジャンル単位の遅延読み込みへ自然に拡張できる
- 問題データのビルドchunkがページ本体から分離される

## 注意点

カテゴリ別ファイル分割だけでは、SAAページを開いた後に読み込む総データ量は減らない。SAAページでは最終的にSAA全問を読み込む。

ただし、これは現在のUI要件に合っている。現状のUIは次を前提としている。

- 総問題数を最初から表示する
- 全問題からランダムに出題する
- 結果画面で全問の結果一覧を表示する

100問ごとに追加ロードする方式にすると、これらの前提に影響が出る。特に全体シャッフルと結果一覧は設計変更が必要になる。

## 将来の展望

### 別ジャンルの問題集追加

将来的に別ジャンルを追加する場合は、SAAと同じ構成にする。

```txt
src/assets/test_questions/
  ssa/
  clf/
  sap/
  network/
```

各ページで該当問題集だけをdynamic importする。

```ts
const mod = await import('@/assets/test_questions/clf')
```

これにより、別ジャンルの問題データが不要なページの初回JSに混ざりにくくなる。

### 問題数がさらに増えた場合

数百問規模までは現在の構成で十分扱える見込み。

目安として、SAAだけで500問を超える、または問題データchunkのgzipサイズが数百KBを超えて初回表示に影響が見え始めたら、次の段階を検討する。

- 100問単位などのchunk分割
- manifestによる総問題数・chunk一覧の先読み
- 現在位置に応じた次chunkのプリロード
- 結果画面を「出題済み問題のみ」にするか「全問ロード済み前提」にするかの再設計

ただし、この段階では `TestQuestions.vue` の責務も変わる。単純な `questions: Question[]` 受け取りではなく、非同期の問題供給や読み込み状態を扱う設計が必要になる。

## 検証

構成変更後、`npm run build` でビルド確認済み。

既知の警告として、Sass `@import` の非推奨警告と大きめchunk警告が出る。これは既存構成由来であり、今回の問題データ分割・追加によるビルドエラーではない。
