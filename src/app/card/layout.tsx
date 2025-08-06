'use client'

import Layout from '@/components/Layout'
import Footer from '@/components/card/Footer'
export default function CardLayout({ children }: { children: React.ReactNode }) {
    return (
        <Layout>
            {children}
            <Footer />
        </Layout>
    )
}
