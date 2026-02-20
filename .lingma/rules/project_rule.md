**添加规则文件可帮助模型精准理解你的编码偏好，如框架、代码风格等**
**规则文件只对当前工程生效，单文件限制10000字符。如果无需将该文件提交到远程 Git 仓库，请将其添加到 .gitignore**

## 简介
Minecraft Quick Reference 是一个基于 Vue 3 和 Naive UI 构建的工具，旨在为 Minecraft 玩家提供快速、便捷的版本参考和下载服务。支持查询和下载 Minecraft 原版、Fabric 、 Forge 和 Purpur 的服务器版本信息，帮助玩家轻松管理和部署不同版本的 Minecraft 服务器。

## 环境信息
- node 24.13.1
- bun 1.3.9
- vue 3.5.28
- vite 6.4.1
- naive-ui 2.43.2

## 编码要求
- 新特性 高性能 Lambda
- 任何 编码字符串 都需要统一使用单引号
- 变量必须定义并强类型，强遵守 TypeScript 规范要求
- 任何 语法 使用需验证是否为当前时间下 最现代、性能更好 的选择，无需考虑任何旧版本兼容性问题
- 不可使用 function 定义方法；只要是方法既必须带有方法注释，注释信息可以不必太详细

- 避免内联css样式、vue文件css样式
- 编写任何样式必须是 兼容多端 且 强自适应
- css必须独立文件，如：common/css/index.css

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