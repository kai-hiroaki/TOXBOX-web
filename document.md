# TOXBOX Web Site – 構築指示書（簡潔版 / Cursor 用）

最終更新: 2026-01-15  
目的: **LP / Docs / Releases を 1 つのサイトに統合し、GitHub Pages で公開する**

---

## 目的（何を作るか）

- **LP**（`/`）: 機能紹介 + Booth への購入導線（CTA）
- **Docs**（`/docs/*`）: Markdown 中心で運用するドキュメント
- **Releases**（`/releases`）: GitHub Releases を一次情報として Changelog を表示（サイト側で手入力しない）

---

## 前提（必要なもの）

- Node.js LTS（18 以上推奨）
- Git / GitHub
- 公開先: GitHub Pages（GitHub Actions でデプロイ）

---

## 置換する値（最初に決める）

- `<GITHUB_USER>`: GitHub ユーザー名
- `<OWNER>`: 通常 `<GITHUB_USER>` と同じ
- `<REPO>`: リポジトリ名（例: `toxbox-site`）
- `<BOOTH_URL>`: [Booth の商品ページ URL](https://simijimishijimi.booth.pm/items/7592348)

---

## 実装方針（迷わないための決め）

- **フレームワーク**: Astro + Starlight
- **更新の主役**: Docs は Markdown、LP は最小限の Astro、リリースは GitHub Releases
- **Changelog の正**: GitHub Releases（Web 側で二重管理しない）
- **デプロイ**: main への push で GitHub Pages に自動反映

---

## 作る/編集するもの（ファイル単位）

- **設定**
  - `astro.config.mjs`: GitHub Pages 用に `site` と `base` を設定
- **LP**
  - `src/pages/index.astro`: 価値訴求 / 機能 / 動作環境 / `<BOOTH_URL>` への CTA / Docs・Releases への導線
- **Docs（骨組みだけ作成）**
  - `src/content/docs/getting-started.md`
  - `src/content/docs/concept.md`
  - `src/content/docs/tutorials.md`
  - `src/content/docs/reference.md`
  - `src/content/docs/troubleshooting.md`
- **Releases**
  - `src/pages/releases.astro`: GitHub API から Releases を取得して一覧表示（本文は Markdown を HTML として表示）
- **デプロイ**
  - `.github/workflows/deploy.yml`: Astro をビルドして Pages にデプロイ

---

## 手順（チェックリスト）

- [ ] Astro を Starlight テンプレで初期化して起動確認する
- [ ] `astro.config.mjs` に `site` と `base` を設定する（Pages はサブパス配下になるため必須）
- [ ] `src/pages/index.astro` を作成し、LP 要件を満たすようにテキストを入れる（見た目は後回しで OK）
- [ ] Docs の 5 ファイルを作成し、まずは見出しだけ置く（内容は後で埋める）
- [ ] `src/pages/releases.astro` を作成し、GitHub Releases を取得して表示できるようにする
- [ ] GitHub Actions の workflow を追加して Pages 公開を確認する

---

## 運用ルール（短縮）

- Docs / LP は Git で管理し、変更は差分で追えるようにする
- Releases は GitHub Releases だけ更新する（Web 側で Changelog を書かない）
- サポートで得た知見は `troubleshooting.md` に反映する

---

## TODO（次ステップ）

- [ ] `<BOOTH_URL>` を確定して LP に反映
- [ ] LP の「推し機能」を 3〜5 個に絞って確定
- [ ] 動作環境（TouchDesigner / OS / GPU 推奨）を確定
- [ ] Getting Started を実手順で埋める
