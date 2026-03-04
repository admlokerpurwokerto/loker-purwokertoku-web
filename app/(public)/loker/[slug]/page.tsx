import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { JOB_BY_SLUG_QUERY, RELATED_JOBS_QUERY } from '@/sanity/lib/queries'
import {
    JobPosting,
    cityLabels,
    jobTypeLabels,
    formatDateLong,
    isDeadlineExpired,
} from '@/lib/types'
import JobCard from '@/components/JobCard'
import AdSlot from '@/components/AdSlot'
import SectionHeader from '@/components/SectionHeader'

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const job = await client.fetch(JOB_BY_SLUG_QUERY, { slug })

    if (!job) {
        return { title: 'Lowongan Tidak Ditemukan' }
    }

    return {
        title: `${job.title} di ${job.company} - LokerPurwokertoku`,
        description: `Lowongan kerja ${job.title} di ${job.company}, ${cityLabels[job.city] || job.city}. Lamar sekarang di LokerPurwokertoku.`,
        keywords: `${job.title}, ${job.company}, lowongan kerja ${cityLabels[job.city]?.toLowerCase() || job.city}`,
        openGraph: {
            title: `${job.title} - ${job.company}`,
            description: `Lowongan kerja ${job.title} di ${job.company}`,
            type: 'article',
        },
    }
}

export default async function JobDetailPage({ params }: PageProps) {
    const { slug } = await params
    const job = await client.fetch(JOB_BY_SLUG_QUERY, { slug })

    if (!job) {
        notFound()
    }

    const relatedJobs = await client.fetch(RELATED_JOBS_QUERY, {
        city: job.city,
        currentId: job._id,
    })

    const isExpired = isDeadlineExpired(job.deadline)
    const publishedDateStr = formatDateLong(job.publishedAt)

    // JSON-LD Structured Data
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: job.title,
        description: job.title,
        datePosted: job.publishedAt,
        validThrough: job.deadline || undefined,
        employmentType: job.jobType?.toUpperCase().replace('-', '_'),
        hiringOrganization: {
            '@type': 'Organization',
            name: job.company,
        },
        jobLocation: {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                addressLocality: cityLabels[job.city] || job.city,
                addressRegion: 'Jawa Tengah',
                addressCountry: 'ID',
            },
        },
        ...(job.salary && { baseSalary: { '@type': 'MonetaryAmount', currency: 'IDR', value: job.salary } }),
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="min-h-screen">
                {/* Breadcrumb */}
                <div className="bg-white border-b border-border">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                        <nav className="flex items-center gap-2 text-sm text-text-muted">
                            <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <Link href={`/loker-${job.city}`} className="hover:text-primary transition-colors">
                                Loker {cityLabels[job.city] || job.city}
                            </Link>
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-text-primary font-medium truncate max-w-[200px]">{job.title}</span>
                        </nav>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {/* Job Header */}
                            <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 mb-6">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0 overflow-hidden border border-border-light">
                                        {job.companyLogo ? (
                                            <Image
                                                src={job.companyLogo}
                                                alt={job.company}
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-2xl font-bold text-primary">
                                                {job.company.charAt(0).toUpperCase()}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <h1 className="text-xl sm:text-2xl font-bold text-text-primary mb-1">{job.title}</h1>
                                        <p className="text-base text-text-secondary">{job.company}</p>
                                    </div>
                                </div>

                                {/* Meta Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/5 text-primary border border-primary/10">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {cityLabels[job.city] || job.city}
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                                        {jobTypeLabels[job.jobType] || job.jobType}
                                    </span>
                                    {job.salary && (
                                        <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                                            💰 {job.salary}
                                        </span>
                                    )}
                                    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200">
                                        📅 {publishedDateStr}
                                    </span>
                                </div>

                                {/* Deadline Warning */}
                                {job.deadline && (
                                    <div className={`flex items-center gap-2 p-3 rounded-lg mb-6 ${isExpired ? 'bg-red-50 border border-red-200' : 'bg-emerald-50 border border-emerald-200'}`}>
                                        <svg className={`w-5 h-5 ${isExpired ? 'text-red-500' : 'text-emerald-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className={`text-sm font-medium ${isExpired ? 'text-red-700' : 'text-emerald-700'}`}>
                                            {isExpired
                                                ? 'Lowongan ini sudah melewati batas waktu lamaran.'
                                                : `Batas lamaran: ${formatDateLong(job.deadline)}`}
                                        </span>
                                    </div>
                                )}

                                {/* Design/Poster Image */}
                                {job.designImage && (
                                    <div className="mb-6">
                                        <h2 className="text-lg font-bold text-text-primary mb-3">Informasi Lowongan</h2>
                                        <div className="rounded-xl overflow-hidden border border-border-light">
                                            <Image
                                                src={job.designImage}
                                                alt={`Desain lowongan ${job.title}`}
                                                width={800}
                                                height={1067}
                                                className="w-full h-auto"
                                                priority
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Description */}
                                {job.description && (
                                    <div className="mb-6">
                                        <h2 className="text-lg font-bold text-text-primary mb-3">Deskripsi Pekerjaan</h2>
                                        <div className="prose prose-sm prose-slate max-w-none text-text-secondary leading-relaxed">
                                            <PortableText value={job.description} />
                                        </div>
                                    </div>
                                )}

                                {/* AdSense: In-Article */}
                                <AdSlot format="in-article" className="my-6" />

                                {/* Requirements */}
                                {job.requirements && job.requirements.length > 0 && (
                                    <div className="mb-6">
                                        <h2 className="text-lg font-bold text-text-primary mb-3">Persyaratan</h2>
                                        <ul className="space-y-2">
                                            {job.requirements.map((req: string, index: number) => (
                                                <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                                                    <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Contact Info */}
                                {job.contactInfo && (
                                    <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-5 border border-primary/10">
                                        <h2 className="text-lg font-bold text-text-primary mb-2">Cara Melamar</h2>
                                        <p className="text-sm text-text-secondary whitespace-pre-line">{job.contactInfo}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* AdSense: Sidebar */}
                            <AdSlot format="sidebar" className="mb-6" />

                            {/* Related Jobs */}
                            {relatedJobs && relatedJobs.length > 0 && (
                                <div>
                                    <SectionHeader title="Loker Serupa" />
                                    <div className="flex flex-col gap-3">
                                        {(relatedJobs as JobPosting[]).map((rJob) => (
                                            <JobCard key={rJob._id} job={rJob} />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* AdSense: Sidebar Bottom */}
                            <AdSlot format="sidebar" className="mt-6" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
