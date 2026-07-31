# ⚡ Eureka Lite

> **轻量级创新工作台** —— 把「一个模糊的想法」走完 RISE 四阶段，直到产出可验证的概念方案与原型。
> 纯前端单页应用（SPA），**零后端、零数据库、零依赖安装**，浏览器打开即用，数据只存在你自己的浏览器里。

<p align="center">
  <img src="https://img.shields.io/badge/version-v1.1-orange" alt="version">
  <img src="https://img.shields.io/badge/stack-Vanilla%20JS-orange" alt="stack">
  <img src="https://img.shields.io/badge/backend-None-lightgrey" alt="backend">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="license">
  <img src="https://img.shields.io/badge/AI-Optional-green" alt="ai">
</p>

<p align="center">
  <a href="https://davidma1973simu.github.io/eureka-lite/">🚀 在线体验 Live Demo</a> ·
  <a href="#-核心界面预览">🖼 界面预览 Screenshots</a> ·
  <a href="#-为什么是-eureka-lite-差异化定位">💡 差异化定位</a> ·
  <a href="#-本地运行">📦 本地运行</a>
</p>

---

## 🌐 English Abstract

**Eureka Lite** is a lightweight, front-end-only innovation workspace that guides you through the full **RISE** methodology — **R**eveal → **I**nspire → **S**hape → **E**xam — turning a vague idea into a validated concept and prototype.

- **No backend. No database. No install.** Pure HTML/CSS/JS SPA; all data stays in your browser's `localStorage`.
- **Methodology, not a whiteboard.** Every step has a defined deliverable and completion criteria — you're guided, not staring at a blank canvas.
- **Gamified progress.** Earn Eureka Coins as you complete stages.
- **AI-optional.** Works fully offline; drop in your own DeepSeek / OpenAI-compatible key for AI-assisted reasoning.
- **Portable output.** Export a project "Panorama" (all four stages) as HTML / PDF / image.

👉 **Live demo:** https://davidma1973simu.github.io/eureka-lite/
> 🌍 A full English UI is on the roadmap (homepage CN/EN toggle). The methodology content above already works end-to-end in Chinese.

---

## 🤔 为什么是 Eureka Lite？（差异化定位）

大多数创新/头脑风暴工具给你一块**空白画布**（Miro、FigJam、无限白板），然后……就靠你自己了。
Eureka Lite 不一样：**它把一套经过验证的创新方法论（RISE）变成了一条「有路标的高速公路」。**

| 维度 | 传统白板工具 | **Eureka Lite** |
|---|---|---|
| 起点 | 空白画布，靠灵感硬撑 | 结构化引导，每一步都有明确产出物 |
| 方法论 | 无 / 需自行套用 | 内建 RISE 四阶段（洞察→启发→塑造→验证） |
| 进度感 | 不知道做到哪了 | 完成度 + 积分（Eureka Coins）可视化 |
| 隐私 | 数据在厂商云端 | **纯本地 localStorage，数据不出浏览器** |
| 部署 | 需账号 / 订阅 | **零后端，GitHub Pages 一键托管，免费** |
| AI | 常绑定付费 | AI 可选，自带容错，不配也能用 |
| 交付物 | 导出图片 | **项目全景图一键下载 HTML/PDF/图片** |

**一句话**：如果说 Miro 是「一张无限的纸」，Eureka Lite 就是「一位随时在侧的创新教练」。

---

## 🧭 它做什么（RISE 框架）

| 阶段 | 屏数 | 产出物 |
|---|---|---|
| **Reveal 洞察** | 5 屏 | 场景描述 → 用户旅程 → FIND 洞察 → 利益方分析 → 项目简报 |
| **Inspire 启发** | 5 屏 | HMW 问题重构（四维）→ NCO 灵感交叉 → 创意生成 → 筛选矩阵 → 创意确认 |
| **Shape 塑造** | 3 屏 | 四维拷问 → 最小概念方案 → 故事板 |
| **Exam 验证** | 5 屏 | 原型设计 → 用户测试 → 测试报告 → 四维评价 → 电梯演讲 |

