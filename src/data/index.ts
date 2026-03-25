import type { Product, NavItem } from '../types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'Products',
    path: '/products',
    children: [
      { label: 'Street Light Housing', path: '/products/street-light-housing' },
      { label: 'Flood Light Housing', path: '/products/flood-light-housing' },
      { label: 'High Bay Light Housing', path: '/products/high-bay-light-housing' },
      { label: 'Well Glass Light Housing', path: '/products/well-glass-light-housing' },
      { label: 'Finish Goods', path: '/products/finish-goods' },
      { label: 'PCB', path: '/products/pcb' },
    ],
  },
  { label: 'About Us', path: '/about' },
  // { label: 'Career', path: '/career' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export const PRODUCTS: Product[] = [
  {
    id: 'slh-24w',
    name: '24W Street Light Glass Housing',
    category: 'Street Light Housing',
    wattage: '24W',
    description: 'Durable die-cast aluminium housing designed for 24W street light applications with IP66 rating.',
    features: ['Die-cast aluminium', 'IP66 rated', 'Anti-corrosion coating', 'Easy PCB mounting'],
    enquiryEnabled: true,
  },
  {
    id: 'slh-40w',
    name: '40W Street Light Frame Housing',
    category: 'Street Light Housing',
    wattage: '40W',
    description: 'Lightweight frame-type street light housing optimised for 40W LED modules.',
    features: ['Aluminium frame', 'Thermal management fins', 'Stainless hardware', 'IK08 impact resistant'],
    enquiryEnabled: true,
  },
  {
    id: 'flh-50w',
    name: '50W Flood Light GM Housing',
    category: 'Flood Light Housing',
    wattage: '50W',
    description: 'Heavy-duty flood light housing with adjustable bracket for industrial & commercial use.',
    features: ['High-pressure die cast', 'IP65 rated', 'Adjustable tilt bracket', 'Wide beam compatibility'],
    enquiryEnabled: true,
  },
  {
    id: 'flh-100w',
    name: '100W Flood Light Down Choke Eco Housing',
    category: 'Flood Light Housing',
    wattage: '100W',
    description: 'Eco series down-choke flood light housing for 100W drivers with integrated heat sink.',
    features: ['Eco design', 'Integrated heatsink', 'IP65 rated', 'Driver cavity included'],
    enquiryEnabled: true,
  },
  {
    id: 'hbh-50w',
    name: '50-100W High Bay Glass Housing',
    category: 'High Bay Light Housing',
    wattage: '50–100W',
    description: 'Industrial-grade high bay glass housing for warehouses and factory ceilings.',
    features: ['Toughened glass diffuser', 'IP65 rated', 'Hanging / surface mount', 'Corrosion resistant'],
    enquiryEnabled: true,
  },
  {
    id: 'hbh-dome',
    name: '50-100W High Bay Dome Housing',
    category: 'High Bay Light Housing',
    wattage: '50–100W',
    description: 'Classic dome-style high bay housing delivering uniform illumination for large spaces.',
    features: ['Polycarbonate dome', 'IP65 rated', 'Excellent heat dissipation', 'Hook & chain mount'],
    enquiryEnabled: true,
  },
  {
    id: 'wgh-40w-spot',
    name: '40W Well Glass Spot Lens',
    category: 'Well Glass Light Housing',
    wattage: '40W',
    description: 'Spot lens well-glass luminaire for outdoor post-top and bollard applications.',
    features: ['Tempered glass lens', 'IP67 rated', 'Post-top compatible', 'UV stabilised'],
    enquiryEnabled: true,
  },
  {
    id: 'pcb-street',
    name: 'Street Light PCB',
    category: 'PCB',
    wattage: 'Various',
    description: 'Custom LED PCBs manufactured in-house for street light applications, available in multiple wattages.',
    features: ['High-CRI LEDs', 'MCPCB substrate', 'Custom wattage', 'RoHS compliant'],
    enquiryEnabled: true,
  },
]

export const STATS = [
  { value: '500+', label: 'Products Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '6+', label: 'Product Lines' },
  { value: '5+', label: 'Years Experience' },
]

export const WHY_CHOOSE_US = [
  {
    icon: '🏭',
    title: 'In-House Manufacturing',
    description: 'Full control over quality with our own manufacturing facility in Hosur.',
  },
  {
    icon: '🔬',
    title: 'Quality Tested',
    description: 'Every product undergoes rigorous quality testing before dispatch.',
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    description: 'Quick production cycles to meet tight project deadlines.',
  },
  {
    icon: '🔧',
    title: 'Custom Solutions',
    description: 'OEM/ODM capabilities — we build to your specifications.',
  },
  {
    icon: '🌍',
    title: 'Pan-India Reach',
    description: 'Serving clients across India with reliable logistics.',
  },
  {
    icon: '💬',
    title: 'Dedicated Support',
    description: 'Technical & after-sales support from our in-house team.',
  },
]
