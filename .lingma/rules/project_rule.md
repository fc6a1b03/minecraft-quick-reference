**添加规则文件可帮助模型精准理解你的编码偏好，如框架、代码风格等**
**规则文件只对当前工程生效，单文件限制10000字符。如果无需将该文件提交到远程 Git 仓库，请将其添加到 .gitignore**

---

## 简介

Minecraft Quick Reference 是一个基于 Vue 3 和 Naive UI 构建的工具，旨在为 Minecraft 玩家提供快速、便捷的版本参考和下载服务。支持查询和下载
Minecraft 原版、Fabric、Forge、NeoForge、Paper、Purpur、Folia 的服务器版本信息，以及生物图鉴、结构查询，帮助玩家轻松管理和部署不同版本的
Minecraft 服务器。

---

## 技术栈

| 技术         | 版本     | 用途     |
|------------|--------|--------|
| Node.js    | >= 22  | 运行环境   |
| Bun        | 1.3.9  | 包管理器   |
| Vue        | 3.5.28 | 前端框架   |
| TypeScript | 5.x    | 类型系统   |
| Vite       | 6.4.1  | 构建工具   |
| Naive UI   | 2.43.2 | UI 组件库 |
| Vue Router | 4.6.4  | 路由管理   |
| GSAP       | 3.14.2 | 动画库    |

---

## 项目结构

```
├── public/                    # 静态资源
│   └── icon.svg              # 应用图标
├── src/
│   ├── api/
│   │   └── index.ts          # API 统一管理模块，集中管理所有服务端接口调用
│   ├── common/
│   │   ├── css/
│   │   │   ├── index.css     # 主样式文件，包含所有组件样式、响应式、变量定义
│   │   │   └── gaming-theme.css  # 游戏主题配色
│   │   └── data/
│   │       ├── biology.ts    # 生物图鉴数据
│   │       └── structure.ts  # 结构数据
│   ├── components/           # 公共组件
│   │   ├── BiologyCard.vue   # 生物卡片组件
│   │   ├── BiologyModal.vue  # 生物详情弹窗
│   │   ├── BuildDetailCard.vue   # 构建详情卡片
│   │   ├── ClickEffects.vue  # 点击特效
│   │   ├── DownloadProgress.vue  # 下载进度组件
│   │   ├── ErrorAlert.vue    # 错误提示组件
│   │   ├── GameLoader.vue    # 游戏加载器
│   │   ├── ParticleBackground.vue    # 粒子背景
│   │   ├── StructureCard.vue # 结构卡片
│   │   ├── StructureModal.vue# 结构详情弹窗
│   │   ├── VersionCard.vue   # 版本卡片（核心组件）
│   │   └── VersionCardGrid.vue   # 版本卡片网格
│   ├── composables/          # 可复用逻辑（组合式函数）
│   │   ├── useDownload.ts    # 下载功能封装
│   │   └── usePagination.ts  # 分页功能封装
│   ├── router/
│   │   └── index.ts          # 路由配置
│   ├── types/
│   │   └── index.ts          # 全局类型定义
│   ├── views/
│   │   ├── index.vue         # 主页面（Tab 容器）
│   │   └── tabs/             # Tab 页面组件
│   │       ├── BiologyTab.vue    # 生物图鉴
│   │       ├── FabricTab.vue     # Fabric 版本
│   │       ├── FoliaTab.vue      # Folia 版本
│   │       ├── ForgeTab.vue      # Forge 版本
│   │       ├── NativeTab.vue     # 原版（支持客户端/服务端选择下载）
│   │       ├── NeoForgeTab.vue   # NeoForge 版本
│   │       ├── PaperTab.vue      # Paper 版本
│   │       ├── PurpurTab.vue     # Purpur 版本
│   │       └── StructureTab.vue  # 结构查询
│   ├── App.vue               # 根组件
│   └── main.ts               # 入口文件
├── index.html                # HTML 模板
├── package.json              # 项目配置
├── vite.config.ts            # Vite 配置
└── tsconfig.json             # TypeScript 配置
```

---

## 代码风格规范（重要）

### 1. 引号规范

- **必须使用单引号**，包括字符串、import 路径、模板中的属性等

```typescript
// ✅ 正确
import {ref} from 'vue'

const name = 'fabric'

// ❌ 错误
import {ref} from "vue"

const name = "fabric"
```

### 2. 函数定义规范

- **禁止使用 `function` 关键字**定义函数
- 必须使用箭头函数
- 所有方法必须有 JSDoc 注释（简要即可）

```typescript
// ✅ 正确
/**
 * 获取版本列表
 * @param type 服务器类型
 */
const fetchVersions = async (type: ServerType): Promise<VersionItem[]> => // ...

// ❌ 错误
function fetchVersions(type: ServerType) {
    // ...
}
```

### 3. TypeScript 规范

- 所有变量必须显式定义类型
- 使用 `interface` 定义对象类型
- 使用 `type` 定义联合类型、工具类型
- 避免使用 `any`，如需使用需注释说明

```typescript
// ✅ 正确
const loading = ref<boolean>(false)
const versions = ref<VersionItem[]>([])

interface Props {
    name: string
    version?: string
}

// ❌ 错误
const loading = ref(false)  // 未显式类型
```

### 4. Vue 组件规范

#### 单文件组件结构

