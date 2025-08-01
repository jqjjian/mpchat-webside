'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()

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
        return active ? 'text-[#06C55B] font-bold' : 'text-gray-600 hover:text-[#06C55B] font-medium'
    }

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
                    <Link href="/card/personal" className="relative pb-2 transition-colors">
                        {/* 隐藏的粗体文字用于占位 */}
                        <span className="font-bold text-transparent select-none">MP Card</span>
                        {/* 实际显示的文字 */}
                        <span className={`absolute inset-0 ${getTextClassName('/card')} transition-colors`}>
                            MP Card
                        </span>
                        {(isActive('/card/personal') || isActive('/card/corporate')) && (
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[40px] h-[2px] bg-[#06C55B]"></div>
                        )}
                    </Link>
                    {/* <a href="#developers" className="relative pb-2 transition-colors">
                        <span className="font-bold text-transparent select-none">Developers</span>
                        <span className="absolute inset-0 text-gray-600 hover:text-[#06C55B] font-medium transition-colors">
                            Developers
                        </span>
                    </a> */}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden pr-8">
                    <button className="text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    )
}
