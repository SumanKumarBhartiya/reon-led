import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { COMPANY } from '../../types'
import { NAV_ITEMS } from '../../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div>
          <Link to="/" className="flex items-center gap-3 mb-4">
            <img src="logo.png" alt="Reon LED" className="h-16 w-auto invert" />
            <div>
              <p className="font-heading font-bold text-white text-base leading-tight">REON INDUSTRIES</p>
              <p className="font-body text-brand-gold-light text-xs tracking-widest uppercase">Pvt. Ltd.</p>
            </div>
          </Link>
          <p className="font-body text-gray-400 text-sm leading-relaxed">
            {COMPANY.description}
          </p>
          <div className="mt-5 flex gap-3">
            {/* Social placeholders — wire up when ready */}
            {['LinkedIn', 'WhatsApp'].map((s) => (
              <span
                key={s}
                className="text-xs font-body border border-gray-600 text-gray-400 px-3 py-1 rounded hover:border-brand-gold hover:text-brand-gold cursor-pointer transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-heading text-white font-semibold text-lg mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="font-body text-gray-400 text-sm hover:text-brand-gold-light transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full inline-block" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-heading text-white font-semibold text-lg mb-5">Our Products</h4>
          <ul className="space-y-2.5">
            {[
              'Street Light Housing',
              'Flood Light Housing',
              'High Bay Light Housing',
              'Well Glass Light Housing',
              'Finish Goods',
              'PCB',
            ].map((p) => (
              <li key={p}>
                <Link
                  to={`/products/${p.toLowerCase().replace(/ /g, '-')}`}
                  className="font-body text-gray-400 text-sm hover:text-brand-gold-light transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full inline-block" />
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-white font-semibold text-lg mb-5">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin size={16} className="text-brand-gold mt-0.5 shrink-0" />
              <span className="font-body text-gray-400 text-sm leading-relaxed">
                {COMPANY.address.line1}<br />
                {COMPANY.address.line2}<br />
                {COMPANY.address.city} – {COMPANY.address.pincode}
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="text-brand-gold shrink-0" />
              <div className="font-body text-gray-400 text-sm space-y-1">
                {COMPANY.phones.map((p) => (
                  <a key={p} href={`tel:${p}`} className="block hover:text-brand-gold-light transition-colors">
                    +91 {p}
                  </a>
                ))}
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-brand-gold shrink-0" />
              <a href={`mailto:${COMPANY.email}`} className="font-body text-gray-400 text-sm hover:text-brand-gold-light transition-colors">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Clock size={16} className="text-brand-gold shrink-0" />
              <span className="font-body text-gray-400 text-sm">{COMPANY.workingHours}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-body text-gray-500">
          <p>© {year} {COMPANY.name}. All rights reserved.</p>
          <p>Designed &amp; Developed with ❤️ in India</p>
        </div>
      </div>
    </footer>
  )
}
