# TOXBOX Web Site – 現状確認メモ & 更新手順（簡潔版 / Cursor 用）

最終更新: 2026-01-16  
目的: **LP / Docs / Releases を 1 つのサイトに統合し、GitHub Pages で公開する**

---

## 現状（いま何ができているか）

- **LP**（`/`）: `toxbox-site/src/pages/index.astro`（Booth CTA / Docs / Releases への導線あり）
- **Docs**（`/docs/*`）: `toxbox-site/src/content/docs/docs/` 配下の Markdown / MDX（Starlight）
- **Releases**（`/releases`）: `toxbox-site/src/pages/releases.astro`（現状はスタブ表示。将来的に GitHub Releases 連動予定）
- **デプロイ**: `.github/workflows/deploy.yml`（main push で GitHub Pages へ）

---

## 前提（必要なもの）

- Node.js LTS（18 以上推奨）
- Git / GitHub
- 公開先: GitHub Pages（GitHub Actions でデプロイ）

---

## 置換する値（最初に決める）

- `<GITHUB_USER>`: GitHub ユーザー名
- `<OWNER>`: 通常 `<GITHUB_USER>` と同じ
- `<REPO>`: リポジトリ名（例: `TOXBOX-web`）
- `<BOOTH_URL>`: [Booth の商品ページ URL](https://simijimishijimi.booth.pm/items/7592348)

---

## 実装方針（迷わないための決め）

- **フレームワーク**: Astro + Starlight
- **更新の主役**: Docs は Markdown、LP は最小限の Astro、リリースは GitHub Releases
- **Changelog の正**: 将来的に GitHub Releases（現状は `docs/changelog.md` と `/releases` のスタブ）
- **デプロイ**: main への push で GitHub Pages に自動反映

---

## 作る/編集するもの（ファイル単位）

- **設定**
  - `toxbox-site/astro.config.mjs`: GitHub Pages 用に `site` と `base` を設定（本リポでは **環境変数** `ASTRO_SITE` / `ASTRO_BASE` で注入）
  - `.github/workflows/deploy.yml`: build 時に `ASTRO_SITE` / `ASTRO_BASE` を設定して Pages にデプロイ
- **LP**
  - `toxbox-site/src/pages/index.astro`: 価値訴求 / 機能 / 動作環境 / `<BOOTH_URL>` への CTA / Docs・Releases への導線
- **Docs（骨組みだけ作成）**
  - `toxbox-site/src/content/docs/docs/getting-started.md`
  - `toxbox-site/src/content/docs/docs/concept.md`
  - `toxbox-site/src/content/docs/docs/tutorials.md`
  - `toxbox-site/src/content/docs/docs/reference.md`
  - `toxbox-site/src/content/docs/docs/troubleshooting.md`
  - `toxbox-site/src/content/docs/docs/license.md`
  - `toxbox-site/src/content/docs/docs/changelog.md`
- **Releases**
  - `toxbox-site/src/pages/releases.astro`: 現状はスタブ（将来的に GitHub API から Releases を取得して表示）

---

## 手順（チェックリスト）

- [x] Astro を Starlight テンプレで初期化して起動確認する
- [x] GitHub Pages 用に `site` と `base` を設定する（本リポは Actions で `ASTRO_SITE` / `ASTRO_BASE` を注入）
- [x] `toxbox-site/src/pages/index.astro` を作成し、LP 要件を満たすようにテキストを入れる
- [x] Docs の各ページ（Getting Started / Reference / License / Changelog ほか）を作成し、最低限の骨組みを置く
- [x] `toxbox-site/src/pages/releases.astro` を作成し、ひとまずリリース表示の場を用意する（GitHub Releases 連動は次ステップ）
- [x] `.github/workflows/deploy.yml` を追加して Pages 公開を確認する

---

## 運用ルール（短縮）

- Docs / LP は Git で管理し、変更は差分で追えるようにする
- リリースの正は GitHub Releases に寄せる（連動が入るまでは `docs/changelog.md` / `/releases` を暫定運用）
- サポートで得た知見は `troubleshooting.md` に反映する

---

## TODO（次ステップ）

- [ ] `astro.config.mjs` の GitHub リンク（`https://github.com/<OWNER>/<REPO>`）を実値に置換
- [ ] LP の「推し機能」を 3〜5 個に絞って確定
- [ ] 動作環境（TouchDesigner / OS / GPU 推奨）を確定
- [ ] Getting Started を実手順で埋める
- [ ] `/releases` を GitHub Releases と同期（API 取得 + 表示）し、二重管理を解消する
