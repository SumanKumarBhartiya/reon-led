import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CareerPage from './pages/CareerPage'
import BlogPage from './pages/BlogPage'
import NotFoundPage from './pages/NotFoundPage'

// NOTE: We use HashRouter (URL#hash routing) so that GitHub Pages
// can serve any "route" without needing server-side redirects.
// When you move to a real backend / hosting with rewrite rules,
// swap HashRouter → BrowserRouter and remove the `base` hash.

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:category" element={<ProductsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="career" element={<CareerPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
