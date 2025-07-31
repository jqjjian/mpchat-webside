'use client'

import Image from 'next/image'

export default function Header() {
    return (
        <header className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-40px)] max-w-[1700px] h-16 bg-white/95 backdrop-blur-md rounded-[35px] border border-white/20 shadow-lg flex items-center md:w-[calc(100%-40px)] md:h-14 md:rounded-[28px]">
            <nav className=" flex justify-between items-center w-full h-full">
                <div className="flex items-center gap-3 flex-shrink-0 pl-4">
                    <div className="w-10 h-10 relative">
                        <Image src="/Logo.svg" alt="MPChat Logo" layout="fill" />
                    </div>
                    <span className="text-2xl font-bold text-gray-800 md:text-xl">MPChat</span>
                </div>
                <div className="hidden md:flex items-center gap-10 flex-shrink-0 pr-12">
                    <a
                        href="#home"
                        className="text-gray-600 hover:text-[#06C55B] transition-colors font-medium"
                    >
                        Home
                    </a>
                    <a
                        href="#features"
                        className="text-gray-600 hover:text-[#06C55B] transition-colors font-medium"
                    >
                        Features
                    </a>
                    <a
                        href="#about"
                        className="text-gray-600 hover:text-[#06C55B] transition-colors font-medium"
                    >
                        About
                    </a>
                    <a
                        href="#contact"
                        className="text-gray-600 hover:text-[#06C55B] transition-colors font-medium"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
