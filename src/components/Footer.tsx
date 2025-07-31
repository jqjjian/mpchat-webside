'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.getAttribute('data-section')
                        if (sectionId) {
                            setVisibleSections(prev => new Set([...prev, sectionId]))
                        }
                    }
                })
            },
            { threshold: 0.1, rootMargin: '50px' }
        )

        // 观察所有需要动画的元素
        const sections = document.querySelectorAll('[data-section="footer"]')
        sections.forEach(section => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    return (
        <footer className="relative min-h-[500px] overflow-hidden" data-section="footer">
            {/* Base gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F7F7F2] via-[#F7F7F2] to-[#E8F5E8]"></div>

            {/* Footer background image with natural blending */}
            <div
                className="absolute inset-0 bg-[url('/foot_bg.webp')] bg-cover bg-center bg-no-repeat opacity-80"
                style={{
                    backgroundBlendMode: 'soft-light',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center bottom'
                }}
            ></div>

            {/* Gradient overlay for seamless transition */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#F7F7F2] opacity-60"></div>

            {/* Footer Content */}
            <div className="relative z-10 flex items-center justify-center min-h-[500px] px-8">
                <div className="w-full max-w-[1700px] mx-auto text-center">
                    <h2
                        className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-12 pt-[200px] pb-[100px] animate-on-scroll ${
                            visibleSections.has('footer') ? 'animate-slide-up' : ''
                        }`}
                    >
                        Seamless Chat, Borderless Pay.
                    </h2>

                    <div
                        className={`flex flex-col sm:flex-row gap-4 justify-center mb-32 pb-[200px] animate-on-scroll animate-delay-1 ${
                            visibleSections.has('footer') ? 'animate-slide-up' : ''
                        }`}
                    >
                        <button className="px-8 py-4 bg-[#06C55B] text-white font-semibold rounded-full hover:bg-[#05B052] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
                            For Personal
                        </button>
                        <button className="px-8 py-4 bg-[#06C55B] text-white font-semibold rounded-full hover:bg-[#05B052] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
                            For Business
                        </button>
                    </div>

                    {/* Footer Bottom */}
                    <div
                        className={`flex flex-col md:flex-row justify-between items-center gap-4 border-t-1 border-t-1-gray-200 py-5 animate-on-scroll animate-delay-2 ${
                            visibleSections.has('footer') ? 'animate-slide-up' : ''
                        }`}
                    >
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-xl font-bold text-gray-800 mb-1">MPCard</span>
                            <span className="text-sm text-gray-500">© 2025 MPCard - All Rights Reserved</span>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#06C55B] transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#06C55B] transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#06C55B] transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#06C55B] transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                /* 动画样式 */
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* 动画类 */
                .animate-slide-up {
                    animation: slideInUp 0.8s ease-out forwards;
                }

                /* 初始状态 - 隐藏元素 */
                .animate-on-scroll {
                    opacity: 0;
                    transform: translateY(30px);
                }

                /* 卡片动画延迟 */
                .animate-delay-1 { animation-delay: 0.1s; }
                .animate-delay-2 { animation-delay: 0.2s; }
            `}</style>
        </footer>
    )
}
