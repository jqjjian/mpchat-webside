'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'

export default function CardLayout({ children }: { children: React.ReactNode }) {
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
            <Layout>{children}</Layout>
        </>
    )
}
