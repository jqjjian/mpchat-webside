'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/card/Footer'

export default function NewsDetailPage() {
    // Article data
    const article = {
        id: 6,
        title: 'Beyond Encryption: How MPChat Protects Your Financial Communications',
        date: '2025-04-18',
        content: `
            <div class="flex flex-col gap-4">
            <p>In an era where data breaches are commonplace, end-to-end encryption has become the gold standard for secure messaging. But for businesses that use communication platforms to make critical financial decisions, encryption is just the beginning. Protecting the entire ecosystem where conversations and transactions converge requires a multi-layered security philosophy.</p>
            <p>At MPChat, a platform that integrates secure chat with corporate card management, security is not just a feature— it's the foundation. Here's a look at the comprehensive approach MPChat takes to protect not just your messages, but your entire financial workflow.</p>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">1. A Foundation of End-to-End Encryption</h2>
            <p>Every message, file, and call on MPChat is secured with military-grade, end-to-end encryption. This means that from the moment you send a message to the moment it's received, it is completely indecipherable to any third party, including MPChat itself. This ensures that sensitive discussions about budgets, supplier payments, and financial strategy remain absolutely confidential.</p>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Secure, Segregated Payment Infrastructure</h2>
            <p>Financial data requires a higher level of protection. MPChat's payment infrastructure is completely segregated from its messaging systems and is built in partnership with licensed, PCI DSS Level 1 compliant financial institutions. This ensures that all card data and transaction processing meet the most stringent global security standards required by networks like Visa and Mastercard. Your financial data never co-mingles with your chat data on the same servers.</p>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Granular Access Controls and User Permissions</h2>
            <p>Security extends to user management. MPChat provides administrators with granular control over user permissions. You can define who can issue cards, who can approve expenses, and who can view transaction data. This principle of least privilege ensures that employees only have access to financial tools and information essential for their roles, significantly reducing the risk of internal fraud or error.</p>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Proactive Fraud Monitoring and Real-time Alerts</h2>
            <p>The platform employs advanced fraud detection algorithms that monitor transactions for suspicious activity in real-time. In addition to automated systems, features like instant transaction notifications and one-tap card freezing give users immediate power to act if they spot an unauthorized charge. This combination of proactive monitoring and user-centric controls creates a robust defense against financial threats.</p>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
            <p>In conclusion, proper financial security in a collaborative environment goes far beyond simply encrypting messages. It requires a holistic approach that protects the conversation, the transaction, and the user controls that govern them. By architecting security into every layer of its platform, MPChat delivers a workspace where businesses can collaborate and transact with total confidence.</p>
            </div>
        `,
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
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