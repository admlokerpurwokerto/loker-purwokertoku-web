'use client'

import { FormEvent } from 'react'

export default function ContactForm() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const name = formData.get('name')
        const email = formData.get('email')
        const subject = formData.get('subject')
        const message = formData.get('message')

        const text = `Halo Admin LokerPurwokertoku,\n\nSaya ingin menghubungi dengan detail berikut:\n\n*Nama:* ${name}\n*Email:* ${email}\n*Subjek:* ${subject}\n\n*Pesan:*\n${message}`
        
        const waUrl = `https://wa.me/6289666011739?text=${encodeURIComponent(text)}`
        window.open(waUrl, '_blank')
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
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
                    <option value="Pasang Lowongan Kerja">Pasang Lowongan Kerja</option>
                    <option value="Kerjasama / Partnership">Kerjasama / Partnership</option>
                    <option value="Laporan Lowongan Palsu">Laporan Lowongan Palsu</option>
                    <option value="Pertanyaan Umum">Pertanyaan Umum</option>
                    <option value="Lainnya">Lainnya</option>
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
                Kirim via WhatsApp
            </button>
        </form>
    )
}
