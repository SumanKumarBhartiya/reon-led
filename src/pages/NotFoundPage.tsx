import { Link } from 'react-router-dom'
import { Button } from '../components/ui'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <p className="font-heading text-brand-gold text-8xl font-bold">404</p>
        <h1 className="font-heading text-brand-navy text-3xl font-bold mt-4 mb-3">Page Not Found</h1>
        <p className="font-body text-gray-500 mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button size="lg">Go Back Home</Button>
        </Link>
      </div>
    </div>
  )
}
