#!/bin/bash

# MPChat Website 快速部署脚本
# 用于快速部署，跳过大部分检查和确认

set -e

# 颜色输出
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_message() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# 获取环境参数
ENVIRONMENT=${1:-production}

if [ "$ENVIRONMENT" != "production" ] && [ "$ENVIRONMENT" != "preview" ]; then
    print_error "无效环境: $ENVIRONMENT. 使用 'production' 或 'preview'"
    exit 1
fi

print_message "🚀 快速部署到 $ENVIRONMENT 环境..."

# 快速检查
if ! command -v wrangler &> /dev/null; then
    print_error "wrangler 未安装"
    exit 1
fi

# 构建
print_message "📦 构建项目..."
npm run export

# 复制配置文件
print_message "📋 复制配置文件..."
cp _headers _redirects out/ 2>/dev/null || true

# 部署
print_message "🌐 部署中..."
if [ "$ENVIRONMENT" = "preview" ]; then
    wrangler pages deploy out --project-name mpchat-webside --env preview
else
    wrangler pages deploy out --project-name mpchat-webside
fi

print_message "✅ 部署完成！"

# 显示URL
if [ "$ENVIRONMENT" = "production" ]; then
    echo "🔗 https://mpchat-webside.pages.dev"
else
    echo "🔗 https://mpchat-webside-preview.pages.dev"
fi
