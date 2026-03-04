import Link from 'next/link'
import Image from 'next/image'
import {
    JobPosting,
    cityLabels,
    jobTypeLabels,
    jobTypeColors,
    formatDate,
    formatDateShort,
} from '@/lib/types'

interface JobListItemProps {
    job: JobPosting
}

export default function JobListItem({ job }: JobListItemProps) {

    return (
        <Link
            href={`/loker/${job.slug.current}`}
            className="group flex items-center gap-4 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-md p-4 sm:p-5 transition-all duration-300"
            id={`job-list-${job._id}`}
        >
            {/* Logo */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0 overflow-hidden border border-border-light">
                {job.companyLogo ? (
                    <Image
                        src={job.companyLogo}
                        alt={job.company}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span className="text-lg font-bold text-primary">
                        {job.company.charAt(0).toUpperCase()}
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                        <h3 className="text-sm sm:text-base font-semibold text-text-primary group-hover:text-primary transition-colors truncate">
                            {job.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-text-secondary mt-0.5">{job.company}</p>
                    </div>
                    <span className="hidden sm:block text-xs text-text-muted whitespace-nowrap">
                        {formatDate(job.publishedAt)}
                    </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-primary/5 text-primary">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {cityLabels[job.city] || job.city}
                    </span>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium ${jobTypeColors[job.jobType] || 'bg-gray-50 text-gray-700'}`}>
                        {jobTypeLabels[job.jobType] || job.jobType}
                    </span>
                    {job.salary && (
                        <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-amber-50 text-amber-700">
                            💰 {job.salary}
                        </span>
                    )}
                    {job.deadline && (
                        <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-md text-[11px] text-text-muted">
                            📅 {formatDateShort(job.deadline)}
                        </span>
                    )}
                </div>
            </div>

            {/* Arrow */}
            <svg className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </Link>
    )
}
