#!/bin/bash

# MPChat Website 部署脚本
# 使用方法: ./scripts/deploy.sh [preview|production] [options]
# 选项:
#   --skip-build    跳过构建步骤
#   --skip-install  跳过依赖安装
#   --force         强制部署（跳过确认）
#   --help          显示帮助信息

set -e

# 项目配置
PROJECT_NAME="mpchat-webside"
BUILD_DIR="out"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# 如果脚本在项目根目录，则PROJECT_ROOT就是当前目录
# 如果脚本在scripts目录下，则PROJECT_ROOT是上级目录
if [[ "$SCRIPT_DIR" == *"/scripts" ]]; then
    PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
else
    PROJECT_ROOT="$SCRIPT_DIR"
fi

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# 打印带颜色的消息
print_message() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_success() {
    echo -e "${CYAN}[SUCCESS]${NC} $1"
}

print_step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

print_header() {
    echo -e "${PURPLE}================================${NC}"
    echo -e "${PURPLE}  MPChat Website 部署脚本${NC}"
    echo -e "${PURPLE}================================${NC}"
}

# 显示帮助信息
show_help() {
    echo "MPChat Website 部署脚本"
    echo ""
    echo "使用方法:"
    echo "  $0 [environment] [options]"
    echo ""
    echo "环境:"
    echo "  production    部署到生产环境 (默认)"
    echo "  preview       部署到预览环境"
    echo ""
    echo "选项:"
    echo "  --skip-build     跳过构建步骤"
    echo "  --skip-install   跳过依赖安装"
    echo "  --force          强制部署（跳过确认）"
    echo "  --help           显示此帮助信息"
    echo ""
    echo "示例:"
    echo "  $0 production"
    echo "  $0 preview --skip-install"
    echo "  $0 production --force --skip-build"
}

# 解析参数
ENVIRONMENT="production"
SKIP_BUILD=false
SKIP_INSTALL=false
FORCE_DEPLOY=false

for arg in "$@"; do
    case $arg in
        production|preview)
            ENVIRONMENT="$arg"
            ;;
        --skip-build)
            SKIP_BUILD=true
            ;;
        --skip-install)
            SKIP_INSTALL=true
            ;;
        --force)
            FORCE_DEPLOY=true
            ;;
        --help|-h)
            show_help
            exit 0
            ;;
        *)
            print_error "未知参数: $arg"
            show_help
            exit 1
            ;;
    esac
done

# 切换到项目根目录
cd "$PROJECT_ROOT"

print_header
print_message "开始部署到 $ENVIRONMENT 环境..."
print_message "脚本路径: $SCRIPT_DIR"
print_message "项目路径: $PROJECT_ROOT"

# 验证项目路径是否正确
if [[ ! -f "$PROJECT_ROOT/package.json" ]]; then
    print_error "在项目路径中找不到 package.json 文件"
    print_error "请确认脚本在正确的项目目录中运行"
    print_error "当前检查路径: $PROJECT_ROOT/package.json"
    exit 1
fi

# 检查必要的工具
check_dependencies() {
    print_step "检查依赖工具..."

    if ! command -v node &> /dev/null; then
        print_error "Node.js 未安装。请访问 https://nodejs.org 安装"
        exit 1
    fi

    if ! command -v npm &> /dev/null; then
        print_error "npm 未安装。"
        exit 1
    fi

    if ! command -v wrangler &> /dev/null; then
        print_error "wrangler 未安装。请运行: npm install -g wrangler"
        exit 1
    fi

    # 检查是否已登录 Cloudflare
    if ! wrangler whoami &> /dev/null; then
        print_error "未登录 Cloudflare。请运行: wrangler login"
        exit 1
    fi

    print_success "所有依赖工具检查通过"
}

# 安装项目依赖
install_dependencies() {
    if [ "$SKIP_INSTALL" = true ]; then
        print_warning "跳过依赖安装"
        return
    fi

    print_step "安装项目依赖..."
    if [ -f "package-lock.json" ]; then
        # 检查 package.json 和 package-lock.json 是否同步
        if ! npm ci --dry-run >/dev/null 2>&1; then
            print_message "检测到 package.json 和 package-lock.json 不同步，正在更新锁文件..."
            npm install
        else
            npm ci
        fi
    else
        npm install
    fi

    if [[ $? -ne 0 ]]; then
        print_error "依赖安装失败"
        exit 1
    fi

    print_success "依赖安装完成"
}

