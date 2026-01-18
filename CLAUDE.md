# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

## 言語

日本語で応答してください。

## プロジェクト概要

TOXBOX-webは、TouchDesigner VJツールの静的ウェブサイトです。以下の要素で構成されています:
- Boothマーケットプレイスでの製品プロモーション用ランディングページ（LP）
- Starlightを使用した技術ドキュメント
- リリースページ（スキャフォールド済み、将来的にGitHub API連携予定）

## 開発コマンド

すべてのコマンドは `toxbox-site/` ディレクトリから実行します:

```bash
npm ci              # 依存関係をクリーンインストール
npm run dev         # 開発サーバーを http://localhost:4321 で起動
npm run build       # 静的サイトを dist/ にビルド
npm run preview     # 本番ビルドをローカルでプレビュー
```

## アーキテクチャ

**技術スタック**: Astro 5.x + Starlight + Sharp（画像処理）

**ディレクトリ構造**:
- `toxbox-site/` - メインのAstroプロジェクト（GitHub Pagesへのデプロイ対象）

**主要ファイル**:
- `toxbox-site/astro.config.mjs` - Astro/Starlight設定、サイドバー定義
- `toxbox-site/src/pages/` - ルートページ（ファイルベースルーティング）
- `toxbox-site/src/content/docs/docs/` - Starlightドキュメントコンテンツ（MDX/MD）

**環境対応デプロイ**:
設定ファイルは `ASTRO_SITE` と `ASTRO_BASE` 環境変数を読み込み、GitHub Pagesのサブパスホスティングに対応しています。これらはデプロイワークフローで設定されます。

## Releases ページ方針

**現状**:
- `toxbox-site/src/pages/releases.astro` はスタブ表示
- `toxbox-site/src/content/docs/docs/changelog.md` に暫定の更新履歴がある

**方針（目標）**:
- 一次情報は GitHub Releases に寄せる
- Web 側で二重管理しない（Changelog の手入力を減らす）

**実装タスク案**:
- GitHub API から Releases を取得して一覧表示する
- 各リリースの本文（Markdown）を整形して表示する
- 取得失敗時は `docs/changelog.md` への導線を出す（暫定運用）

## 重要なガイドライン

- **公開ドキュメント**: ユーザー向けドキュメントは `toxbox-site/src/content/docs/` に配置します。
- **ビルド対象**: GitHub Pagesにデプロイされるのは `toxbox-site/` のみです。
- **コミットメッセージ**: 日本語で記述してください。
- **デプロイワークフロー**: `.github/workflows/deploy.yml` は `main` へのプッシュ時にデプロイします。変更は慎重に行ってください。
- **GitHubリンクプレースホルダー**: `astro.config.mjs` には更新が必要な `<OWNER>/<REPO>` プレースホルダーが含まれています。
- **動画ファイル**: `.gitignore` でgitから除外されています（大容量のヒーロー動画アセット）。
