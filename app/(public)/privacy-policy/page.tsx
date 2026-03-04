import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Kebijakan Privasi - LokerPurwokertoku',
    description:
        'Kebijakan privasi LokerPurwokertoku menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.',
    openGraph: {
        title: 'Kebijakan Privasi - LokerPurwokertoku',
        description: 'Kebijakan privasi portal lowongan kerja LokerPurwokertoku.',
        type: 'website',
    },
}

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <section className="relative bg-gradient-to-r from-red-600 to-red-800 py-12 sm:py-16">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M0%2020L20%200L40%2020L20%2040z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Kebijakan Privasi</h1>
                    <p className="text-red-100 max-w-2xl mx-auto text-sm sm:text-base">
                        Terakhir diperbarui: Maret 2026
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="bg-white rounded-2xl border border-border p-6 sm:p-10 space-y-8">
                    {/* Introduction */}
                    <section>
                        <h2 className="text-lg font-bold text-text-primary mb-3">1. Pendahuluan</h2>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            LokerPurwokertoku (&quot;kami&quot;, &quot;kita&quot;, atau &quot;milik kami&quot;) menghargai privasi pengunjung website kami. Kebijakan Privasi ini menjelaskan jenis informasi yang kami kumpulkan, bagaimana kami menggunakannya, dan langkah-langkah yang kami ambil untuk melindunginya. Dengan mengakses dan menggunakan website kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini.
                        </p>
                    </section>

                    {/* Information Collection */}
                    <section>
                        <h2 className="text-lg font-bold text-text-primary mb-3">2. Informasi yang Kami Kumpulkan</h2>
                        <p className="text-sm text-text-secondary leading-relaxed mb-3">
                            Kami dapat mengumpulkan informasi berikut:
                        </p>
                        <ul className="space-y-2">
                            {[
                                'Informasi yang diberikan secara sukarela: Nama, alamat email, dan pesan yang Anda kirimkan melalui formulir kontak kami.',
                                'Informasi otomatis: Alamat IP, jenis browser, sistem operasi, halaman yang dikunjungi, waktu kunjungan, dan data navigasi lainnya melalui cookies dan teknologi serupa.',
                                'Informasi dari pihak ketiga: Data analitik dari Google Analytics dan layanan periklanan dari Google AdSense.',
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

                    {/* Google AdSense & Cookies */}
                    <section>
                        <h2 className="text-lg font-bold text-text-primary mb-3">3. Google AdSense & Cookies</h2>
                        <p className="text-sm text-text-secondary leading-relaxed mb-3">
                            Website kami menggunakan Google AdSense untuk menampilkan iklan. Google AdSense menggunakan cookies untuk menampilkan iklan berdasarkan kunjungan sebelumnya ke website kami atau website lain. Penggunaan cookie iklan oleh Google memungkinkan Google dan mitranya untuk menayangkan iklan kepada pengguna berdasarkan kunjungan mereka ke situs kami dan/atau situs lain di internet.
                        </p>
                        <p className="text-sm text-text-secondary leading-relaxed mb-3">
                            Anda dapat memilih untuk tidak menggunakan cookie personalisasi dengan mengunjungi{' '}
                            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                Pengaturan Iklan Google
                            </a>.
                        </p>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            Vendor pihak ketiga, termasuk Google, menggunakan cookies untuk menayangkan iklan berdasarkan kunjungan sebelumnya pengguna ke website Anda atau website lain. Anda juga dapat memilih untuk tidak menggunakan cookie vendor pihak ketiga untuk iklan yang dipersonalisasi melalui{' '}
                            <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                www.aboutads.info
                            </a>.
                        </p>
                    </section>

                    {/* Use of Information */}
                    <section>
                        <h2 className="text-lg font-bold text-text-primary mb-3">4. Penggunaan Informasi</h2>
                        <p className="text-sm text-text-secondary leading-relaxed mb-3">
                            Informasi yang kami kumpulkan digunakan untuk:
                        </p>
                        <ul className="space-y-2">
                            {[
                                'Menyediakan dan meningkatkan layanan website kami.',
                                'Menanggapi pertanyaan dan permintaan melalui formulir kontak.',
                                'Menganalisis tren penggunaan untuk meningkatkan pengalaman pengguna.',
                                'Menampilkan iklan yang relevan melalui Google AdSense.',
                                'Memenuhi kewajiban hukum yang berlaku.',
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                                    <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Data Protection */}
                    <section>
                        <h2 className="text-lg font-bold text-text-primary mb-3">5. Keamanan Data</h2>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            Kami mengambil langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda dari akses yang tidak sah, perubahan, pengungkapan, atau penghancuran. Namun, tidak ada metode transmisi melalui internet atau penyimpanan elektronik yang 100% aman, dan kami tidak dapat menjamin keamanan mutlak.
                        </p>
                    </section>

                    {/* Third-party Links */}
                    <section>
                        <h2 className="text-lg font-bold text-text-primary mb-3">6. Tautan Pihak Ketiga</h2>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            Website kami dapat berisi tautan ke situs web pihak ketiga. Kami tidak bertanggung jawab atas praktik privasi atau konten situs web tersebut. Kami menyarankan Anda untuk membaca kebijakan privasi setiap situs web yang Anda kunjungi.
                        </p>
                    </section>

                    {/* Children */}
                    <section>
                        <h2 className="text-lg font-bold text-text-primary mb-3">7. Privasi Anak-anak</h2>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            Layanan kami tidak ditujukan untuk anak-anak di bawah usia 13 tahun. Kami tidak dengan sengaja mengumpulkan informasi pribadi dari anak-anak di bawah 13 tahun. Jika Anda mengetahui bahwa anak Anda telah memberikan informasi pribadi kepada kami, silakan hubungi kami agar kami dapat menghapusnya.
                        </p>
                    </section>

                    {/* Changes */}
                    <section>
                        <h2 className="text-lg font-bold text-text-primary mb-3">8. Perubahan Kebijakan Privasi</h2>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            Kami berhak untuk memperbarui Kebijakan Privasi ini sewaktu-waktu. Perubahan akan berlaku segera setelah dipublikasikan di halaman ini. Kami menyarankan Anda untuk secara berkala memeriksa halaman ini untuk mengetahui adanya perubahan.
                        </p>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="text-lg font-bold text-text-primary mb-3">9. Hubungi Kami</h2>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui halaman{' '}
                            <a href="/contact" className="text-primary hover:underline font-medium">Kontak</a>{' '}
                            atau kirim email ke <span className="font-medium text-text-primary">info@lokerpurwokertoku.com</span>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
