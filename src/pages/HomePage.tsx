import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PRODUCTS, STATS, WHY_CHOOSE_US } from '../data'
import { COMPANY } from '../types'
import { SectionHeader, Button } from '../components/ui'
import ProductCard from '../components/ui/ProductCard'
import EnquiryForm from '../components/ui/EnquiryForm'

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 6)

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-brand-navy">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #B87333 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Gold accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-brand-gold via-brand-gold-light to-transparent" />

        <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text */}
          <div className="animate-fade-up">
            <span className="inline-block bg-brand-gold/20 border border-brand-gold/40 text-brand-gold-light font-body text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase mb-6">
              LED Lighting Manufacturer · Hosur, Tamil Nadu
            </span>
            <h1 className="font-heading text-white text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Illuminating{' '}
              <span className="text-brand-gold italic">Tomorrow's</span>
              <br />World with LED
            </h1>
            <p className="font-body text-gray-300 text-lg leading-relaxed mb-10 max-w-lg">
              {COMPANY.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg">
                  Explore Products <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-80 h-80">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full border-2 border-brand-gold/30 animate-ping" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-4 rounded-full border border-brand-gold/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="logo.png" alt="Reon LED" className="w-56 h-56 object-contain invert opacity-90 animate-float" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#stats"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-brand-gold transition-colors flex flex-col items-center gap-1"
        >
          <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </section>

      {/* ── Stats ───────────────────────────────────────────────────────────── */}
      <section id="stats" className="bg-brand-gold py-14">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-heading text-white text-4xl font-bold">{s.value}</p>
              <p className="font-body text-white/80 text-sm mt-1 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Products Preview ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            badge="Our Products"
            title="Premium LED Lighting Solutions"
            subtitle="From street light housings to finish goods — precision-engineered for performance and longevity."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline">
                View All Products <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            badge="Why Reon"
            title="Built on Quality & Trust"
            subtitle="We manufacture with precision and deliver with care."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, i) => (
              <div
                key={item.title}
                className="p-6 border border-gray-100 hover:border-brand-gold/40 hover:shadow-lg transition-all duration-300 group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 bg-brand-gold/10 flex items-center justify-center text-2xl mb-4 group-hover:bg-brand-gold/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-heading text-brand-navy font-semibold text-lg mb-2">{item.title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-white text-3xl md:text-4xl font-bold mb-4">
            Ready to Light Up Your Project?
          </h2>
          <p className="font-body text-gray-300 text-lg mb-8">
            Share your requirements and get a customised quote from our team.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Request a Quote <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>

      {/* ── Quick Enquiry ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeader
            badge="Enquire Now"
            title="How Can We Help?"
            subtitle="Fill the form and our team will get back to you within 24 hours."
          />
          <div className="bg-white border border-gray-100 shadow-sm p-8">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  )
}
