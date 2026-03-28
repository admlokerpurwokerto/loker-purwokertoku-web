
import { Metadata } from 'next'
import AdSlot from '@/components/AdSlot'
import ContactForm from './ContactForm'

  export const metadata: Metadata = {
      title: 'Hubungi Kami - LokerPurwokertoku',
      description: 'Hubungi tim LokerPurwokertoku untuk pertanyaan, kerjasama, atau pemasangan iklan lowongan kerja di wilayah Banyumas Raya.',
      openGraph: {
          title: 'Hubungi Kami - LokerPurwokertoku',
          description: 'Hubungi tim LokerPurwokertoku untuk pertanyaan, kerjasama, atau pemasangan iklan.',
          type: 'website',
      },
  }

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <section className="relative bg-gradient-to-r from-red-600 to-red-800 py-12 sm:py-16">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M0%2020L20%200L40%2020L20%2040z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Hubungi Kami</h1>
                    <p className="text-red-100 max-w-2xl mx-auto text-sm sm:text-base">
                        Ada pertanyaan atau ingin memasang lowongan? Jangan ragu untuk menghubungi kami
                    </p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <AdSlot format="horizontal" className="mb-10" />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-2xl border border-border p-6 sm:p-8">
                            <h2 className="text-xl font-bold text-text-primary mb-1">Kirim Pesan</h2>
                            <p className="text-sm text-text-secondary mb-6">Pesan Anda akan otomatis diarahkan ke WhatsApp kami.</p>

                            <ContactForm />
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-5">
                        <div className="bg-white rounded-2xl border border-border p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h3 className="text-sm font-semibold text-text-primary">WhatsApp</h3>
                            </div>
                            <p className="text-sm text-text-secondary">0896-6601-1739</p>
                        </div>

                        {/* Location */}
                        <div className="bg-white rounded-2xl border border-border p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-sm font-semibold text-text-primary">Lokasi</h3>
                            </div>
                            <p className="text-sm text-text-secondary">Purwokerto, Jawa Tengah<br />Indonesia</p>
                        </div>

                        <div className="bg-white rounded-2xl border border-border p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-sm font-semibold text-text-primary">Jam Operasional</h3>
                            </div>
                            <div className="space-y-1 text-sm text-text-secondary">
                                <p>Buka Setiap Hari</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10 p-6">
                            <h3 className="text-sm font-semibold text-text-primary mb-2">Untuk Perusahaan</h3>
                            <p className="text-xs text-text-secondary leading-relaxed">
                                Ingin memasang lowongan kerja di LokerPurwokertoku? Hubungi kami melalui form di samping atau via WhatsApp untuk informasi lebih lanjut tentang harga dan paket yang tersedia.
                            </p>
                        </div>

                        <AdSlot format="sidebar" />
                    </div>
                </div>

                <AdSlot format="horizontal" className="mt-10" />
            </div>
        </div>
    )
}