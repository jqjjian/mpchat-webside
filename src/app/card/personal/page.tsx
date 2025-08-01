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
                className="relative min-h-[700px] lg:min-h-[800px] xl:min-h-[900px] 2xl:min-h-[1100px] overflow-hidden"
                data-section="hero"
            >
                {/* Base gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#E8F5E8] via-[#E8F5E8] to-[#F7F7F2]"></div>

                {/* Small screen background (< 1920px) */}
                <div
                    className="absolute inset-0 bg-[url('/card/Group_1597889257.png')] bg-no-repeat opacity-80 min-[1920px]:hidden"
                    style={{
                        backgroundSize: 'contain',
                        backgroundPosition: 'center top',
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
                <div className="relative z-10 flex items-center justify-center min-h-[700px] lg:min-h-[800px] xl:min-h-[900px] 2xl:min-h-[1100px] px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-12 xl:pt-16 2xl:pt-20">
                    <div className="container w-full max-w-[1700px] mx-auto">
                        <div className="flex flex-col items-center text-center py-4 lg:py-6 xl:py-8">
                            {/* Navigation Pills */}
                            <div
                                className={`w-full max-w-md sm:max-w-lg lg:max-w-none flex mb-4 lg:mb-6 xl:mb-8 2xl:mb-12 animate-on-scroll gap-3 sm:gap-4 lg:gap-6 xl:gap-8 justify-center mx-auto ${
                                    visibleSections.has('hero') ? 'animate-slide-up' : ''
                                }`}
                            >
                                <Link href="/card/personal" className="relative flex-1">
                                    <div
                                        className="flex-1 relative flex items-center gap-2 lg:gap-3 px-3 sm:px-4 lg:px-6 xl:px-8 py-2 sm:py-3 lg:py-4 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg "
                                        style={{
                                            background: 'linear-gradient(135deg, #06C55B 0%, #04A84F 100%)'
                                        }}
                                    >
                                        <div className="flex items-center gap-2 lg:gap-3 flex-1">
                                            <Image
                                                height={35}
                                                width={57}
                                                src="/card/card_m.png"
                                                alt="Personal"
                                                className="lg:h-[40px] lg:w-[65px] xl:h-[47px] xl:w-[76px]"
                                            ></Image>
                                            <span className="relative z-10 text-[16px] lg:text-[18px] xl:text-[20px]">
                                                Personal
                                            </span>
                                        </div>
                                        <Image src="/card/j1.png" alt="arrow" width={15} height={18}></Image>
                                        {/* <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg> */}
                                    </div>
                                </Link>
                                <Link href="/card/corporate" className="flex-1">
                                    <div className="relative flex items-center gap-2 lg:gap-3 px-3 sm:px-4 lg:px-6 xl:px-8 py-2 sm:py-3 lg:py-4 text-gray-700 font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg  border border-white">
                                        {/* <div className="w-6 h-6 bg-gray-200 rounded-lg flex items-center justify-center">
                                        <div className="w-3 h-3 bg-gray-600 rounded-sm"></div>
                                    </div> */}

                                        <div className="flex items-center gap-2 lg:gap-3 flex-1">
                                            <Image
                                                height={35}
                                                width={57}
                                                src="/card/card_m.png"
                                                alt="Corporate"
                                                className="lg:h-[40px] lg:w-[65px] xl:h-[47px] xl:w-[76px]"
                                            ></Image>
                                            <span className="relative z-10 text-[16px] lg:text-[18px] xl:text-[20px]">
                                                Corporate
                                            </span>
                                        </div>
                                        <Image src="/card/j2.png" alt="arrow" width={15} height={18}></Image>
                                        {/* <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg> */}
                                    </div>
                                </Link>
                            </div>

                            {/* Main Title */}
                            <h1
                                className={`pt-[10px] lg:pt-[20px] xl:pt-[30px] 2xl:pt-[50px] text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight mb-2 lg:mb-3 xl:mb-4 2xl:mb-6 animate-on-scroll animate-delay-1 ${
                                    visibleSections.has('hero') ? 'animate-slide-up' : ''
                                }`}
                            >
                                The Card For A Borderless
                                <br />
                                World.
                            </h1>

                            {/* Subtitle */}
                            <p
                                className={`text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-4 lg:mb-6 xl:mb-8 2xl:mb-12 animate-on-scroll animate-delay-2 ${
                                    visibleSections.has('hero') ? 'animate-slide-up' : ''
                                }`}
                            >
                                One card for all your global online payments. Secure, simple, and instantly available.
                            </p>

                            {/* Card Visual */}
                            <div
                                className={`relative w-full max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto mb-4 lg:mb-6 xl:mb-8 2xl:mb-12 animate-on-scroll animate-delay-3 ${
                                    visibleSections.has('hero') ? 'animate-fade-scale' : ''
                                }`}
                            >
                                <div className="relative flex items-center justify-center">
                                    <div className="relative float-animation">
                                        <Image
                                            src="/card/card.png"
                                            alt="MPCard"
                                            width={450}
                                            height={366}
                                            className="object-contain drop-shadow-2xl lg:w-[550px] lg:h-[447px] xl:w-[650px] xl:h-[528px] 2xl:w-[750px] 2xl:h-[610px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why MPChat Card Section */}
            <section className="py-20 bg-[#F7F7F2]" data-section="why-mpchat">
                <div className="container mx-auto px-8 max-w-[1700px]">
                    <div
                        className={`text-center mb-16 animate-on-scroll ${
                            visibleSections.has('why-mpchat') ? 'animate-slide-up' : ''
                        }`}
                    >
                        <h2 className="text-4xl lg:text-[64px] font-bold text-gray-900 mb-8">Why MPChat Card</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12  pt-[120px]">
                        {/* For Online Shoppers */}
                        <div
                            className={`text-center animate-on-scroll animate-delay-1 ${
                                visibleSections.has('why-mpchat') ? 'animate-slide-up' : ''
                            }`}
                        >
                            <div className="flex justify-center mb-8">
                                <div className="flex items-center justify-center h-[88px]">
                                    <Image
                                        src="/card/pic1.png"
                                        alt="For Online Shoppers"
                                        width={237}
                                        height={88}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <h3 className="text-[32px] font-bold text-gray-900 pt-[40px] pb-[30px]">
                                For Online Shoppers
                            </h3>
                            <p className="text-gray-600 text-[20px] leading-relaxed">
                                Shop online with confidence using our secure virtual cards designed for e-commerce.
                            </p>
                        </div>

                        {/* For Subscription Lovers */}
                        <div
                            className={`text-center animate-on-scroll animate-delay-2 ${
                                visibleSections.has('why-mpchat') ? 'animate-slide-up' : ''
                            }`}
                        >
                            <div className="flex justify-center mb-8">
                                <div className="flex items-center justify-center h-[88px]">
                                    <Image
                                        src="/card/pic2.png"
                                        alt="For Subscription Lovers"
                                        width={267}
                                        height={74}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <h3 className="text-[32px] font-bold text-gray-900 pt-[40px] pb-[30px]">
                                For Subscription Lovers
                            </h3>
                            <p className="text-gray-600 text-[20px] leading-relaxed">
                                Manage all your subscriptions with dedicated cards and spending controls.
                            </p>
                        </div>

                        {/* For Digital Marketers */}
                        <div
                            className={`text-center animate-on-scroll animate-delay-3 ${
                                visibleSections.has('why-mpchat') ? 'animate-slide-up' : ''
                            }`}
                        >
                            <div className="flex justify-center mb-8">
                                <div className=" flex items-center justify-center h-[88px]">
                                    <Image
                                        src="/card/pic3.png"
                                        alt="For Digital Marketers"
                                        width={204}
                                        height={74}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <h3 className="text-[32px] font-bold text-gray-900 pt-[40px] pb-[30px]">
                                For Digital Marketers
                            </h3>
                            <p className="text-gray-600 text-[20px] leading-relaxed">
                                Scale your ad campaigns with flexible spending limits and real-time controls.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Designed for Your Every Need Section */}
            <section className="py-20 " data-section="designed-for-need">
                <div className="container mx-auto px-8 max-w-[1700px]">
                    <div
                        className={`text-center mb-16 animate-on-scroll ${
                            visibleSections.has('designed-for-need') ? 'animate-slide-up' : ''
                        }`}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                            Designed for Your Every Need
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-25">
                        {/* Online Shopping */}
                        <div
                            className={`relative rounded-3xl p-8 overflow-hidden animate-on-scroll animate-delay-1 min-h-[458px] flex items-end transition-transform duration-300 hover:scale-105 cursor-pointer ${
                                visibleSections.has('designed-for-need') ? 'animate-slide-left' : ''
                            }`}
                            style={{
                                backgroundImage: 'url(/card/pic4.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center top',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            {/* <div className="absolute inset-0 rounded-3xl transition-all duration-300"></div> */}
                            <div className="relative z-10 w-full pb-10">
                                <h3 className="text-[32px] font-bold mb-4 text-center">Online Shopping</h3>
                                <p className=" text-center leading-relaxed">
                                    Shop safely on any website with our virtual cards that protect your real account
                                    details.
                                </p>
                            </div>
                        </div>

                        {/* Subscriptions */}
                        <div
                            className={`relative rounded-3xl p-8 overflow-hidden animate-on-scroll animate-delay-2 min-h-[458px] flex items-end transition-transform duration-300 hover:scale-105 cursor-pointer ${
                                visibleSections.has('designed-for-need') ? 'animate-slide-right' : ''
                            }`}
                            style={{
                                backgroundImage: 'url(/card/pic5.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center top',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            {/* <div className="absolute inset-0 rounded-3xl transition-all duration-300"></div> */}
                            <div className="relative z-10 w-full pb-10">
                                <h3 className="text-[32px] font-bold mb-4 text-center">Subscriptions</h3>
                                <p className=" text-center leading-relaxed">
                                    Control your recurring payments with dedicated cards for each subscription service.
                                </p>
                            </div>
                        </div>

                        {/* Ad Payments */}
                        <div
                            className={`relative rounded-3xl p-8 overflow-hidden animate-on-scroll animate-delay-3 min-h-[458px] flex items-end transition-transform duration-300 hover:scale-105 cursor-pointer ${
                                visibleSections.has('designed-for-need') ? 'animate-slide-left' : ''
                            }`}
                            style={{
                                backgroundImage: 'url(/card/pic6.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center top',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            {/* <div className="absolute inset-0 rounded-3xl transition-all duration-300"></div> */}
                            <div className="relative z-10 w-full pb-10">
                                <h3 className="text-[32px] font-bold mb-4 text-center">Ad Payments</h3>
                                <p className=" text-center leading-relaxed">
                                    Streamline your advertising spend with cards designed for marketing campaigns.
                                </p>
                            </div>
                        </div>

                        {/* Travel */}
                        <div
                            className={`relative rounded-3xl p-8 overflow-hidden animate-on-scroll animate-delay-4 min-h-[458px] flex items-end transition-transform duration-300 hover:scale-105 cursor-pointer ${
                                visibleSections.has('designed-for-need') ? 'animate-slide-right' : ''
                            }`}
                            style={{
                                backgroundImage: 'url(/card/pic7.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center top',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            {/* <div className="absolute inset-0 rounded-3xl transition-all duration-300"></div> */}
                            <div className="relative z-10 w-full pb-10">
                                <h3 className="text-[32px] font-bold mb-4 text-center">Travel</h3>
                                <p className=" text-center leading-relaxed">
                                    Travel with confidence using cards optimized for international transactions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Deep Dive Section */}
            <section className="py-20 bg-[#F7F7F2]" data-section="features-deep-dive">
                <div className="container mx-auto px-8 max-w-[1700px]">
                    <div
                        className={`text-center mb-16 animate-on-scroll ${
                            visibleSections.has('features-deep-dive') ? 'animate-slide-up' : ''
                        }`}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 pb-28">Features Deep Dive</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {/* Instant Issuing */}
                        <div
                            className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('features-deep-dive') ? 'stacked-entry-1' : ''
                            }`}
                        >
                            <div className="flex justify-start mb-2">
                                <div className="flex items-center justify-center pb-6">
                                    <Image
                                        src="/card/pic8.png"
                                        alt="Instant Issuing"
                                        width={74}
                                        height={74}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <h3 className="text-[32px] font-bold text-gray-900 mb-4 text-left pb-4">
                                Instant
                                <br />
                                Issuing
                            </h3>
                            <p className="text-gray-600 text-[18px] text-left leading-relaxed">
                                Get your virtual card instantly and start spending right away. No waiting, no delays.
                            </p>
                        </div>

                        {/* Spending Controls */}
                        <div
                            className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('features-deep-dive') ? 'stacked-entry-2' : ''
                            }`}
                        >
                            <div className="flex justify-start mb-6">
                                <div className="flex items-center justify-center pb-2">
                                    <Image
                                        src="/card/pic9.png"
                                        alt="Spending Controls"
                                        width={74}
                                        height={74}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <h3 className="text-[32px] font-bold text-gray-900 mb-4 text-left pb-4">
                                Spending Controls
                            </h3>
                            <p className="text-gray-600 text-[18px] text-left leading-relaxed">
                                Set custom spending limits, merchant restrictions, and transaction controls for each
                                card.
                            </p>
                        </div>

                        {/* Multi-Card Management */}
                        <div
                            className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('features-deep-dive') ? 'stacked-entry-3' : ''
                            }`}
                        >
                            <div className="flex justify-start mb-6">
                                <div className="flex items-center justify-center pb-2">
                                    <Image
                                        src="/card/pic10.png"
                                        alt="Multi-Card Management"
                                        width={74}
                                        height={74}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <h3 className="text-[32px] font-bold text-gray-900 mb-4 text-left pb-4">
                                Multi-Card Management
                            </h3>
                            <p className="text-gray-600 text-[18px] text-left leading-relaxed">
                                Create and manage multiple virtual cards for different purposes from one dashboard.
                            </p>
                        </div>

                        {/* Top-Tier Security */}
                        <div
                            className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('features-deep-dive') ? 'stacked-entry-4' : ''
                            }`}
                        >
                            <div className="flex justify-start mb-6">
                                <div className="flex items-center justify-center pb-2">
                                    <Image
                                        src="/card/pic11.png"
                                        alt="Top-Tier Security"
                                        width={74}
                                        height={74}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <h3 className="text-[32px] font-bold text-gray-900 mb-4 text-left pb-4 pr-3">
                                Top-Tier Security
                            </h3>
                            <p className="text-gray-600 text-[18px] text-left leading-relaxed">
                                Bank-level encryption and fraud protection keep your transactions secure at all times.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* </Layout> */}
        </>
    )
}
