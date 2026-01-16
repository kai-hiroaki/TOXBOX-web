# TOXBOX Web Site（Astro + Starlight）

TOXBOX の **LP / Docs / Releases** をまとめた Web サイトです。  
開発は `toxbox-site/` ディレクトリ内で行います。

## ローカル開発

前提:

- Node.js 18+（Actions も 18 を使用）

コマンド（`toxbox-site/` で実行）:

```bash
npm ci
npm run dev
```

- 開発サーバー: `http://localhost:4321`

## ビルド / プレビュー

```bash
npm run build
npm run preview
```

## GitHub Pages デプロイ

デプロイは `../.github/workflows/deploy.yml` で行います（main への push）。  
GitHub Pages のサブパス配下で動作させるため、ビルド時に次の環境変数を設定しています:

- `ASTRO_SITE`: `https://<owner>.github.io`
- `ASTRO_BASE`: `/<repo>/`

対応する設定は `astro.config.mjs` の `site` / `base` です。

## ドキュメントの更新方法

- **Docs 本体**: `src/content/docs/docs/` 配下の `.md` / `.mdx`
- **Docs の入口**: `src/content/docs/docs/index.mdx`
- **サイドバー**: `astro.config.mjs` の `starlight().sidebar`

## リンクの置き換え

`astro.config.mjs` の GitHub リンク `https://github.com/<OWNER>/<REPO>` は実リポジトリに合わせて更新してください。
