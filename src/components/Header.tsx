'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

export default function Header() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isCardDropdownOpen, setIsCardDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const isActive = (path: string) => {
        // 标准化路径，移除尾部斜杠进行比较（除了根路径）
        const normalizePath = (p: string) => {
            if (p === '/') return '/'
            return p.endsWith('/') ? p.slice(0, -1) : p
        }

        const normalizedPathname = normalizePath(pathname)
        const normalizedPath = normalizePath(path)

        return normalizedPathname === normalizedPath
    }

    const getTextClassName = (path: string) => {
        const active = isActive(path)
        return active ? 'text-[#06C55B] font-redotpaybold font-bold' : 'text-gray-600 hover:text-[#06C55B] font-medium'
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
        // 同时关闭下拉菜单状态，以防万一
        setIsCardDropdownOpen(false)
    }

    const toggleCardDropdown = () => {
        setIsCardDropdownOpen(!isCardDropdownOpen)
    }

    const closeCardDropdown = () => {
        setIsCardDropdownOpen(false)
    }

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setIsCardDropdownOpen(true)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsCardDropdownOpen(false)
        }, 150) // 150ms 延迟，给用户足够时间移动到下拉菜单
    }

    // 清理定时器
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    // 添加路由变化监听，确保路由变化时关闭菜单
    useEffect(() => {
        setIsMobileMenuOpen(false)
        setIsCardDropdownOpen(false)
    }, [pathname])

    return (
        <header className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-40px)] max-w-[1700px] h-16 bg-white/95 backdrop-blur-md rounded-[35px] border border-white/20 shadow-lg flex items-center md:w-[calc(100%-40px)] md:h-14 md:rounded-[28px]">
            <nav className=" flex justify-between items-center w-full h-full">
                <div className="flex items-center gap-3 flex-shrink-0 pl-4">
                    <div className="w-10 h-10 relative">
                        <Image src="/Logo.svg" alt="MPChat Logo" fill className="object-contain" />
                    </div>
                    <span className="text-2xl font-bold text-gray-800 md:text-xl">MPChat</span>
                </div>
                <div className="hidden md:flex items-center gap-10 flex-shrink-0 pr-12">
                    <Link href="/" className="relative pb-2 transition-colors">
                        {/* 隐藏的粗体文字用于占位 */}
                        <span className="font-bold text-transparent select-none">Home</span>
                        {/* 实际显示的文字 */}
                        <span className={`absolute inset-0 ${getTextClassName('/')} transition-colors`}>Home</span>
                        {isActive('/') && (
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[40px] h-[2px] bg-[#06C55B]"></div>
                        )}
                    </Link>

                    {/* MP Card Dropdown */}
                    <div
                        className="relative pr-10"
                        ref={dropdownRef}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button
                            ref={buttonRef}
                            className={`relative pb-2 transition-colors flex items-center gap-1 ${getTextClassName('/card')}`}
                            onClick={toggleCardDropdown}
                        >
                            {/* 隐藏的粗体文字用于占位 */}
                            <span className="font-bold text-transparent select-none">MP Card</span>
                            {/* 实际显示的文字 */}
                            <span className={`absolute inset-0 ${getTextClassName('/card')} transition-colors`}>
                                MP Card
                            </span>
                            {/* 下拉箭头 */}
                            {/* <svg
                                className={`absolute -right-4 w-4 h-4 ml-4 mt-2 transition-transform ${isCardDropdownOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg> */}
                            {(isActive('/card/personal') || isActive('/card/corporate')) && (
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[40px] h-[2px] bg-[#06C55B]"></div>
                            )}
                        </button>

                        {/* Dropdown Menu */}
                        {isCardDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-md rounded-[15px] border border-white/20 shadow-lg overflow-hidden min-w-[140px]">
                                <div className="py-2">
                                    <Link
                                        href="/card/personal"
                                        className={`block px-4 py-2 text-sm transition-colors hover:bg-gray-50 ${getTextClassName('/card/personal')}`}
                                        onClick={closeCardDropdown}
                                    >
                                        Personal
                                    </Link>
                                    <Link
                                        href="/card/corporate"
                                        className={`block px-4 py-2 text-sm transition-colors hover:bg-gray-50 ${getTextClassName('/card/corporate')}`}
                                        onClick={closeCardDropdown}
                                    >
                                        Business
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* <a href="#developers" className="relative pb-2 transition-colors">
                        <span className="font-bold text-transparent select-none">Developers</span>
                        <span className="absolute inset-0 text-gray-600 hover:text-[#06C55B] font-medium transition-colors">
                            Developers
                        </span>
                    </a> */}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden pr-8">
                    <button
                        className="text-gray-600 hover:text-[#06C55B] transition-colors"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-[20px] border border-white/20 shadow-lg overflow-hidden">
                    <div className="py-4 px-6 space-y-4">
                        <Link
                            href="/"
                            className={`block py-3 px-4 rounded-lg transition-colors ${getTextClassName('/')}`}
                            onClick={() => {
                                closeMobileMenu()
                                // 确保立即关闭
                                setTimeout(() => setIsMobileMenuOpen(false), 0)
                            }}
                        >
                            Home
                        </Link>

                        {/* Mobile MP Card Menu */}
                        <div className="space-y-2">
                            <div className={`py-3 px-4 rounded-lg transition-colors ${getTextClassName('/card')}`}>
                                MP Card
                            </div>
                            <div className="ml-4 space-y-2">
                                <Link
                                    href="/card/personal"
                                    className={`block py-2 px-4 rounded-lg transition-colors text-sm ${getTextClassName('/card/personal')}`}
                                    onClick={() => {
                                        closeMobileMenu()
                                        // 确保立即关闭
                                        setTimeout(() => setIsMobileMenuOpen(false), 0)
                                    }}
                                >
                                    Personal
                                </Link>
                                <Link
                                    href="/card/corporate"
                                    className={`block py-2 px-4 rounded-lg transition-colors text-sm ${getTextClassName('/card/corporate')}`}
                                    onClick={() => {
                                        closeMobileMenu()
                                        // 确保立即关闭
                                        setTimeout(() => setIsMobileMenuOpen(false), 0)
                                    }}
                                >
                                    Business
                                </Link>
                            </div>
                        </div>

                        {/* <a 
                            href="#developers" 
                            className="block py-3 px-4 rounded-lg text-gray-600 hover:text-[#06C55B] hover:bg-gray-50 transition-colors"
                            onClick={closeMobileMenu}
                        >
                            Developers
                        </a> */}
                    </div>
                </div>
            )}
        </header>
    )
}
