#!/usr/bin/env node

/**
 * 楽天ウォレット 証拠金取引所 Public API MCPサーバー
 * - Public API（認証不要）で板・ティッカー・歩み値を取得するMCPツールを提供
 * - symbolId（例: 7=BTC/JPY）を指定してデータ取得
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import axios from "axios";

// APIエンドポイント
const BASE_URL = "https://exchange.rakuten-wallet.co.jp/leverage/api/v1/public";

// MCPサーバー初期化
const server = new Server(
  {
    name: "rakuten-wallet-mcp",
    version: "0.2.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// MCPツール定義
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "get_orderbook",
        description: "指定したsymbolIdの板情報を取得",
        inputSchema: {
          type: "object",
          properties: {
            symbolId: {
              type: "integer",
              description: "シンボルID（例: 7=BTC/JPY）"
            }
          },
          required: ["symbolId"]
        }
      },
      {
        name: "get_ticker",
        description: "指定したsymbolIdのティッカー情報を取得",
        inputSchema: {
          type: "object",
          properties: {
            symbolId: {
              type: "integer",
              description: "シンボルID（例: 7=BTC/JPY）"
            }
          },
          required: ["symbolId"]
        }
      },
      {
        name: "get_trades",
        description: "指定したsymbolIdの歩み値（トレード履歴）を取得",
        inputSchema: {
          type: "object",
          properties: {
            symbolId: {
              type: "integer",
              description: "シンボルID（例: 7=BTC/JPY）"
            }
          },
          required: ["symbolId"]
        }
      }
    ]
  };
});

// MCPツール実装
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  const symbolId = args?.symbolId;
  if (!symbolId) {
    throw new Error("symbolIdは必須だよ！");
  }

  try {
    switch (name) {
      case "get_orderbook": {
        const res = await axios.get(`${BASE_URL}/orderbooks/${symbolId}`);
        return {
          content: [{
            type: "json",
            json: res.data
          }]
        };
      }
      case "get_ticker": {
        const res = await axios.get(`${BASE_URL}/ticker/${symbolId}`);
        return {
          content: [{
            type: "json",
            json: res.data
          }]
        };
      }
      case "get_trades": {
        const res = await axios.get(`${BASE_URL}/trades/${symbolId}`);
        return {
          content: [{
            type: "json",
            json: res.data
          }]
        };
      }
      default:
        throw new Error("Unknown tool");
    }
  } catch (err: any) {
    return {
      content: [{
        type: "text",
        text: `APIリクエスト失敗: ${err?.message ?? String(err)}`
      }]
    };
  }
});

// サーバー起動
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
