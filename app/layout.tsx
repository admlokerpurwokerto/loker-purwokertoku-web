import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: {
        default: 'LokerPurwokertoku - Lowongan Kerja Banyumas Raya',
        template: '%s | LokerPurwokertoku',
    },
    description:
        'Portal lowongan kerja terpercaya di Purwokerto, Cilacap, Purbalingga, Kebumen, dan Pemalang. Temukan peluang karir terbaik di Banyumas Raya.',
    keywords:
        'lowongan kerja, loker purwokerto, loker cilacap, loker purbalingga, loker kebumen, loker pemalang, kerja banyumas',
    metadataBase: new URL('https://lokerpurwokertoku.com'),
    icons: {
        icon: '/loker-purwokertoku-logo.png',
        apple: '/loker-purwokertoku-logo.png',
    },
    openGraph: {
        title: 'LokerPurwokertoku - Lowongan Kerja Banyumas Raya',
        description:
            'Portal lowongan kerja terpercaya di Purwokerto, Cilacap, Purbalingga, Kebumen, dan Pemalang.',
        type: 'website',
        locale: 'id_ID',
        siteName: 'LokerPurwokertoku',
        images: [{ url: '/loker-purwokertoku-logo.png', width: 512, height: 512, alt: 'LokerPurwokertoku' }],
    },
    robots: {
        index: true,
        follow: true,
    },
    verification: {},
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="id" className={inter.variable}>
            <head>
            </head>
            <body className="font-sans antialiased">{children}</body>
        </html>
    )
}