**辅助能力**：多项目管理 · 个人中心 · 积分体系（Eureka Coins）· **项目全景图**（四阶段产出汇总，可下载/打印/存图）· 本地自动保存 · 可选 AI 助手（DeepSeek / OpenAI 兼容）。

---

## 🖼 核心界面预览

> 下方为产品真实界面的高保真预览（非截图占位图）。完整图集见 **[docs/showcase.html](docs/showcase.html)**。

| 界面 | 说明 |
|---|---|
| **首页** | 一句话描述项目即开始；可加载示例「MOMOS」体验完整流程 |
| **RISE 阶段导航** | 四阶段进度一目了然，每步有明确完成标准 |
| **Reveal R5 项目简报** | 自动整合前 4 屏洞察，生成可分享简报 |
| **Inspire I1 HMW** | 用 Amplify / Remove / Flip / Diverge 四维重构用户问题 |
| **项目全景图** | 四阶段产出一键汇总，支持下载 HTML / 打印 PDF / 存图 |

<p align="center">
  <img src="docs/showcase.html" alt="Eureka Lite 界面预览" width="700">
</p>

---

## 📦 本地运行

```bash
# 方式一：直接打开
双击 index.html 即可

# 方式二：本地静态服务器（推荐，避免个别浏览器对 file:// 的限制）
python3 -m http.server 8080
# 浏览器访问 http://localhost:8080
```

**无需安装任何依赖，开箱即用。**

---

## 🤖 AI 功能配置（可选）

AI 助手默认通过 **DeepSeek API**（OpenAI 兼容接口）提供智能推导。公开仓库**不包含任何密钥**，请自行配置：

1. 复制模板：`js/ai-config.example.js` → `js/ai-config.js`
2. 填入你自己的 DeepSeek API Key（https://platform.deepseek.com）
3. 刷新页面即可使用 AI 功能

也可以直接在应用内「个人中心」填入 Key（保存在 `localStorage`，无需配置文件）。

> 不配置也能**完整使用产品**，只是 AI 智能推导不可用。

---

## 🛠 技术栈

| 组件 | 技术 |
|---|---|
| 前端框架 | Vanilla JavaScript (ES6+)，**无构建步骤** |
| 样式 | CSS3 自定义属性 + Flexbox / Grid |
| 数据持久化 | `localStorage` |
| AI 集成 | DeepSeek / OpenAI 兼容接口，支持自定义 Key 覆盖 |
| 部署 | GitHub Pages（纯静态，含 `.nojekyll`） |

---

## 📁 目录结构

```
eureka-lite/
├── index.html                # SPA 入口
├── .nojekyll                 # 关闭 GitHub Pages 的 Jekyll 处理
├── README.md                 # 本文件
├── docs/
│   └── showcase.html         # 核心界面高保真预览
├── css/
│   ├── base.css
│   ├── home.css
│   └── components.css
├── js/
│   ├── app.js                # 全部业务逻辑（路由、模块、数据流）
│   ├── ai-assistant.js       # AI 助手抽屉
│   ├── ai-service.js         # AI 调用封装（对缺失配置有容错）
│   ├── ai-config.example.js  # AI 配置模板
│   ├── storage.js            # localStorage 封装
│   ├── state.js              # 全局状态
│   ├── utils.js
│   └── voice-iat.js          # 语音输入
├── assets/                   # 静态资源
└── data/                     # 示例数据
```

---

## 🗺 路线图（Roadmap）

- [x] RISE 四阶段完整流程
- [x] 项目全景图导出（HTML / PDF / 图片）
- [x] 积分体系与本地自动保存
- [x] 可选 AI 助手（容错）
- [ ] 🌍 **英文界面（首页 CN/EN 切换开关）**
- [ ] 更多示例项目与行业模板
- [ ] 协作 / 分享链接

---

## 📄 License

文档与示例代码采用 **MIT**；产品逻辑归原作者所有。