# 构建项目
build_project() {
    if [ "$SKIP_BUILD" = true ]; then
        print_warning "跳过构建步骤"
        if [ ! -d "$BUILD_DIR" ]; then
            print_error "跳过构建但未找到 $BUILD_DIR 目录，请先构建项目"
            exit 1
        fi
        return
    fi

    print_step "构建项目..."

    # 清理旧的构建文件
    if [ -d "$BUILD_DIR" ]; then
        print_message "清理旧的构建文件..."
        rm -rf "$BUILD_DIR"
    fi

    # 执行构建
    npm run export

    # 检查构建输出
    if [ ! -d "$BUILD_DIR" ]; then
        print_error "构建失败，未找到 $BUILD_DIR 目录"
        exit 1
    fi

    # 显示构建统计
    local file_count=$(find "$BUILD_DIR" -type f | wc -l)
    local dir_size=$(du -sh "$BUILD_DIR" | cut -f1)
    print_success "构建完成 - 文件数: $file_count, 大小: $dir_size"
}

# 准备部署文件
prepare_deployment() {
    print_step "准备部署文件..."

    # 复制配置文件到输出目录
    local config_files=("_headers" "_redirects")
    for file in "${config_files[@]}"; do
        if [ -f "$file" ]; then
            cp "$file" "$BUILD_DIR/"
            print_message "复制 $file 到构建目录"
        else
            print_warning "$file 文件不存在，跳过"
        fi
    done

    print_success "部署文件准备完成"
}

# 确认部署
confirm_deployment() {
    if [ "$FORCE_DEPLOY" = true ]; then
        return
    fi

    echo ""
    print_message "部署信息确认:"
    echo "  环境: $ENVIRONMENT"
    echo "  项目: $PROJECT_NAME"
    echo "  构建目录: $BUILD_DIR"
    echo ""

    read -p "确认部署? (y/N): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_warning "部署已取消"
        exit 0
    fi
}

# 执行部署
deploy_to_cloudflare() {
    print_step "部署到 Cloudflare Pages..."

    local deploy_cmd="wrangler pages deploy $BUILD_DIR --project-name $PROJECT_NAME"

    if [ "$ENVIRONMENT" = "preview" ]; then
        deploy_cmd="$deploy_cmd --env preview"
    fi

    print_message "执行命令: $deploy_cmd"

    # 执行部署并捕获输出
    local deploy_output
    if deploy_output=$($deploy_cmd 2>&1); then
        print_success "部署成功！"

        # 提取部署URL
        local deploy_url=$(echo "$deploy_output" | grep -o 'https://[^[:space:]]*\.pages\.dev' | head -1)
        if [ -n "$deploy_url" ]; then
            print_success "部署URL: $deploy_url"
        fi

        return 0
    else
        print_error "部署失败"
        echo "$deploy_output"
        return 1
    fi
}

# 显示部署后信息
show_deployment_info() {
    echo ""
    print_header
    print_success "🎉 部署完成！"
    echo ""

    if [ "$ENVIRONMENT" = "production" ]; then
        echo "🌐 生产环境:"
        echo "   URL: https://mpchats.com"
        echo "   管理: https://dash.cloudflare.com/pages"
    else
        echo "🔍 预览环境:"
        echo "   URL: https://$PROJECT_NAME-preview.pages.dev"
        echo "   管理: https://dash.cloudflare.com/pages"
    fi

    echo ""
    echo "📊 有用的命令:"
    echo "   查看部署历史: wrangler pages deployment list --project-name $PROJECT_NAME"
    echo "   查看项目信息: wrangler pages project list"
    echo "   本地预览: npm run pages:dev"
    echo ""
}

# 主执行流程
main() {
    check_dependencies
    install_dependencies
    build_project
    prepare_deployment
    confirm_deployment

    if deploy_to_cloudflare; then
        show_deployment_info
    else
        print_error "部署失败，请检查错误信息"
        exit 1
    fi
}

# 执行主函数
main
