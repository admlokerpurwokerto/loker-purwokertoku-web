import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Syarat & Ketentuan - LokerPurwokertoku',
    description:
        'Syarat dan ketentuan penggunaan website LokerPurwokertoku, portal lowongan kerja untuk wilayah Banyumas Raya.',
    openGraph: {
        title: 'Syarat & Ketentuan - LokerPurwokertoku',
        description: 'Syarat dan ketentuan penggunaan portal lowongan kerja LokerPurwokertoku.',
        type: 'website',
    },
}

export default function TermsPage() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <section className="relative bg-gradient-to-r from-red-600 to-red-800 py-12 sm:py-16">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M0%2020L20%200L40%2020L20%2040z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Syarat & Ketentuan</h1>
                    <p className="text-red-100 max-w-2xl mx-auto text-sm sm:text-base">
                        Terakhir diperbarui: Maret 2026
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="bg-white rounded-2xl border border-border p-6 sm:p-10 space-y-8">
                    {/* Acceptance */}
                    <section>
                        <h2 className="text-lg font-bold text-text-primary mb-3">1. Penerimaan Syarat</h2>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            Dengan mengakses dan menggunakan website LokerPurwokertoku (&quot;Website&quot;), Anda menyetujui untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak menyetujui syarat-syarat ini, mohon untuk tidak menggunakan Website kami.
                        </p>
                    </section>

                    {/* Description of Service */}
                    <section>
                        <h2 className="text-lg font-bold text-text-primary mb-3">2. Deskripsi Layanan</h2>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            LokerPurwokertoku adalah portal informasi lowongan kerja yang menyajikan informasi lowongan pekerjaan di wilayah Banyumas Raya, meliputi Purwokerto, Cilacap, Purbalingga, Kebumen, dan Pemalang. Kami bertindak sebagai media informasi dan tidak terlibat langsung dalam proses rekrutmen antara pencari kerja dan perusahaan.
                        </p>
                    </section>

                    {/* User Responsibilities */}
                    <section>
                        <h2 className="text-lg font-bold text-text-primary mb-3">3. Tanggung Jawab Pengguna</h2>
                        <p className="text-sm text-text-secondary leading-relaxed mb-3">
                            Sebagai pengguna, Anda setuju untuk:
                        </p>
                        <ul className="space-y-2">
                            {[
                                'Menggunakan Website hanya untuk tujuan yang sah dan sesuai dengan ketentuan ini.',
                                'Tidak menyebarkan informasi palsu, menyesatkan, atau merugikan.',
                                'Tidak melakukan tindakan yang dapat merusak, menonaktifkan, atau mengganggu fungsi Website.',
                                'Tidak mengumpulkan data pengguna lain tanpa izin.',
                                'Bertanggung jawab penuh atas keputusan karir yang diambil berdasarkan informasi di Website.',
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                                    <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Content Disclaimer */}
                    <section>
                        <h2 className="text-lg font-bold text-text-primary mb-3">4. Konten & Disclaimer</h2>
                        <p className="text-sm text-text-secondary leading-relaxed mb-3">
                            Meskipun kami berusaha menyajikan informasi lowongan kerja yang akurat dan terkini, kami tidak menjamin keakuratan, kelengkapan, atau keandalan informasi yang tersedia di Website. Secara khusus:
                        </p>
                        <ul className="space-y-2">
                            {[
                                'Informasi lowongan kerja disediakan berdasarkan data yang kami terima dari perusahaan/pihak yang memposting.',
                                'Kami tidak bertanggung jawab atas isi lowongan, proses rekrutmen, atau keputusan perekrutan yang dilakukan oleh perusahaan.',
                                'Kami tidak menjamin bahwa setiap lowongan yang ditampilkan masih tersedia atau valid.',
                                'Pengguna diminta untuk selalu memverifikasi informasi langsung kepada perusahaan terkait.',
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                                    <svg className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Fraud Warning */}
                    <section>
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                            <h2 className="text-lg font-bold text-red-800 mb-2">5. Peringatan Penipuan</h2>
                            <p className="text-sm text-red-700 leading-relaxed">
                                Harap waspada terhadap penipuan berkedok lowongan kerja. Perusahaan yang sah <strong>tidak akan pernah</strong> meminta pembayaran uang dalam bentuk apapun kepada calon pelamar. Jika Anda menemukan lowongan yang mencurigakan, segera laporkan kepada kami melalui halaman <a href="/contact" className="underline font-medium">Kontak</a>.
                            </p>
                        </div>
                    </section>

                    {/* Intellectual Property */}
                    <section>
                        <h2 className="text-lg font-bold text-text-primary mb-3">6. Hak Kekayaan Intelektual</h2>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            Seluruh konten di Website ini, termasuk tetapi tidak terbatas pada teks, grafis, logo, ikon, dan perangkat lunak, merupakan hak milik LokerPurwokertoku atau pemberi lisensi kami dan dilindungi oleh undang-undang hak cipta. Penggunaan tanpa izin tertulis dari kami sangat dilarang.
                        </p>
                    </section>

                    {/* Limitation of Liability */}
                    <section>
                        <h2 className="text-lg font-bold text-text-primary mb-3">7. Batasan Tanggung Jawab</h2>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            Dalam batas maksimum yang diizinkan oleh hukum yang berlaku, LokerPurwokertoku tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, konsekuensial, atau kerugian khusus yang timbul dari penggunaan atau ketidakmampuan menggunakan Website ini.
                        </p>
                    </section>

                    {/* Changes */}
                    <section>
                        <h2 className="text-lg font-bold text-text-primary mb-3">8. Perubahan Syarat & Ketentuan</h2>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            Kami berhak untuk mengubah Syarat dan Ketentuan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Perubahan akan berlaku segera setelah dipublikasikan di halaman ini. Penggunaan berkelanjutan atas Website setelah perubahan dianggap sebagai persetujuan Anda terhadap syarat yang telah diperbarui.
                        </p>
                    </section>

                    {/* Governing Law */}
                    <section>
                        <h2 className="text-lg font-bold text-text-primary mb-3">9. Hukum yang Berlaku</h2>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            Syarat dan Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap perselisihan yang timbul akan diselesaikan melalui musyawarah atau melalui pengadilan yang berwenang di Indonesia.
                        </p>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="text-lg font-bold text-text-primary mb-3">10. Hubungi Kami</h2>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            Untuk pertanyaan tentang Syarat dan Ketentuan ini, hubungi kami melalui halaman{' '}
                            <a href="/contact" className="text-primary hover:underline font-medium">Kontak</a>{' '}
                            atau email ke <span className="font-medium text-text-primary">info@lokerpurwokertoku.com</span>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
