'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Layout from '@/components/Layout'
import Footer from '@/components/Footer'
import Link from 'next/link'
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
        <Layout>
            <style jsx global>{`
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
            {/* Hero Section */}
            <section
                className="relative min-h-[900px] h-[70vh]  2xl:min-h-[1250px] min-[2780px]:h-[1500px] overflow-hidden"
                data-section="hero"
            >
                {/* Base gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#E8F5E8] via-[#E8F5E8] to-[#F7F7F2]"></div>

                {/* Background image with natural blending */}
                <div
                    className="absolute inset-0 bg-[url('/home_bg.png')] bg-cover bg-center bg-no-repeat opacity-80"
                    style={{
                        backgroundBlendMode: 'soft-light',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center top'
                    }}
                ></div>

                {/* Gradient overlay for seamless transition */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F7F7F2] opacity-60"></div>

                {/* Content Container */}
                <div className="relative z-10 flex justify-center h-full px-8">
                    <div className="container w-full">
                        {/* 移动端布局：垂直排列 */}
                        <div className="flex flex-col lg:hidden gap-8 h-full items-center">
                            {/* 标题和描述 */}
                            <div
                                className={`flex flex-col justify-center space-y-6 text-center animate-on-scroll w-full mt-30 lg:mt-0 ${visibleSections.has('hero') ? 'animate-slide-up' : ''
                                    }`}
                            >
                                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight sm:mt-8 font-redotpaybold">
                                    Seamless Chat,
                                    <br />
                                    Borderless Pay.
                                </h1>
                                <div className="w-full flex justify-center">
                                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto py-4 px-4">
                                        MPChat integrates end-to-end encrypted messaging with powerful virtual and
                                        physical cards, offering secure and efficient payment solutions for individuals
                                        and businesses worldwide.
                                    </p>
                                </div>
                            </div>

                            {/* 图片 */}
                            <div
                                className={`flex justify-center items-center animate-on-scroll animate-delay-3 w-full ${visibleSections.has('hero') ? 'animate-slide-right' : ''
                                    }`}
                            >
                                <div className="w-[350px] h-[350px] sm:w-[400px] sm:h-[400px]">
                                    <div className="opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards] pt-8">
                                        <Image
                                            width={1000}
                                            height={390}
                                            src="/card.webp"
                                            alt="Payment Card"
                                            className="w-full h-auto object-contain animate-[cardFloat_4s_linear_infinite]"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* 按钮 */}
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center pt-4 w-full max-w-md mx-auto">
                                <Link href="/card/personal" className="w-full sm:w-auto">
                                    <button
                                        className={`text-nowrap w-full sm:w-auto text-lg sm:text-[22px] px-8 sm:px-10 py-4 sm:py-4 bg-[#06C55B] text-white font-semibold rounded-full hover:bg-[#05B052] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-on-scroll animate-delay-1 font-redotpaybold ${visibleSections.has('hero') ? 'animate-slide-up' : ''
                                            }`}
                                    >
                                        For Personal
                                    </button>
                                </Link>
                                <Link href="/card/corporate" className="w-full sm:w-auto">
                                    <button
                                        className={`text-nowrap w-full sm:w-auto text-lg sm:text-[22px] px-8 sm:px-10 py-4 sm:py-4 bg-[#06C55B] text-white font-semibold rounded-full hover:bg-[#05B052] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-on-scroll animate-delay-2 font-redotpaybold ${visibleSections.has('hero') ? 'animate-slide-up' : ''
                                            }`}
                                    >
                                        For Business
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* 桌面端布局：水平排列 */}
                        <div className="hidden lg:flex flex-row gap-12 h-full">
                            {/* Left Content - Text (占2/3宽度) */}
                            <div
                                className={`flex-1 flex flex-col justify-center space-y-8 text-left animate-on-scroll ${visibleSections.has('hero') ? 'animate-slide-up' : ''
                                    }`}
                            >
                                <h1 className="text-6xl xl:text-7xl font-bold text-gray-900 leading-tight font-redotpaybold">
                                    Seamless Chat,
                                    <br />
                                    Borderless Pay.
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl py-10">
                                    MPChat integrates end-to-end encrypted messaging with powerful virtual and physical
                                    cards, offering secure and efficient payment solutions for individuals and
                                    businesses worldwide.
                                </p>
                                <div className="flex flex-row gap-8 justify-start pt-10">
                                    <Link href="/card/personal">
                                        <button
                                            className={`text-nowrap text-[22px] px-10 py-4 bg-[#06C55B] text-white font-semibold rounded-full hover:bg-[#05B052] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-on-scroll animate-delay-1 font-redotpaybold ${visibleSections.has('hero') ? 'animate-slide-up' : ''
                                                }`}
                                        >
                                            For Personal
                                        </button>
                                    </Link>
                                    <Link href="/card/corporate">
                                        <button
                                            className={`text-nowrap text-[22px] px-10 py-4 bg-[#06C55B] text-white font-semibold rounded-full hover:bg-[#05B052] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-on-scroll animate-delay-2 font-redotpaybold ${visibleSections.has('hero') ? 'animate-slide-up' : ''
                                                }`}
                                        >
                                            For Business
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Content - Cards (占1/3宽度，与文字水平对齐) */}
                            <div
                                className={`flex-shrink-0 flex justify-end items-center animate-on-scroll animate-delay-3 ${visibleSections.has('hero') ? 'animate-slide-right' : ''
                                    }`}
                            >
                                <div className="w-[500px] h-[500px] ">
                                    <div className="opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
                                        <Image
                                            width={1000}
                                            height={390}
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
            <section className=" bg-[#F7F7F2]" data-section="chat-features">
                <div className="container mx-auto px-8">
                    <div
                        className={`text-center mb-8 pb-10 lg:pb-20 animate-on-scroll ${visibleSections.has('chat-features') ? 'animate-slide-up' : ''
                            }`}
                    >
                        <h2 className="text-3xl lg:text-[64px] font-bold text-gray-900 mb-4 font-redotpaybold">Chat</h2>
                        <p className="text-xl lg:text-[40px] text-gray-600 pt-6 lg:pt-10 font-redotpaybold">
                            Your Conversations, Absolutely Private.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-5">
                        {/* End-to-End Encryption */}
                        <div
                            className={`group relative bg-white rounded-3xl p-6 lg:p-8 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer animate-on-scroll animate-delay-1 ${visibleSections.has('chat-features') ? 'animate-slide-up' : ''
                                }`}
                        >
                            <div className="flex justify-center mb-4 lg:mb-6">
                                <Image
                                    src="/pic1.webp"
                                    alt="End-to-End Encryption"
                                    width={250}
                                    height={180}
                                    className="object-contain w-full max-w-[250px]"
                                />
                            </div>
                            <h3 className="text-xl lg:text-[32px] font-bold text-gray-900 mb-3 lg:mb-4 text-center font-redotpaybold">
                                End-to-End Encryption
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-center px-4 lg:px-[40px] text-sm lg:text-[20px]">
                                Our End-To-End Encryption, Built Upon The MP Protocol, Provides Robust Security For
                                Every Communication You Have
                            </p>
                        </div>

                        {/* Privacy Features */}
                        <div
                            className={`group relative bg-white rounded-3xl p-6 lg:p-8 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer animate-on-scroll animate-delay-2 ${visibleSections.has('chat-features') ? 'animate-slide-up' : ''
                                }`}
                        >
                            <div className="flex justify-center mb-4 lg:mb-6">
                                <Image
                                    src="/pic2.webp"
                                    alt="Privacy Features"
                                    width={250}
                                    height={180}
                                    className="object-contain w-full max-w-[250px]"
                                />
                            </div>
                            <h3 className="text-xl lg:text-[32px] font-bold text-gray-900 mb-3 lg:mb-4 text-center font-redotpaybold">
                                Privacy Features
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-center px-4 lg:px-[40px] text-sm lg:text-[20px]">
                                Features Such As Disappearing Messages, Preventing Screenshots, And Message Recall
                                Options, Etc
                            </p>
                        </div>

                        {/* Rich Media */}
                        <div
                            className={`group relative bg-white rounded-3xl p-6 lg:p-8 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer animate-on-scroll animate-delay-3 ${visibleSections.has('chat-features') ? 'animate-slide-up' : ''
                                }`}
                        >
                            <div className="flex justify-center mb-4 lg:mb-6">
                                <Image
                                    src="/pic3.webp"
                                    alt="Rich Media"
                                    width={250}
                                    height={180}
                                    className="object-contain w-full max-w-[250px]"
                                />
                            </div>
                            <h3 className="text-xl lg:text-[32px] font-bold text-gray-900 mb-3 lg:mb-4 text-center font-redotpaybold">
                                Rich Media
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-center px-4 lg:px-[40px] text-sm lg:text-[20px]">
                                High-quality voice, video, and file transmission
                            </p>
                        </div>

                        {/* Group Chats */}
                        <div
                            className={`group relative bg-white rounded-3xl p-6 lg:p-8 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer animate-on-scroll animate-delay-4 ${visibleSections.has('chat-features') ? 'animate-slide-up' : ''
                                }`}
                        >
                            <div className="flex justify-center mb-4 lg:mb-6">
                                <Image
                                    src="/pic4.webp"
                                    alt="Group Chats"
                                    width={250}
                                    height={180}
                                    className="object-contain w-full max-w-[250px]"
                                />
                            </div>
                            <h3 className="text-xl lg:text-[32px] font-bold text-gray-900 mb-3 lg:mb-4 text-center font-redotpaybold">
                                Group Chats
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-center px-4 lg:px-[40px] text-sm lg:text-[20px]">
                                Powerful group management function
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem-Solution Section */}
            <section className=" bg-[#F7F7F2] overflow-hidden" data-section="problem-solution">
                <div className="container mx-auto px-8">
                    <div
                        className={`text-center  animate-on-scroll ${visibleSections.has('problem-solution') ? 'animate-slide-up' : ''
                            }`}
                    >
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 lg:pt-[100px] py-[50px] lg:pb-[100px] font-redotpaybold">
                            Problem-Solution Section
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {/* For Your Personal Life */}
                        <div
                            className={`bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative animate-on-scroll animate-delay-1 ${visibleSections.has('problem-solution') ? 'animate-slide-left' : ''
                                }`}
                        >
                            <div className="relative flex justify-center mb-6 lg:mb-8">
                                {/* Main image */}
                                <Image
                                    src="/pic5.png"
                                    alt="Personal Life"
                                    width={400}
                                    height={300}
                                    className="object-contain relative z-10 w-full max-w-[400px]"
                                />

                                {/* Floating elements */}
                                <div className="absolute top-2 left-8 lg:left-38 animate-float-slow">
                                    <Image
                                        src="/pic5-1.png"
                                        alt="Float 1"
                                        width={60}
                                        height={60}
                                        className="object-contain w-12 h-12 lg:w-[60px] lg:h-[60px]"
                                    />
                                </div>
                                <div className="absolute top-16 lg:top-22 right-8 lg:right-30 animate-float-medium">
                                    <Image
                                        src="/pic5-2.png"
                                        alt="Float 2"
                                        width={60}
                                        height={60}
                                        className="object-contain w-12 h-12 lg:w-[60px] lg:h-[60px]"
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl lg:text-[40px] font-bold text-gray-900 mb-3 lg:mb-4 text-left font-redotpaybold">
                                For Your Personal Life
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-left text-base lg:text-[20px] pb-6 lg:pb-12">
                                Tired of payment failures on international sites?
                                <br />
                                Need a secure way to pay for subscriptions?
                            </p>
                        </div>

                        {/* For Your Global Business */}
                        <div
                            className={`bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative animate-on-scroll animate-delay-2 ${visibleSections.has('problem-solution') ? 'animate-slide-right' : ''
                                }`}
                        >
                            <div className="relative flex justify-center mb-6 lg:mb-8">
                                {/* Main image */}
                                <Image
                                    src="/pic6.png"
                                    alt="Global Business"
                                    width={400}
                                    height={300}
                                    className="object-contain relative z-10 w-full max-w-[400px]"
                                />

                                {/* Floating elements */}

                                <div className="absolute bottom-2 left-8 lg:left-38 animate-float-slow">
                                    <Image
                                        src="/pic6-2.png"
                                        alt="Float 2"
                                        width={60}
                                        height={60}
                                        className="object-contain w-12 h-12 lg:w-[60px] lg:h-[60px]"
                                    />
                                </div>
                                <div className="absolute top-4 right-8 lg:right-38 animate-float-medium">
                                    <Image
                                        src="/pic6-1.png"
                                        alt="Float 1"
                                        width={60}
                                        height={60}
                                        className="object-contain w-12 h-12 lg:w-[60px] lg:h-[60px]"
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl lg:text-[40px] font-bold text-gray-900 mb-3 lg:mb-4 text-left font-redotpaybold">
                                For Your Global Business
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-left text-base lg:text-[20px]">
                                Struggling with high fees for global ad spend?
                                <br />
                                Looking for an efficient way to manage team expenses?
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Matrix Section */}
            <section ref={featureMatrixRef} className="relative overflow-hidden" data-section="feature-matrix">
                {/* Background image */}
                <div
                    className="top-30 absolute inset-0 bg-[url('/m_bg.webp')] bg-no-repeat opacity-80 min-[1920px]:hidden"
                    style={{
                        backgroundPosition: 'center 0',
                        backgroundAttachment: 'scroll'
                    }}
                ></div>
                <div
                    className="absolute inset-0 bg-[url('/m_bg.webp')] bg-no-repeat opacity-80 hidden min-[1920px]:block"
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundAttachment: 'scroll'
                    }}
                ></div>
                {/* Overlay for better text readability */}
                {/* <div className="absolute inset-0 bg-white/90"></div> */}

                <div className="container mx-auto px-8 relative z-10">
                    <div
                        className={`text-center  animate-on-scroll ${visibleSections.has('feature-matrix') ? 'animate-slide-up' : ''
                            }`}
                    >
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 py-[50px] md:pt-20 lg:pb-[100px] font-redotpaybold">Feature Matrix</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                        {/* Secure Chat */}
                        <div className="feature-card pt-4 flex flex-col justify-between box-border bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 h-[400px] lg:h-[460px]">
                            <div>
                                <h3 className="font-redotpaybold text-xl lg:text-[32px] font-bold text-gray-900 mb-3 text-left  px-6 lg:px-8">
                                    Secure Chat
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-[18px] mb-4 text-left px-6 lg:px-8">
                                    100% private
                                    <br className="hidden lg:block" />
                                    conversations.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="/pic7.webp"
                                    alt="Secure Chat"
                                    width={300}
                                    height={280}
                                    className="object-contain w-full max-w-[300px]"
                                />
                            </div>
                        </div>

                        {/* Virtual Cards */}
                        <div className="feature-card flex flex-col justify-between box-border pt-4 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 h-[400px] lg:h-[460px]">
                            <div>
                                <h3 className="text-xl lg:text-[32px] font-bold text-gray-900 mb-3 text-left px-6 lg:px-8 font-redotpaybold">
                                    Virtual Cards
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-[18px] mb-4 text-left px-6 lg:px-8">
                                    Instantly create cards for any purpose.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="/pic8.webp"
                                    alt="Virtual Cards"
                                    width={300}
                                    height={280}
                                    className="object-contain w-full max-w-[300px]"
                                />
                            </div>
                        </div>

                        {/* Global Payments */}
                        <div className="feature-card p-0 overflow-hidden flex flex-col justify-between box-border pt-4 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 h-[400px] lg:h-[460px]">
                            <div>
                                <h3 className="text-xl lg:text-[32px] font-bold text-gray-900 mb-3 text-left px-6 lg:px-8 font-redotpaybold">
                                    Global Payments
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-[18px] mb-4 text-left px-6 lg:px-8">
                                    Pay for ads, e-commerce, and subscriptions globally.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="/pic9.webp"
                                    alt="Global Payments"
                                    width={300}
                                    height={280}
                                    className="object-contain w-full max-w-[300px]"
                                />
                            </div>
                        </div>

                        {/* Business Solutions */}
                        <div className="feature-card p-0 flex flex-col justify-between box-border pt-4 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 h-[400px] lg:h-[460px]">
                            <div>
                                <h3 className="text-xl lg:text-[32px] font-bold text-gray-900 mb-3 text-left px-6 lg:px-8 font-redotpaybold">
                                    Business Solutions
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-[18px] mb-4 text-left px-6 lg:px-8">
                                    Streamline your cross-border business funds.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="/pic10.webp"
                                    alt="Business Solutions"
                                    width={300}
                                    height={280}
                                    className="object-contain w-full max-w-[300px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Layout>
    )
}
