'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/loker-purwokerto', label: 'Loker Purwokerto' },
    { href: '/loker-cilacap', label: 'Loker Cilacap' },
    { href: '/loker-purbalingga', label: 'Loker Purbalingga' },
    { href: '/loker-kebumen', label: 'Loker Kebumen' },
    { href: '/loker-pemalang', label: 'Loker Pemalang' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <Image
                            src="/loker-purwokertoku-logo.png"
                            alt="LokerPurwokertoku Logo"
                            width={36}
                            height={36}
                            className="w-9 h-9 rounded-lg object-contain group-hover:scale-105 transition-transform duration-200"
                            priority
                        />
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-text-primary leading-tight">LokerPurwokertoku</span>
                            <span className="text-[10px] text-text-muted leading-tight hidden sm:block">Info Lowongan Banyumas Raya</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            )
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors"
                        aria-label="Toggle menu"
                        id="mobile-menu-button"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden py-3 border-t border-border-light animate-slide-down">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                                ? 'bg-primary/10 text-primary'
                                                : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
