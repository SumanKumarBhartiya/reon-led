import { useEffect, useState } from 'react'
import { PRODUCTS } from '../data'
import type { ProductCategory } from '../types'
import ProductCard from '../components/ui/ProductCard'
import { useParams } from 'react-router-dom'

const ALL_CATEGORIES: (ProductCategory | 'All')[] = [
  'All',
  'High Bay Light Housing',
  'Street Light Housing',
  'Flood Light Housing',
]

export default function ProductsPage() {
  const [active, setActive] = useState<ProductCategory | 'All'>('All')

  const { category } = useParams<{ category?: string }>();

  useEffect(() => {
    if (!category) return;

    const formattedCategory = category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    if (ALL_CATEGORIES.includes(formattedCategory as ProductCategory)) {
      setActive(formattedCategory as ProductCategory);
    } else {
      setActive('All');
    }
  }, [category]);

  const filtered =
    active === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === active);


  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-brand-navy py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #B87333 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <p className="font-body text-brand-gold text-sm tracking-widest uppercase mb-2">Our Range</p>
          <h1 className="font-heading text-white text-4xl md:text-5xl font-bold">Products</h1>
          <p className="font-body text-gray-300 mt-3 text-lg max-w-2xl">
            Precision-manufactured LED housings, finish goods and PCBs for every application.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 font-body text-sm font-semibold transition-all duration-200 border ${active === cat
                ? 'bg-brand-gold text-white border-brand-gold'
                : 'bg-white text-brand-navy border-gray-200 hover:border-brand-gold hover:text-brand-gold'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="font-body text-gray-400 text-sm text-center mb-8">
          Showing <span className="text-brand-navy font-semibold">{filtered.length}</span> products
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-gray-400">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
