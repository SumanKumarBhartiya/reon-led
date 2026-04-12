import { COMPANY } from '../types'
import { STATS, WHY_CHOOSE_US } from '../data'
import { SectionHeader } from '../components/ui'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '../components/ui'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-brand-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #B87333 1px, transparent 0)`, backgroundSize: '40px 40px' }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <p className="font-body text-brand-gold text-sm tracking-widest uppercase mb-2">Who We Are</p>
          <h1 className="font-heading text-white text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </div>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-body font-semibold px-3 py-1 rounded-full tracking-widest uppercase mb-4">
              Our Story
            </span>
            <h2 className="font-heading text-brand-navy text-3xl md:text-4xl font-bold mb-2">
              {COMPANY.name}
            </h2>
            <div className="w-16 h-1 bg-brand-gold mb-6" />
            <p className="font-body text-gray-600 text-base leading-relaxed mb-4">
              Reon Industries Pvt. Ltd. is a Hosur-based manufacturer of premium LED lighting
              components and finished luminaires. Founded with a vision to bring quality, affordable
              LED solutions to India's growing infrastructure, we serve contractors, distributors,
              and OEM clients across the country.
            </p>
            <p className="font-body text-gray-600 text-base leading-relaxed mb-4">
              Our manufacturing facility in Hosur, Tamil Nadu, is equipped with modern
              tooling and in-house testing labs, ensuring every product that leaves our floor
              meets stringent quality standards.
            </p>
            <p className="font-body text-gray-600 text-base leading-relaxed">
              From die-cast aluminium street light housings to custom PCBs and finish goods,
              we offer a comprehensive product range backed by robust after-sales support.
            </p>
          </div>

          {/* Image placeholder / brand panel */}
          <div className="bg-brand-navy rounded-sm p-12 flex flex-col items-center justify-center text-center gap-6">
            <img src="logo.png" alt="Reon LED" className="h-18 w-auto invert" />
            <div>
              <p className="font-heading text-white text-2xl font-bold">REON INDUSTRIES</p>
              <p className="font-body text-brand-gold-light text-sm tracking-widest uppercase mt-1">Pvt. Ltd.</p>
            </div>
            <p className="font-body text-gray-400 text-sm italic">"{COMPANY.tagline}"</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-gold py-14">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-heading text-white text-4xl font-bold">{s.value}</p>
              <p className="font-body text-white/80 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader badge="Our Purpose" title="Vision & Mission" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border-l-4 border-brand-gold shadow-sm">
              <h3 className="font-heading text-brand-navy text-xl font-semibold mb-4">Our Vision</h3>
              <p className="font-body text-gray-600 leading-relaxed">
                To be a nationally recognised LED lighting manufacturer known for product quality,
                innovation, and customer trust — contributing to a brighter, energy-efficient India.
              </p>
            </div>
            <div className="bg-white p-8 border-l-4 border-brand-navy shadow-sm">
              <h3 className="font-heading text-brand-navy text-xl font-semibold mb-4">Our Mission</h3>
              <p className="font-body text-gray-600 leading-relaxed">
                To manufacture precision-quality LED lighting components and solutions that meet the
                highest performance standards, delivered with responsiveness and care to every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader badge="Strengths" title="What Sets Us Apart" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.title} className="p-6 border border-gray-500 hover:border-brand-gold/50 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-heading text-brand-navy font-semibold text-lg mb-2">{item.title}</h4>
                <p className="font-body text-gray-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-white text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="font-body text-gray-300 mb-8">
            Ready to partner with a reliable LED manufacturer? Get in touch with us today.
          </p>
          <Link to="/contact">
            <Button size="lg">Contact Us <ArrowRight size={18} /></Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
