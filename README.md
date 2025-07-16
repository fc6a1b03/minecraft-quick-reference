# Minecraft Quick Reference

> 基于 Vue 3 + Naive UI 的 Minecraft 多版本服务器快速查询与下载工具

---

![screenshot](public/icon.svg)

## 目录
- [简介](#简介)
- [特性亮点](#特性亮点)
- [环境要求](#环境要求)
- [安装与运行](#安装与运行)
- [项目结构](#项目结构)
- [常见问题](#常见问题)

## 简介

Minecraft Quick Reference 是一个基于 Vue 3 和 Naive UI 构建的工具，旨在为 Minecraft 玩家提供快速、便捷的版本参考和下载服务。支持查询和下载 Minecraft 原版、Fabric 、 Forge 和 Purpur 的服务器版本信息，帮助玩家轻松管理和部署不同版本的 Minecraft 服务器。

## 特性亮点
- 🚀 多版本支持：原版、Fabric、Forge、Purpur 一站式查询与下载
- 📦 自动数据加载与分页，支持“加载更多”
- 🔗 官方数据源，安全可靠
- 🖥️ 现代化 UI，响应式设计，适配多端
- ⚡ 极速启动，依赖 bun 构建

## 环境要求
- **Node.js**：>= 22
- **bun**：用于安装依赖
- **现代浏览器**：支持 ES6+ 和 Vue 3 的运行环境

## 安装与运行

### 1. 克隆项目

```bash
git clone <repository-url>
cd minecraft-quick-reference
```

### 2. 安装依赖

```bash
curl -fsSL https://fnm.vercel.app/install | bash
fnm i && fnm use
bun i
```

### 3. 运行开发环境

```bash
bun run dev
```

浏览器访问 [http://localhost:5173](http://localhost:5173) 查看应用。

### 4. 构建生产环境

```bash
bun run build
```

构建产物位于 `dist` 目录，可部署到静态服务器或 CDN。

## 项目结构

```
├── public/           # 静态资源
├── src/              # 源码目录
│   ├── common/       # 公共资源
│   ├── router/       # 路由配置
│   ├── views/        # 页面视图
│   ├── App.vue       # 根组件
│   └── main.ts       # 入口文件
├── index.html        # HTML 模板
├── package.json      # 项目配置
├── vite.config.ts    # Vite 配置
└── ...
```

## 常见问题

Q: 启动报错 Node 版本不符？
A: 请确保已安装 Node.js 22+，并使用 fnm 管理。

Q: 如何切换 bun 版本？
A: 参考 [bun 官方文档](https://bun.sh/docs/installation)。

---

> 如需更多帮助，请提交 Issue。