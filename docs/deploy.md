# デプロイ（GitHub Pages / GitHub Actions）（非公開）

## 概要

デプロイは `.github/workflows/deploy.yml` が担当します。  
`main` への push をトリガーに、`toxbox-site/` をビルドして `toxbox-site/dist` を Pages にアップロードします。

## ビルド対象と「非公開ドキュメント」

- **ビルド対象**: `toxbox-site/`
- **ビルド対象外**: リポジトリ直下の Markdown、`docs/` 配下

つまり、`docs/` を増やしても **デプロイの妨げにはなりません**（ビルドで参照しない限り）。

## 環境変数（Pages のサブパス対応）

workflow は build 時に次を設定しています:

- `ASTRO_SITE`: `https://<owner>.github.io`
- `ASTRO_BASE`: `/<repo>/`

これに対応して `toxbox-site/astro.config.mjs` では次のように設定しています:

- `site: process.env.ASTRO_SITE`
- `base: process.env.ASTRO_BASE ?? "/"`
