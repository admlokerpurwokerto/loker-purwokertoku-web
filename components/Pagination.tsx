import Link from 'next/link'

interface PaginationProps {
    currentPage: number
    totalPages: number
    basePath: string
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
    if (totalPages <= 1) return null

    const pages: (number | string)[] = []
    const maxVisible = 5

    if (totalPages <= maxVisible) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i)
        }
    } else {
        pages.push(1)
        if (currentPage > 3) pages.push('...')

        const start = Math.max(2, currentPage - 1)
        const end = Math.min(totalPages - 1, currentPage + 1)
        for (let i = start; i <= end; i++) {
            pages.push(i)
        }

        if (currentPage < totalPages - 2) pages.push('...')
        pages.push(totalPages)
    }

    const getPageUrl = (page: number) => {
        return page === 1 ? basePath : `${basePath}?page=${page}`
    }

    return (
        <nav className="flex items-center justify-center gap-1.5 mt-10" aria-label="Pagination" id="pagination">
            {/* Previous */}
            {currentPage > 1 ? (
                <Link
                    href={getPageUrl(currentPage - 1)}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-hover border border-border transition-all duration-200"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="hidden sm:inline">Sebelumnya</span>
                </Link>
            ) : (
                <span className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-text-muted border border-border-light cursor-not-allowed">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="hidden sm:inline">Sebelumnya</span>
                </span>
            )}

            {/* Page Numbers */}
            {pages.map((page, index) =>
                page === '...' ? (
                    <span key={`dots-${index}`} className="px-2 py-2 text-sm text-text-muted">
                        &#8230;
                    </span>
                ) : (
                    <Link
                        key={page}
                        href={getPageUrl(page as number)}
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200 ${currentPage === page
                                ? 'bg-primary text-white shadow-md shadow-primary/25'
                                : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover border border-border'
                            }`}
                    >
                        {page}
                    </Link>
                )
            )}

            {/* Next */}
            {currentPage < totalPages ? (
                <Link
                    href={getPageUrl(currentPage + 1)}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-hover border border-border transition-all duration-200"
                >
                    <span className="hidden sm:inline">Selanjutnya</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            ) : (
                <span className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-text-muted border border-border-light cursor-not-allowed">
                    <span className="hidden sm:inline">Selanjutnya</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            )}
        </nav>
    )
}
