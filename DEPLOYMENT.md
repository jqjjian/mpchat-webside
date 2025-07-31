# MPChat Website 部署指南

本项目配置为使用 Cloudflare Pages 进行部署。

## 前置要求

1. **安装 Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **登录 Cloudflare**
   ```bash
   wrangler login
   ```

3. **安装项目依赖**
   ```bash
   npm install
   ```

## 本地开发

```bash
# 开发模式
npm run dev

# 本地预览构建结果
npm run export
npm run pages:dev
```

## 部署方式

### 方式一：使用 npm 脚本

```bash
# 部署到生产环境
npm run deploy

# 部署到预览环境
npm run deploy:preview
```

### 方式二：使用部署脚本

```bash
# 给脚本执行权限
chmod +x scripts/deploy.sh

# 部署到生产环境
./scripts/deploy.sh production

# 部署到预览环境
./scripts/deploy.sh preview
```

### 方式三：手动部署

```bash
# 构建项目
npm run export

# 部署
wrangler pages deploy out
```

## 配置说明

### wrangler.toml
- 项目名称和环境配置
- 构建输出目录设置

### next.config.js
- 启用静态导出 (`output: 'export'`)
- 禁用图片优化 (`images.unoptimized: true`)
- 添加尾部斜杠 (`trailingSlash: true`)

### _headers
- 静态资源缓存策略
- 安全头配置

### _redirects
- SPA 路由回退配置
- 重定向规则

## 环境变量

复制 `.env.example` 为 `.env.local` 并填入相应值：

```bash
cp .env.example .env.local
```

## CI/CD 配置

项目包含 GitHub Actions 工作流，需要在 GitHub 仓库设置中添加以下 Secrets：

- `CLOUDFLARE_API_TOKEN`: Cloudflare API Token
- `CLOUDFLARE_ACCOUNT_ID`: Cloudflare Account ID

## 域名配置

1. 在 Cloudflare Pages 控制台中配置自定义域名
2. 更新 DNS 记录指向 Cloudflare Pages
3. 启用 HTTPS

## 故障排除

### 构建失败
- 检查 Node.js 版本 (推荐 18+)
- 清除缓存: `rm -rf .next out node_modules && npm install`

### 部署失败
- 检查 wrangler 登录状态: `wrangler whoami`
- 检查项目权限和配置

### 路由问题
- 确保 `_redirects` 文件正确配置
- 检查 Next.js 路由配置

## 有用的命令

```bash
# 检查 wrangler 状态
wrangler whoami

# 查看项目列表
wrangler pages project list

# 查看部署历史
wrangler pages deployment list

# 删除部署
wrangler pages deployment delete <deployment-id>
```
