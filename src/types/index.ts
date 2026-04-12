// ─── Company Info ─────────────────────────────────────────────────────────────
export const COMPANY = {
  name: 'Reon Industries Pvt. Ltd.',
  shortName: 'Reon LED',
  tagline: "Illuminating Tomorrow's World",
  description:
    'Premium manufacturer of LED lighting solutions — street lights, flood lights, high bay lights and industrial luminaires based out of Hosur, Tamil Nadu.',
  address: {
    line1: 'No 25/1 Appavu Nagar Extension,',
    line2: 'Opp. Chennish Mahal, Thalli Road,',
    city: 'Hosur',
    state: 'Tamil Nadu',
    pincode: '635 109',
    full: 'No 25/1 Appavu Nagar Extension, Opp. Chennish Mahal, Thalli Road, Hosur - 635 109',
  },
  phones: ['9740094003', '9629927649'],
  email: 'reon.indu@gmail.com',
  workingHours: 'Mon – Sat: 9:00 AM – 6:00 PM',
  founded: '2020',
  gstin: '', // Add when available TODO
} as const

// ─── Product Types ─────────────────────────────────────────────────────────────

export interface Specification {
  label: string
  value: string
}

export interface Product {
  id: string
  name: string
  category: ProductCategory
  wattage: string
  description: string
  features: string[]
  image?: string
  enquiryEnabled: boolean,
  specs: Specification[],
  document: string,
}

export type ProductCategory =
  | 'Street Light Housing'
  | 'Flood Light Housing'
  | 'High Bay Light Housing'

// ─── Navigation Types ──────────────────────────────────────────────────────────
export interface NavItem {
  label: string
  path: string
  children?: NavItem[]
}

// ─── Enquiry Form ──────────────────────────────────────────────────────────────
export interface EnquiryFormData {
  name: string
  email: string
  phone: string
  company?: string
  productInterest?: string
  message: string
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  message?: string
  error?: string
}
