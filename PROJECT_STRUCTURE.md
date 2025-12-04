# 项目结构文档 / Project Structure

## 📁 目录结构概览 / Directory Overview

```
vinono.github.io/
├── 📂 app/                      # Next.js 15 App Router 应用目录
│   ├── 📂 blog/                 # 博客相关页面
│   │   ├── BlogList.tsx         # 博客列表组件
│   │   ├── page.tsx             # 博客首页
│   │   └── [slug]/              # 动态路由 - 单篇博客文章
│   │       └── page.tsx         # 博客文章详情页
│   ├── 📂 gallery/              # 图库页面
│   │   └── page.tsx             # 图库展示页
│   ├── 📂 components/           # App 级别组件
│   │   └── i18n-provider.tsx   # 国际化提供者
│   ├── globals.css              # 全局样式
│   ├── layout.tsx               # 根布局组件
│   └── page.tsx                 # 首页
│
├── 📂 components/               # 可复用 React 组件
│   ├── Footer.tsx               # 页脚组件
│   ├── Hero.tsx                 # 首页英雄区组件
│   ├── LanguageSwitcher.tsx     # 语言切换器
│   ├── Nav.tsx                  # 导航栏组件
│   ├── PhotoGrid.tsx            # 照片网格组件
│   ├── PostCard.tsx             # 博客卡片组件
│   ├── SearchBar.tsx            # 搜索栏组件
│   ├── ThemeProvider.tsx        # 主题提供者
│   ├── ThemeSwitcher.tsx        # 主题切换器
│   └── UnifiedToggle.tsx        # 统一切换组件
│
├── 📂 content/                  # 内容文件
│   └── 📂 posts/                # Markdown 博客文章
│       └── first-post.md        # 示例文章
│
├── 📂 lib/                      # 工具函数和库
│   ├── blog.ts                  # 博客相关工具函数
│   ├── cloudinary-loader.ts     # Cloudinary 图片加载器
│   └── i18n.ts                  # 国际化配置
│
├── 📂 public/                   # 静态资源
│   ├── 📂 locales/              # 国际化翻译文件
│   │   ├── 📂 en/               # 英文翻译
│   │   └── 📂 zh/               # 中文翻译
│   ├── manifest.json            # PWA 清单文件
│   ├── sw.js                    # Service Worker
│   └── workbox-f1770938.js      # Workbox 库
│
├── 📂 .github/                  # GitHub 配置
├── 📂 .next/                    # Next.js 构建输出 (自动生成)
├── 📂 .vscode/                  # VS Code 配置
├── 📂 node_modules/             # 依赖包 (自动生成)
├── 📂 out/                      # 静态导出输出 (自动生成)
│
├── .gitignore                   # Git 忽略文件
├── .prettierrc                  # Prettier 配置
├── i18n.js                      # i18n 配置文件
├── next-env.d.ts                # Next.js TypeScript 声明
├── next.config.js               # Next.js 配置
├── package.json                 # 项目依赖和脚本
├── pnpm-lock.yaml               # pnpm 锁文件
├── postcss.config.js            # PostCSS 配置
├── tailwind.config.js           # Tailwind CSS 配置
├── tsconfig.json                # TypeScript 配置
└── README.md                    # 项目说明文档
```

## 🔧 技术栈 / Tech Stack

### 核心框架 / Core Framework
- **Next.js 15** - React 框架，使用 App Router
- **React 19** - UI 库
- **TypeScript** - 类型安全

### 样式 / Styling
- **Tailwind CSS 4** - 实用优先的 CSS 框架
- **PostCSS** - CSS 处理工具

### 功能特性 / Features
- **i18next** - 国际化支持 (中文/英文)
- **next-themes** - 主题切换 (深色/浅色模式)
- **gray-matter** - Markdown 文件解析
- **@ducanh2912/next-pwa** - PWA 支持

### 开发工具 / Development Tools
- **ESLint** - 代码检查
- **Prettier** - 代码格式化
- **pnpm** - 包管理器

## 📝 关键文件说明 / Key Files Description

### 配置文件 / Configuration Files

| 文件 | 用途 |
|------|------|
| `next.config.js` | Next.js 配置，包括静态导出、图片优化等 |
| `tailwind.config.js` | Tailwind CSS 自定义配置 |
| `tsconfig.json` | TypeScript 编译选项 |
| `i18n.js` | 国际化语言配置 |
| `.prettierrc` | 代码格式化规则 |

### 核心应用文件 / Core Application Files

| 文件 | 用途 |
|------|------|
| `app/layout.tsx` | 根布局，包含全局导航和页脚 |
| `app/page.tsx` | 首页 |
| `app/globals.css` | 全局样式和 Tailwind 指令 |
| `lib/blog.ts` | 博客文章读取和解析逻辑 |
| `lib/i18n.ts` | i18n 客户端配置 |

