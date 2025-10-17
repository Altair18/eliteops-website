// ...existing code...
'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('')

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
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('❌ Failed to send')
    }
  }

  return (
    <section id="contact" className="py-16 px-8 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-6">Request a Demo</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full border p-3 rounded-lg" required />
        <input placeholder="Email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full border p-3 rounded-lg" required />
        <input placeholder="Company" value={form.company} onChange={e => setForm({...form, company: e.target.value})} className="w-full border p-3 rounded-lg" />
        <textarea placeholder="Message" value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full border p-3 rounded-lg" rows={4} required />
        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">Send</button>
        {status && <p className="text-center mt-2">{status}</p>}
      </form>
    </section>
  )
}