# Minecraft Quick Reference

## 简介

Minecraft Quick Reference 是一个基于 Vue 3 和 Naive UI 构建的工具，旨在为 Minecraft 玩家提供快速、便捷的版本参考和下载服务。该项目支持查询和下载
Minecraft 原版、Fabric 和 Forge 的服务器版本信息，帮助玩家轻松管理和部署不同版本的 Minecraft 服务器。

## 功能

### 1. **多版本支持**

- **原版 (Native)**：提供 Minecraft 原版服务器的版本信息和下载链接。
- **Fabric**：提供 Fabric 版本的加载器、安装器及对应的服务器版本信息。
- **Forge**：提供 Forge 版本的安装器及服务器版本信息。

### 2. **数据加载与分页**

- 自动加载版本数据，支持分页显示，用户可以通过“加载更多”按钮查看更多版本信息。
- 数据来源：
    - 原版 (Native)：`https://launchermeta.mojang.com/mc/game/version_manifest.json`
    - Fabric：`https://meta.fabricmc.net/v2/versions/`
    - Forge：`https://files.minecraftforge.net/net/minecraftforge/forge/promotions_slim.json`

## 环境要求

- **Node.js**：>= 22
- **bun**：用于安装依赖
- **现代浏览器**：支持 ES6+ 和 Vue 3 的运行环境

## 安装与运行

### 1. **克隆项目**

   ```bash
   git clone <repository-url>
   cd minecraft-quick-reference
   ```

### 2. **安装依赖**

   ```bash
   curl -fsSL https://fnm.vercel.app/install | bash
   fnm i && fnm use
   bun i
   ```

推荐使用 [fnm](https://github.com/Schniz/fnm) (Fast Node Manager) 来管理 Node.js 版本

### 3. **运行开发环境**

   ```bash
   bun run dev
   ```

打开浏览器访问 http://localhost:5173，即可查看应用。

### 4. **运行开发环境**

   ```bash
   bun run build
   ```

构建完成后，生成的静态文件将位于 dist 目录下，可以直接部署到静态服务器或 CDN。