import Link from 'next/link'
import Image from 'next/image'
import {
    JobPosting,
    cityLabels,
    jobTypeLabels,
    jobTypeColors,
    isDeadlineExpired,
} from '@/lib/types'

interface JobCardProps {
    job: JobPosting
}

export default function JobCard({ job }: JobCardProps) {
    const deadlineDate = job.deadline ? new Date(job.deadline) : null
    const isExpired = isDeadlineExpired(job.deadline)

    return (
        <Link
            href={`/loker/${job.slug.current}`}
            className="group block bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
            id={`job-card-${job._id}`}
        >
            <div className="p-5">
                {/* Company Logo & Name */}
                <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0 overflow-hidden border border-border-light">
                        {job.companyLogo ? (
                            <Image
                                src={job.companyLogo}
                                alt={job.company}
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span className="text-sm font-bold text-primary">
                                {job.company.charAt(0).toUpperCase()}
                            </span>
                        )}
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="text-xs text-text-muted truncate">{job.company}</p>
                        <h3 className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors line-clamp-2 leading-snug mt-0.5">
                            {job.title}
                        </h3>
                    </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-primary/5 text-primary border border-primary/10">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {cityLabels[job.city] || job.city}
                    </span>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium border ${jobTypeColors[job.jobType] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                        {jobTypeLabels[job.jobType] || job.jobType}
                    </span>
                </div>

                {/* Salary */}
                {job.salary && (
                    <p className="text-xs font-medium text-text-secondary mb-2">
                        💰 {job.salary}
                    </p>
                )}

                {/* Deadline */}
                {deadlineDate && (
                    <p className={`text-[11px] ${isExpired ? 'text-red-500' : 'text-text-muted'}`}>
                        {isExpired ? '⏰ Expired' : `📅 Deadline: ${deadlineDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}`}
                    </p>
                )}
            </div>
        </Link>
    )
}
