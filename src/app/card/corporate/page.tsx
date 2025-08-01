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
            {/* <style jsx>{`
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
            `}</style> */}
            {/* <Layout> */}
            {/* Hero Section */}
            <section className="relative min-h-[1250px] overflow-hidden" data-section="hero">
                {/* Base gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#E8F5E8] via-[#E8F5E8] to-[#F7F7F2]"></div>

                {/* Small screen background (< 1920px) */}
                <div
                    className="min-h-[1250px] w-full absolute inset-0 bg-[url('/card/Group_1597889257.png')] bg-no-repeat opacity-80 min-[1920px]:hidden"
                    style={{
                        backgroundPosition: 'center top',
                        backgroundAttachment: 'scroll'
                    }}
                ></div>

                {/* Large screen background (1920px+) */}
                <div
                    className="min-h-[1250px] w-full absolute inset-0 bg-[url('/card/Group_1597889257.png')] bg-no-repeat opacity-80 hidden min-[1920px]:block"
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundAttachment: 'scroll'
                    }}
                ></div>

                {/* Gradient overlay for seamless transition */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F7F7F2] opacity-60"></div>

                {/* Content Container */}
                <div className="relative z-10 flex items-center justify-center min-h-[900px] px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20">
                    <div className="container w-full max-w-[1700px] mx-auto">
                        <div className="flex flex-col items-center text-center py-8">
                            {/* Navigation Pills */}
                            <div
                                className={`w-full flex mb-6 lg:mb-8 xl:mb-12 animate-on-scroll gap-4 lg:gap-6 xl:gap-8 justify-center mx-auto ${
                                    visibleSections.has('hero') ? 'animate-slide-up' : ''
                                }`}
                            >
                                <Link href="/card/personal" className="flex-1">
                                    <div className="relative flex items-center gap-2 lg:gap-3 px-4 lg:px-6 xl:px-8 py-3 lg:py-4 text-gray-700 font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg  border border-white">
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
                                                Personal
                                            </span>
                                        </div>
                                        <Image src="/card/j2.png" alt="arrow" width={15} height={18}></Image>
                                    </div>
                                </Link>
                                <Link href="/card/corporate" className="flex-1">
                                    <div
                                        className="flex-1 relative flex items-center gap-2 lg:gap-3 px-4 lg:px-6 xl:px-8 py-3 lg:py-4 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg "
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
                                                Corporate
                                            </span>
                                        </div>
                                        <Image src="/card/j1.png" alt="arrow" width={15} height={18}></Image>
                                    </div>
                                </Link>
                            </div>

                            {/* Main Title */}
                            <h1
                                className={`pt-[20px] lg:pt-[40px] xl:pt-[60px] text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight mb-3 lg:mb-4 xl:mb-6 animate-on-scroll animate-delay-1 ${
                                    visibleSections.has('hero') ? 'animate-slide-up' : ''
                                }`}
                            >
                                The All-in-One Financial
                                <br />
                                Platform for Modern Teams.
                            </h1>

                            {/* Subtitle */}
                            <p
                                className={`text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-6 lg:mb-8 xl:mb-12 animate-on-scroll animate-delay-2 ${
                                    visibleSections.has('hero') ? 'animate-slide-up' : ''
                                }`}
                            >
                                Issue unlimited virtual cards, manage team spending, and streamline your global
                                payments.
                            </p>

                            {/* Card Visual */}
                            <div
                                className={`relative w-full max-w-2xl lg:max-w-3xl mx-auto mb-6 lg:mb-8 xl:mb-12 animate-on-scroll animate-delay-3 ${
                                    visibleSections.has('hero') ? 'animate-fade-scale' : ''
                                }`}
                            >
                                <div className="relative flex items-center justify-center pt-[20px] lg:pt-[40px] xl:pt-[160px]">
                                    <div className="relative float-animation ">
                                        <Image
                                            src="/card/Group_1597889250.png"
                                            alt="MPCard"
                                            width={400}
                                            height={280}
                                            className="object-contain drop-shadow-2xl lg:w-[450px] lg:h-[315px] xl:w-[500px] xl:h-[350px]"
                                        />
                                    </div>
                                    <div className="absolute top-[180px] lg:top-[220px] xl:top-[250px] left-0 animate-[floatRandomB1_6s_ease-in-out_infinite]">
                                        <Image
                                            src="/card/b1.png"
                                            alt="MPCard"
                                            width={60}
                                            height={60}
                                            className="object-contain drop-shadow-2xl lg:w-[75px] lg:h-[75px] xl:w-[87px] xl:h-[87px]"
                                        />
                                    </div>
                                    <div className="absolute top-6 lg:top-8 xl:top-10 right-[120px] lg:right-[160px] xl:right-[200px] animate-[floatRandomB3_7s_ease-in-out_infinite_0.5s]">
                                        <Image
                                            src="/card/b3.png"
                                            alt="MPCard"
                                            width={80}
                                            height={68}
                                            className="object-contain drop-shadow-2xl lg:w-[98px] lg:h-[84px] xl:w-[116px] xl:h-[99px]"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 left-[80px] lg:left-[110px] xl:left-[140px] animate-[floatRandomB2_8s_ease-in-out_infinite_1s]">
                                        <Image
                                            src="/card/b2.png"
                                            alt="MPCard"
                                            width={70}
                                            height={70}
                                            className="object-contain drop-shadow-2xl lg:w-[85px] lg:h-[85px] xl:w-[99px] xl:h-[99px]"
                                        />
                                    </div>
                                    <div className="absolute top-28 lg:top-32 xl:top-40 right-0 animate-[floatRandomB4_5.5s_ease-in-out_infinite_1.5s]">
                                        <Image
                                            src="/card/b4.png"
                                            alt="MPCard"
                                            width={70}
                                            height={70}
                                            className="object-contain drop-shadow-2xl lg:w-[85px] lg:h-[85px] xl:w-[100px] xl:h-[100px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Who We Serve Section */}
            <section className="py-20 bg-[#F7F7F2]" data-section="who-we-serve">
                <div className="container mx-auto px-8 max-w-[1700px]">
                    <div
                        className={`text-center mb-16 animate-on-scroll ${
                            visibleSections.has('who-we-serve') ? 'animate-slide-up' : ''
                        }`}
                    >
                        <h2 className="text-4xl lg:text-[64px] font-bold text-gray-900 mb-8">Who We Serve</h2>
                        <p className="text-[40px]  text-gray-500 pt-[40px] pb-25">
                            Built for the New Generation of Global Business
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {/* E-commerce Sellers */}
                        <div
                            className={`text-center bg-white rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('who-we-serve') ? 'stacked-entry-1' : ''
                            }`}
                        >
                            <div className="flex justify-center mb-6">
                                <div className="flex items-center justify-center pb-6">
                                    <Image
                                        src="/card/w-1.png"
                                        alt="Instant Issuing"
                                        width={74}
                                        height={74}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <h3 className="text-[28px] font-[500] text-gray-900 mb-4 pb-4">E-commerce Sellers</h3>
                            {/* <p className="text-gray-600 text-base leading-relaxed">
                                Get your virtual card instantly and start spending right away. No waiting, no delays.
                            </p> */}
                        </div>

                        {/* Marketing Agencies */}
                        <div
                            className={`bg-white rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('who-we-serve') ? 'stacked-entry-2' : ''
                            }`}
                        >
                            <div className="flex justify-center mb-6">
                                <div className="flex items-center justify-center pb-6">
                                    <Image
                                        src="/card/w-2.png"
                                        alt="Spending Controls"
                                        width={74}
                                        height={74}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <h3 className="text-[28px] font-[500] text-gray-900 mb-4 pb-4 text-center">
                                Marketing Agencies
                            </h3>
                            {/* <p className="text-gray-600 text-base text-left leading-relaxed">
                                Set custom spending limits, merchant restrictions, and transaction controls for each
                                card.
                            </p> */}
                        </div>

                        {/* SaaS Companies */}
                        <div
                            className={`bg-white rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('who-we-serve') ? 'stacked-entry-3' : ''
                            }`}
                        >
                            <div className="flex justify-center mb-6">
                                <div className="flex items-center justify-center pb-6">
                                    <Image
                                        src="/card/w-3.png"
                                        alt="Multi-Card Management"
                                        width={74}
                                        height={74}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <h3 className="text-[28px] font-[500] text-gray-900 mb-4 text-center pb-4">
                                SaaS
                                <br />
                                Companies
                            </h3>
                            {/* <p className="text-gray-600 text-base text-left leading-relaxed">
                                Create and manage multiple virtual cards for different purposes from one dashboard.
                            </p> */}
                        </div>

                        {/* Global Freelancers */}
                        <div
                            className={`bg-white rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('who-we-serve') ? 'stacked-entry-4' : ''
                            }`}
                        >
                            <div className="flex justify-center mb-6">
                                <div className="flex items-center justify-center pb-6">
                                    <Image
                                        src="/card/w-4.png"
                                        alt="Top-Tier Security"
                                        width={74}
                                        height={74}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <h3 className="text-[28px] font-[500] text-gray-900 mb-4 text-center pb-4">
                                Global Freelancers
                            </h3>
                            {/* <p className="text-gray-600 text-base text-left leading-relaxed">
                                Bank-level encryption and fraud protection keep your transactions secure at all times.
                            </p> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-20 " data-section="solutions">
                <div className="container mx-auto px-8 max-w-[1700px]">
                    <div
                        className={`text-center mb-16 animate-on-scroll ${
                            visibleSections.has('solutions') ? 'animate-slide-up' : ''
                        }`}
                    >
                        <h2 className="text-4xl lg:text-[64px] font-bold text-gray-900 mb-8">Solutions</h2>
                    </div>

                    <div className="pt-16 space-y-5">
                        {/* Smart Expense Management */}
                        <div
                            className={`bg-white rounded-[40px] px-12 shadow-lg animate-on-scroll transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
                                visibleSections.has('solutions') ? 'animate-slide-up' : ''
                            }`}
                        >
                            <div className="flex flex-col lg:flex-row items-center gap-16">
                                <div className="flex-1 lg:pr-8 ">
                                    <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
                                        Smart Expense Management
                                    </h3>
                                    <div className="space-y-4 text-xl text-gray-600 leading-relaxed mt-8">
                                        <p>Issue Cards To Employees With Pre-Set Budgets.</p>
                                        <p>Track Every Expense In Real-Time And Eliminate</p>
                                        <p>Reimbursement Hassles</p>
                                    </div>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="relative">
                                        <Image
                                            src="/card/Group_1597889251.png"
                                            alt="Smart Expense Management"
                                            width={430}
                                            height={360}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Streamlined Ad Spend Management */}
                        <div
                            className={`bg-white rounded-[40px] px-12 shadow-lg animate-on-scroll transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
                                visibleSections.has('solutions') ? 'animate-slide-up' : ''
                            }`}
                        >
                            <div className="flex flex-col lg:flex-row items-center gap-16">
                                <div className="flex-1 lg:pr-8">
                                    <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
                                        Streamlined Ad Spend Management
                                    </h3>
                                    <div className="space-y-4 text-xl text-gray-600 leading-relaxed mt-8">
                                        <p>Create Unlimited Unique Virtual Cards For Your Ad</p>
                                        <p>Campaigns On Facebook, Google, And TikTok.</p>
                                        <p>Drastically Reduce Account Suspensions Caused By</p>
                                        <p>Payment Issues And Simplify Budget Tracking.</p>
                                    </div>
                                </div>
                                <div className=" flex justify-center lg:justify-end">
                                    <div className="relative">
                                        <Image
                                            src="/card/Group_1597889252.png"
                                            alt="Streamlined Ad Spend Management"
                                            width={430}
                                            height={360}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Collaboration & Risk Control Section */}
            <section className="py-20 bg-[#F7F7F2]" data-section="team-collaboration">
                <div className="container mx-auto px-8 max-w-[1700px]">
                    <div
                        className={`text-center mb-16 animate-on-scroll ${
                            visibleSections.has('team-collaboration') ? 'animate-slide-up' : ''
                        }`}
                    >
                        <h2 className="text-4xl lg:text-[64px] font-bold text-gray-900 mb-8">
                            Team Collaboration & Risk Control
                        </h2>
                        <p className="text-[40px] text-gray-500 pt-[40px] pb-10">
                            Collaboration and Security, Under Your Control
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {/* Bulk Card Issuing */}
                        <div
                            className={`text-left bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('team-collaboration') ? 'stacked-entry-1' : ''
                            }`}
                        >
                            <div className="flex justify-start mb-6">
                                <Image
                                    src="/card/Mask group-1.png"
                                    alt="Bulk Card Issuing"
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-[32px] font-bold text-gray-900 mb-4">Bulk Card Issuing</h3>
                            <p className="text-gray-600 text-[18px] leading-relaxed">
                                Create dedicated virtual cards in bulk for each advertising account or marketing
                                campaign to minimize risk and simplify tracking.
                            </p>
                        </div>

                        {/* Team Collaboration */}
                        <div
                            className={`text-left bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('team-collaboration') ? 'stacked-entry-2' : ''
                            }`}
                        >
                            <div className="flex justify-start mb-6">
                                <Image
                                    src="/card/Mask group-2.png"
                                    alt="Team Collaboration"
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-[32px] font-bold text-gray-900 mb-4">Team Collaboration</h3>
                            <p className="text-gray-600 text-[18px] leading-relaxed">
                                Assign cards with specific budgets to team members and monitor all expenses from a
                                unified backend.
                            </p>
                        </div>

                        {/* Spending Controls */}
                        <div
                            className={`text-left bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('team-collaboration') ? 'stacked-entry-3' : ''
                            }`}
                        >
                            <div className="flex justify-start mb-6">
                                <Image
                                    src="/card/Mask group-3.png"
                                    alt="Spending Controls"
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-[32px] font-bold text-gray-900 mb-4">Spending Controls</h3>
                            <p className="text-gray-600 text-[18px] leading-relaxed">
                                Set independent monthly or single transaction limits for each card, and freeze/unfreeze
                                cards with one click.
                            </p>
                        </div>

                        {/* Real-time Alerts */}
                        <div
                            className={`text-left bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                                visibleSections.has('team-collaboration') ? 'stacked-entry-4' : ''
                            }`}
                        >
                            <div className="flex justify-start mb-6">
                                <Image
                                    src="/card/Mask group-4.png"
                                    alt="Real-time Alerts"
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-[32px] font-bold text-gray-900 mb-4 pr-3">Real-time Alerts</h3>
                            <p className="text-gray-600 text-[18px] leading-relaxed">
                                Real-time notifications for all transactions, enabling you to grasp the dynamics of your
                                funds in the first place.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            {/* <section className="py-20 bg-gradient-to-b from-[#E8F5E8] to-[#F7F7F2]" data-section="cta">
                <div className="container mx-auto px-8 max-w-[1700px] text-center">
                    <div className={`animate-on-scroll ${visibleSections.has('cta') ? 'animate-slide-up' : ''}`}>
                        <h2 className="text-4xl lg:text-[64px] font-bold text-gray-900 mb-8">
                            Seamless Chat, Borderless Pay.
                        </h2>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-full text-lg font-semibold transition-colors duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section> */}
        </>
    )
}
