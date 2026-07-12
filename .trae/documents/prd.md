## 1. Product Overview
一个现代化的 GitHub 个人主页，展示开发者的技术能力、项目成果和联系方式。面向潜在雇主、开源社区和技术爱好者。

## 2. Core Features

### 2.2 Feature Module
1. **首页**: Hero 区域、个人简介、技术栈、项目展示、联系方式
2. **导航**: 固定顶部导航，平滑滚动到各模块

### 2.3 Page Details
| Page Name | Module Name | Feature description |
|-----------|-------------|---------------------|
| 首页 | Hero Section | 个人头像、姓名、职业标签，动态背景效果 |
| 首页 | About Section | 个人简介、座右铭、技术专长 |
| 首页 | Skills Section | 技术栈展示，带进度条或标签形式 |
| 首页 | Projects Section | 项目卡片列表，展示项目名称、描述、链接 |
| 首页 | Contact Section | 邮箱、GitHub、Gitee、语雀等社交链接 |
| 首页 | Footer | 版权信息、年份 |

## 3. Core Process
用户访问主页 → 浏览 Hero 区域了解基本信息 → 向下滚动查看简介 → 查看技术栈 → 浏览项目 → 获取联系方式

## 4. User Interface Design

### 4.1 Design Style
- **主色调**: 深蓝/科技蓝 (#1e3a5f)，搭配青色点缀 (#00d4ff)
- **辅助色**: 深色背景 (#0f172a)，浅色文字 (#e2e8f0)
- **按钮样式**: 圆角、渐变背景、悬停动效
- **字体**: 现代无衬线字体，标题使用粗体，正文清晰可读
- **布局**: 卡片式布局，充分利用留白
- **图标**: 简洁现代的线性图标

### 4.2 Page Design Overview
| Page Name | Module Name | UI Elements |
|-----------|-------------|-------------|
| 首页 | Hero | 居中布局、渐变背景、悬浮头像、打字机效果 |
| 首页 | About | 两列布局、头像+文字、引用块展示座右铭 |
| 首页 | Skills | 网格布局、技能标签/进度条、彩色图标 |
| 首页 | Projects | 卡片网格、hover 阴影效果、项目链接 |
| 首页 | Contact | 社交图标列表、邮箱展示、联系表单 |

### 4.3 Responsiveness
- 桌面端: 多列网格布局
- 平板端: 两列布局
- 移动端: 单列垂直布局，导航变为汉堡菜单

### 4.4 Visual Effects
- Hero 区域动态背景
- 平滑滚动导航
- 元素入场动画
- 卡片悬停效果
- 打字机文字效果