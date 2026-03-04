import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import {
  HERO_JOBS_QUERY,
  JOBS_BY_CITY_QUERY,
  ALL_JOBS_PAGINATED_QUERY,
  ALL_JOBS_COUNT_QUERY,
} from '@/sanity/lib/queries'
import { JobPosting } from '@/lib/types'
import HeroJobCard from '@/components/HeroJobCard'
import JobCard from '@/components/JobCard'
import JobListItem from '@/components/JobListItem'
import SectionHeader from '@/components/SectionHeader'
import AdSlot from '@/components/AdSlot'
import Pagination from '@/components/Pagination'

export const metadata: Metadata = {
  title: 'LokerPurwokertoku - Lowongan Kerja Banyumas Raya',
  description: 'Portal lowongan kerja terpercaya di Purwokerto, Cilacap, Purbalingga, Kebumen, dan Pemalang. Temukan peluang karir terbaik di Banyumas Raya.',
}

const cities = [
  { key: 'purwokerto', label: 'Purwokerto', href: '/loker-purwokerto' },
  { key: 'cilacap', label: 'Cilacap', href: '/loker-cilacap' },
  { key: 'purbalingga', label: 'Purbalingga', href: '/loker-purbalingga' },
  { key: 'kebumen', label: 'Kebumen', href: '/loker-kebumen' },
  { key: 'pemalang', label: 'Pemalang', href: '/loker-pemalang' },
]

interface PageProps {
  searchParams: Promise<{ page?: string }>
}

const ITEMS_PER_PAGE = 8

function EmptySection({ cityName }: { cityName: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-surface rounded-xl border border-dashed border-border p-6 flex flex-col items-center justify-center text-center min-h-[140px] hover:bg-surface-hover transition-colors">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.193 23.193 0 0112 15c-3.183 0-6.22-.64-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-xs text-text-muted font-medium">Loker {cityName}</p>
        </div>
      ))}
    </div>
  )
}

export default async function HomePage({ searchParams }: PageProps) {
  const params = await searchParams
  const currentPage = Number(params.page) || 1
  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE

  // Fetch all data in parallel
  const [heroJobs, allJobs, allJobsCount, ...cityJobs] = await Promise.all([
    client.fetch(HERO_JOBS_QUERY),
    client.fetch(ALL_JOBS_PAGINATED_QUERY, { start, end }),
    client.fetch(ALL_JOBS_COUNT_QUERY),
    ...cities.map((city) =>
      client.fetch(JOBS_BY_CITY_QUERY, { city: city.key, limit: 4 })
    ),
  ])

  const totalPages = Math.ceil((allJobsCount || 0) / ITEMS_PER_PAGE)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[420px] sm:min-h-[480px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero1.jpeg"
          alt="LokerPurwokertoku Hero"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-10 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
              Temukan Lowongan Pekerjaan Terbaru<br className="hidden sm:block" />
              <span className="text-red-200">di Banyumas Raya</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto drop-shadow">
              Informasi lowongan kerja terbaru di Purwokerto, Cilacap, Purbalingga, Kebumen, dan Pemalang.
            </p>
          </div>

          {/* Hero Job Cards - from Sanity */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {heroJobs && (heroJobs as JobPosting[]).length > 0 ? (
              (heroJobs as JobPosting[]).map((job, index) => (
                <HeroJobCard key={job._id} job={job} index={index} />
              ))
            ) : (
              [1, 2, 3].map((i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 h-48 flex items-center justify-center text-white/80 text-sm font-medium shadow-lg hover:bg-white/20 transition-colors">
                  Lowongan terbaru akan tampil di sini
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AdSlot format="horizontal" className="mb-10" />

        {/* City Sections */}
        {cities.map((city, cityIndex) => {
          const jobs = (cityJobs[cityIndex] as JobPosting[]) || []
          return (
            <section key={city.key} className="mb-12" id={`section-${city.key}`}>
              <SectionHeader title={`Loker ${city.label}`} viewAllHref={city.href} />
              {jobs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {jobs.map((job) => (
                    <JobCard key={job._id} job={job} />
                  ))}
                </div>
              ) : (
                <EmptySection cityName={city.label} />
              )}

              {/* Ad after 2nd and 4th city section */}
              {(cityIndex === 1 || cityIndex === 3) && (
                <AdSlot format="in-article" className="mt-8" />
              )}
            </section>
          )
        })}

        <AdSlot format="horizontal" className="mb-10" />

        {/* All Latest Jobs */}
        <section id="semua-loker">
          <SectionHeader title="Semua Loker Terbaru" />
          {allJobs && (allJobs as JobPosting[]).length > 0 ? (
            <>
              <div className="flex flex-col gap-3">
                {(allJobs as JobPosting[]).map((job) => (
                  <JobListItem key={job._id} job={job} />
                ))}
              </div>
              <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/" />
            </>
          ) : (
            <div className="bg-surface rounded-xl border border-border p-12 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.193 23.193 0 0112 15c-3.183 0-6.22-.64-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Belum Ada Lowongan</h3>
              <p className="text-sm text-text-secondary">Lowongan kerja terbaru akan muncul di sini setelah ditambahkan melalui Sanity CMS.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}