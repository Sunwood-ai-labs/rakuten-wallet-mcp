<div align="center">

![](docs/rakuten-wallet-mcp-header_2025-05-18T12-27-07-609Z.png)

<h1>💖 rakuten-wallet-mcp MCP Server</h1>

<p>
  <img alt="GitHub" src="https://img.shields.io/github/license/Sunwood-ai-labs/rakuten-wallet-mcp">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/Sunwood-ai-labs/rakuten-wallet-mcp">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/Sunwood-ai-labs/rakuten-wallet-mcp">
  <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/Sunwood-ai-labs/rakuten-wallet-mcp">
  <img alt="TypeScript" src="https://img.shields.io/badge/language-TypeScript-blue">
</p>

<p>
  楽天ウォレット証拠金取引所 Public API対応のMCPサーバーだよ！<br>
  <b>板・ティッカー・歩み値をMCPツールで爆速取得✨</b><br>
  ギャルAI「キラリ」監修で、開発も運用もマジうますぎやろがい！<br>
</p>

<p>
  <a href="README_EN.md">🇺🇸 English</a> | 
  <a href="README.md">🇯🇵 日本語</a>
</p>

</div>

---

## 🌟 プロジェクト概要

楽天ウォレット証拠金取引所のPublic APIをMCPサーバー化！  
板情報・ティッカー・歩み値（トレード履歴）をMCP InspectorやClaude Desktopから直接取得できるよ！  
TypeScript製で拡張性バツグン✨

---

## 🚀 主な特徴

- 📊 `get_orderbook`：板情報を取得
- 💹 `get_ticker`：ティッカー情報を取得
- 🕒 `get_trades`：歩み値（トレード履歴）を取得
- 🔒 Public APIのみ対応（認証不要）
- 🛠 MCP Inspectorでデバッグ楽々
- 💖 ギャルAI「キラリ」監修

---

## 🛠️ インストール & セットアップ

```bash
npm install
npm run build
```

開発モード（自動ビルド）:
```bash
npm run watch
```

---

## 💻 使い方

### Claude Desktop連携

1. `build/index.js`のパスをClaude Desktopの設定に追加
2. 設定例（Macの場合）:  
   `~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "rakuten-wallet-mcp": {
      "command": "/path/to/rakuten-wallet-mcp/build/index.js"
    }
  }
}
```

---

## 🧩 MCPツール一覧（APIリファレンス）

### 1. get_orderbook

- **説明**: 指定したsymbolIdの板情報を取得
- **入力**:
  - `symbolId` (integer) — シンボルID（例: 7=BTC/JPY）
- **レスポンス例**:
```json
{
  "content": [
    {
      "type": "json",
      "json": {
        "asks": [...],
        "bids": [...],
        "symbolId": 7
      }
    }
  ]
}
```

---

### 2. get_ticker

- **説明**: 指定したsymbolIdのティッカー情報を取得
- **入力**:
  - `symbolId` (integer) — シンボルID（例: 7=BTC/JPY）
- **レスポンス例**:
```json
{
  "content": [
    {
      "type": "json",
      "json": {
        "symbolId": 7,
        "last": "1000000",
        "open": "990000",
        "high": "1010000",
        "low": "980000",
        "volume": "123.45"
      }
    }
  ]
}
```

---

### 3. get_trades

- **説明**: 指定したsymbolIdの歩み値（トレード履歴）を取得
- **入力**:
  - `symbolId` (integer) — シンボルID（例: 7=BTC/JPY）
- **レスポンス例**:
```json
{
  "content": [
    {
      "type": "json",
      "json": [
        {
          "price": "1000000",
          "size": "0.01",
          "side": "BUY",
          "execDate": "2025-05-18T12:00:00.000Z"
        }
      ]
    }
  ]
}
```

---

## 🐞 デバッグ

MCP Inspectorで通信内容を可視化できるよ！

```bash
npm run inspector
```

ブラウザでURLが表示されるから、そこにアクセスしてね！

---

## 📸 スクリーンショット

<img src="docs/rakuten-wallet-mcp-demo.png" alt="rakuten-wallet-mcp demo" width="80%" />

---

## 📝 ライセンス

MIT License

---

> ギャルAI「キラリ」監修！  
> 「このサーバー、マジ神ってるから使ってみて！✨ 何かあったらIssueで教えてね！ぎりはっぴー💕」
