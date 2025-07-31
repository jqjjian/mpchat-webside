# MPChat Card 页面开发说明

## 项目结构优化

### 公共组件提取
已将原有的导航和页脚部分提取为独立的公共组件：

1. **Header 组件** (`src/components/Header.tsx`)
   - 包含导航栏
   - 支持响应式设计
   - 包含路由链接到首页和Card页面

2. **Footer 组件** (`src/components/Footer.tsx`)
   - 包含页脚内容
   - 包含社交媒体链接
   - 包含动画效果

3. **Layout 组件** (`src/components/Layout.tsx`)
   - 组合Header和Footer
   - 包含全局样式
   - 为所有页面提供统一布局

### 页面结构

#### 首页 (`src/app/page.tsx`)
- 已重构使用Layout组件
- 移除了重复的header和footer代码
- 保留了页面特有的功能和样式

#### Card页面 (`src/app/card/page.tsx`)
- 新创建的独立路由页面
- 使用Layout组件保持一致的导航和页脚
- 实现了设计图中的主要部分：

### Card页面实现的功能

1. **Hero Section**
   - 主标题："The Card For A Borderless World"
   - 副标题描述
   - 导航pills（Virtual/Corporate）
   - 卡片视觉效果（使用占位符）

2. **Why MPChat Card Section**
   - 三个特色卡片：
     - For Online Shoppers
     - For Subscription Lovers  
     - For Digital Marketers
   - 使用图标占位符

3. **Designed for Your Every Need Section**
   - 四个用例展示：
     - Online Shopping
     - Subscriptions
     - Ad Payments
     - Travel
   - 2x2网格布局

4. **Features Deep Dive Section**
   - 四个核心功能：
     - Instant Issuing
     - Spending Controls
     - Multi-Card Management
     - Top-Tier Security
   - 卡片式布局

### 动画效果
- 滚动触发动画
- 渐入效果
- 延迟动画
- 悬停效果

### 待完成的工作

1. **图片资源**
   - 需要添加实际的卡片图片
   - 需要添加各个section的背景图
   - 需要添加功能图标

2. **第二部分内容**
   - 根据设计图添加更多内容部分

3. **响应式优化**
   - 移动端适配
   - 平板端适配

### 技术栈
- Next.js 15
- TypeScript
- Tailwind CSS
- React Hooks

### 运行项目
```bash
npm run dev
```

访问：
- 首页：http://localhost:3000
- Card页面：http://localhost:3000/card

### 导航
- Header中的"MP Card"链接可以导航到Card页面
- "Home"链接返回首页
