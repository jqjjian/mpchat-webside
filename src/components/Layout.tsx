'use client'

import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-[#F7F7F2]">
            <style jsx global>{`
                .container {
                    flex-grow: 1;
                    margin: 0 auto;
                    position: relative;
                    width: auto;
                    font-size: 16px;
                }

                @media screen and (min-width: 768px), print {
                    .container {
                        max-width: 1200px;
                    }
                }

                @media screen and (min-width: 1920px) {
                    .container {
                        max-width: 1250px;
                    }
                }

                @media screen and (min-width: 2520px) {
                    .container {
                        max-width: 1432px;
                    }
                }

                @keyframes float-slow {
                    0%,
                    100% {
                        transform: translateY(0px) translateX(0px);
                    }
                    25% {
                        transform: translateY(-8px) translateX(4px);
                    }
                    50% {
                        transform: translateY(-4px) translateX(-6px);
                    }
                    75% {
                        transform: translateY(-12px) translateX(2px);
                    }
                }

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

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fadeInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                /* 动画类 */
                .animate-slide-up {
                    animation: slideInUp 0.8s ease-out forwards;
                }

                .animate-slide-left {
                    animation: slideInLeft 0.8s ease-out forwards;
                }

                .animate-slide-right {
                    animation: slideInRight 0.8s ease-out forwards;
                }

                .animate-fade-scale {
                    animation: fadeInScale 0.8s ease-out forwards;
                }

                /* 初始状态 - 隐藏元素 */
                .animate-on-scroll {
                    opacity: 0;
                    transform: translateY(30px);
                }

                /* 卡片动画延迟 */
                .animate-delay-1 {
                    animation-delay: 0.1s;
                }
                .animate-delay-2 {
                    animation-delay: 0.2s;
                }
                .animate-delay-3 {
                    animation-delay: 0.3s;
                }
                .animate-delay-4 {
                    animation-delay: 0.4s;
                }

                @keyframes float-medium {
                    0%,
                    100% {
                        transform: translateY(0px) translateX(0px);
                    }
                    25% {
                        transform: translateY(-12px) translateX(6px);
                    }
                    50% {
                        transform: translateY(-6px) translateX(-8px);
                    }
                    75% {
                        transform: translateY(-16px) translateX(4px);
                    }
                }

                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }

                .animate-float-medium {
                    animation: float-medium 4s ease-in-out infinite;
                }
            `}</style>

            <Header />

            <main>{children}</main>

            {/* <Footer /> */}
        </div>
    )
}