## 🎯 组件分类 / Component Categories

### 布局组件 / Layout Components
- `Nav.tsx` - 顶部导航栏
- `Footer.tsx` - 页脚，包含社交链接
- `Hero.tsx` - 首页英雄区

### 功能组件 / Functional Components
- `LanguageSwitcher.tsx` - 语言切换 (中文/English)
- `ThemeSwitcher.tsx` - 主题切换 (深色/浅色)
- `UnifiedToggle.tsx` - 统一的切换控制
- `SearchBar.tsx` - 搜索功能

### 内容组件 / Content Components
- `PostCard.tsx` - 博客文章卡片
- `PhotoGrid.tsx` - 图片网格展示
- `BlogList.tsx` - 博客列表

### 提供者组件 / Provider Components
- `ThemeProvider.tsx` - 主题上下文提供者
- `i18n-provider.tsx` - 国际化提供者

## 🚀 脚本命令 / Scripts

```bash
# 开发模式 (使用 Turbopack)
npm run dev
npm run dev:turbo

# 构建生产版本
npm build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

## 📄 内容管理 / Content Management

### 博客文章 / Blog Posts
- 位置: `content/posts/`
- 格式: Markdown (`.md`)
- 前置数据 (Frontmatter):
  ```yaml
  ---
  title: '文章标题'
  date: '2025-01-01'
  excerpt: '文章摘要'
  ---
  ```

### 国际化翻译 / i18n Translations
- 位置: `public/locales/{lang}/`
- 支持语言: `en` (英文), `zh` (中文)
- 格式: JSON

## 🌐 路由结构 / Routing Structure

| 路由 | 页面 | 文件 |
|------|------|------|
| `/` | 首页 | `app/page.tsx` |
| `/blog` | 博客列表 | `app/blog/page.tsx` |
| `/blog/[slug]` | 博客文章详情 | `app/blog/[slug]/page.tsx` |
| `/gallery` | 图库 | `app/gallery/page.tsx` |

## 🔄 部署流程 / Deployment

- **平台**: GitHub Pages
- **触发**: 推送到 `main` 分支
- **构建**: 静态导出 (`next build` + `output: 'export'`)
- **输出**: `out/` 目录

## 📦 依赖关系图 / Dependency Graph

```mermaid
graph TD
    A[Next.js 15] --> B[React 19]
    A --> C[TypeScript]
    A --> D[Tailwind CSS 4]
    A --> E[i18next]
    A --> F[next-themes]
    A --> G[next-pwa]
    
    H[content/posts/*.md] --> I[lib/blog.ts]
    I --> J[app/blog/page.tsx]
    I --> K[app/blog/[slug]/page.tsx]
    
    L[public/locales/] --> M[lib/i18n.ts]
    M --> N[components/LanguageSwitcher.tsx]
```

## 🎨 设计系统 / Design System

### 主题 / Themes
- 浅色模式 (Light Mode)
- 深色模式 (Dark Mode)
- 自动切换支持

### 响应式断点 / Responsive Breakpoints
使用 Tailwind CSS 默认断点:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 📊 项目统计 / Project Statistics

- **组件数量**: 10+ 个可复用组件
- **页面数量**: 4 个主要页面
- **支持语言**: 2 种 (中文/英文)
- **主题**: 2 种 (深色/浅色)

## 🔍 建议的改进方向 / Suggested Improvements

### 1. 目录结构优化
- [ ] 考虑将 `app/blog/BlogList.tsx` 移至 `components/` 目录
- [ ] 创建 `types/` 目录存放 TypeScript 类型定义
- [ ] 创建 `hooks/` 目录存放自定义 React Hooks
- [ ] 创建 `utils/` 或 `helpers/` 目录存放通用工具函数

### 2. 内容组织
- [ ] 在 `content/` 下创建更多分类目录 (如 `content/pages/`, `content/projects/`)
- [ ] 添加图片资源管理目录 (如 `public/images/`)

### 3. 配置集中化
- [ ] 创建 `config/` 目录存放应用配置
- [ ] 将站点元数据集中到配置文件

### 4. 测试
- [ ] 添加 `__tests__/` 目录
- [ ] 配置测试框架 (如 Jest, Vitest)

### 5. 文档
- [ ] 添加组件文档 (Storybook 或 MDX)
- [ ] 创建贡献指南 (CONTRIBUTING.md)
- [ ] 添加变更日志 (CHANGELOG.md)

---

**最后更新**: 2025-11-29  
**项目版本**: 1.0.0
