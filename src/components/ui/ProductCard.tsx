import { Link } from 'react-router-dom'
// import { ArrowRight, Zap } from 'lucide-react'
import type { Product } from '../../types'
import { Badge } from '../ui'

interface ProductCardProps {
  product: Product
  showEnquiry?: boolean
}

export default function ProductCard({ product }: ProductCardProps) {

  return (
    <Link to={`/products/detail/${product.id}`} state={{ product }} className='flex-1'>

      <div className="bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
        {/* Image placeholder */}

        <img src={product.image} />

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <Badge className="self-start mb-2 text-[10px]">{product.category}</Badge>
          <h3 className="font-heading text-brand-navy font-semibold text-lg leading-snug mb-2">
            {product.name}
          </h3>
          {/* <p className="font-body text-gray-500 text-sm leading-relaxed mb-4 flex-1">
          {product.description}
        </p> */}

          {/* Features */}
          {/* <ul className="space-y-1 mb-5">
          {product.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-2 font-body text-xs text-gray-600">
              <Zap size={12} className="text-brand-gold shrink-0" />
              {f}
            </li>
          ))}
        </ul> */}

          {/* Actions */}
          {/* <div className="flex gap-2 mt-auto">
          <Link to={`/products/detail/${product.id}`} state={{ product }} className='flex-1'>
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
        </div> */}
        </div>
      </div>
    </Link>
  )
}
