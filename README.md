# OpenClaw Quantitative Analysis System

一个基于 OpenClaw 架构构建的量化交易分析系统原型。该项目展示了如何利用人工智能代理（Agents）进行多维度的量化数据处理、策略回测及架构可视化。

## 核心特性

- **多代理协作架构**：展示数据采集、清洗、策略分析及执行代理之间的交互流。
- **现代化技术栈**：使用 React 18 + Vite + TypeScript 构建。
- **动态 UI 交互**：集成 Framer Motion 实现平滑的组件动画。
- **架构可视化**：内置系统架构图（Architecture Diagram）和数据流向（Data Flow）展示组件。
- **响应式设计**：基于 Tailwind CSS 构建的适配多种屏幕尺寸的界面。

## 技术栈

- **框架**: React 18
- **构建工具**: Vite
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **动画**: Framer Motion

## 快速开始

### 1. 克隆项目
```bash
git clone https://github.com/Omega-ZhangH/openclaw-quantitative-analysis.git
cd openclaw-quantitative-analysis
```

### 2. 安装依赖
```bash
npm install
```

### 3. 启动开发服务器
```bash
npm run dev
```

### 4. 构建生产版本
```bash
npm run build
```

## 部署注意事项

1. **环境变量**：如果后续接入真实的 OpenClaw Gateway，请确保在 `.env` 文件中配置正确的 `OPENCLAW_GATEWAY_URL`。
2. **跨域配置 (CORS)**：在生产环境下，如果前端需要直接调用 OpenClaw 接口，需在 Gateway 端配置允许该域名的跨域请求。
3. **静态托管**：本项目为单页应用 (SPA)，部署至 Vercel, Netlify 或 Nginx 时，请确保配置所有路由重定向至 `index.html`。
4. **Node.js 版本**：建议使用 Node.js 18.x 或更高版本。

## 项目结构

- `src/components`: 包含架构图、模块卡片等核心展示组件。
- `src/App.tsx`: 应用主入口。
- `tailwind.config.js`: Tailwind 样式配置。

---

*Powered by OpenClaw*
