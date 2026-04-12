import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { NAV_ITEMS } from '../../data'
import { COMPANY } from '../../types'
import clsx from 'clsx'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [location])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white shadow-md py-1'
          : 'bg-white/95 backdrop-blur-sm py-1'
      )}
    >
      {/* Top bar */}
      <div className="bg-brand-navy text-white text-xs py-1 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="font-body">{COMPANY.address.full}</span>
          <div className="flex items-center gap-4">
            <a href={`tel:${COMPANY.phones[0]}`} className="flex items-center gap-1 hover:text-brand-gold-light transition-colors">
              <Phone size={11} />
              {COMPANY.phones[0]}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="hover:text-brand-gold-light transition-colors">
              {COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="logo.png"
              alt="Reon LED Logo"
              className="h-16 w-auto transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <p className="font-heading text-brand-navy font-bold text-lg leading-tight">
                REON INDUSTRIES
              </p>
              <p className="font-body text-brand-gold text-xs tracking-widest uppercase">
                Pvt. Ltd.
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.path}
                className="relative group"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={clsx(
                    'nav-link flex items-center gap-1 px-4 py-2 font-body font-semibold text-sm transition-colors duration-200',
                    location.pathname === item.path
                      ? 'text-brand-gold active'
                      : 'text-brand-navy hover:text-brand-gold'
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl border-t-2 border-brand-gold py-2 animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-5 py-2.5 font-body text-sm text-brand-navy hover:bg-brand-gold/10 hover:text-brand-gold transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link to="/contact" className="btn-primary ml-4 text-sm py-2.5">
              Get a Quote
            </Link>
          </nav>

          {/* Mobile menu btn */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-brand-navy"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  className="block py-2.5 px-3 font-body font-semibold text-brand-navy hover:text-brand-gold hover:bg-brand-gold/10 rounded transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-brand-gold/30 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block py-2 font-body text-sm text-gray-600 hover:text-brand-gold transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3">
              <Link to="/contact" className="btn-primary block text-center text-sm">
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
