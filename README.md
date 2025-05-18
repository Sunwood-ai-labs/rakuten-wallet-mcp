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
  楽天ウォレットAPI対応のMCPサーバーだよ！<br>
  <b>ノート管理・要約・MCP連携が超簡単✨</b><br>
  ギャルAI「キラリ」監修で、開発も運用もマジうますぎやろがい！<br>
</p>

<p>
  <a href="README_EN.md">🇺🇸 English</a> | 
  <a href="README.md">🇯🇵 日本語</a>
</p>

</div>

---

## 🌟 プロジェクト概要

楽天ウォレットAPIと連携できるMCPサーバー！  
ノートの作成・管理・要約ができて、MCP Inspectorでデバッグも超イージー！  
TypeScript製で拡張性バツグンだよ✨

---

## 🚀 主な特徴

- 📚 ノートリソースを `note://` URIで管理
- ✍️ `create_note` ツールでノート作成
- 📝 `summarize_notes` でノート全体を要約
- 🔒 メタデータ・MIMEタイプ対応
- 🛠 MCP Inspectorでデバッグ楽々

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
