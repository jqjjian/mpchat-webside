'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/card/Footer'

export default function NewsPage() {
    // Sample news data
    const newsItems = [
        {
            id: 1,
            title: "MPChat Launches New Security Protocol",
            date: "August 1, 2025",
            excerpt: "We've implemented end-to-end encryption v3.0, providing even stronger security for all communications.",
            image: "/news1.webp"
        },
        {
            id: 2,
            title: "Global Expansion: Now Available in 50+ Countries",
            date: "July 15, 2025",
            excerpt: "MPChat is now accessible worldwide with localized support for 12 languages.",
            image: "/news2.webp"
        },
        {
            id: 3,
            title: "New Business Card Features Released",
            date: "June 30, 2025",
            excerpt: "Enhanced spending controls and team management capabilities for corporate users.",
            image: "/news3.webp"
        },
        {
            id: 4,
            title: "MPChat Partners with Major E-commerce Platforms",
            date: "June 10, 2025",
            excerpt: "Seamless integration with leading online retailers for frictionless payments.",
            image: "/news4.webp"
        },
        {
            id: 5,
            title: "Mobile App Reaches 1 Million Downloads",
            date: "May 22, 2025",
            excerpt: "Celebrating our growing community of privacy-focused users worldwide.",
            image: "/news5.webp"
        },
        {
            id: 6,
            title: "New API Features for Developers",
            date: "April 18, 2025",
            excerpt: "Expanded developer tools and documentation for building on the MPChat platform.",
            image: "/news6.webp"
        }
    ]

    return (
        <div className="min-h-screen bg-[#F7F7F2] flex flex-col">
            <Header />
            <div className="pt-24 flex-grow">
            <div className="container mx-auto px-8 py-16 max-w-[1200px]">
                {/* Header Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-redotpaybold">
                        Latest News
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Stay up to date with the latest announcements, product updates, and company news from MPChat.
                    </p>
                </section>

                {/* News Grid */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="relative h-48">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-redotpaybold">{item.title}</h3>
                                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                                    <button className="text-[#06C55B] font-semibold hover:underline">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Newsletter Signup */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-lg text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 font-redotpaybold">Stay Informed</h2>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter to receive updates directly in your inbox.
                    </p>
                    <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06C55B] focus:border-transparent"
                        />
                        <button className="px-8 py-3 bg-[#06C55B] text-white font-semibold rounded-full hover:bg-[#05B052] transition-colors whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center py-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-redotpaybold">
                        Experience MPChat Today
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Join thousands of users who trust MPChat for secure communication and payments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/card/personal">
                            <button className="text-nowrap text-lg sm:text-xl px-8 py-4 bg-[#06C55B] text-white font-semibold rounded-full hover:bg-[#05B052] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 font-redotpaybold">
                                Get Personal Card
                            </button>
                        </Link>
                        <Link href="/card/corporate">
                            <button className="text-nowrap text-lg sm:text-xl px-8 py-4 bg-[#06C55B] text-white font-semibold rounded-full hover:bg-[#05B052] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 font-redotpaybold">
                                Get Business Card
                            </button>
                        </Link>
                    </div>
                </section>
            </div>
            </div>
            <Footer />
        </div>
    )
}