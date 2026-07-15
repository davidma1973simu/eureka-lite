# Eureka Lite — 轻量级创新工作台

> 纯前端单页应用（SPA），实现 RISE 创新方法论完整流程。无需后端，浏览器打开即用。

## 在线预览

部署到 GitHub Pages 后访问：

**https://davidma1973simu.github.io/eureka-lite/**

（本仓库**独立托管** Eureka Lite，不与其他 Eureka 项目混在一起。）

## 这是什么

Eureka Lite 是一个纯前端创新工作台，覆盖 RISE 四阶段（Reveal 洞察 / Inspire 启发 / Shape 塑造 / Exam 验证），帮助用户从场景洞察一路走到可验证的概念方案与原型。所有数据保存在浏览器 `localStorage`，无需服务器。

## 本地运行

```bash
# 方式一：直接打开
双击 index.html 即可

# 方式二：本地静态服务器（推荐）
python3 -m http.server 8080
# 浏览器访问 http://localhost:8080
```

无需安装任何依赖，开箱即用。

## AI 功能配置（可选）

AI 助手默认通过 **DeepSeek API** 提供智能推导。公开仓库**不包含任何密钥**，请自行配置：

1. 复制模板：`js/ai-config.example.js` → `js/ai-config.js`
2. 填入你自己的 DeepSeek API Key（在 https://platform.deepseek.com 获取）
3. 刷新页面即可使用 AI 功能

也可以直接在应用内「个人中心」填入 Key（保存在浏览器 `localStorage`，无需配置文件）。

> 不配置也能完整使用产品，只是 AI 智能推导功能不可用。

## 技术栈

| 组件 | 技术 |
|---|---|
| 前端框架 | Vanilla JavaScript (ES6+)，无构建步骤 |
| 样式 | CSS3 自定义属性 + Flexbox/Grid |
| 数据持久化 | localStorage |
| AI 集成 | DeepSeek（OpenAI 兼容接口），支持用户自定义 Key 覆盖 |

## 功能概览（RISE 框架）

1. **Reveal（洞察）** — 场景 → 用户旅程 → FIND 洞察 → 利益方分析 → 简报生成
2. **Inspire（启发）** — HMW 问题重定义 → NCO 灵感交叉 → 创意生成 → 筛选矩阵 → 创意确认
3. **Shape（塑造）** — 四维拷问 → 最小概念方案 → 故事板
4. **Exam（验证）** — 原型设计 → 用户测试 → 测试报告 → 四维评价 → 电梯演讲

**辅助功能**：多项目管理、个人中心、积分体系（Eureka Coins）、**项目全景图**（四模块产出汇总 + 下载 HTML / 打印 PDF / 保存图片）、本地自动保存。

## 目录结构

```
eureka-lite/
├── index.html                # SPA 入口
├── .nojekyll                 # 关闭 GitHub Pages 的 Jekyll 处理（纯静态）
├── css/                      # 样式
├── js/
│   ├── app.js                # 全部业务逻辑（路由、模块、数据流）
│   ├── ai-service.js         # AI 调用封装（对缺失配置有容错）
│   ├── ai-config.example.js  # AI 配置模板（复制为 ai-config.js 使用）
│   └── ...
├── assets/                   # 静态资源
└── data/                     # 示例数据
```

## License

文档与示例代码采用 MIT；产品逻辑归原作者所有。
