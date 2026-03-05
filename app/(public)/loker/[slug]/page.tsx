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

                            {/* Community Sidebar */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 mt-6 overflow-hidden relative">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M0%2020L20%200L40%2020L20%2040z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
                                <div className="relative">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-sm font-bold text-white">Gabung Komunitas</h3>
                                    </div>
                                    <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                                        Jangan lewatkan info loker terbaru! Gabung grup kami dan dapatkan update langsung di HP.
                                    </p>
                                    <div className="flex flex-col gap-2.5">
                                        <a
                                            href="https://t.me/lokerpurwokertoku"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2.5 bg-[#0088cc] hover:bg-[#0077b5] text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-[#0088cc]/20"
                                        >
                                            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.492-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                            </svg>
                                            Grup Telegram
                                            <svg className="w-3 h-3 ml-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                                        </a>
                                        <a
                                            href="https://whatsapp.com/channel/0029VaeuX0hFCCoLztMw6F14"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-[#25D366]/20"
                                        >
                                            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                            </svg>
                                            Channel WhatsApp
                                            <svg className="w-3 h-3 ml-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                                        </a>
                                        <a
                                            href="https://x.com/lokerpwtku"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2.5 bg-white/10 hover:bg-white/15 text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5"
                                        >
                                            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                            </svg>
                                            Follow di X
                                            <svg className="w-3 h-3 ml-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* AdSense: Sidebar Bottom */}
                            <AdSlot format="sidebar" className="mt-6" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
