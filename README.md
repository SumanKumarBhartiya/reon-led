# Reon Industries Pvt. Ltd. — Website

Official website for **Reon Industries Pvt. Ltd.**, a Hosur-based LED lighting manufacturer.

Built with **React 18 + TypeScript + Vite + Tailwind CSS**.

---

## 🗂 Project Structure

```
reon-led/
├── public/
│   └── logo.png                  # Company logo
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.tsx        # Root layout (Navbar + Outlet + Footer)
│   │   │   ├── Navbar.tsx        # Responsive top navigation
│   │   │   └── Footer.tsx        # Footer with links & contact
│   │   ├── ui/
│   │   │   ├── index.tsx         # Button, Badge, SectionHeader, Card
│   │   │   ├── ProductCard.tsx   # Product card with enquiry link
│   │   │   └── EnquiryForm.tsx   # Contact/enquiry form (multi-mode)
│   │   └── sections/             # (Future: add reusable page sections here)
│   ├── data/
│   │   └── index.ts              # Nav items, products, stats, why-choose-us
│   ├── hooks/
│   │   └── useScrollAnimation.ts # Intersection Observer animation hook
│   ├── pages/
│   │   ├── HomePage.tsx          # Landing page
│   │   ├── ProductsPage.tsx      # Products with category filter
│   │   ├── AboutPage.tsx         # About / company info
│   │   ├── ContactPage.tsx       # Contact form + map
│   │   ├── CareerPage.tsx        # Job listings
│   │   ├── BlogPage.tsx          # Blog / articles
│   │   └── NotFoundPage.tsx      # 404
│   ├── services/
│   │   └── api.ts                # API layer (backend / Formspree / mailto)
│   ├── types/
│   │   └── index.ts              # TypeScript types + COMPANY constants
│   ├── App.tsx                   # Router (HashRouter for GitHub Pages)
│   ├── index.css                 # Tailwind + global styles
│   └── main.tsx                  # Entry point
├── .env.example
├── vite.config.ts                # Base path set to /reon-led/
├── tailwind.config.js
└── .github/workflows/deploy.yml  # Auto-deploy to GitHub Pages
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## ⚙️ Configuration

### 1. Change the GitHub repo name

In `vite.config.ts`, update the `base` to match your GitHub repository name:

```ts
base: '/your-repo-name/',
```

### 2. Set up form handling (pick one)

**Option A — Formspree (recommended for GitHub Pages)**
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy the Form ID
3. Create `.env` from `.env.example` and add:
   ```
   VITE_FORMSPREE_ID=your_form_id
   ```
4. Add `VITE_FORMSPREE_ID` as a GitHub Actions secret (Settings → Secrets → Actions)

**Option B — Real backend (future)**
```
VITE_API_URL=https://api.your-domain.com
```
The `POST /api/enquiry` endpoint should accept the `EnquiryFormData` type from `src/types/index.ts`.

**Option C — mailto fallback (no config needed)**
If neither env var is set, the form opens the user's default email client.

---

## 🌐 Deploy to GitHub Pages

### Automatic (recommended)
1. Push your code to the `main` branch of a GitHub repository
2. Go to **Settings → Pages → Source** → set to **GitHub Actions**
3. Every push to `main` will auto-build and deploy via `.github/workflows/deploy.yml`

### Manual
```bash
npm run deploy
```
(Uses `gh-pages` package — requires `homepage` in `package.json` if using this method)

---

## 🔄 Migrating to a Real Backend Later

When you're ready to add a backend (Node/Express, Django, etc.):

1. Set `VITE_API_URL` in your `.env`
2. Implement `POST /api/enquiry` on your server
3. In `src/App.tsx`, swap `HashRouter` → `BrowserRouter`
4. Update `vite.config.ts` base from `/reon-led/` to `/`
5. Move hosting from GitHub Pages to a server that supports URL rewrites (Vercel, Railway, VPS, etc.)

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `brand-gold` | `#B87333` | Primary CTA, accents |
| `brand-navy` | `#1B2A4A` | Text, backgrounds |
| `font-heading` | Playfair Display | All headings |
| `font-body` | Source Sans 3 | Body text, UI |

---

## 📦 Adding Products

Edit `src/data/index.ts` — add to the `PRODUCTS` array:

```ts
{
  id: 'unique-id',
  name: 'Product Name',
  category: 'Street Light Housing',  // must be a ProductCategory
  wattage: '60W',
  description: 'Short description.',
  features: ['Feature 1', 'Feature 2'],
  enquiryEnabled: true,
}
```

---

## 📄 License

© 2025 Reon Industries Pvt. Ltd. All rights reserved.
