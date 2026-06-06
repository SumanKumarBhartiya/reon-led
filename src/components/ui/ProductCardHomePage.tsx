import { Link } from 'react-router-dom'
// import { ArrowRight, Zap } from 'lucide-react'
import type { Product } from '../../types'
// import { Badge } from '../ui'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
  showEnquiry?: boolean
}

export default function ProductCardHomePage({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/products/${product.category.toLowerCase().replace(/ /g, '-')}`} state={{ product }} className='flex-1'>

      <div className="bg-white border border-gray-100 shadow-sm transition-all duration-300 flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={isHovered ? product.onImage : product.offImage} />

        {/* <div className="p-3 flex flex-col flex-1">
          <Badge className="self-start mb-1 text-[10px]">{product.category}</Badge>
          <h3 className="font-semibold text-md leading-snug" style={{ fontFamily: 'sans-serif' }}>
            {product.name}
          </h3>
        </div> */}
      </div>
    </Link>
  )
}
