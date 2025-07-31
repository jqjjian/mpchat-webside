'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
    const featureMatrixRef = useRef<HTMLDivElement>(null)
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.getAttribute('data-section')
                        if (sectionId) {
                            setVisibleSections(prev => new Set([...prev, sectionId]))
                        }

                        // 保留原有的 feature-card 动画逻辑
                        const cards = entry.target.querySelectorAll('.feature-card')
                        cards.forEach(card => {
                            card.classList.add('animate-in')
                        })
                    }
                })
            },
            { threshold: 0.1, rootMargin: '50px' }
        )

        // 观察所有需要动画的元素
        const sections = document.querySelectorAll('[data-section]')
        sections.forEach(section => observer.observe(section))

        if (featureMatrixRef.current) {
            observer.observe(featureMatrixRef.current)
        }

        return () => observer.disconnect()
    }, [])
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
                    33% {
                        transform: translateY(-6px) translateX(-4px);
                    }
                    66% {
                        transform: translateY(-10px) translateX(5px);
                    }
                }

                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }

                .animate-float-medium {
                    animation: float-medium 4s ease-in-out infinite;
                }

                @keyframes slideInFromRight {
                    0% {
                        transform: translateX(100px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                .feature-card {
                    opacity: 0;
                    transform: translateX(100px);
                    transition: all 0.6s ease-out;
                }

                .feature-card.animate-in {
                    opacity: 1;
                    transform: translateX(0);
                }

                .feature-card:nth-child(1).animate-in {
                    transition-delay: 0.1s;
                }

                .feature-card:nth-child(2).animate-in {
                    transition-delay: 0.2s;
                }

                .feature-card:nth-child(3).animate-in {
                    transition-delay: 0.3s;
                }

                .feature-card:nth-child(4).animate-in {
                    transition-delay: 0.4s;
                }
            `}</style>
            {/* Header */}
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
                            className="text-[#06C55B] font-bold text-base py-1 border-b-3 border-[#06C55B] transition-all duration-300 whitespace-nowrap"
                        >
                            Home
                        </a>
                        <a
                            href="#mpcard"
                            className="text-gray-600 font-medium text-base py-2 border-b-3 border-transparent hover:text-[#06C55B] transition-all duration-300 whitespace-nowrap"
                        >
                            MP Card
                        </a>
                        <a
                            href="#developers"
                            className="text-gray-600 font-medium text-base py-2 border-b-3 border-transparent hover:text-[#06C55B] transition-all duration-300 whitespace-nowrap"
                        >
                            Developers
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden pr-12">
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

            <main>
                {/* Hero Section */}
                <section className="relative min-h-[900px] h-[70vh] overflow-hidden" data-section="hero">
                    {/* Base gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#E8F5E8] via-[#E8F5E8] to-[#F7F7F2]"></div>

                    {/* Background image with natural blending */}
                    <div
                        className="absolute inset-0 bg-[url('/top_bg.webp')] bg-cover bg-center bg-no-repeat opacity-80"
                        style={{
                            backgroundBlendMode: 'soft-light',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center top'
                        }}
                    ></div>

                    {/* Gradient overlay for seamless transition */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F7F7F2] opacity-60"></div>

                    {/* Content Container */}
                    <div className="relative z-10 flex items-center justify-center h-full px-8">
                        <div className="container w-full">
                            <div className="flex flex-col lg:flex-row items-center gap-12">
                                {/* Left Content - Text (占2/3宽度) */}
                                <div
                                    className={`flex-1 lg:w-2/3 space-y-8 text-center lg:text-left animate-on-scroll ${
                                        visibleSections.has('hero') ? 'animate-slide-up' : ''
                                    }`}
                                >
                                    <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                                        Seamless Chat,
                                        <br />
                                        Borderless Pay.
                                    </h1>
                                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 py-10">
                                        MPChat integrates end-to-end encrypted messaging with powerful virtual and
                                        physical cards, offering secure and efficient payment solutions for individuals
                                        and businesses worldwide.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-10 ">
                                        <button
                                            className={`text-[22px] px-10 py-4 bg-[#06C55B] text-white font-semibold rounded-full hover:bg-[#05B052] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-on-scroll animate-delay-1 ${
                                                visibleSections.has('hero') ? 'animate-slide-up' : ''
                                            }`}
                                        >
                                            For Personal
                                        </button>
                                        <button
                                            className={`text-[22px] px-10 py-4 bg-[#06C55B] text-white font-semibold rounded-full hover:bg-[#05B052] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-on-scroll animate-delay-2 ${
                                                visibleSections.has('hero') ? 'animate-slide-up' : ''
                                            }`}
                                        >
                                            For Business
                                        </button>
                                    </div>
                                </div>

                                {/* Right Content - Cards (占1/3宽度，与文字水平对齐) */}
                                <div
                                    className={`flex-shrink-0 lg:w-1/3 flex justify-center lg:justify-end items-center animate-on-scroll animate-delay-3 ${
                                        visibleSections.has('hero') ? 'animate-slide-right' : ''
                                    }`}
                                >
                                    <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]">
                                        <div className="opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
                                            <Image
                                                width={800}
                                                height={312}
                                                src="/card.webp"
                                                alt="Payment Card"
                                                className="w-full h-auto object-contain animate-[cardFloat_4s_linear_infinite]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chat Features Section */}
                <section className="py-20 bg-[#F7F7F2]" data-section="chat-features">
                    <div className="container mx-auto px-8">
                        <div
                            className={`text-center mb-16 py-20 animate-on-scroll ${
                                visibleSections.has('chat-features') ? 'animate-slide-up' : ''
                            }`}
                        >
                            <h2 className="text-4xl lg:text-[64px] font-bold text-gray-900 mb-4">Chat</h2>
                            <p className="text-2xl lg:text-[40px] text-gray-600 pt-16">
                                Your Conversations, Absolutely Private.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-5">
                            {/* End-to-End Encryption */}
                            <div
                                className={`group relative bg-white rounded-3xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer animate-on-scroll animate-delay-1 ${
                                    visibleSections.has('chat-features') ? 'animate-slide-up' : ''
                                }`}
                            >
                                <div className="flex justify-center mb-6">
                                    <Image
                                        src="/pic1.webp"
                                        alt="End-to-End Encryption"
                                        width={250}
                                        height={180}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center lg:text-[32px]">
                                    End-to-End Encryption
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-center px-[70px] lg:px-[40px] lg:text-[20px]">
                                    Our End-To-End Encryption, Built Upon The MP Protocol, Provides Robust Security For
                                    Every Communication You Have
                                </p>
                            </div>

                            {/* Privacy Features */}
                            <div
                                className={`group relative bg-white rounded-3xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer animate-on-scroll animate-delay-2 ${
                                    visibleSections.has('chat-features') ? 'animate-slide-up' : ''
                                }`}
                            >
                                <div className="flex justify-center mb-6">
                                    <Image
                                        src="/pic2.webp"
                                        alt="Privacy Features"
                                        width={250}
                                        height={180}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center lg:text-[32px]">
                                    Privacy Features
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-center px-[70px] lg:px-[40px] lg:text-[20px]">
                                    Features Such As Disappearing Messages, Preventing Screenshots, And Message Recall
                                    Options, Etc
                                </p>
                            </div>

                            {/* Rich Media */}
                            <div
                                className={`group relative bg-white rounded-3xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer animate-on-scroll animate-delay-3 ${
                                    visibleSections.has('chat-features') ? 'animate-slide-up' : ''
                                }`}
                            >
                                <div className="flex justify-center mb-6">
                                    <Image
                                        src="/pic3.webp"
                                        alt="Rich Media"
                                        width={250}
                                        height={180}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center lg:text-[32px]">
                                    Rich Media
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-center px-[70px] lg:px-[40px] lg:text-[20px]">
                                    High-quality voice, video, and file transmission
                                </p>
                            </div>

                            {/* Group Chats */}
                            <div
                                className={`group relative bg-white rounded-3xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer animate-on-scroll animate-delay-4 ${
                                    visibleSections.has('chat-features') ? 'animate-slide-up' : ''
                                }`}
                            >
                                <div className="flex justify-center mb-6">
                                    <Image
                                        src="/pic4.webp"
                                        alt="Group Chats"
                                        width={250}
                                        height={180}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center lg:text-[32px]">
                                    Group Chats
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-center px-[70px] lg:px-[40px] lg:text-[20px]">
                                    Powerful group management function
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problem-Solution Section */}
                <section className="py-20 bg-[#F7F7F2] overflow-hidden" data-section="problem-solution">
                    <div className="container mx-auto px-8">
                        <div
                            className={`text-center mb-16 animate-on-scroll ${
                                visibleSections.has('problem-solution') ? 'animate-slide-up' : ''
                            }`}
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 pt-[200px] pb-[100px]">
                                Problem-Solution Section
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* For Your Personal Life */}
                            <div
                                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative animate-on-scroll animate-delay-1 ${
                                    visibleSections.has('problem-solution') ? 'animate-slide-left' : ''
                                }`}
                            >
                                <div className="relative flex justify-center mb-8">
                                    {/* Main image */}
                                    <Image
                                        src="/pic5.png"
                                        alt="Personal Life"
                                        width={400}
                                        height={300}
                                        className="object-contain relative z-10"
                                    />

                                    {/* Floating elements */}
                                    <div className="absolute top-2 left-38 animate-float-slow">
                                        <Image
                                            src="/pic5-1.png"
                                            alt="Float 1"
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="absolute top-22 right-30 animate-float-medium">
                                        <Image
                                            src="/pic5-2.png"
                                            alt="Float 2"
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                                    For Your Personal Life
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-center">
                                    Tired of payment failures on international sites?
                                    <br />
                                    Need a secure way to pay for subscriptions?
                                </p>
                            </div>

                            {/* For Your Global Business */}
                            <div
                                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative animate-on-scroll animate-delay-2 ${
                                    visibleSections.has('problem-solution') ? 'animate-slide-right' : ''
                                }`}
                            >
                                <div className="relative flex justify-center mb-8">
                                    {/* Main image */}
                                    <Image
                                        src="/pic6.png"
                                        alt="Global Business"
                                        width={400}
                                        height={300}
                                        className="object-contain relative z-10"
                                    />

                                    {/* Floating elements */}

                                    <div className="absolute bottom-2 left-38 animate-float-slow">
                                        <Image
                                            src="/pic6-2.png"
                                            alt="Float 2"
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="absolute top-4 right-38 animate-float-medium">
                                        <Image
                                            src="/pic6-1.png"
                                            alt="Float 1"
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                                    For Your Global Business
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-center">
                                    Struggling with high fees for global ad spend?
                                    <br />
                                    Looking for an efficient way to manage team expenses?
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Matrix Section */}
                <section
                    ref={featureMatrixRef}
                    className="relative py-20 overflow-hidden"
                    data-section="feature-matrix"
                >
                    {/* Background image */}
                    <div
                        className="absolute inset-0 bg-[url('/m_bg.webp')] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundSize: 'cover' }}
                    ></div>

                    {/* Overlay for better text readability */}
                    {/* <div className="absolute inset-0 bg-white/90"></div> */}

                    <div className="container mx-auto px-8 relative z-10">
                        <div
                            className={`text-center mb-16 animate-on-scroll ${
                                visibleSections.has('feature-matrix') ? 'animate-slide-up' : ''
                            }`}
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 pt-[200px] pb-[100px]">
                                Feature Matrix
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Secure Chat */}
                            <div className="feature-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 h-[460px]">
                                <h3 className="text-[32px] font-bold text-gray-900 mb-3 text-left">Secure Chat</h3>
                                <p className="text-gray-600 text-[18px] mb-4 text-left">100% private conversations.</p>
                                <div className="flex justify-center mb-6">
                                    <Image
                                        src="/pic7.webp"
                                        alt="Secure Chat"
                                        width={300}
                                        height={280}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Virtual Cards */}
                            <div className="feature-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200  h-[460px]">
                                <h3 className="text-[32px] font-bold text-gray-900 mb-3 text-left">Virtual Cards</h3>
                                <p className="text-gray-600 text-[18px] mb-4 text-left">
                                    Instantly create cards for any purpose.
                                </p>
                                <div className="flex justify-center mb-6">
                                    <Image
                                        src="/pic8.webp"
                                        alt="Virtual Cards"
                                        width={300}
                                        height={280}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Global Payments */}
                            <div className="feature-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 h-[460px]">
                                <h3 className="text-[32px] font-bold text-gray-900 mb-3 text-left">Global Payments</h3>
                                <p className="text-gray-600 text-[18px] mb-4 text-left">
                                    Pay for ads, e-commerce, and subscriptions globally.
                                </p>
                                <div className="flex justify-center mb-6">
                                    <Image
                                        src="/pic9.webp"
                                        alt="Global Payments"
                                        width={300}
                                        height={280}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Business Solutions */}
                            <div className="feature-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 h-[460px]">
                                <h3 className="text-[32px] font-bold text-gray-900 mb-3 text-left">
                                    Business Solutions
                                </h3>
                                <p className="text-gray-600 text-[18px] mb-4 text-left">
                                    Streamline your cross-border business funds.
                                </p>
                                <div className="flex justify-center mb-6">
                                    <Image
                                        src="/pic10.webp"
                                        alt="Business Solutions"
                                        width={300}
                                        height={280}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Section with Background */}
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
                </footer>
            </main>
        </div>
    )
}
