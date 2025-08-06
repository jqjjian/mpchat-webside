'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/card/Footer'

export default function NewsPage() {
    // Updated news data
    const newsItems = [
        {
            id: 1,
            title: 'Five Innovative B2B Uses of Virtual Cards in 2025',
            date: '2025-08-06',
            excerpt:
                'Explore five cutting-edge B2B applications of virtual cards transforming industries from travel and insurance to logistics and digital marketing.',
            image: '/news_images/news1-1.png'
        },
        {
            id: 2,
            title: 'Best Credit Card Processing Solutions for Small Businesses in 2025',
            date: '2025-07-28',
            excerpt:
                'Discover essential features to look for in payment processors and how MPChat empowers small businesses with cost-effective solutions.',
            image: '/news_images/news2-1.png'
        },
        {
            id: 3,
            title: 'More Savings, More Compliance: Corporate Virtual Cards for Travel Strategy',
            date: '2025-07-15',
            excerpt:
                'Learn how corporate virtual cards streamline business travel expenses while enhancing security and compliance for finance teams.',
            image: '/news_images/news3-1.png'
        },
        {
            id: 4,
            title: 'Beyond Encryption: How MPChat Protects Your Financial Communications',
            date: '2025-06-22',
            excerpt:
                "Learn about MPChat's multi-layered security approach that protects both your confidential messages and financial transactions.",
            image: '/news_images/news6-1.png'
        },
        {
            id: 5,
            title: 'Why Virtual Cards are the Key to Managing Ad Spend for Modern Marketing Teams',
            date: '2025-05-30',
            excerpt:
                'Discover how virtual cards eliminate ad account suspensions and provide granular budget control for marketing campaigns across platforms.',
            image: '/news_images/news5-1.png'
        },

        {
            id: 6,
            title: 'MPChat Officially Launches in Singapore, Redefining Business Payments',
            date: '04-18',
            excerpt:
                'MPChat launches in Singapore with its revolutionary "chat-to-pay" platform that merges secure messaging with corporate card management.',
            image: '/news_images/news4-1.png'
        }
    ]

    return (
        <div className="min-h-screen bg-[#F7F7F2] flex flex-col">
            <Header />
            <div className="pt-24 flex-grow">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
                    {/* Header Section */}
                    <section className="text-center mb-16 flex flex-col items-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 pb-6 font-redotpaybold leading-tight">
                            Latest News
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Stay up to date with the latest announcements, product updates, and company news from
                            MPChat.
                        </p>
                    </section>

                    {/* News Grid */}
                    <section className="mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {newsItems.map(item => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
                                >
                                    {/* Date */}
                                    <div className="px-6 pt-6">
                                        <div className="text-sm text-gray-500 font-medium">{item.date}</div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="px-6 pt-4 text-xl md:text-2xl font-bold text-gray-900 font-redotpaybold leading-tight">
                                        {item.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="px-6 py-4 text-gray-600 flex-grow leading-relaxed">{item.excerpt}</p>

                                    {/* Read More Link */}
                                    <div className="px-6 pb-6 mt-auto">
                                        <Link
                                            href={`/news/detail/${item.id}`}
                                            className="inline-flex items-center text-[#06C55B] font-semibold hover:text-[#05B052] transition-colors duration-200 group"
                                        >
                                            Read More
                                            <svg
                                                className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}
