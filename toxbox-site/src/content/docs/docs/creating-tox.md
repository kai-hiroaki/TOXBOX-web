---
title: tox作成ガイド
description: TOXBOX用のtoxを自作する方法
---

このガイドでは、TOXBOX で使用する tox（TouchDesigner Component File）を自作する方法を説明します。

## tox の基本

### tox とは

tox は TouchDesigner のコンポーネント（Container COMP など）を外部ファイルとして保存したものです。ネットワーク全体をひとつのファイルにパッケージ化できます。

### TOXBOX での tox の役割

TOXBOX では、tox を「シーン」として扱います。各 tox は独立したビジュアルを持ち、レイヤー上で切り替えたりミックスしたりできます。

## 基本的な tox の作成

### 1. 新規コンポーネントを作成

1. TouchDesigner で新規プロジェクトを開く
2. `Container COMP` を作成
3. この Container の中にビジュアルのネットワークを構築

### 2. 出力の設定

TOXBOX がビジュアルを取得できるように、出力を設定します。

1. Container の中に `Out TOP` を配置
2. ビジュアルの最終出力を `Out TOP` に接続

```
[ビジュアル生成ノード] → [エフェクト等] → [Out TOP]
```

### 3. tox として保存

1. Container を右クリック
2. `Save Component .tox` を選択
3. ファイル名を付けて保存

## パラメータパネル対応の tox

TOXBOX のパラメータパネルに対応した tox を作成すると、パフォーマンス中にパラメータを調整できます。

### 対応形式の要件

パラメータパネルに表示されるには、以下の形式でカスタムパラメータを定義する必要があります。

### カスタムパラメータの追加

1. Container を選択
2. パラメータウィンドウで `Custom` タブを開く
3. `+` ボタンでパラメータを追加

### 推奨パラメータ形式

| パラメータタイプ | 説明 | 例 |
|-----------------|------|-----|
| Float | 0〜1 の連続値 | Scale, Brightness |
| Int | 整数値 | Count, Segments |
| Toggle | オン/オフ | Enable, Invert |
| Menu | 選択肢 | Mode, Style |
| RGB | 色選択 | Color, Tint |

### パラメータの命名規則

パラメータ名は分かりやすく、一貫性のある命名を推奨します：

```
Scale        → スケール
Rotation     → 回転
Speed        → 速度
Color        → 色
Brightness   → 明るさ
Contrast     → コントラスト
```

## ChopReference 対応

tox のパラメータを TOXBOX のオーディオ解析やシーケンサーと連携させるには、ChopReference に対応したパラメータ設計が必要です。

### ChopReference とは

ChopReference は、CHOP（Channel Operator）の値をパラメータに直接参照させる TouchDesigner の機能です。

### 対応パラメータの作成

ChopReference で接続したいパラメータは、以下の点に注意して作成します：

1. **値の範囲**: 0〜1 の範囲で設計すると、オーディオ解析の出力とそのまま連携できる
2. **スムーズな変化**: 急激な変化が問題になる場合は、内部で Lag CHOP 等を使用

### 内部での参照方法

tox 内部でパラメータを参照するには：

```python
# Python での参照例
op('container1').par.Scale

# Expression での参照例
parent().par.Scale
```

## 実践: シンプルな tox を作る

### ステップ 1: Container の作成

1. 新規 `Container COMP` を作成
2. 名前を `MyVisual` に変更

### ステップ 2: ビジュアルの構築

Container の中に以下のネットワークを作成：

```
[Noise TOP] → [Level TOP] → [Transform TOP] → [Out TOP]
```

### ステップ 3: カスタムパラメータの追加

Container のカスタムパラメータに以下を追加：

| 名前 | タイプ | 範囲 | デフォルト |
|------|--------|------|----------|
| Scale | Float | 0〜2 | 1 |
| Speed | Float | 0〜10 | 1 |
| Brightness | Float | 0〜1 | 0.5 |

### ステップ 4: パラメータをノードに接続

各ノードのパラメータに Expression で参照を設定：

**Transform TOP の Scale:**
```
parent().par.Scale
```

**Noise TOP の Speed:**
```
parent().par.Speed
```

**Level TOP の Brightness:**
```
parent().par.Brightness
```

### ステップ 5: tox として保存

1. Container を右クリック
2. `Save Component .tox` を選択
3. `MyVisual.tox` として保存

### ステップ 6: TOXBOX でテスト

1. 保存した `MyVisual.tox` を TOXBOX にドラッグ＆ドロップ
2. シーンを選択
3. パラメータパネルで Scale, Speed, Brightness が表示されることを確認

## ベストプラクティス

### パフォーマンス

- **不要なノードを削除**: 使っていないノードは負荷になる
- **解像度を適切に**: 内部処理は必要な解像度に留める
- **Heavy ノードに注意**: Blur, Bloom 等は負荷が高い

### 互換性

- **相対パスを使用**: tox 内部では相対パス（`parent()`, `op('..')` など）を使用
- **外部依存を避ける**: tox 外のオペレーターを参照しない
- **バージョン確認**: TouchDesigner のバージョン差に注意

### 設計

- **モジュール化**: ひとつの tox はひとつの明確な役割を持つ
- **パラメータは厳選**: 本当に調整が必要なものだけを公開
- **デフォルト値を設定**: パラメータを触らなくても動作する状態に

## トラブルシューティング

### パラメータがパネルに表示されない

- カスタムパラメータが正しく定義されているか確認
- パラメータの `Mode` が `Constant` になっていないか確認

### tox が読み込めない

- TouchDesigner のバージョン差による可能性
- tox ファイルが破損していないか確認

### 動作が重い

- tox 内部の処理を最適化
- 不要な解像度の高いノードがないか確認

## 次のステップ

- **[オーディオ解析チュートリアル](../tutorials/audio-analysis/)**: パラメータとオーディオを連携
- **[シーケンサーチュートリアル](../tutorials/sequencer/)**: パラメータとシーケンサーを連携
- **[リファレンス](../reference/)**: TOXBOX の仕様詳細
