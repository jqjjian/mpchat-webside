#!/bin/bash

# MPChat Website 开发脚本
# 提供多种开发模式

set -e

# 颜色输出
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
PURPLE='\033[0;35m'
NC='\033[0m'

print_message() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_header() {
    echo -e "${PURPLE}================================${NC}"
    echo -e "${PURPLE}  MPChat Website 开发工具${NC}"
    echo -e "${PURPLE}================================${NC}"
}

show_help() {
    echo "MPChat Website 开发脚本"
    echo ""
    echo "使用方法:"
    echo "  $0 [command]"
    echo ""
    echo "命令:"
    echo "  dev          启动开发服务器 (默认)"
    echo "  build        构建项目"
    echo "  preview      构建并本地预览"
    echo "  clean        清理构建文件"
    echo "  install      安装依赖"
    echo "  lint         代码检查"
    echo "  help         显示帮助"
    echo ""
    echo "示例:"
    echo "  $0 dev"
    echo "  $0 build"
    echo "  $0 preview"
}

# 启动开发服务器
start_dev() {
    print_step "启动开发服务器..."
    npm run dev
}

# 构建项目
build_project() {
    print_step "构建项目..."
    npm run export
    print_message "构建完成，输出目录: out/"
}

# 本地预览
preview_build() {
    print_step "构建项目..."
    npm run export
    
    print_step "复制配置文件..."
    cp _headers _redirects out/ 2>/dev/null || true
    
    print_step "启动本地预览服务器..."
    print_message "预览地址: http://localhost:3000"
    npm run pages:dev
}

# 清理构建文件
clean_build() {
    print_step "清理构建文件..."
    rm -rf out .next
    print_message "清理完成"
}

# 安装依赖
install_deps() {
    print_step "安装依赖..."
    npm install
    print_message "依赖安装完成"
}

# 代码检查
lint_code() {
    print_step "执行代码检查..."
    npm run lint
    print_message "代码检查完成"
}

# 主函数
main() {
    local command=${1:-dev}
    
    print_header
    
    case $command in
        dev|development)
            start_dev
            ;;
        build)
            build_project
            ;;
        preview)
            preview_build
            ;;
        clean)
            clean_build
            ;;
        install)
            install_deps
            ;;
        lint)
            lint_code
            ;;
        help|-h|--help)
            show_help
            ;;
        *)
            print_warning "未知命令: $command"
            show_help
            exit 1
            ;;
    esac
}

main "$@"
