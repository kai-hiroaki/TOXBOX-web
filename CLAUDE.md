# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

## 言語

日本語で応答してください。

## プロジェクト概要

TOXBOX-webは、TouchDesigner VJツールの静的ウェブサイトです。以下の要素で構成されています:
- Boothマーケットプレイスでの製品プロモーション用ランディングページ（LP）
- Starlightを使用した技術ドキュメント
- リリースノートページ（GitHub API連携済み）

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
- `toxbox-site/` - メインのAstroプロジェクト（Cloudflare Pagesへのデプロイ対象）

**主要ファイル**:
- `toxbox-site/astro.config.mjs` - Astro/Starlight設定、サイドバー定義
- `toxbox-site/src/pages/` - ルートページ（ファイルベースルーティング）
- `toxbox-site/src/content/docs/docs/` - Starlightドキュメントコンテンツ（MDX/MD）

**環境対応デプロイ**:
設定ファイルは `ASTRO_SITE` 環境変数を読み込みます。Cloudflare Pagesのダッシュボードで設定されます。`ASTRO_BASE` はデフォルト `/` のため設定不要です。

## リリースノートページ

**実装**:
- `toxbox-site/src/content/docs/docs/releases.mdx` でGitHub APIからリリースノートを取得
- `toxbox-site/src/lib/github.ts` にAPI取得ロジック
- `toxbox-site/src/components/ReleaseList.astro` で表示

**GitHub Token設定（プライベートリポジトリ用）**:
1. GitHubで Personal Access Token (classic) を作成
   - スコープ: `repo` (プライベートリポジトリへのアクセス)
2. Cloudflare Pagesダッシュボードの Settings > Environment variables で設定:
   - Name: `GITHUB_TOKEN`
   - Value: 作成したトークン

**ローカル開発**:
```bash
GITHUB_TOKEN=your_token npm run dev
```

## 重要なガイドライン

- **公開ドキュメント**: ユーザー向けドキュメントは `toxbox-site/src/content/docs/` に配置します。
- **ビルド対象**: Cloudflare Pagesにデプロイされるのは `toxbox-site/` のみです。
- **コミットメッセージ**: 日本語で記述してください。
- **デプロイ**: Cloudflare Pagesダッシュボードでリポジトリと接続済み。`main` へのプッシュで自動デプロイされます。GitHub Actionsワークフローは不要です。
- **GitHubリンクプレースホルダー**: `astro.config.mjs` には更新が必要な `<OWNER>/<REPO>` プレースホルダーが含まれています。
- **動画ファイル**: `.gitignore` でgitから除外されています（大容量のヒーロー動画アセット）。
