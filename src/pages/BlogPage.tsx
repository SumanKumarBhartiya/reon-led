import { SectionHeader } from '../components/ui'

const POSTS = [
  {
    id: '1',
    title: 'Why LED Street Lights Are the Future of Urban Infrastructure',
    excerpt: 'Municipalities across India are switching to LED street lights for their energy savings, longer lifespan, and reduced maintenance costs.',
    date: 'March 10, 2025',
    category: 'Industry Insights',
    readTime: '4 min read',
  },
  {
    id: '2',
    title: 'Understanding IP Ratings for Outdoor LED Fixtures',
    excerpt: 'When choosing outdoor luminaires, IP ratings are critical. We break down what IP65, IP66, and IP67 mean and when to use each.',
    date: 'February 22, 2025',
    category: 'Technical',
    readTime: '5 min read',
  },
  {
    id: '3',
    title: 'High Bay vs Low Bay LED Lights: Which Is Right for Your Warehouse?',
    excerpt: 'Choosing between high bay and low bay LED fixtures depends on ceiling height, application, and illuminance requirements.',
    date: 'January 15, 2025',
    category: 'Buying Guide',
    readTime: '6 min read',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-brand-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #B87333 1px, transparent 0)`, backgroundSize: '40px 40px' }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <p className="font-body text-brand-gold text-sm tracking-widest uppercase mb-2">Knowledge Hub</p>
          <h1 className="font-heading text-white text-4xl md:text-5xl font-bold">Blog</h1>
          <p className="font-body text-gray-300 mt-3 text-lg max-w-xl">
            Industry insights, technical guides, and product knowledge from the Reon team.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-8">
            {POSTS.map((post) => (
              <article key={post.id} className="bg-white border border-gray-100 p-8 shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all cursor-pointer group">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-brand-gold/10 text-brand-gold text-xs font-body font-semibold px-3 py-1 rounded-full">{post.category}</span>
                  <span className="text-gray-400 text-xs font-body">{post.date}</span>
                  <span className="text-gray-400 text-xs font-body">· {post.readTime}</span>
                </div>
                <h2 className="font-heading text-brand-navy text-xl md:text-2xl font-semibold mb-3 group-hover:text-brand-gold transition-colors">
                  {post.title}
                </h2>
                <p className="font-body text-gray-500 leading-relaxed">{post.excerpt}</p>
                <p className="mt-4 font-body text-brand-gold text-sm font-semibold">Read more →</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
