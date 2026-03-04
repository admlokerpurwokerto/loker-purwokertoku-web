import Link from 'next/link'
import Image from 'next/image'
import { JobPosting, cityLabels, jobTypeLabels, formatDateShort } from '@/lib/types'

interface HeroJobCardProps {
    job: JobPosting
    index: number
}

export default function HeroJobCard({ job, index }: HeroJobCardProps) {
    const gradients = [
        'from-red-500 to-red-700',
        'from-rose-500 to-red-600',
        'from-red-600 to-rose-700',
    ]

    return (
        <Link
            href={`/loker/${job.slug.current}`}
            className="group relative block bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            id={`hero-job-${job._id}`}
        >
            {/* Gradient Top Bar */}
            <div className={`h-1.5 bg-gradient-to-r ${gradients[index % 3]}`} />

            <div className="p-6">
                {/* Featured Badge */}
                <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Terbaru
                    </span>
                    <span className="text-[11px] text-text-muted">
                        {formatDateShort(job.publishedAt)}
                    </span>
                </div>

                {/* Company */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0 overflow-hidden border border-border-light group-hover:border-primary/20 transition-colors">
                        {job.companyLogo ? (
                            <Image
                                src={job.companyLogo}
                                alt={job.company}
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span className="text-lg font-bold text-primary">
                                {job.company.charAt(0).toUpperCase()}
                            </span>
                        )}
                    </div>
                    <div>
                        <p className="text-sm text-text-muted">{job.company}</p>
                        <h3 className="text-base font-bold text-text-primary group-hover:text-primary transition-colors leading-tight line-clamp-2">
                            {job.title}
                        </h3>
                    </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-primary/5 text-primary">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {cityLabels[job.city] || job.city}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-700">
                        {jobTypeLabels[job.jobType] || job.jobType}
                    </span>
                    {job.salary && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-50 text-amber-700">
                            💰 {job.salary}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    )
}
