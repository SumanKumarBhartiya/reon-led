import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'
import type { Product } from '../../types'
import { Badge, Button } from '../ui'

interface ProductCardProps {
  product: Product
  showEnquiry?: boolean
}

// Placeholder image by category
const CATEGORY_COLORS: Record<string, string> = {
  'Street Light Housing': 'from-blue-900 to-brand-navy',
  'Flood Light Housing': 'from-amber-900 to-brand-navy',
  'High Bay Light Housing': 'from-emerald-900 to-brand-navy',
  'Well Glass Light Housing': 'from-purple-900 to-brand-navy',
  'Finish Goods': 'from-rose-900 to-brand-navy',
  PCB: 'from-cyan-900 to-brand-navy',
}

const CATEGORY_ICONS: Record<string, string> = {
  'Street Light Housing': '🔦',
  'Flood Light Housing': '💡',
  'High Bay Light Housing': '🏭',
  'Well Glass Light Housing': '🌟',
  'Finish Goods': '✅',
  PCB: '⚙️',
}

export default function ProductCard({ product, showEnquiry = true }: ProductCardProps) {
  const gradient = CATEGORY_COLORS[product.category] ?? 'from-gray-800 to-brand-navy'
  const icon = CATEGORY_ICONS[product.category] ?? '💡'

  return (
    <div className="bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image placeholder */}
      <div className={`bg-gradient-to-br ${gradient} h-52 flex items-center justify-center relative overflow-hidden`}>
        <div className="text-6xl opacity-60">{icon}</div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-3 left-3">
          <span className="bg-brand-gold text-white text-xs font-body font-bold px-3 py-1">
            {product.wattage}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <Badge className="self-start mb-2 text-[10px]">{product.category}</Badge>
        <h3 className="font-heading text-brand-navy font-semibold text-lg leading-snug mb-2">
          {product.name}
        </h3>
        <p className="font-body text-gray-500 text-sm leading-relaxed mb-4 flex-1">
          {product.description}
        </p>

        {/* Features */}
        <ul className="space-y-1 mb-5">
          {product.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-2 font-body text-xs text-gray-600">
              <Zap size={12} className="text-brand-gold shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <Link to={`/products/${product.id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full">
              View Details
            </Button>
          </Link>
          {showEnquiry && (
            <Link to={`/contact?product=${encodeURIComponent(product.name)}`}>
              <Button variant="primary" size="sm" className="whitespace-nowrap">
                Enquire <ArrowRight size={14} />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
