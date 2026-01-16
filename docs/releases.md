# Releases 方針（非公開）

## 現状

- `toxbox-site/src/pages/releases.astro` はスタブ表示
- `toxbox-site/src/content/docs/docs/changelog.md` に暫定の更新履歴がある

## 方針（目標）

- **一次情報**は GitHub Releases に寄せる
- Web 側で二重管理しない（Changelog の手入力を減らす）

## 次の実装タスク（案）

- GitHub API から Releases を取得して一覧表示する
- 各リリースの本文（Markdown）を整形して表示する
- 取得失敗時は `docs/changelog.md` への導線を出す（暫定運用）

