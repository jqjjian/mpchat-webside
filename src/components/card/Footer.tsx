'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
export default function Footer() {
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
    const [showContactModal, setShowContactModal] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

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
        const sections = document.querySelectorAll('[data-section="footer"]')
        sections.forEach(section => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    const handleContactClick = () => {
        setShowContactModal(true)
    }

    const closeContactModal = () => {
        setShowContactModal(false)
        // Reset submission status when closing modal
        if (isSubmitted) {
            setIsSubmitted(false)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to your backend
        // For now, we'll just simulate a successful submission
        setIsSubmitted(true)

        // Automatically close the modal after 2 seconds
        setTimeout(() => {
            setShowContactModal(false)
            setIsSubmitted(false)
        }, 2000)
    }

    // Contact methods are no longer needed as we're using a form instead

    return (
        <footer className="relative min-h-[500px] overflow-hidden" data-section="footer">
            {/* Base gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F7F7F2] via-[#F7F7F2] to-[#E8F5E8]"></div>

            {/* Footer background image with natural blending */}
            <div
                className="absolute inset-0 bg-[url('/foot_bg.webp')] bg-cover bg-center bg-no-repeat opacity-80"
                style={{
                    backgroundBlendMode: 'soft-light',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center bottom'
                }}
            ></div>

            {/* Gradient overlay for seamless transition */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#F7F7F2] opacity-60"></div>

            {/* Footer Content */}
            <div className="relative z-10 flex items-center justify-center min-h-[500px] px-8">
                <div className="w-full max-w-[1700px] mx-auto text-center">
                    <h2
                        className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-12 pt-[200px] pb-[100px] animate-on-scroll font-redotpaybold ${
                            visibleSections.has('footer') ? 'animate-slide-up' : ''
                        }`}
                    >
                        Where Global Teams Collaborate and Pay.
                    </h2>

                    <div
                        className={`flex flex-col sm:flex-row gap-4 justify-center mb-32 animate-on-scroll animate-delay-1 ${
                            visibleSections.has('footer') ? 'animate-slide-up' : ''
                        }`}
                    >
                        <button
                            onClick={handleContactClick}
                            className="hover:cursor-pointer text-[22px] min-w-[260px] px-8 py-4 bg-[#06C55B] text-white font-semibold rounded-full hover:bg-[#05B052] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 font-redotpaybold"
                        >
                            Contact Us
                        </button>
                        {/* <button className="px-8 py-4 bg-[#06C55B] text-white font-semibold rounded-full hover:bg-[#05B052] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
                            For Business
                        </button> */}
                    </div>

                    {/* Footer Bottom */}
                    <div
                        className={`flex flex-col md:flex-row justify-between  items-center gap-4 border-t-1 border-t-[#BCD4C2] py-5 animate-on-scroll animate-delay-2 ${
                            visibleSections.has('footer') ? 'animate-slide-up' : ''
                        }`}
                    >
                        <div className="flex flex-col items-start">
                            <div className="flex items-center flex-shrink-0">
                                <div className="w-10 h-10 relative">
                                    <Image src="/Logo.svg" alt="MPChat Logo" fill className="object-contain" />
                                </div>
                                <span className="text-2xl font-bold text-gray-800 md:text-xl font-redotpaybold">
                                    MPChat
                                </span>
                            </div>
                            <span className="text-sm text-gray-500">© 2025 MPChat - All Rights Reserved</span>
                        </div>

                        {/* Social Media Icons */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {/* Menu Links */}
                            <div className="flex flex-col items-start">
                                <h3 className="text-lg font-bold text-gray-800 mb-3 font-redotpaybold">Menu</h3>
                                <div className="flex flex-col items-start space-y-2">
                                    <Link
                                        href="/"
                                        className="text-sm text-gray-600 hover:text-[#06C55B] transition-colors"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="/card/personal"
                                        className="text-sm text-gray-600 hover:text-[#06C55B] transition-colors"
                                    >
                                        Personal Card
                                    </Link>
                                    <Link
                                        href="/card/corporate"
                                        className="text-sm text-gray-600 hover:text-[#06C55B] transition-colors"
                                    >
                                        Business Card
                                    </Link>
                                    <Link
                                        href="/about"
                                        className="text-sm text-gray-600 hover:text-[#06C55B] transition-colors"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        href="/news"
                                        className="text-sm text-gray-600 hover:text-[#06C55B] transition-colors"
                                    >
                                        News
                                    </Link>
                                </div>
                            </div>

                            {/* Legal Links */}
                            <div className="flex flex-col items-start">
                                <h3 className="text-lg font-bold text-gray-800 mb-3 font-redotpaybold">Legal</h3>
                                <div className="flex flex-col items-start space-y-2">
                                    <Link
                                        href="/privacy"
                                        className="text-sm text-gray-600 hover:text-[#06C55B] transition-colors"
                                    >
                                        Privacy Policy
                                    </Link>
                                    <Link
                                        href="/user-agreement"
                                        className="text-sm text-gray-600 hover:text-[#06C55B] transition-colors"
                                    >
                                        User Agreement
                                    </Link>
                                    <Link
                                        href="/program-terms"
                                        className="text-sm text-gray-600 hover:text-[#06C55B] transition-colors"
                                    >
                                        Program Terms
                                    </Link>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="flex flex-col items-start">
                                <h3 className="text-lg font-bold text-gray-800 mb-3 font-redotpaybold">Contact</h3>
                                <div className="flex flex-col items-start space-y-2">
                                    <a
                                        href="mailto:support@mpchats.com"
                                        className="text-sm text-gray-600 hover:text-[#06C55B] transition-colors"
                                    >
                                        support@mpchats.com
                                    </a>
                                </div>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex flex-col items-start">
                                <h3 className="text-lg font-bold text-gray-800 mb-3 font-redotpaybold">Follow Us</h3>
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#06C55B] transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#06C55B] transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                                        </svg>
                                    </a>
                                    {/* <a
                                        href="#"
                                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#06C55B] transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Modal */}
            {showContactModal && (
                <div
                    className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 modal-backdrop"
                    onClick={closeContactModal}
                >
                    <div
                        className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 relative animate-modal-in shadow-2xl transform transition-all duration-300"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeContactModal}
                            className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
                        >
                            ×
                        </button>

                        {/* Modal Title */}
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center font-redotpaybold">
                            Contact Us
                        </h3>

                        {/* Success Message */}
                        {isSubmitted ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-8 h-8 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-2 font-redotpaybold">
                                    Submission Successful!
                                </h4>
                                <p className="text-gray-600">{`Thank you for contacting us. We'll get back to you soon.`}</p>
                            </div>
                        ) : (
                            <>
                                <p className="text-gray-600 text-center mb-6 px-4">
                                    {`Please fill out the form below and we'll get back to you as soon as possible.`}
                                </p>

                                {/* Contact Form */}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#06C55B] focus:border-[#06C55B] transition-all duration-200"
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#06C55B] focus:border-[#06C55B] transition-all duration-200"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#06C55B] focus:border-[#06C55B] transition-all duration-200"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="details"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            More Details
                                        </label>
                                        <textarea
                                            id="details"
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#06C55B] focus:border-[#06C55B] transition-all duration-200"
                                            placeholder="Please provide more details about your inquiry..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-[#06C55B] text-white font-bold rounded-xl hover:bg-[#05B052] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 font-redotpaybold text-lg"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}

            <style jsx global>{`
                /* 动画样式 */
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* 动画类 */
                .animate-slide-up {
                    animation: slideInUp 0.8s ease-out forwards;
                }

                /* 初始状态 - 隐藏元素 */
                .animate-on-scroll {
                    opacity: 0;
                    transform: translateY(30px);
                }

                /* 卡片动画延迟 */
                .animate-delay-1 {
                    animation-delay: 0.1s;
                }
                .animate-delay-2 {
                    animation-delay: 0.2s;
                }

                /* 弹窗动画 */
                @keyframes modalIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9) translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }

                .animate-modal-in {
                    animation: modalIn 0.3s ease-out forwards;
                }

                /* 弹窗背景点击关闭 */
                .modal-backdrop {
                    backdrop-filter: blur(4px);
                }
            `}</style>
        </footer>
    )
}
