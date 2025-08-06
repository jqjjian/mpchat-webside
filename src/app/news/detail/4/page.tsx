'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/card/Footer'

export default function NewsDetailPage() {
    // Article data
    const article = {
        id: 4,
        title: 'MPChat Officially Launches in Singapore, Redefining Business Payments',
        date: '2025-06-22',
        content: `
            <div class="flex flex-col gap-4">
            <p>MPChat, a pioneering collaborative commerce platform, today announced its official launch in Singapore. The company is set to transform how modern businesses, particularly SMEs and global teams, manage their finances by integrating top-tier encrypted secure communication with a powerful, all-in-one corporate card and expense management solution.</p>
            <p>In today's fast-paced digital economy, teams collaborate in real-time, but their financial workflows often remain fragmented and inefficient. Critical payment decisions are made in chat applications. Still, execution requires switching to cumbersome banking portals and expense reporting tools, leading to delays, errors, and a lack of real-time visibility over company spend.</p>
            <p>MPChat bridges this critical gap. The platform provides a single, unified workspace where teams can discuss projects, negotiate with suppliers, and immediately execute payments using company-issued virtual cards—all within the same secure, end-to-end encrypted environment. This "chat-to-pay" model eliminates friction, empowers employees, and provides finance teams with unprecedented control.</p>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">A Vision for Collaborative Commerce</h2>
            <p>"We saw a fundamental disconnect in the modern business toolkit," said James, Co-Founder and CEO of MPChat. "Communication is instant, but payments are not. MPChat was built to fuse these two workflows. We believe that the future of business is collaborative commerce, where transactions are a natural extension of a conversation. By launching in Singapore, a global hub for innovation and finance, we are positioning ourselves to empower the next generation of agile, borderless companies."</p>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">MPChat's Integrated Platform Features</h2>
            <p>MPChat's integrated platform offers a suite of features designed for the needs of modern businesses:</p>
            <ul class="list-disc pl-6 space-y-2">
                <li><strong>Secure Collaborative Workspace:</strong> At its core, MPChat provides end-to-end encrypted messaging, file sharing, and group chats, ensuring all sensitive business communications remain strictly confidential.</li>
                <li><strong>Smart Virtual Cards:</strong> Businesses can instantly issue an unlimited number of virtual cards for employees, specific projects, or vendors, with customizable spending limits and usage rules.</li>
                <li><strong>Real-time Expense Management:</strong> All transactions are tracked in a centralized dashboard the moment they happen, eliminating the need for manual expense reports and tedious reimbursement processes.</li>
                <li><strong>Streamlined Ad Spend:</strong> A dedicated solution for marketing teams allows them to issue unique virtual cards for each ad platform (e.g., Facebook, Google, TikTok), drastically reducing payment failures and the risk of ad account suspensions.</li>
            </ul>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Availability</h2>
            <p>MPChat is now available to businesses registered in Singapore. For more information or to request a demo, visit www.mpchats.com.</p>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">About MPChat</h2>
            <p>MPChat is a Singapore-based fintech company building the financial infrastructure for collaborative commerce. Our platform empowers global teams to communicate, manage expenses, and make payments with unparalleled security and efficiency. Our mission is to make cross-border commerce as seamless and straightforward as a conversation.</p>
            </div>
        `
    }

    return (
        <div className="min-h-screen bg-[#F7F7F2] flex flex-col">
            <Header />
            <div className="pt-24 flex-grow">
                <div className="container mx-auto px-8 py-16 max-w-[1200px]">
                    {/* Back Button */}
                    <div className="mb-8">
                        <Link
                            href="/news"
                            className="inline-flex items-center text-[#06C55B] hover:text-[#05B052] font-semibold transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Back to News
                        </Link>
                    </div>

                    {/* Article Content */}
                    <article className="bg-white rounded-3xl overflow-hidden shadow-lg">
                        <div className="p-6 md:p-10">
                            {/* Article Meta */}
                            <div className="text-sm text-gray-500 mb-4">{article.date}</div>

                            {/* Article Title */}
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-redotpaybold">
                                {article.title}
                            </h1>

                            {/* Article Content */}
                            <div
                                className="prose max-w-none text-gray-700 text-lg"
                                dangerouslySetInnerHTML={{ __html: article.content }}
                            />
                        </div>
                    </article>
                </div>
            </div>
            <Footer />
        </div>
    )
}
