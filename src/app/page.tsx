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
            <section className="relative min-h-[900px] h-[70vh] overflow-hidden" data-section="hero">
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
                                    MPChat integrates end-to-end encrypted messaging with powerful virtual and physical
                                    cards, offering secure and efficient payment solutions for individuals and
                                    businesses worldwide.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start pt-10 ">
                                    <Link href="/card/personal">
                                        <button
                                            className={`text-[22px] px-10 py-4 bg-[#06C55B] text-white font-semibold rounded-full hover:bg-[#05B052] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-on-scroll animate-delay-1 ${
                                                visibleSections.has('hero') ? 'animate-slide-up' : ''
                                            }`}
                                        >
                                            For Personal
                                        </button>
                                    </Link>
                                    <Link href="/card/corporate">
                                        <button
                                            className={`text-[22px] px-10 py-4 bg-[#06C55B] text-white font-semibold rounded-full hover:bg-[#05B052] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-on-scroll animate-delay-2 ${
                                                visibleSections.has('hero') ? 'animate-slide-up' : ''
                                            }`}
                                        >
                                            For Business
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Content - Cards (占1/3宽度，与文字水平对齐) */}
                            <div
                                className={`flex-shrink-0 lg:w-1/3 flex justify-center lg:justify-end items-center animate-on-scroll animate-delay-3 ${
                                    visibleSections.has('hero') ? 'animate-slide-right' : ''
                                }`}
                            >
                                <div className="w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] xl:w-[750px] xl:h-[750px]">
                                    <div className="opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards] pt-30">
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
            <section className="pb-20 bg-[#F7F7F2]" data-section="chat-features">
                <div className="container mx-auto px-8">
                    <div
                        className={`text-center mb-8 pb-20 animate-on-scroll ${
                            visibleSections.has('chat-features') ? 'animate-slide-up' : ''
                        }`}
                    >
                        <h2 className="text-4xl lg:text-[64px] font-bold text-gray-900 mb-4">Chat</h2>
                        <p className="text-2xl lg:text-[40px] text-gray-600 pt-10">
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

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
                            <h3 className="text-[40px] font-bold text-gray-900 mb-4 text-left">
                                For Your Personal Life
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-left text-[20px] pb-12">
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
                            <h3 className="text-[40px] font-bold text-gray-900 mb-4 text-left">
                                For Your Global Business
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-left text-[20px]">
                                Struggling with high fees for global ad spend?
                                <br />
                                Looking for an efficient way to manage team expenses?
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Matrix Section */}
            <section ref={featureMatrixRef} className="relative py-20 overflow-hidden" data-section="feature-matrix">
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
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 pb-[100px]">Feature Matrix</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {/* Secure Chat */}
                        <div className="flex flex-col justify-between box-border pt-4 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300  h-[460px]">
                            <div>
                                <h3 className="text-[32px] font-bold text-gray-900 mb-3 text-left px-8">Secure Chat</h3>
                                <p className="text-gray-600 text-[18px] mb-4 text-left px-8">
                                    100% private
                                    <br />
                                    conversations.
                                </p>
                            </div>
                            <div className="flex justify-center ">
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
                        <div className="flex flex-col justify-between box-border pt-4  bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300   h-[460px]">
                            <div>
                                <h3 className="text-[32px] font-bold text-gray-900 mb-3 text-left px-8">
                                    Virtual Cards
                                </h3>
                                <p className="text-gray-600 text-[18px] mb-4 text-left px-8">
                                    Instantly create cards for any purpose.
                                </p>
                            </div>
                            <div className="flex justify-center">
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
                        <div className="overflow-hidden flex flex-col justify-between box-border pt-4 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 h-[460px]">
                            <div>
                                <h3 className="text-[32px] font-bold text-gray-900 mb-3 text-left px-8">
                                    Global Payments
                                </h3>
                                <p className="text-gray-600 text-[18px] mb-4 text-left px-8">
                                    Pay for ads, e-commerce, and subscriptions globally.
                                </p>
                            </div>
                            <div className="flex justify-center">
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
                        <div className="flex flex-col justify-between box-border pt-4 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300  h-[460px]">
                            <div>
                                <h3 className="text-[32px] font-bold text-gray-900 mb-3 text-left px-8">
                                    Business Solutions
                                </h3>
                                <p className="text-gray-600 text-[18px] mb-4 text-left px-8">
                                    Streamline your cross-border business funds.
                                </p>
                            </div>
                            <div className="flex justify-center">
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
            <Footer />
        </Layout>
    )
}
