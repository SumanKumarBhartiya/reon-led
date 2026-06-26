import type { EnquiryFormData, ApiResponse } from '../types'

// ─── Enquiry ──────────────────────────────────────────────────────────────────
export async function submitEnquiry(
  data: EnquiryFormData
): Promise<ApiResponse> {
  const formspreeId = "mojoeogv"
  if (formspreeId) {
    const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
    const json = (await res.json()) as { ok?: boolean; error?: string }
    return { success: json.ok ?? false, message: json.error }
  }

  // --- Static fallback: open mailto ---
  const subject = encodeURIComponent(`Enquiry from ${data.name} - Reon LED`)
  const body = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCompany: ${data.company ?? '—'}\nProduct: ${data.productInterest ?? '—'}\n\n${data.message}`
  )
  window.location.href = `mailto:reon.indu@gmail.com?subject=${subject}&body=${body}`
  return { success: true, message: 'Opening email client…' }
}

// ─── Products (future: fetch from backend) ───────────────────────────────────
// Currently returns static data. When you wire up a backend, replace these
// with real fetch calls.
export async function fetchProducts() {
  const { PRODUCTS } = await import('../data')
  return { success: true, data: PRODUCTS }
}
