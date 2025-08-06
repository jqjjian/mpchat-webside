'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import Layout from '../../components/Layout'

export default function CardPage() {
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
                    }
                })
            },
            { threshold: 0.1, rootMargin: '50px' }
        )

        // 观察所有需要动画的元素
        const sections = document.querySelectorAll('[data-section]')
        sections.forEach(section => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <style jsx>{`
                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }
                .float-animation {
                    animation: float 4s ease-in-out infinite;
                    animation-delay: 0.5s;
                }

                @keyframes stackedEntry {
                    0% {
                        transform: translateX(100px);
                        opacity: 0;
                        z-index: 1;
                    }
                    60% {
                        transform: translateX(0);
                        opacity: 1;
                        z-index: 1;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                        z-index: auto;
                    }
                }

                .stacked-entry-1 {
                    animation: stackedEntry 2s ease-out forwards;
                    animation-delay: 0s;
                    opacity: 0;
                    transform: translateX(100px);
                }

                .stacked-entry-2 {
                    animation: stackedEntry 2s ease-out forwards;
                    animation-delay: 0.2s;
                    opacity: 0;
                    transform: translateX(100px);
                }

                .stacked-entry-3 {
                    animation: stackedEntry 2s ease-out forwards;
                    animation-delay: 0.4s;
                    opacity: 0;
                    transform: translateX(100px);
                }

                .stacked-entry-4 {
                    animation: stackedEntry 2s ease-out forwards;
                    animation-delay: 0.6s;
                    opacity: 0;
                    transform: translateX(100px);
                }
            `}</style>
            {/* <Layout> */}
            {/* Hero Section */}
            <section
                className="relative min-h-[700px] lg:min-h-[900px] 2xl:min-h-[1250px] min-[2780px]:h-[1500px] overflow-hidden"
                data-section="hero"
            >
                {/* Base gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#E8F5E8] via-[#E8F5E8] to-[#F7F7F2]"></div>

                {/* Small screen background (< 1920px) */}
                <div
                    className="absolute inset-0 bg-[url('/card/Group_1597889257.png')] bg-no-repeat opacity-80 min-[1920px]:hidden"
                    style={{
                        backgroundPosition: 'center 0',
                        backgroundAttachment: 'scroll'
                    }}
                ></div>

                {/* Large screen background (1920px+) */}
                <div
                    className="absolute inset-0 bg-[url('/card/Group_1597889257.png')] bg-no-repeat opacity-80 hidden min-[1920px]:block"
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundAttachment: 'scroll'
                    }}
                ></div>

                {/* Gradient overlay for seamless transition */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F7F7F2] opacity-60"></div>

                {/* Content Container */}
                <div className="relative z-10 flex justify-center min-h-[500px] lg:min-h-[700px] xl:min-h-[800px] 2xl:min-h-[1100px] px-4 sm:px-6 lg:px-8 pt-32 lg:pt-30">
                    <div className="container w-full max-w-[1700px] mx-auto">
                        <div className="flex flex-col flex-start items-center text-center">
                            {/* Navigation Pills */}
                            <div
                                className={`w-full max-w-md sm:max-w-lg lg:max-w-none flex mb-4 lg:mb-6 xl:mb-8 2xl:mb-12 animate-on-scroll gap-2 sm:gap-3 lg:gap-6 xl:gap-8 justify-center mx-auto ${
                                    visibleSections.has('hero') ? 'animate-slide-up' : ''
                                }`}
                            >
                                <Link href="/card/personal" className="relative flex-1">
                                    <div
                                        className="flex-1 relative flex items-center gap-1 sm:gap-2 lg:gap-3 px-2 sm:px-3 lg:px-6 xl:px-8 py-2 sm:py-3 lg:py-4 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg font-redotpaybold"
                                        style={{
                                            background: 'linear-gradient(135deg, #06C55B 0%, #04A84F 100%)'
                                        }}
                                    >
                                        <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 flex-1">
                                            <Image
                                                height={35}
                                                width={57}
                                                src="/card/card_m.png"
                                                alt="Personal"
                                                className="h-[25px] w-[40px] sm:h-[30px] sm:w-[45px] lg:h-[40px] lg:w-[65px] xl:h-[47px] xl:w-[76px]"
                                            ></Image>
                                            <span className="relative z-10 text-[12px] sm:text-[14px] lg:text-[18px] xl:text-[20px]">
                                                Personal
                                            </span>
                                        </div>
                                        <Image
                                            src="/card/j1.png"
                                            alt="arrow"
                                            width={15}
                                            height={18}
                                            className="w-3 h-3 sm:w-4 sm:h-4 lg:w-auto lg:h-auto"
                                        ></Image>
                                    </div>
                                </Link>
                                <Link href="/card/corporate" className="flex-1">
                                    <div className="relative flex items-center gap-1 sm:gap-2 lg:gap-3 px-2 sm:px-3 lg:px-6 xl:px-8 py-2 sm:py-3 lg:py-4 text-gray-700 font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg border border-white font-redotpaybold">
                                        <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 flex-1">
                                            <Image
                                                height={35}
                                                width={57}
                                                src="/card/card_m.png"
                                                alt="Corporate"
                                                className="h-[25px] w-[40px] sm:h-[30px] sm:w-[45px] lg:h-[40px] lg:w-[65px] xl:h-[47px] xl:w-[76px]"
                                            ></Image>
                                            <span className="relative z-10 text-[12px] sm:text-[14px] lg:text-[18px] xl:text-[20px]">
                                                Business
                                            </span>
                                        </div>
                                        <Image
                                            src="/card/j2.png"
                                            alt="arrow"
                                            width={15}
                                            height={18}
                                            className="w-3 h-3 sm:w-4 sm:h-4 lg:w-auto lg:h-auto"
                                        ></Image>
                                    </div>
                                </Link>
                            </div>

                            {/* Main Title */}
                            <h1
                                className={`pt-[10px] lg:pt-[20px] xl:pt-[30px] 2xl:pt-[50px] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight mb-2 lg:mb-3 xl:mb-4 2xl:mb-6 animate-on-scroll animate-delay-1 font-redotpaybold ${
                                    visibleSections.has('hero') ? 'animate-slide-up' : ''
                                }`}
                            >
                                The Smart,
                                <br />
                                Secure Card for Your Digital Life.
                            </h1>

                            {/* Subtitle */}
                            <p
                                className={`text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-4 lg:mb-6 xl:mb-8 2xl:mb-12 px-4 animate-on-scroll animate-delay-2 ${
                                    visibleSections.has('hero') ? 'animate-slide-up' : ''
                                }`}
                            >
                                One card for all your global online payments. Secure, simple, and instantly available.
                            </p>

                            {/* Card Visual */}
                            <div
                                className={`lg:w-[550px] lg:h-[447px] xl:w-[650px] xl:h-[528px] 2xl:w-[750px] 2xl:h-[610px] relative w-full max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto mb-4 lg:mb-6 xl:mb-8 2xl:mb-12 animate-on-scroll animate-delay-3 ${
                                    visibleSections.has('hero') ? 'animate-fade-scale' : ''
                                }`}
                            >
                                <div className="relative pt-30 sm:pt-0 flex items-center justify-center">
                                    <div className="relative float-animation">
                                        <Image
                                            src="/card/card.png"
                                            alt="MPCard"
                                            width={450}
                                            height={366}
                                            className="object-contain drop-shadow-2xl w-[300px] h-[244px] sm:w-[400px] sm:h-[325px] lg:w-[550px] lg:h-[447px] xl:w-[650px] xl:h-[528px] 2xl:w-[750px] 2xl:h-[610px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why MPChat Card Section */}
            <section className="py-12 lg:py-20 bg-[#F7F7F2]" data-section="why-mpchat">
                <div className="container mx-auto px-8 max-w-[1700px]">
                    <div
                        className={`text-center mb-8 lg:mb-16 animate-on-scroll ${
                            visibleSections.has('why-mpchat') ? 'animate-slide-up' : ''
                        }`}
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-[64px] font-bold text-gray-900 mb-4 lg:mb-8 font-redotpaybold">
                            Why MPChat Card
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-8 lg:pt-[120px]">
                        {/* For Online Shoppers */}
                        <div
                            className={`text-center animate-on-scroll animate-delay-1 ${
                                visibleSections.has('why-mpchat') ? 'animate-slide-up' : ''
                            }`}
                        >
                            <div className="flex justify-center mb-6 lg:mb-8">
                                <div className="flex items-center justify-center h-[60px] lg:h-[88px]">
                                    <Image
                                        src="/card/pic1.png"
                                        alt="For Online Shoppers"
                                        width={237}
                                        height={88}
                                        className="object-contain w-[180px] h-[67px] lg:w-[237px] lg:h-[88px]"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-gray-900 pt-[20px] lg:pt-[40px] pb-[15px] lg:pb-[30px] font-redotpaybold">
                                For Online Shoppers
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base lg:text-[20px] leading-relaxed px-4 lg:px-0">
                                Shop online with confidence using our secure virtual cards designed for e-commerce.
                            </p>
                        </div>

                        {/* For Subscription Lovers */}
                        <div
                            className={`text-center animate-on-scroll animate-delay-2 ${
                                visibleSections.has('why-mpchat') ? 'animate-slide-up' : ''
                            }`}
                        >
                            <div className="flex justify-center mb-6 lg:mb-8">
                                <div className="flex items-center justify-center h-[60px] lg:h-[88px]">
                                    <Image
                                        src="/card/pic2.png"
                                        alt="For Subscription Lovers"
                                        width={267}
                                        height={74}
                                        className="object-contain w-[200px] h-[55px] lg:w-[267px] lg:h-[74px]"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-gray-900 pt-[20px] lg:pt-[40px] pb-[15px] lg:pb-[30px] font-redotpaybold">
                                For Subscription Lovers
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base lg:text-[20px] leading-relaxed px-4 lg:px-0">
                                Manage all your subscriptions with dedicated cards and spending controls.
                            </p>
                        </div>

                        {/* For Digital Marketers */}
                        <div
                            className={`text-center animate-on-scroll animate-delay-3 ${
                                visibleSections.has('why-mpchat') ? 'animate-slide-up' : ''
                            }`}
                        >
                            <div className="flex justify-center mb-6 lg:mb-8">
                                <div className="flex items-center justify-center h-[60px] lg:h-[88px]">
                                    <Image
                                        src="/card/pic3.png"
                                        alt="For Digital Marketers"
                                        width={204}
                                        height={74}
                                        className="object-contain w-[150px] h-[55px] lg:w-[204px] lg:h-[74px]"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-gray-900 pt-[20px] lg:pt-[40px] pb-[15px] lg:pb-[30px] font-redotpaybold">
                                For Digital Marketers
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base lg:text-[20px] leading-relaxed px-4 lg:px-0">
                                Scale your ad campaigns with flexible spending limits and real-time controls.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Designed for Your Every Need Section */}
            <section className="py-12 lg:py-20" data-section="designed-for-need">
                <div className="container mx-auto px-8 max-w-[1700px]">
                    <div
                        className={`text-center mb-8 lg:mb-16 animate-on-scroll ${
                            visibleSections.has('designed-for-need') ? 'animate-slide-up' : ''
                        }`}
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-8 font-redotpaybold">
                            Designed for Your Every Need
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 pt-8 lg:pt-25">
                        {/* Online Shopping */}
                        <div
                            className={`relative rounded-3xl p-6 lg:p-8 overflow-hidden animate-on-scroll animate-delay-1 min-h-[300px] lg:min-h-[458px] flex items-end transition-transform duration-300 hover:scale-105 cursor-pointer ${
                                visibleSections.has('designed-for-need') ? 'animate-slide-left' : ''
                            }`}
                            style={{
                                backgroundImage: 'url(/card/pic4.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center top',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <div className="relative z-10 w-full pb-6 lg:pb-10">
                                <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold mb-3 lg:mb-4 text-center font-redotpaybold">
                                    Online Shopping
                                </h3>
                                <p className="text-sm sm:text-base lg:text-lg text-center leading-relaxed px-2 lg:px-0">
                                    Shop safely on any website with our virtual cards that protect your real account
                                    details.
                                </p>
                            </div>
                        </div>

                        {/* Subscriptions */}
                        <div
                            className={`relative rounded-3xl p-6 lg:p-8 overflow-hidden animate-on-scroll animate-delay-2 min-h-[300px] lg:min-h-[458px] flex items-end transition-transform duration-300 hover:scale-105 cursor-pointer ${
                                visibleSections.has('designed-for-need') ? 'animate-slide-right' : ''
                            }`}
                            style={{
                                backgroundImage: 'url(/card/pic5.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center top',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <div className="relative z-10 w-full pb-6 lg:pb-10">
                                <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold mb-3 lg:mb-4 text-center font-redotpaybold">
                                    Subscriptions
                                </h3>
                                <p className="text-sm sm:text-base lg:text-lg text-center leading-relaxed px-2 lg:px-0">
                                    Control your recurring payments with dedicated cards for each subscription service.
                                </p>
                            </div>
                        </div>

                        {/* Ad Payments */}
                        <div
                            className={`relative rounded-3xl p-6 lg:p-8 overflow-hidden animate-on-scroll animate-delay-3 min-h-[300px] lg:min-h-[458px] flex items-end transition-transform duration-300 hover:scale-105 cursor-pointer ${
                                visibleSections.has('designed-for-need') ? 'animate-slide-left' : ''
                            }`}
                            style={{
                                backgroundImage: 'url(/card/pic6.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center top',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <div className="relative z-10 w-full pb-6 lg:pb-10">
                                <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold mb-3 lg:mb-4 text-center font-redotpaybold">
                                    Ad Payments
                                </h3>
                                <p className="text-sm sm:text-base lg:text-lg text-center leading-relaxed px-2 lg:px-0">
                                    Streamline your advertising spend with cards designed for marketing campaigns.
                                </p>
                            </div>
                        </div>

                        {/* Travel */}
                        <div
                            className={`relative rounded-3xl p-6 lg:p-8 overflow-hidden animate-on-scroll animate-delay-4 min-h-[300px] lg:min-h-[458px] flex items-end transition-transform duration-300 hover:scale-105 cursor-pointer ${
                                visibleSections.has('designed-for-need') ? 'animate-slide-right' : ''
                            }`}
                            style={{
                                backgroundImage: 'url(/card/pic7.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center top',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <div className="relative z-10 w-full pb-6 lg:pb-10">
                                <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold mb-3 lg:mb-4 text-center font-redotpaybold">
                                    Travel
                                </h3>
                                <p className="text-sm sm:text-base lg:text-lg text-center leading-relaxed px-2 lg:px-0">
                                    Travel with confidence using cards optimized for international transactions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Deep Dive Section */}
            <section className="py-12 lg:py-20 bg-[#F7F7F2]" data-section="features-deep-dive">
                <div className="container mx-auto px-8 max-w-[1700px]">
                    <div
                        className={`text-center mb-8 lg:mb-16 animate-on-scroll ${
                            visibleSections.has('features-deep-dive') ? 'animate-slide-up' : ''
                        }`}
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 pb-8 lg:pb-28 font-redotpaybold">
                            Features Deep Dive
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                        {/* Instant Issuing */}
                        <div
                            className={`bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('features-deep-dive') ? 'stacked-entry-1' : ''
                            }`}
                        >
                            <div className="flex justify-start mb-4 lg:mb-2">
                                <div className="flex items-center justify-center pb-4 lg:pb-6">
                                    <Image
                                        src="/card/pic8.png"
                                        alt="Instant Issuing"
                                        width={74}
                                        height={74}
                                        className="object-contain w-[50px] h-[50px] lg:w-[74px] lg:h-[74px]"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-gray-900 mb-3 lg:mb-4 text-left pb-2 lg:pb-4 font-redotpaybold">
                                Instant
                                <br />
                                Issuing
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base lg:text-[18px] text-left leading-relaxed">
                                Get your virtual card instantly and start spending right away. No waiting, no delays.
                            </p>
                        </div>

                        {/* Spending Controls */}
                        <div
                            className={`bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('features-deep-dive') ? 'stacked-entry-2' : ''
                            }`}
                        >
                            <div className="flex justify-start mb-4 lg:mb-6">
                                <div className="flex items-center justify-center pb-2 lg:pb-2">
                                    <Image
                                        src="/card/pic9.png"
                                        alt="Spending Controls"
                                        width={74}
                                        height={74}
                                        className="object-contain w-[50px] h-[50px] lg:w-[74px] lg:h-[74px]"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-gray-900 mb-3 lg:mb-4 text-left pb-2 lg:pb-4 font-redotpaybold">
                                Spending Controls
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base lg:text-[18px] text-left leading-relaxed">
                                Set custom spending limits, merchant restrictions, and transaction controls for each
                                card.
                            </p>
                        </div>

                        {/* Multi-Card Management */}
                        <div
                            className={`bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('features-deep-dive') ? 'stacked-entry-3' : ''
                            }`}
                        >
                            <div className="flex justify-start mb-4 lg:mb-6">
                                <div className="flex items-center justify-center pb-2 lg:pb-2">
                                    <Image
                                        src="/card/pic10.png"
                                        alt="Multi-Card Management"
                                        width={74}
                                        height={74}
                                        className="object-contain w-[50px] h-[50px] lg:w-[74px] lg:h-[74px]"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-gray-900 mb-3 lg:mb-4 text-left pb-2 lg:pb-4 font-redotpaybold">
                                Multi-Card Management
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base lg:text-[18px] text-left leading-relaxed">
                                Create and manage multiple virtual cards for different purposes from one dashboard.
                            </p>
                        </div>

                        {/* Top-Tier Security */}
                        <div
                            className={`bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('features-deep-dive') ? 'stacked-entry-4' : ''
                            }`}
                        >
                            <div className="flex justify-start mb-4 lg:mb-6">
                                <div className="flex items-center justify-center pb-2 lg:pb-2">
                                    <Image
                                        src="/card/pic11.png"
                                        alt="Top-Tier Security"
                                        width={74}
                                        height={74}
                                        className="object-contain w-[50px] h-[50px] lg:w-[74px] lg:h-[74px]"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-gray-900 mb-3 lg:mb-4 text-left pb-2 lg:pb-4 pr-3 font-redotpaybold">
                                Top-Tier Security
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base lg:text-[18px] text-left leading-relaxed">
                                Bank-level encryption and fraud protection keep your transactions secure at all times.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
