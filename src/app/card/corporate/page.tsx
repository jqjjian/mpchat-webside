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
                            {/* <div
                                className={`w-full max-w-md sm:max-w-lg lg:max-w-none flex mb-4 lg:mb-6 xl:mb-8 2xl:mb-12 animate-on-scroll gap-2 sm:gap-3 lg:gap-6 xl:gap-8 justify-center mx-auto ${
                                    visibleSections.has('hero') ? 'animate-slide-up' : ''
                                }`}
                            >
                                <Link href="/card/personal" className="flex-1">
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
                                                Personal
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
                                <Link href="/card/corporate" className="flex-1">
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
                                                Business
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
                            </div> */}

                            {/* Main Title */}
                            <h1
                                className={`pt-[10px] lg:pt-[20px] xl:pt-[30px] 2xl:pt-[50px] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight mb-2 lg:mb-3 xl:mb-4 2xl:mb-6 animate-on-scroll animate-delay-1 font-redotpaybold ${
                                    visibleSections.has('hero') ? 'animate-slide-up' : ''
                                }`}
                            >
                                The All-in-One Financial
                                <br />
                                Platform for Modern Teams.
                            </h1>

                            {/* Subtitle */}
                            <p
                                className={`text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-4 lg:mb-6 xl:mb-8 2xl:mb-12 px-4 animate-on-scroll animate-delay-2 ${
                                    visibleSections.has('hero') ? 'animate-slide-up' : ''
                                }`}
                            >
                                Issue virtual cards, manage team spending, and streamline your global payments.
                            </p>

                            {/* Card Visual */}
                            <div
                                className={`relative w-full max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto mb-4 lg:mb-6 xl:mb-8 2xl:mb-12 animate-on-scroll animate-delay-3 ${
                                    visibleSections.has('hero') ? 'animate-fade-scale' : ''
                                }`}
                            >
                                <div className="relative flex items-center justify-center pt-[10px] lg:pt-[20px] xl:pt-[30px] 2xl:pt-[50px]">
                                    <div className="relative float-animation pt-30 xs:pt-0">
                                        <Image
                                            src="/card/Group_1597889250.png"
                                            alt="MPCard"
                                            width={300}
                                            height={210}
                                            className="object-contain drop-shadow-2xl w-[250px] h-[175px] sm:w-[300px] sm:h-[210px] lg:w-[400px] lg:h-[280px] xl:w-[450px] xl:h-[315px] 2xl:w-[500px] 2xl:h-[350px]"
                                        />
                                    </div>
                                    <div className="absolute top-[80px]  xl:top-[180px] 2xl:top-[120px] left-30 animate-[floatRandomB1_6s_ease-in-out_infinite]">
                                        <Image
                                            src="/card/b1.png"
                                            alt="MPCard"
                                            width={45}
                                            height={45}
                                            className="object-contain drop-shadow-2xl w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] 2xl:w-[87px] 2xl:h-[87px]"
                                        />
                                    </div>
                                    <div className="absolute top-20 sm:top-20 lg:top-6 xl:top-8 2xl:top-20 right-[160px] sm:right-[180px] lg:right-[120px] xl:right-[140px] 2xl:right-[180px] animate-[floatRandomB3_7s_ease-in-out_infinite_0.5s]">
                                        <Image
                                            src="/card/b3.png"
                                            alt="MPCard"
                                            width={60}
                                            height={51}
                                            className="object-contain drop-shadow-2xl w-[40px] h-[34px] sm:w-[50px] sm:h-[42px] lg:w-[80px] lg:h-[68px] xl:w-[90px] xl:h-[77px] 2xl:w-[116px] 2xl:h-[99px]"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 left-[120px] sm:left-[150px] lg:left-[80px] xl:left-[100px] 2xl:left-[130px] animate-[floatRandomB2_8s_ease-in-out_infinite_1s]">
                                        <Image
                                            src="/card/b2.png"
                                            alt="MPCard"
                                            width={50}
                                            height={50}
                                            className="object-contain drop-shadow-2xl w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] lg:w-[70px] lg:h-[70px] xl:w-[80px] xl:h-[80px] 2xl:w-[99px] 2xl:h-[99px]"
                                        />
                                    </div>
                                    <div className="absolute top-[220px] sm:top-66 lg:top-[280px] xl:top-80 2xl:top-96 right-[120px] sm:right-[80px] lg:right-[80px] animate-[floatRandomB4_5.5s_ease-in-out_infinite_1.5s]">
                                        <Image
                                            src="/card/b4.png"
                                            alt="MPCard"
                                            width={50}
                                            height={50}
                                            className="object-contain drop-shadow-2xl w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] lg:w-[70px] lg:h-[70px] xl:w-[80px] xl:h-[80px] 2xl:w-[100px] 2xl:h-[100px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Who We Serve Section */}
            <section className="py-12 lg:py-20 bg-[#F7F7F2]" data-section="who-we-serve">
                <div className="container mx-auto px-8 max-w-[1700px]">
                    <div
                        className={`text-center mb-8 lg:mb-16 animate-on-scroll ${
                            visibleSections.has('who-we-serve') ? 'animate-slide-up' : ''
                        }`}
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-[64px] font-bold text-gray-900 mb-4 lg:mb-8 font-redotpaybold">
                            Who We Serve
                        </h2>
                        <p className="text-xl sm:text-2xl lg:text-[40px] text-gray-500 pt-[20px] lg:pt-[40px] pb-[15px] lg:pb-25">
                            Built for the New Generation of Global Business
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                        {/* E-commerce Sellers */}
                        <div
                            className={`text-center bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('who-we-serve') ? 'stacked-entry-1' : ''
                            }`}
                        >
                            <div className="flex justify-center mb-4 lg:mb-6">
                                <div className="flex items-center justify-center pb-4 lg:pb-6">
                                    <Image
                                        src="/card/w-1.png"
                                        alt="Instant Issuing"
                                        width={74}
                                        height={74}
                                        className="object-contain w-[50px] h-[50px] lg:w-[74px] lg:h-[74px]"
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg sm:text-xl lg:text-[28px] font-[500] text-gray-900 mb-3 lg:mb-4 pb-2 lg:pb-4 font-redotpaybold">
                                E-commerce Sellers
                            </h3>
                        </div>

                        {/* Marketing Agencies */}
                        <div
                            className={`bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('who-we-serve') ? 'stacked-entry-2' : ''
                            }`}
                        >
                            <div className="flex justify-center mb-4 lg:mb-6">
                                <div className="flex items-center justify-center pb-4 lg:pb-6">
                                    <Image
                                        src="/card/w-2.png"
                                        alt="Spending Controls"
                                        width={74}
                                        height={74}
                                        className="object-contain w-[50px] h-[50px] lg:w-[74px] lg:h-[74px]"
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg sm:text-xl lg:text-[28px] font-[500] text-gray-900 mb-3 lg:mb-4 text-center pb-2 lg:pb-4 font-redotpaybold">
                                Marketing Agencies
                            </h3>
                        </div>

                        {/* SaaS Companies */}
                        <div
                            className={`bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('who-we-serve') ? 'stacked-entry-3' : ''
                            }`}
                        >
                            <div className="flex justify-center mb-4 lg:mb-6">
                                <div className="flex items-center justify-center pb-4 lg:pb-6">
                                    <Image
                                        src="/card/w-3.png"
                                        alt="Multi-Card Management"
                                        width={74}
                                        height={74}
                                        className="object-contain w-[50px] h-[50px] lg:w-[74px] lg:h-[74px]"
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg sm:text-xl lg:text-[28px] font-[500] text-gray-900 mb-3 lg:mb-4 text-center pb-2 lg:pb-4 font-redotpaybold">
                                SaaS
                                <br />
                                Companies
                            </h3>
                        </div>

                        {/* Global Freelancers */}
                        <div
                            className={`bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('who-we-serve') ? 'stacked-entry-4' : ''
                            }`}
                        >
                            <div className="flex justify-center mb-4 lg:mb-6">
                                <div className="flex items-center justify-center pb-4 lg:pb-6">
                                    <Image
                                        src="/card/w-4.png"
                                        alt="Top-Tier Security"
                                        width={74}
                                        height={74}
                                        className="object-contain w-[50px] h-[50px] lg:w-[74px] lg:h-[74px]"
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg sm:text-xl lg:text-[28px] font-[500] text-gray-900 mb-3 lg:mb-4 text-center pb-2 lg:pb-4 font-redotpaybold">
                                Global Freelancers
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-12 lg:py-20" data-section="solutions">
                <div className="container mx-auto px-8 max-w-[1700px]">
                    <div
                        className={`text-center mb-8 lg:mb-16 animate-on-scroll ${
                            visibleSections.has('solutions') ? 'animate-slide-up' : ''
                        }`}
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-[64px] font-bold text-gray-900 mb-4 lg:mb-8 font-redotpaybold">
                            Solutions
                        </h2>
                    </div>

                    <div className="pt-8 lg:pt-16 space-y-4 lg:space-y-5">
                        {/* Smart Expense Management */}
                        <div
                            className={`bg-white rounded-[20px] lg:rounded-[40px] px-6 lg:px-12 shadow-lg animate-on-scroll transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
                                visibleSections.has('solutions') ? 'animate-slide-up' : ''
                            }`}
                        >
                            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                                <div className="flex-1 lg:pr-8">
                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 lg:mb-10 font-redotpaybold">
                                        Smart Expense Management
                                    </h3>
                                    <div className="space-y-3 lg:space-y-4 text-base lg:text-xl text-gray-600 leading-relaxed mt-6 lg:mt-8">
                                        <p>
                                            <strong>Stop Chasing Receipts. Start Controlling Budgets.</strong>
                                        </p>
                                        <p>
                                            Give every employee or department a dedicated virtual card with a pre-set
                                            spending limit.
                                        </p>
                                        <p>
                                            Track every transaction in real-time from a single dashboard. Approve,
                                            freeze, or modify cards with one click.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="relative">
                                        <Image
                                            src="/card/Group_1597889251.png"
                                            alt="Smart Expense Management"
                                            width={430}
                                            height={360}
                                            className="object-contain w-[300px] h-[252px] lg:w-[430px] lg:h-[360px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Streamlined Ad Spend Management */}
                        <div
                            className={`bg-white rounded-[20px] lg:rounded-[40px] px-6 lg:px-12 shadow-lg animate-on-scroll transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
                                visibleSections.has('solutions') ? 'animate-slide-up' : ''
                            }`}
                        >
                            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                                <div className="flex-1 lg:pr-8">
                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 lg:mb-10 font-redotpaybold">
                                        Streamlined Ad Spend Management
                                    </h3>
                                    <div className="space-y-3 lg:space-y-4 text-base lg:text-xl text-gray-600 leading-relaxed mt-6 lg:mt-8">
                                        <p>
                                            <strong>The Card That Ad Platforms Trust.</strong>{' '}
                                        </p>
                                        <p>Campaigns On Facebook, Google, And TikTok.</p>
                                        <p>Drastically Reduce Account Suspensions Caused By</p>
                                        <p>Payment Issues And Simplify Budget Tracking.</p>
                                    </div>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="relative">
                                        <Image
                                            src="/card/Group_1597889252.png"
                                            alt="Streamlined Ad Spend Management"
                                            width={430}
                                            height={360}
                                            className="object-contain w-[300px] h-[252px] lg:w-[430px] lg:h-[360px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 pt-8 lg:pt-25 ">
                        {/* Online Shopping */}
                        <div
                            className={`relative rounded-3xl p-6 lg:p-8 shadow-lg overflow-hidden animate-on-scroll animate-delay-1 min-h-[300px] lg:min-h-[458px] flex items-end transition-transform duration-300 hover:scale-105 cursor-pointer ${
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
                                    Corporate Procurement
                                </h3>
                                <p className="text-sm sm:text-base lg:text-lg text-center leading-relaxed px-2 lg:px-0">
                                    {`Globally procure materials and services. Our virtual cards isolate your company's main account, making every purchase traceable and secure.`}
                                </p>
                            </div>
                        </div>

                        {/* Subscriptions */}
                        <div
                            className={`relative rounded-3xl p-6 shadow-lg lg:p-8 overflow-hidden animate-on-scroll animate-delay-2 min-h-[300px] lg:min-h-[458px] flex items-end transition-transform duration-300 hover:scale-105 cursor-pointer ${
                                visibleSections.has('designed-for-need') ? 'animate-slide-right' : ''
                            }`}
                            style={{
                                backgroundImage: 'url(/card/pic5.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center top',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <div className="relative z-10 w-full pb-2">
                                <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold mb-3 lg:mb-4 text-center font-redotpaybold">
                                    SaaS & Software Subscriptions
                                </h3>
                                <p className="text-sm sm:text-base lg:text-lg text-center leading-relaxed px-2 lg:px-0">
                                    {`Create dedicated cards for each enterprise subscription like Adobe for Teams, Microsoft 365, and other SaaS. Granularly manage expenses and cancel anytime to prevent unwanted renewals.`}
                                </p>
                            </div>
                        </div>

                        {/* Ad Payments */}
                        <div
                            className={`relative rounded-3xl p-6 shadow-lg lg:p-8 overflow-hidden animate-on-scroll animate-delay-3 min-h-[300px] lg:min-h-[458px] flex items-end transition-transform duration-300 hover:scale-105 cursor-pointer ${
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
                                    Marketing Payments
                                </h3>
                                <p className="text-sm sm:text-base lg:text-lg text-center leading-relaxed px-2 lg:px-0">
                                    {`Set up dedicated cards for Facebook, Google, and TikTok ad campaigns. Assign budgets to different teams or projects to avoid overspending and payment rejections.`}
                                </p>
                            </div>
                        </div>

                        {/* Travel */}
                        <div
                            className={`relative rounded-3xl p-6 shadow-lg lg:p-8 overflow-hidden animate-on-scroll animate-delay-4 min-h-[300px] lg:min-h-[458px] flex items-end transition-transform duration-300 hover:scale-105 cursor-pointer ${
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
                                    Employee Travel & Expenses
                                </h3>
                                <p className="text-sm sm:text-base lg:text-lg text-center leading-relaxed px-2 lg:px-0">
                                    {`Equip your team with physical MPChat Cards for global business travel. Simplify expense reporting and monitor T&E spending in real-time.`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Collaboration & Risk Control Section */}
            <section className="py-12 lg:py-20 bg-[#F7F7F2]" data-section="team-collaboration">
                <div className="container mx-auto px-8 max-w-[1700px]">
                    <div
                        className={`text-center mb-8 lg:mb-16 animate-on-scroll ${
                            visibleSections.has('team-collaboration') ? 'animate-slide-up' : ''
                        }`}
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-[64px] font-bold text-gray-900 mb-4 lg:mb-8 font-redotpaybold">
                            Team Collaboration & Risk Control
                        </h2>
                        <p className="text-xl sm:text-2xl lg:text-[40px] text-gray-500 pt-[20px] lg:pt-[40px] pb-6 lg:pb-10">
                            Collaboration and Security, Under Your Control
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                        {/* Bulk Card Issuing */}
                        <div
                            className={`text-left bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('team-collaboration') ? 'stacked-entry-1' : ''
                            }`}
                        >
                            <div className="flex justify-start mb-4 lg:mb-6">
                                <Image
                                    src="/card/Mask group-1.png"
                                    alt="Bulk Card Issuing"
                                    width={100}
                                    height={100}
                                    className="object-contain w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]"
                                />
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-gray-900 mb-3 lg:mb-4 font-redotpaybold">
                                Instant Issuing
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base lg:text-[18px] leading-relaxed">
                                Get your virtual card instantly and start spending right away. No waiting, no delays.
                            </p>
                        </div>

                        {/* Team Collaboration */}
                        <div
                            className={`text-left bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('team-collaboration') ? 'stacked-entry-2' : ''
                            }`}
                        >
                            <div className="flex justify-start mb-4 lg:mb-6">
                                <Image
                                    src="/card/Mask group-2.png"
                                    alt="Team Collaboration"
                                    width={100}
                                    height={100}
                                    className="object-contain w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]"
                                />
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-gray-900 mb-3 lg:mb-4 font-redotpaybold">
                                Team Collaboration
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base lg:text-[18px] leading-relaxed">
                                Assign cards with specific budgets to team members and monitor all expenses from a
                                unified backend.
                            </p>
                        </div>

                        {/* Spending Controls */}
                        <div
                            className={`text-left bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('team-collaboration') ? 'stacked-entry-3' : ''
                            }`}
                        >
                            <div className="flex justify-start mb-4 lg:mb-6">
                                <Image
                                    src="/card/Mask group-3.png"
                                    alt="Spending Controls"
                                    width={100}
                                    height={100}
                                    className="object-contain w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]"
                                />
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-gray-900 mb-3 lg:mb-4 font-redotpaybold">
                                Spending Controls
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base lg:text-[18px] leading-relaxed">
                                Set independent monthly or single transaction limits for each card, and freeze/unfreeze
                                cards with one click.
                            </p>
                        </div>

                        {/* Real-time Alerts */}
                        <div
                            className={`text-left bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('team-collaboration') ? 'stacked-entry-4' : ''
                            }`}
                        >
                            <div className="flex justify-start mb-4 lg:mb-6">
                                <Image
                                    src="/card/Mask group-4.png"
                                    alt="Real-time Alerts"
                                    width={100}
                                    height={100}
                                    className="object-contain w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]"
                                />
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-gray-900 mb-3 lg:mb-4 pr-3 font-redotpaybold">
                                Real-time Alerts
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base lg:text-[18px] leading-relaxed">
                                Real-time notifications for all transactions, enabling you to grasp the dynamics of your
                                funds in the first place.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 lg:py-20" data-section="faq">
                <div className="container mx-auto px-8 max-w-[1700px]">
                    <div
                        className={`text-center mb-8 lg:mb-16 animate-on-scroll ${
                            visibleSections.has('faq') ? 'animate-slide-up' : ''
                        }`}
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-[64px] font-bold text-gray-900 mb-4 lg:mb-8 font-redotpaybold">
                            FAQ
                        </h2>
                    </div>

                    <div className="space-y-6 lg:space-y-8">
                        {/* FAQ Item 1 */}
                        <div
                            className={`bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('faq') ? 'animate-slide-up' : ''
                            }`}
                        >
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 font-redotpaybold">
                                Q1: How can our business benefit from using MPChat virtual cards?
                            </h3>
                            <div className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed space-y-4">
                                <p>
                                    <strong>A:</strong> Your business can benefit in several key ways:
                                </p>
                                <p>
                                    <strong>Enhanced Financial Security:</strong>{' '}
                                    {`By creating separate virtual cards for different vendors or projects (e.g., software subscriptions, ad campaigns, procurement), you effectively isolate risk. Even if one card's details are compromised, your company's primary bank account remains completely secure.`}
                                </p>
                                <p>
                                    <strong>Granular Budget Control:</strong> You can set unique spending limits,
                                    expiration dates, and usage rules for each card. This allows for precise control
                                    over project budgets and prevents overspending. For example, create a dedicated card
                                    for a Facebook ad campaign with a fixed monthly budget.
                                </p>
                                <p>
                                    <strong>Simplified Expense Management:</strong> Assigning dedicated virtual cards
                                    for employee travel or specific procurement tasks ensures a clear and transparent
                                    transaction record. Every payment is traceable, which significantly streamlines
                                    traditional expense reporting and reconciliation processes.
                                </p>
                                <p>
                                    <strong>Improved Operational Agility:</strong> Employees can instantly request and
                                    receive approval for virtual cards for urgent purchases or online payments,
                                    eliminating lengthy administrative delays and boosting team productivity.
                                </p>
                            </div>
                        </div>

                        {/* FAQ Item 2 */}
                        <div
                            className={`bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll animate-delay-1 ${
                                visibleSections.has('faq') ? 'animate-slide-up' : ''
                            }`}
                        >
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 font-redotpaybold">
                                Q2: What specific corporate payment scenarios can MPChat virtual cards be used for?
                            </h3>
                            <div className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed space-y-4">
                                <p>
                                    <strong>A:</strong> Our virtual cards are designed to cover nearly all online
                                    corporate payment scenarios, including:
                                </p>
                                <p>
                                    <strong>SaaS (Software as a Service) Subscriptions:</strong> Pay for Adobe Creative
                                    Cloud for Teams, Microsoft 365, project management tools, and various cloud
                                    services.
                                </p>
                                <p>
                                    <strong>Online Advertising:</strong> Effortlessly pay for campaigns on major
                                    platforms like Google Ads, Facebook/Instagram Ads, and TikTok Ads.
                                </p>
                                <p>
                                    <strong>Corporate Procurement:</strong> Make online purchases from e-commerce
                                    platforms and suppliers worldwide.
                                </p>
                                <p>
                                    <strong>Travel Bookings:</strong> Employees can use their assigned virtual cards to
                                    book flights, hotels, and other travel-related expenses.
                                </p>
                            </div>
                        </div>

                        {/* FAQ Item 3 */}
                        <div
                            className={`bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll animate-delay-2 ${
                                visibleSections.has('faq') ? 'animate-slide-up' : ''
                            }`}
                        >
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 font-redotpaybold">
                                Q3: How do we fund our virtual cards?
                            </h3>
                            <div className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed space-y-4">
                                <p>
                                    <strong>A:</strong> To ensure full compliance and clear accounting, our corporate
                                    virtual cards support funding via Fiat currency ONLY. We offer a variety of
                                    convenient fiat funding methods to support your global business needs, including:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Bank Wire Transfer</li>
                                    <li>Credit/Debit Card Payments</li>
                                    <li>Localized Electronic Payment Gateways (e.g., SEPA, ACH)</li>
                                </ul>
                                <p>
                                    This approach ensures that every funding source is fully documented and easily
                                    auditable for your finance department.
                                </p>
                            </div>
                        </div>

                        {/* FAQ Item 4 */}
                        <div
                            className={`bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll animate-delay-3 ${
                                visibleSections.has('faq') ? 'animate-slide-up' : ''
                            }`}
                        >
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 font-redotpaybold">
                                Q4: What happens to a virtual card if an employee leaves the company or a project ends?
                            </h3>
                            <div className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed space-y-4">
                                <p>
                                    <strong>A:</strong> Administrators can manage the status of all virtual cards from
                                    the dashboard at any time. If an employee departs or a project is completed, you can
                                    instantly freeze or delete the associated virtual card. Any remaining balance on the
                                    card is automatically returned to your main corporate account, ensuring no funds are
                                    lost or wasted. This flexible management prevents the risk of misuse associated with
                                    lost or forgotten physical cards.
                                </p>
                            </div>
                        </div>

                        {/* FAQ Item 5 */}
                        <div
                            className={`bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll animate-delay-4 ${
                                visibleSections.has('faq') ? 'animate-slide-up' : ''
                            }`}
                        >
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 font-redotpaybold">
                                Q5: Are there extra transaction fees for using virtual cards?
                            </h3>
                            <div className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed space-y-4">
                                <p>
                                    <strong>A:</strong> We are committed to a transparent and competitive fee structure.
                                    Typically, there is a fixed service fee for card creation and maintenance. For
                                    transactions, we offer highly competitive foreign exchange rates, especially for
                                    cross-border payments. Compared to the complex wire transfer fees and less favorable
                                    exchange rates from traditional banks, using our virtual cards for global
                                    procurement and payments can often result in significant cost savings. For a
                                    detailed breakdown of our rates, please refer to our service agreement or contact
                                    your account manager.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            {/* <section className="py-20 bg-gradient-to-b from-[#E8F5E8] to-[#F7F7F2]" data-section="cta">
                <div className="container mx-auto px-8 max-w-[1700px] text-center">
                    <div className={`animate-on-scroll ${visibleSections.has('cta') ? 'animate-slide-up' : ''}`}>
                        <h2 className="text-4xl lg:text-[64px] font-bold text-gray-900 mb-8 font-redotpaybold">
                            Seamless Chat, Borderless Pay.
                        </h2>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-full text-lg font-semibold transition-colors duration-300 font-redotpaybold">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section> */}
        </>
    )
}
