# Second Brain（简体中文版）

Second Brain 是一个运行在 Cloudflare 上的个人知识与记忆系统。它使用 Workers、D1、Vectorize、Workers AI 和 KV，通过网页、REST API 与 MCP 为 ChatGPT、Claude、Cursor 等客户端提供统一的记忆层。

本分支已完成以下本地化与中文检索调整：

- Web 仪表盘和桌面安装器使用单一简体中文界面；
- 已移除英文、意大利文语言包和语言切换入口；
- 默认嵌入模型改为多语言模型 `@cf/baai/bge-m3`；
- 默认 Vectorize 索引维度改为 `1024`，距离度量保持 `cosine`；
- 原生桌面菜单、对话框及常见错误信息已加入中文；
- 网页静态首屏、桌面原生菜单和错误提示均使用中文。

## 功能概览

- 保存事实、想法、决策、任务与项目上下文；
- 结合关键词检索和向量语义检索召回记忆；
- 通过 MCP 接入支持的 AI 客户端；
- 按个人层与团队共享层隔离记忆；
- 支持 Notion、日历、邮件等集成；
- 提供记忆图谱、摘要、冲突检测、洞察和定时维护；
- 数据存储在你自己的 Cloudflare 账户中。

## 推荐安装方式

从 GitHub Releases 下载桌面安装器。打开应用后设置密码并登录 Cloudflare，安装器会自动创建 Worker、D1、KV 与 1024 维 Vectorize 索引，然后引导你连接 AI 客户端。

如果使用 Cloudflare 的一键部署页面，请填写：

| 字段 | 值 |
| --- | --- |
| `AUTH_TOKEN` | 你创建的安全密码或随机令牌 |
| `DIMENSION` | `1024` |
| `METRIC` | `cosine` |

部署完成后，MCP 地址为：

```text
https://你的-WORKER-地址/mcp
```

支持 OAuth 的客户端优先使用 OAuth；静态客户端可发送：

```text
Authorization: Bearer <你的令牌>
```

## 命令行部署

需要 Node.js 20+ 和已登录的 Wrangler。

```bash
npm install
npm run db:create
npm run vectors:create
```

`npm run vectors:create` 会执行等价于以下命令的操作：

```bash
npx wrangler vectorize create second-brain-vectors --dimensions=1024 --metric=cosine
```

随后在 `wrangler.jsonc` 中补充 Cloudflare 创建的 D1、KV 和 Vectorize 资源 ID，设置密钥并部署：

```bash
npx wrangler secret put AUTH_TOKEN
npm run db:migrate:remote
npm run deploy
```

## 本地开发

```bash
npm install
npm run dev
```

Workers AI 需要远程推理资源；涉及真实 AI 调用时请使用 Wrangler 的远程开发模式或部署到测试环境。

常用检查：

```bash
npm test
npm run typecheck
```

桌面安装器位于 `installer/`，其 Worker 资源清单也已同步为 1024 维。不要只修改根目录的创建命令，否则桌面安装器仍可能创建不同维度的索引。

## 从旧版本迁移

Vectorize 索引的维度在创建后不可修改。已有 384 维索引不能直接改成 1024 维；需要新建 1024 维索引，并使用项目内的嵌入迁移流程重新生成向量。

`bge-m3` 与其他 1024 维模型虽然维度相同，但向量空间并不相同。切换模型时仍应重新嵌入全部记忆，不能复用旧模型生成的向量。

## 安全说明

- 不要把 GitHub、Cloudflare 或其他访问令牌提交到仓库；
- `AUTH_TOKEN` 相当于 Second Brain 的密码，请使用高强度随机值；
- `.dev.vars`、本地日志和导出的记忆备份可能包含敏感信息；
- 团队共享层中的内容对团队成员可见，个人层默认保持私有。

## 许可证

项目采用原仓库的许可证。