```vue

<template>
  <!-- 模板内容 -->
</template>

<script lang="ts" setup>
  // import 语句
  import {ref, computed} from 'vue'

  // 类型定义（ Props/Emits 接口）
  interface Props {
    name: string
  }

  interface Emits {
    (e: 'download', item: VersionItem): void
  }

  // 定义 Props/Emits
  const props = defineProps<Props>()
  const emit = defineEmits<Emits>()

  // 响应式数据
  const loading = ref<boolean>(false)

  // 计算属性
  const displayName = computed(() => props.name.toUpperCase())

  // 方法定义（带注释）
  /**
   * 处理下载
   */
  const handleDownload = (): void => {
    emit('download', item)
  }
</script>

<style scoped>
  /* 样式仅使用 class 选择器，不直接写样式在 template 中 */
</style>
```

#### 组件命名

- 文件名使用 PascalCase（如 `VersionCard.vue`）
- 组件名与文件名保持一致
- Tab 组件以 `Tab` 结尾（如 `NativeTab.vue`）

### 5. CSS/样式规范

#### 样式文件组织

- **CSS 必须独立文件**，位于 `src/common/css/`
- Vue 文件中的 `<style>` 仅用于组件作用域样式（`scoped`）
- **禁止内联样式**（`style="..."`）

#### 响应式设计

- 必须兼容多端，使用响应式断点
- 断点标准：
    - 小屏手机：<= 414px（iPhone SE/mini）
    - 中屏手机：415px - 767px
    - 平板：768px - 1023px
    - 桌面：>= 1024px
    - 大屏：>= 1400px

```css
/* ✅ 正确 - 响应式卡片网格 */
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
}

@media (max-width: 768px) {
    .card-grid {
        grid-template-columns: 1fr;
        gap: 12px;
    }
}
```

#### CSS 变量使用

- 使用预定义的 CSS 变量
- 主要变量：
    - `--primary-color: #4cc9f0`
    - `--primary-hover-color: #4895ef`
    - `--bg-dark: #2d2d4d`
    - `--bg-darker: #25253d`
    - `--border-radius: 10px`

### 6. API 规范

#### 模块组织

- 所有 API 集中在 `src/api/index.ts`
- 按服务类型分区块（`// ==================== Native API ====================`）
- 统一导出接口和工具函数

#### API 函数结构

```typescript
/**
 * 获取 Fabric 版本列表
 * @returns 版本列表
 */
export const fetchFabricVersions = async (): Promise<VersionItem[]> => {
        const response = await fetch(`${API_BASE_URLS.fabric}/v2/versions/`)
        if (!response.ok) {
            throw new Error(`无法加载 Fabric 数据：${response.statusText}`)
        }
        const data: FabricVersionsData = await response.json()
        // ...
        return result
    }
```

### 7. Composables 规范

- 组合式函数放在 `src/composables/`
- 函数名以 `use` 开头
- 返回响应式数据和方法对象

```typescript
/**
 * 使用分页功能
 * @param type 服务器类型
 * @param initialPageSize 初始每页大小
 */
export const usePagination = (type: ServerType, initialPageSize: number = 15) => {
        const pager = ref<Pager>({pageNum: 1, pageSize: initialPageSize, total: 0})

        const getPaginatedData = <T>(data: T[]): T[] => {
            // ...
        }

        return {
            pager,
            getPaginatedData,
            // ...
        }
    }
```

### 8. 类型定义规范

- 所有类型定义在 `src/types/index.ts`
- 使用 `PascalCase` 命名
- 接口使用 `interface`，联合类型使用 `type`

```typescript
// ✅ 正确
export interface VersionItem {
    name: string
    version: string
    date: string
    type: string
    url: string
    nativeDetail?: NativeVersionDetail
}

export type ServerType = 'native' | 'fabric' | 'forge' | 'neoForge'

export type PagerRecord = Record<ServerType, Pager>
```

### 9. 导入规范

- 使用绝对路径 `@/` 导入项目内模块
- 第三方库放在最前面，项目内部导入紧随其后

```typescript
// ✅ 正确
import {ref, computed} from 'vue'
import {NButton, NModal} from 'naive-ui'
import VersionCard from '@/components/VersionCard.vue'
import {usePagination} from '@/composables/usePagination'
import type {ServerType, VersionItem} from '@/types'
```

### 10. 现代语法优先

- 使用最新的 JavaScript/TypeScript 语法
- 无需考虑旧版本兼容性
- 优先使用：
    - 可选链操作符 `?.`
    - 空值合并运算符 `??`
    - 逻辑赋值运算符 `||=` `&&=`
    - 类数组方法（`toSorted`, `toReversed` 等）

---

## 性能优化要求

1. **异步组件**：Tab 组件使用 `defineAsyncComponent` 懒加载
2. **分页加载**：使用 `usePagination` 实现虚拟滚动效果
3. **响应式优化**：使用 `computed` 缓存计算结果
4. **动画性能**：使用 `transform` 和 `opacity` 进行动画

---

## 主题与视觉风格

- **主题**：深色游戏科技风
- **主色调**：霓虹青（#4cc9f0）到紫（#4895ef）渐变
- **背景**：深蓝紫色渐变
- **字体**：Rajdhani（标题）、Segoe UI（正文）
- **特效**：扫描线、粒子背景、发光边框

---

## 构建与部署

### 开发

```bash
bun run dev      # 启动开发服务器
```

### 生产构建

```bash
bun run build    # 构建生产版本（输出到 dist/）
```

### Vite 配置要点

- 使用 `@/` 作为 `src/` 的别名
- 启用 gzip 压缩
- 代码分割：`naive-ui`、`vue-vendor` 单独打包