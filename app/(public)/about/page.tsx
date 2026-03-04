import { Metadata } from 'next'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
    title: 'Tentang Kami - LokerPurwokertoku',
    description:
        'LokerPurwokertoku adalah portal lowongan kerja terpercaya untuk wilayah Banyumas Raya, meliputi Purwokerto, Cilacap, Purbalingga, Kebumen, dan Pemalang.',
    openGraph: {
        title: 'Tentang Kami - LokerPurwokertoku',
        description:
            'Portal lowongan kerja terpercaya untuk wilayah Banyumas Raya.',
        type: 'website',
    },
}

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <section className="relative bg-gradient-to-r from-red-600 to-red-800 py-12 sm:py-16">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M0%2020L20%200L40%2020L20%2040z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Tentang Kami</h1>
                    <p className="text-red-100 max-w-2xl mx-auto text-sm sm:text-base">
                        Mengenal lebih dekat portal lowongan kerja terpercaya di Banyumas Raya
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* AdSense: Top */}
                <AdSlot format="horizontal" className="mb-10" />

                {/* Mission */}
                <section className="bg-white rounded-2xl border border-border p-6 sm:p-8 mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-text-primary">Misi Kami</h2>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                        <strong className="text-text-primary">LokerPurwokertoku</strong> hadir sebagai jembatan antara pencari kerja dan perusahaan di wilayah Banyumas Raya. Kami percaya bahwa setiap orang berhak mendapatkan akses mudah terhadap informasi lowongan kerja yang terpercaya dan terkini di daerahnya masing-masing.
                    </p>
                </section>

                {/* What We Do */}
                <section className="bg-white rounded-2xl border border-border p-6 sm:p-8 mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.193 23.193 0 0112 15c-3.183 0-6.22-.64-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-text-primary">Apa yang Kami Lakukan</h2>
                    </div>
                    <p className="text-text-secondary leading-relaxed mb-5">
                        Kami mengumpulkan dan menyajikan informasi lowongan kerja dari berbagai perusahaan dan instansi di 5 kota utama di Banyumas Raya:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            { city: 'Purwokerto', desc: 'Ibu kota Kabupaten Banyumas' },
                            { city: 'Cilacap', desc: 'Kota pelabuhan terbesar di pantai selatan Jawa' },
                            { city: 'Purbalingga', desc: 'Sentra industri kreatif' },
                            { city: 'Kebumen', desc: 'Kabupaten dengan ekonomi yang berkembang' },
                            { city: 'Pemalang', desc: 'Kabupaten di Pantai Utara Jawa' },
                        ].map((item) => (
                            <div key={item.city} className="flex items-start gap-3 p-3 rounded-lg bg-surface-hover">
                                <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                    <p className="text-sm font-semibold text-text-primary">{item.city}</p>
                                    <p className="text-xs text-text-muted">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* AdSense: In-Article */}
                <AdSlot format="in-article" className="mb-8" />

                {/* Why Us */}
                <section className="bg-white rounded-2xl border border-border p-6 sm:p-8 mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-text-primary">Mengapa Memilih Kami</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { title: 'Terpercaya', desc: 'Informasi lowongan yang telah diverifikasi dan akurat', icon: '✅' },
                            { title: 'Terkini', desc: 'Update harian untuk lowongan kerja terbaru', icon: '🔄' },
                            { title: 'Lokal', desc: 'Fokus pada wilayah Banyumas Raya yang Anda cari', icon: '📍' },
                            { title: 'Gratis', desc: 'Akses penuh tanpa biaya untuk pencari kerja', icon: '🆓' },
                        ].map((item) => (
                            <div key={item.title} className="p-4 rounded-xl border border-border-light hover:border-primary/20 hover:shadow-sm transition-all">
                                <div className="text-2xl mb-2">{item.icon}</div>
                                <h3 className="text-sm font-semibold text-text-primary mb-1">{item.title}</h3>
                                <p className="text-xs text-text-secondary">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Disclaimer */}
                <section className="bg-red-50 rounded-2xl border border-red-200 p-6 sm:p-8">
                    <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <h3 className="text-sm font-semibold text-red-800 mb-1">Disclaimer</h3>
                            <p className="text-xs text-red-700 leading-relaxed">
                                LokerPurwokertoku hanya bertindak sebagai media informasi. Kami tidak bertanggung jawab atas proses rekrutmen yang dilakukan oleh perusahaan yang memposting lowongan. Harap waspada terhadap penipuan dan jangan pernah membayar biaya apapun untuk melamar pekerjaan.
                            </p>
                        </div>
                    </div>
                </section>

                {/* AdSense: Bottom */}
                <AdSlot format="horizontal" className="mt-10" />
            </div>
        </div>
    )
}
