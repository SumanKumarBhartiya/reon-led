import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { Button } from '../ui'
import { submitEnquiry } from '../../services/api'
import type { EnquiryFormData } from '../../types'
import { PRODUCTS } from '../../data'

interface EnquiryFormProps {
  preselectedProduct?: string
  compact?: boolean
}

export default function EnquiryForm({ preselectedProduct, compact = false }: EnquiryFormProps) {
  const [form, setForm] = useState<EnquiryFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    productInterest: preselectedProduct ?? '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await submitEnquiry(form)
      if (res.success) {
        setSuccess(true)
      } else {
        setError(res.message ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <CheckCircle size={52} className="text-brand-gold" />
        <h3 className="font-heading text-2xl text-brand-navy font-semibold">Thank You!</h3>
        <p className="font-body text-gray-500">
          Your enquiry has been received. Our team will reach out within 24 hours.
        </p>
        <Button variant="outline" size="sm" onClick={() => setSuccess(false)}>
          Send Another
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label className="block font-body text-sm font-semibold text-brand-navy mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full border border-gray-200 px-4 py-2.5 font-body text-sm focus:outline-none focus:border-brand-gold transition-colors"
          />
        </div>
        <div>
          <label className="block font-body text-sm font-semibold text-brand-navy mb-1.5">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            required
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="w-full border border-gray-200 px-4 py-2.5 font-body text-sm focus:outline-none focus:border-brand-gold transition-colors"
          />
        </div>
        <div>
          <label className="block font-body text-sm font-semibold text-brand-navy mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="w-full border border-gray-200 px-4 py-2.5 font-body text-sm focus:outline-none focus:border-brand-gold transition-colors"
          />
        </div>
        <div>
          <label className="block font-body text-sm font-semibold text-brand-navy mb-1.5">Company</label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company name (optional)"
            className="w-full border border-gray-200 px-4 py-2.5 font-body text-sm focus:outline-none focus:border-brand-gold transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block font-body text-sm font-semibold text-brand-navy mb-1.5">
          Product of Interest
        </label>
        <select
          name="productInterest"
          value={form.productInterest}
          onChange={handleChange}
          className="w-full border border-gray-200 px-4 py-2.5 font-body text-sm focus:outline-none focus:border-brand-gold transition-colors bg-white"
        >
          <option value="">Select a product…</option>
          {PRODUCTS.map((p) => (
            <option key={p.id} value={p.name}>{p.name}</option>
          ))}
          <option value="General Enquiry">General Enquiry</option>
        </select>
      </div>

      <div>
        <label className="block font-body text-sm font-semibold text-brand-navy mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={compact ? 3 : 5}
          placeholder="Tell us about your requirements — quantities, specifications, timeline…"
          className="w-full border border-gray-200 px-4 py-2.5 font-body text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none"
        />
      </div>

      {error && (
        <p className="font-body text-red-500 text-sm bg-red-50 border border-red-200 px-4 py-2.5">
          {error}
        </p>
      )}

      <Button type="submit" loading={loading} size="lg" className="w-full">
        Send Enquiry <Send size={16} />
      </Button>
    </form>
  )
}
