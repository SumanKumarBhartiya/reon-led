import { useSearchParams } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { COMPANY } from '../types'
import EnquiryForm from '../components/ui/EnquiryForm'

export default function ContactPage() {
  const [params] = useSearchParams()
  const preselectedProduct = params.get('product') ?? undefined

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-brand-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #B87333 1px, transparent 0)`, backgroundSize: '40px 40px' }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <p className="font-body text-brand-gold text-sm tracking-widest uppercase mb-2">Reach Out</p>
          <h1 className="font-heading text-white text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="font-body text-gray-300 mt-3 max-w-xl text-lg">
            Have a requirement? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        {/* Contact info */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h2 className="font-heading text-brand-navy text-2xl font-bold mb-1">Get in Touch</h2>
            <div className="w-12 h-1 bg-brand-gold mb-6" />
          </div>

          <ContactItem icon={<MapPin size={20} />} label="Address">
            <p className="font-body text-gray-600 text-sm leading-relaxed">
              {COMPANY.address.line1}<br />
              {COMPANY.address.line2}<br />
              {COMPANY.address.city}, {COMPANY.address.state}<br />
              PIN: {COMPANY.address.pincode}
            </p>
          </ContactItem>

          <ContactItem icon={<Phone size={20} />} label="Phone">
            {COMPANY.phones.map((p) => (
              <a key={p} href={`tel:${p}`} className="block font-body text-gray-600 text-sm hover:text-brand-gold transition-colors">
                +91 {p}
              </a>
            ))}
          </ContactItem>

          <ContactItem icon={<Mail size={20} />} label="Email">
            <a href={`mailto:${COMPANY.email}`} className="font-body text-gray-600 text-sm hover:text-brand-gold transition-colors">
              {COMPANY.email}
            </a>
          </ContactItem>

          <ContactItem icon={<Clock size={20} />} label="Working Hours">
            <p className="font-body text-gray-600 text-sm">{COMPANY.workingHours}</p>
          </ContactItem>

          {/* Map placeholder */}
          {/* <div className="aspect-video bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 font-body text-sm"> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.7504030369955!2d77.81411667431503!3d12.729699320137156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae71987307037d%3A0xdbf979b37eb01830!2sReon%20Industries%20pvt.ltd!5e0!3m2!1sen!2sin!4v1774465665721!5m2!1sen!2sin" width="370" height="200" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          {/* </div> */}
        </div>

        {/* Enquiry form */}
        <div className="lg:col-span-2">
          <h2 className="font-heading text-brand-navy text-2xl font-bold mb-1">Send an Enquiry</h2>
          <div className="w-12 h-1 bg-brand-gold mb-8" />
          <div className="bg-white border border-gray-100 shadow-sm p-8">
            <EnquiryForm preselectedProduct={preselectedProduct} />
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-body font-semibold text-brand-navy text-sm mb-1">{label}</p>
        {children}
      </div>
    </div>
  )
}
