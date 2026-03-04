import Link from 'next/link'

interface SectionHeaderProps {
    title: string
    viewAllHref?: string
    viewAllLabel?: string
}

export default function SectionHeader({ title, viewAllHref, viewAllLabel = 'Lihat Semua' }: SectionHeaderProps) {
    return (
        <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
                <div className="w-1 h-7 bg-gradient-to-b from-primary to-accent rounded-full" />
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary">{title}</h2>
            </div>
            {viewAllHref && (
                <Link
                    href={viewAllHref}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors group"
                >
                    {viewAllLabel}
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            )}
        </div>
    )
}
