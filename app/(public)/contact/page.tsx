import { Metadata } from 'next'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
    title: 'Hubungi Kami - LokerPurwokertoku',
    description:
        'Hubungi tim LokerPurwokertoku untuk pertanyaan, kerjasama, atau pemasangan iklan lowongan kerja di wilayah Banyumas Raya.',
    openGraph: {
        title: 'Hubungi Kami - LokerPurwokertoku',
        description: 'Hubungi tim LokerPurwokertoku untuk pertanyaan, kerjasama, atau pemasangan iklan.',
        type: 'website',
    },
}

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            {/* Header */}
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
                {/* AdSense: Top */}
                <AdSlot format="horizontal" className="mb-10" />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-2xl border border-border p-6 sm:p-8">
                            <h2 className="text-xl font-bold text-text-primary mb-1">Kirim Pesan</h2>
                            <p className="text-sm text-text-secondary mb-6">Kami akan membalas pesan Anda secepat mungkin.</p>

                            <form className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="contact-name" className="block text-sm font-medium text-text-primary mb-1.5">
                                            Nama Lengkap <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="contact-name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                            placeholder="Masukkan nama Anda"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="block text-sm font-medium text-text-primary mb-1.5">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="contact-email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                            placeholder="contoh@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="contact-subject" className="block text-sm font-medium text-text-primary mb-1.5">
                                        Subjek <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="contact-subject"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    >
                                        <option value="">Pilih subjek...</option>
                                        <option value="pasang-loker">Pasang Lowongan Kerja</option>
                                        <option value="kerjasama">Kerjasama / Partnership</option>
                                        <option value="laporan">Laporan Lowongan Palsu</option>
                                        <option value="pertanyaan">Pertanyaan Umum</option>
                                        <option value="lainnya">Lainnya</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="contact-message" className="block text-sm font-medium text-text-primary mb-1.5">
                                        Pesan <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        required
                                        rows={5}
                                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                                        placeholder="Tulis pesan Anda di sini..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    id="contact-submit"
                                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-sm"
                                >
                                    Kirim Pesan
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-2 space-y-5">
                        {/* Email */}
                        <div className="bg-white rounded-2xl border border-border p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-sm font-semibold text-text-primary">Email</h3>
                            </div>
                            <p className="text-sm text-text-secondary">admlokerpurwokerto@gmail.com</p>
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

                        {/* Working Hours */}
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
                                <p>Senin - Jumat: 08.00 - 17.00 WIB</p>
                                <p>Sabtu: 08.00 - 12.00 WIB</p>
                                <p className="text-text-muted">Minggu & Hari Libur: Tutup</p>
                            </div>
                        </div>

                        {/* For Employers */}
                        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10 p-6">
                            <h3 className="text-sm font-semibold text-text-primary mb-2">Untuk Perusahaan</h3>
                            <p className="text-xs text-text-secondary leading-relaxed">
                                Ingin memasang lowongan kerja di LokerPurwokertoku? Hubungi kami melalui form di samping atau kirim email langsung untuk informasi lebih lanjut tentang harga dan paket yang tersedia.
                            </p>
                        </div>

                        {/* AdSense: Sidebar */}
                        <AdSlot format="sidebar" />
                    </div>
                </div>

                {/* AdSense: Bottom */}
                <AdSlot format="horizontal" className="mt-10" />
            </div>
        </div>
    )
}
