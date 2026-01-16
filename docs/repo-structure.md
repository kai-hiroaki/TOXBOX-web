# リポジトリ構成（非公開）

## 概要

このリポジトリは、TOXBOX の **LP / Docs / Releases** をまとめたサイトを `toxbox-site/` 配下に持ち、GitHub Pages にデプロイします。

## 重要なポイント

- **サイト（ビルド対象）**: `toxbox-site/`
- **デプロイ（GitHub Actions）**: `.github/workflows/deploy.yml`
- **公開Docs（Starlight）**: `toxbox-site/src/content/docs/`
- **非公開Docs（開発 / Cursor 用）**: `docs/`

## ディレクトリ早見表

```text
TOXBOX-web/
  docs/                          # 非公開（開発/運用/Cursor）
  toxbox-site/                   # サイト本体（Astro + Starlight）
    src/pages/                   # /, /releases など
    src/content/docs/            # 公開Docs（Starlight）
  .github/workflows/deploy.yml   # Pages デプロイ
```

## 主要ファイル

- `toxbox-site/src/pages/index.astro`
  - LP（Booth CTA / Docs / Releases への導線）
- `toxbox-site/src/pages/releases.astro`
  - Releases ページ（現状はスタブ。将来的に GitHub Releases 連動予定）
- `toxbox-site/astro.config.mjs`
  - `site` / `base` を環境変数（`ASTRO_SITE` / `ASTRO_BASE`）から設定

