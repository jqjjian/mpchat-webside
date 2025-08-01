'use client'

import { useEffect } from 'react'
// import Image from 'next/image'
// import Layout from '@/components/Layout'
import { useRouter } from 'next/navigation'

export default function CardPage() {
    // const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
    const router = useRouter()
    useEffect(() => {
        router.push('/card/personal')
        // const observer = new IntersectionObserver(
        //     entries => {
        //         entries.forEach(entry => {
        //             if (entry.isIntersecting) {
        //                 const sectionId = entry.target.getAttribute('data-section')
        //                 if (sectionId) {
        //                     setVisibleSections(prev => new Set([...prev, sectionId]))
        //                 }
        //             }
        //         })
        //     },
        //     { threshold: 0.1, rootMargin: '50px' }
        // )

        // // 观察所有需要动画的元素
        // const sections = document.querySelectorAll('[data-section]')
        // sections.forEach(section => observer.observe(section))

        // return () => observer.disconnect()
    }, [])

    return null
}
