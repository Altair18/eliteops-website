'use client'
import { useEffect, useState } from 'react'

export default function ContactForm() {
  const [mounted, setMounted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('')

  useEffect(() => setMounted(true), [])
  if (!mounted) return null // avoid SSR → no hydration mismatch

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('✅ Message sent!')
      setForm({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('❌ Failed to send')
    }
  }

  // discourage extensions + ignore injected attrs
  const antiExt = {
    'data-gramm': 'false',
    'data-gramm_editor': 'false',
    'data-enable-grammarly': 'false',
    spellCheck: false as const,
    autoComplete: 'off' as const,
    autoCorrect: 'off' as const,
    autoCapitalize: 'off' as const,
    suppressHydrationWarning: true as const,
  }

  return (
    <section id="contact" className="relative py-16 px-6 md:px-8 bg-[#F7F8FB] overflow-hidden">
      {/* subtle brand accents */}
      <div className="absolute -left-10 top-10 h-20 w-40 dots rounded-xl opacity-50" />
      <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-3xl bg-[#6A35F2]/20 blur-2xl" />

      <h2 className="text-3xl font-semibold text-center text-[#003E9A] mb-8">Request a Demo</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white border border-slate-100 rounded-2xl shadow-sm p-6 md:p-8 space-y-4"
        autoComplete="off"
        noValidate
        suppressHydrationWarning
      >
        {/* Name */}
        <label className="block">
          <span className="sr-only">Name</span>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 select-none">👤</span>
            <input
              placeholder="Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full pl-11 pr-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#7A3BFF] placeholder-slate-400"
              required
              {...antiExt}
            />
          </div>
        </label>

        {/* Email */}
        <label className="block">
          <span className="sr-only">Email</span>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 select-none">✉️</span>
            <input
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full pl-11 pr-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#7A3BFF] placeholder-slate-400"
              required
              inputMode="email"
              {...antiExt}
            />
          </div>
        </label>

        {/* Company */}
        <label className="block">
          <span className="sr-only">Company</span>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 select-none">🏢</span>
            <input
              placeholder="Company"
              value={form.company}
              onChange={e => setForm({ ...form, company: e.target.value })}
              className="w-full pl-11 pr-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#7A3BFF] placeholder-slate-400"
              {...antiExt}
            />
          </div>
        </label>

        {/* Message */}
        <label className="block">
          <span className="sr-only">Message</span>
          <div className="relative">
            <span className="absolute left-4 top-4 select-none">📝</span>
            <textarea
              placeholder="Message"
              rows={4}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-[#7A3BFF] placeholder-slate-400"
              required
              {...antiExt}
            />
          </div>
        </label>

        {/* Submit */}
        <button
          className="w-full text-white py-3 rounded-full brand-gradient shadow-md hover:opacity-95 transition"
        >
          Send
        </button>

        {status && (
          <p
            className={`text-center mt-2 ${
              status.startsWith('✅') ? 'text-emerald-600'
                : status.startsWith('❌') ? 'text-rose-600'
                : 'text-slate-600'
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  )
}
